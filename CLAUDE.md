# Portfólio do Michel Araujo

Site pessoal de Michel Ribeiro Araújo, Product Designer Sênior, em
https://mikhaelangelo.com.br. É a peça central da busca de emprego dele: quebrar
este site tem custo real.

## O essencial em 30 segundos

- **SPA** em Vite 6 + React 18 + react-router 7 + Tailwind 4 + Radix/shadcn + `motion`.
- **6 rotas**: `/` mais cinco cases em `/case/<slug>`.
- **Hospedagem**: Cloudflare **Workers** (não Pages), Worker `meuportfolio`.
- **Deploy**: automático a cada push no `main`. Build `npm run build`, deploy
  `npx wrangler deploy`.
- **Origem**: o código nasceu como export do Figma Make. O Figma **não hospeda mais
  nada** e não é fonte de verdade. Este repositório é.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/ (roda o prebuild de imagens antes)
npm run preview  # serve o dist/ localmente
```

## Regras que não se negociam

Cada uma destas custou um deploy quebrado ou um problema em produção. Elas existem
porque o caminho óbvio é o errado.

### 1. Workers, não Pages

O roteamento de SPA vive em `wrangler.jsonc`, na chave `assets.not_found_handling`.

**Nunca crie `public/_redirects`.** Em Cloudflare Pages aquele arquivo com
`/* /index.html 200` é o caminho padrão; em Workers ele é recusado com
`Infinite loop detected in this rule` e derruba o deploy. Quase todo tutorial da
internet assume Pages.

O campo `name` do `wrangler.jsonc` precisa bater com o nome do Worker (`meuportfolio`),
senão o deploy publica no lugar errado.

### 2. Case novo mexe em três arquivos, sempre juntos

| Arquivo | O que entra |
|---|---|
| `src/app/routes.ts` | a rota |
| `src/app/seo.ts` | título e descrição próprios |
| `public/sitemap.xml` | a URL |

Esquecer o `seo.ts` devolve o case ao título genérico, e ele volta a competir com os
outros cases na busca como se fosse a mesma página.

**Case ainda em construção:** entra normalmente nos três arquivos, menos o
`sitemap.xml`, e o slug vai para o `Set` `RASCUNHOS` do `seo.ts`. A página continua
aberta por link direto, mas sai da busca com `noindex`. **Para publicar, tire o slug
do `RASCUNHOS` e devolva a linha no `sitemap.xml` — as duas coisas juntas.**

### 3. Derivado de imagem não entra no git

A fonte fica em `src/imports/`. Os WebP são gerados no `prebuild` por
`scripts/optimize-images.mjs`, dentro de `src/imports/generated/`, que está no
`.gitignore`.

Contexto: as duas imagens do card de perfil eram PNG de 2048px com ~6,6 MB cada,
exibidas em círculos de 128 e 52 pixels. O site publicado pesava ~14,6 MB. Hoje pesa
740 KB. Não reintroduza imagem grande sem passar pelo script.

### 4. O GA4 conta por rota, de propósito

`index.html` carrega a tag do Google com **`send_page_view: false`**. A contagem
inteira sai do hook `usePageView` no `src/app/Root.tsx`.

Isso não é firula. Numa SPA a tag padrão dispara só na primeira carga: os cinco cases
apareceriam para sempre com zero visualizações. **Religar o envio automático duplica a
home e não conserta os cases.**

`useDocumentMeta` roda antes de `usePageView` porque o `page_view` lê `document.title`.
Mantenha essa ordem.

### 5. `@make-kits/design-system` está banido

Pacote privado do Figma, retorna 404 no registry público e quebra o build na nuvem.
Era importado em uma linha de `src/styles/index.css` e foi removido sem impacto visual.
Nada pode reintroduzi-lo.

### 6. Compile antes de entregar

`npm run build` sempre. Quando a mudança for visível, valide também em navegador
headless (Playwright está nas devDependencies) antes de dizer que funciona.

## Mapa dos arquivos que importam

```
index.html                      meta tags, GA4, Open Graph
wrangler.jsonc                  config do Cloudflare Workers
scripts/optimize-images.mjs     gera os WebP no prebuild
public/robots.txt               aponta o sitemap
public/sitemap.xml              as 6 URLs
src/app/routes.ts               as rotas
src/app/seo.ts                  título e descrição por rota
src/app/Root.tsx                layout, header, footer, useDocumentMeta, usePageView
src/app/pages/Home.tsx          home (grande: ~126 KB, herança do export do Figma Make)
src/app/pages/Case*.tsx         um arquivo por case
src/imports/                    imagens e SVGs (fontes, não derivados)
```

## Convenções

- **Comentário explica o porquê, não o quê.** Regra não óbvia merece uma frase dizendo
  qual problema ela evita.
- **Português** em comentários e mensagens de commit, sem acento nas mensagens de commit.
- Mensagem de commit diz **o que mudou e por quê**, não só o arquivo.
- Tailwind para layout; estilo inline só onde o export original já usava.
- Fontes (Playfair Display, Outfit, DM Mono) vêm do Google Fonts, injetadas em
  `src/app/App.tsx`.

## Verdade acima de estética

Os textos deste site descrevem a carreira real do Michel e são lidos por recrutadores.
Já houve no ar uma afirmação falsa sobre a demissão dele e um link de LinkedIn apontando
para um perfil inexistente.

Se você encontrar afirmação factualmente errada, número sem lastro ou link quebrado,
**aponte na hora**, mesmo que ninguém tenha pedido. E não invente copy nova para os
cases: os textos são dele.
