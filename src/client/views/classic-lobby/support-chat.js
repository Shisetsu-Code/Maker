/**
 * classic-lobby / support-chat.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import tuData from "../../catalogs/catalog-18ec76479213.json";
import { createLazyInitializer, createModuleExports } from "./demo-guards.js";
import { Va, ro } from "./game-catalog.js";
import { is, as, os, ss } from "./demo-actions.js";
import { Al, Ml } from "./desktop-lobby.js";
let tu, nu, ru;
function iu(e) {
  typeof document > `u` ||
    !ru.test(e) ||
    (document.cookie = `${nu}=${e}; Path=/; Max-Age=15552000; SameSite=Lax; Secure`);
}
function au() {
  typeof document > `u` ||
    (document.cookie.split(`;`).some((e) => e.trim().startsWith(`rb_marca=`)) &&
      (document.cookie = `${nu}=; Path=/; Max-Age=0; SameSite=Lax; Secure`));
}
function ou(e) {
  return !(!e.vendorCode || e.vendorCode === ro.vendorCode || Va(e.vendorCode));
}
function su() {
  if (hu !== void 0) return hu;
  try {
    hu = new Intl.DateTimeFormat(`en-US`, {
      timeZone: du,
      year: `numeric`,
      month: `numeric`,
      day: `numeric`,
      hour: `numeric`,
      minute: `numeric`,
      hour12: !1,
    });
  } catch {
    hu = null;
  }
  return hu;
}
function cu(e) {
  let t = su();
  if (t)
    try {
      let n = t.formatToParts(e),
        r = (e) => Number(n.find((t) => t.type === e)?.value ?? NaN),
        i = {
          anio: r(`year`),
          mes: r(`month`),
          dia: r(`day`),
          hora: r(`hour`) % 24,
          minuto: r(`minute`),
        };
      if (Object.values(i).every(Number.isFinite)) return i;
    } catch {}
  let n = new Date(e - 180 * pu);
  return {
    anio: n.getUTCFullYear(),
    mes: n.getUTCMonth() + 1,
    dia: n.getUTCDate(),
    hora: n.getUTCHours(),
    minuto: n.getUTCMinutes(),
  };
}
function lu(e, t) {
  let n = _u(t) - _u(e);
  if (n === 0) return `Hoy`;
  if (n === 1) return `Ayer`;
  let r = new Date(Date.UTC(e.anio, e.mes - 1, e.dia)).getUTCDay();
  return `${fu[r] ?? ``} ${gu(e.dia)}/${gu(e.mes)}`;
}
function uu(e, t) {
  let n = NaN,
    r = e.map((e, t) => {
      let r = new Date(e.cuando).getTime();
      return (
        Number.isFinite(r) || (r = Number.isFinite(n) ? n : NaN),
        Number.isFinite(r) && (n = r),
        {
          m: e,
          i: t,
          t: r,
        }
      );
    }),
    i = r.find((e) => Number.isFinite(e.t))?.t,
    a = Number.isFinite(t.getTime()) ? t.getTime() : (i ?? 0);
  for (let e of r) Number.isFinite(e.t) || (e.t = i ?? a);
  r.sort((e, t) => e.t - t.t || e.i - t.i);
  let o = cu(a),
    s = [],
    c = null,
    l = null,
    u = 0;
  for (let { m: e, t } of r) {
    let n = cu(t),
      r = `${n.anio}-${gu(n.mes)}-${gu(n.dia)}`;
    (c === null || c.clave !== r) &&
      ((c = {
        clave: r,
        etiqueta: lu(n, o),
        tandas: [],
      }),
      s.push(c),
      (l = null));
    let i = Math.floor(t / pu);
    ((l === null || l.mio !== e.mio || i - u > 5) &&
      ((l = {
        clave: e.id,
        mio: e.mio,
        mensajes: [],
        horaUltimo: ``,
      }),
      c.tandas.push(l)),
      l.mensajes.push(e),
      (l.horaUltimo = `${gu(n.hora)}:${gu(n.minuto)}`),
      (u = i));
  }
  return s;
}
var du, fu, pu, mu, hu, gu, _u, vu;
function yu(e) {
  e.button === 0 && (e.currentTarget.dataset.chn = `apretado`);
}
function bu(e) {
  let t = e.currentTarget;
  t.dataset.chn === `apretado` &&
    ((t.dataset.chn = `soltando`),
    window.setTimeout(() => {
      t.dataset.chn === `soltando` && delete t.dataset.chn;
    }, Au));
}
function xu(e) {
  if (e.pointerType === `mouse` || e.currentTarget.dataset.chn !== `apretado`)
    return;
  let t = e.currentTarget.getBoundingClientRect();
  (e.clientX < t.left - 12 ||
    e.clientX > t.right + 12 ||
    e.clientY < t.top - 12 ||
    e.clientY > t.bottom + 12) &&
    bu(e);
}
function Su(e) {
  for (let t = e.parentElement; t && t !== document.body; t = t.parentElement) {
    let e = getComputedStyle(t).overflowY;
    if ((e === `auto` || e === `scroll`) && t.scrollHeight > t.clientHeight)
      return t;
  }
  return null;
}
function Cu(e) {
  let t = Su(e);
  if (!t) return;
  let n = Math.max(0, e.offsetHeight - ju);
  t.scrollHeight - t.scrollTop - t.clientHeight - n <= Mu &&
    (t.scrollTop = t.scrollHeight);
}
function wu({ id: e, conTexto: t, mio: n, onVerFoto: r }) {
  let [i, a] = (0, Eu.useState)(`esperando`),
    o = (0, Eu.useRef)(null);
  return (
    (0, Eu.useLayoutEffect)(() => {
      i === `lista` && o.current && Cu(o.current);
    }, [i]),
    (0, Du.jsx)(`button`, {
      ref: o,
      type: `button`,
      className: Iu(
        `chn-foto`,
        t && `chn-con-texto`,
        i === `esperando` && `chn-esperando`,
        i === `lista` && `chn-lista`,
      ),
      onClick: () => r(e),
      onPointerDown: yu,
      onPointerUp: bu,
      onPointerCancel: bu,
      onPointerLeave: bu,
      onPointerMove: xu,
      "aria-label": n
        ? `Ver en grande la foto que mandaste`
        : `Ver en grande la foto del soporte`,
      children:
        i === `falla`
          ? (0, Du.jsx)(`span`, {
              className: `chn-foto-falla`,
              children: `No se pudo cargar la foto. Tocá para abrirla.`,
            })
          : (0, Du.jsxs)(Du.Fragment, {
              children: [
                i === `esperando`
                  ? (0, Du.jsx)(`span`, {
                      className: `chn-brillo`,
                      "aria-hidden": !0,
                    })
                  : null,
                (0, Du.jsx)(`img`, {
                  src:
                    `/api/soporte/adjunto/` + encodeURIComponent(e) + `?mini=1`,
                  alt: ``,
                  decoding: `async`,
                  onLoad: () => a(`lista`),
                  onError: () => a(`falla`),
                }),
              ],
            }),
    })
  );
}
function ChatMessages({
  mensajes: e,
  enviando: t,
  piel: n,
  onVerFoto: r,
  recienLlegado: i,
}) {
  let [a, o] = (0, Eu.useState)(() => Date.now());
  (0, Eu.useEffect)(() => {
    let e = window.setInterval(() => o(Date.now()), ku);
    return () => window.clearInterval(e);
  }, []);
  let s = (0, Eu.useMemo)(() => {
      let t = a;
      for (let n of e) {
        let e = new Date(n.cuando).getTime();
        e > t && (t = e);
      }
      return uu(e, new Date(t));
    }, [e, a]),
    [c, l] = (0, Eu.useState)(null);
  if (c === null && e.length > 0) {
    let e = s.flatMap((e) => e.tandas.flatMap((e) => e.mensajes));
    l(new Map(e.slice(-8).map((e, t) => [e.id, t])));
  }
  let u = {
      "--chn-burbuja": n ? n.burbujaFondo : Ou.burbuja,
      "--chn-tinta": n ? n.burbujaTinta : Ou.tinta,
      "--chn-acento": n ? n.acentoClaro : Ou.acento,
      "--chn-acento-fondo": n ? n.avatarFondo : Ou.acentoFondo,
    },
    d = e.length === 0 && !t;
  return (0, Du.jsxs)(`div`, {
    className: `chn`,
    style: u,
    role: `log`,
    "aria-label": `Conversación con el soporte`,
    "aria-relevant": `additions`,
    children: [
      (0, Du.jsx)(`style`, {
        children: Al(Fu),
      }),
      d
        ? (0, Du.jsxs)(`div`, {
            className: `chn-vacio`,
            children: [
              (0, Du.jsx)(`span`, {
                className: `chn-vacio-icono`,
                "aria-hidden": !0,
                children: (0, Du.jsxs)(`svg`, {
                  width: `24`,
                  height: `24`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `1.9`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  children: [
                    (0, Du.jsx)(`path`, {
                      d: `M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01`,
                    }),
                    (0, Du.jsx)(`path`, {
                      d: Pu,
                    }),
                  ],
                }),
              }),
              (0, Du.jsx)(`b`, {
                children: `Todavía no hay mensajes`,
              }),
              (0, Du.jsx)(`span`, {
                children: `Escribinos lo que necesites y el equipo de soporte te responde por acá.`,
              }),
            ],
          })
        : null,
      s.map((e) => {
        let t = e.tandas[0]?.mensajes[0],
          n = t ? c?.get(t.id) : void 0,
          a = n === void 0 && t !== void 0 && t.id === i;
        return (0, Du.jsxs)(
          `div`,
          {
            className: `chn-bloque`,
            children: [
              (0, Du.jsx)(`div`, {
                className: Iu(
                  `chn-dia`,
                  n !== void 0 && `chn-abre`,
                  a && `chn-aparece`,
                ),
                style: n === void 0 ? void 0 : Lu(n),
                children: (0, Du.jsx)(`span`, {
                  children: e.etiqueta,
                }),
              }),
              e.tandas.map((e) => {
                let t = e.mensajes[e.mensajes.length - 1],
                  n = t ? c?.get(t.id) : void 0,
                  a = n === void 0 && e.mensajes[0]?.id === i;
                return (0, Du.jsxs)(
                  `div`,
                  {
                    className: Iu(`chn-tanda`, e.mio ? `chn-mio` : `chn-suyo`),
                    children: [
                      e.mensajes.map((t, n) => {
                        let a = c?.get(t.id),
                          o = t.adjunto && !t.texto;
                        return (0, Du.jsxs)(
                          `div`,
                          {
                            className: Iu(
                              `chn-burbuja`,
                              n === e.mensajes.length - 1 && `chn-cola`,
                              o && `chn-solo-foto`,
                              a === void 0
                                ? t.id === i && `chn-llega`
                                : `chn-abre`,
                            ),
                            style: a === void 0 ? void 0 : Lu(a),
                            children: [
                              t.adjunto
                                ? (0, Du.jsx)(wu, {
                                    id: t.id,
                                    conTexto: !!t.texto,
                                    mio: e.mio,
                                    onVerFoto: r,
                                  })
                                : null,
                              t.texto
                                ? (0, Du.jsx)(`span`, {
                                    className: `chn-texto`,
                                    children: t.texto,
                                  })
                                : null,
                            ],
                          },
                          t.id,
                        );
                      }),
                      (0, Du.jsxs)(`span`, {
                        className: Iu(
                          `chn-pie`,
                          n !== void 0 && `chn-abre`,
                          a && `chn-aparece`,
                        ),
                        style: n === void 0 ? void 0 : Lu(n),
                        children: [
                          e.mio ? `Vos` : `Soporte`,
                          ` · `,
                          e.horaUltimo,
                        ],
                      }),
                    ],
                  },
                  e.clave,
                );
              }),
            ],
          },
          e.clave,
        );
      }),
      t
        ? (0, Du.jsx)(`div`, {
            className: `chn-tanda chn-mio chn-aparece`,
            children: (0, Du.jsx)(`span`, {
              className: `chn-pie`,
              children: (0, Du.jsx)(`span`, {
                className: `chn-enviando`,
                children: `Enviando…`,
              }),
            }),
          })
        : null,
    ],
  });
}
var Eu, Du, Ou, ku, Au, ju, Mu, Nu, Pu, Fu, Iu, Lu, Ru;
function zu() {
  return typeof window > `u` || typeof window.matchMedia != `function`
    ? !1
    : window.matchMedia(td).matches;
}
function Bu(e) {
  return e < 1024 * 1024
    ? `${Math.max(1, Math.round(e / 1024))} KB`
    : `${(e / (1024 * 1024)).toLocaleString(`es-AR`, {
        maximumFractionDigits: 1,
      })} MB`;
}
function Vu(e) {
  if (e.button > 0) return;
  let t = e.currentTarget;
  t.disabled || (t.dataset.chc = `apretado`);
}
function Hu(e) {
  let t = e.currentTarget;
  t.dataset.chc === `apretado` &&
    ((t.dataset.chc = `soltando`),
    window.setTimeout(() => {
      t.dataset.chc === `soltando` && delete t.dataset.chc;
    }, ed));
}
function Uu(e) {
  if (e.pointerType === `mouse` || e.currentTarget.dataset.chc !== `apretado`)
    return;
  let t = e.currentTarget.getBoundingClientRect();
  (e.clientX < t.left - 12 ||
    e.clientX > t.right + 12 ||
    e.clientY < t.top - 12 ||
    e.clientY > t.bottom + 12) &&
    Hu(e);
}
function Wu(e) {
  e.preventDefault();
}
function Gu({ d: e, tam: t, grosor: n, clase: r }) {
  return (0, Ju.jsx)(`svg`, {
    className: r,
    width: t,
    height: t,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: n,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    "aria-hidden": !0,
    children: (0, Ju.jsx)(`path`, {
      d: e,
    }),
  });
}
function ChatComposer({
  texto: e,
  onTexto: t,
  foto: n,
  onFoto: r,
  onEnviar: i,
  enviando: a,
  disponible: o,
  error: s,
  onError: c,
  piel: l,
  maxLength: u,
  pesoMaximo: d,
}) {
  let f = (0, qu.useRef)(null),
    p = (0, qu.useRef)(null),
    m = (0, qu.useId)(),
    [h, g] = (0, qu.useState)(null),
    [_, v] = (0, qu.useState)(null);
  ((0, qu.useLayoutEffect)(() => {
    let e = f.current;
    if (!e) return;
    let t = e.scrollTop;
    e.style.height = `auto`;
    let n = e.scrollHeight;
    ((e.style.height = `${Math.min(n, Qu)}px`),
      (e.style.overflowY = n > Qu ? `auto` : `hidden`),
      (e.scrollTop = t));
  }, [e]),
    (0, qu.useEffect)(() => {
      if (!n) return;
      let e = !0,
        t = new FileReader();
      return (
        (t.onload = () => {
          e &&
            typeof t.result == `string` &&
            g({
              archivo: n,
              url: t.result,
            });
        }),
        t.readAsDataURL(n),
        () => {
          ((e = !1), t.readyState === FileReader.LOADING && t.abort(), g(null));
        }
      );
    }, [n]));
  let y = n !== null && h !== null && h.archivo === n ? h.url : null,
    b = (e.trim() !== `` || n !== null) && o,
    x = b && !a,
    S = u - e.length,
    C = {
      "--chc-acento": l ? l.acentoClaro : Xu,
      "--chc-boton": l ? l.burbujaFondo : Yu,
      "--chc-tinta": l ? l.burbujaTinta : `#fff`,
      "--chc-sombra": l ? l.botonSombra : Zu,
    };
  function w() {
    x && i();
  }
  function ee(e) {
    e.key !== `Enter` ||
      e.shiftKey ||
      e.altKey ||
      e.nativeEvent.isComposing ||
      (!e.ctrlKey && !e.metaKey && !zu()) ||
      (e.preventDefault(), w());
  }
  function te(e) {
    let t = e.currentTarget,
      n = t.files?.[0] ?? null;
    if (((t.value = ``), n)) {
      if (n.size > d) {
        c(
          `La foto pesa más de ${Bu(d)}. Mandá una más liviana o una captura de pantalla.`,
        );
        return;
      }
      (c(null), r(n));
    }
  }
  return (0, Ju.jsxs)(`div`, {
    className: `chc`,
    style: C,
    children: [
      (0, Ju.jsx)(`style`, {
        children: Al(cd),
      }),
      s
        ? (0, Ju.jsxs)(
            `p`,
            {
              id: m,
              role: `alert`,
              className: `chc-error`,
              children: [
                (0, Ju.jsx)(Gu, {
                  d: sd,
                  tam: 15,
                  grosor: 2,
                }),
                (0, Ju.jsx)(`span`, {
                  children: s,
                }),
              ],
            },
            s,
          )
        : null,
      n
        ? (0, Ju.jsxs)(`div`, {
            className: `chc-foto`,
            children: [
              (0, Ju.jsx)(`span`, {
                className: `chc-mini`,
                children:
                  y && _ !== y
                    ? (0, Ju.jsx)(`img`, {
                        src: y,
                        alt: ``,
                        decoding: `async`,
                        onError: () => v(y),
                      })
                    : (0, Ju.jsx)(Gu, {
                        d: od,
                        tam: 20,
                        grosor: 1.8,
                      }),
              }),
              (0, Ju.jsxs)(`span`, {
                className: `chc-foto-datos`,
                children: [
                  (0, Ju.jsx)(`b`, {
                    title: n.name,
                    children: n.name || `Foto`,
                  }),
                  (0, Ju.jsx)(`small`, {
                    children: Bu(n.size),
                  }),
                ],
              }),
              (0, Ju.jsx)(`button`, {
                type: `button`,
                className: `chc-toca chc-sacar`,
                onClick: () => r(null),
                onPointerDown: Vu,
                onPointerUp: Hu,
                onPointerCancel: Hu,
                onPointerLeave: Hu,
                onPointerMove: Uu,
                disabled: a,
                "aria-label": `Sacar la foto`,
                children: (0, Ju.jsx)(Gu, {
                  d: ad,
                  tam: 16,
                  grosor: 2,
                }),
              }),
            ],
          })
        : null,
      S <= $u
        ? (0, Ju.jsx)(`p`, {
            className: S <= 0 ? `chc-tope chc-lleno` : `chc-tope`,
            children:
              S <= 0
                ? `Llegaste al máximo de ${u.toLocaleString(`es-AR`)} caracteres`
                : S === 1
                  ? `Queda 1 carácter`
                  : `Quedan ${S} caracteres`,
          })
        : null,
      (0, Ju.jsxs)(`div`, {
        className: `chc-fila`,
        children: [
          (0, Ju.jsxs)(`div`, {
            className: o ? `chc-entrada` : `chc-entrada chc-apagada`,
            children: [
              (0, Ju.jsx)(`button`, {
                type: `button`,
                className: n
                  ? `chc-toca chc-clip chc-con-foto`
                  : `chc-toca chc-clip`,
                onClick: () => p.current?.click(),
                onPointerDown: Vu,
                onPointerUp: Hu,
                onPointerCancel: Hu,
                onPointerLeave: Hu,
                onPointerMove: Uu,
                disabled: !o || a,
                "aria-label": n ? `Cambiar la foto` : `Adjuntar una foto`,
                children: (0, Ju.jsx)(Gu, {
                  d: rd,
                  tam: 19,
                  grosor: 1.9,
                }),
              }),
              (0, Ju.jsx)(`textarea`, {
                ref: f,
                className: `chc-campo`,
                value: e,
                onChange: (e) => t(e.target.value),
                onKeyDown: ee,
                placeholder: `Escribí tu mensaje…`,
                "aria-label": `Escribí tu mensaje`,
                "aria-describedby": s ? m : void 0,
                rows: 1,
                maxLength: u,
                disabled: !o,
              }),
            ],
          }),
          (0, Ju.jsx)(`button`, {
            type: `button`,
            className: [
              `chc-toca`,
              `chc-enviar`,
              b && `chc-listo`,
              a && `chc-viajando`,
            ]
              .filter(Boolean)
              .join(` `),
            onClick: w,
            onMouseDown: Wu,
            onPointerDown: Vu,
            onPointerUp: Hu,
            onPointerCancel: Hu,
            onPointerLeave: Hu,
            onPointerMove: Uu,
            disabled: !x,
            "aria-busy": a || void 0,
            "aria-label": a ? `Enviando…` : `Enviar`,
            children: (0, Ju.jsx)(Gu, {
              d: id,
              tam: 20,
              grosor: 2.4,
              clase: `chc-flecha`,
            }),
          }),
        ],
      }),
      (0, Ju.jsx)(`input`, {
        ref: p,
        type: `file`,
        accept: `image/*`,
        hidden: !0,
        onChange: te,
        tabIndex: -1,
      }),
    ],
  });
}
var qu, Ju, Yu, Xu, Zu, Qu, $u, ed, td, nd, rd, id, ad, od, sd, cd, ld, ud;
function dd(e) {
  return {
    "--csn-boton-fondo": e ? e.botonFondo : vd,
    "--csn-boton-tinta": e ? e.botonTinta : `#fff`,
    "--csn-boton-sombra": e ? e.botonSombra : yd,
    "--csn-avatar-fondo": e ? e.avatarFondo : bd,
    "--csn-avatar-tinta": e ? e.avatarTinta : _d,
    "--csn-acento-claro": e ? e.acentoClaro : _d,
  };
}
function fd(e) {
  e.button === 0 && (e.currentTarget.dataset.tiempo = `apreta`);
}
function pd(e) {
  let t = e.currentTarget;
  t.dataset.tiempo === `apreta` &&
    (delete t.dataset.tiempo,
    t.getBoundingClientRect(),
    (t.dataset.tiempo = `suelta`));
}
function md(e) {
  e.currentTarget.dataset.tiempo === `apreta` &&
    delete e.currentTarget.dataset.tiempo;
}
function hd(e) {
  e.target === e.currentTarget &&
    e.currentTarget.dataset.tiempo === `suelta` &&
    delete e.currentTarget.dataset.tiempo;
}
function SupportChat({ piel: e = null } = {}) {
  let [t, n] = (0, q.useState)(!1),
    [r, i] = (0, q.useState)(!1),
    [a, o] = (0, q.useState)([]),
    [s, c] = (0, q.useState)(``),
    [l, u] = (0, q.useState)(!1),
    [d, f] = (0, q.useState)(null),
    [p, m] = (0, q.useState)(null),
    [h, g] = (0, q.useState)(null),
    [_, v] = (0, q.useState)(0),
    [y, b] = (0, q.useState)(!0),
    [x, S] = (0, q.useState)(null),
    C = (0, q.useRef)(null),
    w = (0, q.useRef)(null),
    ee = (0, q.useRef)(null),
    te = (0, q.useRef)(``),
    ne = (0, q.useRef)(0),
    T = (0, q.useRef)(!1),
    E = (0, q.useRef)(new Set()),
    re = (0, q.useRef)(!1),
    ie = (0, q.useRef)(!0);
  (0, q.useEffect)(() => {
    if (t) return;
    let e = !0,
      n = () => {
        document.hidden ||
          as()
            .then((t) => {
              e && v(t);
            })
            .catch(() => {});
      };
    n();
    let r = setInterval(n, 45e3);
    return () => {
      ((e = !1), clearInterval(r));
    };
  }, [t]);
  let ae = (0, q.useCallback)((e, t) => {
      let n = e[e.length - 1];
      (n && (t || re.current) && !E.current.has(n.id) && S(n.id),
        (E.current = new Set(e.map((e) => e.id))),
        (re.current = !0),
        o(e));
    }, []),
    D = (0, q.useCallback)(
      (e) => {
        let t = ++ne.current;
        is()
          .then((n) => {
            t === ne.current &&
              (b(n.disponible), n.ok && (ae(n.mensajes, !1), e && v(0)));
          })
          .catch(() => {});
      },
      [ae],
    );
  (0, q.useEffect)(() => {
    if (!t) return;
    D(!0);
    let e = setInterval(() => {
        document.hidden || D(!0);
      }, 6e3),
      n = () => {
        document.hidden || D(!0);
      };
    return (
      document.addEventListener(`visibilitychange`, n),
      () => {
        (clearInterval(e), document.removeEventListener(`visibilitychange`, n));
      }
    );
  }, [t, D]);
  let O = (0, q.useCallback)((e) => {
    let t = ee.current;
    if (!t) return;
    let n = window.matchMedia(Cd).matches;
    (t.scrollTo({
      top: t.scrollHeight,
      behavior: e && !n ? `smooth` : `auto`,
    }),
      (ie.current = !0));
  }, []);
  ((0, q.useLayoutEffect)(() => {
    if (!t) {
      te.current = ``;
      return;
    }
    let e = a[a.length - 1]?.id ?? ``;
    if (e === te.current) return;
    let n = te.current === ``;
    ((te.current = e), O(!n));
  }, [a, t, O]),
    (0, q.useLayoutEffect)(() => {
      t && l && O(!0);
    }, [t, l, O]),
    (0, q.useEffect)(() => {
      if (!t) return;
      let e = ee.current;
      if (!e) return;
      let n = () => {
          ie.current = e.scrollHeight - e.scrollTop - e.clientHeight <= Td;
        },
        r = () => {
          ie.current && (e.scrollTop = e.scrollHeight);
        };
      e.addEventListener(`scroll`, n, {
        passive: !0,
      });
      let i =
        typeof ResizeObserver == `function` ? new ResizeObserver(r) : null;
      return (
        i?.observe(e),
        () => {
          (e.removeEventListener(`scroll`, n), i?.disconnect());
        }
      );
    }, [t]),
    (0, q.useEffect)(() => {
      if (!t) return;
      let e = w.current;
      if (!e) return;
      let n = window.matchMedia(Y),
        r = window.visualViewport,
        i = document.documentElement,
        a = null,
        o = () => {
          if (!n.matches) {
            (e.style.removeProperty(`--csn-vv-alto`),
              e.style.removeProperty(`--csn-vv-arriba`),
              a !== null && ((i.style.overflow = a), (a = null)));
            return;
          }
          (a === null &&
            ((a = i.style.overflow), (i.style.overflow = `hidden`)),
            r &&
              (e.style.setProperty(`--csn-vv-alto`, `${r.height}px`),
              e.style.setProperty(`--csn-vv-arriba`, `${r.offsetTop}px`)));
        };
      return (
        o(),
        r?.addEventListener(`resize`, o),
        r?.addEventListener(`scroll`, o),
        n.addEventListener(`change`, o),
        () => {
          (r?.removeEventListener(`resize`, o),
            r?.removeEventListener(`scroll`, o),
            n.removeEventListener(`change`, o),
            a !== null && (i.style.overflow = a));
        }
      );
    }, [t]));
  function oe() {
    ((re.current = !1), S(null), i(!1), n(!0));
  }
  let se = (0, q.useCallback)(() => i(!0), []);
  ((0, q.useEffect)(() => {
    if (!r) return;
    let e = window.matchMedia(Cd).matches,
      t = setTimeout(
        () => {
          let e = w.current;
          (e &&
            e.contains(document.activeElement) &&
            C.current?.focus({
              preventScroll: !0,
            }),
            i(!1),
            n(!1));
        },
        e ? 0 : wd,
      );
    return () => clearTimeout(t);
  }, [r]),
    (0, q.useEffect)(() => {
      if (!t && !h) return;
      let e = (e) => {
        e.key === `Escape` && (h ? g(null) : se());
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [t, h, se]));
  async function ce() {
    let e = s.trim();
    if ((!e && !p) || l || T.current) return;
    ((T.current = !0), u(!0), f(null));
    let t = new FormData();
    p && t.set(`foto`, p);
    try {
      let n = await os(e, t);
      if (!n.ok) {
        f(n.mensaje);
        return;
      }
      (ne.current++, c(``), m(null), ae(n.mensajes, !0));
    } catch {
      f(`No se pudo enviar. Fijate la conexión y probá de nuevo.`);
    } finally {
      ((T.current = !1), u(!1));
    }
  }
  function le(e) {
    if (e === null) {
      m(null);
      return;
    }
    if (e.size > xd) {
      f(
        `La foto pesa más de 8 MB. Mandá una más liviana o una captura de pantalla.`,
      );
      return;
    }
    (m(e), f(null));
  }
  let k = dd(e),
    A = e ? e.nombre : `Rushybet`,
    ue = t && !r;
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(`style`, {
        children: Al(Ed),
      }),
      (0, J.jsxs)(`button`, {
        ref: C,
        type: `button`,
        className: `csn-boton`,
        style: k,
        "data-abierto": ue ? `1` : `0`,
        onClick: () => (ue ? se() : oe()),
        "aria-label": ue
          ? `Cerrar el chat de soporte`
          : _ > 0
            ? `Abrir el chat de soporte (${_} sin leer)`
            : `Abrir el chat de soporte`,
        "aria-expanded": ue,
        "aria-haspopup": `dialog`,
        ...Dd,
        children: [
          (0, J.jsx)(
            `svg`,
            {
              className: `csn-icono`,
              width: `24`,
              height: `24`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.9`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              "aria-hidden": !0,
              children: ue
                ? (0, J.jsx)(`path`, {
                    d: `M6 6l12 12M18 6L6 18`,
                  })
                : (0, J.jsx)(`path`, {
                    d: `M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.6-.7L3 21l1.9-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z`,
                  }),
            },
            ue ? `cruz` : `globo`,
          ),
          !t &&
            _ > 0 &&
            (0, J.jsx)(
              `span`,
              {
                className: `csn-globito`,
                "aria-hidden": !0,
                children: _ > 99 ? `99+` : _,
              },
              _,
            ),
        ],
      }),
      t &&
        (0, J.jsxs)(`div`, {
          ref: w,
          role: `dialog`,
          "aria-label": `Chat con el soporte`,
          className: `csn-ventana`,
          style: k,
          "data-saliendo": r ? `1` : void 0,
          children: [
            (0, J.jsxs)(`div`, {
              ref: ee,
              className: `csn-caja`,
              children: [
                (0, J.jsxs)(`header`, {
                  className: `csn-cabecera`,
                  children: [
                    (0, J.jsx)(`span`, {
                      className: `csn-avatar`,
                      "aria-hidden": !0,
                      children: `S`,
                    }),
                    (0, J.jsxs)(`span`, {
                      className: `csn-quien`,
                      children: [
                        (0, J.jsx)(`b`, {
                          children: `Soporte`,
                        }),
                        (0, J.jsx)(`small`, {
                          children: A,
                        }),
                      ],
                    }),
                    (0, J.jsx)(`button`, {
                      type: `button`,
                      className: `csn-cerrar`,
                      onClick: se,
                      "aria-label": `Cerrar el chat`,
                      ...Dd,
                      children: (0, J.jsx)(`svg`, {
                        width: `20`,
                        height: `20`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2.1`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        "aria-hidden": !0,
                        children: (0, J.jsx)(`path`, {
                          d: `M6 6l12 12M18 6L6 18`,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  className: `csn-cuerpo`,
                  children: [
                    (0, J.jsx)(`p`, {
                      className: `csn-intro csn-entra`,
                      style: {
                        "--i": 0,
                      },
                      children: `En breve el soporte te atiende. Contanos qué necesitás y te respondemos por acá.`,
                    }),
                    (0, J.jsxs)(`p`, {
                      className: `csn-seguro csn-entra`,
                      style: {
                        "--i": 1,
                      },
                      children: [
                        (0, J.jsxs)(`svg`, {
                          width: `13`,
                          height: `13`,
                          viewBox: `0 0 24 24`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `2.2`,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          "aria-hidden": !0,
                          children: [
                            (0, J.jsx)(`rect`, {
                              x: `4.5`,
                              y: `10.5`,
                              width: `15`,
                              height: `10`,
                              rx: `2.2`,
                            }),
                            (0, J.jsx)(`path`, {
                              d: `M8 10.5V7.5a4 4 0 0 1 8 0v3`,
                            }),
                          ],
                        }),
                        (0, J.jsxs)(`span`, {
                          children: [
                            `Tus mensajes viajan y se guardan cifrados. `,
                            A,
                            ` `,
                            (0, J.jsx)(`strong`, {
                              children: `nunca`,
                            }),
                            ` te va a pedir tu contraseña por este chat.`,
                          ],
                        }),
                      ],
                    }),
                    !y &&
                      (0, J.jsx)(`p`, {
                        className: `csn-apagado`,
                        role: `status`,
                        children: `El chat no está disponible por ahora. Probá más tarde.`,
                      }),
                    (0, J.jsx)(ChatMessages, {
                      mensajes: a,
                      enviando: l,
                      piel: e,
                      onVerFoto: (e) => g(e),
                      recienLlegado: x,
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsx)(`div`, {
              className: `csn-pie`,
              children: (0, J.jsx)(ChatComposer, {
                texto: s,
                onTexto: c,
                foto: p,
                onFoto: le,
                onEnviar: () => void ce(),
                enviando: l,
                disponible: y,
                error: d,
                onError: f,
                piel: e,
                maxLength: Sd,
                pesoMaximo: xd,
              }),
            }),
          ],
        }),
      h &&
        (0, J.jsxs)(`div`, {
          className: `csn-visor`,
          role: `dialog`,
          "aria-modal": `true`,
          "aria-label": `Foto adjunta`,
          onClick: () => g(null),
          children: [
            (0, J.jsx)(`button`, {
              type: `button`,
              className: `csn-visor-cerrar`,
              "aria-label": `Cerrar la foto`,
              ...Dd,
              onClick: (e) => {
                (e.stopPropagation(), g(null));
              },
              children: (0, J.jsx)(`svg`, {
                width: `20`,
                height: `20`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `2.1`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                "aria-hidden": !0,
                children: (0, J.jsx)(`path`, {
                  d: `M6 6l12 12M18 6L6 18`,
                }),
              }),
            }),
            (0, J.jsx)(`img`, {
              src: `/api/soporte/adjunto/` + h,
              alt: `Foto adjunta`,
            }),
          ],
        }),
    ],
  });
}
var q, J, _d, vd, yd, bd, xd, Sd, Y, Cd, wd, Td, Ed, Dd, Od, kd, Ad, jd;
function initializeSupportChat() {
  tu = tuData;
  nu = `rb_marca`;
  ru = /^[a-z0-9-]{1,40}$/;
  vu = createLazyInitializer(() => {
    ((du = `America/Argentina/Buenos_Aires`),
      (fu = [
        `Domingo`,
        `Lunes`,
        `Martes`,
        `Miércoles`,
        `Jueves`,
        `Viernes`,
        `Sábado`,
      ]),
      (pu = 6e4),
      (mu = 864e5),
      (gu = (e) => String(e).padStart(2, `0`)),
      (_u = (e) => Math.floor(Date.UTC(e.anio, e.mes - 1, e.dia) / mu)));
  });
  Ru = createLazyInitializer(() => {
    ((Eu = React),
      vu(),
      Ml(),
      (Du = JSXRuntime),
      (Ou = {
        burbuja: `linear-gradient(180deg,#ff6222,#e84a06)`,
        tinta: `#fff`,
        acento: `#ff8a55`,
        acentoFondo: `rgba(244,82,11,.14)`,
      }),
      (ku = 3e4),
      (Au = 470),
      (ju = 104),
      (Mu = 64),
      (Nu = `cubic-bezier(.25,.9,.3,1)`),
      (Pu = `M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.6-.7L3 21l1.9-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z`),
      (Fu = `
.chn{flex:1 1 auto;display:flex;flex-direction:column;gap:2px;min-width:0;box-sizing:border-box;padding:2px 0 4px}
.chn-bloque{display:flex;flex-direction:column;gap:2px;min-width:0}

.chn-dia{display:flex;justify-content:center;margin:12px 0 8px}
.chn-bloque:first-child .chn-dia{margin-top:4px}
.chn-dia span{font-size:11px;font-weight:600;letter-spacing:.2px;line-height:1.3;color:#9a9a9a;padding:4px 11px;
  border-radius:999px;background:rgba(255,255,255,.06)}

.chn-tanda{display:flex;flex-direction:column;gap:3px;max-width:80%;margin-bottom:10px;min-width:0}
.chn-tanda.chn-suyo{align-self:flex-start;align-items:flex-start}
.chn-tanda.chn-mio{align-self:flex-end;align-items:flex-end}

.chn-burbuja{position:relative;box-sizing:border-box;max-width:100%;min-width:0;padding:9px 13px;font-size:14.5px;
  line-height:1.42;border-radius:20px;transform-origin:bottom left}
.chn-suyo .chn-burbuja{background:#262626;color:#ededed}
.chn-mio .chn-burbuja{background:var(--chn-burbuja);color:var(--chn-tinta);transform-origin:bottom right}

.chn-suyo .chn-burbuja:not(:first-child){border-top-left-radius:6px}
.chn-suyo .chn-burbuja:not(.chn-cola){border-bottom-left-radius:6px}
.chn-mio .chn-burbuja:not(:first-child){border-top-right-radius:6px}
.chn-mio .chn-burbuja:not(.chn-cola){border-bottom-right-radius:6px}

.chn-texto{display:block;white-space:pre-wrap;overflow-wrap:anywhere}

.chn-burbuja.chn-solo-foto{padding:4px;background:transparent}
.chn-foto{appearance:none;-webkit-appearance:none;position:relative;display:block;box-sizing:border-box;max-width:100%;
  margin:0;padding:0;border:0;border-radius:15px;overflow:hidden;background:rgba(255,255,255,.06);font:inherit;
  color:inherit;cursor:zoom-in;touch-action:manipulation;-webkit-tap-highlight-color:transparent;
  transition:transform .45s ${Nu},filter .45s ${Nu}}
.chn-foto.chn-con-texto{margin:-4px -8px 8px;max-width:calc(100% + 16px)}
.chn-foto img{display:block;max-width:100%;max-height:280px;width:auto;height:auto;border-radius:15px}
.chn-foto:focus-visible{outline:2px solid var(--chn-acento);outline-offset:2px}

.chn-foto[data-chn=apretado]{transform:scale(.95);filter:brightness(.82);transition:transform .12s ${Nu},filter .1s linear}

.chn-foto.chn-esperando{min-width:140px;min-height:${ju}px}
.chn-foto.chn-esperando img{position:absolute;inset:0;opacity:0}
.chn-brillo{position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.08) 50%,transparent 70%);
  background-size:220% 100%;animation:chnBrillo 1.3s linear infinite}
.chn-foto.chn-lista img{animation:chnFundido .3s ease both}
.chn-foto-falla{display:grid;place-items:center;box-sizing:border-box;min-width:150px;min-height:${ju}px;
  padding:12px 14px;font-size:12.5px;line-height:1.4;text-align:center;color:#a3a3a3}

.chn-pie{display:flex;align-items:center;gap:5px;padding:0 6px;margin-top:1px;font-size:10.5px;line-height:1.3;
  color:#7a7a7a;white-space:nowrap;font-variant-numeric:tabular-nums}
.chn-mio .chn-pie{color:#8a8a8a}
.chn-enviando{animation:chnTitila 1s ease-in-out infinite}

.chn-vacio{margin:auto;display:flex;flex-direction:column;align-items:center;gap:6px;padding:28px 18px;text-align:center;
  animation:chnVacio .4s ${Nu} .45s both}
.chn-vacio-icono{display:grid;place-items:center;width:52px;height:52px;margin-bottom:6px;border-radius:50%;
  background:var(--chn-acento-fondo);color:var(--chn-acento)}
.chn-vacio b{font-size:15px;font-weight:600;color:#e6e6e6}
.chn-vacio span{max-width:260px;font-size:13px;line-height:1.45;color:#9a9a9a;text-wrap:pretty}


.chn-llega{animation:chnPop .42s ${Nu} both}
.chn-abre{animation:chnSube .46s ${Nu} both;animation-delay:calc(var(--chn-o,0) * 28ms + 60ms)}
.chn-aparece{animation:chnFundido .3s ease both}

@keyframes chnPop{from{opacity:0;transform:translateY(10px) scale(.86)}to{opacity:1;transform:none}}
@keyframes chnSube{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes chnFundido{from{opacity:0}to{opacity:1}}
@keyframes chnTitila{50%{opacity:.45}}
@keyframes chnBrillo{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes chnVacio{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}


@media (prefers-reduced-motion: reduce){
  .chn-llega,.chn-abre,.chn-enviando,.chn-brillo,.chn-foto.chn-lista img{animation:none}
  .chn-vacio{animation:chnFundido .3s ease .45s both}
  .chn-foto{transition:filter .2s linear}
  .chn-foto[data-chn=apretado]{transform:none}
}
`),
      (Iu = (...e) => e.filter(Boolean).join(` `)),
      (Lu = (e) => ({
        "--chn-o": e,
      })));
  });
  ld = createLazyInitializer(() => {
    ((qu = React),
      Ml(),
      (Ju = JSXRuntime),
      (Yu = `linear-gradient(180deg,#ff6222,#e84a06)`),
      (Xu = `#ff8a55`),
      (Zu = `0 10px 24px -10px rgba(244,82,11,.75), inset 0 1px 0 rgba(255,255,255,.25)`),
      (Qu = 128),
      ($u = 200),
      (ed = 470),
      (td = `(hover: hover) and (pointer: fine)`),
      (nd = `cubic-bezier(.25,.9,.3,1)`),
      (rd = `M21 11.5 12.5 20a5 5 0 0 1-7-7l8-8a3.4 3.4 0 0 1 4.8 4.8l-8 8a1.8 1.8 0 0 1-2.5-2.5l7.4-7.4`),
      (id = `M12 19V5M5 12l7-7 7 7`),
      (ad = `M18 6 6 18M6 6l12 12`),
      (od = `M4.5 5h15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3.5 16l5-5 4 4 2.5-2.5 5.5 5.5M15.5 9.5h.01`),
      (sd = `M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 8v5M12 16.2v.01`),
      (cd = `
.chc{position:relative;flex:none;display:flex;flex-direction:column;gap:8px;min-width:0;box-sizing:border-box;
  padding:8px 12px calc(10px + env(safe-area-inset-bottom,0px));border-top:1px solid rgba(255,255,255,.07);
  background:linear-gradient(180deg,rgba(255,255,255,.015),rgba(255,255,255,0))}
@media (hover:none) and (pointer:coarse){
  
  .chc:has(.chc-campo:focus){padding-bottom:10px}
}

.chc-toca{appearance:none;-webkit-appearance:none;margin:0;padding:0;border:0;background:none;font:inherit;color:inherit;
  cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;
  transition:transform .45s ${nd},filter .45s ${nd},color .25s,background-color .25s,opacity .25s}
.chc-toca:disabled{cursor:default}
.chc-toca:focus-visible{outline:2px solid var(--chc-acento);outline-offset:2px}

.chc-toca[data-chc=apretado]:not(:disabled){transform:scale(.9);filter:brightness(.88);
  transition:transform .12s ${nd},filter .1s linear,color .25s,background-color .25s,opacity .25s}

.chc-error{display:flex;align-items:flex-start;gap:7px;margin:0 2px;padding:8px 11px;border-radius:12px;
  font-size:12.5px;line-height:1.4;color:#ff8a9a;background:rgba(255,59,92,.08);border:1px solid rgba(255,84,112,.28);
  overflow-wrap:anywhere;animation:chcPop .32s ${nd} both}
.chc-error svg{flex:none;margin-top:1px}

.chc-foto{display:flex;align-items:center;gap:10px;min-width:0;margin:0 2px;padding:3px 2px 3px 3px;border-radius:14px;
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);animation:chcPop .35s ${nd} both}
.chc-mini{position:relative;flex:none;width:44px;height:44px;border-radius:10px;overflow:hidden;display:grid;
  place-items:center;background:rgba(255,255,255,.06);color:#8a8a8a}
.chc-mini img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;animation:chcAparece .25s ease both}
.chc-foto-datos{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.chc-foto-datos b{font-size:12.5px;font-weight:600;color:#e6e6e6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.chc-foto-datos small{font-size:11px;color:#8a8a8a}
.chc-sacar{flex:none;width:44px;height:44px;display:grid;place-items:center;border-radius:50%;color:#9a9a9a}
.chc-sacar:disabled{opacity:.45}

.chc-tope{margin:0 10px;font-size:11px;line-height:1.3;color:#8a8a8a;text-align:right}
.chc-tope.chc-lleno{color:#ff8a9a}

.chc-fila{display:flex;align-items:flex-end;gap:8px;min-width:0}
.chc-entrada{flex:1;min-width:0;display:flex;align-items:flex-end;padding:1px 6px 1px 1px;border-radius:24px;
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.11);transition:border-color .25s,background-color .25s,opacity .25s}
.chc-entrada:focus-within{border-color:var(--chc-acento);border-color:color-mix(in srgb,var(--chc-acento) 55%,transparent);
  background:rgba(255,255,255,.07)}
.chc-entrada.chc-apagada{opacity:.5}
.chc-clip{flex:none;width:44px;height:44px;display:grid;place-items:center;border-radius:50%;color:#8f8f8f}
.chc-clip.chc-con-foto{color:var(--chc-acento)}

.chc-campo{flex:1;min-width:0;box-sizing:border-box;display:block;height:44px;min-height:44px;max-height:${Qu}px;
  margin:0;padding:12px 6px;border:0;border-radius:0;outline:none;background:none;resize:none;overflow-y:hidden;
  font:inherit;font-size:16px;line-height:1.3;color:#fff;caret-color:var(--chc-acento);scrollbar-width:thin}
.chc-campo::placeholder{color:#777;opacity:1}
.chc-campo:disabled{cursor:not-allowed;-webkit-text-fill-color:#777}


.chc-enviar{position:relative;isolation:isolate;flex:none;width:48px;height:48px;display:grid;place-items:center;
  border-radius:50%;background:rgba(255,255,255,.08);color:#6f6f6f}
.chc-enviar::before{content:'';position:absolute;inset:0;z-index:-1;border-radius:inherit;background:var(--chc-boton);
  box-shadow:var(--chc-sombra);opacity:0;transform:scale(.6);transition:opacity .25s,transform .35s ${nd}}
.chc-enviar.chc-listo{color:var(--chc-tinta)}
.chc-enviar.chc-listo::before{opacity:1;transform:none}
.chc-enviar.chc-listo .chc-flecha{animation:chcListo .38s ${nd}}
.chc-enviar.chc-viajando{opacity:.6;cursor:progress}

@media (hover:hover){
  .chc-clip:not(:disabled):hover,.chc-sacar:not(:disabled):hover{color:#d6d6d6;background:rgba(255,255,255,.06)}
}

@keyframes chcPop{from{opacity:0;transform:translateY(8px) scale(.97)}to{opacity:1;transform:none}}
@keyframes chcListo{from{opacity:.4;transform:translateY(5px) scale(.7)}to{opacity:1;transform:none}}
@keyframes chcAparece{from{opacity:0}to{opacity:1}}

@media (prefers-reduced-motion:reduce){
  .chc-error,.chc-foto,.chc-mini img,.chc-enviar .chc-flecha{animation:none!important}
  .chc-enviar::before{transform:none;transition:opacity .2s}
}
`));
  });
  ud = createModuleExports({
    ChatSoporteNuevo: () => SupportChat,
  });
  Od = createLazyInitializer(() => {
    ((q = React),
      ss(),
      Ru(),
      ld(),
      Ml(),
      (J = JSXRuntime),
      (_d = `#ff8a55`),
      (vd = `linear-gradient(180deg,#ff6222,#e84a06)`),
      (yd = `0 12px 30px -8px rgba(244,82,11,.65), inset 0 1px 0 rgba(255,255,255,.25)`),
      (bd = `rgba(244,82,11,.14)`),
      (xd = 8 * 1024 * 1024),
      (Sd = 2e3),
      (Y = `(max-width: 640px), (max-height: 520px)`),
      (Cd = `(prefers-reduced-motion: reduce)`),
      (wd = 200),
      (Td = 48),
      (Ed = `
.csn-boton{position:fixed;right:16px;bottom:calc(84px + env(safe-area-inset-bottom));z-index:52;width:56px;height:56px;padding:0;border:none;border-radius:50%;cursor:pointer;display:grid;place-items:center;background:var(--csn-boton-fondo);color:var(--csn-boton-tinta);box-shadow:var(--csn-boton-sombra);--csn-reposo:1;transform:scale(var(--csn-reposo));transition:transform .22s cubic-bezier(.34,1.56,.64,1);-webkit-tap-highlight-color:transparent;touch-action:manipulation}
.csn-boton[data-abierto="1"]{--csn-reposo:.92}
@media (hover:hover){.csn-boton:hover{--csn-reposo:1.05}.csn-boton[data-abierto="1"]:hover{--csn-reposo:.96}}
.csn-boton[data-tiempo="apreta"]{transform:scale(calc(var(--csn-reposo) * .86));transition-duration:.12s}
.csn-boton[data-tiempo="suelta"]{animation:csnSuelta .44s cubic-bezier(.34,1.56,.64,1)}
@keyframes csnSuelta{0%{transform:scale(calc(var(--csn-reposo) * .86))}45%{transform:scale(calc(var(--csn-reposo) * 1.1))}100%{transform:scale(var(--csn-reposo))}}
.csn-icono{animation:csnIcono .34s cubic-bezier(.34,1.56,.64,1) both}
@keyframes csnIcono{from{opacity:0;transform:rotate(-70deg) scale(.55)}to{opacity:1;transform:none}}
.csn-globito{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;padding:0 5px;border-radius:99px;background:#ff3b5c;color:#fff;font-size:11px;font-weight:800;line-height:1;display:grid;place-items:center;box-shadow:0 0 0 2px #0a0a0a;animation:csnGlobito .46s cubic-bezier(.34,1.56,.64,1) both}
@keyframes csnGlobito{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}
.csn-boton:focus-visible,.csn-cerrar:focus-visible,.csn-visor-cerrar:focus-visible{outline:2px solid var(--csn-acento-claro,${_d});outline-offset:3px}

.csn-ventana{position:fixed;right:16px;bottom:calc(152px + env(safe-area-inset-bottom));z-index:96;width:min(380px,calc(100vw - 32px));height:min(600px,calc(100vh - 176px));height:min(600px,calc(100dvh - 176px));display:flex;flex-direction:column;overflow:hidden;isolation:isolate;background:#101010;color:#fff;border-radius:22px;border:1px solid rgba(255,255,255,.1);box-shadow:0 30px 70px -20px rgba(0,0,0,.85),0 0 0 1px rgba(0,0,0,.35);transform-origin:calc(100% - 28px) 100%;animation:csnCrece .4s cubic-bezier(.34,1.56,.64,1) both,csnEnfoca .26s ease-out both}
@keyframes csnCrece{from{transform:translateY(18px) scale(.9)}to{transform:none}}
@keyframes csnEnfoca{from{opacity:0;filter:blur(8px)}to{opacity:1;filter:none}}
.csn-ventana[data-saliendo="1"]{animation:csnSeVa .2s cubic-bezier(.4,0,1,1) both;pointer-events:none}
@keyframes csnSeVa{from{opacity:1;transform:none}to{opacity:0;transform:translateY(12px) scale(.95)}}

.csn-caja{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.14) transparent}
.csn-cabecera{position:sticky;top:0;z-index:3;flex:none;display:flex;align-items:center;gap:11px;min-height:60px;padding:8px 6px 8px 14px;background:linear-gradient(180deg,rgba(16,16,16,.93),rgba(16,16,16,.78));-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);border-bottom:1px solid rgba(255,255,255,.07)}
.csn-avatar{flex:none;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:var(--csn-avatar-fondo);color:var(--csn-avatar-tinta);font-size:16px;font-weight:800}
.csn-quien{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.csn-quien b{font-size:16px;font-weight:700;line-height:1.2;color:#fff}
.csn-quien small{font-size:12px;line-height:1.3;color:#8a8a8a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.csn-cerrar{flex:none;width:44px;height:44px;padding:0;display:grid;place-items:center;border:0;border-radius:50%;background:transparent;color:#9a9a9a;cursor:pointer;transition:background-color .2s,color .2s,transform .2s cubic-bezier(.34,1.56,.64,1);-webkit-tap-highlight-color:transparent;touch-action:manipulation}
@media (hover:hover){.csn-cerrar:hover{background:rgba(255,255,255,.07);color:#fff}}
.csn-cerrar[data-tiempo="apreta"]{transform:scale(.86);background:rgba(255,255,255,.1);color:#fff;transition-duration:.1s}
.csn-cerrar[data-tiempo="suelta"]{animation:csnSueltaChico .36s cubic-bezier(.34,1.56,.64,1)}
@keyframes csnSueltaChico{0%{transform:scale(.86)}50%{transform:scale(1.08)}100%{transform:none}}

.csn-cuerpo{flex:1 0 auto;display:flex;flex-direction:column;gap:10px;min-width:0;padding:14px 12px 12px}
.csn-intro{margin:6px auto 0;max-width:290px;text-align:center;font-size:13px;line-height:1.5;color:#b5b5b5;text-wrap:pretty}
.csn-seguro{align-self:center;display:flex;align-items:flex-start;gap:7px;max-width:100%;margin:0 0 6px;padding:8px 12px;border-radius:14px;font-size:11.5px;line-height:1.45;color:#9d9d9d;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.08);text-wrap:pretty}
.csn-seguro svg{flex:none;margin-top:1px;color:#6fcf9b}
.csn-seguro strong{color:#e8e8e8;font-weight:700}
.csn-apagado{align-self:center;margin:0;padding:8px 12px;border-radius:12px;text-align:center;font-size:12.5px;line-height:1.45;color:#f4a11b;background:rgba(244,161,27,.08);border:1px solid rgba(244,161,27,.24)}
.csn-entra{animation:csnFila .46s cubic-bezier(.25,.9,.3,1) both;animation-delay:calc(var(--i,0) * 50ms + 90ms)}
@keyframes csnFila{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.csn-pie{flex:none;position:relative;z-index:2;background:#101010}

@media (max-width:640px),(max-height:520px){
.csn-ventana{left:0;right:0;top:var(--csn-vv-arriba,0px);bottom:auto;width:auto;height:var(--csn-vv-alto,100dvh);border:0;border-radius:0;box-shadow:none;transform-origin:50% 100%;animation:csnSube .4s cubic-bezier(.32,.72,0,1) both}
.csn-ventana[data-saliendo="1"]{animation:csnBaja .2s cubic-bezier(.4,0,1,1) both}
.csn-cabecera{padding-top:calc(8px + env(safe-area-inset-top));padding-left:calc(14px + env(safe-area-inset-left));padding-right:calc(6px + env(safe-area-inset-right))}
.csn-pie{padding-left:env(safe-area-inset-left);padding-right:env(safe-area-inset-right)}
}
@keyframes csnSube{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}
@keyframes csnBaja{from{opacity:1;transform:none}to{opacity:0;transform:translateY(40px)}}

.csn-visor{position:fixed;inset:0;z-index:130;display:grid;place-items:center;padding:calc(20px + env(safe-area-inset-top)) 20px calc(20px + env(safe-area-inset-bottom));background:rgba(5,5,5,.92);cursor:zoom-out;animation:csnVisor .22s ease-out both}
@keyframes csnVisor{from{opacity:0}to{opacity:1}}
.csn-visor img{display:block;max-width:100%;max-height:calc(100vh - 40px - env(safe-area-inset-top) - env(safe-area-inset-bottom));max-height:calc(100dvh - 40px - env(safe-area-inset-top) - env(safe-area-inset-bottom));object-fit:contain;border-radius:12px;animation:csnFoto .38s cubic-bezier(.34,1.56,.64,1) both}
@keyframes csnFoto{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:none}}
.csn-visor-cerrar{position:absolute;top:calc(12px + env(safe-area-inset-top));right:calc(12px + env(safe-area-inset-right));width:44px;height:44px;padding:0;display:grid;place-items:center;border-radius:50%;border:1px solid rgba(255,255,255,.14);background:rgba(24,24,24,.72);color:#fff;cursor:pointer;transition:transform .2s cubic-bezier(.34,1.56,.64,1);-webkit-tap-highlight-color:transparent;touch-action:manipulation}
.csn-visor-cerrar[data-tiempo="apreta"]{transform:scale(.86);transition-duration:.1s}
.csn-visor-cerrar[data-tiempo="suelta"]{animation:csnSueltaChico .36s cubic-bezier(.34,1.56,.64,1)}

@media (prefers-reduced-motion:reduce){
.csn-ventana,.csn-ventana[data-saliendo="1"],.csn-entra,.csn-icono,.csn-globito,.csn-visor,.csn-visor img,.csn-boton[data-tiempo="suelta"],.csn-cerrar[data-tiempo="suelta"],.csn-visor-cerrar[data-tiempo="suelta"]{animation:none!important}
}
`),
      (Dd = {
        onPointerDown: fd,
        onPointerUp: pd,
        onPointerLeave: md,
        onPointerCancel: md,
        onAnimationEnd: hd,
      }));
  });
  kd = createModuleExports({
    default: () => Ad,
  });
  jd = createLazyInitializer(() => {
    Ad = {};
  });
  Ml();
}
export { tu, iu, au, ou, ud, Od, kd, jd, initializeSupportChat };
