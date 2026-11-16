import type { APIRoute } from "astro";
import prompt from "../../../templates/product-page.prompt.md?raw";
import ctl_adoption from "../../../templates/ctl-adoption.prompt.md?raw";
import guide from "../../../docs/product-pages.md?raw";
import starter from "../../../templates/subsite.html?raw";
import workbench from "../../../templates/subsite-workbench.astro.example?raw";
import editorial from "../../../templates/subsite-editorial.astro.example?raw";

const assets = {
  "prompt.txt": prompt,
  "ctl-adoption.txt": ctl_adoption,
  "guide.txt": guide,
  "starter.html.txt": starter,
  "workbench.astro.txt": workbench,
  "editorial.astro.txt": editorial,
};

export function getStaticPaths() {
  return Object.entries(assets).map(([asset, content]) => ({ params: { asset }, props: { content } }));
}

export const GET: APIRoute = ({ props }) => new Response(props.content, {
  headers: { "Content-Type": "text/plain; charset=utf-8" },
});
