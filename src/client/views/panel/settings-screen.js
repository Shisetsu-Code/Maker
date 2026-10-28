/**
 * panel / settings-screen.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import {
  unknown as zodUnknown,
  array as zodArray,
  object as zodObject,
} from "zod";
import { createDemoRouter } from "./demo-services.js";
import { ps, ms, hs, _s, ys, bs, Os, As, js, Fs } from "./money-and-phone.js";
import { Wc, qc, Yc } from "./cashier-rules.js";
import { Yd, Rp } from "./demo-api.js";
import { cm, _m, vm, ym } from "./cashier-controls.js";
import { Wm, qm } from "./motion.js";
import {
  classNames,
  rg,
  Icon,
  Card,
  _g,
  xg,
  Button,
  Tg,
  Mg,
  Ng,
  Notice,
} from "./ui-components.js";
import { B_ } from "./navigation.js";
import { tv, nv, rv } from "./referrals.js";
import { db } from "./cash-transactions.js";
let Nx, Px, Fx, Ix, Lx, Rx, zx, Bx, Vx;
function Hx(e) {
  let t = bs(e);
  return t === ``
    ? {
        paisId: ps.id,
        nacional: ``,
      }
    : (js(t) ?? {
        paisId: ms.id,
        nacional: t,
      });
}
function Ux(e, t) {
  if (bs(t) === ``)
    return {
      paisId: e,
      nacional: t,
      texto: null,
      e164: null,
    };
  let n = Os(e, t);
  return n.ok
    ? {
        paisId: e,
        nacional: t,
        texto: n.texto,
        e164: n.e164,
      }
    : {
        paisId: e,
        nacional: t,
        texto: null,
        e164: null,
      };
}
function Wx(e, t) {
  if (bs(t) === ``) return `Va a quedar: falta el número.`;
  let n = Os(e, t);
  return n.ok ? `Va a quedar: ${n.visible}` : n.mensaje;
}
function Gx(e) {
  return e.largos.length > 0 ? Math.max(...e.largos) + 3 : 15;
}
function Kx(e, t, n) {
  let r = bs(e);
  if (!(e.includes(`+`) || r.length - bs(n).length > 3))
    return {
      paisId: t,
      nacional: r,
      aviso: null,
    };
  let i = As(e, t);
  if (!i.detectado)
    return {
      paisId: i.paisId,
      nacional: i.nacional,
      aviso: null,
    };
  let a = _s(i.paisId),
    o =
      a === null || a.codigo === ``
        ? `No reconocí el país: quedó en «Otro país». Revisá que el número esté completo.`
        : `Se detectó ${a.nombre} (+${a.codigo})`;
  return {
    paisId: i.paisId,
    nacional: i.nacional,
    aviso: o,
  };
}
function qx(e) {
  return e.trim() === `` ? hs : ys(e);
}
let Jx;
function Yx({ paisId: e, tam: t }) {
  let n = t ?? 20;
  return (0, JSXRuntime.jsx)(`svg`, {
    width: n,
    height: Math.round((n * 14) / 20),
    viewBox: `0 0 20 14`,
    "aria-hidden": `true`,
    focusable: `false`,
    style: {
      flex: `none`,
      display: `block`,
      borderRadius: `2px`,
      boxShadow: `inset 0 0 0 1px rgba(255,255,255,.16)`,
    },
    children: Jx[e] ?? Jx[ms.id],
  });
}
let Xx, Zx, Qx;
function $x(e, t, n, r, i) {
  try {
    if (qm() || typeof e.animate != `function`) return;
    Qx.get(e)?.cancel();
    let a = e.animate(
      [
        {
          transform: t,
        },
        {
          transform: n,
        },
      ],
      {
        duration: r,
        easing: i,
        fill: `forwards`,
      },
    );
    Qx.set(e, a);
  } catch {}
}
let eS, tS, nS, rS, iS, aS;
function PhoneNumberEditor(e) {
  let t = e.estilo === `v4`,
    n = (0, React.useMemo)(() => Hx(e.valorGuardado), [e.valorGuardado]),
    [r, i] = (0, React.useState)(n.paisId),
    [a, o] = (0, React.useState)(n.nacional),
    [s, c] = (0, React.useState)(!1),
    [l, u] = (0, React.useState)(``),
    [d, f] = (0, React.useState)(null),
    p = (0, React.useRef)(null),
    m = (0, React.useId)(),
    h = _s(r) ?? ms,
    g = (0, React.useMemo)(() => qx(l), [l]),
    _ = bs(a).length > Gx(h),
    v = (0, React.useRef)(e.valorGuardado);
  (0, React.useEffect)(() => {
    v.current !== e.valorGuardado &&
      ((v.current = e.valorGuardado), i(n.paisId), o(n.nacional), f(null));
  }, [e.valorGuardado, n]);
  let y = (0, React.useRef)(e.onCambiar);
  ((0, React.useEffect)(() => {
    y.current = e.onCambiar;
  }, [e.onCambiar]),
    (0, React.useEffect)(() => {
      y.current(Ux(r, a));
    }, [r, a]));
  function b() {
    (u(``),
      c(!0),
      requestAnimationFrame(() => {
        try {
          window.matchMedia(`(hover: hover)`).matches &&
            p.current?.querySelector(`input`)?.focus();
        } catch {}
      }));
  }
  function x(e) {
    (i(e), f(null), c(!1));
  }
  function S(e) {
    let t = Kx(e, r, a);
    (i(t.paisId), o(t.nacional), f(t.aviso));
  }
  let C = (e) => {
      e.key === `Escape` && c(!1);
      let t = g.length === 1 ? g[0] : void 0;
      e.key === `Enter` && t && (e.preventDefault(), x(t.id));
    },
    w = t ? {} : eS;
  return (0, JSXRuntime.jsxs)(`div`, {
    style: {
      display: `flex`,
      flexDirection: `column`,
      gap: `10px`,
      minWidth: 0,
    },
    children: [
      e.etiqueta !== void 0 && e.etiqueta !== ``
        ? t
          ? (0, JSXRuntime.jsx)(_g, {
              texto: e.etiqueta,
            })
          : (0, JSXRuntime.jsx)(`span`, {
              style: {
                ...rv,
                fontSize: `10px`,
              },
              children: e.etiqueta,
            })
        : null,
      (0, JSXRuntime.jsxs)(`div`, {
        className: t ? classNames(`eq-sel`, s && `abierto`) : void 0,
        style: t
          ? void 0
          : {
              display: `flex`,
              flexDirection: `column`,
              gap: `8px`,
              minWidth: 0,
            },
        children: [
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            id: `${e.id}-pais`,
            className: t ? `campo eq-sel-btn` : `v3n-hit`,
            style: t ? void 0 : tS(s),
            disabled: e.deshabilitado,
            onClick: () => (s ? c(!1) : b()),
            "aria-expanded": s,
            "aria-controls": m,
            "aria-haspopup": `listbox`,
            ...w,
            children: [
              (0, JSXRuntime.jsx)(Yx, {
                paisId: h.id,
                tam: 22,
              }),
              t
                ? (0, JSXRuntime.jsxs)(`span`, {
                    className: `eq-sel-txt`,
                    children: [
                      (0, JSXRuntime.jsx)(`b`, {
                        children: h.nombre,
                      }),
                      (0, JSXRuntime.jsx)(`small`, {
                        children: s
                          ? `Elegí el país de la lista`
                          : `+${h.codigo || `—`} · Tocá para cambiar`,
                      }),
                    ],
                  })
                : (0, JSXRuntime.jsxs)(`span`, {
                    style: {
                      flex: 1,
                      minWidth: 0,
                      display: `flex`,
                      flexDirection: `column`,
                      gap: `2px`,
                    },
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        style: {
                          fontSize: `14.5px`,
                          fontWeight: 600,
                          color: tv.naranjaClaro,
                          overflow: `hidden`,
                          textOverflow: `ellipsis`,
                          whiteSpace: `nowrap`,
                        },
                        children: h.nombre,
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        style: {
                          fontSize: `12px`,
                          color: tv.tx4,
                        },
                        children: s
                          ? `Elegí el país de la lista`
                          : `+${h.codigo || `—`} · Tocá para cambiar`,
                      }),
                    ],
                  }),
              t
                ? (0, JSXRuntime.jsx)(`span`, {
                    className: `eq-sel-chev`,
                    children: (0, JSXRuntime.jsx)(Icon, {
                      nombre: `chevron`,
                      tam: 16,
                      trazo: 2,
                    }),
                  })
                : (0, JSXRuntime.jsx)(`svg`, {
                    width: `16`,
                    height: `16`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: tv.tx2,
                    strokeWidth: `2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    "aria-hidden": !0,
                    style: {
                      flexShrink: 0,
                      transition: `transform .2s`,
                      transform: s ? `rotate(180deg)` : `none`,
                    },
                    children: (0, JSXRuntime.jsx)(`path`, {
                      d: `m6 9 6 6 6-6`,
                    }),
                  }),
            ],
          }),
          s
            ? (0, JSXRuntime.jsxs)(`div`, {
                id: m,
                ref: p,
                onKeyDown: C,
                className: t ? `eq-sel-caja` : void 0,
                style: t ? void 0 : nS,
                children: [
                  t
                    ? (0, JSXRuntime.jsx)(Mg, {
                        id: `${e.id}-q`,
                        placeholder: `Buscar país o código`,
                        valor: l,
                        onCambiar: u,
                        contador: `${g.length} de ${hs.length}`,
                      })
                    : (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          display: `flex`,
                          alignItems: `center`,
                          gap: `10px`,
                          padding: `4px 14px`,
                          borderBottom: `1px solid ${tv.bordeInterno}`,
                        },
                        children: [
                          (0, JSXRuntime.jsxs)(`svg`, {
                            width: `15`,
                            height: `15`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: tv.tx4,
                            strokeWidth: `2`,
                            strokeLinecap: `round`,
                            "aria-hidden": !0,
                            children: [
                              (0, JSXRuntime.jsx)(`circle`, {
                                cx: `11`,
                                cy: `11`,
                                r: `7`,
                              }),
                              (0, JSXRuntime.jsx)(`path`, {
                                d: `m20 20-3.5-3.5`,
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsx)(`input`, {
                            id: `${e.id}-q`,
                            type: `search`,
                            value: l,
                            onChange: (e) => u(e.target.value),
                            placeholder: `Buscar país o código`,
                            "aria-label": `Buscar país o código`,
                            autoComplete: `off`,
                            style: {
                              ...aS,
                              padding: `11px 0`,
                              fontVariantNumeric: `normal`,
                            },
                          }),
                          (0, JSXRuntime.jsxs)(`span`, {
                            style: {
                              fontSize: `12px`,
                              color: tv.tx4,
                              whiteSpace: `nowrap`,
                              fontVariantNumeric: `tabular-nums`,
                            },
                            children: [g.length, ` de `, hs.length],
                          }),
                        ],
                      }),
                  (0, JSXRuntime.jsx)(`div`, {
                    className: t ? `eq-sel-lista` : `v3n-scroll`,
                    role: `listbox`,
                    "aria-label": `Países`,
                    style: t
                      ? void 0
                      : {
                          maxHeight: `264px`,
                          overflowY: `auto`,
                          overscrollBehavior: `contain`,
                        },
                    children:
                      g.length === 0
                        ? (0, JSXRuntime.jsx)(`div`, {
                            className: t ? `eq-sel-vacio` : void 0,
                            style: t
                              ? void 0
                              : {
                                  padding: `16px`,
                                  fontSize: `13px`,
                                  color: tv.tx3,
                                },
                            children: `Ningún país se llama ni se marca así.`,
                          })
                        : g.map((e) => {
                            let n = e.id === r;
                            return (0, JSXRuntime.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                role: `option`,
                                "aria-selected": n,
                                className: t
                                  ? classNames(`eq-sel-op`, n && `on`)
                                  : `v3n-hit`,
                                style: t ? void 0 : rS(n),
                                onClick: () => x(e.id),
                                ...w,
                                children: [
                                  (0, JSXRuntime.jsx)(Yx, {
                                    paisId: e.id,
                                    tam: 20,
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: t
                                      ? void 0
                                      : {
                                          flex: 1,
                                          minWidth: 0,
                                          overflow: `hidden`,
                                          textOverflow: `ellipsis`,
                                          whiteSpace: `nowrap`,
                                        },
                                    children: e.nombre,
                                  }),
                                  (0, JSXRuntime.jsx)(`small`, {
                                    style: {
                                      flex: `none`,
                                      fontSize: `12.5px`,
                                      color: n
                                        ? `inherit`
                                        : t
                                          ? `var(--tx3)`
                                          : tv.tx3,
                                      fontVariantNumeric: `tabular-nums`,
                                    },
                                    children:
                                      e.codigo === `` ? `` : `+${e.codigo}`,
                                  }),
                                  n
                                    ? t
                                      ? (0, JSXRuntime.jsx)(Icon, {
                                          nombre: `tilde`,
                                          tam: 16,
                                          trazo: 2.4,
                                        })
                                      : (0, JSXRuntime.jsx)(`svg`, {
                                          width: `16`,
                                          height: `16`,
                                          viewBox: `0 0 24 24`,
                                          fill: `none`,
                                          style: {
                                            stroke: tv.naranja,
                                          },
                                          strokeWidth: `2.4`,
                                          strokeLinecap: `round`,
                                          strokeLinejoin: `round`,
                                          "aria-hidden": !0,
                                          children: (0, JSXRuntime.jsx)(
                                            `path`,
                                            {
                                              d: `M20 6 9 17l-5-5`,
                                            },
                                          ),
                                        })
                                    : null,
                                ],
                              },
                              e.id,
                            );
                          }),
                  }),
                ],
              })
            : null,
        ],
      }),
      t
        ? (0, JSXRuntime.jsx)(Ng, {
            id: `${e.id}-num`,
            modo: `tel`,
            prefijo: `+${h.codigo}`,
            max: 26,
            valor: a,
            onCambiar: S,
            onEnter: e.onEnter,
            deshabilitado: e.deshabilitado,
            error: _,
            placeholder: h.ejemplo,
            etiqueta: `Número de teléfono en ${h.nombre}`,
          })
        : (0, JSXRuntime.jsxs)(`label`, {
            style: iS(_),
            children: [
              (0, JSXRuntime.jsxs)(`span`, {
                style: {
                  fontSize: `12px`,
                  fontWeight: 700,
                  letterSpacing: `.6px`,
                  color: tv.tx3,
                  flex: `none`,
                },
                children: [`+`, h.codigo],
              }),
              (0, JSXRuntime.jsx)(`input`, {
                id: `${e.id}-num`,
                type: `text`,
                inputMode: `tel`,
                value: a,
                maxLength: 26,
                onChange: (e) => S(e.target.value),
                onKeyDown: e.onEnter
                  ? (t) => {
                      t.key === `Enter` && (t.preventDefault(), e.onEnter?.());
                    }
                  : void 0,
                disabled: e.deshabilitado,
                placeholder: h.ejemplo,
                "aria-label": `Número de teléfono en ${h.nombre}`,
                "aria-invalid": _ || void 0,
                autoComplete: `off`,
                className: `v3n-campo`,
                style: aS,
              }),
            ],
          }),
      d === null
        ? null
        : (0, JSXRuntime.jsx)(`div`, {
            role: `status`,
            style: {
              fontSize: `12.5px`,
              lineHeight: 1.5,
              color: t ? `var(--naranja-claro)` : tv.naranjaClaro,
            },
            children: d,
          }),
      (0, JSXRuntime.jsx)(`div`, {
        id: `${e.id}-queda`,
        style: {
          fontSize: `12.5px`,
          lineHeight: 1.5,
          color: t ? `var(--tx3)` : tv.tx3,
          fontVariantNumeric: `tabular-nums`,
        },
        children: Wx(r, a),
      }),
    ],
  });
}
let sS, cS, lS;
function uS(e) {
  return /0{7,}/.test(e);
}
function dS() {
  let e = createDemoRouter(),
    [t, n] = (0, React.useTransition)(),
    [r, i] = (0, React.useState)(null),
    [a, o] = (0, React.useState)(null),
    [s, c] = (0, React.useState)(null);
  (0, React.useEffect)(() => {
    cS()
      .then(i)
      .catch(() =>
        i({
          ok: !1,
        }),
      );
  }, []);
  let l = (0, React.useCallback)((e) => {
    (o(e), c((t) => (t === null || t.sello === e.texto ? t : null)));
  }, []);
  function u() {
    if (t) return;
    if (!a || a.e164 === null || a.texto === null) {
      c({
        ok: !1,
        texto: `Falta el número. Elegí el país y escribí el número, sin el 0 de adelante.`,
        sello: a?.texto ?? null,
      });
      return;
    }
    let r = a.texto;
    confirm(
      `WhatsApp general del casino\n\nVa a quedar: ${Fs(a.e164)}\n\nEs el número que ve un jugador que todavía no tiene cuenta, y el que sale cuando el reparto no contesta.\n\n¿Guardar?`,
    ) &&
      n(async () => {
        let t = await lS({
          paisId: a.paisId,
          nacional: a.nacional,
        }).catch(() => ({
          ok: !1,
          mensaje: `No se pudo guardar.`,
        }));
        if (
          (c({
            ok: t.ok,
            texto: t.mensaje,
            sello: r,
          }),
          t.ok)
        ) {
          let t = await cS().catch(() => null);
          (t && i(t), e.refresh());
        }
      });
  }
  return {
    vista: r,
    tel: a,
    aviso: s,
    pendiente: t,
    cambiar: l,
    guardar: u,
  };
}
function fS(e) {
  return e.desdeElCodigo
    ? `Todavía rige el número que está escrito en el código: nunca se guardó ninguno desde acá.`
    : `Es el número que se guardó desde esta pantalla.`;
}
function GeneralPhoneSettings({ i: e }) {
  let t = dS();
  if (!t.vista?.ok) return null;
  let n = t.vista;
  return (0, JSXRuntime.jsx)(Card, {
    i: e,
    children: (0, JSXRuntime.jsxs)(`div`, {
      className: `aj-col`,
      children: [
        (0, JSXRuntime.jsx)(_g, {
          texto: `WHATSAPP GENERAL DEL CASINO`,
          derecha: (0, JSXRuntime.jsx)(`span`, {
            className: `aj-esperando`,
            children: n.desdeElCodigo ? `sin editar` : `editado`,
          }),
        }),
        (0, JSXRuntime.jsx)(`p`, {
          className: `aj-texto`,
          children: `Es el WhatsApp que ve un jugador que todavía no tiene cuenta: el del pie del lobby, el de «Ayuda por WhatsApp» y el de los textos legales. También es el que sale cuando el reparto no le pudo asignar un cajero a alguien.`,
        }),
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `flex`,
            flexDirection: `column`,
            gap: `4px`,
          },
          children: [
            (0, JSXRuntime.jsxs)(`span`, {
              className: `aj-texto aj-13`,
              children: [
                `Hoy los jugadores ven: `,
                (0, JSXRuntime.jsx)(`b`, {
                  style: {
                    fontFamily: nv,
                    letterSpacing: `.4px`,
                  },
                  children: n.visible,
                }),
              ],
            }),
            (0, JSXRuntime.jsx)(`span`, {
              className: `aj-texto`,
              children: fS(n),
            }),
            uS(n.e164) &&
              (0, JSXRuntime.jsxs)(`span`, {
                className: `aj-texto`,
                children: [
                  (0, JSXRuntime.jsx)(`b`, {
                    className: `ambar`,
                    children: `Ese número no existe:`,
                  }),
                  ` es el de mentira que quedó puesto mientras falta el de verdad. Un jugador que le escriba no le llega a nadie. Cargá el número real acá abajo.`,
                ],
              }),
          ],
        }),
        (0, JSXRuntime.jsx)(PhoneNumberEditor, {
          id: `tel-general`,
          valorGuardado: uS(n.e164) ? `` : n.e164,
          onCambiar: t.cambiar,
          deshabilitado: t.pendiente,
          estilo: `v4`,
          etiqueta: `WhatsApp general del casino`,
        }),
        (0, JSXRuntime.jsx)(Button, {
          tono: `naranja`,
          clase: `aj-btn`,
          onClick: t.guardar,
          deshabilitado: t.pendiente,
          children: t.pendiente
            ? `Guardando…`
            : `Guardar el WhatsApp del casino`,
        }),
        (0, JSXRuntime.jsx)(Notice, {
          aviso: t.aviso,
        }),
        (0, JSXRuntime.jsx)(`p`, {
          className: `aj-texto`,
          children: `El número de cada cajero no se toca acá: se edita en Reparto, más abajo. Ese decide a quién le llega la carga de cada jugador nuevo; este es el de la casa.`,
        }),
      ],
    }),
  });
}
let mS, hS, gS, _S;
function WelcomeBonusSettings({ i: e }) {
  let t = createDemoRouter(),
    [n, r] = (0, React.useTransition)(),
    [i, a] = (0, React.useState)({
      fase: `cargando`,
    }),
    [o, s] = (0, React.useState)(null),
    [c, l] = (0, React.useState)(null),
    [u, d] = (0, React.useState)(0);
  if (
    ((0, React.useEffect)(() => {
      let e = !0;
      return (
        hS()
          .then((t) => {
            e &&
              a({
                fase: `lista`,
                vista: t,
              });
          })
          .catch(() => {
            e &&
              a({
                fase: `lista`,
                vista: {
                  ok: !1,
                  sinPermiso: !1,
                  mensaje: `No se pudo leer cómo está el bono. Probá de nuevo.`,
                },
              });
          }),
        () => {
          e = !1;
        }
      );
    }, [u]),
    i.fase === `cargando`)
  )
    return u === 0
      ? null
      : (0, JSXRuntime.jsx)(Card, {
          i: e,
          children: (0, JSXRuntime.jsxs)(`div`, {
            className: `aj-col`,
            children: [
              (0, JSXRuntime.jsx)(_g, {
                texto: _S,
              }),
              (0, JSXRuntime.jsx)(`p`, {
                className: `aj-texto aj-13`,
                children: `Cargando…`,
              }),
            ],
          }),
        });
  let f = i.vista;
  if (!f.ok && f.sinPermiso) return null;
  if (!f.ok)
    return (0, JSXRuntime.jsx)(Card, {
      i: e,
      children: (0, JSXRuntime.jsxs)(`div`, {
        className: `aj-col`,
        children: [
          (0, JSXRuntime.jsx)(_g, {
            texto: _S,
          }),
          (0, JSXRuntime.jsx)(Notice, {
            aviso: {
              ok: !1,
              texto: f.mensaje,
            },
          }),
          (0, JSXRuntime.jsx)(`div`, {
            className: `aj-r-acc`,
            children: (0, JSXRuntime.jsx)(Button, {
              clase: `aj-btn`,
              onClick: () => {
                (a({
                  fase: `cargando`,
                }),
                  d((e) => e + 1));
              },
              children: `Reintentar`,
            }),
          }),
        ],
      }),
    });
  let p = f.prendido;
  function m(e) {
    n ||
      e === p ||
      (e &&
        !confirm(`Bono de bienvenida en el lobby

Todos los jugadores van a ver el bono ROCCO12 («duplicás tu primera carga»): la tarjeta del lobby, el bloque del ingreso, el campo del registro, la nota de la carga y el chat.

Hoy no hay un sistema de bonos detrás: sólo se muestra.

¿Prenderlo?`)) ||
      (l(e),
      r(async () => {
        let n = await gS(e).catch(() => ({
          ok: !1,
          mensaje: `No se pudo guardar. Probá de nuevo.`,
          prendido: void 0,
        }));
        (n.ok &&
          typeof n.prendido == `boolean` &&
          a({
            fase: `lista`,
            vista: {
              ok: !0,
              prendido: n.prendido,
              guardado: !0,
            },
          }),
          s({
            ok: n.ok,
            texto: n.mensaje,
          }),
          l(null),
          t.refresh());
      }));
  }
  return (0, JSXRuntime.jsx)(Card, {
    i: e,
    children: (0, JSXRuntime.jsxs)(`div`, {
      className: `aj-col`,
      children: [
        (0, JSXRuntime.jsx)(_g, {
          texto: _S,
          derecha: (0, JSXRuntime.jsx)(Tg, {
            tono: p ? `ambar` : `gris`,
            children: p ? `PRENDIDO` : `APAGADO`,
          }),
        }),
        (0, JSXRuntime.jsx)(`p`, {
          className: `aj-texto`,
          children: `El bono ROCCO12 del lobby: la tarjeta «Bono bienvenida» (y «Tu bono» con sesión), el bloque del bono en el ingreso, el campo «Código de bono» del registro, la nota de la carga y la respuesta rápida del chat. Apagado, no aparece en ningún lado.`,
        }),
        !f.guardado &&
          (0, JSXRuntime.jsx)(`p`, {
            className: `aj-texto aj-13`,
            children: `Nunca se tocó: está apagado, que es como arranca.`,
          }),
        (0, JSXRuntime.jsxs)(`div`, {
          className: `aj-sub`,
          children: [
            (0, JSXRuntime.jsx)(`div`, {
              className: `aj-ops dos`,
              role: `group`,
              "aria-label": `Bono de bienvenida en el lobby`,
              children: [!0, !1].map((e) => {
                let t = e === p;
                return (0, JSXRuntime.jsx)(
                  Button,
                  {
                    tono: t ? `naranja` : `secundario`,
                    "aria-pressed": t,
                    clase: `aj-btn aj-op`,
                    deshabilitado: n,
                    onClick: () => m(e),
                    children:
                      c === e
                        ? e
                          ? `Prendiendo…`
                          : `Apagando…`
                        : e
                          ? `Prendido`
                          : `Apagado`,
                  },
                  String(e),
                );
              }),
            }),
            (0, JSXRuntime.jsx)(Notice, {
              aviso: o,
            }),
          ],
        }),
        (0, JSXRuntime.jsx)(`p`, {
          className: `aj-texto`,
          children: `Hoy no hay un sistema de bonos detrás: prenderlo sólo lo muestra, no acredita nada. Quien ya tiene el lobby abierto ve el cambio al recargar.`,
        }),
      ],
    }),
  });
}
let yS, bS, xS, SS, CS, wS, TS, ES, DS;
function OS({ clase: e, ...t }) {
  return (0, JSXRuntime.jsx)(Button, {
    tono: `secundario`,
    ...t,
    clase: classNames(`aj-btn`, e),
  });
}
function kS({ on: e, clase: t, ...n }) {
  return (0, JSXRuntime.jsx)(Button, {
    ...n,
    tono: e ? `naranja` : `secundario`,
    "aria-pressed": e,
    clase: classNames(`aj-btn aj-op`, t),
  });
}
function AS({ aviso: e, id: t }) {
  let n = e.de(t);
  return (0, JSXRuntime.jsx)(Notice, {
    aviso: n
      ? {
          ok: n.ok,
          texto: n.text,
        }
      : null,
  });
}
function DistributionSettings({ p: e }) {
  let t = createDemoRouter(),
    [n, r] = (0, React.useTransition)(),
    i = db(),
    { decirEn: a } = i,
    [o, s] = (0, React.useState)(null),
    [c, l] = (0, React.useState)(null),
    [u, d] = (0, React.useState)(!1);
  ((0, React.useEffect)(() => {
    Px()
      .then(s)
      .catch(() => {});
  }, []),
    (0, React.useEffect)(() => {
      Bx()
        .then(l)
        .catch(() => {});
    }, []));
  let f = () => {
      Px()
        .then(s)
        .catch(() => {});
    },
    p = () => {
      Bx()
        .then(l)
        .catch(() => {});
    },
    [m, h] = (0, React.useState)({
      fase: `cargando`,
    }),
    [g, _] = (0, React.useState)(0);
  (0, React.useEffect)(() => {}, [!1, g]);
  function v() {
    if (n) return;
    let i = prompt(
      [
        `¿Cuánto tienen que devolver los juegos, de cada 100 apostados?`,
        ``,
        `Cuanto más bajo, más se queda el casino de cada apuesta — y más rápido se funde el jugador.`,
        `Escribí sólo el número (por ejemplo: 85), o dejalo vacío para volver al de cada estudio.`,
      ].join(`
`),
      e.rtp?.replace(`%`, ``) ?? ``,
    );
    if (i === null) return;
    let o = i.trim() === ``,
      s = Number(i.trim().replace(`%`, ``).replace(`,`, `.`)),
      c = o
        ? `el RTP de cada estudio`
        : `${i.trim().replace(`%`, ``)}% de retorno`,
      l =
        !o && Number.isFinite(s) && s < 50
          ? `\n\nOJO: al ${s}%, de cada ARS 1.000 apostados el jugador recupera ARS ${Math.round(s * 10)}. Se queda sin plata muy rápido.`
          : ``;
    confirm(
      `Los juegos van a pasar a ${c}, para todos los jugadores.${l}\n\n¿Seguro?`,
    ) &&
      r(async () => {
        let e = await _m(i).catch(() => ({
          ok: !1,
          mensaje: `No se pudo guardar.`,
        }));
        (a(`rtp`, e.ok, e.mensaje), t.refresh());
      });
  }
  function y(e) {
    n ||
      r(async () => {
        let n = await vm(e.wagerId, e.pairCode).catch(() => ({
          ok: !1,
          mensaje: `No se pudo.`,
        }));
        (a(SS(e), n.ok, n.mensaje), t.refresh());
      });
  }
  function b(e) {
    if (n) return;
    let i = prompt(
      [
        `¿Por qué se cierra la apuesta de ${e.username ?? `este jugador`} por ${e.monto}?`,
        ``,
        `Queda guardado con tu nombre y la fecha. Es lo que vale como respaldo si el jugador reclama.`,
        `Por ejemplo: "el proveedor confirmó que la ronda se anuló y no hubo premio".`,
      ].join(`
`),
      ``,
    );
    i !== null &&
      r(async () => {
        let n = await ym(e.wagerId, e.pairCode, i).catch(() => ({
          ok: !1,
          mensaje: `No se pudo.`,
        }));
        (a(SS(e), n.ok, n.mensaje), t.refresh());
      });
  }
  function x(e) {
    if (n) return;
    let i = prompt(
      `¿Qué porcentaje cobra ${e.username} sobre lo que gana el casino con sus jugadores?\n\nAhora: ${e.sinPorcentaje ? `sin fijar (cobra 0)` : e.porcentaje}\n\nEscribí sólo el número. Por ejemplo: 30`,
      e.sinPorcentaje ? `` : e.porcentaje.replace(`%`, ``),
    );
    i !== null &&
      r(async () => {
        let n = await cm(e.cajeroId, i).catch(() => ({
          ok: !1,
          mensaje: `No se pudo guardar.`,
        }));
        (a(CS(e), n.ok, n.mensaje), t.refresh());
      });
  }
  let S = e.esDueno && e.comisiones.length > 0;
  function C(t) {
    return t === `rtp`
      ? e.esMadre
      : t.startsWith(`trab:`)
        ? e.trabadas.some((e) => SS(e) === t)
        : t.startsWith(`com:`)
          ? S && e.comisiones.some((e) => CS(e) === t)
          : t === xS
            ? o?.ok === !0
            : t.startsWith(`rep:alias:`)
              ? o?.ok === !0 && o.gente.some((e) => TS(e.id) === t)
              : t.startsWith(`rep:`)
                ? o?.ok === !0 && o.gente.some((e) => wS(e.id) === t)
                : t.startsWith(`demo:`)
                  ? c?.ok === !0 &&
                    c.gente.some((e) => DS(e.id) === t && (e.demo || u))
                  : (t === `marca:interruptor` ||
                      t === `marca:sumar` ||
                      t.startsWith(`marca:quitar:`),
                    !1);
  }
  let w = i.flotante(C),
    T = 1,
    E = e.esMadre ? T++ : 0,
    D = o?.ok ? T++ : 0,
    O = e.esMadre ? T++ : 0,
    ee = e.isAdmin && e.esMadre ? T++ : 0,
    te = c?.ok ? T++ : 0,
    k = T++,
    A = S ? T++ : 0,
    j = T;
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      e.esMadre &&
        (0, JSXRuntime.jsx)(Card, {
          i: E,
          children: (0, JSXRuntime.jsxs)(`div`, {
            className: `aj-col`,
            children: [
              (0, JSXRuntime.jsx)(_g, {
                texto: `CUÁNTO DEVUELVEN LOS JUEGOS`,
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `aj-rtp`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    className: classNames(`aj-grande`, !e.rtp && `gris`),
                    children: e.rtp ?? `el de cada estudio`,
                  }),
                  (0, JSXRuntime.jsx)(OS, {
                    onClick: v,
                    deshabilitado: n,
                    children: `Cambiar`,
                  }),
                ],
              }),
              (0, JSXRuntime.jsx)(AS, {
                aviso: i,
                id: `rtp`,
              }),
              (0, JSXRuntime.jsx)(`p`, {
                className: `aj-texto`,
                children: `De cada 100 que se apuestan, esto es lo que vuelve a los jugadores a la larga. Vale para todos los juegos y para todos los jugadores. Se muestra acá a propósito: una configuración que cambia cuánto paga el casino y que no se ve en ninguna parte es la que nadie recuerda haber puesto.`,
              }),
            ],
          }),
        }),
      o?.ok &&
        (0, JSXRuntime.jsx)(MS, {
          v: o,
          i: D,
          aviso: i,
          traer: f,
        }),
      e.esMadre &&
        (0, JSXRuntime.jsx)(GeneralPhoneSettings, {
          i: O,
        }),
      e.isAdmin &&
        e.esMadre &&
        (0, JSXRuntime.jsx)(WelcomeBonusSettings, {
          i: ee,
        }),
      c?.ok &&
        (0, JSXRuntime.jsx)(NS, {
          v: c,
          i: te,
          aviso: i,
          traer: p,
          abierto: u,
          setAbierto: d,
        }),
      !1,
      (0, JSXRuntime.jsx)(Card, {
        i: k,
        children: (0, JSXRuntime.jsxs)(`div`, {
          className: `aj-col`,
          children: [
            (0, JSXRuntime.jsx)(_g, {
              texto: `APUESTAS TRABADAS`,
              derecha:
                e.trabadas.length > 0
                  ? (0, JSXRuntime.jsxs)(`span`, {
                      className: `aj-esperando`,
                      children: [e.trabadas.length, ` esperando`],
                    })
                  : void 0,
            }),
            e.trabadas.length === 0
              ? (0, JSXRuntime.jsx)(`p`, {
                  className: `aj-texto aj-13`,
                  children: `Ninguna. Acá aparecen las apuestas donde al jugador se le descontó la plata y el resultado nunca llegó: son las únicas que necesitan que una persona decida.`,
                })
              : (0, JSXRuntime.jsx)(`div`, {
                  className: `aj-renglones sin-primera`,
                  children: e.trabadas.map((e) =>
                    (0, JSXRuntime.jsxs)(
                      `div`,
                      {
                        className: `aj-renglon`,
                        children: [
                          (0, JSXRuntime.jsxs)(`div`, {
                            className: `aj-r-datos`,
                            children: [
                              (0, JSXRuntime.jsxs)(`span`, {
                                className: `aj-r-tit`,
                                children: [
                                  e.username ?? `sin jugador`,
                                  ` · `,
                                  yS(e.monto),
                                ],
                              }),
                              (0, JSXRuntime.jsxs)(`span`, {
                                className: `aj-r-sub`,
                                children: [
                                  e.cuando,
                                  ` · `,
                                  e.intentos,
                                  `\xA0`,
                                  e.intentos === 1 ? `intento` : `intentos`,
                                  ` · último `,
                                  e.ultimoIntento,
                                ],
                              }),
                              e.ultimoError &&
                                (0, JSXRuntime.jsx)(`span`, {
                                  className: `aj-r-error`,
                                  children: e.ultimoError,
                                }),
                            ],
                          }),
                          (0, JSXRuntime.jsxs)(`div`, {
                            className: `aj-r-acc`,
                            children: [
                              (0, JSXRuntime.jsx)(OS, {
                                onClick: () => y(e),
                                deshabilitado: n,
                                children: `Reintentar`,
                              }),
                              (0, JSXRuntime.jsx)(OS, {
                                tono: `corte`,
                                onClick: () => b(e),
                                deshabilitado: n,
                                children: `Cerrarla a mano`,
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsx)(AS, {
                            aviso: i,
                            id: SS(e),
                          }),
                        ],
                      },
                      `${e.wagerId}-${e.pairCode}`,
                    ),
                  ),
                }),
          ],
        }),
      }),
      S &&
        (0, JSXRuntime.jsx)(Card, {
          i: A,
          children: (0, JSXRuntime.jsxs)(`div`, {
            className: `aj-col`,
            children: [
              (0, JSXRuntime.jsx)(_g, {
                texto: `CUÁNTO COBRA CADA CAJERO · ${e.mesEnCurso.toUpperCase()}`,
              }),
              (0, JSXRuntime.jsx)(`p`, {
                className: `aj-texto`,
                children: `Un porcentaje de lo que el casino le ganó a SUS jugadores, mes a mes. Si un mes el casino perdió con ellos, esa pérdida se arrastra al mes siguiente.`,
              }),
              (0, JSXRuntime.jsx)(`div`, {
                className: `aj-renglones`,
                children: e.comisiones.map((e) =>
                  (0, JSXRuntime.jsxs)(
                    `div`,
                    {
                      className: `aj-renglon`,
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `aj-r-datos`,
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `aj-r-tit`,
                              children: e.username,
                            }),
                            (0, JSXRuntime.jsxs)(`span`, {
                              className: `aj-r-sub`,
                              children: [
                                e.jugadores,
                                `\xA0`,
                                e.jugadores === 1 ? `jugador` : `jugadores`,
                                ` ·`,
                                ` `,
                                e.sinPorcentaje
                                  ? `sin porcentaje fijado`
                                  : `${e.porcentaje} de ${yS(e.netwinMes)}`,
                                e.debeCents
                                  ? ` · arrastra ${yS(e.debeCents)} en rojo`
                                  : ``,
                              ],
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `aj-r-acc aj-r-acc-14`,
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              className: classNames(
                                `aj-monto`,
                                e.sinPorcentaje && `gris`,
                              ),
                              children: (0, JSXRuntime.jsx)(xg, {
                                texto: e.comisionMes,
                              }),
                            }),
                            (0, JSXRuntime.jsx)(OS, {
                              onClick: () => x(e),
                              deshabilitado: n,
                              children: e.sinPorcentaje
                                ? `Fijar el porcentaje`
                                : `Cambiar`,
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsx)(AS, {
                          aviso: i,
                          id: CS(e),
                        }),
                      ],
                    },
                    e.cajeroId,
                  ),
                ),
              }),
            ],
          }),
        }),
      e.ganadores.length > 0 &&
        (0, JSXRuntime.jsx)(Card, {
          i: j,
          children: (0, JSXRuntime.jsxs)(`div`, {
            className: `aj-col`,
            children: [
              (0, JSXRuntime.jsx)(_g, {
                texto: `JUGADORES QUE RETIRARON MÁS DE LO QUE CARGARON`,
              }),
              (0, JSXRuntime.jsx)(`p`, {
                className: `aj-texto`,
                children: `No es una acusación: alguien tiene que ganar para que el casino sea creíble. Sirve para mirar con más atención si un mismo nombre aparece mes tras mes.`,
              }),
              (0, JSXRuntime.jsx)(`div`, {
                className: `aj-renglones`,
                children: e.ganadores.map((e, t) =>
                  (0, JSXRuntime.jsxs)(
                    `div`,
                    {
                      className: classNames(`aj-renglon`, rg(j + 1 + t)),
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `aj-r-datos`,
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `aj-r-tit`,
                              children: e.username,
                            }),
                            (0, JSXRuntime.jsxs)(`span`, {
                              className: `aj-r-sub`,
                              children: [
                                e.mes,
                                ` · cargó `,
                                yS(e.cargado),
                                ` · retiró `,
                                yS(e.retirado),
                                ` en`,
                                `\xA0`,
                                e.retiros,
                                `\xA0`,
                                e.retiros === 1 ? `retiro` : `retiros`,
                              ],
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `aj-monto rojo`,
                          children: (0, JSXRuntime.jsx)(xg, {
                            texto: e.neto,
                          }),
                        }),
                      ],
                    },
                    `${e.username}-${e.mes}`,
                  ),
                ),
              }),
            ],
          }),
        }),
      w &&
        (0, JSXRuntime.jsx)(B_, {
          aviso: {
            ok: w.ok,
            texto: w.text,
          },
          onCerrar: i.limpiar,
        }),
    ],
  });
}
function MS({ v: e, i: t, aviso: n, traer: r }) {
  let [i, a] = (0, React.useTransition)(),
    { decirEn: o } = n,
    s = (e, t) => {
      a(async () => {
        let n = await t().catch(() => ({
          ok: !1,
          mensaje: `No se pudo guardar.`,
        }));
        (o(e, n.ok, n.mensaje), r());
      });
    },
    c = e.gente.filter((e) => e.enReparto),
    [l, u] = (0, React.useState)(null),
    [d, f] = (0, React.useState)(null),
    [p, m] = (0, React.useState)(null),
    [h, g] = (0, React.useState)(``),
    [_, v] = (0, React.useState)(``),
    y = () => {
      (u(null), f(null));
    },
    b = () => {
      (m(null), g(``), v(``));
    };
  function x(e, t, n) {
    let r = p === e;
    (m(r ? null : e), g(r ? `` : t), v(r ? `` : n));
  }
  function S(e, t, n) {
    let r = qc(h, _);
    r.ok &&
      ((r.valor === null &&
        (!n ||
          !confirm(
            `Se le borra el alias de cobro a ${t}.\n\nSus jugadores van a ver sólo el WhatsApp y van a tener que preguntarle a dónde transferir. ¿Seguro?`,
          ))) ||
        s(TS(e), async () => {
          let t = await Ix(e, h, _);
          return (t.ok && b(), t);
        }));
  }
  function C(e) {
    (f(null), u((t) => (t === e ? null : e)));
  }
  function w(e) {
    let t = d?.texto;
    t != null &&
      s(wS(e), async () => {
        let n = await Fx(e, t);
        return (n.ok && y(), n);
      });
  }
  function T(e, t) {
    confirm(
      `Se le borra el número a ${t} y además SALE del reparto: deja de recibir jugadores NUEVOS.\n\nLos que ya son suyos siguen escribiéndole a él y le siguen pagando comisión. ¿Seguro?`,
    ) &&
      s(wS(e), async () => {
        let t = await Fx(e, ``);
        return (t.ok && y(), t);
      });
  }
  function E(e, t, n) {
    (!n &&
      !confirm(
        `${t} deja de recibir jugadores NUEVOS.\n\nLos que ya son suyos siguen escribiéndole a él y le siguen pagando comisión. ¿Seguro?`,
      )) ||
      s(wS(e), () => Lx(e, n));
  }
  function D(e, t, n) {
    s(xS, () => Rx(e, t, n));
  }
  return (0, JSXRuntime.jsx)(Card, {
    i: t,
    children: (0, JSXRuntime.jsxs)(`div`, {
      className: `aj-col aj-col-16`,
      children: [
        (0, JSXRuntime.jsx)(_g, {
          texto: `A QUÉ WHATSAPP LE ESCRIBEN PARA CARGAR`,
        }),
        (0, JSXRuntime.jsx)(`div`, {
          className: `aj-personas`,
          children: e.gente.map((t) => {
            let r = p === t.id,
              a = r ? qc(h, _) : null,
              o = Wc(h).length === 0 && Wc(_).length === 0,
              s = t.alias
                ? Yc({
                    alias: t.alias,
                    titular: t.aliasTitular,
                  })
                : null,
              c = r && !o && a?.ok ? Yc(a.valor) : null,
              u = a !== null && !a.ok && !o ? a.campo : null,
              m = t.alias !== `` || t.aliasRoto;
            return (0, JSXRuntime.jsxs)(
              `div`,
              {
                className: classNames(`aj-persona`, t.enReparto && `dentro`),
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `aj-p-arriba`,
                    children: [
                      (0, JSXRuntime.jsxs)(`span`, {
                        className: `aj-p-nombre`,
                        children: [
                          (0, JSXRuntime.jsx)(`b`, {
                            children: t.username,
                          }),
                          !t.esMadre &&
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `aj-etq`,
                              children: `socio`,
                            }),
                        ],
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        className: classNames(`aj-p-num`, !t.numero && `sin`),
                        children: t.numero || `sin número`,
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `aj-p-abajo`,
                    children: [
                      (0, JSXRuntime.jsx)(OS, {
                        deshabilitado: i,
                        "aria-expanded": l === t.id,
                        onClick: () => C(t.id),
                        children:
                          l === t.id
                            ? `Cerrar`
                            : t.numero
                              ? `Cambiar`
                              : `Cargar`,
                      }),
                      t.esMadre &&
                        (0, JSXRuntime.jsx)(kS, {
                          on: t.enReparto,
                          deshabilitado: i || (!t.numero && !t.enReparto),
                          onClick: () => E(t.id, t.username, !t.enReparto),
                          children: t.enReparto ? `En el reparto` : `Fuera`,
                        }),
                      t.enReparto &&
                        (0, JSXRuntime.jsxs)(`span`, {
                          className: `aj-p-pct`,
                          children: [t.parte, `%`],
                        }),
                    ],
                  }),
                  l === t.id &&
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        flexDirection: `column`,
                        gap: 10,
                        minWidth: 0,
                      },
                      children: [
                        (0, JSXRuntime.jsx)(PhoneNumberEditor, {
                          id: `tel-${t.id}`,
                          valorGuardado: ES(t.numero),
                          estilo: `v4`,
                          etiqueta: `¿A qué WhatsApp le escriben los jugadores de ${t.username}?`,
                          deshabilitado: i,
                          onCambiar: f,
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexWrap: `wrap`,
                            gap: 8,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(OS, {
                              tono: `naranja`,
                              deshabilitado:
                                i || d?.texto === null || d?.texto === void 0,
                              onClick: () => w(t.id),
                              children: `Guardar el número`,
                            }),
                            (0, JSXRuntime.jsx)(OS, {
                              deshabilitado: i,
                              onClick: y,
                              children: `Cancelar`,
                            }),
                            t.numero !== `` &&
                              (0, JSXRuntime.jsx)(OS, {
                                tono: `rojo`,
                                deshabilitado: i,
                                onClick: () => T(t.id, t.username),
                                children: `Borrar el número`,
                              }),
                          ],
                        }),
                      ],
                    }),
                  (0, JSXRuntime.jsx)(AS, {
                    aviso: n,
                    id: wS(t.id),
                  }),
                  e.aliasHabilitado &&
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `aj-p-abajo`,
                      children: [
                        (0, JSXRuntime.jsxs)(`span`, {
                          className: classNames(
                            `aj-p-num`,
                            !s && !t.aliasRoto && `sin`,
                          ),
                          style: {
                            flex: `1 1 150px`,
                            minWidth: 0,
                            whiteSpace: `normal`,
                            overflowWrap: `anywhere`,
                            ...(s
                              ? null
                              : t.aliasRoto
                                ? {
                                    color: `var(--ambar, #f5a524)`,
                                  }
                                : null),
                          },
                          children: [
                            s
                              ? `${s.alias} · ${s.detalle}`
                              : t.aliasRoto
                                ? `El alias guardado no se entiende: el jugador no lo ve. Cargalo de nuevo.`
                                : `sin alias de cobro`,
                            s &&
                              !t.aliasVisible &&
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  display: `block`,
                                  marginTop: 4,
                                  color: `var(--ambar, #f5a524)`,
                                },
                                children:
                                  t.numero === ``
                                    ? `Todavía no se muestra: falta cargarle el WhatsApp a esta persona.`
                                    : `No se muestra: otra persona tiene el mismo WhatsApp con otro alias.`,
                              }),
                          ],
                        }),
                        (0, JSXRuntime.jsx)(OS, {
                          deshabilitado: i,
                          "aria-expanded": r,
                          onClick: () => x(t.id, t.alias, t.aliasTitular),
                          children: r
                            ? `Cerrar`
                            : t.alias
                              ? `Cambiar alias`
                              : `Cargar alias`,
                        }),
                      ],
                    }),
                  r &&
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        flexDirection: `column`,
                        gap: 12,
                        minWidth: 0,
                      },
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            minWidth: 0,
                          },
                          children: [
                            (0, JSXRuntime.jsxs)(`label`, {
                              htmlFor: `alias-${t.id}`,
                              className: `aj-ops-rot`,
                              style: {
                                display: `block`,
                                marginBottom: 6,
                                lineHeight: 1.5,
                              },
                              children: [
                                `¿A qué alias, CBU o número de cuenta le transfieren los jugadores de `,
                                t.username,
                                `?`,
                              ],
                            }),
                            (0, JSXRuntime.jsx)(Ng, {
                              id: `alias-${t.id}`,
                              valor: h,
                              onCambiar: g,
                              max: 60,
                              placeholder: `test.caja.demo`,
                              deshabilitado: i,
                              error: u === `alias`,
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            minWidth: 0,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`label`, {
                              htmlFor: `titular-${t.id}`,
                              className: `aj-ops-rot`,
                              style: {
                                display: `block`,
                                marginBottom: 6,
                                lineHeight: 1.5,
                              },
                              children: `¿A nombre de quién está esa cuenta? Es lo que el jugador ve en su banco antes de confirmar.`,
                            }),
                            (0, JSXRuntime.jsx)(Ng, {
                              id: `titular-${t.id}`,
                              valor: _,
                              onCambiar: v,
                              max: 60,
                              placeholder: `Cuenta Demo`,
                              deshabilitado: i,
                              error: u === `titular`,
                            }),
                          ],
                        }),
                        c &&
                          (0, JSXRuntime.jsxs)(`span`, {
                            className: `aj-texto`,
                            style: {
                              overflowWrap: `anywhere`,
                            },
                            children: [
                              `El jugador va a ver: `,
                              (0, JSXRuntime.jsx)(`b`, {
                                children: c.renglon,
                              }),
                            ],
                          }),
                        o &&
                          m &&
                          (0, JSXRuntime.jsx)(`span`, {
                            className: `aj-texto`,
                            children: `Con los dos campos vacíos se BORRA el alias: sus jugadores vuelven a ver sólo el WhatsApp.`,
                          }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexWrap: `wrap`,
                            gap: 8,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(OS, {
                              tono: o && m ? `rojo` : `naranja`,
                              deshabilitado:
                                i || a === null || !a.ok || (o && !m),
                              onClick: () => S(t.id, t.username, m),
                              children: o
                                ? `Borrar el alias`
                                : `Guardar el alias`,
                            }),
                            (0, JSXRuntime.jsx)(OS, {
                              deshabilitado: i,
                              onClick: b,
                              children: `Cancelar`,
                            }),
                          ],
                        }),
                        a !== null &&
                          !a.ok &&
                          (0, JSXRuntime.jsx)(Notice, {
                            aviso: {
                              ok: !1,
                              texto: a.mensaje,
                            },
                          }),
                      ],
                    }),
                  (0, JSXRuntime.jsx)(AS, {
                    aviso: n,
                    id: TS(t.id),
                  }),
                ],
              },
              t.id,
            );
          }),
        }),
        (0, JSXRuntime.jsxs)(`div`, {
          className: `aj-sub`,
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `rotulo`,
              children: `CÓMO SE REPARTEN LOS JUGADORES NUEVOS`,
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              className: `aj-ops dos`,
              children: [
                (0, JSXRuntime.jsx)(kS, {
                  on: e.modo === `equitativo`,
                  deshabilitado: i,
                  onClick: () => D(`equitativo`, null, e.prioridadPct),
                  children: `Parejo entre todos`,
                }),
                (0, JSXRuntime.jsx)(kS, {
                  on: e.modo === `prioridad`,
                  deshabilitado: i || c.length === 0,
                  onClick: () =>
                    D(
                      `prioridad`,
                      e.prioridadAdminId ?? c[0]?.id ?? null,
                      e.prioridadPct,
                    ),
                  children: `Prioridad a uno`,
                }),
              ],
            }),
            e.modo === `prioridad` &&
              (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `aj-ops-bloque`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `aj-ops-rot`,
                        children: `Prioridad para:`,
                      }),
                      (0, JSXRuntime.jsx)(`div`, {
                        className: `aj-ops`,
                        children: c.map((t) =>
                          (0, JSXRuntime.jsx)(
                            kS,
                            {
                              on: e.prioridadAdminId === t.id,
                              deshabilitado: i,
                              titulo: t.username,
                              onClick: () =>
                                D(`prioridad`, t.id, e.prioridadPct),
                              children: t.username,
                            },
                            t.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `aj-ops-bloque`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `aj-ops-rot`,
                        children: `Se lleva:`,
                      }),
                      (0, JSXRuntime.jsx)(`div`, {
                        className: `aj-pcts`,
                        children: bS.map((t) =>
                          (0, JSXRuntime.jsxs)(
                            kS,
                            {
                              on: e.prioridadPct === t,
                              deshabilitado: i,
                              onClick: () =>
                                D(`prioridad`, e.prioridadAdminId, t),
                              children: [t, `%`],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            (0, JSXRuntime.jsx)(AS, {
              aviso: n,
              id: xS,
            }),
            (0, JSXRuntime.jsxs)(`p`, {
              className: `aj-texto`,
              children: [
                `Esto decide a quién le escribe un jugador `,
                (0, JSXRuntime.jsx)(`b`, {
                  children: `nuevo`,
                }),
                `, y con eso, de quién va a ser la comisión de ese jugador para siempre. Los que ya cargaron alguna vez le escriben siempre al mismo de antes, aunque esté fuera del reparto.`,
                c.length === 0 &&
                  (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                    children: [
                      ` `,
                      (0, JSXRuntime.jsx)(`b`, {
                        className: `ambar`,
                        children: `Hoy no hay nadie en el reparto: los jugadores nuevos ven el número general del casino.`,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function NS({ v: e, i: t, aviso: n, traer: r, abierto: i, setAbierto: a }) {
  let [o, s] = (0, React.useTransition)(),
    { decirEn: c } = n,
    l = (0, React.useRef)(null),
    u = (0, React.useRef)(null),
    d = e.gente.filter((e) => e.demo),
    f = (t) => t.soyYo && e.soyMadre;
  function p(e, t, n) {
    o ||
      (n &&
        !confirm(`${t} va a ver el panel lleno de datos INVENTADOS.\n\nMientras esté así NO va a poder cargar, descargar ni aprobar nada, y va a entrar sin el autenticador.

No se escribe ningún movimiento en la base: los libros quedan en cero.

¿Seguro?`)) ||
      ((u.current = n ? null : e),
      s(async () => {
        let t = await Vx(e, n).catch(() => null);
        (c(DS(e), t?.ok ?? !1, t?.mensaje ?? `No se pudo. Probá de nuevo.`),
          r());
      }));
  }
  return (
    (0, React.useEffect)(() => {
      let e = u.current,
        t = l.current;
      if (!e || !t) return;
      let n = Array.from(t.querySelectorAll(`[data-aj-cuenta]`)).find(
        (t) => t.dataset.ajCuenta === e,
      );
      if (!n) return;
      u.current = null;
      let r = n.getBoundingClientRect(),
        i = t.getBoundingClientRect();
      (r.top < i.top || r.bottom > i.bottom) &&
        (t.scrollTop += r.top - i.top - 4);
    }, [e, i]),
    (0, JSXRuntime.jsx)(Card, {
      i: t,
      children: (0, JSXRuntime.jsxs)(`div`, {
        className: `aj-col`,
        children: [
          (0, JSXRuntime.jsxs)(`div`, {
            className: `aj-cab`,
            children: [
              (0, JSXRuntime.jsx)(_g, {
                texto: `DATOS DE MUESTRA PARA ENSEÑAR EL PANEL`,
              }),
              d.length > 0 &&
                (0, JSXRuntime.jsx)(Tg, {
                  tono: `ambar`,
                  children:
                    d.length === 1
                      ? `1 CUENTA PRENDIDA`
                      : `${d.length} CUENTAS PRENDIDAS`,
                }),
              (0, JSXRuntime.jsx)(OS, {
                clase: `aj-empuja`,
                "aria-expanded": i,
                onClick: () => a((e) => !e),
                children: i ? `Ocultar` : `Elegir a quién`,
              }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`p`, {
            className: `aj-texto`,
            children: [
              `Un panel recién creado está en cero y así no se entiende qué hace. Con esto, esa persona lo ve lleno como si estuviera trabajando. `,
              (0, JSXRuntime.jsx)(`b`, {
                children: `No se inventa ningún movimiento en la base`,
              }),
              `: la pantalla se dibuja y los libros siguen en cero. Mientras esté prendido, esa cuenta no puede operar y entra sin el autenticador.`,
            ],
          }),
          d.length > 0 &&
            (0, JSXRuntime.jsx)(`div`, {
              className: `aj-prendidas`,
              children: d.map((e) =>
                (0, JSXRuntime.jsxs)(
                  `div`,
                  {
                    className: `aj-prendida`,
                    "data-aj-cuenta": e.id,
                    children: [
                      (0, JSXRuntime.jsxs)(`div`, {
                        className: `aj-c-arriba`,
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            className: `aj-c-nombre`,
                            children: (0, JSXRuntime.jsx)(`b`, {
                              children: e.username,
                            }),
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            className: `aj-c-casa`,
                            children: e.casa,
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsx)(OS, {
                        clase: `aj-empuja`,
                        deshabilitado: o,
                        onClick: () => p(e.id, e.username, !1),
                        children: `Apagar la muestra`,
                      }),
                      (0, JSXRuntime.jsx)(AS, {
                        aviso: n,
                        id: DS(e.id),
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          i &&
            (0, JSXRuntime.jsx)(`div`, {
              ref: l,
              className: `aj-lista-muestra`,
              children: e.gente
                .filter((e) => !e.demo)
                .map((e) =>
                  (0, JSXRuntime.jsxs)(
                    `div`,
                    {
                      className: classNames(
                        `aj-cuenta`,
                        !e.activo && `sin-acceso`,
                      ),
                      "data-aj-cuenta": e.id,
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `aj-c-arriba`,
                          children: [
                            (0, JSXRuntime.jsxs)(`span`, {
                              className: `aj-c-nombre`,
                              children: [
                                (0, JSXRuntime.jsx)(`b`, {
                                  children: e.username,
                                }),
                                e.soyYo &&
                                  (0, JSXRuntime.jsx)(`span`, {
                                    className: `aj-etq naranja`,
                                    children: `vos`,
                                  }),
                              ],
                            }),
                            (0, JSXRuntime.jsxs)(`span`, {
                              className: `aj-c-casa`,
                              children: [e.casa, e.esMadre ? `` : ` · socio`],
                            }),
                            !e.activo &&
                              (0, JSXRuntime.jsx)(`span`, {
                                className: `aj-etq`,
                                children: `sin acceso`,
                              }),
                          ],
                        }),
                        (0, JSXRuntime.jsx)(OS, {
                          clase: `aj-empuja`,
                          deshabilitado: o || f(e),
                          titulo: f(e)
                            ? `No te la podés prender a vos mismo: quedarías sin el botón para apagarla`
                            : `Que vea el panel con datos inventados`,
                          onClick: () => p(e.id, e.username, !0),
                          children: e.soyYo
                            ? `Verlo yo con datos de muestra`
                            : `Prender la muestra`,
                        }),
                        (0, JSXRuntime.jsx)(AS, {
                          aviso: n,
                          id: DS(e.id),
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
            }),
        ],
      }),
    })
  );
}
function initializeSettingsScreen() {
  Nx =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/reparto-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  Px = Nx(`verRepartoAction`);
  Fx = Nx(`guardarNumeroAction`);
  Ix = Nx(`guardarAliasAction`);
  Lx = Nx(`ponerEnRepartoAction`);
  Rx = Nx(`guardarAjustesRepartoAction`);
  zx =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/demo-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  Bx = zx(`verDemoAction`);
  Vx = zx(`cambiarDemoAction`);
  zodObject({
    usuarios: zodArray(zodUnknown()),
  });
  Jx = {
    py: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `4.67`,
          fill: `#D52B1E`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `9.33`,
          width: `20`,
          height: `4.67`,
          fill: `#0038A8`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `10`,
          cy: `7`,
          r: `1.7`,
          fill: `#ffffff`,
          stroke: `#0038A8`,
          strokeWidth: `0.5`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `10`,
          cy: `7`,
          r: `0.55`,
          fill: `#189B3A`,
        }),
      ],
    }),
    ar: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#74ACDF`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `4.67`,
          width: `20`,
          height: `4.66`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `10`,
          cy: `7`,
          r: `1.5`,
          fill: `#F6B40E`,
        }),
      ],
    }),
    br: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#009739`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          x: `5.5`,
          y: `2.5`,
          width: `9`,
          height: `9`,
          fill: `#FEDD00`,
          transform: `rotate(45 10 7)`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `10`,
          cy: `7`,
          r: `2.6`,
          fill: `#002776`,
        }),
      ],
    }),
    bo: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#D52B1E`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `4.67`,
          width: `20`,
          height: `4.66`,
          fill: `#F9E300`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `9.33`,
          width: `20`,
          height: `4.67`,
          fill: `#007934`,
        }),
      ],
    }),
    uy: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `2.8`,
          width: `20`,
          height: `1.4`,
          fill: `#0038A8`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `5.6`,
          width: `20`,
          height: `1.4`,
          fill: `#0038A8`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `8.4`,
          width: `20`,
          height: `1.4`,
          fill: `#0038A8`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `11.2`,
          width: `20`,
          height: `1.4`,
          fill: `#0038A8`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          width: `8`,
          height: `7`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `4`,
          cy: `3.5`,
          r: `1.8`,
          fill: `#F6B40E`,
        }),
      ],
    }),
    cl: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `7`,
          width: `20`,
          height: `7`,
          fill: `#D52B1E`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          width: `7`,
          height: `7`,
          fill: `#0039A6`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `3.5`,
          cy: `3.5`,
          r: `1.7`,
          fill: `#ffffff`,
        }),
      ],
    }),
    pe: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          width: `6.67`,
          height: `14`,
          fill: `#D91023`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          x: `13.33`,
          width: `6.67`,
          height: `14`,
          fill: `#D91023`,
        }),
      ],
    }),
    co: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#FCD116`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `7`,
          width: `20`,
          height: `3.5`,
          fill: `#003893`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `10.5`,
          width: `20`,
          height: `3.5`,
          fill: `#CE1126`,
        }),
      ],
    }),
    ec: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#FCD116`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `7`,
          width: `20`,
          height: `3.5`,
          fill: `#0033A0`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `10.5`,
          width: `20`,
          height: `3.5`,
          fill: `#CE1126`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `10`,
          cy: `7`,
          r: `1.8`,
          fill: `#0033A0`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `10`,
          cy: `7`,
          r: `0.7`,
          fill: `#FCD116`,
        }),
      ],
    }),
    ve: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#FCD116`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `4.67`,
          width: `20`,
          height: `4.66`,
          fill: `#00247D`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `9.33`,
          width: `20`,
          height: `4.67`,
          fill: `#CF142B`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `7.6`,
          cy: `7.3`,
          r: `0.55`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `10`,
          cy: `6.6`,
          r: `0.55`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `12.4`,
          cy: `7.3`,
          r: `0.55`,
          fill: `#ffffff`,
        }),
      ],
    }),
    mx: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          width: `6.67`,
          height: `14`,
          fill: `#006847`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          x: `13.33`,
          width: `6.67`,
          height: `14`,
          fill: `#CE1126`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `10`,
          cy: `7`,
          r: `1.5`,
          fill: `#8C6239`,
        }),
      ],
    }),
    es: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#AA151B`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `3.5`,
          width: `20`,
          height: `7`,
          fill: `#F1BF00`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `6`,
          cy: `7`,
          r: `1.5`,
          fill: `#AD1519`,
        }),
      ],
    }),
    us: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `2`,
          fill: `#B22234`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `4`,
          width: `20`,
          height: `2`,
          fill: `#B22234`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `8`,
          width: `20`,
          height: `2`,
          fill: `#B22234`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          y: `12`,
          width: `20`,
          height: `2`,
          fill: `#B22234`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          width: `9`,
          height: `7.5`,
          fill: `#3C3B6E`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `3`,
          cy: `2.5`,
          r: `0.7`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `6`,
          cy: `2.5`,
          r: `0.7`,
          fill: `#ffffff`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `4.5`,
          cy: `5`,
          r: `0.7`,
          fill: `#ffffff`,
        }),
      ],
    }),
    otro: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`rect`, {
          width: `20`,
          height: `14`,
          fill: `#2A2A2A`,
        }),
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `10`,
          cy: `7`,
          r: `4.2`,
          fill: `none`,
          stroke: `#8A8A8A`,
          strokeWidth: `1.1`,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          x: `5.8`,
          y: `6.45`,
          width: `8.4`,
          height: `1.1`,
          fill: `#8A8A8A`,
        }),
      ],
    }),
  };
  Xx = `cubic-bezier(0.34, 1.56, 0.64, 1)`;
  Zx = `scale(.965) translateY(1px)`;
  Qx = new WeakMap();
  eS = {
    onPointerDown: (e) => $x(e.currentTarget, `none`, Zx, 110, Wm),
    onPointerUp: (e) => $x(e.currentTarget, Zx, `none`, 460, Xx),
    onPointerCancel: (e) => $x(e.currentTarget, Zx, `none`, 460, Xx),
    onPointerLeave: (e) => $x(e.currentTarget, Zx, `none`, 460, Xx),
  };
  tS = (e) => ({
    display: `flex`,
    alignItems: `center`,
    gap: `10px`,
    width: `100%`,
    minHeight: `48px`,
    padding: `10px 14px`,
    borderRadius: `11px`,
    cursor: `pointer`,
    fontFamily: `inherit`,
    textAlign: `left`,
    background: tv.interno,
    border: `1px solid ${e ? `rgba(var(--caja-acento-rgb,244,82,11),.5)` : tv.bordeInterno}`,
    color: tv.tx,
  });
  nS = {
    display: `flex`,
    flexDirection: `column`,
    borderRadius: `12px`,
    overflow: `hidden`,
    background: tv.interno2,
    border: `1px solid ${tv.bordeInterno2}`,
    animation: `v3FadeIn .18s ease`,
  };
  rS = (e) => ({
    display: `flex`,
    alignItems: `center`,
    gap: `10px`,
    width: `100%`,
    minHeight: `44px`,
    padding: `10px 14px`,
    border: `none`,
    borderBottom: `1px solid ${tv.fila}`,
    cursor: `pointer`,
    fontFamily: `inherit`,
    textAlign: `left`,
    fontSize: `14px`,
    background: e
      ? `rgba(var(--caja-acento-rgb,244,82,11),.08)`
      : `transparent`,
    color: e ? tv.naranjaClaro : tv.tx,
    fontWeight: e ? 600 : 400,
  });
  iS = (e) => ({
    display: `flex`,
    alignItems: `center`,
    gap: `8px`,
    minHeight: `48px`,
    padding: `0 14px`,
    borderRadius: `11px`,
    background: tv.interno,
    border: `1px solid ${e ? `rgba(255,84,112,.6)` : tv.bordeInterno2}`,
  });
  aS = {
    flex: 1,
    minWidth: 0,
    background: `transparent`,
    border: `none`,
    outline: `none`,
    padding: `12px 0`,
    color: tv.tx,
    fontSize: `16px`,
    fontFamily: `inherit`,
    fontVariantNumeric: `tabular-nums`,
  };
  sS =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/numero-general-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  cS = sS(`verNumeroGeneralAction`);
  lS = sS(`fijarNumeroGeneralAction`);
  mS =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/bono-lobby-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  hS = mS(`verBonoLobbyAction`);
  gS = mS(`fijarBonoLobbyAction`);
  _S = `BONO DE BIENVENIDA EN EL LOBBY`;
  yS = (e) => e.replace(/ARS /g, `ARS\xA0`);
  bS = [50, 60, 70, 80, 90, 100];
  xS = `rep:modo`;
  SS = (e) => `trab:${e.wagerId}-${e.pairCode}`;
  CS = (e) => `com:${e.cajeroId}`;
  wS = (e) => `rep:${e}`;
  TS = (e) => `rep:alias:${e}`;
  ES = (e) => e.replace(/\D/g, ``);
  DS = (e) => `demo:${e}`;
}
export { DistributionSettings, initializeSettingsScreen };
