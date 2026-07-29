# Khrawk Labs Page

Landing page institucional da Khrawk Labs, com destaque para produtos e conversão de contato comercial.

## Sobre

Este repositório contém a aplicação web da landing da Khrawk, com foco em:

- posicionamento de marca;
- apresentação de projetos;
- encaminhamento para contato;
- página dedicada do produto `SOS Maringá`.

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
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  │  ├─ App.tsx
│  │  │  ├─ SosMaringaPage.tsx
│  │  │  └─ main.tsx
│  │  └─ styles/
│  ├─ package.json
│  ├─ vercel.json
│  └─ vite.config.ts
├─ DOCUMENTACAO_ATUAL.md
├─ SECURITY.md
└─ README.md
```

## Executar localmente

```bash
cd webapp
npm install
npm run dev
```

## Comandos úteis

```bash
cd webapp
npm run lint
npm run build
npm run preview
```

## Rotas atuais

- `/` -> landing principal
- `/projetos/sos-maringa` -> página dedicada do produto SOS Maringá

## Deploy

Deploy de produção via Vercel.

Observação importante para SPA:

- o arquivo `webapp/vercel.json` define rewrite para `index.html`, garantindo que rotas diretas como `/projetos/sos-maringa` funcionem sem quebra.

Ambiente já validado no projeto:

- `https://khrawklabs.vercel.app`
