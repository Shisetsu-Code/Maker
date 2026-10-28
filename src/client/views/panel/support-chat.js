/**
 * panel / support-chat.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { xm, Sm, Cm, wm, Tm, Em, Dm } from "./cashier-controls.js";
import { Um, Gm, qm, Jm, rh } from "./motion.js";
import {
  classNames,
  rg,
  Icon,
  Portal,
  useBodyScrollLock,
  Card,
  Button,
  wg,
  Eg,
  Dg,
  Notice,
  Lg,
  Bg,
  Yg,
} from "./ui-components.js";
function nC(e, t = 56) {
  return e.scrollHeight - e.scrollTop - e.clientHeight <= t;
}
function rC(e, t) {
  if (
    !e ||
    !(e.height > 0) ||
    !Number.isFinite(e.height) ||
    Math.abs(e.scale - 1) > 0.01
  )
    return null;
  let n = Number.isFinite(e.offsetTop) ? Math.max(0, e.offsetTop) : 0;
  return {
    alto: e.height,
    arriba: n,
    teclado: t - e.height > 150,
  };
}
function iC(e) {
  return e.ultimoAhora === ``
    ? e.pegado
      ? `nada`
      : `ancla`
    : e.forzar ||
        (e.ultimoAhora !== e.ultimoAntes && (e.ultimoAntes === `` || e.pegado))
      ? `abajo`
      : e.pegado
        ? `nada`
        : `ancla`;
}
function aC(e, t, n) {
  let r = 0,
    i = e - 1,
    a = -1;
  for (; r <= i;) {
    let e = (r + i) >> 1;
    t(e) > n ? ((a = e), (i = e - 1)) : (r = e + 1);
  }
  return a;
}
function oC(e, t) {
  let n = t - e;
  return Math.abs(n) < 0.5 ? 0 : n;
}
let sC, cC, lC, uC, dC;
function fC(e) {
  let t = new Date();
  if (e.toDateString() === t.toDateString()) return `Hoy`;
  let n = new Date(t);
  return (
    n.setDate(t.getDate() - 1),
    e.toDateString() === n.toDateString()
      ? `Ayer`
      : `${sC[e.getDay()] ?? ``} ${uC(e)}`
  );
}
let pC;
function mC(e, t) {
  let n = [],
    r = null,
    i = null;
  for (let a = 0; a < e.length; a++) {
    let o = e[a];
    if (!o) continue;
    let s = new Date(o.cuando),
      c = s.toDateString();
    c !== r &&
      ((r = c),
      (i = null),
      n.push({
        tipo: `dia`,
        clave: `dia-${c}`,
        etiqueta: fC(s),
      }));
    let l = o.deJugador ? `jug` : `eq`,
      u = a > 0 ? e[a - 1] : void 0;
    ((!(
      i !== null &&
      i.lado === l &&
      u !== void 0 &&
      (u.staffId ?? ``) === (o.staffId ?? ``) &&
      pC(o.cuando) - pC(u.cuando) <= 5
    ) ||
      i === null) &&
      ((i = {
        tipo: `grupo`,
        clave: o.id,
        lado: l,
        items: [],
        pie: ``,
      }),
      n.push(i)),
      i.items.push({
        m: o,
        idx: a,
      }),
      (i.pie =
        (l === `eq` ? `${o.staffId === t ? `Vos` : `Del equipo`} · ` : ``) +
        lC(s)));
  }
  return n;
}
function hC(e) {
  let t = [],
    n = 0;
  for (let r = 0; r < e.length; r++)
    (e[r] === `.` || e[r] === `_`) && (t.push(e.slice(n, r + 1)), (n = r + 1));
  return (
    (n < e.length || t.length === 0) && t.push(e.slice(n)),
    t.map((e, n) =>
      (0, JSXRuntime.jsxs)(
        `span`,
        {
          children: [
            e,
            n < t.length - 1 ? (0, JSXRuntime.jsx)(`wbr`, {}) : null,
          ],
        },
        n,
      ),
    )
  );
}
function gC(e) {
  let t = Math.max(...e.split(/[._]/).map((e) => e.length));
  return t >= 11 ? `sop-nombre-xl` : t >= 9 ? `sop-nombre-l` : void 0;
}
function _C(e) {
  if (typeof window > `u` || typeof window.matchMedia != `function`)
    return () => {};
  let t = window.matchMedia(Um);
  return (
    t.addEventListener(`change`, e),
    () => t.removeEventListener(`change`, e)
  );
}
function vC() {
  return (0, React.useSyncExternalStore)(_C, Jm, () => !1);
}
function yC(e) {
  let t = e.querySelectorAll(`.sop-burbuja`),
    n = e.getBoundingClientRect().top,
    r = aC(t.length, (e) => t.item(e)?.getBoundingClientRect().bottom ?? 0, n),
    i = r >= 0 ? t.item(r) : null;
  return i
    ? {
        el: i,
        y: i.getBoundingClientRect().top - n,
      }
    : null;
}
function bC(e, t) {
  ((e.scrollTop = e.scrollHeight),
    (t.current.pegado = !0),
    (t.current.ancla = null));
}
function xC(e, t) {
  let n = t.current.ancla;
  if (!n || !n.el.isConnected || !e.contains(n.el)) return;
  let r = oC(
    n.y,
    n.el.getBoundingClientRect().top - e.getBoundingClientRect().top,
  );
  r !== 0 && (e.scrollTop += r);
}
function SC(e, t) {
  (0, React.useLayoutEffect)(() => {
    let n = e.current;
    if (!t || !n) return;
    let r = window.visualViewport ?? null,
      i = () => {
        let e = rC(r, document.documentElement.clientHeight);
        if (!e) {
          (n.style.removeProperty(`--sop-vv-alto`),
            n.style.removeProperty(`--sop-vv-arriba`),
            n.removeAttribute(`data-teclado`));
          return;
        }
        (n.style.setProperty(`--sop-vv-alto`, `${e.alto}px`),
          n.style.setProperty(`--sop-vv-arriba`, `${e.arriba}px`),
          e.teclado
            ? n.setAttribute(`data-teclado`, ``)
            : n.removeAttribute(`data-teclado`));
      };
    return (
      i(),
      r?.addEventListener(`resize`, i),
      r?.addEventListener(`scroll`, i),
      window.addEventListener(`resize`, i),
      () => {
        (r?.removeEventListener(`resize`, i),
          r?.removeEventListener(`scroll`, i),
          window.removeEventListener(`resize`, i));
      }
    );
  }, [e, t]);
}
function CC(e, t) {
  (0, React.useEffect)(() => {
    let n = e.current;
    if (!t || !n) return;
    let r = (e) => {
      if (e.touches.length > 1 || !e.cancelable) return;
      let t = e.target;
      if (!(t instanceof Element) || t.closest(`textarea, input`)) return;
      let n = t.closest(`.sop-mensajes`);
      (n instanceof HTMLElement && n.scrollHeight > n.clientHeight + 1) ||
        e.preventDefault();
    };
    return (
      n.addEventListener(`touchmove`, r, {
        passive: !1,
      }),
      () => n.removeEventListener(`touchmove`, r)
    );
  }, [e, t]);
}
function SupportInbox({ quienSoy: e, puedeEliminar: t = !1 }) {
  let n = vC(),
    [r, i] = (0, React.useState)([]),
    [a, o] = (0, React.useState)(null),
    [s, c] = (0, React.useState)(!0),
    [l, u] = (0, React.useState)(!0),
    [d, f] = (0, React.useState)(!0),
    [p, m] = (0, React.useState)(0),
    h = n || a === null;
  (0, React.useEffect)(() => {
    if (!h) return;
    let e = !0,
      t = () => {
        document.hidden ||
          xm(l)
            .then((t) => {
              e && (f(t.disponible), i(t.hilos), c(!1));
            })
            .catch(() => {
              e && c(!1);
            });
      };
    t();
    let n = setInterval(t, 1e4),
      r = () => {
        document.hidden || t();
      };
    return (
      document.addEventListener(`visibilitychange`, r),
      () => {
        ((e = !1),
          clearInterval(n),
          document.removeEventListener(`visibilitychange`, r));
      }
    );
  }, [l, h, p]);
  function g(e, t = !1) {
    (a?.id === e.id && !t) || o(e);
  }
  function _() {
    o(null);
  }
  function v(e, t) {
    (t || i((t) => t.filter((t) => t.id !== e)), m((e) => e + 1));
  }
  if (s)
    return (0, JSXRuntime.jsx)(`div`, {
      className: `sop-cargando`,
      children: `Cargando…`,
    });
  if (!d)
    return (0, JSXRuntime.jsx)(Card, {
      i: 1,
      children: (0, JSXRuntime.jsx)(`p`, {
        className: `sop-apagado`,
        children: `El chat no está configurado: falta la llave de cifrado en el servidor. Los mensajes no se guardan en claro nunca, así que hasta que esté, el chat queda apagado.`,
      }),
    });
  let y = (0, JSXRuntime.jsx)(TC, {
      hilos: r,
      soloAbiertas: l,
      setSoloAbiertas: u,
      abiertoId: a?.id ?? null,
      abrir: g,
      escritorio: n,
    }),
    b = a
      ? (0, JSXRuntime.jsx)(
          SupportConversation,
          {
            hilo: a,
            quienSoy: e,
            enPanel: n,
            volver: _,
            puedeEliminar: t,
            onEliminada: v,
          },
          a.id,
        )
      : null;
  return n
    ? (0, JSXRuntime.jsxs)(`div`, {
        className: `sop sop-dos`,
        children: [
          (0, JSXRuntime.jsx)(`aside`, {
            className: `sop-panel sop-panel-lista entra e1`,
            "aria-label": `Conversaciones`,
            children: y,
          }),
          (0, JSXRuntime.jsx)(`section`, {
            className: `sop-panel sop-panel-chat entra e2`,
            "aria-label": `Conversación`,
            children:
              b ??
              (0, JSXRuntime.jsxs)(`div`, {
                className: `sop-chat-vacio`,
                children: [
                  (0, JSXRuntime.jsx)(Icon, {
                    nombre: `soporte`,
                    tam: 34,
                    trazo: 1.6,
                  }),
                  (0, JSXRuntime.jsx)(`b`, {
                    children: `Elegí una conversación`,
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    children: `Los mensajes nuevos aparecen primero en la lista.`,
                  }),
                ],
              }),
          }),
        ],
      })
    : (0, JSXRuntime.jsxs)(`div`, {
        className: `sop`,
        inert: b !== null,
        children: [y, b],
      });
}
function TC({
  hilos: e,
  soloAbiertas: t,
  setSoloAbiertas: n,
  abiertoId: r,
  abrir: i,
  escritorio: a,
}) {
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `sop-controles entra`,
        children: [
          (0, JSXRuntime.jsx)(Dg, {
            opciones: cC,
            activo: t ? `abiertas` : `todas`,
            onElegir: (e) => n(e === `abiertas`),
            clase: `sop-filtro`,
            etiqueta: `Qué conversaciones mostrar`,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            className: `sop-espacio`,
          }),
          (0, JSXRuntime.jsx)(EC, {
            abrir: (e) => i(e, !0),
            escritorio: a,
          }),
        ],
      }),
      e.length === 0
        ? (0, JSXRuntime.jsx)(Card, {
            i: 1,
            clase: `sop-vacio`,
            children: (0, JSXRuntime.jsx)(Lg, {
              children: t
                ? `No hay conversaciones abiertas.`
                : `Todavía no te escribió nadie.`,
            }),
          })
        : (0, JSXRuntime.jsx)(`div`, {
            className: `sop-lista`,
            children: e.map((e, t) => {
              let n = e.id === r,
                a = e.sinLeer > 0 && !n;
              return (0, JSXRuntime.jsxs)(
                `button`,
                {
                  type: `button`,
                  className: classNames(
                    `sop-conv`,
                    a && `sop-nueva`,
                    n && `on`,
                    rg(t + 1),
                  ),
                  "aria-current": n ? `true` : void 0,
                  onClick: () => i(e),
                  children: [
                    (0, JSXRuntime.jsxs)(`span`, {
                      className: `sop-conv-av`,
                      children: [
                        (0, JSXRuntime.jsx)(Bg, {
                          nombre: e.jugador,
                          tam: 42,
                        }),
                        a
                          ? (0, JSXRuntime.jsx)(`i`, {
                              className: `sop-punto`,
                            })
                          : null,
                      ],
                    }),
                    (0, JSXRuntime.jsxs)(`span`, {
                      className: `sop-conv-cuerpo`,
                      children: [
                        (0, JSXRuntime.jsxs)(`span`, {
                          className: `sop-conv-arriba`,
                          children: [
                            (0, JSXRuntime.jsx)(`b`, {
                              children: e.jugador,
                            }),
                            e.abierta
                              ? null
                              : (0, JSXRuntime.jsx)(`span`, {
                                  className: `sop-cerrada`,
                                  children: `cerrada`,
                                }),
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `sop-hora`,
                              children: dC(e.ultimoAt),
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`span`, {
                          className: `sop-conv-abajo`,
                          children: [
                            (0, JSXRuntime.jsxs)(`span`, {
                              className: `sop-adelanto`,
                              children: [
                                e.ultimoDe === `staff` ? `Vos: ` : ``,
                                e.adelanto,
                              ],
                            }),
                            a
                              ? (0, JSXRuntime.jsx)(Eg, {
                                  n: e.sinLeer,
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
    ],
  });
}
function EC({ abrir: e, escritorio: t }) {
  let [n, r] = (0, React.useState)(!1),
    [i, a] = (0, React.useState)(``),
    [o, s] = (0, React.useState)([]),
    [c, l] = (0, React.useState)(!1),
    [u, d] = (0, React.useState)(null);
  (0, React.useEffect)(() => {
    let e = i.trim(),
      t = !0,
      n = setTimeout(
        () => {
          if (e.length < 2) {
            (s([]), l(!1));
            return;
          }
          (l(!0),
            Em(e)
              .then((e) => {
                t && (s(e), l(!1));
              })
              .catch(() => {
                t && l(!1);
              }));
        },
        e.length < 2 ? 0 : 300,
      );
    return () => {
      ((t = !1), clearTimeout(n));
    };
  }, [i]);
  async function f(n) {
    (d(null),
      !t &&
        document.activeElement instanceof HTMLElement &&
        document.activeElement.blur());
    try {
      let t = await Dm(n);
      if (!t.ok || !t.hilo) {
        d(t.mensaje ?? `No se pudo abrir.`);
        return;
      }
      (r(!1), a(``), s([]), e(t.hilo));
    } catch {
      d(`No se pudo abrir. Fijate la conexión y probá de nuevo.`);
    }
  }
  return n
    ? (0, JSXRuntime.jsxs)(`div`, {
        className: `sop-nuevo`,
        children: [
          (0, JSXRuntime.jsx)(`label`, {
            className: `campo sop-campo-buscar`,
            children: (0, JSXRuntime.jsx)(`input`, {
              id: `sop-buscar`,
              type: `text`,
              autoFocus: t,
              value: i,
              onChange: (e) => a(e.target.value),
              onKeyDown: (e) => {
                e.key === `Escape` && (r(!1), a(``), s([]));
              },
              placeholder: `Nombre del jugador…`,
              "aria-label": `Nombre del jugador`,
              autoComplete: `off`,
            }),
          }),
          (o.length > 0 || c || u || i.trim().length >= 2) &&
            (0, JSXRuntime.jsxs)(`div`, {
              className: `tarjeta sop-desplegable`,
              role: `listbox`,
              "aria-label": `Jugadores`,
              children: [
                u &&
                  (0, JSXRuntime.jsx)(`p`, {
                    className: `sop-desp-error`,
                    children: u,
                  }),
                c &&
                  (0, JSXRuntime.jsx)(`p`, {
                    className: `sop-desp-texto`,
                    children: `Buscando…`,
                  }),
                !c &&
                  o.length === 0 &&
                  i.trim().length >= 2 &&
                  !u &&
                  (0, JSXRuntime.jsx)(`p`, {
                    className: `sop-desp-texto`,
                    children: `Ningún jugador con ese nombre.`,
                  }),
                o.map((e) =>
                  (0, JSXRuntime.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      role: `option`,
                      "aria-selected": !1,
                      className: `sop-res`,
                      onClick: () => void f(e.id),
                      children: [
                        (0, JSXRuntime.jsx)(Bg, {
                          nombre: e.username,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `sop-res-nombre`,
                          children: e.username,
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            }),
        ],
      })
    : (0, JSXRuntime.jsx)(Button, {
        tono: `naranja`,
        clase: `sop-btn-nuevo`,
        icono: `editar`,
        "aria-label": `Escribirle a un jugador`,
        onClick: () => r(!0),
        children: `Escribirle a un jugador`,
      });
}
let DC;
function OC(e, t) {
  let n = new Set(e.mensajes.map((e) => e.id));
  return {
    mensajes: t,
    nuevos: e.recibido
      ? new Set(t.filter((e) => !n.has(e.id)).map((e) => e.id))
      : new Set(),
    cascada: !e.recibido,
    recibido: !0,
    respondio: !0,
  };
}
function SupportConversation({
  hilo: e,
  quienSoy: t,
  enPanel: n,
  volver: r,
  puedeEliminar: i,
  onEliminada: a,
}) {
  let [o, s] = (0, React.useState)(DC),
    [c, l] = (0, React.useState)(``),
    [u, d] = (0, React.useState)(!1),
    [f, p] = (0, React.useState)(null),
    [m, h] = (0, React.useState)(e.abierta),
    [g, _] = (0, React.useState)(null),
    [v, y] = (0, React.useState)(null),
    b = (0, React.useRef)(null),
    x = (0, React.useRef)(null),
    S = (0, React.useRef)(null),
    C = (0, React.useRef)(null),
    w = (0, React.useRef)({
      pegado: !0,
      ancla: null,
      forzar: !1,
    }),
    T = (0, React.useRef)(!1),
    E = (0, React.useRef)(0),
    D = (0, React.useRef)(``),
    O = (0, React.useRef)(0),
    [ee, te] = (0, React.useState)(0),
    [k, A] = (0, React.useState)(`cerrada`),
    [j, M] = (0, React.useState)(null),
    N = (0, React.useRef)(null),
    P = (0, React.useRef)(null),
    F = (0, React.useRef)(null),
    ne = (0, React.useId)(),
    [I, L] = (0, React.useState)(e);
  I !== e && (L(e), h(e.abierta));
  let { mensajes: R } = o,
    re = !n;
  (useBodyScrollLock(re),
    SC(C, re),
    CC(C, re),
    (0, React.useLayoutEffect)(() => {
      let e = C.current;
      if (n || !e || qm() || typeof e.animate != `function`) return;
      let t = e.animate(rh(1).entra, {
        duration: 460,
        easing: Gm,
      });
      return () => t.cancel();
    }, [n]),
    (0, React.useLayoutEffect)(() => {
      let e = S.current;
      if (n || !e) return;
      let t = w,
        r = () => {
          ((t.current.pegado = nC(e)),
            (t.current.ancla = t.current.pegado ? null : yC(e)));
        };
      e.addEventListener(`scroll`, r, {
        passive: !0,
      });
      let i =
        typeof ResizeObserver == `function`
          ? new ResizeObserver(() => {
              t.current.pegado && bC(e, t);
            })
          : null;
      return (
        i?.observe(e),
        () => {
          (e.removeEventListener(`scroll`, r), i?.disconnect());
        }
      );
    }, [n]),
    (0, React.useEffect)(() => {
      let t = !0,
        n = () => {
          if (document.hidden) return;
          let n = ++E.current;
          Sm(e.id)
            .then((e) => {
              if (!(!t || n !== E.current)) {
                if (!e.ok) {
                  s((e) =>
                    e.respondio
                      ? e
                      : {
                          ...e,
                          respondio: !0,
                        },
                  );
                  return;
                }
                s((t) => OC(t, e.mensajes));
              }
            })
            .catch(() => {});
        };
      n();
      let r = setInterval(n, 8e3),
        i = () => {
          document.hidden || n();
        };
      return (
        document.addEventListener(`visibilitychange`, i),
        () => {
          ((t = !1),
            clearInterval(r),
            document.removeEventListener(`visibilitychange`, i));
        }
      );
    }, [e.id, ee]),
    (0, React.useEffect)(
      () => () => {
        F.current && clearTimeout(F.current);
      },
      [],
    ),
    (0, React.useEffect)(() => {
      k === `confirmando` &&
        P.current?.focus({
          preventScroll: !0,
        });
    }, [k]),
    (0, React.useLayoutEffect)(() => {
      let e = R[R.length - 1]?.id ?? ``;
      if (n) {
        if (e === D.current) return;
        let t = D.current === ``;
        D.current = e;
        let n = t ? `instant` : `smooth`;
        (S.current?.scrollTo({
          top: S.current.scrollHeight,
          behavior: n,
        }),
          (O.current = Date.now()));
        return;
      }
      let t = S.current;
      if (!t) return;
      let r = w,
        i = iC({
          ultimoAntes: D.current,
          ultimoAhora: e,
          pegado: r.current.pegado,
          forzar: r.current.forzar,
        });
      ((D.current = e),
        (r.current.forzar = !1),
        i === `abajo` ? bC(t, r) : i === `ancla` && xC(t, r));
    }, [R, n]),
    (0, React.useLayoutEffect)(() => {
      let e = S.current;
      n || !u || !e || !w.current.pegado || bC(e, w);
    }, [u, n]),
    (0, React.useLayoutEffect)(() => {
      let e = x.current;
      e &&
        ((e.style.height = `auto`),
        (e.style.height = `${Math.min(e.scrollHeight, 124)}px`));
    }, [c]));
  function ie() {
    if (n) {
      if (Date.now() - O.current > 2e3) return;
      S.current?.scrollTo({
        top: S.current.scrollHeight,
      });
      return;
    }
    let e = S.current;
    e && (w.current.pegado ? bC(e, w) : xC(e, w));
  }
  function ae() {
    oe(r);
  }
  function oe(e) {
    if (T.current) return;
    T.current = !0;
    let t = C.current,
      n = document.activeElement;
    if (
      (n instanceof HTMLElement && t?.contains(n) && n.blur(),
      !t || qm() || typeof t.animate != `function`)
    ) {
      e();
      return;
    }
    t.setAttribute(`inert`, ``);
    let r = !1,
      i = {},
      a = () => {
        r || ((r = !0), clearTimeout(i.reloj), e());
      },
      o = t.animate([...rh(1).entra].reverse(), {
        duration: 360,
        easing: Gm,
        fill: `forwards`,
      });
    ((o.onfinish = a), (o.oncancel = a), (i.reloj = setTimeout(a, 760)));
  }
  async function se() {
    let t = c.trim();
    if ((!t && !g) || u) return;
    (d(!0), p(null));
    let r = new FormData();
    g && r.set(`foto`, g.archivo);
    try {
      let i = await Cm(e.id, t, r);
      if (!i.ok) {
        p(i.mensaje ?? `No se pudo enviar.`);
        return;
      }
      (E.current++, l(``), _(null), b.current && (b.current.value = ``));
      let a = i.mensajes;
      a && (n || (w.current.forzar = !0), s((e) => OC(e, a)));
    } catch {
      p(`No se pudo enviar. Fijate la conexión y probá de nuevo.`);
    } finally {
      d(!1);
    }
  }
  async function ce() {
    (
      await wm(e.id, !m).catch(() => ({
        ok: !1,
      }))
    ).ok && h((e) => !e);
  }
  function le() {
    k === `eliminando` ||
      k === `eliminada` ||
      (M(null), A((e) => (e === `confirmando` ? `cerrada` : `confirmando`)));
  }
  function ue() {
    k === `confirmando` &&
      (A(`cerrada`),
      M(null),
      N.current?.focus({
        preventScroll: !0,
      }));
  }
  async function de() {
    if (k !== `confirmando`) return;
    (A(`eliminando`), M(null));
    let t = R[R.length - 1]?.id ?? null,
      i;
    try {
      i = await Tm(e.id, t);
    } catch {
      (A(`confirmando`),
        M({
          ok: !1,
          texto: `No se pudo eliminar. Fijate la conexión y probá de nuevo.`,
        }));
      return;
    }
    if (!i.ok) {
      (A(`confirmando`),
        M({
          ok: !1,
          texto: i.mensaje,
        }));
      return;
    }
    let o = i.quedan > 0;
    (A(`eliminada`),
      M({
        ok: !0,
        texto: i.mensaje,
      }),
      E.current++,
      te((e) => e + 1),
      a(e.id, o),
      F.current && clearTimeout(F.current),
      (F.current = setTimeout(
        () => {
          if (((F.current = null), o)) {
            (A(`cerrada`), M(null));
            return;
          }
          n ? r() : oe(r);
        },
        o ? 4500 : 1100,
      )));
  }
  function fe() {
    (_(null), b.current && (b.current.value = ``));
  }
  let pe = R[R.length - 1],
    me = m
      ? pe
        ? `Último mensaje ${dC(pe.cuando)}`
        : o.respondio
          ? `Todavía no hay mensajes`
          : `Cargando…`
      : `Conversación cerrada`,
    he = !u && (c.trim() !== `` || g !== null),
    ge = R.length,
    _e = (0, JSXRuntime.jsx)(`button`, {
      type: `button`,
      className: `sop-cab-accion`,
      onClick: () => void ce(),
      children: m ? `Cerrar conversación` : `Reabrir`,
    }),
    ve = (0, JSXRuntime.jsxs)(`div`, {
      ref: C,
      className: classNames(
        `sop-chat`,
        n ? `en-panel` : `sop-cel`,
        `sop-chat-entra`,
      ),
      role: n ? void 0 : `dialog`,
      "aria-modal": n ? void 0 : !0,
      "aria-label": n ? void 0 : `Conversación con ${e.jugador}`,
      children: [
        (0, JSXRuntime.jsxs)(`header`, {
          className: `sop-chat-cab`,
          children: [
            n
              ? null
              : (0, JSXRuntime.jsx)(`button`, {
                  type: `button`,
                  className: `sop-atras`,
                  onClick: ae,
                  "aria-label": `Volver a la bandeja`,
                  children: (0, JSXRuntime.jsx)(Icon, {
                    nombre: `izquierda`,
                    tam: 22,
                    trazo: 2.2,
                  }),
                }),
            (0, JSXRuntime.jsx)(Bg, {
              nombre: e.jugador,
              tam: 42,
            }),
            (0, JSXRuntime.jsxs)(`span`, {
              className: `sop-chat-quien`,
              children: [
                (0, JSXRuntime.jsx)(`b`, {
                  className: gC(e.jugador),
                  title: e.jugador,
                  children: hC(e.jugador),
                }),
                (0, JSXRuntime.jsx)(`small`, {
                  children: me,
                }),
              ],
            }),
            i
              ? (0, JSXRuntime.jsxs)(`span`, {
                  className: `sop-cab-acciones`,
                  children: [
                    _e,
                    (0, JSXRuntime.jsxs)(`button`, {
                      ref: N,
                      type: `button`,
                      className: `sop-cab-accion sop-cab-eliminar`,
                      onClick: le,
                      disabled: k === `eliminando` || k === `eliminada`,
                      "aria-expanded": k !== `cerrada`,
                      "aria-controls": ne,
                      "aria-label": `Eliminar conversación`,
                      children: [
                        (0, JSXRuntime.jsx)(Icon, {
                          nombre: `tacho`,
                          tam: 14,
                          trazo: 2,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          children: `Eliminar`,
                        }),
                      ],
                    }),
                  ],
                })
              : _e,
          ],
        }),
        i && k !== `cerrada`
          ? (0, JSXRuntime.jsxs)(`div`, {
              id: ne,
              className: classNames(
                `sop-eliminar`,
                k === `eliminada` && `hecha`,
              ),
              role: `group`,
              "aria-label": `Eliminar conversación`,
              onKeyDown: (e) => {
                e.key === `Escape` && (e.stopPropagation(), ue());
              },
              children: [
                k === `eliminada`
                  ? null
                  : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        (0, JSXRuntime.jsxs)(`p`, {
                          className: `sop-eliminar-texto`,
                          children: [
                            (0, JSXRuntime.jsx)(`b`, {
                              children: `¿Eliminar esta conversación?`,
                            }),
                            ` Se oculta del panel y del jugador. Queda guardada por si hay un reclamo.`,
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(wg, {
                          clase: `sop-eliminar-botones`,
                          children: [
                            (0, JSXRuntime.jsx)(Button, {
                              tono: `rojo`,
                              chico: !0,
                              pendiente: k === `eliminando`,
                              onClick: () => void de(),
                              children:
                                k === `eliminando` ? `Eliminando…` : `Eliminar`,
                            }),
                            (0, JSXRuntime.jsx)(Button, {
                              ref: P,
                              chico: !0,
                              deshabilitado: k === `eliminando`,
                              onClick: ue,
                              children: `Cancelar`,
                            }),
                          ],
                        }),
                      ],
                    }),
                (0, JSXRuntime.jsx)(Notice, {
                  aviso: j,
                  clase: `sop-eliminar-aviso`,
                }),
              ],
            })
          : null,
        (0, JSXRuntime.jsxs)(`div`, {
          className: `sop-mensajes`,
          ref: S,
          children: [
            (0, JSXRuntime.jsxs)(`p`, {
              className: `sop-anonimo`,
              children: [
                (0, JSXRuntime.jsx)(Icon, {
                  nombre: `candado`,
                  tam: 13,
                  trazo: 2,
                }),
                `El jugador ve estas respuestas como "Soporte". Nunca le llega tu nombre.`,
              ],
            }),
            ge === 0
              ? (0, JSXRuntime.jsx)(`p`, {
                  className: `sop-sin`,
                  children: o.respondio ? `Sin mensajes.` : `Cargando…`,
                })
              : mC(R, t).map((e) =>
                  e.tipo === `dia`
                    ? (0, JSXRuntime.jsx)(
                        `div`,
                        {
                          className: `sop-dia`,
                          children: (0, JSXRuntime.jsx)(`span`, {
                            children: e.etiqueta,
                          }),
                        },
                        e.clave,
                      )
                    : (0, JSXRuntime.jsxs)(
                        `div`,
                        {
                          className: classNames(`sop-grupo`, e.lado),
                          children: [
                            e.items.map(({ m: t, idx: r }, i) => {
                              let a = i === e.items.length - 1,
                                s = n && o.cascada && r >= ge - 8,
                                c = s
                                  ? {
                                      "--o": Math.max(0, r - (ge - 8)),
                                    }
                                  : void 0;
                              return (0, JSXRuntime.jsxs)(
                                `div`,
                                {
                                  className: classNames(
                                    `sop-burbuja`,
                                    a && `cola`,
                                    !t.texto && t.adjunto && `solo-foto`,
                                    o.nuevos.has(t.id) && `sop-llega`,
                                    s && `sop-abre`,
                                  ),
                                  style: c,
                                  children: [
                                    t.adjunto &&
                                      (0, JSXRuntime.jsx)(`button`, {
                                        type: `button`,
                                        className: classNames(
                                          `sop-foto`,
                                          t.texto && `sop-con-texto`,
                                        ),
                                        onClick: () => y(t.id),
                                        "aria-label": `Ver la foto completa`,
                                        children: (0, JSXRuntime.jsx)(`img`, {
                                          src: globalThis.__demoImg(
                                            `adjunto`,
                                            t.id,
                                          ),
                                          alt: `Foto adjunta`,
                                          onLoad: ie,
                                        }),
                                      }),
                                    t.texto
                                      ? (0, JSXRuntime.jsx)(`span`, {
                                          className: `sop-texto`,
                                          children: t.texto,
                                        })
                                      : null,
                                  ],
                                },
                                t.id,
                              );
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `sop-grupo-pie`,
                              children: e.pie,
                            }),
                          ],
                        },
                        e.clave,
                      ),
                ),
            u
              ? (0, JSXRuntime.jsx)(`div`, {
                  className: `sop-grupo eq`,
                  role: `status`,
                  children: (0, JSXRuntime.jsx)(`span`, {
                    className: `sop-grupo-pie`,
                    children: (0, JSXRuntime.jsx)(`span`, {
                      className: `sop-enviando`,
                      children: `Enviando…`,
                    }),
                  }),
                })
              : null,
          ],
        }),
        (0, JSXRuntime.jsxs)(`div`, {
          className: `sop-composer`,
          children: [
            (0, JSXRuntime.jsx)(Notice, {
              aviso: f
                ? {
                    ok: !1,
                    texto: f,
                  }
                : null,
            }),
            g
              ? (0, JSXRuntime.jsxs)(`div`, {
                  className: `sop-foto-elegida`,
                  children: [
                    (0, JSXRuntime.jsx)(`img`, {
                      src: g.url,
                      alt: ``,
                    }),
                    (0, JSXRuntime.jsxs)(`span`, {
                      children: [`Foto: `, g.archivo.name],
                    }),
                    (0, JSXRuntime.jsx)(`button`, {
                      type: `button`,
                      className: `sop-sacar`,
                      onClick: fe,
                      "aria-label": `Sacar la foto`,
                      children: (0, JSXRuntime.jsx)(Icon, {
                        nombre: `cruz`,
                        tam: 14,
                        trazo: 2,
                      }),
                    }),
                  ],
                })
              : null,
            (0, JSXRuntime.jsxs)(`div`, {
              className: `sop-composer-fila`,
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  className: `sop-entrada`,
                  children: [
                    (0, JSXRuntime.jsx)(`button`, {
                      type: `button`,
                      className: classNames(`sop-clip`, g && `sop-con-foto`),
                      onClick: () => b.current?.click(),
                      "aria-label": `Adjuntar una foto`,
                      children: (0, JSXRuntime.jsx)(Icon, {
                        d: `M21 11.5 12.5 20a5 5 0 0 1-7-7l8-8a3.4 3.4 0 0 1 4.8 4.8l-8 8a1.8 1.8 0 0 1-2.5-2.5l7.4-7.4`,
                        tam: 17,
                        trazo: 1.9,
                      }),
                    }),
                    (0, JSXRuntime.jsx)(`textarea`, {
                      id: `sop-texto`,
                      ref: x,
                      value: c,
                      onChange: (e) => l(e.target.value),
                      onKeyDown: (e) => {
                        e.key === `Enter` &&
                          !e.shiftKey &&
                          (e.preventDefault(), se());
                      },
                      placeholder: `Escribí tu respuesta…`,
                      "aria-label": `Escribí tu respuesta`,
                      rows: 1,
                      maxLength: 2e3,
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`button`, {
                  type: `button`,
                  className: classNames(`sop-enviar`, he && `listo`),
                  onClick: () => void se(),
                  disabled: u || (!c.trim() && !g),
                  "aria-busy": u || void 0,
                  "aria-label": u ? `Enviando…` : `Responder`,
                  children: (0, JSXRuntime.jsx)(Icon, {
                    nombre: `sube`,
                    tam: 20,
                    trazo: 2.4,
                  }),
                }),
              ],
            }),
            (0, JSXRuntime.jsx)(`input`, {
              ref: b,
              type: `file`,
              accept: `image/*`,
              hidden: !0,
              onChange: (e) => {
                let t = e.target.files?.[0];
                if (!t) return;
                if (t.size > 8388608) {
                  (p(
                    `La foto pesa más de 8 MB. Mandá una captura o una más chica.`,
                  ),
                    (e.target.value = ``));
                  return;
                }
                let n = e.target,
                  r = new FileReader();
                ((r.onload = () => {
                  n.files?.[0] !== t ||
                    typeof r.result != `string` ||
                    _({
                      archivo: t,
                      url: r.result,
                    });
                }),
                  r.readAsDataURL(t),
                  p(null));
              },
            }),
          ],
        }),
        v
          ? (0, JSXRuntime.jsx)(Yg, {
              onCerrar: () => y(null),
              clase: `sop-visor`,
              etiqueta: `Foto adjunta`,
              children: (0, JSXRuntime.jsx)(`img`, {
                className: `sop-visor-img`,
                src: globalThis.__demoImg(`adjunto`, v),
                alt: `Foto adjunta`,
              }),
            })
          : null,
      ],
    });
  return n
    ? ve
    : (0, JSXRuntime.jsx)(Portal, {
        children: ve,
      });
}
function initializeSupportChat() {
  sC = [
    `Domingo`,
    `Lunes`,
    `Martes`,
    `Miércoles`,
    `Jueves`,
    `Viernes`,
    `Sábado`,
  ];
  cC = [
    [`abiertas`, `Abiertas`],
    [`todas`, `Todas`],
  ];
  lC = (e) =>
    e.toLocaleTimeString(`es-AR`, {
      hour: `2-digit`,
      minute: `2-digit`,
      hourCycle: `h23`,
    });
  uC = (e) =>
    `${String(e.getDate()).padStart(2, `0`)}/${String(e.getMonth() + 1).padStart(2, `0`)}`;
  dC = (e) => {
    let t = new Date(e),
      n = new Date();
    return t.toDateString() === n.toDateString() ? lC(t) : uC(t) + ` ` + lC(t);
  };
  pC = (e) => Math.floor(new Date(e).getTime() / 6e4);
  DC = {
    mensajes: [],
    nuevos: new Set(),
    cascada: !1,
    recibido: !1,
    respondio: !1,
  };
}
export { SupportInbox, initializeSupportChat };
