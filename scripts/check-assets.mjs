import { readdir, readFile, access, mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { parse } from "@babel/parser";
import { resolveAzulAsset } from "../src/client/views/azul/asset-paths.js";

const repository = fileURLToPath(new URL("..", import.meta.url));

async function files(directory) {
  const result = [];
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const name = path.join(directory, item.name);
    if (item.isDirectory()) result.push(...(await files(name)));
    else result.push(name);
  }
  return result;
}

function stringValues(value) {
  if (typeof value === "string") return [value];
  if (value && typeof value === "object")
    return Object.values(value).flatMap(stringValues);
  return [];
}

function scriptStrings(source) {
  const strings = [];
  const stack = [
    parse(source, { sourceType: "unambiguous", attachComment: false }),
  ];
  while (stack.length) {
    const node = stack.pop();
    if (!node || typeof node !== "object") continue;
    if (node.type === "StringLiteral") strings.push(node.value);
    else if (node.type === "TemplateLiteral") {
      // Only complete literals can be resolved statically. Runtime expressions
      // are covered by the browser tests, not guessed as file names here.
      if (node.expressions.length === 0)
        strings.push(
          node.quasis
            .map((part) => part.value.cooked ?? part.value.raw)
            .join(""),
        );
    }
    for (const [key, value] of Object.entries(node)) {
      if (["loc", "start", "end", "extra", "comments", "tokens"].includes(key))
        continue;
      if (Array.isArray(value)) stack.push(...value);
      else if (value && typeof value === "object") stack.push(value);
    }
  }
  return strings;
}

export function assetReferences(filename, source) {
  const refs = [];
  const isScript = /\.m?js$/.test(filename);
  const strings = isScript ? scriptStrings(source) : [source];
  if (filename.endsWith(".html")) {
    refs.push(
      ...[...source.matchAll(/(?:src|href)=["']([^"']+)["']/g)].map(
        (match) => match[1],
      ),
    );
  }
  for (const value of strings) {
    // Scanning JavaScript strings avoids mistaking methods such as Zod.url(e)
    // for CSS url(...) expressions.
    refs.push(
      ...[...value.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)].map(
        (match) => match[1],
      ),
    );
    if (
      isScript &&
      /^(?:\.?\.?\/|\/|assets\/)[^<>]*\.(?:webp|png|jpg|jpeg|svg|avif|woff2|html|css|m?js)(?:\?.*)?$/.test(
        value,
      )
    )
      refs.push(value);
  }
  if (filename.endsWith("catalog.json")) {
    refs.push(
      ...stringValues(JSON.parse(source)).filter((value) =>
        /\.(?:webp|png|jpg|jpeg|svg|avif)(?:\?.*)?$/.test(value),
      ),
    );
  }
  if (filename.endsWith("demo-assets-map.js")) {
    const map = source.match(/Object\.freeze\((\{.*\})\)/s);
    if (!map) throw new Error("Invalid recovered asset mapping");
    refs.push(...Object.values(JSON.parse(map[1])));
  }
  return new Set(refs);
}

export async function checkAssets(directory) {
  const root = path.resolve(directory);
  const missing = new Map(),
    external = new Set();
  let checked = 0;
  for (const file of await files(root)) {
    if (!/\.(html|css|m?js|json)$/.test(file)) continue;
    if (
      file.includes(`${path.sep}assets${path.sep}external${path.sep}`) &&
      !file.includes("fonts.googleapis.com")
    )
      continue;
    const source = await readFile(file, "utf8");
    const pagePath = "/" + path.relative(root, file).replaceAll("\\", "/");
    for (let ref of assetReferences(file, source)) {
      if (/^(data:|blob:|#|mailto:|tel:)/.test(ref) || /[`${}<>\\]/.test(ref))
        continue;
      if (/^(https?:)?\/\//.test(ref)) {
        external.add(ref.split("?")[0]);
        continue;
      }
      // Azul rewrites captured PNG literals to its original WebP resources.
      // Use the same resolver as the view, so this check follows runtime behavior.
      if (pagePath === "/muestra/azul.js" && ref.startsWith("assets/"))
        ref = resolveAzulAsset(ref);
      let resolved;
      try {
        resolved = decodeURIComponent(
          new URL(ref, `https://replica.local${pagePath}`).pathname,
        );
      } catch {
        continue;
      }
      // This alias is served by src/worker.mjs, not copied into the asset directory.
      if (resolved.startsWith("/muestra/games-cartas/"))
        resolved = resolved.slice("/muestra".length);
      checked++;
      try {
        await access(path.join(root, resolved));
      } catch {
        if (!missing.has(resolved)) missing.set(resolved, new Set());
        missing.get(resolved).add(pagePath);
      }
    }
  }
  return {
    checked,
    missing: [...missing].map(([resource, consumers]) => ({
      resource,
      consumers: [...consumers],
    })),
    external: [...external].sort(),
  };
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const args = process.argv.slice(2);
  const rootIndex = args.indexOf("--root");
  const root =
    rootIndex >= 0 ? args[rootIndex + 1] : path.join(repository, "dist/public");
  if (!root) throw new Error("--root requires an asset directory");
  const report = await checkAssets(root);
  await mkdir(path.join(repository, "work"), { recursive: true });
  await writeFile(
    path.join(repository, "work/asset-check.json"),
    JSON.stringify(report, null, 2),
  );
  console.log(
    JSON.stringify(
      {
        checked: report.checked,
        missing: report.missing.length,
        external: report.external.length,
        sampleMissing: report.missing.slice(0, 35),
      },
      null,
      2,
    ),
  );
  if (args.includes("--strict") && report.missing.length) process.exitCode = 1;
}
