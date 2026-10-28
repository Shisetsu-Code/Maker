/**
 * blaze / runtime.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import * as ReactDOMClient from "react-dom/client";
import {
  w,
  createPreviewBridge,
  notifyPreviewReady,
} from "./preview-bridge.js";
import { BlazeLobbyController } from "./lobby-controller.js";
import { dn, fn, Cn, deriveBlazeTheme } from "./brand-theme.js";
let Jn;
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
function nr({ children: e }) {
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
let ir, ar;
function applyTheme() {
  let e = deriveBlazeTheme(ir),
    t = (e, t) => {
      let n = Object.entries(t)
        .map(([e, t]) => `${e}:${t}`)
        .join(`;`);
      return n ? `${e}{${n}}` : ``;
    },
    n = t(`:root`, e.vars) + t(`:root.theme-dark`, e.varsOscuro),
    r = `${n}|${e.oscuro}`;
  r !== ar &&
    ((ar = r),
    upsertStyle(`bb-variables`, n),
    upsertStyle(
      `bb-oscuro`,
      e.oscuro
        ? `:root.theme-dark{filter:none}:root.theme-dark image-slot,:root.theme-dark img,:root.theme-dark video,:root.theme-dark iframe{filter:none}:root img.bb-logo-casa,:root img.bb-logo-texto{filter:none}`
        : ``,
    ));
}
let sr, cr;
function buildBrandProps(e, t) {
  let n =
      typeof e.nombre == `string` && e.nombre.trim() !== ``
        ? e.nombre.trim()
        : w,
    r = t.logo,
    i = t.isotipo,
    a = e.logoPropio === !0 && typeof r == `string` && r !== ``,
    o = !a && e.logoTexto === !0 && typeof r == `string` && r !== ``;
  return a || o
    ? {
        logoUrl: r,
        logoClase: a ? `` : `bb-logo-texto`,
        isoUrl: typeof i == `string` && i !== `` ? i : r,
        isoClase: ``,
        isoAncho: typeof i == `string` && i !== `` ? `auto` : `24px`,
        ...dn(n),
      }
    : {
        logoUrl: sr,
        logoClase: `bb-logo-casa`,
        isoUrl: sr,
        isoClase: `bb-logo-casa`,
        isoAncho: `24px`,
        ...dn(n),
      };
}
let ur, dr;
function updateBrand(e) {
  ur = e;
  for (let e of dr) e();
}
let subscribeBrand, getBrandSnapshot;
function BlazePreview({ api: e }) {
  let t = React.useSyncExternalStore(subscribeBrand, getBrandSnapshot);
  return (
    React.useEffect(() => {
      ((e.dibujos += 1), (e.listo = !0));
    }, [t, e]),
    (0, JSXRuntime.jsx)(nr, {
      children: (0, JSXRuntime.jsx)(cr, {
        startLoggedIn: !0,
        liveFeed: !0,
        autoplay: !0,
        showBackground: !1,
        demoState: `Normal`,
        ...t,
      }),
    })
  );
}
let gr;
function mountPreview(e, t, n) {
  gr ||
    ((gr = !0),
    (ur = buildBrandProps(t, n)),
    createPreviewRoot().render(
      (0, JSXRuntime.jsx)(BlazePreview, {
        api: e,
      }),
    ));
}
let vr, yr;
function initializeRuntime() {
  Jn = [
    `https://fonts.googleapis.com`,
    `/assets/external/fonts.googleapis.com/css2.2e70c2c8f882.css`,
  ];
  for (let e of Jn) {
    let t = document.createElement(`link`);
    ((t.rel =
      e.includes(`/css2?`) ||
      e.includes(`/assets/external/fonts.googleapis.com/css2.`)
        ? `stylesheet`
        : `preconnect`),
      (t.href = e),
      document.head.appendChild(t));
  }
  (upsertStyle(
    `bb-prototipo`,
    `/* «Casino App.dc.html»: <helmet> style and pseudo-class rules */
