/**
 * brasa / element-adapter.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
function renderContent(e) {
  return e == null || typeof e == `boolean`
    ? null
    : React.isValidElement(e) || Array.isArray(e)
      ? e
      : React.createElement(
          `span`,
          {
            className: `sc-interp`,
          },
          String(e),
        );
}
function asArray(e) {
  return Array.isArray(e) ? e : [];
}
function me(e) {
  return e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function parseInlineStyle(e) {
  let t = {};
  for (let n of e.split(`;`)) {
    let e = n.indexOf(`:`);
    if (e < 0) continue;
    let r = n.slice(0, e).trim();
    t[r.startsWith(`--`) ? r : me(r)] = n.slice(e + 1).trim();
  }
  return t;
}
function ge(e) {
  return e === void 0 ? `` : e;
}
let _e, ve;
function ye(e) {
  return _e.base + e.replace(/\.png$/i, _e.ext);
}
function be(e) {
  if (typeof e != `string` || !e.startsWith(`assets/`)) return e;
  let t = ye(e);
  return ve[t] ?? t;
}
let xe;
function Se(e) {
  return e.includes(`assets/`)
    ? e.replace(xe, (e, t, n) => `url(${t}${String(be(n))}${t})`)
    : e;
}
function Ce(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = Se(r);
  return t;
}
function resolveStyle(e) {
  if (e != null)
    return typeof e == `object` ? e : Ce(parseInlineStyle(String(e)));
}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function initializeElementAdapter() {
  _e = {
    base: `azul/`,
    ext: `.webp`,
  };
  ve = {};
  xe = /url\((['"]?)(assets\/[^'")]+)\1\)/g;
}
export {
  renderContent,
  asArray,
  ge,
  be,
  resolveStyle,
  initializeElementAdapter,
};
