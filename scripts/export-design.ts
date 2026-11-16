import { lstat, mkdir, open, readFile, readdir, rmdir, unlink } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

export const designAssets = [
  { source_path: "public/brand/tokn.css", output_path: "tokn.css" },
  { source_path: "public/logo.svg", output_path: "logo.svg" },
  { source_path: "public/logo-icon.svg", output_path: "logo-icon.svg" },
  { source_path: "docs/product-pages.md", output_path: "design-language.md" },
  { source_path: "templates/product-page.prompt.md", output_path: "prompt.md" },
  { source_path: "templates/ctl-adoption.prompt.md", output_path: "ctl-adoption.md" },
  { source_path: "templates/subsite.html", output_path: "index.html" },
  { source_path: "templates/subsite-workbench.astro.example", output_path: "subsite-workbench.astro.example" },
  { source_path: "templates/subsite-editorial.astro.example", output_path: "subsite-editorial.astro.example" },
  { source_path: "templates/README.md", output_path: "README.md" },
  { source_path: "src/scripts/navigation.ts", output_path: "navigation.js", transform: "typescript" },
  { source_path: "src/layouts/SiteLayout.astro", output_path: "astro/src/layouts/SiteLayout.astro" },
  { source_path: "src/components/Brand.astro", output_path: "astro/src/components/Brand.astro" },
  { source_path: "src/i18n/locales.ts", output_path: "astro/src/i18n/locales.ts" },
  { source_path: "src/components/design/Navbar.astro", output_path: "astro/src/components/design/Navbar.astro" },
  { source_path: "src/scripts/navigation.ts", output_path: "astro/src/scripts/navigation.ts" },
  { source_path: "src/components/design/Thread.astro", output_path: "astro/src/components/design/Thread.astro" },
  { source_path: "src/components/design/Note.astro", output_path: "astro/src/components/design/Note.astro" },
  { source_path: "src/components/design/SectionLabel.astro", output_path: "astro/src/components/design/SectionLabel.astro" },
  { source_path: "public/brand/tokn.css", output_path: "astro/public/brand/tokn.css" },
  { source_path: "public/logo.svg", output_path: "astro/public/logo.svg" },
  { source_path: "public/logo-icon.svg", output_path: "astro/public/logo-icon.svg" },
  { source_path: "public/favicon.svg", output_path: "astro/public/favicon.svg" },
  { source_path: "public/favicon.ico", output_path: "astro/public/favicon.ico" },
  { source_path: "public/og.png", output_path: "astro/public/og.png" },
  { source_path: "public/og-cn.png", output_path: "astro/public/og-cn.png" },
] as const;

function hasCode(error: unknown, code: string): boolean {
  return error instanceof Error && "code" in error && error.code === code;
}

async function checkDestination(destination: string): Promise<"missing" | "empty"> {
  try {
    const stat = await lstat(destination);
    if (stat.isSymbolicLink() || !stat.isDirectory()) {
      throw new Error("The destination must be a directory, not a file or symbolic link.");
    }
    if ((await readdir(destination)).length > 0) {
      throw new Error("The destination is not empty. Choose a new or empty directory; no files were overwritten.");
    }
    return "empty";
  } catch (error) {
    if (hasCode(error, "ENOENT")) return "missing";
    if (error instanceof Error && !("code" in error)) throw error;
    throw new Error("Could not inspect the destination. Check directory permissions.");
  }
}

export async function exportDesign(destination: string, source_root = resolve(import.meta.dir, "..")): Promise<string[]> {
  if (!destination.trim()) throw new Error("A destination directory is required.");
  const destination_path = resolve(destination);
  await checkDestination(destination_path);

  // Prepare the entire allowlist before creating output. Never copy the repository.
  const transpiler = new Bun.Transpiler({ loader: "ts", target: "browser" });
  const assets = await Promise.all(designAssets.map(async asset => {
    const source_path = join(source_root, asset.source_path);
    let content: Buffer;
    try {
      const stat = await lstat(source_path);
      if (!stat.isFile() || stat.isSymbolicLink()) throw new Error("Not a regular file");
      content = await readFile(source_path);
    } catch {
      throw new Error(`Cannot read required design asset: ${asset.source_path}`);
    }
    if ("transform" in asset && asset.transform === "typescript") {
      try {
        content = Buffer.from(transpiler.transformSync(content.toString("utf8")));
      } catch {
        throw new Error(`Cannot transpile design asset: ${asset.source_path}`);
      }
    }
    return { ...asset, content };
  }));

  const written_paths: string[] = [];
  const created_directories: string[] = [];
  let created_directory = false;
  try {
    const state = await checkDestination(destination_path);
    if (state === "missing") {
      await mkdir(dirname(destination_path), { recursive: true });
      await mkdir(destination_path);
      created_directory = true;
    }
    const directory_paths = new Set<string>();
    for (const asset of assets) {
      let directory = dirname(asset.output_path);
      while (directory !== ".") {
        directory_paths.add(directory);
        directory = dirname(directory);
      }
    }
    for (const relative_path of [...directory_paths].sort((a, b) => a.split("/").length - b.split("/").length)) {
      const directory = join(destination_path, relative_path);
      await mkdir(directory);
      created_directories.push(directory);
    }
    for (const asset of assets) {
      const output_path = join(destination_path, asset.output_path);
      const file = await open(output_path, "wx", 0o644);
      written_paths.push(output_path);
      try {
        await file.writeFile(asset.content);
      } finally {
        await file.close();
      }
    }
  } catch {
    await Promise.all(written_paths.map(path => unlink(path).catch(() => {})));
    for (const directory of created_directories.toReversed()) await rmdir(directory).catch(() => {});
    if (created_directory) await rmdir(destination_path).catch(() => {});
    throw new Error("Export could not finish. Check permissions and use an empty directory; existing files were not overwritten.");
  }
  return assets.map(asset => asset.output_path);
}

if (import.meta.main) {
  const args = Bun.argv.slice(2);
  if (args[0] === "--") args.shift();
  if (args.length !== 1 || args[0] === "--help" || args[0] === "-h") {
    console.log("Usage: bun run export:design -- <destination>");
    console.log("Exports to a new or empty directory. Existing files are never overwritten.");
    process.exitCode = args.length === 1 && ["--help", "-h"].includes(args[0]) ? 0 : 1;
  } else {
    try {
      const filenames = await exportDesign(args[0]);
      console.log("Exported Tokn design kit:");
      for (const filename of filenames) console.log(`  ${filename}`);
    } catch (error) {
      console.error(error instanceof Error ? error.message : "Design export failed.");
      process.exitCode = 1;
    }
  }
}