body{margin:0;background:var(--bb-bg,#F7F7F8);}
*{box-sizing:border-box;}
a{color:var(--bb-text,#0A0A0B);text-decoration:none;}
a:hover{color:var(--bb-text,#0A0A0B);}
.nosb::-webkit-scrollbar{display:none;}
.bgpass>*{pointer-events:auto;}
input::placeholder{color:var(--bb-text-4,#8A8B92);}
input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;}
html.theme-dark{filter:invert(1) hue-rotate(180deg);}
html.theme-dark image-slot,html.theme-dark img,html.theme-dark video,html.theme-dark iframe{filter:invert(1) hue-rotate(180deg);}
::view-transition-old(root),::view-transition-new(root){animation:none;mix-blend-mode:normal;}
::view-transition-old(root){z-index:1;}
::view-transition-new(root){z-index:2;}
@keyframes skel{0%,100%{opacity:1}50%{opacity:0.45}}
@keyframes screenIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes rowIn{from{opacity:0;transform:translateY(-6px);background:rgba(var(--bb-acento-rgb,10,10,11),0.12)}to{opacity:1;transform:none}}
@keyframes popIn{from{opacity:0;transform:translateY(-8px) scale(.98)}to{opacity:1;transform:none}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes toastIn{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:none}}
button,a,[role=button]{-webkit-tap-highlight-color:transparent;}
button:focus-visible,a:focus-visible,input:focus-visible{outline:2px solid var(--bb-acento,#0A0A0B);outline-offset:2px;}
button:active{transform:scale(.97);}
button:disabled{opacity:.5;cursor:not-allowed;}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;}}
.bb0-0:hover{background:var(--bb-bg-deep,#FFFFFF) !important}
.bb0-1:hover{color:var(--bb-text,#0A0A0B) !important;background:var(--bb-surface,#EFEFF1) !important}
.bb0-2:hover{background:var(--bb-surface,#EFEFF1) !important}
.bb0-3:hover{background:var(--bb-surface-2,#E5E5E8) !important}
.bb0-4:hover{background:var(--bb-acento-hover,#2A2B30) !important}
.bb0-5:hover{border-color:var(--bb-acento,#0A0A0B) !important}
.bb0-6:hover{border-color:var(--bb-border-strong,#C2C2C7) !important}
.bb0-7:hover{transform:translateY(-6px) !important}
.bb0-8:hover{border-color:var(--bb-acento,#0A0A0B) !important;color:var(--bb-text,#0A0A0B) !important}
/* «AuthModal.dc.html»: <helmet> style and pseudo-class rules */

.bb1-0:hover{background:var(--bb-surface-2,#E5E5E8) !important;color:var(--bb-text,#0A0A0B) !important}
.bb1-1:focus{border-color:var(--bb-acento,#0A0A0B) !important}
.bb1-2:hover{background:var(--bb-acento-hover,#2A2B30) !important}
.bb1-3:hover{border-color:var(--bb-acento,#0A0A0B) !important}
/* «ScreenCategory.dc.html»: <helmet> style and pseudo-class rules */

.bb2-0:hover{transform:translateY(-3px) !important}
.bb2-1:hover{border-color:var(--bb-acento,#0A0A0B) !important}
/* «ScreenGame.dc.html»: <helmet> style and pseudo-class rules */

.bb3-0:hover{background:var(--bb-acento-hover,#2A2B30) !important}
.bb3-1:hover{background:var(--bb-secondary,#E1E1E5) !important;color:var(--bb-text,#0A0A0B) !important}
.bb3-2:hover{background:var(--bb-surface-2,#E5E5E8) !important}
/* «ScreenKYC.dc.html»: <helmet> style and pseudo-class rules */


/* «ScreenMyBets.dc.html»: <helmet> style and pseudo-class rules */

.bb5-0:hover{border-color:var(--bb-acento,#0A0A0B) !important}
.bb5-1:hover{background:var(--bb-surface-2,#E5E5E8) !important}
/* «ScreenProfile.dc.html»: <helmet> style and pseudo-class rules */


/* «ScreenPromos.dc.html»: <helmet> style and pseudo-class rules */


/* «ScreenProviders.dc.html»: <helmet> style and pseudo-class rules */

.bb8-0:hover{border-color:var(--bb-acento,#0A0A0B) !important}
/* «ScreenStats.dc.html»: <helmet> style and pseudo-class rules */

.bb9-0:hover{background:var(--bb-surface-2,#E5E5E8) !important}
/* «ScreenSupport.dc.html»: <helmet> style and pseudo-class rules */

.bba-0:hover{border-color:var(--bb-acento,#0A0A0B) !important}
/* «ScreenVIP.dc.html»: <helmet> style and pseudo-class rules */


/* «ScreenWallet.dc.html»: <helmet> style and pseudo-class rules */

.bbc-0:hover{background:var(--bb-acento-hover,#2A2B30) !important}
.bbc-1:hover{background:var(--bb-secondary-hover,#D1D1D6) !important}
`,
  ),
    upsertStyle(
      `bb-logo`,
      `.bb-logo-casa{filter:invert(1) hue-rotate(180deg)}.bb-logo-texto{filter:brightness(0)}`,
    ));
  ir = {
    acento: fn,
    fondo: `#f7f7f8`,
    tarjeta: `auto`,
  };
  ar = ``;
  sr = `rushybet/rushybet-logo.webp`;
  cr = BlazeLobbyController;
  ur = buildBrandProps({}, {});
  dr = new Set();
  subscribeBrand = (e) => (
    dr.add(e),
    () => {
      dr.delete(e);
    }
  );
  getBrandSnapshot = () => ur;
  gr = !1;
  vr = createPreviewBridge(`blaze`, (e, t, n) => {
    if (!gr) {
      n === `disc` && mountPreview(vr, e, t);
      return;
    }
    ((vr.listo = !1), updateBrand(buildBrandProps(e, t)));
  });
  yr = vr.vars.bind(vr);
  ((vr.vars = (e) => {
    if ((yr(e), !e || typeof e != `object`)) return;
    let t = Cn(e[`--dm-p`]),
      n = Cn(e[`--dm-bb-f`]),
      r = e[`--dm-bb-t`];
    (t !== null && (ir.acento = t),
      n !== null && (ir.fondo = n),
      typeof r == `string` &&
        (r.trim() === `auto` || Cn(r) !== null) &&
        (ir.tarjeta = r.trim() === `auto` ? `auto` : Cn(r)),
      (t !== null || n !== null || r !== void 0) && applyTheme());
  }),
    setTimeout(() => {
      if (!gr) {
        let e = vr.estado();
        mountPreview(vr, e.disc, e.imgs);
      }
    }, 1500),
    notifyPreviewReady(`blaze`));
}
export { initializeRuntime };
