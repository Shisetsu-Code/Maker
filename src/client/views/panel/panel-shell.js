/**
 * panel / panel-shell.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import {
  zo,
  createDemoRouter,
  createDemoDatabase,
  Go,
} from "./demo-services.js";
import {
  nm,
  rm,
  Om,
  useCashierControls,
  useCashierBusy,
} from "./cashier-controls.js";
import { bh, xh, Ph, usePanelMotion, MotionBoundary } from "./motion.js";
import { ug, Portal } from "./ui-components.js";
import {
  Zg,
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
} from "./navigation.js";
import { DashboardSummary, DashboardCharts, ob } from "./dashboard.js";
import { TransactionHistory, PendingRequests } from "./cash-transactions.js";
import { PlayersScreen, ex } from "./player-management.js";
import { StaffManagement } from "./staff-management.js";
import { CasinoManagement } from "./casino-management.js";
import { ApprovalsScreen } from "./approval-screen.js";
import { DistributionSettings } from "./settings-screen.js";
import { FlyerLibrary } from "./flyer-library.js";
import { SupportInbox } from "./support-chat.js";
let AC;
function PanelShell(e) {
  let t = createDemoRouter(),
    n = usePanelMotion(),
    { raiz: r, marco: i, main: a, hueco: o, capa: s } = n,
    c = useNotifications(),
    [l, u] = (0, React.useState)(null),
    [d, f] = (0, React.useState)(`inicio`),
    [p, m] = (0, React.useState)(`socios`),
    [h, g] = (0, React.useState)(null),
    [_, v] = (0, React.useState)(`movs`),
    [y, b] = (0, React.useState)(!1),
    [x, S] = (0, React.useState)(!1),
    [C, w] = (0, React.useState)(0),
    [T, E] = (0, React.useState)(null),
    [D, O] = (0, React.useState)(null),
    ee = useCashierControls(e.players, e.requests),
    te = useCashierBusy();
  ((0, React.useEffect)(() => {
    let e = () => {
        document.visibilityState === `visible` && t.refresh();
      },
      n = setInterval(e, 2e4);
    return (
      document.addEventListener(`visibilitychange`, e),
      () => {
        (clearInterval(n), document.removeEventListener(`visibilitychange`, e));
      }
    );
  }, [t]),
    (0, React.useEffect)(() => {
      let e = !0,
        t = () => {
          Om().then((t) => {
            e && w(t);
          });
        };
      t();
      let n = setInterval(t, 25e3);
      return () => {
        ((e = !1), clearInterval(n));
      };
    }, []),
    (0, React.useEffect)(() => {
      if (!T) return;
      let e = setTimeout(() => E(null), T.ms);
      return () => clearTimeout(e);
    }, [T]));
  let k = e_(e),
    A = t_(d, k),
    j = n_(p, k),
    M = i_(k, r_(e, C)),
    N = c_(k, M),
    P = Zg(e.personal, e.capacidades),
    F = (0, React.useRef)(A);
  (0, React.useEffect)(() => {
    F.current !== A &&
      ((F.current = A),
      window.scrollTo({
        top: 0,
        behavior: `instant`,
      }));
  }, [A]);
  let ne = (0, React.useCallback)((e, t = S_) => {
      E((n) => ({
        texto: e,
        ms: t,
        n: (n?.n ?? 0) + 1,
      }));
    }, []),
    I = () =>
      ne(
        `Esperá un segundo: se está creando la cuenta y la contraseña aparece acá.`,
        S_,
      ),
    L = (e) => {
      if (te) {
        I();
        return;
      }
      e();
    },
    R = (e) => {
      (A === `paneles` && e === j) || (g(null), m(e));
    },
    re = (e, t) =>
      L(() => {
        (f(e), t?.solapa && R(t.solapa), t?.sub && v(t.sub), S(!1));
      }),
    ie = () =>
      L(() => {
        (f(`paneles`), R(`jugadores`), S(!1));
      }),
    ae = (e, t) => {
      (g({
        id: e.id,
        nombre: e.nombre,
      }),
        m(t));
    },
    oe = (0, React.useCallback)(() => g(null), []),
    se = (0, React.useCallback)(
      (e, t) =>
        O({
          ok: e,
          texto: t,
        }),
      [],
    ),
    ce = (0, React.useCallback)(() => O(null), []),
    le = async () => {
      if (!y) {
        if (te) {
          I();
          return;
        }
        if (
          await c.confirmar({
            texto: `Vas a cerrar tu sesión en este dispositivo. ¿Seguro?`,
          })
        ) {
          (b(!0), await nm().catch(() => {}));
          try {
            await createDemoDatabase().auth.signOut({
              scope: `local`,
            });
          } catch {}
          (b(!1),
            window.setTimeout(
              () =>
                window.__demoAviso?.(
                  null,
                  `Esto es una demo: la sesión no se cierra.`,
                ),
              260,
            ));
        }
      }
    },
    ue = {
      sitio: k.sitio
        ? {
            cerrado: e.maintenanceOn,
            accion: rm,
            alEnviar: (t) => {
              if (te) {
                (t.preventDefault(), I());
                return;
              }
              confirm(x_(e.maintenanceOn)) || t.preventDefault();
            },
          }
        : null,
      alTocarSeguridad: (e) => {
        te && (e.preventDefault(), I());
      },
      saliendo: y,
      salir: () => void le(),
    },
    de = g_(e),
    fe = m_(A, j),
    pe =
      A === `paneles` &&
      j === `equipo` &&
      k.veEquipo &&
      !e.capacidades.puedeCambiarRol
        ? {
            titulo: fe.titulo,
            bajada: `Los cajeros de tu panel: sumá uno nuevo, sacales o devolveles el acceso y generales una contraseña nueva cuando la pierdan.`,
          }
        : fe,
    me = h_(e.esMadre, e.casaNombre, e.marcaDemo || void 0),
    he = bh(A, x),
    ge = [
      {
        clave: `inicio`,
        label: `Inicio`,
        icono: `inicio`,
        on: he.inicio,
        actual: A === `inicio`,
        badge: 0,
        onClick: () => re(`inicio`),
      },
      {
        clave: `paneles`,
        label: `Paneles`,
        icono: `paneles`,
        on: he.paneles,
        actual: A === `paneles`,
        badge: 0,
        onClick: () => re(`paneles`),
      },
      {
        clave: `cargar`,
        label: `Cargar`,
        icono: `cargar`,
        centro: !0,
        on: !1,
        actual: !1,
        badge: 0,
        onClick: ie,
      },
      {
        clave: `pendientes`,
        label: `Pendientes`,
        icono: `pendientes`,
        on: he.pendientes,
        actual: A === `pendientes`,
        badge: M.pend,
        onClick: () => re(`pendientes`),
      },
      {
        clave: `mas`,
        label: `Más`,
        icono: `mas`,
        on: he.mas,
        actual: !l_.includes(A),
        badge: M.mas,
        onClick: () => S(!0),
      },
    ],
    _e = u_(N).map((e) => ({
      id: e.id,
      label: e.label,
      badge: e.badge,
      on: A === e.id,
      onClick: () => re(e.id),
    })),
    ve = [];
  for (let e of N) {
    let t = e.id === `paneles` || e.id === `movimientos`;
    if (
      (ve.push({
        clave: e.id,
        label: e.label,
        icono: e.id,
        on: !t && A === e.id,
        padre: t && A === e.id,
        flecha: t,
        badge: e.badge,
        onClick: () => re(e.id),
      }),
      e.id === `paneles` && A === `paneles`)
    )
      for (let e of k.solapas)
        ve.push({
          clave: `paneles:${e}`,
          label: o_[e],
          icono: e,
          sub: !0,
          on: e === j,
          badge: 0,
          onClick: () =>
            L(() => {
              (f(`paneles`), R(e));
            }),
        });
    if (e.id === `movimientos` && A === `movimientos`)
      for (let [e, t, n] of s_)
        ve.push({
          clave: `movimientos:${e}`,
          label: t,
          icono: n,
          sub: !0,
          on: e === _,
          badge: 0,
          onClick: () =>
            L(() => {
              (f(`movimientos`), v(e));
            }),
        });
  }
  let ye =
      A === `paneles`
        ? `paneles:${j}`
        : A === `movimientos`
          ? `movimientos:${_}`
          : A,
    be = d_(e),
    xe = k.solapas.map((e) => [e, o_[e], be[e]]);
  return (0, JSXRuntime.jsx)(Ph, {
    value: n,
    children: (0, JSXRuntime.jsx)(ug, {
      value: l,
      children: (0, JSXRuntime.jsx)(PanelContext, {
        value: {
          p: e,
          permisos: k,
          pantalla: A,
          subPaneles: j,
          subMovs: _,
          irA: re,
          irASub: (e) => L(() => R(e)),
          verDe: ae,
          setSubMovs: v,
          filtroCasa: h,
          limpiarFiltro: oe,
          conAltaLibre: L,
          altaEnVuelo: te,
          caja: ee,
          confirmar: c.confirmar,
          preguntar: c.preguntar,
          dialogoAbierto: c.pedido !== null,
          toast: ne,
          flotar: se,
        },
        children: (0, JSXRuntime.jsxs)(`div`, {
          ref: r,
          className: `v4 ${AC.variable}${e.piel === `mrc21` ? ` piel-mrc21` : ``}`,
          "data-estilo": `1`,
          children: [
            (0, JSXRuntime.jsxs)(`div`, {
              ref: i,
              className: `marco animar`,
              inert: c.pedido !== null,
              children: [
                (0, JSXRuntime.jsx)(I_, {
                  quien: e.turno.quien,
                  rango: k.rango,
                  float: de,
                  items: ve,
                  claveOn: ye,
                  seccion: A,
                  onCargar: ie,
                  cuenta: ue,
                }),
                (0, JSXRuntime.jsx)(k_, {
                  quien: e.turno.quien,
                  rango: k.rango,
                  float: de,
                }),
                (0, JSXRuntime.jsx)(`div`, {
                  ref: o,
                  className: `fx-hueco`,
                  "aria-hidden": `true`,
                }),
                (0, JSXRuntime.jsx)(MotionBoundary, {
                  clave: A,
                  indiceNav: xh(A, x),
                  indiceLat: N.findIndex((e) => e.id === A),
                  children: (0, JSXRuntime.jsxs)(`main`, {
                    ref: a,
                    className: `main`,
                    children: [
                      (0, JSXRuntime.jsx)(A_, {
                        ceja: me,
                        titulo: pe.titulo,
                        bajada: pe.bajada,
                      }),
                      A === `inicio` &&
                        (0, JSXRuntime.jsx)(DashboardSummary, {
                          p: e,
                          irA: (e) => re(e),
                        }),
                      A === `balance` &&
                        (0, JSXRuntime.jsx)(DashboardCharts, {
                          p: e,
                        }),
                      A === `alertas` &&
                        (0, JSXRuntime.jsx)(ob, {
                          p: e,
                        }),
                      A === `movimientos` &&
                        (0, JSXRuntime.jsx)(TransactionHistory, {
                          p: e,
                          tab: _,
                          setTab: v,
                        }),
                      A === `paneles` &&
                        (0, JSXRuntime.jsx)(L_, {
                          opciones: xe,
                          activa: j,
                          onElegir: (e) => L(() => R(e)),
                        }),
                      A === `paneles` &&
                        j === `jugadores` &&
                        (0, JSXRuntime.jsx)(PlayersScreen, {
                          p: e,
                          caja: ee,
                          filtroCasa: h,
                          limpiarFiltro: oe,
                        }),
                      A === `paneles` &&
                        j === `socios` &&
                        (0, JSXRuntime.jsx)(CasinoManagement, {
                          casas: e.casas,
                          puedeMandar: k.puedeMandar,
                          siteKey: e.turnstileSiteKey,
                          verDe: (e, t) => ae(e, t),
                        }),
                      A === `paneles` &&
                        j === `equipo` &&
                        (0, JSXRuntime.jsx)(
                          StaffManagement,
                          {
                            personal: P,
                            capacidades: e.capacidades,
                            miRol: e.esDueno
                              ? `root`
                              : e.isAdmin
                                ? `admin`
                                : `operator`,
                            casas: e.casas,
                            siteKey: e.turnstileSiteKey,
                            filtroPanelInicial: h?.nombre ?? ``,
                            limpiarFiltro: () => L(oe),
                            rolesPermitidos: e.rolesPermitidos,
                            casaNombre: e.casaNombre,
                            yoId: e.yoId,
                            esMadre: e.esMadre,
                          },
                          h?.id ?? `todos`,
                        ),
                      A === `pendientes` &&
                        (0, JSXRuntime.jsx)(PendingRequests, {
                          p: e,
                          caja: ee,
                        }),
                      A === `premios` &&
                        (0, JSXRuntime.jsx)(ApprovalsScreen, {
                          p: e,
                        }),
                      A === `flyers` && (0, JSXRuntime.jsx)(FlyerLibrary, {}),
                      A === `soporte` &&
                        (0, JSXRuntime.jsx)(SupportInbox, {
                          quienSoy: e.yoId ?? ``,
                          puedeEliminar: Go({
                            role: e.esDueno
                              ? `root`
                              : e.isAdmin
                                ? `admin`
                                : `operator`,
                            esMadre: e.esMadre,
                            demo: e.demo,
                          }),
                        }),
                      A === `ajustes` &&
                        (0, JSXRuntime.jsx)(DistributionSettings, {
                          p: e,
                        }),
                    ],
                  }),
                }),
                (0, JSXRuntime.jsx)(P_, {
                  slots: ge,
                  claveActiva: xh(A, x),
                }),
              ],
            }),
            (0, JSXRuntime.jsx)(`div`, {
              className: `v4-capas`,
              ref: u,
            }),
            (0, JSXRuntime.jsx)(`div`, {
              ref: s,
              className: `fx-capa`,
              "aria-hidden": `true`,
            }),
            x &&
              (0, JSXRuntime.jsx)(F_, {
                items: _e,
                cuenta: ue,
                onCerrar: () => S(!1),
              }),
            (0, JSXRuntime.jsx)(Portal, {
              children: (0, JSXRuntime.jsx)(ex, {
                caja: ee,
              }),
            }),
            D &&
              (0, JSXRuntime.jsx)(B_, {
                aviso: D,
                onCerrar: ce,
              }),
            T &&
              (0, JSXRuntime.jsx)(
                V_,
                {
                  texto: T.texto,
                  clave: T.n,
                },
                T.n,
              ),
            c.pedido &&
              (0, JSXRuntime.jsx)(
                z_,
                {
                  pedido: c.pedido,
                  onResponder: c.responder,
                },
                c.pedido.n,
              ),
            (0, JSXRuntime.jsx)(H_, {}),
          ],
        }),
      }),
    }),
  });
}
function initializePanelShell() {
  AC = zo({
    subsets: [`latin`],
    variable: `--font-figtree`,
    display: `swap`,
    preload: !1,
  });
}
export { PanelShell, initializePanelShell };
