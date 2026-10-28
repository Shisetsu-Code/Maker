import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { build } from "esbuild";
import { syncTemplateChoices } from "./template-choices.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
const output = path.join(root, "dist");
const assets = path.join(output, "public");
const names = ["socio", "socio-lobby", "socio-panel", "azul", "blaze", "brasa"];
const manifest = JSON.parse(
  await readFile(path.join(root, "package.json"), "utf8"),
);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const staticRoot = path.join(root, "public");
const generatedAssets = new Set([
  ...names.map(name => `muestra/${name}.js`),
  "muestra/app.css",
]);
await cp(staticRoot, assets, {
  recursive: true,
  filter: source => !generatedAssets.has(path.relative(staticRoot, source).replaceAll("\\", "/")),
});
const editorHTML = path.join(assets, "muestra/socio.html");
await writeFile(
  editorHTML,
  syncTemplateChoices(await readFile(editorHTML, "utf8")),
);

const result = await build({
  absWorkingDir: root,
  entryPoints: Object.fromEntries(
    names.map((name) => [`muestra/${name}`, `src/client/entries/${name}.js`]),
  ),
  outdir: assets,
  bundle: true,
  format: "iife",
  platform: "browser",
  target: ["es2022"],
  define: { "process.env.NODE_ENV": '"production"' },
  minify: true,
  sourcemap: "external",
  sourcesContent: true,
  legalComments: "external",
  metafile: true,
  logLevel: "warning",
});

execFileSync(
  process.execPath,
  [
    path.join(root, "node_modules/@tailwindcss/cli/dist/index.mjs"),
    "-i",
    path.join(root, "src/styles/app.css"),
    "-o",
    path.join(assets, "muestra/app.css"),
  ],
  { cwd: root, stdio: "inherit" },
);

// Source maps are development artifacts. Keep them outside the uploaded assets;
// the compiled JavaScript has no public sourceMappingURL references.
await mkdir(path.join(output, "sourcemaps"), { recursive: true });
for (const name of names) {
  const map = path.join(assets, "muestra", `${name}.js.map`);
  await cp(map, path.join(output, "sourcemaps", `${name}.js.map`));
  await rm(map);
}

await writeFile(
  path.join(output, "build-manifest.json"),
  `${JSON.stringify(
    {
      format: "maker-build-1",
      entries: names.map((name) => `muestra/${name}.js`),
      dependencies: manifest.dependencies,
      tools: {
        esbuild: manifest.devDependencies.esbuild,
        tailwindcss: manifest.devDependencies.tailwindcss,
        wrangler: manifest.devDependencies.wrangler,
      },
    },
    null,
    2,
  )}\n`,
);
await writeFile(
  path.join(output, "build-metafile.json"),
  `${JSON.stringify(result.metafile, null, 2)}\n`,
);
console.log(
  `Maker built: ${names.length} source entries, maintained React/Zod and Tailwind, assets in dist/public.`,
);
