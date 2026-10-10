"""Reconstitute the captured demo images for local rendering. Refuse path escapes."""
from pathlib import Path
from zipfile import ZipFile
from io import BytesIO
import base64

ROOT = Path(__file__).resolve().parents[1]
PARTS = ROOT / 'assets-parts'
chunks = sorted(PARTS.glob('*.b64'))
if len(chunks) != 21:
    raise SystemExit(f'Expected 21 captured-asset fragments, found {len(chunks)}')
raw = ''.join(p.read_text(encoding='ascii') for p in chunks)
payload = base64.b64decode(raw, validate=True)
with ZipFile(BytesIO(payload)) as bundle:
    extracted = 0
    for f in bundle.infolist():
        if f.is_dir():
            continue
        dest = (ROOT / f.filename).resolve()
        if not dest.is_relative_to((ROOT / 'muestra').resolve()) or dest.suffix not in ('.webp', '.png'):
            raise SystemExit(f'Unexpected asset location: {f.filename}')
        if f.file_size > 5_000_000:
            raise SystemExit(f'Asset too large: {f.filename}')
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(bundle.read(f))
        extracted += 1
print(f'Unpacked {extracted} local image resources')
if extracted != 78:
    raise SystemExit(f'Expected 78 images; got {extracted}')
