# Apply the Tokn visual language

Copy this prompt into the target site's coding/design session and fill the brief.
Use it with this repository or an exported design pack. Adapt the composition to
the product; the starter files are optional examples.

For ctl, use `ctl-adoption.md` in the exported pack
(`templates/ctl-adoption.prompt.md` in the source repository) as the concrete
task. It covers ctl's existing Bun website and bundle-registry publishing path.

---

Create or improve this product's site using the Tokn visual language. Preserve its
individual expression and existing technical contract. Deliver the implementation,
a working local preview, and a concise verification report. Keep it local unless
I explicitly request publishing.

## Brief

- Product and repository: `<name and authoritative source>`
- Target website location: `<repo-relative directory or repository>`
- Existing public URL, base path, and deployment: `<inspect if unknown>`
- Navigation destinations: `<parent home, product home, main product links, source, and optional primary action; inspect if unknown>`
- Main visitor and task: `<who needs to accomplish what>`
- Most useful outcome: `<one specific result>`
- Expression to explore: `<workbench / editorial / app-led / another direction / decide>`
- Relevant proof: `<interface, screenshot, bounded simulation, example, or result>`
- Supported languages: `<preserve existing support; add only as requested>`
- Known constraints: `<product facts and site contracts to preserve>`
- Source documentation and releases: `<URLs or repo-relative paths>`

Inspect the target project and provided sources before asking for missing details.
Choose routine design details yourself. Ask only when an unresolved fact materially
changes the product promise, intended action, or a technical contract that cannot
be safely inferred.

## Read first

Read the target repository's instructions and existing build/deployment setup.
Read the Tokn kit's README, `design-language.md` (`docs/product-pages.md` in the source repository), the portable
`tokn.css`, and the relevant starter examples. In the source repository, the CSS
is `public/brand/tokn.css`, and `/design/` shows the shared materials in contrasting
compositions. Inspect the current target site and product interface.

Use the actual CSS and component APIs as the source of truth. Astro projects may
reuse the small design components and `SiteLayout.astro`; other frameworks may
reuse the CSS and semantic markup without adding Astro. Consult the framework's
current official documentation for the changes you make.

## Shared language, free composition

Use the approved logo, warm paper, plum and teal, readable technical detail, and
approachable confidence. The portable CSS is opt-in under `tokn-site`; scope it to
the area adopting the kit so it does not unexpectedly alter embedded interfaces.
Use system sans for reading, serif emphasis where it adds expression, and
monospace for code and technical labels. Keep Chinese serif emphasis upright.
Use apricot sparingly and preserve the actual product UI's palette.

Reuse the shared navbar and familiar controls. Use threads, notes, fine rules,
soft surfaces, or section marks where useful. You do not need every motif.
Decoration should guide attention or
invite a useful action rather than fill space.

You are free to choose the layout, hero, section order, content density,
and product interaction model. Product-specific navigation links sit within the
shared navbar. Start from a workbench or editorial example if helpful,
combine them, or compose the page yourself. Do not force the product into a fixed page
anatomy, shared content schema, or repeated card grid. Keep existing layouts and
interactions that already express the product well.

Make the product category and concrete outcome discoverable early. Give expressive
headlines a clear explanation nearby. Keep RSI as the broader mission where it
fits, without replacing the tool's purpose with a vague “work with AI” promise or
claiming an autonomous integration that has not been built.

## Shared navbar, product-specific destinations

Use the kit's navbar component or equivalent semantic markup in the target
framework. Keep the Tokn parent-home link separate from the product-name link to
its own home. Choose a short set of useful product links, keep the source link
secondary, and add a primary action only when it has a verified destination.
Show a locale switch only for an equivalent page that actually exists.

Preserve the navbar's recognizable alignment, control styling, active states,
and mobile behavior while adapting labels and destinations. A full product
catalog or mega-menu is not required. The footer can reuse the parent/product
relationship without imposing a closing section on the page.

Mark only the real current page with `aria-current="page"`; use
`aria-current="location"` only for an active section. On small screens, retain
all links in the disclosure menu instead of hiding destinations. Keep identity
visible, targets at least 44px, native no-JavaScript menu operation, and visible
keyboard focus. Escape should close an enhanced menu and return focus to its
trigger. Check focus when the viewport changes or a menu destination is chosen.

Supply cross-site URLs and base paths explicitly. Do not confuse a product's
root with the Tokn parent site, or assume the parent site's locale convention
applies to an independently deployed subsite. Preserve actual routes and assets.

## Evidence and useful interaction

Verify claims, command syntax, setup paths, platform support, and availability
against authoritative sources. Record source links and a review date in authoring
notes. Distinguish available behavior from plans and experiments. Never invent
install commands, releases, benchmarks, testimonials, or integrations.

Choose proof that makes the product easier to understand. Label simulations,
use fictional fixtures, and put meaningful limitations nearby. Do not imply that
sample terminals execute commands or that decorative controls work. Commands
must remain selectable, with runnable instructions distinct from demo output.
Never include personal machine information, real logs, credentials, or secrets.

Give each main action a clear label and real destination. A page can be playful
through useful interaction and precise writing; it does not need continuous
animation or a fake control surface to feel alive.

## Preserve the site's contract

Keep the current framework, route structure, base path, build commands, public
assets, and deployment unless a migration is explicitly requested. Audit any
machine-consumed files as well as the visible pages. For ctl, preserve its own
website and deployment, including the public bundle registry; do not create a
competing `/ctl/` page in the Tokn homepage repository.

A design-pack export is a local handoff, not a migration or deployment. Add only
the dependencies needed by the target site. Prefer small visual primitives and
product-specific composition over a generalized page builder. Use two-space
indentation, TypeScript over JavaScript, and `snake_case` for serialized fields
where the target repository's instructions call for them.

Never create OpenAI Sites projects or use OpenAI-managed hosting. Do not commit,
push, or publish unless requested. Preserve the existing authorized hosting
provider and workflow.

## Language and accessibility

Retain existing locale URLs. If localization is in scope, translate meaning,
navigation, status, accessibility labels, empty states, dynamic feedback, and
metadata. Keep product names, RSI, code, and stable identifiers intact. Use
correct language tags, canonical URLs, and equivalent-page language links. Check
headlines independently in each language instead of imposing English line breaks.

Use semantic controls, visible focus, keyboard operation, and appropriate focus
restoration after state changes. Make essential actions available on touch
screens without hover. Keep long code within its own scrolling surface and avoid
page-level overflow. Clipboard actions need truthful success and failure states.

Keep readable content before JavaScript runs. Respect reduced motion and the
site's motion control. Prefer finite entrances and meaningful state transitions
to continuous decoration. Do not hide content behind animation completion.

## Verify and deliver

Run the target site's production build and relevant focused checks. Inspect the
rendered page at 320px, a tablet width, and a wide desktop width. Check supported
languages, heading wraps, contrast, parent/product navigation, mobile menu
contents, no-JavaScript access, keyboard behavior, motion, and
main-action destinations. Verify that existing URLs, downloads, public assets,
registries, and unrelated pages still work.

A successful build is not visual verification. Review the actual result, fix
visible problems, and follow the target repository's dev-server instructions.
Deliver local preview links and a current screenshot. Briefly explain the shared
materials used, the product's individual expression, what was verified, and any
concrete remaining limitation. Keep implementation details out of the visitor's
flow.
