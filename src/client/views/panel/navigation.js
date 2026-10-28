/**
 * panel / navigation.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { Hm, Gh, Kh, Yh, tg } from "./motion.js";
import {
  classNames,
  Icon,
  cg,
  Portal,
  useBodyScrollLock,
  Button,
  Eg,
  Og,
  Yg,
} from "./ui-components.js";
function Xg(e) {
  return (
    e.puedeCrearCajeros ||
    e.puedeTocarAcceso ||
    e.puedeBorrarPersonal ||
    e.puedeCambiarRol
  );
}
function Zg(e, t) {
  return t.puedeCambiarRol
    ? [...e]
    : Xg(t)
      ? e.filter((e) => e.role === `operator` && e.casa == null)
      : [];
}
function Qg(e, t) {
  return t && !e.esStaff && !!e.playerId && e.gestionable === !0;
}
function $g(e, t) {
  if (
    e.demo ||
    !e.capacidades.puedeReasignarCajero ||
    t.cajeroReasignable !== !0 ||
    !t.playerId
  )
    return null;
  let n = t.casaId ? e.casas.find((e) => e.id === t.casaId) : void 0,
    r = n && !n.esMadre ? n.nombre : null,
    i = e.personal
      .filter(
        (t) =>
          t.activo && (!e.capacidades.cruzaCasas || (t.casa ?? null) === r),
      )
      .map((e) => ({
        id: e.id,
        username: e.username,
      }));
  !e.capacidades.cruzaCasas &&
    e.yoId &&
    !i.some((t) => t.id === e.yoId) &&
    i.push({
      id: e.yoId,
      username: e.turno.quien,
    });
  let a = e.esMadre !== !0 || r !== null;
  return {
    opciones: i,
    puedeSoltar: !!t.cajero && !a,
  };
}
function e_(e) {
  let t = e.isAdmin,
    n = e.esDueno,
    r = e.esMadre,
    i = (t && r) || n,
    a = Xg(e.capacidades),
    o = [`inicio`];
  (r && n && o.push(`soporte`),
    o.push(`paneles`, `pendientes`, `movimientos`, `balance`),
    n && o.push(`alertas`),
    t && o.push(`premios`),
    o.push(`flyers`),
    i && o.push(`ajustes`));
  let s = [];
  return (
    n && r && s.push(`socios`),
    a && s.push(`equipo`),
    s.push(`jugadores`),
    {
      puedeRevisar: t,
      puedeMandar: n,
      esMadre: r,
      veAjustes: i,
      veEquipo: a,
      rango: n ? `DUEÑO` : t ? `ADMIN` : `CAJERO`,
      pantallas: o,
      solapas: s,
      sitio: t && r,
    }
  );
}
function t_(e, t) {
  return t.pantallas.includes(e) ? e : `inicio`;
}
function n_(e, t) {
  return t.solapas.includes(e) ? e : `jugadores`;
}
function r_(e, t) {
  return {
    pedidos: e.requests.length,
    firmas: e.firmas.length,
    alertas: e.vinculosTotal.revisar,
    premios: e.heldTotal.count,
    trabadas: e.trabadas.length,
    soporteSinLeer: t,
  };
}
function i_(e, t) {
  let n = (t) => e.pantallas.includes(t),
    r = n(`soporte`) ? t.soporteSinLeer : 0,
    i = n(`alertas`) ? t.alertas : 0,
    a = n(`premios`) ? t.premios : 0,
    o = n(`ajustes`) ? t.trabadas : 0;
  return {
    pend: t.pedidos + t.firmas,
    soporte: r,
    alertas: i,
    premios: a,
    ajustes: o,
    mas: r + i + a + o,
  };
}
let a_, o_, s_;
function c_(e, t) {
  let n = (e) =>
    e === `soporte`
      ? t.soporte
      : e === `pendientes`
        ? t.pend
        : e === `alertas`
          ? t.alertas
          : e === `premios`
            ? t.premios
            : e === `ajustes`
              ? t.ajustes
              : 0;
  return e.pantallas.map((e) => ({
    id: e,
    label: a_[e],
    badge: n(e),
  }));
}
let l_;
function u_(e) {
  return e.filter((e) => !l_.includes(e.id));
}
function d_(e) {
  return {
    socios: e.casas.filter((e) => !e.esMadre).length,
    equipo: Zg(e.personal, e.capacidades).length,
    jugadores: e.players.length,
  };
}
let f_, p_;
function m_(e, t) {
  let n = f_[e];
  return {
    titulo: n.titulo,
    bajada: e === `paneles` ? p_[t] : n.bajada,
  };
}
function h_(e, t, n = `RUSHYBET`) {
  return `${n} · ${e ? `PANEL DE CAJA` : `PANEL DE ${t.toUpperCase()}`}`;
}
function g_(e) {
  if (e.esMadre) {
    let t = e.floatUi.balance;
    return {
      rotulo: `FLOAT`,
      valor:
        t === null
          ? `sin datos`
          : `ARS ${t.toLocaleString(`es-AR`, {
              minimumFractionDigits: 2,
            })}`,
      tono:
        t === null
          ? `gris`
          : e.floatUi.critico
            ? `rojo`
            : e.floatUi.bajo || e.floatUi.noAlcanza
              ? `ambar`
              : `verde`,
    };
  }
  return {
    rotulo: `FICHAS`,
    valor: e.miCupo?.texto ?? `sin datos`,
    tono: e.miCupo?.enRojo ? `rojo` : e.miCupo?.enCero ? `ambar` : `verde`,
  };
}
let __, v_, y_;
function b_(e) {
  return e ? `El sitio está cerrado · reabrir` : `Cerrar el sitio`;
}
function x_(e) {
  return e
    ? `¿Reabrir el sitio para los jugadores?`
    : `¿Cerrar el sitio? Los jugadores van a ver "volvemos enseguida". Este panel sigue funcionando.`;
}
let S_, PanelContext;
function usePanelContext() {
  let e = (0, React.useContext)(PanelContext);
  if (!e)
    throw Error(
      `useChasisV4: esta pantalla tiene que dibujarse adentro de CajeroPanelV4`,
    );
  return e;
}
let T_;
function E_() {
  return (0, JSXRuntime.jsx)(`img`, {
    className: `logo`,
    src: `./rushybet/rushybet-logo.webp`,
    alt: `RushyBet`,
    width: 327,
    height: 74,
  });
}
function D_({ quien: e, rango: t }) {
  return (0, JSXRuntime.jsxs)(`span`, {
    className: `hdr-quien`,
    children: [
      (0, JSXRuntime.jsx)(`b`, {
        children: e,
      }),
      (0, JSXRuntime.jsx)(`em`, {
        children: t,
      }),
    ],
  });
}
function O_({ clase: e, f: t }) {
  return (0, JSXRuntime.jsxs)(e === `hdr-float` ? `span` : `div`, {
    className: e,
    children: [
      (0, JSXRuntime.jsx)(`i`, {
        className: `punto`,
        style: {
          "--c": T_[t.tono],
        },
      }),
      (0, JSXRuntime.jsx)(`span`, {
        className: `hdr-float-rot`,
        children: t.rotulo,
      }),
      (0, JSXRuntime.jsx)(`b`, {
        children: t.valor,
      }),
    ],
  });
}
function k_({ quien: e, rango: t, float: n }) {
  return (0, JSXRuntime.jsxs)(`header`, {
    className: `hdr`,
    children: [
      (0, JSXRuntime.jsx)(`span`, {
        className: `hdr-iso`,
        children: (0, JSXRuntime.jsx)(cg, {
          w: 20,
          h: 17,
          color: `var(--naranja)`,
        }),
      }),
      (0, JSXRuntime.jsxs)(`span`, {
        className: `hdr-txt`,
        children: [
          (0, JSXRuntime.jsx)(E_, {}),
          (0, JSXRuntime.jsx)(D_, {
            quien: e,
            rango: t,
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(O_, {
        clase: `hdr-float`,
        f: n,
      }),
    ],
  });
}
function A_({ ceja: e, titulo: t, bajada: n }) {
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `cab-pantalla entra`,
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `ceja`,
        children: [
          (0, JSXRuntime.jsx)(`i`, {}),
          (0, JSXRuntime.jsx)(`span`, {
            children: e,
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(`h1`, {
        children: t,
      }),
      n
        ? (0, JSXRuntime.jsx)(`p`, {
            className: `bajada`,
            children: n,
          })
        : null,
    ],
  });
}
let j_;
function M_({ c: e }) {
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      e.sitio
        ? (0, JSXRuntime.jsxs)(`form`, {
            action: e.sitio.accion,
            onSubmit: e.sitio.alEnviar,
            children: [
              (0, JSXRuntime.jsx)(`input`, {
                type: `hidden`,
                name: `on`,
                value: e.sitio.cerrado ? `0` : `1`,
              }),
              (0, JSXRuntime.jsxs)(`button`, {
                type: `submit`,
                className: `lat-item ambar`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `lat-ic`,
                    children: (0, JSXRuntime.jsx)(Icon, {
                      nombre: `mantenimiento`,
                      tam: 16,
                    }),
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `lat-label`,
                    children: b_(e.sitio.cerrado),
                  }),
                ],
              }),
            ],
          })
        : null,
      (0, JSXRuntime.jsxs)(`a`, {
        className: `lat-item`,
        href: `/admin/security`,
        onClick: e.alTocarSeguridad,
        style: j_,
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            className: `lat-ic`,
            children: (0, JSXRuntime.jsx)(Icon, {
              nombre: `candado`,
              tam: 16,
            }),
          }),
          (0, JSXRuntime.jsx)(`span`, {
            className: `lat-label`,
            children: y_,
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(`button`, {
        type: `button`,
        className: `lat-item rojo`,
        disabled: e.saliendo,
        onClick: e.salir,
        style: e.saliendo
          ? {
              opacity: 0.5,
            }
          : void 0,
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            className: `lat-ic`,
            children: (0, JSXRuntime.jsx)(Icon, {
              nombre: `salir`,
              tam: 16,
            }),
          }),
          (0, JSXRuntime.jsx)(`span`, {
            className: `lat-label`,
            children: e.saliendo ? __ : v_,
          }),
        ],
      }),
    ],
  });
}
function N_({ c: e }) {
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      e.sitio
        ? (0, JSXRuntime.jsxs)(`form`, {
            action: e.sitio.accion,
            onSubmit: e.sitio.alEnviar,
            children: [
              (0, JSXRuntime.jsx)(`input`, {
                type: `hidden`,
                name: `on`,
                value: e.sitio.cerrado ? `0` : `1`,
              }),
              (0, JSXRuntime.jsxs)(`button`, {
                type: `submit`,
                className: `mas-fila ambar`,
                children: [
                  (0, JSXRuntime.jsx)(Icon, {
                    nombre: `mantenimiento`,
                    tam: 18,
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    children: b_(e.sitio.cerrado),
                  }),
                ],
              }),
            ],
          })
        : null,
      (0, JSXRuntime.jsxs)(`a`, {
        className: `mas-fila gris`,
        href: `/admin/security`,
        onClick: e.alTocarSeguridad,
        style: j_,
        children: [
          (0, JSXRuntime.jsx)(Icon, {
            nombre: `candado`,
            tam: 18,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            children: y_,
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(`button`, {
        type: `button`,
        className: `mas-fila rojo`,
        disabled: e.saliendo,
        onClick: e.salir,
        style: e.saliendo
          ? {
              opacity: 0.5,
            }
          : void 0,
        children: [
          (0, JSXRuntime.jsx)(Icon, {
            nombre: `salir`,
            tam: 18,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            children: e.saliendo ? __ : v_,
          }),
        ],
      }),
    ],
  });
}
function P_({ slots: e, claveActiva: t }) {
  let n = (0, React.useRef)(null),
    r = (0, React.useRef)(null);
  return (
    Gh(n, r, t),
    (0, JSXRuntime.jsxs)(`nav`, {
      ref: n,
      className: `nav fx-con-pastilla`,
      "aria-label": `Secciones`,
      children: [
        (0, JSXRuntime.jsx)(`i`, {
          ref: r,
          className: `fx-pastilla`,
          "aria-hidden": `true`,
        }),
        e.map((e) =>
          (0, JSXRuntime.jsxs)(
            `button`,
            {
              type: `button`,
              className: classNames(
                `nav-item`,
                e.on && `on`,
                e.centro && `centro`,
                !e.centro && e.badge > 0 && !e.on && `late`,
              ),
              "aria-current": e.actual ? `page` : void 0,
              "aria-label": e.badge > 0 ? `${e.label} (${e.badge})` : e.label,
              onClick: e.onClick,
              children: [
                (0, JSXRuntime.jsxs)(`span`, {
                  className: `nav-ic`,
                  children: [
                    (0, JSXRuntime.jsx)(Icon, {
                      nombre: e.icono,
                      tam: e.centro ? 22 : 20,
                      trazo: e.centro ? 2 : 1.8,
                    }),
                    e.centro
                      ? null
                      : (0, JSXRuntime.jsx)(Eg, {
                          n: e.badge,
                          chico: !0,
                        }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`span`, {
                  className: `nav-label`,
                  children: e.label,
                }),
              ],
            },
            e.clave,
          ),
        ),
      ],
    })
  );
}
function F_({ items: e, cuenta: t, onCerrar: n }) {
  return (0, JSXRuntime.jsxs)(Yg, {
    onCerrar: n,
    clase: `mas-fondo`,
    claseHoja: `mas`,
    etiqueta: `Más secciones`,
    children: [
      e.map((e) =>
        (0, JSXRuntime.jsxs)(
          `button`,
          {
            type: `button`,
            className: classNames(`mas-fila`, e.on && `on`),
            "aria-current": e.on ? `page` : void 0,
            onClick: e.onClick,
            children: [
              (0, JSXRuntime.jsx)(Icon, {
                nombre: e.id,
                tam: 18,
              }),
              (0, JSXRuntime.jsx)(`span`, {
                children: e.label,
              }),
              (0, JSXRuntime.jsx)(Eg, {
                n: e.badge,
              }),
            ],
          },
          e.id,
        ),
      ),
      (0, JSXRuntime.jsx)(`span`, {
        className: `mas-sep`,
      }),
      (0, JSXRuntime.jsx)(N_, {
        c: t,
      }),
    ],
  });
}
function I_({
  quien: e,
  rango: t,
  float: n,
  items: r,
  claveOn: i,
  seccion: a,
  onCargar: o,
  cuenta: s,
}) {
  let c = (0, React.useRef)(null);
  return (
    tg(
      c,
      i,
      a,
      r.filter((e) => e.sub).map((e) => e.label),
    ),
    (0, JSXRuntime.jsxs)(`aside`, {
      className: `lateral`,
      "aria-label": `Menú`,
      children: [
        (0, JSXRuntime.jsxs)(`div`, {
          className: `lat-marca`,
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `hdr-iso`,
              children: (0, JSXRuntime.jsx)(cg, {
                w: 20,
                h: 17,
                color: `var(--naranja)`,
              }),
            }),
            (0, JSXRuntime.jsxs)(`span`, {
              className: `hdr-txt`,
              children: [
                (0, JSXRuntime.jsx)(E_, {}),
                (0, JSXRuntime.jsx)(D_, {
                  quien: e,
                  rango: t,
                }),
              ],
            }),
          ],
        }),
        (0, JSXRuntime.jsx)(O_, {
          clase: `lat-float`,
          f: n,
        }),
        (0, JSXRuntime.jsx)(Button, {
          tono: `naranja`,
          ancho: !0,
          icono: `cargar`,
          clase: `lat-cargar`,
          onClick: o,
          children: `Cargar / Descargar`,
        }),
        (0, JSXRuntime.jsx)(`nav`, {
          ref: c,
          className: `lat-nav`,
          children: r.map((e) =>
            (0, JSXRuntime.jsxs)(
              `button`,
              {
                type: `button`,
                className: classNames(
                  `lat-item`,
                  e.sub && `sub`,
                  e.on && `on`,
                  e.padre && `padre`,
                ),
                "aria-current": e.on ? `page` : void 0,
                onClick: e.onClick,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `lat-ic`,
                    children: (0, JSXRuntime.jsx)(Icon, {
                      nombre: e.icono,
                      tam: e.sub ? 15 : 17,
                    }),
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `lat-label`,
                    children: e.label,
                  }),
                  (0, JSXRuntime.jsx)(Eg, {
                    n: e.badge,
                  }),
                  e.flecha
                    ? (0, JSXRuntime.jsx)(`span`, {
                        className: `lat-flecha`,
                        children: (0, JSXRuntime.jsx)(Icon, {
                          nombre: `chevron`,
                          tam: 13,
                          trazo: 2,
                        }),
                      })
                    : null,
                ],
              },
              e.clave,
            ),
          ),
        }),
        (0, JSXRuntime.jsx)(`div`, {
          className: `lat-pie`,
          children: (0, JSXRuntime.jsx)(M_, {
            c: s,
          }),
        }),
      ],
    })
  );
}
function L_({ opciones: e, activa: t, onElegir: n }) {
  return (0, JSXRuntime.jsx)(Og, {
    opciones: e.map(([e, t, n]) => [
      e,
      (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
        children: [
          t,
          ` `,
          (0, JSXRuntime.jsxs)(`small`, {
            className: `solapa-n`,
            children: [`(`, n, `)`],
          }),
        ],
      }),
    ]),
    activa: t,
    onElegir: n,
    clase: `solapas-paneles entra`,
    etiqueta: `Paneles`,
  });
}
function useNotifications() {
  let [e, t] = (0, React.useState)(null),
    n = (0, React.useRef)(null),
    r = (0, React.useRef)(0),
    i = (0, React.useRef)(null),
    a = (0, React.useCallback)((e, a, o) => {
      let s = n.current;
      ((n.current = o),
        s?.(!1, ``),
        !s && typeof document < `u` && (i.current = document.activeElement),
        (r.current += 1),
        t({
          n: r.current,
          texto: e.texto,
          prompt: a,
          placeholder: e.placeholder ?? ``,
          valor: e.valor ?? ``,
          aceptar: e.aceptar ?? `Aceptar`,
          cancelar: e.cancelar ?? `Cancelar`,
          peligro: e.peligro ?? !1,
        }));
    }, []);
  return {
    pedido: e,
    confirmar: (0, React.useCallback)(
      (e) => new Promise((t) => a(e, !1, (e) => t(e))),
      [a],
    ),
    preguntar: (0, React.useCallback)(
      (e) => new Promise((t) => a(e, !0, (e, n) => t(e ? n : null))),
      [a],
    ),
    responder: (0, React.useCallback)((e, r) => {
      let a = n.current;
      ((n.current = null), t(null));
      let o = i.current;
      ((i.current = null),
        o instanceof HTMLElement &&
          setTimeout(() => {
            o.isConnected &&
              !o.disabled &&
              !o.closest(`[inert]`) &&
              o.focus({
                preventScroll: !0,
              });
          }, 0),
        a?.(e, r));
    }, []),
  };
}
function z_({ pedido: e, onResponder: t }) {
  let n = (0, React.useRef)(null),
    r = (0, React.useRef)(null),
    i = (0, React.useRef)(null),
    [a, o] = (0, React.useState)(e.valor),
    s = (0, React.useId)();
  return (
    Yh(n, `dialogo`),
    useBodyScrollLock(!0),
    (0, React.useEffect)(() => {
      let e = (e) => {
        e.key === `Escape` && (e.stopPropagation(), t(!1, ``));
      };
      return (
        window.addEventListener(`keydown`, e, !0),
        () => window.removeEventListener(`keydown`, e, !0)
      );
    }, [t]),
    (0, React.useEffect)(() => {
      (r.current ?? i.current)?.focus({
        preventScroll: !0,
      });
    }, []),
    (0, React.useEffect)(() => {
      let e = n.current,
        t = e?.parentElement;
      if (!e || !t) return;
      let r = [];
      for (let n of Array.from(t.children))
        n === e ||
          n.contains(e) ||
          n.hasAttribute(`inert`) ||
          (n.setAttribute(`inert`, ``), r.push(n));
      return () => {
        for (let e of r) e.removeAttribute(`inert`);
      };
    }, []),
    (0, JSXRuntime.jsx)(Portal, {
      children: (0, JSXRuntime.jsx)(`div`, {
        ref: n,
        className: `dlg-fondo`,
        role: `presentation`,
        children: (0, JSXRuntime.jsxs)(`div`, {
          className: `dlg`,
          role: `alertdialog`,
          "aria-modal": `true`,
          "aria-labelledby": s,
          children: [
            (0, JSXRuntime.jsx)(`p`, {
              className: `dlg-texto`,
              id: s,
              children: e.texto,
            }),
            e.prompt
              ? (0, JSXRuntime.jsx)(`label`, {
                  className: `campo`,
                  children: (0, JSXRuntime.jsx)(`input`, {
                    ref: r,
                    type: `text`,
                    placeholder: e.placeholder,
                    value: a,
                    onChange: (e) => o(e.target.value),
                    onKeyDown: (e) => {
                      e.key === `Enter` && (e.preventDefault(), t(!0, a));
                    },
                    autoComplete: `off`,
                    "aria-label": e.texto,
                  }),
                })
              : null,
            (0, JSXRuntime.jsxs)(`div`, {
              className: `dlg-botones`,
              children: [
                (0, JSXRuntime.jsx)(Button, {
                  ref: i,
                  tono: `secundario`,
                  onClick: () => t(!1, ``),
                  children: e.cancelar,
                }),
                (0, JSXRuntime.jsx)(Button, {
                  tono: e.peligro ? `rojo` : `naranja`,
                  onClick: () => t(!0, a),
                  children: e.aceptar,
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
function B_({ aviso: e, onCerrar: t }) {
  let n = (0, React.useRef)(null),
    r = `${+!!e.ok}|${e.texto}`;
  return (
    Kh(n, r),
    (0, React.useEffect)(() => {
      let e = setTimeout(t, 8e3);
      return () => clearTimeout(e);
    }, [r, t]),
    (0, JSXRuntime.jsx)(Portal, {
      children: (0, JSXRuntime.jsxs)(`div`, {
        ref: n,
        className: classNames(`flotante`, e.ok ? `ok` : `mal`),
        role: e.ok ? `status` : `alert`,
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            children: e.texto,
          }),
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            className: `flotante-x`,
            onClick: () => t(),
            "aria-label": `Cerrar el aviso`,
            children: (0, JSXRuntime.jsx)(Icon, {
              nombre: `cruz`,
              tam: 16,
              trazo: 2,
            }),
          }),
        ],
      }),
    })
  );
}
function V_({ texto: e, clave: t }) {
  let n = (0, React.useRef)(null);
  return (
    Kh(n, t ?? e),
    (0, JSXRuntime.jsx)(Portal, {
      children: (0, JSXRuntime.jsx)(`div`, {
        ref: n,
        className: `toast`,
        role: `status`,
        children: e,
      }),
    })
  );
}
function H_() {
  return (0, JSXRuntime.jsx)(Portal, {
    children: (0, JSXRuntime.jsx)(`div`, {
      className: `v4-version`,
      style: {
        position: `fixed`,
        left: `-50vw`,
        width: `200vw`,
        bottom: `calc(var(--nav-alto) - 4px)`,
        height: 0,
        zIndex: 90,
        transform: `translateX(0)`,
      },
      children: (0, JSXRuntime.jsx)(Hm, {}),
    }),
  });
}
function initializeNavigation() {
  a_ = {
    inicio: `Inicio`,
    soporte: `Soporte`,
    paneles: `Paneles`,
    pendientes: `Pendientes`,
    movimientos: `Movimientos`,
    balance: `Plata`,
    alertas: `Alertas`,
    premios: `Premios`,
    flyers: `Flyers`,
    ajustes: `Ajustes`,
  };
  o_ = {
    socios: `Socios`,
    equipo: `Equipo`,
    jugadores: `Jugadores`,
  };
  s_ = [
    [`movs`, `Movimientos`, `movimientos`],
    [`logs`, `Logs`, `actividad`],
    [`seguridad`, `Seguridad`, `seguridad`],
  ];
  l_ = [`inicio`, `paneles`, `pendientes`];
  f_ = {
    inicio: {
      titulo: `Inicio`,
      bajada: `Lo que pasó hoy y lo que te falta hacer.`,
    },
    paneles: {
      titulo: `Paneles`,
      bajada: `Tus socios, tu equipo y tus jugadores.`,
    },
    pendientes: {
      titulo: `Pendientes`,
      bajada: `Pedidos de jugadores esperando que los resuelvas.`,
    },
    movimientos: {
      titulo: `Movimientos`,
      bajada: `Todo lo que se movió, quién lo hizo y cuándo.`,
    },
    balance: {
      titulo: `Plata`,
      bajada: `Toda la plata en un solo lugar: lo que hay ahora, lo que se movió, la ganancia y lo que está frenado. Cada número dice qué es.`,
    },
    alertas: {
      titulo: `Alertas`,
      bajada: `Cuentas que se ven juntas. Es una lupa, no una alarma.`,
    },
    premios: {
      titulo: `Premios`,
      bajada: `Premios frenados por el tope, esperando que los revises.`,
    },
    soporte: {
      titulo: `Soporte`,
      bajada: `Los jugadores que escribieron por el chat del sitio. Te ven como "Soporte", nunca tu nombre.`,
    },
    flyers: {
      titulo: `Flyers`,
      bajada: `El material para mandar por WhatsApp. Ves las carpetas que te habilitaron.`,
    },
    ajustes: {
      titulo: `Ajustes`,
      bajada: `Lo que se configura una vez y hay que poder mirar: el retorno de los juegos, lo que quedó trabado y cuánto cobra cada uno.`,
    },
  };
  p_ = {
    socios: `Los socios que te venden jugadores: cada uno con su panel, su equipo y sus fichas. Lo que le cargues sale de tu caja.`,
    equipo: `Quién entra a cada panel y qué puede hacer cada uno. Cada cambio de acá te llega al celular, incluso los que hacés vos.`,
    jugadores: `Tus jugadores y su saldo. Tocá uno para cargarle o descargarle fichas.`,
  };
  __ = `Saliendo…`;
  v_ = `Cerrar sesión`;
  y_ = `Mi seguridad`;
  S_ = 2600;
  PanelContext = (0, React.createContext)(null);
  T_ = {
    gris: `var(--tx3)`,
    rojo: `var(--rojo)`,
    ambar: `var(--ambar)`,
    verde: `var(--verde)`,
  };
  j_ = {
    textDecoration: `none`,
  };
}
export {
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  m_,
  h_,
  g_,
  x_,
  S_,
  PanelContext,
  usePanelContext,
  k_,
  A_,
  P_,
  F_,
  I_,
  L_,
  useNotifications,
  z_,
  B_,
  V_,
  H_,
  initializeNavigation,
};
