/**
 * azul / runtime.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { gameCatalog } from "./game-catalog.js";
import { createPreviewBridge, notifyPreviewReady } from "./preview-bridge.js";
import {
  setAssetConfiguration,
  resolveViewAssetPath,
  setImageOverrides,
} from "./element-adapter.js";
import { AzulDesktopController } from "./desktop-controller.js";
import { AzulMobileController } from "./mobile-controller.js";
import { $t, createPreviewRoot } from "./rendering.js";
import {
  An,
  jn,
  In,
  getLayoutMode,
  Bn,
  applyLayoutStyles,
  Gn,
  applyTheme,
  applyThemeVariables,
  Xn,
  tr,
} from "./theme.js";
let nr, rr, ir;
function ar(e) {
  let t = typeof e.nombre == `string` ? e.nombre.trim() : ``;
  return t !== `` && t !== `RushyBet` ? t : void 0;
}
let or;
function sr(e, t) {
  let n = resolveViewAssetPath(`assets/`),
    r = or(),
    i = {};
  for (let [e, a] of Object.entries(t))
    e.startsWith(n) && a !== `` && !r.has(e) && (i[e] = a);
  for (let [t, n] of Object.entries(Xn(e))) i[resolveViewAssetPath(t)] = n;
  let a = t.logo;
  return (
    (e.logoPropio === !0 || e.logoTexto === !0) &&
      typeof a == `string` &&
      a !== `` &&
      (i[resolveViewAssetPath(`assets/logo.png`)] = a.split(`#`)[0] + Bn),
    i
  );
}
let cr, lr;
function updatePreviewState(e) {
  cr = {
    ...cr,
    ...e,
    version: cr.version + 1,
  };
  for (let e of lr) e();
}
let subscribePreviewState, getPreviewSnapshot;
function AzulPreview({ api: e }) {
  let t = React.useSyncExternalStore(subscribePreviewState, getPreviewSnapshot);
  React.useEffect(() => {
    ((e.dibujos += 1), (e.listo = !0));
  }, [t, e]);
  let n = {
    startLoggedIn: !1,
  };
  return (
    ir.length > 0 && (n.catalogoSlots = ir),
    t.marcaNombre !== void 0 && (n.marcaNombre = t.marcaNombre),
    (0, JSXRuntime.jsx)($t, {
      children:
        t.disposicion === `celular`
          ? (0, JSXRuntime.jsx)(
              rr,
              {
                ...n,
              },
              `celular`,
            )
          : (0, JSXRuntime.jsx)(
              nr,
              {
                ...n,
              },
              `escritorio`,
            ),
    })
  );
}
let mr;
function mountPreview(e, t, n) {
  mr ||
    ((mr = !0),
    setImageOverrides(sr(t, n)),
    (gr = _r(t)),
    (cr = {
      ...cr,
      marcaNombre: ar(t),
    }),
    createPreviewRoot().render(
      (0, JSXRuntime.jsx)(AzulPreview, {
        api: e,
      }),
    ));
}
let gr, _r, vr;
function scheduleIconRefresh() {
  mr &&
    (window.clearTimeout(vr),
    (vr = window.setTimeout(() => {
      let e = br.estado();
      _r(e.disc) !== gr &&
        ((gr = _r(e.disc)),
        (br.listo = !1),
        setImageOverrides(sr(e.disc, e.imgs)),
        updatePreviewState({}));
    }, 150)));
}
let br, xr;
function initializeRuntime() {
  nr = AzulDesktopController;
  rr = AzulMobileController;
  ir = gameCatalog
    .filter((e) => e.cat === `slots` && e.img !== ``)
    .slice(0, 8)
    .map((e) => ({
      name: e.n,
      provider: e.p,
      img: e.img,
    }));
  window.__demoAzul = {
    catalogoSlots: ir,
    iconos: (e, t) => {
      let n = jn(e),
        r = jn(t);
      return !n || !r
        ? {}
        : Object.fromEntries(
            Object.entries(In(n, r)).map(([e, t]) => [
              resolveViewAssetPath(e),
              t,
            ]),
          );
    },
  };
  or = () => new Set(An.map((e) => resolveViewAssetPath(e)));
  cr = {
    disposicion: getLayoutMode(),
    marcaNombre: void 0,
    version: 0,
  };
  lr = new Set();
  subscribePreviewState = (e) => (
    lr.add(e),
    () => {
      lr.delete(e);
    }
  );
  getPreviewSnapshot = () => cr;
  (setAssetConfiguration({
    base: `azul/`,
    ext: `.webp`,
  }),
    applyLayoutStyles(cr.disposicion),
    applyTheme(),
    window.addEventListener(`resize`, () => {
      let e = getLayoutMode();
      e !== cr.disposicion &&
        (applyLayoutStyles(e),
        updatePreviewState({
          disposicion: e,
        }));
    }));
  mr = !1;
  gr = ``;
  _r = (e) =>
    e.imgOn === !1
      ? `orig`
      : `${Gn[`--rc-tarjeta`] ?? ``}|${Gn[`--rc-gris`] ?? ``}`;
  vr = 0;
  br = createPreviewBridge(`azul`, (e, t, n) => {
    if ((tr(e), !mr)) {
      n === `disc` && mountPreview(br, e, t);
      return;
    }
    ((br.listo = !1),
      setImageOverrides(sr(e, t)),
      (gr = _r(e)),
      updatePreviewState({
        marcaNombre: ar(e),
      }));
  });
  xr = br.vars.bind(br);
  ((br.vars = (e) => {
    (xr(e),
      !(!e || typeof e != `object`) &&
        applyThemeVariables(e) &&
        (scheduleIconRefresh(), tr(br.estado().disc)));
  }),
    setTimeout(() => {
      if (!mr) {
        let e = br.estado();
        mountPreview(br, e.disc, e.imgs);
      }
    }, 1500),
    notifyPreviewReady(`azul`));
}
export { initializeRuntime };
