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
