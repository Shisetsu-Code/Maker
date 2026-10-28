/**
 * panel / cash-transactions.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { createDemoRouter } from "./demo-services.js";
import { $p, em, sm } from "./cashier-controls.js";
import {
  classNames,
  rg,
  og,
  Card,
  xg,
  Button,
  wg,
  Dg,
  Og,
  Mg,
  Notice,
  Lg,
  Vg,
  Hg,
} from "./ui-components.js";
import { s_, usePanelContext, B_ } from "./navigation.js";
import { ActivityScreen } from "./activity-screen.js";
import { Xy } from "./dashboard.js";
let sb, cb, lb;
function TransactionHistory({ p: e, tab: t, setTab: n }) {
  let { dialogoAbierto: r } = usePanelContext(),
    [i, a] = (0, React.useState)(`todos`),
    [o, s] = (0, React.useState)(``),
    c = createDemoRouter(),
    [l, u] = (0, React.useTransition)(),
    [d, f] = (0, React.useState)(null);
  function p(e) {
    if (l) return;
    let t = e.username ?? `ese jugador`,
      n = prompt(
        `Anular ${e.kind === `in` ? `la carga` : `el retiro`} de ${e.amount} de ${t}.\n\n¿Por qué? (queda escrito en el historial)`,
        ``,
      );
    if (n === null) return;
    if (n.trim().length < 4) {
      f({
        id: e.id,
        ok: !1,
        text: `No se anuló: falta el motivo.`,
      });
      return;
    }
    let r =
      e.kind === `in`
        ? `Se le van a SACAR ${e.amount}`
        : `Se le van a DEVOLVER ${e.amount}`;
    confirm(
      `${r} a ${t}.\n\nEl movimiento no se borra: queda a la vista, tachado y con el motivo.\n\n¿Seguís?`,
    ) &&
      (f(null),
      u(async () => {
        let t = await sm(e.ref, n.trim()).catch(() => ({
          ok: !1,
          mensaje: `No se pudo anular.`,
        }));
        (f({
          id: e.id,
          ok: t.ok,
          text: t.mensaje,
        }),
          c.refresh());
      }));
  }
  let m = o.trim().toLowerCase(),
    h = e.movements
      .filter((e) => (i === `todos` ? !0 : e.kind === i))
      .filter((e) =>
        m
          ? `${e.username ?? ``} ${e.amount} ${e.operador ?? ``}`
              .toLowerCase()
              .includes(m)
          : !0,
      ),
    g = e.logs
      .filter((e) => (t === `seguridad` ? e.tone !== `ok` : !0))
      .filter((e) =>
        m ? `${e.event} ${e.username ?? ``}`.toLowerCase().includes(m) : !0,
      ),
    _ = h.slice(0, 120),
    v = g.slice(0, 120),
    y = d !== null && t === `movs` && _.some((e) => e.id === d.id),
    b = d
      ? {
          ok: d.ok,
          texto: d.text,
        }
      : null;
  return t === `logs`
    ? (0, JSXRuntime.jsxs)(Card, {
        pad: `no`,
        clase: `movs-tarjeta lg-tarjeta`,
        i: 1,
        children: [
          (0, JSXRuntime.jsx)(`div`, {
            className: `movs-cab`,
            children: (0, JSXRuntime.jsx)(Og, {
              opciones: sb,
              activa: t,
              onElegir: (e) => n(e),
              clase: `movs-solapas`,
              etiqueta: `Historial`,
            }),
          }),
          (0, JSXRuntime.jsx)(ActivityScreen, {
            p: e,
          }),
        ],
      })
    : (0, JSXRuntime.jsxs)(Card, {
        pad: `no`,
        clase: `movs-tarjeta`,
        i: 1,
        children: [
          (0, JSXRuntime.jsx)(`div`, {
            className: `movs-cab`,
            children: (0, JSXRuntime.jsx)(Og, {
              opciones: sb,
              activa: t,
              onElegir: (e) => n(e),
              clase: `movs-solapas`,
              etiqueta: `Historial`,
            }),
          }),
          (0, JSXRuntime.jsxs)(`div`, {
            className: `movs-filtros`,
            children: [
              t === `movs`
                ? (0, JSXRuntime.jsx)(Dg, {
                    opciones: cb,
                    activo: i,
                    onElegir: a,
                    clase: `movs-chips`,
                    etiqueta: `Tipo de movimiento`,
                  })
                : null,
              (0, JSXRuntime.jsx)(Mg, {
                id: `movs-q`,
                placeholder: `Buscar por usuario o monto`,
                valor: o,
                onCambiar: s,
              }),
            ],
          }),
          b && !y
            ? (0, JSXRuntime.jsx)(`div`, {
                className: `movs-franja`,
                children: (0, JSXRuntime.jsx)(Notice, {
                  aviso: b,
                }),
              })
            : null,
          t === `movs`
            ? _.length === 0
              ? (0, JSXRuntime.jsx)(Lg, {
                  clase: `movs-vacio`,
                  children: `Ningún movimiento coincide.`,
                })
              : (0, JSXRuntime.jsx)(Vg, {
                  plana: !0,
                  clase: `movs-lista`,
                  children: _.map((t, n) => {
                    let i = t.kind === `in`,
                      a = y && d?.id === t.id ? b : null;
                    return (0, JSXRuntime.jsx)(
                      Hg,
                      {
                        icono: i ? `sube` : `baja`,
                        iconoColor: i ? `verde` : `ambar`,
                        tituloNode: (0, JSXRuntime.jsx)(xg, {
                          texto: t.amount,
                        }),
                        sub: (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `movs-det`,
                              children: Xy(
                                `${t.esAnulacion ? `Anulación` : t.kind === `in` ? `Carga a` : `Retiro de`} ${t.username ?? `sin jugador`}` +
                                  (t.operador ? ` · por ${t.operador}` : ``) +
                                  (t.saldoDespues
                                    ? ` · quedó en ${t.saldoDespues}`
                                    : ``),
                              ),
                            }),
                            t.anulado && t.motivo
                              ? (0, JSXRuntime.jsxs)(`span`, {
                                  className: `movs-motivo`,
                                  children: [`anulado: `, t.motivo],
                                })
                              : null,
                          ],
                        }),
                        derechaNode: (0, JSXRuntime.jsx)(`span`, {
                          className: `movs-fecha`,
                          children: t.when,
                        }),
                        derechaColor: `gris`,
                        derechaSub:
                          e.isAdmin && t.ref && !t.anulado && !t.esAnulacion
                            ? (0, JSXRuntime.jsx)(Button, {
                                tono: `corte`,
                                chico: !0,
                                clase: `movs-anular`,
                                deshabilitado: l || r,
                                onClick: () => p(t),
                                children: `Anular`,
                              })
                            : void 0,
                        clase: classNames(
                          `movs-fila`,
                          t.anulado && `movs-anulado`,
                        ),
                        i: Math.min(12, n + 3),
                        extra: a
                          ? (0, JSXRuntime.jsx)(`div`, {
                              className: `movs-aviso-fila`,
                              children: (0, JSXRuntime.jsx)(Notice, {
                                aviso: a,
                              }),
                            })
                          : null,
                      },
                      t.id,
                    );
                  }),
                })
            : v.length === 0
              ? (0, JSXRuntime.jsx)(Lg, {
                  clase: `movs-vacio`,
                  children: `Sin actividad en este período.`,
                })
              : (0, JSXRuntime.jsx)(Vg, {
                  plana: !0,
                  clase: `movs-lista`,
                  children: v.map((e, t) => {
                    let n = e.fields.map((e) => `${e.k}: ${e.v}`).join(` · `);
                    return (0, JSXRuntime.jsxs)(
                      `div`,
                      {
                        className: classNames(
                          `fila`,
                          `movs-hecho`,
                          `entra e${Math.min(12, t + 3)}`,
                        ),
                        children: [
                          (0, JSXRuntime.jsx)(`i`, {
                            className: `movs-punto`,
                            style: og(lb[e.tone]),
                            "aria-hidden": `true`,
                          }),
                          (0, JSXRuntime.jsxs)(`span`, {
                            className: `fila-cuerpo`,
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                className: `fila-titulo`,
                                children: (0, JSXRuntime.jsx)(`b`, {
                                  children: e.event,
                                }),
                              }),
                              n
                                ? (0, JSXRuntime.jsx)(`span`, {
                                    className: `fila-sub movs-datos`,
                                    children: Xy(n),
                                  })
                                : null,
                            ],
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            className: `movs-fecha`,
                            children: e.when,
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
function db() {
  let [e, t] = (0, React.useState)(null),
    [n, r] = (0, React.useState)(!1),
    i = (0, React.useCallback)((e, n, i) => {
      (t({
        id: e,
        ok: n,
        text: i,
      }),
        r(!0));
    }, []),
    a = (0, React.useCallback)(() => {
      (t(null), r(!1));
    }, []),
    o = (0, React.useCallback)((t) => (e && e.id === t ? e : null), [e]);
  return (
    (0, React.useEffect)(() => {
      if (!n) return;
      let e = setTimeout(() => r(!1), 12e3);
      return () => clearTimeout(e);
    }, [e, n]),
    {
      de: o,
      decirEn: i,
      limpiar: a,
      flotante: (0, React.useCallback)(
        (t) => (e && e.ok && n && !t(e.id) ? e : null),
        [e, n],
      ),
    }
  );
}
function fb({ lista: e, jugador: t }) {
  if (!e || e.length === 0) return null;
  let n = e.length > 1;
  return (0, JSXRuntime.jsx)(`div`, {
    className: `pend-comps`,
    children: e.map((e, r) => {
      let i = n ? `Comprobante ${r + 1}` : `Ver comprobante`;
      return (0, JSXRuntime.jsxs)(
        `a`,
        {
          className: `btn btn-plano pend-comp`,
          href: globalThis.__demoImg(`comprobante`, e.id),
          target: `_blank`,
          rel: `noopener noreferrer`,
          "aria-label": `${i} de ${t}${e.pdf ? ` (PDF)` : ``}, se abre en otra pestaña`,
          children: [
            e.pdf
              ? (0, JSXRuntime.jsx)(`span`, {
                  className: `pend-comp-pdf`,
                  "aria-hidden": `true`,
                  children: `PDF`,
                })
              : (0, JSXRuntime.jsx)(`img`, {
                  className: `pend-comp-mini`,
                  src: globalThis.__demoImg(`comprobante`, e.id),
                  alt: ``,
                  width: 30,
                  height: 30,
                  loading: `lazy`,
                  decoding: `async`,
                }),
            (0, JSXRuntime.jsx)(`span`, {
              children: i,
            }),
          ],
        },
        e.id,
      );
    }),
  });
}
function PendingRequests({ p: e, caja: t }) {
  let n = db(),
    r = n.flotante((t) => e.firmas.some((e) => e.id === t)),
    i = e.firmas.length > 0,
    a = e.requests.length > 0,
    o = i ? 2 : 1;
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      r &&
        (0, JSXRuntime.jsx)(B_, {
          aviso: {
            ok: r.ok,
            texto: r.text,
          },
          onCerrar: n.limpiar,
        }),
      i &&
        (0, JSXRuntime.jsx)(mb, {
          firmas: e.firmas,
          fila: n,
        }),
      !a &&
        !i &&
        (0, JSXRuntime.jsx)(Card, {
          i: 1,
          clase: `pend-vacio-tarjeta`,
          children: (0, JSXRuntime.jsxs)(`div`, {
            className: `pend-vacio`,
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                className: `rotulo`,
                children: `NADIE ESPERANDO`,
              }),
              (0, JSXRuntime.jsx)(`p`, {
                children: `No hay ningún pedido sin resolver. Cuando un jugador pida una carga o un retiro, aparece acá.`,
              }),
            ],
          }),
        }),
      a &&
        (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
          children: [
            (0, JSXRuntime.jsxs)(`div`, {
              className: classNames(`pend-franja`, rg(o)),
              children: [
                (0, JSXRuntime.jsx)(`i`, {
                  className: `pend-punto`,
                  "aria-hidden": `true`,
                }),
                (0, JSXRuntime.jsx)(`span`, {
                  children: `El jugador está esperando: mientras el pedido siga acá, no ve las fichas en su cuenta.`,
                }),
              ],
            }),
            (0, JSXRuntime.jsx)(`div`, {
              className: `pend-lista`,
              role: `list`,
              children: e.requests.map((e, n) =>
                (0, JSXRuntime.jsx)(
                  hb,
                  {
                    r: e,
                    i: o + 1 + n,
                    caja: t,
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function mb({ firmas: e, fila: t }) {
  let n = createDemoRouter(),
    [r, i] = (0, React.useTransition)();
  function a(e, a) {
    if (r) return;
    let o = a
      ? `Firmar el retiro de ${e.amount} de ${e.username}.\n\nCon tu firma la plata SALE. ¿Seguís?`
      : `Rechazar el retiro de ${e.amount} de ${e.username}.\n\nNo se paga nada; el pedido del jugador queda abierto para que el cajero lo resuelva. ¿Seguís?`;
    confirm(o) &&
      i(async () => {
        t.limpiar();
        let r = new FormData();
        r.set(`id`, e.id);
        let i = await (a ? $p : em)(r).catch(() => ({
          ok: !1,
          motivo: a
            ? `No se pudo firmar. Probá de nuevo.`
            : `No se pudo rechazar.`,
        }));
        (t.decirEn(
          e.id,
          i.ok,
          i.ok
            ? a
              ? `Firmado: se pagó ${e.amount} a ${e.username}. (demo)`
              : `Rechazado. No se movió plata. (demo)`
            : i.motivo,
        ),
          n.refresh());
      });
  }
  return (0, JSXRuntime.jsxs)(Card, {
    pad: `no`,
    clase: `pend-firmas`,
    i: 1,
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `pend-firmas-cab`,
        children: [
          (0, JSXRuntime.jsx)(`i`, {
            className: `pend-punto-rojo`,
            "aria-hidden": `true`,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            className: `pend-firmas-rot`,
            children: `ESPERAN TU FIRMA`,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            className: `pend-firmas-txt`,
            children: `Retiros grandes que ya aprobó un cajero. Sin la segunda firma no se paga nada.`,
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(`div`, {
        className: `pend-firmas-lista`,
        children: e.map((e) => {
          let n = t.de(e.id);
          return (0, JSXRuntime.jsxs)(
            `div`,
            {
              className: `pend-firma`,
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  className: `pend-firma-txt`,
                  children: [
                    (0, JSXRuntime.jsxs)(`b`, {
                      children: [`Retiro de `, e.username],
                    }),
                    (0, JSXRuntime.jsxs)(`span`, {
                      children: [`lo mandó `, e.pedidoPor, ` · `, e.when],
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`div`, {
                  className: `pend-firma-monto`,
                  children: (0, JSXRuntime.jsx)(xg, {
                    texto: e.amount,
                  }),
                }),
                (0, JSXRuntime.jsxs)(wg, {
                  clase: `pend-firma-botones`,
                  children: [
                    (0, JSXRuntime.jsx)(Button, {
                      tono: `naranja`,
                      clase: `pend-firmar`,
                      deshabilitado: r,
                      onClick: () => a(e, !0),
                      children: `Firmar y pagar`,
                    }),
                    (0, JSXRuntime.jsx)(Button, {
                      tono: `secundario`,
                      deshabilitado: r,
                      onClick: () => a(e, !1),
                      children: `Rechazar`,
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(Notice, {
                  aviso: n
                    ? {
                        ok: n.ok,
                        texto: n.text,
                      }
                    : null,
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
function hb({ r: e, i: t, caja: n }) {
  let r = e.kind === `load`,
    i = !r && !e.alcanza;
  return (0, JSXRuntime.jsxs)(Card, {
    clase: `pend-pedido`,
    i: t,
    role: `listitem`,
    children: [
      (0, JSXRuntime.jsx)(`span`, {
        className: `pend-ic`,
        style: og(r ? `verde` : `ambar`),
        "aria-hidden": `true`,
        children: r ? `▲` : `▼`,
      }),
      (0, JSXRuntime.jsxs)(`b`, {
        className: `pend-titulo`,
        children: [`Pedido de `, r ? `carga` : `retiro`, ` · `, e.username],
      }),
      (0, JSXRuntime.jsx)(`span`, {
        className: `pend-monto`,
        children: (0, JSXRuntime.jsx)(xg, {
          texto: e.amount,
        }),
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `pend-txt`,
        children: [
          (0, JSXRuntime.jsxs)(`span`, {
            className: `pend-nota`,
            children: [
              e.note ? e.note : `sin nota`,
              e.saldo
                ? (0, JSXRuntime.jsxs)(`span`, {
                    className: `pend-tiene`,
                    children: [` · tiene `, e.saldo],
                  })
                : null,
            ],
          }),
          (i || e.frozen) &&
            (0, JSXRuntime.jsx)(`span`, {
              className: `pend-freno`,
              children: e.frozen
                ? `La plata de esta cuenta está bloqueada: no se le puede mover nada.`
                : `Pide más de lo que le quedó${e.saldo ? ` (tiene ${e.saldo})` : ``}. No le transfieras el total.`,
            }),
          (0, JSXRuntime.jsx)(fb, {
            lista: e.comprobantes,
            jugador: e.username,
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(`span`, {
        className: `pend-hora`,
        children: e.when,
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `pend-botones`,
        children: [
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            className: `btn btn-pend-suave pend-resolver`,
            onClick: () => n.tomarPedido(e),
            disabled: n.pendiente,
            children: (0, JSXRuntime.jsx)(`span`, {
              children: `Resolver`,
            }),
          }),
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            className: `btn btn-pend-peligro pend-descartar`,
            onClick: () => n.descartarPedido(e, (e) => window.confirm(e)),
            disabled: n.pendiente,
            children: (0, JSXRuntime.jsx)(`span`, {
              children: `Descartar`,
            }),
          }),
        ],
      }),
    ],
  });
}
function initializeCashTransactions() {
  sb = s_.map(([e, t]) => [e, t]);
  cb = [
    [`todos`, `Todos`],
    [`in`, `Cargas`],
    [`out`, `Retiros`],
  ];
  lb = {
    bad: `rojo`,
    warn: `ambar`,
    ok: `verde`,
  };
}
export { TransactionHistory, db, PendingRequests, initializeCashTransactions };
