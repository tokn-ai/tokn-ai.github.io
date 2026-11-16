# Tokn AI

The canonical launch site for [tokn-ai.dev](https://tokn-ai.dev), built with
Astro and deployed through GitHub Pages.

## Development

```sh
pnpm install
pnpm exec astro dev --background
```

The preview server can be managed with:

```sh
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm exec astro dev stop
```

## Build

```sh
pnpm run build
```

The static site is written to `dist/`.

## Landing page

The homepage introduces tokn-session and ctl through interactive examples in
`src/components/SessionDemo.astro` and `src/components/TerminalDemo.astro`.
Their conversations and terminal output are fictional, run entirely in the
browser, and have readable fallbacks without JavaScript. The page honors reduced
motion and includes a motion control.

The ctl example follows the desktop app's host sidebar, terminal tabs, and status
bar. Close a tab and reopen its session from Hosts to explore persistence; sample
session definitions live in `src/data/terminal-sessions.ts`.

Supporting projects are listed in `src/data/projects.ts`. Shared styles live in
`src/styles/`, and the research behind the page is in
[`docs/landing-page-research.md`](docs/landing-page-research.md).

## Languages

English is served at `/`; Simplified Chinese is served at `/cn/` with the
standard `zh-CN` language tag. Both routes render the shared `HomePage.astro`
component at build time, including localized demos, metadata, and social previews.
Translations live in `src/i18n/`; project copy is localized in
`src/data/projects.ts`. The header language link works without JavaScript and
preserves the current section when JavaScript is enabled. Language selection is
explicit, with no automatic redirects.

## Brand assets

The approved logo is `public/logo.svg`, shared by the header and footer.
`public/logo-icon.svg` is the standalone mark, with a 512 × 512 PNG export.
`public/favicon.svg` includes light and dark variants, and `public/favicon.ico`
contains 16, 32, and 48 pixel exports. The social preview is `public/og.svg`
with its 1200 × 630 PNG export.

The palette uses plum `#6A5A7D` and teal `#61B6AF`, with occasional
apricot `#C48257` accents. Showcase artwork sources live in `design/showcase/`.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`. In the repository's
GitHub Pages settings, select **GitHub Actions** as the source, then configure
the `tokn-ai.dev` DNS records for GitHub Pages.
