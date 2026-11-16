# Tokn subsite design kit

Shared visual character, independent product pages. Keep each product's own
framework, repository, URL, and deployment. The optional Astro source includes a
small document layout, navbar, and locale helpers, with no framework dependencies,
application backend, analytics, or hosting configuration bundled.

## Contents

| File | Purpose |
| --- | --- |
| `tokn.css` | Portable tokens and opt-in visual primitives |
| `navigation.js` | Optional browser enhancement for the shared mobile menu |
| `logo.svg`, `logo-icon.svg` | Approved Tokn wordmark and mark |
| `design-language.md` | Visual decisions and review criteria |
| `prompt.md` | Reusable brief for a designer or coding agent |
| `ctl-adoption.md` | Ready-to-use downstream task for ctl's existing Bun website |
| `index.html` | Framework-independent starter with illustrative copy |
| `subsite-workbench.astro.example` | One possible composition for a tool |
| `subsite-editorial.astro.example` | An alternative composition for an idea or library |
| `astro/src/` | Optional Astro layout, navbar, browser script, locale helpers, and decorative components |
| `astro/public/` | Assets at the paths used by the Astro source |

## Use in an existing product

For ctl, start with **`ctl-adoption.md`**. It tells the downstream agent what to
read, where to implement the navbar, and how to retain ctl's asset-serving,
media, registry, and publishing contracts. Supply this entire kit folder or
archive with that task. The kit is a reviewed input; it does not apply changes
to product repositories automatically.

1. Read `design-language.md`. Give the product a concrete audience, purpose, and
   verified next action using the brief in `prompt.md`.
2. Copy `tokn.css` and the logo files into the product's public asset directory.
   Load the CSS after generic resets and before product-specific styles. Use
   `<body class="tokn-site">` or another enclosing `.tokn-site` element to opt in.
3. Keep your existing page structure when it serves the product. Use the plain
   HTML or either Astro example as a starting point only when useful; none is a
   required section order or a finished product page.
4. Adapt relative asset URLs to your app's base path. For example, a site served
   at `/ctl/` must resolve its assets under that path or use deliberate absolute
   URLs. The HTML starter's `./` URLs also work in a standalone directory.
5. Replace every placeholder and route before publication. Use real product
   evidence, accurate development status, and maintained setup/source links.
   Do not turn placeholder copy into a product claim.

## Shared navigation, independent pages

Keep the familiar navbar while choosing the product's own links and page layout.
The Tokn logo goes to the parent site; the product name goes to the product's
home page. These are separate destinations. The Astro starters use an explicit
localized `https://tokn-ai.dev/` parent URL so a subsite cannot accidentally turn
that link into its own root.

- Choose a short set of real product links. Mark a current page with
  `current: "page"`, or a current section with `current: "location"`, only when it
  represents the actual state. The component does not infer active sections.
- Supply `repository_href` and an optional `primary_action` when they help the
  visitor. Supply `alternate` only when the equivalent translated page exists.
- Desktop uses a horizontal row. On narrow containers, the compact product
  identity and language switch remain visible; the menu retains every product
  link, repository link, and primary action.
- The mobile menu is native `<details>`/`<summary>`, so it opens and its links work
  without JavaScript. The optional script adds Escape dismissal with focus
  return, link-selection dismissal, and focus handling when resizing.

The plain HTML starter includes the same navbar markup and loads
`./navigation.js`. Keep its desktop and mobile link lists equivalent when editing
them. Its single English page deliberately has no language switch. In Astro,
`Navbar.astro` renders both lists from one `links` array and imports the TypeScript
enhancement automatically. Do not wrap the navbar in another `.tokn-shell`; it
owns its responsive inner width.

## Optional Astro setup

Use this source in an Astro project; the kit does not create a project or install
Astro. The exported `astro/` directory preserves the source structure expected by
the examples:

```text
astro/
  src/
    layouts/SiteLayout.astro
    components/Brand.astro
    components/design/Navbar.astro
    components/design/Thread.astro
    components/design/Note.astro
    components/design/SectionLabel.astro
    i18n/locales.ts
    scripts/navigation.ts
  public/
    brand/tokn.css
    logo.svg
    logo-icon.svg
    favicon.svg
    favicon.ico
    og.png
    og-cn.png
```

