/**
 * blaze / wallet.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { renderContent, asArray, N, resolveStyle } from "./element-adapter.js";
function renderWalletLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `18px`,
        fontFamily: `'Manrope',sans-serif`,
        color: `var(--bb-text,#0A0A0B)`,
      },
      children: [
        `
  `,
        (0, JSXRuntime.jsx)(`div`, {
          style: {
            fontWeight: `800`,
            fontSize: `22px`,
          },
          children: `Billetera`,
        }),
        `
  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit,minmax(220px,1fr))`,
            gap: `10px`,
          },
          children: [
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                background: `var(--bb-acento,#0A0A0B)`,
                color: `var(--bb-sobre,#FFFFFF)`,
                borderRadius: `8px`,
                padding: `16px`,
                display: `flex`,
                flexDirection: `column`,
                gap: `4px`,
              },
              children: [
                `
      `,
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    fontSize: `12px`,
                    fontWeight: `800`,
                  },
                  children: `SALDO DISPONIBLE`,
                }),
                `
      `,
                (0, JSXRuntime.jsxs)(`span`, {
                  style: {
                    fontSize: `26px`,
                    fontWeight: `800`,
                    fontVariantNumeric: `tabular-nums`,
                  },
                  children: [`$ `, renderContent(e.balance)],
                }),
                `
      `,
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    fontSize: `11px`,
                    fontWeight: `700`,
                  },
                  children: `Pesos argentinos (ARS)`,
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
                gap: `4px`,
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
                  children: `SALDO DE BONO`,
                }),
                `
      `,
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    fontSize: `26px`,
                    fontWeight: `800`,
                    fontVariantNumeric: `tabular-nums`,
                  },
                  children: `$ 12.000,00`,
                }),
                `
      `,
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    fontSize: `11px`,
                    fontWeight: `600`,
                    color: `var(--bb-text-3,#6B6C73)`,
                  },
                  children: `Apostá $ 184.000 más para liberarlo`,
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
                alignItems: `center`,
                gap: `12px`,
              },
              children: [
                `
      `,
                (0, JSXRuntime.jsxs)(`span`, {
                  style: {
                    position: `relative`,
                    flexShrink: `0`,
                    width: `44px`,
                    height: `44px`,
                    borderRadius: `8px`,
                    background: `var(--bb-secondary,#E1E1E5)`,
                    color: `var(--bb-text,#0A0A0B)`,
                    display: `grid`,
                    placeItems: `center`,
                    fontWeight: `800`,
                    fontSize: `18px`,
                  },
                  children: [
                    `L`,
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        position: `absolute`,
                        right: `-3px`,
                        bottom: `-3px`,
                        width: `12px`,
                        height: `12px`,
                        borderRadius: `50%`,
                        background: `var(--bb-bg-deep,#FFFFFF)`,
                        border: `2px solid var(--bb-acento,#0A0A0B)`,
                      },
                    }),
                  ],
                }),
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    flex: `1`,
                    minWidth: `0`,
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
                      },
                      children: `TU CAJERO`,
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        fontWeight: `800`,
                        fontSize: `15px`,
                      },
                      children: `Lucas · En línea`,
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        fontSize: `11px`,
                        fontWeight: `600`,
                        color: `var(--bb-text-3,#6B6C73)`,
                      },
                      children: `Responde en ~2 min`,
                    }),
                    `
      `,
                  ],
                }),
                `
      `,
                (0, JSXRuntime.jsxs)(`a`, {
                  style: {
                    flexShrink: `0`,
                    height: `36px`,
                    padding: `0 12px`,
                    borderRadius: `6px`,
                    background: `var(--bb-secondary,#E1E1E5)`,
                    color: `var(--bb-text,#0A0A0B)`,
                    display: `flex`,
                    alignItems: `center`,
                    gap: `6px`,
                    fontWeight: `800`,
                    fontSize: `12px`,
                  },
                  href: e.waLink,
                  target: `_blank`,
                  rel: `noopener`,
                  children: [
                    `
        `,
                    (0, JSXRuntime.jsx)(`svg`, {
                      style: {
                        stroke: `var(--bb-bg-deep,#FFFFFF)`,
                      },
                      width: `14`,
                      height: `14`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      strokeWidth: `2.2`,
                      children: (0, JSXRuntime.jsx)(`path`, {
                        d: `M4 20l1.3-3.9A8 8 0 1112 20a8 8 0 01-4-1.1z`,
                      }),
                    }),
                    `WhatsApp`,
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
          className: `nosb`,
          style: {
            display: `flex`,
            gap: `4px`,
            padding: `4px`,
            background: `var(--bb-surface,#EFEFF1)`,
            borderRadius: `8px`,
            alignSelf: `flex-start`,
            maxWidth: `100%`,
            overflowX: `auto`,
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
                        `border:none;border-radius:6px;padding:9px 18px;background:${e?.bg ?? ``};color:${e?.fg ?? ``};font-family:'Manrope',sans-serif;font-weight:700;font-size:13px;cursor:pointer;white-space:nowrap;`,
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
        e.notice
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `space-between`,
                    gap: `12px`,
                    padding: `12px 14px`,
                    borderRadius: `6px`,
                    background: `rgba(var(--bb-acento-rgb,10,10,11),0.1)`,
                    border: `1px solid var(--bb-acento,#0A0A0B)`,
                    fontSize: `13px`,
                    fontWeight: `700`,
                  },
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsx)(`span`, {
                      children: renderContent(e.notice),
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`button`, {
                      style: {
                        background: `transparent`,
                        border: `none`,
                        color: `var(--bb-text-3,#6B6C73)`,
                        fontSize: `16px`,
                        cursor: `pointer`,
                      },
                      onClick: e.dismiss,
                      children: `×`,
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
        e.pending
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    background: `var(--bb-surface,#EFEFF1)`,
                    border: `1px solid var(--bb-acento,#0A0A0B)`,
                    borderRadius: `8px`,
                    padding: `18px`,
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
                        gap: `12px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            flexShrink: `0`,
                            width: `38px`,
                            height: `38px`,
                            borderRadius: `50%`,
                            border: `3px solid var(--bb-border,#D8D8DC)`,
                            borderTopColor: `var(--bb-acento,#0A0A0B)`,
                            display: `block`,
                          },
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `2px`,
                            minWidth: `0`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontWeight: `800`,
                                fontSize: `15px`,
                              },
                              children: renderContent(e.pendingTitle),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                fontSize: `12px`,
                                fontWeight: `600`,
                                color: `var(--bb-text-3,#6B6C73)`,
                              },
                              children: [
                                renderContent(e.pendingText),
                                ` · `,
                                renderContent(e.elapsed),
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
                        gap: `10px`,
                        flexWrap: `wrap`,
                        padding: `12px`,
                        borderRadius: `6px`,
                        background: `var(--bb-bg,#F7F7F8)`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            fontSize: `13px`,
                            fontWeight: `600`,
                            color: `var(--bb-text-2,#3A3B40)`,
                          },
                          children: `¿No te responden? Escribile a tu cajero por WhatsApp.`,
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`a`, {
                          style: {
                            height: `36px`,
                            padding: `0 14px`,
                            borderRadius: `6px`,
                            background: `var(--bb-acento,#0A0A0B)`,
                            color: `var(--bb-sobre,#FFFFFF)`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `6px`,
                            fontWeight: `800`,
                            fontSize: `12px`,
                            whiteSpace: `nowrap`,
                          },
                          href: e.waPendingLink,
                          target: `_blank`,
                          rel: `noopener`,
                          children: [
                            (0, JSXRuntime.jsx)(`svg`, {
                              style: {
                                stroke: `var(--bb-sobre,#FFFFFF)`,
                              },
                              width: `14`,
                              height: `14`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              strokeWidth: `2.2`,
                              children: (0, JSXRuntime.jsx)(`path`, {
                                d: `M4 20l1.3-3.9A8 8 0 1112 20a8 8 0 01-4-1.1z`,
                              }),
                            }),
                            `Abrir WhatsApp`,
                          ],
                        }),
                        `
      `,
                      ],
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`button`, {
                      style: {
                        alignSelf: `flex-start`,
                        background: `transparent`,
                        border: `none`,
                        padding: `0`,
                        color: `var(--bb-text-4,#8A8B92)`,
                        fontFamily: `'Manrope',sans-serif`,
                        fontWeight: `700`,
                        fontSize: `11px`,
                        cursor: `pointer`,
                        textDecoration: `underline`,
                      },
                      onClick: e.simConfirm,
                      children: `Demo: el cajero confirma ahora`,
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
        e.isDeposit
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `grid`,
                    gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,320px),1fr))`,
                    gap: `16px`,
                    alignItems: `start`,
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
                            alignItems: `center`,
                            gap: `10px`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `24px`,
                                height: `24px`,
                                borderRadius: `50%`,
                                background: `var(--bb-acento,#0A0A0B)`,
                                color: `var(--bb-sobre,#FFFFFF)`,
                                display: `grid`,
                                placeItems: `center`,
                                fontWeight: `800`,
                                fontSize: `12px`,
                              },
                              children: `1`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontWeight: `800`,
                                fontSize: `15px`,
                              },
                              children: `Transferí al alias de tu cajero`,
                            }),
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `8px`,
                            padding: `14px`,
                            borderRadius: `6px`,
                            background: `var(--bb-bg,#F7F7F8)`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
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
                              children: `ALIAS`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `space-between`,
                                gap: `10px`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `800`,
                                    fontSize: `18px`,
                                    overflowWrap: `anywhere`,
                                  },
                                  children: renderContent(e.alias),
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  style: resolveStyle(
                                    `flex-shrink:0;height:34px;padding:0 12px;border-radius:6px;border:none;background:${e.copyBg ?? ``};color:${e.copyFg ?? ``};font-family:'Manrope',sans-serif;font-weight:800;font-size:12px;cursor:pointer;`,
                                  ),
                                  onClick: e.copyAlias,
                                  children: renderContent(e.copyLabel),
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
                                gridTemplateColumns: `auto 1fr`,
                                gap: `4px 12px`,
                                fontSize: `12px`,
                                fontWeight: `600`,
                                marginTop: `4px`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    color: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  children: `Titular`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  children: `Lucas M. Pereyra`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    color: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  children: `Banco`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  children: `Mercado Pago`,
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
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            fontSize: `12px`,
                            color: `var(--bb-text-3,#6B6C73)`,
                            fontWeight: `600`,
                            lineHeight: `1.5`,
                          },
                          children: `Transferí desde una cuenta a tu nombre. Solo aceptamos pesos argentinos.`,
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
                            alignItems: `center`,
                            gap: `10px`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `24px`,
                                height: `24px`,
                                borderRadius: `50%`,
                                background: `var(--bb-acento,#0A0A0B)`,
                                color: `var(--bb-sobre,#FFFFFF)`,
                                display: `grid`,
                                placeItems: `center`,
                                fontWeight: `800`,
                                fontSize: `12px`,
                              },
                              children: `2`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontWeight: `800`,
                                fontSize: `15px`,
                              },
                              children: `Avisanos cuánto cargaste`,
                            }),
                          ],
                        }),
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
                              style: resolveStyle(
                                `display:flex;align-items:center;height:50px;background:var(--bb-bg,#F7F7F8);border:1px solid ${e.amtBorder ?? ``};border-radius:6px;padding:0 14px;gap:8px;`,
                              ),
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    color: `var(--bb-text-3,#6B6C73)`,
                                    fontWeight: `800`,
                                    fontSize: `18px`,
                                  },
                                  children: `$`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`input`, {
                                  style: {
                                    flex: `1`,
                                    minWidth: `0`,
                                    background: `transparent`,
                                    border: `none`,
                                    outline: `none`,
                                    color: `var(--bb-text,#0A0A0B)`,
                                    fontFamily: `'Manrope',sans-serif`,
                                    fontSize: `18px`,
                                    fontWeight: `800`,
                                  },
                                  type: `number`,
                                  value: N(e.amount),
                                  onChange: e.onAmount,
                                  placeholder: `0`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    color: `var(--bb-text-3,#6B6C73)`,
                                    fontWeight: `800`,
                                    fontSize: `12px`,
                                  },
                                  children: `ARS`,
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
                                gridTemplateColumns: `repeat(4,minmax(0,1fr))`,
                                gap: `6px`,
                              },
                              children: [
                                `
            `,
                                asArray(e.quickAmounts).map((e, t) =>
                                  (0, JSXRuntime.jsxs)(
                                    React.Fragment,
                                    {
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          style: resolveStyle(
                                            `height:44px;border-radius:6px;border:none;background:${e?.bg ?? ``};color:${e?.fg ?? ``};font-family:'Manrope',sans-serif;font-weight:800;font-size:12px;cursor:pointer;`,
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
                        (0, JSXRuntime.jsxs)(`label`, {
                          style: resolveStyle(
                            `display:flex;align-items:center;gap:10px;padding:12px;border-radius:6px;border:1.5px dashed ${e.receiptBorder ?? ``};background:var(--bb-bg,#F7F7F8);cursor:pointer;`,
                          ),
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`input`, {
                              style: {
                                display: `none`,
                              },
                              type: `file`,
                              accept: `image/*,application/pdf`,
                              onChange: e.onReceipt,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`svg`, {
                              style: {
                                stroke: `var(--bb-text-3,#6B6C73)`,
                              },
                              width: `18`,
                              height: `18`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              strokeWidth: `2`,
                              children: (0, JSXRuntime.jsx)(`path`, {
                                d: `M12 16V4M7 9l5-5 5 5M4 20h16`,
                              }),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                flex: `1`,
                                minWidth: `0`,
                                fontSize: `13px`,
                                fontWeight: `700`,
                                whiteSpace: `nowrap`,
                                overflow: `hidden`,
                                textOverflow: `ellipsis`,
                              },
                              children: renderContent(e.receiptLabel),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontSize: `11px`,
                                fontWeight: `700`,
                                color: `var(--bb-text-4,#8A8B92)`,
                              },
                              children: `Opcional`,
                            }),
                            `
        `,
                          ],
                        }),
                        `
        `,
                        e.depError
                          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                              children: (0, JSXRuntime.jsx)(`div`, {
                                style: {
                                  fontSize: `12px`,
                                  fontWeight: `700`,
                                  color: `var(--bb-text,#0A0A0B)`,
                                },
                                children: renderContent(e.depError),
                              }),
                            })
                          : null,
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          className: `bbc-0`,
                          style: resolveStyle(
                            `height:50px;border-radius:6px;border:none;background:var(--bb-acento,#0A0A0B);color:var(--bb-sobre,#FFFFFF);font-family:'Manrope',sans-serif;font-weight:800;font-size:14px;cursor:pointer;opacity:${e.depOpacity ?? ``};`,
                          ),
                          onClick: e.deposit,
                          children: renderContent(e.depCta),
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            fontSize: `11px`,
                            color: `var(--bb-text-4,#8A8B92)`,
                            textAlign: `center`,
                          },
                          children: `Mínimo $ 1.000 · El saldo se acredita cuando el cajero confirma la transferencia.`,
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
        e.isWithdraw
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
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
                    maxWidth: `560px`,
                  },
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        flexDirection: `column`,
                        gap: `6px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            justifyContent: `space-between`,
                            gap: `8px`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`label`, {
                              style: {
                                fontSize: `12px`,
                                fontWeight: `700`,
                                color: `var(--bb-text-3,#6B6C73)`,
                              },
                              children: `Monto a retirar`,
                            }),
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                fontSize: `12px`,
                                fontWeight: `700`,
                                color: `var(--bb-text-3,#6B6C73)`,
                              },
                              children: [
                                `Disponible: $ `,
                                renderContent(e.balance),
                              ],
                            }),
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            height: `50px`,
                            background: `var(--bb-bg,#F7F7F8)`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
                            borderRadius: `6px`,
                            padding: `0 6px 0 14px`,
                            gap: `8px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                color: `var(--bb-text-3,#6B6C73)`,
                                fontWeight: `800`,
                                fontSize: `18px`,
                              },
                              children: `$`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`input`, {
                              style: {
                                flex: `1`,
                                minWidth: `0`,
                                background: `transparent`,
                                border: `none`,
                                outline: `none`,
                                color: `var(--bb-text,#0A0A0B)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontSize: `18px`,
                                fontWeight: `800`,
                              },
                              type: `number`,
                              value: N(e.wdAmount),
                              onChange: e.onWdAmount,
                              placeholder: `0`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              style: {
                                height: `36px`,
                                padding: `0 12px`,
                                borderRadius: `5px`,
                                border: `none`,
                                background: `var(--bb-surface-2,#E5E5E8)`,
                                color: `var(--bb-text,#0A0A0B)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `800`,
                                fontSize: `12px`,
                                cursor: `pointer`,
                              },
                              onClick: e.wdMax,
                              children: `Todo`,
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
                        gap: `6px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`label`, {
                          style: {
                            fontSize: `12px`,
                            fontWeight: `700`,
                            color: `var(--bb-text-3,#6B6C73)`,
                          },
                          children: `Tu alias, CBU o CVU`,
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`input`, {
                          style: {
                            height: `46px`,
                            background: `var(--bb-bg,#F7F7F8)`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
                            borderRadius: `6px`,
                            padding: `0 12px`,
                            color: `var(--bb-text,#0A0A0B)`,
                            fontFamily: `'Manrope',sans-serif`,
                            fontSize: `14px`,
                            outline: `none`,
                          },
                          value: N(e.dest),
                          onChange: e.onDest,
                          placeholder: `marco.garcia.mp`,
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
                        gap: `6px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`label`, {
                          style: {
                            fontSize: `12px`,
                            fontWeight: `700`,
                            color: `var(--bb-text-3,#6B6C73)`,
                          },
                          children: `Titular de la cuenta`,
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`input`, {
                          style: {
                            height: `46px`,
                            background: `var(--bb-bg,#F7F7F8)`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
                            borderRadius: `6px`,
                            padding: `0 12px`,
                            color: `var(--bb-text,#0A0A0B)`,
                            fontFamily: `'Manrope',sans-serif`,
                            fontSize: `14px`,
                            outline: `none`,
                          },
                          value: N(e.holder),
                          onChange: e.onHolder,
                          placeholder: `Nombre y apellido`,
                        }),
                        `
      `,
                      ],
                    }),
                    `
      `,
                    e.wdError
                      ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                          children: (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              fontSize: `12px`,
                              fontWeight: `700`,
                              color: `var(--bb-text,#0A0A0B)`,
                            },
                            children: renderContent(e.wdError),
                          }),
                        })
                      : null,
                    `
      `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `bbc-1`,
                      style: resolveStyle(
                        `height:50px;border-radius:6px;border:none;background:var(--bb-secondary,#E1E1E5);color:var(--bb-text,#0A0A0B);font-family:'Manrope',sans-serif;font-weight:800;font-size:14px;cursor:pointer;opacity:${e.wdOpacity ?? ``};`,
                      ),
                      onClick: e.withdraw,
                      children: `Pedir retiro`,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontSize: `11px`,
                        color: `var(--bb-text-4,#8A8B92)`,
                        lineHeight: `1.5`,
                      },
                      children: `Mínimo $ 2.000. Tu cajero te transfiere a la cuenta indicada; la cuenta tiene que estar a tu nombre.`,
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
        e.isHistory
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
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
                      style: {
                        display: `flex`,
                        gap: `6px`,
                        flexWrap: `wrap`,
                      },
                      children: [
                        `
        `,
                        asArray(e.filters).map((e, t) =>
                          (0, JSXRuntime.jsxs)(
                            React.Fragment,
                            {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  style: resolveStyle(
                                    `height:34px;padding:0 12px;border-radius:6px;border:1px solid ${e?.border ?? ``};background:${e?.bg ?? ``};color:var(--bb-text,#0A0A0B);font-family:'Manrope',sans-serif;font-weight:700;font-size:12px;cursor:pointer;`,
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
                    e.hasHistory
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
                                    minWidth: `560px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `grid`,
                                        gridTemplateColumns: `1fr 0.9fr 1.3fr 1fr 1fr`,
                                        gap: `12px`,
                                        padding: `12px 16px`,
                                        fontSize: `12px`,
                                        fontWeight: `700`,
                                        color: `var(--bb-text-3,#6B6C73)`,
                                        borderBottom: `1px solid var(--bb-border,#D8D8DC)`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          children: `Fecha`,
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          children: `Tipo`,
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          children: `Detalle`,
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            textAlign: `right`,
                                          },
                                          children: `Monto`,
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            textAlign: `right`,
                                          },
                                          children: `Estado`,
                                        }),
                                      ],
                                    }),
                                    `
            `,
                                    asArray(e.history).map((e, t) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                display: `grid`,
                                                gridTemplateColumns: `1fr 0.9fr 1.3fr 1fr 1fr`,
                                                gap: `12px`,
                                                padding: `12px 16px`,
                                                fontSize: `13px`,
                                                fontWeight: `600`,
                                                borderBottom: `1px solid var(--bb-surface-2,#E5E5E8)`,
                                                alignItems: `center`,
                                                fontVariantNumeric: `tabular-nums`,
                                              },
                                              children: [
                                                `
                `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    color: `var(--bb-text-3,#6B6C73)`,
                                                  },
                                                  children: renderContent(
                                                    e?.date,
                                                  ),
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  children: renderContent(
                                                    e?.type,
                                                  ),
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    color: `var(--bb-text-3,#6B6C73)`,
                                                    whiteSpace: `nowrap`,
                                                    overflow: `hidden`,
                                                    textOverflow: `ellipsis`,
                                                  },
                                                  children: renderContent(
                                                    e?.detail,
                                                  ),
                                                }),
                                                `
                `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: resolveStyle(
                                                    `text-align:right;color:${e?.amtColor ?? ``};`,
                                                  ),
                                                  children: renderContent(
                                                    e?.amount,
                                                  ),
                                                }),
                                                `
                `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    display: `flex`,
                                                    justifyContent: `flex-end`,
                                                  },
                                                  children: (0, JSXRuntime.jsx)(
                                                    `span`,
                                                    {
                                                      style: resolveStyle(
                                                        `font-size:11px;font-weight:800;padding:3px 8px;border-radius:4px;background:${e?.stBg ?? ``};color:${e?.stFg ?? ``};white-space:nowrap;`,
                                                      ),
                                                      children: renderContent(
                                                        e?.status,
                                                      ),
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
                    e.noHistory
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                padding: `44px 20px`,
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
                                  children: `Todavía no tenés movimientos`,
                                }),
                                `
          `,
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    fontSize: `13px`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                    fontWeight: `600`,
                                  },
                                  children: `Tus cargas, retiros y bonos van a aparecer acá.`,
                                }),
                                `
          `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  style: {
                                    marginTop: `6px`,
                                    height: `42px`,
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
                                  onClick: e.toDeposit,
                                  children: `Cargar saldo`,
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
      ],
    }),
  });
}
let Pt, Ft, It, Lt, Rt, zt;
var WalletController;
function initializeWallet() {
  Pt = (e) =>
    e.toLocaleString(`es-AR`, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: `always`,
    });
  Ft = (e) =>
    e.toLocaleString(`es-AR`, {
      maximumFractionDigits: 0,
      useGrouping: `always`,
    });
  It = (e) => (e || `blazebet`) + `.caja.lucas`;
  Lt = (e) => `https://wa.me/5491100000000?text=` + encodeURIComponent(e);
  Rt = [
    {
      date: `29/09 21:14`,
      type: `Carga`,
      detail: `Transferencia a blazebet.caja.lucas`,
      amount: 2e4,
      status: `ok`,
    },
    {
      date: `28/09 18:02`,
      type: `Bono`,
      detail: `Cashback semanal`,
      amount: 3420,
      status: `ok`,
    },
    {
      date: `26/09 12:40`,
      type: `Retiro`,
      detail: `A marco.garcia.mp`,
      amount: -45e3,
      status: `ok`,
    },
    {
      date: `24/09 23:55`,
      type: `Carga`,
      detail: `Transferencia a blazebet.caja.lucas`,
      amount: 5e4,
      status: `ok`,
    },
    {
      date: `22/09 10:11`,
      type: `Carga`,
      detail: `Transferencia a blazebet.caja.lucas`,
      amount: 1e4,
      status: `rejected`,
    },
  ];
  zt = {
    ok: [
      `Acreditado`,
      `rgba(var(--bb-text-rgb,10,10,11),0.08)`,
      `var(--bb-text,#0A0A0B)`,
    ],
    pending: [
      `Esperando cajero`,
      `rgba(var(--bb-text-rgb,10,10,11),0.15)`,
      `var(--bb-text,#0A0A0B)`,
    ],
    rejected: [
      `Rechazado`,
      `var(--bb-divider,#E4E4E7)`,
      `var(--bb-text,#0A0A0B)`,
    ],
  };
  WalletController = class extends React.Component {
    state = {
      tab:
        this.props.tab === `withdraw`
          ? `withdraw`
          : this.props.tab === `history`
            ? `history`
            : `deposit`,
      amount: ``,
      receipt: null,
      depError: ``,
      notice: ``,
      copied: !1,
      dest: ``,
      holder: ``,
      wdAmount: ``,
      wdError: ``,
      filter: `all`,
      history: Rt,
      pending: null,
      now: Date.now(),
    };
    componentDidMount() {
      this.clock = setInterval(
        () =>
          this.state.pending &&
          this.setState({
            now: Date.now(),
          }),
        1e3,
      );
    }
    componentWillUnmount() {
      (clearInterval(this.clock),
        clearTimeout(this.auto),
        clearTimeout(this.ct));
    }
    stamp() {
      let e = new Date(),
        t = (e) => String(e).padStart(2, `0`);
      return (
        t(e.getDate()) +
        `/` +
        t(e.getMonth() + 1) +
        ` ` +
        t(e.getHours()) +
        `:` +
        t(e.getMinutes())
      );
    }
    startPending(e, t, n) {
      (this.setState({
        pending: {
          kind: e,
          amt: t,
          id: n,
          at: Date.now(),
        },
        now: Date.now(),
      }),
        clearTimeout(this.auto),
        (this.auto = setTimeout(() => this.confirm(), 9e3)));
    }
    confirm = () => {
      let e = this.state.pending;
      e &&
        (clearTimeout(this.auto),
        e.kind === `dep` && this.props.onBalance?.(e.amt),
        this.props.onToast?.(
          e.kind === `dep`
            ? `Carga acreditada: $ ` + Pt(e.amt)
            : `Retiro enviado: $ ` + Pt(e.amt),
        ),
        this.setState((t) => ({
          pending: null,
          notice:
            e.kind === `dep`
              ? `Tu cajero confirmó la carga: se acreditaron $ ` +
                Pt(e.amt) +
                `.`
              : `Tu cajero te transfirió $ ` + Pt(e.amt) + `.`,
          history: t.history.map((t) =>
            t.id === e.id
              ? {
                  ...t,
                  status: `ok`,
                }
              : t,
          ),
        })));
    };
    renderVals() {
      let e = this.state,
        t = this.props.balance ?? 15e4,
        n = (e) => ({
          bg: e ? `var(--bb-acento,#0A0A0B)` : `transparent`,
          fg: e ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text-3,#6B6C73)`,
        }),
        r = (e) => ({
          bg: e
            ? `rgba(var(--bb-acento-rgb,10,10,11),0.12)`
            : `var(--bb-bg,#F7F7F8)`,
          border: e ? `var(--bb-acento,#0A0A0B)` : `var(--bb-border,#D8D8DC)`,
        }),
        i = parseFloat(e.amount) || 0,
        a = this.props.demo === `empty`,
        o = {
          dep: `Carga`,
          wd: `Retiro`,
          bonus: `Bono`,
        },
        s = (a ? [] : e.history).filter(
          (t) => e.filter === `all` || t.type === o[e.filter],
        ),
        c = e.pending ? Math.floor((e.now - e.pending.at) / 1e3) : 0,
        l = !!e.pending;
      return {
        balance: Pt(t),
        waLink: Lt(
          `Hola Lucas, soy Marco_27 (` +
            (this.props.marcaNombre || `BlazeBet`) +
            `).`,
        ),
        tabs: [
          [`deposit`, `Cargar`],
          [`withdraw`, `Retirar`],
          [`history`, `Historial`],
        ].map(([t, r]) => ({
          label: r,
          ...n(e.tab === t),
          select: () =>
            this.setState({
              tab: t,
            }),
        })),
        isDeposit: e.tab === `deposit`,
        isWithdraw: e.tab === `withdraw`,
        isHistory: e.tab === `history`,
        notice: e.notice,
        dismiss: () =>
          this.setState({
            notice: ``,
          }),
        pending: l,
        pendingTitle:
          e.pending?.kind === `dep`
            ? `Esperando que tu cajero confirme la carga de $ ` +
              Pt(e.pending.amt)
            : l
              ? `Tu cajero está procesando el retiro de $ ` + Pt(e.pending.amt)
              : ``,
        pendingText:
          e.pending?.kind === `dep`
            ? `Suele tardar menos de 5 minutos`
            : `Te avisamos cuando te transfiera`,
        elapsed:
          String(Math.floor(c / 60)).padStart(2, `0`) +
          `:` +
          String(c % 60).padStart(2, `0`),
        waPendingLink: Lt(
          e.pending
            ? `Hola Lucas, soy Marco_27. ` +
                (e.pending.kind === `dep`
                  ? `Hice una carga de $ ` +
                    Pt(e.pending.amt) +
                    ` y todavía no se acreditó.`
                  : `Pedí un retiro de $ ` +
                    Pt(e.pending.amt) +
                    ` y todavía no lo recibí.`)
            : ``,
        ),
        simConfirm: this.confirm,
        alias: It(this.props.marcaSlug),
        copyAlias: () => {
          (navigator.clipboard
            ?.writeText(It(this.props.marcaSlug))
            .catch(() => {}),
            this.props.onToast?.(`Alias copiado`),
            this.setState({
              copied: !0,
            }),
            clearTimeout(this.ct),
            (this.ct = setTimeout(
              () =>
                this.setState({
                  copied: !1,
                }),
              1800,
            )));
        },
        copyLabel: e.copied ? `Copiado ✓` : `Copiar`,
        copyBg: e.copied
          ? `var(--bb-surface-2,#E5E5E8)`
          : `var(--bb-acento,#0A0A0B)`,
        copyFg: e.copied ? `var(--bb-text,#0A0A0B)` : `var(--bb-sobre,#FFFFFF)`,
        amount: e.amount,
        amtBorder: e.depError
          ? `var(--bb-acento,#0A0A0B)`
          : `var(--bb-border,#D8D8DC)`,
        onAmount: (e) =>
          this.setState({
            amount: e.target.value,
            depError: ``,
          }),
        quickAmounts: [5e3, 1e4, 2e4, 5e4].map((e) => ({
          label: `$ ` + Ft(e),
          bg:
            i === e
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-surface-2,#E5E5E8)`,
          fg: i === e ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text,#0A0A0B)`,
          select: () =>
            this.setState({
              amount: String(e),
              depError: ``,
            }),
        })),
        onReceipt: (e) => {
          let t = e.target.files && e.target.files[0];
          t &&
            this.setState({
              receipt: t.name,
            });
        },
        receiptLabel: e.receipt ? e.receipt : `Adjuntar comprobante`,
        receiptBorder: e.receipt
          ? `var(--bb-acento,#0A0A0B)`
          : `var(--bb-border-strong,#C2C2C7)`,
        depError: e.depError,
        depCta: l
          ? `Tenés una operación en curso`
          : i > 0
            ? `Ya transferí $ ` + Pt(i)
            : `Ya transferí`,
        depOpacity: l ? 0.5 : 1,
        deposit: () => {
          if (l) return;
          if (i < 1e3)
            return this.setState({
              depError: `La carga mínima es de $ 1.000.`,
            });
          if (i > 1e6)
            return this.setState({
              depError: `Supera tu límite diario de carga ($ 1.000.000).`,
            });
          let e = Date.now();
          (this.setState((t) => ({
            amount: ``,
            receipt: null,
            history: [
              {
                id: e,
                date: this.stamp(),
                type: `Carga`,
                detail: `Transferencia a blazebet.caja.lucas`,
                amount: i,
                status: `pending`,
              },
              ...t.history,
            ],
          })),
            this.startPending(`dep`, i, e));
        },
        wdAmount: e.wdAmount,
        onWdAmount: (e) =>
          this.setState({
            wdAmount: e.target.value,
            wdError: ``,
          }),
        wdMax: () =>
          this.setState({
            wdAmount: String(t),
            wdError: ``,
          }),
        dest: e.dest,
        onDest: (e) =>
          this.setState({
            dest: e.target.value,
            wdError: ``,
          }),
        holder: e.holder,
        onHolder: (e) =>
          this.setState({
            holder: e.target.value,
            wdError: ``,
          }),
        wdError: e.wdError,
        wdOpacity: l ? 0.5 : 1,
        withdraw: () => {
          if (l)
            return this.setState({
              wdError: `Esperá a que tu cajero termine la operación en curso.`,
            });
          let n = parseFloat(e.wdAmount) || 0;
          if (n < 2e3)
            return this.setState({
              wdError: `El retiro mínimo es de $ 2.000.`,
            });
          if (n > t)
            return this.setState({
              wdError: `No tenés saldo suficiente.`,
            });
          let r = e.dest.trim();
          if (!(/^\d{22}$/.test(r) || /^[a-zA-Z0-9.\-]{6,20}$/.test(r)))
            return this.setState({
              wdError: `Ingresá un alias (6 a 20 caracteres) o un CBU/CVU de 22 dígitos.`,
            });
          if (e.holder.trim().split(/\s+/).length < 2)
            return this.setState({
              wdError: `Ingresá nombre y apellido del titular.`,
            });
          this.props.onBalance?.(-n);
          let i = Date.now();
          (this.setState((e) => ({
            wdAmount: ``,
            history: [
              {
                id: i,
                date: this.stamp(),
                type: `Retiro`,
                detail: `A ` + r,
                amount: -n,
                status: `pending`,
              },
              ...e.history,
            ],
          })),
            this.startPending(`wd`, n, i));
        },
        filters: [
          [`all`, `Todo`],
          [`dep`, `Cargas`],
          [`wd`, `Retiros`],
          [`bonus`, `Bonos`],
        ].map(([t, n]) => ({
          label: n,
          ...r(e.filter === t),
          select: () =>
            this.setState({
              filter: t,
            }),
        })),
        hasHistory: s.length > 0,
        noHistory: s.length === 0,
        history: s.map((e) => ({
          ...e,
          detail: e.detail
            .split(`blazebet.caja.lucas`)
            .join(It(this.props.marcaSlug)),
          amount: (e.amount > 0 ? `+ $ ` : `− $ `) + Pt(Math.abs(e.amount)),
          amtColor:
            e.amount > 0
              ? `var(--bb-text,#0A0A0B)`
              : `var(--bb-text-3,#6B6C73)`,
          status: zt[e.status][0],
          stBg: zt[e.status][1],
          stFg: zt[e.status][2],
        })),
        toDeposit: () =>
          this.setState({
            tab: `deposit`,
          }),
      };
    }
    render() {
      return renderWalletLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { WalletController, initializeWallet };
