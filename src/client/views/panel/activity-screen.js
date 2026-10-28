/**
 * panel / activity-screen.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { pc, hc, gc, Sc, Ec } from "./activity-ledger.js";
import { Yd, Rp } from "./demo-api.js";
import { Um } from "./motion.js";
import {
  classNames,
  og,
  Icon,
  useEscapeKey,
  Button,
  Dg,
  Ng,
  Pg,
  Fg,
  Ig,
  Notice,
  Lg,
  Vg,
  Hg,
  Yg,
} from "./ui-components.js";
import { usePanelContext } from "./navigation.js";
let Zv, Qv, $v, ey, ty;
function ny() {
  let e = ey();
  return {
    rango: `7`,
    desde: ty(e, 13),
    hasta: e,
    grupo: `todo`,
    jugador: null,
    quien: null,
    panel: null,
    operado: !1,
    tipo: null,
    estado: `todas`,
    montoMin: ``,
  };
}
function ry(e, t) {
  return {
    rango: e.rango,
    desde: e.rango === `elegir` ? e.desde : null,
    hasta: e.rango === `elegir` ? e.hasta : null,
    grupo: e.grupo,
    jugador: e.jugador,
    quien: e.quien,
    panel: e.panel,
    operado: e.panel ? e.operado : !1,
    tipo: e.tipo,
    estado: e.grupo === `todo` || e.grupo === `caja` ? e.estado : `todas`,
    montoMin: e.montoMin.trim() || null,
    cursor: t,
  };
}
function iy(e) {
  return e.rango === `elegir`
    ? !hc(e.desde) || !hc(e.hasta)
      ? `Elegí las dos fechas.`
      : e.hasta < e.desde
        ? `La fecha «hasta» es anterior a «desde».`
        : gc(e.desde, e.hasta) > 366
          ? `El rango puede ser de hasta 366 días.`
          : null
    : null;
}
let ay;
function oy(e) {
  if (typeof window > `u` || typeof window.matchMedia != `function`)
    return () => {};
  let t = window.matchMedia(Um);
  return (
    t.addEventListener(`change`, e),
    () => t.removeEventListener(`change`, e)
  );
}
function sy() {
  return (0, React.useSyncExternalStore)(
    oy,
    () =>
      typeof window.matchMedia == `function` &&
      window.matchMedia(`(min-width: 900px)`).matches,
    () => !1,
  );
}
let cy, ly, uy, dy, fy, py, my;
function hy() {
  let e = {
    ...py,
  };
  if (typeof window > `u`) return e;
  try {
    let t = JSON.parse(window.localStorage.getItem(my) ?? `null`);
    if (t && typeof t == `object`)
      for (let [n] of fy) {
        let r = t[n];
        typeof r == `number` &&
          Number.isFinite(r) &&
          (e[n] = Math.max(70, Math.min(640, Math.round(r))));
      }
  } catch {}
  return e;
}
function gy(e) {
  try {
    window.localStorage.setItem(my, JSON.stringify(e));
  } catch {}
}
function ActivityScreen({ p: e }) {
  let { irA: t, caja: n } = usePanelContext(),
    r = sy(),
    [i, a] = (0, React.useState)(null),
    [o, s] = (0, React.useState)(ny),
    [c, l] = (0, React.useState)({
      filas: [],
      siguiente: null,
      cuentas: null,
      totales: null,
      juegoPideJugador: !1,
      muestra: !1,
    }),
    [u, d] = (0, React.useState)(`primera`),
    [f, p] = (0, React.useState)(null),
    [m, h] = (0, React.useState)(null),
    [g, _] = (0, React.useState)(null),
    [v, y] = (0, React.useState)(hy),
    b = (0, React.useRef)(0),
    x = (0, React.useRef)(null),
    S = (0, React.useCallback)(async (e, t) => {
      let n = ++b.current;
      d(t ? `mas` : `primera`);
      let r = await $v(ry(e, t)).catch(() => null);
      if (n === b.current) {
        if ((d(null), !r || !r.ok)) {
          let e = r && !r.ok ? r.campo : `general`;
          (p({
            campo: e,
            mensaje: r && !r.ok ? r.mensaje : ay,
          }),
            !t &&
              e === `general` &&
              l((e) => ({
                ...e,
                filas: [],
                siguiente: null,
                totales: null,
                juegoPideJugador: !1,
              })));
          return;
        }
        (p(null),
          l((e) => {
            if (!t)
              return {
                filas: r.filas,
                siguiente: r.siguiente,
                cuentas: r.cuentas ?? e.cuentas,
                totales: r.totales,
                juegoPideJugador: r.juegoPideJugador,
                muestra: r.muestra,
              };
            let n = new Set(e.filas.map((e) => e.k));
            return {
              ...e,
              filas: [...e.filas, ...r.filas.filter((e) => !n.has(e.k))],
              siguiente: r.siguiente,
            };
          }));
      }
    }, []),
    C = (0, React.useCallback)((e, t = 0) => {
      (x.current && clearTimeout(x.current),
        (x.current = null),
        e && (t > 0 ? (x.current = setTimeout(e, t)) : e()));
    }, []);
  (0, React.useEffect)(() => {
    let e = !0;
    return (
      (async () => {
        let t = await Qv().catch(() => null);
        e &&
          (a(
            t ?? {
              ok: !1,
              mensaje: ay,
            },
          ),
          t?.ok ? await S(ny(), null) : d(null));
      })(),
      () => {
        ((e = !1), x.current && clearTimeout(x.current));
      }
    );
  }, [S]);
  function w(e, t) {
    let n = {
      ...o,
      ...e,
    };
    (n.grupo !== `todo` && n.grupo !== `caja` && (n.estado = `todas`),
      s(n),
      _(null));
    let r = iy(n);
    if (r) {
      (C(null),
        b.current++,
        d(null),
        p({
          campo: `rango`,
          mensaje: r,
        }));
      return;
    }
    C(() => void S(n, null), t?.esperar ? 450 : 0);
  }
  function T() {
    (w({
      jugador: null,
      quien: null,
      panel: null,
      operado: !1,
      tipo: null,
      estado: `todas`,
      montoMin: ``,
    }),
      h(null));
  }
  if ((useEscapeKey(() => h(null), m !== null && r), !i))
    return (0, JSXRuntime.jsx)(vy, {});
  if (!i.ok)
    return (0, JSXRuntime.jsx)(`div`, {
      className: `lg`,
      children: (0, JSXRuntime.jsx)(Notice, {
        aviso: {
          ok: !1,
          texto: i.mensaje,
        },
      }),
    });
  let E = i,
    D = E.rol === `cajero`,
    O = [
      {
        id: ``,
        label: `Todos los jugadores`,
      },
      ...E.jugadores.map((e) => ({
        id: e.id,
        label: e.n,
        sub: e.panel ?? void 0,
      })),
    ],
    ee = D
      ? [
          {
            id: ``,
            label: `Todos`,
          },
          ...E.equipo.map((e) => ({
            id: e.id,
            label: `Yo`,
            sub: e.n,
          })),
        ]
      : [
          {
            id: ``,
            label: `Todo el equipo`,
          },
          ...[`root`, `admin`, `operator`].flatMap((e) =>
            E.equipo
              .filter((t) => t.rol === e)
              .map((t) => ({
                id: t.id,
                label: t.n,
                sub: t.baja ? `baja` : (t.panel ?? void 0),
                grupo:
                  e === `root`
                    ? `Dueños`
                    : e === `admin`
                      ? `Admins`
                      : `Cajeros`,
              })),
          ),
          {
            id: `jugador`,
            label: `El jugador`,
            sub: `sus propias acciones`,
            grupo: `Otros`,
          },
          {
            id: `auto`,
            label: `Automático`,
            sub: `topes de premios`,
            grupo: `Otros`,
          },
        ],
    te = [
      {
        id: ``,
        label: `Todos los paneles`,
      },
      ...E.paneles.map((e) => ({
        id: e.id,
        label: e.n,
      })),
    ],
    k = E.tipos.filter((e) =>
      o.grupo === `todo`
        ? e.grupo !== `juego` || o.jugador
        : e.grupo === o.grupo,
    ),
    A = o.jugador
      ? (E.jugadores.find((e) => e.id === o.jugador)?.n ?? `jugador`)
      : null,
    j = o.quien ? (ee.find((e) => e.id === o.quien)?.label ?? `—`) : null,
    M = o.panel ? (E.paneles.find((e) => e.id === o.panel)?.n ?? `—`) : null,
    N =
      o.rango === `elegir`
        ? `${o.desde.slice(8)}/${o.desde.slice(5, 7)} → ${o.hasta.slice(8)}/${o.hasta.slice(5, 7)}`
        : (pc.find((e) => e[0] === o.rango)?.[1] ?? ``),
    P =
      o.rango === `elegir`
        ? `Fechas`
        : o.rango === `hoy`
          ? `Hoy`
          : `${o.rango} días`,
    F = [];
  (A &&
    F.push({
      k: `jugador`,
      t: `Jugador`,
      v: A,
    }),
    j &&
      F.push({
        k: `quien`,
        t: `Equipo`,
        v: j,
      }),
    M &&
      F.push({
        k: `panel`,
        t: o.operado ? `Operó` : `Panel`,
        v: M,
      }),
    o.tipo &&
      F.push({
        k: `tipo`,
        t: `Acción`,
        v: E.tipos.find((e) => e.k === o.tipo)?.n ?? o.tipo,
      }),
    o.estado !== `todas` &&
      F.push({
        k: `estado`,
        t: `Anuladas`,
        v: o.estado === `sin` ? `ocultas` : `sólo esas`,
      }),
    o.montoMin.trim() &&
      F.push({
        k: `monto`,
        t: `Desde`,
        v: o.montoMin,
      }));
  let ne = (e) =>
      w(
        e === `jugador`
          ? {
              jugador: null,
            }
          : e === `quien`
            ? {
                quien: null,
              }
            : e === `panel`
              ? {
                  panel: null,
                  operado: !1,
                }
              : e === `tipo`
                ? {
                    tipo: null,
                  }
                : e === `estado`
                  ? {
                      estado: `todas`,
                    }
                  : {
                      montoMin: ``,
                    },
      ),
    I = (e) =>
      f && f.campo === e
        ? (0, JSXRuntime.jsx)(Notice, {
            aviso: {
              ok: !1,
              texto: f.mensaje,
            },
            clase: `lg-aviso`,
          })
        : null,
    L = f !== null && f.campo !== `general`,
    R = g ? (c.filas.find((e) => e.k === g) ?? null) : null,
    re = (r) => {
      e.players.some((e) => e.username === r) &&
        (_(null),
        t(`paneles`, {
          solapa: `jugadores`,
        }),
        n.abrir(r));
    },
    ie = (e) => {
      let t = E.jugadores.find((t) => t.n === e);
      t &&
        w({
          jugador: t.id,
          grupo: `todo`,
          tipo: null,
        });
    },
    ae = (0, JSXRuntime.jsxs)(`div`, {
      className: `lg-rango`,
      children: [
        (0, JSXRuntime.jsx)(`div`, {
          className: `lg-ops`,
          role: `listbox`,
          "aria-label": `Rango de fechas`,
          children: pc.map(([e, t]) =>
            (0, JSXRuntime.jsxs)(
              `button`,
              {
                type: `button`,
                role: `option`,
                "aria-selected": o.rango === e,
                className: classNames(`eq-sel-op`, o.rango === e && `on`),
                onClick: () => {
                  (w({
                    rango: e,
                  }),
                    e !== `elegir` && h(null));
                },
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    children: t,
                  }),
                  o.rango === e
                    ? (0, JSXRuntime.jsx)(Icon, {
                        nombre: `tilde`,
                        tam: 16,
                        trazo: 2.4,
                      })
                    : null,
                ],
              },
              e,
            ),
          ),
        }),
        o.rango === `elegir`
          ? (0, JSXRuntime.jsxs)(`div`, {
              className: `lg-fechas`,
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  className: `lg-fecha`,
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      "aria-hidden": `true`,
                      children: `Desde`,
                    }),
                    (0, JSXRuntime.jsx)(Ng, {
                      id: `lg-desde`,
                      tipo: `date`,
                      valor: o.desde,
                      onCambiar: (e) =>
                        w({
                          desde: e,
                        }),
                      etiqueta: `Desde`,
                    }),
                  ],
                }),
                (0, JSXRuntime.jsxs)(`div`, {
                  className: `lg-fecha`,
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      "aria-hidden": `true`,
                      children: `Hasta`,
                    }),
                    (0, JSXRuntime.jsx)(Ng, {
                      id: `lg-hasta`,
                      tipo: `date`,
                      valor: o.hasta,
                      onCambiar: (e) =>
                        w({
                          hasta: e,
                        }),
                      etiqueta: `Hasta`,
                    }),
                  ],
                }),
              ],
            })
          : null,
        I(`rango`),
      ],
    }),
    oe = (0, JSXRuntime.jsx)(Fg, {
      clave: `lg-jugador`,
      opciones: O,
      valor: o.jugador ?? ``,
      onElegir: (e) => {
        (w({
          jugador: e || null,
        }),
          h(null));
      },
      buscarQue: `Buscar jugador`,
      vacio: `No hay ningún jugador con ese nombre a tu alcance.`,
      etiqueta: `Jugadores`,
      sinContar: ``,
      onEscape: () => h(null),
    }),
    se = (0, JSXRuntime.jsx)(Fg, {
      clave: `lg-quien`,
      opciones: ee,
      valor: o.quien ?? ``,
      onElegir: (e) => {
        (w({
          quien: e || null,
        }),
          h(null));
      },
      buscarQue: `Buscar a alguien del equipo`,
      vacio: `Nadie se llama así.`,
      etiqueta: `Equipo`,
      sinContar: ``,
      enfocar: !D,
      onEscape: () => h(null),
    }),
    ce = (0, JSXRuntime.jsxs)(`div`, {
      className: `lg-panel-menu`,
      children: [
        (0, JSXRuntime.jsx)(Fg, {
          clave: `lg-panel`,
          opciones: te,
          valor: o.panel ?? ``,
          onElegir: (e) =>
            w({
              panel: e || null,
              operado: e ? o.operado : !1,
            }),
          buscarQue: `Buscar panel`,
          vacio: `Ningún panel se llama así.`,
          etiqueta: `Paneles`,
          sinContar: ``,
          onEscape: () => h(null),
        }),
        (0, JSXRuntime.jsx)(Pg, {
          id: `lg-operado`,
          etiqueta: `Contar por`,
          valor: o.operado ? `operado` : `jugador`,
          opciones: [
            [`jugador`, `Contar por el panel del jugador`],
            [`operado`, `Contar por el panel de quien operó`],
          ],
          onCambiar: (e) =>
            w({
              operado: e === `operado`,
            }),
        }),
        I(`panel`),
      ],
    }),
    le = (0, JSXRuntime.jsxs)(`div`, {
      className: `lg-mas`,
      children: [
        (0, JSXRuntime.jsxs)(`div`, {
          className: `lg-campo`,
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `lg-etq`,
              children: `Acción exacta`,
            }),
            (0, JSXRuntime.jsx)(Pg, {
              id: `lg-tipo`,
              etiqueta: `Acción exacta`,
              valor: o.tipo ?? ``,
              opciones: [[``, `Todas`], ...k.map((e) => [e.k, e.n])],
              onCambiar: (e) =>
                w({
                  tipo: e || null,
                }),
            }),
            I(`tipo`),
          ],
        }),
        o.grupo === `todo` || o.grupo === `caja`
          ? (0, JSXRuntime.jsxs)(`div`, {
              className: `lg-campo`,
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  className: `lg-etq`,
                  children: `Anuladas`,
                }),
                (0, JSXRuntime.jsx)(Pg, {
                  id: `lg-estado`,
                  etiqueta: `Anuladas`,
                  valor: o.estado,
                  opciones: [
                    [`todas`, `Mostrar todas`],
                    [`sin`, `Ocultar anuladas`],
                    [`solo`, `Sólo anuladas`],
                  ],
                  onCambiar: (e) =>
                    w({
                      estado: e,
                    }),
                }),
              ],
            })
          : null,
        (0, JSXRuntime.jsxs)(`div`, {
          className: `lg-campo`,
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `lg-etq`,
              children: `Monto desde`,
            }),
            (0, JSXRuntime.jsx)(Ng, {
              id: `lg-monto`,
              modo: `numeric`,
              placeholder: `Ej: 500.000`,
              valor: o.montoMin,
              onCambiar: (e) =>
                w(
                  {
                    montoMin: e.replace(/[^\d.,]/g, ``).slice(0, 16),
                  },
                  {
                    esperar: !0,
                  },
                ),
              etiqueta: `Monto desde`,
            }),
          ],
        }),
      ],
    }),
    ue = r
      ? (0, JSXRuntime.jsxs)(`div`, {
          className: `lg-barra`,
          children: [
            (0, JSXRuntime.jsx)(yy, {
              k: `rango`,
              rot: `Rango`,
              valor: N,
              on: o.rango !== `7`,
              menu: m,
              setMenu: h,
              aviso: I(`rango`),
              avisoEnMenu: !0,
              children: ae,
            }),
            (0, JSXRuntime.jsx)(yy, {
              k: `jugador`,
              icono: `lupa`,
              valor: A ?? `Buscar jugador…`,
              vacio: !A,
              on: !!A,
              ancho: !0,
              menu: m,
              setMenu: h,
              aviso: I(`jugador`),
              children: oe,
            }),
            (0, JSXRuntime.jsx)(yy, {
              k: `quien`,
              rot: `Equipo`,
              valor: j ?? `Todos`,
              on: !!j,
              menu: m,
              setMenu: h,
              aviso: I(`quien`),
              children: se,
            }),
            E.vePanel
              ? (0, JSXRuntime.jsx)(yy, {
                  k: `panel`,
                  rot: o.operado ? `Operó` : `Panel`,
                  valor: M ?? `Todos`,
                  on: !!M,
                  menu: m,
                  setMenu: h,
                  aviso: I(`panel`),
                  avisoEnMenu: !0,
                  derecha: !0,
                  children: ce,
                })
              : null,
            (0, JSXRuntime.jsx)(yy, {
              k: `mas`,
              valor: `Más filtros`,
              on: !!o.tipo || o.estado !== `todas` || !!o.montoMin.trim(),
              menu: m,
              setMenu: h,
              aviso: I(`tipo`),
              avisoEnMenu: !0,
              derecha: !0,
              children: le,
            }),
          ],
        })
      : (0, JSXRuntime.jsxs)(`div`, {
          className: `lg-barra`,
          children: [
            (0, JSXRuntime.jsx)(`div`, {
              className: `lg-ctl-caja`,
              children: (0, JSXRuntime.jsxs)(`button`, {
                type: `button`,
                className: classNames(`lg-ctl`, o.rango !== `7` && `on`),
                onClick: () => h(`rango`),
                "aria-haspopup": `dialog`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `lg-ctl-val`,
                    children: P,
                  }),
                  (0, JSXRuntime.jsx)(Icon, {
                    nombre: `chevron`,
                    tam: 14,
                    trazo: 2,
                  }),
                ],
              }),
            }),
            (0, JSXRuntime.jsx)(`div`, {
              className: `lg-ctl-caja lg-ctl-ancho`,
              children: (0, JSXRuntime.jsxs)(`button`, {
                type: `button`,
                className: classNames(`lg-ctl`, A && `on`),
                onClick: () => h(`jugador`),
                "aria-haspopup": `dialog`,
                children: [
                  (0, JSXRuntime.jsx)(Icon, {
                    nombre: `lupa`,
                    tam: 15,
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    className: classNames(`lg-ctl-val`, !A && `lg-ctl-vacio`),
                    children: A ?? `Jugador…`,
                  }),
                ],
              }),
            }),
            (0, JSXRuntime.jsx)(`div`, {
              className: `lg-ctl-caja`,
              children: (0, JSXRuntime.jsxs)(`button`, {
                type: `button`,
                className: classNames(`lg-ctl`, F.length > +!!A && `on`),
                onClick: () => h(`filtros`),
                "aria-haspopup": `dialog`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `lg-ctl-val`,
                    children: `Filtros`,
                  }),
                  F.length > +!!A
                    ? (0, JSXRuntime.jsx)(`b`, {
                        className: `lg-ctl-n`,
                        children: F.length - +!!A,
                      })
                    : null,
                ],
              }),
            }),
          ],
        }),
    de =
      !r && f && f.campo !== `general` && m === null
        ? (0, JSXRuntime.jsx)(Notice, {
            aviso: {
              ok: !1,
              texto: f.mensaje,
            },
            clase: `lg-aviso`,
          })
        : null,
    fe = E.grupos.map((e) => {
      let t = c.cuentas?.[e.k],
        n = (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
          children: [
            e.k === `todo`
              ? null
              : (0, JSXRuntime.jsx)(`i`, {
                  className: `lg-punto`,
                  style: {
                    background: ly[e.k],
                  },
                  "aria-hidden": `true`,
                }),
            e.n,
            t && !L
              ? (0, JSXRuntime.jsx)(`small`, {
                  className: `lg-n`,
                  children: t,
                })
              : null,
          ],
        });
      return [e.k, n];
    }),
    pe = F.length > 0,
    me = c.filas;
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `lg`,
    children: [
      c.muestra || E.muestra
        ? (0, JSXRuntime.jsx)(`div`, {
            className: `lg-muestra`,
            children: `Datos de muestra: nada de lo que ves acá es real.`,
          })
        : null,
      ue,
      de,
      (0, JSXRuntime.jsx)(Dg, {
        opciones: fe,
        activo: o.grupo,
        onElegir: (e) =>
          w({
            grupo: e,
            tipo: null,
          }),
        clase: `lg-chips`,
        etiqueta: `Qué mostrar`,
      }),
      F.length > 0
        ? (0, JSXRuntime.jsxs)(`div`, {
            className: `lg-activos`,
            children: [
              F.map((e) =>
                (0, JSXRuntime.jsxs)(
                  `span`,
                  {
                    className: `lg-pill`,
                    children: [
                      (0, JSXRuntime.jsxs)(`span`, {
                        className: `lg-pill-t`,
                        children: [e.t, `:`],
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `lg-pill-v`,
                        children: e.v,
                      }),
                      (0, JSXRuntime.jsx)(`button`, {
                        type: `button`,
                        className: `lg-pill-x`,
                        onClick: () => ne(e.k),
                        "aria-label": `Quitar ${e.t}`,
                        children: (0, JSXRuntime.jsx)(Icon, {
                          nombre: `cruz`,
                          tam: 12,
                          trazo: 2.4,
                        }),
                      }),
                    ],
                  },
                  e.k,
                ),
              ),
              (0, JSXRuntime.jsx)(Button, {
                tono: `texto`,
                chico: !0,
                clase: `lg-limpiar`,
                onClick: T,
                children: `Limpiar filtros`,
              }),
            ],
          })
        : null,
      o.grupo === `caja` && c.totales && !L
        ? (0, JSXRuntime.jsxs)(`div`, {
            className: `lg-totales`,
            children: [
              (0, JSXRuntime.jsxs)(`span`, {
                children: [
                  `Cargado `,
                  (0, JSXRuntime.jsx)(`b`, {
                    className: `lg-pos`,
                    children: c.totales.cargado,
                  }),
                ],
              }),
              (0, JSXRuntime.jsxs)(`span`, {
                children: [
                  `Retirado `,
                  (0, JSXRuntime.jsx)(`b`, {
                    className: `lg-neg`,
                    children: c.totales.retirado,
                  }),
                ],
              }),
              (0, JSXRuntime.jsxs)(`span`, {
                children: [
                  `Neto `,
                  (0, JSXRuntime.jsx)(`b`, {
                    className:
                      c.totales.netoSigno === `neg`
                        ? `lg-neg`
                        : c.totales.netoSigno === `pos`
                          ? `lg-pos`
                          : void 0,
                    children: c.totales.neto,
                  }),
                ],
              }),
              (0, JSXRuntime.jsxs)(`span`, {
                className: `lg-dim`,
                children: [
                  c.totales.movimientos,
                  ` movimientos de plata en el rango`,
                ],
              }),
            ],
          })
        : null,
      r && me.length > 0
        ? (0, JSXRuntime.jsx)(`div`, {
            className: `lg-ayuda`,
            children: `Arrastrá el borde de cada título para achicar o agrandar la columna · doble clic en el borde la ajusta al contenido`,
          })
        : null,
      u === `primera` && me.length === 0
        ? (0, JSXRuntime.jsx)(vy, {})
        : f?.campo === `general` && me.length === 0
          ? (0, JSXRuntime.jsxs)(`div`, {
              className: `lg-error`,
              children: [
                (0, JSXRuntime.jsx)(Notice, {
                  aviso: {
                    ok: !1,
                    texto: f.mensaje,
                  },
                }),
                (0, JSXRuntime.jsx)(Button, {
                  tono: `secundario`,
                  onClick: () => void S(o, null),
                  children: `Reintentar`,
                }),
              ],
            })
          : me.length === 0 && L
            ? (0, JSXRuntime.jsxs)(Lg, {
                clase: `lg-vacio`,
                children: [
                  (0, JSXRuntime.jsx)(`b`, {
                    children: `Ese filtro no se pudo aplicar.`,
                  }),
                  (0, JSXRuntime.jsxs)(`span`, {
                    children: [
                      `Revisá el filtro marcado`,
                      pe ? ` o sacalo` : ``,
                      `.`,
                    ],
                  }),
                  pe
                    ? (0, JSXRuntime.jsx)(Button, {
                        tono: `secundario`,
                        onClick: T,
                        children: `Limpiar filtros`,
                      })
                    : null,
                ],
              })
            : me.length === 0
              ? (0, JSXRuntime.jsx)(Lg, {
                  clase: `lg-vacio`,
                  children: c.juegoPideJugador
                    ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                        children: [
                          (0, JSXRuntime.jsx)(`b`, {
                            children: `Elegí un jugador para ver sus rondas.`,
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            children: `El juego se mira jugador por jugador.`,
                          }),
                          (0, JSXRuntime.jsx)(Button, {
                            tono: `secundario`,
                            onClick: () => h(`jugador`),
                            children: `Elegir jugador`,
                          }),
                        ],
                      })
                    : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                        children: [
                          (0, JSXRuntime.jsx)(`b`, {
                            children: `No hay movimientos con estos filtros.`,
                          }),
                          (0, JSXRuntime.jsxs)(`span`, {
                            children: [
                              `Probá con un rango más largo`,
                              pe ? ` o sacá algún filtro` : ``,
                              `.`,
                            ],
                          }),
                          pe
                            ? (0, JSXRuntime.jsx)(Button, {
                                tono: `secundario`,
                                onClick: T,
                                children: `Limpiar filtros`,
                              })
                            : null,
                        ],
                      }),
                })
              : (0, JSXRuntime.jsx)(`div`, {
                  className: classNames(
                    `lg-contenido`,
                    (u === `primera` || L) && `cargando`,
                  ),
                  "aria-busy": u === `primera` || void 0,
                  children: r
                    ? (0, JSXRuntime.jsx)(Cy, {
                        filas: me,
                        anchos: v,
                        setAnchos: y,
                        vePanel: E.vePanel,
                        abierta: g,
                        onAbrir: _,
                      })
                    : (0, JSXRuntime.jsx)(Ty, {
                        filas: me,
                        onAbrir: _,
                      }),
                }),
      me.length > 0 && u !== `primera` && !L
        ? (0, JSXRuntime.jsxs)(`div`, {
            className: `lg-pie-lista`,
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                children: c.siguiente
                  ? `Mostrando ${me.length} · hay más`
                  : `Mostrando ${me.length} · son todos`,
              }),
              c.siguiente
                ? (0, JSXRuntime.jsxs)(`div`, {
                    className: `lg-mas-caja`,
                    children: [
                      (0, JSXRuntime.jsx)(Button, {
                        tono: `secundario`,
                        pendiente: u === `mas`,
                        onClick: () => void S(o, c.siguiente),
                        children: u === `mas` ? `Cargando…` : `Ver 50 más`,
                      }),
                      f?.campo === `general`
                        ? (0, JSXRuntime.jsx)(Notice, {
                            aviso: {
                              ok: !1,
                              texto: f.mensaje,
                            },
                            clase: `lg-aviso`,
                          })
                        : null,
                    ],
                  })
                : null,
            ],
          })
        : null,
      (0, JSXRuntime.jsxs)(`p`, {
        className: `lg-pie`,
        children: [
          o.grupo === `todo` && !o.jugador
            ? `Las rondas de juego no entran en «Todo» para que no tapen el resto: están en el chip Juego, o aparecen solas cuando elegís un jugador. `
            : ``,
          !E.vePanel && E.rol !== `cajero`
            ? `Un jugador cuenta como de tu panel desde su primera carga. `
            : ``,
          `El registro no incluye los ingresos de los jugadores al sitio, los cambios de topes de retiro ni las comisiones pagadas (se calculan, no se guardan).`,
        ],
      }),
      !r && m === `rango`
        ? (0, JSXRuntime.jsxs)(Yg, {
            onCerrar: () => h(null),
            claseHoja: `lg-hoja`,
            etiqueta: `Rango de fechas`,
            children: [
              (0, JSXRuntime.jsx)(`h3`, {
                className: `lg-hoja-tit`,
                children: `Rango`,
              }),
              ae,
              (0, JSXRuntime.jsx)(Button, {
                tono: `naranja`,
                ancho: !0,
                onClick: () => h(null),
                children: `Listo`,
              }),
            ],
          })
        : null,
      !r && m === `jugador`
        ? (0, JSXRuntime.jsxs)(Yg, {
            onCerrar: () => h(null),
            claseHoja: `lg-hoja`,
            etiqueta: `Elegir jugador`,
            children: [
              (0, JSXRuntime.jsx)(`h3`, {
                className: `lg-hoja-tit`,
                children: `Jugador`,
              }),
              oe,
              I(`jugador`),
            ],
          })
        : null,
      !r && m === `filtros`
        ? (0, JSXRuntime.jsxs)(Yg, {
            onCerrar: () => h(null),
            claseHoja: `lg-hoja`,
            etiqueta: `Filtros`,
            children: [
              (0, JSXRuntime.jsx)(`h3`, {
                className: `lg-hoja-tit`,
                children: `Filtros`,
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `lg-campo`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `lg-etq`,
                    children: `Equipo`,
                  }),
                  (0, JSXRuntime.jsx)(Ig, {
                    clave: `lg-quien-h`,
                    opciones: ee,
                    valor: o.quien ?? ``,
                    onElegir: (e) =>
                      w({
                        quien: e || null,
                      }),
                    buscarQue: `Buscar a alguien del equipo`,
                    sinContar: ``,
                    pastillasHasta: D ? 2 : 0,
                    cuantos: `opciones`,
                    vacio: `Nadie se llama así.`,
                    etiqueta: `Equipo`,
                  }),
                  I(`quien`),
                ],
              }),
              E.vePanel
                ? (0, JSXRuntime.jsxs)(`div`, {
                    className: `lg-campo`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `lg-etq`,
                        children: `Panel`,
                      }),
                      (0, JSXRuntime.jsx)(Ig, {
                        clave: `lg-panel-h`,
                        opciones: te,
                        valor: o.panel ?? ``,
                        onElegir: (e) =>
                          w({
                            panel: e || null,
                            operado: e ? o.operado : !1,
                          }),
                        buscarQue: `Buscar panel`,
                        sinContar: ``,
                        pastillasHasta: 0,
                        cuantos: `paneles`,
                        vacio: `Ningún panel se llama así.`,
                        etiqueta: `Paneles`,
                      }),
                      o.panel
                        ? (0, JSXRuntime.jsx)(Pg, {
                            id: `lg-operado-h`,
                            etiqueta: `Contar por`,
                            valor: o.operado ? `operado` : `jugador`,
                            opciones: [
                              [`jugador`, `Contar por el panel del jugador`],
                              [`operado`, `Contar por el panel de quien operó`],
                            ],
                            onCambiar: (e) =>
                              w({
                                operado: e === `operado`,
                              }),
                          })
                        : null,
                      I(`panel`),
                    ],
                  })
                : null,
              le,
              (0, JSXRuntime.jsxs)(`div`, {
                className: `lg-hoja-botones`,
                children: [
                  (0, JSXRuntime.jsx)(Button, {
                    tono: `secundario`,
                    onClick: T,
                    children: `Limpiar`,
                  }),
                  (0, JSXRuntime.jsx)(Button, {
                    tono: `naranja`,
                    onClick: () => h(null),
                    children: `Ver resultados`,
                  }),
                ],
              }),
            ],
          })
        : null,
      R
        ? (0, JSXRuntime.jsx)(Yg, {
            onCerrar: () => _(null),
            clase: `lg-det-fondo`,
            claseHoja: `lg-det`,
            etiqueta: `Detalle del movimiento`,
            children: (0, JSXRuntime.jsx)(Ey, {
              f: R,
              onCerrar: () => _(null),
              onVerTodo:
                E.jugadores.some((e) => e.n === R.jugador) && R.jugador
                  ? () => ie(R.jugador ?? ``)
                  : null,
              onFicha:
                R.jugador &&
                e.players.some((e) => e.username === R.jugador) &&
                !E.muestra
                  ? () => re(R.jugador ?? ``)
                  : null,
            }),
          })
        : null,
    ],
  });
}
function vy() {
  return (0, JSXRuntime.jsx)(`div`, {
    className: `lg-cargando`,
    "aria-busy": `true`,
    "aria-label": `Cargando el registro`,
    children: [0, 1, 2, 3, 4].map((e) =>
      (0, JSXRuntime.jsx)(
        `span`,
        {
          className: `lg-esqueleto`,
          style: {
            animationDelay: `${e * 90}ms`,
          },
        },
        e,
      ),
    ),
  });
}
function yy({
  k: e,
  rot: t,
  valor: n,
  icono: r,
  vacio: i,
  on: a,
  ancho: o,
  derecha: s,
  menu: c,
  setMenu: l,
  aviso: u,
  avisoEnMenu: d,
  children: f,
}) {
  let p = (0, React.useRef)(null),
    m = c === e;
  return (
    (0, React.useEffect)(() => {
      if (!m) return;
      let e = (e) => {
        p.current &&
          e.target instanceof Node &&
          !p.current.contains(e.target) &&
          l(null);
      };
      return (
        document.addEventListener(`pointerdown`, e),
        () => document.removeEventListener(`pointerdown`, e)
      );
    }, [m, l]),
    (0, JSXRuntime.jsxs)(`div`, {
      ref: p,
      className: classNames(`lg-ctl-caja`, o && `lg-ctl-ancho`),
      children: [
        (0, JSXRuntime.jsxs)(`button`, {
          type: `button`,
          className: classNames(`lg-ctl`, a && `on`, m && `abierto`),
          onClick: () => l(m ? null : e),
          "aria-expanded": m,
          "aria-haspopup": `true`,
          children: [
            r
              ? (0, JSXRuntime.jsx)(Icon, {
                  nombre: r,
                  tam: 15,
                })
              : null,
            t
              ? (0, JSXRuntime.jsx)(`small`, {
                  className: `lg-ctl-rot`,
                  children: t,
                })
              : null,
            (0, JSXRuntime.jsx)(`span`, {
              className: classNames(`lg-ctl-val`, i && `lg-ctl-vacio`),
              children: n,
            }),
            (0, JSXRuntime.jsx)(Icon, {
              nombre: `chevron`,
              tam: 13,
              trazo: 2,
              clase: `lg-ctl-chev`,
            }),
          ],
        }),
        m
          ? (0, JSXRuntime.jsx)(`div`, {
              className: classNames(`lg-menu`, s && `der`),
              children: f,
            })
          : null,
        m && d ? null : u,
      ],
    })
  );
}
let by;
function xy({ f: e }) {
  return e.quien
    ? e.quien.rol === `madre`
      ? (0, JSXRuntime.jsx)(`span`, {
          className: `lg-dim`,
          title: `Lo hizo alguien de la casa madre`,
          children: `Casa madre`,
        })
      : (0, JSXRuntime.jsxs)(`span`, {
          className: `lg-equipo`,
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `lg-nom`,
              title: e.quien.nombre,
              children: e.quien.nombre,
            }),
            (0, JSXRuntime.jsx)(`span`, {
              className: classNames(`lg-rol`, by[e.quien.rol]),
              children: Sc[e.quien.rol],
            }),
          ],
        })
    : (0, JSXRuntime.jsx)(`span`, {
        className: `lg-dim`,
        children: `—`,
      });
}
function Sy({ f: e }) {
  return e.monto
    ? (0, JSXRuntime.jsx)(`span`, {
        className: classNames(
          `lg-monto`,
          e.monto.signo === `pos` && `lg-pos`,
          e.monto.signo === `neg` && `lg-neg`,
          e.monto.signo === `neutro` && `lg-dim`,
        ),
        children: e.monto.texto,
      })
    : (0, JSXRuntime.jsx)(`span`, {
        className: `lg-dim`,
        children: `—`,
      });
}
function Cy({
  filas: e,
  anchos: t,
  setAnchos: n,
  vePanel: r,
  abierta: i,
  onAbrir: a,
}) {
  let o = (0, React.useRef)(null),
    s = (0, React.useRef)(null),
    [c, l] = (0, React.useState)(null),
    u = fy.filter(([e]) => r || e !== `panel`),
    d = (e) => (c ?? t)[e],
    f = (e, n) => {
      (e.preventDefault(),
        e.stopPropagation(),
        (s.current = {
          col: n,
          x: e.clientX,
          w: t[n],
        }),
        l(t),
        e.currentTarget.setPointerCapture(e.pointerId),
        e.currentTarget.classList.add(`activa`));
    },
    p = (e) => {
      let t = s.current;
      if (!t) return;
      let n = Math.max(70, Math.min(640, t.w + e.clientX - t.x));
      l(
        (e) =>
          e && {
            ...e,
            [t.col]: n,
          },
      );
    },
    m = (e) => {
      let r = s.current;
      if (!r) return;
      (e.currentTarget.classList.remove(`activa`), (s.current = null));
      let i = {
        ...t,
        [r.col]: (c ?? t)[r.col],
      };
      (l(null), n(i), gy(i));
    },
    h = (e) => {
      let r = o.current,
        i = u.findIndex(([t]) => t === e);
      if (!r || i < 0 || !r.parentElement) return;
      let a = document.createElement(`div`);
      ((a.className = `lg-medidor`), r.parentElement.appendChild(a));
      let s = 70;
      (r.querySelectorAll(`tr > :nth-child(${i + 1})`).forEach((e) => {
        ((a.innerHTML = e.innerHTML),
          (s = Math.max(s, Math.ceil(a.scrollWidth) + 30)));
      }),
        a.remove());
      let c = {
        ...t,
        [e]: Math.min(640, s),
      };
      (n(c), gy(c));
    },
    g = (e, r) => {
      if (e.key !== `ArrowLeft` && e.key !== `ArrowRight`) return;
      e.preventDefault();
      let i = {
        ...t,
        [r]: Math.max(
          70,
          Math.min(640, t[r] + (e.key === `ArrowRight` ? 16 : -16)),
        ),
      };
      (n(i), gy(i));
    };
  return (0, JSXRuntime.jsx)(`div`, {
    className: `lg-marco`,
    children: (0, JSXRuntime.jsx)(`div`, {
      className: `lg-scroll`,
      children: (0, JSXRuntime.jsxs)(`table`, {
        ref: o,
        className: `lg-tabla`,
        children: [
          (0, JSXRuntime.jsxs)(`colgroup`, {
            children: [
              u.map(([e]) =>
                (0, JSXRuntime.jsx)(
                  `col`,
                  {
                    style: {
                      width: d(e),
                    },
                  },
                  e,
                ),
              ),
              (0, JSXRuntime.jsx)(`col`, {}),
            ],
          }),
          (0, JSXRuntime.jsx)(`thead`, {
            children: (0, JSXRuntime.jsxs)(`tr`, {
              children: [
                u.map(([e, t, n]) =>
                  (0, JSXRuntime.jsxs)(
                    `th`,
                    {
                      className: classNames(n && `der`),
                      scope: `col`,
                      children: [
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `lg-medir`,
                          children: t,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `lg-asa`,
                          role: `separator`,
                          "aria-orientation": `vertical`,
                          "aria-label": `Ancho de la columna ${t}`,
                          "aria-valuenow": d(e),
                          "aria-valuemin": 70,
                          "aria-valuemax": 640,
                          tabIndex: 0,
                          onPointerDown: (t) => f(t, e),
                          onPointerMove: p,
                          onPointerUp: m,
                          onPointerCancel: m,
                          onDoubleClick: () => h(e),
                          onKeyDown: (t) => g(t, e),
                        }),
                      ],
                    },
                    e,
                  ),
                ),
                (0, JSXRuntime.jsx)(`th`, {
                  className: `lg-relleno`,
                  "aria-hidden": `true`,
                }),
              ],
            }),
          }),
          (0, JSXRuntime.jsx)(`tbody`, {
            children: e.map((e) =>
              (0, JSXRuntime.jsxs)(
                `tr`,
                {
                  className: classNames(
                    `lg-tr`,
                    e.anulada && `lg-anulada`,
                    i === e.k && `sel`,
                  ),
                  tabIndex: 0,
                  "aria-label": `${e.accion}, ${e.fecha.larga}`,
                  onClick: () => a(e.k),
                  onKeyDown: (t) => {
                    (t.key === `Enter` || t.key === ` `) &&
                      (t.preventDefault(), a(e.k));
                  },
                  children: [
                    u.map(([t, , n]) =>
                      (0, JSXRuntime.jsx)(
                        `td`,
                        {
                          className: classNames(n && `der`),
                          children: (0, JSXRuntime.jsx)(wy, {
                            f: e,
                            col: t,
                          }),
                        },
                        t,
                      ),
                    ),
                    (0, JSXRuntime.jsx)(`td`, {
                      className: `lg-relleno`,
                      "aria-hidden": `true`,
                    }),
                  ],
                },
                e.k,
              ),
            ),
          }),
        ],
      }),
    }),
  });
}
function wy({ f: e, col: t }) {
  switch (t) {
    case `fecha`:
      return (0, JSXRuntime.jsx)(`span`, {
        className: `lg-medir lg-num`,
        children: e.fecha.corta,
      });
    case `accion`:
      return (0, JSXRuntime.jsxs)(`span`, {
        className: `lg-accion`,
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            className: `lg-ic`,
            style: og(dy(e)),
            children: (0, JSXRuntime.jsx)(Icon, {
              nombre: uy(e),
              tam: 14,
              trazo: 2,
            }),
          }),
          (0, JSXRuntime.jsx)(`span`, {
            className: `lg-medir lg-tx`,
            title: e.accion,
            children: e.accion,
          }),
        ],
      });
    case `jugador`:
      return e.jugador
        ? (0, JSXRuntime.jsx)(`span`, {
            className: `lg-medir`,
            title: e.jugador,
            children: e.jugador,
          })
        : (0, JSXRuntime.jsx)(`span`, {
            className: `lg-medir lg-dim`,
            children: `—`,
          });
    case `equipo`:
      return (0, JSXRuntime.jsx)(`span`, {
        className: `lg-medir`,
        children: (0, JSXRuntime.jsx)(xy, {
          f: e,
        }),
      });
    case `panel`:
      return e.panel
        ? (0, JSXRuntime.jsxs)(`span`, {
            className: `lg-medir lg-dos`,
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                title: e.panel,
                children: e.panel,
              }),
              e.opero
                ? (0, JSXRuntime.jsxs)(`small`, {
                    title: `operó: ${e.opero}`,
                    children: [`operó: `, e.opero],
                  })
                : null,
            ],
          })
        : (0, JSXRuntime.jsx)(`span`, {
            className: `lg-medir lg-dim`,
            children: `—`,
          });
    case `monto`:
      return (0, JSXRuntime.jsx)(`span`, {
        className: `lg-medir lg-num`,
        children: (0, JSXRuntime.jsx)(Sy, {
          f: e,
        }),
      });
    case `quedo`:
      return e.quedo
        ? (0, JSXRuntime.jsxs)(`span`, {
            className: `lg-medir lg-num lg-dim`,
            title: e.quedo.cupo
              ? `Cupo que le quedó al panel`
              : `Saldo del jugador después`,
            children: [e.quedo.cupo ? `cupo ` : ``, e.quedo.texto],
          })
        : (0, JSXRuntime.jsx)(`span`, {
            className: `lg-medir lg-dim`,
            children: `—`,
          });
  }
}
function Ty({ filas: e, onAbrir: t }) {
  return (0, JSXRuntime.jsx)(Vg, {
    plana: !0,
    clase: `lg-lista`,
    children: e.map((n, r) => {
      let i =
          r === 0 || e[r - 1]?.fecha.dia !== n.fecha.dia ? n.diaTitulo : null,
        a =
          n.monto && n.monto.signo !== `neutro`
            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    className: n.monto?.signo === `neg` ? `lg-neg` : `lg-pos`,
                    children: n.monto?.texto,
                  }),
                  (0, JSXRuntime.jsxs)(`span`, {
                    className: `lg-tit-tipo`,
                    children: [` · `, n.tipo === `ronda` ? `Ronda` : n.accion],
                  }),
                ],
              })
            : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  n.accion,
                  n.monto
                    ? (0, JSXRuntime.jsxs)(`span`, {
                        className: `lg-tit-tipo`,
                        children: [` · `, n.monto.texto],
                      })
                    : null,
                ],
              }),
        o = n.quien
          ? n.quien.rol === `jugador`
            ? null
            : `por ${n.quien.nombre}`
          : null,
        s = [n.jugador, o, n.panel].filter(Boolean).join(` · `);
      return (0, JSXRuntime.jsxs)(
        React.Fragment,
        {
          children: [
            i
              ? (0, JSXRuntime.jsx)(`div`, {
                  className: `lg-dia`,
                  children: i,
                })
              : null,
            (0, JSXRuntime.jsx)(Hg, {
              icono: uy(n),
              iconoColor: dy(n),
              tituloNode: (0, JSXRuntime.jsx)(`span`, {
                className: `lg-tit`,
                children: a,
              }),
              sub: s || void 0,
              derechaNode: (0, JSXRuntime.jsx)(`span`, {
                className: `lg-hora`,
                children: n.fecha.hora,
              }),
              derechaColor: `gris`,
              tachado: n.anulada,
              clase: classNames(`lg-fila`, n.anulada && `lg-anulada`),
              i: Math.min(12, r + 3),
              onClick: () => t(n.k),
              etiqueta: `${n.accion}, ${n.fecha.larga}`,
            }),
          ],
        },
        n.k,
      );
    }),
  });
}
function Ey({ f: e, onCerrar: t, onVerTodo: n, onFicha: r }) {
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `lg-det-cab`,
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            className: `lg-ic grande`,
            style: og(dy(e)),
            children: (0, JSXRuntime.jsx)(Icon, {
              nombre: uy(e),
              tam: 18,
              trazo: 2,
            }),
          }),
          (0, JSXRuntime.jsxs)(`div`, {
            className: `lg-det-tit`,
            children: [
              (0, JSXRuntime.jsx)(`h3`, {
                children: e.accion,
              }),
              (0, JSXRuntime.jsx)(`span`, {
                children: e.fecha.larga,
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            className: `lg-det-x`,
            onClick: t,
            "aria-label": `Cerrar`,
            children: (0, JSXRuntime.jsx)(Icon, {
              nombre: `cruz`,
              tam: 16,
              trazo: 2.2,
            }),
          }),
        ],
      }),
      e.monto
        ? (0, JSXRuntime.jsx)(`div`, {
            className: classNames(`lg-det-monto`, e.anulada && `lg-anulada`),
            children: (0, JSXRuntime.jsx)(Sy, {
              f: e,
            }),
          })
        : null,
      (0, JSXRuntime.jsxs)(`div`, {
        className: `lg-det-datos`,
        children: [
          e.detalle.map((e, t) =>
            (0, JSXRuntime.jsxs)(
              `div`,
              {
                className: `lg-dato`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    children: e.k,
                  }),
                  (0, JSXRuntime.jsxs)(`span`, {
                    className: e.ip ? `lg-ip` : void 0,
                    children: [
                      e.v,
                      e.ip
                        ? (0, JSXRuntime.jsx)(`small`, {
                            className: `lg-solo-dueno`,
                            children: `sólo dueño`,
                          })
                        : null,
                    ],
                  }),
                ],
              },
              `${e.k}-${t}`,
            ),
          ),
          e.anulada
            ? (0, JSXRuntime.jsxs)(`div`, {
                className: `lg-dato`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    children: `Estado`,
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    children: `Anulada`,
                  }),
                ],
              })
            : null,
        ],
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `lg-det-pie`,
        children: [
          n && e.jugador
            ? (0, JSXRuntime.jsx)(Button, {
                tono: `naranja`,
                ancho: !0,
                onClick: n,
                children: `Ver todo lo de ${e.jugador}`,
              })
            : null,
          r
            ? (0, JSXRuntime.jsx)(Button, {
                tono: `secundario`,
                ancho: !0,
                onClick: r,
                children: `Abrir ficha del jugador`,
              })
            : null,
          (0, JSXRuntime.jsx)(`p`, {
            className: `lg-det-nota`,
            children: `Se muestran sólo datos declarados; nunca el registro técnico crudo.`,
          }),
        ],
      }),
    ],
  });
}
function initializeActivityScreen() {
  Zv =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/logs-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  Qv = Zv(`opcionesLogsAction`);
  $v = Zv(`leerLogsAction`);
  ey = () => Ec(new Date()).dia;
  ty = (e, t) => {
    let n = new Date(`${e}T12:00:00Z`);
    return (n.setUTCDate(n.getUTCDate() - t), n.toISOString().slice(0, 10));
  };
  ay = `No se pudo leer el registro. Revisá la conexión y probá de nuevo.`;
  cy = {
    carga: `sube`,
    carga_anulacion: `cruz`,
    retiro: `baja`,
    retiro_anulacion: `cruz`,
    firma_pedida: `elegir`,
    firma_aprobada: `elegir`,
    firma_rechazada: `cruz`,
    pedido_creado: `reloj`,
    pedido_atendido: `tilde`,
    pedido_descartado: `cruz`,
    pedido_cancelado: `cruz`,
    apuesta_cerrada: `tilde`,
    ronda: `dado`,
    jugador_creado: `usuario`,
    billetera_congelada: `billetera`,
    billetera_descongelada: `billetera`,
    cuenta_bloqueada: `candado`,
    cuenta_reabierta: `candado`,
    cuenta_cerrada: `candado`,
    contrasena_jugador: `candado`,
    nota: `nota`,
    tope_jugador: `reloj`,
    cajero_cambiado: `jugadores`,
    acceso: `equipo`,
    comision: `balance`,
    link_referido: `compartir`,
    cupo_recarga: `socios`,
    cupo_carga: `socios`,
    cupo_descarga: `socios`,
    cupo_ajuste: `socios`,
    config: `ajustes`,
    paneles: `paneles`,
    soporte_eliminada: `tacho`,
  };
  ly = {
    caja: `var(--verde)`,
    premios: `var(--naranja-claro)`,
    juego: `var(--lg-azul)`,
    cuentas: `var(--lg-violeta)`,
    equipo: `var(--tx2)`,
  };
  uy = (e) => cy[e.tipo] ?? (e.grupo === `premios` ? `premios` : `ficha`);
  dy = (e) =>
    e.tipo === `retiro` || e.tipo.endsWith(`_anulacion`)
      ? `var(--ambar)`
      : ly[e.grupo];
  fy = [
    [`fecha`, `Fecha`],
    [`accion`, `Acción`],
    [`jugador`, `Jugador`],
    [`equipo`, `Equipo`],
    [`panel`, `Panel`],
    [`monto`, `Monto`, !0],
    [`quedo`, `Quedó en`, !0],
  ];
  py = {
    fecha: 132,
    accion: 160,
    jugador: 96,
    equipo: 154,
    panel: 92,
    monto: 156,
    quedo: 170,
  };
  my = `demo-socio:v4-logs-anchos-3`;
  by = {
    dueno: `dueno`,
    admin: `admin`,
    cajero: `cajero`,
    jugador: `jug`,
    auto: `auto`,
    madre: `auto`,
  };
}
export { ActivityScreen, initializeActivityScreen };
