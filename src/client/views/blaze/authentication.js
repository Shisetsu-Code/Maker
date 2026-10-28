/**
 * blaze / authentication.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { De } from "./game-catalog.js";
import {
  Ae,
  renderContent,
  asArray,
  N,
  Ie,
  resolveStyle,
} from "./element-adapter.js";
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function renderAuthenticationLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: {
        position: `fixed`,
        inset: `0`,
        zIndex: `60`,
        background: `rgba(0,0,0,0.75)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        padding: `16px`,
        fontFamily: `'Manrope',sans-serif`,
        color: `var(--bb-text,#0A0A0B)`,
      },
      children: [
        `
  `,
        (0, JSXRuntime.jsx)(`div`, {
          style: {
            position: `absolute`,
            inset: `0`,
          },
          onClick: e.close,
        }),
        `
  `,
        (0, JSXRuntime.jsxs)(`div`, {
          className: `nosb`,
          style: resolveStyle(
            `position:relative;width:100%;max-width:${e.cardMax ?? ``};max-height:calc(100vh - 32px);overflow-y:auto;background:var(--bb-surface,#EFEFF1);border:1px solid var(--bb-border,#D8D8DC);border-radius:8px;display:flex;`,
          ),
          children: [
            `
    `,
            e.showArt
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        flex: `0 0 42%`,
                        minHeight: `520px`,
                        background: `var(--bb-acento,#0A0A0B)`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                          },
                          children: (0, JSXRuntime.jsx)(`image-slot`, {
                            id: `auth-art`,
                            shape: `rect`,
                            placeholder: `Ilustración de registro`,
                            src: Ie(e.authArt),
                          }),
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `absolute`,
                            left: `24px`,
                            right: `24px`,
                            bottom: `24px`,
                            pointerEvents: `none`,
                            color: `#FFFFFF`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `6px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontFamily: `'Barlow Condensed',sans-serif`,
                                fontWeight: `800`,
                                fontSize: `34px`,
                                lineHeight: `0.95`,
                              },
                              children: `HASTA 300% Y 100 GIROS`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                fontWeight: `700`,
                                fontSize: `13px`,
                              },
                              children: `Bono de bienvenida para nuevos jugadores`,
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
                flex: `1`,
                minWidth: `0`,
                padding: `22px 24px 24px`,
                display: `flex`,
                flexDirection: `column`,
                gap: `16px`,
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
                        gap: `4px`,
                        padding: `4px`,
                        background: `var(--bb-bg,#F7F7F8)`,
                        borderRadius: `8px`,
                      },
                      children: [
                        `
          `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: resolveStyle(
                            `border:none;border-radius:6px;padding:8px 14px;background:${e.tabLogin?.bg ?? ``};color:${e.tabLogin?.fg ?? ``};font-family:'Manrope',sans-serif;font-weight:700;font-size:13px;cursor:pointer;`,
                          ),
                          onClick: e.toLogin,
                          children: `Iniciar sesión`,
                        }),
                        `
          `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: resolveStyle(
                            `border:none;border-radius:6px;padding:8px 14px;background:${e.tabReg?.bg ?? ``};color:${e.tabReg?.fg ?? ``};font-family:'Manrope',sans-serif;font-weight:700;font-size:13px;cursor:pointer;`,
                          ),
                          onClick: e.toRegister,
                          children: `Registrarse`,
                        }),
                        `
        `,
                      ],
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `bb1-0`,
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
                      onClick: e.close,
                      children: `×`,
                    }),
                    `
      `,
                  ],
                }),
                `

      `,
                e.error
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            gap: `10px`,
                            alignItems: `flex-start`,
                            padding: `10px 12px`,
                            borderRadius: `6px`,
                            background: `rgba(var(--bb-acento-rgb,10,10,11),0.1)`,
                            border: `1px solid var(--bb-acento,#0A0A0B)`,
                            fontSize: `13px`,
                            fontWeight: `600`,
                            color: `var(--bb-text,#0A0A0B)`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                color: `var(--bb-text,#0A0A0B)`,
                                fontWeight: `800`,
                              },
                              children: `!`,
                            }),
                            renderContent(e.error),
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
                      children: `Email`,
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`input`, {
                      className: `bb1-1`,
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
                      placeholder: `tu@email.com`,
                    }),
                    `
      `,
                  ],
                }),
                `
      `,
                e.isRegister
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
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
                              children: `Nombre de usuario`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`input`, {
                              className: `bb1-1`,
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
                              value: N(e.username),
                              onChange: e.onUsername,
                              placeholder: `Visible en el chat y las apuestas`,
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
                        alignItems: `center`,
                      },
                      children: [
                        (0, JSXRuntime.jsx)(`label`, {
                          style: {
                            fontSize: `12px`,
                            fontWeight: `700`,
                            color: `var(--bb-text-3,#6B6C73)`,
                          },
                          children: `Contraseña`,
                        }),
                        e.isLogin
                          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                              children: (0, JSXRuntime.jsx)(`a`, {
                                style: {
                                  fontSize: `12px`,
                                  fontWeight: `700`,
                                },
                                href: `#`,
                                children: `¿La olvidaste?`,
                              }),
                            })
                          : null,
                      ],
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
                        padding: `0 6px 0 12px`,
                      },
                      children: [
                        `
          `,
                        (0, JSXRuntime.jsx)(`input`, {
                          style: {
                            flex: `1`,
                            minWidth: `0`,
                            height: `100%`,
                            background: `transparent`,
                            border: `none`,
                            color: `var(--bb-text,#0A0A0B)`,
                            fontFamily: `'Manrope',sans-serif`,
                            fontSize: `14px`,
                            outline: `none`,
                          },
                          type: e.pwType,
                          value: N(e.password),
                          onChange: e.onPassword,
                          onKeyDown: e.onKey,
                          placeholder: `Mínimo 8 caracteres`,
                        }),
                        `
          `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: {
                            height: `32px`,
                            padding: `0 10px`,
                            borderRadius: `5px`,
                            background: `transparent`,
                            border: `none`,
                            color: `var(--bb-text-3,#6B6C73)`,
                            fontFamily: `'Manrope',sans-serif`,
                            fontWeight: `700`,
                            fontSize: `12px`,
                            cursor: `pointer`,
                          },
                          onClick: e.toggleShow,
                          children: renderContent(e.showLabel),
                        }),
                        `
        `,
                      ],
                    }),
                    `
        `,
                    e.isRegister
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                gap: `4px`,
                                marginTop: `2px`,
                              },
                              children: [
                                `
            `,
                                asArray(e.strength).map((e, t) =>
                                  (0, JSXRuntime.jsx)(
                                    React.Fragment,
                                    {
                                      children: (0, JSXRuntime.jsx)(`span`, {
                                        style: resolveStyle(
                                          `flex:1;height:4px;border-radius:2px;background:${e ?? ``};`,
                                        ),
                                      }),
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
                                fontSize: `11px`,
                                fontWeight: `600`,
                                color: `var(--bb-text-3,#6B6C73)`,
                              },
                              children: renderContent(e.strengthLabel),
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
                e.isRegister
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
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
                                  children: `Fecha de nacimiento`,
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
                                    colorScheme: `light`,
                                  },
                                  type: `date`,
                                  value: N(e.dob),
                                  onChange: e.onDob,
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
                                  children: `Código promocional (opcional)`,
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
                                  value: N(e.promo),
                                  onChange: e.onPromo,
                                  placeholder: e.marcaCodigo,
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
                            gap: `10px`,
                            alignItems: `flex-start`,
                            cursor: `pointer`,
                            fontSize: `12px`,
                            fontWeight: `600`,
                            color: `var(--bb-text-2,#3A3B40)`,
                            lineHeight: `1.45`,
                          },
                          onClick: e.toggleTerms,
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: resolveStyle(
                                `flex-shrink:0;width:18px;height:18px;border-radius:4px;border:2px solid ${e.termsBorder ?? ``};background:${e.termsBg ?? ``};display:grid;place-items:center;color:var(--bb-sobre,#FFFFFF);font-size:12px;font-weight:800;`,
                              ),
                              children: renderContent(e.termsMark),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              children: [
                                `Confirmo que soy mayor de 18 años y acepto los `,
                                (0, JSXRuntime.jsx)(`a`, {
                                  href: `#`,
                                  children: `Términos y condiciones`,
                                }),
                                ` y la `,
                                (0, JSXRuntime.jsx)(`a`, {
                                  href: `#`,
                                  children: `Política de privacidad`,
                                }),
                                `.`,
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
                (0, JSXRuntime.jsx)(`button`, {
                  className: `bb1-2`,
                  style: resolveStyle(
                    `height:48px;border-radius:6px;border:none;background:var(--bb-acento,#0A0A0B);color:var(--bb-sobre,#FFFFFF);font-family:'Manrope',sans-serif;font-weight:800;font-size:14px;cursor:pointer;opacity:${e.btnOpacity ?? ``};`,
                  ),
                  onClick: e.submit,
                  children: renderContent(e.cta),
                }),
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    alignItems: `center`,
                    gap: `10px`,
                    color: `var(--bb-text-4,#8A8B92)`,
                    fontSize: `12px`,
                    fontWeight: `600`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        flex: `1`,
                        height: `1px`,
                        background: `var(--bb-border,#D8D8DC)`,
                      },
                    }),
                    `o continúa con`,
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        flex: `1`,
                        height: `1px`,
                        background: `var(--bb-border,#D8D8DC)`,
                      },
                    }),
                  ],
                }),
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `grid`,
                    gridTemplateColumns: `repeat(2,minmax(0,1fr))`,
                    gap: `8px`,
                  },
                  children: [
                    `
        `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `bb1-3`,
                      style: {
                        height: `42px`,
                        borderRadius: `6px`,
                        border: `1px solid var(--bb-border,#D8D8DC)`,
                        background: `var(--bb-bg,#F7F7F8)`,
                        color: `var(--bb-text,#0A0A0B)`,
                        fontFamily: `'Manrope',sans-serif`,
                        fontWeight: `700`,
                        fontSize: `13px`,
                        cursor: `pointer`,
                      },
                      onClick: e.social,
                      children: `Google`,
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `bb1-3`,
                      style: {
                        height: `42px`,
                        borderRadius: `6px`,
                        border: `1px solid var(--bb-border,#D8D8DC)`,
                        background: `var(--bb-bg,#F7F7F8)`,
                        color: `var(--bb-text,#0A0A0B)`,
                        fontFamily: `'Manrope',sans-serif`,
                        fontWeight: `700`,
                        fontSize: `13px`,
                        cursor: `pointer`,
                      },
                      onClick: e.social,
                      children: `Telegram`,
                    }),
                    `
      `,
                  ],
                }),
                `
      `,
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    fontSize: `11px`,
                    color: `var(--bb-text-4,#8A8B92)`,
                    lineHeight: `1.5`,
                    textAlign: `center`,
                  },
                  children: `Probá el error de acceso con la contraseña «error1234».`,
                }),
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
var AuthenticationController;
function initializeAuthentication() {
  AuthenticationController = class extends React.Component {
    state = {
      vw: Ae(),
      mode: this.props.mode || `login`,
      email: ``,
      username: ``,
      password: ``,
      dob: ``,
      promo: ``,
      terms: !1,
      show: !1,
      error: ``,
      busy: !1,
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
      (window.removeEventListener(`resize`, this.onResize),
        clearTimeout(this.t));
    }
    age(e) {
      let t = new Date(e);
      if (isNaN(t)) return 0;
      let n = new Date(),
        r = n.getFullYear() - t.getFullYear();
      return (
        n < new Date(n.getFullYear(), t.getMonth(), t.getDate()) && r--,
        r
      );
    }
    submit = () => {
      let e = this.state;
      if (e.busy) return;
      let t = (e) =>
        this.setState({
          error: e,
        });
      if (!/^\S+@\S+\.\S+$/.test(e.email)) return t(`Ingresá un email válido.`);
      if (e.password.length < 8)
        return t(`La contraseña debe tener al menos 8 caracteres.`);
      if (e.mode === `register`) {
        if (e.username.trim().length < 3)
          return t(`El nombre de usuario debe tener al menos 3 caracteres.`);
        if (!e.dob) return t(`Indicá tu fecha de nacimiento.`);
        if (this.age(e.dob) < 18)
          return t(`Tenés que ser mayor de 18 años para registrarte.`);
        if (!e.terms)
          return t(`Tenés que aceptar los términos para continuar.`);
      }
      if (e.mode === `login` && e.password === `error1234`)
        return t(`Email o contraseña incorrectos. Te quedan 4 intentos.`);
      (this.setState({
        error: ``,
        busy: !0,
      }),
        (this.t = setTimeout(() => {
          (this.setState({
            busy: !1,
          }),
            this.props.onLogin?.());
        }, 900)));
    };
    renderVals() {
      let e = this.state,
        t = e.mode === `register`,
        n = e.password,
        r = [
          n.length >= 8,
          /[A-Z]/.test(n),
          /\d/.test(n),
          /[^A-Za-z0-9]/.test(n),
        ].filter(Boolean).length,
        i = [
          `var(--bb-border,#D8D8DC)`,
          `var(--bb-text-3,#6B6C73)`,
          `var(--bb-text-1,#2A2B30)`,
          `var(--bb-text,#0A0A0B)`,
          `var(--bb-text,#0A0A0B)`,
        ],
        a = (e) => ({
          bg: e ? `var(--bb-acento,#0A0A0B)` : `transparent`,
          fg: e ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text-3,#6B6C73)`,
        }),
        o = (e.vw ?? 1440) >= 820;
      return {
        showArt: o,
        authArt: De.img(`auth-art`),
        cardMax: o ? `860px` : `440px`,
        close: () => this.props.onClose?.(),
        tabLogin: a(!t),
        tabReg: a(t),
        toLogin: () =>
          this.setState({
            mode: `login`,
            error: ``,
          }),
        toRegister: () =>
          this.setState({
            mode: `register`,
            error: ``,
          }),
        isRegister: t,
        isLogin: !t,
        error: e.error,
        email: e.email,
        onEmail: (e) =>
          this.setState({
            email: e.target.value,
          }),
        username: e.username,
        onUsername: (e) =>
          this.setState({
            username: e.target.value,
          }),
        password: e.password,
        onPassword: (e) =>
          this.setState({
            password: e.target.value,
          }),
        onKey: (e) => {
          e.key === `Enter` && this.submit();
        },
        pwType: e.show ? `text` : `password`,
        showLabel: e.show ? `Ocultar` : `Mostrar`,
        toggleShow: () =>
          this.setState({
            show: !e.show,
          }),
        strength: [0, 1, 2, 3].map((e) =>
          e < r ? i[r] : `var(--bb-border,#D8D8DC)`,
        ),
        strengthLabel: n
          ? [`Muy débil`, `Débil`, `Aceptable`, `Buena`, `Fuerte`][r]
          : `Usá mayúsculas, números y símbolos`,
        dob: e.dob,
        onDob: (e) =>
          this.setState({
            dob: e.target.value,
          }),
        promo: e.promo,
        onPromo: (e) =>
          this.setState({
            promo: e.target.value.toUpperCase(),
          }),
        toggleTerms: () =>
          this.setState({
            terms: !e.terms,
          }),
        termsBorder: e.terms
          ? `var(--bb-acento,#0A0A0B)`
          : `var(--bb-border-strong,#C2C2C7)`,
        termsBg: e.terms ? `var(--bb-acento,#0A0A0B)` : `transparent`,
        termsMark: e.terms ? `✓` : ``,
        submit: this.submit,
        social: () => this.props.onLogin?.(),
        cta: e.busy ? `Un momento…` : t ? `Crear cuenta` : `Iniciar sesión`,
        btnOpacity: e.busy ? 0.7 : 1,
      };
    }
    render() {
      return renderAuthenticationLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { AuthenticationController, initializeAuthentication };