Copy the selected files from `astro/src/` into the corresponding `src/` paths and
from `astro/public/` into `public/`. **Do not overwrite an existing layout,
locale helper, brand component, or asset.** Merge the needed behavior or rename the
kit's modules and adapt the example imports to your product's structure. The flat
CSS/logos and nested copies in the export come from the same canonical files;
choose one copy to maintain in the product repository.

For an unmodified example, save `subsite-workbench.astro.example` as
`src/components/subsites/WorkbenchPage.astro`. Its relative imports then resolve
against the included `src/` files. The editorial example follows the same pattern
as `src/components/subsites/EditorialPage.astro`. A thin English route at
`src/pages/example/index.astro` can render it:

```astro
---
import WorkbenchPage from "../../components/subsites/WorkbenchPage.astro";
---
<WorkbenchPage locale="en" />
```

The matching Chinese route at `src/pages/cn/example/index.astro` is:

```astro
---
import WorkbenchPage from "../../../components/subsites/WorkbenchPage.astro";
---
<WorkbenchPage locale="zh-CN" />
```

Replace `/example/` in the example component and both route locations together.
The included layout needs `site` in the target's Astro configuration to construct
absolute canonical and social-image URLs. For a site served at a domain root,
the default locale helper expects these routing settings:

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.com", // Replace with the product's approved public origin.
  i18n: {
    defaultLocale: "en",
    locales: ["en", { path: "cn", codes: ["zh-CN"] }],
    routing: { prefixDefaultLocale: false },
  },
});
```

This is not a deployment configuration. Keep the target project's provider and
publishing process. Replace the general Tokn social previews with product-specific
ones when available. Set the navbar's `home_href` to the Tokn parent site and
`product.href` to the product home, with each language destination checked.

### A product mounted at `/ctl/`

The included Astro layout deliberately uses root-relative asset URLs. Setting
Astro's `base` alone does not rewrite those authored URLs or the locale helper.
If the existing product is mounted at `/ctl/`, adapt `SiteLayout.astro`,
`Brand.astro` when used, navbar `logo_src`/`mark_src` and destination props, example
asset links, and `getLocalizedPath` to its established base
path. For example, assets may live at `/ctl/brand/tokn.css` and the two product
roots at `/ctl/` and `/ctl/cn/`; another existing host may use a different locale
arrangement. Derive these from the product's router instead of assuming the main
Tokn website's `/cn/ctl/` convention. Check canonical, alternate, social-image,
brand, language, CSS, and icon URLs in the built page before publication.

In another framework, use `tokn.css` and the HTML/markup directly. None of the
Astro modules is required for the shared visual language.

## Languages and accessibility

Use `lang="en"` for English and `lang="zh-CN"` for Simplified Chinese. Translate
visible copy, accessible names, metadata, and demo messages. Retain product names
and executable commands. The kit does not impose language routing; language links
must point to equivalent pages that actually exist. Keep a self canonical URL and
reciprocal language alternatives when both versions are published.

Keep real links and buttons, visible keyboard focus, useful image descriptions,
and readable defaults before JavaScript. Product motion should respect reduced
motion. Check at 320 px, a tablet width, and a desktop width; code may scroll in its
own container, but the page must not scroll sideways.

## Updating the kit

The shared source repository is `tokn-ai/tokn-ai.github.io`. Use a supplied local
export for work that has not been committed and pushed yet. Remote consumers
must use an accessible revision containing the kit; a local preview URL alone
is not a portable handoff. Record the supplied revision or snapshot in the
downstream change. Vendor the selected assets instead of hotlinking mutable
parent-site styles, so each product can review and publish updates independently.

In the Tokn web repository, run `bun run export:design -- <destination>` with a new
or empty destination directory. The exporter refuses a nonempty directory and
copies only its explicit design-asset allowlist. Export to a fresh directory when
updating; compare changes before applying them to an independently maintained
product. The exporter never publishes a site.
