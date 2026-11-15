# Landing page research

Reviewed: 2026-11-15

## Purpose and method

Rebuild the Tokn homepage around useful, memorable product experiences. Lead with
tokn-session and ctl, while giving the supporting projects a clear place in the
workshop. Keep the approved logo and plum/teal palette, and introduce a more playful
voice and interaction.

The observations below come from current official product pages. Most were
verified through page text and exposed controls. These establish content and
sequence, but do not establish animation behavior, visual polish, conversion
performance, or usability. Zed also received a browser review by the research
team; the difference between that rendering and the text extraction is noted.
Recommendations are design interpretations, not measured conclusions.

## Reference observations

| Reference | Observed content and structure | Interpretation for Tokn |
| --- | --- | --- |
| [Linear](https://linear.app/) | The opening identifies a product-development system and presents an example issue with conversation, status, and agent activity. Later chapters follow intake, planning, automation, and building/reviewing, with product examples beside the claims. | Give the page a narrative through familiar work. A concrete example can explain the value before the technical details. |
| [Raycast](https://www.raycast.com/) | A short promise leads to a platform-specific download. Keyboard labels, task-specific extensions, snippets, quicklinks, and sample requests make its broad scope tangible. The final action repeats the download. | Personality can come from useful interaction and specific tasks. Keep the primary action easy to find throughout the page. |
| [Ghostty](https://ghostty.org/) | A compact description names the product category and its distinguishing qualities, followed by Download and Documentation. | Keep the introduction brief and give technical readers a direct route to source and documentation. |
| [Resend](https://resend.com/) | The opening names developers as its audience and pairs an outcome with Get started and Documentation. It proceeds into language-specific code, example output, and test-mode controls before expanding the feature story. | Put a bounded demonstration close to the promise. Technical proof should answer the visitor's immediate question. |
| [Wave Terminal](https://www.waveterm.dev/) | The page names terminal capabilities explicitly: remote connections, split layouts, remote file browsing/editing, and an embedded browser. It includes product media, a beta download, and further capability sections. | Specific actions explain a broad tool quickly. Use the product sample to connect individual capabilities to one understandable task. |
| [Zed](https://zed.dev/) | The text extraction contains a populated editor example with project entries, code, agent activity, and a terminal. The team's browser review instead showed the current Zed Industries presentation, with Delta and Zed tabs and a large shared demo. These are different renditions of the same source at review time. | A populated product surface communicates more than an empty frame. A two-product selector can clarify distinct tools, provided it does not imply an integration that does not exist. |
| [Happy](https://happy.engineering/) | The page groups agent access, shared sessions, open source, and encrypted device pairing. Desktop and phone entry points and product media support the cross-device story. | Demonstrate what becomes possible across devices, then explain the underlying capability. Keep access and privacy claims tied to verified product behavior. |
| [Conductor](https://www.conductor.build/) | The page moves through collaboration, an isolated cloud workspace, existing agents/subscriptions, and access from different devices. Sample activity illustrates a request progressing toward a reviewable result. | Organize sections around outcomes, with a small story in each. Tokn can use a quieter version of this progression without adopting unrelated cloud or collaboration claims. |

## What the previous Tokn page could improve

The previous homepage described the projects clearly, but the opening was broad
and the project map repeated information found later in the catalog. A six-slide
carousel made visitors operate a navigation control to discover the full
offering. The two lead tools competed with the infrastructure and research
projects for attention.

The rewrite should make the first useful action obvious. Visitors should be able
to understand and explore session discovery and terminal persistence before
reading the complete project inventory.

## Chosen direction

**Building the wheels. For RSI.**

Lead with the user-confirmed mission: build the tools AI can use to improve its
own systems. Keep **RSI** prominent as the central keyword and expand it once as
recursive self-improvement. Explain “wheels” as open-source building blocks for
inspecting work, running experiments, measuring results, and improving tools and
models.

tokn-session and ctl remain the featured starting points. Introduce them with
concrete actions: “Run & resume agents” and “Control shells & tasks.” Explain
supported live agent control and ctl's broader CLI capabilities alongside the
focused history and persistent-terminal demonstrations. They are separate tools with
related uses. The expressive typography, thread motif, and playful product
examples provide character while the opening clearly describes what Tokn makes
and why. The closing loop describes the direction these components support;
it does not imply a shipped integration that autonomously closes the loop.

### Page sequence

1. **An inviting opening.** Establish the collection's practical purpose and offer
   routes to the tools and their source. Use a distinctive thread motif to connect the page's
   composition, without depicting unsupported product data flows.
2. **Find the conversation.** A tokn-session scene lets visitors filter a small
   fictional session set and inspect a conversation. Follow with concise
   capabilities, development status, and a repository link.
3. **Return to the terminal.** A separate ctl scene follows the desktop app's
   charcoal workbench, tool rail, host/session sidebar, terminal tabs, and slim
   status bar. Close a tab, switch sessions, and reopen it from Hosts to see the
   counter advance. On narrow screens, the host panel is available through the
   sidebar toggle. Explain the specific persistence behavior, then link to the
   repository.
4. **In the workshop.** Order the projects as tokn, expri, ffbpe, flm.py,
   Apell, doi, llm-tokei, and vpsctl. Give each project a useful description and direct
   source link. Keep the two-column grid and link both source organizations.
5. **The RSI direction.** Close with Inspect → Experiment → Measure → Improve,
   and an invitation to explore the source. Usage reports measure tokens and
   estimated cost; they do not establish correctness or capability improvement.

### Visual and interaction principles

- Preserve the rounded logo, warm paper, muted plum, and sea-glass teal. Use the
  occasional apricot accent for emphasis.
- Add expressive typography, generous spacing, and a thread motif with a clear
  visual role. Avoid filling every section with equivalent cards.
- Make playfulness useful: filtering, selection, and reopening sessions should reveal
  something about the product immediately.
- Label each demonstration as a sample. Use fictional fixtures and generic
  machine labels, with no real conversations or identifying information.
- Use finite entrance animations and an explicit motion toggle. Respect
  reduced-motion preferences; do not require animation to understand a scene.
- Keep all interactions keyboard accessible and provide readable default content
  before scripts run.

### Claims and scope

- Do not imply tokn-session and ctl share a backend, session model, or integration.
- Describe tokn-session live controls only where the underlying provider supports
  them. Historical session access and live interaction are different capabilities.
- Describe ctl sessions as surviving client detach/reconnection, not daemon or
  machine restart.
- Keep development status visible and use repository entry points where release
  availability is not established.
- Do not invent testimonials, usage counts, performance metrics, availability,
  installation commands, or endorsements.
- Keep the rewrite local for review. Publishing remains a separate action.

## Review criteria

- A first-time visitor can explain the difference between the two lead tools.
- Each sample interaction communicates one real capability and has an obvious
  next step.
- The supporting projects are discoverable without dominating the page.
- Small screens preserve readable product content and usable controls.
- Reduced motion and keyboard navigation retain the full meaning of the page.
- The presentation feels more playful while retaining the approved comfortable
  brand character.

### ctl interface reference

The workbench layout follows the implemented [desktop interface](https://github.com/tokn-ai/ctl/tree/main/apps/desktop/src/components),
including the host tree, host-colored tabs, and compact status bar. The
close-and-reopen interaction follows the repository's [persistence demo](https://github.com/tokn-ai/ctl/blob/main/docs/demos.md).
Only session selection, tab closing/reopening, and sidebar visibility are
interactive in the landing-page example; the tool rail is illustrative. Output
and hosts are fictional, and no terminal commands or SSH connections run.

## Workshop additions

Reviewed against the public repositories on 2026-11-15. These tools extend the
collection into applets, paper reading, experiment workflows, and compute
management. They support the RSI direction without implying an integrated,
autonomous improvement loop.

| Project | Verified scope | Presentation |
| --- | --- | --- |
| [Apell](https://github.com/agentic-rs/apell#readme) | Applet host for iOS, Android, and macOS with sandboxed interfaces, shared AI services, private storage, and optional Rust/WASM backends. | In development; no public release. Do not imply uninterrupted background execution when the host is suspended or terminated. |
| [doi](https://github.com/agentic-rs/doi#readme) | Paper Reader applet for Apell: arXiv reading, reference navigation, saved AI explanations, and notes. | [Nightly preview](https://github.com/agentic-rs/doi/releases/tag/nightly). Keep the repository name visible and clarify the applet's display name. |
| [expri](https://github.com/agentic-rs/expri#readme) | Local and remote experiment workflows with metrics, artifacts, and result comparison. SSH and optional ctl transport are implemented. | Available through a [published GitHub release](https://github.com/agentic-rs/expri/releases/tag/v0.1.6); avoid assuming package registry availability. |
| [vpsctl](https://github.com/agentic-rs/vpsctl#readme) | Multi-account compute CLI for Vultr, RunPod, and Vast.ai, with machine discovery, instance management, and ctl connections. | In development; source-based Bun workflow, with no GitHub release. Do not imply general-purpose orchestration or support for unlisted providers. |
