/**
 * brasa / lobby-layout.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Declarations only; importing this module does not start the view.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import {
  renderContent,
  asArray,
  ge,
  be,
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
function renderBrasaLobbyLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: {
        minHeight: `100vh`,
        position: `relative`,
        overflowX: `hidden`,
        color: `var(--br-texto,#F3E9D8)`,
      },
      ref: e.rootRef,
      children: [
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            position: `fixed`,
            inset: `0`,
            zIndex: `0`,
            pointerEvents: `none`,
            overflow: `hidden`,
            background: `var(--br-fondo,#000000)`,
          },
          children: [
            (0, JSXRuntime.jsxs)(`div`, {
              style: resolveStyle(
                `position:absolute;right:-8vw;top:50%;height:130vh;aspect-ratio:100/120;transform:translateY(calc(-50% + ${e.rShift ?? ``})) rotate(-6deg);transition:transform .2s linear;opacity:.09`,
              ),
              children: [
                e.isoMarca
                  ? null
                  : (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsxs)(`svg`, {
                        style: {
                          overflow: `visible`,
                          fill: `var(--br-p,#FF5B14)`,
                        },
                        viewBox: `0 0 100 120`,
                        width: `100%`,
                        height: `100%`,
                        children: [
                          (0, JSXRuntime.jsx)(`path`, {
                            d: `M 46.323 120 L 12.43 61.297 L 12.43 0 L 100 0 L 100 61.297 L 66.107 61.297 L 100 120 Z`,
                          }),
                          (0, JSXRuntime.jsx)(`path`, {
                            d: `M -41.409 61.947 L 12.43 61.947 L 12.43 119.677 L -41.409 119.677 Z`,
                          }),
                        ],
                      }),
                    }),
                e.isoMarca
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsx)(`img`, {
                        style: {
                          width: `100%`,
                          height: `100%`,
                          objectFit: `contain`,
                          display: `block`,
                        },
                        src: be(e.isoUrl),
                        alt: ``,
                      }),
                    })
                  : null,
              ],
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                position: `absolute`,
                left: `-12vw`,
                bottom: `-30vh`,
                height: `70vh`,
                aspectRatio: `100/120`,
                transform: `rotate(12deg)`,
                opacity: `.035`,
              },
              children: [
                e.isoMarca
                  ? null
                  : (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsxs)(`svg`, {
                        style: {
                          overflow: `visible`,
                          stroke: `var(--br-p,#FF5B14)`,
                        },
                        viewBox: `0 0 100 120`,
                        width: `100%`,
                        height: `100%`,
                        fill: `none`,
                        strokeWidth: `1.2`,
                        children: [
                          (0, JSXRuntime.jsx)(`path`, {
                            d: `M 46.323 120 L 12.43 61.297 L 12.43 0 L 100 0 L 100 61.297 L 66.107 61.297 L 100 120 Z`,
                          }),
                          (0, JSXRuntime.jsx)(`path`, {
                            d: `M -41.409 61.947 L 12.43 61.947 L 12.43 119.677 L -41.409 119.677 Z`,
                          }),
                        ],
                      }),
                    }),
                e.isoMarca
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsx)(`img`, {
                        style: {
                          width: `100%`,
                          height: `100%`,
                          objectFit: `contain`,
                          display: `block`,
                        },
                        src: be(e.isoUrl),
                        alt: ``,
                      }),
                    })
                  : null,
              ],
            }),
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                position: `absolute`,
                inset: `0`,
                background: `radial-gradient(ellipse at 85% 45%,rgba(var(--br-p-rgb,255,91,20),.10),transparent 55%)`,
              },
            }),
          ],
        }),
        (0, JSXRuntime.jsxs)(`div`, {
          style: resolveStyle(
            `position:sticky;top:0;z-index:40;height:${e.hdrH ?? ``};display:flex;align-items:center;gap:18px;padding:0 clamp(14px,3vw,40px);background:${e.hdrBg ?? ``};backdrop-filter:blur(16px);border-bottom:1px solid ${e.hdrBd ?? ``};transition:height .25s ease,background .25s ease`,
          ),
          children: [
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                display: `flex`,
                alignItems: `center`,
                gap: `10px`,
                flex: `none`,
                cursor: `pointer`,
              },
              onClick: e.toTop,
              children: (0, JSXRuntime.jsx)(`img`, {
                className: `${e.logoClase ?? ``}`,
                style: {
                  height: `34px`,
                  width: `auto`,
                  maxWidth: `180px`,
                  objectFit: `contain`,
                  objectPosition: `left center`,
                  display: `block`,
                },
                src: be(e.logoUrl),
                alt: e.marcaNombre,
              }),
            }),
            e.wide
              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                  children: (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      display: `flex`,
                      gap: `26px`,
                      marginLeft: `18px`,
                    },
                    children: asArray(e.navL).map((e, t) =>
                      (0, JSXRuntime.jsx)(
                        React.Fragment,
                        {
                          children: (0, JSXRuntime.jsxs)(`span`, {
                            style: resolveStyle(
                              `position:relative;padding:8px 0;font:700 14px var(--fb,Oswald),sans-serif;color:${e?.fg ?? ``};cursor:pointer;transition:color .2s`,
                            ),
                            onClick: e?.onClick,
                            children: [
                              renderContent(e?.l),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: resolveStyle(
                                  `position:absolute;left:0;right:0;bottom:0;height:2px;border-radius:2px;background:var(--br-p,#FF5B14);transform:scaleX(${e?.sc ?? ``});transition:transform .3s cubic-bezier(.2,.8,.2,1)`,
                                ),
                              }),
                            ],
                          }),
                        },
                        t,
                      ),
                    ),
                  }),
                })
              : null,
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                flex: `1`,
              },
            }),
            e.notNarrow
              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                  children: (0, JSXRuntime.jsxs)(`div`, {
                    className: `br0-0`,
                    style: {
                      flex: `none`,
                      display: `flex`,
                      alignItems: `center`,
                      gap: `8px`,
                      height: `44px`,
                      padding: `0 16px`,
                      borderRadius: `14px`,
                      border: `1px solid var(--br-linea,#2B2724)`,
                      background: `var(--br-superficie,#161412)`,
                      font: `700 13px var(--fb,Oswald),sans-serif`,
                      color: `var(--br-texto,#F3E9D8)`,
                      cursor: `pointer`,
                      whiteSpace: `nowrap`,
                      transition: `border-color .2s`,
                    },
                    onClick: e.openSports,
                    children: [
                      (0, JSXRuntime.jsx)(`svg`, {
                        style: {
                          stroke: `var(--br-p,#FF5B14)`,
                        },
                        viewBox: `0 0 24 24`,
                        width: `17`,
                        height: `17`,
                        fill: `none`,
                        strokeWidth: `2`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        children: (0, JSXRuntime.jsx)(`path`, {
                          d: `M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18M12 7.5l4 2.9-1.5 4.6h-5L8 10.4zM12 3v4.5M16 10.4l4.3-1.4M14.5 15l2.7 3.7M9.5 15l-2.7 3.7M8 10.4L3.7 9`,
                        }),
                      }),
                      `Deportivas`,
                    ],
                  }),
                })
              : null,
            (0, JSXRuntime.jsxs)(`div`, {
              className: `br0-1`,
              style: resolveStyle(
                `opacity:${e.trigOp ?? ``};transition:opacity .12s ease;display:flex;align-items:center;gap:10px;background:var(--br-superficie,#161412);border:1px solid var(--br-linea,#2B2724);border-radius:12px;padding:10px 12px;cursor:pointer;min-width:${e.searchMin ?? ``};box-sizing:border-box`,
              ),
              id: `searchTrig`,
              onClick: e.openCmd,
              children: [
                (0, JSXRuntime.jsx)(`svg`, {
                  style: {
                    stroke: `var(--br-texto-3,#A89E92)`,
                  },
                  viewBox: `0 0 24 24`,
                  width: `16`,
                  height: `16`,
                  fill: `none`,
                  strokeWidth: `2`,
                  strokeLinecap: `round`,
                  children: (0, JSXRuntime.jsx)(`path`, {
                    d: `M4 11a7 7 0 1 0 14 0a7 7 0 1 0-14 0M20 20l-4-4`,
                  }),
                }),
                e.notNarrow
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            flex: `1`,
                            font: `500 13px var(--fb,Oswald),sans-serif`,
                            color: `var(--br-texto-3,#A89E92)`,
                            whiteSpace: `nowrap`,
                          },
                          children: `Buscar juegos, proveedores…`,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            font: `700 10px var(--fb,Oswald),sans-serif`,
                            color: `var(--br-texto-3,#A89E92)`,
                            border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                            borderRadius: `6px`,
                            padding: `3px 6px`,
                          },
                          children: `⌘K`,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              className: `br0-0`,
              style: {
                height: `44px`,
                flex: `none`,
                display: `flex`,
                alignItems: `center`,
                gap: `8px`,
                padding: `0 13px`,
                borderRadius: `12px`,
                background: `var(--br-superficie,#161412)`,
                border: `1px solid var(--br-linea,#2B2724)`,
                cursor: `pointer`,
                boxSizing: `border-box`,
                transition: `border-color .2s`,
              },
              onClick: e.surprise,
              title: `Sorprendeme: te llevamos a un juego al azar`,
              children: [
                (0, JSXRuntime.jsxs)(`svg`, {
                  style: {
                    stroke: `var(--br-p,#FF5B14)`,
                  },
                  viewBox: `0 0 24 24`,
                  width: `19`,
                  height: `19`,
                  fill: `none`,
                  strokeWidth: `2`,
                  children: [
                    (0, JSXRuntime.jsx)(`rect`, {
                      x: `3`,
                      y: `3`,
                      width: `18`,
                      height: `18`,
                      rx: `4.5`,
                    }),
                    (0, JSXRuntime.jsx)(`circle`, {
                      style: {
                        fill: `var(--br-p,#FF5B14)`,
                      },
                      cx: `8`,
                      cy: `8`,
                      r: `1.5`,
                      stroke: `none`,
                    }),
                    (0, JSXRuntime.jsx)(`circle`, {
                      style: {
                        fill: `var(--br-p,#FF5B14)`,
                      },
                      cx: `16`,
                      cy: `8`,
                      r: `1.5`,
                      stroke: `none`,
                    }),
                    (0, JSXRuntime.jsx)(`circle`, {
                      style: {
                        fill: `var(--br-p,#FF5B14)`,
                      },
                      cx: `12`,
                      cy: `12`,
                      r: `1.5`,
                      stroke: `none`,
                    }),
                    (0, JSXRuntime.jsx)(`circle`, {
                      style: {
                        fill: `var(--br-p,#FF5B14)`,
                      },
                      cx: `8`,
                      cy: `16`,
                      r: `1.5`,
                      stroke: `none`,
                    }),
                    (0, JSXRuntime.jsx)(`circle`, {
                      style: {
                        fill: `var(--br-p,#FF5B14)`,
                      },
                      cx: `16`,
                      cy: `16`,
                      r: `1.5`,
                      stroke: `none`,
                    }),
                  ],
                }),
                e.wide
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsx)(`span`, {
                        style: {
                          font: `700 13px var(--fb,Oswald),sans-serif`,
                          whiteSpace: `nowrap`,
                        },
                        children: `Sorprendeme`,
                      }),
                    })
                  : null,
              ],
            }),
            e.notNarrow
              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                  children: (0, JSXRuntime.jsx)(`div`, {
                    className: `br0-2`,
                    style: {
                      background: `var(--br-p,#FF5B14)`,
                      color: `var(--br-tinta,#121110)`,
                      font: `700 14px var(--fb,Oswald),sans-serif`,
                      padding: `13px 18px`,
                      borderRadius: `12px`,
                      cursor: `pointer`,
                      whiteSpace: `nowrap`,
                    },
                    onClick: e.newReq,
                    children: `Depositar`,
                  }),
                })
              : null,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                position: `relative`,
                flex: `none`,
              },
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `position:relative;width:42px;height:42px;border-radius:50%;background:var(--br-texto,#F3E9D8);color:var(--br-tinta,#121110);font:700 13px var(--fb,Oswald),sans-serif;display:grid;place-items:center;cursor:pointer;box-shadow:0 0 0 ${e.umRing ?? ``} var(--br-p,#FF5B14),0 0 0 ${e.umRing2 ?? ``} rgba(var(--br-p-rgb,255,91,20),.25);transition:box-shadow .3s cubic-bezier(.2,.9,.2,1)`,
                  ),
                  onClick: e.umToggle,
                  children: [
                    `MA`,
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        position: `absolute`,
                        right: `-1px`,
                        bottom: `-1px`,
                        width: `12px`,
                        height: `12px`,
                        borderRadius: `50%`,
                        background: `var(--br-p,#FF5B14)`,
                        border: `2px solid var(--br-fondo,#000000)`,
                      },
                    }),
                  ],
                }),
                e.umOpen
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsxs)(`div`, {
                        style: resolveStyle(
                          `position:absolute;right:0;top:56px;width:${e.umW ?? ``};transform-origin:top right;animation:ucUm .34s cubic-bezier(.2,.9,.25,1.15) both;background:var(--br-tarjeta-2,#141210);border:1px solid var(--br-linea,#2B2724);border-radius:24px;padding:8px;box-sizing:border-box;box-shadow:0 40px 80px -20px rgba(0,0,0,.9),0 0 0 1px rgba(var(--br-p-rgb,255,91,20),.06);display:flex;flex-direction:column;gap:2px;overflow:hidden`,
                        ),
                        children: [
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              position: `relative`,
                              overflow: `hidden`,
                              borderRadius: `18px`,
                              background: `var(--br-texto,#F3E9D8)`,
                              color: `var(--br-tinta,#121110)`,
                              padding: `16px`,
                              display: `flex`,
                              alignItems: `center`,
                              gap: `12px`,
                              marginBottom: `6px`,
                            },
                            children: [
                              e.isoMarca
                                ? null
                                : (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                    children: (0, JSXRuntime.jsxs)(`svg`, {
                                      style: {
                                        position: `absolute`,
                                        right: `-14px`,
                                        bottom: `-24px`,
                                        opacity: `.9`,
                                        fill: `var(--br-p,#FF5B14)`,
                                      },
                                      viewBox: `0 0 100 120`,
                                      height: `96`,
                                      children: [
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                        }),
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                        }),
                                      ],
                                    }),
                                  }),
                              e.isoMarca
                                ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                    children: (0, JSXRuntime.jsx)(`img`, {
                                      style: {
                                        position: `absolute`,
                                        right: `-14px`,
                                        bottom: `-24px`,
                                        opacity: `.9`,
                                        height: `96px`,
                                        width: `80px`,
                                        objectFit: `contain`,
                                      },
                                      src: be(e.isoUrl),
                                      alt: ``,
                                    }),
                                  })
                                : null,
                              (0, JSXRuntime.jsx)(`div`, {
                                style: {
                                  position: `relative`,
                                  width: `48px`,
                                  height: `48px`,
                                  flex: `none`,
                                  borderRadius: `16px`,
                                  background: `var(--br-tinta,#121110)`,
                                  color: `var(--br-p,#FF5B14)`,
                                  display: `grid`,
                                  placeItems: `center`,
                                  font: `700 20px var(--fd,Oswald),sans-serif`,
                                },
                                children: `MA`,
                              }),
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  position: `relative`,
                                  minWidth: `0`,
                                },
                                children: [
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      font: `700 20px/1 var(--fd,Oswald),sans-serif`,
                                      textTransform: `uppercase`,
                                    },
                                    children: `Martina R.`,
                                  }),
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      font: `600 12px var(--fb,Oswald),sans-serif`,
                                      color: `var(--br-inverso-2,#6A5F52)`,
                                      marginTop: `4px`,
                                    },
                                    children: [
                                      `@martina.r · `,
                                      renderContent(e.umBal),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          asArray(e.umItems).map((e, t) =>
                            (0, JSXRuntime.jsx)(
                              React.Fragment,
                              {
                                children: (0, JSXRuntime.jsxs)(`a`, {
                                  className: `br0-3`,
                                  style: resolveStyle(
                                    `display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:14px;text-decoration:none;color:${e?.fg ?? ``};cursor:pointer;border-top:${e?.sep ?? ``};margin-top:${e?.mt ?? ``};animation:ucItem .4s ${e?.dl ?? ``} cubic-bezier(.2,.9,.2,1) both;transition:background .2s`,
                                  ),
                                  href: e?.href,
                                  target: e?.target,
                                  rel: `noopener`,
                                  onClick: e?.go,
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: resolveStyle(
                                        `width:36px;height:36px;flex:none;border-radius:11px;background:${e?.ibg ?? ``};color:${e?.ifg ?? ``};display:grid;place-items:center`,
                                      ),
                                      children: (0, JSXRuntime.jsx)(`svg`, {
                                        viewBox: `0 0 24 24`,
                                        width: `17`,
                                        height: `17`,
                                        fill: `none`,
                                        stroke: `currentColor`,
                                        strokeWidth: `2`,
                                        strokeLinecap: `round`,
                                        strokeLinejoin: `round`,
                                        children: (0, JSXRuntime.jsx)(`path`, {
                                          d: e?.icon,
                                        }),
                                      }),
                                    }),
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        flex: `1`,
                                        minWidth: `0`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            display: `block`,
                                            font: `700 14px var(--fb,Oswald),sans-serif`,
                                          },
                                          children: renderContent(e?.l),
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            display: `block`,
                                            font: `500 12px var(--fb,Oswald),sans-serif`,
                                            color: `var(--br-texto-4,#7D746A)`,
                                            marginTop: `1px`,
                                          },
                                          children: renderContent(e?.s),
                                        }),
                                      ],
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        font: `700 14px var(--fb,Oswald),sans-serif`,
                                        color: `var(--br-tenue,#4A3F36)`,
                                      },
                                      children: renderContent(e?.arr),
                                    }),
                                  ],
                                }),
                              },
                              t,
                            ),
                          ),
                        ],
                      }),
                    })
                  : null,
              ],
            }),
          ],
        }),
        (0, JSXRuntime.jsxs)(`div`, {
          style: resolveStyle(
            `max-width:1440px;margin:0 auto;padding:28px clamp(14px,3vw,40px) ${e.bottomPad ?? ``};display:flex;flex-direction:column;gap:${e.mainGap ?? ``};position:relative;z-index:1`,
          ),
          children: [
            e.mHome
              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                  children: (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      display: `flex`,
                      flexDirection: `column`,
                      gap: `22px`,
                    },
                    children: (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        height: `92px`,
                        perspective: `900px`,
                      },
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `position:absolute;inset:0;transform-style:preserve-3d;transform:rotateX(${e.flipRot ?? ``}) scale(${e.flipScale ?? ``});transition:transform .9s cubic-bezier(.3,1.35,.4,1)`,
                          ),
                          children: [
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `absolute`,
                                inset: `0`,
                                backfaceVisibility: `hidden`,
                                WebkitBackfaceVisibility: `hidden`,
                                borderRadius: `22px`,
                                overflow: `hidden`,
                                display: `flex`,
                                alignItems: `center`,
                                gap: `10px`,
                                padding: `14px 14px 14px 18px`,
                                boxSizing: `border-box`,
                                background: `var(--br-texto,#F3E9D8)`,
                                color: `var(--br-tinta,#121110)`,
                              },
                              children: [
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    flex: `1`,
                                    minWidth: `0`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.goWalletTab,
                                  children: [
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        font: `700 10px var(--fb,Oswald),sans-serif`,
                                        letterSpacing: `.16em`,
                                        color: `var(--br-inverso-2,#6A5F52)`,
                                      },
                                      children: `SALDO REAL`,
                                    }),
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        font: `700 30px/1.05 var(--fd,Oswald),sans-serif`,
                                        fontVariantNumeric: `tabular-nums`,
                                      },
                                      children: renderContent(e.vReal),
                                    }),
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        font: `600 12px var(--fb,Oswald),sans-serif`,
                                        color: `var(--br-inverso-2,#6A5F52)`,
                                        whiteSpace: `nowrap`,
                                        overflow: `hidden`,
                                        textOverflow: `ellipsis`,
                                      },
                                      children: [
                                        `Bono `,
                                        renderContent(e.bonusBal),
                                        ` · se activa en $ 0`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    flex: `none`,
                                    background: `var(--br-tinta,#121110)`,
                                    color: `var(--br-texto,#F3E9D8)`,
                                    borderRadius: `14px`,
                                    padding: `13px 14px`,
                                    font: `700 14px var(--fb,Oswald),sans-serif`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.newReq,
                                  children: `Depositar`,
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    flex: `none`,
                                    width: `46px`,
                                    height: `46px`,
                                    borderRadius: `14px`,
                                    border: `1.5px solid var(--br-tinta,#121110)`,
                                    display: `grid`,
                                    placeItems: `center`,
                                    cursor: `pointer`,
                                    font: `700 18px var(--fb,Oswald),sans-serif`,
                                  },
                                  onClick: e.askRet,
                                  title: `Retirar`,
                                  children: `↑`,
                                }),
                              ],
                            }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `absolute`,
                                inset: `0`,
                                backfaceVisibility: `hidden`,
                                WebkitBackfaceVisibility: `hidden`,
                                borderRadius: `22px`,
                                overflow: `hidden`,
                                display: `flex`,
                                alignItems: `center`,
                                gap: `10px`,
                                padding: `14px 14px 14px 18px`,
                                boxSizing: `border-box`,
                                transform: `rotateX(180deg)`,
                                background: `var(--br-p,#FF5B14)`,
                                color: `var(--br-tinta,#121110)`,
                              },
                              children: [
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    position: `absolute`,
                                    right: `-40px`,
                                    top: `-50px`,
                                    width: `150px`,
                                    height: `150px`,
                                    opacity: `.1`,
                                  },
                                  children: [
                                    e.isoMarca
                                      ? null
                                      : (0, JSXRuntime.jsx)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsxs)(
                                              `svg`,
                                              {
                                                style: {
                                                  fill: `var(--br-tinta,#121110)`,
                                                },
                                                viewBox: `0 0 100 120`,
                                                width: `100%`,
                                                height: `100%`,
                                                children: [
                                                  (0, JSXRuntime.jsx)(`path`, {
                                                    d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                                  }),
                                                  (0, JSXRuntime.jsx)(`path`, {
                                                    d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                                  }),
                                                ],
                                              },
                                            ),
                                          },
                                        ),
                                    e.isoMarca
                                      ? (0, JSXRuntime.jsx)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsx)(
                                              `img`,
                                              {
                                                className: `${e.isoTinta ?? ``}`,
                                                style: {
                                                  width: `100%`,
                                                  height: `100%`,
                                                  objectFit: `contain`,
                                                  display: `block`,
                                                },
                                                src: be(e.isoUrl),
                                                alt: ``,
                                              },
                                            ),
                                          },
                                        )
                                      : null,
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `position:absolute;top:0;bottom:0;left:${e.shineL ?? ``};width:40%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-18deg);transition:${e.shineT ?? ``};pointer-events:none`,
                                  ),
                                }),
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    position: `relative`,
                                    flex: `1`,
                                    minWidth: `0`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.goWalletTab,
                                  children: [
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        alignItems: `center`,
                                        gap: `6px`,
                                        font: `700 10px var(--fb,Oswald),sans-serif`,
                                        letterSpacing: `.16em`,
                                      },
                                      children: [
                                        renderContent(e.pulseDark),
                                        `JUGANDO CON BONO`,
                                      ],
                                    }),
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        font: `700 30px/1.05 var(--fd,Oswald),sans-serif`,
                                        fontVariantNumeric: `tabular-nums`,
                                      },
                                      children: renderContent(e.vBonus),
                                    }),
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        font: `600 12px var(--fb,Oswald),sans-serif`,
                                        whiteSpace: `nowrap`,
                                        overflow: `hidden`,
                                        textOverflow: `ellipsis`,
                                      },
                                      children: `Saldo real $ 0 · no retirable`,
                                    }),
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    position: `relative`,
                                    flex: `none`,
                                    background: `var(--br-tinta,#121110)`,
                                    color: `var(--br-texto,#F3E9D8)`,
                                    borderRadius: `14px`,
                                    padding: `13px 14px`,
                                    font: `700 14px var(--fb,Oswald),sans-serif`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.newReq,
                                  children: `Depositar`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          style: resolveStyle(
                            `position:absolute;left:50%;top:-12px;transform:translate(-50%,${e.bTagY ?? ``}) scale(${e.bTagS ?? ``});opacity:${e.bTagO ?? ``};transition:all .5s cubic-bezier(.3,1.5,.4,1);background:var(--br-tinta,#121110);color:${e.bTagC ?? ``};border:1px solid ${e.bTagC ?? ``};font:700 10px var(--fb,Oswald),sans-serif;letter-spacing:.14em;padding:6px 10px;border-radius:999px;white-space:nowrap;pointer-events:none;z-index:3`,
                          ),
                          children: renderContent(e.bTagL),
                        }),
                      ],
                    }),
                  }),
                })
              : null,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                display: `grid`,
                gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,560px),1fr))`,
                gap: `20px`,
                alignItems: `stretch`,
                scrollMarginTop: `120px`,
              },
              id: `inicio`,
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `position:relative;border-radius:${e.heroR ?? ``};background:var(--br-tarjeta,#131110);border:1px solid var(--br-linea,#2B2724);overflow:hidden;clip-path:inset(0 round ${e.heroR ?? ``});isolation:isolate;display:${e.dHero ?? ``};flex-direction:column;height:${e.heroMinH ?? ``}`,
                  ),
                  onMouseEnter: e.pauseOn,
                  onMouseLeave: e.pauseOff,
                  children: [
                    `
`,
                    renderContent(e.glow),
                    `
`,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        position: `absolute`,
                        left: `0`,
                        right: `0`,
                        top: `64px`,
                        textAlign: `center`,
                        font: `700 clamp(64px,9vw,150px)/0.9 var(--fd,Oswald),sans-serif`,
                        letterSpacing: `.005em`,
                        color: `transparent`,
                        WebkitTextStroke: `1.5px rgba(var(--br-texto-rgb,243,233,216),.1)`,
                        whiteSpace: `nowrap`,
                        pointerEvents: `none`,
                      },
                      children: renderContent(e.heroWord),
                    }),
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        display: `flex`,
                        justifyContent: `space-between`,
                        alignItems: `center`,
                        padding: `22px 24px 0`,
                        gap: `12px`,
                      },
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `10px`,
                          },
                          children: [
                            (0, JSXRuntime.jsxs)(`span`, {
                              style: {
                                font: `700 10px var(--fb,Oswald),sans-serif`,
                                letterSpacing: `.16em`,
                                color: `var(--br-texto-3,#A89E92)`,
                              },
                              children: [
                                `DESTACADOS · `,
                                renderContent(e.heroIdx),
                                ` / 07`,
                              ],
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                display: `flex`,
                                gap: `5px`,
                              },
                              children: asArray(e.heroDots).map((e, t) =>
                                (0, JSXRuntime.jsx)(
                                  React.Fragment,
                                  {
                                    children: (0, JSXRuntime.jsx)(`span`, {
                                      style: resolveStyle(
                                        `width:${e?.w ?? ``};height:4px;border-radius:2px;background:${e?.bg ?? ``};transition:all .35s ease;cursor:pointer`,
                                      ),
                                      onClick: e?.onClick,
                                    }),
                                  },
                                  t,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            gap: `8px`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              className: `br0-0`,
                              style: {
                                width: `44px`,
                                height: `44px`,
                                borderRadius: `14px`,
                                border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                display: `grid`,
                                placeItems: `center`,
                                cursor: `pointer`,
                                background: `rgba(var(--br-hondo-rgb,12,11,10),.6)`,
                              },
                              onClick: e.prev,
                              children: (0, JSXRuntime.jsx)(`svg`, {
                                style: {
                                  stroke: `var(--br-texto,#F3E9D8)`,
                                },
                                viewBox: `0 0 24 24`,
                                width: `18`,
                                height: `18`,
                                fill: `none`,
                                strokeWidth: `2.2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: (0, JSXRuntime.jsx)(`path`, {
                                  d: `M15 5l-7 7 7 7`,
                                }),
                              }),
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              className: `br0-0`,
                              style: {
                                width: `44px`,
                                height: `44px`,
                                borderRadius: `14px`,
                                border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                display: `grid`,
                                placeItems: `center`,
                                cursor: `pointer`,
                                background: `rgba(var(--br-hondo-rgb,12,11,10),.6)`,
                              },
                              onClick: e.next,
                              children: (0, JSXRuntime.jsx)(`svg`, {
                                style: {
                                  stroke: `var(--br-texto,#F3E9D8)`,
                                },
                                viewBox: `0 0 24 24`,
                                width: `18`,
                                height: `18`,
                                fill: `none`,
                                strokeWidth: `2.2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                children: (0, JSXRuntime.jsx)(`path`, {
                                  d: `M9 5l7 7-7 7`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        position: `relative`,
                        flex: `1`,
                        minHeight: `0`,
                        perspective: `1400px`,
                        display: `grid`,
                        placeItems: `center`,
                      },
                      children: (0, JSXRuntime.jsx)(`div`, {
                        style: resolveStyle(
                          `position:relative;width:210px;height:284px;transform-style:preserve-3d;transform:translateZ(-380px) rotateY(${e.ringRot ?? ``});transition:transform .9s cubic-bezier(.2,.8,.2,1)`,
                        ),
                        children: asArray(e.ring).map((t, n) =>
                          (0, JSXRuntime.jsx)(
                            React.Fragment,
                            {
                              children: (0, JSXRuntime.jsxs)(`div`, {
                                style: resolveStyle(
                                  `position:absolute;inset:0;transform:${t?.tf ?? ``};opacity:${t?.op ?? ``};transition:opacity .6s ease;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:24px;clip-path:inset(0 round 24px);background:${t?.bg ?? ``};color:${t?.fg ?? ``};overflow:hidden;cursor:pointer;box-shadow:0 40px 60px -24px rgba(0,0,0,.8);border:1px solid rgba(255,255,255,.1)`,
                                ),
                                onClick: t?.onClick,
                                children: [
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: resolveStyle(
                                      `position:absolute;inset:0;background-image:${t?.pat ?? ``};background-size:${t?.patSize ?? ``}`,
                                    ),
                                  }),
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      position: `absolute`,
                                      right: `-60px`,
                                      top: `-60px`,
                                      width: `170px`,
                                      height: `170px`,
                                      opacity: `.12`,
                                    },
                                    children: [
                                      e.isoMarca
                                        ? null
                                        : (0, JSXRuntime.jsx)(
                                            JSXRuntime.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsxs)(
                                                `svg`,
                                                {
                                                  viewBox: `0 0 100 120`,
                                                  width: `100%`,
                                                  height: `100%`,
                                                  fill: `currentColor`,
                                                  children: [
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                                      },
                                                    ),
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                                      },
                                                    ),
                                                  ],
                                                },
                                              ),
                                            },
                                          ),
                                      e.isoMarca
                                        ? (0, JSXRuntime.jsx)(
                                            JSXRuntime.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsx)(
                                                `img`,
                                                {
                                                  style: {
                                                    width: `100%`,
                                                    height: `100%`,
                                                    objectFit: `contain`,
                                                    display: `block`,
                                                  },
                                                  src: be(e.isoUrl),
                                                  alt: ``,
                                                },
                                              ),
                                            },
                                          )
                                        : null,
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: resolveStyle(
                                      `position:absolute;top:14px;left:14px;z-index:2;font:600 10px var(--fb,Oswald),sans-serif;letter-spacing:.12em;padding:5px 8px;border-radius:6px;background:${t?.badgeBg ?? ``};color:${t?.badgeFg ?? ``}`,
                                    ),
                                    children: renderContent(t?.typeL),
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: resolveStyle(
                                      `display:${t?.artD ?? ``};position:absolute;left:16px;bottom:70px;font:700 92px/0.8 var(--fd,Oswald),sans-serif;letter-spacing:.005em`,
                                    ),
                                    children: renderContent(t?.art),
                                  }),
                                  t?.hasImg
                                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                        children: (0, JSXRuntime.jsx)(`div`, {
                                          style: resolveStyle(
                                            `position:absolute;inset:0;background-image:${t?.imgUrl ?? ``};background-size:cover;background-repeat:no-repeat;background-position:center;background-origin:content-box`,
                                          ),
                                        }),
                                      })
                                    : null,
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: resolveStyle(
                                      `display:${t?.artD ?? ``};position:absolute;left:16px;right:16px;bottom:16px;z-index:2;font:600 14px var(--fb,Oswald),sans-serif;letter-spacing:.02em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${t?.nameC ?? ``}`,
                                    ),
                                    children: renderContent(t?.name),
                                  }),
                                ],
                              }),
                            },
                            n,
                          ),
                        ),
                      }),
                    }),
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;flex:none;display:flex;align-items:center;gap:10px;padding:${e.barPad ?? ``};border-top:1px solid var(--br-linea,#2B2724);background:var(--br-barra,#0E0D0C)`,
                      ),
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            flex: `1`,
                            minWidth: `0`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              style: resolveStyle(
                                `font:700 ${e.heroNameSize ?? ``} var(--fd,Oswald),sans-serif;letter-spacing:.005em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis`,
                              ),
                              children: renderContent(e.heroName),
                            }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                font: `500 13px var(--fb,Oswald),sans-serif`,
                                color: `var(--br-texto-3,#A89E92)`,
                                marginTop: `5px`,
                                whiteSpace: `nowrap`,
                                overflow: `hidden`,
                                textOverflow: `ellipsis`,
                              },
                              children: [
                                renderContent(e.heroVendor),
                                ` · `,
                                renderContent(e.heroType),
                                ` · `,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `600 12px var(--fb,Oswald),sans-serif`,
                                  },
                                  children: renderContent(e.heroCode),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            flex: `none`,
                            width: `48px`,
                            height: `48px`,
                            borderRadius: `14px`,
                            border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                            display: `grid`,
                            placeItems: `center`,
                            fontSize: `18px`,
                            cursor: `pointer`,
                            color: `var(--br-p,#FF5B14)`,
                          },
                          onClick: e.heroFav,
                          children: renderContent(e.heroHeart),
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `br0-4`,
                          style: resolveStyle(
                            `display:${e.demoD ?? ``};flex:none;border:1px solid var(--br-linea-fuerte,#3A3530);border-radius:14px;padding:14px 18px;font:700 14px var(--fb,Oswald),sans-serif;cursor:pointer`,
                          ),
                          onClick: e.heroDemo,
                          children: `Demo`,
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `br0-2`,
                          style: {
                            flex: `none`,
                            background: `var(--br-p,#FF5B14)`,
                            color: `var(--br-tinta,#121110)`,
                            borderRadius: `14px`,
                            padding: `15px 24px`,
                            font: `700 14px var(--fb,Oswald),sans-serif`,
                            cursor: `pointer`,
                          },
                          onClick: e.heroPlay,
                          children: `Jugar`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `display:${e.dWallet ?? ``};flex-direction:column;gap:16px;scroll-margin-top:120px;min-width:0`,
                  ),
                  id: `wallet`,
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `display:flex;flex-direction:${e.secDir ?? ``};align-items:${e.secAlign ?? ``};justify-content:space-between;gap:${e.secGap ?? ``};flex-wrap:wrap`,
                      ),
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          children: [
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                font: `700 10px var(--fb,Oswald),sans-serif`,
                                letterSpacing: `.18em`,
                                color: `var(--br-texto-3,#A89E92)`,
                              },
                              children: [
                                `BÓVEDA · `,
                                renderContent(e.vFaceN),
                                ` / 03`,
                              ],
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                font: `700 24px/1 var(--fd,Oswald),sans-serif`,
                                textTransform: `uppercase`,
                                marginTop: `6px`,
                              },
                              children: `Tu cartera`,
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `position:relative;display:grid;grid-template-columns:repeat(3,1fr);background:var(--br-superficie,#161412);border:1px solid var(--br-linea,#2B2724);border-radius:14px;padding:4px;width:${e.segW3 ?? ``};max-width:100%;box-sizing:border-box`,
                          ),
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              style: resolveStyle(
                                `position:absolute;top:4px;bottom:4px;left:${e.vSeg ?? ``};width:calc((100% - 8px) / 3);border-radius:10px;background:var(--br-p,#FF5B14);transition:left .45s cubic-bezier(.2,.8,.2,1)`,
                              ),
                            }),
                            asArray(e.vTabs).map((e, t) =>
                              (0, JSXRuntime.jsx)(
                                React.Fragment,
                                {
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    style: resolveStyle(
                                      `position:relative;text-align:center;padding:10px 0;font:700 13px var(--fb,Oswald),sans-serif;color:${e?.fg ?? ``};cursor:pointer;transition:color .3s`,
                                    ),
                                    onClick: e?.onClick,
                                    children: renderContent(e?.l),
                                  }),
                                },
                                t,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `position:relative;height:${e.vaultH ?? ``};perspective:1500px;touch-action:pan-y;cursor:grab`,
                      ),
                      ref: e.vaultRef,
                      onMouseMove: e.vTilt,
                      onMouseLeave: e.vUntilt,
                      onPointerDown: e.vDown,
                      onPointerUp: e.vUp,
                      children: [
                        (0, JSXRuntime.jsx)(`div`, {
                          style: resolveStyle(
                            `position:absolute;left:10%;right:10%;bottom:-18px;height:44px;border-radius:50%;background:radial-gradient(ellipse at center,${e.vShadow ?? ``},transparent 70%);filter:blur(14px);transition:background .6s`,
                          ),
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            position: `absolute`,
                            inset: `0`,
                            transformStyle: `preserve-3d`,
                            transform: `rotateX(var(--vx,0deg)) rotateY(var(--vy,0deg))`,
                            transition: `transform .25s ease-out`,
                          },
                          "data-vtilt": `1`,
                          children: (0, JSXRuntime.jsxs)(`div`, {
                            style: resolveStyle(
                              `position:absolute;inset:0;transform-style:preserve-3d;transform:translateZ(${e.vDepthNeg ?? ``}) rotateY(${e.vRot ?? ``});transition:transform 1.05s cubic-bezier(.2,.8,.2,1)`,
                            ),
                            children: [
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: resolveStyle(
                                  `position:absolute;inset:0;transform:rotateY(0deg) translateZ(${e.vDepth ?? ``});backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:26px;overflow:hidden;background:var(--br-texto,#F3E9D8);color:var(--br-tinta,#121110);padding:20px 22px;box-sizing:border-box;display:flex;flex-direction:column;gap:10px;`,
                                ),
                                children: [
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      position: `absolute`,
                                      right: `-70px`,
                                      top: `-70px`,
                                      width: `240px`,
                                      height: `240px`,
                                      opacity: `.12`,
                                    },
                                    children: [
                                      e.isoMarca
                                        ? null
                                        : (0, JSXRuntime.jsx)(
                                            JSXRuntime.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsxs)(
                                                `svg`,
                                                {
                                                  style: {
                                                    fill: `var(--br-p,#FF5B14)`,
                                                  },
                                                  viewBox: `0 0 100 120`,
                                                  width: `100%`,
                                                  height: `100%`,
                                                  children: [
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                                      },
                                                    ),
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                                      },
                                                    ),
                                                  ],
                                                },
                                              ),
                                            },
                                          ),
                                      e.isoMarca
                                        ? (0, JSXRuntime.jsx)(
                                            JSXRuntime.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsx)(
                                                `img`,
                                                {
                                                  style: {
                                                    width: `100%`,
                                                    height: `100%`,
                                                    objectFit: `contain`,
                                                    display: `block`,
                                                  },
                                                  src: be(e.isoUrl),
                                                  alt: ``,
                                                },
                                              ),
                                            },
                                          )
                                        : null,
                                    ],
                                  }),
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      position: `relative`,
                                      display: `flex`,
                                      justifyContent: `space-between`,
                                      alignItems: `center`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          font: `700 10px var(--fb,Oswald),sans-serif`,
                                          letterSpacing: `.18em`,
                                          color: `var(--br-inverso-2,#6A5F52)`,
                                        },
                                        children: `SALDO REAL · ARS`,
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          background: `var(--br-tinta,#121110)`,
                                          color: `var(--br-texto,#F3E9D8)`,
                                          font: `700 10px var(--fb,Oswald),sans-serif`,
                                          letterSpacing: `.1em`,
                                          padding: `5px 9px`,
                                          borderRadius: `7px`,
                                        },
                                        children: `RETIRABLE`,
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      position: `relative`,
                                      font: `700 clamp(44px,4.8vw,70px)/0.9 var(--fd,Oswald),sans-serif`,
                                      letterSpacing: `-.01em`,
                                      fontVariantNumeric: `tabular-nums`,
                                    },
                                    children: renderContent(e.vReal),
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      flex: `1`,
                                    },
                                  }),
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      position: `relative`,
                                      display: `flex`,
                                      gap: `8px`,
                                      alignItems: `center`,
                                      flexWrap: `wrap`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          background: `var(--br-tinta,#121110)`,
                                          color: `var(--br-texto,#F3E9D8)`,
                                          borderRadius: `12px`,
                                          padding: `13px 18px`,
                                          font: `700 14px var(--fb,Oswald),sans-serif`,
                                          cursor: `pointer`,
                                        },
                                        onClick: e.newReq,
                                        children: `Pedir depósito`,
                                      }),
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          border: `1.5px solid var(--br-tinta,#121110)`,
                                          borderRadius: `12px`,
                                          padding: `12px 16px`,
                                          font: `700 14px var(--fb,Oswald),sans-serif`,
                                          cursor: `pointer`,
                                        },
                                        onClick: e.askRet,
                                        children: `Retirar`,
                                      }),
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          flex: `1`,
                                        },
                                      }),
                                      (0, JSXRuntime.jsxs)(`span`, {
                                        style: {
                                          font: `600 12px var(--fb,Oswald),sans-serif`,
                                          color: `var(--br-inverso-2,#6A5F52)`,
                                          cursor: `pointer`,
                                        },
                                        onClick: e.toBonusFace,
                                        children: [
                                          `Bono `,
                                          renderContent(e.bonusBal),
                                          ` →`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      position: `absolute`,
                                      inset: `0`,
                                      pointerEvents: `none`,
                                      background: `radial-gradient(circle at var(--gx,50%) var(--gy,30%),rgba(255,255,255,.35),transparent 50%)`,
                                      opacity: `var(--vg,0)`,
                                      transition: `opacity .3s`,
                                      mixBlendMode: `soft-light`,
                                    },
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: resolveStyle(
                                  `position:absolute;inset:0;transform:rotateY(120deg) translateZ(${e.vDepth ?? ``});backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:26px;overflow:hidden;background:var(--br-p,#FF5B14);color:var(--br-tinta,#121110);padding:20px 22px;box-sizing:border-box;display:flex;flex-direction:column;gap:10px;`,
                                ),
                                children: [
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      position: `absolute`,
                                      left: `-90px`,
                                      bottom: `-120px`,
                                      width: `300px`,
                                      height: `300px`,
                                      opacity: `.1`,
                                    },
                                    children: [
                                      e.isoMarca
                                        ? null
                                        : (0, JSXRuntime.jsx)(
                                            JSXRuntime.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsxs)(
                                                `svg`,
                                                {
                                                  style: {
                                                    fill: `var(--br-tinta,#121110)`,
                                                  },
                                                  viewBox: `0 0 100 120`,
                                                  width: `100%`,
                                                  height: `100%`,
                                                  children: [
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                                      },
                                                    ),
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                                      },
                                                    ),
                                                  ],
                                                },
                                              ),
                                            },
                                          ),
                                      e.isoMarca
                                        ? (0, JSXRuntime.jsx)(
                                            JSXRuntime.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsx)(
                                                `img`,
                                                {
                                                  className: `${e.isoTinta ?? ``}`,
                                                  style: {
                                                    width: `100%`,
                                                    height: `100%`,
                                                    objectFit: `contain`,
                                                    display: `block`,
                                                  },
                                                  src: be(e.isoUrl),
                                                  alt: ``,
                                                },
                                              ),
                                            },
                                          )
                                        : null,
                                    ],
                                  }),
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      position: `relative`,
                                      display: `flex`,
                                      justifyContent: `space-between`,
                                      alignItems: `center`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          font: `700 10px var(--fb,Oswald),sans-serif`,
                                          letterSpacing: `.18em`,
                                          color: `var(--br-tinta,#121110)`,
                                        },
                                        children: `MI BONO`,
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          background: `var(--br-tinta,#121110)`,
                                          color: `var(--br-texto,#F3E9D8)`,
                                          font: `700 10px var(--fb,Oswald),sans-serif`,
                                          letterSpacing: `.1em`,
                                          padding: `5px 9px`,
                                          borderRadius: `7px`,
                                        },
                                        children: renderContent(e.bStatus),
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      position: `relative`,
                                      font: `700 clamp(44px,4.8vw,70px)/0.9 var(--fd,Oswald),sans-serif`,
                                      letterSpacing: `-.01em`,
                                      fontVariantNumeric: `tabular-nums`,
                                    },
                                    children: renderContent(e.vBonus),
                                  }),
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      position: `relative`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      gap: `8px`,
                                      marginTop: `4px`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsxs)(`div`, {
                                        style: {
                                          display: `flex`,
                                          justifyContent: `space-between`,
                                          font: `700 11px var(--fb,Oswald),sans-serif`,
                                        },
                                        children: [
                                          (0, JSXRuntime.jsx)(`span`, {
                                            children: `▼ SE ACTIVA EN $ 0`,
                                          }),
                                          (0, JSXRuntime.jsxs)(`span`, {
                                            children: [
                                              `SALDO REAL `,
                                              renderContent(e.realBal),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          position: `relative`,
                                          height: `14px`,
                                          borderRadius: `7px`,
                                          background: `rgba(var(--br-tinta-rgb,18,17,16),.18)`,
                                          overflow: `hidden`,
                                        },
                                        children: (0, JSXRuntime.jsx)(`div`, {
                                          style: resolveStyle(
                                            `position:absolute;left:0;top:0;bottom:0;width:${e.trackPct ?? ``};border-radius:7px;background:var(--br-tinta,#121110);transition:width .7s cubic-bezier(.2,.8,.2,1)`,
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      position: `relative`,
                                      font: `600 14px/1.45 var(--fb,Oswald),sans-serif`,
                                      maxWidth: `420px`,
                                    },
                                    children: renderContent(e.bonusNote),
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      flex: `1`,
                                    },
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      position: `relative`,
                                      font: `600 11px var(--fb,Oswald),sans-serif`,
                                      letterSpacing: `.06em`,
                                    },
                                    children: `NO RETIRABLE · SE USA AUTOMÁTICAMENTE`,
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      position: `absolute`,
                                      inset: `0`,
                                      pointerEvents: `none`,
                                      background: `radial-gradient(circle at var(--gx,50%) var(--gy,30%),rgba(255,255,255,.35),transparent 50%)`,
                                      opacity: `var(--vg,0)`,
                                      transition: `opacity .3s`,
                                      mixBlendMode: `soft-light`,
                                    },
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: resolveStyle(
                                  `position:absolute;inset:0;transform:rotateY(240deg) translateZ(${e.vDepth ?? ``});backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:26px;overflow:hidden;background:var(--br-superficie-3,#1E1B18);color:var(--br-texto,#F3E9D8);padding:20px 22px;box-sizing:border-box;display:flex;flex-direction:column;gap:10px;border:1px solid var(--br-linea,#2B2724);`,
                                ),
                                children: [
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      display: `flex`,
                                      justifyContent: `space-between`,
                                      alignItems: `center`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsxs)(`span`, {
                                        style: {
                                          font: `700 10px var(--fb,Oswald),sans-serif`,
                                          letterSpacing: `.18em`,
                                          color: `var(--br-texto-3,#A89E92)`,
                                        },
                                        children: [
                                          `SOLICITUD `,
                                          renderContent(e.reqId),
                                        ],
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          font: `700 12px var(--fb,Oswald),sans-serif`,
                                          color: `var(--br-texto-3,#A89E92)`,
                                        },
                                        children: renderContent(e.reqTypeL),
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      font: `700 clamp(40px,4.4vw,64px)/0.9 var(--fd,Oswald),sans-serif`,
                                      fontVariantNumeric: `tabular-nums`,
                                    },
                                    children: renderContent(e.reqAmt),
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      display: `grid`,
                                      gridTemplateColumns: `repeat(3,1fr)`,
                                      gap: `10px`,
                                      marginTop: `6px`,
                                    },
                                    children: asArray(e.reqSteps).map((t, n) =>
                                      (0, JSXRuntime.jsx)(
                                        React.Fragment,
                                        {
                                          children: (0, JSXRuntime.jsxs)(
                                            `div`,
                                            {
                                              style: {
                                                display: `flex`,
                                                flexDirection: `column`,
                                                gap: `8px`,
                                              },
                                              children: [
                                                (0, JSXRuntime.jsxs)(`div`, {
                                                  style: {
                                                    display: `flex`,
                                                    alignItems: `center`,
                                                    gap: `6px`,
                                                  },
                                                  children: [
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: resolveStyle(
                                                          `width:26px;height:26px;flex:none;border-radius:50%;background:${t?.bg ?? ``};border:2px solid ${t?.bd ?? ``};color:var(--br-tinta,#121110);display:grid;place-items:center;font:700 12px var(--fb,Oswald),sans-serif;box-sizing:border-box;transition:all .3s`,
                                                        ),
                                                        children: renderContent(
                                                          t?.mark,
                                                        ),
                                                      },
                                                    ),
                                                    (0, JSXRuntime.jsx)(
                                                      `span`,
                                                      {
                                                        style: resolveStyle(
                                                          `flex:1;height:2px;background:${t?.line ?? ``};display:${t?.lineD ?? ``};transition:background .3s`,
                                                        ),
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: resolveStyle(
                                                    `font:700 14px var(--fb,Oswald),sans-serif;color:${t?.fg ?? ``}`,
                                                  ),
                                                  children: renderContent(t?.l),
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: resolveStyle(
                                                    `display:${e.stSubD ?? ``};font:500 11px/1.35 var(--fb,Oswald),sans-serif;color:var(--br-texto-3,#A89E92)`,
                                                  ),
                                                  children: renderContent(t?.s),
                                                }),
                                              ],
                                            },
                                          ),
                                        },
                                        n,
                                      ),
                                    ),
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      flex: `1`,
                                    },
                                  }),
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      display: `flex`,
                                      justifyContent: `space-between`,
                                      alignItems: `center`,
                                      gap: `10px`,
                                      flexWrap: `wrap`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          font: `500 12px/1.45 var(--fb,Oswald),sans-serif`,
                                          color: `var(--br-texto-3,#A89E92)`,
                                          maxWidth: `320px`,
                                          whiteSpace: `nowrap`,
                                          overflow: `hidden`,
                                          textOverflow: `ellipsis`,
                                        },
                                        children: renderContent(e.reqNoteL),
                                      }),
                                      (0, JSXRuntime.jsxs)(`div`, {
                                        style: {
                                          display: `flex`,
                                          gap: `8px`,
                                        },
                                        children: [
                                          (0, JSXRuntime.jsx)(`a`, {
                                            style: {
                                              border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                              color: `var(--br-texto,#F3E9D8)`,
                                              textDecoration: `none`,
                                              borderRadius: `12px`,
                                              padding: `12px 14px`,
                                              font: `700 13px var(--fb,Oswald),sans-serif`,
                                            },
                                            href: e.waReq,
                                            target: `_blank`,
                                            rel: `noopener`,
                                            children: `WhatsApp`,
                                          }),
                                          (0, JSXRuntime.jsx)(`div`, {
                                            style: {
                                              background: `var(--br-p,#FF5B14)`,
                                              color: `var(--br-tinta,#121110)`,
                                              borderRadius: `12px`,
                                              padding: `13px 18px`,
                                              font: `700 14px var(--fb,Oswald),sans-serif`,
                                              cursor: `pointer`,
                                            },
                                            onClick: e.newReq,
                                            children: `Nueva solicitud`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      position: `absolute`,
                                      inset: `0`,
                                      pointerEvents: `none`,
                                      background: `radial-gradient(circle at var(--gx,50%) var(--gy,30%),rgba(255,255,255,.35),transparent 50%)`,
                                      opacity: `var(--vg,0)`,
                                      transition: `opacity .3s`,
                                      mixBlendMode: `soft-light`,
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        gap: `10px`,
                        alignItems: `center`,
                        flexWrap: `wrap`,
                        marginTop: `6px`,
                      },
                      children: [
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `br0-0`,
                          style: {
                            width: `44px`,
                            height: `44px`,
                            borderRadius: `14px`,
                            border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                            display: `grid`,
                            placeItems: `center`,
                            cursor: `pointer`,
                          },
                          onClick: e.vPrev,
                          children: (0, JSXRuntime.jsx)(`svg`, {
                            style: {
                              stroke: `var(--br-texto,#F3E9D8)`,
                            },
                            viewBox: `0 0 24 24`,
                            width: `18`,
                            height: `18`,
                            fill: `none`,
                            strokeWidth: `2.2`,
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            children: (0, JSXRuntime.jsx)(`path`, {
                              d: `M15 5l-7 7 7 7`,
                            }),
                          }),
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          className: `br0-0`,
                          style: {
                            width: `44px`,
                            height: `44px`,
                            borderRadius: `14px`,
                            border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                            display: `grid`,
                            placeItems: `center`,
                            cursor: `pointer`,
                          },
                          onClick: e.vNext,
                          children: (0, JSXRuntime.jsx)(`svg`, {
                            style: {
                              stroke: `var(--br-texto,#F3E9D8)`,
                            },
                            viewBox: `0 0 24 24`,
                            width: `18`,
                            height: `18`,
                            fill: `none`,
                            strokeWidth: `2.2`,
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            children: (0, JSXRuntime.jsx)(`path`, {
                              d: `M9 5l7 7-7 7`,
                            }),
                          }),
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            flex: `1`,
                            minWidth: `220px`,
                            display: `flex`,
                            alignItems: `center`,
                            gap: `12px`,
                            background: `var(--br-superficie,#161412)`,
                            border: `1px solid var(--br-linea,#2B2724)`,
                            borderRadius: `14px`,
                            padding: `11px 14px`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                font: `700 9px var(--fb,Oswald),sans-serif`,
                                letterSpacing: `.16em`,
                                color: `var(--br-texto-4,#7D746A)`,
                              },
                              children: `PROTOTIPO · SALDO`,
                            }),
                            (0, JSXRuntime.jsx)(`input`, {
                              style: {
                                flex: `1`,
                                minWidth: `100px`,
                                accentColor: `var(--br-p,#FF5B14)`,
                              },
                              type: `range`,
                              min: `0`,
                              max: `20000`,
                              step: `500`,
                              value: ge(e.bal),
                              onChange: e.onBal,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                font: `700 13px var(--fb,Oswald),sans-serif`,
                                minWidth: `70px`,
                                textAlign: `right`,
                              },
                              children: renderContent(e.realBal),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.mHome
              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                  children: (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      display: `flex`,
                      flexDirection: `column`,
                      gap: `22px`,
                    },
                    children: [
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          display: `flex`,
                          flexDirection: `column`,
                          gap: `12px`,
                        },
                        children: [
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              display: `flex`,
                              justifyContent: `space-between`,
                              alignItems: `baseline`,
                            },
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  font: `700 22px var(--fd,Oswald),sans-serif`,
                                  textTransform: `uppercase`,
                                },
                                children: `Populares`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  font: `700 13px var(--fb,Oswald),sans-serif`,
                                  color: `var(--br-p-claro,#FF8A4C)`,
                                  cursor: `pointer`,
                                },
                                onClick: e.goCasinoTab,
                                children: `Ver todo →`,
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              display: `flex`,
                              gap: `12px`,
                              overflowX: `auto`,
                              scrollbarWidth: `none`,
                              scrollSnapType: `x mandatory`,
                              margin: `0 -14px`,
                              padding: `0 14px 4px`,
                            },
                            children: asArray(e.popRow).map((e, t) =>
                              (0, JSXRuntime.jsx)(
                                React.Fragment,
                                {
                                  children: (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      flex: `none`,
                                      width: `118px`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      gap: `6px`,
                                      scrollSnapAlign: `start`,
                                      cursor: `pointer`,
                                    },
                                    onClick: e?.play,
                                    children: [
                                      (0, JSXRuntime.jsxs)(`div`, {
                                        style: resolveStyle(
                                          `position:relative;width:118px;height:157px;border-radius:16px;overflow:hidden;background:${e?.bg ?? ``};color:${e?.fg ?? ``};display:flex;align-items:flex-end;padding:10px;box-sizing:border-box;border:1px solid rgba(255,255,255,.08)`,
                                        ),
                                        children: [
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              font: `700 40px/0.85 var(--fd,Oswald),sans-serif`,
                                            },
                                            children: renderContent(e?.art),
                                          }),
                                          e?.hasImg
                                            ? (0, JSXRuntime.jsx)(
                                                JSXRuntime.Fragment,
                                                {
                                                  children: (0, JSXRuntime.jsx)(
                                                    `div`,
                                                    {
                                                      style: resolveStyle(
                                                        `position:absolute;inset:0;background-image:${e?.imgUrl ?? ``};background-size:cover;background-position:center`,
                                                      ),
                                                    },
                                                  ),
                                                },
                                              )
                                            : null,
                                        ],
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          font: `600 12px var(--fb,Oswald),sans-serif`,
                                          whiteSpace: `nowrap`,
                                          overflow: `hidden`,
                                          textOverflow: `ellipsis`,
                                        },
                                        children: renderContent(e?.name),
                                      }),
                                    ],
                                  }),
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          display: `flex`,
                          flexDirection: `column`,
                          gap: `12px`,
                        },
                        children: [
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              display: `flex`,
                              justifyContent: `space-between`,
                              alignItems: `baseline`,
                            },
                            children: [
                              (0, JSXRuntime.jsxs)(`span`, {
                                style: {
                                  display: `flex`,
                                  alignItems: `center`,
                                  gap: `8px`,
                                  font: `700 22px var(--fd,Oswald),sans-serif`,
                                  textTransform: `uppercase`,
                                },
                                children: [renderContent(e.pulse), `En vivo`],
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  font: `700 13px var(--fb,Oswald),sans-serif`,
                                  color: `var(--br-p-claro,#FF8A4C)`,
                                  cursor: `pointer`,
                                },
                                onClick: e.goLiveTab,
                                children: `Ver mesas →`,
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              display: `flex`,
                              gap: `12px`,
                              overflowX: `auto`,
                              scrollbarWidth: `none`,
                              scrollSnapType: `x mandatory`,
                              margin: `0 -14px`,
                              padding: `0 14px 4px`,
                            },
                            children: asArray(e.liveRow).map((e, t) =>
                              (0, JSXRuntime.jsx)(
                                React.Fragment,
                                {
                                  children: (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      flex: `none`,
                                      width: `118px`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      gap: `6px`,
                                      scrollSnapAlign: `start`,
                                      cursor: `pointer`,
                                    },
                                    onClick: e?.play,
                                    children: [
                                      (0, JSXRuntime.jsxs)(`div`, {
                                        style: resolveStyle(
                                          `position:relative;width:118px;height:157px;border-radius:16px;overflow:hidden;background:${e?.bg ?? ``};color:${e?.fg ?? ``};display:flex;align-items:flex-end;padding:10px;box-sizing:border-box;border:1px solid rgba(255,255,255,.08)`,
                                        ),
                                        children: [
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              font: `700 40px/0.85 var(--fd,Oswald),sans-serif`,
                                            },
                                            children: renderContent(e?.art),
                                          }),
                                          e?.hasImg
                                            ? (0, JSXRuntime.jsx)(
                                                JSXRuntime.Fragment,
                                                {
                                                  children: (0, JSXRuntime.jsx)(
                                                    `div`,
                                                    {
                                                      style: resolveStyle(
                                                        `position:absolute;inset:0;background-image:${e?.imgUrl ?? ``};background-size:cover;background-position:center`,
                                                      ),
                                                    },
                                                  ),
                                                },
                                              )
                                            : null,
                                        ],
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          font: `600 12px var(--fb,Oswald),sans-serif`,
                                          whiteSpace: `nowrap`,
                                          overflow: `hidden`,
                                          textOverflow: `ellipsis`,
                                        },
                                        children: renderContent(e?.name),
                                      }),
                                    ],
                                  }),
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : null,
            (0, JSXRuntime.jsxs)(`div`, {
              style: resolveStyle(
                `display:${e.dCat ?? ``};flex-direction:column;gap:18px;scroll-margin-top:120px`,
              ),
              id: `catalogo`,
              children: [
                e.slotsPg
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          position: `relative`,
                          zIndex: `30`,
                          display: `flex`,
                          flexDirection: `column`,
                          gap: `16px`,
                          animation: `ucRise .45s cubic-bezier(.2,.9,.2,1) both`,
                        },
                        children: [
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              display: `flex`,
                              alignItems: `center`,
                              gap: `8px`,
                              font: `600 13px var(--fb,Oswald),sans-serif`,
                              color: `var(--br-texto-3,#A89E92)`,
                            },
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                className: `br0-5`,
                                style: {
                                  cursor: `pointer`,
                                },
                                onClick: e.goHomePg,
                                children: `Inicio`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  color: `var(--br-tenue,#4A3F36)`,
                                },
                                children: `/`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  color: `var(--br-texto,#F3E9D8)`,
                                },
                                children: renderContent(e.pgTitle),
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              display: `flex`,
                              alignItems: `flex-end`,
                              justifyContent: `space-between`,
                              gap: `14px`,
                              flexWrap: `wrap`,
                            },
                            children: [
                              (0, JSXRuntime.jsxs)(`div`, {
                                children: [
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      font: `700 10px var(--fb,Oswald),sans-serif`,
                                      letterSpacing: `.16em`,
                                      color: `var(--br-p-claro,#FF8A4C)`,
                                    },
                                    children: renderContent(e.catCount),
                                  }),
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      font: `700 clamp(40px,5vw,72px)/0.95 var(--fd,Oswald),sans-serif`,
                                      textTransform: `uppercase`,
                                      marginTop: `6px`,
                                    },
                                    children: renderContent(e.pgTitle),
                                  }),
                                ],
                              }),
                              e.hasActiveF
                                ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                    children: (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        font: `700 13px var(--fb,Oswald),sans-serif`,
                                        color: `var(--br-p-claro,#FF8A4C)`,
                                        cursor: `pointer`,
                                        textDecoration: `underline`,
                                        textUnderlineOffset: `3px`,
                                      },
                                      onClick: e.clearF,
                                      children: [
                                        `Limpiar filtros (`,
                                        renderContent(e.activeFN),
                                        `)`,
                                      ],
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              display: `flex`,
                              gap: `10px`,
                              alignItems: `center`,
                              flexWrap: `wrap`,
                            },
                            children: [
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: resolveStyle(
                                  `flex:1 1 280px;min-width:0;display:flex;align-items:center;gap:10px;background:var(--br-superficie,#161412);border:1px solid ${e.sqBd ?? ``};border-radius:14px;padding:0 8px 0 14px;height:50px;box-sizing:border-box;color:var(--br-texto-3,#A89E92);transition:border-color .2s`,
                                ),
                                children: [
                                  (0, JSXRuntime.jsxs)(`svg`, {
                                    viewBox: `0 0 24 24`,
                                    width: `18`,
                                    height: `18`,
                                    fill: `none`,
                                    stroke: `currentColor`,
                                    strokeWidth: `2`,
                                    strokeLinecap: `round`,
                                    children: [
                                      (0, JSXRuntime.jsx)(`circle`, {
                                        cx: `11`,
                                        cy: `11`,
                                        r: `7`,
                                      }),
                                      (0, JSXRuntime.jsx)(`path`, {
                                        d: `M20 20l-3.5-3.5`,
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`input`, {
                                    style: {
                                      flex: `1`,
                                      minWidth: `0`,
                                      background: `transparent`,
                                      border: `0`,
                                      outline: `none`,
                                      color: `var(--br-texto,#F3E9D8)`,
                                      font: `500 15px var(--fb,Oswald),sans-serif`,
                                    },
                                    value: ge(e.slotQ),
                                    onChange: e.onSlotQ,
                                    placeholder: e.pgPh,
                                  }),
                                  e.hasSlotQ
                                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                        children: (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            width: `32px`,
                                            height: `32px`,
                                            flex: `none`,
                                            borderRadius: `10px`,
                                            background: `var(--br-linea,#2B2724)`,
                                            color: `var(--br-texto,#F3E9D8)`,
                                            display: `grid`,
                                            placeItems: `center`,
                                            cursor: `pointer`,
                                            font: `700 14px var(--fb,Oswald),sans-serif`,
                                          },
                                          onClick: e.clearSlotQ,
                                          children: `×`,
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: resolveStyle(
                                  `height:50px;flex:none;display:flex;align-items:center;gap:8px;padding:0 16px;border-radius:14px;border:1px solid ${e.favBd ?? ``};background:${e.favBg ?? ``};color:${e.favFg ?? ``};font:700 13px var(--fb,Oswald),sans-serif;cursor:pointer;box-sizing:border-box;transition:all .2s`,
                                ),
                                onClick: e.toggleFavOnly,
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      fontSize: `15px`,
                                    },
                                    children: renderContent(e.favIc),
                                  }),
                                  `Favoritos`,
                                ],
                              }),
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  position: `relative`,
                                  flex: `none`,
                                },
                                children: [
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      height: `50px`,
                                      boxSizing: `border-box`,
                                      display: `flex`,
                                      alignItems: `center`,
                                      gap: `8px`,
                                      background: `var(--br-superficie,#161412)`,
                                      border: `1px solid var(--br-linea,#2B2724)`,
                                      borderRadius: `14px`,
                                      padding: `0 14px`,
                                      font: `600 13px var(--fb,Oswald),sans-serif`,
                                      color: `var(--br-texto-3,#A89E92)`,
                                      cursor: `pointer`,
                                      whiteSpace: `nowrap`,
                                    },
                                    onClick: e.toggleSort,
                                    children: [
                                      `Orden: `,
                                      (0, JSXRuntime.jsx)(`b`, {
                                        style: {
                                          color: `var(--br-texto,#F3E9D8)`,
                                        },
                                        children: renderContent(e.sortL),
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: resolveStyle(
                                          `transform:rotate(${e.sortRot ?? ``});transition:transform .2s;display:inline-block`,
                                        ),
                                        children: `▾`,
                                      }),
                                    ],
                                  }),
                                  e.sortOpen
                                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                        children: (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            position: `absolute`,
                                            right: `0`,
                                            top: `calc(100% + 8px)`,
                                            zIndex: `20`,
                                            background: `var(--br-superficie-3,#1E1B18)`,
                                            border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                            borderRadius: `14px`,
                                            padding: `6px`,
                                            minWidth: `200px`,
                                            boxShadow: `0 24px 48px -12px rgba(0,0,0,.8)`,
                                          },
                                          children: asArray(e.sorts).map(
                                            (e, t) =>
                                              (0, JSXRuntime.jsx)(
                                                React.Fragment,
                                                {
                                                  children: (0,
                                                  JSXRuntime.jsxs)(`div`, {
                                                    className: `br0-6`,
                                                    style: resolveStyle(
                                                      `display:flex;justify-content:space-between;padding:10px 12px;border-radius:10px;font:700 13px var(--fb,Oswald),sans-serif;cursor:pointer;background:${e?.bg ?? ``}`,
                                                    ),
                                                    onClick: e?.onClick,
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          children:
                                                            renderContent(e?.l),
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            color: `var(--br-p-linea,#FF5B14)`,
                                                          },
                                                          children:
                                                            renderContent(
                                                              e?.mark,
                                                            ),
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                },
                                                t,
                                              ),
                                          ),
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                              (0, JSXRuntime.jsx)(`div`, {
                                style: resolveStyle(
                                  `display:${e.viewD ?? ``};background:var(--br-superficie,#161412);border:1px solid var(--br-linea,#2B2724);border-radius:14px;padding:4px;height:50px;box-sizing:border-box;align-items:center`,
                                ),
                                children: asArray(e.views).map((e, t) =>
                                  (0, JSXRuntime.jsx)(
                                    React.Fragment,
                                    {
                                      children: (0, JSXRuntime.jsx)(`div`, {
                                        style: resolveStyle(
                                          `width:40px;height:40px;border-radius:10px;display:grid;place-items:center;background:${e?.bg ?? ``};cursor:pointer`,
                                        ),
                                        onClick: e?.onClick,
                                        children: (0, JSXRuntime.jsx)(`svg`, {
                                          style: {
                                            stroke: e?.fg,
                                          },
                                          viewBox: `0 0 24 24`,
                                          width: `17`,
                                          height: `17`,
                                          fill: `none`,
                                          stroke: e?.fg,
                                          strokeWidth: `2`,
                                          strokeLinecap: `round`,
                                          children: (0, JSXRuntime.jsx)(
                                            `path`,
                                            {
                                              d: e?.icon,
                                            },
                                          ),
                                        }),
                                      }),
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              font: `700 10px var(--fb,Oswald),sans-serif`,
                              letterSpacing: `.16em`,
                              color: `var(--br-texto-4,#7D746A)`,
                            },
                            children: `PROVEEDOR`,
                          }),
                        ],
                      }),
                    })
                  : null,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `position:relative;z-index:30;display:${e.catHeadD ?? ``};flex-direction:${e.secDir ?? ``};align-items:${e.secAlign ?? ``};justify-content:space-between;gap:${e.secGap ?? ``};flex-wrap:wrap`,
                  ),
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            font: `700 10px var(--fb,Oswald),sans-serif`,
                            letterSpacing: `.16em`,
                            color: `var(--br-texto-3,#A89E92)`,
                          },
                          children: [`CATÁLOGO · `, renderContent(e.catCount)],
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            font: `700 clamp(30px,3.6vw,48px)/1.08 var(--fd,Oswald),sans-serif`,
                            letterSpacing: `.005em`,
                            marginTop: `8px`,
                          },
                          children: renderContent(e.catTitle),
                        }),
                      ],
                    }),
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: resolveStyle(
                        `display:flex;gap:10px;align-items:center;flex-wrap:wrap;width:${e.ctlW ?? ``}`,
                      ),
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `position:relative;display:grid;grid-template-columns:repeat(4,1fr);background:var(--br-superficie,#161412);border:1px solid var(--br-linea,#2B2724);border-radius:14px;padding:4px;width:${e.segW ?? ``};max-width:100%;box-sizing:border-box`,
                          ),
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              style: resolveStyle(
                                `position:absolute;top:4px;bottom:4px;left:${e.segLeft ?? ``};width:calc((100% - 8px) / 4);border-radius:10px;background:var(--br-p,#FF5B14);transition:left .35s cubic-bezier(.2,.8,.2,1)`,
                              ),
                            }),
                            asArray(e.types).map((e, t) =>
                              (0, JSXRuntime.jsx)(
                                React.Fragment,
                                {
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    style: resolveStyle(
                                      `position:relative;text-align:center;padding:10px 0;font:700 13px var(--fb,Oswald),sans-serif;color:${e?.fg ?? ``};cursor:pointer;transition:color .3s`,
                                    ),
                                    onClick: e?.onClick,
                                    children: renderContent(e?.l),
                                  }),
                                },
                                t,
                              ),
                            ),
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `position:relative;flex:${e.sortFlex ?? ``}`,
                          ),
                          children: [
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `8px`,
                                background: `var(--br-superficie,#161412)`,
                                border: `1px solid var(--br-linea,#2B2724)`,
                                borderRadius: `14px`,
                                padding: `12px 14px`,
                                font: `600 13px var(--fb,Oswald),sans-serif`,
                                color: `var(--br-texto-3,#A89E92)`,
                                cursor: `pointer`,
                                whiteSpace: `nowrap`,
                              },
                              onClick: e.toggleSort,
                              children: [
                                `Orden: `,
                                (0, JSXRuntime.jsx)(`b`, {
                                  style: {
                                    color: `var(--br-texto,#F3E9D8)`,
                                  },
                                  children: renderContent(e.sortL),
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: resolveStyle(
                                    `transform:rotate(${e.sortRot ?? ``});transition:transform .2s;display:inline-block`,
                                  ),
                                  children: `▾`,
                                }),
                              ],
                            }),
                            e.sortOpen
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      position: `absolute`,
                                      left: `0`,
                                      top: `calc(100% + 8px)`,
                                      zIndex: `20`,
                                      background: `var(--br-superficie-3,#1E1B18)`,
                                      border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                      borderRadius: `14px`,
                                      padding: `6px`,
                                      minWidth: `200px`,
                                      boxShadow: `0 24px 48px -12px rgba(0,0,0,.8)`,
                                    },
                                    children: asArray(e.sorts).map((e, t) =>
                                      (0, JSXRuntime.jsx)(
                                        React.Fragment,
                                        {
                                          children: (0, JSXRuntime.jsxs)(
                                            `div`,
                                            {
                                              className: `br0-6`,
                                              style: resolveStyle(
                                                `display:flex;justify-content:space-between;padding:10px 12px;border-radius:10px;font:700 13px var(--fb,Oswald),sans-serif;cursor:pointer;background:${e?.bg ?? ``}`,
                                              ),
                                              onClick: e?.onClick,
                                              children: [
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  children: renderContent(e?.l),
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    color: `var(--br-p-linea,#FF5B14)`,
                                                  },
                                                  children: renderContent(
                                                    e?.mark,
                                                  ),
                                                }),
                                              ],
                                            },
                                          ),
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                                })
                              : null,
                          ],
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            display: `flex`,
                            background: `var(--br-superficie,#161412)`,
                            border: `1px solid var(--br-linea,#2B2724)`,
                            borderRadius: `14px`,
                            padding: `4px`,
                          },
                          children: asArray(e.views).map((e, t) =>
                            (0, JSXRuntime.jsx)(
                              React.Fragment,
                              {
                                children: (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `width:40px;height:36px;border-radius:10px;display:grid;place-items:center;background:${e?.bg ?? ``};cursor:pointer`,
                                  ),
                                  onClick: e?.onClick,
                                  children: (0, JSXRuntime.jsx)(`svg`, {
                                    style: {
                                      stroke: e?.fg,
                                    },
                                    viewBox: `0 0 24 24`,
                                    width: `17`,
                                    height: `17`,
                                    fill: `none`,
                                    stroke: e?.fg,
                                    strokeWidth: `2`,
                                    strokeLinecap: `round`,
                                    children: (0, JSXRuntime.jsx)(`path`, {
                                      d: e?.icon,
                                    }),
                                  }),
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`div`, {
                  style: resolveStyle(
                    `display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px;margin:${e.bleedM ?? ``};padding-left:${e.bleedP ?? ``};padding-right:${e.bleedP ?? ``}`,
                  ),
                  children: asArray(e.vendorChips).map((e, t) =>
                    (0, JSXRuntime.jsx)(
                      React.Fragment,
                      {
                        children: (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `display:flex;align-items:center;gap:8px;padding:9px 10px 9px 15px;border-radius:999px;border:1px solid ${e?.bd ?? ``};background:${e?.bg ?? ``};color:${e?.fg ?? ``};font:700 13px var(--fb,Oswald),sans-serif;cursor:pointer;flex:none;white-space:nowrap;transition:all .2s`,
                          ),
                          onClick: e?.onClick,
                          children: [
                            renderContent(e?.l),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: resolveStyle(
                                `min-width:22px;height:22px;border-radius:11px;background:${e?.nBg ?? ``};color:${e?.nFg ?? ``};font:700 10px var(--fb,Oswald),sans-serif;display:grid;place-items:center;padding:0 4px;box-sizing:border-box`,
                              ),
                              children: renderContent(e?.n),
                            }),
                          ],
                        }),
                      },
                      t,
                    ),
                  ),
                }),
                e.empty
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          border: `1px dashed var(--br-linea-fuerte,#3A3530)`,
                          borderRadius: `24px`,
                          padding: `40px`,
                          textAlign: `center`,
                          display: `flex`,
                          flexDirection: `column`,
                          gap: `6px`,
                          alignItems: `center`,
                        },
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              font: `700 20px var(--fd,Oswald),sans-serif`,
                              letterSpacing: `.005em`,
                            },
                            children: renderContent(e.emptyT),
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              font: `500 14px var(--fb,Oswald),sans-serif`,
                              color: `var(--br-texto-3,#A89E92)`,
                            },
                            children: renderContent(e.emptyS),
                          }),
                        ],
                      }),
                    })
                  : null,
                e.isGrid
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsx)(`div`, {
                        style: resolveStyle(
                          `display:grid;grid-template-columns:${e.tileCols ?? ``};grid-auto-flow:dense;gap:${e.tileGap ?? ``}`,
                        ),
                        children: asArray(e.tiles).map((t, n) =>
                          (0, JSXRuntime.jsx)(
                            React.Fragment,
                            {
                              children: (0, JSXRuntime.jsx)(`div`, {
                                style: resolveStyle(
                                  `cursor:pointer;grid-column:${t?.cs ?? ``};grid-row:${t?.rs ?? ``};perspective:900px;min-width:0`,
                                ),
                                onClick: t?.tap,
                                onMouseMove: e.tilt,
                                onMouseLeave: e.untilt,
                                onMouseEnter: t?.enter,
                                children: (0, JSXRuntime.jsxs)(`div`, {
                                  style: resolveStyle(
                                    `position:relative;height:100%;min-height:${t?.minH ?? ``};aspect-ratio:${t?.ar ?? ``};border-radius:${t?.r ?? ``};background:${t?.bg ?? ``};color:${t?.fg ?? ``};overflow:hidden;transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .18s ease-out;border:1px solid rgba(255,255,255,.08);box-shadow:0 24px 40px -26px rgba(0,0,0,.9)`,
                                  ),
                                  "data-tilt": `1`,
                                  children: [
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: resolveStyle(
                                        `position:absolute;inset:0;background-image:${t?.pat ?? ``};background-size:${t?.patSize ?? ``}`,
                                      ),
                                    }),
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        position: `absolute`,
                                        right: `-30%`,
                                        bottom: `-30%`,
                                        width: `85%`,
                                        height: `85%`,
                                        opacity: `.22`,
                                      },
                                      children: [
                                        e.isoMarca
                                          ? null
                                          : (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsxs)(
                                                  `svg`,
                                                  {
                                                    className: `br-r-linea`,
                                                    style: {
                                                      overflow: `visible`,
                                                    },
                                                    viewBox: `0 0 100 120`,
                                                    width: `100%`,
                                                    height: `100%`,
                                                    fill: `none`,
                                                    stroke: `currentColor`,
                                                    strokeWidth: `2`,
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `path`,
                                                        {
                                                          d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `path`,
                                                        {
                                                          d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              },
                                            ),
                                        e.isoMarca
                                          ? (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsx)(
                                                  `img`,
                                                  {
                                                    style: {
                                                      width: `100%`,
                                                      height: `100%`,
                                                      objectFit: `contain`,
                                                      display: `block`,
                                                    },
                                                    src: be(e.isoUrl),
                                                    alt: ``,
                                                  },
                                                ),
                                              },
                                            )
                                          : null,
                                      ],
                                    }),
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        position: `absolute`,
                                        inset: `0`,
                                        background: `radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.32),transparent 45%)`,
                                        opacity: `var(--go,0)`,
                                        transition: `opacity .25s`,
                                        pointerEvents: `none`,
                                        zIndex: `3`,
                                      },
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: resolveStyle(
                                        `display:${t?.badgeD ?? ``};position:absolute;top:${t?.bgPos ?? ``};left:${t?.bgPos ?? ``};z-index:2;font:600 ${t?.bgF ?? ``} var(--fb,Oswald),sans-serif;letter-spacing:.1em;padding:${t?.bgPad ?? ``};border-radius:5px;background:${t?.badgeBg ?? ``};color:${t?.badgeFg ?? ``}`,
                                      ),
                                      children: renderContent(t?.typeS),
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: resolveStyle(
                                        `position:absolute;top:${t?.hPos ?? ``};right:${t?.hPos ?? ``};width:${t?.hS ?? ``};height:${t?.hS ?? ``};border-radius:50%;display:grid;place-items:center;background:rgba(var(--br-hondo-rgb,12,11,10),.55);font-size:${t?.hF ?? ``};color:var(--br-p,#FF5B14);cursor:pointer;z-index:2`,
                                      ),
                                      "data-fav": `1`,
                                      onClick: t?.onFav,
                                      children: renderContent(t?.heart),
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: resolveStyle(
                                        `display:${t?.artD ?? ``};position:absolute;left:${t?.nmP ?? ``};bottom:${t?.artB ?? ``};font-family:var(--fd,Oswald),sans-serif;font-weight:700;line-height:.82;letter-spacing:.005em;font-size:${t?.artSize ?? ``}`,
                                      ),
                                      children: renderContent(t?.art),
                                    }),
                                    t?.hasImg
                                      ? (0, JSXRuntime.jsx)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsx)(
                                              `div`,
                                              {
                                                style: resolveStyle(
                                                  `position:absolute;inset:0;background-image:${t?.imgUrl ?? ``};background-size:cover;background-repeat:no-repeat;background-position:center;background-origin:content-box`,
                                                ),
                                              },
                                            ),
                                          },
                                        )
                                      : null,
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: resolveStyle(
                                        `position:absolute;left:${t?.nmP ?? ``};right:${t?.nmP ?? ``};bottom:${t?.nmP ?? ``};z-index:2;display:${t?.nameD ?? ``};flex-direction:column;gap:1px;color:${t?.nameC ?? ``}`,
                                      ),
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: resolveStyle(
                                            `font:600 ${t?.nmF ?? ``} var(--fb,Oswald),sans-serif;letter-spacing:.02em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis`,
                                          ),
                                          children: renderContent(t?.name),
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: resolveStyle(
                                            `font:600 ${t?.vnF ?? ``} var(--fb,Oswald),sans-serif;opacity:.72;white-space:nowrap;overflow:hidden;text-overflow:ellipsis`,
                                          ),
                                          children: renderContent(t?.vendor),
                                        }),
                                      ],
                                    }),
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: resolveStyle(
                                        `position:absolute;inset:0;z-index:4;background:rgba(var(--br-hondo-rgb,12,11,10),.78);backdrop-filter:blur(3px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;opacity:${t?.hov ?? ``};pointer-events:${t?.pe ?? ``};transition:opacity .22s ease;color:var(--br-texto,#F3E9D8)`,
                                      ),
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            font: `700 15px var(--fb,Oswald),sans-serif`,
                                            letterSpacing: `.005em`,
                                            textAlign: `center`,
                                            padding: `0 12px`,
                                          },
                                          children: renderContent(t?.name),
                                        }),
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            background: `var(--br-p,#FF5B14)`,
                                            color: `var(--br-tinta,#121110)`,
                                            borderRadius: `12px`,
                                            padding: `11px 22px`,
                                            font: `700 13px var(--fb,Oswald),sans-serif`,
                                            cursor: `pointer`,
                                          },
                                          onClick: t?.play,
                                          children: `Jugar`,
                                        }),
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            border: `1px solid var(--br-gris,#6A5F52)`,
                                            borderRadius: `12px`,
                                            padding: `9px 18px`,
                                            font: `700 12px var(--fb,Oswald),sans-serif`,
                                            cursor: `pointer`,
                                          },
                                          onClick: t?.demo,
                                          children: `Demo`,
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            font: `600 10px var(--fb,Oswald),sans-serif`,
                                            color: `var(--br-texto-3,#A89E92)`,
                                          },
                                          children: renderContent(t?.code),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            },
                            n,
                          ),
                        ),
                      }),
                    })
                  : null,
                e.isList
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          border: `1px solid var(--br-linea,#2B2724)`,
                          borderRadius: `24px`,
                          overflow: `hidden`,
                          background: `var(--br-tarjeta,#131110)`,
                        },
                        children: [
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              display: `grid`,
                              gridTemplateColumns: `52px minmax(0,2fr) minmax(0,1.2fr) minmax(0,.9fr) 44px 96px`,
                              gap: `14px`,
                              padding: `12px 18px`,
                              font: `700 10px var(--fb,Oswald),sans-serif`,
                              letterSpacing: `.14em`,
                              color: `var(--br-texto-3,#A89E92)`,
                              borderBottom: `1px solid var(--br-linea,#2B2724)`,
                            },
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {}),
                              (0, JSXRuntime.jsx)(`span`, {
                                children: `JUEGO`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                children: `PROVEEDOR`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                children: `TIPO`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {}),
                              (0, JSXRuntime.jsx)(`span`, {}),
                            ],
                          }),
                          asArray(e.tiles).map((e, t) =>
                            (0, JSXRuntime.jsx)(
                              React.Fragment,
                              {
                                children: (0, JSXRuntime.jsxs)(`div`, {
                                  className: `br0-7`,
                                  style: {
                                    display: `grid`,
                                    gridTemplateColumns: `52px minmax(0,2fr) minmax(0,1.2fr) minmax(0,.9fr) 44px 96px`,
                                    gap: `14px`,
                                    padding: `10px 18px`,
                                    alignItems: `center`,
                                    borderBottom: `1px solid var(--br-superficie-3,#1E1B18)`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: resolveStyle(
                                        `position:relative;overflow:hidden;width:52px;height:52px;border-radius:12px;background:${e?.bg ?? ``};color:${e?.fg ?? ``};display:grid;place-items:center;font:700 19px var(--fd,Oswald),sans-serif`,
                                      ),
                                      children: [
                                        renderContent(e?.art),
                                        e?.hasImg
                                          ? (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsx)(
                                                  `div`,
                                                  {
                                                    style: resolveStyle(
                                                      `position:absolute;inset:0;background-image:${e?.imgUrl ?? ``};background-size:cover;background-repeat:no-repeat;background-position:center;background-origin:content-box`,
                                                    ),
                                                  },
                                                ),
                                              },
                                            )
                                          : null,
                                      ],
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        font: `700 14px var(--fb,Oswald),sans-serif`,
                                        whiteSpace: `nowrap`,
                                        overflow: `hidden`,
                                        textOverflow: `ellipsis`,
                                      },
                                      children: renderContent(e?.name),
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        font: `500 13px var(--fb,Oswald),sans-serif`,
                                        color: `var(--br-texto-3,#A89E92)`,
                                        whiteSpace: `nowrap`,
                                        overflow: `hidden`,
                                        textOverflow: `ellipsis`,
                                      },
                                      children: renderContent(e?.vendor),
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        font: `700 11px var(--fb,Oswald),sans-serif`,
                                        color: `var(--br-p-claro,#FF8A4C)`,
                                      },
                                      children: renderContent(e?.typeL),
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontSize: `17px`,
                                        cursor: `pointer`,
                                        color: `var(--br-p,#FF5B14)`,
                                        textAlign: `center`,
                                      },
                                      onClick: e?.onFav,
                                      children: renderContent(e?.heart),
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        textAlign: `center`,
                                        background: `var(--br-p,#FF5B14)`,
                                        color: `var(--br-tinta,#121110)`,
                                        borderRadius: `10px`,
                                        padding: `9px 0`,
                                        font: `700 12px var(--fb,Oswald),sans-serif`,
                                        cursor: `pointer`,
                                      },
                                      onClick: e?.play,
                                      children: `Jugar`,
                                    }),
                                  ],
                                }),
                              },
                              t,
                            ),
                          ),
                        ],
                      }),
                    })
                  : null,
              ],
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              style: resolveStyle(
                `display:${e.dLive ?? ``};flex-direction:column;gap:18px;scroll-margin-top:120px`,
              ),
              id: `envivo`,
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `display:flex;flex-direction:${e.secDir ?? ``};align-items:${e.secAlign ?? ``};justify-content:space-between;gap:${e.secGap ?? ``};flex-wrap:wrap`,
                  ),
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `9px`,
                            font: `700 10px var(--fb,Oswald),sans-serif`,
                            letterSpacing: `.16em`,
                            color: `var(--br-p-claro,#FF8A4C)`,
                          },
                          children: [renderContent(e.pulse), `CASINO EN VIVO`],
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            font: `700 clamp(30px,3.6vw,48px)/1.08 var(--fd,Oswald),sans-serif`,
                            letterSpacing: `.005em`,
                            marginTop: `8px`,
                          },
                          children: `Mesas abiertas ahora`,
                        }),
                      ],
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        font: `500 14px/1.45 var(--fb,Oswald),sans-serif`,
                        color: `var(--br-texto-3,#A89E92)`,
                        maxWidth: `360px`,
                      },
                      children: `Crupieres reales de Pragmatic Play Live. Mismo saldo, sin transferencias.`,
                    }),
                  ],
                }),
                e.narrow
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          display: `grid`,
                          gridTemplateColumns: `repeat(4,minmax(0,1fr))`,
                          gap: `8px`,
                        },
                        children: asArray(e.liveRow).map((e, t) =>
                          (0, JSXRuntime.jsx)(
                            React.Fragment,
                            {
                              children: (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  display: `flex`,
                                  flexDirection: `column`,
                                  gap: `5px`,
                                  minWidth: `0`,
                                  cursor: `pointer`,
                                },
                                onClick: e?.play,
                                children: [
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: resolveStyle(
                                      `position:relative;aspect-ratio:3 / 4;border-radius:12px;overflow:hidden;background:${e?.bg ?? ``};color:${e?.fg ?? ``};display:flex;align-items:flex-end;padding:6px;box-sizing:border-box;border:1px solid rgba(255,255,255,.08)`,
                                    ),
                                    children: [
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          font: `700 26px/0.85 var(--fd,Oswald),sans-serif`,
                                        },
                                        children: renderContent(e?.art),
                                      }),
                                      e?.hasImg
                                        ? (0, JSXRuntime.jsx)(
                                            JSXRuntime.Fragment,
                                            {
                                              children: (0, JSXRuntime.jsx)(
                                                `div`,
                                                {
                                                  style: resolveStyle(
                                                    `position:absolute;inset:0;background-image:${e?.imgUrl ?? ``};background-size:cover;background-position:center`,
                                                  ),
                                                },
                                              ),
                                            },
                                          )
                                        : null,
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          position: `absolute`,
                                          top: `4px`,
                                          left: `4px`,
                                          zIndex: `2`,
                                          display: `flex`,
                                          alignItems: `center`,
                                          gap: `3px`,
                                          background: `var(--br-p,#FF5B14)`,
                                          color: `var(--br-tinta,#121110)`,
                                          font: `700 7px var(--fb,Oswald),sans-serif`,
                                          letterSpacing: `.08em`,
                                          padding: `3px 4px`,
                                          borderRadius: `4px`,
                                        },
                                        children: `● VIVO`,
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `600 10px var(--fb,Oswald),sans-serif`,
                                      whiteSpace: `nowrap`,
                                      overflow: `hidden`,
                                      textOverflow: `ellipsis`,
                                    },
                                    children: renderContent(e?.name),
                                  }),
                                ],
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                    })
                  : null,
                (0, JSXRuntime.jsx)(`div`, {
                  style: resolveStyle(
                    `display:${e.liveBigD ?? ``};grid-auto-flow:${e.liveFlow ?? ``};grid-auto-columns:minmax(290px,1fr);grid-template-columns:${e.liveCols ?? ``};gap:${e.liveGap ?? ``};overflow-x:auto;scrollbar-width:none;padding-bottom:4px`,
                  ),
                  children: asArray(e.liveCards).map((t, n) =>
                    (0, JSXRuntime.jsx)(
                      React.Fragment,
                      {
                        children: (0, JSXRuntime.jsxs)(`div`, {
                          className: `br0-8`,
                          style: {
                            borderRadius: `26px`,
                            overflow: `hidden`,
                            background: `var(--br-tarjeta,#131110)`,
                            border: `1px solid var(--br-linea,#2B2724)`,
                            cursor: `pointer`,
                            transition: `border-color .2s,transform .2s`,
                          },
                          onClick: t?.play,
                          children: [
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: resolveStyle(
                                `aspect-ratio:${e.liveAR ?? ``};position:relative;background:repeating-linear-gradient(135deg,var(--br-raya-vivo,#1C1916) 0 14px,var(--br-superficie,#161412) 14px 28px);display:grid;place-items:center;overflow:hidden`,
                              ),
                              children: [
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `position:absolute;inset:auto -20% -60% -20%;height:100%;background:radial-gradient(ellipse at 50% 0%,${t?.glow ?? ``},transparent 60%)`,
                                  ),
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: resolveStyle(
                                    `position:relative;font:700 90px/0.8 var(--fd,Oswald),sans-serif;color:${t?.artC ?? ``}`,
                                  ),
                                  children: renderContent(t?.art),
                                }),
                                t?.hasImg
                                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                      children: (0, JSXRuntime.jsx)(`div`, {
                                        style: resolveStyle(
                                          `position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:14%;box-sizing:border-box;background-image:${t?.imgUrl ?? ``};background-size:contain;background-repeat:no-repeat;background-position:center;background-origin:content-box`,
                                        ),
                                      }),
                                    })
                                  : null,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    position: `absolute`,
                                    top: `14px`,
                                    left: `14px`,
                                    display: `flex`,
                                    alignItems: `center`,
                                    gap: `7px`,
                                    background: `var(--br-p,#FF5B14)`,
                                    color: `var(--br-tinta,#121110)`,
                                    font: `700 10px var(--fb,Oswald),sans-serif`,
                                    padding: `6px 9px`,
                                    borderRadius: `7px`,
                                    letterSpacing: `.08em`,
                                  },
                                  children: `● EN VIVO`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: resolveStyle(
                                    `position:absolute;top:14px;right:14px;display:${t?.maintD ?? ``};background:var(--br-texto,#F3E9D8);color:var(--br-tinta,#121110);font:700 9px var(--fb,Oswald),sans-serif;padding:6px 8px;border-radius:7px;letter-spacing:.08em`,
                                  ),
                                  children: `MANTENIMIENTO`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    position: `absolute`,
                                    bottom: `12px`,
                                    left: `14px`,
                                    font: `600 10px var(--fb,Oswald),sans-serif`,
                                    color: `var(--br-texto-4,#7D746A)`,
                                  },
                                  children: `[ stream del crupier ]`,
                                }),
                              ],
                            }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                padding: `16px 18px`,
                                display: `flex`,
                                justifyContent: `space-between`,
                                alignItems: `center`,
                                gap: `10px`,
                              },
                              children: [
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    minWidth: `0`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        font: `700 16px var(--fb,Oswald),sans-serif`,
                                        letterSpacing: `.005em`,
                                        whiteSpace: `nowrap`,
                                        overflow: `hidden`,
                                        textOverflow: `ellipsis`,
                                      },
                                      children: renderContent(t?.name),
                                    }),
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        font: `500 12px var(--fb,Oswald),sans-serif`,
                                        color: `var(--br-texto-3,#A89E92)`,
                                        marginTop: `3px`,
                                      },
                                      children: renderContent(t?.vendor),
                                    }),
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    flex: `none`,
                                    width: `40px`,
                                    height: `40px`,
                                    borderRadius: `12px`,
                                    background: `var(--br-p,#FF5B14)`,
                                    color: `var(--br-tinta,#121110)`,
                                    display: `grid`,
                                    placeItems: `center`,
                                    font: `700 16px var(--fb,Oswald),sans-serif`,
                                  },
                                  children: `→`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              style: resolveStyle(
                `display:${e.dProv ?? ``};flex-direction:column;gap:18px;scroll-margin-top:120px`,
              ),
              id: `proveedores`,
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  children: [
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        font: `700 10px var(--fb,Oswald),sans-serif`,
                        letterSpacing: `.16em`,
                        color: `var(--br-texto-3,#A89E92)`,
                      },
                      children: `PROVEEDORES`,
                    }),
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        font: `700 clamp(30px,3.6vw,48px)/1.08 var(--fd,Oswald),sans-serif`,
                        letterSpacing: `.005em`,
                        marginTop: `8px`,
                      },
                      children: `10 estudios, un solo saldo`,
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`div`, {
                  style: resolveStyle(
                    `display:grid;grid-template-columns:${e.vwCols ?? ``};grid-auto-flow:${e.vwFlow ?? ``};grid-auto-columns:82%;gap:${e.vwGap ?? ``};overflow-x:auto;scrollbar-width:none;scroll-snap-type:x mandatory`,
                  ),
                  children: asArray(e.vendorWall).map((t, n) =>
                    (0, JSXRuntime.jsx)(
                      React.Fragment,
                      {
                        children: (0, JSXRuntime.jsxs)(`div`, {
                          className: `br0-9`,
                          style: resolveStyle(
                            `position:relative;overflow:hidden;border-radius:26px;background:${t?.bg ?? ``};color:${t?.fg ?? ``};border:1px solid ${t?.bd ?? ``};padding:22px;display:flex;flex-direction:column;justify-content:space-between;gap:18px;cursor:pointer;min-height:230px;box-sizing:border-box;transition:border-color .2s,transform .25s cubic-bezier(.2,.8,.2,1)`,
                          ),
                          onClick: t?.onClick,
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                position: `absolute`,
                                right: `-44px`,
                                bottom: `-40px`,
                                width: `210px`,
                                height: `170px`,
                                pointerEvents: `none`,
                              },
                              children: asArray(t?.minis).map((e, t) =>
                                (0, JSXRuntime.jsx)(
                                  React.Fragment,
                                  {
                                    children: (0, JSXRuntime.jsxs)(`div`, {
                                      style: resolveStyle(
                                        `position:absolute;top:0;left:${e?.x ?? ``};width:108px;height:144px;border-radius:14px;overflow:hidden;background:${e?.bg ?? ``};color:${e?.fg ?? ``};transform:rotate(${e?.r ?? ``});box-shadow:0 18px 30px -12px rgba(0,0,0,.8);border:1px solid rgba(255,255,255,.1);display:flex;align-items:flex-end;padding:10px;box-sizing:border-box;z-index:${e?.z ?? ``}`,
                                      ),
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            font: `700 40px/0.85 var(--fd,Oswald),sans-serif`,
                                          },
                                          children: renderContent(e?.art),
                                        }),
                                        e?.hasImg
                                          ? (0, JSXRuntime.jsx)(
                                              JSXRuntime.Fragment,
                                              {
                                                children: (0, JSXRuntime.jsx)(
                                                  `div`,
                                                  {
                                                    style: resolveStyle(
                                                      `position:absolute;inset:0;background-image:${e?.imgUrl ?? ``};background-size:cover;background-position:center`,
                                                    ),
                                                  },
                                                ),
                                              },
                                            )
                                          : null,
                                      ],
                                    }),
                                  },
                                  t,
                                ),
                              ),
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: resolveStyle(
                                `position:absolute;inset:0;background:linear-gradient(90deg,${t?.bg ?? ``} 55%,rgba(var(--br-tarjeta-rgb,19,17,16),0) 88%);pointer-events:none`,
                              ),
                            }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `relative`,
                                display: `flex`,
                                alignItems: `center`,
                                gap: `12px`,
                              },
                              children: [
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    width: `56px`,
                                    height: `56px`,
                                    flex: `none`,
                                    borderRadius: `16px`,
                                    background: `var(--br-blanco,#FFFFFF)`,
                                    display: `grid`,
                                    placeItems: `center`,
                                    overflow: `hidden`,
                                    boxShadow: `0 10px 20px -8px rgba(0,0,0,.6)`,
                                  },
                                  children: [
                                    t?.hasLogo
                                      ? (0, JSXRuntime.jsx)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsx)(
                                              `div`,
                                              {
                                                style: resolveStyle(
                                                  `width:40px;height:40px;background-image:${t?.logo ?? ``};background-size:contain;background-repeat:no-repeat;background-position:center`,
                                                ),
                                              },
                                            ),
                                          },
                                        )
                                      : null,
                                    t?.noLogo
                                      ? (0, JSXRuntime.jsx)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsx)(
                                              `span`,
                                              {
                                                style: {
                                                  font: `700 20px var(--fd,Oswald),sans-serif`,
                                                  color: `var(--br-tinta,#121110)`,
                                                },
                                                children: renderContent(t?.ini),
                                              },
                                            ),
                                          },
                                        )
                                      : null,
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `600 10px var(--fb,Oswald),sans-serif`,
                                    letterSpacing: `.16em`,
                                    background: `rgba(var(--br-texto-rgb,243,233,216),.1)`,
                                    borderRadius: `6px`,
                                    padding: `5px 8px`,
                                  },
                                  children: renderContent(t?.type),
                                }),
                              ],
                            }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `relative`,
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `6px`,
                                maxWidth: `52%`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    font: `700 30px/1 var(--fd,Oswald),sans-serif`,
                                    textTransform: `uppercase`,
                                    letterSpacing: `.01em`,
                                    textShadow: `0 2px 12px rgba(var(--br-tarjeta-rgb,19,17,16),.9)`,
                                  },
                                  children: renderContent(t?.name),
                                }),
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    font: `500 13px var(--fb,Oswald),sans-serif`,
                                    opacity: `.7`,
                                    letterSpacing: `.04em`,
                                  },
                                  children: [
                                    renderContent(t?.nL),
                                    ` EN `,
                                    renderContent(e.marcaMay),
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: resolveStyle(
                                    `font:600 14px var(--fb,Oswald),sans-serif;letter-spacing:.06em;color:${t?.ctaC ?? ``};margin-top:6px`,
                                  ),
                                  children: renderContent(t?.cta),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              style: resolveStyle(
                `display:${e.dBets ?? ``};flex-direction:column;gap:18px;scroll-margin-top:120px`,
              ),
              id: `apuestas`,
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    justifyContent: `space-between`,
                    alignItems: `flex-end`,
                    gap: `14px`,
                    flexWrap: `wrap`,
                  },
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `9px`,
                            font: `700 10px var(--fb,Oswald),sans-serif`,
                            letterSpacing: `.18em`,
                            color: `var(--br-p-claro,#FF8A4C)`,
                          },
                          children: [
                            renderContent(e.pulse),
                            `APUESTAS EN VIVO`,
                          ],
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            font: `700 clamp(30px,3.6vw,48px)/1.08 var(--fd,Oswald),sans-serif`,
                            textTransform: `uppercase`,
                            marginTop: `8px`,
                          },
                          children: `Lo que se juega ahora`,
                        }),
                      ],
                    }),
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        alignItems: `center`,
                        gap: `10px`,
                        flexWrap: `wrap`,
                      },
                      children: [
                        (0, JSXRuntime.jsxs)(`span`, {
                          style: resolveStyle(
                            `display:flex;align-items:center;gap:7px;height:32px;padding:0 12px;border-radius:999px;background:${e.stBg ?? ``};border:1px solid ${e.stBd ?? ``};color:${e.stLc ?? ``};font:700 11px var(--fb,Oswald),sans-serif;letter-spacing:.12em;white-space:nowrap;transition:all .3s`,
                          ),
                          children: [
                            renderContent(e.stDot),
                            renderContent(e.stLU),
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `relative`,
                            display: `grid`,
                            gridTemplateColumns: `repeat(3,1fr)`,
                            background: `var(--br-superficie,#161412)`,
                            border: `1px solid var(--br-linea,#2B2724)`,
                            borderRadius: `14px`,
                            padding: `4px`,
                            width: `420px`,
                            maxWidth: `100%`,
                            boxSizing: `border-box`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              style: resolveStyle(
                                `position:absolute;top:4px;bottom:4px;left:${e.bSeg ?? ``};width:calc((100% - 8px) / 3);border-radius:10px;background:var(--br-p,#FF5B14);transition:left .35s cubic-bezier(.2,.8,.2,1)`,
                              ),
                            }),
                            asArray(e.bTabs).map((e, t) =>
                              (0, JSXRuntime.jsx)(
                                React.Fragment,
                                {
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    style: resolveStyle(
                                      `position:relative;text-align:center;padding:10px 4px;font:700 13px var(--fb,Oswald),sans-serif;color:${e?.fg ?? ``};cursor:pointer;white-space:nowrap;transition:color .3s`,
                                    ),
                                    onClick: e?.onClick,
                                    children: renderContent(e?.l),
                                  }),
                                },
                                t,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    display: `grid`,
                    gridTemplateColumns: `minmax(0,1fr)`,
                  },
                  children: (0, JSXRuntime.jsxs)(`div`, {
                    style: resolveStyle(
                      `border:1px solid ${e.tblBd ?? ``};border-radius:24px;overflow:hidden;background:var(--br-tarjeta,#131110);min-width:0;display:flex;flex-direction:column;transition:border-color .3s`,
                    ),
                    onMouseEnter: e.bPauseOn,
                    onMouseLeave: e.bPauseOff,
                    children: [
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: resolveStyle(
                          `display:grid;grid-template-columns:${e.bCols ?? ``};gap:12px;padding:13px 18px;font:700 10px var(--fb,Oswald),sans-serif;letter-spacing:.16em;color:var(--br-texto-4,#7D746A);border-bottom:1px solid var(--br-linea,#2B2724);background:var(--br-superficie,#161412)`,
                        ),
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            children: `JUEGO`,
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: resolveStyle(`display:${e.bColD ?? ``}`),
                            children: `JUGADOR`,
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: resolveStyle(`display:${e.bColD ?? ``}`),
                            children: `HORA`,
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              textAlign: `right`,
                            },
                            children: `APUESTA`,
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              textAlign: `right`,
                            },
                            children: `MULT.`,
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              textAlign: `right`,
                            },
                            children: `PAGO`,
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          flex: `1`,
                          minHeight: `0`,
                        },
                        children: renderContent(e.betList),
                      }),
                      e.betsEmpty
                        ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                            children: (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                padding: `48px 20px`,
                                textAlign: `center`,
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `6px`,
                                alignItems: `center`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `700 22px var(--fd,Oswald),sans-serif`,
                                    textTransform: `uppercase`,
                                  },
                                  children: `Todavía no apostaste en esta sesión`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `500 14px var(--fb,Oswald),sans-serif`,
                                    color: `var(--br-texto-3,#A89E92)`,
                                  },
                                  children: `Abrí un juego y tus rondas aparecen acá en tiempo real.`,
                                }),
                              ],
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    flexWrap: `wrap`,
                    gap: `8px`,
                    alignItems: `center`,
                    font: `600 12px var(--fb,Oswald),sans-serif`,
                    color: `var(--br-texto-4,#7D746A)`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        letterSpacing: `.14em`,
                        fontWeight: `700`,
                        fontSize: `10px`,
                      },
                      children: `MULTIPLICADOR`,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        padding: `4px 9px`,
                        borderRadius: `7px`,
                        color: `var(--br-texto-4,#7D746A)`,
                        border: `1px solid var(--br-linea,#2B2724)`,
                      },
                      children: `< 1×`,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        padding: `4px 9px`,
                        borderRadius: `7px`,
                        background: `var(--br-linea,#2B2724)`,
                        color: `var(--br-texto,#F3E9D8)`,
                      },
                      children: `1–10×`,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        padding: `4px 9px`,
                        borderRadius: `7px`,
                        background: `var(--br-p,#FF5B14)`,
                        color: `var(--br-tinta,#121110)`,
                      },
                      children: `10–100×`,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        padding: `4px 9px`,
                        borderRadius: `7px`,
                        background: `var(--br-tinta,#121110)`,
                        color: `var(--br-p,#FF5B14)`,
                        border: `1px solid var(--br-p,#FF5B14)`,
                        boxShadow: `0 0 14px rgba(var(--br-p-rgb,255,91,20),.45)`,
                      },
                      children: `100×+ MEGA`,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        flex: `1`,
                      },
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      children: `Pasá el mouse sobre la tabla para pausarla`,
                    }),
                  ],
                }),
              ],
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              style: resolveStyle(
                `display:${e.dFoot ?? ``};border-top:1px solid var(--br-linea,#2B2724);padding-top:24px;display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;font:500 12px/1.5 var(--fb,Oswald),sans-serif;color:var(--br-texto-3,#A89E92)`,
              ),
              children: [
                (0, JSXRuntime.jsxs)(`span`, {
                  children: [
                    (0, JSXRuntime.jsx)(`b`, {
                      style: {
                        color: `var(--br-texto,#F3E9D8)`,
                      },
                      children: `18+`,
                    }),
                    ` · Jugá con responsabilidad · Configurá límites de depósito desde tu perfil`,
                  ],
                }),
                (0, JSXRuntime.jsx)(`span`, {
                  children: `RushyBet © 2026 · Precios en ARS`,
                }),
              ],
            }),
          ],
        }),
        e.sportsOpen
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  position: `fixed`,
                  inset: `0`,
                  zIndex: `80`,
                  background: `var(--br-hondo,#0C0B0A)`,
                  display: `flex`,
                  flexDirection: `column`,
                },
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      flex: `none`,
                      height: `60px`,
                      display: `flex`,
                      alignItems: `center`,
                      gap: `12px`,
                      padding: `0 clamp(14px,3vw,32px)`,
                      borderBottom: `1px solid var(--br-linea,#2B2724)`,
                    },
                    children: [
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          width: `40px`,
                          height: `40px`,
                          borderRadius: `12px`,
                          border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                          display: `grid`,
                          placeItems: `center`,
                          cursor: `pointer`,
                        },
                        onClick: e.closeSports,
                        children: (0, JSXRuntime.jsx)(`svg`, {
                          style: {
                            stroke: `var(--br-texto,#F3E9D8)`,
                          },
                          viewBox: `0 0 24 24`,
                          width: `18`,
                          height: `18`,
                          fill: `none`,
                          strokeWidth: `2.2`,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          children: (0, JSXRuntime.jsx)(`path`, {
                            d: `M15 5l-7 7 7 7`,
                          }),
                        }),
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          flex: `1`,
                          minWidth: `0`,
                        },
                        children: [
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              font: `700 18px var(--fd,Oswald),sans-serif`,
                              textTransform: `uppercase`,
                            },
                            children: `Deportivas`,
                          }),
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              font: `500 11px var(--fb,Oswald),sans-serif`,
                              color: `var(--br-texto-3,#A89E92)`,
                            },
                            children: `Plataforma del proveedor · mismo saldo`,
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        style: {
                          font: `700 14px var(--fb,Oswald),sans-serif`,
                          fontVariantNumeric: `tabular-nums`,
                        },
                        children: renderContent(e.vReal),
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      flex: `1`,
                      display: `grid`,
                      placeItems: `center`,
                      background: `repeating-linear-gradient(135deg,var(--br-tarjeta,#131110) 0 16px,var(--br-raya-b,#0F0E0D) 16px 32px)`,
                    },
                    children: (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        font: `600 12px var(--fb,Oswald),sans-serif`,
                        color: `var(--br-texto-4,#7D746A)`,
                        letterSpacing: `.08em`,
                      },
                      children: `[ iframe de la plataforma deportiva ]`,
                    }),
                  }),
                ],
              }),
            })
          : null,
        e.narrow
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `fixed`,
                  left: `12px`,
                  right: `12px`,
                  bottom: `12px`,
                  zIndex: `45`,
                  height: `66px`,
                  borderRadius: `22px`,
                  background: `rgba(var(--br-superficie-rgb,22,20,18),.92)`,
                  backdropFilter: `blur(14px)`,
                  border: `1px solid var(--br-linea,#2B2724)`,
                  display: `grid`,
                  gridTemplateColumns: `repeat(6,1fr)`,
                  alignItems: `center`,
                  boxShadow: `0 20px 40px -10px rgba(0,0,0,.7)`,
                },
                children: asArray(e.dock).map((e, t) =>
                  (0, JSXRuntime.jsx)(
                    React.Fragment,
                    {
                      children: (0, JSXRuntime.jsxs)(`div`, {
                        style: resolveStyle(
                          `display:flex;flex-direction:column;align-items:center;gap:4px;color:${e?.fg ?? ``};font:700 10px var(--fb,Oswald),sans-serif;cursor:pointer`,
                        ),
                        onClick: e?.onClick,
                        children: [
                          (0, JSXRuntime.jsx)(`svg`, {
                            viewBox: `0 0 24 24`,
                            width: `21`,
                            height: `21`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `2`,
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            children: (0, JSXRuntime.jsx)(`path`, {
                              d: e?.icon,
                            }),
                          }),
                          renderContent(e?.l),
                        ],
                      }),
                    },
                    t,
                  ),
                ),
              }),
            })
          : null,
        e.cmdOpen
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  position: `fixed`,
                  inset: `0`,
                  zIndex: `60`,
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `flex-start`,
                  padding: `11vh 16px 16px`,
                  boxSizing: `border-box`,
                  perspective: `1400px`,
                  overflow: `hidden`,
                },
                onClick: e.closeCmd,
                children: [
                  (0, JSXRuntime.jsx)(`div`, {
                    style: resolveStyle(
                      `position:absolute;inset:0;background:rgba(0,0,0,.74);animation:${e.cmdBackAnim ?? ``}`,
                    ),
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: resolveStyle(
                      `position:fixed;z-index:2;left:${e.lqEl ?? ``};top:${e.lqEt ?? ``};width:${e.lqEw ?? ``};height:${e.lqH ?? ``};max-height:calc(100vh - ${e.lqEt ?? ``} - 16px);overflow:hidden;background:var(--br-superficie-3,#1E1B18);border:1px solid var(--br-linea-fuerte,#3A3530);border-radius:24px;box-sizing:border-box;box-shadow:0 60px 120px -20px rgba(0,0,0,.95),0 0 0 1px rgba(var(--br-p-rgb,255,91,20),.06);visibility:${e.lqVis ?? ``};--sl:${e.lqSl ?? ``};--st:${e.lqSt ?? ``};--sw:${e.lqSw ?? ``};--sh:${e.lqSh ?? ``};--el:${e.lqEl ?? ``};--et:${e.lqEt ?? ``};--ew:${e.lqEw ?? ``};--eh:${e.lqEh ?? ``};animation:${e.lqAnim ?? ``};display:flex;flex-direction:column`,
                    ),
                    ref: e.cmdPanelRef,
                    onClick: e.stop,
                    children: (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        display: `flex`,
                        flexDirection: `column`,
                        minHeight: `0`,
                      },
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `flex:none;display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid ${e.lqRowBd ?? ``};animation:${e.lqRowAnim ?? ``};transition:border-color .3s`,
                          ),
                          children: [
                            (0, JSXRuntime.jsx)(`svg`, {
                              style: {
                                flex: `none`,
                                stroke: `var(--br-p,#FF5B14)`,
                              },
                              viewBox: `0 0 24 24`,
                              width: `18`,
                              height: `18`,
                              fill: `none`,
                              strokeWidth: `2.2`,
                              strokeLinecap: `round`,
                              children: (0, JSXRuntime.jsx)(`path`, {
                                d: `M4 11a7 7 0 1 0 14 0a7 7 0 1 0-14 0M20 20l-4-4`,
                              }),
                            }),
                            (0, JSXRuntime.jsx)(`input`, {
                              style: resolveStyle(
                                `animation:${e.lqTxtAnim ?? ``};flex:1;min-width:0;border:none;outline:none;background:transparent;font:600 17px var(--fd,Oswald),sans-serif;color:var(--br-texto,#F3E9D8)`,
                              ),
                              ref: e.cmdRef,
                              value: ge(e.cmdQ),
                              onChange: e.onCmdQ,
                              placeholder: `Buscar juegos, proveedores…`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                font: `700 10px var(--fb,Oswald),sans-serif`,
                                color: `var(--br-texto-3,#A89E92)`,
                                border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                borderRadius: `6px`,
                                padding: `4px 7px`,
                                cursor: `pointer`,
                              },
                              onClick: e.closeCmd,
                              children: `ESC`,
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `max-height:52vh;overflow-y:auto;padding:8px;animation:${e.lqBodyAnim ?? ``}`,
                          ),
                          children: [
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                gap: `12px`,
                                padding: `12px`,
                                margin: `2px 0 6px`,
                                borderRadius: `14px`,
                                background: `var(--br-p,#FF5B14)`,
                                color: `var(--br-tinta,#121110)`,
                                cursor: `pointer`,
                              },
                              onClick: e.surprise,
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `36px`,
                                    height: `36px`,
                                    flex: `none`,
                                    borderRadius: `10px`,
                                    background: `var(--br-tinta,#121110)`,
                                    display: `grid`,
                                    placeItems: `center`,
                                  },
                                  children: (0, JSXRuntime.jsxs)(`svg`, {
                                    style: {
                                      stroke: `var(--br-p,#FF5B14)`,
                                    },
                                    viewBox: `0 0 24 24`,
                                    width: `20`,
                                    height: `20`,
                                    fill: `none`,
                                    strokeWidth: `2`,
                                    children: [
                                      (0, JSXRuntime.jsx)(`rect`, {
                                        x: `3`,
                                        y: `3`,
                                        width: `18`,
                                        height: `18`,
                                        rx: `4.5`,
                                      }),
                                      (0, JSXRuntime.jsx)(`circle`, {
                                        style: {
                                          fill: `var(--br-p,#FF5B14)`,
                                        },
                                        cx: `8`,
                                        cy: `8`,
                                        r: `1.5`,
                                        stroke: `none`,
                                      }),
                                      (0, JSXRuntime.jsx)(`circle`, {
                                        style: {
                                          fill: `var(--br-p,#FF5B14)`,
                                        },
                                        cx: `16`,
                                        cy: `8`,
                                        r: `1.5`,
                                        stroke: `none`,
                                      }),
                                      (0, JSXRuntime.jsx)(`circle`, {
                                        style: {
                                          fill: `var(--br-p,#FF5B14)`,
                                        },
                                        cx: `12`,
                                        cy: `12`,
                                        r: `1.5`,
                                        stroke: `none`,
                                      }),
                                      (0, JSXRuntime.jsx)(`circle`, {
                                        style: {
                                          fill: `var(--br-p,#FF5B14)`,
                                        },
                                        cx: `8`,
                                        cy: `16`,
                                        r: `1.5`,
                                        stroke: `none`,
                                      }),
                                      (0, JSXRuntime.jsx)(`circle`, {
                                        style: {
                                          fill: `var(--br-p,#FF5B14)`,
                                        },
                                        cx: `16`,
                                        cy: `16`,
                                        r: `1.5`,
                                        stroke: `none`,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    flex: `1`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        font: `700 15px var(--fb,Oswald),sans-serif`,
                                      },
                                      children: `Sorprendeme`,
                                    }),
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        font: `500 12px var(--fb,Oswald),sans-serif`,
                                      },
                                      children: `Tirá el dado y abrimos un juego al azar`,
                                    }),
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `700 12px var(--fb,Oswald),sans-serif`,
                                  },
                                  children: `→`,
                                }),
                              ],
                            }),
                            asArray(e.cmdGroups).map((e, t) =>
                              (0, JSXRuntime.jsx)(
                                React.Fragment,
                                {
                                  children: (0, JSXRuntime.jsxs)(`div`, {
                                    children: [
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          padding: `12px 10px 6px`,
                                          font: `700 10px var(--fb,Oswald),sans-serif`,
                                          letterSpacing: `.16em`,
                                          color: `var(--br-texto-4,#7D746A)`,
                                        },
                                        children: renderContent(e?.l),
                                      }),
                                      asArray(e?.items).map((e, t) =>
                                        (0, JSXRuntime.jsx)(
                                          React.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsxs)(
                                              `div`,
                                              {
                                                style: resolveStyle(
                                                  `display:flex;align-items:center;gap:12px;padding:10px;border-radius:12px;background:${e?.bg ?? ``};cursor:pointer;transition:background .15s`,
                                                ),
                                                onClick: e?.run,
                                                onMouseEnter: e?.hover,
                                                children: [
                                                  (0, JSXRuntime.jsx)(`span`, {
                                                    style: resolveStyle(
                                                      `width:36px;height:36px;flex:none;border-radius:10px;background:${e?.ib ?? ``};color:${e?.ifg ?? ``};display:grid;place-items:center;font:700 12px var(--fb,Oswald),sans-serif;letter-spacing:.005em`,
                                                    ),
                                                    children: renderContent(
                                                      e?.ic,
                                                    ),
                                                  }),
                                                  (0, JSXRuntime.jsxs)(`div`, {
                                                    style: {
                                                      flex: `1`,
                                                      minWidth: `0`,
                                                    },
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `div`,
                                                        {
                                                          style: {
                                                            font: `700 14px var(--fb,Oswald),sans-serif`,
                                                          },
                                                          children:
                                                            renderContent(e?.l),
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `div`,
                                                        {
                                                          style: {
                                                            font: `500 12px var(--fb,Oswald),sans-serif`,
                                                            color: `var(--br-texto-3,#A89E92)`,
                                                          },
                                                          children:
                                                            renderContent(e?.s),
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                  (0, JSXRuntime.jsx)(`span`, {
                                                    style: resolveStyle(
                                                      `font:700 12px var(--fb,Oswald),sans-serif;color:var(--br-p-linea,#FF5B14);opacity:${e?.op ?? ``}`,
                                                    ),
                                                    children: `↵`,
                                                  }),
                                                ],
                                              },
                                            ),
                                          },
                                          t,
                                        ),
                                      ),
                                    ],
                                  }),
                                },
                                t,
                              ),
                            ),
                            e.cmdEmpty
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      padding: `36px`,
                                      textAlign: `center`,
                                      font: `600 14px var(--fb,Oswald),sans-serif`,
                                      color: `var(--br-texto-3,#A89E92)`,
                                    },
                                    children: [
                                      `Sin resultados para “`,
                                      renderContent(e.cmdQ),
                                      `”`,
                                    ],
                                  }),
                                })
                              : null,
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: resolveStyle(
                            `flex:none;display:flex;gap:16px;padding:12px 18px;border-top:1px solid var(--br-linea,#2B2724);font:600 11px var(--fb,Oswald),sans-serif;color:var(--br-texto-4,#7D746A);animation:${e.lqBodyAnim ?? ``}`,
                          ),
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              children: `↑↓ navegar`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              children: `↵ abrir`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              children: `esc cerrar`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                flex: `1`,
                              },
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                color: `var(--br-p-claro,#FF8A4C)`,
                              },
                              children: renderContent(e.cmdCount),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null,
        e.lOpen
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  position: `fixed`,
                  inset: `0`,
                  zIndex: `70`,
                  background: `var(--br-hondo,#0C0B0A)`,
                  display: `flex`,
                  flexDirection: `column`,
                  overflowY: `auto`,
                  overflowX: `hidden`,
                },
                ref: e.lRef,
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      position: `sticky`,
                      top: `0`,
                      zIndex: `3`,
                      height: `66px`,
                      flex: `none`,
                      display: `flex`,
                      alignItems: `center`,
                      gap: `12px`,
                      padding: `0 clamp(12px,2vw,24px)`,
                      background: `rgba(var(--br-hondo-rgb,12,11,10),.94)`,
                      backdropFilter: `blur(10px)`,
                    },
                    children: [
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          width: `42px`,
                          height: `42px`,
                          flex: `none`,
                          borderRadius: `12px`,
                          border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                          display: `grid`,
                          placeItems: `center`,
                          cursor: `pointer`,
                          font: `700 20px var(--fd,Oswald),sans-serif`,
                        },
                        onClick: e.closeLaunch,
                        children: `×`,
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          flex: `1`,
                          minWidth: `0`,
                        },
                        children: [
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              font: `700 17px var(--fd,Oswald),sans-serif`,
                              letterSpacing: `.005em`,
                              whiteSpace: `nowrap`,
                              overflow: `hidden`,
                              textOverflow: `ellipsis`,
                            },
                            children: renderContent(e.lName),
                          }),
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              font: `500 12px var(--fb,Oswald),sans-serif`,
                              color: `var(--br-texto-3,#A89E92)`,
                            },
                            children: [
                              renderContent(e.lVendor),
                              ` · `,
                              renderContent(e.lType),
                            ],
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          display: `flex`,
                          alignItems: `center`,
                          gap: `8px`,
                          font: `700 12px var(--fb,Oswald),sans-serif`,
                          cursor: `pointer`,
                          flex: `none`,
                        },
                        onClick: e.toggleDemo,
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            style: resolveStyle(
                              `width:40px;height:22px;border-radius:11px;background:${e.demoBg ?? ``};position:relative;display:block;border:1px solid var(--br-linea-fuerte,#3A3530);box-sizing:border-box;transition:background .2s`,
                            ),
                            children: (0, JSXRuntime.jsx)(`span`, {
                              style: resolveStyle(
                                `position:absolute;top:2px;left:${e.demoX ?? ``};width:16px;height:16px;border-radius:50%;background:var(--br-blanco,#FFFFFF);transition:left .18s`,
                              ),
                            }),
                          }),
                          `Demo`,
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          display: `flex`,
                          alignItems: `center`,
                          gap: `7px`,
                          background: `var(--br-superficie,#161412)`,
                          border: `1px solid var(--br-linea,#2B2724)`,
                          borderRadius: `12px`,
                          padding: `9px 12px`,
                          font: `700 13px var(--fb,Oswald),sans-serif`,
                          flex: `none`,
                        },
                        children: [
                          e.bonusOn
                            ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                children: (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    background: `var(--br-p,#FF5B14)`,
                                    color: `var(--br-tinta,#121110)`,
                                    font: `700 9px var(--fb,Oswald),sans-serif`,
                                    padding: `3px 5px`,
                                    borderRadius: `5px`,
                                  },
                                  children: `BONO`,
                                }),
                              })
                            : null,
                          renderContent(e.activeBal),
                        ],
                      }),
                      (0, JSXRuntime.jsx)(`div`, {
                        className: `br0-a`,
                        style: {
                          width: `42px`,
                          height: `42px`,
                          flex: `none`,
                          borderRadius: `12px`,
                          background: `var(--br-p,#FF5B14)`,
                          color: `var(--br-tinta,#121110)`,
                          display: `grid`,
                          placeItems: `center`,
                          cursor: `pointer`,
                          transition: `transform .2s`,
                        },
                        onClick: e.toggleFull,
                        title: `Pantalla completa`,
                        children: (0, JSXRuntime.jsx)(`svg`, {
                          viewBox: `0 0 24 24`,
                          width: `18`,
                          height: `18`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `2.2`,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          children: (0, JSXRuntime.jsx)(`path`, {
                            d: `M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5`,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: resolveStyle(
                      `flex:none;height:${e.frameH ?? ``};margin:${e.frameM ?? ``};border-radius:${e.frameR ?? ``};overflow:hidden;position:${e.framePos ?? ``};inset:${e.frameInset ?? ``};z-index:${e.frameZ ?? ``};background:repeating-linear-gradient(135deg,var(--br-raya-a,#171513) 0 18px,var(--br-tarjeta,#131110) 18px 36px);border:1px solid ${e.frameBd ?? ``};transition:border-radius .3s`,
                    ),
                    ref: e.frameRef,
                    children: [
                      e.lFull
                        ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                            children: (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `absolute`,
                                top: `14px`,
                                right: `14px`,
                                zIndex: `5`,
                                display: `flex`,
                                alignItems: `center`,
                                gap: `8px`,
                                height: `42px`,
                                padding: `0 14px`,
                                borderRadius: `12px`,
                                background: `rgba(var(--br-hondo-rgb,12,11,10),.85)`,
                                border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                color: `var(--br-texto,#F3E9D8)`,
                                font: `700 13px var(--fb,Oswald),sans-serif`,
                                cursor: `pointer`,
                                backdropFilter: `blur(8px)`,
                              },
                              onClick: e.toggleFull,
                              children: [
                                (0, JSXRuntime.jsx)(`svg`, {
                                  viewBox: `0 0 24 24`,
                                  width: `18`,
                                  height: `18`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  strokeWidth: `2.2`,
                                  strokeLinecap: `round`,
                                  strokeLinejoin: `round`,
                                  children: (0, JSXRuntime.jsx)(`path`, {
                                    d: `M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5`,
                                  }),
                                }),
                                `Salir`,
                              ],
                            }),
                          })
                        : null,
                      e.lLoading
                        ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                            children: (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `absolute`,
                                inset: `0`,
                                display: `flex`,
                                flexDirection: `column`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: `22px`,
                                padding: `24px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `width:120px;height:120px;border-radius:28px;background:${e.lBg ?? ``};color:${e.lFg ?? ``};display:flex;align-items:flex-end;padding:12px;box-sizing:border-box;font:700 44px/0.85 var(--fd,Oswald),sans-serif;letter-spacing:.005em;box-shadow:0 30px 60px -20px rgba(var(--br-p-rgb,255,91,20),.45)`,
                                  ),
                                  children: renderContent(e.lArt),
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `10px`,
                                    minWidth: `260px`,
                                  },
                                  children: asArray(e.lSteps).map((e, t) =>
                                    (0, JSXRuntime.jsx)(
                                      React.Fragment,
                                      {
                                        children: (0, JSXRuntime.jsxs)(`div`, {
                                          style: resolveStyle(
                                            `display:flex;align-items:center;gap:10px;font:700 14px var(--fb,Oswald),sans-serif;color:${e?.fg ?? ``};transition:color .3s`,
                                          ),
                                          children: [
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: resolveStyle(
                                                `width:20px;height:20px;border-radius:50%;background:${e?.bg ?? ``};border:2px solid ${e?.bd ?? ``};box-sizing:border-box;display:grid;place-items:center;font:700 10px var(--fb,Oswald),sans-serif;color:var(--br-tinta,#121110)`,
                                              ),
                                              children: renderContent(e?.mark),
                                            }),
                                            renderContent(e?.l),
                                          ],
                                        }),
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    width: `260px`,
                                    height: `6px`,
                                    borderRadius: `3px`,
                                    background: `var(--br-linea,#2B2724)`,
                                    overflow: `hidden`,
                                  },
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    style: resolveStyle(
                                      `height:100%;width:${e.lPct ?? ``};background:var(--br-p,#FF5B14);transition:width 1.6s cubic-bezier(.4,.1,.2,1)`,
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          })
                        : null,
                      e.lReady
                        ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                            children: [
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  position: `absolute`,
                                  inset: `0`,
                                  display: `flex`,
                                  flexDirection: `column`,
                                  alignItems: `center`,
                                  justifyContent: `center`,
                                  gap: `14px`,
                                  padding: `24px`,
                                  textAlign: `center`,
                                },
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `700 10px var(--fb,Oswald),sans-serif`,
                                      letterSpacing: `.18em`,
                                      color: `var(--br-texto-3,#A89E92)`,
                                    },
                                    children: `JUEGO DEL PROVEEDOR · IFRAME`,
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: resolveStyle(
                                      `font:700 clamp(80px,16vw,220px)/0.82 var(--fd,Oswald),sans-serif;letter-spacing:.005em;color:${e.lArtC ?? ``}`,
                                    ),
                                    children: renderContent(e.lArt),
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `700 22px var(--fd,Oswald),sans-serif`,
                                      letterSpacing: `.005em`,
                                    },
                                    children: renderContent(e.lName),
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `500 11px var(--fb,Oswald),sans-serif`,
                                      color: `var(--br-texto-4,#7D746A)`,
                                      wordBreak: `break-all`,
                                    },
                                    children: renderContent(e.launchInfo),
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  position: `absolute`,
                                  left: `14px`,
                                  right: `14px`,
                                  bottom: `14px`,
                                  display: `flex`,
                                  gap: `10px`,
                                  alignItems: `center`,
                                  background: `rgba(var(--br-hondo-rgb,12,11,10),.92)`,
                                  border: `1px solid var(--br-linea,#2B2724)`,
                                  borderRadius: `16px`,
                                  padding: `8px 8px 8px 16px`,
                                  flexWrap: `wrap`,
                                },
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `700 9px var(--fb,Oswald),sans-serif`,
                                      letterSpacing: `.14em`,
                                      color: `var(--br-texto-4,#7D746A)`,
                                    },
                                    children: `PROTOTIPO`,
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      flex: `1`,
                                      minWidth: `140px`,
                                      font: `700 14px var(--fb,Oswald),sans-serif`,
                                    },
                                    children: renderContent(e.lRoundL),
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      background: `var(--br-p,#FF5B14)`,
                                      color: `var(--br-tinta,#121110)`,
                                      font: `700 13px var(--fb,Oswald),sans-serif`,
                                      padding: `11px 16px`,
                                      borderRadius: `11px`,
                                      cursor: `pointer`,
                                    },
                                    onClick: e.simRound,
                                    children: `Simular ronda`,
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      e.lMaint
                        ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                            children: (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `absolute`,
                                inset: `0`,
                                display: `flex`,
                                flexDirection: `column`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: `12px`,
                                padding: `24px`,
                                textAlign: `center`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `700 11px var(--fb,Oswald),sans-serif`,
                                    letterSpacing: `.16em`,
                                    color: `var(--br-p,#FF5B14)`,
                                  },
                                  children: `EN MANTENIMIENTO`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `700 28px/1.1 var(--fd,Oswald),sans-serif`,
                                    letterSpacing: `.005em`,
                                    maxWidth: `460px`,
                                  },
                                  children: `Esta mesa no está disponible ahora`,
                                }),
                                (0, JSXRuntime.jsxs)(`span`, {
                                  style: {
                                    font: `500 14px var(--fb,Oswald),sans-serif`,
                                    color: `var(--br-texto-3,#A89E92)`,
                                    maxWidth: `400px`,
                                  },
                                  children: [
                                    renderContent(e.lVendor),
                                    ` la está actualizando. Probá otra mesa en vivo mientras tanto.`,
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    marginTop: `8px`,
                                    background: `var(--br-p,#FF5B14)`,
                                    color: `var(--br-tinta,#121110)`,
                                    font: `700 14px var(--fb,Oswald),sans-serif`,
                                    padding: `13px 22px`,
                                    borderRadius: `12px`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.closeLaunch,
                                  children: `Volver al lobby`,
                                }),
                              ],
                            }),
                          })
                        : null,
                      e.lNoFunds
                        ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                            children: (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `absolute`,
                                inset: `0`,
                                display: `flex`,
                                flexDirection: `column`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: `12px`,
                                padding: `24px`,
                                textAlign: `center`,
                                background: `rgba(var(--br-hondo-rgb,12,11,10),.94)`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `700 11px var(--fb,Oswald),sans-serif`,
                                    letterSpacing: `.16em`,
                                    color: `var(--br-p,#FF5B14)`,
                                  },
                                  children: `SALDO INSUFICIENTE`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `700 28px/1.1 var(--fd,Oswald),sans-serif`,
                                    letterSpacing: `.005em`,
                                    maxWidth: `460px`,
                                  },
                                  children: `Tu saldo y tu bono están en $ 0`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `500 14px var(--fb,Oswald),sans-serif`,
                                    color: `var(--br-texto-3,#A89E92)`,
                                  },
                                  children: `Pedí un depósito o activá el modo demo para seguir.`,
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    marginTop: `8px`,
                                    background: `var(--br-p,#FF5B14)`,
                                    color: `var(--br-tinta,#121110)`,
                                    font: `700 14px var(--fb,Oswald),sans-serif`,
                                    padding: `13px 22px`,
                                    borderRadius: `12px`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.depFromGame,
                                  children: `Pedir depósito`,
                                }),
                              ],
                            }),
                          })
                        : null,
                    ],
                  }),
                  e.moreOn
                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                        children: (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            flex: `none`,
                            padding: `6px clamp(12px,2vw,24px) 40px`,
                            display: `flex`,
                            flexDirection: `column`,
                            gap: `14px`,
                          },
                          children: [
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: `8px`,
                                font: `700 11px var(--fb,Oswald),sans-serif`,
                                letterSpacing: `.16em`,
                                color: `var(--br-texto-4,#7D746A)`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `28px`,
                                    height: `1px`,
                                    background: `var(--br-linea,#2B2724)`,
                                  },
                                }),
                                `DESLIZÁ PARA CAMBIAR DE JUEGO`,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `28px`,
                                    height: `1px`,
                                    background: `var(--br-linea,#2B2724)`,
                                  },
                                }),
                              ],
                            }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                alignItems: `baseline`,
                                justifyContent: `space-between`,
                                gap: `12px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `700 26px var(--fd,Oswald),sans-serif`,
                                    textTransform: `uppercase`,
                                  },
                                  children: `Seguí jugando`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `600 13px var(--fb,Oswald),sans-serif`,
                                    color: `var(--br-texto-3,#A89E92)`,
                                  },
                                  children: renderContent(e.moreSub),
                                }),
                              ],
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: resolveStyle(
                                `display:grid;grid-template-columns:${e.moreCols ?? ``};gap:12px`,
                              ),
                              children: asArray(e.moreGames).map((e, t) =>
                                (0, JSXRuntime.jsx)(
                                  React.Fragment,
                                  {
                                    children: (0, JSXRuntime.jsxs)(`div`, {
                                      className: `br0-b`,
                                      style: {
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `7px`,
                                        cursor: `pointer`,
                                        minWidth: `0`,
                                        transition: `transform .25s cubic-bezier(.2,.9,.25,1.2)`,
                                      },
                                      onClick: e?.go,
                                      children: [
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: resolveStyle(
                                            `position:relative;aspect-ratio:3 / 4;border-radius:16px;overflow:hidden;background:${e?.bg ?? ``};color:${e?.fg ?? ``};display:flex;align-items:flex-end;padding:10px;box-sizing:border-box;border:1px solid rgba(255,255,255,.08)`,
                                          ),
                                          children: [
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                font: `700 40px/0.85 var(--fd,Oswald),sans-serif`,
                                              },
                                              children: renderContent(e?.art),
                                            }),
                                            e?.hasImg
                                              ? (0, JSXRuntime.jsx)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: (0,
                                                    JSXRuntime.jsx)(`div`, {
                                                      style: resolveStyle(
                                                        `position:absolute;inset:0;background-image:${e?.imgUrl ?? ``};background-size:cover;background-position:center`,
                                                      ),
                                                    }),
                                                  },
                                                )
                                              : null,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                position: `absolute`,
                                                top: `8px`,
                                                left: `8px`,
                                                padding: `3px 7px`,
                                                borderRadius: `6px`,
                                                background: `rgba(var(--br-hondo-rgb,12,11,10),.8)`,
                                                color: `var(--br-texto,#F3E9D8)`,
                                                font: `700 9px var(--fb,Oswald),sans-serif`,
                                                letterSpacing: `.1em`,
                                              },
                                              children: renderContent(e?.tag),
                                            }),
                                          ],
                                        }),
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            minWidth: `0`,
                                          },
                                          children: [
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: {
                                                font: `700 13px var(--fb,Oswald),sans-serif`,
                                                whiteSpace: `nowrap`,
                                                overflow: `hidden`,
                                                textOverflow: `ellipsis`,
                                              },
                                              children: renderContent(e?.name),
                                            }),
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: {
                                                font: `500 11px var(--fb,Oswald),sans-serif`,
                                                color: `var(--br-texto-4,#7D746A)`,
                                                whiteSpace: `nowrap`,
                                                overflow: `hidden`,
                                                textOverflow: `ellipsis`,
                                              },
                                              children: renderContent(
                                                e?.vendor,
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  t,
                                ),
                              ),
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
            })
          : null,
        e.mOpen
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `fixed`,
                  inset: `0`,
                  zIndex: `75`,
                  background: `rgba(0,0,0,.72)`,
                  backdropFilter: `blur(10px)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  padding: `16px`,
                  boxSizing: `border-box`,
                },
                onClick: e.closeM,
                children: (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    position: `relative`,
                    width: `100%`,
                    maxWidth: `520px`,
                    maxHeight: `calc(100vh - 32px)`,
                    overflowY: `auto`,
                    background: `var(--br-tarjeta,#131110)`,
                    border: `1px solid var(--br-linea,#2B2724)`,
                    borderRadius: `28px`,
                    boxShadow: `0 60px 120px -30px rgba(var(--br-p-rgb,255,91,20),.35)`,
                    display: `flex`,
                    flexDirection: `column`,
                  },
                  onClick: e.stop,
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        position: `relative`,
                        flex: `none`,
                        overflow: `hidden`,
                        padding: `22px 24px 18px`,
                        borderBottom: `1px solid var(--br-linea,#2B2724)`,
                        display: `flex`,
                        alignItems: `flex-start`,
                        gap: `14px`,
                      },
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            position: `absolute`,
                            right: `-40px`,
                            top: `-60px`,
                            width: `180px`,
                            height: `180px`,
                            opacity: `.12`,
                          },
                          children: [
                            e.isoMarca
                              ? null
                              : (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsxs)(`svg`, {
                                    style: {
                                      fill: `var(--br-p,#FF5B14)`,
                                    },
                                    viewBox: `0 0 100 120`,
                                    width: `100%`,
                                    height: `100%`,
                                    children: [
                                      (0, JSXRuntime.jsx)(`path`, {
                                        d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                      }),
                                      (0, JSXRuntime.jsx)(`path`, {
                                        d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                      }),
                                    ],
                                  }),
                                }),
                            e.isoMarca
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsx)(`img`, {
                                    style: {
                                      width: `100%`,
                                      height: `100%`,
                                      objectFit: `contain`,
                                      display: `block`,
                                    },
                                    src: be(e.isoUrl),
                                    alt: ``,
                                  }),
                                })
                              : null,
                          ],
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            flex: `1`,
                            position: `relative`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                font: `700 10px var(--fb,Oswald),sans-serif`,
                                letterSpacing: `.18em`,
                                color: `var(--br-p-claro,#FF8A4C)`,
                              },
                              children: renderContent(e.mKicker),
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                font: `700 32px/1 var(--fd,Oswald),sans-serif`,
                                textTransform: `uppercase`,
                                marginTop: `6px`,
                              },
                              children: renderContent(e.mTitle),
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            position: `relative`,
                            width: `40px`,
                            height: `40px`,
                            flex: `none`,
                            borderRadius: `12px`,
                            border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                            display: `grid`,
                            placeItems: `center`,
                            cursor: `pointer`,
                            font: `700 20px var(--fb,Oswald),sans-serif`,
                          },
                          onClick: e.closeM,
                          children: `×`,
                        }),
                      ],
                    }),
                    e.mForm
                      ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                          children: (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              flex: `none`,
                              padding: `20px 24px 24px`,
                              display: `flex`,
                              flexDirection: `column`,
                              gap: `14px`,
                            },
                            children: [
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  display: `flex`,
                                  justifyContent: `space-between`,
                                  alignItems: `baseline`,
                                },
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `700 10px var(--fb,Oswald),sans-serif`,
                                      letterSpacing: `.16em`,
                                      color: `var(--br-texto-4,#7D746A)`,
                                    },
                                    children: `MONTO`,
                                  }),
                                  e.mIsRet
                                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                        children: (0, JSXRuntime.jsxs)(`span`, {
                                          style: {
                                            font: `500 12px var(--fb,Oswald),sans-serif`,
                                            color: `var(--br-texto-3,#A89E92)`,
                                          },
                                          children: [
                                            `Disponible `,
                                            (0, JSXRuntime.jsx)(`b`, {
                                              style: {
                                                color: `var(--br-texto,#F3E9D8)`,
                                              },
                                              children: renderContent(e.mAvail),
                                            }),
                                            ` · `,
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                color: `var(--br-p-claro,#FF8A4C)`,
                                                cursor: `pointer`,
                                                textDecoration: `underline`,
                                              },
                                              onClick: e.mMax,
                                              children: `Máx`,
                                            }),
                                          ],
                                        }),
                                      })
                                    : null,
                                  e.mIsDep
                                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                        children: (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            font: `500 12px var(--fb,Oswald),sans-serif`,
                                            color: `var(--br-texto-3,#A89E92)`,
                                          },
                                          children: `Mínimo $ 1.000`,
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                              (0, JSXRuntime.jsx)(`input`, {
                                className: `br0-c`,
                                style: {
                                  border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                  borderRadius: `18px`,
                                  padding: `14px 18px`,
                                  font: `700 44px/1 var(--fd,Oswald),sans-serif`,
                                  background: `var(--br-hondo,#0C0B0A)`,
                                  outline: `none`,
                                  color: `var(--br-texto,#F3E9D8)`,
                                  width: `100%`,
                                  boxSizing: `border-box`,
                                  fontVariantNumeric: `tabular-nums`,
                                },
                                value: ge(e.mAmt),
                                onChange: e.onMAmt,
                                placeholder: `$ 0`,
                              }),
                              (0, JSXRuntime.jsx)(`div`, {
                                style: {
                                  display: `flex`,
                                  flexWrap: `wrap`,
                                  gap: `6px`,
                                },
                                children: asArray(e.mPresets).map((e, t) =>
                                  (0, JSXRuntime.jsx)(
                                    React.Fragment,
                                    {
                                      children: (0, JSXRuntime.jsx)(`span`, {
                                        style: resolveStyle(
                                          `padding:8px 12px;border-radius:10px;border:1px solid ${e?.bd ?? ``};background:${e?.bg ?? ``};color:${e?.fg ?? ``};font:700 13px var(--fb,Oswald),sans-serif;cursor:pointer;transition:all .15s`,
                                        ),
                                        onClick: e?.onClick,
                                        children: renderContent(e?.l),
                                      }),
                                    },
                                    t,
                                  ),
                                ),
                              }),
                              e.mIsDep
                                ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                    children: [
                                      (0, JSXRuntime.jsxs)(`div`, {
                                        style: {
                                          display: `flex`,
                                          flexDirection: `column`,
                                          gap: `8px`,
                                        },
                                        children: [
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              font: `700 10px var(--fb,Oswald),sans-serif`,
                                              letterSpacing: `.16em`,
                                              color: `var(--br-texto-4,#7D746A)`,
                                            },
                                            children: `TRANSFERÍ A LA CUENTA DEL CAJERO`,
                                          }),
                                          (0, JSXRuntime.jsxs)(`div`, {
                                            style: {
                                              position: `relative`,
                                              overflow: `hidden`,
                                              background: `var(--br-hondo,#0C0B0A)`,
                                              border: `1px solid var(--br-linea,#2B2724)`,
                                              borderRadius: `18px`,
                                              padding: `14px 16px 6px`,
                                            },
                                            children: [
                                              (0, JSXRuntime.jsxs)(`div`, {
                                                style: {
                                                  position: `absolute`,
                                                  right: `-30px`,
                                                  top: `-30px`,
                                                  width: `110px`,
                                                  height: `110px`,
                                                  opacity: `.12`,
                                                },
                                                children: [
                                                  e.isoMarca
                                                    ? null
                                                    : (0, JSXRuntime.jsx)(
                                                        JSXRuntime.Fragment,
                                                        {
                                                          children: (0,
                                                          JSXRuntime.jsxs)(
                                                            `svg`,
                                                            {
                                                              style: {
                                                                fill: `var(--br-p,#FF5B14)`,
                                                              },
                                                              viewBox: `0 0 100 120`,
                                                              width: `100%`,
                                                              height: `100%`,
                                                              children: [
                                                                (0,
                                                                JSXRuntime.jsx)(
                                                                  `path`,
                                                                  {
                                                                    d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                                                  },
                                                                ),
                                                                (0,
                                                                JSXRuntime.jsx)(
                                                                  `path`,
                                                                  {
                                                                    d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                        },
                                                      ),
                                                  e.isoMarca
                                                    ? (0, JSXRuntime.jsx)(
                                                        JSXRuntime.Fragment,
                                                        {
                                                          children: (0,
                                                          JSXRuntime.jsx)(
                                                            `img`,
                                                            {
                                                              style: {
                                                                width: `100%`,
                                                                height: `100%`,
                                                                objectFit: `contain`,
                                                                display: `block`,
                                                              },
                                                              src: be(e.isoUrl),
                                                              alt: ``,
                                                            },
                                                          ),
                                                        },
                                                      )
                                                    : null,
                                                ],
                                              }),
                                              (0, JSXRuntime.jsxs)(`div`, {
                                                style: {
                                                  position: `relative`,
                                                  display: `flex`,
                                                  alignItems: `center`,
                                                  justifyContent: `space-between`,
                                                  gap: `10px`,
                                                  paddingBottom: `10px`,
                                                },
                                                children: [
                                                  (0, JSXRuntime.jsxs)(`div`, {
                                                    style: {
                                                      minWidth: `0`,
                                                    },
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `div`,
                                                        {
                                                          style: {
                                                            font: `600 11px var(--fb,Oswald),sans-serif`,
                                                            letterSpacing: `.08em`,
                                                            color: `var(--br-texto-4,#7D746A)`,
                                                          },
                                                          children: `ALIAS`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `div`,
                                                        {
                                                          style: {
                                                            font: `700 26px/1.1 var(--fd,Oswald),sans-serif`,
                                                            color: `var(--br-p,#FF5B14)`,
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
                                                    ],
                                                  }),
                                                  (0, JSXRuntime.jsx)(`span`, {
                                                    style: {
                                                      flex: `none`,
                                                      background: `var(--br-p,#FF5B14)`,
                                                      color: `var(--br-tinta,#121110)`,
                                                      padding: `10px 14px`,
                                                      borderRadius: `10px`,
                                                      font: `700 13px var(--fb,Oswald),sans-serif`,
                                                      cursor: `pointer`,
                                                    },
                                                    onClick: e.copyAlias,
                                                    children: renderContent(
                                                      e.copyL,
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, JSXRuntime.jsxs)(`div`, {
                                                style: {
                                                  position: `relative`,
                                                },
                                                children: [
                                                  (0, JSXRuntime.jsxs)(`div`, {
                                                    style: {
                                                      display: `flex`,
                                                      alignItems: `center`,
                                                      gap: `10px`,
                                                      padding: `9px 0`,
                                                      borderTop: `1px solid var(--br-linea,#2B2724)`,
                                                    },
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            width: `70px`,
                                                            flex: `none`,
                                                            font: `600 11px var(--fb,Oswald),sans-serif`,
                                                            letterSpacing: `.08em`,
                                                            color: `var(--br-texto-4,#7D746A)`,
                                                          },
                                                          children: `CBU`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            flex: `1`,
                                                            minWidth: `0`,
                                                            font: `600 14px var(--fb,Oswald),sans-serif`,
                                                            whiteSpace: `nowrap`,
                                                            overflow: `hidden`,
                                                            textOverflow: `ellipsis`,
                                                            fontVariantNumeric: `tabular-nums`,
                                                          },
                                                          children:
                                                            renderContent(
                                                              e.cjCbu,
                                                            ),
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          className: `br0-0`,
                                                          style: {
                                                            flex: `none`,
                                                            padding: `6px 10px`,
                                                            borderRadius: `8px`,
                                                            border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                                            font: `700 11px var(--fb,Oswald),sans-serif`,
                                                            cursor: `pointer`,
                                                          },
                                                          onClick: e.copyCbu,
                                                          children: `Copiar`,
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                  (0, JSXRuntime.jsxs)(`div`, {
                                                    style: {
                                                      display: `flex`,
                                                      alignItems: `center`,
                                                      gap: `10px`,
                                                      padding: `9px 0`,
                                                      borderTop: `1px solid var(--br-linea,#2B2724)`,
                                                    },
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            width: `70px`,
                                                            flex: `none`,
                                                            font: `600 11px var(--fb,Oswald),sans-serif`,
                                                            letterSpacing: `.08em`,
                                                            color: `var(--br-texto-4,#7D746A)`,
                                                          },
                                                          children: `TITULAR`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            flex: `1`,
                                                            minWidth: `0`,
                                                            font: `600 14px var(--fb,Oswald),sans-serif`,
                                                            whiteSpace: `nowrap`,
                                                            overflow: `hidden`,
                                                            textOverflow: `ellipsis`,
                                                            fontVariantNumeric: `tabular-nums`,
                                                          },
                                                          children:
                                                            renderContent(
                                                              e.cjName,
                                                            ),
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                  (0, JSXRuntime.jsxs)(`div`, {
                                                    style: {
                                                      display: `flex`,
                                                      alignItems: `center`,
                                                      gap: `10px`,
                                                      padding: `9px 0`,
                                                      borderTop: `1px solid var(--br-linea,#2B2724)`,
                                                    },
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            width: `70px`,
                                                            flex: `none`,
                                                            font: `600 11px var(--fb,Oswald),sans-serif`,
                                                            letterSpacing: `.08em`,
                                                            color: `var(--br-texto-4,#7D746A)`,
                                                          },
                                                          children: `BANCO`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            flex: `1`,
                                                            minWidth: `0`,
                                                            font: `600 14px var(--fb,Oswald),sans-serif`,
                                                            whiteSpace: `nowrap`,
                                                            overflow: `hidden`,
                                                            textOverflow: `ellipsis`,
                                                            fontVariantNumeric: `tabular-nums`,
                                                          },
                                                          children:
                                                            renderContent(
                                                              e.cjBank,
                                                            ),
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, JSXRuntime.jsxs)(`div`, {
                                        style: {
                                          display: `flex`,
                                          flexDirection: `column`,
                                          gap: `8px`,
                                        },
                                        children: [
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              font: `700 10px var(--fb,Oswald),sans-serif`,
                                              letterSpacing: `.16em`,
                                              color: `var(--br-texto-4,#7D746A)`,
                                            },
                                            children: `COMPROBANTE DE PAGO`,
                                          }),
                                          (0, JSXRuntime.jsx)(`input`, {
                                            style: {
                                              display: `none`,
                                            },
                                            ref: e.fileRef,
                                            type: `file`,
                                            accept: `image/*,application/pdf`,
                                            onChange: e.onFile,
                                          }),
                                          e.noFile
                                            ? (0, JSXRuntime.jsx)(
                                                JSXRuntime.Fragment,
                                                {
                                                  children: (0,
                                                  JSXRuntime.jsxs)(`div`, {
                                                    style: resolveStyle(
                                                      `display:flex;align-items:center;gap:14px;padding:16px;border-radius:16px;border:1.5px dashed ${e.dropBd ?? ``};background:${e.dropBg ?? ``};cursor:pointer;transition:all .2s`,
                                                    ),
                                                    onClick: e.pickFile,
                                                    onDragOver: e.onDragOver,
                                                    onDragLeave: e.onDragLeave,
                                                    onDrop: e.onDrop,
                                                    children: [
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            width: `42px`,
                                                            height: `42px`,
                                                            flex: `none`,
                                                            borderRadius: `12px`,
                                                            background: `var(--br-superficie-3,#1E1B18)`,
                                                            display: `grid`,
                                                            placeItems: `center`,
                                                          },
                                                          children: (0,
                                                          JSXRuntime.jsx)(
                                                            `svg`,
                                                            {
                                                              style: {
                                                                stroke: `var(--br-p,#FF5B14)`,
                                                              },
                                                              viewBox: `0 0 24 24`,
                                                              width: `20`,
                                                              height: `20`,
                                                              fill: `none`,
                                                              strokeWidth: `2`,
                                                              strokeLinecap: `round`,
                                                              strokeLinejoin: `round`,
                                                              children: (0,
                                                              JSXRuntime.jsx)(
                                                                `path`,
                                                                {
                                                                  d: `M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3`,
                                                                },
                                                              ),
                                                            },
                                                          ),
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsxs)(
                                                        `div`,
                                                        {
                                                          style: {
                                                            flex: `1`,
                                                            minWidth: `0`,
                                                          },
                                                          children: [
                                                            (0, JSXRuntime.jsx)(
                                                              `div`,
                                                              {
                                                                style: {
                                                                  font: `700 14px var(--fb,Oswald),sans-serif`,
                                                                },
                                                                children: `Subí o arrastrá el comprobante`,
                                                              },
                                                            ),
                                                            (0, JSXRuntime.jsx)(
                                                              `div`,
                                                              {
                                                                style: {
                                                                  font: `500 12px var(--fb,Oswald),sans-serif`,
                                                                  color: `var(--br-texto-3,#A89E92)`,
                                                                },
                                                                children: `Captura o PDF de la transferencia · hasta 10 MB`,
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                },
                                              )
                                            : null,
                                          e.hasFile
                                            ? (0, JSXRuntime.jsx)(
                                                JSXRuntime.Fragment,
                                                {
                                                  children: (0,
                                                  JSXRuntime.jsxs)(`div`, {
                                                    style: {
                                                      display: `flex`,
                                                      alignItems: `center`,
                                                      gap: `12px`,
                                                      padding: `10px`,
                                                      borderRadius: `16px`,
                                                      border: `1px solid var(--br-p,#FF5B14)`,
                                                      background: `rgba(var(--br-p-rgb,255,91,20),.08)`,
                                                    },
                                                    children: [
                                                      (0, JSXRuntime.jsxs)(
                                                        `div`,
                                                        {
                                                          style: {
                                                            position: `relative`,
                                                            width: `52px`,
                                                            height: `64px`,
                                                            flex: `none`,
                                                            borderRadius: `10px`,
                                                            overflow: `hidden`,
                                                            background: `var(--br-superficie-3,#1E1B18)`,
                                                            display: `grid`,
                                                            placeItems: `center`,
                                                            font: `700 12px var(--fb,Oswald),sans-serif`,
                                                            color: `var(--br-p-claro,#FF8A4C)`,
                                                          },
                                                          children: [
                                                            `PDF`,
                                                            e.fileIsImg
                                                              ? (0,
                                                                JSXRuntime.jsx)(
                                                                  JSXRuntime.Fragment,
                                                                  {
                                                                    children:
                                                                      (0,
                                                                      JSXRuntime.jsx)(
                                                                        `div`,
                                                                        {
                                                                          style:
                                                                            resolveStyle(
                                                                              `position:absolute;inset:0;background-image:${e.fileImg ?? ``};background-size:cover;background-position:center`,
                                                                            ),
                                                                        },
                                                                      ),
                                                                  },
                                                                )
                                                              : null,
                                                          ],
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsxs)(
                                                        `div`,
                                                        {
                                                          style: {
                                                            flex: `1`,
                                                            minWidth: `0`,
                                                          },
                                                          children: [
                                                            (0, JSXRuntime.jsx)(
                                                              `div`,
                                                              {
                                                                style: {
                                                                  font: `700 14px var(--fb,Oswald),sans-serif`,
                                                                  whiteSpace: `nowrap`,
                                                                  overflow: `hidden`,
                                                                  textOverflow: `ellipsis`,
                                                                },
                                                                children:
                                                                  renderContent(
                                                                    e.fileName,
                                                                  ),
                                                              },
                                                            ),
                                                            (0,
                                                            JSXRuntime.jsxs)(
                                                              `div`,
                                                              {
                                                                style: {
                                                                  font: `500 12px var(--fb,Oswald),sans-serif`,
                                                                  color: `var(--br-texto-3,#A89E92)`,
                                                                },
                                                                children: [
                                                                  renderContent(
                                                                    e.fileSize,
                                                                  ),
                                                                  ` · listo para enviar`,
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            font: `700 12px var(--fb,Oswald),sans-serif`,
                                                            color: `var(--br-p-claro,#FF8A4C)`,
                                                            cursor: `pointer`,
                                                            textDecoration: `underline`,
                                                          },
                                                          onClick: e.pickFile,
                                                          children: `Cambiar`,
                                                        },
                                                      ),
                                                      (0, JSXRuntime.jsx)(
                                                        `span`,
                                                        {
                                                          style: {
                                                            width: `32px`,
                                                            height: `32px`,
                                                            flex: `none`,
                                                            borderRadius: `10px`,
                                                            border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                                            display: `grid`,
                                                            placeItems: `center`,
                                                            cursor: `pointer`,
                                                            font: `700 16px var(--fb,Oswald),sans-serif`,
                                                          },
                                                          onClick: e.clearFile,
                                                          children: `×`,
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                },
                                              )
                                            : null,
                                        ],
                                      }),
                                    ],
                                  })
                                : null,
                              e.mIsRet
                                ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                    children: (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `grid`,
                                        gridTemplateColumns: `repeat(auto-fit,minmax(180px,1fr))`,
                                        gap: `10px`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsxs)(`label`, {
                                          style: {
                                            display: `flex`,
                                            flexDirection: `column`,
                                            gap: `6px`,
                                          },
                                          children: [
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                font: `700 10px var(--fb,Oswald),sans-serif`,
                                                letterSpacing: `.16em`,
                                                color: `var(--br-texto-4,#7D746A)`,
                                              },
                                              children: `CBU, CVU O ALIAS`,
                                            }),
                                            (0, JSXRuntime.jsx)(`input`, {
                                              className: `br0-c`,
                                              style: {
                                                border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                                borderRadius: `14px`,
                                                padding: `14px 15px`,
                                                font: `600 15px var(--fb,Oswald),sans-serif`,
                                                background: `var(--br-hondo,#0C0B0A)`,
                                                outline: `none`,
                                                color: `var(--br-texto,#F3E9D8)`,
                                                width: `100%`,
                                                boxSizing: `border-box`,
                                              },
                                              value: ge(e.mAcc),
                                              onChange: e.onMAcc,
                                              placeholder: `martina.mp`,
                                            }),
                                          ],
                                        }),
                                        (0, JSXRuntime.jsxs)(`label`, {
                                          style: {
                                            display: `flex`,
                                            flexDirection: `column`,
                                            gap: `6px`,
                                          },
                                          children: [
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: {
                                                font: `700 10px var(--fb,Oswald),sans-serif`,
                                                letterSpacing: `.16em`,
                                                color: `var(--br-texto-4,#7D746A)`,
                                              },
                                              children: `TITULAR`,
                                            }),
                                            (0, JSXRuntime.jsx)(`input`, {
                                              className: `br0-c`,
                                              style: {
                                                border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                                borderRadius: `14px`,
                                                padding: `14px 15px`,
                                                font: `600 15px var(--fb,Oswald),sans-serif`,
                                                background: `var(--br-hondo,#0C0B0A)`,
                                                outline: `none`,
                                                color: `var(--br-texto,#F3E9D8)`,
                                                width: `100%`,
                                                boxSizing: `border-box`,
                                              },
                                              value: ge(e.mName),
                                              onChange: e.onMName,
                                              placeholder: `Nombre y apellido`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  })
                                : null,
                              (0, JSXRuntime.jsxs)(`label`, {
                                style: {
                                  display: `flex`,
                                  flexDirection: `column`,
                                  gap: `6px`,
                                },
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `700 10px var(--fb,Oswald),sans-serif`,
                                      letterSpacing: `.16em`,
                                      color: `var(--br-texto-4,#7D746A)`,
                                    },
                                    children: `NOTA PARA EL CAJERO`,
                                  }),
                                  (0, JSXRuntime.jsx)(`textarea`, {
                                    className: `br0-c`,
                                    style: {
                                      border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                      borderRadius: `14px`,
                                      padding: `14px 15px`,
                                      font: `600 15px var(--fb,Oswald),sans-serif`,
                                      background: `var(--br-hondo,#0C0B0A)`,
                                      outline: `none`,
                                      color: `var(--br-texto,#F3E9D8)`,
                                      width: `100%`,
                                      boxSizing: `border-box`,
                                      resize: `none`,
                                      fontWeight: `500`,
                                      lineHeight: `1.45`,
                                    },
                                    value: ge(e.mNote),
                                    onChange: e.onMNote,
                                    rows: 3,
                                    placeholder: `Ej: Transferí desde Mercado Pago, titular Martina R., operación 88213445`,
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsx)(`div`, {
                                style: {
                                  font: `500 12px/1.5 var(--fb,Oswald),sans-serif`,
                                  color: `var(--br-texto-3,#A89E92)`,
                                  background: `var(--br-hondo,#0C0B0A)`,
                                  borderRadius: `12px`,
                                  padding: `10px 12px`,
                                  border: `1px dashed var(--br-linea,#2B2724)`,
                                },
                                children: renderContent(e.mInfo),
                              }),
                              e.mHasErr
                                ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                    children: (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        background: `rgba(var(--br-p-rgb,255,91,20),.12)`,
                                        border: `1px solid var(--br-p,#FF5B14)`,
                                        color: `var(--br-p-palido,#FFB592)`,
                                        borderRadius: `12px`,
                                        padding: `10px 12px`,
                                        font: `600 13px var(--fb,Oswald),sans-serif`,
                                      },
                                      children: renderContent(e.mErr),
                                    }),
                                  })
                                : null,
                              (0, JSXRuntime.jsx)(`div`, {
                                className: `br0-2`,
                                style: {
                                  background: `var(--br-p,#FF5B14)`,
                                  color: `var(--br-tinta,#121110)`,
                                  borderRadius: `16px`,
                                  padding: `17px`,
                                  textAlign: `center`,
                                  font: `700 16px var(--fb,Oswald),sans-serif`,
                                  cursor: `pointer`,
                                  letterSpacing: `.02em`,
                                },
                                onClick: e.submitM,
                                children: renderContent(e.mBtn),
                              }),
                              (0, JSXRuntime.jsxs)(`a`, {
                                className: `br0-0`,
                                style: {
                                  display: `flex`,
                                  alignItems: `center`,
                                  gap: `12px`,
                                  padding: `12px 14px`,
                                  borderRadius: `14px`,
                                  border: `1px solid var(--br-linea,#2B2724)`,
                                  background: `var(--br-hondo,#0C0B0A)`,
                                  color: `var(--br-texto,#F3E9D8)`,
                                  textDecoration: `none`,
                                },
                                href: e.waForm,
                                target: `_blank`,
                                rel: `noopener`,
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      width: `34px`,
                                      height: `34px`,
                                      flex: `none`,
                                      borderRadius: `10px`,
                                      background: `var(--br-texto,#F3E9D8)`,
                                      display: `grid`,
                                      placeItems: `center`,
                                    },
                                    children: (0, JSXRuntime.jsxs)(`svg`, {
                                      style: {
                                        stroke: `var(--br-tinta,#121110)`,
                                      },
                                      viewBox: `0 0 24 24`,
                                      width: `18`,
                                      height: `18`,
                                      fill: `none`,
                                      strokeWidth: `2`,
                                      strokeLinecap: `round`,
                                      strokeLinejoin: `round`,
                                      children: [
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M4 20l1.5-4A8 8 0 1 1 8 18.5z`,
                                        }),
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M9 10c.5 2 2 3.5 4 4l1-1.2 2 .8-.5 1.6c-3 .3-6.5-3-6.8-6l1.6-.5.8 2z`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, JSXRuntime.jsxs)(`span`, {
                                    style: {
                                      flex: `1`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      gap: `1px`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsx)(`b`, {
                                        style: {
                                          font: `700 14px var(--fb,Oswald),sans-serif`,
                                        },
                                        children: `¿No te responden? Escribile al cajero`,
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          font: `500 12px var(--fb,Oswald),sans-serif`,
                                          color: `var(--br-texto-3,#A89E92)`,
                                        },
                                        children: `Abrir chat de WhatsApp`,
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `700 14px var(--fb,Oswald),sans-serif`,
                                      color: `var(--br-p,#FF5B14)`,
                                    },
                                    children: `→`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        })
                      : null,
                    e.mSent
                      ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                          children: (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              flex: `none`,
                              padding: `22px 24px 24px`,
                              display: `flex`,
                              flexDirection: `column`,
                              gap: `16px`,
                            },
                            children: [
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  display: `flex`,
                                  alignItems: `center`,
                                  gap: `14px`,
                                },
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      width: `52px`,
                                      height: `52px`,
                                      flex: `none`,
                                      borderRadius: `16px`,
                                      background: `var(--br-p,#FF5B14)`,
                                      color: `var(--br-tinta,#121110)`,
                                      display: `grid`,
                                      placeItems: `center`,
                                      font: `700 24px var(--fb,Oswald),sans-serif`,
                                    },
                                    children: `✓`,
                                  }),
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    children: [
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          font: `700 24px/1.05 var(--fd,Oswald),sans-serif`,
                                          textTransform: `uppercase`,
                                        },
                                        children: renderContent(e.mSentTitle),
                                      }),
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          font: `500 13px var(--fb,Oswald),sans-serif`,
                                          color: `var(--br-texto-3,#A89E92)`,
                                          marginTop: `3px`,
                                        },
                                        children: `El cajero ya la recibió con tu nota`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  display: `flex`,
                                  justifyContent: `space-between`,
                                  alignItems: `baseline`,
                                  background: `var(--br-hondo,#0C0B0A)`,
                                  border: `1px solid var(--br-linea,#2B2724)`,
                                  borderRadius: `16px`,
                                  padding: `14px 16px`,
                                },
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `700 40px/1 var(--fd,Oswald),sans-serif`,
                                      fontVariantNumeric: `tabular-nums`,
                                    },
                                    children: renderContent(e.mSentAmt),
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `italic 500 13px var(--fb,Oswald),sans-serif`,
                                      color: `var(--br-texto-3,#A89E92)`,
                                      maxWidth: `55%`,
                                      textAlign: `right`,
                                      whiteSpace: `nowrap`,
                                      overflow: `hidden`,
                                      textOverflow: `ellipsis`,
                                    },
                                    children: renderContent(e.mSentNote),
                                  }),
                                ],
                              }),
                              e.sentHasFile
                                ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                    children: (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        alignItems: `center`,
                                        gap: `10px`,
                                        font: `600 13px var(--fb,Oswald),sans-serif`,
                                        color: `var(--br-texto-3,#A89E92)`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            width: `22px`,
                                            height: `22px`,
                                            borderRadius: `6px`,
                                            background: `var(--br-superficie-3,#1E1B18)`,
                                            display: `grid`,
                                            placeItems: `center`,
                                            color: `var(--br-p-claro,#FF8A4C)`,
                                            font: `700 12px var(--fb,Oswald),sans-serif`,
                                          },
                                          children: `✓`,
                                        }),
                                        `Comprobante adjunto: `,
                                        (0, JSXRuntime.jsx)(`b`, {
                                          style: {
                                            color: `var(--br-texto,#F3E9D8)`,
                                            whiteSpace: `nowrap`,
                                            overflow: `hidden`,
                                            textOverflow: `ellipsis`,
                                          },
                                          children: renderContent(e.sentFile),
                                        }),
                                      ],
                                    }),
                                  })
                                : null,
                              (0, JSXRuntime.jsx)(`div`, {
                                style: {
                                  display: `grid`,
                                  gridTemplateColumns: `repeat(3,1fr)`,
                                  gap: `8px`,
                                },
                                children: asArray(e.mSteps).map((e, t) =>
                                  (0, JSXRuntime.jsx)(
                                    React.Fragment,
                                    {
                                      children: (0, JSXRuntime.jsxs)(`div`, {
                                        style: {
                                          display: `flex`,
                                          flexDirection: `column`,
                                          gap: `6px`,
                                          alignItems: `flex-start`,
                                        },
                                        children: [
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: resolveStyle(
                                              `width:24px;height:24px;border-radius:50%;background:${e?.bg ?? ``};border:2px solid ${e?.bd ?? ``};box-sizing:border-box;display:grid;place-items:center;font:700 11px var(--fb,Oswald),sans-serif;color:var(--br-tinta,#121110);transition:all .3s`,
                                            ),
                                            children: renderContent(e?.mark),
                                          }),
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: resolveStyle(
                                              `font:700 13px var(--fb,Oswald),sans-serif;color:${e?.fg ?? ``}`,
                                            ),
                                            children: renderContent(e?.l),
                                          }),
                                        ],
                                      }),
                                    },
                                    t,
                                  ),
                                ),
                              }),
                              (0, JSXRuntime.jsxs)(`a`, {
                                className: `br0-0`,
                                style: {
                                  display: `flex`,
                                  alignItems: `center`,
                                  gap: `12px`,
                                  padding: `12px 14px`,
                                  borderRadius: `14px`,
                                  border: `1px solid var(--br-linea,#2B2724)`,
                                  background: `var(--br-hondo,#0C0B0A)`,
                                  color: `var(--br-texto,#F3E9D8)`,
                                  textDecoration: `none`,
                                },
                                href: e.waReq,
                                target: `_blank`,
                                rel: `noopener`,
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      width: `34px`,
                                      height: `34px`,
                                      flex: `none`,
                                      borderRadius: `10px`,
                                      background: `var(--br-texto,#F3E9D8)`,
                                      display: `grid`,
                                      placeItems: `center`,
                                    },
                                    children: (0, JSXRuntime.jsxs)(`svg`, {
                                      style: {
                                        stroke: `var(--br-tinta,#121110)`,
                                      },
                                      viewBox: `0 0 24 24`,
                                      width: `18`,
                                      height: `18`,
                                      fill: `none`,
                                      strokeWidth: `2`,
                                      strokeLinecap: `round`,
                                      strokeLinejoin: `round`,
                                      children: [
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M4 20l1.5-4A8 8 0 1 1 8 18.5z`,
                                        }),
                                        (0, JSXRuntime.jsx)(`path`, {
                                          d: `M9 10c.5 2 2 3.5 4 4l1-1.2 2 .8-.5 1.6c-3 .3-6.5-3-6.8-6l1.6-.5.8 2z`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, JSXRuntime.jsxs)(`span`, {
                                    style: {
                                      flex: `1`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      gap: `1px`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsx)(`b`, {
                                        style: {
                                          font: `700 14px var(--fb,Oswald),sans-serif`,
                                        },
                                        children: `¿No te responden? Escribile al cajero`,
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          font: `500 12px var(--fb,Oswald),sans-serif`,
                                          color: `var(--br-texto-3,#A89E92)`,
                                        },
                                        children: `Abrir chat de WhatsApp`,
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      font: `700 14px var(--fb,Oswald),sans-serif`,
                                      color: `var(--br-p,#FF5B14)`,
                                    },
                                    children: `→`,
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsx)(`div`, {
                                style: {
                                  border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                  borderRadius: `14px`,
                                  padding: `14px`,
                                  textAlign: `center`,
                                  font: `700 14px var(--fb,Oswald),sans-serif`,
                                  cursor: `pointer`,
                                },
                                onClick: e.closeM,
                                children: `Listo`,
                              }),
                            ],
                          }),
                        })
                      : null,
                  ],
                }),
              }),
            })
          : null,
        e.diceOpen
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  position: `fixed`,
                  inset: `0`,
                  zIndex: `80`,
                  background: `rgba(var(--br-hondo-rgb,12,11,10),.8)`,
                  backdropFilter: `blur(10px)`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  gap: `34px`,
                  padding: `24px`,
                },
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      font: `700 11px var(--fb,Oswald),sans-serif`,
                      letterSpacing: `.22em`,
                      color: `var(--br-p-claro,#FF8A4C)`,
                    },
                    children: `SORPRENDEME`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      width: `130px`,
                      height: `130px`,
                      perspective: `900px`,
                    },
                    children: (0, JSXRuntime.jsx)(`div`, {
                      style: resolveStyle(
                        `position:relative;width:130px;height:130px;transform-style:preserve-3d;transform:rotateX(${e.dX ?? ``}) rotateY(${e.dY ?? ``});transition:transform 1.25s cubic-bezier(.15,.85,.25,1)`,
                      ),
                      children: asArray(e.diceFaces).map((e, t) =>
                        (0, JSXRuntime.jsx)(
                          React.Fragment,
                          {
                            children: (0, JSXRuntime.jsx)(`div`, {
                              style: resolveStyle(
                                `position:absolute;inset:0;transform:${e?.tf ?? ``};border-radius:26px;background:${e?.bg ?? ``};border:1px solid rgba(255,255,255,.15);box-shadow:inset 0 0 0 6px rgba(0,0,0,.06),inset 0 -12px 24px rgba(0,0,0,.18);display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);padding:20px;box-sizing:border-box;backface-visibility:hidden;-webkit-backface-visibility:hidden`,
                              ),
                              children: asArray(e?.pips).map((t, n) =>
                                (0, JSXRuntime.jsx)(
                                  React.Fragment,
                                  {
                                    children: (0, JSXRuntime.jsx)(`span`, {
                                      style: resolveStyle(
                                        `width:20px;height:20px;border-radius:50%;background:${e?.pc ?? ``};justify-self:center;align-self:center;opacity:${t?.o ?? ``};box-shadow:inset 0 2px 3px rgba(0,0,0,.35)`,
                                      ),
                                    }),
                                  },
                                  n,
                                ),
                              ),
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      width: `260px`,
                      height: `50px`,
                      marginTop: `-26px`,
                      borderRadius: `50%`,
                      background: `radial-gradient(ellipse at center,rgba(var(--br-p-rgb,255,91,20),.45),transparent 70%)`,
                      filter: `blur(10px)`,
                    },
                  }),
                  e.diceRolling
                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                        children: (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            font: `700 26px var(--fd,Oswald),sans-serif`,
                            textTransform: `uppercase`,
                            color: `var(--br-texto,#F3E9D8)`,
                          },
                          children: `Tirando el dado…`,
                        }),
                      })
                    : null,
                  e.diceReveal
                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                        children: (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            alignItems: `center`,
                            gap: `16px`,
                            background: `var(--br-superficie,#161412)`,
                            border: `1px solid var(--br-p,#FF5B14)`,
                            borderRadius: `22px`,
                            padding: `12px 20px 12px 12px`,
                            boxShadow: `0 30px 60px -20px rgba(var(--br-p-rgb,255,91,20),.45)`,
                          },
                          children: [
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: resolveStyle(
                                `position:relative;width:60px;height:80px;flex:none;border-radius:12px;overflow:hidden;background:${e.dgBg ?? ``};color:${e.dgFg ?? ``};display:grid;place-items:center;font:700 26px var(--fd,Oswald),sans-serif`,
                              ),
                              children: [
                                renderContent(e.dgArt),
                                e.dgHasImg
                                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                      children: (0, JSXRuntime.jsx)(`div`, {
                                        style: resolveStyle(
                                          `position:absolute;inset:0;background-image:${e.dgImg ?? ``};background-size:cover;background-position:center`,
                                        ),
                                      }),
                                    })
                                  : null,
                              ],
                            }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              children: [
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    font: `700 10px var(--fb,Oswald),sans-serif`,
                                    letterSpacing: `.18em`,
                                    color: `var(--br-p-claro,#FF8A4C)`,
                                  },
                                  children: [
                                    `SALIÓ EL `,
                                    renderContent(e.diceN),
                                    ` · TE TOCÓ`,
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    font: `700 26px/1.05 var(--fd,Oswald),sans-serif`,
                                    textTransform: `uppercase`,
                                    marginTop: `4px`,
                                  },
                                  children: renderContent(e.dgName),
                                }),
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    font: `500 13px var(--fb,Oswald),sans-serif`,
                                    color: `var(--br-texto-3,#A89E92)`,
                                    marginTop: `2px`,
                                  },
                                  children: [
                                    renderContent(e.dgVendor),
                                    ` · abriendo…`,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
            })
          : null,
        e.umOpen
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `fixed`,
                  inset: `0`,
                  zIndex: `39`,
                },
                onClick: e.umClose,
              }),
            })
          : null,
        e.chatTeaser
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsxs)(`div`, {
                style: resolveStyle(
                  `position:fixed;right:${e.teaseR ?? ``};bottom:${e.teaseB ?? ``};z-index:71;max-width:240px;display:flex;align-items:flex-start;gap:10px;background:var(--br-texto,#F3E9D8);color:var(--br-tinta,#121110);border-radius:18px 18px 4px 18px;padding:12px 12px 12px 14px;box-shadow:0 24px 50px -16px rgba(0,0,0,.8);animation:ucTease .5s cubic-bezier(.2,.9,.25,1.2) both`,
                ),
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      flex: `1`,
                      cursor: `pointer`,
                    },
                    onClick: e.openChat,
                    children: [
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          font: `700 13px var(--fb,Oswald),sans-serif`,
                        },
                        children: `¿Necesitás una mano?`,
                      }),
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          font: `500 12px/1.4 var(--fb,Oswald),sans-serif`,
                          color: `var(--br-inverso-2,#6A5F52)`,
                          marginTop: `2px`,
                        },
                        children: `Caro está en línea y responde en ~2 min.`,
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      flex: `none`,
                      width: `22px`,
                      height: `22px`,
                      borderRadius: `50%`,
                      display: `grid`,
                      placeItems: `center`,
                      cursor: `pointer`,
                      color: `var(--br-inverso-2,#6A5F52)`,
                    },
                    onClick: e.hideTeaser,
                    children: (0, JSXRuntime.jsx)(`svg`, {
                      viewBox: `0 0 24 24`,
                      width: `16`,
                      height: `16`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `2.4`,
                      strokeLinecap: `round`,
                      children: (0, JSXRuntime.jsx)(`path`, {
                        d: `M6 6l12 12M18 6L6 18`,
                      }),
                    }),
                  }),
                ],
              }),
            })
          : null,
        e.chatOpen
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsxs)(`div`, {
                style: resolveStyle(
                  `position:fixed;right:${e.chatR ?? ``};bottom:${e.chatB ?? ``};width:${e.chatW ?? ``};height:${e.chatH ?? ``};z-index:72;border-radius:28px;overflow:hidden;background:var(--br-chat,#0F0D0C);border:1px solid var(--br-linea,#2B2724);box-shadow:0 50px 100px -30px rgba(0,0,0,.9),0 0 0 1px rgba(var(--br-p-rgb,255,91,20),.08);display:flex;flex-direction:column;animation:${e.chatAnim ?? ``}`,
                ),
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      position: `relative`,
                      flex: `none`,
                      overflow: `hidden`,
                      padding: `18px 18px 16px`,
                      background: `var(--br-cabecera,#161210)`,
                      borderBottom: `1px solid var(--br-linea,#2B2724)`,
                    },
                    children: [
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          position: `absolute`,
                          right: `-40px`,
                          top: `-70px`,
                          width: `200px`,
                          height: `200px`,
                          borderRadius: `50%`,
                          background: `var(--br-p,#FF5B14)`,
                          filter: `blur(50px)`,
                          opacity: `.45`,
                          animation: `ucBlob 9s ease-in-out infinite`,
                        },
                      }),
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          position: `absolute`,
                          left: `-60px`,
                          bottom: `-90px`,
                          width: `180px`,
                          height: `180px`,
                          borderRadius: `50%`,
                          background: `var(--br-texto,#F3E9D8)`,
                          filter: `blur(60px)`,
                          opacity: `.10`,
                          animation: `ucBlob2 11s ease-in-out infinite`,
                        },
                      }),
                      e.isoMarca
                        ? null
                        : (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                            children: (0, JSXRuntime.jsxs)(`svg`, {
                              style: {
                                position: `absolute`,
                                right: `18px`,
                                top: `-8px`,
                                opacity: `.35`,
                                stroke: `var(--br-p,#FF5B14)`,
                              },
                              viewBox: `0 0 100 120`,
                              height: `130`,
                              fill: `none`,
                              strokeWidth: `1.4`,
                              children: [
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                }),
                                (0, JSXRuntime.jsx)(`path`, {
                                  d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                }),
                              ],
                            }),
                          }),
                      e.isoMarca
                        ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                            children: (0, JSXRuntime.jsx)(`img`, {
                              style: {
                                position: `absolute`,
                                right: `18px`,
                                top: `-8px`,
                                opacity: `.35`,
                                height: `130px`,
                                width: `108px`,
                                objectFit: `contain`,
                              },
                              src: be(e.isoUrl),
                              alt: ``,
                            }),
                          })
                        : null,
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          position: `relative`,
                          display: `flex`,
                          alignItems: `center`,
                          gap: `12px`,
                        },
                        children: [
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              position: `relative`,
                              display: `flex`,
                              flex: `none`,
                            },
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  width: `42px`,
                                  height: `42px`,
                                  borderRadius: `14px`,
                                  background: `var(--br-texto,#F3E9D8)`,
                                  color: `var(--br-tinta,#121110)`,
                                  display: `grid`,
                                  placeItems: `center`,
                                  font: `700 17px var(--fd,Oswald),sans-serif`,
                                  border: `2px solid var(--br-cabecera,#161210)`,
                                },
                                children: `CA`,
                              }),
                              (0, JSXRuntime.jsxs)(`span`, {
                                style: {
                                  width: `42px`,
                                  height: `42px`,
                                  marginLeft: `-14px`,
                                  borderRadius: `14px`,
                                  background: `var(--br-p,#FF5B14)`,
                                  color: `var(--br-tinta,#121110)`,
                                  display: `grid`,
                                  placeItems: `center`,
                                  border: `2px solid var(--br-cabecera,#161210)`,
                                },
                                children: [
                                  e.isoMarca
                                    ? null
                                    : (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                        children: (0, JSXRuntime.jsxs)(`svg`, {
                                          style: {
                                            fill: `var(--br-tinta,#121110)`,
                                          },
                                          viewBox: `0 0 100 120`,
                                          height: `20`,
                                          children: [
                                            (0, JSXRuntime.jsx)(`path`, {
                                              d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                                            }),
                                            (0, JSXRuntime.jsx)(`path`, {
                                              d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                                            }),
                                          ],
                                        }),
                                      }),
                                  e.isoMarca
                                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                        children: (0, JSXRuntime.jsx)(`img`, {
                                          className: `${e.isoTinta ?? ``}`,
                                          style: {
                                            height: `20px`,
                                            width: `17px`,
                                            objectFit: `contain`,
                                            display: `block`,
                                          },
                                          src: be(e.isoUrl),
                                          alt: ``,
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  position: `absolute`,
                                  left: `30px`,
                                  bottom: `-2px`,
                                  width: `12px`,
                                  height: `12px`,
                                  borderRadius: `50%`,
                                  background: `var(--br-p,#FF5B14)`,
                                  border: `2px solid var(--br-cabecera,#161210)`,
                                  animation: `rbPulse 1.8s infinite`,
                                },
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              flex: `1`,
                              minWidth: `0`,
                            },
                            children: [
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  font: `700 22px/1 var(--fd,Oswald),sans-serif`,
                                  textTransform: `uppercase`,
                                },
                                children: [
                                  `Soporte `,
                                  renderContent(e.marcaNombre),
                                ],
                              }),
                              (0, JSXRuntime.jsx)(`div`, {
                                style: {
                                  font: `600 12px var(--fb,Oswald),sans-serif`,
                                  color: `var(--br-texto-3,#A89E92)`,
                                  marginTop: `5px`,
                                  whiteSpace: `nowrap`,
                                  overflow: `hidden`,
                                  textOverflow: `ellipsis`,
                                },
                                children: renderContent(e.chatStatus),
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsx)(`a`, {
                            style: {
                              flex: `none`,
                              width: `38px`,
                              height: `38px`,
                              borderRadius: `12px`,
                              background: `rgba(var(--br-sombra-rgb,0,0,0),.35)`,
                              border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                              display: `grid`,
                              placeItems: `center`,
                              color: `var(--br-texto,#F3E9D8)`,
                              textDecoration: `none`,
                            },
                            href: e.waWeb,
                            target: `_blank`,
                            rel: `noopener`,
                            title: `Seguir en WhatsApp Web`,
                            children: (0, JSXRuntime.jsx)(`svg`, {
                              viewBox: `0 0 24 24`,
                              width: `17`,
                              height: `17`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `2`,
                              strokeLinecap: `round`,
                              strokeLinejoin: `round`,
                              children: (0, JSXRuntime.jsx)(`path`, {
                                d: `M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z`,
                              }),
                            }),
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              flex: `none`,
                              width: `38px`,
                              height: `38px`,
                              borderRadius: `12px`,
                              background: `rgba(var(--br-sombra-rgb,0,0,0),.35)`,
                              border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                              display: `grid`,
                              placeItems: `center`,
                              cursor: `pointer`,
                              color: `var(--br-texto,#F3E9D8)`,
                            },
                            onClick: e.closeChat,
                            children: (0, JSXRuntime.jsx)(`svg`, {
                              viewBox: `0 0 24 24`,
                              width: `16`,
                              height: `16`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `2.4`,
                              strokeLinecap: `round`,
                              children: (0, JSXRuntime.jsx)(`path`, {
                                d: `M6 6l12 12M18 6L6 18`,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          position: `relative`,
                          display: `flex`,
                          alignItems: `center`,
                          gap: `10px`,
                          marginTop: `14px`,
                          padding: `10px 12px`,
                          borderRadius: `14px`,
                          background: `rgba(var(--br-sombra-rgb,0,0,0),.4)`,
                          border: `1px solid var(--br-linea,#2B2724)`,
                        },
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              width: `8px`,
                              height: `8px`,
                              flex: `none`,
                              borderRadius: `50%`,
                              background: `var(--br-p,#FF5B14)`,
                            },
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              flex: `1`,
                              minWidth: `0`,
                              font: `600 12px var(--fb,Oswald),sans-serif`,
                              color: `var(--br-texto-2,#D8CDBD)`,
                              whiteSpace: `nowrap`,
                              overflow: `hidden`,
                              textOverflow: `ellipsis`,
                            },
                            children: renderContent(e.chatCtx),
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              flex: `none`,
                              width: `64px`,
                              height: `4px`,
                              borderRadius: `2px`,
                              background: `var(--br-linea,#2B2724)`,
                              overflow: `hidden`,
                            },
                            children: (0, JSXRuntime.jsx)(`span`, {
                              style: resolveStyle(
                                `display:block;height:100%;width:${e.chatCtxPct ?? ``};background:var(--br-p,#FF5B14);border-radius:2px`,
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      flex: `1`,
                      minHeight: `0`,
                      overflowY: `auto`,
                      padding: `16px`,
                      display: `flex`,
                      flexDirection: `column`,
                      gap: `10px`,
                    },
                    ref: e.chatRef,
                    children: [
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          alignSelf: `center`,
                          font: `700 10px var(--fb,Oswald),sans-serif`,
                          letterSpacing: `.18em`,
                          color: `var(--br-texto-4,#7D746A)`,
                          padding: `5px 10px`,
                          borderRadius: `8px`,
                          border: `1px solid var(--br-linea,#2B2724)`,
                        },
                        children: `HOY`,
                      }),
                      asArray(e.chatList).map((e, t) =>
                        (0, JSXRuntime.jsx)(
                          React.Fragment,
                          {
                            children: (0, JSXRuntime.jsxs)(`div`, {
                              style: resolveStyle(
                                `display:flex;flex-direction:column;align-items:${e?.al ?? ``};gap:4px;animation:${e?.anim ?? ``}`,
                              ),
                              children: [
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `max-width:84%;padding:11px 14px;border-radius:${e?.rad ?? ``};background:${e?.bg ?? ``};color:${e?.fg ?? ``};border:1px solid ${e?.bd ?? ``};font:500 14px/1.45 var(--fb,Oswald),sans-serif;text-wrap:pretty`,
                                  ),
                                  children: renderContent(e?.t),
                                }),
                                e?.hasAct
                                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                      children: (0, JSXRuntime.jsxs)(`a`, {
                                        className: `br0-2`,
                                        style: {
                                          display: `flex`,
                                          alignItems: `center`,
                                          gap: `8px`,
                                          padding: `10px 14px`,
                                          borderRadius: `12px`,
                                          background: `var(--br-p,#FF5B14)`,
                                          color: `var(--br-tinta,#121110)`,
                                          font: `700 13px var(--fb,Oswald),sans-serif`,
                                          textDecoration: `none`,
                                          cursor: `pointer`,
                                        },
                                        href: e?.href,
                                        target: e?.target,
                                        rel: `noopener`,
                                        onClick: e?.go,
                                        children: [
                                          renderContent(e?.actL),
                                          ` →`,
                                        ],
                                      }),
                                    })
                                  : null,
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `600 10px var(--fb,Oswald),sans-serif`,
                                    color: `var(--br-texto-5,#5E564E)`,
                                    padding: `0 4px`,
                                  },
                                  children: renderContent(e?.meta),
                                }),
                              ],
                            }),
                          },
                          t,
                        ),
                      ),
                      e.chatTyping
                        ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                            children: (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                alignSelf: `flex-start`,
                                display: `flex`,
                                alignItems: `center`,
                                gap: `5px`,
                                padding: `14px 16px`,
                                borderRadius: `18px 18px 18px 6px`,
                                background: `var(--br-burbuja,#1C1917)`,
                                border: `1px solid var(--br-linea,#2B2724)`,
                                animation: `ucMsgL .3s ease both`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `7px`,
                                    height: `7px`,
                                    borderRadius: `50%`,
                                    background: `var(--br-p-claro,#FF8A4C)`,
                                    animation: `ucDot 1.1s infinite`,
                                  },
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `7px`,
                                    height: `7px`,
                                    borderRadius: `50%`,
                                    background: `var(--br-p-claro,#FF8A4C)`,
                                    animation: `ucDot 1.1s .15s infinite`,
                                  },
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `7px`,
                                    height: `7px`,
                                    borderRadius: `50%`,
                                    background: `var(--br-p-claro,#FF8A4C)`,
                                    animation: `ucDot 1.1s .3s infinite`,
                                  },
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `600 11px var(--fb,Oswald),sans-serif`,
                                    color: `var(--br-texto-4,#7D746A)`,
                                    marginLeft: `6px`,
                                  },
                                  children: `Caro está escribiendo`,
                                }),
                              ],
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      flex: `none`,
                      display: `flex`,
                      gap: `8px`,
                      overflowX: `auto`,
                      padding: `0 16px 10px`,
                      scrollbarWidth: `none`,
                    },
                    children: asArray(e.chatChips).map((e, t) =>
                      (0, JSXRuntime.jsx)(
                        React.Fragment,
                        {
                          children: (0, JSXRuntime.jsx)(`span`, {
                            className: `br0-0`,
                            style: resolveStyle(
                              `flex:none;padding:8px 12px;border-radius:12px;border:1px solid var(--br-linea-fuerte,#3A3530);background:var(--br-superficie,#161412);font:600 12px var(--fb,Oswald),sans-serif;color:var(--br-texto,#F3E9D8);cursor:pointer;white-space:nowrap;animation:ucRise .4s ${e?.dl ?? ``} ease both;transition:border-color .2s`,
                            ),
                            onClick: e?.go,
                            children: renderContent(e?.l),
                          }),
                        },
                        t,
                      ),
                    ),
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      flex: `none`,
                      display: `flex`,
                      alignItems: `center`,
                      gap: `8px`,
                      padding: `10px 12px 12px`,
                      borderTop: `1px solid var(--br-linea,#2B2724)`,
                      background: `var(--br-tarjeta,#131110)`,
                    },
                    children: [
                      (0, JSXRuntime.jsx)(`input`, {
                        style: {
                          flex: `1`,
                          minWidth: `0`,
                          background: `var(--br-campo,#0A0908)`,
                          border: `1px solid var(--br-linea,#2B2724)`,
                          borderRadius: `14px`,
                          padding: `13px 14px`,
                          color: `var(--br-texto,#F3E9D8)`,
                          font: `500 14px var(--fb,Oswald),sans-serif`,
                          outline: `none`,
                        },
                        value: ge(e.chatQ),
                        onChange: e.onChatQ,
                        onKeyDown: e.onChatKey,
                        placeholder: `Escribí tu mensaje…`,
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        style: resolveStyle(
                          `flex:none;width:46px;height:46px;border-radius:14px;background:${e.sendBg ?? ``};color:${e.sendFg ?? ``};display:grid;place-items:center;cursor:pointer;transform:scale(${e.sendSc ?? ``});transition:all .25s cubic-bezier(.2,.9,.25,1.3)`,
                        ),
                        onClick: e.chatSendBtn,
                        children: (0, JSXRuntime.jsx)(`svg`, {
                          viewBox: `0 0 24 24`,
                          width: `18`,
                          height: `18`,
                          fill: `none`,
                          stroke: `currentColor`,
                          strokeWidth: `2.2`,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          children: (0, JSXRuntime.jsx)(`path`, {
                            d: `M5 12h14M13 6l6 6-6 6`,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : null,
        (0, JSXRuntime.jsxs)(`div`, {
          style: resolveStyle(
            `position:fixed;right:${e.fabR ?? ``};bottom:${e.fabB ?? ``};z-index:73;display:${e.fabD ?? ``}`,
          ),
          children: [
            e.chatPing
              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                  children: (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      position: `absolute`,
                      inset: `0`,
                      borderRadius: `50%`,
                      background: `var(--br-p,#FF5B14)`,
                      animation: `ucPing 1.8s ease-out infinite`,
                    },
                  }),
                })
              : null,
            (0, JSXRuntime.jsxs)(`div`, {
              className: `br0-d`,
              style: resolveStyle(
                `position:relative;width:60px;height:60px;border-radius:50%;background:${e.fabBg ?? ``};color:${e.fabFg ?? ``};display:grid;place-items:center;cursor:pointer;box-shadow:0 20px 40px -12px rgba(var(--br-p-rgb,255,91,20),.6);transition:background .3s,color .3s,transform .3s cubic-bezier(.2,.9,.25,1.3)`,
              ),
              onClick: e.toggleChat,
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    position: `absolute`,
                    inset: `-5px`,
                    borderRadius: `50%`,
                    background: `conic-gradient(from 0deg,var(--br-p,#FF5B14),var(--br-texto,#F3E9D8) 25%,transparent 45%,transparent 70%,var(--br-p,#FF5B14))`,
                    animation: `ucSpin 3.6s linear infinite`,
                    WebkitMask: `radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 1.5px))`,
                    mask: `radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 1.5px))`,
                  },
                }),
                (0, JSXRuntime.jsxs)(`svg`, {
                  style: resolveStyle(
                    `position:absolute;opacity:${e.icoA ?? ``};transform:rotate(${e.icoAr ?? ``}) scale(${e.icoAs ?? ``});transition:all .35s cubic-bezier(.2,.9,.25,1.3)`,
                  ),
                  viewBox: `0 0 24 24`,
                  width: `26`,
                  height: `26`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `2.1`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  children: [
                    (0, JSXRuntime.jsx)(`path`, {
                      d: `M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z`,
                    }),
                    (0, JSXRuntime.jsx)(`path`, {
                      d: `M8 10h.01M12 10h.01M16 10h.01`,
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`svg`, {
                  style: resolveStyle(
                    `position:absolute;opacity:${e.icoB ?? ``};transform:rotate(${e.icoBr ?? ``}) scale(${e.icoBs ?? ``});transition:all .35s cubic-bezier(.2,.9,.25,1.3)`,
                  ),
                  viewBox: `0 0 24 24`,
                  width: `24`,
                  height: `24`,
                  fill: `none`,
                  stroke: `currentColor`,
                  strokeWidth: `2.4`,
                  strokeLinecap: `round`,
                  children: (0, JSXRuntime.jsx)(`path`, {
                    d: `M6 6l12 12M18 6L6 18`,
                  }),
                }),
                e.chatBadge
                  ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                      children: (0, JSXRuntime.jsx)(`span`, {
                        style: {
                          position: `absolute`,
                          top: `-2px`,
                          right: `-2px`,
                          minWidth: `20px`,
                          height: `20px`,
                          padding: `0 5px`,
                          boxSizing: `border-box`,
                          borderRadius: `10px`,
                          background: `var(--br-texto,#F3E9D8)`,
                          color: `var(--br-tinta,#121110)`,
                          border: `2px solid var(--br-fondo,#000000)`,
                          display: `grid`,
                          placeItems: `center`,
                          font: `700 11px var(--fb,Oswald),sans-serif`,
                        },
                        children: renderContent(e.chatUnread),
                      }),
                    })
                  : null,
              ],
            }),
          ],
        }),
        e.sheetOn
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsx)(`div`, {
                style: resolveStyle(
                  `position:fixed;inset:0;z-index:85;background:rgba(0,0,0,.74);backdrop-filter:blur(6px);display:flex;align-items:${e.sheetAl ?? ``};justify-content:center;padding:${e.sheetPad ?? ``};box-sizing:border-box;animation:ucFade .25s ease both`,
                ),
                onClick: e.closeSheet,
                children: (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `width:100%;max-width:${e.sheetMax ?? ``};max-height:calc(100vh - 32px);overflow-y:auto;background:var(--br-tarjeta-2,#141210);border:1px solid var(--br-linea,#2B2724);border-radius:${e.sheetRad ?? ``};padding:22px;box-sizing:border-box;animation:ucSheet .45s cubic-bezier(.2,.9,.2,1) both;display:flex;flex-direction:column;gap:18px`,
                  ),
                  onClick: e.stop,
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        alignItems: `flex-start`,
                        gap: `12px`,
                      },
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            flex: `1`,
                            minWidth: `0`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                font: `700 10px var(--fb,Oswald),sans-serif`,
                                letterSpacing: `.18em`,
                                color: `var(--br-p-claro,#FF8A4C)`,
                              },
                              children: renderContent(e.sheetEy),
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                font: `700 30px/1 var(--fd,Oswald),sans-serif`,
                                textTransform: `uppercase`,
                                marginTop: `6px`,
                              },
                              children: renderContent(e.sheetT),
                            }),
                          ],
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            flex: `none`,
                            width: `40px`,
                            height: `40px`,
                            borderRadius: `12px`,
                            border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                            display: `grid`,
                            placeItems: `center`,
                            cursor: `pointer`,
                          },
                          onClick: e.closeSheet,
                          children: (0, JSXRuntime.jsx)(`svg`, {
                            viewBox: `0 0 24 24`,
                            width: `16`,
                            height: `16`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `2.4`,
                            strokeLinecap: `round`,
                            children: (0, JSXRuntime.jsx)(`path`, {
                              d: `M6 6l12 12M18 6L6 18`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    e.isHist
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                display: `grid`,
                                gridTemplateColumns: `1fr 1fr`,
                                gap: `10px`,
                              },
                              children: asArray(e.hSum).map((e, t) =>
                                (0, JSXRuntime.jsx)(
                                  React.Fragment,
                                  {
                                    children: (0, JSXRuntime.jsxs)(`div`, {
                                      style: resolveStyle(
                                        `padding:14px 16px;border-radius:18px;background:${e?.bg ?? ``};color:${e?.fg ?? ``}`,
                                      ),
                                      children: [
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            font: `700 10px var(--fb,Oswald),sans-serif`,
                                            letterSpacing: `.16em`,
                                            opacity: `.7`,
                                          },
                                          children: renderContent(e?.l),
                                        }),
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            font: `700 26px/1 var(--fd,Oswald),sans-serif`,
                                            marginTop: `8px`,
                                            fontVariantNumeric: `tabular-nums`,
                                          },
                                          children: renderContent(e?.v),
                                        }),
                                      ],
                                    }),
                                  },
                                  t,
                                ),
                              ),
                            }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                position: `relative`,
                                display: `grid`,
                                gridTemplateColumns: `repeat(4,1fr)`,
                                background: `var(--br-hondo,#0C0B0A)`,
                                border: `1px solid var(--br-linea,#2B2724)`,
                                borderRadius: `14px`,
                                padding: `4px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `position:absolute;top:4px;bottom:4px;left:${e.hSeg ?? ``};width:calc((100% - 8px) / 4);border-radius:10px;background:var(--br-p,#FF5B14);transition:left .35s cubic-bezier(.2,.9,.2,1)`,
                                  ),
                                }),
                                asArray(e.hTabs).map((e, t) =>
                                  (0, JSXRuntime.jsx)(
                                    React.Fragment,
                                    {
                                      children: (0, JSXRuntime.jsx)(`div`, {
                                        style: resolveStyle(
                                          `position:relative;text-align:center;padding:9px 2px;font:700 12px var(--fb,Oswald),sans-serif;color:${e?.fg ?? ``};cursor:pointer;transition:color .3s`,
                                        ),
                                        onClick: e?.go,
                                        children: renderContent(e?.l),
                                      }),
                                    },
                                    t,
                                  ),
                                ),
                              ],
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                              },
                              children: asArray(e.hRows).map((e, t) =>
                                (0, JSXRuntime.jsx)(
                                  React.Fragment,
                                  {
                                    children: (0, JSXRuntime.jsxs)(`div`, {
                                      style: resolveStyle(
                                        `display:flex;align-items:center;gap:12px;padding:12px 2px;border-bottom:1px solid var(--br-superficie-3,#1E1B18);animation:ucItem .4s ${e?.dl ?? ``} ease both`,
                                      ),
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: resolveStyle(
                                            `width:40px;height:40px;flex:none;border-radius:13px;background:${e?.ibg ?? ``};color:${e?.ifg ?? ``};display:grid;place-items:center;font:700 16px var(--fb,Oswald),sans-serif`,
                                          ),
                                          children: renderContent(e?.ic),
                                        }),
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            flex: `1`,
                                            minWidth: `0`,
                                          },
                                          children: [
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: {
                                                font: `700 14px var(--fb,Oswald),sans-serif`,
                                                whiteSpace: `nowrap`,
                                                overflow: `hidden`,
                                                textOverflow: `ellipsis`,
                                              },
                                              children: renderContent(e?.l),
                                            }),
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: {
                                                font: `500 12px var(--fb,Oswald),sans-serif`,
                                                color: `var(--br-texto-4,#7D746A)`,
                                                marginTop: `2px`,
                                              },
                                              children: renderContent(e?.d),
                                            }),
                                          ],
                                        }),
                                        (0, JSXRuntime.jsxs)(`div`, {
                                          style: {
                                            textAlign: `right`,
                                            flex: `none`,
                                          },
                                          children: [
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: resolveStyle(
                                                `font:700 15px var(--fb,Oswald),sans-serif;font-variant-numeric:tabular-nums;color:${e?.ac ?? ``}`,
                                              ),
                                              children: renderContent(e?.a),
                                            }),
                                            (0, JSXRuntime.jsx)(`span`, {
                                              style: resolveStyle(
                                                `display:inline-block;margin-top:4px;padding:2px 7px;border-radius:6px;font:700 10px var(--fb,Oswald),sans-serif;letter-spacing:.06em;background:${e?.sbg ?? ``};color:${e?.sfg ?? ``}`,
                                              ),
                                              children: renderContent(e?.st),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  t,
                                ),
                              ),
                            }),
                          ],
                        })
                      : null,
                    e.isOp
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            e.opForm
                              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        flexDirection: `column`,
                                        alignItems: `center`,
                                        gap: `10px`,
                                        padding: `8px 0`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            display: `flex`,
                                            gap: `6px`,
                                          },
                                          onMouseLeave: e.opLeave,
                                          children: asArray(e.opStarsL).map(
                                            (e, t) =>
                                              (0, JSXRuntime.jsx)(
                                                React.Fragment,
                                                {
                                                  children: (0, JSXRuntime.jsx)(
                                                    `span`,
                                                    {
                                                      style: resolveStyle(
                                                        `cursor:pointer;color:${e?.c ?? ``};transform:scale(${e?.sc ?? ``});transition:transform .25s cubic-bezier(.2,.9,.25,1.4),color .2s`,
                                                      ),
                                                      onClick: e?.go,
                                                      onMouseEnter: e?.hov,
                                                      children: (0,
                                                      JSXRuntime.jsx)(`svg`, {
                                                        style: {
                                                          fill: e?.fill,
                                                        },
                                                        viewBox: `0 0 24 24`,
                                                        width: `40`,
                                                        height: `40`,
                                                        fill: e?.fill,
                                                        stroke: `currentColor`,
                                                        strokeWidth: `1.6`,
                                                        strokeLinejoin: `round`,
                                                        children: (0,
                                                        JSXRuntime.jsx)(
                                                          `path`,
                                                          {
                                                            d: `M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z`,
                                                          },
                                                        ),
                                                      }),
                                                    },
                                                  ),
                                                },
                                                t,
                                              ),
                                          ),
                                        }),
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: resolveStyle(
                                            `font:700 18px var(--fd,Oswald),sans-serif;text-transform:uppercase;color:${e.opLc ?? ``}`,
                                          ),
                                          children: renderContent(e.opLabel),
                                        }),
                                      ],
                                    }),
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        flexDirection: `column`,
                                        gap: `8px`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            font: `700 10px var(--fb,Oswald),sans-serif`,
                                            letterSpacing: `.16em`,
                                            color: `var(--br-texto-4,#7D746A)`,
                                          },
                                          children: `¿SOBRE QUÉ?`,
                                        }),
                                        (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            display: `flex`,
                                            gap: `8px`,
                                            flexWrap: `wrap`,
                                          },
                                          children: asArray(e.opTagsL).map(
                                            (e, t) =>
                                              (0, JSXRuntime.jsx)(
                                                React.Fragment,
                                                {
                                                  children: (0, JSXRuntime.jsx)(
                                                    `span`,
                                                    {
                                                      style: resolveStyle(
                                                        `padding:9px 13px;border-radius:12px;border:1px solid ${e?.bd ?? ``};background:${e?.bg ?? ``};color:${e?.fg ?? ``};font:700 13px var(--fb,Oswald),sans-serif;cursor:pointer;transition:all .2s`,
                                                      ),
                                                      onClick: e?.go,
                                                      children: renderContent(
                                                        e?.l,
                                                      ),
                                                    },
                                                  ),
                                                },
                                                t,
                                              ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, JSXRuntime.jsx)(`textarea`, {
                                      style: {
                                        background: `var(--br-hondo,#0C0B0A)`,
                                        border: `1px solid var(--br-linea,#2B2724)`,
                                        borderRadius: `14px`,
                                        padding: `13px 14px`,
                                        color: `var(--br-texto,#F3E9D8)`,
                                        font: `500 14px/1.5 var(--fb,Oswald),sans-serif`,
                                        outline: `none`,
                                        resize: `vertical`,
                                      },
                                      value: ge(e.opTxt),
                                      onChange: e.onOpTxt,
                                      rows: 4,
                                      placeholder: `Contanos qué te gusta y qué mejorarías…`,
                                    }),
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: resolveStyle(
                                        `text-align:center;padding:15px;border-radius:14px;background:${e.opBtnBg ?? ``};color:${e.opBtnFg ?? ``};font:700 15px var(--fb,Oswald),sans-serif;cursor:pointer;transition:background .25s`,
                                      ),
                                      onClick: e.opSend,
                                      children: `Enviar opinión`,
                                    }),
                                  ],
                                })
                              : null,
                            e.opDone
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      display: `flex`,
                                      flexDirection: `column`,
                                      alignItems: `center`,
                                      gap: `12px`,
                                      padding: `24px 0`,
                                      textAlign: `center`,
                                      animation: `ucSheet .5s ease both`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          width: `72px`,
                                          height: `72px`,
                                          borderRadius: `24px`,
                                          background: `var(--br-p,#FF5B14)`,
                                          color: `var(--br-tinta,#121110)`,
                                          display: `grid`,
                                          placeItems: `center`,
                                        },
                                        children: (0, JSXRuntime.jsx)(`svg`, {
                                          viewBox: `0 0 24 24`,
                                          width: `34`,
                                          height: `34`,
                                          fill: `none`,
                                          stroke: `currentColor`,
                                          strokeWidth: `2.6`,
                                          strokeLinecap: `round`,
                                          strokeLinejoin: `round`,
                                          children: (0, JSXRuntime.jsx)(
                                            `path`,
                                            {
                                              d: `M5 12l5 5L19 7`,
                                            },
                                          ),
                                        }),
                                      }),
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          font: `700 26px var(--fd,Oswald),sans-serif`,
                                          textTransform: `uppercase`,
                                        },
                                        children: `¡Gracias, Martina!`,
                                      }),
                                      (0, JSXRuntime.jsxs)(`div`, {
                                        style: {
                                          font: `500 14px/1.5 var(--fb,Oswald),sans-serif`,
                                          color: `var(--br-texto-3,#A89E92)`,
                                          maxWidth: `320px`,
                                        },
                                        children: [
                                          `Tu opinión le llega al equipo. Nos sirve un montón para mejorar `,
                                          renderContent(e.marcaNombre),
                                          `.`,
                                        ],
                                      }),
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          marginTop: `6px`,
                                          padding: `13px 22px`,
                                          borderRadius: `14px`,
                                          border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                          font: `700 14px var(--fb,Oswald),sans-serif`,
                                          cursor: `pointer`,
                                        },
                                        onClick: e.closeSheet,
                                        children: `Listo`,
                                      }),
                                    ],
                                  }),
                                })
                              : null,
                          ],
                        })
                      : null,
                    e.isClose
                      ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                gap: `12px`,
                                padding: `14px`,
                                borderRadius: `18px`,
                                background: `rgba(var(--br-p-rgb,255,91,20),.08)`,
                                border: `1px solid rgba(var(--br-p-rgb,255,91,20),.4)`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    width: `34px`,
                                    height: `34px`,
                                    flex: `none`,
                                    borderRadius: `11px`,
                                    background: `var(--br-p,#FF5B14)`,
                                    color: `var(--br-tinta,#121110)`,
                                    display: `grid`,
                                    placeItems: `center`,
                                    font: `700 18px var(--fd,Oswald),sans-serif`,
                                  },
                                  children: `!`,
                                }),
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    font: `500 13px/1.5 var(--fb,Oswald),sans-serif`,
                                    color: `var(--br-texto,#F3E9D8)`,
                                  },
                                  children: [
                                    `Cerrar la cuenta es `,
                                    (0, JSXRuntime.jsx)(`b`, {
                                      children: `definitivo`,
                                    }),
                                    `: perdés el bono, el historial y el acceso. `,
                                    renderContent(e.ccBalTxt),
                                  ],
                                }),
                              ],
                            }),
                            e.ccHasBal
                              ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                  children: (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      textAlign: `center`,
                                      padding: `13px`,
                                      borderRadius: `14px`,
                                      background: `var(--br-texto,#F3E9D8)`,
                                      color: `var(--br-tinta,#121110)`,
                                      font: `700 14px var(--fb,Oswald),sans-serif`,
                                      cursor: `pointer`,
                                    },
                                    onClick: e.askRet,
                                    children: [
                                      `Retirar `,
                                      renderContent(e.ccBal),
                                      ` primero`,
                                    ],
                                  }),
                                })
                              : null,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `8px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `700 10px var(--fb,Oswald),sans-serif`,
                                    letterSpacing: `.16em`,
                                    color: `var(--br-texto-4,#7D746A)`,
                                  },
                                  children: `¿POR QUÉ TE VAS?`,
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    display: `flex`,
                                    gap: `8px`,
                                    flexWrap: `wrap`,
                                  },
                                  children: asArray(e.ccWhyL).map((e, t) =>
                                    (0, JSXRuntime.jsx)(
                                      React.Fragment,
                                      {
                                        children: (0, JSXRuntime.jsx)(`span`, {
                                          style: resolveStyle(
                                            `padding:9px 13px;border-radius:12px;border:1px solid ${e?.bd ?? ``};background:${e?.bg ?? ``};color:${e?.fg ?? ``};font:700 13px var(--fb,Oswald),sans-serif;cursor:pointer;transition:all .2s`,
                                          ),
                                          onClick: e?.go,
                                          children: renderContent(e?.l),
                                        }),
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            (0, JSXRuntime.jsxs)(`label`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `8px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    font: `700 10px var(--fb,Oswald),sans-serif`,
                                    letterSpacing: `.16em`,
                                    color: `var(--br-texto-4,#7D746A)`,
                                  },
                                  children: `ESCRIBÍ CERRAR PARA CONFIRMAR`,
                                }),
                                (0, JSXRuntime.jsx)(`input`, {
                                  style: resolveStyle(
                                    `background:var(--br-hondo,#0C0B0A);border:1px solid ${e.ccBd ?? ``};border-radius:14px;padding:14px;color:var(--br-texto,#F3E9D8);font:700 16px var(--fb,Oswald),sans-serif;letter-spacing:.2em;outline:none;transition:border-color .2s`,
                                  ),
                                  value: ge(e.ccTxt),
                                  onChange: e.onCcTxt,
                                  placeholder: `CERRAR`,
                                }),
                              ],
                            }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `grid`,
                                gridTemplateColumns: `1fr 1fr`,
                                gap: `10px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    textAlign: `center`,
                                    padding: `14px`,
                                    borderRadius: `14px`,
                                    border: `1px solid var(--br-linea-fuerte,#3A3530)`,
                                    font: `700 14px var(--fb,Oswald),sans-serif`,
                                    cursor: `pointer`,
                                  },
                                  onClick: e.closeSheet,
                                  children: `Me quedo`,
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `text-align:center;padding:14px;border-radius:14px;background:${e.ccBtnBg ?? ``};color:${e.ccBtnFg ?? ``};font:700 14px var(--fb,Oswald),sans-serif;cursor:${e.ccCur ?? ``};transition:all .25s`,
                                  ),
                                  onClick: e.ccGo,
                                  children: `Cerrar cuenta`,
                                }),
                              ],
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              }),
            })
          : null,
        e.outOn
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `fixed`,
                  inset: `0`,
                  zIndex: `95`,
                  background: `var(--br-fondo,#000000)`,
                  display: `grid`,
                  placeItems: `center`,
                  padding: `24px`,
                  animation: `ucFade .5s ease both`,
                },
                children: (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    gap: `16px`,
                    textAlign: `center`,
                    maxWidth: `380px`,
                    animation: `ucSheet .7s .15s cubic-bezier(.2,.9,.2,1) both`,
                  },
                  children: [
                    e.isoMarca
                      ? null
                      : (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                          children: (0, JSXRuntime.jsxs)(`svg`, {
                            style: {
                              fill: `var(--br-p,#FF5B14)`,
                            },
                            viewBox: `0 0 100 120`,
                            height: `96`,
                            children: [
                              (0, JSXRuntime.jsx)(`path`, {
                                d: `M 62.041 102.43 L 38.073 60.917 L 38.073 17.57 L 100 17.57 L 100 60.917 L 76.032 60.917 L 100 102.43 Z`,
                              }),
                              (0, JSXRuntime.jsx)(`path`, {
                                d: `M 0 61.377 L 38.073 61.377 L 38.073 102.202 L 0 102.202 Z`,
                              }),
                            ],
                          }),
                        }),
                    e.isoMarca
                      ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                          children: (0, JSXRuntime.jsx)(`img`, {
                            style: {
                              height: `96px`,
                              width: `80px`,
                              objectFit: `contain`,
                              display: `block`,
                            },
                            src: be(e.isoUrl),
                            alt: ``,
                          }),
                        })
                      : null,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        font: `700 40px/1 var(--fd,Oswald),sans-serif`,
                        textTransform: `uppercase`,
                      },
                      children: renderContent(e.outT),
                    }),
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        font: `500 15px/1.5 var(--fb,Oswald),sans-serif`,
                        color: `var(--br-texto-3,#A89E92)`,
                      },
                      children: renderContent(e.outS),
                    }),
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        marginTop: `8px`,
                        padding: `15px 26px`,
                        borderRadius: `14px`,
                        background: `var(--br-p,#FF5B14)`,
                        color: `var(--br-tinta,#121110)`,
                        font: `700 15px var(--fb,Oswald),sans-serif`,
                        cursor: `pointer`,
                      },
                      onClick: e.outBack,
                      children: renderContent(e.outBtn),
                    }),
                  ],
                }),
              }),
            })
          : null,
        e.hasToast
          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
              children: (0, JSXRuntime.jsxs)(`div`, {
                style: resolveStyle(
                  `position:fixed;left:50%;bottom:${e.toastB ?? ``};transform:translateX(-50%);z-index:90;max-width:calc(100% - 32px);display:flex;align-items:center;gap:10px;background:var(--br-texto,#F3E9D8);color:var(--br-tinta,#121110);border-radius:14px;padding:13px 18px;font:700 13px var(--fb,Oswald),sans-serif;box-shadow:0 20px 40px -12px rgba(0,0,0,.7)`,
                ),
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      width: `8px`,
                      height: `8px`,
                      borderRadius: `50%`,
                      background: `var(--br-p,#FF5B14)`,
                      flex: `none`,
                    },
                  }),
                  renderContent(e.toast),
                ],
              }),
            })
          : null,
      ],
    }),
  });
}
export { renderBrasaLobbyLayout };
