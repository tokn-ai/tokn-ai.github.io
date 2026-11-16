# Tokn visual language and portable kit

## Direction: shared materials, individual expression

Tokn's sites belong to the same workshop. They share recognizable materials:
warm paper, plum and teal, expressive type, fine rules, useful annotations, and
the approved logo. Shared navigation and familiar controls make the connection
practical. Each product decides what to make with those materials below that
common frame.

The family resemblance should survive a completely different layout. A terminal
product can open with a dense workbench. A research tool can open with a large
question and an annotated result. An app can let its interface fill the screen.
They do not need the same hero, section order, feature cards, or product
interaction model. Their navbars should remain recognizable and behave alike,
with links chosen for each product.

The homepage remains the collection's front door. A product's own site expresses
that product. This kit supports existing sites as well as new ones; it does not
move products into a central site or replace their frameworks and deployments.

## The shared visual language

| Material | Family character | Room for expression |
| --- | --- | --- |
| Identity | Existing Tokn logo, comfortable rounded forms, a clear connection to the collection | Product name, its own mark if one exists, and brand prominence |
| Navigation | Shared parent/product identity, link styling, utility positions, active states, and mobile-menu behavior | Product-specific destinations, labels, optional primary action, and supported languages |
| Paper and ink | Paper `#FCFBF8`, ink `#302937`, muted text `#716977`, fine rules `#DED8E1` | Light, dark, or mixed compositions suited to the product |
| Color | Plum `#6A5A7D`, teal `#61B6AF`, dark teal `#2C706A`, occasional apricot `#C48257` | Which accent leads, how much color appears, and the actual product UI's palette |
| Type | System sans for reading, serif for expressive emphasis, monospace for code and technical labels | Scale, alignment, density, headline construction, and where emphasis appears |
| Space | Clear hierarchy and deliberate breathing room between unrelated ideas | Compact workbenches, expansive editorial scenes, split views, or document-like pages |
| Surfaces | Fine borders, soft corners, restrained shadows, tactile control feedback | Open sections, panels, tables, layered interfaces, or a single dominant surface |
| Decoration | Threads, small notes, section marks, arrows, and occasional apricot details | Which motifs appear, their placement, and whether a section needs decoration at all |
| Interaction | Legible state changes, visible focus, predictable navigation, reduced-motion support | Product interactions that fit the tool and its audience |
| Voice | Concrete verbs, precise objects, approachable confidence, playful moments with a purpose | Technical depth, storytelling rhythm, humor, and the product's own vocabulary |

Use shared tokens rather than scattering copied hex values. Teal is useful for
traces and accents; dark teal is the readable text choice on paper. Preserve
sufficient contrast when changing the surrounding surface. The actual product
interface may keep its own colors inside the page.

## Common navigation comes first

The navbar is a shared part of the Tokn experience. Reuse its structure and
behavior across subsites; keep the product's page composition independent.

- **Identity on the left:** the Tokn mark links to the collection's home. A
  separate product name links to that product's home. Keep those destinations
  distinct so the reader can move up to Tokn or return to the current tool.
- **Product links:** choose a short set of real destinations, such as an
  overview, documentation, examples, or releases. Labels and destinations belong
  to the product; the kit does not require a universal menu or a catalog of every
  Tokn project in the header.
- **Utilities:** use a secondary GitHub/source link, an optional primary action,
  and a language switch only when an equivalent translated page exists. Keep
  their order and visual treatment familiar. Do not add unavailable downloads or
  empty destinations merely to fill the navbar.
- **Current location:** apply `aria-current="page"` only to the actual current
  page, or `aria-current="location"` to a genuinely active section. Pair the
  semantic state with a visible treatment. A decorative example must not imply
  that a different page is current.
- **Small screens:** retain every destination in a native disclosure menu
  instead of dropping links to make them fit. Keep the parent/product identity
  visible. Use at least 44px interaction targets and a clear menu label.
- **Keyboard and fallback:** the menu opens without JavaScript. Progressive
  enhancement closes it with Escape and returns focus to its trigger. Hidden
  menus must not contain keyboard stops; focus must remain visible after a
  viewport change or navigation.

Supply parent-home, product-home, documentation, repository, and locale URLs
deliberately. A subsite at `/ctl/` may use a different asset base and language
route from this homepage. Do not derive a parent link from the product's root or
assume `/cn/ctl/` is correct for another deployment.

The optional footer follows the same distinction: a clear connection back to
Tokn plus useful product links. It does not prescribe a marketing section or a
closing call to action. Buttons, locale controls, focus states, and link behavior
should remain familiar even on pages with different layouts and density.

