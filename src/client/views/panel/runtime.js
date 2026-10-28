/**
 * panel / runtime.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import * as JSXRuntime from "react/jsx-runtime";
import { Xd, zp } from "./demo-api.js";
import { PanelShell } from "./panel-shell.js";
import {
  createPreviewBridge,
  notifyPreviewReady,
  zC,
  HC,
  UC,
  GC,
} from "./preview-bridge.js";
import { createPanelStateStore, nw, ow } from "./state-store.js";
import { projectPanelState } from "./dashboard-projection.js";
let Pw, Fw;
let Iw;
let Lw, Rw;
function PanelPreview({ inicial: e, api: t }) {
  let [n, r] = (0, React.useState)(e),
    i = (0, React.useSyncExternalStore)(Iw.suscribir, Iw.leer, Iw.leer),
    [a, o] = (0, React.useState)(() => Date.now());
  ((0, React.useEffect)(() => {
    let e = window.setInterval(() => o(Date.now()), 3e4);
    return () => window.clearInterval(e);
  }, []),
    (0, React.useEffect)(
      () => (
        (Rw = r),
        r(t.estado().disc),
        () => {
          Rw = null;
        }
      ),
      [t],
    ));
  let s = Lw(n);
  Xd.casaNombre = s;
  let c = (0, React.useMemo)(
      () =>
        projectPanelState(i, {
          casaNombre: s,
          ahora: Math.max(a, Date.now()),
        }),
      [i, s, a],
    ),
    l = zC(n);
  return (
    (0, React.useEffect)(() => {
      ((t.dibujos += 1), (t.listo = !0), HC());
    }, [l, c, t]),
    (0, JSXRuntime.jsx)(PanelShell, {
      ...c,
      marcaDemo: l,
    })
  );
}
let Bw, Vw;
function initializeRuntime() {
  Pw = nw(window.location.search);
  Fw = null;
  try {
    Fw = window.localStorage.getItem(`demo-socio:${Pw}:nombre`);
  } catch {
    Fw = null;
  }
  Iw = createPanelStateStore(Pw, Fw);
  ((Xd.almacen = Iw),
    zp(),
    ow(() => Iw.leer()),
    (globalThis.__demoRefresh = () => Iw.avisar()),
    UC());
  Lw = (e) =>
    (typeof e.nombre == `string` ? e.nombre.trim() : ``) || Fw || `Mi casino`;
  Rw = null;
  Bw = createPreviewBridge(`panel`, (e, t) => {
    (GC(e, t), Rw && Rw(e));
  });
  Vw = document.getElementById(`root`);
  if (!Vw) throw Error(`vista-socio-panel: falta #root`);
  ((0, ReactDOMClient.createRoot)(Vw).render(
    (0, JSXRuntime.jsx)(PanelPreview, {
      inicial: Bw.estado().disc,
      api: Bw,
    }),
  ),
    notifyPreviewReady(`panel`));
}
export { initializeRuntime };
