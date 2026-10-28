/**
 * blaze / account-settings.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import {
  Ae,
  renderContent,
  asArray,
  N,
  resolveStyle,
} from "./element-adapter.js";
function renderAccountSettingsLayout(e) {
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
          children: `Ajustes`,
        }),
        `
  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `flex`,
            gap: `16px`,
            flexWrap: `wrap`,
            alignItems: `flex-start`,
          },
          children: [
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              className: `nosb`,
              style: resolveStyle(
                `flex:${e.navFlex ?? ``};max-width:${e.navMax ?? ``};min-width:0;background:var(--bb-surface,#EFEFF1);border-radius:8px;padding:${e.navPad ?? ``};display:flex;flex-direction:${e.navDir ?? ``};gap:${e.navGap ?? ``};overflow-x:auto;`,
              ),
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
                            `text-align:left;white-space:nowrap;flex-shrink:0;border:none;border-radius:6px;padding:11px 12px;min-height:40px;background:${e?.bg ?? ``};color:${e?.fg ?? ``};font-family:'Manrope',sans-serif;font-weight:700;font-size:13px;cursor:pointer;`,
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
                flex: `999 1 420px`,
                minWidth: `0`,
                display: `flex`,
                flexDirection: `column`,
                gap: `14px`,
              },
              children: [
                `
      `,
                e.toast
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            padding: `10px 14px`,
                            borderRadius: `6px`,
                            background: `rgba(var(--bb-acento-rgb,10,10,11),0.12)`,
                            border: `1px solid var(--bb-acento,#0A0A0B)`,
                            fontSize: `13px`,
                            fontWeight: `700`,
                          },
                          children: renderContent(e.toast),
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
                e.tProfile
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
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `14px`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `56px`,
                                    height: `56px`,
                                    borderRadius: `8px`,
                                    background: `var(--bb-secondary,#E1E1E5)`,
                                    color: `var(--bb-text,#0A0A0B)`,
                                    display: `grid`,
                                    placeItems: `center`,
                                    fontWeight: `800`,
                                    fontSize: `22px`,
                                  },
                                  children: `M`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `3px`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontWeight: `800`,
                                        fontSize: `16px`,
                                      },
                                      children: `Marco_27`,
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontSize: `12px`,
                                        fontWeight: `600`,
                                        color: `var(--bb-text-3,#6B6C73)`,
                                      },
                                      children: `Miembro desde marzo 2026 · Oro`,
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
                                display: `grid`,
                                gridTemplateColumns: `repeat(auto-fit,minmax(220px,1fr))`,
                                gap: `12px`,
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
                                    (0, JSXRuntime.jsx)(`label`, {
                                      style: {
                                        fontSize: `12px`,
                                        fontWeight: `700`,
                                        color: `var(--bb-text-3,#6B6C73)`,
                                      },
                                      children: `Email`,
                                    }),
                                    (0, JSXRuntime.jsx)(`input`, {
                                      style: {
                                        height: `44px`,
                                        background: `var(--bb-bg,#F7F7F8)`,
                                        border: `1px solid var(--bb-border,#D8D8DC)`,
                                        borderRadius: `6px`,
                                        padding: `0 12px`,
                                        color: `var(--bb-text,#0A0A0B)`,
                                        fontFamily: `'Manrope',sans-serif`,
                                        fontSize: `14px`,
                                        outline: `none`,
                                      },
                                      value: N(e.email),
                                      onChange: e.onEmail,
                                    }),
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
                                    (0, JSXRuntime.jsx)(`label`, {
                                      style: {
                                        fontSize: `12px`,
                                        fontWeight: `700`,
                                        color: `var(--bb-text-3,#6B6C73)`,
                                      },
                                      children: `Teléfono`,
                                    }),
                                    (0, JSXRuntime.jsx)(`input`, {
                                      style: {
                                        height: `44px`,
                                        background: `var(--bb-bg,#F7F7F8)`,
                                        border: `1px solid var(--bb-border,#D8D8DC)`,
                                        borderRadius: `6px`,
                                        padding: `0 12px`,
                                        color: `var(--bb-text,#0A0A0B)`,
                                        fontFamily: `'Manrope',sans-serif`,
                                        fontSize: `14px`,
                                        outline: `none`,
                                      },
                                      value: N(e.phone),
                                      onChange: e.onPhone,
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
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `space-between`,
                                gap: `12px`,
                                padding: `12px 14px`,
                                borderRadius: `6px`,
                                background: `var(--bb-bg,#F7F7F8)`,
                                flexWrap: `wrap`,
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
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontWeight: `700`,
                                        fontSize: `13px`,
                                      },
                                      children: `Verificación de identidad`,
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: resolveStyle(
                                        `font-size:12px;font-weight:700;color:${e.kycColor ?? ``};`,
                                      ),
                                      children: renderContent(e.kycLabel),
                                    }),
                                  ],
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  style: {
                                    height: `36px`,
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
                                  onClick: e.goKyc,
                                  children: renderContent(e.kycCta),
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
                              onClick: e.save,
                              children: `Guardar cambios`,
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
                e.tSecurity
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
                            gap: `12px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontWeight: `800`,
                                fontSize: `15px`,
                              },
                              children: `Cambiar contraseña`,
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
                                `
            `,
                                (0, JSXRuntime.jsx)(`input`, {
                                  style: {
                                    height: `44px`,
                                    background: `var(--bb-bg,#F7F7F8)`,
                                    border: `1px solid var(--bb-border,#D8D8DC)`,
                                    borderRadius: `6px`,
                                    padding: `0 12px`,
                                    color: `var(--bb-text,#0A0A0B)`,
                                    fontFamily: `'Manrope',sans-serif`,
                                    fontSize: `14px`,
                                    outline: `none`,
                                  },
                                  type: `password`,
                                  value: N(e.pw1),
                                  onChange: e.onPw1,
                                  placeholder: `Nueva contraseña`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`input`, {
                                  style: {
                                    height: `44px`,
                                    background: `var(--bb-bg,#F7F7F8)`,
                                    border: `1px solid var(--bb-border,#D8D8DC)`,
                                    borderRadius: `6px`,
                                    padding: `0 12px`,
                                    color: `var(--bb-text,#0A0A0B)`,
                                    fontFamily: `'Manrope',sans-serif`,
                                    fontSize: `14px`,
                                    outline: `none`,
                                  },
                                  type: `password`,
                                  value: N(e.pw2),
                                  onChange: e.onPw2,
                                  placeholder: `Repite la contraseña`,
                                }),
                                `
          `,
                              ],
                            }),
                            `
          `,
                            e.pwError
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      fontSize: `12px`,
                                      fontWeight: `700`,
                                      color: `var(--bb-text,#0A0A0B)`,
                                    },
                                    children: renderContent(e.pwError),
                                  }),
                                })
                              : null,
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              style: {
                                alignSelf: `flex-start`,
                                height: `40px`,
                                padding: `0 18px`,
                                borderRadius: `6px`,
                                border: `none`,
                                background: `var(--bb-secondary,#E1E1E5)`,
                                color: `var(--bb-text,#0A0A0B)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `800`,
                                fontSize: `13px`,
                                cursor: `pointer`,
                              },
                              onClick: e.savePw,
                              children: `Actualizar contraseña`,
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
                            alignItems: `center`,
                            justifyContent: `space-between`,
                            gap: `14px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `3px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `800`,
                                    fontSize: `15px`,
                                  },
                                  children: `Verificación en dos pasos`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontSize: `12px`,
                                    fontWeight: `600`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  children: `Pide un código de tu app de autenticación al iniciar sesión.`,
                                }),
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: resolveStyle(
                                `flex-shrink:0;width:40px;height:22px;border-radius:11px;background:${e.t2fa?.bg ?? ``};position:relative;cursor:pointer;`,
                              ),
                              onClick: e.t2fa?.toggle,
                              children: (0, JSXRuntime.jsx)(`span`, {
                                style: resolveStyle(
                                  `position:absolute;top:3px;left:${e.t2fa?.left ?? ``};width:16px;height:16px;border-radius:50%;background:var(--bb-acento,#0A0A0B);transition:left .2s;`,
                                ),
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
                            background: `var(--bb-surface,#EFEFF1)`,
                            borderRadius: `8px`,
                            padding: `18px`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `6px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontWeight: `800`,
                                fontSize: `15px`,
                                marginBottom: `4px`,
                              },
                              children: `Sesiones activas`,
                            }),
                            `
          `,
                            asArray(e.sessions).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        alignItems: `center`,
                                        justifyContent: `space-between`,
                                        gap: `12px`,
                                        padding: `10px 0`,
                                        borderBottom: `1px solid var(--bb-surface-2,#E5E5E8)`,
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
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontWeight: `700`,
                                                fontSize: `13px`,
                                              },
                                              children: renderContent(
                                                e?.device,
                                              ),
                                            }),
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontSize: `12px`,
                                                color: `var(--bb-text-3,#6B6C73)`,
                                                fontWeight: `600`,
                                              },
                                              children: renderContent(e?.where),
                                            }),
                                          ],
                                        }),
                                        `
              `,
                                        e?.current
                                          ? (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsx)(
                                                  `span`,
                                                  {
                                                    style: {
                                                      fontSize: `11px`,
                                                      fontWeight: `800`,
                                                      color: `var(--bb-text,#0A0A0B)`,
                                                    },
                                                    children: `ESTA SESIÓN`,
                                                  },
                                                ),
                                              },
                                            )
                                          : null,
                                        `
              `,
                                        e?.other
                                          ? (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsx)(
                                                  `button`,
                                                  {
                                                    style: {
                                                      height: `32px`,
                                                      padding: `0 12px`,
                                                      borderRadius: `6px`,
                                                      border: `1px solid var(--bb-border,#D8D8DC)`,
                                                      background: `transparent`,
                                                      color: `var(--bb-text,#0A0A0B)`,
                                                      fontFamily: `'Manrope',sans-serif`,
                                                      fontWeight: `700`,
                                                      fontSize: `12px`,
                                                      cursor: `pointer`,
                                                    },
                                                    onClick: e?.close,
                                                    children: `Cerrar`,
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
                    })
                  : null,
                `

      `,
                `
      `,
                e.tRG
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
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `3px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `800`,
                                    fontSize: `15px`,
                                  },
                                  children: `Límites de carga`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontSize: `12px`,
                                    fontWeight: `600`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  children: `Las reducciones se aplican al instante; los aumentos, tras 24 horas.`,
                                }),
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
                                asArray(e.limits).map((e, t) =>
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
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                display: `flex`,
                                                alignItems: `center`,
                                                height: `44px`,
                                                background: `var(--bb-bg,#F7F7F8)`,
                                                border: `1px solid var(--bb-border,#D8D8DC)`,
                                                borderRadius: `6px`,
                                                padding: `0 12px`,
                                                gap: `6px`,
                                              },
                                              children: [
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
                                                    fontSize: `14px`,
                                                    fontWeight: `700`,
                                                  },
                                                  type: `number`,
                                                  value: N(e?.value),
                                                  onChange: e?.onChange,
                                                  placeholder: `Sin límite`,
                                                }),
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    color: `var(--bb-text-3,#6B6C73)`,
                                                    fontWeight: `800`,
                                                  },
                                                  children: `$`,
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
                                  children: `Recordatorio de sesión`,
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
                                    asArray(e.reminders).map((e, t) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              style: resolveStyle(
                                                `height:36px;padding:0 14px;border-radius:6px;border:1px solid ${e?.border ?? ``};background:${e?.bg ?? ``};color:var(--bb-text,#0A0A0B);font-family:'Manrope',sans-serif;font-weight:700;font-size:12px;cursor:pointer;`,
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
                            (0, JSXRuntime.jsx)(`button`, {
                              style: {
                                alignSelf: `flex-start`,
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
                              onClick: e.saveLimits,
                              children: `Guardar límites`,
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
                            gap: `12px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `3px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `800`,
                                    fontSize: `15px`,
                                  },
                                  children: `Tomar un descanso`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontSize: `12px`,
                                    fontWeight: `600`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  children: `Bloqueá tu cuenta por un tiempo. No vas a poder revertirlo hasta que termine el periodo.`,
                                }),
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
                                asArray(e.breaks).map((e, t) =>
                                  (0, JSXRuntime.jsxs)(
                                    React.Fragment,
                                    {
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          style: resolveStyle(
                                            `height:38px;padding:0 14px;border-radius:6px;border:1px solid ${e?.border ?? ``};background:${e?.bg ?? ``};color:var(--bb-text,#0A0A0B);font-family:'Manrope',sans-serif;font-weight:700;font-size:12px;cursor:pointer;`,
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
                            e.confirmBreak
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `10px`,
                                        padding: `14px`,
                                        borderRadius: `6px`,
                                        background: `var(--bb-bg,#F7F7F8)`,
                                        border: `1px solid var(--bb-acento,#0A0A0B)`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            fontSize: `13px`,
                                            fontWeight: `700`,
                                          },
                                          children: [
                                            `Vas a bloquear tu cuenta: `,
                                            renderContent(e.breakLabel),
                                            `. Escribí CONFIRMAR para continuar.`,
                                          ],
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            display: `flex`,
                                            gap: `8px`,
                                            flexWrap: `wrap`,
                                          },
                                          children: [
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`input`, {
                                              style: {
                                                flex: `1 1 160px`,
                                                height: `40px`,
                                                background: `var(--bb-surface,#EFEFF1)`,
                                                border: `1px solid var(--bb-border,#D8D8DC)`,
                                                borderRadius: `6px`,
                                                padding: `0 12px`,
                                                color: `var(--bb-text,#0A0A0B)`,
                                                fontFamily: `'Manrope',sans-serif`,
                                                fontSize: `14px`,
                                                outline: `none`,
                                              },
                                              value: N(e.confirmText),
                                              onChange: e.onConfirmText,
                                              placeholder: `CONFIRMAR`,
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              style: resolveStyle(
                                                `height:40px;padding:0 16px;border-radius:6px;border:none;background:${e.breakBtnBg ?? ``};color:var(--bb-sobre,#FFFFFF);font-family:'Manrope',sans-serif;font-weight:800;font-size:12px;cursor:pointer;`,
                                              ),
                                              onClick: e.doBreak,
                                              children: `Bloquear cuenta`,
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
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontSize: `12px`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                lineHeight: `1.5`,
                              },
                              children: `¿Necesitás hablar con alguien? Contactá un servicio de ayuda al jugador de tu país; es gratuito y confidencial.`,
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
                e.tPrefs
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            background: `var(--bb-surface,#EFEFF1)`,
                            borderRadius: `8px`,
                            padding: `6px 18px`,
                            display: `flex`,
                            flexDirection: `column`,
                          },
                          children: [
                            `
          `,
                            asArray(e.prefs).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        alignItems: `center`,
                                        justifyContent: `space-between`,
                                        gap: `14px`,
                                        padding: `14px 0`,
                                        borderBottom: `1px solid var(--bb-surface-2,#E5E5E8)`,
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
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontWeight: `700`,
                                                fontSize: `13px`,
                                              },
                                              children: renderContent(e?.label),
                                            }),
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontSize: `12px`,
                                                fontWeight: `600`,
                                                color: `var(--bb-text-3,#6B6C73)`,
                                              },
                                              children: renderContent(e?.note),
                                            }),
                                          ],
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: resolveStyle(
                                            `flex-shrink:0;width:40px;height:22px;border-radius:11px;background:${e?.bg ?? ``};position:relative;cursor:pointer;`,
                                          ),
                                          onClick: e?.toggle,
                                          children: (0, JSXRuntime.jsx)(
                                            `span`,
                                            {
                                              style: resolveStyle(
                                                `position:absolute;top:3px;left:${e?.left ?? ``};width:16px;height:16px;border-radius:50%;background:var(--bb-acento,#0A0A0B);transition:left .2s;`,
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
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `space-between`,
                                gap: `14px`,
                                padding: `14px 0`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `700`,
                                    fontSize: `13px`,
                                  },
                                  children: `Moneda de visualización`,
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
                                    asArray(e.displayCur).map((e, t) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              style: resolveStyle(
                                                `height:32px;padding:0 10px;border-radius:6px;border:1px solid ${e?.border ?? ``};background:${e?.bg ?? ``};color:var(--bb-text,#0A0A0B);font-family:'Manrope',sans-serif;font-weight:800;font-size:12px;cursor:pointer;`,
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
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: {
                            alignSelf: `flex-start`,
                            height: `40px`,
                            padding: `0 18px`,
                            borderRadius: `6px`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
                            background: `transparent`,
                            color: `var(--bb-text,#0A0A0B)`,
                            fontFamily: `'Manrope',sans-serif`,
                            fontWeight: `800`,
                            fontSize: `13px`,
                            cursor: `pointer`,
                          },
                          onClick: e.onLogout,
                          children: `Cerrar sesión`,
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
      ],
    }),
  });
}
let ht, gt, _t;
var AccountSettingsController;
function initializeAccountSettings() {
  ht = [
    [`profile`, `Perfil`],
    [`security`, `Seguridad`],
    [`rg`, `Juego responsable`],
    [`prefs`, `Preferencias`],
  ];
  gt = [
    [
      `hideStats`,
      `Ocultar mis estadísticas`,
      `Otros jugadores no van a ver tu volumen ni tus ganancias.`,
    ],
    [
      `incognito`,
      `Modo incógnito`,
      `Vas a aparecer como «Oculto» en las apuestas en vivo.`,
    ],
    [
      `emailPromos`,
      `Promociones por email`,
      `Bonos y novedades, como máximo una vez por semana.`,
    ],
    [`push`, `Notificaciones push`, `Avisos de cargas, retiros y torneos.`],
    [
      `sounds`,
      `Sonidos de la interfaz`,
      `Efectos al ganar y al completar acciones.`,
    ],
  ];
  _t = [
    [`24h`, `24 horas`],
    [`7d`, `7 días`],
    [`30d`, `30 días`],
    [`6m`, `Autoexclusión 6 meses`],
    [`1y`, `Autoexclusión 1 año`],
  ];
  AccountSettingsController = class extends React.Component {
    state = {
      vw: Ae(),
      tab: `profile`,
      email: `marco27@gmail.com`,
      phone: `+34 612 345 678`,
      toast: ``,
      pw1: ``,
      pw2: ``,
      pwError: ``,
      twofa: !1,
      sessions: [
        {
          id: 1,
          device: `Chrome · macOS`,
          where: `Madrid, ES · ahora`,
          current: !0,
        },
        {
          id: 2,
          device: `App iOS · iPhone 15`,
          where: `Madrid, ES · hace 2 h`,
        },
        {
          id: 3,
          device: `Firefox · Windows`,
          where: `Valencia, ES · hace 3 días`,
        },
      ],
      limits: {
        day: `1000000`,
        week: ``,
        month: ``,
      },
      reminder: `1h`,
      brk: null,
      confirmText: ``,
      prefs: {
        hideStats: !1,
        incognito: !1,
        emailPromos: !0,
        push: !0,
        sounds: !0,
      },
      dcur: `ARS`,
    };
    componentDidMount() {
      ((this.onResize = () =>
        this.setState({
          vw: Ae(),
        })),
        window.addEventListener(`resize`, this.onResize),
        this.onResize());
    }
    componentWillUnmount() {
      (clearTimeout(this.tt),
        window.removeEventListener(`resize`, this.onResize));
    }
    flash(e) {
      (clearTimeout(this.tt),
        this.setState({
          toast: e,
        }),
        (this.tt = setTimeout(
          () =>
            this.setState({
              toast: ``,
            }),
          2600,
        )));
    }
    renderVals() {
      let e = this.state,
        t = this.props.kyc || `none`,
        n = e.vw < 700,
        r = (e) => ({
          bg: e
            ? n
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-surface-2,#E5E5E8)`
            : `transparent`,
          fg: e
            ? n
              ? `var(--bb-sobre,#FFFFFF)`
              : `var(--bb-text,#0A0A0B)`
            : `var(--bb-text-3,#6B6C73)`,
        }),
        i = (e) => ({
          bg: e
            ? `rgba(var(--bb-acento-rgb,10,10,11),0.12)`
            : `var(--bb-bg,#F7F7F8)`,
          border: e ? `var(--bb-acento,#0A0A0B)` : `var(--bb-border,#D8D8DC)`,
        }),
        a = (e) => ({
          bg: e
            ? `var(--bb-acento,#0A0A0B)`
            : `var(--bb-border-strong,#C2C2C7)`,
          left: e ? `21px` : `3px`,
        }),
        o = (_t.find((t) => t[0] === e.brk) || [])[1] || ``;
      return {
        navFlex: n ? `1 1 100%` : `1 1 200px`,
        navMax: n ? `100%` : `240px`,
        navPad: n ? `4px` : `6px`,
        navDir: n ? `row` : `column`,
        navGap: n ? `4px` : `2px`,
        tabs: ht.map(([t, n]) => ({
          label: n,
          ...r(e.tab === t),
          select: () =>
            this.setState({
              tab: t,
              toast: ``,
            }),
        })),
        tProfile: e.tab === `profile`,
        tSecurity: e.tab === `security`,
        tRG: e.tab === `rg`,
        tPrefs: e.tab === `prefs`,
        toast: e.toast,
        email: e.email,
        onEmail: (e) =>
          this.setState({
            email: e.target.value,
          }),
        phone: e.phone,
        onPhone: (e) =>
          this.setState({
            phone: e.target.value,
          }),
        kycLabel: {
          none: `Sin verificar`,
          pending: `En revisión`,
          approved: `Verificada`,
        }[t],
        kycColor: `var(--bb-text,#0A0A0B)`,
        kycCta:
          t === `approved`
            ? `Ver`
            : t === `pending`
              ? `Ver estado`
              : `Verificar`,
        goKyc: () => this.props.onNav?.(`kyc`),
        save: () =>
          /^\S+@\S+\.\S+$/.test(e.email)
            ? this.flash(`Cambios guardados.`)
            : this.flash(`Revisá el email: el formato no es válido.`),
        pw1: e.pw1,
        pw2: e.pw2,
        pwError: e.pwError,
        onPw1: (e) =>
          this.setState({
            pw1: e.target.value,
            pwError: ``,
          }),
        onPw2: (e) =>
          this.setState({
            pw2: e.target.value,
            pwError: ``,
          }),
        savePw: () => {
          if (e.pw1.length < 8)
            return this.setState({
              pwError: `La contraseña debe tener al menos 8 caracteres.`,
            });
          if (e.pw1 !== e.pw2)
            return this.setState({
              pwError: `Las contraseñas no coinciden.`,
            });
          (this.setState({
            pw1: ``,
            pw2: ``,
          }),
            this.flash(`Contraseña actualizada.`));
        },
        t2fa: {
          ...a(e.twofa),
          toggle: () => {
            (this.setState({
              twofa: !e.twofa,
            }),
              this.flash(
                e.twofa
                  ? `Verificación en dos pasos desactivada.`
                  : `Verificación en dos pasos activada.`,
              ));
          },
        },
        sessions: e.sessions.map((e) => ({
          ...e,
          current: !!e.current,
          other: !e.current,
          close: () => {
            (this.setState((t) => ({
              sessions: t.sessions.filter((t) => t.id !== e.id),
            })),
              this.flash(`Sesión cerrada.`));
          },
        })),
        limits: [
          [`day`, `Diario`],
          [`week`, `Semanal`],
          [`month`, `Mensual`],
        ].map(([t, n]) => ({
          label: n,
          value: e.limits[t],
          onChange: (e) =>
            this.setState((n) => ({
              limits: {
                ...n.limits,
                [t]: e.target.value,
              },
            })),
        })),
        reminders: [
          [`off`, `Desactivado`],
          [`30m`, `30 min`],
          [`1h`, `1 hora`],
          [`2h`, `2 horas`],
        ].map(([t, n]) => ({
          label: n,
          ...i(e.reminder === t),
          select: () =>
            this.setState({
              reminder: t,
            }),
        })),
        saveLimits: () =>
          this.flash(
            `Límites guardados. Los aumentos se aplicarán en 24 horas.`,
          ),
        breaks: _t.map(([t, n]) => ({
          label: n,
          ...i(e.brk === t),
          select: () =>
            this.setState({
              brk: t,
              confirmText: ``,
            }),
        })),
        confirmBreak: !!e.brk,
        breakLabel: o,
        confirmText: e.confirmText,
        onConfirmText: (e) =>
          this.setState({
            confirmText: e.target.value,
          }),
        breakBtnBg:
          e.confirmText.trim().toUpperCase() === `CONFIRMAR`
            ? `var(--bb-acento,#0A0A0B)`
            : `var(--bb-border-strong,#C2C2C7)`,
        doBreak: () => {
          e.confirmText.trim().toUpperCase() === `CONFIRMAR` &&
            (this.setState({
              brk: null,
              confirmText: ``,
            }),
            this.flash(
              `Cuenta bloqueada: ` + o + `. (Demo: no se cierra la sesión.)`,
            ));
        },
        prefs: gt.map(([t, n, r]) => ({
          label: n,
          note: r,
          ...a(e.prefs[t]),
          toggle: () =>
            this.setState((e) => ({
              prefs: {
                ...e.prefs,
                [t]: !e.prefs[t],
              },
            })),
        })),
        displayCur: [`ARS`, `USD`].map((t) => ({
          label: t,
          ...i(e.dcur === t),
          select: () =>
            this.setState({
              dcur: t,
            }),
        })),
        onLogout: () => this.props.onLogout?.(),
      };
    }
    render() {
      return renderAccountSettingsLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { AccountSettingsController, initializeAccountSettings };