## Decoration is a vocabulary

Use a thread to lead the eye, a note to invite an experiment, or a section mark to
establish rhythm. They are small compositional tools, not required page sections.
Leave room for an undecorated page when the product surface is already expressive.

- **Thread:** a loose, fine stroke with room around it. It can connect visual
  areas, but must not imply an architecture or integration that does not exist.
- **Note:** a brief human aside, usually tilted slightly or set in a quieter
  type style. It should help someone notice or try something.
- **Section label:** a compact marker that names the current subject or sets
  context. Numbering is useful only when there is a real sequence.
- **Arrow or mark:** a small directional cue or occasional warm accent. Avoid
  repeating an identical flourish after every heading.

A page need not use every motif. Variation in placement and scale is encouraged;
copying the homepage's floating notes into every subsite is not the objective.
Decorative content stays out of the accessibility tree unless it communicates
information a reader needs.

## Composition is free

There is no mandatory hero, proof, workflow, feature, or closing sequence. Choose
what the visitor needs to understand and organize the page around that. Templates
are starting compositions that can be rearranged, reduced, or replaced.

| Example direction | What it emphasizes | Possible expression |
| --- | --- | --- |
| Workbench | A tool being operated | A large dark interface, a compact introduction, a nearby command, a note inviting one useful interaction |
| Editorial | An idea or research result | Large type, open paper, asymmetric columns, an annotated figure, and a quiet path to the technical details |
| Application | A task inside a real interface | A populated app scene, short task-based explanations, and an appropriate release or setup action |
| Reference | Information people return to | Navigation, readable documentation, searchable examples, tables, and restrained decoration |

These are possibilities, not categories a product must fit. A page can combine
approaches or invent another. Reuse the shared materials where they help and
write product-specific layouts and components where they explain the product
better. Do not add empty sections to satisfy a template.

Regardless of composition, a visitor should be able to discover what the product
is, what it lets them do, how the claims are supported, and where to go next. An
expressive headline should have a concrete explanation nearby. A primary action
should say what will happen and reach a real destination.

RSI remains the collection's mission and keyword. A product can explain its
contribution where it is useful, without making every headline about RSI or
implying that independent tools already form an autonomous improvement system.

## What the kit contains

The paths below refer to this source repository. The exported pack's README maps
them to its portable files and optional `astro/` directory.

| Asset | Responsibility |
| --- | --- |
| `public/brand/tokn.css` | Portable, namespaced tokens and opt-in visual utilities. Apply the `tokn-site` class to the area adopting the kit. It must not restyle unrelated interfaces globally. |
| Approved logo exports | Shared identity assets, copied into a handoff pack from the canonical assets instead of maintaining competing versions. |
| `src/components/design/Navbar.astro` | Shared parent/product identity and configurable navigation, with accessible mobile disclosure behavior. |
| `src/components/design/Thread.astro` | An optional Astro wrapper for the thread motif. |
| `src/components/design/Note.astro` | An optional Astro wrapper for a small annotation. |
| `src/components/design/SectionLabel.astro` | An optional Astro wrapper for a compact section marker. |
| `src/layouts/SiteLayout.astro` | Common document metadata and site foundations for pages in this repository. It does not prescribe a product's composition. |
| `templates/subsite-workbench.astro.example` | An optional composition showing a dense product surface with the shared visual language. |
| `templates/subsite-editorial.astro.example` | An optional composition showing a spacious, editorial interpretation of the same materials. |
| `templates/product-page.prompt.md` | A reusable brief and instructions for applying the language to a new or existing subsite. |
| `/design/` | A local reference page showing the materials and contrasting compositions together. It is a design reference, not a required page builder. |

The CSS and logo assets are framework-independent. Astro components and starter
files are conveniences for Astro projects. Other frameworks can reuse the
portable CSS and recreate the small amount of semantic markup they need. Do not
introduce Astro, a new UI framework, or a central product-data schema merely to
adopt the visual language.

The live CSS and component interfaces are the source of truth for available
utilities and props. Use only what exists. If a primitive needs to change, keep
it narrowly focused on appearance or semantics; do not make it responsible for
an entire product's content model or page flow.

## Using the handoff pack

From this repository, export a portable copy into a chosen destination:

```sh
bun run export:design -- <destination>
```

The pack carries the CSS, canonical logo exports, prompt, reference guidance,
and starter material. Read the generated pack's README for its exact file layout.
Use a new destination when keeping an existing pack unchanged matters. The export
is a local handoff, not a deployment or a migration of the target site.

