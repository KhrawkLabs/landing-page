/**
 * Notícias de Maringá e região para o app SOS Maringá: lê os feeds RSS públicos dos portais
 * e devolve só título, portal, hora e link. O texto e as fotos continuam no site de cada um.
 *
 * GET /api/noticias → { updatedAt, items: [{ id, title, url, source, publishedAt }] }
 * A Vercel guarda a resposta por 10 minutos, então os portais recebem poucas consultas.
 */

interface Item {
  title: string
  url: string
  publishedAt: string
  categories: string[]
}

interface Source {
  name: string
  feed: string
  /** Só vale link deste domínio. */
  host: string
  accept: (item: Item) => boolean
}

const REGION =
  /maring|sarandi|pai[cç]andu|marialva|mandagua[cç]u|mandaguari|astorga|[aâ]ngulo|igua?ra[cç]u|itamb[eé]|doutor camargo|ivatuba|nova esperan[cç]a|presidente castelo branco|santa f[eé]|norte e noroeste|noroeste do paran|norte do paran/i

const aboutRegion = (item: Item) => REGION.test(`${item.title} ${item.categories.join(' ')}`)

const SOURCES: Source[] = [
  {
    name: 'GMC Online',
    feed: 'https://gmconline.com.br/noticias/cidade/feed/',
    host: 'gmconline.com.br',
    accept: () => true,
  },
  {
    name: 'Maringá Post',
    feed: 'https://maringapost.com.br/category/cidade/feed/',
    host: 'maringapost.com.br',
    // A editoria "Cidade" também recebe notícia do estado e do país.
    accept: (item) => REGION.test(item.title),
  },
  {
    name: 'CBN Maringá',
    feed: 'https://www.cbnmaringa.com.br/feed',
    host: 'cbnmaringa.com.br',
    // Colunas ("CBN Rural", "CBN Beleza"…) ficam de fora; a etiqueta "maringá" vem em quase tudo.
    accept: (item) => REGION.test(item.title) && !item.categories.some((c) => /^CBN /i.test(c)),
  },
  {
    name: 'O Maringá',
    feed: 'https://omaringa.com.br/noticias/feed/',
    host: 'omaringa.com.br',
    accept: aboutRegion,
  },
  {
    name: 'g1 Norte e Noroeste',
    feed: 'https://g1.globo.com/rss/g1/pr/norte-noroeste/',
    host: 'g1.globo.com',
    accept: (item) => item.url.includes('/pr/norte-noroeste/') && REGION.test(item.title),
  },
  {
    name: 'Defesa Civil do Paraná',
    feed: 'https://www.defesacivil.pr.gov.br/rss.xml',
    host: 'defesacivil.pr.gov.br',
    accept: () => true,
  },
]

const TIMEOUT_MS = 8_000
const MAX_BYTES = 2_000_000
const MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000
const MAX_PER_SOURCE = 12
const MAX_ITEMS = 40

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }

function decode(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (whole, code: string) => {
    if (code[0] !== '#') return ENTITIES[code.toLowerCase()] ?? whole
    const n = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10)
    return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : ''
  })
}

/** Texto puro: sem CDATA, sem marcação, sem espaço sobrando. */
function clean(raw: string): string {
  const inner = raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
  return decode(decode(inner).replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim()
}

function tag(xml: string, name: string): string {
  return clean(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i').exec(xml)?.[1] ?? '')
}

export function parseFeed(xml: string): Item[] {
  return [...xml.matchAll(/<item[\s>][\s\S]*?<\/item>/gi)].flatMap(([item]) => {
    const time = Date.parse(tag(item, 'pubDate'))
    const title = tag(item, 'title').slice(0, 220)
    const url = tag(item, 'link')
    if (!title || !Number.isFinite(time)) return []
    const categories = [...item.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/gi)].map((m) => clean(m[1]))
    return [{ title, url, publishedAt: new Date(time).toISOString(), categories }]
  })
}

function validUrl(url: string, host: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' && (parsed.hostname === host || parsed.hostname.endsWith(`.${host}`))
  } catch {
    return false
  }
}

const key = (title: string) =>
  title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9 ]/g, '')
    .split(' ')
    .slice(0, 8)
    .join(' ')

async function readSource(source: Source, now: number) {
  const response = await fetch(source.feed, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: {
      Accept: 'application/rss+xml, application/xml, text/xml, */*',
      'User-Agent': 'Mozilla/5.0 (compatible; RSS reader)',
    },
  })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const xml = (await response.text()).slice(0, MAX_BYTES)
  const items = parseFeed(xml)
  if (items.length === 0) throw new Error('feed vazio')
  return items
    .filter((item) => {
      const age = now - Date.parse(item.publishedAt)
      // Feed com a hora adiantada não pode ficar preso no topo.
      return age <= MAX_AGE_MS && age > -60 * 60 * 1000 && validUrl(item.url, source.host) && source.accept(item)
    })
    .slice(0, MAX_PER_SOURCE)
    .map(({ title, url, publishedAt }) => ({ id: url, title, url, source: source.name, publishedAt }))
}

export async function collectNews(now = Date.now()) {
  const results = await Promise.allSettled(SOURCES.map((source) => readSource(source, now)))
  const failed = SOURCES.filter((_, i) => results[i].status === 'rejected').map((source) => source.name)
  const seen = new Set<string>()
  const items = results
    .flatMap((result) => (result.status === 'fulfilled' ? result.value : []))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .filter((item) => {
      const id = key(item.title)
      if (seen.has(id)) return false
      seen.add(id)
      return true
    })
    .slice(0, MAX_ITEMS)
  return { items, failed }
}

export async function GET(): Promise<Response> {
  const { items, failed } = await collectNews()
  const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8' }
  if (failed.length === SOURCES.length) {
    return new Response(JSON.stringify({ error: 'Nenhum portal respondeu' }), {
      status: 502,
      headers: { ...headers, 'Cache-Control': 'no-store' },
    })
  }
  return new Response(JSON.stringify({ updatedAt: new Date().toISOString(), items, failed }), {
    headers: { ...headers, 'Cache-Control': 'public, max-age=60, s-maxage=600, stale-while-revalidate=3600' },
  })
}
