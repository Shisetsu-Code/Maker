#!/usr/bin/env python3
"""Reconstruct local static images captured in the original configurator HAR.

Only raster bytes from verified rushybet.com public static URL namespaces are
written. Cookie/session/API/POST data, arbitrary hosts and executable resources
are intentionally ignored. No network access and no overwrites by default.
"""
import argparse
import base64
import binascii
import hashlib
import json
from pathlib import Path
from urllib.parse import unquote, urlsplit

PREFIXES = ('muestra/', 'games-cartas/', 'rushybet/')
MIME_EXT = {
    '.webp': 'image/webp', '.png': 'image/png',
    '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.avif': 'image/avif',
}
MAX_BYTES = 5_000_000


def safe_name(url):
    """Return restricted, normalized relative path, or None."""
    try:
        parsed = urlsplit(url)
        if parsed.scheme != 'https' or parsed.hostname != 'rushybet.com' or parsed.username or parsed.password:
            return None
        name = unquote(parsed.path, errors='strict')
        if not name.startswith('/') or name.startswith('//') or '\\' in name or '\x00' in name:
            return None
        name = name[1:]
        if not name.startswith(PREFIXES) or len(name) > 512:
            return None
        if any(part in ('', '.', '..') or part.startswith('.') for part in name.split('/')):
            return None
        if any(ord(c) < 32 for c in name):
            return None
        ext = Path(name).suffix.lower()
        return name if ext in MIME_EXT else None
    except (ValueError, UnicodeError):
        return None


def image_matches(ext, data):
    if ext == '.png':
        return data.startswith(b'\x89PNG\r\n\x1a\n')
    if ext in ('.jpg', '.jpeg'):
        return data.startswith(b'\xff\xd8\xff')
    if ext == '.webp':
        return len(data) >= 12 and data[:4] == b'RIFF' and data[8:12] == b'WEBP'
    if ext == '.avif':
        return len(data) >= 12 and data[4:8] == b'ftyp' and b'avif' in data[8:24]
    return False


def collect_from_har(har):
    found = {}
    stats = {'entries': 0, 'matching_static_responses': 0, 'duplicates': 0,
             'conflicting_captures': 0, 'invalid_payloads': 0}
    for entry in har.get('log', {}).get('entries', []):
        stats['entries'] += 1
        request = entry.get('request') or {}
        if request.get('method') != 'GET':
            continue
        name = safe_name(request.get('url', ''))
        if name is None:
            continue
        response = entry.get('response') or {}
        if response.get('status') not in (200, 206):
            continue
        content = response.get('content') or {}
        mime = content.get('mimeType', '').split(';', 1)[0].strip().lower()
        if mime != MIME_EXT.get(Path(name).suffix.lower()):
            continue
        encoded = content.get('text')
        if content.get('encoding') != 'base64' or not encoded:
            continue
        stats['matching_static_responses'] += 1
        if len(encoded) > 4 * ((MAX_BYTES + 2) // 3) + 8:
            stats['invalid_payloads'] += 1
            continue
        try:
            raw = base64.b64decode(encoded, validate=True)
        except (binascii.Error, ValueError):
            stats['invalid_payloads'] += 1
            continue
        if len(raw) > MAX_BYTES or not image_matches(Path(name).suffix.lower(), raw):
            stats['invalid_payloads'] += 1
            continue
        if name in found:
            stats['duplicates'] += 1
            if found[name] != raw:
                stats['conflicting_captures'] += 1
            continue  # use the first successful capture
        found[name] = raw
    return found, stats


def alias_name(name):
    """Mirror source-root assets for template URLs resolved relative to /muestra/.

    Original captures can use /games-cartas/x while the saved demo loads
    ./games-cartas/x from /muestra/. Both routes must resolve to identical bytes,
    without rewriting the captured JavaScript or HTML.
    """
    if name.startswith(('games-cartas/', 'rushybet/')):
        return 'muestra/' + name
    if name.startswith(('muestra/games-cartas/', 'muestra/rushybet/')):
        return name[len('muestra/'):]
    return None


def restore(har_path, dest_root, *, dry_run=False, overwrite=False):
    with Path(har_path).open('r', encoding='utf-8') as source:
        assets, stats = collect_from_har(json.load(source))
    root = Path(dest_root).resolve()
    output = {
        'assets_available': len(assets), 'written': 0, 'already_present': 0,
        'existing_different': 0, 'bytes_recovered': sum(len(b) for b in assets.values()),
        'source': 'user HAR', **stats,
        'aliases_available': 0, 'alias_written': 0,
        'alias_already_present': 0, 'alias_existing_different': 0,
        'alias_conflicts': 0,
    }

    def place(name, raw, prefix=''):
        target = (root / name).resolve()
        if not target.is_relative_to(root):
            raise ValueError('Unexpected path escape: ' + name)
        if target.exists():
            if target.is_file() and target.read_bytes() == raw:
                output[prefix + 'already_present'] += 1
                return
            if not overwrite:
                output[prefix + 'existing_different'] += 1
                return
        if not dry_run:
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(raw)
        output[prefix + 'written'] += 1

    # Canonical paths take precedence over aliases when both were captured.
    for name, raw in sorted(assets.items()):
        place(name, raw)

    aliases = {}
    for name, raw in sorted(assets.items()):
        alias = alias_name(name)
        if not alias:
            continue
        if alias in assets:
            if assets[alias] != raw:
                output['alias_conflicts'] += 1
            continue
        if alias in aliases:
            if aliases[alias] != raw:
                output['alias_conflicts'] += 1
            continue
        aliases[alias] = raw

    output['aliases_available'] = len(aliases)
    for name, raw in sorted(aliases.items()):
        place(name, raw, 'alias_')
    return output


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('har', type=Path, help='HAR original de la sesión del configurador')
    parser.add_argument('--dest', type=Path, default=Path('.'), help='raíz del sitio estático local')
    parser.add_argument('--dry-run', action='store_true', help='solo informar; no escribir archivos')
    parser.add_argument('--overwrite', action='store_true', help='permitir reemplazar recursos existentes')
    args = parser.parse_args()
    print(json.dumps(restore(args.har, args.dest, dry_run=args.dry_run, overwrite=args.overwrite),
                     ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()