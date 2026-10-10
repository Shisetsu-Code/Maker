const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const file = p => fs.readFileSync(path.join(root, p), 'utf8');
const sha = p => crypto.createHash('sha256').update(file(p)).digest('hex');
const originals = {
  'muestra/socio.js': '604ba9141c565f5e69ff4d4c5b9f383c11426fc30f94ced74454b9fcc9449666',
  'muestra/socio-lobby.js': '7b3377c214889805cc415dd4c710603db9fb877b452814677d7995463adf3fe8',
  'muestra/socio-panel.js': 'da3182733dfcfe7efce0571c50bdf0b92cf5da59e6c93924642fddb10c891bb7',
  'muestra/azul.js': '2b4aa6c91fdd3e9976edefee959d71d6c8092126ae41cd89b49fd10a0d543ac4',
  'muestra/blaze.js': '9150335a6e2b851a64bffecc0340758e8ce47eb5e09676004055163b8695a764',
  'muestra/brasa.js': 'fa77a668bc2604f2f60fa74198f7bbb684c45a655fac83bc3ce1c221e739544d',
  'muestra/control.css': '61b6f353aab42bfa0d4dda8b1e336b87ec5b795f59c4a0d999ad623c74350605',
  'muestra/socio.css': '53308815645c60f6e0136725236aa97bebd633a7526e64d80ec549c14d74a22a',
  'muestra/piel-lobby.css': '827278761e4dc148f170887897b833d5b4235fb15729a4b35c55dd0d40a7a0c5',
  'muestra/piel-panel.css': '0b0e9d7d6b48e2f0d25d9799f42f1c5af6cd1520733ae91c14fed40f188fddf9',
  'muestra/app.css': '5676f92b16194642df69644606c486c1ae64d51ff981bbd30aa616fd1d7500c5',
  'muestra/panel.css': '84bfd46685a7a162baab8ea5231057214ed01ba6f7dfefbf39d321ba2650dfa4',
};
test('captured original JS and CSS are preserved byte for byte', () => {
  for (const [name, expected] of Object.entries(originals)) {
    assert.equal(sha(name), expected, 'Original captured file has changed: ' + name);
  }
});
test('original chooser, demo modes and controls remain in HTML', () => {
  const html = file('muestra/socio.html');
  assert.match(html, /id="seg-vista"/);
  assert.match(html, /id="seg-disp"/);
  for (const id of ['clasica', 'azul', 'blaze', 'brasa'])
    assert.match(html, new RegExp('data-valor="' + id + '"'));
  for (const id of ['p', 'b', 'f', 't', 's', 'im', 'n'])
    assert.match(html, new RegExp('data-abrir="' + id + '"'));
  assert.match(html, /src="socio.js"/);
  assert.match(html, /maker-offline\.js/);
  assert.doesNotMatch(html, /maker-control\.js|Maker Azul|Maker Cobre|Maker Neón/);
});
test('network handoff is confined to the local demo', () => {
  assert.match(file('muestra/socio.js'), /\/api\/maker\/local-demo/);
  assert.doesNotMatch(file('muestra/socio.js'), /rushyclub\.com\/api\/demo\/evento/);
});
