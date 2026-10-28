/**
 * azul / rendering.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as JSXRuntime from "react/jsx-runtime";
import * as ReactDOMClient from "react-dom/client";
let Wt;
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
function applyCssVariables(e) {
  upsertStyle(
    `rc-variables`,
    `:root{${Object.entries(e)
      .map(([e, t]) => `${e}:${t}`)
      .join(`;`)}}`,
  );
}
function $t({ children: e }) {
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
  Wt = {
    "--rc-fondo": `1,0,40`,
    "--rc-tarjeta": `0,2,79`,
    "--rc-marca": `24,61,235`,
    "--rc-marca-luz": `48,86,246`,
    "--rc-acento": `66,133,244`,
    "--rc-borde": `35,72,166`,
    "--rc-hover": `35,55,158`,
    "--rc-tinta-1": `130,175,255`,
    "--rc-tinta-2": `120,170,255`,
    "--rc-tinta-3": `170,195,255`,
    "--rc-deporte": `38,77,142`,
    "--rc-velo": `3,6,90`,
    "--rc-gris": `178,179,202`,
    "--rc-mesa": `0,0,16`,
  };
}
export {
  Wt,
  upsertStyle,
  applyCssVariables,
  $t,
  createPreviewRoot,
  initializeRendering,
};
