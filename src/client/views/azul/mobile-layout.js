/**
 * azul / mobile-layout.
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
  resolveAssetStyles,
  resolveStyle,
} from "./element-adapter.js";
function renderAzulMobileLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsx)(`div`, {
      style: {
        width: `100%`,
        height: `100%`,
        overflow: `hidden`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        fontFamily: `'SF Pro','SF Pro Display',-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif`,
        color: `rgb(255,255,255)`,
      },
      children: (0, JSXRuntime.jsxs)(`div`, {
        style: {
          position: `relative`,
          width: `100%`,
          height: `100%`,
          flexShrink: `0`,
          overflow: `hidden`,
          background: `rgb(var(--rc-fondo))`,
        },
        "data-screen-label": `Celular`,
        children: [
          `

  `,
          (0, JSXRuntime.jsxs)(`header`, {
            style: {
              position: `absolute`,
              top: `0`,
              left: `0`,
              right: `0`,
              zIndex: `30`,
              height: `60px`,
              padding: `0 16px 0`,
              background: `rgba(var(--rc-fondo),0.92)`,
              backdropFilter: `blur(12px)`,
              WebkitBackdropFilter: `blur(12px)`,
              boxShadow: `inset 0 -1px 0 rgb(var(--rc-borde))`,
              display: `flex`,
              alignItems: `center`,
              gap: `8px`,
            },
            children: [
              `
    `,
              (0, JSXRuntime.jsx)(`button`, {
                style: {
                  background: `none`,
                  border: `none`,
                  padding: `0`,
                  display: `flex`,
                  cursor: `pointer`,
                  marginRight: `auto`,
                },
                onClick: e.goHome,
                children: (0, JSXRuntime.jsx)(`img`, {
                  style: {
                    width: `106px`,
                    height: `21.4px`,
                    display: `block`,
                  },
                  src: resolveViewAsset(`assets/logo.png`),
                  alt: e.brandName,
                }),
              }),
              `
    `,
              (0, JSXRuntime.jsxs)(`button`, {
                style: {
                  position: `relative`,
                  width: `40px`,
                  height: `40px`,
                  borderRadius: `10px`,
                  border: `none`,
                  background: `rgb(var(--rc-tarjeta))`,
                  color: `rgb(255,255,255)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  cursor: `pointer`,
                },
                onClick: e.openChat,
                title: `Chat`,
                children: [
                  (0, JSXRuntime.jsx)(`svg`, {
                    width: `20`,
                    height: `20`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `1.8`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: (0, JSXRuntime.jsx)(`path`, {
                      d: `M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4A8.4 8.4 0 1 1 20.5 11.6z`,
                    }),
                  }),
                  e.chatUnread
                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                        children: (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            position: `absolute`,
                            top: `-3px`,
                            right: `-3px`,
                            width: `16px`,
                            height: `16px`,
                            borderRadius: `100px`,
                            background: `rgb(255,59,79)`,
                            boxShadow: `0 0 0 2px rgb(var(--rc-fondo))`,
                            fontFamily: `Inter,sans-serif`,
                            fontWeight: `700`,
                            fontSize: `10px`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                          },
                          children: `1`,
                        }),
                      })
                    : null,
                ],
              }),
              `
    `,
              e.loggedOut
                ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                    children: [
                      `
      `,
                      (0, JSXRuntime.jsx)(`button`, {
                        style: {
                          height: `40px`,
                          padding: `0 12px`,
                          borderRadius: `10px`,
                          border: `none`,
                          background: `rgb(var(--rc-tarjeta))`,
                          color: `rgb(255,255,255)`,
                          fontWeight: `700`,
                          fontSize: `14px`,
                          letterSpacing: `-0.04em`,
                          textTransform: `uppercase`,
                          cursor: `pointer`,
                        },
                        onClick: e.openLogin,
                        children: `ingresar`,
                      }),
                      `
      `,
                      (0, JSXRuntime.jsx)(`button`, {
                        style: {
                          height: `40px`,
                          padding: `0 12px`,
                          borderRadius: `10px`,
                          border: `none`,
                          background: `rgb(var(--rc-marca))`,
                          color: `rgb(255,255,255)`,
                          fontWeight: `700`,
                          fontSize: `14px`,
                          letterSpacing: `-0.04em`,
                          textTransform: `uppercase`,
                          cursor: `pointer`,
                        },
                        onClick: e.openRegister,
                        children: `registrate`,
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
                          height: `40px`,
                          borderRadius: `10px`,
                          background: `rgb(var(--rc-tarjeta))`,
                          display: `flex`,
                          alignItems: `center`,
                          overflow: `hidden`,
                        },
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              padding: `0 10px 0 12px`,
                              fontWeight: `700`,
                              fontSize: `15px`,
                              letterSpacing: `-0.03em`,
                              whiteSpace: `nowrap`,
                            },
                            children: renderContent(e.balanceFmt),
                          }),
                          `
        `,
                          (0, JSXRuntime.jsx)(`button`, {
                            style: {
                              width: `40px`,
                              height: `40px`,
                              border: `none`,
                              background: `rgb(var(--rc-marca))`,
                              color: `rgb(255,255,255)`,
                              display: `flex`,
                              alignItems: `center`,
                              justifyContent: `center`,
                              cursor: `pointer`,
                            },
                            onClick: e.openDeposit,
                            title: `Cargar`,
                            children: (0, JSXRuntime.jsx)(`svg`, {
                              width: `14`,
                              height: `14`,
                              viewBox: `0 0 14 14`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `2.4`,
                              strokeLinecap: `round`,
                              children: (0, JSXRuntime.jsx)(`path`, {
                                d: `M7 1.5v11M1.5 7h11`,
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
              position: `absolute`,
              inset: `0`,
              overflowY: `auto`,
              overflowX: `hidden`,
              padding: `72px 0 104px`,
              scrollbarWidth: `none`,
            },
            ref: e.scRef,
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
                          padding: `0 16px`,
                          display: `flex`,
                          gap: `8px`,
                        },
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsxs)(`button`, {
                            style: {
                              flex: `1`,
                              height: `44px`,
                              borderRadius: `22px`,
                              border: `none`,
                              background: `rgb(var(--rc-tarjeta))`,
                              display: `flex`,
                              alignItems: `center`,
                              gap: `12px`,
                              padding: `0 16px`,
                              cursor: `pointer`,
                              fontFamily: `inherit`,
                              fontWeight: `510`,
                              fontSize: `15px`,
                              letterSpacing: `-0.04em`,
                              color: `rgba(255,255,255,0.35)`,
                              textAlign: `left`,
                            },
                            onClick: e.openSearch,
                            children: [
                              (0, JSXRuntime.jsx)(`img`, {
                                style: {
                                  width: `20px`,
                                  height: `20px`,
                                  display: `block`,
                                },
                                src: resolveViewAsset(`assets/icon-search.png`),
                                alt: ``,
                              }),
                              `Buscar juegos`,
                            ],
                          }),
                          `
        `,
                          (0, JSXRuntime.jsx)(`button`, {
                            style: {
                              width: `52px`,
                              height: `44px`,
                              borderRadius: `22px`,
                              border: `none`,
                              background: `rgb(var(--rc-marca))`,
                              boxShadow: `0 0 18px rgba(var(--rc-marca),0.4)`,
                              display: `flex`,
                              alignItems: `center`,
                              justifyContent: `center`,
                              cursor: `pointer`,
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
                        ],
                      }),
                      `

      `,
                      (0, JSXRuntime.jsxs)(`section`, {
                        style: {
                          margin: `14px 16px 0`,
                          position: `relative`,
                          height: `210px`,
                          borderRadius: `24px`,
                          overflow: `hidden`,
                          background: `rgb(var(--rc-tarjeta))`,
                        },
                        "data-screen-label": `Hero`,
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`div`, {
                            style: resolveAssetStyles({
                              position: `absolute`,
                              left: `0`,
                              top: `0`,
                              bottom: `0`,
                              width: `52%`,
                              backgroundImage: `url('assets/hero-bg.png')`,
                              backgroundSize: `auto 100%`,
                              backgroundPosition: `left center`,
                              backgroundRepeat: `no-repeat`,
                            }),
                          }),
                          `
        `,
                          (0, JSXRuntime.jsx)(`div`, {
                            style: resolveAssetStyles({
                              position: `absolute`,
                              right: `0`,
                              top: `0`,
                              bottom: `0`,
                              width: `52%`,
                              backgroundImage: `url('assets/hero-bg.png')`,
                              backgroundSize: `auto 100%`,
                              backgroundPosition: `right center`,
                              backgroundRepeat: `no-repeat`,
                            }),
                          }),
                          `
        `,
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              position: `absolute`,
                              inset: `0`,
                              background: `radial-gradient(60% 75% at 50% 50%, rgba(var(--rc-velo),0.92) 0%, rgba(var(--rc-velo),0.55) 55%, rgba(var(--rc-velo),0) 100%)`,
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
                              gap: `4px`,
                              textAlign: `center`,
                            },
                            children: [
                              `
          `,
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontWeight: `400`,
                                  fontSize: `26px`,
                                  letterSpacing: `-0.06em`,
                                  lineHeight: `1.07`,
                                },
                                children: renderContent(e.heroLine1),
                              }),
                              `
          `,
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontWeight: `700`,
                                  fontSize: `40px`,
                                  letterSpacing: `-0.06em`,
                                  lineHeight: `1.07`,
                                  textTransform: `uppercase`,
                                  maxWidth: `300px`,
                                  overflow: `hidden`,
                                  textOverflow: `ellipsis`,
                                  whiteSpace: `nowrap`,
                                },
                                children: renderContent(e.heroLine2),
                              }),
                              `
          `,
                              (0, JSXRuntime.jsx)(`button`, {
                                style: {
                                  marginTop: `12px`,
                                  height: `44px`,
                                  padding: `0 28px`,
                                  borderRadius: `10px`,
                                  border: `none`,
                                  background: `rgb(var(--rc-marca))`,
                                  boxShadow: `0 8px 24px rgba(var(--rc-marca),0.5)`,
                                  color: `rgb(255,255,255)`,
                                  fontWeight: `700`,
                                  fontSize: `18px`,
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
                        ],
                      }),
                      `

      `,
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          marginTop: `14px`,
                          padding: `0 16px`,
                          display: `grid`,
                          gridTemplateColumns: `repeat(3,1fr)`,
                          gap: `8px`,
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
                                    style: {
                                      height: `74px`,
                                      borderRadius: `14px`,
                                      border: `none`,
                                      background: `rgb(var(--rc-tarjeta))`,
                                      color: `rgb(255,255,255)`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      alignItems: `center`,
                                      justifyContent: `center`,
                                      gap: `4px`,
                                      cursor: `pointer`,
                                    },
                                    onClick: e?.go,
                                    children: [
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: resolveStyle(
                                          `width:44px;height:26px;background-image:url('${e?.icon ?? ``}');background-size:contain;background-position:center;background-repeat:no-repeat`,
                                        ),
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          fontWeight: `700`,
                                          fontSize: `14px`,
                                          letterSpacing: `-0.05em`,
                                          textTransform: `uppercase`,
                                          whiteSpace: `nowrap`,
                                        },
                                        children: renderContent(e?.label),
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsxs)(`span`, {
                                        style: {
                                          display: `flex`,
                                          alignItems: `center`,
                                          gap: `4px`,
                                          fontFamily: `Inter,sans-serif`,
                                          fontWeight: `500`,
                                          fontSize: `11px`,
                                          color: `rgba(255,255,255,0.6)`,
                                          whiteSpace: `nowrap`,
                                        },
                                        children: [
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              width: `5px`,
                                              height: `5px`,
                                              borderRadius: `50%`,
                                              background: `rgb(38,161,123)`,
                                            },
                                          }),
                                          renderContent(e?.players),
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
                      e.loggedIn
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
                                  (0, JSXRuntime.jsx)(`div`, {
                                    style: {
                                      padding: `0 16px`,
                                      fontWeight: `590`,
                                      fontSize: `20px`,
                                    },
                                    children: `Seguir jugando`,
                                  }),
                                  `
          `,
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      marginTop: `12px`,
                                      display: `flex`,
                                      gap: `10px`,
                                      overflowX: `auto`,
                                      padding: `0 16px`,
                                      scrollSnapType: `x mandatory`,
                                      scrollPadding: `0 16px`,
                                      scrollbarWidth: `none`,
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
                                                style: {
                                                  flexShrink: `0`,
                                                  scrollSnapAlign: `start`,
                                                  width: `220px`,
                                                  height: `76px`,
                                                  padding: `8px 12px 8px 8px`,
                                                  borderRadius: `14px`,
                                                  border: `none`,
                                                  background: `rgb(var(--rc-tarjeta))`,
                                                  color: `rgb(255,255,255)`,
                                                  display: `flex`,
                                                  alignItems: `center`,
                                                  gap: `10px`,
                                                  textAlign: `left`,
                                                  cursor: `pointer`,
                                                },
                                                onClick: e?.play,
                                                children: [
                                                  `
                `,
                                                  (0, JSXRuntime.jsx)(`div`, {
                                                    style: resolveStyle(
                                                      `width:46px;height:60px;border-radius:8px;flex-shrink:0;background-color:rgb(var(--rc-fondo));background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center`,
                                                    ),
                                                  }),
                                                  `
                `,
                                                  (0, JSXRuntime.jsxs)(`div`, {
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
                                                            fontWeight: `700`,
                                                            fontSize: `14px`,
                                                            letterSpacing: `-0.02em`,
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
                                                            fontFamily: `Inter,sans-serif`,
                                                            fontWeight: `500`,
                                                            fontSize: `12px`,
                                                            color: `rgba(255,255,255,0.45)`,
                                                          },
                                                          children:
                                                            renderContent(
                                                              e?.when,
                                                            ),
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                  `
                `,
                                                  (0, JSXRuntime.jsx)(`span`, {
                                                    style: {
                                                      width: `30px`,
                                                      height: `30px`,
                                                      borderRadius: `50%`,
                                                      background: `rgb(var(--rc-marca))`,
                                                      flexShrink: `0`,
                                                      display: `flex`,
                                                      alignItems: `center`,
                                                      justifyContent: `center`,
                                                    },
                                                    children: (0,
                                                    JSXRuntime.jsx)(`svg`, {
                                                      width: `11`,
                                                      height: `11`,
                                                      viewBox: `0 0 24 24`,
                                                      fill: `rgb(255,255,255)`,
                                                      children: (0,
                                                      JSXRuntime.jsx)(`path`, {
                                                        d: `M7 4.5v15l13-7.5z`,
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
                                  marginTop: `28px`,
                                },
                                "data-screen-label": `Favoritos`,
                                children: [
                                  `
          `,
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      padding: `0 16px`,
                                      display: `flex`,
                                      alignItems: `center`,
                                      gap: `8px`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          fontWeight: `590`,
                                          fontSize: `20px`,
                                        },
                                        children: `Tus favoritos`,
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          height: `22px`,
                                          padding: `0 8px`,
                                          borderRadius: `100px`,
                                          background: `rgb(255,59,79)`,
                                          display: `flex`,
                                          alignItems: `center`,
                                          fontWeight: `600`,
                                          fontSize: `13px`,
                                        },
                                        children: renderContent(e.favCount),
                                      }),
                                    ],
                                  }),
                                  `
          `,
                                  e.hasFavs
                                    ? (0, JSXRuntime.jsxs)(
                                        JSXRuntime.Fragment,
                                        {
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                marginTop: `12px`,
                                                display: `flex`,
                                                gap: `10px`,
                                                overflowX: `auto`,
                                                padding: `0 16px`,
                                                scrollbarWidth: `none`,
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
                                                            style: resolveStyle(
                                                              `position:relative;flex-shrink:0;width:112px;height:148px;border-radius:12px;cursor:pointer;background-color:rgb(var(--rc-tarjeta));background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center`,
                                                            ),
                                                            onClick: e?.play,
                                                            children: [
                                                              `
                  `,
                                                              (0,
                                                              JSXRuntime.jsx)(
                                                                `button`,
                                                                {
                                                                  style: {
                                                                    position: `absolute`,
                                                                    top: `6px`,
                                                                    right: `6px`,
                                                                    width: `32px`,
                                                                    height: `32px`,
                                                                    borderRadius: `50%`,
                                                                    border: `none`,
                                                                    background: `rgba(var(--rc-fondo),0.65)`,
                                                                    display: `flex`,
                                                                    alignItems: `center`,
                                                                    justifyContent: `center`,
                                                                    cursor: `pointer`,
                                                                  },
                                                                  onClick:
                                                                    e?.toggleFav,
                                                                  title: `Quitar`,
                                                                  children: (0,
                                                                  JSXRuntime.jsx)(
                                                                    `svg`,
                                                                    {
                                                                      width: `15`,
                                                                      height: `15`,
                                                                      viewBox: `0 0 24 24`,
                                                                      fill: `rgb(255,59,79)`,
                                                                      stroke: `rgb(255,59,79)`,
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
                                      )
                                    : null,
                                  `
          `,
                                  e.noFavs
                                    ? (0, JSXRuntime.jsxs)(
                                        JSXRuntime.Fragment,
                                        {
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsx)(`div`, {
                                              style: {
                                                margin: `12px 16px 0`,
                                                padding: `18px`,
                                                borderRadius: `14px`,
                                                background: `rgb(var(--rc-tarjeta))`,
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `13px`,
                                                color: `rgba(255,255,255,0.55)`,
                                                textAlign: `center`,
                                              },
                                              children: `Tocá el ♥ dentro de un juego para guardarlo acá.`,
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
                      (0, JSXRuntime.jsxs)(`section`, {
                        style: {
                          margin: `28px 16px 0`,
                          position: `relative`,
                          height: `170px`,
                          borderRadius: `20px`,
                          overflow: `hidden`,
                          background: `rgb(var(--rc-fondo))`,
                        },
                        "data-screen-label": `Bono`,
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`div`, {
                            style: resolveAssetStyles({
                              position: `absolute`,
                              inset: `0`,
                              backgroundImage: `url('assets/bono-bg.png')`,
                              backgroundSize: `cover`,
                              backgroundPosition: `right center`,
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
                                      position: `absolute`,
                                      left: `18px`,
                                      top: `22px`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      alignItems: `flex-start`,
                                      gap: `8px`,
                                    },
                                    children: [
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          fontWeight: `400`,
                                          fontSize: `22px`,
                                          letterSpacing: `-0.06em`,
                                        },
                                        children: `Bono bienvenida`,
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`button`, {
                                        style: {
                                          height: `46px`,
                                          padding: `0 14px`,
                                          borderRadius: `10px`,
                                          border: `none`,
                                          background: `rgb(var(--rc-marca))`,
                                          color: `rgb(255,255,255)`,
                                          fontWeight: `700`,
                                          fontSize: `28px`,
                                          letterSpacing: `-0.06em`,
                                          cursor: `pointer`,
                                        },
                                        onClick: e.copyCode,
                                        children: renderContent(e.codeLabel),
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          marginTop: `8px`,
                                          fontFamily: `Inter,sans-serif`,
                                          fontWeight: `500`,
                                          fontSize: `12px`,
                                          color: `rgba(255,255,255,0.5)`,
                                        },
                                        children: `Solo en tu primer carga`,
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
                                      position: `absolute`,
                                      left: `18px`,
                                      top: `22px`,
                                      width: `180px`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      gap: `10px`,
                                    },
                                    children: [
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          fontWeight: `400`,
                                          fontSize: `22px`,
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
                                          gap: `8px`,
                                        },
                                        children: [
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              height: `28px`,
                                              padding: `0 10px`,
                                              borderRadius: `7px`,
                                              background: `rgb(var(--rc-marca))`,
                                              display: `flex`,
                                              alignItems: `center`,
                                              fontWeight: `700`,
                                              fontSize: `17px`,
                                              letterSpacing: `-0.05em`,
                                            },
                                            children: `ROCCO12`,
                                          }),
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              fontFamily: `Inter,sans-serif`,
                                              fontWeight: `600`,
                                              fontSize: `12px`,
                                              color: `rgb(80,225,140)`,
                                            },
                                            children: `Activo`,
                                          }),
                                        ],
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: {
                                          height: `8px`,
                                          borderRadius: `100px`,
                                          background: `rgba(255,255,255,0.14)`,
                                          overflow: `hidden`,
                                        },
                                        children: (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            width: `35%`,
                                            height: `8px`,
                                            borderRadius: `100px`,
                                            background: `rgb(var(--rc-acento))`,
                                          },
                                        }),
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          fontFamily: `Inter,sans-serif`,
                                          fontWeight: `500`,
                                          fontSize: `12px`,
                                          color: `rgba(255,255,255,0.65)`,
                                        },
                                        children: `$350 de $1.000 apostados`,
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
                      (0, JSXRuntime.jsxs)(`section`, {
                        style: {
                          marginTop: `28px`,
                        },
                        id: `m-rec`,
                        "data-screen-label": `Recomendados`,
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              padding: `0 16px`,
                              display: `flex`,
                              alignItems: `center`,
                              gap: `8px`,
                            },
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontWeight: `590`,
                                  fontSize: `20px`,
                                },
                                children: `Recomendados`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  height: `22px`,
                                  padding: `0 8px`,
                                  borderRadius: `100px`,
                                  background: `rgb(var(--rc-marca))`,
                                  display: `flex`,
                                  alignItems: `center`,
                                  fontWeight: `600`,
                                  fontSize: `13px`,
                                },
                                children: renderContent(e.recCount),
                              }),
                            ],
                          }),
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              marginTop: `12px`,
                              display: `flex`,
                              gap: `10px`,
                              overflowX: `auto`,
                              padding: `0 16px`,
                              scrollbarWidth: `none`,
                            },
                            ref: e.recRef,
                            onScroll: e.onRecScroll,
                            onTouchStart: e.recHold,
                            onTouchEnd: e.recRelease,
                            onMouseEnter: e.recHold,
                            onMouseLeave: e.recRelease,
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
                                      (0, JSXRuntime.jsx)(`button`, {
                                        style: resolveStyle(
                                          `flex-shrink:0;width:128px;height:168px;border-radius:12px;border:none;padding:0;cursor:pointer;background-color:rgb(var(--rc-tarjeta));background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center`,
                                        ),
                                        onClick: e?.play,
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
                          marginTop: `28px`,
                        },
                        id: `m-slots`,
                        "data-screen-label": `Slots`,
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              padding: `0 16px`,
                              display: `flex`,
                              alignItems: `center`,
                              gap: `8px`,
                            },
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontWeight: `590`,
                                  fontSize: `20px`,
                                },
                                children: `Slots`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  height: `22px`,
                                  padding: `0 8px`,
                                  borderRadius: `100px`,
                                  background: `rgb(var(--rc-marca))`,
                                  display: `flex`,
                                  alignItems: `center`,
                                  fontWeight: `600`,
                                  fontSize: `13px`,
                                },
                                children: `250`,
                              }),
                              (0, JSXRuntime.jsxs)(`button`, {
                                style: {
                                  marginLeft: `auto`,
                                  height: `36px`,
                                  padding: `0 4px`,
                                  border: `none`,
                                  background: `none`,
                                  color: `rgb(var(--rc-acento))`,
                                  fontFamily: `Inter,sans-serif`,
                                  fontWeight: `600`,
                                  fontSize: `14px`,
                                  cursor: `pointer`,
                                  display: `flex`,
                                  alignItems: `center`,
                                  gap: `2px`,
                                },
                                onClick: e.seeSlots,
                                children: [
                                  `Ver todos`,
                                  (0, JSXRuntime.jsx)(`svg`, {
                                    width: `16`,
                                    height: `16`,
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
                                ],
                              }),
                            ],
                          }),
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              marginTop: `10px`,
                              display: `flex`,
                              gap: `10px`,
                              overflowX: `auto`,
                              padding: `0 16px`,
                              scrollSnapType: `x mandatory`,
                              scrollPadding: `0 16px`,
                              scrollbarWidth: `none`,
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
                                      (0, JSXRuntime.jsx)(`button`, {
                                        style: resolveStyle(
                                          `flex-shrink:0;scroll-snap-align:start;width:112px;height:148px;border-radius:12px;border:none;padding:0;cursor:pointer;background-color:rgb(var(--rc-tarjeta));background-image:url('${e?.src ?? ``}');background-size:cover;background-position:center`,
                                        ),
                                        onClick: e?.play,
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
                          marginTop: `28px`,
                        },
                        id: `m-vivo`,
                        "data-screen-label": `En vivo`,
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              padding: `0 16px`,
                              display: `flex`,
                              alignItems: `center`,
                              gap: `8px`,
                            },
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontWeight: `590`,
                                  fontSize: `20px`,
                                },
                                children: `En vivo`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  height: `22px`,
                                  padding: `0 8px`,
                                  borderRadius: `100px`,
                                  background: `rgb(var(--rc-marca))`,
                                  display: `flex`,
                                  alignItems: `center`,
                                  fontWeight: `600`,
                                  fontSize: `13px`,
                                },
                                children: `250`,
                              }),
                              (0, JSXRuntime.jsxs)(`button`, {
                                style: {
                                  marginLeft: `auto`,
                                  height: `36px`,
                                  padding: `0 4px`,
                                  border: `none`,
                                  background: `none`,
                                  color: `rgb(var(--rc-acento))`,
                                  fontFamily: `Inter,sans-serif`,
                                  fontWeight: `600`,
                                  fontSize: `14px`,
                                  cursor: `pointer`,
                                  display: `flex`,
                                  alignItems: `center`,
                                  gap: `2px`,
                                },
                                onClick: e.seeLive,
                                children: [
                                  `Ver todos`,
                                  (0, JSXRuntime.jsx)(`svg`, {
                                    width: `16`,
                                    height: `16`,
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
                                ],
                              }),
                            ],
                          }),
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              marginTop: `10px`,
                              display: `flex`,
                              gap: `10px`,
                              overflowX: `auto`,
                              padding: `0 16px`,
                              scrollSnapType: `x mandatory`,
                              scrollPadding: `0 16px`,
                              scrollbarWidth: `none`,
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
                                      (0, JSXRuntime.jsx)(`button`, {
                                        style: resolveStyle(
                                          `flex-shrink:0;scroll-snap-align:start;width:112px;height:148px;border-radius:12px;border:none;padding:0;cursor:pointer;background-color:rgb(var(--rc-tarjeta));background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center`,
                                        ),
                                        onClick: e?.play,
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
                          marginTop: `28px`,
                          padding: `0 16px`,
                        },
                        id: `m-dep`,
                        "data-screen-label": `Deportivas`,
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              fontWeight: `590`,
                              fontSize: `20px`,
                            },
                            children: `Deportivas`,
                          }),
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              marginTop: `12px`,
                              display: `grid`,
                              gridTemplateColumns: `repeat(3,1fr)`,
                              gap: `8px`,
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
                                      (0, JSXRuntime.jsx)(`button`, {
                                        style: resolveStyle(
                                          `aspect-ratio:253 / 364;border-radius:14px;border:none;padding:0;cursor:pointer;background-color:rgb(var(--rc-marca));background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center`,
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
                      (0, JSXRuntime.jsxs)(`section`, {
                        style: {
                          marginTop: `28px`,
                          padding: `0 16px`,
                        },
                        "data-screen-label": `Ganadores`,
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
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
                                  fontSize: `20px`,
                                },
                                children: `Ganadores`,
                              }),
                              `
          `,
                              (0, JSXRuntime.jsxs)(`div`, {
                                style: {
                                  display: `flex`,
                                  gap: `3px`,
                                  padding: `3px`,
                                  borderRadius: `10px`,
                                  background: `rgb(var(--rc-tarjeta))`,
                                },
                                children: [
                                  `
            `,
                                  (0, JSXRuntime.jsx)(`button`, {
                                    style: resolveStyle(
                                      `height:32px;padding:0 10px;border-radius:7px;border:none;background:${e.recentBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:12px;text-transform:uppercase;cursor:pointer`,
                                    ),
                                    onClick: e.tabRecent,
                                    children: `recientes`,
                                  }),
                                  `
            `,
                                  (0, JSXRuntime.jsx)(`button`, {
                                    style: resolveStyle(
                                      `height:32px;padding:0 10px;border-radius:7px;border:none;background:${e.topBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:12px;text-transform:uppercase;cursor:pointer`,
                                    ),
                                    onClick: e.tabTop,
                                    children: `top`,
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
                              marginTop: `12px`,
                              borderRadius: `18px`,
                              overflow: `hidden`,
                              background: `rgb(var(--rc-tarjeta))`,
                              boxShadow: `inset 0 0 0 1px rgba(var(--rc-borde),0.9)`,
                            },
                            children: [
                              `
          `,
                              asArray(e.winners).map((e, t) =>
                                (0, JSXRuntime.jsxs)(
                                  React.Fragment,
                                  {
                                    children: [
                                      `
            `,
                                      (0, JSXRuntime.jsxs)(`button`, {
                                        style: resolveStyle(
                                          `width:100%;height:68px;padding:0 14px;border:none;background:${e?.bg ?? ``};box-shadow:inset 0 -1px 0 rgba(var(--rc-acento),0.1);color:rgb(255,255,255);display:flex;align-items:center;gap:12px;text-align:left;cursor:pointer;transition:background .5s`,
                                        ),
                                        onClick: e?.play,
                                        children: [
                                          `
              `,
                                          (0, JSXRuntime.jsx)(`div`, {
                                            style: resolveStyle(
                                              `width:40px;height:40px;border-radius:10px;flex-shrink:0;background-color:rgb(var(--rc-fondo));background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center`,
                                            ),
                                          }),
                                          `
              `,
                                          (0, JSXRuntime.jsxs)(`div`, {
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
                                              (0, JSXRuntime.jsx)(`span`, {
                                                style: {
                                                  fontWeight: `700`,
                                                  fontSize: `14px`,
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
                                              (0, JSXRuntime.jsxs)(`span`, {
                                                style: {
                                                  fontFamily: `Inter,sans-serif`,
                                                  fontWeight: `500`,
                                                  fontSize: `12px`,
                                                  color: `rgba(255,255,255,0.45)`,
                                                  whiteSpace: `nowrap`,
                                                  overflow: `hidden`,
                                                  textOverflow: `ellipsis`,
                                                },
                                                children: [
                                                  renderContent(e?.user),
                                                  ` · `,
                                                  renderContent(e?.time),
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
                                              alignItems: `flex-end`,
                                              gap: `4px`,
                                              flexShrink: `0`,
                                            },
                                            children: [
                                              `
                `,
                                              (0, JSXRuntime.jsxs)(`span`, {
                                                style: {
                                                  fontWeight: `700`,
                                                  fontSize: `15px`,
                                                  color: `rgb(80,225,140)`,
                                                  whiteSpace: `nowrap`,
                                                },
                                                children: [
                                                  `+`,
                                                  renderContent(e?.pay),
                                                ],
                                              }),
                                              `
                `,
                                              (0, JSXRuntime.jsx)(`span`, {
                                                style: resolveStyle(
                                                  `height:20px;padding:0 7px;border-radius:6px;background:${e?.multBg ?? ``};color:${e?.multColor ?? ``};display:flex;align-items:center;font-family:Oswald,sans-serif;font-size:12px`,
                                                ),
                                                children: renderContent(
                                                  e?.mult,
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
                        ],
                      }),
                      `

      `,
                      (0, JSXRuntime.jsxs)(`footer`, {
                        style: {
                          marginTop: `36px`,
                          display: `flex`,
                          flexDirection: `column`,
                          alignItems: `center`,
                          gap: `12px`,
                          paddingBottom: `10px`,
                        },
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`img`, {
                            style: {
                              width: `106px`,
                              height: `21.4px`,
                              display: `block`,
                            },
                            src: resolveViewAsset(`assets/logo.png`),
                            alt: e.brandName,
                          }),
                          `
        `,
                          (0, JSXRuntime.jsxs)(`span`, {
                            style: {
                              fontFamily: `'SF Pro Display',-apple-system,sans-serif`,
                              fontSize: `13px`,
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
                          padding: `0 16px`,
                        },
                        "data-screen-label": `Categoría`,
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
                              (0, JSXRuntime.jsx)(`button`, {
                                style: {
                                  width: `40px`,
                                  height: `40px`,
                                  borderRadius: `100px`,
                                  border: `none`,
                                  background: `rgb(var(--rc-tarjeta))`,
                                  color: `rgb(255,255,255)`,
                                  display: `flex`,
                                  alignItems: `center`,
                                  justifyContent: `center`,
                                  cursor: `pointer`,
                                  flexShrink: `0`,
                                },
                                onClick: e.goHome,
                                title: `Volver`,
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
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontWeight: `590`,
                                  fontSize: `28px`,
                                },
                                children: renderContent(e.catTitle),
                              }),
                              `
          `,
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  height: `22px`,
                                  padding: `0 8px`,
                                  borderRadius: `100px`,
                                  background: `rgb(var(--rc-marca))`,
                                  display: `flex`,
                                  alignItems: `center`,
                                  fontWeight: `600`,
                                  fontSize: `13px`,
                                },
                                children: renderContent(e.catCount),
                              }),
                              `
        `,
                            ],
                          }),
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              marginTop: `14px`,
                              height: `44px`,
                              borderRadius: `22px`,
                              background: `rgb(var(--rc-tarjeta))`,
                              display: `flex`,
                              alignItems: `center`,
                              gap: `12px`,
                              padding: `0 16px`,
                            },
                            children: [
                              `
          `,
                              (0, JSXRuntime.jsx)(`img`, {
                                style: {
                                  width: `20px`,
                                  height: `20px`,
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
                                  minWidth: `0`,
                                  height: `44px`,
                                  background: `none`,
                                  border: `none`,
                                  outline: `none`,
                                  color: `rgb(255,255,255)`,
                                  fontFamily: `inherit`,
                                  fontSize: `15px`,
                                  letterSpacing: `-0.03em`,
                                },
                                value: Ot(e.catQuery),
                                onInput: e.onCatQuery,
                                placeholder: `Buscar por nombre o proveedor`,
                              }),
                              `
        `,
                            ],
                          }),
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              marginTop: `16px`,
                              display: `grid`,
                              gridTemplateColumns: `repeat(3,1fr)`,
                              gap: `10px`,
                              rowGap: `16px`,
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
                                      (0, JSXRuntime.jsxs)(`button`, {
                                        style: {
                                          border: `none`,
                                          background: `none`,
                                          padding: `0`,
                                          color: `rgb(255,255,255)`,
                                          display: `flex`,
                                          flexDirection: `column`,
                                          gap: `6px`,
                                          textAlign: `left`,
                                          cursor: `pointer`,
                                          minWidth: `0`,
                                        },
                                        onClick: e?.play,
                                        children: [
                                          `
              `,
                                          (0, JSXRuntime.jsx)(`div`, {
                                            style: resolveStyle(
                                              `width:100%;aspect-ratio:189 / 248;border-radius:12px;background-color:rgb(var(--rc-tarjeta));background-image:url('${e?.img ?? ``}');background-size:cover;background-position:center`,
                                            ),
                                          }),
                                          `
              `,
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              fontWeight: `700`,
                                              fontSize: `12px`,
                                              letterSpacing: `-0.02em`,
                                              whiteSpace: `nowrap`,
                                              overflow: `hidden`,
                                              textOverflow: `ellipsis`,
                                              width: `100%`,
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
                          e.catEmpty
                            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                children: [
                                  `
          `,
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      marginTop: `12px`,
                                      padding: `40px 16px`,
                                      borderRadius: `18px`,
                                      background: `rgb(var(--rc-tarjeta))`,
                                      textAlign: `center`,
                                      fontFamily: `Inter,sans-serif`,
                                      fontWeight: `500`,
                                      fontSize: `14px`,
                                      color: `rgba(255,255,255,0.55)`,
                                    },
                                    children: [
                                      `No encontramos “`,
                                      renderContent(e.catQuery),
                                      `”`,
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
          (0, JSXRuntime.jsxs)(`nav`, {
            style: {
              position: `absolute`,
              left: `0`,
              right: `0`,
              bottom: `0`,
              zIndex: `30`,
              height: `88px`,
              padding: `8px 8px 26px`,
              background: `rgba(var(--rc-fondo),0.95)`,
              backdropFilter: `blur(12px)`,
              WebkitBackdropFilter: `blur(12px)`,
              boxShadow: `inset 0 1px 0 rgb(var(--rc-borde))`,
              display: `grid`,
              gridTemplateColumns: `repeat(5,1fr)`,
            },
            children: [
              `
    `,
              asArray(e.navItems).map((e, t) =>
                (0, JSXRuntime.jsxs)(
                  React.Fragment,
                  {
                    children: [
                      `
      `,
                      (0, JSXRuntime.jsxs)(`button`, {
                        style: resolveStyle(
                          `border:none;background:none;color:${e?.color ?? ``};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;font-family:Inter,sans-serif;font-weight:600;font-size:11px`,
                        ),
                        onClick: e?.go,
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`div`, {
                            style: resolveStyle(
                              `width:36px;height:36px;border-radius:50%;background-image:url('${e?.icon ?? ``}');background-size:cover;box-shadow:${e?.ring ?? ``};transition:box-shadow .2s`,
                            ),
                          }),
                          renderContent(e?.label),
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
          e.isGame
            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  `
    `,
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      position: `absolute`,
                      inset: `0`,
                      zIndex: `40`,
                      background: `rgb(var(--rc-fondo))`,
                      display: `flex`,
                      flexDirection: `column`,
                    },
                    "data-screen-label": `Juego`,
                    children: [
                      `
      `,
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          height: `60px`,
                          padding: `0 12px 0`,
                          display: `flex`,
                          alignItems: `center`,
                          gap: `10px`,
                          background: `rgb(var(--rc-tarjeta))`,
                          boxShadow: `inset 0 -1px 0 rgb(var(--rc-borde))`,
                        },
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`button`, {
                            style: {
                              width: `40px`,
                              height: `40px`,
                              borderRadius: `100px`,
                              border: `none`,
                              background: `rgb(var(--rc-fondo))`,
                              color: `rgb(255,255,255)`,
                              display: `flex`,
                              alignItems: `center`,
                              justifyContent: `center`,
                              cursor: `pointer`,
                              flexShrink: `0`,
                            },
                            onClick: e.closeGame,
                            title: `Volver`,
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
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              flex: `1`,
                              minWidth: `0`,
                              display: `flex`,
                              flexDirection: `column`,
                              gap: `2px`,
                            },
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontWeight: `700`,
                                  fontSize: `16px`,
                                  letterSpacing: `-0.03em`,
                                  whiteSpace: `nowrap`,
                                  overflow: `hidden`,
                                  textOverflow: `ellipsis`,
                                },
                                children: renderContent(e.gName),
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontFamily: `Inter,sans-serif`,
                                  fontWeight: `500`,
                                  fontSize: `12px`,
                                  color: `rgba(255,255,255,0.45)`,
                                },
                                children: renderContent(e.gProvider),
                              }),
                            ],
                          }),
                          `
        `,
                          (0, JSXRuntime.jsx)(`button`, {
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
                              children: (0, JSXRuntime.jsx)(`path`, {
                                d: `M12 20.5s-8-4.6-8-10.8A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7c0 6.2-8 10.8-8 10.8z`,
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
                          position: `relative`,
                          flex: `1`,
                          overflow: `hidden`,
                          display: `flex`,
                          alignItems: `center`,
                          justifyContent: `center`,
                        },
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`div`, {
                            style: resolveStyle(
                              `position:absolute;inset:-40px;background-image:url('${e.gImg ?? ``}');background-size:cover;background-position:center;filter:blur(36px);opacity:0.45`,
                            ),
                          }),
                          `
        `,
                          e.gLoading
                            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                children: [
                                  `
          `,
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      position: `relative`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      alignItems: `center`,
                                      gap: `14px`,
                                      textAlign: `center`,
                                      padding: `0 24px`,
                                    },
                                    children: [
                                      renderContent(e.spinner),
                                      (0, JSXRuntime.jsxs)(`span`, {
                                        style: {
                                          fontWeight: `700`,
                                          fontSize: `22px`,
                                          letterSpacing: `-0.05em`,
                                        },
                                        children: [
                                          `Cargando `,
                                          renderContent(e.gName),
                                          `…`,
                                        ],
                                      }),
                                      (0, JSXRuntime.jsxs)(`span`, {
                                        style: {
                                          fontFamily: `Inter,sans-serif`,
                                          fontWeight: `500`,
                                          fontSize: `13px`,
                                          color: `rgba(255,255,255,0.5)`,
                                        },
                                        children: [
                                          `Conectando con `,
                                          renderContent(e.gProvider),
                                        ],
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
                          e.gReady
                            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                children: [
                                  `
          `,
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      position: `relative`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      alignItems: `center`,
                                      gap: `14px`,
                                    },
                                    children: [
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: resolveStyle(
                                          `width:150px;height:197px;border-radius:14px;background-color:rgb(var(--rc-tarjeta));background-image:url('${e.gImg ?? ``}');background-size:cover;background-position:center;box-shadow:0 0 0 2px rgb(var(--rc-marca)),0 0 40px rgba(var(--rc-marca),0.5)`,
                                        ),
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsxs)(`span`, {
                                        style: {
                                          fontFamily: `Inter,sans-serif`,
                                          fontWeight: `500`,
                                          fontSize: `13px`,
                                          color: `rgba(255,255,255,0.5)`,
                                        },
                                        children: [
                                          `Acá se carga el juego de `,
                                          renderContent(e.gProvider),
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
                          height: `84px`,
                          padding: `0 16px 22px`,
                          display: `flex`,
                          alignItems: `center`,
                          gap: `10px`,
                          background: `rgb(var(--rc-tarjeta))`,
                          boxShadow: `inset 0 1px 0 rgb(var(--rc-borde))`,
                        },
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: {
                              flex: `1`,
                              display: `flex`,
                              flexDirection: `column`,
                              gap: `2px`,
                            },
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontFamily: `Inter,sans-serif`,
                                  fontWeight: `500`,
                                  fontSize: `12px`,
                                  color: `rgba(255,255,255,0.5)`,
                                },
                                children: `Tu saldo`,
                              }),
                              (0, JSXRuntime.jsx)(`span`, {
                                style: {
                                  fontWeight: `700`,
                                  fontSize: `20px`,
                                  letterSpacing: `-0.04em`,
                                },
                                children: renderContent(e.balanceFmt),
                              }),
                            ],
                          }),
                          `
        `,
                          (0, JSXRuntime.jsx)(`button`, {
                            style: {
                              height: `44px`,
                              padding: `0 16px`,
                              borderRadius: `10px`,
                              border: `none`,
                              background: `rgb(var(--rc-fondo))`,
                              boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.3)`,
                              color: `rgb(255,255,255)`,
                              fontWeight: `700`,
                              fontSize: `15px`,
                              letterSpacing: `-0.05em`,
                              textTransform: `uppercase`,
                              cursor: `pointer`,
                            },
                            onClick: e.openWithdraw,
                            children: `retirar`,
                          }),
                          `
        `,
                          (0, JSXRuntime.jsx)(`button`, {
                            style: {
                              height: `44px`,
                              padding: `0 18px`,
                              borderRadius: `10px`,
                              border: `none`,
                              background: `rgb(var(--rc-marca))`,
                              color: `rgb(255,255,255)`,
                              fontWeight: `700`,
                              fontSize: `15px`,
                              letterSpacing: `-0.05em`,
                              textTransform: `uppercase`,
                              cursor: `pointer`,
                            },
                            onClick: e.openDeposit,
                            children: `cargar`,
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
          e.sheetOpen
            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  `
    `,
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      position: `absolute`,
                      inset: `0`,
                      zIndex: `50`,
                      background: `rgba(var(--rc-fondo),0.7)`,
                      backdropFilter: `blur(6px)`,
                      WebkitBackdropFilter: `blur(6px)`,
                      display: `flex`,
                      alignItems: `flex-end`,
                    },
                    onClick: e.closeSheet,
                    children: [
                      `
      `,
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          width: `100%`,
                          maxHeight: `92%`,
                          overflowY: `auto`,
                          borderRadius: `28px 28px 0 0`,
                          background: `radial-gradient(120% 50% at 100% 0%, rgba(var(--rc-marca),0.22) 0%, rgba(var(--rc-tarjeta),0) 60%), rgb(var(--rc-tarjeta))`,
                          boxShadow: `inset 0 1px 0 rgb(var(--rc-borde)),0 -20px 50px rgba(0,0,0,0.5)`,
                          padding: `10px 20px 34px`,
                          display: `flex`,
                          flexDirection: `column`,
                          gap: `16px`,
                          scrollbarWidth: `none`,
                        },
                        onClick: e.stop,
                        children: [
                          `
        `,
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              alignSelf: `center`,
                              width: `40px`,
                              height: `5px`,
                              borderRadius: `100px`,
                              background: `rgba(255,255,255,0.25)`,
                            },
                          }),
                          `

        `,
                          e.isAuth
                            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                children: [
                                  `
          `,
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      display: `grid`,
                                      gridTemplateColumns: `1fr 1fr`,
                                      gap: `4px`,
                                      padding: `4px`,
                                      borderRadius: `12px`,
                                      background: `rgb(var(--rc-fondo))`,
                                    },
                                    children: [
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`button`, {
                                        style: resolveStyle(
                                          `height:42px;border-radius:9px;border:none;background:${e.tabLoginBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:15px;letter-spacing:-0.04em;text-transform:uppercase;cursor:pointer`,
                                        ),
                                        onClick: e.openLogin,
                                        children: `iniciar sesión`,
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`button`, {
                                        style: resolveStyle(
                                          `height:42px;border-radius:9px;border:none;background:${e.tabRegBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:15px;letter-spacing:-0.04em;text-transform:uppercase;cursor:pointer`,
                                        ),
                                        onClick: e.openRegister,
                                        children: `registrate`,
                                      }),
                                      `
          `,
                                    ],
                                  }),
                                  `
          `,
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: {
                                      fontWeight: `700`,
                                      fontSize: `30px`,
                                      letterSpacing: `-0.05em`,
                                    },
                                    children: renderContent(e.authTitle),
                                  }),
                                  `
          `,
                                  e.isRegister
                                    ? (0, JSXRuntime.jsxs)(
                                        JSXRuntime.Fragment,
                                        {
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsx)(`input`, {
                                              className: `rcc0`,
                                              style: {
                                                height: `52px`,
                                                borderRadius: `12px`,
                                                border: `none`,
                                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.25)`,
                                                background: `rgb(var(--rc-fondo))`,
                                                color: `rgb(255,255,255)`,
                                                padding: `0 16px`,
                                                fontFamily: `Inter,sans-serif`,
                                                fontSize: `16px`,
                                                outline: `none`,
                                              },
                                              value: Ot(e.fName),
                                              onInput: e.onName,
                                              placeholder: `Usuario`,
                                            }),
                                            `
          `,
                                          ],
                                        },
                                      )
                                    : null,
                                  `
          `,
                                  e.isLogin
                                    ? (0, JSXRuntime.jsxs)(
                                        JSXRuntime.Fragment,
                                        {
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsx)(`input`, {
                                              className: `rcc0`,
                                              style: {
                                                height: `52px`,
                                                borderRadius: `12px`,
                                                border: `none`,
                                                boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.25)`,
                                                background: `rgb(var(--rc-fondo))`,
                                                color: `rgb(255,255,255)`,
                                                padding: `0 16px`,
                                                fontFamily: `Inter,sans-serif`,
                                                fontSize: `16px`,
                                                outline: `none`,
                                              },
                                              value: Ot(e.fEmail),
                                              onInput: e.onEmail,
                                              type: `email`,
                                              placeholder: `Email`,
                                            }),
                                            `
          `,
                                          ],
                                        },
                                      )
                                    : null,
                                  `
          `,
                                  (0, JSXRuntime.jsx)(`input`, {
                                    className: `rcc0`,
                                    style: {
                                      height: `52px`,
                                      borderRadius: `12px`,
                                      border: `none`,
                                      boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.25)`,
                                      background: `rgb(var(--rc-fondo))`,
                                      color: `rgb(255,255,255)`,
                                      padding: `0 16px`,
                                      fontFamily: `Inter,sans-serif`,
                                      fontSize: `16px`,
                                      outline: `none`,
                                    },
                                    value: Ot(e.fPass),
                                    onInput: e.onPass,
                                    type: `password`,
                                    placeholder: `Contraseña`,
                                  }),
                                  `
          `,
                                  e.isRegister
                                    ? (0, JSXRuntime.jsxs)(
                                        JSXRuntime.Fragment,
                                        {
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
                                                color: `rgba(255,255,255,0.75)`,
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `500`,
                                                fontSize: `14px`,
                                                textAlign: `left`,
                                                cursor: `pointer`,
                                              },
                                              onClick: e.toggleTerms,
                                              children: [
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: resolveStyle(
                                                    `width:20px;height:20px;flex-shrink:0;border-radius:6px;background:${e.termsBg ?? ``};box-shadow:${e.termsRing ?? ``};display:flex;align-items:center;justify-content:center;font-size:13px;color:rgb(255,255,255)`,
                                                  ),
                                                  children: renderContent(
                                                    e.termsMark,
                                                  ),
                                                }),
                                                `Soy mayor de 18 y acepto los Términos`,
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
                                  e.err
                                    ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                                        children: (0, JSXRuntime.jsx)(`div`, {
                                          style: {
                                            padding: `10px 14px`,
                                            borderRadius: `12px`,
                                            background: `rgba(255,90,90,0.1)`,
                                            fontFamily: `Inter,sans-serif`,
                                            fontWeight: `500`,
                                            fontSize: `13px`,
                                            color: `rgb(255,160,160)`,
                                          },
                                          children: renderContent(e.err),
                                        }),
                                      })
                                    : null,
                                  `
          `,
                                  (0, JSXRuntime.jsx)(`button`, {
                                    style: {
                                      height: `54px`,
                                      borderRadius: `12px`,
                                      border: `none`,
                                      background: `linear-gradient(180deg, rgb(var(--rc-marca-luz)) 0%, rgb(var(--rc-marca)) 100%)`,
                                      boxShadow: `0 10px 26px rgba(var(--rc-marca),0.45)`,
                                      color: `rgb(255,255,255)`,
                                      fontWeight: `700`,
                                      fontSize: `22px`,
                                      letterSpacing: `-0.05em`,
                                      textTransform: `uppercase`,
                                      cursor: `pointer`,
                                    },
                                    onClick: e.submitAuth,
                                    children: renderContent(e.authCta),
                                  }),
                                  `
          `,
                                  e.isLogin
                                    ? (0, JSXRuntime.jsxs)(
                                        JSXRuntime.Fragment,
                                        {
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsxs)(`button`, {
                                              style: {
                                                height: `52px`,
                                                borderRadius: `12px`,
                                                border: `none`,
                                                background: `rgb(255,255,255)`,
                                                color: `rgb(31,31,31)`,
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `600`,
                                                fontSize: `15px`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                justifyContent: `center`,
                                                gap: `10px`,
                                                cursor: `pointer`,
                                              },
                                              onClick: e.googleLogin,
                                              children: [
                                                (0, JSXRuntime.jsxs)(`svg`, {
                                                  width: `18`,
                                                  height: `18`,
                                                  viewBox: `0 0 48 48`,
                                                  children: [
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        fill: `#FFC107`,
                                                        d: `M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z`,
                                                      },
                                                    ),
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        fill: `#FF3D00`,
                                                        d: `m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z`,
                                                      },
                                                    ),
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        fill: `#4CAF50`,
                                                        d: `M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z`,
                                                      },
                                                    ),
                                                    (0, JSXRuntime.jsx)(
                                                      `path`,
                                                      {
                                                        fill: `#1976D2`,
                                                        d: `M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z`,
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                `Continuar con Google`,
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
                          e.isWallet
                            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                children: [
                                  `
          `,
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      display: `grid`,
                                      gridTemplateColumns: `1fr 1fr`,
                                      gap: `4px`,
                                      padding: `4px`,
                                      borderRadius: `12px`,
                                      background: `rgb(var(--rc-fondo))`,
                                    },
                                    children: [
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`button`, {
                                        style: resolveStyle(
                                          `height:42px;border-radius:9px;border:none;background:${e.tabDepBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:15px;letter-spacing:-0.04em;text-transform:uppercase;cursor:pointer`,
                                        ),
                                        onClick: e.openDeposit,
                                        children: `cargar`,
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`button`, {
                                        style: resolveStyle(
                                          `height:42px;border-radius:9px;border:none;background:${e.tabWBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:15px;letter-spacing:-0.04em;text-transform:uppercase;cursor:pointer`,
                                        ),
                                        onClick: e.openWithdraw,
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
                                      justifyContent: `space-between`,
                                      alignItems: `center`,
                                      padding: `12px 16px`,
                                      borderRadius: `14px`,
                                      background: `rgb(var(--rc-fondo))`,
                                    },
                                    children: [
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          fontFamily: `Inter,sans-serif`,
                                          fontWeight: `500`,
                                          fontSize: `13px`,
                                          color: `rgba(255,255,255,0.55)`,
                                          whiteSpace: `nowrap`,
                                        },
                                        children: `Saldo disponible`,
                                      }),
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          fontWeight: `700`,
                                          fontSize: `19px`,
                                          letterSpacing: `-0.04em`,
                                        },
                                        children: renderContent(e.balanceFmt),
                                      }),
                                    ],
                                  }),
                                  `
          `,
                                  e.wForm
                                    ? (0, JSXRuntime.jsxs)(
                                        JSXRuntime.Fragment,
                                        {
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                position: `relative`,
                                              },
                                              children: [
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    position: `absolute`,
                                                    left: `16px`,
                                                    top: `14px`,
                                                    fontWeight: `700`,
                                                    fontSize: `20px`,
                                                    color: `rgba(255,255,255,0.6)`,
                                                  },
                                                  children: `$`,
                                                }),
                                                (0, JSXRuntime.jsx)(`input`, {
                                                  className: `rcc0`,
                                                  style: {
                                                    width: `100%`,
                                                    height: `54px`,
                                                    borderRadius: `12px`,
                                                    border: `none`,
                                                    boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.25)`,
                                                    background: `rgb(var(--rc-fondo))`,
                                                    color: `rgb(255,255,255)`,
                                                    padding: `0 60px 0 36px`,
                                                    fontFamily: `Inter,sans-serif`,
                                                    fontWeight: `600`,
                                                    fontSize: `20px`,
                                                    outline: `none`,
                                                  },
                                                  value: Ot(e.wAmountFmt),
                                                  onInput: e.onWAmount,
                                                  inputMode: `numeric`,
                                                  placeholder: `0`,
                                                }),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    position: `absolute`,
                                                    right: `16px`,
                                                    top: `18px`,
                                                    fontFamily: `Inter,sans-serif`,
                                                    fontSize: `14px`,
                                                    color: `rgba(255,255,255,0.45)`,
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
                                                gridTemplateColumns: `repeat(4,1fr)`,
                                                gap: `6px`,
                                              },
                                              children: [
                                                `
              `,
                                                asArray(e.wQuick).map((e, t) =>
                                                  (0, JSXRuntime.jsx)(
                                                    React.Fragment,
                                                    {
                                                      children: (0,
                                                      JSXRuntime.jsx)(
                                                        `button`,
                                                        {
                                                          style: resolveStyle(
                                                            `height:40px;border-radius:10px;border:none;background:${e?.bg ?? ``};box-shadow:inset 0 0 0 1px rgba(var(--rc-acento),0.25);color:rgb(255,255,255);font-weight:700;font-size:13px;cursor:pointer`,
                                                          ),
                                                          onClick: e?.pick,
                                                          children:
                                                            renderContent(
                                                              e?.label,
                                                            ),
                                                        },
                                                      ),
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
                                            e.isDeposit
                                              ? (0, JSXRuntime.jsxs)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: [
                                                      `
              `,
                                                      (0, JSXRuntime.jsxs)(
                                                        `div`,
                                                        {
                                                          style: {
                                                            padding: `14px`,
                                                            borderRadius: `14px`,
                                                            background: `rgb(var(--rc-fondo))`,
                                                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.3)`,
                                                            display: `flex`,
                                                            flexDirection: `column`,
                                                            gap: `10px`,
                                                          },
                                                          children: [
                                                            `
                `,
                                                            (0,
                                                            JSXRuntime.jsxs)(
                                                              `span`,
                                                              {
                                                                style: {
                                                                  fontFamily: `Inter,sans-serif`,
                                                                  fontWeight: `500`,
                                                                  fontSize: `12px`,
                                                                  color: `rgba(255,255,255,0.5)`,
                                                                },
                                                                children: [
                                                                  `Transferí `,
                                                                  renderContent(
                                                                    e.wAmountMoney,
                                                                  ),
                                                                  ` a este alias`,
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
                                                                  alignItems: `center`,
                                                                  gap: `8px`,
                                                                },
                                                                children: [
                                                                  (0,
                                                                  JSXRuntime.jsx)(
                                                                    `span`,
                                                                    {
                                                                      style: {
                                                                        flex: `1`,
                                                                        minWidth: `0`,
                                                                        fontFamily: `ui-monospace,SFMono-Regular,Menlo,monospace`,
                                                                        fontSize: `16px`,
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
                                                                  (0,
                                                                  JSXRuntime.jsx)(
                                                                    `button`,
                                                                    {
                                                                      style:
                                                                        resolveStyle(
                                                                          `height:40px;padding:0 14px;border-radius:9px;border:none;background:${e.copyBg ?? ``};color:rgb(255,255,255);font-weight:700;font-size:13px;text-transform:uppercase;cursor:pointer`,
                                                                        ),
                                                                      onClick:
                                                                        e.copyAlias,
                                                                      children:
                                                                        renderContent(
                                                                          e.copyLabel,
                                                                        ),
                                                                    },
                                                                  ),
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
                                                                  gap: `16px`,
                                                                  fontFamily: `Inter,sans-serif`,
                                                                  fontWeight: `500`,
                                                                  fontSize: `12px`,
                                                                  color: `rgba(255,255,255,0.45)`,
                                                                },
                                                                children: [
                                                                  (0,
                                                                  JSXRuntime.jsxs)(
                                                                    `span`,
                                                                    {
                                                                      children:
                                                                        [
                                                                          `Titular `,
                                                                          (0,
                                                                          JSXRuntime.jsx)(
                                                                            `span`,
                                                                            {
                                                                              style:
                                                                                {
                                                                                  color: `rgb(255,255,255)`,
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
                                                                  (0,
                                                                  JSXRuntime.jsxs)(
                                                                    `span`,
                                                                    {
                                                                      children:
                                                                        [
                                                                          `Banco `,
                                                                          (0,
                                                                          JSXRuntime.jsx)(
                                                                            `span`,
                                                                            {
                                                                              style:
                                                                                {
                                                                                  color: `rgb(255,255,255)`,
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
                                            e.isWithdraw
                                              ? (0, JSXRuntime.jsxs)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: [
                                                      `
              `,
                                                      (0, JSXRuntime.jsx)(
                                                        `input`,
                                                        {
                                                          style: {
                                                            height: `52px`,
                                                            borderRadius: `12px`,
                                                            border: `none`,
                                                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.25)`,
                                                            background: `rgb(var(--rc-fondo))`,
                                                            color: `rgb(255,255,255)`,
                                                            padding: `0 16px`,
                                                            fontFamily: `Inter,sans-serif`,
                                                            fontSize: `16px`,
                                                            outline: `none`,
                                                          },
                                                          value: Ot(e.wAddr),
                                                          onInput: e.onWAddr,
                                                          placeholder: `CBU, CVU o alias`,
                                                        },
                                                      ),
                                                      `
              `,
                                                      (0, JSXRuntime.jsx)(
                                                        `input`,
                                                        {
                                                          style: {
                                                            height: `52px`,
                                                            borderRadius: `12px`,
                                                            border: `none`,
                                                            boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.25)`,
                                                            background: `rgb(var(--rc-fondo))`,
                                                            color: `rgb(255,255,255)`,
                                                            padding: `0 16px`,
                                                            fontFamily: `Inter,sans-serif`,
                                                            fontSize: `16px`,
                                                            outline: `none`,
                                                          },
                                                          value: Ot(e.wHolder),
                                                          onInput: e.onWHolder,
                                                          placeholder: `Titular de la cuenta`,
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
                                            e.err
                                              ? (0, JSXRuntime.jsx)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: (0,
                                                    JSXRuntime.jsx)(`div`, {
                                                      style: {
                                                        padding: `10px 14px`,
                                                        borderRadius: `12px`,
                                                        background: `rgba(255,90,90,0.1)`,
                                                        fontFamily: `Inter,sans-serif`,
                                                        fontWeight: `500`,
                                                        fontSize: `13px`,
                                                        color: `rgb(255,160,160)`,
                                                      },
                                                      children: renderContent(
                                                        e.err,
                                                      ),
                                                    }),
                                                  },
                                                )
                                              : null,
                                            e.isDeposit
                                              ? (0, JSXRuntime.jsxs)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: [
                                                      `
              `,
                                                      (0, JSXRuntime.jsx)(
                                                        `input`,
                                                        {
                                                          style: {
                                                            display: `none`,
                                                          },
                                                          ref: e.rcRef,
                                                          type: `file`,
                                                          accept: `image/*,application/pdf`,
                                                          onChange: e.onReceipt,
                                                        },
                                                      ),
                                                      `
              `,
                                                      e.noReceipt
                                                        ? (0, JSXRuntime.jsxs)(
                                                            JSXRuntime.Fragment,
                                                            {
                                                              children: [
                                                                `
                `,
                                                                (0,
                                                                JSXRuntime.jsxs)(
                                                                  `button`,
                                                                  {
                                                                    className: `rcc1`,
                                                                    style: {
                                                                      minHeight: `64px`,
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
                                                                    onClick:
                                                                      e.pickReceipt,
                                                                    children: [
                                                                      `
                  `,
                                                                      (0,
                                                                      JSXRuntime.jsx)(
                                                                        `span`,
                                                                        {
                                                                          style:
                                                                            {
                                                                              width: `40px`,
                                                                              height: `40px`,
                                                                              borderRadius: `10px`,
                                                                              background: `rgb(var(--rc-marca))`,
                                                                              display: `flex`,
                                                                              alignItems: `center`,
                                                                              justifyContent: `center`,
                                                                              flexShrink: `0`,
                                                                            },
                                                                          children:
                                                                            (0,
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
                                                                                children:
                                                                                  [
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
                                                                      (0,
                                                                      JSXRuntime.jsxs)(
                                                                        `span`,
                                                                        {
                                                                          style:
                                                                            {
                                                                              flex: `1`,
                                                                              minWidth: `0`,
                                                                              display: `flex`,
                                                                              flexDirection: `column`,
                                                                              gap: `3px`,
                                                                            },
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              JSXRuntime.jsx)(
                                                                                `span`,
                                                                                {
                                                                                  style:
                                                                                    {
                                                                                      fontWeight: `700`,
                                                                                      fontSize: `15px`,
                                                                                      letterSpacing: `-0.03em`,
                                                                                    },
                                                                                  children: `Adjuntá el comprobante`,
                                                                                },
                                                                              ),
                                                                              (0,
                                                                              JSXRuntime.jsx)(
                                                                                `span`,
                                                                                {
                                                                                  style:
                                                                                    {
                                                                                      fontFamily: `Inter,sans-serif`,
                                                                                      fontWeight: `500`,
                                                                                      fontSize: `12px`,
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
                                                                (0,
                                                                JSXRuntime.jsxs)(
                                                                  `div`,
                                                                  {
                                                                    style: {
                                                                      minHeight: `64px`,
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
                                                                      (0,
                                                                      JSXRuntime.jsx)(
                                                                        `div`,
                                                                        {
                                                                          style:
                                                                            resolveStyle(
                                                                              `width:48px;height:48px;border-radius:9px;flex-shrink:0;background-color:rgb(var(--rc-fondo));background-image:url('${e.rcThumb ?? ``}');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-weight:700;font-size:11px;color:rgb(255,160,160)`,
                                                                            ),
                                                                          children:
                                                                            renderContent(
                                                                              e.rcBadge,
                                                                            ),
                                                                        },
                                                                      ),
                                                                      `
                  `,
                                                                      (0,
                                                                      JSXRuntime.jsxs)(
                                                                        `div`,
                                                                        {
                                                                          style:
                                                                            {
                                                                              flex: `1`,
                                                                              minWidth: `0`,
                                                                              display: `flex`,
                                                                              flexDirection: `column`,
                                                                              gap: `3px`,
                                                                            },
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              JSXRuntime.jsx)(
                                                                                `span`,
                                                                                {
                                                                                  style:
                                                                                    {
                                                                                      fontFamily: `Inter,sans-serif`,
                                                                                      fontWeight: `600`,
                                                                                      fontSize: `13px`,
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
                                                                                  style:
                                                                                    {
                                                                                      display: `flex`,
                                                                                      alignItems: `center`,
                                                                                      gap: `5px`,
                                                                                      fontFamily: `Inter,sans-serif`,
                                                                                      fontWeight: `500`,
                                                                                      fontSize: `12px`,
                                                                                      color: `rgb(80,225,140)`,
                                                                                    },
                                                                                  children:
                                                                                    [
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
                                                                      (0,
                                                                      JSXRuntime.jsx)(
                                                                        `button`,
                                                                        {
                                                                          style:
                                                                            {
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
                                                                      (0,
                                                                      JSXRuntime.jsx)(
                                                                        `button`,
                                                                        {
                                                                          style:
                                                                            {
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
                                                                          children:
                                                                            (0,
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
                                                                                children:
                                                                                  (0,
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
                                                )
                                              : null,
                                            `
              `,
                                            (0, JSXRuntime.jsx)(`button`, {
                                              style: {
                                                height: `54px`,
                                                borderRadius: `12px`,
                                                border: `none`,
                                                background: `linear-gradient(180deg, rgb(var(--rc-marca-luz)) 0%, rgb(var(--rc-marca)) 100%)`,
                                                boxShadow: `0 10px 26px rgba(var(--rc-marca),0.45)`,
                                                color: `rgb(255,255,255)`,
                                                fontWeight: `700`,
                                                fontSize: `22px`,
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
                                              ? (0, JSXRuntime.jsx)(
                                                  JSXRuntime.Fragment,
                                                  {
                                                    children: (0,
                                                    JSXRuntime.jsx)(`a`, {
                                                      style: {
                                                        height: `48px`,
                                                        borderRadius: `12px`,
                                                        background: `rgba(37,211,102,0.12)`,
                                                        boxShadow: `inset 0 0 0 1px rgba(37,211,102,0.45)`,
                                                        color: `rgb(80,225,140)`,
                                                        display: `flex`,
                                                        alignItems: `center`,
                                                        justifyContent: `center`,
                                                        fontFamily: `Inter,sans-serif`,
                                                        fontWeight: `600`,
                                                        fontSize: `14px`,
                                                      },
                                                      href: e.waLink,
                                                      target: `_blank`,
                                                      rel: `noopener`,
                                                      children: `¿No te responden? Escribinos por WhatsApp`,
                                                    }),
                                                  },
                                                )
                                              : null,
                                            `
          `,
                                          ],
                                        },
                                      )
                                    : null,
                                  `
          `,
                                  e.wPending
                                    ? (0, JSXRuntime.jsxs)(
                                        JSXRuntime.Fragment,
                                        {
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                padding: `24px 0`,
                                                display: `flex`,
                                                flexDirection: `column`,
                                                alignItems: `center`,
                                                gap: `14px`,
                                                textAlign: `center`,
                                              },
                                              children: [
                                                renderContent(e.spinner),
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontWeight: `700`,
                                                    fontSize: `22px`,
                                                    letterSpacing: `-0.05em`,
                                                  },
                                                  children: renderContent(
                                                    e.wPendingTitle,
                                                  ),
                                                }),
                                              ],
                                            }),
                                            `
            `,
                                            (0, JSXRuntime.jsx)(`a`, {
                                              style: {
                                                height: `48px`,
                                                borderRadius: `12px`,
                                                background: `rgba(37,211,102,0.12)`,
                                                boxShadow: `inset 0 0 0 1px rgba(37,211,102,0.45)`,
                                                color: `rgb(80,225,140)`,
                                                display: `flex`,
                                                alignItems: `center`,
                                                justifyContent: `center`,
                                                fontFamily: `Inter,sans-serif`,
                                                fontWeight: `600`,
                                                fontSize: `14px`,
                                              },
                                              href: e.waLink,
                                              target: `_blank`,
                                              rel: `noopener`,
                                              children: `¿No te responden? Escribinos por WhatsApp`,
                                            }),
                                            `
          `,
                                          ],
                                        },
                                      )
                                    : null,
                                  `
          `,
                                  e.wDone
                                    ? (0, JSXRuntime.jsxs)(
                                        JSXRuntime.Fragment,
                                        {
                                          children: [
                                            `
            `,
                                            (0, JSXRuntime.jsxs)(`div`, {
                                              style: {
                                                padding: `14px 0 0`,
                                                display: `flex`,
                                                flexDirection: `column`,
                                                alignItems: `center`,
                                                gap: `12px`,
                                                textAlign: `center`,
                                              },
                                              children: [
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`div`, {
                                                  style: {
                                                    width: `68px`,
                                                    height: `68px`,
                                                    borderRadius: `50%`,
                                                    background: `rgba(38,161,123,0.18)`,
                                                    boxShadow: `0 0 0 2px rgb(38,161,123)`,
                                                    display: `flex`,
                                                    alignItems: `center`,
                                                    justifyContent: `center`,
                                                  },
                                                  children: (0, JSXRuntime.jsx)(
                                                    `svg`,
                                                    {
                                                      width: `30`,
                                                      height: `30`,
                                                      viewBox: `0 0 24 24`,
                                                      fill: `none`,
                                                      stroke: `rgb(38,200,150)`,
                                                      strokeWidth: `2.4`,
                                                      strokeLinecap: `round`,
                                                      strokeLinejoin: `round`,
                                                      children: (0,
                                                      JSXRuntime.jsx)(`path`, {
                                                        d: `m5 12.5 4.5 4.5L19 7.5`,
                                                      }),
                                                    },
                                                  ),
                                                }),
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`span`, {
                                                  style: {
                                                    fontWeight: `700`,
                                                    fontSize: `26px`,
                                                    letterSpacing: `-0.05em`,
                                                  },
                                                  children: renderContent(
                                                    e.wDoneTitle,
                                                  ),
                                                }),
                                                `
              `,
                                                (0, JSXRuntime.jsx)(`button`, {
                                                  style: {
                                                    marginTop: `8px`,
                                                    width: `100%`,
                                                    height: `52px`,
                                                    borderRadius: `12px`,
                                                    border: `none`,
                                                    background: `rgb(var(--rc-marca))`,
                                                    color: `rgb(255,255,255)`,
                                                    fontWeight: `700`,
                                                    fontSize: `20px`,
                                                    letterSpacing: `-0.05em`,
                                                    textTransform: `uppercase`,
                                                    cursor: `pointer`,
                                                  },
                                                  onClick: e.closeSheet,
                                                  children: `seguir jugando`,
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
                              })
                            : null,
                          `

        `,
                          e.isRand
                            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                children: [
                                  `
          `,
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      display: `flex`,
                                      gap: `16px`,
                                      alignItems: `center`,
                                    },
                                    children: [
                                      `
            `,
                                      (0, JSXRuntime.jsx)(`div`, {
                                        style: resolveStyle(
                                          `width:110px;height:144px;flex-shrink:0;border-radius:12px;background-color:rgb(var(--rc-fondo));background-image:url('${e.rImg ?? ``}');background-size:cover;background-position:center;box-shadow:0 0 0 2px rgb(var(--rc-marca)),0 0 30px rgba(var(--rc-marca),0.5)`,
                                        ),
                                      }),
                                      `
            `,
                                      (0, JSXRuntime.jsxs)(`div`, {
                                        style: {
                                          display: `flex`,
                                          flexDirection: `column`,
                                          gap: `6px`,
                                          minWidth: `0`,
                                        },
                                        children: [
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              fontFamily: `Inter,sans-serif`,
                                              fontWeight: `600`,
                                              fontSize: `12px`,
                                              color: `rgb(var(--rc-acento))`,
                                              letterSpacing: `0.08em`,
                                              textTransform: `uppercase`,
                                            },
                                            children: `Te tocó`,
                                          }),
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              fontWeight: `700`,
                                              fontSize: `26px`,
                                              letterSpacing: `-0.05em`,
                                              lineHeight: `1.05`,
                                            },
                                            children: renderContent(e.rName),
                                          }),
                                          (0, JSXRuntime.jsx)(`span`, {
                                            style: {
                                              fontFamily: `Inter,sans-serif`,
                                              fontWeight: `500`,
                                              fontSize: `13px`,
                                              color: `rgba(255,255,255,0.55)`,
                                            },
                                            children: renderContent(
                                              e.rProvider,
                                            ),
                                          }),
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
                                      height: `54px`,
                                      borderRadius: `12px`,
                                      border: `none`,
                                      background: `linear-gradient(180deg, rgb(var(--rc-marca-luz)) 0%, rgb(var(--rc-marca)) 100%)`,
                                      color: `rgb(255,255,255)`,
                                      fontWeight: `700`,
                                      fontSize: `22px`,
                                      letterSpacing: `-0.05em`,
                                      textTransform: `uppercase`,
                                      cursor: `pointer`,
                                    },
                                    onClick: e.playRand,
                                    children: `jugar ahora`,
                                  }),
                                  `
          `,
                                  (0, JSXRuntime.jsx)(`button`, {
                                    style: {
                                      height: `48px`,
                                      borderRadius: `12px`,
                                      border: `none`,
                                      background: `rgb(var(--rc-fondo))`,
                                      boxShadow: `inset 0 0 0 1px rgba(var(--rc-acento),0.3)`,
                                      color: `rgb(255,255,255)`,
                                      fontWeight: `700`,
                                      fontSize: `16px`,
                                      letterSpacing: `-0.04em`,
                                      textTransform: `uppercase`,
                                      cursor: `pointer`,
                                    },
                                    onClick: e.rollDice,
                                    children: `tirar de nuevo`,
                                  }),
                                  `
        `,
                                ],
                              })
                            : null,
                          `

        `,
                          e.isChat
                            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
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
                                          width: `10px`,
                                          height: `10px`,
                                          borderRadius: `50%`,
                                          background: `rgb(38,200,150)`,
                                        },
                                      }),
                                      (0, JSXRuntime.jsxs)(`span`, {
                                        style: {
                                          fontWeight: `700`,
                                          fontSize: `20px`,
                                          letterSpacing: `-0.03em`,
                                        },
                                        children: [
                                          `Soporte `,
                                          renderContent(e.brandName),
                                        ],
                                      }),
                                    ],
                                  }),
                                  `
          `,
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      minHeight: `260px`,
                                      display: `flex`,
                                      flexDirection: `column`,
                                      gap: `8px`,
                                    },
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
                                              (0, JSXRuntime.jsx)(`div`, {
                                                style: resolveStyle(
                                                  `display:flex;justify-content:${e?.align ?? ``}`,
                                                ),
                                                children: (0, JSXRuntime.jsx)(
                                                  `span`,
                                                  {
                                                    style: resolveStyle(
                                                      `max-width:80%;padding:10px 14px;border-radius:${e?.radius ?? ``};background:${e?.bg ?? ``};font-family:Inter,sans-serif;font-weight:500;font-size:14px;line-height:1.45`,
                                                    ),
                                                    children: renderContent(
                                                      e?.text,
                                                    ),
                                                  },
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
                                  (0, JSXRuntime.jsxs)(`div`, {
                                    style: {
                                      display: `flex`,
                                      flexWrap: `wrap`,
                                      gap: `6px`,
                                    },
                                    children: [
                                      `
            `,
                                      asArray(e.chatQuick).map((e, t) =>
                                        (0, JSXRuntime.jsx)(
                                          React.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsx)(
                                              `button`,
                                              {
                                                style: {
                                                  height: `34px`,
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
                                                },
                                                onClick: e?.send,
                                                children: renderContent(
                                                  e?.label,
                                                ),
                                              },
                                            ),
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
              })
            : null,
          `

  `,
          e.toast
            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  `
    `,
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      position: `absolute`,
                      left: `16px`,
                      right: `16px`,
                      bottom: `100px`,
                      zIndex: `60`,
                      minHeight: `48px`,
                      padding: `12px 16px`,
                      borderRadius: `12px`,
                      background: `rgb(var(--rc-marca))`,
                      boxShadow: `0 10px 30px rgba(0,0,0,0.4)`,
                      display: `flex`,
                      alignItems: `center`,
                      justifyContent: `center`,
                      fontWeight: `700`,
                      fontSize: `15px`,
                      letterSpacing: `-0.03em`,
                      textAlign: `center`,
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
    }),
  });
}
export { renderAzulMobileLayout };
