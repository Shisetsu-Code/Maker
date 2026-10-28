/**
 * classic-lobby / legacy-support-chat.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { is, as, os } from "./demo-actions.js";
let cs, ls;
function LegacySupportChat({ piel: e = null } = {}) {
  let [t, n] = (0, React.useState)(!1),
    [r, i] = (0, React.useState)([]),
    [a, o] = (0, React.useState)(``),
    [s, c] = (0, React.useState)(!1),
    [l, u] = (0, React.useState)(null),
    [d, f] = (0, React.useState)(null),
    [p, m] = (0, React.useState)(null),
    h = (0, React.useRef)(null),
    [g, _] = (0, React.useState)(0),
    [v, y] = (0, React.useState)(!0),
    b = (0, React.useRef)(null),
    x = (0, React.useRef)(``),
    S = (0, React.useRef)(0);
  (0, React.useEffect)(() => {
    if (t) return;
    let e = !0,
      n = () => {
        document.hidden ||
          as()
            .then((t) => {
              e && _(t);
            })
            .catch(() => {});
      };
    n();
    let r = setInterval(n, 45e3);
    return () => {
      ((e = !1), clearInterval(r));
    };
  }, [t]);
  let C = (0, React.useCallback)((e) => {
    let t = ++S.current;
    is()
      .then((n) => {
        t === S.current &&
          (y(n.disponible), n.ok && (i(n.mensajes), e && _(0)));
      })
      .catch(() => {});
  }, []);
  ((0, React.useEffect)(() => {
    if (!t) return;
    C(!0);
    let e = setInterval(() => {
        document.hidden || C(!0);
      }, 6e3),
      n = () => {
        document.hidden || C(!0);
      };
    return (
      document.addEventListener(`visibilitychange`, n),
      () => {
        (clearInterval(e), document.removeEventListener(`visibilitychange`, n));
      }
    );
  }, [t, C]),
    (0, React.useEffect)(() => {
      if (!t) {
        x.current = ``;
        return;
      }
      let e = r[r.length - 1]?.id ?? ``;
      e !== x.current &&
        ((x.current = e),
        b.current?.scrollIntoView({
          block: `end`,
        }));
    }, [r, t]),
    (0, React.useEffect)(() => {
      if (!t && !p) return;
      let e = (e) => {
        e.key === `Escape` && (p ? m(null) : n(!1));
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [t, p]));
  async function w() {
    let e = a.trim();
    if ((!e && !d) || s) return;
    (c(!0), u(null));
    let t = new FormData();
    d && t.set(`foto`, d);
    try {
      let n = await os(e, t);
      if (!n.ok) {
        u(n.mensaje);
        return;
      }
      (S.current++,
        o(``),
        f(null),
        h.current && (h.current.value = ``),
        i(n.mensajes));
    } catch {
      u(`No se pudo enviar. Fijate la conexión y probá de nuevo.`);
    } finally {
      c(!1);
    }
  }
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsxs)(`button`, {
        type: `button`,
        onClick: () => n((e) => !e),
        "aria-label": t
          ? `Cerrar el chat de soporte`
          : `Abrir el chat de soporte`,
        style: {
          position: `fixed`,
          right: `16px`,
          bottom: `calc(84px + env(safe-area-inset-bottom))`,
          zIndex: 52,
          width: `56px`,
          height: `56px`,
          borderRadius: `50%`,
          border: `none`,
          cursor: `pointer`,
          background: e
            ? e.botonFondo
            : `linear-gradient(180deg,#ff6222,#e84a06)`,
          color: e ? e.botonTinta : `#fff`,
          boxShadow: e
            ? e.botonSombra
            : `0 12px 30px -8px rgba(244,82,11,.65), inset 0 1px 0 rgba(255,255,255,.25)`,
          display: `grid`,
          placeItems: `center`,
          transition: `transform .22s cubic-bezier(0.34, 1.56, 0.64, 1)`,
          transform: t ? `scale(.92)` : `scale(1)`,
        },
        children: [
          (0, JSXRuntime.jsx)(`svg`, {
            width: `24`,
            height: `24`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.9`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            "aria-hidden": !0,
            children: t
              ? (0, JSXRuntime.jsx)(`path`, {
                  d: `M6 6l12 12M18 6L6 18`,
                })
              : (0, JSXRuntime.jsx)(`path`, {
                  d: `M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.6-.7L3 21l1.9-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z`,
                }),
          }),
          !t &&
            g > 0 &&
            (0, JSXRuntime.jsx)(`span`, {
              style: {
                position: `absolute`,
                top: `-2px`,
                right: `-2px`,
                minWidth: `20px`,
                height: `20px`,
                padding: `0 5px`,
                borderRadius: `99px`,
                background: `#ff3b5c`,
                color: `#fff`,
                fontSize: `11px`,
                fontWeight: 800,
                display: `grid`,
                placeItems: `center`,
                boxShadow: `0 0 0 2px #0a0a0a`,
              },
              children: g,
            }),
        ],
      }),
      t &&
        (0, JSXRuntime.jsxs)(`div`, {
          role: `dialog`,
          "aria-label": `Chat con el soporte`,
          className: `rb-chat-ventana`,
          style: {
            position: `fixed`,
            right: `16px`,
            bottom: `calc(152px + env(safe-area-inset-bottom))`,
            zIndex: 96,
            width: `min(370px, calc(100vw - 32px))`,
            maxHeight: `min(560px, 70vh)`,
            display: `flex`,
            flexDirection: `column`,
            overflow: `hidden`,
            background: `#101010`,
            borderRadius: `18px`,
            border: `1px solid rgba(255,255,255,.10)`,
            boxShadow: `0 30px 70px -20px rgba(0,0,0,.85)`,
            animation: `rbChatSube .28s cubic-bezier(0.34, 1.56, 0.64, 1) both`,
          },
          children: [
            (0, JSXRuntime.jsx)(`style`, {
              children: `@keyframes rbChatSube{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}`,
            }),
            (0, JSXRuntime.jsxs)(`header`, {
              style: {
                display: `flex`,
                alignItems: `center`,
                gap: `10px`,
                padding: `14px 16px`,
                borderBottom: `1px solid rgba(255,255,255,.10)`,
                background: `linear-gradient(180deg,#161616,#111)`,
              },
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    width: `34px`,
                    height: `34px`,
                    borderRadius: `50%`,
                    flexShrink: 0,
                    display: `grid`,
                    placeItems: `center`,
                    background: e ? e.avatarFondo : `rgba(244,82,11,.14)`,
                    color: e ? e.avatarTinta : cs,
                    fontWeight: 800,
                  },
                  children: `S`,
                }),
                (0, JSXRuntime.jsxs)(`span`, {
                  style: {
                    flex: 1,
                    minWidth: 0,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        display: `block`,
                        fontSize: `14px`,
                        fontWeight: 800,
                        color: `#fff`,
                      },
                      children: `Soporte`,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        display: `block`,
                        fontSize: `11.5px`,
                        color: `#8a8a8a`,
                      },
                      children: e ? e.nombre : `Rushybet`,
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`button`, {
                  type: `button`,
                  onClick: () => n(!1),
                  "aria-label": `Cerrar`,
                  style: {
                    background: `transparent`,
                    border: 0,
                    color: `#8a8a8a`,
                    cursor: `pointer`,
                    fontSize: `15px`,
                    padding: `6px`,
                  },
                  children: `✕`,
                }),
              ],
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                flex: 1,
                overflowY: `auto`,
                padding: `14px`,
                display: `flex`,
                flexDirection: `column`,
                gap: `10px`,
              },
              children: [
                (0, JSXRuntime.jsx)(`p`, {
                  style: {
                    margin: 0,
                    padding: `11px 13px`,
                    borderRadius: `12px`,
                    fontSize: `12.5px`,
                    lineHeight: 1.5,
                    background: `rgba(255,255,255,.04)`,
                    color: `#c9c9c9`,
                    border: `1px solid rgba(255,255,255,.10)`,
                  },
                  children: `En breve el soporte te atiende. Contanos qué necesitás y te respondemos por acá.`,
                }),
                (0, JSXRuntime.jsx)(`p`, {
                  style: {
                    margin: 0,
                    padding: `10px 12px`,
                    borderRadius: `12px`,
                    fontSize: `11.5px`,
                    lineHeight: 1.5,
                    background: `rgba(52,209,123,.07)`,
                    border: `1px solid rgba(52,209,123,.28)`,
                    color: `#9fe0bd`,
                  },
                  children: e
                    ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                        children: [
                          `🔒 Tus mensajes viajan y se guardan cifrados. `,
                          e.nombre,
                          ` `,
                          (0, JSXRuntime.jsx)(`strong`, {
                            children: `nunca`,
                          }),
                          ` te va a pedir tu contraseña por este chat.`,
                        ],
                      })
                    : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                        children: [
                          `🔒 Tus mensajes viajan y se guardan cifrados. Rushybet `,
                          (0, JSXRuntime.jsx)(`strong`, {
                            children: `nunca`,
                          }),
                          ` te va a pedir tu contraseña por este chat.`,
                        ],
                      }),
                }),
                !v &&
                  (0, JSXRuntime.jsx)(`p`, {
                    style: {
                      margin: 0,
                      fontSize: `12.5px`,
                      color: `#f4a11b`,
                    },
                    children: `El chat no está disponible por ahora. Probá más tarde.`,
                  }),
                r.map((t) =>
                  (0, JSXRuntime.jsx)(
                    `div`,
                    {
                      style: {
                        display: `flex`,
                        justifyContent: t.mio ? `flex-end` : `flex-start`,
                      },
                      children: (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          maxWidth: `82%`,
                          padding: `9px 12px`,
                          borderRadius: t.mio
                            ? `14px 14px 4px 14px`
                            : `14px 14px 14px 4px`,
                          background: t.mio
                            ? e
                              ? e.burbujaFondo
                              : `linear-gradient(180deg,#ff6222,#e84a06)`
                            : `rgba(255,255,255,.06)`,
                          color: t.mio
                            ? e
                              ? e.burbujaTinta
                              : `#fff`
                            : `#e6e6e6`,
                          fontSize: `13px`,
                          lineHeight: 1.45,
                          overflowWrap: `anywhere`,
                          whiteSpace: `pre-wrap`,
                        },
                        children: [
                          t.adjunto &&
                            (0, JSXRuntime.jsx)(`img`, {
                              src: `/api/soporte/adjunto/` + t.id + `?mini=1`,
                              alt: `Foto adjunta`,
                              onClick: () => m(t.id),
                              style: {
                                display: `block`,
                                maxWidth: `100%`,
                                borderRadius: `9px`,
                                marginBottom: t.texto ? `7px` : 0,
                                cursor: `zoom-in`,
                              },
                            }),
                          t.texto,
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              display: `block`,
                              marginTop: `4px`,
                              fontSize: `10px`,
                              textAlign: `right`,
                              color: t.mio
                                ? e
                                  ? e.burbujaHora
                                  : `rgba(255,255,255,.75)`
                                : `#7d7d7d`,
                            },
                            children: ls(t.cuando),
                          }),
                        ],
                      }),
                    },
                    t.id,
                  ),
                ),
                (0, JSXRuntime.jsx)(`div`, {
                  ref: b,
                }),
              ],
            }),
            l &&
              (0, JSXRuntime.jsx)(`p`, {
                style: {
                  margin: 0,
                  padding: `0 14px 8px`,
                  fontSize: `12px`,
                  color: `#ff5470`,
                },
                children: l,
              }),
            d &&
              (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  gap: `8px`,
                  padding: `8px 14px`,
                  borderTop: `1px solid rgba(255,255,255,.10)`,
                  fontSize: `12px`,
                  color: `#c9c9c9`,
                },
                children: [
                  (0, JSXRuntime.jsxs)(`span`, {
                    style: {
                      flex: 1,
                      minWidth: 0,
                      overflow: `hidden`,
                      textOverflow: `ellipsis`,
                      whiteSpace: `nowrap`,
                    },
                    children: [`Foto: `, d.name],
                  }),
                  (0, JSXRuntime.jsx)(`button`, {
                    type: `button`,
                    onClick: () => {
                      (f(null), h.current && (h.current.value = ``));
                    },
                    "aria-label": `Sacar la foto`,
                    style: {
                      background: `transparent`,
                      border: 0,
                      color: `#8a8a8a`,
                      cursor: `pointer`,
                      fontSize: `13px`,
                    },
                    children: `✕`,
                  }),
                ],
              }),
            (0, JSXRuntime.jsxs)(`footer`, {
              style: {
                display: `flex`,
                gap: `8px`,
                padding: `12px 14px calc(12px + env(safe-area-inset-bottom))`,
                borderTop: `1px solid rgba(255,255,255,.10)`,
              },
              children: [
                (0, JSXRuntime.jsx)(`input`, {
                  ref: h,
                  type: `file`,
                  accept: `image/*`,
                  hidden: !0,
                  onChange: (e) => {
                    let t = e.target.files?.[0];
                    if (t) {
                      if (t.size > 8388608) {
                        (u(
                          `La foto pesa más de 8 MB. Mandá una más liviana o una captura de pantalla.`,
                        ),
                          (e.target.value = ``));
                        return;
                      }
                      (f(t), u(null));
                    }
                  },
                }),
                (0, JSXRuntime.jsx)(`button`, {
                  type: `button`,
                  onClick: () => h.current?.click(),
                  disabled: !v,
                  "aria-label": `Adjuntar una foto`,
                  style: {
                    flexShrink: 0,
                    width: `44px`,
                    height: `44px`,
                    borderRadius: `12px`,
                    border: `1px solid rgba(255,255,255,.10)`,
                    background: `rgba(255,255,255,.04)`,
                    color: d ? (e ? e.acentoClaro : cs) : `#8a8a8a`,
                    cursor: `pointer`,
                    display: `grid`,
                    placeItems: `center`,
                  },
                  children: (0, JSXRuntime.jsx)(`svg`, {
                    width: `19`,
                    height: `19`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `1.9`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    "aria-hidden": !0,
                    children: (0, JSXRuntime.jsx)(`path`, {
                      d: `M21 11.5 12.5 20a5 5 0 0 1-7-7l8-8a3.4 3.4 0 0 1 4.8 4.8l-8 8a1.8 1.8 0 0 1-2.5-2.5l7.4-7.4`,
                    }),
                  }),
                }),
                (0, JSXRuntime.jsx)(`textarea`, {
                  value: a,
                  onChange: (e) => o(e.target.value),
                  onKeyDown: (e) => {
                    e.key === `Enter` &&
                      !e.shiftKey &&
                      (e.preventDefault(), w());
                  },
                  placeholder: `Escribí tu mensaje…`,
                  rows: 1,
                  maxLength: 2e3,
                  disabled: !v,
                  style: {
                    flex: 1,
                    minWidth: 0,
                    resize: `none`,
                    maxHeight: `96px`,
                    padding: `11px 13px`,
                    borderRadius: `12px`,
                    border: `1px solid rgba(255,255,255,.10)`,
                    background: `rgba(255,255,255,.04)`,
                    color: `#fff`,
                    fontSize: `16px`,
                    fontFamily: `inherit`,
                    lineHeight: 1.4,
                    outline: `none`,
                  },
                }),
                (0, JSXRuntime.jsx)(`button`, {
                  type: `button`,
                  onClick: () => void w(),
                  disabled: s || (!a.trim() && !d) || !v,
                  "aria-label": `Enviar`,
                  style: {
                    flexShrink: 0,
                    width: `44px`,
                    height: `44px`,
                    borderRadius: `12px`,
                    border: `none`,
                    background:
                      (a.trim() || d) && v
                        ? e
                          ? e.burbujaFondo
                          : `linear-gradient(180deg,#ff6222,#e84a06)`
                        : `rgba(255,255,255,.06)`,
                    color:
                      (a.trim() || d) && v
                        ? e
                          ? e.burbujaTinta
                          : `#fff`
                        : `#6f6f6f`,
                    cursor: (a.trim() || d) && v ? `pointer` : `default`,
                    display: `grid`,
                    placeItems: `center`,
                  },
                  children: (0, JSXRuntime.jsx)(`svg`, {
                    width: `19`,
                    height: `19`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `1.9`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    "aria-hidden": !0,
                    children: (0, JSXRuntime.jsx)(`path`, {
                      d: `M4 12h15M13 5l7 7-7 7`,
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      p &&
        (0, JSXRuntime.jsx)(`div`, {
          onClick: () => m(null),
          role: `presentation`,
          style: {
            position: `fixed`,
            inset: 0,
            zIndex: 130,
            background: `rgba(5,5,5,.9)`,
            display: `grid`,
            placeItems: `center`,
            padding: `20px`,
          },
          children: (0, JSXRuntime.jsx)(`img`, {
            src: `/api/soporte/adjunto/` + p,
            alt: `Foto adjunta`,
            style: {
              maxWidth: `100%`,
              maxHeight: `100%`,
              objectFit: `contain`,
              borderRadius: `10px`,
            },
          }),
        }),
    ],
  });
}
function initializeLegacySupportChat() {
  cs = `#ff8a55`;
  ls = (e) =>
    new Date(e).toLocaleTimeString(`es-AR`, {
      hour: `2-digit`,
      minute: `2-digit`,
    });
}
export { LegacySupportChat, initializeLegacySupportChat };
