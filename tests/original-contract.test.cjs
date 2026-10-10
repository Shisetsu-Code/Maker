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
  'muestra/azul.js': '119296dbfdb6a39e1c49831a07b94c6a59f5b92c1ce468ab138ae078a3686b0b',
  'muestra/blaze.js': 'ca98a2e9785bc22d023becdb896d529d67c07ace25bcae8795c03c5ed88d9d4d',
  'muestra/brasa.js': '551bb5d7a8902d4f7259361d31e64ba03fd84ddd630fba6f5865beb37fccc598',
  'muestra/control.css': 'e62c524045b9689e12c4685f514e77c75287be98c9bcb0ab28931fe88397b50c',
  'muestra/socio.css': '53308815645c60f6e0136725236aa97bebd633a7526e64d80ec549c14d74a22a',
  'muestra/piel-lobby.css': '9f4f7bf1e09aaf02675ee09c39defdb72e38d968c53f5130c96c698c67df32ce',
  'muestra/piel-panel.css': 'e6579355b37bf8b8077e1cea2ede5e1db9ad587fc40db88b088650f7a1d83931',
  'muestra/app.css': 'b208919fa6152ac029338aeb5be958643b932f342521a40d88943bc14673b015',
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
