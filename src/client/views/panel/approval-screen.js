/**
 * panel / approval-screen.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Declarations only; importing this module does not start the view.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { Qp, tm, im } from "./cashier-controls.js";
import {
  classNames,
  rg,
  Icon,
  Card,
  xg,
  Button,
  Tg,
  Og,
} from "./ui-components.js";
function ApprovalsScreen({ p: e }) {
  let [t, n] = (0, React.useState)(`esperando`),
    [r, i] = (0, React.useState)(null),
    [a, o] = (0, React.useState)(null),
    [s, c] = (0, React.useState)(!1),
    [, l] = (0, React.useTransition)(),
    u = (0, React.useRef)(null),
    d = e.isAdmin && e.esMadre;
  function f(e, t) {
    if (r === e) {
      i(null);
      return;
    }
    if ((i(e), o(null), c(!1), !t)) {
      c(!0);
      return;
    }
    let n = `${e}·${t}`;
    ((u.current = n),
      l(async () => {
        let e = await im(t).catch(() => null);
        u.current === n && (e?.ok ? o(e.jugadas) : (o([]), c(!0)));
      }));
  }
  function p(e) {
    (n(e), i(null));
  }
  let m = e.held,
    h =
      t === `esperando`
        ? m.map((e) => ({
            h: e,
            resuelto: null,
          }))
        : e.resueltos.map((e) => ({
            h: e,
            resuelto: e,
          })),
    g = e.heldTotal.count,
    _ = [
      [
        `esperando`,
        g > 0
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `Para revisar `,
                (0, JSXRuntime.jsxs)(`small`, {
                  className: `prem-n`,
                  children: [`(`, g, `)`],
                }),
              ],
            })
          : `Para revisar`,
      ],
      [`resueltos`, `Ya resueltos`],
    ],
    v = t === `esperando` && m.length > 0,
    y = v ? 3 : 2;
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsx)(Og, {
        opciones: _,
        activa: t,
        onElegir: p,
        clase: `entra e1`,
        etiqueta: `Premios`,
      }),
      v &&
        (0, JSXRuntime.jsx)(`div`, {
          className: rg(2),
          children: (0, JSXRuntime.jsxs)(`div`, {
            className: `prem-franja`,
            children: [
              (0, JSXRuntime.jsx)(`i`, {}),
              (0, JSXRuntime.jsx)(`span`, {
                children: `Son premios que el jugador YA GANÓ y todavía no tiene en su saldo. Mientras estén acá, no los puede usar.`,
              }),
            ],
          }),
        }),
      h.length === 0
        ? (0, JSXRuntime.jsx)(Card, {
            i: 2,
            children: (0, JSXRuntime.jsxs)(`div`, {
              className: `prem-vacio`,
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  className: `rotulo`,
                  children:
                    t === `esperando`
                      ? `NADA RETENIDO`
                      : `NADA RESUELTO TODAVÍA`,
                }),
                (0, JSXRuntime.jsx)(`p`, {
                  children:
                    t === `esperando`
                      ? `Ningún premio esperando que lo revises. Cuando el sistema frene uno, aparece acá con las tiradas para corroborarlo.`
                      : `Los premios que acredites o rechaces quedan acá, con quién lo decidió.`,
                }),
              ],
            }),
          })
        : h.map(({ h: e, resuelto: t }, n) =>
            (0, JSXRuntime.jsxs)(
              Card,
              {
                clase: `prem-tarjeta`,
                i: y + n,
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `prem-id`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `prem-estrella`,
                        children: (0, JSXRuntime.jsx)(Icon, {
                          nombre: `premios`,
                          tam: 16,
                          trazo: 2,
                        }),
                      }),
                      (0, JSXRuntime.jsxs)(`span`, {
                        className: `prem-quien`,
                        children: [
                          (0, JSXRuntime.jsx)(`b`, {
                            children: e.username ?? `sin jugador`,
                          }),
                          (0, JSXRuntime.jsxs)(`span`, {
                            children: [`apuesta n.º `, e.wager, ` · `, e.when],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `prem-monto-fila`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `prem-monto`,
                        children: (0, JSXRuntime.jsx)(xg, {
                          texto: e.amount,
                        }),
                      }),
                      t &&
                        (t.acreditado
                          ? (0, JSXRuntime.jsx)(Tg, {
                              tono: `verde`,
                              children: `ACREDITADO`,
                            })
                          : (0, JSXRuntime.jsx)(Tg, {
                              tono: `rojo`,
                              children: `RECHAZADO`,
                            })),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `prem-franja motivo`,
                    children: [
                      (0, JSXRuntime.jsx)(`i`, {}),
                      (0, JSXRuntime.jsx)(`span`, {
                        children: e.motivo,
                      }),
                    ],
                  }),
                  t?.quien &&
                    (0, JSXRuntime.jsxs)(`p`, {
                      className: `prem-leyenda`,
                      children: [`Lo decidió `, t.quien, `.`],
                    }),
                  !t &&
                    d &&
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `prem-decidir`,
                      children: [
                        (0, JSXRuntime.jsxs)(`form`, {
                          action: Qp,
                          onSubmit: (t) => {
                            confirm(
                              `Acreditar ${e.amount} a ${e.username ?? `este jugador`}.\n\nLa plata entra a su saldo y puede retirarla. No se deshace.\n\n¿Seguís?`,
                            ) || t.preventDefault();
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`input`, {
                              type: `hidden`,
                              name: `id`,
                              value: e.id,
                            }),
                            (0, JSXRuntime.jsx)(Button, {
                              type: `submit`,
                              tono: `naranja`,
                              children: `Acreditar el premio`,
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`form`, {
                          action: tm,
                          onSubmit: (t) => {
                            confirm(
                              `Rechazar ${e.amount} de ${e.username ?? `este jugador`}.\n\nEs un premio que ganó y no va a cobrar. No se deshace.\n\n¿Seguís?`,
                            ) || t.preventDefault();
                          },
                          children: [
                            (0, JSXRuntime.jsx)(Button, {
                              type: `submit`,
                              tono: `secundario`,
                              children: `Rechazar`,
                            }),
                            (0, JSXRuntime.jsx)(`input`, {
                              type: `hidden`,
                              name: `id`,
                              value: e.id,
                            }),
                          ],
                        }),
                      ],
                    }),
                  !t &&
                    !d &&
                    (0, JSXRuntime.jsx)(`p`, {
                      className: `prem-leyenda`,
                      children: `Lo resuelve un admin del casino. Vos lo ves para saber que está frenado.`,
                    }),
                  (0, JSXRuntime.jsx)(`div`, {
                    className: `prem-tiradas-cab`,
                    children: (0, JSXRuntime.jsx)(Button, {
                      tono: `secundario`,
                      chico: !0,
                      clase: `prem-btn-tiradas`,
                      "aria-expanded": r === e.id,
                      onClick: () => f(e.id, e.username),
                      children:
                        r === e.id
                          ? `Ocultar las tiradas`
                          : `Ver las tiradas — corroborá que es real`,
                    }),
                  }),
                  r === e.id &&
                    (0, JSXRuntime.jsx)(Mx, {
                      username: e.username,
                      jugadas: a,
                      fallaron: s,
                    }),
                ],
              },
              e.id,
            ),
          ),
      t === `esperando` &&
        g > m.length &&
        (0, JSXRuntime.jsxs)(`p`, {
          className: `prem-pie`,
          children: [`y `, g - m.length, ` premios más sin mostrar.`],
        }),
    ],
  });
}
function Mx({ username: e, jugadas: t, fallaron: n }) {
  let r;
  return (
    (r = n
      ? (0, JSXRuntime.jsx)(`p`, {
          className: `prem-t-msg mal`,
          children: `No se pudieron traer las tiradas. NO quiere decir que no haya jugado — probá de nuevo en un momento.`,
        })
      : t === null
        ? (0, JSXRuntime.jsx)(`p`, {
            className: `prem-t-msg`,
            children: `Trayendo las tiradas…`,
          })
        : t.length === 0
          ? (0, JSXRuntime.jsx)(`p`, {
              className: `prem-t-msg`,
              children: `Este jugador todavía no tiene jugadas registradas.`,
            })
          : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  className: `prem-tabla`,
                  role: `table`,
                  "aria-label": `Últimas jugadas de ${e ?? `este jugador`}`,
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `prem-t-cab`,
                      role: `row`,
                      children: [
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `prem-t-rot prem-t-juego`,
                          role: `columnheader`,
                          children: `JUEGO`,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `prem-t-rot`,
                          role: `columnheader`,
                          children: `CUÁNDO`,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `prem-t-rot der`,
                          role: `columnheader`,
                          children: `APOSTÓ`,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `prem-t-rot der`,
                          role: `columnheader`,
                          children: `COBRÓ`,
                        }),
                      ],
                    }),
                    t.slice(0, 12).map((e) =>
                      (0, JSXRuntime.jsxs)(
                        `div`,
                        {
                          className: `prem-t-fila`,
                          role: `row`,
                          children: [
                            (0, JSXRuntime.jsxs)(`span`, {
                              className: `prem-t-juego`,
                              role: `cell`,
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  className: `prem-t-juego-txt`,
                                  children: e.juego,
                                }),
                                e.retenido === `esperando`
                                  ? (0, JSXRuntime.jsx)(Tg, {
                                      tono: `ambar`,
                                      children: `ESTE ESTÁ FRENADO`,
                                    })
                                  : e.anulada
                                    ? (0, JSXRuntime.jsx)(`span`, {
                                        className: `prem-t-anulada`,
                                        children: `anulada`,
                                      })
                                    : null,
                              ],
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `prem-t-cuando`,
                              role: `cell`,
                              children: e.cuando,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `prem-t-plata`,
                              role: `cell`,
                              children: (0, JSXRuntime.jsx)(xg, {
                                texto: e.apostado,
                              }),
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              className: classNames(
                                `prem-t-plata`,
                                e.gano ? `gano` : `no`,
                              ),
                              role: `cell`,
                              children: (0, JSXRuntime.jsx)(xg, {
                                texto: e.cobrado,
                              }),
                            }),
                          ],
                        },
                        e.wager,
                      ),
                    ),
                  ],
                }),
                t.length > 12 &&
                  (0, JSXRuntime.jsxs)(`p`, {
                    className: `prem-t-pie`,
                    children: [
                      `y `,
                      t.length - 12,
                      ` jugadas más. Las 12 últimas alcanzan para ver de dónde salió el premio.`,
                    ],
                  }),
              ],
            })),
    (0, JSXRuntime.jsx)(`div`, {
      className: `prem-tiradas`,
      role: `region`,
      "aria-live": `polite`,
      children: r,
    })
  );
}
export { ApprovalsScreen };
