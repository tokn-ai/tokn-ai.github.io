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

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`. In the repository's
GitHub Pages settings, select **GitHub Actions** as the source, then configure
the `tokn-ai.dev` DNS records for GitHub Pages.
