import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const SITE = 'https://khrawklabs.vercel.app'

/**
 * Meta tags por rota. O site é SPA, e quem gera a prévia do link (WhatsApp,
 * Instagram, Google) não roda JavaScript: lê só o HTML. Então, no build,
 * cada rota daqui ganha uma cópia do index.html com título, descrição e
 * imagem próprios em <rota>/index.html. A Vercel serve o arquivo estático
 * antes de aplicar o rewrite do vercel.json; as outras rotas seguem no
 * index.html padrão.
 */
const META_POR_ROTA: Record<
  string,
  { titulo: string; descricao: string; imagem: string; cor?: string }
> = {
  '/projetos/sos-maringa': {
    titulo: 'SOS Maringá — app gratuito de emergência',
    descricao:
      '192, 193, 190 e 199 em um toque, alertas do INMET para Maringá, pontos de atendimento no mapa e SOS para os seus contatos. Funciona sem internet.',
    imagem: '/projetos/sos-maringa/og.png',
    cor: '#141414',
  },
  '/projetos/sos-maringa/privacidade': {
    titulo: 'Política de Privacidade — SOS Maringá',
    descricao:
      'O SOS Maringá não tem cadastro, anúncios nem rastreamento. Tudo o que você preenche fica só no seu celular.',
    imagem: '/projetos/sos-maringa/og.png',
    cor: '#141414',
  },
}

const escapar = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function metaPorRota(): Plugin {
  return {
    name: 'khrawk:meta-por-rota',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const base = bundle['index.html']
      if (!base || base.type !== 'asset') return
      const html = String(base.source)

      for (const [rota, m] of Object.entries(META_POR_ROTA)) {
        const titulo = escapar(m.titulo)
        const descricao = escapar(m.descricao)
        const meta = (atributo: string, nome: string, valor: string) =>
          `<meta ${atributo}="${nome}" content="${valor}" />`

        let saida = html
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${titulo}</title>`)
          .replace(/<meta\s+name="description"[\s\S]*?\/>/, meta('name', 'description', descricao))
          .replace(/<meta\s+property="og:title"[\s\S]*?\/>/, meta('property', 'og:title', titulo))
          .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, meta('property', 'og:description', descricao))
          .replace(/<meta\s+property="og:image"[\s\S]*?\/>/, [
            meta('property', 'og:image', SITE + m.imagem),
            meta('property', 'og:image:width', '1200'),
            meta('property', 'og:image:height', '630'),
            meta('property', 'og:url', SITE + rota),
            `<link rel="canonical" href="${SITE + rota}" />`,
          ].join('\n    '))
          .replace(/<meta\s+name="twitter:card"[\s\S]*?\/>/, meta('name', 'twitter:card', 'summary_large_image'))
        if (m.cor) {
          saida = saida.replace(/<meta\s+name="theme-color"[\s\S]*?\/>/, meta('name', 'theme-color', m.cor))
        }

        this.emitFile({
          type: 'asset',
          fileName: `${rota.slice(1)}/index.html`,
          source: saida,
        })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), metaPorRota()],
})
