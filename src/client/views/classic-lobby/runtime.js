/**
 * classic-lobby / runtime.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import * as JSXRuntime from "react/jsx-runtime";
import { ClassicLobbyController } from "./lobby-controller.js";
import { createDemoWinners } from "./demo-winners.js";
import { of } from "./brand-theme.js";
import { createPreviewBridge, notifyPreviewReady } from "./preview-bridge.js";
let pf, mf, hf, gf, _f;
function ClassicLobbyPreview({ inicial: e, api: t }) {
  let [n, r] = (0, React.useState)(e);
  return (
    (0, React.useEffect)(
      () => (
        (hf = r),
        (gf &&= (r(gf), null)),
        () => {
          hf = null;
        }
      ),
      [],
    ),
    (0, React.useEffect)(() => {
      ((t.dibujos += 1), (t.listo = !0));
    }, [n, t]),
    (0, JSXRuntime.jsx)(ClassicLobbyController, {
      user: {
        name: `Jugador`,
        email: `demo@demo.invalid`,
        initial: `J`,
      },
      walletId: `w-demo`,
      esJugador: !0,
      balanceCents: 1105200,
      held: null,
      openRequests: [],
      winners: mf,
      popularIdx: [],
      serverFavorites: [],
      notice: null,
      pollMs: 36e5,
      withGoogle: !1,
      turnstileSiteKey: null,
      numeroDeCarga: `5490000000000`,
      whatsappSoporte: `5490000000000`,
      marcaDispositivo: null,
      tema: n,
    })
  );
}
function mountPreview(e, t, n) {
  if (_f) return;
  _f = !0;
  let r = document.getElementById(`root`);
  if (!r) throw Error(`vista-lobby: falta #root`);
  (0, ReactDOMClient.createRoot)(r).render(
    (0, JSXRuntime.jsx)(ClassicLobbyPreview, {
      inicial: pf(t, n),
      api: e,
    }),
  );
}
let bf;
function initializeRuntime() {
  pf = of;
  mf = createDemoWinners(12);
  hf = null;
  gf = null;
  _f = !1;
  bf = createPreviewBridge(`lobby`, (e, t, n) => {
    if (!_f) {
      n === `disc` && mountPreview(bf, e, t);
      return;
    }
    bf.listo = !1;
    let r = pf(e, t);
    hf ? hf(r) : (gf = r);
  });
  (setTimeout(() => {
    if (!_f) {
      let e = bf.estado();
      mountPreview(bf, e.disc, e.imgs);
    }
  }, 1500),
    notifyPreviewReady(`lobby`));
}
export { initializeRuntime };