The shared repository owns the design contract; each downstream repository owns
its implementation. For ctl, supply the complete export and use its
`ctl-adoption.md` task (`templates/ctl-adoption.prompt.md` in this repository).
It directs ctl to apply the shared navbar in its existing Bun site, including
asset serving and Pages staging. Use local exports until the shared revision is
available remotely. Kit publication never applies or publishes downstream changes
automatically; each product reviews its own update.

For an existing product site:

1. Inspect its framework, styles, routes, public assets, commands, and deployment.
2. Adopt the shared navigation and controls, then the tokens and decorations that
   fit. Preserve each destination and the product's existing routing contract.
3. Keep the product's useful composition and behavior; revise only what serves
   the requested design outcome.
4. Verify the existing site still builds and that its links, downloads, metadata,
   asset paths, and dynamic behavior still work.

For a new site, choose either starter, combine useful pieces, or start with the
CSS alone. Keep a short note describing the product's expressive direction so a
later contributor can distinguish deliberate variation from accidental drift.

## Preserve each subsite's contract

A shared visual language does not authorize a new route, hosting move, or rebuild.
Keep existing product URLs, base paths, build commands, asset conventions, and
publishing workflows unless a migration is explicitly requested.

In particular, ctl has its own website and deployment. Apply the kit in that
website when requested; do not create a competing `/ctl/` implementation in this
repository. Preserve ctl's public bundle registry and other machine-consumed
assets as well as its visitor-facing pages. Styling work must not break paths
that tools or installers use.

The kit's export does not publish anything. Use each site's established hosting
provider and workflow only when publishing is explicitly requested. Never create
OpenAI Sites projects or use OpenAI-managed hosting.

## Content, proof, and trust

Before writing claims, inspect the current product README, documentation, CLI
help, interface, and release information relevant to the page. Record the source
links and review date in authoring notes. Distinguish published behavior from
plans, local experiments, and unreleased branches.

Verify command spelling, arguments, prerequisites, working-directory assumptions,
and side effects. Do not invent a package name, install script, download URL,
platform matrix, benchmark, testimonial, or adoption count. If a convenient
installation path cannot be verified, link the real source setup guide.

A demonstration should explain a useful idea and reveal its own limits. Label
simulations clearly. Keep inert decoration from resembling a working control.
Use fictional demo content and generic host labels; never commit real usernames,
emails, hostnames, full machine paths, IP addresses, tokens, conversation logs,
or identifying screenshots. ctl sessions survive detach and reconnection while
the daemon runs; do not expand that into survival across daemon or machine
restarts. Apply equal precision to other products' boundaries.

## Language and access

Adopt the target site's existing locale routes. New pages in this repository use
English at the default route and Simplified Chinese under `/cn/`; that convention
does not require another site to migrate its URLs. Switch between equivalent
pages and preserve compatible section anchors where practical.

Translate the meaning rather than forcing English word order into Chinese. Keep
product names, RSI, commands, and repository identifiers intact. Translate
navigation, accessibility labels, statuses, empty states, dynamic feedback, and
metadata as well as visible prose. Use CJK sans for reading and upright CJK serif
for expressive emphasis. Check headline wrapping in both languages.

Keep code selectable and long lines contained within their own surface. Use
semantic controls, visible focus, keyboard interaction, and focus restoration
after closing or replacing a focused view. Important actions must work without
hover. Clipboard features need truthful success and failure feedback.

Preserve readable content before JavaScript runs. Motion should explain a change
or add a brief welcome. Respect reduced motion and any site motion control;
avoid endless decorative loops or entrances that leave content invisible.

## Review the result, not conformity to a layout

- Does this feel related to Tokn through navigation, type, color, controls, and details while
  giving the product its own expression?
- Do the parent and product identities lead to their distinct intended homes?
  Are the current location, source, primary action, and equivalent-language links
  accurate? Can every navigation destination be reached on a small screen and
  with the keyboard, including without JavaScript?
- Can a visitor understand the product, its useful outcome, and a real next step?
- Do sources support the claims, commands, releases, and integrations? Are
  important limitations placed beside the relevant claim?
- Is the proof readable and honest about what is real or simulated?
- Do supported languages have equivalent meaning and working controls, with
  correct metadata and language links?
- Is the page readable at 320px, a tablet width, and a wide desktop width, without
  page-level horizontal scrolling or clipped text?
- Do keyboard navigation, focus, reduced motion, and no-JavaScript reading work?
- Have existing routes, downloads, registries, public assets, and deployment
  contracts survived the change?
- Does the production build pass, and does the preview show the actual latest
  implementation without personal information?
