/**
 * classic-lobby / account-security.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
function Is() {
  let e = navigator;
  return {
    pantalla: [
      Math.max(screen.width, screen.height),
      Math.min(screen.width, screen.height),
      screen.colorDepth,
      window.devicePixelRatio,
    ].join(`x`),
    plataforma: e.userAgentData?.platform ?? e.platform ?? ``,
    idiomas: (e.languages ?? [e.language]).join(`,`),
    zonaHoraria: Intl.DateTimeFormat().resolvedOptions().timeZone ?? ``,
    nucleos: e.hardwareConcurrency ?? 0,
    memoria: e.deviceMemory ?? 0,
    toques: e.maxTouchPoints ?? 0,
    agente: e.userAgent,
  };
}
async function Ls(e) {
  let t = new TextEncoder().encode(JSON.stringify(e)),
    n = await crypto.subtle.digest(`SHA-256`, t);
  return [...new Uint8Array(n)]
    .map((e) => e.toString(16).padStart(2, `0`))
    .join(``)
    .slice(0, 16);
}
function Rs(e) {
  let [t, n] = e.pantalla.split(`x`),
    r = e.idiomas.split(`,`)[0] ?? ``;
  return `${e.plataforma || `aparato`} · ${t}×${n} · ${r}`.slice(0, 80);
}
async function zs() {
  try {
    if (typeof crypto > `u` || !crypto.subtle) return null;
    let e = Is();
    return {
      hash: await Ls(e),
      etiqueta: Rs(e),
    };
  } catch {
    return null;
  }
}
let Bs, Vs;
function Hs({ siteKey: e, onToken: t, onUnavailable: n, resetKey: r = 0 }) {
  let i = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    o = (0, React.useRef)(t);
  (0, React.useEffect)(() => {
    o.current = t;
  }, [t]);
  let s = (0, React.useRef)(n);
  return (
    (0, React.useEffect)(() => {
      s.current = n;
    }, [n]),
    (0, React.useEffect)(() => {
      let t = !1;
      function n() {
        let n = Bs();
        t ||
          !i.current ||
          !n ||
          a.current ||
          (a.current = n.render(i.current, {
            sitekey: e,
            callback: (e) => o.current(e),
            "error-callback": () => {
              (o.current(``), s.current?.(`widget`));
            },
            "expired-callback": () => o.current(``),
            theme: `dark`,
            language: `es`,
            size: `flexible`,
          }));
      }
      let r = (e) => {
          t || a.current || (o.current(``), s.current?.(e));
        },
        c = setTimeout(() => r(`timeout`), 9e3);
      if (Bs()) n();
      else {
        let e = document.querySelector(`script[src="${Vs}"]`),
          t = e ?? document.createElement(`script`);
        (t.addEventListener(`load`, n),
          t.addEventListener(`error`, () => r(`script`)),
          e || ((t.src = Vs), (t.async = !0), document.head.appendChild(t)));
      }
      return () => {
        ((t = !0),
          clearTimeout(c),
          (a.current &&= (Bs()?.remove(a.current), null)));
      };
    }, [e]),
    (0, React.useEffect)(() => {
      r > 0 && a.current && (Bs()?.reset(a.current), o.current(``));
    }, [r]),
    (0, JSXRuntime.jsx)(`div`, {
      ref: i,
      style: {
        minHeight: `65px`,
        display: `flex`,
        justifyContent: `center`,
      },
    })
  );
}
let Us, Ws;
function Gs(e) {
  return new Intl.NumberFormat(`es-AR`, {
    style: `currency`,
    currency: `ARS`,
    currencyDisplay: `code`,
  }).format(Number(e) / 100);
}
function Ks(e) {
  let t = String(e ?? ``)
    .trim()
    .replace(`,`, `.`);
  if (!/^\d{1,12}(\.\d{1,2})?$/.test(t)) throw Error(`bad_amount`);
  let [n, r = ``] = t.split(`.`),
    i = BigInt(n) * 100n + BigInt((r + `00`).slice(0, 2));
  if (i <= 0n) throw Error(`bad_amount`);
  if (i > 10000000000n) throw Error(`amount_too_large`);
  return i;
}
function qs(e) {
  if (e === `demo`)
    return `Esto es una demo: no se guarda nada ni se mueve plata.`;
  switch (e) {
    case `not_logged_in`:
      return `Entrá a tu cuenta para pedirle al cajero.`;
    case `wallet_frozen`:
      return `Tu cuenta está bloqueada. Escribile al cajero para destrabarla.`;
    case `no_wallet`:
      return `Todavía no tenés una billetera activa. Escribile al cajero.`;
    case `too_small`:
      return `El mínimo por pedido es ${Gs(Us)}.`;
    case `too_large`:
      return `El máximo por pedido es ${Gs(Ws)}. Para más, escribile al cajero.`;
    case `insufficient_funds`:
      return `No tenés esa cantidad de fichas para retirar.`;
    case `already_open`:
      return `Ya tenés un pedido esperando. El cajero te va a escribir.`;
    case `cooldown`:
      return `Recién mandaste un pedido. Esperá unos segundos.`;
    case `too_many`:
      return `Demasiados intentos seguidos. Probá de nuevo en un minuto.`;
    case `bad_amount`:
      return `Escribí un monto válido, por ejemplo 5000.`;
    case `not_found`:
      return `Ese pedido ya no existe.`;
    case `key_reused`:
      return `Ese pedido cambió mientras lo enviabas. Cerrá y volvé a pedirlo.`;
    case `bad_input`:
    case `error`:
      return `No se pudo enviar el pedido. Probá de nuevo.`;
  }
}
function initializeAccountSecurity() {
  Bs = () => window.turnstile;
  Vs = `https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit`;
  Us = 10000n;
  Ws = 100000000n;
}
export { zs, Hs, Us, Ws, Gs, Ks, qs, initializeAccountSecurity };
