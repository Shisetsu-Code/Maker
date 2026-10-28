/**
 * azul / desktop-layout.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Declarations only; importing this module does not start the view.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import {
  renderContent,
  asArray,
  Ot,
  resolveViewAsset,
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
function renderAzulDesktopLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: resolveStyle(
        `width:1920px;zoom:${e.zoom ?? ``};background:rgb(var(--rc-fondo));position:relative;font-family:'SF Pro','SF Pro Display',-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;color:rgb(255,255,255)`,
      ),
      children: [
        `

  `,
        (0, JSXRuntime.jsxs)(`header`, {
          style: {
            position: `sticky`,
            top: `0`,
            zIndex: `40`,
            height: `95px`,
            background: `rgb(var(--rc-fondo))`,
            boxShadow: `inset 0 -1px 0 rgb(var(--rc-borde)),0px 0px 40px 0px rgba(0,0,0,0.25)`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            padding: `0 129px 0 128px`,
          },
          "data-screen-label": `Header`,
          children: [
            `
    `,
            (0, JSXRuntime.jsx)(`button`, {
              style: {
                display: `flex`,
                background: `none`,
                border: `none`,
                padding: `0`,
                cursor: `pointer`,
              },
              onClick: e.goTop,
              children: (0, JSXRuntime.jsx)(`img`, {
                style: {
                  width: `151px`,
                  height: `30.5px`,
                  display: `block`,
                },
                src: resolveViewAsset(`assets/logo.png`),
                alt: e.brandName,
              }),
            }),
            `
    `,
            e.loggedOut
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        gap: `9px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`button`, {
                          className: `rce0`,
                          style: resolveStyle(
                            `position:relative;width:46px;height:46px;border-radius:10px;border:none;background:${e.chatBtnBg ?? ``};box-shadow:0px 0px 20px 0px rgba(0,0,0,0.25);color:rgb(255,255,255);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0`,
                          ),
                          onClick: e.toggleChat,
                          title: `Chat de soporte`,
                          children: [
                            (0, JSXRuntime.jsxs)(`svg`, {
                              width: `22`,
                              height: `22`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `1.8`,
                              strokeLinecap: `round`,
                              strokeLinejoin: `round`,
                              children: [
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4A8.4 8.4 0 1 1 20.5 11.6z`,
                                }),
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01`,
                                  strokeWidth: `2.6`,
                                }),
                              ],
                            }),
                            e.chatUnread
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      position: `absolute`,
                                      top: `-4px`,
                                      right: `-4px`,
                                      width: `18px`,
                                      height: `18px`,
                                      borderRadius: `100px`,
                                      background: `rgb(255,59,79)`,
                                      boxShadow: `0 0 0 2px rgb(var(--rc-fondo))`,
                                      display: `flex`,
                                      alignItems: `center`,
                                      justifyContent: `center`,
                                      fontFamily: `Inter,sans-serif`,
                                      fontWeight: `700`,
                                      fontSize: `11px`,
                                    },
                                    children: `1`,
                                  }),
                                })
                              : null,
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          className: `rce0`,
                          style: {
                            width: `210px`,
                            height: `46px`,
                            borderRadius: `10px`,
                            border: `none`,
                            background: `rgb(var(--rc-tarjeta))`,
                            boxShadow: `0px 0px 20px 0px rgba(0,0,0,0.25)`,
                            color: `rgb(255,255,255)`,
                            fontWeight: `700`,
                            fontSize: `20px`,
                            letterSpacing: `-0.06em`,
                            lineHeight: `1.0722`,
                            textTransform: `uppercase`,
                            cursor: `pointer`,
                          },
                          onClick: e.openLogin,
                          children: `iniciar sesión`,
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          className: `rce1`,
                          style: {
                            width: `210px`,
                            height: `46px`,
                            borderRadius: `10px`,
                            border: `none`,
                            background: `rgb(var(--rc-marca))`,
                            boxShadow: `0px 0px 20px 0px rgba(0,0,0,0.25)`,
                            color: `rgb(255,255,255)`,
                            fontWeight: `700`,
                            fontSize: `20px`,
                            letterSpacing: `-0.06em`,
                            lineHeight: `1.0722`,
                            textTransform: `uppercase`,
                            cursor: `pointer`,
                          },
                          onClick: e.openRegister,
                          children: `registrate`,
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
            e.loggedIn
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        display: `flex`,
                        gap: `12px`,
                        alignItems: `center`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`button`, {
                          className: `rce0`,
                          style: resolveStyle(
                            `position:relative;width:46px;height:46px;border-radius:10px;border:none;background:${e.chatBtnBg ?? ``};box-shadow:0px 0px 20px 0px rgba(0,0,0,0.25);color:rgb(255,255,255);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0`,
                          ),
                          onClick: e.toggleChat,
                          title: `Chat de soporte`,
                          children: [
                            (0, JSXRuntime.jsxs)(`svg`, {
                              width: `22`,
                              height: `22`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `1.8`,
                              strokeLinecap: `round`,
                              strokeLinejoin: `round`,
                              children: [
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4A8.4 8.4 0 1 1 20.5 11.6z`,
                                }),
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01`,
                                  strokeWidth: `2.6`,
                                }),
                              ],
                            }),
                            e.chatUnread
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      position: `absolute`,
                                      top: `-4px`,
                                      right: `-4px`,
                                      width: `18px`,
                                      height: `18px`,
                                      borderRadius: `100px`,
                                      background: `rgb(255,59,79)`,
                                      boxShadow: `0 0 0 2px rgb(var(--rc-fondo))`,
                                      display: `flex`,
                                      alignItems: `center`,
                                      justifyContent: `center`,
                                      fontFamily: `Inter,sans-serif`,
                                      fontWeight: `700`,
                                      fontSize: `11px`,
                                    },
                                    children: `1`,
                                  }),
                                })
                              : null,
                          ],
                        }),
                        `
                `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            height: `46px`,
                            borderRadius: `10px`,
                            background: `rgb(var(--rc-tarjeta))`,
                            boxShadow: `0px 0px 20px 0px rgba(0,0,0,0.25)`,
                            display: `flex`,
                            alignItems: `center`,
                            overflow: `hidden`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `10px`,
                                padding: `0 16px 0 14px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `700`,
                                    fontSize: `20px`,
                                    letterSpacing: `-0.04em`,
                                  },
                                  children: renderContent(e.balanceFmt),
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontFamily: `Inter,sans-serif`,
                                    fontWeight: `500`,
                                    fontSize: `12px`,
                                    color: `rgba(255,255,255,0.5)`,
                                  },
                                  children: `ARS`,
                                }),
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`button`, {
                              className: `rce1`,
                              style: {
                                height: `46px`,
                                padding: `0 18px`,
                                border: `none`,
                                background: `rgb(var(--rc-marca))`,
                                color: `rgb(255,255,255)`,
                                fontWeight: `700`,
                                fontSize: `18px`,
                                letterSpacing: `-0.06em`,
                                textTransform: `uppercase`,
                                cursor: `pointer`,
                                display: `flex`,
                                alignItems: `center`,
                                gap: `6px`,
                              },
                              onClick: e.deposit,
                              children: [
                                (0, JSXRuntime.jsx)(`svg`, {
                                  width: `14`,
                                  height: `14`,
                                  viewBox: `0 0 14 14`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  strokeWidth: `2.2`,
                                  strokeLinecap: `round`,
                                  children: (0, JSXRuntime.jsx)(`path`, {
                                    d: `M7 1.5v11M1.5 7h11`,
                                  }),
                                }),
                                `cargar`,
                              ],
                            }),
                            `
        `,
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`button`, {
                          className: `rce0`,
                          style: {
                            height: `46px`,
                            padding: `0 14px 0 8px`,
                            borderRadius: `10px`,
                            border: `none`,
                            background: `rgb(var(--rc-tarjeta))`,
                            boxShadow: `0px 0px 20px 0px rgba(0,0,0,0.25)`,
                            color: `rgb(255,255,255)`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `10px`,
                            cursor: `pointer`,
                          },
                          onClick: e.toggleMenu,
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `32px`,
                                height: `32px`,
                                borderRadius: `50%`,
                                background: `linear-gradient(135deg, rgb(var(--rc-acento)) 0%, rgb(var(--rc-marca)) 100%)`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                fontWeight: `700`,
                                fontSize: `16px`,
                                textTransform: `uppercase`,
                              },
                              children: renderContent(e.userInitial),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                fontWeight: `700`,
                                fontSize: `18px`,
                                letterSpacing: `-0.04em`,
                              },
                              children: [`@`, renderContent(e.user)],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`svg`, {
                              style: {
                                ...resolveStyle(
                                  `transform:rotate(${e.menuArrow ?? ``});transition:transform .2s`,
                                ),
                                stroke: `rgb(var(--rc-gris))`,
                              },
                              width: `14`,
                              height: `14`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              strokeWidth: `2.2`,
                              strokeLinecap: `round`,
                              strokeLinejoin: `round`,
                              children: (0, JSXRuntime.jsx)(`path`, {
                                d: `m6 9 6 6 6-6`,
                              }),
                            }),
                            `
        `,
                          ],
                        }),
                        `
        `,
                        e.menuOpen
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    position: `absolute`,
                                    right: `0`,
                                    top: `56px`,
                                    width: `260px`,
                                    padding: `8px`,
                                    borderRadius: `14px`,
                                    background: `rgb(var(--rc-tarjeta))`,
                                    boxShadow: `inset 0 0 0 1px rgb(var(--rc-borde)),0px 20px 40px rgba(0,0,0,0.5)`,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `2px`,
                                    zIndex: `50`,
                                  },
                                  children: [
                                    `
            `,
                                    asArray(e.menuItems).map((e, t) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              className: `rce2`,
                                              style: resolveStyle(
                                                `height:44px;padding:0 14px;border-radius:9px;border:none;background:transparent;color:${e?.color ?? ``};font-family:Inter,sans-serif;font-weight:500;font-size:15px;text-align:left;cursor:pointer`,
                                              ),
                                              onClick: e?.go,
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
          ],
        }),
        `

  `,
        (0, JSXRuntime.jsxs)(`aside`, {
          style: {
            position: `absolute`,
            top: `149px`,
            left: `40px`,
            width: `89px`,
            height: `100%`,
            pointerEvents: `none`,
            zIndex: `30`,
          },
          children: [
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                position: `sticky`,
                top: `149px`,
                width: `89px`,
                height: `571px`,
                borderRadius: `100px`,
                background: `linear-gradient(211.441deg, rgb(var(--rc-fondo)) 15.97%, rgb(var(--rc-hover)) 222.56%)`,
                boxShadow: `0px 0px 40px 0px rgba(0,0,0,0.25)`,
                pointerEvents: `auto`,
              },
              children: [
                `
      `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    position: `absolute`,
                    left: `20px`,
                    top: `44px`,
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `17px`,
                  },
                  children: [
                    `
        `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `rce3`,
                      style: resolveStyle(
                        `width:50px;height:50px;border-radius:100px;border:none;padding:0;background:transparent;box-shadow:${e.bgInicio ?? ``};cursor:pointer;display:flex`,
                      ),
                      title: `Inicio`,
                      onClick: e.navInicio,
                      children: (0, JSXRuntime.jsx)(`img`, {
                        style: {
                          width: `50px`,
                          height: `50px`,
                          display: `block`,
                        },
                        src: resolveViewAsset(`assets/icon-home.png`),
                        alt: ``,
                      }),
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `rce3`,
                      style: resolveStyle(
                        `width:50px;height:50px;border-radius:100px;border:none;padding:0;background:transparent;box-shadow:${e.bgSlots ?? ``};cursor:pointer;display:flex`,
                      ),
                      title: `Slots`,
                      onClick: e.navSlots,
                      children: (0, JSXRuntime.jsx)(`img`, {
                        style: {
                          width: `50px`,
                          height: `50px`,
                          display: `block`,
                        },
                        src: resolveViewAsset(`assets/icon-slots.png`),
                        alt: ``,
                      }),
                    }),
                    `
        `,
                    (0, JSXRuntime.jsxs)(`button`, {
                      className: `rce3`,
                      style: resolveStyle(
                        `position:relative;width:50px;height:50px;border-radius:100px;border:none;padding:0;background:rgb(var(--rc-tarjeta));box-shadow:${e.bgLive ?? ``};cursor:pointer;display:flex;align-items:center;justify-content:center`,
                      ),
                      title: `En vivo`,
                      onClick: e.navLive,
                      children: [
                        (0, JSXRuntime.jsx)(`svg`, {
                          style: {
                            fill: `rgb(var(--rc-gris))`,
                          },
                          width: `22`,
                          height: `24`,
                          viewBox: `0 0 22 24`,
                          children: (0, JSXRuntime.jsx)(`path`, {
                            d: `M11 1.5C8.6 5 1.5 8.8 1.5 13.6c0 2.9 2.2 5 4.8 5 1.6 0 3-.8 3.8-2-.2 2.3-1 4-2.6 5.4h7c-1.6-1.4-2.4-3.1-2.6-5.4.8 1.2 2.2 2 3.8 2 2.6 0 4.8-2.1 4.8-5C20.5 8.8 13.4 5 11 1.5z`,
                          }),
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            position: `absolute`,
                            top: `9px`,
                            right: `9px`,
                            width: `8px`,
                            height: `8px`,
                            borderRadius: `50%`,
                            background: `rgb(255,59,79)`,
                            boxShadow: `0 0 0 2px rgb(var(--rc-tarjeta)),0 0 8px rgba(255,59,79,0.8)`,
                          },
                        }),
                      ],
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `rce3`,
                      style: resolveStyle(
                        `width:50px;height:50px;border-radius:100px;border:none;padding:0;background:transparent;box-shadow:${e.bgSports ?? ``};cursor:pointer;display:flex`,
                      ),
                      title: `Deportivas`,
                      onClick: e.navSports,
                      children: (0, JSXRuntime.jsx)(`img`, {
                        style: {
                          width: `50px`,
                          height: `50px`,
                          display: `block`,
                        },
                        src: resolveViewAsset(`assets/icon-sports.png`),
                        alt: ``,
                      }),
                    }),
                    `
        `,
                    (0, JSXRuntime.jsx)(`button`, {
                      className: `rce3`,
                      style: resolveStyle(
                        `width:50px;height:50px;border-radius:100px;border:none;padding:0;background:transparent;box-shadow:${e.bgPop ?? ``};cursor:pointer;display:flex`,
                      ),
                      title: `Populares`,
                      onClick: e.navPop,
                      children: (0, JSXRuntime.jsx)(`img`, {
                        style: {
                          width: `50px`,
                          height: `50px`,
                          display: `block`,
                        },
                        src: resolveViewAsset(`assets/icon-live.png`),
                        alt: ``,
                      }),
                    }),
                    `
      `,
                  ],
                }),
                `
      `,
                (0, JSXRuntime.jsx)(`button`, {
                  className: `rce3`,
                  style: {
                    position: `absolute`,
                    left: `20px`,
                    top: `492px`,
                    width: `50px`,
                    height: `50px`,
                    borderRadius: `100px`,
                    border: `none`,
                    padding: `0`,
                    background: `transparent`,
                    cursor: `pointer`,
                    display: `flex`,
                  },
                  title: e.logoutTitle,
                  onClick: e.logout,
                  children: (0, JSXRuntime.jsx)(`img`, {
                    style: {
                      width: `50px`,
                      height: `50px`,
                      display: `block`,
                    },
                    src: resolveViewAsset(`assets/icon-logout.png`),
                    alt: ``,
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
        (0, JSXRuntime.jsxs)(`main`, {
          style: {
            marginLeft: `193px`,
            width: `1663px`,
            paddingTop: `54px`,
            paddingBottom: `80px`,
          },
          children: [
            `
    `,
            e.isHome
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `

    `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        height: `41px`,
                        zIndex: `20`,
                      },
                      id: `inicio`,
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsx)(`button`, {
                          className: `rce1`,
                          style: {
                            position: `absolute`,
                            right: `0`,
                            top: `0`,
                            width: `56px`,
                            height: `41px`,
                            borderRadius: `20px`,
                            border: `none`,
                            background: `rgb(var(--rc-marca))`,
                            boxShadow: `0px 0px 20px 0px rgba(var(--rc-marca),0.35)`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            cursor: `pointer`,
                            transition: `background .15s`,
                          },
                          onClick: e.rollDice,
                          title: `Juego al azar`,
                          children: (0, JSXRuntime.jsx)(`span`, {
                            style: resolveStyle(
                              `display:flex;transform:rotate(${e.diceRot ?? ``});transition:transform .7s cubic-bezier(.3,1.4,.5,1)`,
                            ),
                            children: (0, JSXRuntime.jsxs)(`svg`, {
                              width: `22`,
                              height: `22`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              stroke: `rgb(255,255,255)`,
                              strokeWidth: `1.7`,
                              strokeLinejoin: `round`,
                              children: [
                                (0, JSXRuntime.jsx)(`rect`, {
                                  x: `3.5`,
                                  y: `3.5`,
                                  width: `17`,
                                  height: `17`,
                                  rx: `4`,
                                }),
                                (0, JSXRuntime.jsx)(`circle`, {
                                  cx: `8.5`,
                                  cy: `8.5`,
                                  r: `1.3`,
                                  fill: `rgb(255,255,255)`,
                                  stroke: `none`,
                                }),
                                (0, JSXRuntime.jsx)(`circle`, {
                                  cx: `15.5`,
                                  cy: `8.5`,
                                  r: `1.3`,
                                  fill: `rgb(255,255,255)`,
                                  stroke: `none`,
                                }),
                                (0, JSXRuntime.jsx)(`circle`, {
                                  cx: `12`,
                                  cy: `12`,
                                  r: `1.3`,
                                  fill: `rgb(255,255,255)`,
                                  stroke: `none`,
                                }),
                                (0, JSXRuntime.jsx)(`circle`, {
                                  cx: `8.5`,
                                  cy: `15.5`,
                                  r: `1.3`,
                                  fill: `rgb(255,255,255)`,
                                  stroke: `none`,
                                }),
                                (0, JSXRuntime.jsx)(`circle`, {
                                  cx: `15.5`,
                                  cy: `15.5`,
                                  r: `1.3`,
                                  fill: `rgb(255,255,255)`,
                                  stroke: `none`,
                                }),
                              ],
                            }),
                          }),
                        }),
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            height: `41px`,
                            marginRight: `68px`,
                            borderRadius: `20px`,
                            background: `rgb(var(--rc-tarjeta))`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `20px`,
                            paddingLeft: `21px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`img`, {
                              style: {
                                width: `24px`,
                                height: `24px`,
                                display: `block`,
                              },
                              src: resolveViewAsset(`assets/icon-search.png`),
                              alt: ``,
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`input`, {
                              style: {
                                flex: `1`,
                                height: `41px`,
                                background: `none`,
                                border: `none`,
                                outline: `none`,
                                color: `rgb(255,255,255)`,
                                fontFamily: `inherit`,
                                fontWeight: `510`,
                                fontSize: `16px`,
                                letterSpacing: `-0.06em`,
                                padding: `0 20px 0 0`,
                              },
                              value: Ot(e.query),
                              onInput: e.onQuery,
                              onFocus: e.onSearchFocus,
                              onBlur: e.onSearchBlur,
                              placeholder: `Buscar juegos disponibles`,
                            }),
                            `
      `,
                          ],
                        }),
                        `
      `,
                        e.searchOpen
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
        `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    position: `absolute`,
                                    top: `49px`,
                                    left: `0`,
                                    width: `529px`,
                                    background: `rgb(var(--rc-tarjeta))`,
                                    borderRadius: `20px`,
                                    boxShadow: `inset 0 0 0 1px rgb(var(--rc-borde)),0px 0px 40px 0px rgba(0,0,0,0.25)`,
                                    padding: `10px`,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `2px`,
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
                                            (0, JSXRuntime.jsxs)(`button`, {
                                              className: `rce4`,
                                              style: {
                                                display: `flex`,
                                                justifyContent: `space-between`,
                                                alignItems: `center`,
                                                height: `44px`,
                                                padding: `0 16px`,
                                                border: `none`,
                                                borderRadius: `10px`,
                                                background: `transparent`,
                                                color: `rgb(255,255,255)`,
                                                cursor: `pointer`,
                                                textAlign: `left`,
                                              },
                                              onMouseDown: e?.go,
                                              children: [
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontWeight: `700`,
                                                    fontSize: `20px`,
                                                    letterSpacing: `-0.06em`,
                                                    textTransform: `uppercase`,
                                                  },
                                                  children: renderContent(
                                                    e?.label,
                                                  ),
                                                }),
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontFamily: `Inter,sans-serif`,
                                                    fontWeight: `500`,
                                                    fontSize: `16px`,
                                                    color: `rgba(255,255,255,0.4)`,
                                                  },
                                                  children: renderContent(
                                                    e?.kind,
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
                                    e.noResults
                                      ? (0, JSXRuntime.jsxs)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: [
                                              `
            `,
                                              (0, JSXRuntime.jsxs)(`div`, {
                                                style: {
                                                  padding: `12px 16px`,
                                                  fontFamily: `Inter,sans-serif`,
                                                  fontWeight: `500`,
                                                  fontSize: `16px`,
                                                  color: `rgba(255,255,255,0.4)`,
                                                },
                                                children: [
                                                  `Sin resultados para “`,
                                                  renderContent(e.query),
                                                  `”`,
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
                    }),
                    `

    `,
                    (0, JSXRuntime.jsxs)(`section`, {
                      style: {
                        marginTop: `20px`,
                        height: `510px`,
                        position: `relative`,
                      },
                      "data-screen-label": `Hero`,
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `absolute`,
                            left: `0`,
                            top: `0`,
                            width: `1663px`,
                            height: `415px`,
                            overflow: `hidden`,
                            borderRadius: `40px`,
                            background: `rgb(var(--rc-tarjeta))`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`img`, {
                              style: {
                                position: `absolute`,
                                left: `0`,
                                top: `0`,
                                width: `1663px`,
                                height: `415px`,
                                display: `block`,
                              },
                              src: resolveViewAsset(`assets/hero-bg.png`),
                              alt: ``,
                            }),
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `absolute`,
                                left: `605px`,
                                top: `88px`,
                                width: `454px`,
                                height: `149px`,
                                pointerEvents: `none`,
                              },
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    position: `absolute`,
                                    left: `0`,
                                    top: `0`,
                                    width: `454px`,
                                    textAlign: `center`,
                                    fontWeight: `400`,
                                    fontSize: `60px`,
                                    whiteSpace: `nowrap`,
                                    lineHeight: `1.0722`,
                                    letterSpacing: `-0.06em`,
                                  },
                                  children: renderContent(e.heroLine1),
                                }),
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    position: `absolute`,
                                    left: `0`,
                                    top: `43px`,
                                    width: `454px`,
                                    height: `106px`,
                                    display: `flex`,
                                    justifyContent: `center`,
                                    alignItems: `center`,
                                    padding: `10px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontWeight: `700`,
                                        fontSize: `80px`,
                                        whiteSpace: `nowrap`,
                                        lineHeight: `1.0722`,
                                        letterSpacing: `-0.06em`,
                                        textTransform: `uppercase`,
                                      },
                                      children: renderContent(e.heroLine2),
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
                              className: `rce1`,
                              style: {
                                position: `absolute`,
                                left: `656px`,
                                top: `248px`,
                                width: `351px`,
                                height: `56px`,
                                borderRadius: `10px`,
                                border: `none`,
                                background: `rgb(var(--rc-marca))`,
                                color: `rgb(255,255,255)`,
                                fontWeight: `700`,
                                fontSize: `28px`,
                                lineHeight: `1.0722`,
                                letterSpacing: `-0.06em`,
                                textTransform: `uppercase`,
                                cursor: `pointer`,
                              },
                              onClick: e.heroCta,
                              children: renderContent(e.heroCtaLabel),
                            }),
                            `
      `,
                          ],
                        }),
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `absolute`,
                            left: `0`,
                            top: `441px`,
                            width: `1663px`,
                            display: `flex`,
                            justifyContent: `space-between`,
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
                                    (0, JSXRuntime.jsxs)(`button`, {
                                      className: `rce0`,
                                      style: {
                                        position: `relative`,
                                        width: `529px`,
                                        height: `69px`,
                                        borderRadius: `10px`,
                                        border: `none`,
                                        background: `rgb(var(--rc-tarjeta))`,
                                        color: `rgb(255,255,255)`,
                                        cursor: `pointer`,
                                        textAlign: `left`,
                                        padding: `0`,
                                      },
                                      onClick: e?.go,
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: resolveStyle(
                                            `position:absolute;left:8px;top:2px;width:75px;height:65px;pointer-events:none;background-image:url('${e?.icon ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                          ),
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            position: `absolute`,
                                            left: `89px`,
                                            top: `24px`,
                                            fontWeight: `700`,
                                            fontSize: `25px`,
                                            whiteSpace: `nowrap`,
                                            lineHeight: `1.0722`,
                                            letterSpacing: `-0.06em`,
                                            textTransform: `uppercase`,
                                          },
                                          children: renderContent(e?.label),
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            position: `absolute`,
                                            left: `393px`,
                                            top: `32px`,
                                            width: `6px`,
                                            height: `6px`,
                                            borderRadius: `50%`,
                                            background: `rgb(38,161,123)`,
                                          },
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            position: `absolute`,
                                            left: `402px`,
                                            top: `26px`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `16px`,
                                            whiteSpace: `nowrap`,
                                            lineHeight: `1.0722`,
                                          },
                                          children: renderContent(e?.players),
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
                    e.showRecent
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            `
      `,
                            (0, JSXRuntime.jsxs)(`section`, {
                              style: {
                                marginTop: `28px`,
                              },
                              "data-screen-label": `Seguir jugando`,
                              children: [
                                `
        `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    display: `block`,
                                    height: `37px`,
                                    fontWeight: `590`,
                                    fontSize: `32px`,
                                    lineHeight: `100%`,
                                    whiteSpace: `nowrap`,
                                  },
                                  children: `Seguir jugando`,
                                }),
                                `
        `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    marginTop: `18px`,
                                    display: `grid`,
                                    gridTemplateColumns: `repeat(6,minmax(0,1fr))`,
                                    gap: `18px`,
                                  },
                                  children: [
                                    `
          `,
                                    asArray(e.recent).map((e, t) =>
                                      (0, JSXRuntime.jsxs)(
                                        React.Fragment,
                                        {
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsxs)(`button`, {
                                              className: `rce5`,
                                              style: {
                                                height: `100px`,
                                                padding: `12px 14px 12px 12px`,
                                                borderRadius: `12px`,
                                                border: `none`,
                                                background: `rgb(var(--rc-tarjeta))`,
                                                color: `rgb(255,255,255)`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                gap: `14px`,
                                                textAlign: `left`,
                                                cursor: `pointer`,
                                                transition: `transform .2s, background .2s, box-shadow .2s`,
                                              },
                                              onClick: e?.play,
                                              children: [
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`div`, {
                                                  style: {
                                                    width: `58px`,
                                                    height: `76px`,
                                                    flexShrink: `0`,
                                                    borderRadius: `8px`,
                                                    background: `rgb(var(--rc-fondo))`,
                                                    overflow: `hidden`,
                                                  },
                                                  children: e?.img
                                                    ? (0, JSXRuntime.jsx)(
                                                        JSXRuntime.Fragment,
                                                        {
                                                          children: (0,
                                                          JSXRuntime.jsx)(
                                                            `div`,
                                                            {
                                                              style:
                                                                resolveStyle(
                                                                  `width:58px;height:76px;;background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                                                ),
                                                            },
                                                          ),
                                                        },
                                                      )
                                                    : null,
                                                }),
                                                `
              `,
                                                (0, JSXRuntime.jsxs)(`div`, {
                                                  style: {
                                                    flex: `1`,
                                                    minWidth: `0`,
                                                    display: `flex`,
                                                    flexDirection: `column`,
                                                    gap: `5px`,
                                                  },
                                                  children: [
                                                    `
                `,
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: {
                                                          fontWeight: `700`,
                                                          fontSize: `16px`,
                                                          letterSpacing: `-0.03em`,
                                                          lineHeight: `1.15`,
                                                          whiteSpace: `nowrap`,
                                                          overflow: `hidden`,
                                                          textOverflow: `ellipsis`,
                                                        },
                                                        children: renderContent(
                                                          e?.name,
                                                        ),
                                                      },
                                                    ),
                                                    `
                `,
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: {
                                                          fontFamily: `Inter,sans-serif`,
                                                          fontWeight: `500`,
                                                          fontSize: `13px`,
                                                          color: `rgba(255,255,255,0.45)`,
                                                        },
                                                        children: renderContent(
                                                          e?.when,
                                                        ),
                                                      },
                                                    ),
                                                    `
              `,
                                                  ],
                                                }),
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    width: `34px`,
                                                    height: `34px`,
                                                    flexShrink: `0`,
                                                    borderRadius: `50%`,
                                                    background: `rgb(var(--rc-marca))`,
                                                    display: `flex`,
                                                    alignItems: `center`,
                                                    justifyContent: `center`,
                                                  },
                                                  children: (0, JSXRuntime.jsx)(
                                                    `svg`,
                                                    {
                                                      width: `13`,
                                                      height: `13`,
                                                      viewBox: `0 0 24 24`,
                                                      fill: `rgb(255,255,255)`,
                                                      children: (0,
                                                      JSXRuntime.jsx)(`path`, {
                                                        d: `M7 4.5v15l13-7.5z`,
                                                      }),
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
                    e.loggedIn
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            `
      `,
                            (0, JSXRuntime.jsxs)(`section`, {
                              style: {
                                marginTop: `38px`,
                              },
                              id: `favoritos`,
                              "data-screen-label": `Favoritos`,
                              children: [
                                `
        `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `13px`,
                                    height: `37px`,
                                  },
                                  children: [
                                    `
          `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontWeight: `590`,
                                        fontSize: `32px`,
                                        lineHeight: `100%`,
                                        whiteSpace: `nowrap`,
                                      },
                                      children: `Tus favoritos`,
                                    }),
                                    `
          `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        height: `27px`,
                                        padding: `0 10px`,
                                        borderRadius: `100px`,
                                        background: `rgb(255,59,79)`,
                                        display: `flex`,
                                        alignItems: `center`,
                                        gap: `5px`,
                                        fontFamily: `'SF Pro Display',-apple-system,sans-serif`,
                                        fontWeight: `600`,
                                        fontSize: `16px`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`svg`, {
                                          width: `13`,
                                          height: `13`,
                                          viewBox: `0 0 24 24`,
                                          fill: `rgb(255,255,255)`,
                                          children: (0, JSXRuntime.jsx)(
                                            `path`,
                                            {
                                              d: `M12 20.5s-8-4.6-8-10.8A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7c0 6.2-8 10.8-8 10.8z`,
                                            },
                                          ),
                                        }),
                                        renderContent(e.favCount),
                                      ],
                                    }),
                                    `
        `,
                                  ],
                                }),
                                `
        `,
                                e.hasFavs
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
          `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            marginTop: `24px`,
                                            display: `grid`,
                                            gridTemplateColumns: `repeat(8,189px)`,
                                            justifyContent: `space-between`,
                                            rowGap: `24px`,
                                          },
                                          children: [
                                            `
            `,
                                            asArray(e.favList).map((e, t) =>
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
                                                          display: `flex`,
                                                          flexDirection: `column`,
                                                          gap: `10px`,
                                                        },
                                                        children: [
                                                          `
                `,
                                                          (0, JSXRuntime.jsxs)(
                                                            `div`,
                                                            {
                                                              className: `rce6`,
                                                              style:
                                                                resolveStyle(
                                                                  `position:relative;height:248px;border-radius:10px;background-color:rgb(var(--rc-tarjeta));background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center;transition:transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s;cursor:pointer`,
                                                                ),
                                                              children: [
                                                                `
                  `,
                                                                (0,
                                                                JSXRuntime.jsx)(
                                                                  `div`,
                                                                  {
                                                                    style: {
                                                                      position: `absolute`,
                                                                      inset: `0`,
                                                                      borderRadius: `10px`,
                                                                    },
                                                                    onClick:
                                                                      e?.play,
                                                                  },
                                                                ),
                                                                `
                  `,
                                                                (0,
                                                                JSXRuntime.jsx)(
                                                                  `button`,
                                                                  {
                                                                    className: `rce7`,
                                                                    style: {
                                                                      position: `absolute`,
                                                                      top: `8px`,
                                                                      right: `8px`,
                                                                      zIndex: `2`,
                                                                      width: `32px`,
                                                                      height: `32px`,
                                                                      borderRadius: `50%`,
                                                                      border: `none`,
                                                                      background: `rgba(var(--rc-fondo),0.65)`,
                                                                      backdropFilter: `blur(4px)`,
                                                                      WebkitBackdropFilter: `blur(4px)`,
                                                                      display: `flex`,
                                                                      alignItems: `center`,
                                                                      justifyContent: `center`,
                                                                      cursor: `pointer`,
                                                                      transition: `transform .15s`,
                                                                    },
                                                                    onClick:
                                                                      e?.toggleFav,
                                                                    title: `Favorito`,
                                                                    children:
                                                                      (0,
                                                                      JSXRuntime.jsx)(
                                                                        `svg`,
                                                                        {
                                                                          style:
                                                                            {
                                                                              fill: e?.favFill,
                                                                              stroke:
                                                                                e?.favStroke,
                                                                            },
                                                                          width: `16`,
                                                                          height: `16`,
                                                                          viewBox: `0 0 24 24`,
                                                                          fill: e?.favFill,
                                                                          stroke:
                                                                            e?.favStroke,
                                                                          strokeWidth: `2`,
                                                                          strokeLinejoin: `round`,
                                                                          children:
                                                                            (0,
                                                                            JSXRuntime.jsx)(
                                                                              `path`,
                                                                              {
                                                                                d: `M12 20.5s-8-4.6-8-10.8A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7c0 6.2-8 10.8-8 10.8z`,
                                                                              },
                                                                            ),
                                                                        },
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
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                fontWeight: `700`,
                                                                fontSize: `16px`,
                                                                letterSpacing: `-0.03em`,
                                                                whiteSpace: `nowrap`,
                                                                overflow: `hidden`,
                                                                textOverflow: `ellipsis`,
                                                                padding: `0 2px`,
                                                              },
                                                              children:
                                                                renderContent(
                                                                  e?.name,
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
                                e.noFavs
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
          `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            marginTop: `20px`,
                                            height: `120px`,
                                            borderRadius: `16px`,
                                            background: `rgb(var(--rc-tarjeta))`,
                                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.2)`,
                                            display: `flex`,
                                            alignItems: `center`,
                                            justifyContent: `center`,
                                            gap: `14px`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `16px`,
                                            color: `rgba(255,255,255,0.55)`,
                                          },
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsx)(`svg`, {
                                              width: `22`,
                                              height: `22`,
                                              viewBox: `0 0 24 24`,
                                              fill: `none`,
                                              stroke: `rgb(255,59,79)`,
                                              strokeWidth: `1.8`,
                                              strokeLinejoin: `round`,
                                              children: (0, JSXRuntime.jsx)(
                                                `path`,
                                                {
                                                  d: `M12 20.5s-8-4.6-8-10.8A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7c0 6.2-8 10.8-8 10.8z`,
                                                },
                                              ),
                                            }),
                                            `Tocá el corazón de cualquier juego para guardarlo acá.
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
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        marginTop: `28px`,
                        display: `flex`,
                        justifyContent: `space-between`,
                        height: `315px`,
                      },
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsxs)(`section`, {
                          style: {
                            width: `969px`,
                          },
                          id: `recomendados`,
                          "data-screen-label": `Recomendados`,
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `13px`,
                                height: `37px`,
                              },
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `590`,
                                    fontSize: `32px`,
                                    lineHeight: `100%`,
                                  },
                                  children: `Recomendados`,
                                }),
                                `
          `,
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    height: `27px`,
                                    padding: `0 10px`,
                                    borderRadius: `100px`,
                                    background: `rgb(var(--rc-marca))`,
                                    display: `flex`,
                                    alignItems: `center`,
                                    fontFamily: `'SF Pro Display',-apple-system,sans-serif`,
                                    fontWeight: `600`,
                                    fontSize: `16px`,
                                  },
                                  children: renderContent(e.recCount),
                                }),
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    marginLeft: `auto`,
                                    display: `flex`,
                                    gap: `10px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`button`, {
                                      className: `rce4`,
                                      style: resolveStyle(
                                        `width:40px;height:40px;border-radius:100px;border:none;background:rgb(var(--rc-tarjeta));box-shadow:inset 0 0 0 1px rgba(var(--rc-acento),0.25);color:rgb(255,255,255);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:${e.recPrevOp ?? ``};transition:background .15s,opacity .15s`,
                                      ),
                                      onClick: e.recPrev,
                                      title: `Anterior`,
                                      children: (0, JSXRuntime.jsx)(`svg`, {
                                        width: `18`,
                                        height: `18`,
                                        viewBox: `0 0 24 24`,
                                        fill: `none`,
                                        stroke: `currentColor`,
                                        strokeWidth: `2`,
                                        strokeLinecap: `round`,
                                        strokeLinejoin: `round`,
                                        children: (0, JSXRuntime.jsx)(`path`, {
                                          d: `m15 6-6 6 6 6`,
                                        }),
                                      }),
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`button`, {
                                      className: `rce4`,
                                      style: resolveStyle(
                                        `width:40px;height:40px;border-radius:100px;border:none;background:rgb(var(--rc-tarjeta));box-shadow:inset 0 0 0 1px rgba(var(--rc-acento),0.25);color:rgb(255,255,255);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:${e.recNextOp ?? ``};transition:background .15s,opacity .15s`,
                                      ),
                                      onClick: e.recNext,
                                      title: `Siguiente`,
                                      children: (0, JSXRuntime.jsx)(`svg`, {
                                        width: `18`,
                                        height: `18`,
                                        viewBox: `0 0 24 24`,
                                        fill: `none`,
                                        stroke: `currentColor`,
                                        strokeWidth: `2`,
                                        strokeLinecap: `round`,
                                        strokeLinejoin: `round`,
                                        children: (0, JSXRuntime.jsx)(`path`, {
                                          d: `m9 6 6 6-6 6`,
                                        }),
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
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                margin: `6px -24px -24px`,
                                padding: `24px`,
                                display: `flex`,
                                gap: `21.5px`,
                                overflowX: `auto`,
                                overflowY: `hidden`,
                                scrollbarWidth: `none`,
                              },
                              ref: e.recRef,
                              onScroll: e.onRecScroll,
                              onMouseEnter: e.recPause,
                              onMouseLeave: e.recResume,
                              children: [
                                `
          `,
                                asArray(e.recs).map((e, t) =>
                                  (0, JSXRuntime.jsxs)(
                                    React.Fragment,
                                    {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          className: `rce6`,
                                          style: {
                                            position: `relative`,
                                            width: `189px`,
                                            height: `248px`,
                                            flexShrink: `0`,
                                            borderRadius: `10px`,
                                            transition: `transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s`,
                                            cursor: `pointer`,
                                          },
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: resolveStyle(
                                                `width:100%;height:248px;border-radius:10px;;background-image:url('${e?.src ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                              ),
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              className: `rce8`,
                                              style: {
                                                position: `absolute`,
                                                inset: `0`,
                                                borderRadius: `10px`,
                                                background: `linear-gradient(180deg, rgba(var(--rc-fondo),0.1) 0%, rgba(var(--rc-fondo),0.85) 100%)`,
                                                opacity: `0`,
                                                transition: `opacity .25s`,
                                                display: `flex`,
                                                flexDirection: `column`,
                                                alignItems: `center`,
                                                justifyContent: `center`,
                                                gap: `12px`,
                                              },
                                              onClick: e?.play,
                                              children: [
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`div`, {
                                                  style: {
                                                    width: `58px`,
                                                    height: `58px`,
                                                    borderRadius: `50%`,
                                                    background: `rgb(var(--rc-marca))`,
                                                    boxShadow: `0 0 24px rgba(var(--rc-marca),0.8)`,
                                                    display: `flex`,
                                                    alignItems: `center`,
                                                    justifyContent: `center`,
                                                  },
                                                  children: (0, JSXRuntime.jsx)(
                                                    `svg`,
                                                    {
                                                      width: `22`,
                                                      height: `22`,
                                                      viewBox: `0 0 24 24`,
                                                      fill: `rgb(255,255,255)`,
                                                      children: (0,
                                                      JSXRuntime.jsx)(`path`, {
                                                        d: `M7 4.5v15l13-7.5z`,
                                                      }),
                                                    },
                                                  ),
                                                }),
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontWeight: `700`,
                                                    fontSize: `20px`,
                                                    letterSpacing: `-0.06em`,
                                                    textTransform: `uppercase`,
                                                  },
                                                  children: `jugar`,
                                                }),
                                                `
            `,
                                              ],
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              className: `rce7`,
                                              style: {
                                                position: `absolute`,
                                                top: `8px`,
                                                right: `8px`,
                                                zIndex: `2`,
                                                width: `32px`,
                                                height: `32px`,
                                                borderRadius: `50%`,
                                                border: `none`,
                                                background: `rgba(var(--rc-fondo),0.65)`,
                                                backdropFilter: `blur(4px)`,
                                                WebkitBackdropFilter: `blur(4px)`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                justifyContent: `center`,
                                                cursor: `pointer`,
                                                transition: `transform .15s`,
                                              },
                                              onClick: e?.toggleFav,
                                              title: `Favorito`,
                                              children: (0, JSXRuntime.jsx)(
                                                `svg`,
                                                {
                                                  style: {
                                                    fill: e?.favFill,
                                                    stroke: e?.favStroke,
                                                  },
                                                  width: `16`,
                                                  height: `16`,
                                                  viewBox: `0 0 24 24`,
                                                  fill: e?.favFill,
                                                  stroke: e?.favStroke,
                                                  strokeWidth: `2`,
                                                  strokeLinejoin: `round`,
                                                  children: (0, JSXRuntime.jsx)(
                                                    `path`,
                                                    {
                                                      d: `M12 20.5s-8-4.6-8-10.8A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7c0 6.2-8 10.8-8 10.8z`,
                                                    },
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
                        (0, JSXRuntime.jsxs)(`section`, {
                          style: {
                            position: `relative`,
                            width: `656px`,
                            height: `315px`,
                            overflow: `hidden`,
                            borderRadius: `20px`,
                            background: `rgb(var(--rc-fondo))`,
                          },
                          "data-screen-label": `Bono`,
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`img`, {
                              style: {
                                position: `absolute`,
                                left: `0`,
                                top: `0`,
                                width: `656px`,
                                height: `315px`,
                                display: `block`,
                              },
                              src: resolveViewAsset(`assets/bono-bg.png`),
                              alt: ``,
                            }),
                            `
        `,
                            e.loggedOut
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
        `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        position: `absolute`,
                                        left: `75px`,
                                        top: `68px`,
                                        fontWeight: `400`,
                                        fontSize: `40px`,
                                        whiteSpace: `nowrap`,
                                        lineHeight: `1.0722`,
                                        letterSpacing: `-0.06em`,
                                        pointerEvents: `none`,
                                      },
                                      children: `Bono bienvenida`,
                                    }),
                                    `
        `,
                                    (0, JSXRuntime.jsx)(`button`, {
                                      className: `rce1`,
                                      style: {
                                        position: `absolute`,
                                        left: `49px`,
                                        top: `123px`,
                                        width: `296px`,
                                        height: `79px`,
                                        borderRadius: `10px`,
                                        border: `none`,
                                        background: `rgb(var(--rc-marca))`,
                                        color: `rgb(255,255,255)`,
                                        fontWeight: `700`,
                                        fontSize: `55px`,
                                        lineHeight: `1.0722`,
                                        letterSpacing: `-0.06em`,
                                        textTransform: `uppercase`,
                                        cursor: `pointer`,
                                      },
                                      onClick: e.copyCode,
                                      title: `Copiar código`,
                                      children: renderContent(e.codeLabel),
                                    }),
                                    `
        `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        position: `absolute`,
                                        left: `38px`,
                                        top: `270px`,
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `16px`,
                                        whiteSpace: `nowrap`,
                                        lineHeight: `1.0722`,
                                        color: `rgba(255,255,255,0.4)`,
                                        pointerEvents: `none`,
                                      },
                                      children: `Disponible únicamente en tu primer carga`,
                                    }),
                                    `
        `,
                                  ],
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
                                        position: `absolute`,
                                        left: `44px`,
                                        top: `48px`,
                                        width: `330px`,
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `14px`,
                                      },
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontWeight: `400`,
                                            fontSize: `40px`,
                                            lineHeight: `1.0722`,
                                            letterSpacing: `-0.06em`,
                                          },
                                          children: `Tu bono`,
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
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                height: `34px`,
                                                padding: `0 12px`,
                                                borderRadius: `8px`,
                                                background: `rgb(var(--rc-marca))`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                fontWeight: `700`,
                                                fontSize: `22px`,
                                                letterSpacing: `-0.06em`,
                                              },
                                              children: `ROCCO12`,
                                            }),
                                            (0, JSXRuntime.jsxs)(`span`, {
                                              style: {
                                                display: `flex`,
                                                alignItems: `center`,
                                                gap: `6px`,
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `14px`,
                                                color: `rgb(38,200,150)`,
                                              },
                                              children: [
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    width: `6px`,
                                                    height: `6px`,
                                                    borderRadius: `50%`,
                                                    background: `rgb(38,161,123)`,
                                                  },
                                                }),
                                                `Activo`,
                                              ],
                                            }),
                                          ],
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            marginTop: `14px`,
                                            height: `10px`,
                                            borderRadius: `100px`,
                                            background: `rgba(255,255,255,0.12)`,
                                            overflow: `hidden`,
                                          },
                                          children: (0, JSXRuntime.jsx)(`div`, {
                                            style: {
                                              width: `35%`,
                                              height: `10px`,
                                              borderRadius: `100px`,
                                              background: `linear-gradient(90deg, rgb(var(--rc-marca)) 0%, rgb(var(--rc-acento)) 100%)`,
                                              boxShadow: `0 0 12px rgba(var(--rc-acento),0.7)`,
                                            },
                                          }),
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`span`, {
                                          style: {
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `15px`,
                                            color: `rgba(255,255,255,0.6)`,
                                          },
                                          children: [
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                color: `rgb(255,255,255)`,
                                              },
                                              children: `$350`,
                                            }),
                                            ` de $1.000 apostados · 35%`,
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
                        marginTop: `77px`,
                      },
                      id: `slots`,
                      "data-screen-label": `Slots`,
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `13px`,
                            height: `37px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontWeight: `590`,
                                fontSize: `32px`,
                                lineHeight: `100%`,
                              },
                              children: `Slots`,
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                height: `27px`,
                                padding: `0 10px`,
                                borderRadius: `100px`,
                                background: `rgb(var(--rc-marca))`,
                                display: `flex`,
                                alignItems: `center`,
                                fontFamily: `'SF Pro Display',-apple-system,sans-serif`,
                                fontWeight: `600`,
                                fontSize: `16px`,
                              },
                              children: `250`,
                            }),
                            `
      `,
                          ],
                        }),
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            marginTop: `30px`,
                            display: `grid`,
                            gridTemplateColumns: `repeat(8,189px)`,
                            justifyContent: `space-between`,
                            rowGap: `21px`,
                          },
                          children: [
                            `
        `,
                            asArray(e.slots).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
          `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      className: `rce6`,
                                      style: {
                                        position: `relative`,
                                        height: `248px`,
                                        borderRadius: `10px`,
                                        background: `rgb(var(--rc-tarjeta))`,
                                        transition: `transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s`,
                                        cursor: `pointer`,
                                      },
                                      title: `Imagen desde la API`,
                                      children: [
                                        `
            `,
                                        e?.src
                                          ? (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsx)(
                                                  `div`,
                                                  {
                                                    style: resolveStyle(
                                                      `width:189px;height:248px;border-radius:10px;background-image:url('${e?.src ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                                    ),
                                                  },
                                                ),
                                              },
                                            )
                                          : null,
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          className: `rce8`,
                                          style: {
                                            position: `absolute`,
                                            inset: `0`,
                                            borderRadius: `10px`,
                                            background: `linear-gradient(180deg, rgba(var(--rc-fondo),0.1) 0%, rgba(var(--rc-fondo),0.85) 100%)`,
                                            opacity: `0`,
                                            transition: `opacity .25s`,
                                            display: `flex`,
                                            flexDirection: `column`,
                                            alignItems: `center`,
                                            justifyContent: `center`,
                                            gap: `12px`,
                                          },
                                          onClick: e?.play,
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: {
                                                width: `58px`,
                                                height: `58px`,
                                                borderRadius: `50%`,
                                                background: `rgb(var(--rc-marca))`,
                                                boxShadow: `0 0 24px rgba(var(--rc-marca),0.8)`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                justifyContent: `center`,
                                              },
                                              children: (0, JSXRuntime.jsx)(
                                                `svg`,
                                                {
                                                  width: `22`,
                                                  height: `22`,
                                                  viewBox: `0 0 24 24`,
                                                  fill: `rgb(255,255,255)`,
                                                  children: (0, JSXRuntime.jsx)(
                                                    `path`,
                                                    {
                                                      d: `M7 4.5v15l13-7.5z`,
                                                    },
                                                  ),
                                                },
                                              ),
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontWeight: `700`,
                                                fontSize: `20px`,
                                                letterSpacing: `-0.06em`,
                                                textTransform: `uppercase`,
                                              },
                                              children: `jugar`,
                                            }),
                                            `
            `,
                                          ],
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          className: `rce7`,
                                          style: {
                                            position: `absolute`,
                                            top: `8px`,
                                            right: `8px`,
                                            zIndex: `2`,
                                            width: `32px`,
                                            height: `32px`,
                                            borderRadius: `50%`,
                                            border: `none`,
                                            background: `rgba(var(--rc-fondo),0.65)`,
                                            backdropFilter: `blur(4px)`,
                                            WebkitBackdropFilter: `blur(4px)`,
                                            display: `flex`,
                                            alignItems: `center`,
                                            justifyContent: `center`,
                                            cursor: `pointer`,
                                            transition: `transform .15s`,
                                          },
                                          onClick: e?.toggleFav,
                                          title: `Favorito`,
                                          children: (0, JSXRuntime.jsx)(`svg`, {
                                            style: {
                                              fill: e?.favFill,
                                              stroke: e?.favStroke,
                                            },
                                            width: `16`,
                                            height: `16`,
                                            viewBox: `0 0 24 24`,
                                            fill: e?.favFill,
                                            stroke: e?.favStroke,
                                            strokeWidth: `2`,
                                            strokeLinejoin: `round`,
                                            children: (0, JSXRuntime.jsx)(
                                              `path`,
                                              {
                                                d: `M12 20.5s-8-4.6-8-10.8A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7c0 6.2-8 10.8-8 10.8z`,
                                              },
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
                            marginTop: `12px`,
                            height: `44px`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `35px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                flex: `1`,
                                height: `0`,
                                boxShadow: `inset 0 0 0 0.5px rgb(var(--rc-acento)),0 0 0 0.5px rgb(var(--rc-acento))`,
                              },
                            }),
                            `
        `,
                            (0, JSXRuntime.jsxs)(`button`, {
                              className: `rce9`,
                              style: {
                                width: `142px`,
                                height: `44px`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: `1px`,
                                padding: `10px`,
                                background: `none`,
                                border: `none`,
                                color: `rgb(255,255,255)`,
                                cursor: `pointer`,
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `500`,
                                fontSize: `16px`,
                                lineHeight: `1.0722`,
                                whiteSpace: `nowrap`,
                              },
                              onClick: e.toggleSlots,
                              children: [
                                `
          `,
                                renderContent(e.slotsMoreLabel),
                                `
          `,
                                (0, JSXRuntime.jsx)(`svg`, {
                                  style: resolveStyle(
                                    `transform:rotate(${e.slotsArrow ?? ``})`,
                                  ),
                                  width: `24`,
                                  height: `24`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  strokeWidth: `1.8`,
                                  strokeLinecap: `round`,
                                  strokeLinejoin: `round`,
                                  children: (0, JSXRuntime.jsx)(`path`, {
                                    d: `M12 6v12M7 13l5 5 5-5`,
                                  }),
                                }),
                                `
        `,
                              ],
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                flex: `1`,
                                height: `0`,
                                boxShadow: `inset 0 0 0 0.5px rgb(var(--rc-acento)),0 0 0 0.5px rgb(var(--rc-acento))`,
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
                    (0, JSXRuntime.jsxs)(`section`, {
                      style: {
                        marginTop: `33px`,
                      },
                      id: `envivo`,
                      "data-screen-label": `En vivo`,
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `13px`,
                            height: `37px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontWeight: `590`,
                                fontSize: `32px`,
                                lineHeight: `100%`,
                              },
                              children: `En vivo`,
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                height: `27px`,
                                padding: `0 10px`,
                                borderRadius: `100px`,
                                background: `rgb(var(--rc-marca))`,
                                display: `flex`,
                                alignItems: `center`,
                                fontFamily: `'SF Pro Display',-apple-system,sans-serif`,
                                fontWeight: `600`,
                                fontSize: `16px`,
                              },
                              children: `250`,
                            }),
                            `
      `,
                          ],
                        }),
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            marginTop: `30px`,
                            display: `grid`,
                            gridTemplateColumns: `repeat(8,189px)`,
                            justifyContent: `space-between`,
                            rowGap: `21px`,
                          },
                          children: [
                            `
        `,
                            asArray(e.live).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
          `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      className: `rce6`,
                                      style: {
                                        position: `relative`,
                                        height: `248px`,
                                        borderRadius: `10px`,
                                        background: `rgb(var(--rc-tarjeta))`,
                                        transition: `transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s`,
                                        cursor: `pointer`,
                                      },
                                      children: [
                                        `
            `,
                                        e?.src
                                          ? (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsx)(
                                                  `div`,
                                                  {
                                                    style: resolveStyle(
                                                      `width:189px;height:248px;border-radius:10px;background-image:url('${e?.src ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                                    ),
                                                  },
                                                ),
                                              },
                                            )
                                          : null,
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          className: `rce8`,
                                          style: {
                                            position: `absolute`,
                                            inset: `0`,
                                            borderRadius: `10px`,
                                            background: `linear-gradient(180deg, rgba(var(--rc-fondo),0.1) 0%, rgba(var(--rc-fondo),0.85) 100%)`,
                                            opacity: `0`,
                                            transition: `opacity .25s`,
                                            display: `flex`,
                                            flexDirection: `column`,
                                            alignItems: `center`,
                                            justifyContent: `center`,
                                            gap: `12px`,
                                          },
                                          onClick: e?.play,
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: {
                                                width: `58px`,
                                                height: `58px`,
                                                borderRadius: `50%`,
                                                background: `rgb(var(--rc-marca))`,
                                                boxShadow: `0 0 24px rgba(var(--rc-marca),0.8)`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                justifyContent: `center`,
                                              },
                                              children: (0, JSXRuntime.jsx)(
                                                `svg`,
                                                {
                                                  width: `22`,
                                                  height: `22`,
                                                  viewBox: `0 0 24 24`,
                                                  fill: `rgb(255,255,255)`,
                                                  children: (0, JSXRuntime.jsx)(
                                                    `path`,
                                                    {
                                                      d: `M7 4.5v15l13-7.5z`,
                                                    },
                                                  ),
                                                },
                                              ),
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontWeight: `700`,
                                                fontSize: `20px`,
                                                letterSpacing: `-0.06em`,
                                                textTransform: `uppercase`,
                                              },
                                              children: `jugar`,
                                            }),
                                            `
            `,
                                          ],
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          className: `rce7`,
                                          style: {
                                            position: `absolute`,
                                            top: `8px`,
                                            right: `8px`,
                                            zIndex: `2`,
                                            width: `32px`,
                                            height: `32px`,
                                            borderRadius: `50%`,
                                            border: `none`,
                                            background: `rgba(var(--rc-fondo),0.65)`,
                                            backdropFilter: `blur(4px)`,
                                            WebkitBackdropFilter: `blur(4px)`,
                                            display: `flex`,
                                            alignItems: `center`,
                                            justifyContent: `center`,
                                            cursor: `pointer`,
                                            transition: `transform .15s`,
                                          },
                                          onClick: e?.toggleFav,
                                          title: `Favorito`,
                                          children: (0, JSXRuntime.jsx)(`svg`, {
                                            style: {
                                              fill: e?.favFill,
                                              stroke: e?.favStroke,
                                            },
                                            width: `16`,
                                            height: `16`,
                                            viewBox: `0 0 24 24`,
                                            fill: e?.favFill,
                                            stroke: e?.favStroke,
                                            strokeWidth: `2`,
                                            strokeLinejoin: `round`,
                                            children: (0, JSXRuntime.jsx)(
                                              `path`,
                                              {
                                                d: `M12 20.5s-8-4.6-8-10.8A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7c0 6.2-8 10.8-8 10.8z`,
                                              },
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
                            marginTop: `12px`,
                            height: `44px`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `35px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                flex: `1`,
                                height: `0`,
                                boxShadow: `inset 0 0 0 0.5px rgb(var(--rc-acento)),0 0 0 0.5px rgb(var(--rc-acento))`,
                              },
                            }),
                            `
        `,
                            (0, JSXRuntime.jsxs)(`button`, {
                              className: `rce9`,
                              style: {
                                width: `142px`,
                                height: `44px`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: `1px`,
                                padding: `10px`,
                                background: `none`,
                                border: `none`,
                                color: `rgb(255,255,255)`,
                                cursor: `pointer`,
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `500`,
                                fontSize: `16px`,
                                lineHeight: `1.0722`,
                                whiteSpace: `nowrap`,
                              },
                              onClick: e.toggleLive,
                              children: [
                                `
          `,
                                renderContent(e.liveMoreLabel),
                                `
          `,
                                (0, JSXRuntime.jsx)(`svg`, {
                                  style: resolveStyle(
                                    `transform:rotate(${e.liveArrow ?? ``})`,
                                  ),
                                  width: `24`,
                                  height: `24`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  strokeWidth: `1.8`,
                                  strokeLinecap: `round`,
                                  strokeLinejoin: `round`,
                                  children: (0, JSXRuntime.jsx)(`path`, {
                                    d: `M12 6v12M7 13l5 5 5-5`,
                                  }),
                                }),
                                `
        `,
                              ],
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                flex: `1`,
                                height: `0`,
                                boxShadow: `inset 0 0 0 0.5px rgb(var(--rc-acento)),0 0 0 0.5px rgb(var(--rc-acento))`,
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
                    (0, JSXRuntime.jsxs)(`section`, {
                      style: {
                        marginTop: `38px`,
                      },
                      id: `deportivas`,
                      "data-screen-label": `Deportivas`,
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `13px`,
                            height: `37px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontWeight: `590`,
                                fontSize: `32px`,
                                lineHeight: `100%`,
                              },
                              children: `Deportivas`,
                            }),
                            `
        
      `,
                          ],
                        }),
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            marginTop: `27px`,
                            display: `grid`,
                            gridTemplateColumns: `repeat(6,253px)`,
                            justifyContent: `space-between`,
                            rowGap: `28px`,
                          },
                          children: [
                            `
        `,
                            asArray(e.sports).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
          `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        position: `relative`,
                                        width: `253px`,
                                        height: `364px`,
                                        borderRadius: `20px`,
                                        overflow: `hidden`,
                                        background: `linear-gradient(180deg, rgb(var(--rc-acento)) 0%, rgb(var(--rc-deporte)) 100%)`,
                                      },
                                      children: [
                                        `
            `,
                                        e?.img
                                          ? (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsx)(
                                                  `div`,
                                                  {
                                                    style: resolveStyle(
                                                      `position:absolute;inset:0;width:253px;height:364px;;background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                                    ),
                                                  },
                                                ),
                                              },
                                            )
                                          : null,
                                        `
            `,
                                        e?.noImg
                                          ? (0, JSXRuntime.jsxs)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: [
                                                  `
              `,
                                                  (0, JSXRuntime.jsx)(`div`, {
                                                    style: {
                                                      position: `absolute`,
                                                      inset: `0`,
                                                      background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(var(--rc-marca)) 100%)`,
                                                      pointerEvents: `none`,
                                                    },
                                                  }),
                                                  `
              `,
                                                  (0, JSXRuntime.jsx)(`span`, {
                                                    style: {
                                                      position: `absolute`,
                                                      left: `27px`,
                                                      top: `269px`,
                                                      width: `199px`,
                                                      fontFamily: `Oswald,sans-serif`,
                                                      fontWeight: `700`,
                                                      fontSize: `32px`,
                                                      textAlign: `center`,
                                                      whiteSpace: `nowrap`,
                                                      lineHeight: `100%`,
                                                      textTransform: `uppercase`,
                                                      pointerEvents: `none`,
                                                    },
                                                    children: renderContent(
                                                      e?.label,
                                                    ),
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
                        marginTop: `38px`,
                      },
                      id: `ganadores`,
                      "data-screen-label": `Ganadores`,
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `flex-end`,
                            justifyContent: `space-between`,
                            gap: `20px`,
                          },
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
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `590`,
                                    fontSize: `32px`,
                                    lineHeight: `100%`,
                                    whiteSpace: `nowrap`,
                                  },
                                  children: `Ganadores`,
                                }),
                                `
          `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontFamily: `Inter,sans-serif`,
                                    fontWeight: `500`,
                                    fontSize: `15px`,
                                    color: `rgba(255,255,255,0.5)`,
                                    whiteSpace: `nowrap`,
                                  },
                                  children: `Los últimos premios de la comunidad, en tiempo real.`,
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
                                gridTemplateColumns: `1fr 1fr`,
                                gap: `4px`,
                                padding: `4px`,
                                borderRadius: `12px`,
                                background: `rgb(var(--rc-tarjeta))`,
                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.2)`,
                                width: `340px`,
                                flexShrink: `0`,
                              },
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  style: resolveStyle(
                                    `height:38px;border-radius:9px;border:none;background:${e.wRecentBg ?? ``};color:${e.wRecentColor ?? ``};font-weight:700;font-size:15px;letter-spacing:-0.02em;text-transform:uppercase;cursor:pointer;white-space:nowrap`,
                                  ),
                                  onClick: e.wTabRecent,
                                  children: `recientes`,
                                }),
                                `
          `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  style: resolveStyle(
                                    `height:38px;border-radius:9px;border:none;background:${e.wTopBg ?? ``};color:${e.wTopColor ?? ``};font-weight:700;font-size:15px;letter-spacing:-0.02em;text-transform:uppercase;cursor:pointer;white-space:nowrap`,
                                  ),
                                  onClick: e.wTabTop,
                                  children: `top del día`,
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
                            marginTop: `24px`,
                            borderRadius: `20px`,
                            overflow: `hidden`,
                            background: `rgb(var(--rc-tarjeta))`,
                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-borde),0.9),0 20px 50px rgba(0,0,0,0.3)`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `grid`,
                                gridTemplateColumns: `minmax(0,2.3fr) minmax(0,1.7fr) minmax(0,0.8fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.1fr)`,
                                alignItems: `center`,
                                height: `54px`,
                                padding: `0 28px`,
                                background: `rgba(var(--rc-fondo),0.55)`,
                                boxShadow: `inset 0 -1px 0 rgba(var(--rc-acento),0.18)`,
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `600`,
                                fontSize: `12px`,
                                letterSpacing: `0.08em`,
                                textTransform: `uppercase`,
                                color: `rgba(255,255,255,0.45)`,
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
                            asArray(e.hWinners).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
          `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      className: `rcea`,
                                      style: resolveStyle(
                                        `display:grid;grid-template-columns:minmax(0,2.3fr) minmax(0,1.7fr) minmax(0,0.8fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.1fr);align-items:center;height:76px;padding:0 28px;box-shadow:inset 0 -1px 0 rgba(var(--rc-acento),0.1);background:${e?.bg ?? ``};cursor:pointer;transition:background .5s`,
                                      ),
                                      onClick: e?.play,
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            display: `flex`,
                                            alignItems: `center`,
                                            gap: `14px`,
                                            minWidth: `0`,
                                          },
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: resolveStyle(
                                                `width:46px;height:46px;border-radius:11px;flex-shrink:0;background-color:rgb(var(--rc-fondo));background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(var(--rc-acento),0.2)`,
                                              ),
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                display: `flex`,
                                                flexDirection: `column`,
                                                gap: `3px`,
                                                minWidth: `0`,
                                              },
                                              children: [
                                                `
                `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontWeight: `700`,
                                                    fontSize: `16px`,
                                                    letterSpacing: `-0.02em`,
                                                    whiteSpace: `nowrap`,
                                                    overflow: `hidden`,
                                                    textOverflow: `ellipsis`,
                                                  },
                                                  children: renderContent(
                                                    e?.game,
                                                  ),
                                                }),
                                                `
                `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontFamily: `Inter,sans-serif`,
                                                    fontWeight: `500`,
                                                    fontSize: `12px`,
                                                    color: `rgba(255,255,255,0.4)`,
                                                    whiteSpace: `nowrap`,
                                                  },
                                                  children: renderContent(
                                                    e?.provider,
                                                  ),
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
                                            gap: `10px`,
                                            minWidth: `0`,
                                          },
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: resolveStyle(
                                                `width:30px;height:30px;flex-shrink:0;border-radius:50%;background:${e?.avatar ?? ``};display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-weight:700;font-size:13px`,
                                              ),
                                              children: renderContent(
                                                e?.initial,
                                              ),
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `600`,
                                                fontSize: `15px`,
                                                whiteSpace: `nowrap`,
                                                overflow: `hidden`,
                                                textOverflow: `ellipsis`,
                                              },
                                              children: renderContent(e?.user),
                                            }),
                                            `
            `,
                                          ],
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `15px`,
                                            color: `rgba(255,255,255,0.55)`,
                                            fontVariantNumeric: `tabular-nums`,
                                          },
                                          children: renderContent(e?.time),
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            textAlign: `right`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `15px`,
                                            color: `rgba(255,255,255,0.8)`,
                                            fontVariantNumeric: `tabular-nums`,
                                            whiteSpace: `nowrap`,
                                          },
                                          children: renderContent(e?.bet),
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            display: `flex`,
                                            justifyContent: `flex-end`,
                                          },
                                          children: (0, JSXRuntime.jsx)(
                                            `span`,
                                            {
                                              style: resolveStyle(
                                                `height:28px;padding:0 10px;border-radius:8px;background:${e?.multBg ?? ``};color:${e?.multColor ?? ``};box-shadow:${e?.multGlow ?? ``};display:flex;align-items:center;font-family:Oswald,sans-serif;font-size:16px;white-space:nowrap`,
                                              ),
                                              children: renderContent(e?.mult),
                                            },
                                          ),
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`span`, {
                                          style: {
                                            textAlign: `right`,
                                            fontWeight: `700`,
                                            fontSize: `18px`,
                                            letterSpacing: `-0.03em`,
                                            color: `rgb(80,225,140)`,
                                            fontVariantNumeric: `tabular-nums`,
                                            whiteSpace: `nowrap`,
                                          },
                                          children: [
                                            `+`,
                                            renderContent(e?.pay),
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
            e.isGame
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`section`, {
                      style: {
                        minHeight: `1200px`,
                      },
                      "data-screen-label": `Juego`,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `10px`,
                            fontFamily: `Inter,sans-serif`,
                            fontWeight: `500`,
                            fontSize: `16px`,
                            color: `rgba(255,255,255,0.5)`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`button`, {
                              className: `rce4`,
                              style: {
                                height: `40px`,
                                padding: `0 16px 0 10px`,
                                borderRadius: `100px`,
                                border: `none`,
                                background: `rgb(var(--rc-tarjeta))`,
                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.25)`,
                                color: `rgb(255,255,255)`,
                                display: `flex`,
                                alignItems: `center`,
                                gap: `6px`,
                                font: `inherit`,
                                cursor: `pointer`,
                              },
                              onClick: e.backFromGame,
                              children: [
                                (0, JSXRuntime.jsx)(`svg`, {
                                  width: `18`,
                                  height: `18`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  strokeWidth: `2`,
                                  strokeLinecap: `round`,
                                  strokeLinejoin: `round`,
                                  children: (0, JSXRuntime.jsx)(`path`, {
                                    d: `m15 6-6 6 6 6`,
                                  }),
                                }),
                                `Volver`,
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                marginLeft: `8px`,
                                whiteSpace: `nowrap`,
                              },
                              children: `Inicio`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              children: `/`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                whiteSpace: `nowrap`,
                              },
                              children: renderContent(e.gKind),
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              children: `/`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                color: `rgb(255,255,255)`,
                                whiteSpace: `nowrap`,
                              },
                              children: renderContent(e.gName),
                            }),
                            `
        `,
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `margin-top:20px;display:grid;grid-template-columns:${e.gameCols ?? ``};gap:24px;align-items:start`,
                          ),
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                borderRadius: `20px`,
                                overflow: `hidden`,
                                background: `rgb(var(--rc-tarjeta))`,
                                boxShadow: `inset 0 0 0 1px rgb(var(--rc-borde)),0 20px 50px rgba(0,0,0,0.4)`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    height: `68px`,
                                    padding: `0 16px 0 14px`,
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `14px`,
                                  },
                                  children: [
                                    `
              `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        width: `40px`,
                                        height: `40px`,
                                        borderRadius: `9px`,
                                        background: `rgb(var(--rc-fondo))`,
                                        overflow: `hidden`,
                                        flexShrink: `0`,
                                      },
                                      children: e.gImg
                                        ? (0, JSXRuntime.jsx)(
                                            JSXRuntime.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsx)(
                                                `div`,
                                                {
                                                  style: resolveStyle(
                                                    `width:40px;height:40px;;background-image:url('${e.gImg ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                                  ),
                                                },
                                              ),
                                            },
                                          )
                                        : null,
                                    }),
                                    `
              `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `3px`,
                                        minWidth: `0`,
                                      },
                                      children: [
                                        `
                `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontWeight: `700`,
                                            fontSize: `20px`,
                                            letterSpacing: `-0.04em`,
                                            whiteSpace: `nowrap`,
                                          },
                                          children: renderContent(e.gName),
                                        }),
                                        `
                `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `13px`,
                                            color: `rgba(255,255,255,0.45)`,
                                          },
                                          children: renderContent(e.gProvider),
                                        }),
                                        `
              `,
                                      ],
                                    }),
                                    `
              `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        marginLeft: `auto`,
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
                                            gap: `3px`,
                                            padding: `3px`,
                                            borderRadius: `10px`,
                                            background: `rgb(var(--rc-fondo))`,
                                          },
                                          children: [
                                            `
                  `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              style: resolveStyle(
                                                `height:34px;padding:0 14px;border-radius:8px;border:none;background:${e.realBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:14px;letter-spacing:-0.03em;text-transform:uppercase;cursor:pointer;white-space:nowrap;flex-shrink:0`,
                                              ),
                                              onClick: e.setReal,
                                              children: `dinero real`,
                                            }),
                                            `
                  `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              style: resolveStyle(
                                                `height:34px;padding:0 14px;border-radius:8px;border:none;background:${e.demoBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:14px;letter-spacing:-0.03em;text-transform:uppercase;cursor:pointer;white-space:nowrap;flex-shrink:0`,
                                              ),
                                              onClick: e.setDemo,
                                              children: `demo`,
                                            }),
                                            `
                `,
                                          ],
                                        }),
                                        `
                `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          className: `rce0`,
                                          style: {
                                            width: `40px`,
                                            height: `40px`,
                                            borderRadius: `10px`,
                                            border: `none`,
                                            background: `rgb(var(--rc-fondo))`,
                                            display: `flex`,
                                            alignItems: `center`,
                                            justifyContent: `center`,
                                            cursor: `pointer`,
                                          },
                                          onClick: e.toggleFav,
                                          title: `Favorito`,
                                          children: (0, JSXRuntime.jsx)(`svg`, {
                                            style: {
                                              fill: e.favFill,
                                              stroke: e.favStroke,
                                            },
                                            width: `20`,
                                            height: `20`,
                                            viewBox: `0 0 24 24`,
                                            fill: e.favFill,
                                            stroke: e.favStroke,
                                            strokeWidth: `1.8`,
                                            strokeLinejoin: `round`,
                                            children: (0, JSXRuntime.jsx)(
                                              `path`,
                                              {
                                                d: `M12 20.5s-8-4.6-8-10.8A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7c0 6.2-8 10.8-8 10.8z`,
                                              },
                                            ),
                                          }),
                                        }),
                                        `
                `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          className: `rceb`,
                                          style: {
                                            width: `40px`,
                                            height: `40px`,
                                            borderRadius: `10px`,
                                            border: `none`,
                                            background: `rgb(var(--rc-fondo))`,
                                            color: `rgb(var(--rc-gris))`,
                                            display: `flex`,
                                            alignItems: `center`,
                                            justifyContent: `center`,
                                            cursor: `pointer`,
                                          },
                                          onClick: e.toggleTheater,
                                          title: e.theaterTitle,
                                          children: (0, JSXRuntime.jsx)(`svg`, {
                                            width: `18`,
                                            height: `18`,
                                            viewBox: `0 0 24 24`,
                                            fill: `none`,
                                            stroke: `currentColor`,
                                            strokeWidth: `2`,
                                            strokeLinecap: `round`,
                                            strokeLinejoin: `round`,
                                            children: (0, JSXRuntime.jsx)(
                                              `path`,
                                              {
                                                d: `M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5`,
                                              },
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
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    position: `relative`,
                                    aspectRatio: `16 / 9`,
                                    background: `rgb(var(--rc-fondo))`,
                                    overflow: `hidden`,
                                    display: `flex`,
                                    alignItems: `center`,
                                    justifyContent: `center`,
                                  },
                                  children: [
                                    `
              `,
                                    e.gImg
                                      ? (0, JSXRuntime.jsx)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsx)(
                                              `div`,
                                              {
                                                style: resolveStyle(
                                                  `position:absolute;inset:-40px;width:calc(100% + 80px);height:calc(100% + 80px);filter:blur(40px);opacity:0.45;;background-image:url('${e.gImg ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                                ),
                                              },
                                            ),
                                          },
                                        )
                                      : null,
                                    `
              `,
                                    e.gLoading
                                      ? (0, JSXRuntime.jsxs)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: [
                                              `
                `,
                                              (0, JSXRuntime.jsxs)(`div`, {
                                                style: {
                                                  position: `relative`,
                                                  display: `flex`,
                                                  flexDirection: `column`,
                                                  alignItems: `center`,
                                                  gap: `18px`,
                                                },
                                                children: [
                                                  `
                  `,
                                                  renderContent(e.spinner),
                                                  `
                  `,
                                                  (0, JSXRuntime.jsxs)(`span`, {
                                                    style: {
                                                      fontWeight: `700`,
                                                      fontSize: `28px`,
                                                      letterSpacing: `-0.05em`,
                                                    },
                                                    children: [
                                                      `Cargando `,
                                                      renderContent(e.gName),
                                                      `…`,
                                                    ],
                                                  }),
                                                  `
                  `,
                                                  (0, JSXRuntime.jsxs)(`span`, {
                                                    style: {
                                                      fontFamily: `Inter,sans-serif`,
                                                      fontWeight: `500`,
                                                      fontSize: `15px`,
                                                      color: `rgba(255,255,255,0.5)`,
                                                    },
                                                    children: [
                                                      `Conectando con `,
                                                      renderContent(
                                                        e.gProvider,
                                                      ),
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
                                    e.gReady
                                      ? (0, JSXRuntime.jsxs)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: [
                                              `
                `,
                                              (0, JSXRuntime.jsxs)(`div`, {
                                                style: {
                                                  position: `relative`,
                                                  display: `flex`,
                                                  flexDirection: `column`,
                                                  alignItems: `center`,
                                                  gap: `16px`,
                                                },
                                                children: [
                                                  `
                  `,
                                                  (0, JSXRuntime.jsx)(`div`, {
                                                    style: {
                                                      width: `170px`,
                                                      height: `223px`,
                                                      borderRadius: `14px`,
                                                      background: `rgb(var(--rc-tarjeta))`,
                                                      overflow: `hidden`,
                                                      boxShadow: `0 0 0 2px rgb(var(--rc-marca)),0 0 40px rgba(var(--rc-marca),0.5)`,
                                                    },
                                                    children: e.gImg
                                                      ? (0, JSXRuntime.jsx)(
                                                          JSXRuntime.Fragment,
                                                          {
                                                            children: (0,
                                                            JSXRuntime.jsx)(
                                                              `div`,
                                                              {
                                                                style:
                                                                  resolveStyle(
                                                                    `width:170px;height:223px;;background-image:url('${e.gImg ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                                                  ),
                                                              },
                                                            ),
                                                          },
                                                        )
                                                      : null,
                                                  }),
                                                  `
                  `,
                                                  (0, JSXRuntime.jsxs)(`span`, {
                                                    style: {
                                                      fontFamily: `Inter,sans-serif`,
                                                      fontWeight: `500`,
                                                      fontSize: `15px`,
                                                      color: `rgba(255,255,255,0.5)`,
                                                      whiteSpace: `nowrap`,
                                                    },
                                                    children: [
                                                      `Acá se carga el juego de `,
                                                      renderContent(
                                                        e.gProvider,
                                                      ),
                                                      ` · `,
                                                      renderContent(
                                                        e.gModeLabel,
                                                      ),
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
                                  ],
                                }),
                                `
          `,
                              ],
                            }),
                            `
          `,
                            e.showSide
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `20px`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            padding: `24px`,
                                            borderRadius: `20px`,
                                            background: `radial-gradient(120% 90% at 100% 0%, rgba(var(--rc-marca),0.3) 0%, rgba(var(--rc-tarjeta),0) 60%), rgb(var(--rc-tarjeta))`,
                                            boxShadow: `inset 0 0 0 1px rgb(var(--rc-borde))`,
                                            display: `flex`,
                                            flexDirection: `column`,
                                            gap: `14px`,
                                          },
                                          children: [
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `14px`,
                                                color: `rgba(255,255,255,0.55)`,
                                              },
                                              children: `Tu saldo`,
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                display: `flex`,
                                                alignItems: `center`,
                                                gap: `12px`,
                                              },
                                              children: [
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontWeight: `700`,
                                                    fontSize: `40px`,
                                                    letterSpacing: `-0.05em`,
                                                    lineHeight: `1`,
                                                  },
                                                  children: renderContent(
                                                    e.balanceFmt,
                                                  ),
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontFamily: `Inter,sans-serif`,
                                                    fontWeight: `500`,
                                                    fontSize: `15px`,
                                                    color: `rgba(255,255,255,0.5)`,
                                                  },
                                                  children: `ARS`,
                                                }),
                                              ],
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                display: `grid`,
                                                gridTemplateColumns: `1fr 1fr`,
                                                gap: `10px`,
                                                marginTop: `4px`,
                                              },
                                              children: [
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`button`, {
                                                  className: `rce1`,
                                                  style: {
                                                    height: `46px`,
                                                    borderRadius: `10px`,
                                                    border: `none`,
                                                    background: `rgb(var(--rc-marca))`,
                                                    color: `rgb(255,255,255)`,
                                                    fontWeight: `700`,
                                                    fontSize: `18px`,
                                                    letterSpacing: `-0.06em`,
                                                    textTransform: `uppercase`,
                                                    cursor: `pointer`,
                                                  },
                                                  onClick: e.deposit,
                                                  children: `cargar`,
                                                }),
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`button`, {
                                                  className: `rce0`,
                                                  style: {
                                                    height: `46px`,
                                                    borderRadius: `10px`,
                                                    border: `none`,
                                                    background: `rgb(var(--rc-fondo))`,
                                                    boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.3)`,
                                                    color: `rgb(255,255,255)`,
                                                    fontWeight: `700`,
                                                    fontSize: `18px`,
                                                    letterSpacing: `-0.06em`,
                                                    textTransform: `uppercase`,
                                                    cursor: `pointer`,
                                                  },
                                                  onClick: e.withdraw,
                                                  children: `retirar`,
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
                                            borderRadius: `20px`,
                                            background: `rgb(var(--rc-tarjeta))`,
                                            boxShadow: `inset 0 0 0 1px rgb(var(--rc-borde))`,
                                            overflow: `hidden`,
                                          },
                                          children: [
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                padding: `20px 20px 0`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                justifyContent: `space-between`,
                                              },
                                              children: [
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontWeight: `590`,
                                                    fontSize: `22px`,
                                                    whiteSpace: `nowrap`,
                                                  },
                                                  children: `Ganadores`,
                                                }),
                                                `
                  
                `,
                                              ],
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                margin: `16px 20px 0`,
                                                display: `grid`,
                                                gridTemplateColumns: `1fr 1fr`,
                                                gap: `4px`,
                                                padding: `4px`,
                                                borderRadius: `10px`,
                                                background: `rgb(var(--rc-fondo))`,
                                              },
                                              children: [
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`button`, {
                                                  style: resolveStyle(
                                                    `height:34px;border-radius:7px;border:none;background:${e.wRecentBg ?? ``};color:${e.wRecentColor ?? ``};font-weight:700;font-size:14px;letter-spacing:-0.02em;text-transform:uppercase;cursor:pointer;white-space:nowrap`,
                                                  ),
                                                  onClick: e.wTabRecent,
                                                  children: `recientes`,
                                                }),
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`button`, {
                                                  style: resolveStyle(
                                                    `height:34px;border-radius:7px;border:none;background:${e.wTopBg ?? ``};color:${e.wTopColor ?? ``};font-weight:700;font-size:14px;letter-spacing:-0.02em;text-transform:uppercase;cursor:pointer;white-space:nowrap`,
                                                  ),
                                                  onClick: e.wTabTop,
                                                  children: `top del día`,
                                                }),
                                                `
                `,
                                              ],
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                margin: `14px 20px 0`,
                                                padding: `16px 18px 18px`,
                                                borderRadius: `14px`,
                                                background: `linear-gradient(135deg, rgba(var(--rc-marca),0.55) 0%, rgba(var(--rc-marca),0.12) 100%)`,
                                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.45)`,
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
                                                    `
                    `,
                                                    (0, JSXRuntime.jsx)(`div`, {
                                                      style: {
                                                        width: `30px`,
                                                        height: `30px`,
                                                        borderRadius: `9px`,
                                                        background: `rgb(var(--rc-marca))`,
                                                        boxShadow: `0 0 16px rgba(var(--rc-marca),0.7)`,
                                                        display: `flex`,
                                                        alignItems: `center`,
                                                        justifyContent: `center`,
                                                        flexShrink: `0`,
                                                      },
                                                      children: (0,
                                                      JSXRuntime.jsxs)(`svg`, {
                                                        width: `16`,
                                                        height: `16`,
                                                        viewBox: `0 0 24 24`,
                                                        fill: `none`,
                                                        stroke: `rgb(255,255,255)`,
                                                        strokeWidth: `2`,
                                                        strokeLinecap: `round`,
                                                        strokeLinejoin: `round`,
                                                        children: [
                                                          (0, JSXRuntime.jsx)(
                                                            `path`,
                                                            {
                                                              d: `M7 4h10v5a5 5 0 0 1-10 0z`,
                                                            },
                                                          ),
                                                          (0, JSXRuntime.jsx)(
                                                            `path`,
                                                            {
                                                              d: `M7 6H4.5a2.5 2.5 0 0 0 2.5 4M17 6h2.5a2.5 2.5 0 0 1-2.5 4M12 14v3M8.5 20h7M10 17h4`,
                                                            },
                                                          ),
                                                        ],
                                                      }),
                                                    }),
                                                    `
                    `,
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: {
                                                          flex: `1`,
                                                          minWidth: `0`,
                                                          fontFamily: `Inter,sans-serif`,
                                                          fontWeight: `600`,
                                                          fontSize: `13px`,
                                                          color: `rgba(255,255,255,0.75)`,
                                                          whiteSpace: `nowrap`,
                                                          overflow: `hidden`,
                                                          textOverflow: `ellipsis`,
                                                        },
                                                        children: `Mayor premio de hoy`,
                                                      },
                                                    ),
                                                    `
                    `,
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: {
                                                          height: `26px`,
                                                          padding: `0 9px`,
                                                          borderRadius: `7px`,
                                                          background: `rgb(255,255,255)`,
                                                          color: `rgb(var(--rc-marca))`,
                                                          display: `flex`,
                                                          alignItems: `center`,
                                                          fontFamily: `Oswald,sans-serif`,
                                                          fontSize: `15px`,
                                                          whiteSpace: `nowrap`,
                                                          flexShrink: `0`,
                                                        },
                                                        children: renderContent(
                                                          e.bigMult,
                                                        ),
                                                      },
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
                                                    alignItems: `flex-end`,
                                                    justifyContent: `space-between`,
                                                    gap: `12px`,
                                                  },
                                                  children: [
                                                    `
                    `,
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: {
                                                          fontWeight: `700`,
                                                          fontSize: `34px`,
                                                          letterSpacing: `-0.04em`,
                                                          lineHeight: `1`,
                                                          whiteSpace: `nowrap`,
                                                          color: `rgb(255,255,255)`,
                                                        },
                                                        children: renderContent(
                                                          e.bigPay,
                                                        ),
                                                      },
                                                    ),
                                                    `
                    `,
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: {
                                                          minWidth: `0`,
                                                          fontFamily: `Inter,sans-serif`,
                                                          fontWeight: `600`,
                                                          fontSize: `14px`,
                                                          color: `rgba(255,255,255,0.85)`,
                                                          whiteSpace: `nowrap`,
                                                          overflow: `hidden`,
                                                          textOverflow: `ellipsis`,
                                                          paddingBottom: `3px`,
                                                        },
                                                        children: renderContent(
                                                          e.bigUser,
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
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                marginTop: `10px`,
                                                padding: `0 8px 8px`,
                                                display: `flex`,
                                                flexDirection: `column`,
                                              },
                                              children: [
                                                `
                  `,
                                                asArray(e.gWinners).map(
                                                  (e, t) =>
                                                    (0, JSXRuntime.jsxs)(
                                                      React.Fragment,
                                                      {
                                                        children: [
                                                          `
                    `,
                                                          (0, JSXRuntime.jsxs)(
                                                            `div`,
                                                            {
                                                              className: `rcec`,
                                                              style:
                                                                resolveStyle(
                                                                  `height:62px;padding:0 12px;border-radius:12px;display:flex;align-items:center;gap:12px;background:${e?.bg ?? ``};transition:background .6s`,
                                                                ),
                                                              children: [
                                                                `
                      `,
                                                                (0,
                                                                JSXRuntime.jsx)(
                                                                  `span`,
                                                                  {
                                                                    style: {
                                                                      width: `18px`,
                                                                      flexShrink: `0`,
                                                                      fontFamily: `Inter,sans-serif`,
                                                                      fontWeight: `600`,
                                                                      fontSize: `13px`,
                                                                      color: `rgba(255,255,255,0.35)`,
                                                                      textAlign: `center`,
                                                                    },
                                                                    children:
                                                                      renderContent(
                                                                        e?.rank,
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
                                                                      resolveStyle(
                                                                        `width:34px;height:34px;flex-shrink:0;border-radius:50%;background:${e?.avatar ?? ``};display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-weight:700;font-size:14px`,
                                                                      ),
                                                                    children:
                                                                      renderContent(
                                                                        e?.initial,
                                                                      ),
                                                                  },
                                                                ),
                                                                `
                      `,
                                                                (0,
                                                                JSXRuntime.jsxs)(
                                                                  `div`,
                                                                  {
                                                                    style: {
                                                                      flex: `1`,
                                                                      minWidth: `0`,
                                                                      display: `flex`,
                                                                      flexDirection: `column`,
                                                                      gap: `3px`,
                                                                    },
                                                                    children: [
                                                                      `
                        `,
                                                                      (0,
                                                                      JSXRuntime.jsx)(
                                                                        `span`,
                                                                        {
                                                                          style:
                                                                            {
                                                                              fontWeight: `700`,
                                                                              fontSize: `15px`,
                                                                              letterSpacing: `-0.02em`,
                                                                              whiteSpace: `nowrap`,
                                                                              overflow: `hidden`,
                                                                              textOverflow: `ellipsis`,
                                                                            },
                                                                          children:
                                                                            renderContent(
                                                                              e?.user,
                                                                            ),
                                                                        },
                                                                      ),
                                                                      `
                        `,
                                                                      (0,
                                                                      JSXRuntime.jsxs)(
                                                                        `span`,
                                                                        {
                                                                          style:
                                                                            {
                                                                              fontFamily: `Inter,sans-serif`,
                                                                              fontWeight: `500`,
                                                                              fontSize: `12px`,
                                                                              color: `rgba(255,255,255,0.45)`,
                                                                              whiteSpace: `nowrap`,
                                                                            },
                                                                          children:
                                                                            [
                                                                              renderContent(
                                                                                e?.when,
                                                                              ),
                                                                              ` · apostó `,
                                                                              renderContent(
                                                                                e?.bet,
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
                                                                (0,
                                                                JSXRuntime.jsxs)(
                                                                  `div`,
                                                                  {
                                                                    style: {
                                                                      display: `flex`,
                                                                      flexDirection: `column`,
                                                                      alignItems: `flex-end`,
                                                                      gap: `4px`,
                                                                      flexShrink: `0`,
                                                                    },
                                                                    children: [
                                                                      `
                        `,
                                                                      (0,
                                                                      JSXRuntime.jsxs)(
                                                                        `span`,
                                                                        {
                                                                          style:
                                                                            {
                                                                              fontWeight: `700`,
                                                                              fontSize: `16px`,
                                                                              letterSpacing: `-0.03em`,
                                                                              color: `rgb(80,225,140)`,
                                                                              whiteSpace: `nowrap`,
                                                                            },
                                                                          children:
                                                                            [
                                                                              `+`,
                                                                              renderContent(
                                                                                e?.pay,
                                                                              ),
                                                                            ],
                                                                        },
                                                                      ),
                                                                      `
                        `,
                                                                      (0,
                                                                      JSXRuntime.jsx)(
                                                                        `span`,
                                                                        {
                                                                          style:
                                                                            resolveStyle(
                                                                              `height:20px;padding:0 7px;border-radius:6px;background:${e?.multBg ?? ``};color:${e?.multColor ?? ``};display:flex;align-items:center;font-family:Oswald,sans-serif;font-size:13px;white-space:nowrap`,
                                                                            ),
                                                                          children:
                                                                            renderContent(
                                                                              e?.mult,
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
                            marginTop: `44px`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `13px`,
                            height: `37px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontWeight: `590`,
                                fontSize: `32px`,
                                lineHeight: `100%`,
                                whiteSpace: `nowrap`,
                              },
                              children: `Juegos similares`,
                            }),
                            `
        `,
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            marginTop: `24px`,
                            display: `grid`,
                            gridTemplateColumns: `repeat(8,189px)`,
                            justifyContent: `space-between`,
                            rowGap: `28px`,
                          },
                          children: [
                            `
          `,
                            asArray(e.similar).map((e, t) =>
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
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          className: `rce6`,
                                          style: {
                                            position: `relative`,
                                            height: `248px`,
                                            borderRadius: `10px`,
                                            background: `rgb(var(--rc-tarjeta))`,
                                            overflow: `hidden`,
                                            transition: `transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s`,
                                            cursor: `pointer`,
                                          },
                                          onClick: e?.play,
                                          children: [
                                            `
                `,
                                            e?.img
                                              ? (0, JSXRuntime.jsx)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: (0,
                                                    JSXRuntime.jsx)(`div`, {
                                                      style: resolveStyle(
                                                        `width:189px;height:248px;;background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                                      ),
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
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontWeight: `700`,
                                            fontSize: `16px`,
                                            letterSpacing: `-0.03em`,
                                            whiteSpace: `nowrap`,
                                            overflow: `hidden`,
                                            textOverflow: `ellipsis`,
                                            padding: `0 2px`,
                                          },
                                          children: renderContent(e?.name),
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
            e.isCat
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`section`, {
                      style: {
                        minHeight: `1400px`,
                      },
                      "data-screen-label": `Categoría`,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `relative`,
                            height: `41px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `rce1`,
                              style: {
                                position: `absolute`,
                                right: `0`,
                                top: `0`,
                                width: `56px`,
                                height: `41px`,
                                borderRadius: `20px`,
                                border: `none`,
                                background: `rgb(var(--rc-marca))`,
                                boxShadow: `0px 0px 20px 0px rgba(var(--rc-marca),0.35)`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                cursor: `pointer`,
                                transition: `background .15s`,
                              },
                              onClick: e.rollDice,
                              title: `Juego al azar`,
                              children: (0, JSXRuntime.jsx)(`span`, {
                                style: resolveStyle(
                                  `display:flex;transform:rotate(${e.diceRot ?? ``});transition:transform .7s cubic-bezier(.3,1.4,.5,1)`,
                                ),
                                children: (0, JSXRuntime.jsxs)(`svg`, {
                                  width: `22`,
                                  height: `22`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  stroke: `rgb(255,255,255)`,
                                  strokeWidth: `1.7`,
                                  strokeLinejoin: `round`,
                                  children: [
                                    (0, JSXRuntime.jsx)(`rect`, {
                                      x: `3.5`,
                                      y: `3.5`,
                                      width: `17`,
                                      height: `17`,
                                      rx: `4`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      cx: `8.5`,
                                      cy: `8.5`,
                                      r: `1.3`,
                                      fill: `rgb(255,255,255)`,
                                      stroke: `none`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      cx: `15.5`,
                                      cy: `8.5`,
                                      r: `1.3`,
                                      fill: `rgb(255,255,255)`,
                                      stroke: `none`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      cx: `12`,
                                      cy: `12`,
                                      r: `1.3`,
                                      fill: `rgb(255,255,255)`,
                                      stroke: `none`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      cx: `8.5`,
                                      cy: `15.5`,
                                      r: `1.3`,
                                      fill: `rgb(255,255,255)`,
                                      stroke: `none`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      cx: `15.5`,
                                      cy: `15.5`,
                                      r: `1.3`,
                                      fill: `rgb(255,255,255)`,
                                      stroke: `none`,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: resolveStyle(
                                `height:41px;margin-right:68px;border-radius:20px;background:rgb(var(--rc-tarjeta));display:flex;align-items:center;gap:20px;padding-left:21px;box-shadow:${e.catSearchRing ?? ``}`,
                              ),
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsx)(`img`, {
                                  style: {
                                    width: `24px`,
                                    height: `24px`,
                                    display: `block`,
                                  },
                                  src: resolveViewAsset(
                                    `assets/icon-search.png`,
                                  ),
                                  alt: ``,
                                }),
                                `
          `,
                                (0, JSXRuntime.jsx)(`input`, {
                                  style: {
                                    flex: `1`,
                                    height: `41px`,
                                    background: `none`,
                                    border: `none`,
                                    outline: `none`,
                                    color: `rgb(255,255,255)`,
                                    fontFamily: `inherit`,
                                    fontWeight: `510`,
                                    fontSize: `16px`,
                                    letterSpacing: `-0.06em`,
                                    padding: `0 20px 0 0`,
                                  },
                                  value: Ot(e.catQuery),
                                  onInput: e.onCatQuery,
                                  onFocus: e.onCatFocus,
                                  onBlur: e.onCatBlur,
                                  placeholder: e.catPlaceholder,
                                }),
                                `
          `,
                                e.catQuery
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          className: `rced`,
                                          style: {
                                            marginRight: `10px`,
                                            width: `26px`,
                                            height: `26px`,
                                            borderRadius: `100px`,
                                            border: `none`,
                                            background: `rgba(255,255,255,0.08)`,
                                            color: `rgb(var(--rc-gris))`,
                                            display: `flex`,
                                            alignItems: `center`,
                                            justifyContent: `center`,
                                            cursor: `pointer`,
                                          },
                                          onClick: e.clearCatQuery,
                                          title: `Borrar`,
                                          children: (0, JSXRuntime.jsx)(`svg`, {
                                            width: `10`,
                                            height: `10`,
                                            viewBox: `0 0 14 14`,
                                            fill: `none`,
                                            stroke: `currentColor`,
                                            strokeWidth: `2`,
                                            strokeLinecap: `round`,
                                            children: (0, JSXRuntime.jsx)(
                                              `path`,
                                              {
                                                d: `M2 2l10 10M12 2 2 12`,
                                              },
                                            ),
                                          }),
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
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            marginTop: `36px`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `10px`,
                            fontFamily: `Inter,sans-serif`,
                            fontWeight: `500`,
                            fontSize: `16px`,
                            color: `rgba(255,255,255,0.5)`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`button`, {
                              className: `rced`,
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `6px`,
                                background: `none`,
                                border: `none`,
                                padding: `0`,
                                color: `rgba(255,255,255,0.5)`,
                                font: `inherit`,
                                cursor: `pointer`,
                              },
                              onClick: e.goHome,
                              children: [
                                (0, JSXRuntime.jsx)(`svg`, {
                                  width: `18`,
                                  height: `18`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  strokeWidth: `2`,
                                  strokeLinecap: `round`,
                                  strokeLinejoin: `round`,
                                  children: (0, JSXRuntime.jsx)(`path`, {
                                    d: `m15 6-6 6 6 6`,
                                  }),
                                }),
                                `Inicio`,
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              children: `/`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                color: `rgb(255,255,255)`,
                              },
                              children: renderContent(e.catTitle),
                            }),
                            `
        `,
                          ],
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            marginTop: `18px`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `13px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontWeight: `590`,
                                fontSize: `48px`,
                                lineHeight: `100%`,
                                letterSpacing: `-0.02em`,
                              },
                              children: renderContent(e.catTitle),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                height: `27px`,
                                padding: `0 10px`,
                                borderRadius: `100px`,
                                background: `rgb(var(--rc-marca))`,
                                display: `flex`,
                                alignItems: `center`,
                                fontFamily: `'SF Pro Display',-apple-system,sans-serif`,
                                fontWeight: `600`,
                                fontSize: `16px`,
                              },
                              children: renderContent(e.catCount),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                marginLeft: `auto`,
                                display: `flex`,
                                alignItems: `center`,
                                gap: `8px`,
                                whiteSpace: `nowrap`,
                                flexShrink: `0`,
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `500`,
                                fontSize: `16px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `6px`,
                                    height: `6px`,
                                    borderRadius: `50%`,
                                    background: `rgb(38,161,123)`,
                                  },
                                }),
                                renderContent(e.catPlayers),
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
                            marginTop: `30px`,
                            display: `grid`,
                            gridTemplateColumns: `repeat(8,189px)`,
                            justifyContent: `space-between`,
                            rowGap: `28px`,
                          },
                          children: [
                            `
          `,
                            asArray(e.catItems).map((e, t) =>
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
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          className: `rce6`,
                                          style: {
                                            position: `relative`,
                                            height: `248px`,
                                            borderRadius: `10px`,
                                            background: `rgb(var(--rc-tarjeta))`,
                                            transition: `transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s`,
                                            cursor: `pointer`,
                                          },
                                          children: [
                                            `
                `,
                                            e?.img
                                              ? (0, JSXRuntime.jsx)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: (0,
                                                    JSXRuntime.jsx)(`div`, {
                                                      style: resolveStyle(
                                                        `width:189px;height:248px;border-radius:10px;background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                                      ),
                                                    }),
                                                  },
                                                )
                                              : null,
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              className: `rce8`,
                                              style: {
                                                position: `absolute`,
                                                inset: `0`,
                                                borderRadius: `10px`,
                                                background: `linear-gradient(180deg, rgba(var(--rc-fondo),0.1) 0%, rgba(var(--rc-fondo),0.85) 100%)`,
                                                opacity: `0`,
                                                transition: `opacity .25s`,
                                                display: `flex`,
                                                flexDirection: `column`,
                                                alignItems: `center`,
                                                justifyContent: `center`,
                                                gap: `12px`,
                                              },
                                              onClick: e?.play,
                                              children: [
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`div`, {
                                                  style: {
                                                    width: `58px`,
                                                    height: `58px`,
                                                    borderRadius: `50%`,
                                                    background: `rgb(var(--rc-marca))`,
                                                    boxShadow: `0 0 24px rgba(var(--rc-marca),0.8)`,
                                                    display: `flex`,
                                                    alignItems: `center`,
                                                    justifyContent: `center`,
                                                  },
                                                  children: (0, JSXRuntime.jsx)(
                                                    `svg`,
                                                    {
                                                      width: `22`,
                                                      height: `22`,
                                                      viewBox: `0 0 24 24`,
                                                      fill: `rgb(255,255,255)`,
                                                      children: (0,
                                                      JSXRuntime.jsx)(`path`, {
                                                        d: `M7 4.5v15l13-7.5z`,
                                                      }),
                                                    },
                                                  ),
                                                }),
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontWeight: `700`,
                                                    fontSize: `20px`,
                                                    letterSpacing: `-0.06em`,
                                                    textTransform: `uppercase`,
                                                  },
                                                  children: `jugar`,
                                                }),
                                                `
                `,
                                              ],
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              className: `rce7`,
                                              style: {
                                                position: `absolute`,
                                                top: `8px`,
                                                right: `8px`,
                                                zIndex: `2`,
                                                width: `32px`,
                                                height: `32px`,
                                                borderRadius: `50%`,
                                                border: `none`,
                                                background: `rgba(var(--rc-fondo),0.65)`,
                                                backdropFilter: `blur(4px)`,
                                                WebkitBackdropFilter: `blur(4px)`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                justifyContent: `center`,
                                                cursor: `pointer`,
                                                transition: `transform .15s`,
                                              },
                                              onClick: e?.toggleFav,
                                              title: `Favorito`,
                                              children: (0, JSXRuntime.jsx)(
                                                `svg`,
                                                {
                                                  style: {
                                                    fill: e?.favFill,
                                                    stroke: e?.favStroke,
                                                  },
                                                  width: `16`,
                                                  height: `16`,
                                                  viewBox: `0 0 24 24`,
                                                  fill: e?.favFill,
                                                  stroke: e?.favStroke,
                                                  strokeWidth: `2`,
                                                  strokeLinejoin: `round`,
                                                  children: (0, JSXRuntime.jsx)(
                                                    `path`,
                                                    {
                                                      d: `M12 20.5s-8-4.6-8-10.8A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7c0 6.2-8 10.8-8 10.8z`,
                                                    },
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
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            display: `flex`,
                                            flexDirection: `column`,
                                            gap: `3px`,
                                            padding: `0 2px`,
                                          },
                                          children: [
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontWeight: `700`,
                                                fontSize: `16px`,
                                                letterSpacing: `-0.03em`,
                                                lineHeight: `1.2`,
                                                whiteSpace: `nowrap`,
                                                overflow: `hidden`,
                                                textOverflow: `ellipsis`,
                                              },
                                              children: renderContent(e?.name),
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `13px`,
                                                color: `rgba(255,255,255,0.45)`,
                                              },
                                              children: renderContent(
                                                e?.provider,
                                              ),
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
                        e.catEmpty
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    marginTop: `20px`,
                                    padding: `80px 0`,
                                    borderRadius: `20px`,
                                    background: `rgb(var(--rc-tarjeta))`,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    alignItems: `center`,
                                    gap: `14px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`img`, {
                                      style: {
                                        width: `40px`,
                                        height: `40px`,
                                        display: `block`,
                                        opacity: `0.7`,
                                      },
                                      src: resolveViewAsset(
                                        `assets/icon-search.png`,
                                      ),
                                      alt: ``,
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        fontWeight: `700`,
                                        fontSize: `28px`,
                                        letterSpacing: `-0.06em`,
                                      },
                                      children: [
                                        `No encontramos “`,
                                        renderContent(e.catQuery),
                                        `”`,
                                      ],
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `16px`,
                                        color: `rgba(255,255,255,0.5)`,
                                      },
                                      children: `Probá con otro nombre o proveedor.`,
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`button`, {
                                      className: `rce1`,
                                      style: {
                                        marginTop: `8px`,
                                        height: `46px`,
                                        padding: `0 28px`,
                                        borderRadius: `10px`,
                                        border: `none`,
                                        background: `rgb(var(--rc-marca))`,
                                        color: `rgb(255,255,255)`,
                                        fontWeight: `700`,
                                        fontSize: `18px`,
                                        letterSpacing: `-0.06em`,
                                        textTransform: `uppercase`,
                                        cursor: `pointer`,
                                      },
                                      onClick: e.clearCatQuery,
                                      children: `ver todos`,
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
            (0, JSXRuntime.jsxs)(`footer`, {
              style: {
                marginTop: `126px`,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                gap: `25px`,
              },
              "data-screen-label": `Footer`,
              children: [
                `
      `,
                (0, JSXRuntime.jsx)(`button`, {
                  style: {
                    display: `flex`,
                    background: `none`,
                    border: `none`,
                    padding: `0`,
                    cursor: `pointer`,
                    marginLeft: `-193px`,
                  },
                  onClick: e.goTop,
                  children: (0, JSXRuntime.jsx)(`img`, {
                    style: {
                      width: `151px`,
                      height: `30.5px`,
                      display: `block`,
                    },
                    src: resolveViewAsset(`assets/logo.png`),
                    alt: e.brandName,
                  }),
                }),
                `
      `,
                (0, JSXRuntime.jsxs)(`span`, {
                  style: {
                    marginLeft: `-193px`,
                    fontFamily: `'SF Pro Display',-apple-system,sans-serif`,
                    fontWeight: `400`,
                    fontSize: `22px`,
                    lineHeight: `100%`,
                    color: `rgb(146,146,146)`,
                  },
                  children: [
                    `Todos los derechos reservados `,
                    renderContent(e.brandSite),
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
        e.modalOpen
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    position: `fixed`,
                    inset: `0`,
                    zIndex: `60`,
                    background: `rgba(var(--rc-fondo),0.75)`,
                    backdropFilter: `blur(8px)`,
                    WebkitBackdropFilter: `blur(8px)`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                  },
                  onClick: e.closeModal,
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        width: `980px`,
                        borderRadius: `24px`,
                        overflow: `hidden`,
                        background: `rgb(var(--rc-tarjeta))`,
                        boxShadow: `inset 0 0 0 1px rgb(var(--rc-borde)),0px 0px 60px 0px rgba(0,0,0,0.5)`,
                        display: `grid`,
                        gridTemplateColumns: `400px 1fr`,
                      },
                      onClick: e.stop,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `relative`,
                            background: `rgb(var(--rc-fondo))`,
                            overflow: `hidden`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`img`, {
                              style: {
                                position: `absolute`,
                                inset: `0`,
                                width: `100%`,
                                height: `100%`,
                                objectFit: `cover`,
                                objectPosition: `88% 50%`,
                                display: `block`,
                              },
                              src: resolveViewAsset(`assets/bono-bg.png`),
                              alt: ``,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                position: `absolute`,
                                inset: `0`,
                                background: `linear-gradient(180deg, rgba(var(--rc-fondo),0.85) 0%, rgba(var(--rc-fondo),0) 35%, rgba(var(--rc-fondo),0) 55%, rgba(var(--rc-fondo),0.95) 100%)`,
                              },
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`img`, {
                              style: {
                                position: `absolute`,
                                left: `36px`,
                                top: `36px`,
                                width: `151px`,
                                height: `30.5px`,
                                display: `block`,
                              },
                              src: resolveViewAsset(`assets/logo.png`),
                              alt: e.brandName,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `absolute`,
                                left: `36px`,
                                right: `36px`,
                                bottom: `36px`,
                                display: `flex`,
                                flexDirection: `column`,
                                alignItems: `flex-start`,
                                gap: `12px`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `400`,
                                    fontSize: `32px`,
                                    lineHeight: `1.0722`,
                                    letterSpacing: `-0.06em`,
                                  },
                                  children: `Bono bienvenida`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    height: `52px`,
                                    padding: `0 18px`,
                                    borderRadius: `10px`,
                                    background: `rgb(var(--rc-marca))`,
                                    display: `flex`,
                                    alignItems: `center`,
                                    fontWeight: `700`,
                                    fontSize: `36px`,
                                    letterSpacing: `-0.06em`,
                                    textTransform: `uppercase`,
                                  },
                                  children: `“ROCCO12”`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontFamily: `Inter,sans-serif`,
                                    fontWeight: `500`,
                                    fontSize: `14px`,
                                    color: `rgba(255,255,255,0.6)`,
                                  },
                                  children: `Disponible únicamente en tu primer carga`,
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
                            position: `relative`,
                            padding: `48px 56px 36px`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `22px`,
                            background: `radial-gradient(120% 70% at 100% 0%, rgba(var(--rc-marca),0.22) 0%, rgba(var(--rc-tarjeta),0) 60%), rgb(var(--rc-tarjeta))`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `rcee`,
                              style: {
                                position: `absolute`,
                                right: `20px`,
                                top: `20px`,
                                width: `36px`,
                                height: `36px`,
                                borderRadius: `100px`,
                                border: `none`,
                                background: `rgba(var(--rc-fondo),0.6)`,
                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.18)`,
                                color: `rgb(var(--rc-gris))`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                cursor: `pointer`,
                              },
                              onClick: e.closeModal,
                              title: `Cerrar`,
                              children: (0, JSXRuntime.jsx)(`svg`, {
                                width: `12`,
                                height: `12`,
                                viewBox: `0 0 14 14`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `1.8`,
                                strokeLinecap: `round`,
                                children: (0, JSXRuntime.jsx)(`path`, {
                                  d: `M2 2l10 10M12 2 2 12`,
                                }),
                              }),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `grid`,
                                gridTemplateColumns: `1fr 1fr`,
                                gap: `4px`,
                                padding: `4px`,
                                borderRadius: `12px`,
                                background: `rgba(var(--rc-fondo),0.8)`,
                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.15)`,
                                marginRight: `44px`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  className: `rced`,
                                  style: resolveStyle(
                                    `height:42px;border-radius:9px;border:none;background:${e.tabLoginBg ?? ``};box-shadow:${e.tabLoginShadow ?? ``};color:${e.tabLoginColor ?? ``};font-weight:700;font-size:17px;letter-spacing:-0.04em;text-transform:uppercase;cursor:pointer;transition:all .15s`,
                                  ),
                                  onClick: e.toLogin,
                                  children: `iniciar sesión`,
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  className: `rced`,
                                  style: resolveStyle(
                                    `height:42px;border-radius:9px;border:none;background:${e.tabRegBg ?? ``};box-shadow:${e.tabRegShadow ?? ``};color:${e.tabRegColor ?? ``};font-weight:700;font-size:17px;letter-spacing:-0.04em;text-transform:uppercase;cursor:pointer;transition:all .15s`,
                                  ),
                                  onClick: e.toRegister,
                                  children: `registrate`,
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
                                gap: `8px`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `700`,
                                    fontSize: `38px`,
                                    lineHeight: `1.0722`,
                                    letterSpacing: `-0.05em`,
                                  },
                                  children: renderContent(e.modalTitle),
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontFamily: `Inter,sans-serif`,
                                    fontWeight: `500`,
                                    fontSize: `15px`,
                                    lineHeight: `1.45`,
                                    color: `rgba(255,255,255,0.55)`,
                                    textWrap: `pretty`,
                                  },
                                  children: renderContent(e.modalSub),
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
                                gap: `16px`,
                              },
                              children: [
                                `
            `,
                                e.isRegister
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsxs)(`label`, {
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
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `13px`,
                                                color: `rgba(255,255,255,0.55)`,
                                              },
                                              children: `Usuario`,
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`span`, {
                                              style: {
                                                position: `relative`,
                                                display: `block`,
                                              },
                                              children: [
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    position: `absolute`,
                                                    left: `18px`,
                                                    top: `18px`,
                                                    display: `flex`,
                                                    pointerEvents: `none`,
                                                  },
                                                  children: (0,
                                                  JSXRuntime.jsxs)(`svg`, {
                                                    style: {
                                                      stroke: `rgb(var(--rc-gris))`,
                                                    },
                                                    width: `18`,
                                                    height: `18`,
                                                    viewBox: `0 0 24 24`,
                                                    fill: `none`,
                                                    strokeWidth: `1.6`,
                                                    strokeLinecap: `round`,
                                                    strokeLinejoin: `round`,
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `circle`,
                                                        {
                                                          cx: `12`,
                                                          cy: `8`,
                                                          r: `4`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `path`,
                                                        {
                                                          d: `M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5`,
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                }),
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`input`, {
                                                  className: `rcef`,
                                                  style: {
                                                    height: `54px`,
                                                    borderRadius: `12px`,
                                                    border: `none`,
                                                    boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.22)`,
                                                    background: `rgba(var(--rc-fondo),0.7)`,
                                                    color: `rgb(255,255,255)`,
                                                    padding: `0 18px 0 50px`,
                                                    fontFamily: `Inter,sans-serif`,
                                                    fontWeight: `500`,
                                                    fontSize: `16px`,
                                                    outline: `none`,
                                                    width: `100%`,
                                                    transition: `box-shadow .15s`,
                                                  },
                                                  value: Ot(e.fName),
                                                  onInput: e.onName,
                                                  onKeyDown: e.onKey,
                                                  placeholder: `lucasgarcia`,
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
                                e.isLogin
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`label`, {
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
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `13px`,
                                                color: `rgba(255,255,255,0.55)`,
                                              },
                                              children: `Email`,
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`span`, {
                                              style: {
                                                position: `relative`,
                                                display: `block`,
                                              },
                                              children: [
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    position: `absolute`,
                                                    left: `18px`,
                                                    top: `18px`,
                                                    display: `flex`,
                                                    pointerEvents: `none`,
                                                  },
                                                  children: (0,
                                                  JSXRuntime.jsxs)(`svg`, {
                                                    style: {
                                                      stroke: `rgb(var(--rc-gris))`,
                                                    },
                                                    width: `18`,
                                                    height: `18`,
                                                    viewBox: `0 0 24 24`,
                                                    fill: `none`,
                                                    strokeWidth: `1.6`,
                                                    strokeLinecap: `round`,
                                                    strokeLinejoin: `round`,
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `rect`,
                                                        {
                                                          x: `3`,
                                                          y: `5`,
                                                          width: `18`,
                                                          height: `14`,
                                                          rx: `3`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `path`,
                                                        {
                                                          d: `m4 7 8 6 8-6`,
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                }),
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`input`, {
                                                  className: `rcef`,
                                                  style: {
                                                    height: `54px`,
                                                    borderRadius: `12px`,
                                                    border: `none`,
                                                    boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.22)`,
                                                    background: `rgba(var(--rc-fondo),0.7)`,
                                                    color: `rgb(255,255,255)`,
                                                    padding: `0 18px 0 50px`,
                                                    fontFamily: `Inter,sans-serif`,
                                                    fontWeight: `500`,
                                                    fontSize: `16px`,
                                                    outline: `none`,
                                                    width: `100%`,
                                                    transition: `box-shadow .15s`,
                                                  },
                                                  value: Ot(e.fEmail),
                                                  onInput: e.onEmail,
                                                  onKeyDown: e.onKey,
                                                  placeholder: `tu@email.com`,
                                                  type: `email`,
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
                                (0, JSXRuntime.jsxs)(`label`, {
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
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `13px`,
                                        color: `rgba(255,255,255,0.55)`,
                                      },
                                      children: `Contraseña`,
                                    }),
                                    `
              `,
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        position: `relative`,
                                        display: `block`,
                                      },
                                      children: [
                                        `
                `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            position: `absolute`,
                                            left: `18px`,
                                            top: `18px`,
                                            display: `flex`,
                                            pointerEvents: `none`,
                                          },
                                          children: (0, JSXRuntime.jsxs)(
                                            `svg`,
                                            {
                                              style: {
                                                stroke: `rgb(var(--rc-gris))`,
                                              },
                                              width: `18`,
                                              height: `18`,
                                              viewBox: `0 0 24 24`,
                                              fill: `none`,
                                              strokeWidth: `1.6`,
                                              strokeLinecap: `round`,
                                              strokeLinejoin: `round`,
                                              children: [
                                                (0, JSXRuntime.jsx)(`rect`, {
                                                  x: `4.5`,
                                                  y: `10.5`,
                                                  width: `15`,
                                                  height: `10`,
                                                  rx: `2.5`,
                                                }),
                                                (0, JSXRuntime.jsx)(`path`, {
                                                  d: `M8 10.5V7.5a4 4 0 0 1 8 0v3`,
                                                }),
                                              ],
                                            },
                                          ),
                                        }),
                                        `
                `,
                                        (0, JSXRuntime.jsx)(`input`, {
                                          className: `rcef`,
                                          style: {
                                            height: `54px`,
                                            borderRadius: `12px`,
                                            border: `none`,
                                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.22)`,
                                            background: `rgba(var(--rc-fondo),0.7)`,
                                            color: `rgb(255,255,255)`,
                                            padding: `0 56px 0 50px`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `16px`,
                                            outline: `none`,
                                            width: `100%`,
                                            transition: `box-shadow .15s`,
                                          },
                                          type: e.passType,
                                          value: Ot(e.fPass),
                                          onInput: e.onPass,
                                          onKeyDown: e.onKey,
                                          placeholder: `Mínimo 6 caracteres`,
                                        }),
                                        `
                `,
                                        (0, JSXRuntime.jsxs)(`button`, {
                                          className: `rceg`,
                                          style: {
                                            position: `absolute`,
                                            right: `9px`,
                                            top: `9px`,
                                            width: `36px`,
                                            height: `36px`,
                                            borderRadius: `8px`,
                                            border: `none`,
                                            background: `none`,
                                            color: `rgb(var(--rc-gris))`,
                                            display: `flex`,
                                            alignItems: `center`,
                                            justifyContent: `center`,
                                            cursor: `pointer`,
                                          },
                                          onClick: e.togglePass,
                                          title: e.passTitle,
                                          children: [
                                            `
                  `,
                                            (0, JSXRuntime.jsxs)(`svg`, {
                                              width: `19`,
                                              height: `19`,
                                              viewBox: `0 0 24 24`,
                                              fill: `none`,
                                              stroke: `currentColor`,
                                              strokeWidth: `1.6`,
                                              strokeLinecap: `round`,
                                              strokeLinejoin: `round`,
                                              children: [
                                                (0, JSXRuntime.jsx)(`path`, {
                                                  d: `M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z`,
                                                }),
                                                (0, JSXRuntime.jsx)(`circle`, {
                                                  cx: `12`,
                                                  cy: `12`,
                                                  r: `3`,
                                                }),
                                                (0, JSXRuntime.jsx)(`path`, {
                                                  d: e.eyeSlash,
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
                                  ],
                                }),
                                `
            `,
                                e.isRegister
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsxs)(`label`, {
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
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `13px`,
                                                color: `rgba(255,255,255,0.55)`,
                                              },
                                              children: `Código de bono (opcional)`,
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`span`, {
                                              style: {
                                                position: `relative`,
                                                display: `block`,
                                              },
                                              children: [
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    position: `absolute`,
                                                    left: `18px`,
                                                    top: `18px`,
                                                    display: `flex`,
                                                    pointerEvents: `none`,
                                                  },
                                                  children: (0,
                                                  JSXRuntime.jsxs)(`svg`, {
                                                    style: {
                                                      stroke: `rgb(var(--rc-gris))`,
                                                    },
                                                    width: `18`,
                                                    height: `18`,
                                                    viewBox: `0 0 24 24`,
                                                    fill: `none`,
                                                    strokeWidth: `1.6`,
                                                    strokeLinecap: `round`,
                                                    strokeLinejoin: `round`,
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `rect`,
                                                        {
                                                          x: `3.5`,
                                                          y: `8.5`,
                                                          width: `17`,
                                                          height: `4`,
                                                          rx: `1`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `path`,
                                                        {
                                                          d: `M5 12.5v8h14v-8M12 8.5v12M12 8.5S10.5 4 8 4.5 7 8.5 12 8.5zM12 8.5s1.5-4.5 4-4 1 4-4 4z`,
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                }),
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`input`, {
                                                  className: `rcef`,
                                                  style: {
                                                    height: `54px`,
                                                    borderRadius: `12px`,
                                                    border: `none`,
                                                    boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.22)`,
                                                    background: `rgba(var(--rc-fondo),0.7)`,
                                                    color: `rgb(255,255,255)`,
                                                    padding: `0 18px 0 50px`,
                                                    fontFamily: `Inter,sans-serif`,
                                                    fontWeight: `500`,
                                                    fontSize: `16px`,
                                                    outline: `none`,
                                                    width: `100%`,
                                                    transition: `box-shadow .15s`,
                                                  },
                                                  value: Ot(e.fCode),
                                                  onInput: e.onCode,
                                                  onKeyDown: e.onKey,
                                                  placeholder: `ROCCO12`,
                                                  spellCheck: `false`,
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
                              ],
                            }),
                            `
          `,
                            e.isLogin
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        justifyContent: `space-between`,
                                        alignItems: `center`,
                                        marginTop: `-4px`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsxs)(`button`, {
                                          style: {
                                            display: `flex`,
                                            alignItems: `center`,
                                            gap: `10px`,
                                            background: `none`,
                                            border: `none`,
                                            padding: `0`,
                                            cursor: `pointer`,
                                            color: `rgba(255,255,255,0.7)`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `14px`,
                                            textAlign: `left`,
                                          },
                                          onClick: e.toggleRemember,
                                          children: [
                                            `
                `,
                                            (0, JSXRuntime.jsxs)(`span`, {
                                              style: resolveStyle(
                                                `width:18px;height:18px;flex-shrink:0;border-radius:5px;background:${e.rememberBg ?? ``};box-shadow:${e.rememberRing ?? ``};display:flex;align-items:center;justify-content:center`,
                                              ),
                                              children: [
                                                `
                  `,
                                                (0, JSXRuntime.jsx)(`svg`, {
                                                  style: resolveStyle(
                                                    `opacity:${e.rememberOp ?? ``}`,
                                                  ),
                                                  width: `12`,
                                                  height: `12`,
                                                  viewBox: `0 0 12 12`,
                                                  fill: `none`,
                                                  stroke: `rgb(255,255,255)`,
                                                  strokeWidth: `2`,
                                                  strokeLinecap: `round`,
                                                  strokeLinejoin: `round`,
                                                  children: (0, JSXRuntime.jsx)(
                                                    `path`,
                                                    {
                                                      d: `m2.5 6.2 2.3 2.3 4.7-5`,
                                                    },
                                                  ),
                                                }),
                                                `
                `,
                                              ],
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              children: `Recordarme`,
                                            }),
                                            `
              `,
                                          ],
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          className: `rced`,
                                          style: {
                                            background: `none`,
                                            border: `none`,
                                            padding: `0`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `14px`,
                                            color: `rgb(var(--rc-acento))`,
                                            cursor: `pointer`,
                                          },
                                          onClick: e.forgot,
                                          children: `¿Olvidaste tu contraseña?`,
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
                            e.isRegister
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        marginTop: `-4px`,
                                      },
                                      children: (0, JSXRuntime.jsxs)(`button`, {
                                        style: {
                                          display: `flex`,
                                          alignItems: `center`,
                                          gap: `10px`,
                                          background: `none`,
                                          border: `none`,
                                          padding: `0`,
                                          cursor: `pointer`,
                                          color: `rgba(255,255,255,0.7)`,
                                          fontFamily: `Inter,sans-serif`,
                                          fontWeight: `500`,
                                          fontSize: `14px`,
                                          textAlign: `left`,
                                        },
                                        onClick: e.toggleTerms,
                                        children: [
                                          `
                `,
                                          (0, JSXRuntime.jsxs)(`span`, {
                                            style: resolveStyle(
                                              `width:18px;height:18px;flex-shrink:0;border-radius:5px;background:${e.termsBg ?? ``};box-shadow:${e.termsRing ?? ``};display:flex;align-items:center;justify-content:center`,
                                            ),
                                            children: [
                                              `
                  `,
                                              (0, JSXRuntime.jsx)(`svg`, {
                                                style: resolveStyle(
                                                  `opacity:${e.termsOp ?? ``}`,
                                                ),
                                                width: `12`,
                                                height: `12`,
                                                viewBox: `0 0 12 12`,
                                                fill: `none`,
                                                stroke: `rgb(255,255,255)`,
                                                strokeWidth: `2`,
                                                strokeLinecap: `round`,
                                                strokeLinejoin: `round`,
                                                children: (0, JSXRuntime.jsx)(
                                                  `path`,
                                                  {
                                                    d: `m2.5 6.2 2.3 2.3 4.7-5`,
                                                  },
                                                ),
                                              }),
                                              `
                `,
                                            ],
                                          }),
                                          `
                `,
                                          (0, JSXRuntime.jsxs)(`span`, {
                                            children: [
                                              `Soy mayor de 18 años y acepto los `,
                                              (0, JSXRuntime.jsx)(`span`, {
                                                style: {
                                                  color: `rgb(var(--rc-acento))`,
                                                },
                                                children: `Términos y condiciones`,
                                              }),
                                            ],
                                          }),
                                          `
              `,
                                        ],
                                      }),
                                    }),
                                    `
          `,
                                  ],
                                })
                              : null,
                            `
          `,
                            e.formError
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        alignItems: `center`,
                                        gap: `10px`,
                                        padding: `12px 14px`,
                                        borderRadius: `12px`,
                                        background: `rgba(255,90,90,0.1)`,
                                        boxShadow: `inset 0 0 0 1px rgba(255,120,120,0.25)`,
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `14px`,
                                        color: `rgb(255,160,160)`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsxs)(`svg`, {
                                          style: {
                                            flexShrink: `0`,
                                          },
                                          width: `16`,
                                          height: `16`,
                                          viewBox: `0 0 24 24`,
                                          fill: `none`,
                                          stroke: `currentColor`,
                                          strokeWidth: `2`,
                                          strokeLinecap: `round`,
                                          children: [
                                            (0, JSXRuntime.jsx)(`circle`, {
                                              cx: `12`,
                                              cy: `12`,
                                              r: `10`,
                                            }),
                                            (0, JSXRuntime.jsx)(`path`, {
                                              d: `M12 7v6M12 16.5v.5`,
                                            }),
                                          ],
                                        }),
                                        renderContent(e.formError),
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
                            (0, JSXRuntime.jsxs)(`button`, {
                              className: `rceh`,
                              style: {
                                height: `58px`,
                                borderRadius: `12px`,
                                border: `none`,
                                background: `linear-gradient(180deg, rgb(var(--rc-marca-luz)) 0%, rgb(var(--rc-marca)) 100%)`,
                                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.18),0px 10px 30px rgba(var(--rc-marca),0.45)`,
                                color: `rgb(255,255,255)`,
                                fontWeight: `700`,
                                fontSize: `26px`,
                                lineHeight: `1.0722`,
                                letterSpacing: `-0.05em`,
                                textTransform: `uppercase`,
                                cursor: `pointer`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: `12px`,
                                transition: `filter .15s`,
                              },
                              onClick: e.submit,
                              children: [
                                `
            `,
                                renderContent(e.modalCta),
                                `
            `,
                                (0, JSXRuntime.jsx)(`svg`, {
                                  width: `22`,
                                  height: `22`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  strokeWidth: `2.2`,
                                  strokeLinecap: `round`,
                                  strokeLinejoin: `round`,
                                  children: (0, JSXRuntime.jsx)(`path`, {
                                    d: `M5 12h14M13 6l6 6-6 6`,
                                  }),
                                }),
                                `
          `,
                              ],
                            }),
                            `
          `,
                            e.isLogin
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        alignItems: `center`,
                                        gap: `14px`,
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `13px`,
                                        color: `rgba(255,255,255,0.4)`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            flex: `1`,
                                            height: `1px`,
                                            background: `rgba(var(--rc-acento),0.2)`,
                                          },
                                        }),
                                        `O ingresá con`,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            flex: `1`,
                                            height: `1px`,
                                            background: `rgba(var(--rc-acento),0.2)`,
                                          },
                                        }),
                                        `
            `,
                                      ],
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`button`, {
                                      className: `rcei`,
                                      style: {
                                        height: `54px`,
                                        borderRadius: `12px`,
                                        border: `none`,
                                        background: `rgb(255,255,255)`,
                                        boxShadow: `0px 6px 20px rgba(0,0,0,0.25)`,
                                        color: `rgb(31,31,31)`,
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `16px`,
                                        cursor: `pointer`,
                                        display: `flex`,
                                        alignItems: `center`,
                                        justifyContent: `center`,
                                        gap: `12px`,
                                        transition: `background .15s`,
                                      },
                                      onClick: e.googleLogin,
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsxs)(`svg`, {
                                          width: `20`,
                                          height: `20`,
                                          viewBox: `0 0 48 48`,
                                          children: [
                                            (0, JSXRuntime.jsx)(`path`, {
                                              fill: `#FFC107`,
                                              d: `M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z`,
                                            }),
                                            (0, JSXRuntime.jsx)(`path`, {
                                              fill: `#FF3D00`,
                                              d: `m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z`,
                                            }),
                                            (0, JSXRuntime.jsx)(`path`, {
                                              fill: `#4CAF50`,
                                              d: `M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z`,
                                            }),
                                            (0, JSXRuntime.jsx)(`path`, {
                                              fill: `#1976D2`,
                                              d: `M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z`,
                                            }),
                                          ],
                                        }),
                                        `
              Continuar con Google
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
                                justifyContent: `center`,
                                gap: `6px`,
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `500`,
                                fontSize: `15px`,
                                color: `rgba(255,255,255,0.55)`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  children: renderContent(e.swapQ),
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  className: `rced`,
                                  style: {
                                    background: `none`,
                                    border: `none`,
                                    padding: `0`,
                                    color: `rgb(var(--rc-acento))`,
                                    font: `inherit`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.swapModal,
                                  children: renderContent(e.swapLabel),
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
                                justifyContent: `center`,
                                alignItems: `center`,
                                gap: `18px`,
                                paddingTop: `18px`,
                                boxShadow: `inset 0 1px 0 rgba(var(--rc-acento),0.15)`,
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `500`,
                                fontSize: `13px`,
                                color: `rgba(255,255,255,0.4)`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `6px`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsxs)(`svg`, {
                                      width: `14`,
                                      height: `14`,
                                      viewBox: `0 0 24 24`,
                                      fill: `none`,
                                      stroke: `currentColor`,
                                      strokeWidth: `1.8`,
                                      strokeLinecap: `round`,
                                      strokeLinejoin: `round`,
                                      children: [
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z`,
                                        }),
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `m9 12 2 2 4-4`,
                                        }),
                                      ],
                                    }),
                                    `Conexión segura`,
                                  ],
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `3px`,
                                    height: `3px`,
                                    borderRadius: `50%`,
                                    background: `rgba(255,255,255,0.3)`,
                                  },
                                }),
                                `
            `,
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `6px`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        height: `18px`,
                                        padding: `0 5px`,
                                        borderRadius: `5px`,
                                        boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.35)`,
                                        display: `flex`,
                                        alignItems: `center`,
                                        fontSize: `11px`,
                                        fontWeight: `600`,
                                      },
                                      children: `+18`,
                                    }),
                                    `Juego responsable`,
                                  ],
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `3px`,
                                    height: `3px`,
                                    borderRadius: `50%`,
                                    background: `rgba(255,255,255,0.3)`,
                                  },
                                }),
                                `
            `,
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `6px`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        width: `6px`,
                                        height: `6px`,
                                        borderRadius: `50%`,
                                        background: `rgb(38,161,123)`,
                                      },
                                    }),
                                    `Pagos en pesos`,
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
                  ],
                }),
                `
  `,
              ],
            })
          : null,
        `

  `,
        e.randOpen
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    position: `fixed`,
                    inset: `0`,
                    zIndex: `60`,
                    background: `rgba(var(--rc-fondo),0.75)`,
                    backdropFilter: `blur(8px)`,
                    WebkitBackdropFilter: `blur(8px)`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                  },
                  onClick: e.closeRand,
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        width: `760px`,
                        borderRadius: `24px`,
                        overflow: `hidden`,
                        background: `radial-gradient(120% 80% at 100% 0%, rgba(var(--rc-marca),0.25) 0%, rgba(var(--rc-tarjeta),0) 60%), rgb(var(--rc-tarjeta))`,
                        boxShadow: `inset 0 0 0 1px rgb(var(--rc-borde)),0px 0px 60px 0px rgba(0,0,0,0.5)`,
                        display: `grid`,
                        gridTemplateColumns: `260px 1fr`,
                        gap: `40px`,
                        padding: `36px`,
                      },
                      onClick: e.stop,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          className: `rcee`,
                          style: {
                            position: `absolute`,
                            right: `20px`,
                            top: `20px`,
                            width: `36px`,
                            height: `36px`,
                            borderRadius: `100px`,
                            border: `none`,
                            background: `rgba(var(--rc-fondo),0.6)`,
                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.18)`,
                            color: `rgb(var(--rc-gris))`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            cursor: `pointer`,
                          },
                          onClick: e.closeRand,
                          title: `Cerrar`,
                          children: (0, JSXRuntime.jsx)(`svg`, {
                            width: `12`,
                            height: `12`,
                            viewBox: `0 0 14 14`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `1.8`,
                            strokeLinecap: `round`,
                            children: (0, JSXRuntime.jsx)(`path`, {
                              d: `M2 2l10 10M12 2 2 12`,
                            }),
                          }),
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `relative`,
                            width: `260px`,
                            height: `341px`,
                            borderRadius: `14px`,
                            background: `rgb(var(--rc-fondo))`,
                            boxShadow: `0 0 0 2px rgb(var(--rc-marca)),0 0 40px rgba(var(--rc-marca),0.55)`,
                            overflow: `hidden`,
                            display: `flex`,
                            alignItems: `flex-end`,
                            justifyContent: `center`,
                          },
                          children: [
                            `
          `,
                            e.randImg
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    style: resolveStyle(
                                      `position:absolute;inset:0;width:100%;height:100%;;background-image:url('${e.randImg ?? ``}');background-size:cover;background-position:center;background-repeat:no-repeat`,
                                    ),
                                  }),
                                })
                              : null,
                            `
          `,
                            e.randNoImg
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
                                        padding: `20px`,
                                        textAlign: `center`,
                                        background: `linear-gradient(180deg, rgb(var(--rc-tarjeta)) 0%, rgb(var(--rc-fondo)) 100%)`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            display: `flex`,
                                            opacity: `0.35`,
                                          },
                                          children: (0, JSXRuntime.jsxs)(
                                            `svg`,
                                            {
                                              width: `56`,
                                              height: `56`,
                                              viewBox: `0 0 24 24`,
                                              fill: `none`,
                                              stroke: `rgb(255,255,255)`,
                                              strokeWidth: `1.7`,
                                              strokeLinejoin: `round`,
                                              children: [
                                                (0, JSXRuntime.jsx)(`rect`, {
                                                  x: `3.5`,
                                                  y: `3.5`,
                                                  width: `17`,
                                                  height: `17`,
                                                  rx: `4`,
                                                }),
                                                (0, JSXRuntime.jsx)(`circle`, {
                                                  cx: `8.5`,
                                                  cy: `8.5`,
                                                  r: `1.3`,
                                                  fill: `rgb(255,255,255)`,
                                                  stroke: `none`,
                                                }),
                                                (0, JSXRuntime.jsx)(`circle`, {
                                                  cx: `15.5`,
                                                  cy: `8.5`,
                                                  r: `1.3`,
                                                  fill: `rgb(255,255,255)`,
                                                  stroke: `none`,
                                                }),
                                                (0, JSXRuntime.jsx)(`circle`, {
                                                  cx: `12`,
                                                  cy: `12`,
                                                  r: `1.3`,
                                                  fill: `rgb(255,255,255)`,
                                                  stroke: `none`,
                                                }),
                                                (0, JSXRuntime.jsx)(`circle`, {
                                                  cx: `8.5`,
                                                  cy: `15.5`,
                                                  r: `1.3`,
                                                  fill: `rgb(255,255,255)`,
                                                  stroke: `none`,
                                                }),
                                                (0, JSXRuntime.jsx)(`circle`, {
                                                  cx: `15.5`,
                                                  cy: `15.5`,
                                                  r: `1.3`,
                                                  fill: `rgb(255,255,255)`,
                                                  stroke: `none`,
                                                }),
                                              ],
                                            },
                                          ),
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontWeight: `700`,
                                            fontSize: `24px`,
                                            letterSpacing: `-0.05em`,
                                            lineHeight: `1.1`,
                                            textTransform: `uppercase`,
                                            textWrap: `balance`,
                                          },
                                          children: renderContent(e.randName),
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
                            flexDirection: `column`,
                            justifyContent: `center`,
                            gap: `14px`,
                            paddingRight: `20px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `8px`,
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `500`,
                                fontSize: `14px`,
                                color: `rgb(var(--rc-acento))`,
                                textTransform: `uppercase`,
                                letterSpacing: `0.08em`,
                              },
                              children: [
                                (0, JSXRuntime.jsxs)(`svg`, {
                                  style: {
                                    stroke: `rgb(var(--rc-acento))`,
                                  },
                                  width: `16`,
                                  height: `16`,
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  strokeWidth: `1.7`,
                                  strokeLinejoin: `round`,
                                  children: [
                                    (0, JSXRuntime.jsx)(`rect`, {
                                      x: `3.5`,
                                      y: `3.5`,
                                      width: `17`,
                                      height: `17`,
                                      rx: `4`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      style: {
                                        fill: `rgb(var(--rc-acento))`,
                                      },
                                      cx: `8.5`,
                                      cy: `8.5`,
                                      r: `1.3`,
                                      stroke: `none`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      style: {
                                        fill: `rgb(var(--rc-acento))`,
                                      },
                                      cx: `15.5`,
                                      cy: `8.5`,
                                      r: `1.3`,
                                      stroke: `none`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      style: {
                                        fill: `rgb(var(--rc-acento))`,
                                      },
                                      cx: `12`,
                                      cy: `12`,
                                      r: `1.3`,
                                      stroke: `none`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      style: {
                                        fill: `rgb(var(--rc-acento))`,
                                      },
                                      cx: `8.5`,
                                      cy: `15.5`,
                                      r: `1.3`,
                                      stroke: `none`,
                                    }),
                                    (0, JSXRuntime.jsx)(`circle`, {
                                      style: {
                                        fill: `rgb(var(--rc-acento))`,
                                      },
                                      cx: `15.5`,
                                      cy: `15.5`,
                                      r: `1.3`,
                                      stroke: `none`,
                                    }),
                                  ],
                                }),
                                `Te tocó`,
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontWeight: `700`,
                                fontSize: `44px`,
                                lineHeight: `1.05`,
                                letterSpacing: `-0.05em`,
                                textWrap: `balance`,
                              },
                              children: renderContent(e.randName),
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `500`,
                                fontSize: `16px`,
                                color: `rgba(255,255,255,0.55)`,
                              },
                              children: [
                                renderContent(e.randProvider),
                                ` · `,
                                renderContent(e.randKind),
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `10px`,
                                marginTop: `14px`,
                              },
                              children: [
                                `
            `,
                                (0, JSXRuntime.jsxs)(`button`, {
                                  className: `rceh`,
                                  style: {
                                    height: `58px`,
                                    borderRadius: `12px`,
                                    border: `none`,
                                    background: `linear-gradient(180deg, rgb(var(--rc-marca-luz)) 0%, rgb(var(--rc-marca)) 100%)`,
                                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.18),0px 10px 30px rgba(var(--rc-marca),0.45)`,
                                    color: `rgb(255,255,255)`,
                                    fontWeight: `700`,
                                    fontSize: `24px`,
                                    letterSpacing: `-0.05em`,
                                    textTransform: `uppercase`,
                                    cursor: `pointer`,
                                    display: `flex`,
                                    alignItems: `center`,
                                    justifyContent: `center`,
                                    gap: `12px`,
                                  },
                                  onClick: e.playRand,
                                  children: [
                                    (0, JSXRuntime.jsx)(`svg`, {
                                      width: `18`,
                                      height: `18`,
                                      viewBox: `0 0 24 24`,
                                      fill: `rgb(255,255,255)`,
                                      children: (0, JSXRuntime.jsx)(`path`, {
                                        d: `M7 4.5v15l13-7.5z`,
                                      }),
                                    }),
                                    `jugar ahora`,
                                  ],
                                }),
                                `
            `,
                                (0, JSXRuntime.jsxs)(`button`, {
                                  className: `rce0`,
                                  style: {
                                    height: `52px`,
                                    borderRadius: `12px`,
                                    border: `none`,
                                    background: `rgba(var(--rc-fondo),0.7)`,
                                    boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.3)`,
                                    color: `rgb(255,255,255)`,
                                    fontWeight: `700`,
                                    fontSize: `18px`,
                                    letterSpacing: `-0.05em`,
                                    textTransform: `uppercase`,
                                    cursor: `pointer`,
                                    display: `flex`,
                                    alignItems: `center`,
                                    justifyContent: `center`,
                                    gap: `10px`,
                                  },
                                  onClick: e.rollDice,
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: resolveStyle(
                                        `display:flex;transform:rotate(${e.diceRot ?? ``});transition:transform .7s cubic-bezier(.3,1.4,.5,1)`,
                                      ),
                                      children: (0, JSXRuntime.jsxs)(`svg`, {
                                        width: `18`,
                                        height: `18`,
                                        viewBox: `0 0 24 24`,
                                        fill: `none`,
                                        stroke: `rgb(255,255,255)`,
                                        strokeWidth: `1.7`,
                                        strokeLinejoin: `round`,
                                        children: [
                                          (0, JSXRuntime.jsx)(`rect`, {
                                            x: `3.5`,
                                            y: `3.5`,
                                            width: `17`,
                                            height: `17`,
                                            rx: `4`,
                                          }),
                                          (0, JSXRuntime.jsx)(`circle`, {
                                            cx: `8.5`,
                                            cy: `8.5`,
                                            r: `1.3`,
                                            fill: `rgb(255,255,255)`,
                                            stroke: `none`,
                                          }),
                                          (0, JSXRuntime.jsx)(`circle`, {
                                            cx: `15.5`,
                                            cy: `8.5`,
                                            r: `1.3`,
                                            fill: `rgb(255,255,255)`,
                                            stroke: `none`,
                                          }),
                                          (0, JSXRuntime.jsx)(`circle`, {
                                            cx: `12`,
                                            cy: `12`,
                                            r: `1.3`,
                                            fill: `rgb(255,255,255)`,
                                            stroke: `none`,
                                          }),
                                          (0, JSXRuntime.jsx)(`circle`, {
                                            cx: `8.5`,
                                            cy: `15.5`,
                                            r: `1.3`,
                                            fill: `rgb(255,255,255)`,
                                            stroke: `none`,
                                          }),
                                          (0, JSXRuntime.jsx)(`circle`, {
                                            cx: `15.5`,
                                            cy: `15.5`,
                                            r: `1.3`,
                                            fill: `rgb(255,255,255)`,
                                            stroke: `none`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    `tirar de nuevo`,
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
                  ],
                }),
                `
  `,
              ],
            })
          : null,
        `

  `,
        e.walletOpen
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    position: `fixed`,
                    inset: `0`,
                    zIndex: `60`,
                    background: `rgba(var(--rc-fondo),0.75)`,
                    backdropFilter: `blur(8px)`,
                    WebkitBackdropFilter: `blur(8px)`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                  },
                  onClick: e.closeWallet,
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        width: `600px`,
                        borderRadius: `24px`,
                        background: `radial-gradient(120% 60% at 100% 0%, rgba(var(--rc-marca),0.22) 0%, rgba(var(--rc-tarjeta),0) 60%), rgb(var(--rc-tarjeta))`,
                        boxShadow: `inset 0 0 0 1px rgb(var(--rc-borde)),0px 0px 60px 0px rgba(0,0,0,0.5)`,
                        padding: `32px 40px`,
                        display: `flex`,
                        flexDirection: `column`,
                        gap: `20px`,
                      },
                      onClick: e.stop,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          className: `rcee`,
                          style: {
                            position: `absolute`,
                            right: `20px`,
                            top: `20px`,
                            width: `36px`,
                            height: `36px`,
                            borderRadius: `100px`,
                            border: `none`,
                            background: `rgba(var(--rc-fondo),0.6)`,
                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.18)`,
                            color: `rgb(var(--rc-gris))`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            cursor: `pointer`,
                          },
                          onClick: e.closeWallet,
                          title: `Cerrar`,
                          children: (0, JSXRuntime.jsx)(`svg`, {
                            width: `12`,
                            height: `12`,
                            viewBox: `0 0 14 14`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `1.8`,
                            strokeLinecap: `round`,
                            children: (0, JSXRuntime.jsx)(`path`, {
                              d: `M2 2l10 10M12 2 2 12`,
                            }),
                          }),
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `grid`,
                            gridTemplateColumns: `1fr 1fr`,
                            gap: `4px`,
                            padding: `4px`,
                            borderRadius: `12px`,
                            background: `rgba(var(--rc-fondo),0.8)`,
                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.15)`,
                            marginRight: `48px`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `rced`,
                              style: resolveStyle(
                                `height:42px;border-radius:9px;border:none;background:${e.wTabDepBg ?? ``};box-shadow:${e.wTabDepSh ?? ``};color:${e.wTabDepColor ?? ``};font-weight:700;font-size:17px;letter-spacing:-0.04em;text-transform:uppercase;cursor:pointer`,
                              ),
                              onClick: e.toDeposit,
                              children: `cargar saldo`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `rced`,
                              style: resolveStyle(
                                `height:42px;border-radius:9px;border:none;background:${e.wTabWBg ?? ``};box-shadow:${e.wTabWSh ?? ``};color:${e.wTabWColor ?? ``};font-weight:700;font-size:17px;letter-spacing:-0.04em;text-transform:uppercase;cursor:pointer`,
                              ),
                              onClick: e.toWithdraw,
                              children: `retirar`,
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
                            padding: `14px 18px`,
                            borderRadius: `14px`,
                            background: `rgba(var(--rc-fondo),0.6)`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `500`,
                                fontSize: `13px`,
                                color: `rgba(255,255,255,0.55)`,
                                whiteSpace: `nowrap`,
                                flexShrink: `0`,
                              },
                              children: `Saldo disponible`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                display: `flex`,
                                alignItems: `baseline`,
                                gap: `6px`,
                                fontWeight: `700`,
                                fontSize: `22px`,
                                letterSpacing: `-0.04em`,
                              },
                              children: [
                                renderContent(e.balanceFmt),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontFamily: `Inter,sans-serif`,
                                    fontWeight: `500`,
                                    fontSize: `12px`,
                                    color: `rgba(255,255,255,0.5)`,
                                  },
                                  children: `ARS`,
                                }),
                              ],
                            }),
                            `
        `,
                          ],
                        }),
                        `

        `,
                        e.wForm
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
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
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `13px`,
                                        color: `rgba(255,255,255,0.55)`,
                                      },
                                      children: renderContent(e.wAmountLabel),
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        position: `relative`,
                                        display: `block`,
                                      },
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            position: `absolute`,
                                            left: `18px`,
                                            top: `13px`,
                                            fontWeight: `700`,
                                            fontSize: `22px`,
                                            color: `rgba(255,255,255,0.6)`,
                                            pointerEvents: `none`,
                                          },
                                          children: `$`,
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`input`, {
                                          className: `rcef`,
                                          style: {
                                            height: `54px`,
                                            borderRadius: `12px`,
                                            border: `none`,
                                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.22)`,
                                            background: `rgba(var(--rc-fondo),0.7)`,
                                            color: `rgb(255,255,255)`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `600`,
                                            fontSize: `22px`,
                                            outline: `none`,
                                            width: `100%`,
                                            padding: `0 70px 0 42px`,
                                          },
                                          value: Ot(e.wAmountFmt),
                                          onInput: e.onWAmount,
                                          onKeyDown: e.onWKey,
                                          inputMode: `numeric`,
                                          placeholder: `0`,
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            position: `absolute`,
                                            right: `18px`,
                                            top: `17px`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `15px`,
                                            color: `rgba(255,255,255,0.45)`,
                                            pointerEvents: `none`,
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
                                        gridTemplateColumns: `repeat(4,1fr)`,
                                        gap: `8px`,
                                        marginTop: `2px`,
                                      },
                                      children: [
                                        `
              `,
                                        asArray(e.wQuick).map((e, t) =>
                                          (0, JSXRuntime.jsxs)(
                                            React.Fragment,
                                            {
                                              children: [
                                                `
                `,
                                                (0, JSXRuntime.jsx)(`button`, {
                                                  className: `rce0`,
                                                  style: resolveStyle(
                                                    `height:40px;border-radius:10px;border:none;background:${e?.bg ?? ``};box-shadow:inset 0 0 0 1px rgba(var(--rc-acento),0.25);color:rgb(255,255,255);font-weight:700;font-size:16px;letter-spacing:-0.03em;cursor:pointer`,
                                                  ),
                                                  onClick: e?.pick,
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
                                      ],
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `13px`,
                                        color: `rgba(255,255,255,0.4)`,
                                      },
                                      children: renderContent(e.wMinNote),
                                    }),
                                    `
          `,
                                  ],
                                }),
                                `
          `,
                                e.isWithdraw
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`label`, {
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
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `13px`,
                                                color: `rgba(255,255,255,0.55)`,
                                              },
                                              children: `CBU, CVU o alias de destino`,
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`input`, {
                                              className: `rcef`,
                                              style: {
                                                height: `54px`,
                                                borderRadius: `12px`,
                                                border: `none`,
                                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.22)`,
                                                background: `rgba(var(--rc-fondo),0.7)`,
                                                color: `rgb(255,255,255)`,
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `16px`,
                                                outline: `none`,
                                                width: `100%`,
                                                padding: `0 18px`,
                                              },
                                              value: Ot(e.wAddr),
                                              onInput: e.onWAddr,
                                              onKeyDown: e.onWKey,
                                              spellCheck: `false`,
                                              placeholder: `ej. lucas.garcia.mp`,
                                            }),
                                            `
            `,
                                          ],
                                        }),
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`label`, {
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
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `13px`,
                                                color: `rgba(255,255,255,0.55)`,
                                              },
                                              children: `Titular de la cuenta`,
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`input`, {
                                              className: `rcef`,
                                              style: {
                                                height: `54px`,
                                                borderRadius: `12px`,
                                                border: `none`,
                                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.22)`,
                                                background: `rgba(var(--rc-fondo),0.7)`,
                                                color: `rgb(255,255,255)`,
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `16px`,
                                                outline: `none`,
                                                width: `100%`,
                                                padding: `0 18px`,
                                              },
                                              value: Ot(e.wHolder),
                                              onInput: e.onWHolder,
                                              onKeyDown: e.onWKey,
                                              placeholder: `Nombre y apellido`,
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
                                e.showBonusNote
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            display: `flex`,
                                            alignItems: `center`,
                                            gap: `12px`,
                                            padding: `12px 16px`,
                                            borderRadius: `12px`,
                                            background: `rgba(var(--rc-marca),0.18)`,
                                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.35)`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `14px`,
                                            color: `rgba(255,255,255,0.8)`,
                                          },
                                          children: [
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                height: `26px`,
                                                padding: `0 8px`,
                                                borderRadius: `6px`,
                                                background: `rgb(var(--rc-marca))`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                fontWeight: `700`,
                                                fontSize: `13px`,
                                                color: `rgb(255,255,255)`,
                                              },
                                              children: `ROCCO12`,
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsxs)(`span`, {
                                              style: {
                                                whiteSpace: `nowrap`,
                                              },
                                              children: [
                                                `Primer carga: recibís `,
                                                (0, JSXRuntime.jsxs)(`span`, {
                                                  style: {
                                                    color: `rgb(255,255,255)`,
                                                    fontWeight: `600`,
                                                  },
                                                  children: [
                                                    `+`,
                                                    renderContent(e.bonusAmt),
                                                  ],
                                                }),
                                                ` de bono`,
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
                                e.isDeposit
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
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
                                            (0, JSXRuntime.jsxs)(`span`, {
                                              style: {
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `13px`,
                                                color: `rgba(255,255,255,0.55)`,
                                              },
                                              children: [
                                                `Transferí `,
                                                renderContent(e.wAmountMoney),
                                                ` a este alias`,
                                              ],
                                            }),
                                            `
              `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                padding: `18px`,
                                                borderRadius: `16px`,
                                                background: `rgba(var(--rc-fondo),0.7)`,
                                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.3)`,
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
                                                    padding: `8px 8px 8px 16px`,
                                                    borderRadius: `12px`,
                                                    background: `rgb(var(--rc-tarjeta))`,
                                                  },
                                                  children: [
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
                                                          `
                `,
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                fontFamily: `Inter,sans-serif`,
                                                                fontWeight: `500`,
                                                                fontSize: `12px`,
                                                                color: `rgba(255,255,255,0.45)`,
                                                              },
                                                              children: `Alias`,
                                                            },
                                                          ),
                                                          `
                `,
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                fontFamily: `ui-monospace,SFMono-Regular,Menlo,monospace`,
                                                                fontSize: `18px`,
                                                                whiteSpace: `nowrap`,
                                                                overflow: `hidden`,
                                                                textOverflow: `ellipsis`,
                                                              },
                                                              children:
                                                                renderContent(
                                                                  e.cjAlias,
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
                                                    (0, JSXRuntime.jsx)(
                                                      `button`,
                                                      {
                                                        className: `rceh`,
                                                        style: resolveStyle(
                                                          `height:40px;padding:0 16px;border-radius:9px;border:none;background:${e.copyBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:14px;letter-spacing:-0.02em;text-transform:uppercase;cursor:pointer;white-space:nowrap`,
                                                        ),
                                                        onClick: e.copyAlias,
                                                        children: renderContent(
                                                          e.copyLabel,
                                                        ),
                                                      },
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
                                                    gridTemplateColumns: `1fr 1fr`,
                                                    gap: `10px`,
                                                    fontFamily: `Inter,sans-serif`,
                                                    fontWeight: `500`,
                                                    fontSize: `13px`,
                                                    color: `rgba(255,255,255,0.45)`,
                                                  },
                                                  children: [
                                                    `
              `,
                                                    (0, JSXRuntime.jsxs)(
                                                      `div`,
                                                      {
                                                        style: {
                                                          display: `flex`,
                                                          flexDirection: `column`,
                                                          gap: `2px`,
                                                        },
                                                        children: [
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              children: `Titular`,
                                                            },
                                                          ),
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                color: `rgb(255,255,255)`,
                                                                fontSize: `15px`,
                                                              },
                                                              children:
                                                                renderContent(
                                                                  e.cjHolder,
                                                                ),
                                                            },
                                                          ),
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
                                                        },
                                                        children: [
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              children: `Banco`,
                                                            },
                                                          ),
                                                          (0, JSXRuntime.jsx)(
                                                            `span`,
                                                            {
                                                              style: {
                                                                color: `rgb(255,255,255)`,
                                                                fontSize: `15px`,
                                                              },
                                                              children:
                                                                renderContent(
                                                                  e.cjBank,
                                                                ),
                                                            },
                                                          ),
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
                                e.wErr
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            padding: `12px 14px`,
                                            borderRadius: `12px`,
                                            background: `rgba(255,90,90,0.1)`,
                                            boxShadow: `inset 0 0 0 1px rgba(255,120,120,0.25)`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `14px`,
                                            color: `rgb(255,160,160)`,
                                          },
                                          children: renderContent(e.wErr),
                                        }),
                                        `
          `,
                                      ],
                                    })
                                  : null,
                                e.isDeposit
                                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                      children: [
                                        `
            `,
                                        (0, JSXRuntime.jsx)(`input`, {
                                          style: {
                                            display: `none`,
                                          },
                                          ref: e.rcRef,
                                          type: `file`,
                                          accept: `image/*,application/pdf`,
                                          onChange: e.onReceipt,
                                        }),
                                        `
            `,
                                        e.noReceipt
                                          ? (0, JSXRuntime.jsxs)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: [
                                                  `
              `,
                                                  (0, JSXRuntime.jsxs)(
                                                    `button`,
                                                    {
                                                      className: `rcej`,
                                                      style: {
                                                        minHeight: `72px`,
                                                        padding: `12px 16px`,
                                                        borderRadius: `12px`,
                                                        border: `none`,
                                                        background: `rgba(var(--rc-marca),0.08)`,
                                                        boxShadow: `inset 0 0 0 1.5px rgba(var(--rc-acento),0.45)`,
                                                        outline: `1.5px dashed rgba(var(--rc-acento),0.55)`,
                                                        outlineOffset: `-6px`,
                                                        color: `rgb(255,255,255)`,
                                                        display: `flex`,
                                                        alignItems: `center`,
                                                        gap: `14px`,
                                                        textAlign: `left`,
                                                        cursor: `pointer`,
                                                      },
                                                      onClick: e.pickReceipt,
                                                      children: [
                                                        `
                `,
                                                        (0, JSXRuntime.jsx)(
                                                          `span`,
                                                          {
                                                            style: {
                                                              width: `44px`,
                                                              height: `44px`,
                                                              borderRadius: `10px`,
                                                              background: `rgb(var(--rc-marca))`,
                                                              display: `flex`,
                                                              alignItems: `center`,
                                                              justifyContent: `center`,
                                                              flexShrink: `0`,
                                                            },
                                                            children: (0,
                                                            JSXRuntime.jsxs)(
                                                              `svg`,
                                                              {
                                                                width: `20`,
                                                                height: `20`,
                                                                viewBox: `0 0 24 24`,
                                                                fill: `none`,
                                                                stroke: `rgb(255,255,255)`,
                                                                strokeWidth: `1.9`,
                                                                strokeLinecap: `round`,
                                                                strokeLinejoin: `round`,
                                                                children: [
                                                                  (0,
                                                                  JSXRuntime.jsx)(
                                                                    `path`,
                                                                    {
                                                                      d: `M12 16V4M7 9l5-5 5 5`,
                                                                    },
                                                                  ),
                                                                  (0,
                                                                  JSXRuntime.jsx)(
                                                                    `path`,
                                                                    {
                                                                      d: `M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3`,
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                          },
                                                        ),
                                                        `
                `,
                                                        (0, JSXRuntime.jsxs)(
                                                          `span`,
                                                          {
                                                            style: {
                                                              flex: `1`,
                                                              minWidth: `0`,
                                                              display: `flex`,
                                                              flexDirection: `column`,
                                                              gap: `3px`,
                                                            },
                                                            children: [
                                                              (0,
                                                              JSXRuntime.jsx)(
                                                                `span`,
                                                                {
                                                                  style: {
                                                                    fontWeight: `700`,
                                                                    fontSize: `17px`,
                                                                    letterSpacing: `-0.03em`,
                                                                  },
                                                                  children: `Adjuntá el comprobante`,
                                                                },
                                                              ),
                                                              (0,
                                                              JSXRuntime.jsx)(
                                                                `span`,
                                                                {
                                                                  style: {
                                                                    fontFamily: `Inter,sans-serif`,
                                                                    fontWeight: `500`,
                                                                    fontSize: `13px`,
                                                                    color: `rgba(255,255,255,0.5)`,
                                                                  },
                                                                  children: `Foto o captura de la transferencia · JPG, PNG o PDF`,
                                                                },
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
                                              },
                                            )
                                          : null,
                                        `
            `,
                                        e.hasReceipt
                                          ? (0, JSXRuntime.jsxs)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: [
                                                  `
              `,
                                                  (0, JSXRuntime.jsxs)(`div`, {
                                                    style: {
                                                      minHeight: `72px`,
                                                      padding: `10px 12px`,
                                                      borderRadius: `12px`,
                                                      background: `rgba(38,161,123,0.1)`,
                                                      boxShadow: `inset 0 0 0 1px rgba(38,161,123,0.5)`,
                                                      display: `flex`,
                                                      alignItems: `center`,
                                                      gap: `12px`,
                                                    },
                                                    children: [
                                                      `
                `,
                                                      (0, JSXRuntime.jsx)(
                                                        `div`,
                                                        {
                                                          style: resolveStyle(
                                                            `width:52px;height:52px;border-radius:9px;flex-shrink:0;background-color:rgb(var(--rc-fondo));background-image:url('${e.rcThumb ?? ``}');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-weight:700;font-size:11px;color:rgb(255,160,160)`,
                                                          ),
                                                          children:
                                                            renderContent(
                                                              e.rcBadge,
                                                            ),
                                                        },
                                                      ),
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
                                                            gap: `3px`,
                                                          },
                                                          children: [
                                                            (0, JSXRuntime.jsx)(
                                                              `span`,
                                                              {
                                                                style: {
                                                                  fontFamily: `Inter,sans-serif`,
                                                                  fontWeight: `600`,
                                                                  fontSize: `14px`,
                                                                  whiteSpace: `nowrap`,
                                                                  overflow: `hidden`,
                                                                  textOverflow: `ellipsis`,
                                                                },
                                                                children:
                                                                  renderContent(
                                                                    e.rcName,
                                                                  ),
                                                              },
                                                            ),
                                                            (0,
                                                            JSXRuntime.jsxs)(
                                                              `span`,
                                                              {
                                                                style: {
                                                                  display: `flex`,
                                                                  alignItems: `center`,
                                                                  gap: `5px`,
                                                                  fontFamily: `Inter,sans-serif`,
                                                                  fontWeight: `500`,
                                                                  fontSize: `13px`,
                                                                  color: `rgb(80,225,140)`,
                                                                },
                                                                children: [
                                                                  (0,
                                                                  JSXRuntime.jsx)(
                                                                    `svg`,
                                                                    {
                                                                      width: `12`,
                                                                      height: `12`,
                                                                      viewBox: `0 0 24 24`,
                                                                      fill: `none`,
                                                                      stroke: `currentColor`,
                                                                      strokeWidth: `3`,
                                                                      strokeLinecap: `round`,
                                                                      strokeLinejoin: `round`,
                                                                      children:
                                                                        (0,
                                                                        JSXRuntime.jsx)(
                                                                          `path`,
                                                                          {
                                                                            d: `m5 12.5 4.5 4.5L19 7.5`,
                                                                          },
                                                                        ),
                                                                    },
                                                                  ),
                                                                  `Comprobante adjunto · `,
                                                                  renderContent(
                                                                    e.rcSize,
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                      `
                `,
                                                      (0, JSXRuntime.jsx)(
                                                        `button`,
                                                        {
                                                          style: {
                                                            height: `36px`,
                                                            padding: `0 12px`,
                                                            borderRadius: `9px`,
                                                            border: `none`,
                                                            background: `rgb(var(--rc-fondo))`,
                                                            color: `rgb(255,255,255)`,
                                                            fontFamily: `Inter,sans-serif`,
                                                            fontWeight: `600`,
                                                            fontSize: `13px`,
                                                            cursor: `pointer`,
                                                            flexShrink: `0`,
                                                          },
                                                          onClick:
                                                            e.pickReceipt,
                                                          children: `Cambiar`,
                                                        },
                                                      ),
                                                      `
                `,
                                                      (0, JSXRuntime.jsx)(
                                                        `button`,
                                                        {
                                                          style: {
                                                            width: `36px`,
                                                            height: `36px`,
                                                            borderRadius: `9px`,
                                                            border: `none`,
                                                            background: `rgb(var(--rc-fondo))`,
                                                            color: `rgba(255,255,255,0.7)`,
                                                            display: `flex`,
                                                            alignItems: `center`,
                                                            justifyContent: `center`,
                                                            cursor: `pointer`,
                                                            flexShrink: `0`,
                                                          },
                                                          onClick:
                                                            e.clearReceipt,
                                                          title: `Quitar`,
                                                          children: (0,
                                                          JSXRuntime.jsx)(
                                                            `svg`,
                                                            {
                                                              width: `14`,
                                                              height: `14`,
                                                              viewBox: `0 0 24 24`,
                                                              fill: `none`,
                                                              stroke: `currentColor`,
                                                              strokeWidth: `2.2`,
                                                              strokeLinecap: `round`,
                                                              children: (0,
                                                              JSXRuntime.jsx)(
                                                                `path`,
                                                                {
                                                                  d: `M6 6l12 12M18 6 6 18`,
                                                                },
                                                              ),
                                                            },
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
                                    })
                                  : null,
                                `
          `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  className: `rceh`,
                                  style: {
                                    height: `58px`,
                                    borderRadius: `12px`,
                                    border: `none`,
                                    background: `linear-gradient(180deg, rgb(var(--rc-marca-luz)) 0%, rgb(var(--rc-marca)) 100%)`,
                                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.18),0px 10px 30px rgba(var(--rc-marca),0.45)`,
                                    color: `rgb(255,255,255)`,
                                    fontWeight: `700`,
                                    fontSize: `24px`,
                                    letterSpacing: `-0.05em`,
                                    textTransform: `uppercase`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.wSubmit,
                                  children: renderContent(e.wCta),
                                }),
                                `
          `,
                                e.isDeposit
                                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                      children: (0, JSXRuntime.jsxs)(`a`, {
                                        className: `rcek`,
                                        style: {
                                          height: `50px`,
                                          borderRadius: `12px`,
                                          background: `rgba(37,211,102,0.12)`,
                                          boxShadow: `inset 0 0 0 1px rgba(37,211,102,0.45)`,
                                          color: `rgb(80,225,140)`,
                                          display: `flex`,
                                          alignItems: `center`,
                                          justifyContent: `center`,
                                          gap: `10px`,
                                          fontFamily: `Inter,sans-serif`,
                                          fontWeight: `600`,
                                          fontSize: `15px`,
                                          textDecoration: `none`,
                                        },
                                        href: e.waLink,
                                        target: `_blank`,
                                        rel: `noopener`,
                                        children: [
                                          (0, JSXRuntime.jsxs)(`svg`, {
                                            width: `20`,
                                            height: `20`,
                                            viewBox: `0 0 24 24`,
                                            fill: `none`,
                                            stroke: `currentColor`,
                                            strokeWidth: `1.8`,
                                            strokeLinecap: `round`,
                                            strokeLinejoin: `round`,
                                            children: [
                                              (0, JSXRuntime.jsx)(`path`, {
                                                d: `M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4A8.4 8.4 0 1 1 20.5 11.6z`,
                                              }),
                                              (0, JSXRuntime.jsx)(`path`, {
                                                d: `M9 9.5c.3 1.8 1.7 3.8 4.3 4.8l1.2-1.1 1.8.8`,
                                              }),
                                            ],
                                          }),
                                          `¿No te responden? Escribinos por WhatsApp`,
                                        ],
                                      }),
                                    })
                                  : null,
                                `
        `,
                              ],
                            })
                          : null,
                        `

        `,
                        e.wAssigning
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    padding: `36px 0 24px`,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    alignItems: `center`,
                                    gap: `16px`,
                                    textAlign: `center`,
                                  },
                                  children: [
                                    `
            `,
                                    renderContent(e.spinner),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontWeight: `700`,
                                        fontSize: `28px`,
                                        letterSpacing: `-0.05em`,
                                      },
                                      children: `Asignándote un cajero…`,
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `15px`,
                                        color: `rgba(255,255,255,0.5)`,
                                      },
                                      children: [
                                        `Pedido de carga por `,
                                        renderContent(e.wAmountMoney),
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
                        e.wAlias
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    alignItems: `center`,
                                    gap: `6px`,
                                    textAlign: `center`,
                                    paddingTop: `4px`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `13px`,
                                        color: `rgba(255,255,255,0.55)`,
                                      },
                                      children: `Transferí exactamente`,
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontWeight: `700`,
                                        fontSize: `48px`,
                                        letterSpacing: `-0.05em`,
                                        lineHeight: `1`,
                                      },
                                      children: renderContent(e.wAmountMoney),
                                    }),
                                    `
          `,
                                  ],
                                }),
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    padding: `18px`,
                                    borderRadius: `16px`,
                                    background: `rgba(var(--rc-fondo),0.7)`,
                                    boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.3)`,
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
                                        padding: `8px 8px 8px 16px`,
                                        borderRadius: `12px`,
                                        background: `rgb(var(--rc-tarjeta))`,
                                      },
                                      children: [
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
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `12px`,
                                                color: `rgba(255,255,255,0.45)`,
                                              },
                                              children: `Alias`,
                                            }),
                                            `
                `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                fontFamily: `ui-monospace,SFMono-Regular,Menlo,monospace`,
                                                fontSize: `18px`,
                                                whiteSpace: `nowrap`,
                                                overflow: `hidden`,
                                                textOverflow: `ellipsis`,
                                              },
                                              children: renderContent(
                                                e.cjAlias,
                                              ),
                                            }),
                                            `
              `,
                                          ],
                                        }),
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`button`, {
                                          className: `rceh`,
                                          style: resolveStyle(
                                            `height:40px;padding:0 16px;border-radius:9px;border:none;background:${e.copyBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:14px;letter-spacing:-0.02em;text-transform:uppercase;cursor:pointer;white-space:nowrap`,
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
                                        gridTemplateColumns: `1fr 1fr`,
                                        gap: `10px`,
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `13px`,
                                        color: `rgba(255,255,255,0.45)`,
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
                                              children: `Titular`,
                                            }),
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                color: `rgb(255,255,255)`,
                                                fontSize: `15px`,
                                              },
                                              children: renderContent(
                                                e.cjHolder,
                                              ),
                                            }),
                                          ],
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
                                            (0, JSXRuntime.jsx)(`span`, {
                                              children: `Banco`,
                                            }),
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                color: `rgb(255,255,255)`,
                                                fontSize: `15px`,
                                              },
                                              children: renderContent(e.cjBank),
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
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontFamily: `Inter,sans-serif`,
                                    fontWeight: `500`,
                                    fontSize: `13px`,
                                    lineHeight: `1.5`,
                                    color: `rgba(255,255,255,0.45)`,
                                    textAlign: `center`,
                                    textWrap: `pretty`,
                                  },
                                  children: `Transferí desde una cuenta a tu nombre. Cuando lo hagas, tocá el botón y el cajero te acredita el saldo.`,
                                }),
                                `
          `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  className: `rceh`,
                                  style: {
                                    height: `58px`,
                                    borderRadius: `12px`,
                                    border: `none`,
                                    background: `linear-gradient(180deg, rgb(var(--rc-marca-luz)) 0%, rgb(var(--rc-marca)) 100%)`,
                                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.18),0px 10px 30px rgba(var(--rc-marca),0.45)`,
                                    color: `rgb(255,255,255)`,
                                    fontWeight: `700`,
                                    fontSize: `24px`,
                                    letterSpacing: `-0.05em`,
                                    textTransform: `uppercase`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.confirmTransfer,
                                  children: `ya transferí`,
                                }),
                                `
          `,
                                (0, JSXRuntime.jsxs)(`a`, {
                                  className: `rcek`,
                                  style: {
                                    height: `50px`,
                                    borderRadius: `12px`,
                                    background: `rgba(37,211,102,0.12)`,
                                    boxShadow: `inset 0 0 0 1px rgba(37,211,102,0.45)`,
                                    color: `rgb(80,225,140)`,
                                    display: `flex`,
                                    alignItems: `center`,
                                    justifyContent: `center`,
                                    gap: `10px`,
                                    fontFamily: `Inter,sans-serif`,
                                    fontWeight: `600`,
                                    fontSize: `15px`,
                                    textDecoration: `none`,
                                  },
                                  href: e.waLink,
                                  target: `_blank`,
                                  rel: `noopener`,
                                  children: [
                                    (0, JSXRuntime.jsxs)(`svg`, {
                                      width: `20`,
                                      height: `20`,
                                      viewBox: `0 0 24 24`,
                                      fill: `none`,
                                      stroke: `currentColor`,
                                      strokeWidth: `1.8`,
                                      strokeLinecap: `round`,
                                      strokeLinejoin: `round`,
                                      children: [
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4A8.4 8.4 0 1 1 20.5 11.6z`,
                                        }),
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M9 9.5c.3 1.8 1.7 3.8 4.3 4.8l1.2-1.1 1.8.8`,
                                        }),
                                      ],
                                    }),
                                    `¿No te responden? Escribinos por WhatsApp`,
                                  ],
                                }),
                                `
        `,
                              ],
                            })
                          : null,
                        `

        `,
                        e.wPending
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    padding: `30px 0 10px`,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    alignItems: `center`,
                                    gap: `16px`,
                                    textAlign: `center`,
                                  },
                                  children: [
                                    `
            `,
                                    renderContent(e.spinner),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontWeight: `700`,
                                        fontSize: `28px`,
                                        letterSpacing: `-0.05em`,
                                      },
                                      children: renderContent(e.wPendingTitle),
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `15px`,
                                        color: `rgba(255,255,255,0.5)`,
                                        textWrap: `pretty`,
                                        maxWidth: `420px`,
                                      },
                                      children: renderContent(e.wPendingSub),
                                    }),
                                    `
          `,
                                  ],
                                }),
                                `
          `,
                                (0, JSXRuntime.jsxs)(`a`, {
                                  className: `rcek`,
                                  style: {
                                    height: `50px`,
                                    borderRadius: `12px`,
                                    background: `rgba(37,211,102,0.12)`,
                                    boxShadow: `inset 0 0 0 1px rgba(37,211,102,0.45)`,
                                    color: `rgb(80,225,140)`,
                                    display: `flex`,
                                    alignItems: `center`,
                                    justifyContent: `center`,
                                    gap: `10px`,
                                    fontFamily: `Inter,sans-serif`,
                                    fontWeight: `600`,
                                    fontSize: `15px`,
                                    textDecoration: `none`,
                                  },
                                  href: e.waLink,
                                  target: `_blank`,
                                  rel: `noopener`,
                                  children: [
                                    (0, JSXRuntime.jsxs)(`svg`, {
                                      width: `20`,
                                      height: `20`,
                                      viewBox: `0 0 24 24`,
                                      fill: `none`,
                                      stroke: `currentColor`,
                                      strokeWidth: `1.8`,
                                      strokeLinecap: `round`,
                                      strokeLinejoin: `round`,
                                      children: [
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4A8.4 8.4 0 1 1 20.5 11.6z`,
                                        }),
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M9 9.5c.3 1.8 1.7 3.8 4.3 4.8l1.2-1.1 1.8.8`,
                                        }),
                                      ],
                                    }),
                                    `¿No te responden? Escribinos por WhatsApp`,
                                  ],
                                }),
                                `
        `,
                              ],
                            })
                          : null,
                        `

        `,
                        e.wDone
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    padding: `22px 0 0`,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    alignItems: `center`,
                                    gap: `14px`,
                                    textAlign: `center`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        width: `76px`,
                                        height: `76px`,
                                        borderRadius: `50%`,
                                        background: `rgba(38,161,123,0.18)`,
                                        boxShadow: `0 0 0 2px rgb(38,161,123),0 0 30px rgba(38,161,123,0.5)`,
                                        display: `flex`,
                                        alignItems: `center`,
                                        justifyContent: `center`,
                                      },
                                      children: (0, JSXRuntime.jsx)(`svg`, {
                                        width: `34`,
                                        height: `34`,
                                        viewBox: `0 0 24 24`,
                                        fill: `none`,
                                        stroke: `rgb(38,200,150)`,
                                        strokeWidth: `2.4`,
                                        strokeLinecap: `round`,
                                        strokeLinejoin: `round`,
                                        children: (0, JSXRuntime.jsx)(`path`, {
                                          d: `m5 12.5 4.5 4.5L19 7.5`,
                                        }),
                                      }),
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontWeight: `700`,
                                        fontSize: `32px`,
                                        letterSpacing: `-0.05em`,
                                      },
                                      children: renderContent(e.wDoneTitle),
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `15px`,
                                        color: `rgba(255,255,255,0.55)`,
                                        textWrap: `pretty`,
                                        maxWidth: `420px`,
                                      },
                                      children: renderContent(e.wDoneSub),
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`button`, {
                                      className: `rce1`,
                                      style: {
                                        marginTop: `12px`,
                                        width: `100%`,
                                        height: `56px`,
                                        borderRadius: `12px`,
                                        border: `none`,
                                        background: `rgb(var(--rc-marca))`,
                                        color: `rgb(255,255,255)`,
                                        fontWeight: `700`,
                                        fontSize: `22px`,
                                        letterSpacing: `-0.05em`,
                                        textTransform: `uppercase`,
                                        cursor: `pointer`,
                                      },
                                      onClick: e.closeWallet,
                                      children: `seguir jugando`,
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
                            justifyContent: `center`,
                            alignItems: `center`,
                            gap: `8px`,
                            fontFamily: `Inter,sans-serif`,
                            fontWeight: `500`,
                            fontSize: `13px`,
                            color: `rgba(255,255,255,0.4)`,
                          },
                          children: [
                            (0, JSXRuntime.jsxs)(`svg`, {
                              width: `14`,
                              height: `14`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `1.8`,
                              strokeLinecap: `round`,
                              strokeLinejoin: `round`,
                              children: [
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z`,
                                }),
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `m9 12 2 2 4-4`,
                                }),
                              ],
                            }),
                            `Atención personalizada por cajeros · Pagos en pesos`,
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
          style: {
            position: `fixed`,
            right: `129px`,
            top: `105px`,
            zIndex: `55`,
          },
          children: [
            `
    `,
            e.chatOpen
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        width: `380px`,
                        height: `540px`,
                        borderRadius: `20px`,
                        overflow: `hidden`,
                        background: `rgb(var(--rc-tarjeta))`,
                        boxShadow: `inset 0 0 0 1px rgb(var(--rc-borde)),0 24px 60px rgba(0,0,0,0.55)`,
                        display: `flex`,
                        flexDirection: `column`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            padding: `16px 16px 16px 18px`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `12px`,
                            background: `linear-gradient(135deg, rgb(var(--rc-marca)) 0%, rgb(var(--rc-hover)) 100%)`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `relative`,
                                width: `40px`,
                                height: `40px`,
                                borderRadius: `50%`,
                                background: `rgb(var(--rc-fondo))`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                flexShrink: `0`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`img`, {
                                  style: {
                                    width: `26px`,
                                    height: `auto`,
                                    objectFit: `cover`,
                                    objectPosition: `left`,
                                    display: `block`,
                                    clipPath: `inset(0 76% 0 0)`,
                                    transform: `translateX(9px)`,
                                  },
                                  src: resolveViewAsset(`assets/logo.png`),
                                  alt: ``,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    position: `absolute`,
                                    right: `0`,
                                    bottom: `0`,
                                    width: `10px`,
                                    height: `10px`,
                                    borderRadius: `50%`,
                                    background: `rgb(38,200,150)`,
                                    boxShadow: `0 0 0 2px rgb(var(--rc-marca))`,
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
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    fontWeight: `700`,
                                    fontSize: `18px`,
                                    letterSpacing: `-0.03em`,
                                    whiteSpace: `nowrap`,
                                  },
                                  children: [
                                    `Soporte `,
                                    renderContent(e.brandName),
                                  ],
                                }),
                                `
            `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontFamily: `Inter,sans-serif`,
                                    fontWeight: `500`,
                                    fontSize: `12px`,
                                    color: `rgba(255,255,255,0.75)`,
                                    whiteSpace: `nowrap`,
                                  },
                                  children: `En línea · responde en minutos`,
                                }),
                                `
          `,
                              ],
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `rcel`,
                              style: {
                                width: `32px`,
                                height: `32px`,
                                borderRadius: `100px`,
                                border: `none`,
                                background: `rgba(var(--rc-fondo),0.3)`,
                                color: `rgb(255,255,255)`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                cursor: `pointer`,
                              },
                              onClick: e.toggleChat,
                              title: `Cerrar`,
                              children: (0, JSXRuntime.jsx)(`svg`, {
                                width: `14`,
                                height: `14`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `2.2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: (0, JSXRuntime.jsx)(`path`, {
                                  d: `m6 9 6 6 6-6`,
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
                            flex: `1`,
                            overflowY: `auto`,
                            padding: `18px 16px`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `10px`,
                            background: `rgb(var(--rc-fondo))`,
                          },
                          ref: e.chatRef,
                          children: [
                            `
          `,
                            asArray(e.chatMsgs).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: resolveStyle(
                                        `display:flex;justify-content:${e?.align ?? ``}`,
                                      ),
                                      children: [
                                        `
              `,
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: resolveStyle(
                                            `max-width:78%;padding:10px 14px;border-radius:${e?.radius ?? ``};background:${e?.bg ?? ``};font-family:Inter,sans-serif;font-weight:500;font-size:14px;line-height:1.45;color:rgb(255,255,255);text-wrap:pretty`,
                                          ),
                                          children: renderContent(e?.text),
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
                            e.chatTyping
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        alignSelf: `flex-start`,
                                        padding: `10px 14px`,
                                        borderRadius: `14px 14px 14px 4px`,
                                        background: `rgb(var(--rc-tarjeta))`,
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `13px`,
                                        color: `rgba(255,255,255,0.5)`,
                                      },
                                      children: `Escribiendo…`,
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
                            padding: `10px 12px 0`,
                            display: `flex`,
                            flexWrap: `wrap`,
                            gap: `6px`,
                            background: `rgb(var(--rc-fondo))`,
                          },
                          children: [
                            `
          `,
                            asArray(e.chatQuick).map((e, t) =>
                              (0, JSXRuntime.jsxs)(
                                React.Fragment,
                                {
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`button`, {
                                      className: `rce2`,
                                      style: {
                                        height: `30px`,
                                        padding: `0 12px`,
                                        borderRadius: `100px`,
                                        border: `none`,
                                        background: `rgba(var(--rc-marca),0.2)`,
                                        boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.4)`,
                                        color: `rgb(var(--rc-tinta-3))`,
                                        fontFamily: `Inter,sans-serif`,
                                        fontWeight: `500`,
                                        fontSize: `13px`,
                                        cursor: `pointer`,
                                        whiteSpace: `nowrap`,
                                      },
                                      onClick: e?.send,
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
                            padding: `12px`,
                            display: `flex`,
                            gap: `8px`,
                            background: `rgb(var(--rc-fondo))`,
                          },
                          children: [
                            `
          `,
                            (0, JSXRuntime.jsx)(`input`, {
                              className: `rcem`,
                              style: {
                                flex: `1`,
                                height: `46px`,
                                borderRadius: `12px`,
                                border: `none`,
                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.25)`,
                                background: `rgb(var(--rc-tarjeta))`,
                                color: `rgb(255,255,255)`,
                                padding: `0 14px`,
                                fontFamily: `Inter,sans-serif`,
                                fontWeight: `500`,
                                fontSize: `14px`,
                                outline: `none`,
                              },
                              value: Ot(e.chatInput),
                              onInput: e.onChatInput,
                              onKeyDown: e.onChatKey,
                              placeholder: `Escribí tu mensaje…`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `rce1`,
                              style: {
                                width: `46px`,
                                height: `46px`,
                                borderRadius: `12px`,
                                border: `none`,
                                background: `rgb(var(--rc-marca))`,
                                color: `rgb(255,255,255)`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                cursor: `pointer`,
                                flexShrink: `0`,
                              },
                              onClick: e.chatSend,
                              title: `Enviar`,
                              children: (0, JSXRuntime.jsxs)(`svg`, {
                                width: `18`,
                                height: `18`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: [
                                  (0, JSXRuntime.jsx)(`path`, {
                                    d: `M4 12 20 4l-4 16-4-7z`,
                                  }),
                                  (0, JSXRuntime.jsx)(`path`, {
                                    d: `m12 13 8-9`,
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
          ],
        }),
        `

  `,
        e.toast
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    position: `fixed`,
                    left: `50%`,
                    bottom: `40px`,
                    transform: `translateX(-50%)`,
                    zIndex: `70`,
                    height: `56px`,
                    padding: `0 28px`,
                    borderRadius: `10px`,
                    background: `rgb(var(--rc-marca))`,
                    boxShadow: `0px 0px 40px 0px rgba(0,0,0,0.25)`,
                    display: `flex`,
                    alignItems: `center`,
                    fontWeight: `700`,
                    fontSize: `22px`,
                    letterSpacing: `-0.06em`,
                    textTransform: `uppercase`,
                  },
                  children: renderContent(e.toast),
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
export { renderAzulDesktopLayout };
