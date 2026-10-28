/**
 * brasa / runtime.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import {
  se,
  createPreviewBridge,
  notifyPreviewReady,
} from "./preview-bridge.js";
import { Re } from "./game-catalog.js";
import { BrasaLobbyController } from "./lobby-controller.js";
import { upsertStyle, lt, createPreviewRoot } from "./rendering.js";
import { dt, ft, Dt, deriveBrasaTheme, Yt, Xt, Zt, Qt } from "./brand-theme.js";
let $t;
function applyTheme() {
  let e = deriveBrasaTheme($t),
    t = Object.entries(e.vars)
      .map(([e, t]) => `${e}:${t}`)
      .join(`;`);
  upsertStyle(`br-variables`, (t ? `:root{${t}}` : ``) + Zt(e));
}
let tn, nn;
function buildBrandProps(e, t) {
  let n =
      typeof e.nombre == `string` && e.nombre.trim() !== ``
        ? e.nombre.trim()
        : se,
    r = nn(t.logo),
    i = r ?? `rushybet/rushybet-logo.webp`,
    a =
      r !== null && e.logoPropio === !0
        ? ``
        : r !== null && e.logoTexto === !0
          ? Xt
          : Yt,
    o = nn(t.isotipo),
    { isoMarca: s, isoTinta: c } = Qt({
      logoPropio: e.logoPropio === !0,
      nombreDeLaCasa: n === se,
      isoRecibido: o !== null,
    });
  return {
    logoUrl: i,
    logoClase: a,
    isoMarca: s,
    isoUrl:
      o ??
      `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-3.55%20-6.27%2042.98%2042.98%22%3E%3Cpath%20d%3D%22M%208.598%2030.442%20L%200%2015.55%20L%200%200%20L%2022.215%200%20L%2022.215%2013.411%20L%2022.215%2015.55%20L%2020.24%2015.55%20L%2013.617%2015.55%20L%2022.215%2030.442%20L%208.598%2030.442%20Z%22%20transform%3D%22translate(13.658%200)%22%20fill%3D%22%23FF5B14%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2215.715%22%20width%3D%2213.658%22%20height%3D%2214.645%22%20fill%3D%22%23FF5B14%22%2F%3E%3C%2Fsvg%3E`,
    isoTinta: c,
    marcaNombre: n,
    marcaMay: n.toLocaleUpperCase(`es-AR`),
  };
}
let an, on;
function updateBrand(e) {
  an = e;
  for (let e of on) e();
}
let subscribeBrand, getBrandSnapshot, un;
function BrasaPreview({ api: e }) {
  let t = React.useSyncExternalStore(subscribeBrand, getBrandSnapshot);
  return (
    React.useEffect(() => {
      ((e.dibujos += 1), (e.listo = !0));
    }, [t, e]),
    (0, JSXRuntime.jsx)(lt, {
      children: (0, JSXRuntime.jsx)(tn, {
        ...un,
        ...t,
      }),
    })
  );
}
let fn;
function mountPreview(e, t, n) {
  fn ||
    ((fn = !0),
    (an = buildBrandProps(t, n)),
    createPreviewRoot().render(
      (0, JSXRuntime.jsx)(BrasaPreview, {
        api: e,
      }),
    ));
}
let mn, hn;
function initializeRuntime() {
  $t = {
    acento: dt,
    fondo: ft,
    tarjeta: `auto`,
  };
  tn = BrasaLobbyController;
  nn = (e) => (typeof e == `string` && e !== `` ? e : null);
  an = buildBrandProps({}, {});
  on = new Set();
  subscribeBrand = (e) => (
    on.add(e),
    () => {
      on.delete(e);
    }
  );
  getBrandSnapshot = () => an;
  un = Re;
  fn = !1;
  mn = createPreviewBridge(`brasa`, (e, t, n) => {
    if (!fn) {
      n === `disc` && mountPreview(mn, e, t);
      return;
    }
    ((mn.listo = !1), updateBrand(buildBrandProps(e, t)));
  });
  hn = mn.vars.bind(mn);
  ((mn.vars = (e) => {
    if ((hn(e), !e || typeof e != `object`)) return;
    let t = Dt(e[`--dm-p`]),
      n = Dt(e[`--dm-bb-f`]),
      r = e[`--dm-bb-t`],
      i = r === `auto` ? `auto` : Dt(r),
      a = `${$t.acento}|${$t.fondo}|${$t.tarjeta}`;
    (t !== null && ($t.acento = t),
      n !== null && ($t.fondo = n),
      i !== null && ($t.tarjeta = i),
      `${$t.acento}|${$t.fondo}|${$t.tarjeta}` !== a && applyTheme());
  }),
    setTimeout(() => {
      if (!fn) {
        let e = mn.estado();
        mountPreview(mn, e.disc, e.imgs);
      }
    }, 1500),
    notifyPreviewReady(`brasa`));
}
export { initializeRuntime };
