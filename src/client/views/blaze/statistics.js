/**
 * blaze / statistics.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { A } from "./game-catalog.js";
import { renderContent, asArray, Ie, resolveStyle } from "./element-adapter.js";
function renderStatisticsLayout(e) {
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
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                display: `flex`,
                flexDirection: `column`,
                gap: `4px`,
              },
              children: [
                `
      `,
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    fontWeight: `800`,
                    fontSize: `22px`,
                  },
                  children: `Estadísticas`,
                }),
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    fontSize: `13px`,
                    color: `var(--bb-text-3,#6B6C73)`,
                    fontWeight: `600`,
                  },
                  children: [`Tu actividad en `, renderContent(e.marcaNombre)],
                }),
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
                asArray(e.ranges).map((e, t) =>
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
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit,minmax(150px,1fr))`,
            gap: `10px`,
          },
          children: [
            `
    `,
            asArray(e.kpis).map((e, t) =>
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
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,340px),1fr))`,
            gap: `12px`,
          },
          children: [
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                background: `var(--bb-surface,#EFEFF1)`,
                borderRadius: `8px`,
                padding: `16px`,
                display: `flex`,
                flexDirection: `column`,
                gap: `14px`,
              },
              children: [
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    justifyContent: `space-between`,
                    alignItems: `center`,
                  },
                  children: [
                    (0, JSXRuntime.jsxs)(`span`, {
                      style: {
                        fontWeight: `800`,
                        fontSize: `15px`,
                      },
                      children: [`Apostado por `, renderContent(e.unit)],
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        fontSize: `12px`,
                        fontWeight: `700`,
                        color: `var(--bb-text-3,#6B6C73)`,
                      },
                      children: renderContent(e.peak),
                    }),
                  ],
                }),
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    height: `180px`,
                    display: `flex`,
                    alignItems: `flex-end`,
                    gap: `6px`,
                  },
                  children: [
                    `
        `,
                    asArray(e.bars).map((e, t) =>
                      (0, JSXRuntime.jsxs)(
                        React.Fragment,
                        {
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                flex: `1`,
                                minWidth: `0`,
                                height: `100%`,
                                display: `flex`,
                                flexDirection: `column`,
                                justifyContent: `flex-end`,
                                alignItems: `center`,
                                gap: `6px`,
                              },
                              title: e?.tip,
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `width:100%;max-width:36px;height:${e?.h ?? ``};border-radius:4px 4px 0 0;background:${e?.color ?? ``};transition:height .5s cubic-bezier(.2,.7,.2,1);`,
                                  ),
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontSize: `10px`,
                                    fontWeight: `700`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  children: renderContent(e?.label),
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
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                background: `var(--bb-surface,#EFEFF1)`,
                borderRadius: `8px`,
                padding: `16px`,
                display: `flex`,
                flexDirection: `column`,
                gap: `10px`,
              },
              children: [
                `
      `,
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    fontWeight: `800`,
                    fontSize: `15px`,
                  },
                  children: `Tus juegos más jugados`,
                }),
                `
      `,
                asArray(e.top).map((e, t) =>
                  (0, JSXRuntime.jsxs)(
                    React.Fragment,
                    {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `bb9-0`,
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `12px`,
                            cursor: `pointer`,
                            padding: `4px`,
                            borderRadius: `6px`,
                          },
                          onClick: e?.open,
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `18px`,
                                fontSize: `12px`,
                                fontWeight: `800`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                textAlign: `right`,
                              },
                              children: renderContent(e?.rank),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                flex: `0 0 36px`,
                                height: `48px`,
                                borderRadius: `4px`,
                                overflow: `hidden`,
                                background: `var(--bb-surface-2,#E5E5E8)`,
                              },
                              children: (0, JSXRuntime.jsx)(`image-slot`, {
                                id: e?.slot,
                                shape: `rect`,
                                placeholder: ``,
                                src: Ie(e?.img),
                              }),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                flex: `1`,
                                minWidth: `0`,
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `4px`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    justifyContent: `space-between`,
                                    gap: `8px`,
                                    fontSize: `13px`,
                                    fontWeight: `700`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        whiteSpace: `nowrap`,
                                        overflow: `hidden`,
                                        textOverflow: `ellipsis`,
                                      },
                                      children: renderContent(e?.name),
                                    }),
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        color: `var(--bb-text-3,#6B6C73)`,
                                        whiteSpace: `nowrap`,
                                      },
                                      children: [
                                        renderContent(e?.bets),
                                        ` apuestas`,
                                      ],
                                    }),
                                  ],
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    height: `4px`,
                                    borderRadius: `2px`,
                                    background: `var(--bb-border,#D8D8DC)`,
                                    overflow: `hidden`,
                                  },
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    style: resolveStyle(
                                      `height:100%;width:${e?.pct ?? ``};background:var(--bb-acento,#0A0A0B);`,
                                    ),
                                  }),
                                }),
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
      ],
    }),
  });
}
let Ct, wt, Tt, Et;
var StatisticsController;
function initializeStatistics() {
  Ct = (e) =>
    e.toLocaleString(`es-AR`, {
      maximumFractionDigits: 0,
      useGrouping: `always`,
    });
  wt = (e) =>
    `game-` +
    e
      .toLowerCase()
      .normalize(`NFD`)
      .replace(/[\u0300-\u036f]/g, ``)
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/^-|-$/g, ``);
  Tt = A.top;
  Et = {
    7: {
      unit: `día`,
      labels: [`Mié`, `Jue`, `Vie`, `Sáb`, `Dom`, `Lun`, `Mar`],
      vals: [42, 18, 96, 130, 74, 22, 58],
    },
    30: {
      unit: `semana`,
      labels: [`S1`, `S2`, `S3`, `S4`],
      vals: [310, 420, 280, 505],
    },
    365: {
      unit: `mes`,
      labels: [
        `Oct`,
        `Nov`,
        `Dic`,
        `Ene`,
        `Feb`,
        `Mar`,
        `Abr`,
        `May`,
        `Jun`,
        `Jul`,
        `Ago`,
        `Sep`,
      ],
      vals: [0, 0, 0, 0, 0, 380, 920, 1100, 760, 1340, 1210, 1515],
    },
  };
  StatisticsController = class extends React.Component {
    state = {
      range: `7`,
    };
    renderVals() {
      let e = this.state,
        t = Et[e.range],
        n = Math.max(...t.vals, 1),
        r = t.vals.reduce((e, t) => e + t, 0) * 1e3,
        i = Math.round(r * 0.962),
        a = i - r,
        o = (e) => ({
          bg: e ? `var(--bb-acento,#0A0A0B)` : `transparent`,
          fg: e ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text-3,#6B6C73)`,
        }),
        s = t.vals.indexOf(n);
      return {
        ranges: [
          [`7`, `7 días`],
          [`30`, `30 días`],
          [`365`, `12 meses`],
        ].map(([t, n]) => ({
          label: n,
          ...o(e.range === t),
          select: () =>
            this.setState({
              range: t,
            }),
        })),
        kpis: [
          {
            k: `Apostado`,
            v: `$ ` + Ct(r),
            color: `var(--bb-text,#0A0A0B)`,
          },
          {
            k: `Ganado`,
            v: `$ ` + Ct(i),
            color: `var(--bb-text,#0A0A0B)`,
          },
          {
            k: `Resultado`,
            v: (a >= 0 ? `+ $ ` : `− $ `) + Ct(Math.abs(a)),
            color:
              a >= 0 ? `var(--bb-text,#0A0A0B)` : `var(--bb-text-3,#6B6C73)`,
          },
          {
            k: `Mayor multiplicador`,
            v: `812×`,
            color: `var(--bb-text,#0A0A0B)`,
          },
        ],
        unit: t.unit,
        peak: `Pico: ` + t.labels[s],
        bars: t.vals.map((e, r) => ({
          label: t.labels[r],
          h: Math.max(2, Math.round((e / n) * 150)) + `px`,
          color:
            r === s
              ? `var(--bb-text,#0A0A0B)`
              : `var(--bb-border-strong,#C2C2C7)`,
          tip: `$ ` + Ct(e * 1e3),
        })),
        top: Tt.map(([e, t], n) => ({
          rank: n + 1,
          name: e,
          bets: t,
          slot: wt(e),
          img: A.img(e),
          pct: Math.round((t / Tt[0][1]) * 100) + `%`,
          open: () => this.props.onOpenGame?.(e, ``, wt(e)),
        })),
      };
    }
    render() {
      return renderStatisticsLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { StatisticsController, initializeStatistics };
