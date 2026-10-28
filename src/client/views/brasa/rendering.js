/**
 * brasa / rendering.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as JSXRuntime from "react/jsx-runtime";
import * as ReactDOMClient from "react-dom/client";
let tt;
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function upsertStyle(e, t) {
  let n = document.getElementById(e);
  (n ||
    ((n = document.createElement(`style`)),
    (n.id = e),
    document.head.appendChild(n)),
    n.textContent !== t && (n.textContent = t));
}
function lt({ children: e }) {
  return (0, JSXRuntime.jsx)(`div`, {
    className: `sc-host`,
    children: e,
  });
}
function createPreviewRoot() {
  upsertStyle(
    `rc-pagina`,
    `html,body{height:100%;margin:0}#dc-root,#dc-root>.sc-host{height:100%}`,
  );
  let e = document.getElementById(`dc-root`);
  return (
    e ||
      ((e = document.createElement(`div`)),
      (e.id = `dc-root`),
      document.body.appendChild(e)),
    (0, ReactDOMClient.createRoot)(e)
  );
}
function initializeRendering() {
  tt = [
    `https://fonts.googleapis.com`,
    `/assets/external/fonts.googleapis.com/css2.0cb24aa0c181.css`,
  ];
}
export { tt, upsertStyle, lt, createPreviewRoot, initializeRendering };
