/**
 * blaze / lobby-layout.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Declarations only; importing this module does not start the view.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import {
  renderContent,
  asArray,
  N,
  Ie,
  resolveStyle,
} from "./element-adapter.js";
import { AuthenticationController } from "./authentication.js";
import { GameSearchController } from "./game-search.js";
import { GamePlayerController } from "./game-player.js";
import { IdentityVerificationController } from "./identity-verification.js";
import { BetHistoryController } from "./bet-history.js";
import { AccountSettingsController } from "./account-settings.js";
import { ProvidersController } from "./providers.js";
import { StatisticsController } from "./statistics.js";
import { HelpCenterController } from "./help-center.js";
import { WalletController } from "./wallet.js";
function renderBlazeLobbyLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: {
        display: `flex`,
        minHeight: `100vh`,
        background: `var(--bb-bg,#F7F7F8)`,
        color: `var(--bb-text,#0A0A0B)`,
        fontFamily: `'Manrope',sans-serif`,
        fontSize: `14px`,
      },
      children: [
        `

  `,
        `
  `,
        e.sidebarFull
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
  `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `position:${e.sbPos ?? ``};inset:0;z-index:40;display:flex;`,
                  ),
                  children: [
                    `
  `,
                    e.drawerOpen
                      ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                          children: (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              position: `absolute`,
                              inset: `0`,
                              background: `rgba(0,0,0,0.6)`,
                            },
                            onClick: e.closeDrawer,
                          }),
                        })
                      : null,
                    `
  `,
                    (0, JSXRuntime.jsxs)(`aside`, {
                      className: `nosb`,
                      style: {
                        width: `220px`,
                        flexShrink: `0`,
                        background: `var(--bb-sidebar,#ECECEF)`,
                        borderRight: `1px solid var(--bb-divider,#E4E4E7)`,
                        display: `grid`,
                        alignContent: `start`,
                        gridTemplateColumns: `minmax(0,1fr)`,
                        position: `sticky`,
                        top: `0`,
                        height: `100vh`,
                        overflowY: `auto`,
                        zIndex: `6`,
                      },
                      children: [
                        `
    `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            height: `60px`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `12px`,
                            padding: `0 18px`,
                            borderBottom: `1px solid var(--bb-divider,#E4E4E7)`,
                          },
                          children: [
                            `
      `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `4px`,
                                cursor: `pointer`,
                                padding: `6px 2px`,
                              },
                              onClick: e.toggleSidebar,
                              children: [
                                `
        `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `16px`,
                                    height: `2px`,
                                    background: `var(--bb-text-3,#6B6C73)`,
                                    display: `block`,
                                  },
                                }),
                                `
        `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `16px`,
                                    height: `2px`,
                                    background: `var(--bb-text-3,#6B6C73)`,
                                    display: `block`,
                                  },
                                }),
                                `
        `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `16px`,
                                    height: `2px`,
                                    background: `var(--bb-text-3,#6B6C73)`,
                                    display: `block`,
                                  },
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
                              },
                              children: [
                                `
        `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    padding: `7px 12px`,
                                    borderRadius: `6px`,
                                    background: `var(--bb-acento,#0A0A0B)`,
                                    color: `var(--bb-sobre,#FFFFFF)`,
                                    fontWeight: `800`,
                                    fontSize: `12px`,
                                  },
                                  children: `CASINO`,
                                }),
                                `
        `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    padding: `7px 12px`,
                                    borderRadius: `6px`,
                                    background: `var(--bb-surface,#EFEFF1)`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                    fontWeight: `800`,
                                    fontSize: `12px`,
                                  },
                                  children: `DEPORTES`,
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
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            padding: `12px 10px`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `2px`,
                            borderBottom: `1px solid var(--bb-divider,#E4E4E7)`,
                          },
                          children: [
                            `
      `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              className: `bb0-0`,
                              style: resolveStyle(
                                `display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:6px;font-weight:700;cursor:pointer;background:${e.act?.fav ?? ``};`,
                              ),
                              onClick: e.go?.fav,
                              children: [
                                (0, JSXRuntime.jsx)(`svg`, {
                                  style: {
                                    stroke: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  width: `16`,
                                  height: `16`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  strokeWidth: `2`,
                                  children: (0, JSXRuntime.jsx)(`path`, {
                                    d: `M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z`,
                                  }),
                                }),
                                `Favoritos`,
                              ],
                            }),
                            `
      `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              className: `bb0-0`,
                              style: resolveStyle(
                                `display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:6px;font-weight:700;cursor:pointer;background:${e.act?.recent ?? ``};`,
                              ),
                              onClick: e.go?.recent,
                              children: [
                                (0, JSXRuntime.jsxs)(`svg`, {
                                  style: {
                                    stroke: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  width: `16`,
                                  height: `16`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  strokeWidth: `2`,
                                  children: [
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      cx: `12`,
                                      cy: `12`,
                                      r: `9`,
                                    }),
                                    (0, JSXRuntime.jsx)(`path`, {
                                      d: `M12 7v5l3 2`,
                                    }),
                                  ],
                                }),
                                `Recientes`,
                              ],
                            }),
                            `
      `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              className: `bb0-0`,
                              style: resolveStyle(
                                `display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:6px;font-weight:700;cursor:pointer;background:${e.act?.mybets ?? ``};`,
                              ),
                              onClick: e.go?.mybets,
                              children: [
                                (0, JSXRuntime.jsxs)(`svg`, {
                                  style: {
                                    stroke: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  width: `16`,
                                  height: `16`,
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
                                `Mis apuestas`,
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
                            padding: `12px 10px`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `2px`,
                            borderBottom: `1px solid var(--bb-divider,#E4E4E7)`,
                          },
                          children: [
                            `
      `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: resolveStyle(
                                `display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:6px;font-weight:700;background:${e.act?.home ?? ``};cursor:pointer;`,
                              ),
                              onClick: e.go?.home,
                              children: [
                                (0, JSXRuntime.jsxs)(`svg`, {
                                  style: {
                                    stroke: `var(--bb-acento,#0A0A0B)`,
                                  },
                                  width: `16`,
                                  height: `16`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  strokeWidth: `2`,
                                  children: [
                                    (0, JSXRuntime.jsx)(`rect`, {
                                      x: `4`,
                                      y: `4`,
                                      width: `16`,
                                      height: `16`,
                                      rx: `3`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      style: {
                                        fill: `var(--bb-acento,#0A0A0B)`,
                                      },
                                      cx: `9`,
                                      cy: `9`,
                                      r: `1.2`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      style: {
                                        fill: `var(--bb-acento,#0A0A0B)`,
                                      },
                                      cx: `15`,
                                      cy: `15`,
                                      r: `1.2`,
                                    }),
                                  ],
                                }),
                                `Casino`,
                              ],
                            }),
                            `
      `,
                            asArray(e.casinoLinks).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
        `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      className: `bb0-1`,
                                      style: resolveStyle(
                                        `display:flex;align-items:center;gap:10px;padding:8px 10px 8px 24px;border-radius:6px;color:${e?.fg ?? ``};background:${e?.bg ?? ``};font-weight:600;font-size:13px;cursor:pointer;`,
                                      ),
                                      onClick: e?.go,
                                      children: [
                                        (0, JSXRuntime.jsx)(`svg`, {
                                          style: {
                                            flexShrink: `0`,
                                            stroke: e?.iconColor,
                                          },
                                          width: `14`,
                                          height: `14`,
                                          viewBox: `0 0 24 24`,
                                          fill: `none`,
                                          stroke: e?.iconColor,
                                          strokeWidth: `2`,
                                          strokeLinecap: `round`,
                                          strokeLinejoin: `round`,
                                          children: (0, JSXRuntime.jsx)(
                                            `path`,
                                            {
                                              d: e?.icon,
                                            },
                                          ),
                                        }),
                                        renderContent(e?.label),
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
                            padding: `12px 10px`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `2px`,
                          },
                          children: [
                            `
      `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              className: `bb0-0`,
                              style: resolveStyle(
                                `display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:6px;font-weight:700;cursor:pointer;background:${e.act?.support ?? ``};`,
                              ),
                              onClick: e.go?.support,
                              children: [
                                (0, JSXRuntime.jsx)(`svg`, {
                                  style: {
                                    stroke: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  width: `16`,
                                  height: `16`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  strokeWidth: `2`,
                                  children: (0, JSXRuntime.jsx)(`path`, {
                                    d: `M4 13a8 8 0 0116 0v4a2 2 0 01-2 2h-1v-6h3M4 13v4a2 2 0 002 2h1v-6H4`,
                                  }),
                                }),
                                `Soporte en vivo`,
                              ],
                            }),
                            `
      `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              className: `bb0-2`,
                              style: resolveStyle(
                                `display:flex;align-items:center;justify-content:space-between;padding:9px 10px;border-radius:6px;font-weight:700;cursor:pointer;background:${e.langBg ?? ``};`,
                              ),
                              onClick: e.toggleLang,
                              children: [
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `12px`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsxs)(`svg`, {
                                      style: {
                                        stroke: `var(--bb-text-3,#6B6C73)`,
                                      },
                                      width: `16`,
                                      height: `16`,
                                      viewBox: `0 0 24 24`,
                                      fill: `none`,
                                      strokeWidth: `2`,
                                      children: [
                                        (0, JSXRuntime.jsx)(`circle`, {
                                          cx: `12`,
                                          cy: `12`,
                                          r: `9`,
                                        }),
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18`,
                                        }),
                                      ],
                                    }),
                                    `Idioma: `,
                                    renderContent(e.langLabel),
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    color: `var(--bb-text-3,#6B6C73)`,
                                    fontSize: `10px`,
                                  },
                                  children: renderContent(e.langCaret),
                                }),
                              ],
                            }),
                            `
      `,
                            e.langOpen
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
        `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `2px`,
                                        padding: `4px`,
                                        marginTop: `2px`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        borderRadius: `6px`,
                                      },
                                      children: [
                                        `
          `,
                                        asArray(e.langs).map((e, t) =>
                                          (0, JSXRuntime.jsxs)(
                                            React.Fragment,
                                            {
                                              children: [
                                                `
            `,
                                                (0, JSXRuntime.jsxs)(`div`, {
                                                  className: `bb0-3`,
                                                  style: resolveStyle(
                                                    `display:flex;justify-content:space-between;padding:8px 10px 8px 38px;border-radius:5px;font-size:13px;font-weight:600;color:${e?.color ?? ``};cursor:pointer;`,
                                                  ),
                                                  onClick: e?.select,
                                                  children: [
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        children: renderContent(
                                                          e?.label,
                                                        ),
                                                      },
                                                    ),
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: {
                                                          color: `var(--bb-text,#0A0A0B)`,
                                                        },
                                                        children: renderContent(
                                                          e?.mark,
                                                        ),
                                                      },
                                                    ),
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
                                })
                              : null,
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
                }),
                `
  `,
              ],
            })
          : null,
        `

  `,
        `
  `,
        e.sidebarMini
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
  `,
                (0, JSXRuntime.jsxs)(`aside`, {
                  className: `nosb`,
                  style: {
                    width: `64px`,
                    flexShrink: `0`,
                    background: `var(--bb-sidebar,#ECECEF)`,
                    borderRight: `1px solid var(--bb-divider,#E4E4E7)`,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    position: `sticky`,
                    top: `0`,
                    height: `100vh`,
                    overflowY: `auto`,
                    zIndex: `6`,
                  },
                  children: [
                    `
    `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        height: `60px`,
                        width: `100%`,
                        display: `grid`,
                        placeItems: `center`,
                        borderBottom: `1px solid var(--bb-divider,#E4E4E7)`,
                        flexShrink: `0`,
                      },
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `4px`,
                            cursor: `pointer`,
                            padding: `6px 2px`,
                          },
                          onClick: e.toggleSidebar,
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `16px`,
                                height: `2px`,
                                background: `var(--bb-text-3,#6B6C73)`,
                                display: `block`,
                              },
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `16px`,
                                height: `2px`,
                                background: `var(--bb-text-3,#6B6C73)`,
                                display: `block`,
                              },
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `16px`,
                                height: `2px`,
                                background: `var(--bb-text-3,#6B6C73)`,
                                display: `block`,
                              },
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
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        flexDirection: `column`,
                        gap: `4px`,
                        padding: `12px 0`,
                        borderBottom: `1px solid var(--bb-divider,#E4E4E7)`,
                        flexShrink: `0`,
                      },
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `bb0-0`,
                          style: {
                            width: `40px`,
                            height: `40px`,
                            borderRadius: `6px`,
                            display: `grid`,
                            placeItems: `center`,
                            cursor: `pointer`,
                          },
                          title: `Favoritos`,
                          onClick: e.go?.fav,
                          children: (0, JSXRuntime.jsx)(`svg`, {
                            style: {
                              stroke: `var(--bb-text-3,#6B6C73)`,
                            },
                            width: `18`,
                            height: `18`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            strokeWidth: `2`,
                            children: (0, JSXRuntime.jsx)(`path`, {
                              d: `M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z`,
                            }),
                          }),
                        }),
                        `
      `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `bb0-0`,
                          style: {
                            width: `40px`,
                            height: `40px`,
                            borderRadius: `6px`,
                            display: `grid`,
                            placeItems: `center`,
                            cursor: `pointer`,
                          },
                          title: `Recientes`,
                          onClick: e.go?.recent,
                          children: (0, JSXRuntime.jsxs)(`svg`, {
                            style: {
                              stroke: `var(--bb-text-3,#6B6C73)`,
                            },
                            width: `18`,
                            height: `18`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            strokeWidth: `2`,
                            children: [
                              (0, JSXRuntime.jsx)(`circle`, {
                                cx: `12`,
                                cy: `12`,
                                r: `9`,
                              }),
                              (0, JSXRuntime.jsx)(`path`, {
                                d: `M12 7v5l3 2`,
                              }),
                            ],
                          }),
                        }),
                        `
      `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `bb0-0`,
                          style: {
                            width: `40px`,
                            height: `40px`,
                            borderRadius: `6px`,
                            display: `grid`,
                            placeItems: `center`,
                            cursor: `pointer`,
                          },
                          title: `Mis apuestas`,
                          onClick: e.go?.mybets,
                          children: (0, JSXRuntime.jsxs)(`svg`, {
                            style: {
                              stroke: `var(--bb-text-3,#6B6C73)`,
                            },
                            width: `18`,
                            height: `18`,
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
                        flexDirection: `column`,
                        gap: `4px`,
                        padding: `12px 0`,
                        borderBottom: `1px solid var(--bb-divider,#E4E4E7)`,
                        flexShrink: `0`,
                      },
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            cursor: `pointer`,
                            width: `40px`,
                            height: `40px`,
                            borderRadius: `6px`,
                            display: `grid`,
                            placeItems: `center`,
                            background: `var(--bb-surface,#EFEFF1)`,
                          },
                          title: `Casino`,
                          onClick: e.go?.home,
                          children: (0, JSXRuntime.jsxs)(`svg`, {
                            style: {
                              stroke: `var(--bb-acento,#0A0A0B)`,
                            },
                            width: `18`,
                            height: `18`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            strokeWidth: `2`,
                            children: [
                              (0, JSXRuntime.jsx)(`rect`, {
                                x: `4`,
                                y: `4`,
                                width: `16`,
                                height: `16`,
                                rx: `3`,
                              }),
                              (0, JSXRuntime.jsx)(`circle`, {
                                style: {
                                  fill: `var(--bb-acento,#0A0A0B)`,
                                },
                                cx: `9`,
                                cy: `9`,
                                r: `1.2`,
                              }),
                              (0, JSXRuntime.jsx)(`circle`, {
                                style: {
                                  fill: `var(--bb-acento,#0A0A0B)`,
                                },
                                cx: `15`,
                                cy: `15`,
                                r: `1.2`,
                              }),
                            ],
                          }),
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
                        flexDirection: `column`,
                        gap: `4px`,
                        padding: `12px 0`,
                        flexShrink: `0`,
                      },
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `bb0-0`,
                          style: {
                            width: `40px`,
                            height: `40px`,
                            borderRadius: `6px`,
                            display: `grid`,
                            placeItems: `center`,
                            cursor: `pointer`,
                          },
                          title: `Soporte en vivo`,
                          onClick: e.go?.support,
                          children: (0, JSXRuntime.jsx)(`svg`, {
                            style: {
                              stroke: `var(--bb-text-3,#6B6C73)`,
                            },
                            width: `18`,
                            height: `18`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            strokeWidth: `2`,
                            children: (0, JSXRuntime.jsx)(`path`, {
                              d: `M4 13a8 8 0 0116 0v4a2 2 0 01-2 2h-1v-6h3M4 13v4a2 2 0 002 2h1v-6H4`,
                            }),
                          }),
                        }),
                        `
      `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `bb0-0`,
                          style: {
                            width: `40px`,
                            height: `40px`,
                            borderRadius: `6px`,
                            display: `grid`,
                            placeItems: `center`,
                            cursor: `pointer`,
                          },
                          title: `Idioma`,
                          onClick: e.expandLang,
                          children: (0, JSXRuntime.jsxs)(`svg`, {
                            style: {
                              stroke: `var(--bb-text-3,#6B6C73)`,
                            },
                            width: `18`,
                            height: `18`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            strokeWidth: `2`,
                            children: [
                              (0, JSXRuntime.jsx)(`circle`, {
                                cx: `12`,
                                cy: `12`,
                                r: `9`,
                              }),
                              (0, JSXRuntime.jsx)(`path`, {
                                d: `M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18`,
                              }),
                            ],
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
            })
          : null,
        `

  `,
        `
  `,
        (0, JSXRuntime.jsxs)(`main`, {
          style: {
            flex: `1`,
            minWidth: `0`,
            display: `flex`,
            flexDirection: `column`,
            position: `relative`,
          },
          children: [
            `
    `,
            e.showBg
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `sticky`,
                        top: `0`,
                        height: `100vh`,
                        marginBottom: `-100vh`,
                        zIndex: `0`,
                        overflow: `hidden`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                            background: `radial-gradient(60% 50% at 85% 10%,rgba(var(--bb-text-rgb,10,10,11),0.07),transparent 70%),var(--bb-bg,#F7F7F8)`,
                          },
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                          },
                          children: (0, JSXRuntime.jsx)(`image-slot`, {
                            id: `page-bg`,
                            shape: `rect`,
                            placeholder: `Arrastra aquí la ilustración de fondo`,
                          }),
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                            pointerEvents: `none`,
                            background: `linear-gradient(180deg,rgba(var(--bb-bg-rgb,247,247,248),0.45) 0%,rgba(var(--bb-bg-rgb,247,247,248),0.75) 55%,rgba(var(--bb-bg-rgb,247,247,248),0.9) 100%)`,
                          },
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
            (0, JSXRuntime.jsxs)(`header`, {
              style: resolveStyle(
                `height:60px;display:flex;align-items:center;gap:${e.hdrGap ?? ``};padding:${e.hdrPad ?? ``};background:rgba(var(--bb-bg-rgb,247,247,248),0.88);backdrop-filter:blur(10px);border-bottom:1px solid var(--bb-divider,#E4E4E7);position:sticky;top:0;z-index:20;`,
              ),
              children: [
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `flex:${e.sideFlex ?? ``};min-width:0;display:flex;align-items:center;gap:2px;font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:${e.logoSize ?? ``};letter-spacing:0.5px;cursor:pointer;`,
                  ),
                  onClick: e.go?.home,
                  children: [
                    `
        `,
                    (0, JSXRuntime.jsx)(`img`, {
                      className: `${e.logoImgClase ?? ``}`,
                      style: resolveStyle(
                        `height:${e.logoImgAlto ?? ``};width:${e.logoImgAncho ?? ``};max-width:100%;object-fit:cover;object-position:left center;display:block;`,
                      ),
                      src: Ie(e.logoImg),
                      alt: e.logoAlt,
                    }),
                    `
      `,
                  ],
                }),
                `
      `,
                e.loggedIn
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `display:flex;flex:${e.balFlex ?? ``};min-width:0;justify-content:center;align-items:center;height:40px;`,
                          ),
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: resolveStyle(
                                `height:100%;min-width:0;overflow:hidden;display:flex;align-items:center;gap:${e.balGap ?? ``};font-size:${e.balFont ?? ``};padding:${e.balPad ?? ``};background:var(--bb-surface,#EFEFF1);border-radius:6px 0 0 6px;font-weight:800;white-space:nowrap;font-variant-numeric:tabular-nums;`,
                              ),
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    color: `var(--bb-text,#0A0A0B)`,
                                  },
                                  children: `$`,
                                }),
                                renderContent(e.balanceShown),
                                e.showARS
                                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                      children: (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          fontSize: `11px`,
                                          color: `var(--bb-text-3,#6B6C73)`,
                                          fontWeight: `700`,
                                        },
                                        children: `ARS`,
                                      }),
                                    })
                                  : null,
                              ],
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `bb0-4`,
                              style: resolveStyle(
                                `height:100%;background:var(--bb-acento,#0A0A0B);color:var(--bb-sobre,#FFFFFF);border:none;border-radius:0 6px 6px 0;padding:${e.depPad ?? ``};font-family:'Manrope',sans-serif;font-weight:800;font-size:13px;cursor:pointer;white-space:nowrap;`,
                              ),
                              onClick: e.openDeposit,
                              children: renderContent(e.depLabel),
                            }),
                            `
      `,
                          ],
                        }),
                        `
      `,
                        e.showRake
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
        `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    position: `relative`,
                                    flexShrink: `0`,
                                  },
                                  children: [
                                    `
          `,
                                    (0, JSXRuntime.jsxs)(`button`, {
                                      className: `bb0-5`,
                                      style: {
                                        height: `40px`,
                                        padding: `0 12px`,
                                        borderRadius: `6px`,
                                        border: `1px solid var(--bb-border,#D8D8DC)`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        color: `var(--bb-text,#0A0A0B)`,
                                        display: `flex`,
                                        alignItems: `center`,
                                        gap: `8px`,
                                        fontFamily: `'Manrope',sans-serif`,
                                        fontWeight: `800`,
                                        fontSize: `12px`,
                                        cursor: `pointer`,
                                        whiteSpace: `nowrap`,
                                      },
                                      onClick: e.toggleRake,
                                      title: `Rakeback disponible`,
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: resolveStyle(
                                            `width:8px;height:8px;border-radius:50%;background:${e.rakeDot ?? ``};`,
                                          ),
                                        }),
                                        `Rakeback $ `,
                                        renderContent(e.rakeLabel),
                                      ],
                                    }),
                                    `
          `,
                                    e.rakeOpen
                                      ? (0, JSXRuntime.jsxs)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: [
                                              `
            `,
                                              (0, JSXRuntime.jsx)(`div`, {
                                                style: {
                                                  position: `fixed`,
                                                  inset: `0`,
                                                  zIndex: `1`,
                                                },
                                                onClick: e.closeRake,
                                              }),
                                              `
            `,
                                              (0, JSXRuntime.jsxs)(`div`, {
                                                style: {
                                                  position: `absolute`,
                                                  top: `48px`,
                                                  left: `50%`,
                                                  marginLeft: `-135px`,
                                                  width: `270px`,
                                                  zIndex: `2`,
                                                  background: `var(--bb-surface,#EFEFF1)`,
                                                  border: `1px solid var(--bb-border,#D8D8DC)`,
                                                  borderRadius: `8px`,
                                                  padding: `16px`,
                                                  display: `flex`,
                                                  flexDirection: `column`,
                                                  gap: `10px`,
                                                  animation: `popIn .2s cubic-bezier(.2,.7,.2,1)`,
                                                },
                                                children: [
                                                  `
              `,
                                                  (0, JSXRuntime.jsx)(`span`, {
                                                    style: {
                                                      fontSize: `11px`,
                                                      fontWeight: `800`,
                                                      color: `var(--bb-text-3,#6B6C73)`,
                                                      letterSpacing: `0.4px`,
                                                    },
                                                    children: `RAKEBACK · NIVEL ORO`,
                                                  }),
                                                  `
              `,
                                                  (0, JSXRuntime.jsxs)(`span`, {
                                                    style: {
                                                      fontSize: `26px`,
                                                      fontWeight: `800`,
                                                      color: `var(--bb-text,#0A0A0B)`,
                                                      fontVariantNumeric: `tabular-nums`,
                                                    },
                                                    children: [
                                                      `$ `,
                                                      renderContent(
                                                        e.rakeLabel,
                                                      ),
                                                    ],
                                                  }),
                                                  `
              `,
                                                  (0, JSXRuntime.jsx)(`span`, {
                                                    style: {
                                                      fontSize: `12px`,
                                                      fontWeight: `600`,
                                                      color: `var(--bb-text-3,#6B6C73)`,
                                                      lineHeight: `1.45`,
                                                    },
                                                    children: `El 8% de lo que apostás vuelve a tu saldo. Se acumula en tiempo real.`,
                                                  }),
                                                  `
              `,
                                                  (0, JSXRuntime.jsx)(
                                                    `button`,
                                                    {
                                                      style: {
                                                        height: `42px`,
                                                        borderRadius: `6px`,
                                                        border: `none`,
                                                        background: `var(--bb-acento,#0A0A0B)`,
                                                        color: `var(--bb-sobre,#FFFFFF)`,
                                                        fontFamily: `'Manrope',sans-serif`,
                                                        fontWeight: `800`,
                                                        fontSize: `13px`,
                                                        cursor: `pointer`,
                                                      },
                                                      onClick: e.claimRake,
                                                      disabled: e.rakeEmpty,
                                                      children: renderContent(
                                                        e.rakeCta,
                                                      ),
                                                    },
                                                  ),
                                                  `
            `,
                                                ],
                                              }),
                                              `
          `,
                                            ],
                                          },
                                        )
                                      : null,
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
                      ],
                    })
                  : null,
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `flex:${e.sideFlex ?? ``};min-width:${e.rightMin ?? ``};display:flex;justify-content:flex-end;align-items:center;gap:${e.iconGap ?? ``};`,
                  ),
                  children: [
                    `
        `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `bb0-2`,
                      style: resolveStyle(
                        `width:${e.iconBox ?? ``};height:${e.iconBox ?? ``};border-radius:6px;border:none;background:transparent;display:grid;place-items:center;cursor:pointer;flex-shrink:0;`,
                      ),
                      onClick: e.toggleTheme,
                      title: e.themeTitle,
                      "aria-label": e.themeTitle,
                      children: (0, JSXRuntime.jsx)(`svg`, {
                        style: {
                          stroke: `var(--bb-acento,#0A0A0B)`,
                        },
                        width: `18`,
                        height: `18`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        strokeWidth: `2`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        children: (0, JSXRuntime.jsx)(`path`, {
                          d: e.themeIcon,
                        }),
                      }),
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsx)(`div`, {
                        className: `bb0-0`,
                        style: resolveStyle(
                          `width:${e.iconBox ?? ``};height:${e.iconBox ?? ``};border-radius:6px;display:grid;place-items:center;cursor:pointer;flex-shrink:0;`,
                        ),
                        onClick: e.openSearch,
                        title: `Buscar (/)`,
                        children: (0, JSXRuntime.jsxs)(`svg`, {
                          style: {
                            stroke: `var(--bb-acento,#0A0A0B)`,
                          },
                          width: `18`,
                          height: `18`,
                          viewBox: `0 0 24 24`,
                          fill: `none`,
                          strokeWidth: `2`,
                          children: [
                            (0, JSXRuntime.jsx)(`circle`, {
                              cx: `11`,
                              cy: `11`,
                              r: `7`,
                            }),
                            (0, JSXRuntime.jsx)(`path`, {
                              d: `M20 20l-4-4`,
                            }),
                          ],
                        }),
                      }),
                    }),
                    `
        `,
                    e.showBell
                      ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                          children: (0, JSXRuntime.jsxs)(`div`, {
                            className: `bb0-0`,
                            style: {
                              width: `40px`,
                              height: `40px`,
                              borderRadius: `6px`,
                              display: `grid`,
                              placeItems: `center`,
                              cursor: `pointer`,
                              flexShrink: `0`,
                              position: `relative`,
                            },
                            title: `Notificaciones`,
                            children: [
                              (0, JSXRuntime.jsx)(`svg`, {
                                style: {
                                  stroke: `var(--bb-acento,#0A0A0B)`,
                                },
                                width: `18`,
                                height: `18`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                strokeWidth: `2`,
                                children: (0, JSXRuntime.jsx)(`path`, {
                                  d: `M6 16V11a6 6 0 0112 0v5l2 2H4zM10 21h4`,
                                }),
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  position: `absolute`,
                                  top: `9px`,
                                  right: `10px`,
                                  width: `6px`,
                                  height: `6px`,
                                  borderRadius: `50%`,
                                  background: `var(--bb-acento,#0A0A0B)`,
                                },
                              }),
                            ],
                          }),
                        })
                      : null,
                    `
        `,
                    e.loggedIn
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `relative`,
                                flexShrink: `0`,
                              },
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsx)(`div`, {
                                  className: `bb0-0`,
                                  style: resolveStyle(
                                    `width:${e.iconBox ?? ``};height:${e.iconBox ?? ``};border-radius:6px;display:grid;place-items:center;cursor:pointer;background:${e.menuBtnBg ?? ``};`,
                                  ),
                                  onClick: e.toggleMenu,
                                  title: `Tu cuenta`,
                                  children: (0, JSXRuntime.jsxs)(`svg`, {
                                    style: {
                                      stroke: `var(--bb-acento,#0A0A0B)`,
                                    },
                                    width: `18`,
                                    height: `18`,
                                    viewBox: `0 0 24 24`,
                                    fill: `none`,
                                    strokeWidth: `2`,
                                    children: [
                                      (0, JSXRuntime.jsx)(`circle`, {
                                        cx: `12`,
                                        cy: `8`,
                                        r: `4`,
                                      }),
                                      (0, JSXRuntime.jsx)(`path`, {
                                        d: `M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8`,
                                      }),
                                    ],
                                  }),
                                }),
                                `
          `,
                                e.menuOpen
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            position: `fixed`,
                                            inset: `0`,
                                            zIndex: `1`,
                                          },
                                          onClick: e.closeMenu,
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            position: `absolute`,
                                            top: `48px`,
                                            right: `0`,
                                            width: `220px`,
                                            background: `var(--bb-surface,#EFEFF1)`,
                                            border: `1px solid var(--bb-border,#D8D8DC)`,
                                            borderRadius: `8px`,
                                            padding: `6px`,
                                            zIndex: `2`,
                                            display: `flex`,
                                            flexDirection: `column`,
                                            gap: `2px`,
                                          },
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                display: `flex`,
                                                alignItems: `center`,
                                                gap: `10px`,
                                                padding: `10px`,
                                                borderBottom: `1px solid var(--bb-border,#D8D8DC)`,
                                                marginBottom: `4px`,
                                              },
                                              children: [
                                                `
                `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    width: `32px`,
                                                    height: `32px`,
                                                    borderRadius: `6px`,
                                                    background: `var(--bb-secondary,#E1E1E5)`,
                                                    color: `var(--bb-text,#0A0A0B)`,
                                                    display: `grid`,
                                                    placeItems: `center`,
                                                    fontWeight: `800`,
                                                  },
                                                  children: `M`,
                                                }),
                                                `
                `,
                                                (0, JSXRuntime.jsxs)(`div`, {
                                                  style: {
                                                    display: `flex`,
                                                    flexDirection: `column`,
                                                    gap: `2px`,
                                                  },
                                                  children: [
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: {
                                                          fontWeight: `800`,
                                                          fontSize: `13px`,
                                                        },
                                                        children: `Marco_27`,
                                                      },
                                                    ),
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: {
                                                          fontSize: `11px`,
                                                          color: `var(--bb-text,#0A0A0B)`,
                                                          fontWeight: `700`,
                                                        },
                                                        children: `Oro · Nivel 4`,
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                `
              `,
                                              ],
                                            }),
                                            `
              `,
                                            asArray(e.menuItems).map((e, t) =>
                                              (0, JSXRuntime.jsxs)(
                                                React.Fragment,
                                                {
                                                  children: [
                                                    `
                `,
                                                    (0, JSXRuntime.jsx)(`div`, {
                                                      className: `bb0-3`,
                                                      style: {
                                                        padding: `9px 10px`,
                                                        borderRadius: `6px`,
                                                        fontWeight: `600`,
                                                        fontSize: `13px`,
                                                        cursor: `pointer`,
                                                      },
                                                      onClick: e?.go,
                                                      children: renderContent(
                                                        e?.label,
                                                      ),
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
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              className: `bb0-3`,
                                              style: {
                                                display: `flex`,
                                                alignItems: `center`,
                                                justifyContent: `space-between`,
                                                padding: `9px 10px`,
                                                borderRadius: `6px`,
                                                fontWeight: `600`,
                                                fontSize: `13px`,
                                                cursor: `pointer`,
                                              },
                                              onClick: e.toggleTheme,
                                              children: [
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  children: `Modo oscuro`,
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: resolveStyle(
                                                    `width:36px;height:20px;border-radius:10px;background:${e.themeSwBg ?? ``};position:relative;flex-shrink:0;`,
                                                  ),
                                                  children: (0, JSXRuntime.jsx)(
                                                    `span`,
                                                    {
                                                      style: resolveStyle(
                                                        `position:absolute;top:3px;left:${e.themeKnob ?? ``};width:14px;height:14px;border-radius:50%;background:var(--bb-sobre,#FFFFFF);transition:left .2s;`,
                                                      ),
                                                    },
                                                  ),
                                                }),
                                              ],
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: {
                                                height: `1px`,
                                                background: `var(--bb-border,#D8D8DC)`,
                                                margin: `4px 0`,
                                              },
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`div`, {
                                              className: `bb0-3`,
                                              style: {
                                                padding: `9px 10px`,
                                                borderRadius: `6px`,
                                                fontWeight: `700`,
                                                fontSize: `13px`,
                                                color: `var(--bb-text,#0A0A0B)`,
                                                cursor: `pointer`,
                                              },
                                              onClick: e.logout,
                                              children: `Cerrar sesión`,
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
                              ],
                            }),
                            `
        `,
                          ],
                        })
                      : null,
                    `
        `,
                    e.loggedOut
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `bb0-2`,
                              style: {
                                height: `38px`,
                                padding: `0 14px`,
                                borderRadius: `6px`,
                                background: `transparent`,
                                border: `none`,
                                color: `var(--bb-text,#0A0A0B)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `700`,
                                fontSize: `13px`,
                                cursor: `pointer`,
                                whiteSpace: `nowrap`,
                              },
                              onClick: e.openLogin,
                              children: `Iniciar sesión`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `bb0-4`,
                              style: {
                                height: `38px`,
                                padding: `0 16px`,
                                borderRadius: `6px`,
                                background: `var(--bb-acento,#0A0A0B)`,
                                border: `none`,
                                color: `var(--bb-sobre,#FFFFFF)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `800`,
                                fontSize: `13px`,
                                cursor: `pointer`,
                                whiteSpace: `nowrap`,
                              },
                              onClick: e.openRegister,
                              children: `Registrarse`,
                            }),
                            `
        `,
                          ],
                        })
                      : null,
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
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                position: `relative`,
                zIndex: `2`,
                height: `38px`,
                background: `var(--bb-sidebar,#ECECEF)`,
                borderBottom: `1px solid var(--bb-divider,#E4E4E7)`,
                overflow: `hidden`,
                display: `flex`,
                alignItems: `center`,
              },
              children: [
                e.notMobile
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `absolute`,
                            left: `0`,
                            top: `0`,
                            bottom: `0`,
                            zIndex: `1`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `6px`,
                            padding: `0 14px 0 24px`,
                            background: `var(--bb-sidebar,#ECECEF)`,
                            fontSize: `11px`,
                            fontWeight: `800`,
                            color: `var(--bb-text,#0A0A0B)`,
                            letterSpacing: `0.5px`,
                            whiteSpace: `nowrap`,
                            boxShadow: `12px 0 12px var(--bb-sidebar,#ECECEF)`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `6px`,
                                height: `6px`,
                                borderRadius: `50%`,
                                background: `var(--bb-acento,#0A0A0B)`,
                              },
                            }),
                            `GRANDES GANANCIAS`,
                          ],
                        }),
                      ],
                    })
                  : null,
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `display:flex;gap:28px;white-space:nowrap;will-change:transform;padding-left:${e.tickPad ?? ``};`,
                  ),
                  ref: e.tickerRef,
                  children: [
                    `
        `,
                    asArray(e.ticker).map((e, t) =>
                      (0, JSXRuntime.jsxs)(
                        React.Fragment,
                        {
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `8px`,
                                fontSize: `12px`,
                                fontWeight: `600`,
                                color: `var(--bb-text-3,#6B6C73)`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    color: `var(--bb-text,#0A0A0B)`,
                                    fontWeight: `700`,
                                  },
                                  children: renderContent(e?.user),
                                }),
                                `ganó`,
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    color: `var(--bb-text,#0A0A0B)`,
                                    fontWeight: `800`,
                                  },
                                  children: [`$ `, renderContent(e?.win)],
                                }),
                                `en `,
                                renderContent(e?.game),
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    background: `var(--bb-surface,#EFEFF1)`,
                                    color: `var(--bb-text,#0A0A0B)`,
                                    padding: `2px 6px`,
                                    borderRadius: `4px`,
                                    fontSize: `11px`,
                                    fontWeight: `800`,
                                  },
                                  children: [renderContent(e?.mult), `×`],
                                }),
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
            e.view?.home
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
    `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `bgpass`,
                      style: resolveStyle(
                        `position:relative;z-index:1;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);display:flex;flex-direction:column;gap:22px;pointer-events:none;max-width:1320px;width:100%;margin:0 auto;`,
                      ),
                      children: [
                        `
      `,
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `10px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                overflow: `hidden`,
                                borderRadius: `8px`,
                              },
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: resolveStyle(
                                    `display:flex;gap:12px;transition:transform .5s cubic-bezier(.3,.7,.2,1);transform:${e.trackX ?? ``};`,
                                  ),
                                  children: [
                                    `
            `,
                                    asArray(e.slides).map((t, n) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: resolveStyle(
                                                `flex:0 0 ${e.slideBasis ?? ``};min-height:${e.slideH ?? ``};border-radius:8px;background:${t?.bg ?? ``};color:${t?.fg ?? ``};overflow:hidden;display:flex;`,
                                              ),
                                              children: [
                                                `
                `,
                                                (0, JSXRuntime.jsxs)(`div`, {
                                                  style: resolveStyle(
                                                    `padding:${e.slidePad ?? ``};display:flex;flex-direction:column;gap:${e.slideGap ?? ``};flex:1;min-width:0;`,
                                                  ),
                                                  children: [
                                                    `
                  `,
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: resolveStyle(
                                                          `align-self:flex-start;background:${t?.tagBg ?? ``};color:${t?.tagFg ?? ``};font-size:11px;font-weight:800;padding:4px 8px;border-radius:4px;white-space:nowrap;`,
                                                        ),
                                                        children: renderContent(
                                                          t?.tag,
                                                        ),
                                                      },
                                                    ),
                                                    `
                  `,
                                                    (0, JSXRuntime.jsx)(`div`, {
                                                      style: resolveStyle(
                                                        `font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:${e.slideTitle ?? ``};line-height:0.95;text-wrap:balance;`,
                                                      ),
                                                      children: renderContent(
                                                        t?.title,
                                                      ),
                                                    }),
                                                    `
                  `,
                                                    (0, JSXRuntime.jsx)(`div`, {
                                                      style: resolveStyle(
                                                        `font-weight:600;font-size:13px;color:${t?.sub ?? ``};`,
                                                      ),
                                                      children: renderContent(
                                                        t?.text,
                                                      ),
                                                    }),
                                                    `
                  `,
                                                    (0, JSXRuntime.jsx)(
                                                      `button`,
                                                      {
                                                        style: resolveStyle(
                                                          `margin-top:auto;align-self:flex-start;background:${t?.btnBg ?? ``};color:${t?.btnFg ?? ``};border:none;border-radius:6px;padding:11px 20px;font-family:'Manrope',sans-serif;font-weight:800;font-size:13px;cursor:pointer;white-space:nowrap;`,
                                                        ),
                                                        onClick: t?.go,
                                                        children: renderContent(
                                                          t?.cta,
                                                        ),
                                                      },
                                                    ),
                                                    `
                `,
                                                  ],
                                                }),
                                                `
                `,
                                                (0, JSXRuntime.jsx)(`div`, {
                                                  style: resolveStyle(
                                                    `width:${e.slideImgW ?? ``};flex-shrink:0;padding:10px 10px 10px 0;`,
                                                  ),
                                                  children: (0, JSXRuntime.jsx)(
                                                    `image-slot`,
                                                    {
                                                      id: t?.slot,
                                                      shape: `rounded`,
                                                      radius: `6`,
                                                      placeholder: `Ilustración`,
                                                      src: Ie(t?.img),
                                                    },
                                                  ),
                                                }),
                                                `
              `,
                                              ],
                                            }),
                                            `
            `,
                                          ],
                                        },
                                        n,
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
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: `6px`,
                              },
                              children: [
                                `
          `,
                                asArray(e.dots).map((e, t) =>
                                  (0, JSXRuntime.jsxs)(
                                    React.Fragment,
                                    {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          style: resolveStyle(
                                            `width:${e?.w ?? ``};height:6px;border-radius:3px;border:none;padding:0;background:${e?.bg ?? ``};cursor:pointer;transition:width .3s;`,
                                          ),
                                          onClick: e?.go,
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
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `nosb`,
                          style: resolveStyle(
                            `display:grid;grid-template-columns:${e.quickCols ?? ``};gap:${e.quickGap ?? ``};overflow-x:auto;`,
                          ),
                          children: [
                            `
        `,
                            asArray(e.quick).map((t, n) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
          `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: resolveStyle(
                                        `position:relative;height:${e.quickH ?? ``};border-radius:8px;overflow:hidden;background:var(--bb-surface,#EFEFF1);cursor:pointer;`,
                                      ),
                                      onClick: t?.go,
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            position: `absolute`,
                                            inset: `0`,
                                          },
                                          children: (0, JSXRuntime.jsx)(
                                            `image-slot`,
                                            {
                                              id: t?.id,
                                              shape: `rect`,
                                              placeholder: t?.ph,
                                              src: Ie(t?.img),
                                            },
                                          ),
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            position: `absolute`,
                                            inset: `0`,
                                            pointerEvents: `none`,
                                            background: `linear-gradient(90deg,rgba(var(--bb-bg-rgb,247,247,248),0.9) 0%,rgba(var(--bb-bg-rgb,247,247,248),0.35) 60%,transparent 100%)`,
                                          },
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            position: `absolute`,
                                            left: `16px`,
                                            top: `50%`,
                                            transform: `translateY(-50%)`,
                                            pointerEvents: `none`,
                                            fontWeight: `800`,
                                            fontSize: `16px`,
                                          },
                                          children: renderContent(t?.title),
                                        }),
                                        `
          `,
                                      ],
                                    }),
                                    `
        `,
                                  ],
                                },
                                n,
                              ),
                            ),
                            `
      `,
                          ],
                        }),
                        `

      `,
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `12px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              className: `bb0-6`,
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `10px`,
                                height: `44px`,
                                padding: `0 8px 0 14px`,
                                background: `var(--bb-surface,#EFEFF1)`,
                                border: `1px solid var(--bb-border,#D8D8DC)`,
                                borderRadius: `6px`,
                                cursor: `text`,
                              },
                              onClick: e.openSearch,
                              role: `button`,
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`svg`, {
                                  style: {
                                    stroke: `var(--bb-text-4,#8A8B92)`,
                                  },
                                  width: `16`,
                                  height: `16`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  strokeWidth: `2`,
                                  children: [
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      cx: `11`,
                                      cy: `11`,
                                      r: `7`,
                                    }),
                                    (0, JSXRuntime.jsx)(`path`, {
                                      d: `M20 20l-4-4`,
                                    }),
                                  ],
                                }),
                                `
          `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    flex: `1`,
                                    minWidth: `0`,
                                    color: `var(--bb-text-4,#8A8B92)`,
                                    fontSize: `14px`,
                                  },
                                  children: `Buscá juegos o proveedores`,
                                }),
                                `
          `,
                                e.notMobile
                                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                      children: (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          height: `24px`,
                                          minWidth: `24px`,
                                          padding: `0 6px`,
                                          borderRadius: `4px`,
                                          border: `1px solid var(--bb-border,#D8D8DC)`,
                                          color: `var(--bb-text-3,#6B6C73)`,
                                          fontSize: `12px`,
                                          fontWeight: `700`,
                                          display: `grid`,
                                          placeItems: `center`,
                                        },
                                        children: `/`,
                                      }),
                                    })
                                  : null,
                                `
        `,
                              ],
                            }),
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              className: `nosb`,
                              style: {
                                display: `flex`,
                                gap: `4px`,
                                padding: `4px`,
                                background: `var(--bb-surface,#EFEFF1)`,
                                borderRadius: `8px`,
                                overflowX: `auto`,
                                alignSelf: `flex-start`,
                                maxWidth: `100%`,
                              },
                              children: [
                                `
          `,
                                asArray(e.tabs).map((e, t) =>
                                  (0, JSXRuntime.jsxs)(
                                    React.Fragment,
                                    {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          style: resolveStyle(
                                            `background:${e?.bg ?? ``};color:${e?.fg ?? ``};border:none;border-radius:6px;padding:9px 16px;font-family:'Manrope',sans-serif;font-weight:700;font-size:13px;cursor:pointer;white-space:nowrap;`,
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
                        `
      `,
                        asArray(e.rows).map((t, n) =>
                          (0, JSXRuntime.jsxs)(
                            React.Fragment,
                            {
                              children: [
                                `
        `,
                                (0, JSXRuntime.jsxs)(`section`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `10px`,
                                  },
                                  children: [
                                    `
          `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        alignItems: `center`,
                                        justifyContent: `space-between`,
                                        gap: `12px`,
                                      },
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            fontWeight: `800`,
                                            fontSize: `16px`,
                                          },
                                          children: renderContent(t?.title),
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            display: `flex`,
                                            alignItems: `center`,
                                            gap: `6px`,
                                          },
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`a`, {
                                              style: {
                                                fontSize: `12px`,
                                                fontWeight: `700`,
                                                color: `var(--bb-text-3,#6B6C73)`,
                                                marginRight: `6px`,
                                              },
                                              href: `#`,
                                              onClick: t?.all,
                                              children: `Ver todos`,
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              className: `bb0-3`,
                                              style: {
                                                width: `30px`,
                                                height: `30px`,
                                                borderRadius: `6px`,
                                                background: `var(--bb-surface,#EFEFF1)`,
                                                border: `1px solid var(--bb-border,#D8D8DC)`,
                                                color: `var(--bb-text,#0A0A0B)`,
                                                cursor: `pointer`,
                                              },
                                              onClick: t?.prev,
                                              children: `‹`,
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              className: `bb0-3`,
                                              style: {
                                                width: `30px`,
                                                height: `30px`,
                                                borderRadius: `6px`,
                                                background: `var(--bb-surface,#EFEFF1)`,
                                                border: `1px solid var(--bb-border,#D8D8DC)`,
                                                color: `var(--bb-text,#0A0A0B)`,
                                                cursor: `pointer`,
                                              },
                                              onClick: t?.next,
                                              children: `›`,
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
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      className: `nosb`,
                                      style: {
                                        display: `flex`,
                                        gap: `10px`,
                                        overflowX: `auto`,
                                        scrollBehavior: `smooth`,
                                        paddingTop: `4px`,
                                      },
                                      id: t?.domId,
                                      children: [
                                        `
            `,
                                        asArray(t?.games).map((t, n) =>
                                          (0, JSXRuntime.jsxs)(
                                            React.Fragment,
                                            {
                                              children: [
                                                `
              `,
                                                (0, JSXRuntime.jsxs)(`div`, {
                                                  style: resolveStyle(
                                                    `flex:0 0 ${e.tileBasis ?? ``};min-width:0;display:flex;flex-direction:column;gap:6px;cursor:pointer;`,
                                                  ),
                                                  onClick: t?.open,
                                                  children: [
                                                    `
                `,
                                                    (0, JSXRuntime.jsxs)(
                                                      `div`,
                                                      {
                                                        className: `bb0-7`,
                                                        style: {
                                                          position: `relative`,
                                                          aspectRatio: `3/4`,
                                                          borderRadius: `6px`,
                                                          overflow: `hidden`,
                                                          background: `var(--bb-surface,#EFEFF1)`,
                                                          transition: `transform .22s cubic-bezier(.2,.7,.2,1)`,
                                                        },
                                                        onMouseEnter: t?.enter,
                                                        onMouseLeave: t?.leave,
                                                        children: [
                                                          `
                  `,
                                                          (0, JSXRuntime.jsx)(
                                                            `image-slot`,
                                                            {
                                                              id: t?.slot,
                                                              shape: `rect`,
                                                              placeholder:
                                                                t?.name,
                                                              src: Ie(t?.img),
                                                            },
                                                          ),
                                                          `
                  `,
                                                          t?.hover
                                                            ? (0,
                                                              JSXRuntime.jsxs)(
                                                                JSXRuntime.Fragment,
                                                                {
                                                                  children: [
                                                                    `
                    `,
                                                                    (0,
                                                                    JSXRuntime.jsxs)(
                                                                      `div`,
                                                                      {
                                                                        style: {
                                                                          position: `absolute`,
                                                                          inset: `0`,
                                                                          background: `rgba(var(--bb-bg-deep-rgb,255,255,255),0.62)`,
                                                                          display: `flex`,
                                                                          flexDirection: `column`,
                                                                          alignItems: `center`,
                                                                          justifyContent: `center`,
                                                                          gap: `10px`,
                                                                          pointerEvents: `none`,
                                                                        },
                                                                        children:
                                                                          [
                                                                            `
                      `,
                                                                            (0,
                                                                            JSXRuntime.jsx)(
                                                                              `button`,
                                                                              {
                                                                                style:
                                                                                  {
                                                                                    pointerEvents: `auto`,
                                                                                    width: `48px`,
                                                                                    height: `48px`,
                                                                                    borderRadius: `50%`,
                                                                                    background: `var(--bb-acento,#0A0A0B)`,
                                                                                    border: `none`,
                                                                                    display: `grid`,
                                                                                    placeItems: `center`,
                                                                                    cursor: `pointer`,
                                                                                  },
                                                                                children:
                                                                                  (0,
                                                                                  JSXRuntime.jsx)(
                                                                                    `svg`,
                                                                                    {
                                                                                      style:
                                                                                        {
                                                                                          fill: `var(--bb-sobre,#FFFFFF)`,
                                                                                        },
                                                                                      width: `18`,
                                                                                      height: `18`,
                                                                                      viewBox: `0 0 24 24`,
                                                                                      children:
                                                                                        (0,
                                                                                        JSXRuntime.jsx)(
                                                                                          `path`,
                                                                                          {
                                                                                            d: `M7 4l13 8-13 8z`,
                                                                                          },
                                                                                        ),
                                                                                    },
                                                                                  ),
                                                                              },
                                                                            ),
                                                                            `
                      `,
                                                                            (0,
                                                                            JSXRuntime.jsx)(
                                                                              `span`,
                                                                              {
                                                                                style:
                                                                                  {
                                                                                    fontSize: `11px`,
                                                                                    fontWeight: `800`,
                                                                                    color: `var(--bb-text,#0A0A0B)`,
                                                                                    textTransform: `uppercase`,
                                                                                    letterSpacing: `0.5px`,
                                                                                    textAlign: `center`,
                                                                                    padding: `0 8px`,
                                                                                  },
                                                                                children:
                                                                                  renderContent(
                                                                                    t?.provider,
                                                                                  ),
                                                                              },
                                                                            ),
                                                                            `
                    `,
                                                                          ],
                                                                      },
                                                                    ),
                                                                    `
                  `,
                                                                  ],
                                                                },
                                                              )
                                                            : null,
                                                          `
                `,
                                                        ],
                                                      },
                                                    ),
                                                    `
                `,
                                                    (0, JSXRuntime.jsxs)(
                                                      `div`,
                                                      {
                                                        style: {
                                                          display: `flex`,
                                                          flexDirection: `column`,
                                                          gap: `2px`,
                                                          padding: `0 2px`,
                                                        },
                                                        children: [
                                                          `
                  `,
                                                          (0, JSXRuntime.jsx)(
                                                            `div`,
                                                            {
                                                              style:
                                                                resolveStyle(
                                                                  `font-size:${e.tileFont ?? ``};font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,
                                                                ),
                                                              children:
                                                                renderContent(
                                                                  t?.name,
                                                                ),
                                                            },
                                                          ),
                                                          `
                  `,
                                                          (0, JSXRuntime.jsxs)(
                                                            `div`,
                                                            {
                                                              style:
                                                                resolveStyle(
                                                                  `display:flex;align-items:center;gap:5px;font-size:${e.tileMeta ?? ``};color:var(--bb-text-3,#6B6C73);font-weight:600;white-space:nowrap;`,
                                                                ),
                                                              children: [
                                                                (0,
                                                                JSXRuntime.jsx)(
                                                                  `span`,
                                                                  {
                                                                    style: {
                                                                      width: `6px`,
                                                                      height: `6px`,
                                                                      borderRadius: `50%`,
                                                                      background: `var(--bb-acento,#0A0A0B)`,
                                                                      flexShrink: `0`,
                                                                    },
                                                                  },
                                                                ),
                                                                renderContent(
                                                                  t?.playersLabel,
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          `
                `,
                                                        ],
                                                      },
                                                    ),
                                                    `
              `,
                                                  ],
                                                }),
                                                `
            `,
                                              ],
                                            },
                                            n,
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
                            },
                            n,
                          ),
                        ),
                        `
      `,
                        e.noResults
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
        `,
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    padding: `40px`,
                                    textAlign: `center`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                    fontWeight: `600`,
                                    background: `var(--bb-surface,#EFEFF1)`,
                                    borderRadius: `8px`,
                                  },
                                  children: renderContent(e.emptyMsg),
                                }),
                                `
      `,
                              ],
                            })
                          : null,
                        `

      `,
                        `
      `,
                        (0, JSXRuntime.jsxs)(`section`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `10px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `space-between`,
                                gap: `12px`,
                              },
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `12px`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        fontWeight: `800`,
                                        fontSize: `16px`,
                                      },
                                      children: `Proveedores`,
                                    }),
                                    (0, JSXRuntime.jsx)(`a`, {
                                      style: {
                                        fontSize: `12px`,
                                        fontWeight: `700`,
                                        color: `var(--bb-text-3,#6B6C73)`,
                                      },
                                      href: `#`,
                                      onClick: e.go?.providersLink,
                                      children: `Ver todos`,
                                    }),
                                  ],
                                }),
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `6px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`button`, {
                                      className: `bb0-3`,
                                      style: {
                                        width: `30px`,
                                        height: `30px`,
                                        borderRadius: `6px`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        border: `1px solid var(--bb-border,#D8D8DC)`,
                                        color: `var(--bb-text,#0A0A0B)`,
                                        cursor: `pointer`,
                                      },
                                      onClick: e.provPrev,
                                      children: `‹`,
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`button`, {
                                      className: `bb0-3`,
                                      style: {
                                        width: `30px`,
                                        height: `30px`,
                                        borderRadius: `6px`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        border: `1px solid var(--bb-border,#D8D8DC)`,
                                        color: `var(--bb-text,#0A0A0B)`,
                                        cursor: `pointer`,
                                      },
                                      onClick: e.provNext,
                                      children: `›`,
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
                            (0, JSXRuntime.jsxs)(`div`, {
                              className: `nosb`,
                              style: {
                                display: `flex`,
                                gap: `10px`,
                                overflowX: `auto`,
                                scrollBehavior: `smooth`,
                              },
                              id: `row-providers`,
                              children: [
                                `
          `,
                                asArray(e.providers).map((e, t) =>
                                  (0, JSXRuntime.jsxs)(
                                    React.Fragment,
                                    {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          className: `bb0-8`,
                                          style: {
                                            flex: `0 0 160px`,
                                            height: `68px`,
                                            borderRadius: `6px`,
                                            background: `var(--bb-surface,#EFEFF1)`,
                                            border: `1px solid var(--bb-surface-2,#E5E5E8)`,
                                            display: `grid`,
                                            placeItems: `center`,
                                            fontWeight: `800`,
                                            fontSize: `14px`,
                                            color: `var(--bb-text-2,#3A3B40)`,
                                            cursor: `pointer`,
                                            letterSpacing: `0.2px`,
                                          },
                                          onClick: e?.open,
                                          children: renderContent(e?.name),
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
                        `
      `,
                        (0, JSXRuntime.jsxs)(`section`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `12px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
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
                                    alignItems: `center`,
                                    gap: `8px`,
                                    fontWeight: `800`,
                                    fontSize: `16px`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        width: `8px`,
                                        height: `8px`,
                                        borderRadius: `50%`,
                                        background: `var(--bb-acento,#0A0A0B)`,
                                        boxShadow: `0 0 0 3px rgba(var(--bb-acento-rgb,10,10,11),0.25)`,
                                      },
                                    }),
                                    `Apuestas en vivo`,
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
                                    asArray(e.betTabs).map((e, t) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              style: resolveStyle(
                                                `background:${e?.bg ?? ``};color:${e?.fg ?? ``};border:none;border-radius:6px;padding:8px 14px;font-family:'Manrope',sans-serif;font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap;`,
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
                            e.notMobile
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
        `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        background: `rgba(var(--bb-surface-rgb,239,239,241),0.92)`,
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
                                                gridTemplateColumns: `1.4fr 1.1fr 0.7fr 1fr 0.8fr 1fr`,
                                                gap: `12px`,
                                                padding: `12px 16px`,
                                                fontSize: `12px`,
                                                fontWeight: `700`,
                                                color: `var(--bb-text-3,#6B6C73)`,
                                                borderBottom: `1px solid var(--bb-border,#D8D8DC)`,
                                              },
                                              children: [
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  children: `Juego`,
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  children: `Usuario`,
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  children: `Hora`,
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
                                                `
            `,
                                              ],
                                            }),
                                            `
            `,
                                            asArray(e.bets).map((e, t) =>
                                              (0, JSXRuntime.jsxs)(
                                                React.Fragment,
                                                {
                                                  children: [
                                                    `
              `,
                                                    (0, JSXRuntime.jsxs)(
                                                      `div`,
                                                      {
                                                        style: resolveStyle(
                                                          `display:grid;grid-template-columns:1.4fr 1.1fr 0.7fr 1fr 0.8fr 1fr;gap:12px;padding:11px 16px;font-size:13px;font-weight:600;background:${e?.zebra ?? ``};cursor:pointer;animation:rowIn .5s ease-out;font-variant-numeric:tabular-nums;`,
                                                        ),
                                                        onClick: e?.open,
                                                        children: [
                                                          `
                `,
                                                          (0, JSXRuntime.jsxs)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                display: `flex`,
                                                                alignItems: `center`,
                                                                gap: `8px`,
                                                                whiteSpace: `nowrap`,
                                                                overflow: `hidden`,
                                                                textOverflow: `ellipsis`,
                                                              },
                                                              children: [
                                                                (0,
                                                                JSXRuntime.jsx)(
                                                                  `span`,
                                                                  {
                                                                    style: {
                                                                      width: `6px`,
                                                                      height: `6px`,
                                                                      borderRadius: `2px`,
                                                                      background: `var(--bb-acento,#0A0A0B)`,
                                                                      flexShrink: `0`,
                                                                    },
                                                                  },
                                                                ),
                                                                renderContent(
                                                                  e?.game,
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          `
                `,
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style:
                                                                resolveStyle(
                                                                  `color:${e?.userColor ?? ``};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,
                                                                ),
                                                              children:
                                                                renderContent(
                                                                  e?.user,
                                                                ),
                                                            },
                                                          ),
                                                          `
                `,
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                color: `var(--bb-text-3,#6B6C73)`,
                                                              },
                                                              children:
                                                                renderContent(
                                                                  e?.time,
                                                                ),
                                                            },
                                                          ),
                                                          `
                `,
                                                          (0, JSXRuntime.jsxs)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                textAlign: `right`,
                                                              },
                                                              children: [
                                                                `$ `,
                                                                renderContent(
                                                                  e?.amount,
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          `
                `,
                                                          (0, JSXRuntime.jsxs)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                textAlign: `right`,
                                                                color: `var(--bb-text-3,#6B6C73)`,
                                                              },
                                                              children: [
                                                                renderContent(
                                                                  e?.mult,
                                                                ),
                                                                `×`,
                                                              ],
                                                            },
                                                          ),
                                                          `
                `,
                                                          (0, JSXRuntime.jsxs)(
                                                            `span`,
                                                            {
                                                              style:
                                                                resolveStyle(
                                                                  `text-align:right;color:${e?.payColor ?? ``};`,
                                                                ),
                                                              children: [
                                                                `$ `,
                                                                renderContent(
                                                                  e?.payout,
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          `
              `,
                                                        ],
                                                      },
                                                      e?.id,
                                                    ),
                                                    `
            `,
                                                  ],
                                                },
                                                t,
                                              ),
                                            ),
                                            `
            `,
                                            e.betsEmpty
                                              ? (0, JSXRuntime.jsx)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: (0,
                                                    JSXRuntime.jsx)(`div`, {
                                                      style: {
                                                        padding: `28px 16px`,
                                                        textAlign: `center`,
                                                        color: `var(--bb-text-3,#6B6C73)`,
                                                        fontWeight: `600`,
                                                        fontSize: `13px`,
                                                      },
                                                      children: `Todavía no hay apuestas para mostrar.`,
                                                    }),
                                                  },
                                                )
                                              : null,
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
                            e.isMobile
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
          `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        background: `rgba(var(--bb-surface-rgb,239,239,241),0.92)`,
                                        borderRadius: `8px`,
                                        overflow: `hidden`,
                                      },
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            display: `grid`,
                                            gridTemplateColumns: `minmax(0,1.5fr) minmax(0,0.8fr) minmax(0,1.1fr)`,
                                            gap: `8px`,
                                            padding: `10px 12px`,
                                            fontSize: `11px`,
                                            fontWeight: `700`,
                                            color: `var(--bb-text-3,#6B6C73)`,
                                            borderBottom: `1px solid var(--bb-border,#D8D8DC)`,
                                          },
                                          children: [
                                            (0, JSXRuntime.jsx)(`span`, {
                                              children: `Juego`,
                                            }),
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                textAlign: `right`,
                                              },
                                              children: `Mult.`,
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
                                        asArray(e.bets).map((e, t) =>
                                          (0, JSXRuntime.jsxs)(
                                            React.Fragment,
                                            {
                                              children: [
                                                `
              `,
                                                (0, JSXRuntime.jsxs)(
                                                  `div`,
                                                  {
                                                    style: resolveStyle(
                                                      `display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,0.8fr) minmax(0,1.1fr);gap:8px;padding:12px;min-height:44px;align-items:center;font-size:12px;font-weight:600;background:${e?.zebra ?? ``};font-variant-numeric:tabular-nums;cursor:pointer;animation:rowIn .5s ease-out;`,
                                                    ),
                                                    onClick: e?.open,
                                                    children: [
                                                      `
                `,
                                                      (0, JSXRuntime.jsxs)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            display: `flex`,
                                                            flexDirection: `column`,
                                                            gap: `1px`,
                                                            minWidth: `0`,
                                                          },
                                                          children: [
                                                            (0, JSXRuntime.jsx)(
                                                              `span`,
                                                              {
                                                                style: {
                                                                  whiteSpace: `nowrap`,
                                                                  overflow: `hidden`,
                                                                  textOverflow: `ellipsis`,
                                                                },
                                                                children:
                                                                  renderContent(
                                                                    e?.game,
                                                                  ),
                                                              },
                                                            ),
                                                            (0,
                                                            JSXRuntime.jsxs)(
                                                              `span`,
                                                              {
                                                                style:
                                                                  resolveStyle(
                                                                    `font-size:10px;color:${e?.userColor ?? ``};opacity:0.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,
                                                                  ),
                                                                children: [
                                                                  renderContent(
                                                                    e?.user,
                                                                  ),
                                                                  ` · `,
                                                                  renderContent(
                                                                    e?.time,
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                      `
                `,
                                                      (0, JSXRuntime.jsxs)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            textAlign: `right`,
                                                            color: `var(--bb-text-3,#6B6C73)`,
                                                          },
                                                          children: [
                                                            renderContent(
                                                              e?.mult,
                                                            ),
                                                            `×`,
                                                          ],
                                                        },
                                                      ),
                                                      `
                `,
                                                      (0, JSXRuntime.jsxs)(
                                                        `span`,
                                                        {
                                                          style: resolveStyle(
                                                            `text-align:right;color:${e?.payColor ?? ``};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,
                                                          ),
                                                          children: [
                                                            `$ `,
                                                            renderContent(
                                                              e?.payout,
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                      `
              `,
                                                    ],
                                                  },
                                                  e?.id,
                                                ),
                                                `
            `,
                                              ],
                                            },
                                            t,
                                          ),
                                        ),
                                        `
            `,
                                        e.betsEmpty
                                          ? (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsx)(
                                                  `div`,
                                                  {
                                                    style: {
                                                      padding: `28px 16px`,
                                                      textAlign: `center`,
                                                      color: `var(--bb-text-3,#6B6C73)`,
                                                      fontWeight: `600`,
                                                      fontSize: `13px`,
                                                    },
                                                    children: `Todavía no hay apuestas para mostrar.`,
                                                  },
                                                ),
                                              },
                                            )
                                          : null,
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
            e.view?.loading
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};`,
                      ),
                      children: [
                        `
        `,
                        e.skel?.home
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `16px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `grid`,
                                        gridTemplateColumns: `repeat(auto-fit,minmax(300px,1fr))`,
                                        gap: `12px`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            height: `200px`,
                                            borderRadius: `8px`,
                                            background: `var(--bb-surface,#EFEFF1)`,
                                            animation: `skel 1.2s ease-in-out infinite`,
                                          },
                                        }),
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            height: `200px`,
                                            borderRadius: `8px`,
                                            background: `var(--bb-surface,#EFEFF1)`,
                                            animation: `skel 1.2s ease-in-out infinite`,
                                          },
                                        }),
                                      ],
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        height: `44px`,
                                        borderRadius: `6px`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        animation: `skel 1.2s ease-in-out infinite`,
                                      },
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        height: `18px`,
                                        width: `160px`,
                                        borderRadius: `4px`,
                                        background: `var(--bb-surface-2,#E5E5E8)`,
                                        animation: `skel 1.2s ease-in-out infinite`,
                                      },
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        display: `flex`,
                                        gap: `10px`,
                                        overflow: `hidden`,
                                      },
                                      children: asArray(e.skelTiles).map(
                                        (t, n) =>
                                          (0, JSXRuntime.jsx)(
                                            React.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsx)(
                                                `div`,
                                                {
                                                  style: resolveStyle(
                                                    `flex:0 0 ${e.tileBasis ?? ``};aspect-ratio:3/4;border-radius:6px;background:var(--bb-surface,#EFEFF1);animation:skel 1.2s ease-in-out infinite;`,
                                                  ),
                                                },
                                              ),
                                            },
                                            n,
                                          ),
                                      ),
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
                        e.skel?.grid
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `16px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        height: `28px`,
                                        width: `220px`,
                                        borderRadius: `6px`,
                                        background: `var(--bb-surface-2,#E5E5E8)`,
                                        animation: `skel 1.2s ease-in-out infinite`,
                                      },
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        height: `44px`,
                                        borderRadius: `6px`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        animation: `skel 1.2s ease-in-out infinite`,
                                      },
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: resolveStyle(
                                        `display:grid;grid-template-columns:${e.skelGridCols ?? ``};gap:10px;`,
                                      ),
                                      children: asArray(e.skelTiles).map(
                                        (e, t) =>
                                          (0, JSXRuntime.jsx)(
                                            React.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsx)(
                                                `div`,
                                                {
                                                  style: {
                                                    aspectRatio: `3/4`,
                                                    borderRadius: `6px`,
                                                    background: `var(--bb-surface,#EFEFF1)`,
                                                    animation: `skel 1.2s ease-in-out infinite`,
                                                  },
                                                },
                                              ),
                                            },
                                            t,
                                          ),
                                      ),
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
                        e.skel?.table
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `14px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        height: `28px`,
                                        width: `200px`,
                                        borderRadius: `6px`,
                                        background: `var(--bb-surface-2,#E5E5E8)`,
                                        animation: `skel 1.2s ease-in-out infinite`,
                                      },
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `grid`,
                                        gridTemplateColumns: `repeat(auto-fit,minmax(180px,1fr))`,
                                        gap: `10px`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            height: `92px`,
                                            borderRadius: `8px`,
                                            background: `var(--bb-surface,#EFEFF1)`,
                                            animation: `skel 1.2s ease-in-out infinite`,
                                          },
                                        }),
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            height: `92px`,
                                            borderRadius: `8px`,
                                            background: `var(--bb-surface,#EFEFF1)`,
                                            animation: `skel 1.2s ease-in-out infinite`,
                                          },
                                        }),
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            height: `92px`,
                                            borderRadius: `8px`,
                                            background: `var(--bb-surface,#EFEFF1)`,
                                            animation: `skel 1.2s ease-in-out infinite`,
                                          },
                                        }),
                                      ],
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        height: `42px`,
                                        width: `300px`,
                                        maxWidth: `100%`,
                                        borderRadius: `8px`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        animation: `skel 1.2s ease-in-out infinite`,
                                      },
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        borderRadius: `8px`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        padding: `6px 16px`,
                                        display: `flex`,
                                        flexDirection: `column`,
                                      },
                                      children: asArray(e.skelRows).map(
                                        (e, t) =>
                                          (0, JSXRuntime.jsx)(
                                            React.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsx)(
                                                `div`,
                                                {
                                                  style: {
                                                    height: `14px`,
                                                    margin: `14px 0`,
                                                    borderRadius: `3px`,
                                                    background: `var(--bb-surface-2,#E5E5E8)`,
                                                    animation: `skel 1.2s ease-in-out infinite`,
                                                  },
                                                },
                                              ),
                                            },
                                            t,
                                          ),
                                      ),
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
                        e.skel?.form
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `14px`,
                                    maxWidth: `760px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        height: `28px`,
                                        width: `220px`,
                                        borderRadius: `6px`,
                                        background: `var(--bb-surface-2,#E5E5E8)`,
                                        animation: `skel 1.2s ease-in-out infinite`,
                                      },
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        borderRadius: `8px`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        padding: `18px`,
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `14px`,
                                      },
                                      children: asArray(e.skelRows).map(
                                        (e, t) =>
                                          (0, JSXRuntime.jsx)(
                                            React.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsx)(
                                                `div`,
                                                {
                                                  style: {
                                                    height: `44px`,
                                                    borderRadius: `6px`,
                                                    background: `var(--bb-surface-2,#E5E5E8)`,
                                                    animation: `skel 1.2s ease-in-out infinite`,
                                                  },
                                                },
                                              ),
                                            },
                                            t,
                                          ),
                                      ),
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
                        e.skel?.game
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `16px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        height: `14px`,
                                        width: `200px`,
                                        borderRadius: `4px`,
                                        background: `var(--bb-surface-2,#E5E5E8)`,
                                        animation: `skel 1.2s ease-in-out infinite`,
                                      },
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        aspectRatio: `16/9`,
                                        maxWidth: `1040px`,
                                        width: `100%`,
                                        margin: `0 auto`,
                                        borderRadius: `8px`,
                                        background: `var(--bb-surface,#EFEFF1)`,
                                        animation: `skel 1.2s ease-in-out infinite`,
                                      },
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
                      ],
                    }),
                    `
    `,
                  ],
                })
              : null,
            `
    `,
            e.view?.error
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            maxWidth: `460px`,
                            margin: `60px auto`,
                            padding: `32px 24px`,
                            background: `var(--bb-surface,#EFEFF1)`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
                            borderRadius: `8px`,
                            display: `flex`,
                            flexDirection: `column`,
                            alignItems: `center`,
                            gap: `12px`,
                            textAlign: `center`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `52px`,
                                height: `52px`,
                                borderRadius: `50%`,
                                border: `2px solid var(--bb-acento,#0A0A0B)`,
                                color: `var(--bb-text,#0A0A0B)`,
                                display: `grid`,
                                placeItems: `center`,
                                fontWeight: `800`,
                                fontSize: `22px`,
                              },
                              children: `!`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontWeight: `800`,
                                fontSize: `18px`,
                              },
                              children: `Algo salió mal`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontSize: `13px`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                fontWeight: `600`,
                                lineHeight: `1.5`,
                              },
                              children: `No pudimos cargar esta sección. Revisá tu conexión e intentá de nuevo.`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              style: {
                                marginTop: `6px`,
                                height: `42px`,
                                padding: `0 22px`,
                                borderRadius: `6px`,
                                border: `none`,
                                background: `var(--bb-acento,#0A0A0B)`,
                                color: `var(--bb-sobre,#FFFFFF)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `800`,
                                fontSize: `13px`,
                                cursor: `pointer`,
                              },
                              onClick: e.retry,
                              children: `Reintentar`,
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
                })
              : null,
            `
    `,
            e.view?.gate
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            maxWidth: `460px`,
                            margin: `60px auto`,
                            padding: `32px 24px`,
                            background: `var(--bb-surface,#EFEFF1)`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
                            borderRadius: `8px`,
                            display: `flex`,
                            flexDirection: `column`,
                            alignItems: `center`,
                            gap: `12px`,
                            textAlign: `center`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`svg`, {
                              style: {
                                stroke: `var(--bb-acento,#0A0A0B)`,
                              },
                              width: `40`,
                              height: `40`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              strokeWidth: `2`,
                              children: [
                                (0, JSXRuntime.jsx)(`rect`, {
                                  x: `5`,
                                  y: `11`,
                                  width: `14`,
                                  height: `10`,
                                  rx: `2`,
                                }),
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `M8 11V7a4 4 0 018 0v4`,
                                }),
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontWeight: `800`,
                                fontSize: `18px`,
                              },
                              children: `Iniciá sesión para continuar`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontSize: `13px`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                fontWeight: `600`,
                              },
                              children: `Necesitás una cuenta para ver esta sección.`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                gap: `8px`,
                                marginTop: `6px`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  style: {
                                    height: `42px`,
                                    padding: `0 20px`,
                                    borderRadius: `6px`,
                                    border: `1px solid var(--bb-border,#D8D8DC)`,
                                    background: `transparent`,
                                    color: `var(--bb-text,#0A0A0B)`,
                                    fontFamily: `'Manrope',sans-serif`,
                                    fontWeight: `700`,
                                    fontSize: `13px`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.openLogin,
                                  children: `Iniciar sesión`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  style: {
                                    height: `42px`,
                                    padding: `0 20px`,
                                    borderRadius: `6px`,
                                    border: `none`,
                                    background: `var(--bb-acento,#0A0A0B)`,
                                    color: `var(--bb-sobre,#FFFFFF)`,
                                    fontFamily: `'Manrope',sans-serif`,
                                    fontWeight: `800`,
                                    fontSize: `13px`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.openRegister,
                                  children: `Registrarse`,
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
                    }),
                    `
    `,
                  ],
                })
              : null,
            `
    `,
            e.view?.game
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `sc-host`,
                          "data-sc-name": `ScreenGame`,
                          children: (0, JSXRuntime.jsx)(GamePlayerController, {
                            game: e.game,
                            isFav: e.isFav,
                            onToggleFav: e.toggleFav,
                            loggedIn: e.loggedIn,
                            demo: e.demo,
                            onAuth: e.openRegister,
                            onDeposit: e.openDeposit,
                            onOpenGame: e.openGame,
                          }),
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
            e.view?.wallet
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `sc-host`,
                          "data-sc-name": `ScreenWallet`,
                          children: (0, JSXRuntime.jsx)(WalletController, {
                            marcaNombre: e.marcaNombre,
                            marcaSlug: e.marcaSlug,
                            onToast: e.toast,
                            tab: e.walletTab,
                            balance: e.balanceNum,
                            kyc: e.kyc,
                            demo: e.demo,
                            onNav: e.navTo,
                            onBalance: e.addBalance,
                          }),
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
            e.view?.profile
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `sc-host`,
                          "data-sc-name": `ScreenProfile`,
                          children: (0, JSXRuntime.jsx)(
                            AccountSettingsController,
                            {
                              kyc: e.kyc,
                              onNav: e.navTo,
                              onLogout: e.logout,
                            },
                          ),
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
            e.view?.kyc
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `sc-host`,
                          "data-sc-name": `ScreenKYC`,
                          children: (0, JSXRuntime.jsx)(
                            IdentityVerificationController,
                            {
                              kyc: e.kyc,
                              onKyc: e.setKyc,
                              onNav: e.navTo,
                            },
                          ),
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
            e.view?.category
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `sc-host`,
                          "data-sc-name": `ScreenCategory`,
                          children: (0, JSXRuntime.jsx)(GameSearchController, {
                            kind: e.cat,
                            provider: e.provider,
                            favs: e.favs,
                            recent: e.recent,
                            demo: e.demo,
                            onOpenGame: e.openGame,
                            onNav: e.navTo,
                          }),
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
            e.view?.providers
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `sc-host`,
                          "data-sc-name": `ScreenProviders`,
                          children: (0, JSXRuntime.jsx)(ProvidersController, {
                            onNav: e.navTo,
                          }),
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
            e.view?.mybets
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `sc-host`,
                          "data-sc-name": `ScreenMyBets`,
                          children: (0, JSXRuntime.jsx)(BetHistoryController, {
                            onOpenBet: e.openBetExt,
                            demo: e.demo,
                            onOpenGame: e.openGame,
                            onNav: e.navTo,
                          }),
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
            e.view?.support
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `sc-host`,
                          "data-sc-name": `ScreenSupport`,
                          children: (0, JSXRuntime.jsx)(
                            HelpCenterController,
                            {},
                          ),
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
            e.view?.stats
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;z-index:1;max-width:1320px;width:100%;margin:0 auto;padding:${e.pagePad ?? ``};animation:screenIn .35s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `sc-host`,
                          "data-sc-name": `ScreenStats`,
                          children: (0, JSXRuntime.jsx)(StatisticsController, {
                            marcaNombre: e.marcaNombre,
                            onOpenGame: e.openGame,
                          }),
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
            `
    `,
            (0, JSXRuntime.jsxs)(`footer`, {
              style: {
                position: `relative`,
                zIndex: `1`,
                background: `var(--bb-sidebar,#ECECEF)`,
                borderTop: `1px solid var(--bb-divider,#E4E4E7)`,
                marginTop: `auto`,
              },
              children: [
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    maxWidth: `1320px`,
                    margin: `0 auto`,
                    padding: `40px 24px 28px`,
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `28px`,
                  },
                  children: [
                    `
        `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `grid`,
                        gridTemplateColumns: `repeat(auto-fit,minmax(160px,1fr))`,
                        gap: `24px`,
                      },
                      children: [
                        `
          `,
                        asArray(e.footerCols).map((e, t) =>
                          (0, JSXRuntime.jsxs)(
                            React.Fragment,
                            {
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `10px`,
                                  },
                                  children: [
                                    `
              `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        fontWeight: `800`,
                                        fontSize: `14px`,
                                      },
                                      children: renderContent(e?.title),
                                    }),
                                    `
              `,
                                    asArray(e?.links).map((e, t) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`a`, {
                                              style: {
                                                color: `var(--bb-text-3,#6B6C73)`,
                                                fontSize: `13px`,
                                                fontWeight: `600`,
                                              },
                                              href: `#`,
                                              children: renderContent(e),
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
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        height: `1px`,
                        background: `var(--bb-divider,#E4E4E7)`,
                      },
                    }),
                    `
        `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `space-between`,
                        gap: `20px`,
                        flexWrap: `wrap`,
                      },
                      children: [
                        `
          `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `14px`,
                            maxWidth: `640px`,
                          },
                          children: [
                            `
            `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                flexShrink: `0`,
                                width: `40px`,
                                height: `40px`,
                                borderRadius: `50%`,
                                border: `2px solid var(--bb-acento,#0A0A0B)`,
                                color: `var(--bb-text,#0A0A0B)`,
                                display: `grid`,
                                placeItems: `center`,
                                fontWeight: `800`,
                                fontSize: `13px`,
                              },
                              children: `18+`,
                            }),
                            `
            `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontSize: `12px`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                lineHeight: `1.5`,
                                textWrap: `pretty`,
                              },
                              children: `Jugá con responsabilidad. El juego puede generar adicción; si necesitás ayuda, consultá nuestra sección de juego responsable o poné límites de carga desde tu cuenta.`,
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
                            alignItems: `center`,
                            gap: `10px`,
                          },
                          children: [
                            `
            `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `8px`,
                                height: `36px`,
                                padding: `0 12px`,
                                background: `var(--bb-surface,#EFEFF1)`,
                                borderRadius: `6px`,
                                fontSize: `13px`,
                                fontWeight: `700`,
                                cursor: `pointer`,
                              },
                              children: [
                                (0, JSXRuntime.jsxs)(`svg`, {
                                  style: {
                                    stroke: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  width: `14`,
                                  height: `14`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  strokeWidth: `2`,
                                  children: [
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      cx: `12`,
                                      cy: `12`,
                                      r: `9`,
                                    }),
                                    (0, JSXRuntime.jsx)(`path`, {
                                      d: `M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18`,
                                    }),
                                  ],
                                }),
                                `Español`,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    color: `var(--bb-text-3,#6B6C73)`,
                                    fontSize: `10px`,
                                  },
                                  children: `▼`,
                                }),
                              ],
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
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `space-between`,
                        gap: `12px`,
                        flexWrap: `wrap`,
                        fontSize: `12px`,
                        color: `var(--bb-text-4,#8A8B92)`,
                      },
                      children: [
                        `
          `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `2px`,
                            fontFamily: `'Barlow Condensed',sans-serif`,
                            fontWeight: `800`,
                            fontSize: `20px`,
                            color: `var(--bb-text,#0A0A0B)`,
                          },
                          children: (0, JSXRuntime.jsx)(`img`, {
                            className: `${e.logoClase ?? ``}`,
                            style: {
                              height: `20px`,
                              width: `auto`,
                              display: `block`,
                            },
                            src: Ie(e.logoUrl),
                            alt: e.logoAlt,
                          }),
                        }),
                        `
          `,
                        (0, JSXRuntime.jsxs)(`span`, {
                          children: [
                            `© 2026 `,
                            renderContent(e.marcaNombre),
                            `. Todos los derechos reservados.`,
                          ],
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
            }),
            `
    `,
            e.isMobile
              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                  children: (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      height: `72px`,
                      flexShrink: `0`,
                      background: `var(--bb-bg-deep,#FFFFFF)`,
                    },
                  }),
                })
              : null,
            `
  `,
          ],
        }),
        `

  `,
        e.isMobile
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`nav`, {
                  style: {
                    position: `fixed`,
                    left: `0`,
                    right: `0`,
                    bottom: `0`,
                    zIndex: `30`,
                    height: `calc(64px + env(safe-area-inset-bottom))`,
                    paddingBottom: `env(safe-area-inset-bottom)`,
                    background: `rgba(var(--bb-bg-deep-rgb,255,255,255),0.97)`,
                    borderTop: `1px solid var(--bb-divider,#E4E4E7)`,
                    display: `grid`,
                    gridTemplateColumns: `repeat(5,1fr)`,
                  },
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`button`, {
                      style: resolveStyle(
                        `background:transparent;border:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:${e.mnav?.menu?.color ?? ``};font-family:'Manrope',sans-serif;font-size:10px;font-weight:700;cursor:pointer;min-height:48px;`,
                      ),
                      onClick: e.mnav?.menu?.go,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`svg`, {
                          width: `20`,
                          height: `20`,
                          viewBox: `0 0 24 24`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `2`,
                          children: (0, JSXRuntime.jsx)(`path`, {
                            d: `M4 6h16M4 12h16M4 18h16`,
                          }),
                        }),
                        renderContent(e.mnav?.menu?.label),
                        `
      `,
                      ],
                    }),
                    `
      `,
                    (0, JSXRuntime.jsxs)(`button`, {
                      style: resolveStyle(
                        `background:transparent;border:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:${e.mnav?.casino?.color ?? ``};font-family:'Manrope',sans-serif;font-size:10px;font-weight:700;cursor:pointer;min-height:48px;`,
                      ),
                      onClick: e.mnav?.casino?.go,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`svg`, {
                          width: `20`,
                          height: `20`,
                          viewBox: `0 0 24 24`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `2`,
                          children: [
                            (0, JSXRuntime.jsx)(`rect`, {
                              x: `4`,
                              y: `4`,
                              width: `16`,
                              height: `16`,
                              rx: `3`,
                            }),
                            (0, JSXRuntime.jsx)(`circle`, {
                              cx: `9`,
                              cy: `9`,
                              r: `1.2`,
                            }),
                            (0, JSXRuntime.jsx)(`circle`, {
                              cx: `15`,
                              cy: `15`,
                              r: `1.2`,
                            }),
                          ],
                        }),
                        renderContent(e.mnav?.casino?.label),
                        `
      `,
                      ],
                    }),
                    `
      `,
                    (0, JSXRuntime.jsxs)(`button`, {
                      style: resolveStyle(
                        `background:transparent;border:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:${e.mnav?.fav?.color ?? ``};font-family:'Manrope',sans-serif;font-size:10px;font-weight:700;cursor:pointer;min-height:48px;`,
                      ),
                      onClick: e.mnav?.fav?.go,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`svg`, {
                          width: `20`,
                          height: `20`,
                          viewBox: `0 0 24 24`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `2`,
                          children: (0, JSXRuntime.jsx)(`path`, {
                            d: `M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z`,
                          }),
                        }),
                        renderContent(e.mnav?.fav?.label),
                        `
      `,
                      ],
                    }),
                    `
      `,
                    (0, JSXRuntime.jsxs)(`button`, {
                      style: resolveStyle(
                        `background:transparent;border:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:${e.mnav?.bets?.color ?? ``};font-family:'Manrope',sans-serif;font-size:10px;font-weight:700;cursor:pointer;min-height:48px;`,
                      ),
                      onClick: e.mnav?.bets?.go,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`svg`, {
                          width: `20`,
                          height: `20`,
                          viewBox: `0 0 24 24`,
                          fill: `none`,
                          stroke: `currentColor`,
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
                        renderContent(e.mnav?.bets?.label),
                        `
      `,
                      ],
                    }),
                    `
      `,
                    (0, JSXRuntime.jsxs)(`button`, {
                      style: resolveStyle(
                        `background:transparent;border:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:${e.mnav?.me?.color ?? ``};font-family:'Manrope',sans-serif;font-size:10px;font-weight:700;cursor:pointer;min-height:48px;`,
                      ),
                      onClick: e.mnav?.me?.go,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`svg`, {
                          width: `20`,
                          height: `20`,
                          viewBox: `0 0 24 24`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `2`,
                          children: [
                            (0, JSXRuntime.jsx)(`circle`, {
                              cx: `12`,
                              cy: `8`,
                              r: `4`,
                            }),
                            (0, JSXRuntime.jsx)(`path`, {
                              d: `M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8`,
                            }),
                          ],
                        }),
                        renderContent(e.mnav?.me?.label),
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
        e.authOpen
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsx)(`div`, {
                  className: `sc-host`,
                  "data-sc-name": `AuthModal`,
                  children: (0, JSXRuntime.jsx)(AuthenticationController, {
                    marcaCodigo: e.marcaCodigo,
                    mode: e.authMode,
                    onClose: e.closeAuth,
                    onLogin: e.onLogin,
                  }),
                }),
                `
  `,
              ],
            })
          : null,
        `

  `,
        e.searchOpen
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `position:fixed;inset:0;z-index:70;background:rgba(0,0,0,0.72);backdrop-filter:blur(4px);display:flex;justify-content:center;align-items:flex-start;padding:${e.searchPad ?? ``};animation:fadeIn .18s ease-out;`,
                  ),
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        position: `absolute`,
                        inset: `0`,
                      },
                      onClick: e.closeSearch,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        width: `100%`,
                        maxWidth: `720px`,
                        maxHeight: `100%`,
                        display: `flex`,
                        flexDirection: `column`,
                        background: `var(--bb-surface,#EFEFF1)`,
                        border: `1px solid var(--bb-border,#D8D8DC)`,
                        borderRadius: `8px`,
                        overflow: `hidden`,
                        animation: `popIn .22s cubic-bezier(.2,.7,.2,1)`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `10px`,
                            height: `56px`,
                            padding: `0 12px 0 16px`,
                            borderBottom: `1px solid var(--bb-border,#D8D8DC)`,
                            flexShrink: `0`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`svg`, {
                              style: {
                                stroke: `var(--bb-acento,#0A0A0B)`,
                              },
                              width: `18`,
                              height: `18`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              strokeWidth: `2`,
                              children: [
                                (0, JSXRuntime.jsx)(`circle`, {
                                  cx: `11`,
                                  cy: `11`,
                                  r: `7`,
                                }),
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `M20 20l-4-4`,
                                }),
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`input`, {
                              style: {
                                flex: `1`,
                                minWidth: `0`,
                                height: `100%`,
                                background: `transparent`,
                                border: `none`,
                                outline: `none`,
                                color: `var(--bb-text,#0A0A0B)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontSize: `16px`,
                                fontWeight: `600`,
                              },
                              autoFocus: !0,
                              value: N(e.sq),
                              onChange: e.onSq,
                              onKeyDown: e.onSqKey,
                              placeholder: `Buscá juegos o proveedores`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              style: {
                                height: `28px`,
                                padding: `0 8px`,
                                borderRadius: `4px`,
                                border: `1px solid var(--bb-border,#D8D8DC)`,
                                background: `transparent`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `700`,
                                fontSize: `11px`,
                                cursor: `pointer`,
                              },
                              onClick: e.closeSearch,
                              title: `Cerrar (Esc)`,
                              children: `ESC`,
                            }),
                            `
        `,
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `nosb`,
                          style: {
                            overflowY: `auto`,
                            padding: `14px 16px 16px`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `16px`,
                          },
                          children: [
                            `
          `,
                            e.sqEmpty
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    e.hasRecentSearches
                                      ? (0, JSXRuntime.jsxs)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: [
                                              `
              `,
                                              (0, JSXRuntime.jsxs)(`div`, {
                                                style: {
                                                  display: `flex`,
                                                  flexDirection: `column`,
                                                  gap: `8px`,
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
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            fontSize: `12px`,
                                                            fontWeight: `800`,
                                                            color: `var(--bb-text-3,#6B6C73)`,
                                                          },
                                                          children: `BÚSQUEDAS RECIENTES`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `button`,
                                                        {
                                                          style: {
                                                            background: `transparent`,
                                                            border: `none`,
                                                            color: `var(--bb-text-3,#6B6C73)`,
                                                            fontFamily: `'Manrope',sans-serif`,
                                                            fontWeight: `700`,
                                                            fontSize: `12px`,
                                                            cursor: `pointer`,
                                                          },
                                                          onClick:
                                                            e.clearRecentSearches,
                                                          children: `Borrar`,
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                  `
                `,
                                                  (0, JSXRuntime.jsxs)(`div`, {
                                                    style: {
                                                      display: `flex`,
                                                      gap: `6px`,
                                                      flexWrap: `wrap`,
                                                    },
                                                    children: [
                                                      `
                  `,
                                                      asArray(
                                                        e.recentSearches,
                                                      ).map((e, t) =>
                                                        (0, JSXRuntime.jsxs)(
                                                          React.Fragment,
                                                          {
                                                            children: [
                                                              `
                    `,
                                                              (0,
                                                              JSXRuntime.jsxs)(
                                                                `button`,
                                                                {
                                                                  style: {
                                                                    height: `32px`,
                                                                    padding: `0 12px`,
                                                                    borderRadius: `6px`,
                                                                    border: `1px solid var(--bb-border,#D8D8DC)`,
                                                                    background: `var(--bb-bg,#F7F7F8)`,
                                                                    color: `var(--bb-text,#0A0A0B)`,
                                                                    fontFamily: `'Manrope',sans-serif`,
                                                                    fontWeight: `700`,
                                                                    fontSize: `12px`,
                                                                    cursor: `pointer`,
                                                                    display: `flex`,
                                                                    alignItems: `center`,
                                                                    gap: `6px`,
                                                                  },
                                                                  onClick:
                                                                    e?.use,
                                                                  children: [
                                                                    (0,
                                                                    JSXRuntime.jsxs)(
                                                                      `svg`,
                                                                      {
                                                                        style: {
                                                                          stroke: `var(--bb-text-3,#6B6C73)`,
                                                                        },
                                                                        width: `12`,
                                                                        height: `12`,
                                                                        viewBox: `0 0 24 24`,
                                                                        fill: `none`,
                                                                        strokeWidth: `2`,
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            JSXRuntime.jsx)(
                                                                              `circle`,
                                                                              {
                                                                                cx: `12`,
                                                                                cy: `12`,
                                                                                r: `9`,
                                                                              },
                                                                            ),
                                                                            (0,
                                                                            JSXRuntime.jsx)(
                                                                              `path`,
                                                                              {
                                                                                d: `M12 7v5l3 2`,
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    renderContent(
                                                                      e?.label,
                                                                    ),
                                                                  ],
                                                                },
                                                              ),
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
                                          },
                                        )
                                      : null,
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `8px`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontSize: `12px`,
                                            fontWeight: `800`,
                                            color: `var(--bb-text-3,#6B6C73)`,
                                          },
                                          children: `CATEGORÍAS`,
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            display: `grid`,
                                            gridTemplateColumns: `repeat(auto-fill,minmax(140px,1fr))`,
                                            gap: `6px`,
                                          },
                                          children: [
                                            `
                `,
                                            asArray(e.searchCats).map((e, t) =>
                                              (0, JSXRuntime.jsxs)(
                                                React.Fragment,
                                                {
                                                  children: [
                                                    `
                  `,
                                                    (0, JSXRuntime.jsx)(
                                                      `button`,
                                                      {
                                                        className: `bb0-5`,
                                                        style: {
                                                          height: `44px`,
                                                          padding: `0 12px`,
                                                          borderRadius: `6px`,
                                                          border: `1px solid var(--bb-border,#D8D8DC)`,
                                                          background: `var(--bb-bg,#F7F7F8)`,
                                                          color: `var(--bb-text,#0A0A0B)`,
                                                          fontFamily: `'Manrope',sans-serif`,
                                                          fontWeight: `700`,
                                                          fontSize: `13px`,
                                                          cursor: `pointer`,
                                                          textAlign: `left`,
                                                        },
                                                        onClick: e?.go,
                                                        children: renderContent(
                                                          e?.label,
                                                        ),
                                                      },
                                                    ),
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
                            e.sqHasResults
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `2px`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontSize: `12px`,
                                            fontWeight: `800`,
                                            color: `var(--bb-text-3,#6B6C73)`,
                                            marginBottom: `6px`,
                                          },
                                          children: renderContent(e.sqCount),
                                        }),
                                        `
              `,
                                        asArray(e.sqResults).map((e, t) =>
                                          (0, JSXRuntime.jsxs)(
                                            React.Fragment,
                                            {
                                              children: [
                                                `
                `,
                                                (0, JSXRuntime.jsxs)(`div`, {
                                                  className: `bb0-3`,
                                                  style: resolveStyle(
                                                    `display:flex;align-items:center;gap:12px;padding:8px;border-radius:6px;cursor:pointer;background:${e?.bg ?? ``};`,
                                                  ),
                                                  onClick: e?.open,
                                                  children: [
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
                                                      children: (0,
                                                      JSXRuntime.jsx)(
                                                        `image-slot`,
                                                        {
                                                          id: e?.slot,
                                                          shape: `rect`,
                                                          placeholder: ``,
                                                          src: Ie(e?.img),
                                                        },
                                                      ),
                                                    }),
                                                    `
                  `,
                                                    (0, JSXRuntime.jsxs)(
                                                      `div`,
                                                      {
                                                        style: {
                                                          flex: `1`,
                                                          minWidth: `0`,
                                                          display: `flex`,
                                                          flexDirection: `column`,
                                                          gap: `2px`,
                                                        },
                                                        children: [
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                fontWeight: `700`,
                                                                fontSize: `14px`,
                                                                whiteSpace: `nowrap`,
                                                                overflow: `hidden`,
                                                                textOverflow: `ellipsis`,
                                                              },
                                                              children:
                                                                renderContent(
                                                                  e?.name,
                                                                ),
                                                            },
                                                          ),
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                fontSize: `12px`,
                                                                fontWeight: `600`,
                                                                color: `var(--bb-text-3,#6B6C73)`,
                                                              },
                                                              children:
                                                                renderContent(
                                                                  e?.meta,
                                                                ),
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    `
                  `,
                                                    (0, JSXRuntime.jsx)(`svg`, {
                                                      style: {
                                                        stroke: `var(--bb-text-4,#8A8B92)`,
                                                      },
                                                      width: `14`,
                                                      height: `14`,
                                                      viewBox: `0 0 24 24`,
                                                      fill: `none`,
                                                      strokeWidth: `2`,
                                                      children: (0,
                                                      JSXRuntime.jsx)(`path`, {
                                                        d: `M9 6l6 6-6 6`,
                                                      }),
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
                                })
                              : null,
                            `
          `,
                            e.sqNoResults
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        padding: `28px 8px`,
                                        textAlign: `center`,
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `6px`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsxs)(`span`, {
                                          style: {
                                            fontWeight: `800`,
                                          },
                                          children: [
                                            `Sin resultados para «`,
                                            renderContent(e.sq),
                                            `»`,
                                          ],
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontSize: `13px`,
                                            color: `var(--bb-text-3,#6B6C73)`,
                                            fontWeight: `600`,
                                          },
                                          children: `Probá con otro nombre o proveedor.`,
                                        }),
                                      ],
                                    }),
                                    `
          `,
                                  ],
                                })
                              : null,
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
                }),
                `
  `,
              ],
            })
          : null,
        `

  `,
        e.betOpen
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `position:fixed;inset:0;z-index:70;background:rgba(0,0,0,0.72);display:flex;align-items:${e.sheetAlign ?? ``};justify-content:center;padding:${e.sheetPad ?? ``};animation:fadeIn .18s ease-out;`,
                  ),
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        position: `absolute`,
                        inset: `0`,
                      },
                      onClick: e.closeBet,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `nosb`,
                      style: resolveStyle(
                        `position:relative;width:100%;max-width:${e.sheetMax ?? ``};max-height:calc(100vh - 32px);overflow-y:auto;background:var(--bb-surface,#EFEFF1);border:1px solid var(--bb-border,#D8D8DC);border-radius:${e.sheetRadius ?? ``};padding-bottom:env(safe-area-inset-bottom);animation:popIn .22s cubic-bezier(.2,.7,.2,1);`,
                      ),
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `space-between`,
                            padding: `14px 16px`,
                            borderBottom: `1px solid var(--bb-border,#D8D8DC)`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `2px`,
                              },
                              children: [
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    fontWeight: `800`,
                                    fontSize: `15px`,
                                  },
                                  children: [
                                    `Apuesta `,
                                    renderContent(e.bet?.id),
                                  ],
                                }),
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    fontSize: `12px`,
                                    fontWeight: `600`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  children: [
                                    renderContent(e.bet?.user),
                                    ` · `,
                                    renderContent(e.bet?.time),
                                  ],
                                }),
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              style: {
                                width: `32px`,
                                height: `32px`,
                                borderRadius: `6px`,
                                background: `transparent`,
                                border: `none`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                fontSize: `20px`,
                                cursor: `pointer`,
                              },
                              onClick: e.closeBet,
                              title: `Cerrar`,
                              children: `×`,
                            }),
                            `
        `,
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            padding: `20px 16px`,
                            display: `flex`,
                            flexDirection: `column`,
                            alignItems: `center`,
                            gap: `4px`,
                            background: `var(--bb-bg,#F7F7F8)`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: resolveStyle(
                                `font-size:40px;font-weight:800;color:${e.bet?.multColor ?? ``};font-variant-numeric:tabular-nums;`,
                              ),
                              children: [renderContent(e.bet?.mult), `×`],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                fontSize: `14px`,
                                fontWeight: `700`,
                                color: `var(--bb-text-3,#6B6C73)`,
                              },
                              children: [
                                `Pago: `,
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: resolveStyle(
                                    `color:${e.bet?.payColor ?? ``};`,
                                  ),
                                  children: [
                                    `$ `,
                                    renderContent(e.bet?.payout),
                                  ],
                                }),
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
                            padding: `6px 16px`,
                            display: `flex`,
                            flexDirection: `column`,
                          },
                          children: [
                            `
          `,
                            asArray(e.bet?.rows).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        justifyContent: `space-between`,
                                        gap: `12px`,
                                        padding: `10px 0`,
                                        borderBottom: `1px solid var(--bb-surface-2,#E5E5E8)`,
                                        fontSize: `13px`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            color: `var(--bb-text-3,#6B6C73)`,
                                            fontWeight: `600`,
                                          },
                                          children: renderContent(e?.k),
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontWeight: `700`,
                                            textAlign: `right`,
                                          },
                                          children: renderContent(e?.v),
                                        }),
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
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `6px`,
                                padding: `12px 0`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontSize: `12px`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                    fontWeight: `600`,
                                  },
                                  children: `Semilla del servidor (hash)`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `8px`,
                                    padding: `8px 10px`,
                                    borderRadius: `6px`,
                                    background: `var(--bb-bg,#F7F7F8)`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        flex: `1`,
                                        minWidth: `0`,
                                        fontFamily: `ui-monospace,monospace`,
                                        fontSize: `11px`,
                                        color: `var(--bb-text-2,#3A3B40)`,
                                        whiteSpace: `nowrap`,
                                        overflow: `hidden`,
                                        textOverflow: `ellipsis`,
                                      },
                                      children: renderContent(e.bet?.seed),
                                    }),
                                    (0, JSXRuntime.jsx)(`button`, {
                                      style: {
                                        height: `26px`,
                                        padding: `0 8px`,
                                        borderRadius: `4px`,
                                        border: `none`,
                                        background: `var(--bb-surface-2,#E5E5E8)`,
                                        color: `var(--bb-text,#0A0A0B)`,
                                        fontFamily: `'Manrope',sans-serif`,
                                        fontWeight: `700`,
                                        fontSize: `11px`,
                                        cursor: `pointer`,
                                      },
                                      onClick: e.copySeed,
                                      title: `Copiar`,
                                      children: `Copiar`,
                                    }),
                                  ],
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
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `grid`,
                            gridTemplateColumns: `repeat(2,minmax(0,1fr))`,
                            gap: `8px`,
                            padding: `0 16px 16px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              style: {
                                height: `44px`,
                                borderRadius: `6px`,
                                border: `1px solid var(--bb-border,#D8D8DC)`,
                                background: `transparent`,
                                color: `var(--bb-text,#0A0A0B)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `700`,
                                fontSize: `13px`,
                                cursor: `pointer`,
                              },
                              onClick: e.shareBet,
                              children: `Compartir`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              style: {
                                height: `44px`,
                                borderRadius: `6px`,
                                border: `none`,
                                background: `var(--bb-acento,#0A0A0B)`,
                                color: `var(--bb-sobre,#FFFFFF)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `800`,
                                fontSize: `13px`,
                                cursor: `pointer`,
                              },
                              onClick: e.playBetGame,
                              children: `Jugar`,
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
                }),
                `
  `,
              ],
            })
          : null,
        `

  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: resolveStyle(
            `position:fixed;top:${e.toastTop ?? ``};right:16px;left:${e.toastLeft ?? ``};z-index:90;display:flex;flex-direction:column;align-items:flex-end;gap:8px;pointer-events:none;`,
          ),
          children: [
            `
    `,
            asArray(e.toasts).map((e, t) =>
              (0, JSXRuntime.jsxs)(
                React.Fragment,
                {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(
                      `div`,
                      {
                        style: {
                          pointerEvents: `auto`,
                          maxWidth: `360px`,
                          width: `100%`,
                          display: `flex`,
                          alignItems: `center`,
                          gap: `10px`,
                          padding: `12px 14px`,
                          borderRadius: `8px`,
                          background: `var(--bb-surface-2,#E5E5E8)`,
                          border: `1px solid var(--bb-border,#D8D8DC)`,
                          color: `var(--bb-text,#0A0A0B)`,
                          fontSize: `13px`,
                          fontWeight: `700`,
                          animation: `toastIn .28s cubic-bezier(.2,.7,.2,1)`,
                        },
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              flexShrink: `0`,
                              width: `20px`,
                              height: `20px`,
                              borderRadius: `50%`,
                              background: `var(--bb-acento,#0A0A0B)`,
                              display: `grid`,
                              placeItems: `center`,
                            },
                            children: (0, JSXRuntime.jsx)(`svg`, {
                              style: {
                                stroke: `var(--bb-sobre,#FFFFFF)`,
                              },
                              width: `11`,
                              height: `11`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              strokeWidth: `3.5`,
                              children: (0, JSXRuntime.jsx)(`path`, {
                                d: `M5 12l5 5 9-10`,
                              }),
                            }),
                          }),
                          `
        `,
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              flex: `1`,
                              minWidth: `0`,
                            },
                            children: renderContent(e?.text),
                          }),
                          `
      `,
                        ],
                      },
                      e?.id,
                    ),
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
      ],
    }),
  });
}
export { renderBlazeLobbyLayout };
