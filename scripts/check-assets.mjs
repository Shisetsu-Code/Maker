import { readdir, readFile, access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('public');
async function files(dir) {
  const result = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const name = path.join(dir, item.name);
    if (item.isDirectory()) result.push(...await files(name));
    else result.push(name);
  }
  return result;
}
const missing = new Map(), external = new Set();
let checked = 0;
for (const file of await files(root)) {
  if (!/\.(html|css|js)$/.test(file)) continue;
  if (file.includes(`${path.sep}assets${path.sep}external${path.sep}`) && !file.includes('fonts.googleapis.com')) continue;
  const text = await readFile(file, 'utf8');
  const pagePath = '/' + path.relative(root, file).replaceAll('\\', '/');
  const refs = [];
  if (file.endsWith('.html')) refs.push(...[...text.matchAll(/(?:src|href)=["']([^"']+)["']/g)].map(m => m[1]));
  refs.push(...[...text.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)].map(m => m[1]));
  if (file.endsWith('.js')) refs.push(...[...text.matchAll(/["'`]((?:\.?\.?\/|\/)[^"'`<>]*?\.(?:webp|png|jpg|jpeg|svg|avif|woff2|html|css|js)(?:\?[^"'`]*)?)["'`]/g)].map(m => m[1]));
  for (const ref of new Set(refs)) {
    if (/^(data:|#|mailto:|tel:)/.test(ref) || /[`${}<>\\]/.test(ref)) continue;
    if (/^https?:/.test(ref)) { external.add(ref.split('?')[0]); continue; }
    let resolved;
    try { resolved = decodeURIComponent(new URL(ref, `https://replica.local${pagePath}`).pathname); } catch { continue; }
    checked++;
    try { await access(path.join(root, resolved)); }
    catch { if (!missing.has(resolved)) missing.set(resolved, []); missing.get(resolved).push(pagePath); }
  }
}
await mkdir('work', { recursive: true });
const report = { checked, missing: [...missing].map(([resource, consumers]) => ({ resource, consumers })), external: [...external] };
await writeFile('work/asset-check.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify({ checked, missing: missing.size, external: external.size, sampleMissing: [...missing.keys()].slice(0, 35) }, null, 2));
if (process.argv.includes('--strict') && missing.size) process.exitCode = 1;
