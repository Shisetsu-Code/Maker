/**
 * blaze / help-center.
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
function renderHelpCenterLayout(e) {
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
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            background: `var(--bb-surface,#EFEFF1)`,
            borderRadius: `8px`,
            padding: `24px`,
            display: `flex`,
            flexDirection: `column`,
            gap: `14px`,
          },
          children: [
            `
    `,
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                fontWeight: `800`,
                fontSize: `22px`,
              },
              children: `¿En qué te podemos ayudar?`,
            }),
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                display: `flex`,
                alignItems: `center`,
                gap: `10px`,
                height: `46px`,
                padding: `0 14px`,
                background: `var(--bb-bg,#F7F7F8)`,
                border: `1px solid var(--bb-border,#D8D8DC)`,
                borderRadius: `6px`,
              },
              children: [
                `
      `,
                (0, JSXRuntime.jsxs)(`svg`, {
                  style: {
                    stroke: `var(--bb-text-4,#8A8B92)`,
                  },
                  width: `16`,
                  height: `16`,
                  viewBox: `0 0 24 24`,
                  fill: `none`,
                  strokeWidth: `2`,
                  children: [
                    (0, JSXRuntime.jsx)(`circle`, {
                      cx: `11`,
                      cy: `11`,
                      r: `7`,
                    }),
                    (0, JSXRuntime.jsx)(`path`, {
                      d: `M20 20l-4-4`,
                    }),
                  ],
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
                    fontSize: `14px`,
                  },
                  value: N(e.q),
                  onChange: e.onQ,
                  placeholder: `Buscá: retiro, bono, verificación…`,
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
                flexWrap: `wrap`,
                fontSize: `13px`,
                fontWeight: `600`,
                color: `var(--bb-text-3,#6B6C73)`,
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
                    (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        width: `7px`,
                        height: `7px`,
                        borderRadius: `50%`,
                        background: `var(--bb-acento,#0A0A0B)`,
                      },
                    }),
                    `Soporte en vivo 24/7 · respuesta media 1 min`,
                  ],
                }),
                `
      `,
                (0, JSXRuntime.jsx)(`button`, {
                  style: {
                    height: `38px`,
                    padding: `0 16px`,
                    borderRadius: `6px`,
                    border: `none`,
                    background: `var(--bb-acento,#0A0A0B)`,
                    color: `var(--bb-sobre,#FFFFFF)`,
                    fontFamily: `'Manrope',sans-serif`,
                    fontWeight: `800`,
                    fontSize: `13px`,
                    cursor: `pointer`,
                    marginLeft: `auto`,
                  },
                  onClick: e.openChat,
                  children: `Chatear con soporte`,
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
            gridTemplateColumns: `repeat(auto-fill,minmax(180px,1fr))`,
            gap: `10px`,
          },
          children: [
            `
    `,
            asArray(e.cats).map((e, t) =>
              (0, JSXRuntime.jsxs)(
                React.Fragment,
                {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `bba-0`,
                      style: resolveStyle(
                        `background:var(--bb-surface,#EFEFF1);border:1px solid ${e?.border ?? ``};border-radius:8px;padding:14px;display:flex;flex-direction:column;gap:4px;cursor:pointer;`,
                      ),
                      onClick: e?.select,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            fontWeight: `800`,
                            fontSize: `14px`,
                          },
                          children: renderContent(e?.label),
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`span`, {
                          style: {
                            fontSize: `12px`,
                            fontWeight: `600`,
                            color: `var(--bb-text-3,#6B6C73)`,
                          },
                          children: [renderContent(e?.count), ` artículos`],
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
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                fontWeight: `800`,
                fontSize: `16px`,
                marginBottom: `4px`,
              },
              children: renderContent(e.listTitle),
            }),
            `
    `,
            asArray(e.articles).map((e, t) =>
              (0, JSXRuntime.jsxs)(
                React.Fragment,
                {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        background: `var(--bb-surface,#EFEFF1)`,
                        borderRadius: `6px`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            justifyContent: `space-between`,
                            alignItems: `center`,
                            gap: `12px`,
                            padding: `14px 16px`,
                            cursor: `pointer`,
                            fontWeight: `700`,
                            fontSize: `14px`,
                          },
                          onClick: e?.toggle,
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              children: renderContent(e?.q),
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                color: `var(--bb-text-3,#6B6C73)`,
                                fontSize: `18px`,
                              },
                              children: renderContent(e?.icon),
                            }),
                          ],
                        }),
                        `
        `,
                        e?.open
                          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                              children: (0, JSXRuntime.jsx)(`div`, {
                                style: {
                                  padding: `0 16px 14px`,
                                  fontSize: `13px`,
                                  lineHeight: `1.55`,
                                  color: `var(--bb-text-2,#3A3B40)`,
                                },
                                children: renderContent(e?.a),
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
                },
                t,
              ),
            ),
            `
    `,
            e.noArticles
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        padding: `28px`,
                        textAlign: `center`,
                        background: `var(--bb-surface,#EFEFF1)`,
                        borderRadius: `8px`,
                        color: `var(--bb-text-3,#6B6C73)`,
                        fontWeight: `600`,
                        fontSize: `13px`,
                      },
                      children: `No encontramos artículos. Escribinos por el chat y te ayudamos.`,
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
        e.chatOpen
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `position:fixed;right:${e.chatRight ?? ``};bottom:${e.chatBottom ?? ``};z-index:45;width:${e.chatW ?? ``};height:480px;max-height:calc(100vh - 120px);background:var(--bb-surface,#EFEFF1);border:1px solid var(--bb-border,#D8D8DC);border-radius:8px;display:flex;flex-direction:column;overflow:hidden;`,
                  ),
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `space-between`,
                        gap: `10px`,
                        padding: `12px 14px`,
                        background: `var(--bb-bg,#F7F7F8)`,
                        borderBottom: `1px solid var(--bb-border,#D8D8DC)`,
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
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                width: `32px`,
                                height: `32px`,
                                borderRadius: `6px`,
                                background: `var(--bb-acento,#0A0A0B)`,
                                color: `var(--bb-sobre,#FFFFFF)`,
                                display: `grid`,
                                placeItems: `center`,
                                fontWeight: `800`,
                              },
                              children: `L`,
                            }),
                            `
          `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `1px`,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontWeight: `800`,
                                    fontSize: `13px`,
                                  },
                                  children: `Laura · Soporte`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  style: {
                                    fontSize: `11px`,
                                    fontWeight: `600`,
                                    color: `var(--bb-text-3,#6B6C73)`,
                                  },
                                  children: `En línea`,
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
                            width: `30px`,
                            height: `30px`,
                            borderRadius: `6px`,
                            background: `transparent`,
                            border: `none`,
                            color: `var(--bb-text-3,#6B6C73)`,
                            fontSize: `18px`,
                            cursor: `pointer`,
                          },
                          onClick: e.closeChat,
                          children: `×`,
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
                        flex: `1`,
                        overflowY: `auto`,
                        padding: `14px`,
                        display: `flex`,
                        flexDirection: `column`,
                        gap: `8px`,
                      },
                      ref: e.listRef,
                      children: [
                        `
        `,
                        asArray(e.messages).map((e, t) =>
                          (0, JSXRuntime.jsxs)(
                            React.Fragment,
                            {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: resolveStyle(
                                    `align-self:${e?.align ?? ``};max-width:82%;padding:9px 12px;border-radius:8px;background:${e?.bg ?? ``};color:${e?.fg ?? ``};font-size:13px;font-weight:600;line-height:1.45;`,
                                  ),
                                  children: renderContent(e?.text),
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
                        e.typing
                          ? (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                              children: (0, JSXRuntime.jsx)(`div`, {
                                style: {
                                  alignSelf: `flex-start`,
                                  padding: `9px 12px`,
                                  borderRadius: `8px`,
                                  background: `var(--bb-surface-2,#E5E5E8)`,
                                  color: `var(--bb-text-3,#6B6C73)`,
                                  fontSize: `12px`,
                                  fontWeight: `700`,
                                },
                                children: `Laura está escribiendo…`,
                              }),
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
                        gap: `6px`,
                        padding: `10px`,
                        borderTop: `1px solid var(--bb-border,#D8D8DC)`,
                      },
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`input`, {
                          style: {
                            flex: `1`,
                            minWidth: `0`,
                            height: `40px`,
                            background: `var(--bb-bg,#F7F7F8)`,
                            border: `1px solid var(--bb-border,#D8D8DC)`,
                            borderRadius: `6px`,
                            padding: `0 12px`,
                            color: `var(--bb-text,#0A0A0B)`,
                            fontFamily: `'Manrope',sans-serif`,
                            fontSize: `13px`,
                            outline: `none`,
                          },
                          value: N(e.draft),
                          onChange: e.onDraft,
                          onKeyDown: e.onKey,
                          placeholder: `Escribí tu mensaje`,
                        }),
                        `
        `,
                        (0, JSXRuntime.jsx)(`button`, {
                          style: {
                            height: `40px`,
                            padding: `0 14px`,
                            borderRadius: `6px`,
                            border: `none`,
                            background: `var(--bb-acento,#0A0A0B)`,
                            color: `var(--bb-sobre,#FFFFFF)`,
                            fontFamily: `'Manrope',sans-serif`,
                            fontWeight: `800`,
                            fontSize: `12px`,
                            cursor: `pointer`,
                          },
                          onClick: e.send,
                          children: `Enviar`,
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
      ],
    }),
  });
}
let kt, At, jt;
var HelpCenterController;
function initializeHelpCenter() {
  kt = [
    [`account`, `Cuenta`],
    [`deposits`, `Depósitos`],
    [`withdrawals`, `Retiradas`],
    [`bonus`, `Bonos`],
    [`kyc`, `Verificación`],
    [`rg`, `Juego responsable`],
  ];
  At = [
    [
      `account`,
      `¿Cómo cambio mi email?`,
      `Andá a Ajustes › Perfil, editá el email y confirmá el enlace que te vamos a mandar.`,
    ],
    [
      `account`,
      `Olvidé mi contraseña`,
      `En la ventana de inicio de sesión tocá «¿La olvidaste?» y seguí los pasos del email.`,
    ],
    [
      `deposits`,
      `¿Cuánto tarda un depósito?`,
      `Tarjeta y cripto son instantáneos. Las transferencias tardan 1–2 días hábiles.`,
    ],
    [
      `deposits`,
      `Mi depósito no aparece`,
      `Esperá 10 minutos y revisá tu historial en la Billetera. Si sigue sin aparecer, escribinos por el chat o por WhatsApp con el comprobante.`,
    ],
    [
      `withdrawals`,
      `¿Cuánto tarda una retirada?`,
      `Procesamos las retiradas en menos de 24 h. Después depende del método elegido.`,
    ],
    [
      `withdrawals`,
      `¿Por qué no puedo retirar?`,
      `No tenés que tener requisitos de apuesta pendientes de un bono activo.`,
    ],
    [
      `bonus`,
      `¿Qué es el requisito de apuesta?`,
      `Es el monto que tenés que apostar antes de poder retirar el saldo de bono. Lo ves en Billetera › Saldo de bono.`,
    ],
    [
      `kyc`,
      `¿Qué documentos aceptáis?`,
      `DNI, NIE, pasaporte o carné de conducir vigente, más un selfie con el documento.`,
    ],
    [
      `kyc`,
      `Mi verificación fue rechazada`,
      `Suele ser por una foto borrosa o recortada. Volvé a subirla con buena luz y las cuatro esquinas visibles.`,
    ],
    [
      `rg`,
      `¿Cómo pongo un límite de depósito?`,
      `En Ajustes › Juego responsable. Las reducciones se aplican al instante.`,
    ],
    [
      `rg`,
      `Quiero autoexcluirme`,
      `En Ajustes › Juego responsable › Tomar un descanso. También podés pedirlo por el chat.`,
    ],
  ];
  jt = [
    `Gracias, lo reviso ahora mismo.`,
    `Veo tu cuenta. ¿Me confirmás el monto y la hora aproximada?`,
    `Perfecto, ya lo he escalado al equipo de pagos. Te escribimos por email en menos de 1 hora.`,
  ];
  HelpCenterController = class extends React.Component {
    state = {
      q: ``,
      cat: null,
      open: -1,
      chatOpen: !1,
      typing: !1,
      draft: ``,
      messages: [
        {
          me: !1,
          text: `Hola, soy Laura. ¿En qué te puedo ayudar?`,
        },
      ],
      vw: Ae(),
    };
    listRef = React.createRef();
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
    componentDidUpdate() {
      let e = this.listRef.current;
      e && (e.scrollTop = e.scrollHeight);
    }
    send = () => {
      let e = this.state.draft.trim();
      if (!e) return;
      let t = this.state.messages.filter((e) => e.me).length;
      (this.setState((t) => ({
        draft: ``,
        typing: !0,
        messages: [
          ...t.messages,
          {
            me: !0,
            text: e,
          },
        ],
      })),
        clearTimeout(this.t),
        (this.t = setTimeout(
          () =>
            this.setState((e) => ({
              typing: !1,
              messages: [
                ...e.messages,
                {
                  me: !1,
                  text: jt[Math.min(t, jt.length - 1)],
                },
              ],
            })),
          1300,
        )));
    };
    renderVals() {
      let e = this.state,
        t = e.q.trim().toLowerCase(),
        n = At.filter(
          ([n, r, i]) =>
            (!e.cat || n === e.cat) &&
            (!t || r.toLowerCase().includes(t) || i.toLowerCase().includes(t)),
        ),
        r = e.vw < 960;
      return {
        q: e.q,
        onQ: (e) =>
          this.setState({
            q: e.target.value,
            open: -1,
          }),
        cats: kt.map(([t, n]) => ({
          label: n,
          count: At.filter((e) => e[0] === t).length,
          border:
            e.cat === t
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-surface-2,#E5E5E8)`,
          select: () =>
            this.setState({
              cat: e.cat === t ? null : t,
              open: -1,
            }),
        })),
        listTitle: e.cat
          ? kt.find((t) => t[0] === e.cat)[1]
          : t
            ? `Resultados`
            : `Preguntas frecuentes`,
        articles: n.map(([, t, n], r) => ({
          q: t,
          a: n,
          open: e.open === r,
          icon: e.open === r ? `−` : `+`,
          toggle: () =>
            this.setState({
              open: e.open === r ? -1 : r,
            }),
        })),
        noArticles: n.length === 0,
        chatOpen: e.chatOpen,
        openChat: () =>
          this.setState({
            chatOpen: !0,
          }),
        closeChat: () =>
          this.setState({
            chatOpen: !1,
          }),
        chatRight: r ? `8px` : `24px`,
        chatBottom: r ? `72px` : `24px`,
        chatW: r ? `calc(100vw - 16px)` : `360px`,
        listRef: this.listRef,
        typing: e.typing,
        messages: e.messages.map((e) => ({
          text: e.text,
          align: e.me ? `flex-end` : `flex-start`,
          bg: e.me ? `var(--bb-acento,#0A0A0B)` : `var(--bb-surface-2,#E5E5E8)`,
          fg: e.me ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text,#0A0A0B)`,
        })),
        draft: e.draft,
        onDraft: (e) =>
          this.setState({
            draft: e.target.value,
          }),
        onKey: (e) => {
          e.key === `Enter` && this.send();
        },
        send: this.send,
      };
    }
    render() {
      return renderHelpCenterLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { HelpCenterController, initializeHelpCenter };
