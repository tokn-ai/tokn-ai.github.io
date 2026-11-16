# ctl handoff: adopt the shared Tokn navbar

Use this as the task prompt in the **ctl repository** with the current Tokn design
kit supplied as a local folder, archive, or accessible source checkout.

## Task

Update ctl's existing website to adopt Tokn's shared navbar and supporting visual
styles. Implement the change in ctl, run its checks, and provide a local preview.
Keep ctl's page composition, product interface, media, and useful interactions.
The shared navbar is the priority; this is not a request to rebuild the entire
site or migrate it to Astro.

The design source is `tokn-ai/tokn-ai.github.io`. ctl owns its implementation and
deployment. Consume the supplied kit as a reviewed snapshot, not a runtime
dependency on the parent site's stylesheet. Future kit changes need a new
downstream review; exporting or publishing the kit does not update ctl by itself.

## Locate and read the inputs

Use the provided local export when available. If only a GitHub revision is
provided, verify that the required files exist at that revision before starting.
Do not assume uncommitted local changes are already on GitHub or the live site.
If the source is unavailable, report the missing input rather than substituting
an older live page as the specification.

Read these files from the kit:

| Exported kit | Source-repository equivalent |
| --- | --- |
| `README.md` | `templates/README.md` |
| `design-language.md` | `docs/product-pages.md` |
| `prompt.md` | `templates/product-page.prompt.md` |
| `tokn.css` | `public/brand/tokn.css` |
| `index.html` | `templates/subsite.html` |
| `navigation.js` | Browser output compiled from `src/scripts/navigation.ts` |
| `logo.svg`, `logo-icon.svg` | The corresponding files in `public/` |

For a source checkout, run `bun run export:design -- <new-directory>` from that
checkout to obtain the browser-ready script and complete inputs. Never load raw
TypeScript in the published page. The exported Astro components are reference
material; ctl does not need them.

Read ctl's repository instructions and current files before editing:

- `apps/website/README.md`, `index.html`, `site.css`, and `site.ts`.
- `scripts/ci/stage-pages-landing.mts` and its relevant tests.
- `.github/workflows/bundles.yml`, especially website build and Pages staging.
- The current product README for accurate product links and setup information.

## Integrate in ctl

1. Reuse the shared navbar markup from the HTML starter. Keep the Tokn parent
   home link (`https://tokn-ai.dev/`) distinct from the ctl home link. Resolve the
   product root and assets against ctl's existing `/ctl/` publishing arrangement;
   use relative local assets where appropriate. Do not create a second ctl page
   in the parent website repository.
2. Choose ctl's real section/documentation destinations, source link, and an
   appropriate setup action. Retain every destination in the mobile menu.
   Do not show a Chinese switch unless ctl actually has an equivalent Chinese
   page; the parent's `/cn/` page is not a ctl translation.
3. Place the navbar outside the existing `.page` width wrapper: the navbar owns
   its responsive inner width. Scope or remove old navbar selectors that would
   override the shared controls. Keep product-body styles and actual app colors
   independent. Add the minimal class hooks needed by the shared CSS.
4. Vendor the CSS, browser script, and logo assets into ctl's website source.
   Inspect `site.ts`'s explicit asset map: it supplies both local serving and
   build output. Register every added file there; changing only HTML references
   will leave missing assets. Prefer the existing flat asset convention unless
   intentionally adding support for nested output directories.
5. Inspect `stage-pages-landing.mts`: it already stages additional regular landing
   assets. Verify the new files survive this step; do not introduce an unnecessary
   staging rewrite. Preserve `bundles/`, `.nojekyll`, the `ctl-bundle-pages`
   marker, channel/catalog paths, collision checks, and size limits. Do not replace
   the bundle Pages workflow or copy the whole kit into its public artifact.
6. Preserve `<!-- demo:media -->` and `<!-- demo:gallery -->` injection points,
   media placeholders, controlled playback, hosted-media checks, relevant IDs and
   ARIA references, and screenshot/download links. Do not modify protocol behavior,
   bundle formats, release automation, or runtime code for this website change.

## Verify before handing back

- Run `bun apps/website/site.ts build`. Preview with
  `bun apps/website/site.ts serve`. If staging/publication behavior changes, run
  `pnpm scripts:test:ci`; focused coverage includes
  `scripts/ci/stage-pages-landing.test.mts` and
  `scripts/ci/restore-bundle-pages.test.mts`. Recheck these commands against the
  current repository instructions before running them.
- Confirm new CSS, scripts, and logos resolve in both the local preview and
  built/staged output, including under `/ctl/`. Verify registry content survives
  staging; a working local page alone does not establish that publishing works.
- Use the existing hosted-media verification when its configuration is available.
  If unavailable locally, state that limit and retain the CI check unchanged.
- Check desktop, tablet, and 320px layouts. Every navigation link must remain
  reachable without JavaScript. Check Enter/Space opening, Escape closing,
  focus after selection and resizing, and visible skip links.
- Verify parent-home versus product-home links, actual current-page states,
  source/setup destinations, and any locale links. Preserve product content and
  media, and avoid personal machine information in files or screenshots.
- Report changed files, kit source/revision or supplied snapshot used, checks,
  and a current local screenshot. If a PR is requested, follow ctl's repository
  guidance and state `Protocol changes: none.` when applicable.

Keep the implementation local for review. Do not commit, push, or publish unless
the user requests it in the downstream task. Do not use OpenAI-managed hosting.
