const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

test('branding MutationObserver stops mutating after the button becomes correct', () => {
  let changes = [];
  let callback;
  const label = {
    _text: 'Mandame mi diseño',
    get textContent() { return this._text; },
    set textContent(next) { this._text = next; changes.push({ type: 'childList' }); },
  };
  const button = {
    title: '',
    setAttribute() {},
    querySelector(query) { return query === '.btn-tx' ? label : null; },
  };
  const document = {
    body: {},
    querySelector(query) { return query === '#btn-mandar-diseno' ? button : null; },
    addEventListener() {},
  };
  class MutationObserver {
    constructor(cb) { callback = cb; }
    observe() {}
  }
  const source = fs.readFileSync(path.resolve(__dirname, '../muestra/maker-control.js'), 'utf8');
  vm.runInNewContext(source, { document, MutationObserver });
  for (let i = 0; i < 10 && changes.length; i++) {
    changes.shift();
    callback();
  }
  assert.equal(changes.length, 0, 'infinite mutation loop blocks the browser event loop');
  assert.equal(label.textContent, 'Descargar diseño');
});
