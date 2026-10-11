import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const hash = value => createHash('sha256').update(value).digest('hex').slice(0, 12);
const isText = mime => /javascript|text\/|svg\+xml/.test(mime);
function safePath(rawUrl) {
  const rawPath = rawUrl.replace(/^https?:\/\/[^/]+/i, '').split(/[?#]/)[0];
  const decoded = decodeURIComponent(rawPath);
  if (decoded.includes('\\') || /[\x00-\x1f<>:"|?*]/.test(decoded) || decoded.split('/').some(s => s === '.' || s === '..')) throw new Error('Unsafe path');
  return decoded;
}
function candidate(entry) {
  const { response, request } = entry;
  if (!response || !request || response.status < 200 || response.status >= 300 || !response.content?.text) return null;
  const url = new URL(request.url);
  const mime = (response.content.mimeType || '').split(';')[0].toLowerCase();
  const own = url.hostname === 'rushybet.com' || url.hostname === 'www.rushybet.com';
  const pathname = safePath(request.url);
  const asset = /^(image\/|font\/|text\/css)/.test(mime);
  const ownCode = own && pathname.startsWith('/muestra/') && /javascript|text\/html/.test(mime);
  if (!asset && !ownCode) return null;
  let target = pathname.slice(1);
  if (!own) {
    target = `assets/external/${url.hostname}/${target || 'index'}`;
    if (url.search) target += `.${hash(url.search)}${mime === 'text/css' ? '.css' : ''}`;
  }
  if (!target || pathname.startsWith('/api/')) return null;
  const content = response.content;
  if (content.encoding === 'base64' && !/^[a-zA-Z0-9+/]*={0,2}$/.test(content.text.replace(/\s/g, ''))) return null;
  const bytes = Buffer.from(content.text, content.encoding === 'base64' ? 'base64' : 'utf8');
  // Failed CDN responses occasionally claim an image type while containing HTML.
  if (/^(image\/(?!svg)|font\/)/.test(mime) && /^\s*(?:<!doctype|<html)/i.test(bytes.toString('utf8', 0, 200))) return null;
  if (isText(mime) && /(?:Bearer\s+[a-zA-Z0-9._-]{20,}|gh[pousr]_[a-zA-Z0-9]{20,}|eyJ[a-zA-Z0-9_-]{15,}\.[a-zA-Z0-9_-]+\.)/.test(bytes.toString('utf8'))) return null;
  return { target, bytes, mime, url: request.url, source: `${url.origin}${url.pathname}` };
}

export async function recoverArchives(paths, outputDir) {
  const outputRoot = path.resolve(outputDir);
  await mkdir(outputRoot, { recursive: true });
  const selected = new Map();
  const missing = [];
  const conflicts = new Set();
  for (const archive of paths) {
    const har = JSON.parse(await readFile(archive, 'utf8'));
    for (const entry of har.log?.entries || []) {
      let item;
      try { item = candidate(entry); }
      catch { missing.push('Rejected unsafe or invalid resource path'); continue; }
      if (!item) continue;
      const target = path.resolve(outputRoot, item.target);
      if (!target.startsWith(outputRoot + path.sep)) { missing.push('Rejected unsafe resource path'); continue; }
      const previous = selected.get(item.target);
      if (previous && !previous.bytes.equals(item.bytes)) conflicts.add(item.target);
      // Prefer the latest successful capture when the same asset changed.
      selected.set(item.target, item);
    }
  }
  const replacements = [...selected.values()].map(item => [item.url, `/${item.target}`]).sort((a, b) => b[0].length - a[0].length);
  for (const item of selected.values()) {
    let bytes = item.bytes;
    if (isText(item.mime)) {
      let text = bytes.toString('utf8');
      for (const [source, replacement] of replacements) text = text.split(source).join(replacement);
      // CSS from external hosts resolves relative font/image URLs against its origin.
      if (item.mime === 'text/css') {
        text = text.replace(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/g, (whole, quote, value) => {
          if (value.startsWith('data:') || value.startsWith('#') || value.startsWith('/assets/')) return whole;
          const source = new URL(value, item.url).href;
          const recovered = replacements.find(([url]) => url === source);
          return recovered ? `url(${quote}${recovered[1]}${quote})` : whole;
        });
      }
      bytes = Buffer.from(text);
    }
    await mkdir(path.dirname(path.join(outputRoot, item.target)), { recursive: true });
    await writeFile(path.join(outputRoot, item.target), bytes);
  }
  return { written: selected.size, missing: [...missing], conflicts: [...conflicts], resources: [...selected.values()].map(({ target, mime, source, bytes }) => ({ target, mime, source, size: bytes.length })) };
}
