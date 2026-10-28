/**
 * classic-lobby / mobile-lobby.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { MemoGameCard } from "./game-cards.js";
let xl, Sl, Cl, wl, Tl, H, El;
function MobileSectionHeader({
  titulo: e,
  dato: t,
  accion: n,
  alTocar: r,
  acento: i,
}) {
  return (0, JSXRuntime.jsxs)(`div`, {
    style: {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      margin: `24px 16px 11px`,
    },
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        style: {
          display: `flex`,
          alignItems: `center`,
          gap: `9px`,
        },
        children: [
          (0, JSXRuntime.jsx)(`i`, {
            style: {
              display: `block`,
              width: `3px`,
              height: `14px`,
              background: i,
              borderRadius: `2px`,
            },
          }),
          (0, JSXRuntime.jsx)(`span`, {
            style: {
              font: `600 13px/1 ${H}`,
              letterSpacing: `.12em`,
              color: wl,
              whiteSpace: `nowrap`,
            },
            children: e,
          }),
          t &&
            (0, JSXRuntime.jsx)(`span`, {
              style: {
                font: `400 11px ${Tl}`,
                color: `rgba(255,255,255,.35)`,
                whiteSpace: `nowrap`,
              },
              children: t,
            }),
        ],
      }),
      n &&
        (0, JSXRuntime.jsx)(`button`, {
          type: `button`,
          onClick: r,
          style: {
            font: `400 11.5px ${Tl}`,
            color: `rgba(255,255,255,.42)`,
            whiteSpace: `nowrap`,
            background: `transparent`,
            border: 0,
            padding: 0,
            cursor: `pointer`,
          },
          children: n,
        }),
    ],
  });
}
function MobileGameSearch(e) {
  let [t, n] = (0, React.useState)(!1);
  (0, React.useMemo)(
    () => (e.q.trim().toLowerCase() && e.grid.length, []),
    [e.q, e.grid],
  );
  let r = () => {
      (n(!1), e.setQ(``));
    },
    i = e.piel ?? El;
  return (0, JSXRuntime.jsxs)(`div`, {
    style: {
      background: i.fondo,
      color: wl,
      fontFamily: Tl,
      padding: `0 0 24px`,
    },
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        style: {
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          gap: `10px`,
          padding: i.cabeceraPadding,
          borderBottom: i.cabeceraBorde,
        },
        children: [
          (0, JSXRuntime.jsx)(`img`, {
            src: i.logo.src,
            alt: i.logo.alt,
            style: i.logo.estilo,
          }),
          (0, JSXRuntime.jsxs)(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: `8px`,
            },
            children: [
              e.user
                ? (0, JSXRuntime.jsxs)(`button`, {
                    type: `button`,
                    onClick: e.onCargar,
                    "aria-label": `Cargar fichas`,
                    style: {
                      display: `flex`,
                      alignItems: `center`,
                      gap: `7px`,
                      height: `34px`,
                      padding: `0 4px 0 12px`,
                      borderRadius: `999px`,
                      background: i.superficie,
                      border: i.superficieBorde,
                      cursor: `pointer`,
                      color: wl,
                    },
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        style: {
                          font: `500 13px/1 ${H}`,
                          letterSpacing: `.03em`,
                          whiteSpace: `nowrap`,
                        },
                        children: e.balanceTexto,
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        style: {
                          display: `grid`,
                          placeItems: `center`,
                          width: `26px`,
                          height: `26px`,
                          borderRadius: `999px`,
                          background: i.masFondo,
                          color: i.masTinta,
                          font: `700 15px/1 ${Tl}`,
                        },
                        children: `+`,
                      }),
                    ],
                  })
                : (0, JSXRuntime.jsx)(`button`, {
                    type: `button`,
                    onClick: e.onLogin,
                    style: {
                      height: `34px`,
                      padding: `0 14px`,
                      borderRadius: `999px`,
                      background: i.superficie,
                      border: i.superficieBorde,
                      cursor: `pointer`,
                      color: wl,
                      font: `500 12px/1 ${H}`,
                      letterSpacing: `.06em`,
                    },
                    children: `ENTRAR`,
                  }),
              (0, JSXRuntime.jsx)(`button`, {
                type: `button`,
                onClick: e.goCuenta,
                "aria-label": `Menú`,
                style: {
                  display: `grid`,
                  placeItems: `center`,
                  width: `34px`,
                  height: `34px`,
                  borderRadius: `10px`,
                  background: i.superficie,
                  border: i.superficieBorde,
                  cursor: `pointer`,
                },
                children: (0, JSXRuntime.jsxs)(`span`, {
                  style: {
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `3px`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(`i`, {
                      style: {
                        display: `block`,
                        width: `14px`,
                        height: `1.5px`,
                        background: `#fff`,
                      },
                    }),
                    (0, JSXRuntime.jsx)(`i`, {
                      style: {
                        display: `block`,
                        width: `14px`,
                        height: `1.5px`,
                        background: `#fff`,
                      },
                    }),
                    (0, JSXRuntime.jsx)(`i`, {
                      style: {
                        display: `block`,
                        width: `9px`,
                        height: `1.5px`,
                        background: `#fff`,
                      },
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        style: {
          margin: `14px 16px 0`,
          position: `relative`,
          borderRadius: `18px`,
          overflow: `hidden`,
          border: i.billeteraBorde,
        },
        children: [
          i.billeteraTextura &&
            (0, JSXRuntime.jsx)(`img`, {
              src: i.billeteraTextura.src,
              alt: ``,
              "aria-hidden": `true`,
              style: i.billeteraTextura.estilo,
            }),
          i.billeteraBrillo &&
            (0, JSXRuntime.jsx)(`div`, {
              "aria-hidden": `true`,
              style: {
                position: `absolute`,
                inset: 0,
                background: i.billeteraBrillo,
              },
            }),
          i.billeteraAro &&
            (0, JSXRuntime.jsx)(`span`, {
              "aria-hidden": `true`,
              style: i.billeteraAro,
            }),
          (0, JSXRuntime.jsx)(`img`, {
            src: i.billeteraFichas.src,
            alt: ``,
            "aria-hidden": `true`,
            style: i.billeteraFichas.estilo,
          }),
          (0, JSXRuntime.jsxs)(`div`, {
            style: {
              position: `relative`,
              padding: `16px 18px 18px`,
            },
            children: [
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  font: `500 10px/1 ${H}`,
                  letterSpacing: `.18em`,
                  color: `rgba(255,255,255,.55)`,
                  whiteSpace: `nowrap`,
                },
                children: e.user ? `TU SALDO` : `BIENVENIDO`,
              }),
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  marginTop: `6px`,
                  font: `600 34px/1 ${H}`,
                  letterSpacing: `.01em`,
                  whiteSpace: `nowrap`,
                },
                children: e.user
                  ? `ARS ${e.balanceTexto}`
                  : e.piel
                    ? e.piel.logo.alt
                    : `RushyBet`,
              }),
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  display: `flex`,
                  gap: `9px`,
                  marginTop: `14px`,
                },
                children: e.user
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        (0, JSXRuntime.jsx)(`button`, {
                          type: `button`,
                          onClick: e.onCargar,
                          className: `lb-cargar`,
                          style: {
                            flex: `1.5 1 0`,
                            display: `grid`,
                            placeItems: `center`,
                            height: `46px`,
                            borderRadius: `13px`,
                            border: 0,
                            background: i.cargarFondo,
                            color: i.cargarTinta,
                            font: `600 13.5px/1 ${H}`,
                            letterSpacing: `.1em`,
                            whiteSpace: `nowrap`,
                            cursor: `pointer`,
                            boxShadow: i.cargarSombra,
                          },
                          children: `CARGAR FICHAS`,
                        }),
                        (0, JSXRuntime.jsx)(`button`, {
                          type: `button`,
                          onClick: e.onRetirar,
                          style: {
                            flex: `1 1 0`,
                            display: `grid`,
                            placeItems: `center`,
                            height: `46px`,
                            borderRadius: `13px`,
                            background: i.retirarFondo,
                            border: i.retirarBorde,
                            color: wl,
                            font: `600 13.5px/1 ${H}`,
                            letterSpacing: `.1em`,
                            whiteSpace: `nowrap`,
                            cursor: `pointer`,
                          },
                          children: `RETIRAR`,
                        }),
                      ],
                    })
                  : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        (0, JSXRuntime.jsx)(`button`, {
                          type: `button`,
                          onClick: e.onRegister,
                          style: {
                            flex: `1.5 1 0`,
                            display: `grid`,
                            placeItems: `center`,
                            height: `46px`,
                            borderRadius: `13px`,
                            border: 0,
                            background: i.cargarFondo,
                            color: i.cargarTinta,
                            font: `600 13.5px/1 ${H}`,
                            letterSpacing: `.1em`,
                            whiteSpace: `nowrap`,
                            cursor: `pointer`,
                            boxShadow: i.cargarSombra,
                          },
                          children: `REGISTRARTE`,
                        }),
                        (0, JSXRuntime.jsx)(`button`, {
                          type: `button`,
                          onClick: e.onLogin,
                          style: {
                            flex: `1 1 0`,
                            display: `grid`,
                            placeItems: `center`,
                            height: `46px`,
                            borderRadius: `13px`,
                            background: i.retirarFondo,
                            border: i.retirarBorde,
                            color: wl,
                            font: `600 13.5px/1 ${H}`,
                            letterSpacing: `.1em`,
                            whiteSpace: `nowrap`,
                            cursor: `pointer`,
                          },
                          children: `ENTRAR`,
                        }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(`button`, {
        type: `button`,
        onClick: () => n(!0),
        style: {
          display: `flex`,
          alignItems: `center`,
          gap: `10px`,
          margin: `14px 16px 0`,
          height: `44px`,
          padding: `0 14px`,
          borderRadius: `12px`,
          background: i.campo,
          border: i.campoBorde,
          cursor: `pointer`,
          width: `calc(100% - 32px)`,
        },
        children: [
          (0, JSXRuntime.jsxs)(`svg`, {
            width: `15`,
            height: `15`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            stroke: `rgba(255,255,255,.45)`,
            strokeWidth: `2.2`,
            strokeLinecap: `round`,
            "aria-hidden": `true`,
            children: [
              (0, JSXRuntime.jsx)(`circle`, {
                cx: `11`,
                cy: `11`,
                r: `7`,
              }),
              (0, JSXRuntime.jsx)(`path`, {
                d: `m20 20-3.5-3.5`,
              }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`span`, {
            style: {
              font: `400 13.5px/1 ${Tl}`,
              color: `rgba(255,255,255,.4)`,
              whiteSpace: `nowrap`,
            },
            children: [`Buscar entre `, e.contadorJuegos, ` juegos`],
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(`div`, {
        style: {
          display: `grid`,
          gridTemplateColumns: `repeat(${e.chips.length}, 1fr)`,
          gap: `6px`,
          margin: `12px 16px 0`,
        },
        children: e.chips.map((e) =>
          (0, JSXRuntime.jsx)(
            `button`,
            {
              type: `button`,
              onClick: e.onClick,
              style: {
                height: `32px`,
                padding: 0,
                display: `grid`,
                placeItems: `center`,
                borderRadius: `9px`,
                cursor: `pointer`,
                font: `500 11px/1 ${H}`,
                letterSpacing: `.06em`,
                whiteSpace: `nowrap`,
                background: e.activo ? i.pastillaActivaFondo : i.campo,
                border: `1px solid ${e.activo ? i.pastillaActivaBorde : i.pastillaBorde}`,
                color: e.activo ? i.acentoClaro : `rgba(255,255,255,.7)`,
              },
              children: e.label,
            },
            e.k,
          ),
        ),
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        style: {
          display: `flex`,
          gap: `10px`,
          margin: `16px 16px 0`,
        },
        children: [
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            onClick: e.goLive,
            "aria-label": `En vivo — jugar`,
            style: {
              flex: 1,
              position: `relative`,
              height: `118px`,
              borderRadius: `14px`,
              overflow: `hidden`,
              border: i.puertaBorde,
              cursor: `pointer`,
              background: `transparent`,
              padding: 0,
            },
            children: [
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `absolute`,
                  inset: 0,
                  background: i.vivo.base,
                },
              }),
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `absolute`,
                  inset: 0,
                  background: i.vivo.brillo,
                },
              }),
              (0, JSXRuntime.jsx)(`img`, {
                src: i.vivo.arte.src,
                alt: ``,
                style: i.vivo.arte.estilo,
              }),
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `absolute`,
                  inset: 0,
                  background: i.vivo.velo,
                },
              }),
              i.vivo.aro &&
                (0, JSXRuntime.jsx)(`span`, {
                  "aria-hidden": `true`,
                  style: i.vivo.aro,
                }),
              (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  position: `absolute`,
                  left: `12px`,
                  bottom: `12px`,
                  textAlign: `left`,
                },
                children: [
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      font: `600 17px/1 ${H}`,
                      letterSpacing: `.03em`,
                      color: wl,
                      whiteSpace: `nowrap`,
                    },
                    children: `EN VIVO`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      marginTop: `4px`,
                      font: `600 10px/1 ${H}`,
                      letterSpacing: `.13em`,
                      color: i.acentoClaro,
                      whiteSpace: `nowrap`,
                    },
                    children: `JUGAR ›`,
                  }),
                ],
              }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            onClick: e.goSlots,
            "aria-label": `Slots — jugar`,
            style: {
              flex: 1,
              position: `relative`,
              height: `118px`,
              borderRadius: `14px`,
              overflow: `hidden`,
              border: i.puertaBorde,
              cursor: `pointer`,
              background: `transparent`,
              padding: 0,
            },
            children: [
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `absolute`,
                  inset: 0,
                  background: i.slots.base,
                },
              }),
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `absolute`,
                  inset: 0,
                  background: i.slots.brillo,
                },
              }),
              (0, JSXRuntime.jsx)(`img`, {
                src: i.slots.arte.src,
                alt: ``,
                style: i.slots.arte.estilo,
              }),
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `absolute`,
                  inset: 0,
                  background: i.slots.velo,
                },
              }),
              i.slots.aro &&
                (0, JSXRuntime.jsx)(`span`, {
                  "aria-hidden": `true`,
                  style: i.slots.aro,
                }),
              (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  position: `absolute`,
                  left: `12px`,
                  bottom: `12px`,
                  textAlign: `left`,
                },
                children: [
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      font: `600 17px/1 ${H}`,
                      letterSpacing: `.03em`,
                      color: wl,
                      whiteSpace: `nowrap`,
                    },
                    children: `SLOTS`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      marginTop: `4px`,
                      font: `600 10px/1 ${H}`,
                      letterSpacing: `.13em`,
                      color: i.acentoClaro,
                      whiteSpace: `nowrap`,
                    },
                    children: `JUGAR ›`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(`button`, {
        type: `button`,
        onClick: e.goSports,
        "aria-label": `Deportes — ver partidos`,
        style: {
          display: `block`,
          width: `calc(100% - 32px)`,
          margin: `10px 16px 0`,
          position: `relative`,
          height: `96px`,
          borderRadius: `14px`,
          overflow: `hidden`,
          border: i.puertaBorde,
          cursor: `pointer`,
          background: `transparent`,
          padding: 0,
        },
        children: [
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              background: i.deportes.base,
            },
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              background: i.deportes.brillo,
            },
          }),
          (0, JSXRuntime.jsx)(`img`, {
            src: i.deportes.arte.src,
            alt: ``,
            style: i.deportes.arte.estilo,
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              background: i.deportes.velo,
            },
          }),
          i.deportes.aro &&
            (0, JSXRuntime.jsx)(`span`, {
              "aria-hidden": `true`,
              style: i.deportes.aro,
            }),
          (0, JSXRuntime.jsxs)(`div`, {
            style: {
              position: `absolute`,
              left: `14px`,
              top: `50%`,
              transform: `translateY(-50%)`,
              textAlign: `left`,
            },
            children: [
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  font: `600 19px/1 ${H}`,
                  letterSpacing: `.03em`,
                  color: wl,
                  whiteSpace: `nowrap`,
                },
                children: `DEPORTES`,
              }),
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  marginTop: `5px`,
                  font: `600 10px/1 ${H}`,
                  letterSpacing: `.13em`,
                  color: i.acentoClaro,
                  whiteSpace: `nowrap`,
                },
                children: `VER PARTIDOS ›`,
              }),
            ],
          }),
        ],
      }),
      e.recentGames.length > 0 &&
        (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
          children: [
            (0, JSXRuntime.jsx)(MobileSectionHeader, {
              titulo: `SEGUÍ JUGANDO`,
              dato: String(e.recentGames.length),
              acento: i.acento,
            }),
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                display: `flex`,
                gap: `10px`,
                padding: `0 16px`,
                overflowX: `auto`,
                scrollbarWidth: `none`,
              },
              children: e.recentGames.slice(0, 10).map((t, n) =>
                (0, JSXRuntime.jsxs)(
                  `div`,
                  {
                    style: {
                      flex: `none`,
                      width: `104px`,
                    },
                    children: [
                      (0, JSXRuntime.jsx)(MemoGameCard, {
                        game: t,
                        onOpen: e.onOpen,
                        fav: e.isFav(t),
                        onFav: e.onFav,
                        width: `104px`,
                      }),
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          marginTop: `7px`,
                          height: `3px`,
                          borderRadius: `2px`,
                          background: `rgba(255,255,255,.1)`,
                          overflow: `hidden`,
                        },
                        children: (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            height: `3px`,
                            background: i.acento,
                            width: `${Math.max(18, 82 - n * 14)}%`,
                          },
                        }),
                      }),
                    ],
                  },
                  t.idx,
                ),
              ),
            }),
          ],
        }),
      (0, JSXRuntime.jsx)(MobileSectionHeader, {
        titulo: e.gridTitle,
        dato: `${e.grid.length}`,
        accion: `Buscar ›`,
        alTocar: () => n(!0),
        acento: i.acento,
      }),
      (0, JSXRuntime.jsx)(`div`, {
        style: {
          display: `grid`,
          gridTemplateColumns: `repeat(3, 1fr)`,
          gap: `9px`,
          margin: `0 16px`,
        },
        children: e.grid.slice(0, 12).map((t) =>
          (0, JSXRuntime.jsx)(
            MemoGameCard,
            {
              game: t,
              onOpen: e.onOpen,
              fav: e.isFav(t),
              onFav: e.onFav,
            },
            t.idx,
          ),
        ),
      }),
      e.grid.length === 0 &&
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            margin: `0 16px`,
            padding: `26px 16px`,
            borderRadius: `14px`,
            background: `var(--dm-n-lista, #101014)`,
            border: `1px solid rgba(255,255,255,.07)`,
            textAlign: `center`,
          },
          children: [
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                font: `600 13px/1 ${H}`,
                letterSpacing: `.1em`,
              },
              children: `SIN RESULTADOS`,
            }),
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                marginTop: `8px`,
                font: `400 12px/1.5 ${Tl}`,
                color: `rgba(255,255,255,.4)`,
              },
              children: `Probá con otro filtro o buscá por proveedor.`,
            }),
          ],
        }),
      (0, JSXRuntime.jsx)(MobileSectionHeader, {
        titulo: `PROVEEDORES`,
        dato: String(e.proveedores.length),
        acento: i.acento,
      }),
      (0, JSXRuntime.jsx)(`div`, {
        style: {
          display: `flex`,
          gap: `9px`,
          padding: `0 16px`,
          overflowX: `auto`,
          scrollbarWidth: `none`,
        },
        children: e.proveedores.map((t) =>
          (0, JSXRuntime.jsxs)(
            `button`,
            {
              type: `button`,
              onClick: () => e.openProv(t.code),
              style: {
                flex: `none`,
                minWidth: `124px`,
                padding: `11px 13px`,
                borderRadius: `12px`,
                cursor: `pointer`,
                background: i.campo,
                border: `1px solid ${i.pastillaBorde}`,
                textAlign: `left`,
                color: wl,
              },
              children: [
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    font: `500 12px/1.1 ${H}`,
                    letterSpacing: `.06em`,
                    whiteSpace: `nowrap`,
                  },
                  children: t.nombre,
                }),
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    marginTop: `4px`,
                    font: `400 10.5px ${Tl}`,
                    color: `rgba(255,255,255,.4)`,
                    whiteSpace: `nowrap`,
                  },
                  children: [t.juegos, ` juegos`],
                }),
              ],
            },
            t.code,
          ),
        ),
      }),
      e.ganadores.length > 0 &&
        (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
          children: [
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                display: `flex`,
                alignItems: `center`,
                gap: `9px`,
                margin: `24px 16px 11px`,
              },
              children: [
                (0, JSXRuntime.jsx)(`i`, {
                  style: {
                    display: `block`,
                    width: `3px`,
                    height: `14px`,
                    background: i.acento,
                    borderRadius: `2px`,
                  },
                }),
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    font: `600 13px/1 ${H}`,
                    letterSpacing: `.12em`,
                    whiteSpace: `nowrap`,
                  },
                  children: `GANADORES`,
                }),
                (0, JSXRuntime.jsxs)(`span`, {
                  style: {
                    display: `flex`,
                    alignItems: `center`,
                    gap: `5px`,
                    padding: `3px 8px`,
                    borderRadius: `6px`,
                    background: i.vivoFondo,
                    font: `500 9.5px/1 ${H}`,
                    letterSpacing: `.1em`,
                    color: i.acentoClaro,
                    whiteSpace: `nowrap`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(`i`, {
                      className: `lb-live`,
                      style: {
                        display: `block`,
                        width: `5px`,
                        height: `5px`,
                        borderRadius: `999px`,
                        background: i.acento,
                      },
                    }),
                    `EN VIVO`,
                  ],
                }),
              ],
            }),
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                margin: `0 16px`,
                borderRadius: `14px`,
                background: `var(--dm-n-lista, #111115)`,
                border: `1px solid rgba(255,255,255,.07)`,
                overflow: `hidden`,
              },
              children: e.ganadores.slice(0, 6).map((t) =>
                (0, JSXRuntime.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => e.abrirGanador(t.idx),
                    style: {
                      display: `flex`,
                      alignItems: `center`,
                      gap: `11px`,
                      padding: `11px 13px`,
                      borderBottom: `1px solid rgba(255,255,255,.05)`,
                      cursor: t.idx === null ? `default` : `pointer`,
                      width: `100%`,
                      background: `transparent`,
                      border: 0,
                      borderBottomWidth: `1px`,
                      borderBottomStyle: `solid`,
                      borderBottomColor: `rgba(255,255,255,.05)`,
                      color: wl,
                      textAlign: `left`,
                    },
                    children: [
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          flex: `none`,
                          width: `34px`,
                          height: `34px`,
                          borderRadius: `9px`,
                          display: `grid`,
                          placeItems: `center`,
                          background: i.ganadorFondo,
                        },
                        children: (0, JSXRuntime.jsx)(`img`, {
                          src: i.ganadorMarca.src,
                          alt: ``,
                          style: i.ganadorMarca.estilo,
                        }),
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          flex: 1,
                          minWidth: 0,
                        },
                        children: [
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              font: `500 12px/1.1 ${Tl}`,
                              whiteSpace: `nowrap`,
                            },
                            children: t.usuario,
                          }),
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              marginTop: `3px`,
                              font: `400 10.5px ${Tl}`,
                              color: `rgba(255,255,255,.38)`,
                              whiteSpace: `nowrap`,
                              overflow: `hidden`,
                              textOverflow: `ellipsis`,
                            },
                            children: t.juego,
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          textAlign: `right`,
                        },
                        children: [
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              font: `500 13px/1 ${H}`,
                              letterSpacing: `.02em`,
                              color: i.acentoClaro,
                              whiteSpace: `nowrap`,
                            },
                            children: t.pago,
                          }),
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              marginTop: `3px`,
                              font: `500 9.5px/1 ${H}`,
                              letterSpacing: `.08em`,
                              color: `rgba(255,255,255,.35)`,
                              whiteSpace: `nowrap`,
                            },
                            children: t.mult,
                          }),
                        ],
                      }),
                    ],
                  },
                  t.id,
                ),
              ),
            }),
          ],
        }),
      t &&
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            position: `fixed`,
            inset: 0,
            zIndex: 60,
            display: `flex`,
            flexDirection: `column`,
            background: i.fondo,
          },
          children: [
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                flex: `none`,
                padding: `calc(14px + env(safe-area-inset-top)) 16px 12px`,
                borderBottom: `1px solid rgba(255,255,255,.06)`,
              },
              children: (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  gap: `11px`,
                  height: `48px`,
                  padding: `0 15px`,
                  borderRadius: `14px`,
                  background: `var(--dm-n-campo, #15151A)`,
                  border: i.buscadorBorde,
                  boxShadow: i.buscadorHalo,
                },
                children: [
                  (0, JSXRuntime.jsxs)(`svg`, {
                    width: `16`,
                    height: `16`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: i.buscadorLupa,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    "aria-hidden": `true`,
                    children: [
                      (0, JSXRuntime.jsx)(`circle`, {
                        cx: `11`,
                        cy: `11`,
                        r: `7`,
                      }),
                      (0, JSXRuntime.jsx)(`path`, {
                        d: `m20 20-3.5-3.5`,
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsx)(`input`, {
                    value: e.q,
                    onChange: (t) => e.setQ(t.target.value),
                    placeholder: `Nombre del juego o proveedor`,
                    autoFocus: !0,
                    style: {
                      flex: 1,
                      minWidth: 0,
                      background: `transparent`,
                      border: 0,
                      outline: `none`,
                      color: `#fff`,
                      font: `400 15px/1 ${Tl}`,
                    },
                  }),
                  (0, JSXRuntime.jsx)(`button`, {
                    type: `button`,
                    onClick: r,
                    style: {
                      font: `400 12px ${Tl}`,
                      color: `rgba(255,255,255,.45)`,
                      whiteSpace: `nowrap`,
                      cursor: `pointer`,
                      background: `transparent`,
                      border: 0,
                    },
                    children: `Cancelar`,
                  }),
                ],
              }),
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                flex: 1,
                overflowY: `auto`,
                padding: `14px 16px 24px`,
              },
              children: [
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    font: `500 10px/1 ${H}`,
                    letterSpacing: `.16em`,
                    color: `rgba(255,255,255,.4)`,
                    whiteSpace: `nowrap`,
                  },
                  children: e.q.trim()
                    ? `${e.grid.length} RESULTADOS`
                    : `ESCRIBÍ PARA BUSCAR`,
                }),
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    display: `grid`,
                    gridTemplateColumns: `1fr 1fr 1fr`,
                    gap: `9px`,
                    marginTop: `11px`,
                  },
                  children:
                    e.q.trim() !== `` &&
                    e.grid.slice(0, 30).map((t) =>
                      (0, JSXRuntime.jsx)(
                        MemoGameCard,
                        {
                          game: t,
                          onOpen: (t) => {
                            (r(), e.onOpen(t));
                          },
                          fav: e.isFav(t),
                          onFav: e.onFav,
                        },
                        t.idx,
                      ),
                    ),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function MobileLobbyShell(e) {
  let t = e.piel ?? El;
  return (0, JSXRuntime.jsxs)(`div`, {
    style: {
      position: `fixed`,
      inset: 0,
      zIndex: 55,
      display: `flex`,
      flexDirection: `column`,
      background: t.fondo,
      color: wl,
      fontFamily: Tl,
      overflowY: `auto`,
    },
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        style: {
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          padding: `calc(14px + env(safe-area-inset-top)) 16px 12px`,
        },
        children: [
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              font: `600 20px/1 ${H}`,
              letterSpacing: `.04em`,
              whiteSpace: `nowrap`,
            },
            children: `TU CUENTA`,
          }),
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            onClick: e.cerrar,
            "aria-label": `Cerrar`,
            style: {
              display: `grid`,
              placeItems: `center`,
              width: `34px`,
              height: `34px`,
              borderRadius: `10px`,
              background: t.superficie,
              border: t.superficieBorde,
              cursor: `pointer`,
              color: `rgba(255,255,255,.7)`,
              fontSize: `14px`,
            },
            children: `✕`,
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        style: {
          padding: `4px 16px 24px`,
        },
        children: [
          (0, JSXRuntime.jsxs)(`div`, {
            style: {
              padding: `16px`,
              borderRadius: `16px`,
              background: `var(--dm-n-lista, #111115)`,
              border: `1px solid rgba(255,255,255,.07)`,
            },
            children: [
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  font: `500 10px/1 ${H}`,
                  letterSpacing: `.18em`,
                  color: `rgba(255,255,255,.45)`,
                  whiteSpace: `nowrap`,
                },
                children: `DISPONIBLE`,
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  marginTop: `8px`,
                  font: `600 30px/1 ${H}`,
                  whiteSpace: `nowrap`,
                },
                children: [`ARS `, e.balanceTexto],
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  display: `flex`,
                  gap: `8px`,
                  marginTop: `14px`,
                },
                children: [
                  (0, JSXRuntime.jsx)(`button`, {
                    type: `button`,
                    onClick: e.onCargar,
                    style: {
                      flex: 1,
                      display: `grid`,
                      placeItems: `center`,
                      height: `42px`,
                      borderRadius: `12px`,
                      border: 0,
                      background: t.cargarFondo,
                      color: t.cargarTinta,
                      font: `600 12.5px/1 ${H}`,
                      letterSpacing: `.09em`,
                      whiteSpace: `nowrap`,
                      cursor: `pointer`,
                    },
                    children: `CARGAR FICHAS`,
                  }),
                  (0, JSXRuntime.jsx)(`button`, {
                    type: `button`,
                    onClick: e.onRetirar,
                    style: {
                      flex: 1,
                      display: `grid`,
                      placeItems: `center`,
                      height: `42px`,
                      borderRadius: `12px`,
                      background: t.cuentaRetirarFondo,
                      border: t.cuentaRetirarBorde,
                      color: wl,
                      font: `600 12.5px/1 ${H}`,
                      letterSpacing: `.09em`,
                      whiteSpace: `nowrap`,
                      cursor: `pointer`,
                    },
                    children: `RETIRAR`,
                  }),
                ],
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              margin: `22px 0 10px`,
              font: `600 12px/1 ${H}`,
              letterSpacing: `.13em`,
              color: `rgba(255,255,255,.55)`,
              whiteSpace: `nowrap`,
            },
            children: `MOVIMIENTOS`,
          }),
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            onClick: e.onMovimientos ?? void 0,
            disabled: !e.onMovimientos,
            style: {
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              width: `100%`,
              padding: `14px`,
              borderRadius: `14px`,
              background: `var(--dm-n-lista, #111115)`,
              border: `1px solid rgba(255,255,255,.07)`,
              color: wl,
              cursor: e.onMovimientos ? `pointer` : `default`,
              font: `500 12.5px/1 ${Tl}`,
            },
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                children: `Ver mis cargas y retiros`,
              }),
              (0, JSXRuntime.jsx)(`span`, {
                style: {
                  color: t.acentoClaro,
                },
                children: `›`,
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              margin: `22px 0 10px`,
              font: `600 12px/1 ${H}`,
              letterSpacing: `.13em`,
              color: `rgba(255,255,255,.55)`,
              whiteSpace: `nowrap`,
            },
            children: `MÁS`,
          }),
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            onClick: e.onMenu,
            style: {
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              width: `100%`,
              padding: `14px`,
              borderRadius: `14px`,
              background: `var(--dm-n-lista, #111115)`,
              border: `1px solid rgba(255,255,255,.07)`,
              color: wl,
              cursor: `pointer`,
              font: `500 12.5px/1 ${Tl}`,
            },
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                children: `Ayuda, límites y cerrar sesión`,
              }),
              (0, JSXRuntime.jsx)(`span`, {
                style: {
                  color: t.acentoClaro,
                },
                children: `›`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function initializeMobileLobby() {
  xl = `./rushybet/v3/`;
  Sl = `#FF5F0E`;
  Cl = `#FF7A2E`;
  wl = `#F5F3F0`;
  Tl = `var(--font-barlow), 'Barlow', system-ui, sans-serif`;
  H = `var(--font-oswald), 'Oswald', sans-serif`;
  El = {
    fondo: `#08080A`,
    acento: Sl,
    acentoClaro: Cl,
    logo: {
      src: `./rushybet/rushybet-logo.webp`,
      alt: `RushyBet`,
      estilo: {
        height: `20px`,
        width: `auto`,
        display: `block`,
      },
    },
    cabeceraPadding: `14px 16px 12px`,
    cabeceraBorde: `1px solid rgba(255,255,255,.05)`,
    superficie: `#17171C`,
    superficieBorde: `1px solid rgba(255,255,255,.09)`,
    masFondo: Sl,
    masTinta: `#140b04`,
    billeteraBorde: `1px solid rgba(255,255,255,.08)`,
    billeteraTextura: {
      src: `${xl}textura-banner.png`,
      estilo: {
        position: `absolute`,
        inset: 0,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        opacity: 0.9,
      },
    },
    billeteraBrillo: null,
    billeteraFichas: {
      src: `${xl}cut-fichas.png`,
      estilo: {
        position: `absolute`,
        right: `-46px`,
        top: `-24px`,
        width: `210px`,
        opacity: 0.55,
        transform: `rotate(8deg)`,
      },
    },
    cargarFondo: `linear-gradient(180deg, ${Cl}, #EE5100)`,
    cargarTinta: `#160b02`,
    cargarSombra: `0 10px 24px rgba(255,95,14,.3)`,
    retirarFondo: `rgba(10,10,12,.55)`,
    retirarBorde: `1px solid rgba(255,255,255,.14)`,
    campo: `#131317`,
    campoBorde: `1px solid rgba(255,255,255,.07)`,
    pastillaBorde: `rgba(255,255,255,.08)`,
    pastillaActivaFondo: `rgba(255,95,14,.16)`,
    pastillaActivaBorde: `rgba(255,95,14,.55)`,
    puertaBorde: `1px solid rgba(255,255,255,.07)`,
    vivo: {
      base: `linear-gradient(160deg,#1B1216,#0A0709)`,
      brillo: `radial-gradient(100% 80% at 88% 30%,rgba(255,95,14,.3),transparent 62%)`,
      velo: `linear-gradient(90deg,rgba(6,6,8,.88) 6%,rgba(6,6,8,.04) 72%)`,
      arte: {
        src: `${xl}cut-ruleta.png`,
        estilo: {
          position: `absolute`,
          right: `-26px`,
          bottom: `-14px`,
          width: `120px`,
        },
      },
    },
    slots: {
      base: `linear-gradient(160deg,#1B1510,#0A0806)`,
      brillo: `radial-gradient(100% 80% at 88% 30%,rgba(255,95,14,.3),transparent 62%)`,
      velo: `linear-gradient(90deg,rgba(6,6,8,.88) 6%,rgba(6,6,8,.04) 72%)`,
      arte: {
        src: `./rushybet/v2/pop-slots.webp`,
        estilo: {
          position: `absolute`,
          right: `-18px`,
          bottom: `-10px`,
          width: `124px`,
        },
      },
    },
    deportes: {
      base: `linear-gradient(160deg,#12171B,#07090A)`,
      brillo: `radial-gradient(90% 90% at 82% 40%,rgba(255,95,14,.26),transparent 62%)`,
      velo: `linear-gradient(90deg,rgba(6,6,8,.9) 4%,rgba(6,6,8,.04) 66%)`,
      arte: {
        src: `${xl}cut-deportes.png`,
        estilo: {
          position: `absolute`,
          right: `-6px`,
          bottom: `-20px`,
          width: `150px`,
        },
      },
    },
    ganadorFondo: `linear-gradient(155deg,#1B1216,#0A0709)`,
    ganadorMarca: {
      src: `${xl}mark.png`,
      estilo: {
        width: `15px`,
        opacity: 0.6,
      },
    },
    vivoFondo: `rgba(255,95,14,.14)`,
    buscadorBorde: `1px solid rgba(255,95,14,.45)`,
    buscadorHalo: `0 0 0 3px rgba(255,95,14,.1)`,
    buscadorLupa: `#FF9455`,
    cuentaRetirarFondo: `rgba(255,255,255,.07)`,
    cuentaRetirarBorde: `1px solid rgba(255,255,255,.12)`,
  };
}
export { El, MobileGameSearch, MobileLobbyShell, initializeMobileLobby };
