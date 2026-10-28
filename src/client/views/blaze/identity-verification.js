/**
 * blaze / identity-verification.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
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
function renderIdentityVerificationLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `18px`,
        fontFamily: `'Manrope',sans-serif`,
        color: `var(--bb-text,#0A0A0B)`,
        maxWidth: `760px`,
        width: `100%`,
        margin: `0 auto`,
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
              children: `Verificación de identidad`,
            }),
            `
    `,
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                fontSize: `13px`,
                color: `var(--bb-text-3,#6B6C73)`,
                fontWeight: `600`,
              },
              children: `Tus datos se cifran y solo los usa el equipo de cumplimiento.`,
            }),
            `
  `,
          ],
        }),
        `

  `,
        e.inFlow
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
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
                    asArray(e.steps).map((e, t) =>
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
                                gap: `6px`,
                              },
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `height:4px;border-radius:2px;background:${e?.bar ?? ``};`,
                                  ),
                                }),
                                `
          `,
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: resolveStyle(
                                    `font-size:12px;font-weight:700;color:${e?.color ?? ``};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,
                                  ),
                                  children: [
                                    renderContent(e?.n),
                                    `. `,
                                    renderContent(e?.label),
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
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    background: `var(--bb-surface,#EFEFF1)`,
                    borderRadius: `8px`,
                    padding: `20px`,
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `16px`,
                  },
                  children: [
                    `
      `,
                    e.error
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                padding: `10px 12px`,
                                borderRadius: `6px`,
                                background: `rgba(var(--bb-acento-rgb,10,10,11),0.1)`,
                                border: `1px solid var(--bb-acento,#0A0A0B)`,
                                fontSize: `13px`,
                                fontWeight: `700`,
                              },
                              children: renderContent(e.error),
                            }),
                            `
      `,
                          ],
                        })
                      : null,
                    `

      `,
                    e.s1
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `grid`,
                                gridTemplateColumns: `repeat(auto-fit,minmax(200px,1fr))`,
                                gap: `12px`,
                              },
                              children: [
                                `
          `,
                                asArray(e.fields).map((e, t) =>
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
                                              children: renderContent(e?.label),
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`input`, {
                                              style: resolveStyle(
                                                `height:44px;background:var(--bb-bg,#F7F7F8);border:1px solid ${e?.border ?? ``};border-radius:6px;padding:0 12px;color:var(--bb-text,#0A0A0B);font-family:'Manrope',sans-serif;font-size:14px;outline:none;color-scheme:light;`,
                                              ),
                                              type: e?.type,
                                              value: N(e?.value),
                                              onChange: e?.onChange,
                                              placeholder: e?.ph,
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
                    e.s2
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
                                    asArray(e.docTypes).map((e, t) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              style: resolveStyle(
                                                `height:38px;padding:0 14px;border-radius:6px;border:1px solid ${e?.border ?? ``};background:${e?.bg ?? ``};color:var(--bb-text,#0A0A0B);font-family:'Manrope',sans-serif;font-weight:700;font-size:13px;cursor:pointer;`,
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
                                    display: `grid`,
                                    gridTemplateColumns: `repeat(auto-fit,minmax(220px,1fr))`,
                                    gap: `12px`,
                                  },
                                  children: [
                                    `
            `,
                                    asArray(e.docSlots).map((e, t) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsxs)(`label`, {
                                              style: resolveStyle(
                                                `position:relative;aspect-ratio:16/10;border-radius:8px;border:1.5px dashed ${e?.border ?? ``};background:var(--bb-bg,#F7F7F8);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer;overflow:hidden;text-align:center;padding:12px;`,
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
                                                  onChange: e?.onFile,
                                                }),
                                                `
                `,
                                                e?.hasPreview
                                                  ? (0, JSXRuntime.jsx)(
                                                      JSXRuntime.Fragment,
                                                      {
                                                        children: (0,
                                                        JSXRuntime.jsx)(`img`, {
                                                          style: {
                                                            position: `absolute`,
                                                            inset: `0`,
                                                            width: `100%`,
                                                            height: `100%`,
                                                            objectFit: `cover`,
                                                          },
                                                          src: Ie(e?.preview),
                                                          alt: ``,
                                                        }),
                                                      },
                                                    )
                                                  : null,
                                                `
                `,
                                                e?.empty
                                                  ? (0, JSXRuntime.jsxs)(
                                                      JSXRuntime.Fragment,
                                                      {
                                                        children: [
                                                          `
                  `,
                                                          (0, JSXRuntime.jsx)(
                                                            `svg`,
                                                            {
                                                              style: {
                                                                stroke: `var(--bb-text-3,#6B6C73)`,
                                                              },
                                                              width: `26`,
                                                              height: `26`,
                                                              viewBox: `0 0 24 24`,
                                                              fill: `none`,
                                                              strokeWidth: `2`,
                                                              children: (0,
                                                              JSXRuntime.jsx)(
                                                                `path`,
                                                                {
                                                                  d: `M12 16V4M7 9l5-5 5 5M4 20h16`,
                                                                },
                                                              ),
                                                            },
                                                          ),
                                                          `
                  `,
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                fontWeight: `700`,
                                                                fontSize: `13px`,
                                                              },
                                                              children:
                                                                renderContent(
                                                                  e?.label,
                                                                ),
                                                            },
                                                          ),
                                                          `
                  `,
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                fontSize: `11px`,
                                                                color: `var(--bb-text-4,#8A8B92)`,
                                                                fontWeight: `600`,
                                                              },
                                                              children: `JPG, PNG o PDF · máx. 10 MB`,
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
                                                e?.fileOnly
                                                  ? (0, JSXRuntime.jsx)(
                                                      JSXRuntime.Fragment,
                                                      {
                                                        children: (0,
                                                        JSXRuntime.jsx)(
                                                          `span`,
                                                          {
                                                            style: {
                                                              fontWeight: `700`,
                                                              fontSize: `13px`,
                                                            },
                                                            children:
                                                              renderContent(
                                                                e?.fileName,
                                                              ),
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
                    e.s3
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `grid`,
                                gridTemplateColumns: `repeat(auto-fit,minmax(220px,1fr))`,
                                gap: `16px`,
                                alignItems: `start`,
                              },
                              children: [
                                `
          `,
                                asArray(e.selfieSlot).map((e, t) =>
                                  (0, JSXRuntime.jsxs)(
                                    React.Fragment,
                                    {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`label`, {
                                          style: resolveStyle(
                                            `position:relative;aspect-ratio:1/1;border-radius:8px;border:1.5px dashed ${e?.border ?? ``};background:var(--bb-bg,#F7F7F8);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer;overflow:hidden;text-align:center;padding:12px;`,
                                          ),
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`input`, {
                                              style: {
                                                display: `none`,
                                              },
                                              type: `file`,
                                              accept: `image/*`,
                                              capture: `user`,
                                              onChange: e?.onFile,
                                            }),
                                            `
              `,
                                            e?.hasPreview
                                              ? (0, JSXRuntime.jsx)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: (0,
                                                    JSXRuntime.jsx)(`img`, {
                                                      style: {
                                                        position: `absolute`,
                                                        inset: `0`,
                                                        width: `100%`,
                                                        height: `100%`,
                                                        objectFit: `cover`,
                                                      },
                                                      src: Ie(e?.preview),
                                                      alt: ``,
                                                    }),
                                                  },
                                                )
                                              : null,
                                            `
              `,
                                            e?.empty
                                              ? (0, JSXRuntime.jsxs)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: [
                                                      `
                `,
                                                      (0, JSXRuntime.jsxs)(
                                                        `svg`,
                                                        {
                                                          style: {
                                                            stroke: `var(--bb-text-3,#6B6C73)`,
                                                          },
                                                          width: `30`,
                                                          height: `30`,
                                                          viewBox: `0 0 24 24`,
                                                          fill: `none`,
                                                          strokeWidth: `2`,
                                                          children: [
                                                            (0, JSXRuntime.jsx)(
                                                              `circle`,
                                                              {
                                                                cx: `12`,
                                                                cy: `9`,
                                                                r: `4`,
                                                              },
                                                            ),
                                                            (0, JSXRuntime.jsx)(
                                                              `path`,
                                                              {
                                                                d: `M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8`,
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                      `
                `,
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            fontWeight: `700`,
                                                            fontSize: `13px`,
                                                          },
                                                          children: `Subí un selfie con tu documento`,
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
                                    gap: `10px`,
                                    fontSize: `13px`,
                                    fontWeight: `600`,
                                    color: `var(--bb-text-2,#3A3B40)`,
                                    lineHeight: `1.45`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        fontWeight: `800`,
                                        color: `var(--bb-text,#0A0A0B)`,
                                      },
                                      children: `Para que se apruebe a la primera:`,
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      children: `• Buena luz, sin reflejos ni sombras en la cara.`,
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      children: `• Sostené el documento junto a tu cara, sin tapar los datos.`,
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      children: `• Sin gafas de sol, gorra ni filtros.`,
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
                    e.s4
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
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
                                asArray(e.summary).map((e, t) =>
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
                                    gap: `10px`,
                                    alignItems: `flex-start`,
                                    cursor: `pointer`,
                                    fontSize: `12px`,
                                    fontWeight: `600`,
                                    color: `var(--bb-text-2,#3A3B40)`,
                                    lineHeight: `1.45`,
                                    marginTop: `6px`,
                                  },
                                  onClick: e.toggleDeclare,
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: resolveStyle(
                                        `flex-shrink:0;width:18px;height:18px;border-radius:4px;border:2px solid ${e.declBorder ?? ``};background:${e.declBg ?? ``};display:grid;place-items:center;color:var(--bb-sobre,#FFFFFF);font-size:12px;font-weight:800;`,
                                      ),
                                      children: renderContent(e.declMark),
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      children: `Declaro que los datos son verdaderos y que el documento me pertenece.`,
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
                      style: {
                        display: `flex`,
                        justifyContent: `space-between`,
                        gap: `10px`,
                        paddingTop: `4px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: resolveStyle(
                            `height:44px;padding:0 18px;border-radius:6px;border:1px solid var(--bb-border,#D8D8DC);background:transparent;color:var(--bb-text,#0A0A0B);font-family:'Manrope',sans-serif;font-weight:700;font-size:13px;cursor:pointer;visibility:${e.backVis ?? ``};`,
                          ),
                          onClick: e.back,
                          children: `Atrás`,
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: resolveStyle(
                            `height:44px;padding:0 22px;border-radius:6px;border:none;background:var(--bb-acento,#0A0A0B);color:var(--bb-sobre,#FFFFFF);font-family:'Manrope',sans-serif;font-weight:800;font-size:13px;cursor:pointer;opacity:${e.nextOpacity ?? ``};`,
                          ),
                          onClick: e.next,
                          children: renderContent(e.nextLabel),
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
        e.isPending
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    background: `var(--bb-surface,#EFEFF1)`,
                    borderRadius: `8px`,
                    padding: `36px 24px`,
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
                        width: `56px`,
                        height: `56px`,
                        borderRadius: `50%`,
                        border: `3px solid var(--bb-border,#D8D8DC)`,
                        borderTopColor: `var(--bb-acento,#0A0A0B)`,
                        display: `block`,
                      },
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontWeight: `800`,
                        fontSize: `18px`,
                      },
                      children: `Documentos en revisión`,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontSize: `13px`,
                        color: `var(--bb-text-3,#6B6C73)`,
                        fontWeight: `600`,
                        maxWidth: `420px`,
                        lineHeight: `1.5`,
                      },
                      children: `Normalmente tarda menos de 24 horas. Te avisamos por email.`,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        gap: `8px`,
                        flexWrap: `wrap`,
                        justifyContent: `center`,
                        marginTop: `6px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: {
                            height: `38px`,
                            padding: `0 14px`,
                            borderRadius: `6px`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
                            background: `transparent`,
                            color: `var(--bb-text,#0A0A0B)`,
                            fontFamily: `'Manrope',sans-serif`,
                            fontWeight: `700`,
                            fontSize: `12px`,
                            cursor: `pointer`,
                          },
                          onClick: e.simApprove,
                          children: `Demo: aprobar`,
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: {
                            height: `38px`,
                            padding: `0 14px`,
                            borderRadius: `6px`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
                            background: `transparent`,
                            color: `var(--bb-text,#0A0A0B)`,
                            fontFamily: `'Manrope',sans-serif`,
                            fontWeight: `700`,
                            fontSize: `12px`,
                            cursor: `pointer`,
                          },
                          onClick: e.simReject,
                          children: `Demo: rechazar`,
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
        e.isApproved
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    background: `var(--bb-surface,#EFEFF1)`,
                    borderRadius: `8px`,
                    padding: `36px 24px`,
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
                        width: `56px`,
                        height: `56px`,
                        borderRadius: `50%`,
                        background: `var(--bb-acento,#0A0A0B)`,
                        display: `grid`,
                        placeItems: `center`,
                      },
                      children: (0, JSXRuntime.jsx)(`svg`, {
                        style: {
                          stroke: `var(--bb-sobre,#FFFFFF)`,
                        },
                        width: `26`,
                        height: `26`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        strokeWidth: `3`,
                        children: (0, JSXRuntime.jsx)(`path`, {
                          d: `M5 12l5 5 9-10`,
                        }),
                      }),
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontWeight: `800`,
                        fontSize: `18px`,
                      },
                      children: `Identidad verificada`,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontSize: `13px`,
                        color: `var(--bb-text-3,#6B6C73)`,
                        fontWeight: `600`,
                      },
                      children: `Ya podés retirar sin límites de verificación.`,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`button`, {
                      style: {
                        marginTop: `6px`,
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
                      onClick: e.goWithdraw,
                      children: `Ir a retirar`,
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
        e.isRejected
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    background: `var(--bb-surface,#EFEFF1)`,
                    border: `1px solid var(--bb-acento,#0A0A0B)`,
                    borderRadius: `8px`,
                    padding: `36px 24px`,
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
                        width: `56px`,
                        height: `56px`,
                        borderRadius: `50%`,
                        border: `2px solid var(--bb-acento,#0A0A0B)`,
                        color: `var(--bb-text,#0A0A0B)`,
                        display: `grid`,
                        placeItems: `center`,
                        fontWeight: `800`,
                        fontSize: `24px`,
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
                      children: `No pudimos verificar tu documento`,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontSize: `13px`,
                        color: `var(--bb-text-3,#6B6C73)`,
                        fontWeight: `600`,
                        maxWidth: `420px`,
                        lineHeight: `1.5`,
                      },
                      children: `Motivo: la foto del documento está borrosa o recortada. Volvé a subirla con buena luz y las cuatro esquinas visibles.`,
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`button`, {
                      style: {
                        marginTop: `6px`,
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
                      onClick: e.retry,
                      children: `Volver a subir`,
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
let it, at, ot;
var IdentityVerificationController;
function initializeIdentityVerification() {
  it = [`Datos personales`, `Documento`, `Selfie`, `Revisión`];
  at = [
    [`first`, `Nombre`, `text`, `Marco`],
    [`last`, `Apellidos`, `text`, `García López`],
    [`dob`, `Fecha de nacimiento`, `date`, ``],
    [`nat`, `Nacionalidad`, `text`, `Española`],
    [`addr`, `Dirección`, `text`, `Calle Mayor 12, 3º B`],
    [`city`, `Ciudad`, `text`, `Madrid`],
    [`zip`, `Código postal`, `text`, `28013`],
  ];
  ot = [
    [`dni`, `DNI / NIE`],
    [`passport`, `Pasaporte`],
    [`license`, `Carné de conducir`],
  ];
  IdentityVerificationController = class extends React.Component {
    state = {
      status:
        this.props.kyc === `approved`
          ? `approved`
          : this.props.kyc === `pending`
            ? `pending`
            : `flow`,
      step: 0,
      data: {},
      triedNext: !1,
      doc: `dni`,
      files: {},
      error: ``,
      declare: !1,
    };
    componentWillUnmount() {
      Object.values(this.state.files).forEach(
        (e) => e?.url && URL.revokeObjectURL(e.url),
      );
    }
    setFile(e, t) {
      let n = t.target.files && t.target.files[0];
      if (!n) return;
      if (n.size > 10 * 1024 * 1024)
        return this.setState({
          error: `El archivo supera los 10 MB.`,
        });
      if (!/^image\/|pdf$/.test(n.type))
        return this.setState({
          error: `Formato no válido. Usa JPG, PNG o PDF.`,
        });
      let r = n.type.startsWith(`image/`) ? URL.createObjectURL(n) : null;
      this.setState((t) => ({
        error: ``,
        files: {
          ...t.files,
          [e]: {
            url: r,
            name: n.name,
          },
        },
      }));
    }
    slot(e, t) {
      let n = this.state.files[e];
      return {
        label: t,
        border:
          (this.state.triedNext && !n) || n
            ? `var(--bb-acento,#0A0A0B)`
            : `var(--bb-border-strong,#C2C2C7)`,
        hasPreview: !!(n && n.url),
        preview: n && n.url,
        fileOnly: !!(n && !n.url),
        fileName: n && n.name,
        empty: !n,
        onFile: (t) => this.setFile(e, t),
      };
    }
    validStep() {
      let e = this.state;
      return e.step === 0
        ? at.every(([t]) => (e.data[t] || ``).trim())
        : e.step === 1
          ? e.doc === `passport`
            ? !!e.files.front
            : !!(e.files.front && e.files.back)
          : e.step === 2
            ? !!e.files.selfie
            : e.declare;
    }
    renderVals() {
      let e = this.state,
        t = this.validStep(),
        n = (ot.find((t) => t[0] === e.doc) || [])[1],
        r = [
          `Completá todos los campos.`,
          `Subí las caras requeridas del documento.`,
          `Subí tu selfie para continuar.`,
          `Tenés que aceptar la declaración.`,
        ][e.step];
      return {
        inFlow: e.status === `flow`,
        isPending: e.status === `pending`,
        isApproved: e.status === `approved`,
        isRejected: e.status === `rejected`,
        steps: it.map((t, n) => ({
          n: n + 1,
          label: t,
          bar:
            n <= e.step
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-border,#D8D8DC)`,
          color:
            n === e.step
              ? `var(--bb-text,#0A0A0B)`
              : `var(--bb-text-3,#6B6C73)`,
        })),
        error: e.error,
        s1: e.step === 0,
        s2: e.step === 1,
        s3: e.step === 2,
        s4: e.step === 3,
        fields: at.map(([t, n, r, i]) => ({
          label: n,
          type: r,
          ph: i,
          value: e.data[t] || ``,
          border:
            e.triedNext && !(e.data[t] || ``).trim()
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-border,#D8D8DC)`,
          onChange: (e) =>
            this.setState((n) => ({
              data: {
                ...n.data,
                [t]: e.target.value,
              },
              error: ``,
            })),
        })),
        docTypes: ot.map(([t, n]) => ({
          label: n,
          bg:
            e.doc === t
              ? `rgba(var(--bb-acento-rgb,10,10,11),0.12)`
              : `var(--bb-bg,#F7F7F8)`,
          border:
            e.doc === t
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-border,#D8D8DC)`,
          select: () =>
            this.setState({
              doc: t,
            }),
        })),
        docSlots:
          e.doc === `passport`
            ? [this.slot(`front`, `Página con foto`)]
            : [
                this.slot(`front`, `Cara frontal`),
                this.slot(`back`, `Cara trasera`),
              ],
        selfieSlot: [this.slot(`selfie`, `Selfie`)],
        summary: [
          {
            k: `Nombre`,
            v: ((e.data.first || ``) + ` ` + (e.data.last || ``)).trim() || `—`,
          },
          {
            k: `Fecha de nacimiento`,
            v: e.data.dob || `—`,
          },
          {
            k: `Dirección`,
            v:
              [e.data.addr, e.data.zip, e.data.city]
                .filter(Boolean)
                .join(`, `) || `—`,
          },
          {
            k: `Documento`,
            v: n,
          },
          {
            k: `Selfie`,
            v: e.files.selfie ? `Subido` : `—`,
          },
        ],
        toggleDeclare: () =>
          this.setState({
            declare: !e.declare,
            error: ``,
          }),
        declBorder: e.declare
          ? `var(--bb-acento,#0A0A0B)`
          : `var(--bb-border-strong,#C2C2C7)`,
        declBg: e.declare ? `var(--bb-acento,#0A0A0B)` : `transparent`,
        declMark: e.declare ? `✓` : ``,
        backVis: e.step === 0 ? `hidden` : `visible`,
        back: () =>
          this.setState({
            step: Math.max(0, e.step - 1),
            error: ``,
            triedNext: !1,
          }),
        nextLabel: e.step === 3 ? `Enviar verificación` : `Continuar`,
        nextOpacity: t ? 1 : 0.6,
        next: () => {
          if (!t)
            return this.setState({
              triedNext: !0,
              error: r,
            });
          if (e.step < 3)
            return this.setState({
              step: e.step + 1,
              triedNext: !1,
              error: ``,
            });
          (this.setState({
            status: `pending`,
          }),
            this.props.onKyc?.(`pending`));
        },
        simApprove: () => {
          (this.setState({
            status: `approved`,
          }),
            this.props.onKyc?.(`approved`));
        },
        simReject: () => {
          (this.setState({
            status: `rejected`,
          }),
            this.props.onKyc?.(`none`));
        },
        retry: () =>
          this.setState({
            status: `flow`,
            step: 1,
            files: {},
            declare: !1,
            triedNext: !1,
            error: ``,
          }),
        goWithdraw: () =>
          this.props.onNav?.(`wallet`, {
            walletTab: `withdraw`,
          }),
      };
    }
    render() {
      return renderIdentityVerificationLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { IdentityVerificationController, initializeIdentityVerification };
