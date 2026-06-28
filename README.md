# T—RAMOS DEV

Portfólio evolutivo da marca pessoal T—RAMOS DEV.

## Run locally

```bash
pnpm install
pnpm dev
```

## Deploy on Netlify

Connect the directory that contains `package.json`, `pnpm-lock.yaml`,
`netlify.toml`, and the `app/` directory. In this workspace, that directory is
`Portfólio` itself, not its parent folders.

Netlify settings:

- Base directory: leave empty when `Portfólio` is the repository root.
- Build command: `pnpm run build`.
- Publish directory: `out`.
- Package manager: pnpm, detected from `pnpm-lock.yaml`.

If `Portfólio` is stored inside a larger Git repository, set the Netlify Base
directory to `Portfólio`. Do not set a `basePath` in Next.js and do not add an
SPA rewrite to `index.html`. Next.js generates a complete static site in
`out/`, including `index.html` and `404.html`.

For a manual deploy, run `pnpm run build` first and upload only the generated
`out/` directory. Uploading the source directory manually does not run the
Netlify build command.

## Architecture

- `app/` owns routing, metadata, global tokens, and responsive styling.
- `components/sections/` contains one module for each page section.
- `components/ui/` contains the reusable Design System primitives.
- `components/brand/` contains the vector logo system shared by Hero, Navbar, Footer, and favicon.
- `components/` contains cross-cutting experiences such as navigation, locale, loading, cursor, and command palette.
- `data/i18n.ts` centraliza o conteúdo em português, inglês e espanhol, separado da apresentação.
- `components/locale-context.tsx` gerencia idioma e persistência sem acoplar os componentes a uma biblioteca específica.

## Design decisions

- The official purple palette is encoded as semantic CSS tokens. Purple is reserved for actions, focus, and progress.
- The V1 is intentionally dark-only, reducing theme complexity while the brand identity is consolidated.
- The artificial loading screen was removed because it delayed LCP without improving the experience.
- A canonical production URL should only be added after the official domain is confirmed.
- Set `NEXT_PUBLIC_SITE_URL` to that final public origin so generated Open Graph URLs resolve correctly outside Vercel.
- Verified platform URLs are centralized in `data/i18n.ts`; platforms without an official URL remain visible as honest, non-interactive status cards.
- `app/opengraph-image.tsx` generates the social image at build time with the official palette.
- Os projetos usam estados honestos — em desenvolvimento, laboratório ou planejado — até existirem cases reais com evidências.
- As ilustrações são feitas com CSS/SVG, evitando mídia pesada sem sacrificar identidade.
- Motion respects `prefers-reduced-motion`; essential navigation and content never depend on animation.
- The page is statically rendered for fast delivery and includes semantic landmarks, structured headings, descriptive labels, keyboard focus states, and persistent theme preferences.
- Filtros e busca operam localmente. A paleta de comandos oferece navegação por teclado com `Ctrl/⌘ + K`.
- O conteúdo desacoplado permite adicionar futuramente uma camada de Libras por seção, com vídeos e transcrições associados a chaves estáveis, sem duplicar a interface.

GitHub e demo permanecem desabilitados até existirem URLs públicas reais para o projeto.
