/**
 * blaze / element-adapter.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import { Oe } from "./game-catalog.js";
function ke(e, t) {
  let n = Number.isFinite(t) && t > 0 ? Math.round(t) : 0;
  if (n > 0 && e(n) && !e(n + 1)) return n;
  let r = 0,
    i = Math.max(n, 8192);
  for (; r < i;) {
    let t = Math.floor((r + i + 1) / 2);
    e(t) ? (r = t) : (i = t - 1);
  }
  return r > 0 ? r : n > 0 ? n : Oe;
}
function Ae() {
  if (typeof window > `u`) return Oe;
  let e = window.innerWidth;
  if (typeof window.matchMedia != `function`) {
    let t = document.documentElement?.clientWidth ?? 0;
    return t > 0 ? Math.min(t, e || t) : e || 1440;
  }
  return ke((e) => window.matchMedia(`(min-width: ${e}px)`).matches, e);
}
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
function je(e) {
  return e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function parseInlineStyle(e) {
  let t = {};
  for (let n of e.split(`;`)) {
    let e = n.indexOf(`:`);
    if (e < 0) continue;
    let r = n.slice(0, e).trim();
    t[r.startsWith(`--`) ? r : je(r)] = n.slice(e + 1).trim();
  }
  return t;
}
function N(e) {
  return e === void 0 ? `` : e;
}
let Ne, Pe;
function Fe(e) {
  return Ne.base + e.replace(/\.png$/i, Ne.ext);
}
function Ie(e) {
  if (typeof e != `string` || !e.startsWith(`assets/`)) return e;
  let t = Fe(e);
  return Pe[t] ?? t;
}
let Le;
function Re(e) {
  return e.includes(`assets/`)
    ? e.replace(Le, (e, t, n) => `url(${t}${String(Ie(n))}${t})`)
    : e;
}
function ze(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = Re(r);
  return t;
}
function resolveStyle(e) {
  if (e != null)
    return typeof e == `object` ? e : ze(parseInlineStyle(String(e)));
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
  Ne = {
    base: `azul/`,
    ext: `.webp`,
  };
  Pe = {};
  Le = /url\((['"]?)(assets\/[^'")]+)\1\)/g;
}
export {
  Ae,
  renderContent,
  asArray,
  N,
  Ie,
  resolveStyle,
  initializeElementAdapter,
};
