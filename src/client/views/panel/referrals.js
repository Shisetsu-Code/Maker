/**
 * panel / referrals.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { string as zodString } from "zod";
import { Yd, Rp } from "./demo-api.js";
import { Card, _g, Button, Notice } from "./ui-components.js";
let U_, W_, G_, K_;
function q_(e, t) {
  return `${e.replace(/\/+$/, ``)}/r/${t}`;
}
let J_, Y_, X_;
function Z_(e) {
  let t = (e ?? ``).trim().toLowerCase().replace(/\.$/, ``);
  if (
    !t ||
    t === `localhost` ||
    /^[\d.]+$/.test(t) ||
    t.includes(`:`) ||
    Y_.some((e) => t === e || t.endsWith(`.${e}`))
  )
    return J_;
  let n = t.split(`.`).filter(Boolean);
  return n.length < 2
    ? J_
    : n.length > 2 && X_.includes(n[0] ?? ``)
      ? n.slice(1).join(`.`)
      : n.join(`.`);
}
function Q_(e, t) {
  let n = e.split(`.`);
  return n.length <= 2
    ? ``
    : X_.includes(n[0] ?? ``)
      ? `${t}//${n.slice(1).join(`.`)}`
      : `${t}//${e}`;
}
function $_(e, t, n = J_, r = `usuario`) {
  return r === `correo`
    ? `Contraseña: ${t}\nEntrá en ${n} con el correo con el que te registraste (no con el usuario): la primera vez te va a pedir que elijas tu propia contraseña.`
    : `Usuario: ${e}\nContraseña: ${t}\nEntrá en ${n}: la primera vez te va a pedir que elijas tu propia contraseña.`;
}
function ev(e) {
  return `¿Generar una contraseña nueva para ${e}? La actual deja de andar y se le cierran las sesiones. Va a tener que elegir la suya al entrar.`;
}
let tv, nv;
let rv, iv;
function av() {
  if (typeof window > `u`) return ``;
  let { hostname: e, protocol: t } = globalThis.__demoSitio;
  return Q_(e, t) || globalThis.__demoSitio.origin;
}
async function ov(e) {
  try {
    if (navigator.clipboard?.writeText)
      return (await navigator.clipboard.writeText(e), !0);
  } catch {}
  try {
    let t = document.createElement(`textarea`);
    ((t.value = e),
      t.setAttribute(`readonly`, ``),
      (t.style.position = `fixed`),
      (t.style.opacity = `0`),
      document.body.appendChild(t),
      t.select());
    let n = document.execCommand(`copy`);
    return (document.body.removeChild(t), n);
  } catch {
    return !1;
  }
}
function sv() {
  let [e, t] = (0, React.useTransition)(),
    [n, r] = (0, React.useState)(null),
    [i, a] = (0, React.useState)(null),
    [o, s] = (0, React.useState)(!1),
    c = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    let e = !0;
    return (
      W_()
        .then((t) => {
          e && r(t);
        })
        .catch(() => {}),
      () => {
        ((e = !1), c.current && clearTimeout(c.current));
      }
    );
  }, []);
  let l = n?.ok ? n.link : null,
    u = l ? q_(av(), l.codigo) : ``;
  function d(e) {
    r((t) =>
      t?.ok
        ? {
            ...t,
            link: e,
          }
        : t,
    );
  }
  async function f() {
    if (!u) return;
    let e = await ov(u);
    (c.current && clearTimeout(c.current),
      e
        ? (a(null), s(!0), (c.current = setTimeout(() => s(!1), 2200)))
        : (s(!1),
          a({
            donde: `copiar`,
            ok: !1,
            texto: `No se pudo copiar. Mantené apretado el link y copialo a mano.`,
          })));
  }
  function p() {
    e ||
      (a(null),
      t(async () => {
        let e = await G_().catch(() => ({
          ok: !1,
          mensaje: `No se pudo crear el link.`,
        }));
        (e.ok && d(e.link),
          a({
            donde: `crear`,
            ok: e.ok,
            texto: e.mensaje,
          }));
      }));
  }
  function m() {
    if (e || !l) return;
    let n = `¿Generar un link nuevo?

El link que ya mandaste (${u}) DEJA DE FUNCIONAR en el acto: la gente nueva que entre por él NO va a quedar como cliente tuyo.

Los que ya se registraron siguen siendo tuyos. Vas a tener que mandar el link nuevo.`;
    confirm(n) &&
      (a(null),
      s(!1),
      t(async () => {
        let e = await K_({
          vistoId: l.id,
        }).catch(() => ({
          ok: !1,
          mensaje: `No se pudo regenerar. Tu link de antes sigue andando.`,
        }));
        (e.ok && d(e.link),
          a({
            donde: `regenerar`,
            ok: e.ok,
            texto: e.mensaje,
          }));
      }));
  }
  return {
    vista: n,
    link: l,
    url: u,
    pendiente: e,
    copiado: o,
    aqui: (e) => (i && i.donde === e ? i : null),
    copiarLink: f,
    crear: p,
    regenerar: m,
  };
}
function cv(e) {
  return e.registrados === 0
    ? `Todavía no se registró nadie por tu link.`
    : `${e.registrados === 1 ? `Se registró 1 persona` : `Se registraron ${iv(e.registrados)} personas`} por tu link · ${e.cargaron === 1 ? `1 ya cargó` : `${iv(e.cargaron)} ya cargaron`}`;
}
function lv(e) {
  let t = e.replace(/^https?:\/\//, ``),
    n = t.lastIndexOf(`/r/`);
  return n < 0
    ? {
        cabeza: t,
        cola: ``,
      }
    : {
        cabeza: t.slice(0, n),
        cola: t.slice(n),
      };
}
function ReferralCard({ i: e }) {
  let t = sv();
  if (!t.vista?.ok) return null;
  let n = t.vista,
    r = lv(t.url);
  return (0, JSXRuntime.jsx)(Card, {
    i: e,
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `14px`,
        minWidth: 0,
      },
      children: [
        (0, JSXRuntime.jsx)(_g, {
          texto: `MI LINK`,
        }),
        t.link
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  "aria-label": `Tu link: ${t.url}`,
                  style: {
                    display: `flex`,
                    alignItems: `center`,
                    minWidth: 0,
                    padding: `12px 14px`,
                    borderRadius: `12px`,
                    background: `var(--sup2)`,
                    border: `1px solid var(--borde2)`,
                    fontSize: `14px`,
                    color: `var(--tx)`,
                    userSelect: `all`,
                    WebkitUserSelect: `all`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        minWidth: 0,
                        overflow: `hidden`,
                        textOverflow: `ellipsis`,
                        whiteSpace: `nowrap`,
                        color: `var(--tx2)`,
                      },
                      children: r.cabeza,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        flex: `0 0 auto`,
                        whiteSpace: `nowrap`,
                        fontWeight: 700,
                        color: `var(--naranja-claro)`,
                      },
                      children: r.cola,
                    }),
                  ],
                }),
                !n.registroAbierto &&
                  (0, JSXRuntime.jsx)(Notice, {
                    aviso: {
                      ok: !1,
                      texto: `Hoy nadie se puede registrar solo: el link todavía no trae clientes. El dueño del casino tiene que abrir el registro en Ajustes.`,
                    },
                  }),
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `8px`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(Notice, {
                      aviso: t.aqui(`crear`),
                    }),
                    (0, JSXRuntime.jsx)(Button, {
                      tono: `naranja`,
                      ancho: !0,
                      icono: t.copiado ? `tilde` : `copiar`,
                      onClick: () => void t.copiarLink(),
                      deshabilitado: t.pendiente,
                      children: t.copiado ? `Copiado` : `Copiar mi link`,
                    }),
                    t.copiado &&
                      (0, JSXRuntime.jsx)(`span`, {
                        role: `status`,
                        style: {
                          fontSize: `12.5px`,
                          color: `var(--verde)`,
                          lineHeight: 1.5,
                        },
                        children: `Listo, ya lo podés pegar en WhatsApp.`,
                      }),
                    (0, JSXRuntime.jsx)(Notice, {
                      aviso: t.aqui(`copiar`),
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`p`, {
                  style: {
                    margin: 0,
                    fontSize: `13px`,
                    lineHeight: 1.6,
                    color: `var(--tx2)`,
                  },
                  children: cv(n),
                }),
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `8px`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(Button, {
                      tono: `secundario`,
                      ancho: !0,
                      onClick: t.regenerar,
                      pendiente: t.pendiente,
                      children: t.pendiente ? `Generando…` : `Regenerar link`,
                    }),
                    (0, JSXRuntime.jsx)(Notice, {
                      aviso: t.aqui(`regenerar`),
                    }),
                  ],
                }),
              ],
            })
          : (0, JSXRuntime.jsxs)(`div`, {
              style: {
                display: `flex`,
                flexDirection: `column`,
                gap: `8px`,
              },
              children: [
                (0, JSXRuntime.jsx)(`p`, {
                  style: {
                    margin: 0,
                    fontSize: `13px`,
                    lineHeight: 1.6,
                    color: `var(--tx2)`,
                  },
                  children: `Todavía no tenés link. Crealo y mandáselo a la gente que querés que juegue con vos.`,
                }),
                (0, JSXRuntime.jsx)(Button, {
                  tono: `naranja`,
                  ancho: !0,
                  onClick: t.crear,
                  pendiente: t.pendiente,
                  children: t.pendiente ? `Creando…` : `Crear mi link`,
                }),
                (0, JSXRuntime.jsx)(Notice, {
                  aviso: t.aqui(`crear`),
                }),
              ],
            }),
        (0, JSXRuntime.jsx)(`p`, {
          style: {
            margin: 0,
            fontSize: `12.5px`,
            lineHeight: 1.6,
            color: `var(--tx3)`,
          },
          children: `Mandalo por WhatsApp. Quien entre por este link y se abra una cuenta queda como cliente tuyo. Si ya tenía cuenta, o ya es de otro cajero, no cambia de dueño.`,
        }),
      ],
    }),
  });
}
let dv;
function initializeReferrals() {
  U_ =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/referidos-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  W_ = U_(`verMiLinkAction`);
  G_ = U_(`crearMiLinkAction`);
  K_ = U_(`regenerarMiLinkAction`);
  zodString()
    .max(64)
    .transform((e) => e.trim().toLowerCase())
    .pipe(zodString().regex(/^[a-z0-9]{10}$/));
  new TextEncoder();
  J_ = `rushybet.com`;
  Y_ = [
    `onrender.com`,
    `vercel.app`,
    `trycloudflare.com`,
    `ngrok-free.app`,
    `ngrok.io`,
  ];
  X_ = [`caja`, `www`, `panel`, `admin`, `staff`];
  tv = {
    fondo: `#0a0a0a`,
    glow: `radial-gradient(900px 380px at 65% -8%,rgba(244,82,11,.015),transparent 65%)`,
    barra: `#101010`,
    linea: `#1d1d1d`,
    tarjeta: `#141414`,
    borde: `#272727`,
    bordeHover: `#383838`,
    interno: `#0d0d0d`,
    interno2: `#111111`,
    bordeInterno: `#242424`,
    bordeInterno2: `#2a2a2a`,
    fila: `#1e1e1e`,
    naranja: `#f4520b`,
    naranjaClaro: `#ff8a55`,
    naranjaTexto: `#ff6a2b`,
    verde: `#34d17b`,
    ambar: `#f4a11b`,
    ambarApagado: `#c98a3a`,
    rojo: `#ff5470`,
    badge: `#ff3b5c`,
    tx: `#ececec`,
    tx2: `#8a8a8a`,
    tx3: `#6f6f6f`,
    tx4: `#5c5c5c`,
    txNav: `#9a9a9a`,
  };
  nv = `'Oswald', system-ui, sans-serif`;
  ([`0 1px 0 rgba(0,0,0,.55)`, `0 10px 22px -14px rgba(0,0,0,.9)`].join(`, `),
    `${tv.tx3}${tv.naranjaClaro}${tv.tx2}${tv.bordeHover}${tv.bordeHover}${tv.fondo}${tv.borde}`,
    tv.tarjeta,
    `${tv.borde}`);
  rv = {
    fontFamily: nv,
    fontSize: `10px`,
    letterSpacing: `1.4px`,
    textTransform: `uppercase`,
    color: tv.tx3,
  };
  iv = (e) => e.toLocaleString(`es-AR`);
  dv = {
    minHeight: `44px`,
    padding: `11px 18px`,
    borderRadius: `10px`,
    fontSize: `13.5px`,
    fontWeight: 600,
    cursor: `pointer`,
    fontFamily: `inherit`,
    whiteSpace: `nowrap`,
    width: `100%`,
  };
  (({
    ...dv,
  }),
    {
      ...dv,
    },
    tv.tx2);
}
export { Z_, $_, ev, tv, nv, rv, ReferralCard, initializeReferrals };
