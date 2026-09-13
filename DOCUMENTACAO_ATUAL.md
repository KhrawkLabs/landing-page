# Documentacao Atual - Landing Page Khrawk Labs

## 1) Visao geral

Este repositorio contem a landing institucional da Khrawk Labs e as paginas dedicadas dos produtos `Velo` e `AuDuo`.

Objetivos:
- apresentar marca e proposta de valor;
- mostrar os produtos com o estagio real de cada um (operacao, construcao, validacao);
- direcionar visitantes para contato comercial;
- detalhar Velo e AuDuo em rotas proprias.

## 2) Estrutura

```text
landing-page/
|- .github/
|  |- dependabot.yml
|  |- workflows/
|     |- ci-security.yml
|     |- secret-scan.yml
|     |- codeql.yml
|- webapp/
|  |- public/
|  |  |- khrawk.svg
|  |  |- khrawk.png
|  |  |- favicon.ico
|  |- src/
|  |  |- components/
|  |  |  |- NavMenu.tsx
|  |  |  |- Rodape.tsx
|  |  |- hooks/
|  |  |  |- useRevelar.ts
|  |  |- pages/
|  |  |  |- App.tsx
|  |  |  |- VeloPage.tsx
|  |  |  |- AuDuoPage.tsx
|  |  |  |- main.tsx
|  |  |- styles/
|  |     |- App.css
|  |     |- NavMenu.css
|  |     |- ProjetoPage.css
|  |     |- Rodape.css
|  |- package.json
|  |- package-lock.json
|  |- vercel.json
|- .gitignore
|- README.md
|- SECURITY.md
|- DOCUMENTACAO_ATUAL.md
```

## 3) Stack

- React 19 + TypeScript
- Vite 7
- react-router-dom (roteamento)
- ESLint
- npm

Dependencias centrais:
- `react`
- `react-dom`
- `react-router-dom`

## 4) Sistema visual

Regras que sustentam o visual e devem ser respeitadas em qualquer alteracao:

- Paleta estritamente preto e branco. Nenhuma cor de destaque, nenhum gradiente, nenhum `backdrop-filter`, nenhuma sombra colorida.
- Tokens em `:root` dentro de `webapp/src/styles/App.css`:
  - `--preto` `#000000`, `--osso` `#f2efe9`
  - opacidades derivadas: `--osso-70`, `--osso-45`, `--osso-25`
  - filetes: `--filete`, `--filete-forte`
- Tipografia (carregada em `webapp/index.html`):
  - `--display` Space Grotesk — titulos e corpo
  - `--mono` JetBrains Mono — rotulos, metadados e selos de status
  - `--serifa` Instrument Serif italico — destaque pontual dentro de titulos
- Hierarquia vem de tamanho de tipo, filete de 1px e espaco vazio. Nao usar caixa colorida para separar bloco.
- Grao de filme aplicado em `body::after` via SVG `feTurbulence` inline.
- Bordas retas (`border-radius: 0`) em todo o sistema.
- `prefers-reduced-motion` desliga o ticker e as transicoes.
- Titulo do hero alinhado a direita, com a marca a esquerda: a borda reta do
  texto encosta na mesma margem do resto da pagina. No mobile volta para a
  esquerda, porque empilhado o alinhamento perde a referencia.

### Revelacao ao rolar (`webapp/src/hooks/useRevelar.ts`)

Elementos com `data-revelar` aparecem ao entrar na viewport. Deliberadamente
contido: 10px de deslocamento e 460ms. O padrao inflado (40px, 800ms, cascata
em tudo) e a assinatura visual de pagina gerada automaticamente.

Regras que devem ser mantidas em qualquer alteracao:

- **O hero fica de fora.** Conteudo acima da dobra aparecendo em fade e outro
  vicio de pagina automatica.
- **Revela uma vez so.** Reanimar ao rolar de volta cansa em leitura longa.
- **Escalonamento apenas onde varios itens entram juntos** (`.principios` e
  `.blocos`, lado a lado). Em lista vertical o proprio scroll ja revela um a
  um; escalonar ali criaria a cascata artificial que se quer evitar.
- **O conteudo do site depende deste codigo para ficar visivel**, entao ha dois
  caminhos independentes: IntersectionObserver e listener de rolagem. O
  estrangulamento do listener e por relogio e **nao** por `requestAnimationFrame`,
  que nao dispara em aba de segundo plano nem em pagina que nao compoe quadros
  — exatamente quando a rede de seguranca precisa funcionar.
- O estado escondido vive sob `.com-revelacao`, classe aplicada por um script
  inline no `index.html` antes da primeira pintura. **Sem JS a classe nunca
  entra e a pagina renderiza inteira.** Nao mover esse estado para o CSS base.

