# Khrawk Labs — Landing Page

Landing page institucional da Khrawk Labs, com destaque para os produtos do estúdio e conversão de contato comercial.

## Sobre

Este repositório contém a aplicação web da landing da Khrawk Labs, com foco em:

- posicionamento de marca;
- apresentação dos produtos e do estágio real de cada um;
- encaminhamento para contato;
- páginas dedicadas dos produtos `Velo` e `AuDuo`.

## Identidade visual

- Paleta estritamente preto e branco: `#000000` de fundo, `#f2efe9` (osso) de texto.
- Sem gradiente, sem glassmorphism, sem sombra colorida. Hierarquia vem do tamanho do tipo, do filete de 1px e do espaço vazio.
- Tipografia: **Space Grotesk** (títulos e texto), **JetBrains Mono** (rótulos e metadados), **Instrument Serif** itálico (destaques pontuais).
- Textura de grão aplicada via overlay SVG em `body::after`.
- Tokens centralizados em `webapp/src/styles/App.css` (`:root`).

## Stack

| Camada | Tecnologia |
| --- | --- |
| Front-end | React 19 + TypeScript |
| Build | Vite 7 |
| Roteamento | react-router-dom |
| Qualidade | ESLint |
| Deploy | Vercel |

## Estrutura principal

```text
landing-page/
├─ .gitignore
├─ webapp/
│  ├─ public/
│  │  ├─ khrawk.svg          # marca (falcão, vetor)
│  │  ├─ khrawk.png          # apple-touch-icon
│  │  └─ favicon.ico         # 16/32/48px
│  ├─ src/
│  │  ├─ hooks/
│  │  │  └─ useRevelar.ts    # revelação ao rolar
│  │  ├─ components/
│  │  │  ├─ NavMenu.tsx
│  │  │  └─ Rodape.tsx
│  │  ├─ pages/
│  │  │  ├─ App.tsx          # landing principal
│  │  │  ├─ VeloPage.tsx
│  │  │  ├─ AuDuoPage.tsx
│  │  │  └─ main.tsx         # rotas
│  │  └─ styles/
│  │     ├─ App.css          # tokens + base + home
│  │     ├─ NavMenu.css
│  │     ├─ ProjetoPage.css  # compartilhado pelas páginas de produto
│  │     └─ Rodape.css
│  ├─ package.json
│  ├─ vercel.json
│  └─ vite.config.ts
├─ DOCUMENTACAO_ATUAL.md
├─ SECURITY.md
└─ README.md
```

## Executar localmente

```bash
cd webapp && npm install && npm run dev
```

## Comandos úteis

```bash
cd webapp && npm run lint && npm run build
```

## Rotas atuais

- `/` -> landing principal
- `/projetos/velo` -> página dedicada do produto Velo
- `/projetos/auduo` -> página dedicada do produto AuDuo
- `*` -> redireciona para `/`

## Trabalhos em destaque

| Frente | Categoria | Estágio |
| --- | --- | --- |
| Velo | SaaS · Oficinas mecânicas | Em operação |
| Manutenção em Campo | SaaS · Climatização · PMOC | Em validação (CTA de conversa via WhatsApp) |
| AuDuo | Laboratório · Mobile · Tempo real | Em construção |
| Gestão de Aluguel | SaaS · Proprietários de imóveis | Em estudo (CTA de conversa via WhatsApp) |
| PowerTrain | App · Treino e progresso | Em estudo |
| Sistemas sob medida | Serviço · Para a sua empresa | Sob demanda (orçamento via WhatsApp) |

## Deploy

Deploy de produção via Vercel.

Observação importante para SPA:

- o arquivo `webapp/vercel.json` define rewrite para `index.html`, garantindo que rotas diretas como `/projetos/velo` funcionem sem quebra.

Ambiente do projeto:

- `https://khrawklabs.vercel.app`
