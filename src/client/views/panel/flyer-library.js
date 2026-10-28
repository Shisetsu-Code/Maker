/**
 * panel / flyer-library.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { Yd, Rp } from "./demo-api.js";
import {
  classNames,
  rg,
  og,
  Icon,
  Portal,
  useBodyScrollLock,
  useEscapeKey,
  Card,
  _g,
  Button,
  Ng,
  Notice,
  Lg,
} from "./ui-components.js";
import { usePanelContext } from "./navigation.js";
let PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS;
function JS({
  tono: e,
  d: t,
  ancho: n,
  clase: r,
  deshabilitado: i,
  pendiente: a,
  children: o,
  ...s
}) {
  return (0, JSXRuntime.jsxs)(`button`, {
    ...s,
    type: `button`,
    className: classNames(`btn`, `btn-${e}`, n && `ancho`, r),
    disabled: i || a,
    "aria-busy": a || void 0,
    children: [
      t
        ? (0, JSXRuntime.jsx)(Icon, {
            d: t,
            tam: 16,
            trazo: 2,
          })
        : null,
      (0, JSXRuntime.jsx)(`span`, {
        children: o,
      }),
    ],
  });
}
function YS() {
  let [e, t] = (0, React.useState)(null),
    n = (0, React.useRef)(null),
    r = (0, React.useRef)(0);
  return (
    (0, React.useEffect)(
      () => () => {
        n.current && clearTimeout(n.current);
      },
      [],
    ),
    {
      aviso: e,
      poner: (0, React.useCallback)((e, i, a) => {
        (n.current && clearTimeout(n.current),
          (n.current = null),
          (r.current += 1),
          t({
            ok: e,
            texto: i,
            n: r.current,
          }),
          a &&
            (n.current = setTimeout(() => {
              ((n.current = null), t(null));
            }, a)));
      }, []),
      limpiar: (0, React.useCallback)(() => {
        (n.current && clearTimeout(n.current), (n.current = null), t(null));
      }, []),
    }
  );
}
function XS() {
  let e = (0, React.useRef)(!1);
  return (
    (0, React.useEffect)(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function FlyerLibrary() {
  let { flotar: e } = usePanelContext(),
    [t, n] = (0, React.useState)(!0),
    [r, i] = (0, React.useState)(!1),
    [a, o] = (0, React.useState)([]),
    [s, c] = (0, React.useState)(null),
    l = XS(),
    u = (0, React.useCallback)(async () => {
      let e = await FS();
      (i(e.puedeAdministrar), o(e.carpetas.map(KS)), n(!1));
    }, []);
  (0, React.useEffect)(() => {
    let e = !0;
    return (
      FS().then((t) => {
        e && (i(t.puedeAdministrar), o(t.carpetas.map(KS)), n(!1));
      }),
      () => {
        e = !1;
      }
    );
  }, []);
  let d = (0, React.useRef)(void 0),
    f = s?.id ?? null;
  return (
    (0, React.useEffect)(() => {
      (d.current !== void 0 && d.current !== f && window.scrollTo(US),
        (d.current = f));
    }, [f]),
    t
      ? (0, JSXRuntime.jsx)(`p`, {
          className: `fly-cargando`,
          children: `Cargando la galería…`,
        })
      : s
        ? (0, JSXRuntime.jsx)(
            FlyerFolder,
            {
              carpeta: s,
              puedeAdministrar: r,
              volver: () => {
                (c(null), u());
              },
              avisarAfuera: (t, n) => {
                (t && !String(n).includes(`(demo)`) && (n += ` (demo)`),
                  l.current && e(t, n));
              },
            },
            s.id,
          )
        : (0, JSXRuntime.jsx)(FlyerFolders, {
            carpetas: a,
            puedeAdministrar: r,
            abrir: c,
            recargar: u,
          })
  );
}
function FlyerFolders({
  carpetas: e,
  puedeAdministrar: t,
  abrir: n,
  recargar: r,
}) {
  let [i, a] = (0, React.useState)(``),
    [o, s] = (0, React.useState)(!1),
    c = YS();
  async function l() {
    if (!i.trim() || o) return;
    (s(!0), c.limpiar());
    let e;
    try {
      e = await LS(i);
    } finally {
      s(!1);
    }
    if (!e.ok) {
      c.poner(!1, e.mensaje);
      return;
    }
    (a(``), c.poner(!0, e.mensaje ?? `Carpeta creada.`, 4e3), await r());
  }
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `fly`,
    children: [
      t &&
        (0, JSXRuntime.jsxs)(Card, {
          clase: `fly-nueva-tarjeta`,
          i: 1,
          children: [
            (0, JSXRuntime.jsx)(_g, {
              texto: `Nueva carpeta`,
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              className: `fly-nueva`,
              children: [
                (0, JSXRuntime.jsx)(Ng, {
                  id: `fly-nombre`,
                  valor: i,
                  onCambiar: a,
                  onEnter: () => void l(),
                  placeholder: `Nombre de la carpeta`,
                  etiqueta: `Nombre de la carpeta`,
                  max: 60,
                  clase: `fly-campo`,
                }),
                (0, JSXRuntime.jsx)(JS, {
                  tono: `naranja`,
                  d: WS.mas,
                  id: `fly-crear`,
                  clase: `fly-crear`,
                  pendiente: o,
                  deshabilitado: !i.trim(),
                  onClick: () => void l(),
                  children: o ? `Creando…` : `Crear carpeta`,
                }),
              ],
            }),
            (0, JSXRuntime.jsx)(Notice, {
              aviso: c.aviso,
              clave: c.aviso?.n,
            }),
          ],
        }),
      e.length === 0
        ? (0, JSXRuntime.jsx)(Card, {
            pad: `no`,
            clase: `fly-vacio`,
            i: 2,
            children: (0, JSXRuntime.jsx)(Lg, {
              children: t
                ? `Todavía no hay carpetas. Creá la primera acá arriba y subí los flyers adentro.`
                : `Todavía no te habilitaron ninguna carpeta. Pedísela al dueño.`,
            }),
          })
        : (0, JSXRuntime.jsx)(`div`, {
            className: `fly-grid-carpetas`,
            children: e.map((e, t) =>
              (0, JSXRuntime.jsxs)(
                `button`,
                {
                  type: `button`,
                  className: classNames(`tarjeta`, `fly-carpeta`, rg(t + 2)),
                  onClick: () => n(e),
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      className: `fila-ic fly-carpeta-ic`,
                      style: og(`var(--naranja-claro)`),
                      children: (0, JSXRuntime.jsx)(Icon, {
                        d: WS.carpeta,
                        tam: 20,
                        trazo: 1.9,
                      }),
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      className: `fly-carpeta-nombre`,
                      children: e.nombre,
                    }),
                    (0, JSXRuntime.jsxs)(`span`, {
                      className: `rotulo`,
                      children: [
                        e.cuantos,
                        ` `,
                        e.cuantos === 1 ? `flyer` : `flyers`,
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
    ],
  });
}
function FlyerFolder({
  carpeta: e,
  puedeAdministrar: t,
  volver: n,
  avisarAfuera: r,
}) {
  let { confirmar: i, dialogoAbierto: a } = usePanelContext(),
    [o, s] = (0, React.useState)([]),
    [c, l] = (0, React.useState)(!0),
    [u, d] = (0, React.useState)(!1),
    [f, p] = (0, React.useState)(null),
    [m, h] = (0, React.useState)([]),
    [g, _] = (0, React.useState)(null),
    [v, y] = (0, React.useState)(!1),
    [b, x] = (0, React.useState)(!1),
    [S, C] = (0, React.useState)(() => new Set()),
    [w, T] = (0, React.useState)(!1),
    [E, D] = (0, React.useState)(null),
    O = (0, React.useRef)(null),
    ee = (0, React.useRef)(!1),
    te = (0, React.useRef)(0),
    k = XS(),
    A = YS(),
    j = YS(),
    M = (0, React.useCallback)(async () => {
      let t = await IS(e.id);
      (s(t.flyers.map(qS)), l(!1));
    }, [e.id]);
  (0, React.useEffect)(() => {
    let t = !0;
    return (
      IS(e.id).then((e) => {
        t && (s(e.flyers.map(qS)), l(!1));
      }),
      () => {
        t = !1;
      }
    );
  }, [e.id]);
  function N(e, t) {
    (e && !String(t).includes(`(demo)`) && (t += ` (demo)`),
      k.current ? A.poner(e, t, 4e3) : r(e, t));
  }
  async function P(t) {
    let n = Array.from(t);
    if (n.length === 0 || u || ee.current) return;
    ((ee.current = !0),
      d(!0),
      h([]),
      A.limpiar(),
      p({
        hechos: 0,
        total: n.length,
      }));
    let r = [],
      i = [],
      a = 0;
    for (let e of n)
      (i.length > 0 && a + e.size > 15728640 && (r.push(i), (i = []), (a = 0)),
        i.push(e),
        (a += e.size));
    i.length > 0 && r.push(i);
    let o = 0,
      s = [],
      c = 0;
    try {
      for (let t of r) {
        let r = new FormData();
        r.set(`carpetaId`, e.id);
        for (let e of t) r.append(`archivos`, e);
        try {
          let e = await zS(r);
          ((o += e.subidos ?? 0),
            e.fallados?.length && s.push(...e.fallados),
            !e.ok &&
              !e.subidos &&
              s.push(e.mensaje ?? `no se pudo subir esta tanda`));
        } catch {
          s.push(t.map((e) => e.name).join(`, `) + ` (no llegó al servidor)`);
        }
        ((c += t.length),
          p({
            hechos: c,
            total: n.length,
          }),
          await M());
      }
    } finally {
      ((ee.current = !1), d(!1), p(null));
    }
    (h(s),
      N(
        o > 0,
        o === 0
          ? `No entró ninguno.`
          : o + (o === 1 ? ` flyer subido.` : ` flyers subidos.`),
      ));
  }
  async function F(e) {
    if (
      !S.has(e.id) &&
      (await i({
        texto: `¿Borrar "` + e.nombre + `"? No se puede deshacer.`,
        peligro: !0,
      }))
    ) {
      (C((t) => new Set(t).add(e.id)), D((t) => (t?.id === e.id ? null : t)));
      try {
        let t = await BS(e.id);
        t.ok
          ? (r(!0, `Flyer borrado.`), await M())
          : t.mensaje &&
            ((te.current += 1),
            D({
              id: e.id,
              ok: !1,
              texto: t.mensaje,
              n: te.current,
            }));
      } finally {
        C((t) => {
          let n = new Set(t);
          return (n.delete(e.id), n);
        });
      }
    }
  }
  async function ne() {
    if (
      !w &&
      (await i({
        texto:
          `¿Borrar la carpeta "` +
          e.nombre +
          `" con sus ` +
          o.length +
          ` flyers? No se puede deshacer.`,
        peligro: !0,
      }))
    ) {
      (T(!0), j.limpiar());
      try {
        let t = await RS(e.id);
        t.ok
          ? (r(!0, t.mensaje ?? `Carpeta borrada.`), n())
          : t.mensaje && j.poner(!1, t.mensaje);
      } finally {
        T(!1);
      }
    }
  }
  function I(e) {
    (e.preventDefault(), x(!1), P(e.dataTransfer.files));
  }
  let L = u
    ? f
      ? `Subiendo ` + f.hechos + ` de ` + f.total + `…`
      : `Subiendo…`
    : `Subir flyers`;
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `fly`,
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `fly-cab entra`,
        children: [
          (0, JSXRuntime.jsx)(JS, {
            tono: `plano`,
            d: WS.volver,
            clase: `fly-volver`,
            onClick: n,
            children: `Carpetas`,
          }),
          (0, JSXRuntime.jsx)(`h2`, {
            className: `fly-titulo`,
            children: e.nombre,
          }),
          t &&
            (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                (0, JSXRuntime.jsx)(JS, {
                  tono: `plano`,
                  d: WS.gente,
                  onClick: () => y(!0),
                  deshabilitado: a,
                  children: `Accesos`,
                }),
                (0, JSXRuntime.jsx)(JS, {
                  tono: `corte`,
                  d: WS.borrar,
                  pendiente: w,
                  deshabilitado: a,
                  onClick: () => void ne(),
                  children: `Borrar carpeta`,
                }),
              ],
            }),
        ],
      }),
      (0, JSXRuntime.jsx)(Notice, {
        aviso: j.aviso,
        clave: j.aviso?.n,
        clase: `fly-cab-aviso`,
      }),
      t &&
        (0, JSXRuntime.jsxs)(Card, {
          clase: classNames(`fly-subida`, b && `arrastrando`),
          i: 1,
          onDragOver: (e) => {
            (e.preventDefault(), x(!0));
          },
          onDragLeave: (e) => {
            e.currentTarget.contains(e.relatedTarget) || x(!1);
          },
          onDrop: I,
          children: [
            (0, JSXRuntime.jsx)(`input`, {
              ref: O,
              type: `file`,
              accept: `image/*`,
              multiple: !0,
              hidden: !0,
              onChange: (e) => {
                (e.target.files && P(e.target.files), (e.target.value = ``));
              },
            }),
            (0, JSXRuntime.jsx)(`p`, {
              className: `fly-subida-txt`,
              children: `Arrastrá los flyers acá, o elegilos. Podés subir muchos de una.`,
            }),
            (0, JSXRuntime.jsx)(JS, {
              tono: `naranja`,
              d: WS.subir,
              clase: u ? `fly-subiendo` : void 0,
              pendiente: u,
              onClick: () => O.current?.click(),
              children: L,
            }),
            (0, JSXRuntime.jsx)(Notice, {
              aviso: A.aviso,
              clave: A.aviso?.n,
            }),
            m.length > 0 &&
              (0, JSXRuntime.jsx)(`ul`, {
                className: `fly-fallados`,
                children: m.map((e, t) =>
                  (0, JSXRuntime.jsxs)(
                    `li`,
                    {
                      children: [`No entró: `, e],
                    },
                    t + `·` + e,
                  ),
                ),
              }),
          ],
        }),
      c
        ? (0, JSXRuntime.jsx)(`p`, {
            className: `fly-cargando chico`,
            children: `Cargando…`,
          })
        : o.length === 0
          ? (0, JSXRuntime.jsx)(Card, {
              pad: `no`,
              clase: `fly-vacio`,
              i: 2,
              children: (0, JSXRuntime.jsx)(Lg, {
                children: `Esta carpeta está vacía.`,
              }),
            })
          : (0, JSXRuntime.jsx)(`div`, {
              className: `fly-grid-flyers`,
              children: o.map((e, n) => {
                let r = E?.id === e.id ? E : null;
                return (0, JSXRuntime.jsxs)(
                  `figure`,
                  {
                    className: classNames(
                      `tarjeta`,
                      `pad-no`,
                      `fly-flyer`,
                      rg(Math.min(12, n + 2)),
                    ),
                    children: [
                      (0, JSXRuntime.jsx)(`button`, {
                        type: `button`,
                        className: `fly-mini`,
                        onClick: () => _(e),
                        children: (0, JSXRuntime.jsx)(`img`, {
                          src: globalThis.__demoImg(`flyer`, e.id),
                          alt: e.nombre,
                          loading: `lazy`,
                        }),
                      }),
                      (0, JSXRuntime.jsxs)(`figcaption`, {
                        className: `fly-pie`,
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            className: `fly-nombre`,
                            children: e.nombre,
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            className: `rotulo fly-peso`,
                            children: GS(e.pesoBytes),
                          }),
                          (0, JSXRuntime.jsxs)(`div`, {
                            className: `fly-acciones`,
                            children: [
                              (0, JSXRuntime.jsxs)(`a`, {
                                className: `btn btn-plano fly-bajar`,
                                href: globalThis.__demoImg(`flyer`, e.id),
                                download: !0,
                                children: [
                                  (0, JSXRuntime.jsx)(Icon, {
                                    d: WS.bajar,
                                    tam: 16,
                                    trazo: 2,
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    children: `Bajar`,
                                  }),
                                ],
                              }),
                              t &&
                                (0, JSXRuntime.jsx)(`button`, {
                                  type: `button`,
                                  className: `btn btn-corte fly-tacho`,
                                  onClick: () => void F(e),
                                  "aria-label": `Borrar ` + e.nombre,
                                  disabled: S.has(e.id) || a,
                                  "aria-busy": S.has(e.id) || void 0,
                                  children: (0, JSXRuntime.jsx)(Icon, {
                                    d: WS.borrar,
                                    tam: 16,
                                    trazo: 2,
                                  }),
                                }),
                            ],
                          }),
                          (0, JSXRuntime.jsx)(Notice, {
                            aviso: r,
                            clave: r?.n,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                );
              }),
            }),
      g &&
        (0, JSXRuntime.jsx)(eC, {
          flyer: g,
          cerrar: () => _(null),
        }),
      v &&
        (0, JSXRuntime.jsx)(tC, {
          carpeta: e,
          cerrar: () => y(!1),
        }),
    ],
  });
}
function eC({ flyer: e, cerrar: t }) {
  return (
    useEscapeKey(t),
    useBodyScrollLock(!0),
    (0, JSXRuntime.jsx)(Portal, {
      children: (0, JSXRuntime.jsxs)(`div`, {
        className: `fly-capa fly-visor abre`,
        onClick: t,
        role: `presentation`,
        children: [
          (0, JSXRuntime.jsx)(`img`, {
            className: `fly-visor-img`,
            src: globalThis.__demoImg(`flyer`, e.id),
            alt: e.nombre,
            onClick: (e) => e.stopPropagation(),
          }),
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            className: `btn btn-plano fly-visor-x`,
            onClick: t,
            "aria-label": `Cerrar`,
            children: (0, JSXRuntime.jsx)(Icon, {
              d: WS.cerrar,
              tam: 16,
              trazo: 2,
            }),
          }),
        ],
      }),
    })
  );
}
function tC({ carpeta: e, cerrar: t }) {
  let [n, r] = (0, React.useState)([]),
    [i, a] = (0, React.useState)(!0),
    [o, s] = (0, React.useState)(() => new Set()),
    [c, l] = (0, React.useState)(null),
    [u, d] = (0, React.useState)(null),
    f = (0, React.useRef)(0),
    p = (0, React.useId)();
  (useEscapeKey(t),
    useBodyScrollLock(!0),
    (0, React.useEffect)(() => {
      let t = !0;
      return (
        VS(e.id).then((e) => {
          t && (r(e.gente), a(!1));
        }),
        () => {
          t = !1;
        }
      );
    }, [e.id]),
    (0, React.useEffect)(() => {
      if (!c) return;
      let e = setTimeout(() => l(null), 450);
      return () => clearTimeout(e);
    }, [c]));
  async function m(t) {
    if (o.has(t.id)) return;
    let n = !t.tiene;
    (s((e) => new Set(e).add(t.id)), d((e) => (e?.id === t.id ? null : e)));
    try {
      let i = await HS(e.id, t.id, !t.tiene);
      i.ok
        ? (r((e) =>
            e.map((e) =>
              e.id === t.id
                ? {
                    ...e,
                    tiene: n,
                  }
                : e,
            ),
          ),
          (f.current += 1),
          l({
            id: t.id,
            n: f.current,
          }))
        : i.mensaje &&
          ((f.current += 1),
          d({
            id: t.id,
            ok: !1,
            texto: i.mensaje,
            n: f.current,
          }));
    } finally {
      s((e) => {
        let n = new Set(e);
        return (n.delete(t.id), n);
      });
    }
  }
  return (0, JSXRuntime.jsx)(Portal, {
    children: (0, JSXRuntime.jsx)(`div`, {
      className: `fly-capa fly-accesos abre`,
      onClick: t,
      role: `presentation`,
      children: (0, JSXRuntime.jsxs)(`div`, {
        className: `tarjeta fly-modal`,
        role: `dialog`,
        "aria-modal": `true`,
        "aria-labelledby": p,
        onClick: (e) => e.stopPropagation(),
        children: [
          (0, JSXRuntime.jsxs)(`header`, {
            className: `fly-modal-cab`,
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                className: `rotulo`,
                children: `Quién ve esta carpeta`,
              }),
              (0, JSXRuntime.jsx)(`h3`, {
                id: p,
                children: e.nombre,
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(`div`, {
            className: `fly-modal-cuerpo`,
            children: i
              ? (0, JSXRuntime.jsx)(`p`, {
                  className: `fly-modal-msg`,
                  children: `Cargando…`,
                })
              : n.length === 0
                ? (0, JSXRuntime.jsx)(`p`, {
                    className: `fly-modal-msg vacia`,
                    children: `No hay nadie a quien darle acceso todavía.`,
                  })
                : n.map((e) => {
                    let t = u?.id === e.id ? u : null;
                    return (0, JSXRuntime.jsxs)(
                      React.Fragment,
                      {
                        children: [
                          (0, JSXRuntime.jsxs)(`button`, {
                            type: `button`,
                            role: `switch`,
                            "aria-checked": e.tiene,
                            className: `fly-persona`,
                            disabled: o.has(e.id),
                            onClick: () => void m(e),
                            children: [
                              (0, JSXRuntime.jsxs)(`span`, {
                                className: `fly-persona-txt`,
                                children: [
                                  (0, JSXRuntime.jsx)(`b`, {
                                    children: e.username,
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    className: `rotulo`,
                                    children: e.rango + ` · ` + e.casa,
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                className: classNames(
                                  `switch`,
                                  e.tiene && `on`,
                                  c?.id === e.id && `fly-mueve`,
                                ),
                                "aria-hidden": `true`,
                                children: (0, JSXRuntime.jsx)(`span`, {
                                  className: `switch-pista`,
                                  children: (0, JSXRuntime.jsx)(`span`, {
                                    className: `switch-perilla`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsx)(Notice, {
                            aviso: t,
                            clave: t?.n,
                            clase: `fly-persona-aviso`,
                          }),
                        ],
                      },
                      e.id,
                    );
                  }),
          }),
          (0, JSXRuntime.jsx)(`footer`, {
            className: `fly-modal-pie`,
            children: (0, JSXRuntime.jsx)(Button, {
              tono: `plano`,
              ancho: !0,
              onClick: t,
              children: `Listo`,
            }),
          }),
        ],
      }),
    }),
  });
}
function initializeFlyerLibrary() {
  PS =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/flyers-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  FS = PS(`verGaleriaAction`);
  IS = PS(`verCarpetaAction`);
  LS = PS(`crearCarpetaAction`);
  RS = PS(`borrarCarpetaAction`);
  zS = PS(`subirFlyersAction`);
  BS = PS(`borrarFlyerAction`);
  VS = PS(`accesosDeCarpetaAction`);
  HS = PS(`cambiarAccesoAction`);
  US = {
    top: 0,
    behavior: `instant`,
  };
  WS = {
    carpeta: `M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
    subir: `M12 16V4M7 9l5-5 5 5M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2`,
    bajar: `M12 4v12M7 11l5 5 5-5M4 19h16`,
    borrar: `M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13h10l1-13`,
    gente: `M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M11 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8`,
    volver: `M15 18l-6-6 6-6`,
    cerrar: `M6 6l12 12M18 6L6 18`,
    mas: `M12 5v14M5 12h14`,
  };
  GS = (e) =>
    e < 1024 * 1024
      ? Math.round(e / 1024) + ` KB`
      : (e / 1024 / 1024).toFixed(1) + ` MB`;
  KS = (e) => ({
    id: e.id,
    nombre: e.nombre,
    cuantos: e.cuantos,
  });
  qS = (e) => ({
    id: e.id,
    nombre: e.nombre,
    pesoBytes: e.pesoBytes,
    ancho: e.ancho,
    alto: e.alto,
  });
}
export { FlyerLibrary, initializeFlyerLibrary };
