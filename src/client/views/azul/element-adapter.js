/**
 * azul / element-adapter.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { resolveAzulAsset, normalizeAzulAssetPath } from "./asset-paths.js";
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
function Et(e) {
  return e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function parseInlineStyle(e) {
  let t = {};
  for (let n of e.split(`;`)) {
    let e = n.indexOf(`:`);
    if (e < 0) continue;
    let r = n.slice(0, e).trim();
    t[r.startsWith(`--`) ? r : Et(r)] = n.slice(e + 1).trim();
  }
  return t;
}
function Ot(e) {
  return e === void 0 ? `` : e;
}
let assetConfiguration, imageOverrides;
function setAssetConfiguration(e) {
  assetConfiguration = {
    ...e,
  };
}
function resolveViewAssetPath(e) {
  return normalizeAzulAssetPath(e, assetConfiguration);
}
function setImageOverrides(e) {
  imageOverrides = {
    ...e,
  };
}
function resolveViewAsset(e) {
  return resolveAzulAsset(e, assetConfiguration, imageOverrides);
}
let Pt;
function resolveCssAssets(e) {
  return e.includes(`assets/`)
    ? e.replace(Pt, (e, t, n) => `url(${t}${String(resolveViewAsset(n))}${t})`)
    : e;
}
function resolveAssetStyles(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = resolveCssAssets(r);
  return t;
}
function resolveStyle(e) {
  if (e != null)
    return typeof e == `object`
      ? e
      : resolveAssetStyles(parseInlineStyle(String(e)));
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
  assetConfiguration = {
    base: `azul/`,
    ext: `.webp`,
  };
  imageOverrides = {};
  Pt = /url\((['"]?)(assets\/[^'")]+)\1\)/g;
}
export {
  renderContent,
  asArray,
  Ot,
  setAssetConfiguration,
  resolveViewAssetPath,
  setImageOverrides,
  resolveViewAsset,
  resolveAssetStyles,
  resolveStyle,
  initializeElementAdapter,
};
