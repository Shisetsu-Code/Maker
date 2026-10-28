/**
 * blaze / game-player.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { A } from "./game-catalog.js";
import {
  Ae,
  renderContent,
  asArray,
  Ie,
  resolveStyle,
} from "./element-adapter.js";
function renderGamePlayerLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `20px`,
        fontFamily: `'Manrope',sans-serif`,
        color: `var(--bb-text,#0A0A0B)`,
      },
      children: [
        `
  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `flex`,
            alignItems: `center`,
            gap: `8px`,
            fontSize: `12px`,
            fontWeight: `600`,
            color: `var(--bb-text-3,#6B6C73)`,
            flexWrap: `wrap`,
          },
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              children: `Casino`,
            }),
            (0, JSXRuntime.jsx)(`span`, {
              children: `/`,
            }),
            (0, JSXRuntime.jsx)(`span`, {
              children: `Slots`,
            }),
            (0, JSXRuntime.jsx)(`span`, {
              children: `/`,
            }),
            (0, JSXRuntime.jsx)(`span`, {
              style: {
                color: `var(--bb-text,#0A0A0B)`,
              },
              children: renderContent(e.name),
            }),
          ],
        }),
        `

  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: resolveStyle(
            `display:flex;flex-direction:column;border-radius:8px;overflow:hidden;background:var(--bb-bg-deep,#FFFFFF);border:1px solid var(--bb-surface-2,#E5E5E8);max-width:${e.playerMax ?? ``};width:100%;margin:0 auto;transition:max-width .3s;`,
          ),
          children: [
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                position: `relative`,
                aspectRatio: `16/9`,
                background: `var(--bb-bg-deep,#FFFFFF)`,
              },
              ref: e.playerRef,
              children: [
                `
      `,
                e.idle
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                          },
                          children: (0, JSXRuntime.jsx)(`image-slot`, {
                            id: e.slot,
                            shape: `rect`,
                            placeholder: e.name,
                            src: Ie(e.img),
                          }),
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                            pointerEvents: `none`,
                            background: `linear-gradient(180deg,rgba(var(--bb-bg-deep-rgb,255,255,255),0.25),rgba(var(--bb-bg-deep-rgb,255,255,255),0.8))`,
                          },
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                            display: `flex`,
                            flexDirection: `column`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            gap: `14px`,
                            padding: `20px`,
                            textAlign: `center`,
                            pointerEvents: `none`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontFamily: `'Barlow Condensed',sans-serif`,
                                fontWeight: `800`,
                                fontSize: `clamp(30px,5vw,56px)`,
                                lineHeight: `0.95`,
                                textTransform: `uppercase`,
                              },
                              children: renderContent(e.name),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontSize: `13px`,
                                fontWeight: `700`,
                                color: `var(--bb-text-2,#3A3B40)`,
                                textTransform: `uppercase`,
                                letterSpacing: `0.5px`,
                              },
                              children: renderContent(e.provider),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                gap: `8px`,
                                flexWrap: `wrap`,
                                justifyContent: `center`,
                                pointerEvents: `auto`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  className: `bb3-0`,
                                  style: {
                                    height: `46px`,
                                    padding: `0 24px`,
                                    borderRadius: `6px`,
                                    border: `none`,
                                    background: `var(--bb-acento,#0A0A0B)`,
                                    color: `var(--bb-sobre,#FFFFFF)`,
                                    fontFamily: `'Manrope',sans-serif`,
                                    fontWeight: `800`,
                                    fontSize: `14px`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.playReal,
                                  children: renderContent(e.realLabel),
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  className: `bb3-1`,
                                  style: {
                                    height: `46px`,
                                    padding: `0 24px`,
                                    borderRadius: `6px`,
                                    border: `1px solid var(--bb-acento,#0A0A0B)`,
                                    background: `transparent`,
                                    color: `var(--bb-text,#0A0A0B)`,
                                    fontFamily: `'Manrope',sans-serif`,
                                    fontWeight: `800`,
                                    fontSize: `14px`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.playDemo,
                                  children: `Modo demo`,
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
                e.launching
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                            display: `flex`,
                            flexDirection: `column`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            gap: `14px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                width: `180px`,
                                height: `4px`,
                                borderRadius: `2px`,
                                background: `var(--bb-surface-2,#E5E5E8)`,
                                overflow: `hidden`,
                              },
                              children: (0, JSXRuntime.jsx)(`div`, {
                                style: resolveStyle(
                                  `height:100%;width:${e.progress ?? ``};background:var(--bb-acento,#0A0A0B);transition:width .2s;`,
                                ),
                              }),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                fontSize: `13px`,
                                fontWeight: `700`,
                                color: `var(--bb-text-3,#6B6C73)`,
                              },
                              children: [
                                `Cargando `,
                                renderContent(e.name),
                                `…`,
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
                e.playing
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                            display: `flex`,
                            flexDirection: `column`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            gap: `10px`,
                            background: `repeating-linear-gradient(45deg,var(--bb-stripe-a,#F4F4F5) 0 14px,var(--bb-stripe-b,#ECECEE) 14px 28px)`,
                            textAlign: `center`,
                            padding: `20px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontSize: `11px`,
                                fontWeight: `800`,
                                color: `var(--bb-sobre,#FFFFFF)`,
                                background: `var(--bb-acento,#0A0A0B)`,
                                padding: `4px 8px`,
                                borderRadius: `4px`,
                              },
                              children: renderContent(e.modeTag),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontWeight: `800`,
                                fontSize: `16px`,
                              },
                              children: `Aquí se carga el juego del proveedor`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                fontSize: `12px`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                fontWeight: `600`,
                                maxWidth: `340px`,
                              },
                              children: [
                                `Ventana del agregador de juegos (`,
                                renderContent(e.provider),
                                `). El saldo se sincroniza en tiempo real.`,
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              style: {
                                marginTop: `6px`,
                                height: `36px`,
                                padding: `0 16px`,
                                borderRadius: `6px`,
                                border: `1px solid var(--bb-border,#D8D8DC)`,
                                background: `var(--bb-surface,#EFEFF1)`,
                                color: `var(--bb-text,#0A0A0B)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `700`,
                                fontSize: `12px`,
                                cursor: `pointer`,
                              },
                              onClick: e.stop,
                              children: `Salir del juego`,
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
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-between`,
                gap: `10px`,
                padding: `10px 12px`,
                background: `var(--bb-surface,#EFEFF1)`,
                flexWrap: `wrap`,
              },
              children: [
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
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `bb3-2`,
                      style: {
                        width: `44px`,
                        height: `44px`,
                        borderRadius: `6px`,
                        border: `none`,
                        background: `transparent`,
                        display: `grid`,
                        placeItems: `center`,
                        cursor: `pointer`,
                      },
                      onClick: e.toggleFav,
                      title: `Favorito`,
                      children: (0, JSXRuntime.jsx)(`svg`, {
                        style: {
                          fill: e.favFill,
                          stroke: e.favStroke,
                        },
                        width: `18`,
                        height: `18`,
                        viewBox: `0 0 24 24`,
                        fill: e.favFill,
                        stroke: e.favStroke,
                        strokeWidth: `2`,
                        children: (0, JSXRuntime.jsx)(`path`, {
                          d: `M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z`,
                        }),
                      }),
                    }),
                    `
        `,
                    e.notSmall
                      ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                          children: (0, JSXRuntime.jsx)(`button`, {
                            className: `bb3-2`,
                            style: resolveStyle(
                              `width:44px;height:44px;border-radius:6px;border:none;background:${e.theatreBg ?? ``};display:grid;place-items:center;cursor:pointer;`,
                            ),
                            onClick: e.toggleTheatre,
                            title: `Modo cine`,
                            children: (0, JSXRuntime.jsx)(`svg`, {
                              style: {
                                stroke: `var(--bb-acento,#0A0A0B)`,
                              },
                              width: `18`,
                              height: `18`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              strokeWidth: `2`,
                              children: (0, JSXRuntime.jsx)(`rect`, {
                                x: `2`,
                                y: `6`,
                                width: `20`,
                                height: `12`,
                                rx: `2`,
                              }),
                            }),
                          }),
                        })
                      : null,
                    `
        `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `bb3-2`,
                      style: {
                        width: `44px`,
                        height: `44px`,
                        borderRadius: `6px`,
                        border: `none`,
                        background: `transparent`,
                        display: `grid`,
                        placeItems: `center`,
                        cursor: `pointer`,
                      },
                      onClick: e.fullscreen,
                      title: `Pantalla completa`,
                      children: (0, JSXRuntime.jsx)(`svg`, {
                        style: {
                          stroke: `var(--bb-acento,#0A0A0B)`,
                        },
                        width: `18`,
                        height: `18`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        strokeWidth: `2`,
                        children: (0, JSXRuntime.jsx)(`path`, {
                          d: `M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5`,
                        }),
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
                    alignItems: `center`,
                    gap: `10px`,
                    fontSize: `12px`,
                    fontWeight: `700`,
                    color: `var(--bb-text-3,#6B6C73)`,
                  },
                  children: [
                    `
        `,
                    (0, JSXRuntime.jsx)(`span`, {
                      children: `Demo`,
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: resolveStyle(
                        `width:40px;height:22px;border-radius:11px;background:${e.switchBg ?? ``};position:relative;cursor:pointer;transition:background .2s;`,
                      ),
                      onClick: e.toggleReal,
                      children: (0, JSXRuntime.jsx)(`span`, {
                        style: resolveStyle(
                          `position:absolute;top:3px;left:${e.knobLeft ?? ``};width:16px;height:16px;border-radius:50%;background:var(--bb-acento,#0A0A0B);transition:left .2s;`,
                        ),
                      }),
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        color: `var(--bb-text,#0A0A0B)`,
                      },
                      children: `Dinero real`,
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
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,360px),1fr))`,
            gap: `16px`,
          },
          children: [
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                background: `var(--bb-surface,#EFEFF1)`,
                borderRadius: `8px`,
                padding: `18px`,
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
                    gap: `4px`,
                    padding: `4px`,
                    background: `var(--bb-bg,#F7F7F8)`,
                    borderRadius: `8px`,
                    alignSelf: `flex-start`,
                  },
                  children: [
                    `
        `,
                    asArray(e.infoTabs).map((e, t) =>
                      (0, JSXRuntime.jsxs)(
                        React.Fragment,
                        {
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              style: resolveStyle(
                                `border:none;border-radius:6px;padding:8px 14px;background:${e?.bg ?? ``};color:${e?.fg ?? ``};font-family:'Manrope',sans-serif;font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap;`,
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
                e.showDesc
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            fontSize: `14px`,
                            lineHeight: `1.6`,
                            color: `var(--bb-text-2,#3A3B40)`,
                            textWrap: `pretty`,
                          },
                          children: [
                            renderContent(e.name),
                            ` es una slot de 5 rodillos y 20 líneas con símbolos expansivos, giros gratis con multiplicador progresivo y una función de compra de bono. Los giros gratis se activan con 3 o más símbolos scatter en cualquier posición.`,
                          ],
                        }),
                        `
      `,
                      ],
                    })
                  : null,
                `
      `,
                e.showWins
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                          },
                          children: [
                            `
          `,
                            asArray(e.wins).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `grid`,
                                        gridTemplateColumns: `1fr auto auto`,
                                        gap: `14px`,
                                        padding: `10px 0`,
                                        borderBottom: `1px solid var(--bb-surface-2,#E5E5E8)`,
                                        fontSize: `13px`,
                                        fontWeight: `600`,
                                        fontVariantNumeric: `tabular-nums`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          children: renderContent(e?.user),
                                        }),
                                        (0, JSXRuntime.jsxs)(`span`, {
                                          style: {
                                            color: `var(--bb-text-3,#6B6C73)`,
                                          },
                                          children: [
                                            renderContent(e?.mult),
                                            `×`,
                                          ],
                                        }),
                                        (0, JSXRuntime.jsxs)(`span`, {
                                          style: {
                                            color: `var(--bb-text,#0A0A0B)`,
                                            textAlign: `right`,
                                            minWidth: `90px`,
                                          },
                                          children: [
                                            `$ `,
                                            renderContent(e?.win),
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
                            e.winsEmpty
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      padding: `24px 0`,
                                      textAlign: `center`,
                                      color: `var(--bb-text-3,#6B6C73)`,
                                      fontSize: `13px`,
                                      fontWeight: `600`,
                                    },
                                    children: `Aún no hay grandes ganancias en este juego.`,
                                  }),
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
                e.showRules
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `8px`,
                            fontSize: `13px`,
                            lineHeight: `1.55`,
                            color: `var(--bb-text-2,#3A3B40)`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              children: `• Las ganancias se pagan de izquierda a derecha en líneas activas.`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              children: `• El wild sustituye a todos los símbolos excepto el scatter.`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              children: `• Un fallo de funcionamiento anula todos los pagos y jugadas.`,
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
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                background: `var(--bb-surface,#EFEFF1)`,
                borderRadius: `8px`,
                padding: `18px`,
                display: `grid`,
                gridTemplateColumns: `repeat(2,minmax(0,1fr))`,
                gap: `1px`,
                alignContent: `start`,
              },
              children: [
                `
      `,
                asArray(e.specs).map((e, t) =>
                  (0, JSXRuntime.jsxs)(
                    React.Fragment,
                    {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            padding: `12px 4px`,
                            borderBottom: `1px solid var(--bb-surface-2,#E5E5E8)`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `3px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontSize: `11px`,
                                fontWeight: `700`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                textTransform: `uppercase`,
                                letterSpacing: `0.4px`,
                              },
                              children: renderContent(e?.k),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontSize: `15px`,
                                fontWeight: `800`,
                              },
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
          ],
        }),
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
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                fontWeight: `800`,
                fontSize: `16px`,
              },
              children: `Juegos similares`,
            }),
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              className: `nosb`,
              style: {
                display: `flex`,
                gap: `10px`,
                overflowX: `auto`,
              },
              children: [
                `
      `,
                asArray(e.similar).map((t, n) =>
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
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                aspectRatio: `3/4`,
                                borderRadius: `6px`,
                                overflow: `hidden`,
                                background: `var(--bb-surface,#EFEFF1)`,
                              },
                              children: (0, JSXRuntime.jsx)(`image-slot`, {
                                id: t?.slot,
                                shape: `rect`,
                                placeholder: t?.name,
                                src: Ie(t?.img),
                              }),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontSize: `13px`,
                                fontWeight: `700`,
                                whiteSpace: `nowrap`,
                                overflow: `hidden`,
                                textOverflow: `ellipsis`,
                              },
                              children: renderContent(t?.name),
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
      ],
    }),
  });
}
let et;
let tt;
var GamePlayerController;
function initializeGamePlayer() {
  et = A.slots;
  A.proveedores;
  tt = (e) =>
    e.toLocaleString(`es-AR`, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: `always`,
    });
  GamePlayerController = class extends React.Component {
    state = {
      vw: Ae(),
      phase: `idle`,
      real: !0,
      fav: !1,
      theatre: !1,
      info: `desc`,
      progress: 0,
    };
    playerRef = React.createRef();
    componentDidMount() {
      ((this.onResize = () =>
        this.setState({
          vw: Ae(),
        })),
        window.addEventListener(`resize`, this.onResize),
        this.onResize());
    }
    componentWillUnmount() {
      (clearInterval(this.iv),
        window.removeEventListener(`resize`, this.onResize));
    }
    componentDidUpdate() {
      let e = this.props.game?.name;
      (this._lastGame === void 0 && (this._lastGame = e),
        e !== this._lastGame &&
          ((this._lastGame = e), !0) &&
          (clearInterval(this.iv),
          this.setState({
            phase: `idle`,
            progress: 0,
          })));
    }
    launch(e) {
      if (e && !this.props.loggedIn) {
        this.props.onAuth?.();
        return;
      }
      (clearInterval(this.iv),
        this.setState({
          phase: `launching`,
          real: e,
          progress: 0,
        }),
        (this.iv = setInterval(() => {
          this.setState((e) => {
            let t = e.progress + 18;
            return t >= 100
              ? (clearInterval(this.iv),
                {
                  progress: 100,
                  phase: `playing`,
                })
              : {
                  progress: t,
                };
          });
        }, 180)));
    }
    renderVals() {
      let e = this.state,
        t = this.props.game || {
          name: et[0],
          provider: A.prov(et[0]),
          slot: `v2-popular-0`,
        },
        n = t.name.length,
        r = (e) => ({
          bg: e ? `var(--bb-acento,#0A0A0B)` : `transparent`,
          fg: e ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text-3,#6B6C73)`,
        }),
        i =
          this.props.demo === `empty`
            ? []
            : Array.from(
                {
                  length: 5,
                },
                (e, t) => {
                  let r = [812, 340, 205.5, 128, 96.4][t] + n,
                    i = [2e3, 5e3, 1500, 1e4, 4e3][t];
                  return {
                    user: [
                      `Lucía_77`,
                      `Oculto`,
                      `RaulX`,
                      `Vale99`,
                      `Kike_Crash`,
                    ][t],
                    mult: tt(r),
                    win: tt(r * i),
                  };
                },
              );
      return {
        name: t.name,
        provider: t.provider,
        slot: t.slot,
        img: A.img(t.name),
        notSmall: e.vw >= 600,
        tileBasis: e.vw < 600 ? `calc((100% - 30px) / 4)` : `138px`,
        playerRef: this.playerRef,
        playerMax: e.theatre ? `100%` : `1040px`,
        idle: e.phase === `idle`,
        launching: e.phase === `launching`,
        playing: e.phase === `playing`,
        progress: e.progress + `%`,
        modeTag: e.real ? `DINERO REAL` : `MODO DEMO`,
        realLabel: this.props.loggedIn ? `Jugar` : `Registrate para jugar`,
        playReal: () => this.launch(!0),
        playDemo: () => this.launch(!1),
        stop: () => {
          (clearInterval(this.iv),
            this.setState({
              phase: `idle`,
            }));
        },
        toggleFav: () =>
          this.props.onToggleFav
            ? this.props.onToggleFav()
            : this.setState({
                fav: !e.fav,
              }),
        favFill:
          (this.props.isFav ?? e.fav) ? `var(--bb-acento,#0A0A0B)` : `none`,
        favStroke: (this.props.isFav ?? e.fav, `var(--bb-acento,#0A0A0B)`),
        toggleTheatre: () =>
          this.setState({
            theatre: !e.theatre,
          }),
        theatreBg: e.theatre ? `var(--bb-surface-2,#E5E5E8)` : `transparent`,
        fullscreen: () => {
          let e = this.playerRef.current;
          e && e.requestFullscreen && e.requestFullscreen().catch(() => {});
        },
        toggleReal: () =>
          this.setState({
            real: !e.real,
          }),
        switchBg: e.real
          ? `var(--bb-acento,#0A0A0B)`
          : `var(--bb-border-strong,#C2C2C7)`,
        knobLeft: e.real ? `21px` : `3px`,
        infoTabs: [
          [`desc`, `Descripción`],
          [`wins`, `Grandes ganancias`],
          [`rules`, `Reglas`],
        ].map(([t, n]) => ({
          label: n,
          ...r(e.info === t),
          select: () =>
            this.setState({
              info: t,
            }),
        })),
        showDesc: e.info === `desc`,
        showWins: e.info === `wins`,
        showRules: e.info === `rules`,
        wins: i,
        winsEmpty: i.length === 0,
        specs: [
          {
            k: `Proveedor`,
            v: t.provider,
          },
          {
            k: `RTP`,
            v: (96 + (n % 7) * 0.12).toFixed(2).replace(`.`, `,`) + `%`,
          },
          {
            k: `Volatilidad`,
            v: [`Media`, `Alta`, `Muy alta`][n % 3],
          },
          {
            k: `Ganancia máx.`,
            v: tt(5e3 + n * 250).replace(`,00`, ``) + `×`,
          },
          {
            k: `Apuesta mín./máx.`,
            v: `$ 200 / $ 100.000`,
          },
          {
            k: `Lanzamiento`,
            v: `Marzo 2026`,
          },
        ],
        similar: Array.from(
          {
            length: 10,
          },
          (e, t) => {
            let r = (n + t * 3) % et.length,
              i = et[r],
              a = A.prov(i),
              o =
                `game-` +
                i
                  .toLowerCase()
                  .normalize(`NFD`)
                  .replace(/[\u0300-\u036f]/g, ``)
                  .replace(/[^a-z0-9]+/g, `-`)
                  .replace(/^-|-$/g, ``);
            return {
              name: i,
              slot: o,
              img: A.img(i),
              open: () => this.props.onOpenGame?.(i, a, o),
            };
          },
        ).filter((e) => e.name !== t.name),
      };
    }
    render() {
      return renderGamePlayerLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { GamePlayerController, initializeGamePlayer };