## 5) Front-end atual

### Rotas (`webapp/src/pages/main.tsx`)

- `/` -> landing principal
- `/projetos/velo` -> pagina detalhada do Velo
- `/projetos/auduo` -> pagina detalhada do AuDuo
- `*` -> redireciona para `/`
- rotas diretas em producao sao suportadas via rewrite SPA em `webapp/vercel.json`

### Pagina principal (`webapp/src/pages/App.tsx`)

Secoes:
1. Hero (titulo, ficha tecnica, CTAs)
2. Ticker de stack
3. Trabalhos (`#produtos`) — vitrine numerada com selo de estagio
4. A empresa (sobre)
5. Metodo (tres principios)
6. Contato
7. Rodape

A vitrine e uma lista com filetes, nao uma grade de cards. Nao e catalogo: mostra o
tipo de problema resolvido e o estagio real de cada frente, em ordem de
maturidade. Sao seis linhas:

1. Velo — `Link` para a pagina do produto. Em operacao.
2. Manutencao em Campo — `<a>` para o WhatsApp com mensagem de validacao. Em
   validacao; serve de isca para achar empresas de climatizacao.
3. AuDuo — `Link` para a pagina do laboratorio. Em construcao.
4. Gestao de Aluguel — `<a>` para o WhatsApp com mensagem propria. Em estudo;
   serve de isca para achar o primeiro proprietario. Nunca usar o apelido
   interno do Notion como nome publico (risco juridico de marca).
5. PowerTrain — sem link. Em estudo.
6. Sistemas sob medida — `<a>` para o WhatsApp com mensagem de orcamento.

Regra de entrada na vitrine: so entra o que existe ou o que se esta ativamente
procurando alguem para validar. Ideia sem nenhum dos dois nao entra — dilui o
Velo. Estagio tem que ser o real; "Em estudo" e o selo para o que ainda esta no
papel.

O CTA da secao Contato usa mensagem generica. Todas as linhas invertem para
fundo osso no hover.

O numero de telefone do WhatsApp aparece em `App.tsx` (constante `WHATSAPP`,
base das mensagens), no rodape e na secao de contato — trocar nos tres.

### Paginas de produto (`VeloPage.tsx`, `AuDuoPage.tsx`)

Compartilham `webapp/src/styles/ProjetoPage.css`. Estrutura comum:
- hero com link de volta, rotulos, selo de status, resumo e ficha tecnica;
- tres blocos: problema, publico, solucao;
- lista numerada de recursos;
- bloco tecnico com lista de stack;
- CTA final com navegacao para o outro produto.

Comportamento:
- ao abrir a rota, a pagina inicia no topo (`scrollTo(0,0)`).

A pagina do AuDuo traz um bloco `.nota` deixando explicito que e projeto pessoal, sem monetizacao.

### Navegacao (`webapp/src/components/NavMenu.tsx`)

- menu desktop e mobile (breakpoint 880px);
- links para secoes da landing (`/#produtos`, `/#empresa`, `/#metodo`);
- CTA `Contato` direcionando para `/#contato`;
- fechamento com `Escape`, bloqueio de scroll e `hidden` no menu mobile fechado.

## 6) Marca

- Vetor principal: `webapp/public/khrawk.svg` (falcao, tracado a partir do PNG oficial).
- Complementos: `khrawk.png` (512px, apple-touch-icon) e `favicon.ico` (16/32/48px).
- O SVG e usado na nav, no hero e no rodape; o `.ico` e o favicon da aba.
- Ao substituir a marca, trocar os tres arquivos — nenhum outro asset de marca
  existe no repositorio.

## 7) Execucao local

```bash
cd webapp && npm install && npm run dev
```

Comandos de qualidade:

```bash
cd webapp && npm run lint && npm run build
```

## 8) CI e seguranca

Pipelines ativos em GitHub Actions:
- `ci-security.yml` (lint + build + audit)
- `secret-scan.yml` (TruffleHog OSS)
- `codeql.yml` (analise estatica)

Dependabot configurado para:
- npm em `/webapp`
- GitHub Actions no repositorio

## 9) Deploy

Deploy em Vercel.

Projeto:
- `https://khrawklabs.vercel.app`

Configuracao de rota:
- `webapp/vercel.json` com rewrite de `/(.*)` para `/index.html`.

## 10) Pendencias recomendadas

1. Criar pagina dedicada de Manutencao em Campo quando o produto sair da validacao.
2. Revisar periodicamente CTA e textos de conversao.
3. Opcional: adicionar analytics para acompanhar origem de contatos.
