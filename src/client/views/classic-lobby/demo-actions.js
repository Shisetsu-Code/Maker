/**
 * classic-lobby / demo-actions.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { createLazyInitializer } from "./demo-guards.js";
import { normalizeDemoGameRequest } from "./demo-game-request.js";
var Ho, Uo, Wo, Go;
function normalizeDemoGameResponse(e, t) {
  let n = t && typeof t == `object` ? t : {};
  return e === 200 &&
    n.ok === !0 &&
    typeof n.url == `string` &&
    /^https?:\/\//i.test(n.url)
    ? {
        ok: !0,
        url: n.url,
      }
    : $o(e === 422 ? Yo : e === 429 ? Xo : Zo);
}
var Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as, os, ss;
function initializeDemoActions() {
  Uo = createLazyInitializer(() => {
    Ho = {
      misNoLeidosAction: () => 0,
      verMiChatAction: () => ({
        ok: !0,
        disponible: !0,
        mensajes: [],
        sinLeer: 0,
      }),
    };
  });
  Go = createLazyInitializer(() => {
    Wo = `/api/muestra/juego-demo`;
  });
  ns = createLazyInitializer(() => {
    (Uo(),
      Go(),
      (Jo = `Esto es una demo: no se guarda nada ni se mueve plata`),
      (Yo = `En la demo no se juega este juego: sólo los que tienen modo diversión. Probá con una tragamonedas.`),
      (Xo = `Abriste muchos juegos seguidos. Esperá unos minutos y probá de nuevo.`),
      (Zo = `No se pudo abrir el juego en modo diversión. Probá de nuevo en un momento.`),
      (Qo = {
        ok: !1,
        reason: `demo`,
        mensaje: Jo,
        error: Jo,
      }),
      ($o = (e) => ({
        ok: !1,
        reason: `demo`,
        mensaje: e,
      })),
      (es = async (e) => {
        let t = normalizeDemoGameRequest(e);
        if (!t)
          return $o(`En la demo los juegos se abren sólo en modo diversión.`);
        let n;
        try {
          n = await fetch(Wo, {
            method: `POST`,
            headers: {
              "content-type": `application/json`,
            },
            body: JSON.stringify(t),
            credentials: `omit`,
            cache: `no-store`,
          });
        } catch {
          return $o(Zo);
        }
        let r = null;
        try {
          r = await n.json();
        } catch {
          r = null;
        }
        return normalizeDemoGameResponse(n.status, r);
      }),
      (ts = {
        "app/game-actions.ts#launchGameAction": es,
        "app/soporte-actions.ts#misNoLeidosAction": Ho.misNoLeidosAction,
        "app/soporte-actions.ts#verMiChatAction": Ho.verMiChatAction,
      }));
  });
  ss = createLazyInitializer(() => {
    (ns(),
      (rs =
        (e) =>
        async (...t) => {
          let n = ts[`app/soporte-actions.ts#` + e];
          return n
            ? n(...t)
            : {
                ...Qo,
              };
        }),
      (is = rs(`verMiChatAction`)),
      (as = rs(`misNoLeidosAction`)),
      (os = rs(`escribirSoporteAction`)));
  });
  ss();
}
export { Qo, ts, ns, is, as, os, ss, initializeDemoActions };
