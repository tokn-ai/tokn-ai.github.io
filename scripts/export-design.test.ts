import { afterEach, describe, expect, test } from "bun:test";
import { lstat, mkdir, mkdtemp, readFile, readdir, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { designAssets, exportDesign } from "./export-design";

const temporary_directories: string[] = [];
const navigation_fixture = "interface NavState { open: boolean }\nconst nav_state: NavState = { open: false };\nconsole.info(nav_state.open);\n";

function fixtureContent(source_path: string): string {
  return source_path === "src/scripts/navigation.ts" ? navigation_fixture : `fixture:${source_path}\n`;
}

async function makeFixture() {
  const directory = await mkdtemp(join(tmpdir(), "tokn-design-test-"));
  temporary_directories.push(directory);
  const source_root = join(directory, "source");
  for (const asset of designAssets) {
    const path = join(source_root, asset.source_path);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, fixtureContent(asset.source_path));
  }
  return { source_root, destination: join(directory, "export"), directory };
}

async function listFiles(directory: string, prefix = ""): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(entries.map(async entry => {
    const relative_path = `${prefix}${entry.name}`;
    return entry.isDirectory()
      ? listFiles(join(directory, entry.name), `${relative_path}/`)
      : [relative_path];
  }));
  return paths.flat();
}

afterEach(async () => {
  await Promise.all(temporary_directories.splice(0).map(path => rm(path, { recursive: true, force: true })));
});

describe("exportDesign", () => {
  test("copies only approved assets and preserves their contents", async () => {
    const { source_root, destination } = await makeFixture();
    await writeFile(join(source_root, "private.env"), "must not export");
    const exported = await exportDesign(destination, source_root);
    expect((await listFiles(destination)).sort()).toEqual(exported.toSorted());
    expect(exported.length).toBe(designAssets.length);
    for (const asset of designAssets) {
      if (!("transform" in asset)) {
        expect(await readFile(join(destination, asset.output_path), "utf8")).toBe(fixtureContent(asset.source_path));
      }
    }
    expect((await lstat(join(destination, "astro/src/components/design"))).isDirectory()).toBe(true);
  });

  test("emits browser JavaScript while retaining exact Astro TypeScript source", async () => {
    const { source_root, destination } = await makeFixture();
    await exportDesign(destination, source_root);
    const javascript = await readFile(join(destination, "navigation.js"), "utf8");
    expect(javascript).toContain("nav_state");
    expect(javascript).not.toContain("interface");
    expect(javascript).not.toContain(": NavState");
    expect(() => new Function(javascript)).not.toThrow();
    expect(await readFile(join(destination, "astro/src/scripts/navigation.ts"), "utf8")).toBe(navigation_fixture);
  });

  test("rejects invalid TypeScript before touching a new or existing empty destination", async () => {
    const { source_root, destination } = await makeFixture();
    await writeFile(join(source_root, "src/scripts/navigation.ts"), "const navigation: = ;");
    await expect(exportDesign(destination, source_root)).rejects.toThrow("Cannot transpile design asset");
    await expect(lstat(destination)).rejects.toMatchObject({ code: "ENOENT" });
    await mkdir(destination);
    await expect(exportDesign(destination, source_root)).rejects.toThrow("Cannot transpile design asset");
    expect(await readdir(destination)).toEqual([]);
  });

  test("accepts an existing empty directory", async () => {
    const { source_root, destination } = await makeFixture();
    await mkdir(destination);
    expect((await exportDesign(destination, source_root)).length).toBe(designAssets.length);
  });

  test("refuses a nonempty destination without altering its files", async () => {
    const { source_root, destination } = await makeFixture();
    await mkdir(destination);
    await writeFile(join(destination, "index.html"), "keep this page");
    await expect(exportDesign(destination, source_root)).rejects.toThrow("not empty");
    expect(await readdir(destination)).toEqual(["index.html"]);
    expect(await readFile(join(destination, "index.html"), "utf8")).toBe("keep this page");
  });

  test("validates every input before creating output", async () => {
    const { source_root, destination } = await makeFixture();
    await rm(join(source_root, designAssets.at(-1)!.source_path));
    await expect(exportDesign(destination, source_root)).rejects.toThrow("required design asset");
    await expect(lstat(destination)).rejects.toMatchObject({ code: "ENOENT" });
  });

  test("refuses a symlink destination", async () => {
    const { source_root, destination, directory } = await makeFixture();
    const existing_directory = join(directory, "existing");
    await mkdir(existing_directory);
    await symlink(existing_directory, destination);
    await expect(exportDesign(destination, source_root)).rejects.toThrow("symbolic link");
    expect(await readdir(existing_directory)).toEqual([]);
  });

  test("refuses a symlink source instead of following files outside the kit", async () => {
    const { source_root, destination, directory } = await makeFixture();
    const source_path = join(source_root, designAssets[0].source_path);
    const unrelated_file = join(directory, "unrelated.txt");
    await writeFile(unrelated_file, "keep outside the kit");
    await rm(source_path);
    await symlink(unrelated_file, source_path);
    await expect(exportDesign(destination, source_root)).rejects.toThrow("required design asset");
    await expect(lstat(destination)).rejects.toMatchObject({ code: "ENOENT" });
  });
});
