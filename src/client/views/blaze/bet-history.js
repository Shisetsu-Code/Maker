/**
 * blaze / bet-history.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { A } from "./game-catalog.js";
import { renderContent, asArray, resolveStyle } from "./element-adapter.js";
function renderBetHistoryLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `16px`,
        fontFamily: `'Manrope',sans-serif`,
        color: `var(--bb-text,#0A0A0B)`,
      },
      children: [
        `
  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `flex`,
            alignItems: `flex-end`,
            justifyContent: `space-between`,
            gap: `12px`,
            flexWrap: `wrap`,
          },
          children: [
            `
    `,
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                fontWeight: `800`,
                fontSize: `22px`,
              },
              children: `Mis apuestas`,
            }),
            `
    `,
            (0, JSXRuntime.jsxs)(`button`, {
              className: `bb5-0`,
              style: {
                height: `36px`,
                padding: `0 14px`,
                borderRadius: `6px`,
                border: `1px solid var(--bb-border,#D8D8DC)`,
                background: `var(--bb-surface,#EFEFF1)`,
                color: `var(--bb-text,#0A0A0B)`,
                fontFamily: `'Manrope',sans-serif`,
                fontWeight: `700`,
                fontSize: `12px`,
                cursor: `pointer`,
                display: `flex`,
                alignItems: `center`,
                gap: `8px`,
              },
              onClick: e.exportCsv,
              children: [
                (0, JSXRuntime.jsx)(`svg`, {
                  style: {
                    stroke: `var(--bb-acento,#0A0A0B)`,
                  },
                  width: `14`,
                  height: `14`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  strokeWidth: `2`,
                  children: (0, JSXRuntime.jsx)(`path`, {
                    d: `M12 4v12M7 11l5 5 5-5M4 20h16`,
                  }),
                }),
                `Exportar CSV`,
              ],
            }),
            `
  `,
          ],
        }),
        `
  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit,minmax(160px,1fr))`,
            gap: `10px`,
          },
          children: [
            `
    `,
            asArray(e.stats).map((e, t) =>
              (0, JSXRuntime.jsxs)(
                React.Fragment,
                {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        background: `var(--bb-surface,#EFEFF1)`,
                        borderRadius: `8px`,
                        padding: `14px`,
                        display: `flex`,
                        flexDirection: `column`,
                        gap: `4px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            fontSize: `11px`,
                            fontWeight: `800`,
                            color: `var(--bb-text-3,#6B6C73)`,
                            textTransform: `uppercase`,
                            letterSpacing: `0.4px`,
                          },
                          children: renderContent(e?.k),
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`span`, {
                          style: resolveStyle(
                            `font-size:20px;font-weight:800;color:${e?.color ?? ``};font-variant-numeric:tabular-nums;`,
                          ),
                          children: renderContent(e?.v),
                        }),
                        `
      `,
                      ],
                    }),
                    `
    `,
                  ],
                },
                t,
              ),
            ),
            `
  `,
          ],
        }),
        `
  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `flex`,
            gap: `10px`,
            flexWrap: `wrap`,
          },
          children: [
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                display: `flex`,
                gap: `4px`,
                padding: `4px`,
                background: `var(--bb-surface,#EFEFF1)`,
                borderRadius: `8px`,
              },
              children: [
                `
      `,
                asArray(e.periods).map((e, t) =>
                  (0, JSXRuntime.jsxs)(
                    React.Fragment,
                    {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: resolveStyle(
                            `border:none;border-radius:6px;padding:8px 12px;background:${e?.bg ?? ``};color:${e?.fg ?? ``};font-family:'Manrope',sans-serif;font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap;`,
                          ),
                          onClick: e?.select,
                          children: renderContent(e?.label),
                        }),
                        `
      `,
                      ],
                    },
                    t,
                  ),
                ),
                `
    `,
              ],
            }),
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                display: `flex`,
                gap: `4px`,
                padding: `4px`,
                background: `var(--bb-surface,#EFEFF1)`,
                borderRadius: `8px`,
              },
              children: [
                `
      `,
                asArray(e.results).map((e, t) =>
                  (0, JSXRuntime.jsxs)(
                    React.Fragment,
                    {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: resolveStyle(
                            `border:none;border-radius:6px;padding:8px 12px;background:${e?.bg ?? ``};color:${e?.fg ?? ``};font-family:'Manrope',sans-serif;font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap;`,
                          ),
                          onClick: e?.select,
                          children: renderContent(e?.label),
                        }),
                        `
      `,
                      ],
                    },
                    t,
                  ),
                ),
                `
    `,
              ],
            }),
            `
  `,
          ],
        }),
        `
  `,
        e.has
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    background: `var(--bb-surface,#EFEFF1)`,
                    borderRadius: `8px`,
                    overflowX: `auto`,
                  },
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        minWidth: `680px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `grid`,
                            gridTemplateColumns: `0.9fr 1.4fr 1fr 0.9fr 0.8fr 0.9fr`,
                            gap: `12px`,
                            padding: `12px 16px`,
                            fontSize: `12px`,
                            fontWeight: `700`,
                            color: `var(--bb-text-3,#6B6C73)`,
                            borderBottom: `1px solid var(--bb-border,#D8D8DC)`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              children: `ID`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              children: `Juego`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              children: `Fecha`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                textAlign: `right`,
                              },
                              children: `Apuesta`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                textAlign: `right`,
                              },
                              children: `Multiplicador`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                textAlign: `right`,
                              },
                              children: `Pago`,
                            }),
                          ],
                        }),
                        `
        `,
                        asArray(e.rows).map((e, t) =>
                          (0, JSXRuntime.jsxs)(
                            React.Fragment,
                            {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  className: `bb5-1`,
                                  style: {
                                    display: `grid`,
                                    gridTemplateColumns: `0.9fr 1.4fr 1fr 0.9fr 0.8fr 0.9fr`,
                                    gap: `12px`,
                                    padding: `11px 16px`,
                                    fontSize: `13px`,
                                    fontWeight: `600`,
                                    borderBottom: `1px solid var(--bb-surface-2,#E5E5E8)`,
                                    fontVariantNumeric: `tabular-nums`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e?.open,
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        color: `var(--bb-text-3,#6B6C73)`,
                                      },
                                      children: renderContent(e?.id),
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        whiteSpace: `nowrap`,
                                        overflow: `hidden`,
                                        textOverflow: `ellipsis`,
                                      },
                                      children: renderContent(e?.game),
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        color: `var(--bb-text-3,#6B6C73)`,
                                      },
                                      children: renderContent(e?.date),
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        textAlign: `right`,
                                      },
                                      children: [
                                        `$ `,
                                        renderContent(e?.amount),
                                      ],
                                    }),
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        textAlign: `right`,
                                        color: `var(--bb-text-3,#6B6C73)`,
                                      },
                                      children: [renderContent(e?.mult), `×`],
                                    }),
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: resolveStyle(
                                        `text-align:right;color:${e?.payColor ?? ``};`,
                                      ),
                                      children: [
                                        `$ `,
                                        renderContent(e?.payout),
                                      ],
                                    }),
                                    `
          `,
                                  ],
                                }),
                                `
        `,
                              ],
                            },
                            t,
                          ),
                        ),
                        `
      `,
                      ],
                    }),
                    `
    `,
                  ],
                }),
                `
  `,
              ],
            })
          : null,
        `
  `,
        e.none
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    padding: `48px 20px`,
                    background: `var(--bb-surface,#EFEFF1)`,
                    borderRadius: `8px`,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    gap: `10px`,
                    textAlign: `center`,
                  },
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`svg`, {
                      style: {
                        stroke: `var(--bb-border-strong,#C2C2C7)`,
                      },
                      width: `36`,
                      height: `36`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      strokeWidth: `2`,
                      children: [
                        (0, JSXRuntime.jsx)(`rect`, {
                          x: `4`,
                          y: `4`,
                          width: `16`,
                          height: `16`,
                          rx: `2`,
                        }),
                        (0, JSXRuntime.jsx)(`path`, {
                          d: `M8 9h8M8 13h8M8 17h5`,
                        }),
                      ],
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontWeight: `800`,
                        fontSize: `15px`,
                      },
                      children: `No hay apuestas en este periodo`,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontSize: `13px`,
                        color: `var(--bb-text-3,#6B6C73)`,
                        fontWeight: `600`,
                      },
                      children: `Cambia los filtros o empieza a jugar para ver tu historial.`,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`button`, {
                      style: {
                        marginTop: `6px`,
                        height: `40px`,
                        padding: `0 18px`,
                        borderRadius: `6px`,
                        border: `none`,
                        background: `var(--bb-acento,#0A0A0B)`,
                        color: `var(--bb-sobre,#FFFFFF)`,
                        fontFamily: `'Manrope',sans-serif`,
                        fontWeight: `800`,
                        fontSize: `13px`,
                        cursor: `pointer`,
                      },
                      onClick: e.explore,
                      children: `Ir al casino`,
                    }),
                    `
    `,
                  ],
                }),
                `
  `,
              ],
            })
          : null,
      ],
    }),
  });
}
let lt, ut, dt, ft;
var BetHistoryController;
function initializeBetHistory() {
  lt = A.misApuestas;
  ut = (e) =>
    `game-` +
    e
      .toLowerCase()
      .normalize(`NFD`)
      .replace(/[\u0300-\u036f]/g, ``)
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/^-|-$/g, ``);
  dt = (e) =>
    e.toLocaleString(`es-AR`, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: `always`,
    });
  ft = Array.from(
    {
      length: 40,
    },
    (e, t) => {
      let n = ((t * 37) % 100) / 100,
        r =
          n < 0.5
            ? 0
            : n < 0.88
              ? +(1 + ((t * 13) % 20) / 10).toFixed(2)
              : +(5 + ((t * 29) % 90)).toFixed(2),
        i = (0.5 + ((t * 7) % 40)) * 1e3,
        a = Math.floor(t / 3),
        o = new Date(Date.now() - a * 864e5 - t * 18e5);
      return {
        id: `#` + (8841200 - t * 17),
        game: lt[(t * 5) % lt.length],
        amount: i,
        mult: r,
        daysAgo: a,
        date:
          String(o.getDate()).padStart(2, `0`) +
          `/` +
          String(o.getMonth() + 1).padStart(2, `0`) +
          ` ` +
          String(o.getHours()).padStart(2, `0`) +
          `:` +
          String(o.getMinutes()).padStart(2, `0`),
      };
    },
  );
  BetHistoryController = class extends React.Component {
    state = {
      period: `7`,
      result: `all`,
    };
    renderVals() {
      let e = this.state,
        t = this.props.demo === `empty`,
        n = (e) => ({
          bg: e ? `var(--bb-acento,#0A0A0B)` : `transparent`,
          fg: e ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text-3,#6B6C73)`,
        }),
        r = e.period === `1` ? 1 : e.period === `7` ? 7 : 30,
        i = (t ? [] : ft)
          .filter((e) => e.daysAgo < r)
          .filter(
            (t) =>
              e.result === `all` ||
              (e.result === `win`
                ? t.mult * t.amount > t.amount
                : t.mult * t.amount <= t.amount),
          ),
        a = i.reduce((e, t) => e + t.amount, 0),
        o = i.reduce((e, t) => e + t.amount * t.mult, 0),
        s = o - a;
      return {
        stats: [
          {
            k: `Apuestas`,
            v: String(i.length),
            color: `var(--bb-text,#0A0A0B)`,
          },
          {
            k: `Apostado`,
            v: `$ ` + dt(a),
            color: `var(--bb-text,#0A0A0B)`,
          },
          {
            k: `Ganado`,
            v: `$ ` + dt(o),
            color: `var(--bb-text,#0A0A0B)`,
          },
          {
            k: `Resultado neto`,
            v: (s >= 0 ? `+ $ ` : `− $ `) + dt(Math.abs(s)),
            color:
              s >= 0 ? `var(--bb-text,#0A0A0B)` : `var(--bb-text-3,#6B6C73)`,
          },
        ],
        periods: [
          [`1`, `Hoy`],
          [`7`, `7 días`],
          [`30`, `30 días`],
        ].map(([t, r]) => ({
          label: r,
          ...n(e.period === t),
          select: () =>
            this.setState({
              period: t,
            }),
        })),
        results: [
          [`all`, `Todas`],
          [`win`, `Ganadas`],
          [`loss`, `Perdidas`],
        ].map(([t, r]) => ({
          label: r,
          ...n(e.result === t),
          select: () =>
            this.setState({
              result: t,
            }),
        })),
        has: i.length > 0,
        none: i.length === 0,
        rows: i.map((e) => {
          let t = e.amount * e.mult;
          return {
            id: e.id,
            game: e.game,
            date: e.date,
            amount: dt(e.amount),
            mult: dt(e.mult),
            payout: t > 0 ? dt(t) : `-` + dt(e.amount),
            payColor:
              t > e.amount
                ? `var(--bb-text,#0A0A0B)`
                : `var(--bb-text-3,#6B6C73)`,
            open: () =>
              this.props.onOpenBet
                ? this.props.onOpenBet({
                    id: e.id,
                    game: e.game,
                    date: e.date,
                    amount: e.amount,
                    mult: e.mult,
                  })
                : this.props.onOpenGame?.(e.game, ``, ut(e.game)),
          };
        }),
        exportCsv: () => {
          let e = [`ID;Juego;Fecha;Apuesta;Multiplicador;Pago`].concat(
              i.map((e) =>
                [
                  e.id,
                  e.game,
                  e.date,
                  dt(e.amount),
                  dt(e.mult),
                  dt(e.amount * e.mult),
                ].join(`;`),
              ),
            ).join(`
`),
            t = document.createElement(`a`);
          ((t.href = URL.createObjectURL(
            new Blob([e], {
              type: `text/csv`,
            }),
          )),
            (t.download = `mis-apuestas.csv`),
            t.click());
        },
        explore: () => this.props.onNav?.(`home`),
      };
    }
    render() {
      return renderBetHistoryLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { BetHistoryController, initializeBetHistory };
