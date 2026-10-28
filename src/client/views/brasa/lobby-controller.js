/**
 * brasa / lobby-controller.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import { renderBrasaLobbyLayout } from "./lobby-layout.js";
import {
  Ie,
  P,
  F,
  I,
  Be,
  L,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
} from "./game-catalog.js";
var BrasaLobbyController;
function initializeLobbyController() {
  BrasaLobbyController = class extends React.Component {
    rootRef = React.createRef();
    cmdRef = React.createRef();
    cmdPanelRef = React.createRef();
    vaultRef = React.createRef();
    fileRef = React.createRef();
    lRef = React.createRef();
    frameRef = React.createRef();
    chatRef = React.createRef();
    state = {
      w: 1400,
      scrolled: !1,
      sec: `inicio`,
      rot: 0,
      paused: !1,
      bal: (this.props.saldo ?? `Con saldo`) === `Con saldo` ? 12500 : 0,
      bonus: 5e3,
      favs: Ie({
        vs20olympgate: !0,
        crazytime: !0,
      }),
      type: 0,
      vendor: `Todos`,
      sort: 0,
      sortOpen: !1,
      page: null,
      slotQ: ``,
      favOnly: !1,
      lFull: !1,
      view: `grid`,
      hov: null,
      fsLeft: 18 * 3600 - 1234,
      fsUsed: 0,
      req: {
        id: `D-1042`,
        amt: 1e4,
        stage: 3,
        t: [`11:20`, `11:24`, `11:31`],
      },
      reqN: 1043,
      unread: 2,
      cmdOpen: !1,
      cmdQ: ``,
      cmdIdx: 0,
      umOpen: !1,
      sheet: null,
      hF: 0,
      opStars: 0,
      opHov: 0,
      opTags: {},
      opTxt: ``,
      opSent: !1,
      ccTxt: ``,
      ccWhy: null,
      outMode: null,
      chatOpen: !1,
      chatPh: `in`,
      chatTeaser: !1,
      chatTyping: !1,
      chatQ: ``,
      chatUnread: 1,
      chatMsgs: [
        {
          id: `w0`,
          me: !1,
          t: `Hola Martina, soy Caro del equipo RushyBet. ¿En qué te ayudo hoy?`,
          at: $e(),
        },
      ],
      bets: [],
      big: [],
      myBets: [],
      mTab: `home`,
      sportsOpen: !1,
      bFx: 0,
      bTab: 0,
      flash: !1,
      rShift: 0,
      mFile: null,
      mDrag: !1,
      copied: !1,
      mOpen: null,
      mStep: `form`,
      mAmt: ``,
      mNote: ``,
      mAcc: ``,
      mName: ``,
      mErr: ``,
      bPaused: !1,
      kBet: 18420500,
      kPay: 17093200,
      kCount: 6214,
      diceOpen: !1,
      dPhase: `roll`,
      dRX: 0,
      dRY: 0,
      dGame: null,
      dN: 1,
      vRot: 0,
      vW: 600,
      dBal: null,
      dBonus: null,
      hist: [8e3, 9500, 11e3, 10250, 11750, 12750, 11750, 12500],
      lOpen: !1,
      lCode: null,
      lDemo: !1,
      lPhase: 0,
      lPct: `0%`,
      lRound: ``,
      toast: ``,
    };
    _bonusFx() {
      let e = this.state,
        t = e.bal <= 0 && e.bonus > 0 && (e.dBal == null || e.dBal < 1);
      if (this._flipPrev === void 0) {
        this._flipPrev = t;
        return;
      }
      t !== this._flipPrev &&
        ((this._flipPrev = t),
        clearTimeout(this.bfT),
        t
          ? (this.setState({
              bFx: 1,
            }),
            (this.bfT = setTimeout(
              () =>
                this.setState({
                  bFx: 2,
                }),
              2200,
            )))
          : (this.setState({
              bFx: 3,
            }),
            (this.bfT = setTimeout(
              () =>
                this.setState({
                  bFx: 0,
                }),
              2200,
            ))));
    }
    componentDidMount() {
      ((this._fsH = () => {
        !document.fullscreenElement &&
          this.state.lFull &&
          this.setState({
            lFull: !1,
          });
      }),
        document.addEventListener(`fullscreenchange`, this._fsH),
        (this.teaseT = setTimeout(() => {
          this.state.chatOpen ||
            this.setState({
              chatTeaser: !0,
            });
        }, 3500)),
        this.applyFont(),
        (this._tb = this.state.bal),
        (this._tbo = this.state.bonus),
        this.setState({
          dBal: this.state.bal,
          dBonus: this.state.bonus,
        }));
      let e = this.vaultRef.current;
      e &&
        window.ResizeObserver &&
        ((this.vro = new ResizeObserver((e) => {
          let t = Math.round(e[0].contentRect.width);
          Math.abs(t - this.state.vW) > 2 &&
            this.setState({
              vW: t,
            });
        })),
        this.vro.observe(e));
      let t = this.rootRef.current;
      (t &&
        window.ResizeObserver &&
        ((this.ro = new ResizeObserver((e) => {
          let t = Math.round(e[0].contentRect.width);
          Math.abs(t - this.state.w) > 2 &&
            this.setState({
              w: t,
            });
        })),
        this.ro.observe(t)),
        window.addEventListener(`scroll`, this.onScroll, {
          passive: !0,
        }),
        window.addEventListener(`keydown`, this.onKey),
        (this.auto = setInterval(() => {
          let e = this.state;
          this.props.autoRotate !== !1 &&
            !e.paused &&
            !e.lOpen &&
            !e.cmdOpen &&
            this.setState({
              rot: e.rot + 1,
            });
        }, 4500)));
      let n = [];
      for (let e = 0; e < 10; e++) n.push(this.mkBet(e * 7));
      let r = [];
      for (let e = 0; e < 10; e++) r.push(this.mkBet(e * 23, !0));
      (this.setState({
        bets: n,
        big: r,
      }),
        (this.betT = setInterval(() => {
          if (document.hidden || this.state.bPaused) return;
          let e = this.mkBet(0);
          (this.setState((t) => ({
            bets: [e, ...t.bets].slice(0, 10),
            big: e.pay >= 25e3 ? [e, ...t.big].slice(0, 10) : t.big,
            flash: !0,
            kBet: t.kBet + e.bet,
            kPay: t.kPay + e.pay,
            kCount: t.kCount + 1,
          })),
            clearTimeout(this.flT),
            (this.flT = setTimeout(
              () =>
                this.setState({
                  flash: !1,
                }),
              120,
            )));
        }, 2400)));
    }
    componentWillUnmount() {
      (this.ro && this.ro.disconnect(),
        this.vro && this.vro.disconnect(),
        cancelAnimationFrame(this._radBal),
        cancelAnimationFrame(this._radBonus),
        window.removeEventListener(`scroll`, this.onScroll),
        window.removeEventListener(`keydown`, this.onKey),
        clearInterval(this.auto),
        clearInterval(this.betT),
        clearInterval(this.tick),
        clearTimeout(this.tT),
        (this.timers || []).forEach(clearTimeout));
    }
    applyFont() {
      let e = qe[this.props.fuente] || qe[`Big Shoulders + Figtree`];
      if (this._font === e) return;
      this._font = e;
      let t = document.documentElement.style;
      (t.setProperty(`--fd`, e[0]), t.setProperty(`--fb`, e[1]));
    }
    tween(e, t) {
      cancelAnimationFrame(this[`_ra` + e]);
      let n = this.state[e] == null ? t : this.state[e],
        r = performance.now(),
        i = (a) => {
          let o = Math.min(1, (a - r) / 750),
            s = 1 - (1 - o) ** 3;
          (this.setState({
            [e]: n + (t - n) * s,
          }),
            o < 1 && (this[`_ra` + e] = requestAnimationFrame(i)));
        };
      this[`_ra` + e] = requestAnimationFrame(i);
    }
    mkBet(e, t) {
      let n = Ge.filter((e) => !e.maint),
        r = n[Math.floor(Math.random() * n.length)],
        i = [
          `lu***a`,
          `dani_r`,
          `ma***o`,
          `sofi.k`,
          `jo***e`,
          `rocket7`,
          `an***s`,
          `kiko`,
          `ve***a`,
          `fede_m`,
          `Oculto`,
          `Oculto`,
          `ga***l`,
          `tincho`,
          `pa***a`,
        ],
        a = [200, 500, 1e3, 1500, 2500, 5e3, 1e4, 2e4][
          Math.floor(Math.random() * (t ? 8 : 6)) + 0
        ],
        o;
      if (t)
        o = [12, 18.5, 25, 40, 64.2, 105, 150, 250][
          Math.floor(Math.random() * 8)
        ];
      else {
        let e = Math.random();
        o =
          e < 0.52
            ? 0
            : e < 0.8
              ? +(1 + Math.random() * 1.5).toFixed(2)
              : e < 0.95
                ? +(2.5 + Math.random() * 8).toFixed(2)
                : +(10 + Math.random() * 90).toFixed(2);
      }
      let s = new Date(Date.now() - e * 6e4),
        c = (e) => (`0` + e).slice(-2);
      return {
        id: Math.random().toString(36).slice(2, 9),
        g: r.gameCode,
        u: i[Math.floor(Math.random() * i.length)],
        t: c(s.getHours()) + `:` + c(s.getMinutes()),
        bet: a,
        mult: o,
        pay: Math.round(a * o),
      };
    }
    umAct = (e) => {
      (this.setState({
        umOpen: !1,
      }),
        e === `hist`
          ? this.setState({
              sheet: `hist`,
              hF: 0,
            })
          : e === `op`
            ? this.setState({
                sheet: `op`,
                opStars: 0,
                opHov: 0,
                opTags: {},
                opTxt: ``,
                opSent: !1,
              })
            : e === `close`
              ? this.setState({
                  sheet: `close`,
                  ccTxt: ``,
                  ccWhy: null,
                })
              : e === `out` &&
                this.setState({
                  outMode: `out`,
                  chatOpen: !1,
                }));
    };
    openChat = () => {
      (clearTimeout(this.chCl),
        this.setState({
          chatOpen: !0,
          chatPh: `in`,
          chatTeaser: !1,
          chatUnread: 0,
          umOpen: !1,
        }),
        this.chatScroll());
    };
    closeChat = () => {
      !this.state.chatOpen ||
        this.state.chatPh === `out` ||
        (this.setState({
          chatPh: `out`,
        }),
        clearTimeout(this.chCl),
        (this.chCl = setTimeout(
          () =>
            this.setState({
              chatOpen: !1,
            }),
          420,
        )));
    };
    chatScroll = () =>
      setTimeout(() => {
        let e = this.chatRef.current;
        e &&
          e.scrollTo({
            top: e.scrollHeight,
            behavior: `smooth`,
          });
      }, 40);
    botReply(e) {
      let t = e.toLowerCase();
      return /depos|cargar|carga/.test(t)
        ? {
            t: `¡Dale! Te abro el pedido de depósito: transferís al alias del cajero, subís el comprobante y listo. Si tarda, escribinos por WhatsApp.`,
            act: `dep`,
          }
        : /retir|sacar|cobrar/.test(t)
          ? {
              t:
                `Para retirar cargás el monto y tu CBU o alias. El cajero lo aprueba y te transfiere. Tu última solicitud fue ` +
                this.state.req.id +
                `.`,
              act: `ret`,
            }
          : /bono/.test(t)
            ? {
                t: `Tu bono se activa solo cuando tu saldo real llega a $ 0. Ahí podés seguir jugando con el bono sin hacer nada.`,
                act: null,
              }
            : /whats|humano|persona|operador|cajero/.test(t)
              ? {
                  t: `Te paso con un operador por WhatsApp Web, ya va con tu usuario cargado.`,
                  act: `wa`,
                }
              : /histor|movim|estado|solicitud/.test(t)
                ? {
                    t: `Acá tenés todos tus depósitos, retiros y el bono, con su estado.`,
                    act: `hist`,
                  }
                : {
                    t: `Entendido. Lo reviso y te respondo en un toque. Si es urgente, seguimos por WhatsApp.`,
                    act: `wa`,
                  };
    }
    chatSend = (e) => {
      let t = String(e ?? this.state.chatQ).trim();
      if (!t) return;
      (this.setState((e) => ({
        chatMsgs: [
          ...e.chatMsgs,
          {
            id: Math.random().toString(36).slice(2),
            me: !0,
            t,
            at: $e(),
          },
        ],
        chatQ: ``,
        chatTyping: !0,
      })),
        this.chatScroll());
      let n = this.botReply(t);
      (clearTimeout(this.chT),
        (this.chT = setTimeout(
          () => {
            (this.setState((e) => ({
              chatTyping: !1,
              chatMsgs: [
                ...e.chatMsgs,
                {
                  id: Math.random().toString(36).slice(2),
                  me: !1,
                  t: n.t,
                  at: $e(),
                  act: n.act,
                },
              ],
              chatUnread: e.chatOpen ? 0 : e.chatUnread + 1,
            })),
              this.chatScroll());
          },
          900 + Math.min(1500, n.t.length * 12),
        )));
    };
    openSports = () => {
      this.setState({
        sportsOpen: !0,
        cmdOpen: !1,
      });
    };
    surprise = () => {
      if (this.state.diceOpen) return;
      let e = Ge.filter((e) => !e.maint),
        t = e[Math.floor(Math.random() * e.length)],
        n = 1 + Math.floor(Math.random() * 6),
        r = {
          1: [0, 0],
          2: [0, -90],
          3: [0, -180],
          4: [0, 90],
          5: [-90, 0],
          6: [90, 0],
        };
      ((this._spin = (this._spin || 0) + 1080),
        this.setState({
          cmdOpen: !1,
          diceOpen: !0,
          dPhase: `roll`,
          dGame: t.gameCode,
          dN: n,
        }),
        this.later(
          () =>
            this.setState({
              dRX: this._spin + r[n][0] + 0,
              dRY: this._spin + r[n][1],
            }),
          40,
        ),
        this.later(
          () =>
            this.setState({
              dPhase: `reveal`,
            }),
          1350,
        ),
        this.later(() => {
          (this.setState({
            diceOpen: !1,
          }),
            this.launch(t.gameCode, !1));
        }, 2500));
    };
    orbitEl() {
      if (this._orbit) return this._orbit;
      let e = React.createElement,
        t = [...Ge.filter((e) => e.img), ...Ge.filter((e) => !e.img)].slice(
          0,
          12,
        ),
        n = t.length;
      return (
        (this._orbit = e(
          `div`,
          {
            style: {
              position: `absolute`,
              left: `50%`,
              top: `calc(11vh + 210px)`,
              width: 0,
              height: 0,
              perspective: 1100,
              pointerEvents: `none`,
              animation: `rbOrbitIn 1.1s .1s cubic-bezier(.16,1,.3,1) both`,
            },
          },
          e(
            `div`,
            {
              style: {
                position: `absolute`,
                transformStyle: `preserve-3d`,
                animation: `rbOrbit 46s linear infinite`,
              },
            },
            t.map((t, r) =>
              e(
                `div`,
                {
                  key: t.gameCode,
                  style: {
                    position: `absolute`,
                    left: -48,
                    top: -64,
                    width: 96,
                    height: 128,
                    borderRadius: 16,
                    overflow: `hidden`,
                    background: t.bg,
                    color: t.fg,
                    transform:
                      `rotateY(` + (r * 360) / n + `deg) translateZ(560px)`,
                    opacity: 0.55,
                    backfaceVisibility: `hidden`,
                    WebkitBackfaceVisibility: `hidden`,
                    boxShadow: `0 20px 40px -10px rgba(0,0,0,.8)`,
                    border: `1px solid rgba(255,255,255,.12)`,
                    display: `flex`,
                    alignItems: `flex-end`,
                    padding: 10,
                    boxSizing: `border-box`,
                    font: `700 34px/0.85 var(--fd,Oswald),sans-serif`,
                  },
                },
                t.img
                  ? e(`div`, {
                      style: {
                        position: `absolute`,
                        inset: 0,
                        backgroundImage: `url("` + t.img + `")`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                      },
                    })
                  : t.art,
              ),
            ),
          ),
        )),
        this._orbit
      );
    }
    vGo = (e) => {
      let t = e - (((this.state.vRot % 3) + 3) % 3);
      (t > 1 && (t -= 3),
        t < -1 && (t += 3),
        t &&
          this.setState((e) => ({
            vRot: e.vRot + t,
          })));
    };
    vTilt = (e) => {
      let t = e.currentTarget.querySelector(`[data-vtilt]`);
      if (!t) return;
      let n = e.currentTarget.getBoundingClientRect(),
        r = (e.clientX - n.left) / n.width,
        i = (e.clientY - n.top) / n.height;
      (t.style.setProperty(`--vy`, ((r - 0.5) * 10).toFixed(2) + `deg`),
        t.style.setProperty(`--vx`, ((0.5 - i) * 8).toFixed(2) + `deg`),
        t.style.setProperty(`--gx`, (r * 100).toFixed(1) + `%`),
        t.style.setProperty(`--gy`, (i * 100).toFixed(1) + `%`),
        t.style.setProperty(`--vg`, `1`));
    };
    vUntilt = (e) => {
      let t = e.currentTarget.querySelector(`[data-vtilt]`);
      t &&
        (t.style.setProperty(`--vx`, `0deg`),
        t.style.setProperty(`--vy`, `0deg`),
        t.style.setProperty(`--vg`, `0`));
    };
    componentDidUpdate(e, t) {
      (this._bonusFx(t), this.applyFont());
      let n = this.state;
      if (n.cmdOpen && n.cmdPhase === `measure` && this.cmdPanelRef.current) {
        let e = this.cmdPanelRef.current.offsetHeight;
        (this.setState({
          cmdPhase: `in`,
          eh: e,
        }),
          requestAnimationFrame(
            () =>
              this.cmdRef.current &&
              this.cmdRef.current.focus({
                preventScroll: !0,
              }),
          ),
          (this.cmdT = setTimeout(
            () =>
              this.state.cmdPhase === `in` &&
              this.setState({
                cmdPhase: `open`,
              }),
            760,
          )));
      }
      if (n.bal !== this._tb) {
        let e = this._tb;
        ((this._tb = n.bal),
          this.tween(`dBal`, n.bal),
          this.setState((e) => ({
            hist: [...e.hist, n.bal].slice(-24),
          })),
          e > 0 && n.bal === 0 && n.bonus > 0 && this.vGo(1));
      }
      (n.bonus !== this._tbo &&
        ((this._tbo = n.bonus), this.tween(`dBonus`, n.bonus)),
        this.state.cmdOpen &&
          !this._cmdWas &&
          this.cmdRef.current &&
          this.cmdRef.current.focus(),
        (this._cmdWas = this.state.cmdOpen));
    }
    later(e, t) {
      (this.timers = this.timers || []).push(setTimeout(e, t));
    }
    toast(e) {
      (this.setState({
        toast: e,
      }),
        clearTimeout(this.tT),
        (this.tT = setTimeout(
          () =>
            this.setState({
              toast: ``,
            }),
          2800,
        )));
    }
    onScroll = () => {
      this._raf ||= requestAnimationFrame(() => {
        this._raf = null;
        let e = window.scrollY > 24,
          t = Math.round(Math.max(-40, window.scrollY * -0.02));
        t !== this.state.rShift &&
          this.setState({
            rShift: t,
          });
        let n = `inicio`;
        ([`inicio`, `catalogo`, `envivo`, `proveedores`].forEach((e) => {
          let t = document.getElementById(e);
          t && t.getBoundingClientRect().top < 180 && (n = e);
        }),
          (e !== this.state.scrolled || n !== this.state.sec) &&
            this.setState({
              scrolled: e,
              sec: n,
            }));
      });
    };
    scrollTo = (e) => {
      if (this.state.w < 720) {
        let t = {
          catalogo: `casino`,
          envivo: `live`,
          wallet: `wallet`,
          inicio: `home`,
          proveedores: `home`,
          apuestas: `home`,
        };
        if (t[e] && this.state.mTab !== t[e]) {
          (this.setState({
            mTab: t[e],
          }),
            setTimeout(() => this.scrollTo(e), 60));
          return;
        }
        if (e === `catalogo` || e === `envivo` || e === `wallet`) {
          window.scrollTo({
            top: 0,
            behavior: `smooth`,
          });
          return;
        }
      }
      let t = document.getElementById(e);
      t &&
        window.scrollTo({
          top: t.getBoundingClientRect().top + window.scrollY - 110,
          behavior: `smooth`,
        });
    };
    step = (e) =>
      this.setState((t) => ({
        rot: t.rot + e,
      }));
    goTo = (e) => {
      let t = e - (((this.state.rot % 7) + 7) % 7);
      (t > 3 && (t -= 7),
        t < -3 && (t += 7),
        this.setState((e) => ({
          rot: e.rot + t,
        })));
    };
    trigRect() {
      let e = document.getElementById(`searchTrig`);
      if (!e)
        return {
          l: window.innerWidth / 2 - 100,
          t: 20,
          w: 200,
          h: 44,
        };
      let t = e.getBoundingClientRect();
      return {
        l: t.left,
        t: t.top,
        w: t.width,
        h: t.height,
      };
    }
    openCmd = () => {
      this.state.cmdOpen ||
        (clearTimeout(this.cmdT),
        this.setState({
          cmdOpen: !0,
          cmdPhase: `measure`,
          cmdQ: ``,
          cmdIdx: 0,
          sortOpen: !1,
          tr: this.trigRect(),
          eh: 0,
          cmdN: (this.state.cmdN || 0) + 1,
        }));
    };
    closeCmd = () => {
      let e = this.state;
      if (!e.cmdOpen || e.cmdPhase === `out`) return;
      clearTimeout(this.cmdT);
      let t = this.cmdPanelRef.current,
        n = t ? t.offsetHeight : e.eh;
      (this.setState({
        cmdPhase: `out`,
        eh: n,
        tr: this.trigRect(),
      }),
        (this.cmdT = setTimeout(
          () =>
            this.setState({
              cmdOpen: !1,
              cmdPhase: `idle`,
            }),
          440,
        )));
    };
    launch = (e, t) => {
      let n = Ke[e];
      (this.lRef.current &&
        this.lRef.current.scrollTo({
          top: 0,
          behavior: `smooth`,
        }),
        this.setState({
          lOpen: !0,
          lCode: e,
          lDemo: !!t,
          lPhase: 0,
          lPct: `0%`,
          lRound: ``,
          cmdOpen: !1,
          hov: null,
        }),
        this.later(
          () =>
            this.setState({
              lPct: `100%`,
            }),
          50,
        ),
        this.later(
          () =>
            this.state.lCode === e &&
            this.setState({
              lPhase: 1,
            }),
          550,
        ),
        this.later(
          () =>
            this.state.lCode === e &&
            this.setState({
              lPhase: 2,
            }),
          1100,
        ),
        this.later(
          () =>
            this.state.lCode === e &&
            this.state.lOpen &&
            this.setState({
              lPhase: n.maint ? `maint` : `ready`,
            }),
          1700,
        ));
    };
    closeLaunch = () => {
      (this.exitFs(),
        this.setState({
          lOpen: !1,
          lCode: null,
          lFull: !1,
        }));
    };
    exitFs() {
      try {
        document.fullscreenElement && document.exitFullscreen();
      } catch {}
    }
    toggleFull = () => {
      if (this.state.lFull) {
        (this.exitFs(),
          this.setState({
            lFull: !1,
          }));
        return;
      }
      let e = this.frameRef.current;
      try {
        e && e.requestFullscreen && e.requestFullscreen().catch(() => {});
      } catch {}
      this.setState({
        lFull: !0,
      });
    };
    setFile = (e) => {
      if (!e) return;
      if (e.size > 10 * 1024 * 1024) {
        this.setState({
          mErr: `El archivo supera 10 MB`,
        });
        return;
      }
      let t = /^image\//.test(e.type);
      (this.state.mFile &&
        this.state.mFile.url &&
        URL.revokeObjectURL(this.state.mFile.url),
        this.setState({
          mFile: {
            name: e.name,
            size: e.size,
            isImg: t,
            url: t ? URL.createObjectURL(e) : ``,
          },
          mErr: ``,
          mDrag: !1,
        }));
    };
    copy = (e, t) => {
      try {
        navigator.clipboard && navigator.clipboard.writeText(e).catch(() => {});
      } catch {}
      (this.setState({
        copied: !0,
      }),
        clearTimeout(this.cpT),
        (this.cpT = setTimeout(
          () =>
            this.setState({
              copied: !1,
            }),
          1600,
        )),
        this.toast(t + ` copiado`));
    };
    openM = (e) =>
      this.setState({
        mFile: null,
        mOpen: e,
        mStep: `form`,
        mAmt: e === `dep` ? `10000` : ``,
        mNote: ``,
        mErr: ``,
        cmdOpen: !1,
        lOpen: !1,
      });
    newReq = () => this.openM(`dep`);
    submitM = () => {
      let e = this.state,
        t = e.mOpen === `dep`,
        n = parseInt(String(e.mAmt).replace(/\D/g, ``), 10) || 0;
      if (e.req.stage < 3)
        return this.setState({
          mErr:
            `Ya tenés la solicitud ` +
            e.req.id +
            ` en revisión. Esperá a que el cajero la resuelva.`,
        });
      if (n < 1e3)
        return this.setState({
          mErr: `El monto mínimo es ` + L(1e3),
        });
      if (!t && n > e.bal)
        return this.setState({
          mErr:
            `Supera tu saldo real disponible (` +
            L(e.bal) +
            `). El bono no es retirable.`,
        });
      if (!t && e.mAcc.trim().length < 6)
        return this.setState({
          mErr: `Ingresá un CBU, CVU o alias válido`,
        });
      if (!t && e.mName.trim().length < 3)
        return this.setState({
          mErr: `Ingresá el titular de la cuenta`,
        });
      let r = (t ? `D-` : `R-`) + e.reqN,
        i = $e(),
        a = e.mNote.trim(),
        o = {
          req: {
            id: r,
            type: t ? `dep` : `ret`,
            amt: n,
            stage: 1,
            t: [i, ``, ``],
            note: a,
            acc: e.mAcc.trim(),
            file: t && e.mFile ? e.mFile.name : ``,
          },
          reqN: e.reqN + 1,
          mStep: `sent`,
          mSentId: r,
          mErr: ``,
        };
      (t || (o.bal = e.bal - n),
        this.setState(o),
        this.vGo(2),
        this.later(
          () =>
            this.setState((e) => ({
              req: {
                ...e.req,
                stage: 2,
                t: [i, $e(), ``],
              },
            })),
          3500,
        ),
        this.later(
          () => {
            (this.setState((e) => {
              let r = {
                req: {
                  ...e.req,
                  stage: 3,
                  t: [i, e.req.t[1], $e()],
                },
              };
              return (t && (r.bal = e.bal + n), r);
            }),
              this.toast(
                t
                  ? `Depósito acreditado · +` + L(n)
                  : `Retiro transferido · ` + L(n),
              ));
          },
          t ? 7e3 : 9e3,
        ));
    };
    simRound = () => {
      let e = this.state;
      if (e.lDemo) {
        this.setState({
          lRound: `Ronda demo · no afecta tu saldo`,
        });
        return;
      }
      let t = e.bal <= 0,
        n = t ? e.bonus : e.bal;
      if (n <= 0) {
        this.setState({
          lPhase: `nofunds`,
        });
        return;
      }
      let r = Math.min(500, n),
        i = Math.random(),
        a =
          i < 0.5
            ? 0
            : i < 0.8
              ? [0.5, 1.5, 2][Math.floor(Math.random() * 3)]
              : [3, 5, 10][Math.floor(Math.random() * 3)],
        o = Math.round(r * a),
        s = n - r + o,
        c = {
          myBets: [
            {
              id: Math.random().toString(36).slice(2, 9),
              g: e.lCode,
              u: `Vos`,
              t: $e(),
              bet: r,
              mult: a,
              pay: o,
            },
            ...e.myBets,
          ].slice(0, 10),
          lRound:
            (o > 0 ? `Ganaste ${L(o)}` : `Perdiste ${L(r)}`) +
            (t ? ` · con bono` : ``),
        };
      (t ? (c.bonus = s) : (c.bal = s),
        e.lCode === `vs20olympgate` &&
          e.fsUsed < 30 &&
          !t &&
          (c.fsUsed = e.fsUsed + 1),
        !t &&
          s <= 0 &&
          e.bonus > 0 &&
          this.toast(`Tu saldo llegó a $ 0 · se activó tu bono`),
        this.setState(c));
    };
    cmdItems() {
      let e = this.state.cmdQ.trim().toLowerCase(),
        t = Ge.filter(
          (t) =>
            !e ||
            t.gameName.toLowerCase().includes(e) ||
            We[t.vendorCode].toLowerCase().includes(e),
        )
          .slice(0, e ? 6 : 4)
          .map((e) => ({
            grp: `JUEGOS`,
            l: e.gameName,
            s:
              We[e.vendorCode] +
              ` · ` +
              (e.gameType === 1 ? `Slot` : `En vivo`),
            ic: e.art,
            ib: e.bg,
            ifg:
              e.fg === F && e.bg !== P
                ? `var(--br-p-crema,var(--br-p,#FF5B14))`
                : e.fg,
            run: () => this.launch(e.gameCode, !1),
          })),
        n = Ue.filter((t) => !e || t.name.toLowerCase().includes(e))
          .slice(0, 3)
          .map((e) => ({
            grp: `PROVEEDORES`,
            l: e.name,
            s: Ge.filter((t) => t.vendorCode === e.code).length + ` juegos`,
            ic: e.name.slice(0, 2).toUpperCase(),
            ib: `var(--br-linea,#2B2724)`,
            ifg: I,
            run: () => {
              (this.setState({
                cmdOpen: !1,
                vendor: e.name,
                type: 0,
              }),
                this.scrollTo(`catalogo`));
            },
          })),
        r = [
          [
            `Pedir depósito`,
            `Cartera · aprobación de operador`,
            () => {
              (this.setState({
                cmdOpen: !1,
              }),
                this.newReq());
            },
          ],
          [
            `Ver mi bono`,
            `Estado y saldo de bono`,
            () => {
              (this.setState({
                cmdOpen: !1,
              }),
                this.scrollTo(`wallet`));
            },
          ],
          [
            `Solicitar retiro`,
            `Cajero · a tu CBU o alias`,
            () => this.openM(`ret`),
          ],
          [
            `Casino en vivo`,
            `Mesas abiertas`,
            () => {
              (this.setState({
                cmdOpen: !1,
              }),
                this.scrollTo(`envivo`));
            },
          ],
          [
            `Ver favoritos`,
            `Tus juegos guardados`,
            () => {
              (this.setState({
                cmdOpen: !1,
                type: 3,
                vendor: `Todos`,
              }),
                this.scrollTo(`catalogo`));
            },
          ],
        ]
          .filter((t) => !e || t[0].toLowerCase().includes(e))
          .map((e) => ({
            grp: `ACCIONES`,
            l: e[0],
            s: e[1],
            ic: `→`,
            ib: F,
            ifg: P,
            run: e[2],
          }));
      return [...t, ...n, ...r];
    }
    onKey = (e) => {
      let t = this.state;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === `k`) {
        (e.preventDefault(), t.cmdOpen ? this.closeCmd() : this.openCmd());
        return;
      }
      if (e.key === `Escape`) {
        if (t.lFull) {
          (this.exitFs(),
            this.setState({
              lFull: !1,
            }));
          return;
        }
        if (t.mOpen) {
          this.setState({
            mOpen: null,
          });
          return;
        }
        t.cmdOpen
          ? this.closeCmd()
          : t.lOpen
            ? this.closeLaunch()
            : t.sortOpen &&
              this.setState({
                sortOpen: !1,
              });
        return;
      }
      if (t.cmdOpen) {
        let n = this.cmdItems();
        e.key === `ArrowDown`
          ? (e.preventDefault(),
            this.setState({
              cmdIdx: Math.min(n.length - 1, t.cmdIdx + 1),
            }))
          : e.key === `ArrowUp`
            ? (e.preventDefault(),
              this.setState({
                cmdIdx: Math.max(0, t.cmdIdx - 1),
              }))
            : e.key === `Enter` &&
              n[t.cmdIdx] &&
              (e.preventDefault(), n[t.cmdIdx].run());
        return;
      }
      !t.lOpen &&
        e.target.tagName !== `INPUT` &&
        (e.key === `ArrowRight` && this.step(1),
        e.key === `ArrowLeft` && this.step(-1));
    };
    tilt = (e) => {
      let t = e.currentTarget.querySelector(`[data-tilt]`);
      if (!t) return;
      let n = t.getBoundingClientRect(),
        r = (e.clientX - n.left) / n.width,
        i = (e.clientY - n.top) / n.height;
      (t.style.setProperty(`--ry`, ((r - 0.5) * 12).toFixed(2) + `deg`),
        t.style.setProperty(`--rx`, ((0.5 - i) * 12).toFixed(2) + `deg`),
        t.style.setProperty(`--mx`, (r * 100).toFixed(1) + `%`),
        t.style.setProperty(`--my`, (i * 100).toFixed(1) + `%`),
        t.style.setProperty(`--go`, `1`));
    };
    untilt = (e) => {
      let t = e.currentTarget.querySelector(`[data-tilt]`);
      (t &&
        ([`--rx`, `--ry`].forEach((e) => t.style.setProperty(e, `0deg`)),
        t.style.setProperty(`--go`, `0`)),
        this.setState({
          hov: null,
        }));
    };
    renderVals() {
      let e = this.state,
        t = e.w,
        n = t >= 1180,
        r = t < 720;
      if (!this._ticker) {
        let e = [...Xe, ...Xe].map((e, t) =>
          React.createElement(
            `span`,
            {
              key: t,
              style: {
                display: `inline-flex`,
                alignItems: `center`,
                gap: 10,
                padding: `0 26px`,
                font: `600 13px var(--fb,Oswald),sans-serif`,
                color: I,
                whiteSpace: `nowrap`,
              },
            },
            React.createElement(`span`, {
              style: {
                width: 5,
                height: 5,
                borderRadius: 3,
                background: F,
              },
            }),
            React.createElement(`b`, null, e[0]),
            React.createElement(
              `span`,
              {
                style: {
                  color: Be,
                },
              },
              `en ` + e[1],
            ),
            React.createElement(
              `span`,
              {
                style: {
                  font: `700 13px var(--fb,Oswald),sans-serif`,
                  color: `var(--br-p-claro,#FF8A4C)`,
                },
              },
              `+` + L(e[2]),
            ),
            React.createElement(
              `span`,
              {
                style: {
                  font: `700 10px var(--fb,Oswald),sans-serif`,
                  color: P,
                  background: F,
                  borderRadius: 5,
                  padding: `2px 6px`,
                },
              },
              e[3] + `×`,
            ),
          ),
        );
        ((this._ticker = React.createElement(
          `div`,
          {
            style: {
              display: `flex`,
              width: `max-content`,
              animation: `rbMarquee 70s linear infinite`,
            },
          },
          e,
        )),
          (this._pulse = React.createElement(`span`, {
            style: {
              width: 8,
              height: 8,
              borderRadius: 4,
              background: F,
              display: `inline-block`,
              animation: `rbPulse 1.6s ease-out infinite`,
            },
          })),
          (this._pulseDark = React.createElement(`span`, {
            style: {
              width: 8,
              height: 8,
              borderRadius: 4,
              background: P,
              display: `inline-block`,
            },
          })),
          (this._glow = React.createElement(`div`, {
            style: {
              position: `absolute`,
              left: `50%`,
              top: `42%`,
              width: 900,
              height: 900,
              marginLeft: -450,
              marginTop: -450,
              borderRadius: `50%`,
              background: `conic-gradient(from 0deg,rgba(var(--br-p-rgb,255,91,20),0),rgba(var(--br-p-rgb,255,91,20),.22),rgba(var(--br-p-rgb,255,91,20),0) 35%,rgba(var(--br-texto-rgb,243,233,216),.08) 60%,rgba(var(--br-p-rgb,255,91,20),0) 80%)`,
              filter: `blur(40px)`,
              animation: `rbSpin 26s linear infinite`,
              pointerEvents: `none`,
            },
          })));
      }
      let i = ((e.rot % 7) + 7) % 7,
        a = Ke[Ye[i]],
        o = (t) => {
          let n = t.bg === P,
            r = He(t.pat, t.fg);
          return {
            name: t.gameName,
            vendor: We[t.vendorCode],
            art: t.art,
            bg: t.bg,
            fg: t.fg,
            code: t.gameCode,
            typeL: t.gameType === 1 ? `SLOT` : `EN VIVO`,
            badgeBg: n ? F : P,
            badgeFg: n ? P : I,
            pat: r[0],
            patSize: r[1],
            hasImg: !!t.img,
            imgUrl: t.img ? `url("` + t.img + `")` : `none`,
            nameC: t.fg,
            artD: t.img ? `none` : `block`,
            nameD: t.img ? `none` : `flex`,
            heart: e.favs[t.gameCode] ? `♥` : `♡`,
            onFav: (e) => {
              (e.stopPropagation(),
                this.setState((e) => ({
                  favs: {
                    ...e.favs,
                    [t.gameCode]: !e.favs[t.gameCode],
                  },
                })));
            },
            play: (e) => {
              (e && e.stopPropagation && e.stopPropagation(),
                this.launch(t.gameCode, !1));
            },
            demo: (e) => {
              (e.stopPropagation(), this.launch(t.gameCode, !0));
            },
          };
        },
        s = [`Populares`, `A – Z`, `Proveedor`],
        c =
          e.page ||
          (r && e.mTab === `casino`
            ? `slots`
            : r && e.mTab === `live`
              ? `live`
              : null),
        l = !!c,
        u = e.slotQ.trim().toLowerCase(),
        d = c === `slots` ? 1 : c === `live` ? 2 : e.type,
        f = Ge.filter(
          (t) =>
            (d === 0 || (d === 3 ? e.favs[t.gameCode] : t.gameType === d)) &&
            (e.vendor === `Todos` || We[t.vendorCode] === e.vendor) &&
            (!l ||
              ((!u ||
                t.gameName.toLowerCase().includes(u) ||
                We[t.vendorCode].toLowerCase().includes(u)) &&
                (!e.favOnly || e.favs[t.gameCode]))),
        );
      f = [...f].sort((t, n) =>
        e.sort === 0
          ? t.pop - n.pop
          : e.sort === 1
            ? t.gameName.localeCompare(n.gameName)
            : We[t.vendorCode].localeCompare(We[n.vendorCode]) || t.pop - n.pop,
      );
      let p = r
          ? 140
          : (this.props.densidad ?? `Cómoda`) === `Compacta`
            ? 150
            : 190,
        m = f.map((t, n) => {
          let i = o(t),
            a = r;
          return {
            ...i,
            cs: `span 1`,
            rs: `span 1`,
            ar: `3 / 4`,
            minH: `0`,
            artSize: a ? `26px` : `34px`,
            artB: a ? `24px` : `40px`,
            nmF: a ? `9px` : `11px`,
            vnF: a ? `8px` : `9px`,
            nmP: a ? `6px` : `9px`,
            bgF: a ? `10px` : `8px`,
            bgPad: a ? `5px 8px` : `3px 5px`,
            bgPos: a ? `12px` : `7px`,
            typeS: a ? i.typeL : t.gameType === 2 ? `VIVO` : i.typeL,
            r: a ? `12px` : `16px`,
            badgeD: a ? `none` : `block`,
            nameD: i.nameD,
            hPos: a ? `4px` : `6px`,
            hS: a ? `20px` : `22px`,
            hF: a ? `10px` : `11px`,
            hov: !a && e.hov === t.gameCode ? `1` : `0`,
            pe: !a && e.hov === t.gameCode ? `auto` : `none`,
            enter: a
              ? null
              : () =>
                  this.setState({
                    hov: t.gameCode,
                  }),
            tap: a
              ? (e) => {
                  (e.target.closest && e.target.closest(`[data-fav]`)) ||
                    this.launch(t.gameCode, !1);
                }
              : null,
          };
        }),
        h = [`Todos`, `Slots`, `En vivo`, `Favoritos`],
        g = e.bal <= 0 && e.bonus > 0,
        _ = 2e4,
        v =
          e.req.type === `ret`
            ? [
                [`Enviada al cajero`, `Con tu nota y cuenta destino`],
                [`En revisión`, `El cajero valida el retiro`],
                [`Transferida`, `La plata va a tu cuenta`],
              ]
            : [
                [`Enviada al cajero`, `Con tu nota de pago`],
                [`En revisión`, `El cajero verifica tu pago`],
                [`Acreditada`, `El saldo ya está en tu cuenta`],
              ],
        y = v,
        b = (e) => `https://wa.me/5491100000000?text=` + encodeURIComponent(e),
        x = e.cmdOpen ? this.cmdItems() : [],
        ee = [];
      x.forEach((t, n) => {
        let r = ee.find((e) => e.l === t.grp);
        (r ||
          ((r = {
            l: t.grp,
            items: [],
          }),
          ee.push(r)),
          (r.delay = r.delay || ee.length * 90 + 300 + `ms`),
          r.items.push({
            ...t,
            delay: (e.cmdQ ? n * 30 : 360 + n * 45) + `ms`,
            bg: n === e.cmdIdx ? `var(--br-linea,#2B2724)` : `transparent`,
            op: n === e.cmdIdx ? `1` : `0`,
            hover: () =>
              this.state.cmdIdx !== n &&
              this.setState({
                cmdIdx: n,
              }),
          }));
      });
      let C = [...e.big, ...e.bets].reduce(
          (e, t) => (!e || t.pay > e.pay ? t : e),
          null,
        ),
        w = C ? Ke[C.g] : null,
        te = w ? He(w.pat, w.fg) : [`none`, `auto`],
        ne = ((e.vRot % 3) + 3) % 3,
        T = e.dGame ? Ke[e.dGame] : null,
        re = (() => {
          let t = e.hist,
            n = Math.min(...t),
            r = Math.max(...t),
            i = Math.max(1, r - n),
            a =
              `M` +
              t
                .map((e, r) => [
                  (r / (t.length - 1)) * 300,
                  62 - ((e - n) / i) * 54,
                ])
                .map((e) => e[0].toFixed(1) + `,` + e[1].toFixed(1))
                .join(` L`),
            o = t[t.length - 1] - t[0];
          return {
            line: a,
            area: a + ` L300,70 L0,70 Z`,
            delta: (o >= 0 ? `+` : `−`) + L(Math.abs(o)),
            c:
              o >= 0
                ? `var(--br-tinta,#121110)`
                : `var(--br-inverso-neg,#8A3A10)`,
          };
        })(),
        E = e.lCode ? Ke[e.lCode] : null,
        ie = e.lPhase,
        ae = (t) =>
          Ge.filter(
            (n) =>
              We[n.vendorCode] === t &&
              (e.type === 0 || e.type === 3 || n.gameType === e.type),
          ).length;
      return {
        rootRef: this.rootRef,
        cmdRef: this.cmdRef,
        ticker: this._ticker,
        pulse: this._pulse,
        pulseDark: this._pulseDark,
        glow: this._glow,
        wide: n,
        narrow: r,
        notNarrow: !r,
        bottomPad: r ? `110px` : `64px`,
        searchMin: r ? `44px` : n ? `280px` : `190px`,
        hdrH: e.scrolled ? `62px` : `78px`,
        hdrBg: e.scrolled
          ? `rgba(var(--br-hondo-rgb,12,11,10),.86)`
          : `rgba(var(--br-hondo-rgb,12,11,10),.4)`,
        hdrBd: e.scrolled ? `var(--br-linea,#2B2724)` : `transparent`,
        navL: [
          [`inicio`, `Inicio`],
          [`catalogo`, `Slots`],
          [`envivo`, `En vivo`],
          [`proveedores`, `Proveedores`],
        ].map((t) => {
          let n =
              t[0] === `catalogo` ? `slots` : t[0] === `envivo` ? `live` : null,
            r = n ? c === n : !c && e.sec === t[0];
          return {
            l: t[1],
            fg: r ? I : Be,
            sc: r ? `1` : `0`,
            onClick: n
              ? () => {
                  (this.setState({
                    page: n,
                    mTab: n === `slots` ? `casino` : `live`,
                    vendor: `Todos`,
                    slotQ: ``,
                    favOnly: !1,
                    sortOpen: !1,
                  }),
                    window.scrollTo({
                      top: 0,
                    }));
                }
              : () => {
                  this.state.page
                    ? (this.setState({
                        page: null,
                      }),
                      setTimeout(() => this.scrollTo(t[0]), 60))
                    : this.scrollTo(t[0]);
                },
          };
        }),
        toTop: () => {
          (this.setState({
            page: null,
            mTab: `home`,
          }),
            window.scrollTo({
              top: 0,
              behavior: `smooth`,
            }));
        },
        openCmd: this.openCmd,
        closeCmd: this.closeCmd,
        toWallet: () => this.scrollTo(`wallet`),
        balLabel: g ? `JUGANDO CON BONO` : `SALDO REAL`,
        balTag: g ? `ACTIVO` : `+` + L(e.bonus),
        balTagC: g ? F : Be,
        activeBal: L(g ? e.bonus : e.bal),
        bonusOn: g,
        hdrPct: (g ? e.bonus / 5e3 : Math.min(1, e.bal / _)) * 100 + `%`,
        hdrPctC: g ? F : I,
        unread: e.unread,
        unreadD: e.unread ? `grid` : `none`,
        readAll: () => {
          (this.setState({
            unread: 0,
          }),
            this.toast(`Notificaciones al día`));
        },
        newReq: this.newReq,
        askRet: () => this.openM(`ret`),
        mOpen: !!e.mOpen,
        mForm: e.mStep === `form`,
        mSent: e.mStep === `sent`,
        mIsDep: e.mOpen === `dep`,
        mIsRet: e.mOpen === `ret`,
        closeM: () =>
          this.setState({
            mOpen: null,
          }),
        mTitle: e.mOpen === `dep` ? `Pedir depósito` : `Solicitar retiro`,
        mKicker: e.mOpen === `dep` ? `CAJERO · DEPÓSITO` : `CAJERO · RETIRO`,
        mAmt: e.mAmt ? L(parseInt(e.mAmt, 10)) : ``,
        onMAmt: (e) =>
          this.setState({
            mAmt: String(parseInt(e.target.value.replace(/\D/g, ``), 10) || ``),
            mErr: ``,
          }),
        mPresets: [2e3, 5e3, 1e4, 2e4, 5e4].map((t) => {
          let n = parseInt(e.mAmt, 10) === t;
          return {
            l: L(t),
            bg: n ? F : `transparent`,
            fg: n ? P : I,
            bd: n ? F : `var(--br-linea-fuerte,#3A3530)`,
            onClick: () =>
              this.setState({
                mAmt: String(t),
                mErr: ``,
              }),
          };
        }),
        mMax: () =>
          this.setState({
            mAmt: String(Math.max(0, e.bal)),
            mErr: ``,
          }),
        mAvail: L(e.bal),
        mNote: e.mNote,
        onMNote: (e) =>
          this.setState({
            mNote: e.target.value,
          }),
        mAcc: e.mAcc,
        onMAcc: (e) =>
          this.setState({
            mAcc: e.target.value,
            mErr: ``,
          }),
        mName: e.mName,
        onMName: (e) =>
          this.setState({
            mName: e.target.value,
            mErr: ``,
          }),
        mHasErr: !!e.mErr,
        mErr: e.mErr,
        submitM: this.submitM,
        cjAlias: Je.alias,
        cjCbu: Je.cbu,
        cjName: Je.titular,
        cjBank: Je.banco,
        copyL: e.copied ? `Copiado ✓` : `Copiar alias`,
        copyAlias: () => this.copy(Je.alias, `Alias`),
        copyCbu: () => this.copy(Je.cbu, `CBU`),
        fileRef: this.fileRef,
        pickFile: () => this.fileRef.current && this.fileRef.current.click(),
        onFile: (e) => {
          (this.setFile(e.target.files && e.target.files[0]),
            (e.target.value = ``));
        },
        onDragOver: (e) => {
          (e.preventDefault(),
            this.state.mDrag ||
              this.setState({
                mDrag: !0,
              }));
        },
        onDragLeave: () =>
          this.setState({
            mDrag: !1,
          }),
        onDrop: (e) => {
          (e.preventDefault(),
            this.setFile(e.dataTransfer.files && e.dataTransfer.files[0]));
        },
        dropBd: e.mDrag ? F : `var(--br-linea-fuerte,#3A3530)`,
        dropBg: e.mDrag
          ? `rgba(var(--br-p-rgb,255,91,20),.08)`
          : `var(--br-hondo,#0C0B0A)`,
        noFile: !e.mFile,
        hasFile: !!e.mFile,
        fileName: e.mFile ? e.mFile.name : ``,
        fileSize: e.mFile
          ? e.mFile.size > 1048576
            ? (e.mFile.size / 1048576).toFixed(1) + ` MB`
            : Math.max(1, Math.round(e.mFile.size / 1024)) + ` KB`
          : ``,
        fileIsImg: !!(e.mFile && e.mFile.isImg),
        fileImg: e.mFile && e.mFile.url ? `url("` + e.mFile.url + `")` : `none`,
        clearFile: () =>
          this.setState({
            mFile: null,
          }),
        sentHasFile: !!e.req.file,
        sentFile: e.req.file || ``,
        mInfo:
          e.mOpen === `dep`
            ? `1. Transferí el monto al alias del cajero. 2. Subí el comprobante. 3. Enviá la solicitud: el cajero la recibe con tu nota y acredita tu saldo.`
            : `El retiro llega al cajero con tu nota. Cuando lo aprueba, transfiere a tu CBU o alias.`,
        mBtn:
          (e.mOpen === `dep` ? `Enviar al cajero · ` : `Solicitar retiro · `) +
          L(parseInt(e.mAmt, 10) || 0),
        mSentTitle:
          (e.mOpen === `dep` ? `Depósito` : `Retiro`) +
          ` ` +
          e.req.id +
          ` enviado`,
        mSentAmt: L(e.req.amt),
        mSentNote: e.req.note ? `“` + e.req.note + `”` : `Sin nota`,
        mSteps: v.map((t, n) => {
          let r =
            e.req.stage === 3 || n < e.req.stage
              ? `done`
              : n === e.req.stage
                ? `active`
                : `todo`;
          return {
            l: t[0],
            mark: r === `done` ? `✓` : ``,
            bg: r === `done` ? F : `transparent`,
            bd: r === `todo` ? `var(--br-linea-fuerte,#3A3530)` : F,
            fg: r === `todo` ? `var(--br-texto-4,#7D746A)` : I,
          };
        }),
        waForm: b(
          e.mOpen === `dep`
            ? `Hola, quiero hacer un depósito de ` +
                L(parseInt(e.mAmt, 10) || 0) +
                `. Usuario: @martina.r`
            : `Hola, quiero retirar ` +
                L(parseInt(e.mAmt, 10) || 0) +
                `. Usuario: @martina.r`,
        ),
        waReq: b(
          `Hola, soy @martina.r. Envié la solicitud ` +
            e.req.id +
            ` (` +
            (e.req.type === `ret` ? `retiro` : `depósito`) +
            `) por ` +
            L(e.req.amt) +
            (e.req.file ? ` con el comprobante adjunto` : ``) +
            (e.req.note ? `. Nota: ` + e.req.note : ``) +
            `. ¿Me la pueden revisar?`,
        ),
        reqTypeL:
          e.req.type === `ret` ? `Retiro · cajero` : `Depósito · cajero`,
        reqNoteL: e.req.note
          ? `Nota: ` + e.req.note
          : `¿No te responden? Escribile al cajero por WhatsApp.`,
        pauseOn: () =>
          this.setState({
            paused: !0,
          }),
        pauseOff: () =>
          this.setState({
            paused: !1,
          }),
        prev: () => this.step(-1),
        next: () => this.step(1),
        heroWord: a.gameName.toUpperCase(),
        heroIdx: `0` + (i + 1),
        heroName: a.gameName,
        heroVendor: We[a.vendorCode],
        heroType: a.gameType === 1 ? `Slot` : `En vivo`,
        heroCode: a.gameCode,
        heroHeart: e.favs[a.gameCode] ? `♥` : `♡`,
        heroFav: () =>
          this.setState((e) => ({
            favs: {
              ...e.favs,
              [a.gameCode]: !e.favs[a.gameCode],
            },
          })),
        heroPlay: () => this.launch(a.gameCode, !1),
        heroDemo: () => this.launch(a.gameCode, !0),
        heroDots: Ye.map((e, t) => ({
          w: t === i ? `26px` : `8px`,
          bg: t === i ? F : `var(--br-linea-fuerte,#3A3530)`,
          onClick: () => this.goTo(t),
        })),
        ringRot: (-e.rot * 360) / 7 + `deg`,
        ring: Ye.map((e, t) => {
          let n = Ke[e],
            r = Math.min(Math.abs(t - i), 7 - Math.abs(t - i));
          return {
            ...o(n),
            tf: `rotateY(${(t * 360) / 7}deg) translateZ(380px)`,
            op: [1, 0.7, 0, 0][r],
            onClick: () => (t === i ? this.launch(e, !1) : this.goTo(t)),
          };
        }),
        bal: e.bal,
        onBal: (e) => {
          let t = +e.target.value,
            n = this.state.bal;
          (this.setState({
            bal: t,
          }),
            n > 0 &&
              t === 0 &&
              this.state.bonus > 0 &&
              this.toast(`Saldo real en $ 0 · se activó tu bono`));
        },
        realBal: L(e.bal),
        bonusBal: L(e.bonus),
        ringOff: (490.1 * (1 - Math.min(1, e.bal / _))).toFixed(1),
        bRingC: g ? F : `var(--br-texto-anillo,#C9B89E)`,
        bRingOff: (364.4 * (1 - (g ? e.bonus / 5e3 : 1))).toFixed(1),
        ringLabel: g ? `BONO ACTIVO` : `SALDO REAL`,
        ringVal: L(g ? e.bonus : e.bal),
        bStatus:
          e.bonus <= 0 ? `BONO AGOTADO` : g ? `BONO ACTIVO` : `BONO EN ESPERA`,
        bStatBg: g ? F : P,
        bStatFg: g ? P : I,
        bonusNote:
          e.bonus <= 0
            ? `Usaste todo tu bono.`
            : g
              ? `Tu saldo real llegó a $ 0: ahora cada apuesta usa el bono.`
              : `Tu bono de ` +
                L(e.bonus) +
                ` se activa solo cuando el saldo real llegue a $ 0.`,
        fsLeftN: 30 - e.fsUsed,
        pips: Array.from(
          {
            length: 30,
          },
          (t, n) => ({
            bg: n < 30 - e.fsUsed ? F : `var(--br-linea,#2B2724)`,
          }),
        ),
        fsClock: Qe(e.fsLeft),
        useFS: () => this.launch(`vs20olympgate`, !1),
        reqId: e.req.id,
        reqAmt: L(e.req.amt),
        reqSteps: y.map((t, n) => {
          let r =
            e.req.stage === 3 || n < e.req.stage
              ? `done`
              : n === e.req.stage
                ? `active`
                : `todo`;
          return {
            l: t[0],
            s: e.req.t[n] ? t[1] + ` · ` + e.req.t[n] : t[1],
            mark: r === `done` ? `✓` : ``,
            bg: r === `done` ? F : `transparent`,
            bd: r === `todo` ? `var(--br-linea-fuerte,#3A3530)` : F,
            fg: r === `todo` ? `var(--br-texto-4,#7D746A)` : I,
            line: r === `done` ? F : `var(--br-linea-fuerte,#3A3530)`,
            lineD: n < 2 ? `block` : `none`,
          };
        }),
        catCount:
          f.length +
          (c === `slots` ? ` SLOTS` : c === `live` ? ` MESAS` : ` JUEGOS`),
        pgTitle: c === `live` ? `En vivo` : `Slots`,
        pgPh:
          c === `live`
            ? `Buscar mesa o proveedor…`
            : `Buscar slot o proveedor…`,
        slotsPg: l,
        catHeadD: l ? `none` : `flex`,
        slotQ: e.slotQ,
        onSlotQ: (e) =>
          this.setState({
            slotQ: e.target.value,
          }),
        hasSlotQ: !!e.slotQ,
        clearSlotQ: () =>
          this.setState({
            slotQ: ``,
          }),
        sqBd: e.slotQ ? F : `var(--br-linea,#2B2724)`,
        toggleFavOnly: () =>
          this.setState((e) => ({
            favOnly: !e.favOnly,
          })),
        favBd: e.favOnly ? F : `var(--br-linea,#2B2724)`,
        favBg: e.favOnly
          ? `rgba(var(--br-p-rgb,255,91,20),.14)`
          : `var(--br-superficie,#161412)`,
        favFg: e.favOnly ? `var(--br-p-palido,#FFB592)` : I,
        favIc: e.favOnly ? `♥` : `♡`,
        viewD: r ? `none` : `flex`,
        hasActiveF:
          l && (!!u || e.favOnly || e.vendor !== `Todos` || e.sort !== 0),
        activeFN: String(
          +!!u +
            +!!e.favOnly +
            (e.vendor === `Todos` ? 0 : 1) +
            (e.sort === 0 ? 0 : 1),
        ),
        clearF: () =>
          this.setState({
            slotQ: ``,
            favOnly: !1,
            vendor: `Todos`,
            sort: 0,
          }),
        goHomePg: () => {
          (this.setState({
            page: null,
            mTab: `home`,
          }),
            window.scrollTo({
              top: 0,
            }));
        },
        emptyT: l
          ? u
            ? `No encontramos “` + e.slotQ.trim() + `”`
            : `Sin resultados`
          : `Nada por acá todavía`,
        emptyS: l
          ? e.favOnly
            ? `No tenés favoritos con estos filtros. Tocá ♡ en un juego para guardarlo.`
            : `Probá con otro nombre o cambiá de proveedor.`
          : `Tocá ♡ en cualquier juego para guardarlo en Favoritos.`,
        catTitle:
          e.type === 3
            ? `Tus favoritos`
            : e.vendor === `Todos`
              ? [`Todo el casino`, `Slots`, `En vivo`][e.type]
              : e.vendor,
        segLeft: `calc(4px + (100% - 8px) * ${e.type / 4})`,
        types: h.map((t, n) => ({
          l: t,
          fg: e.type === n ? P : Be,
          onClick: () =>
            this.setState({
              type: n,
              vendor: `Todos`,
            }),
        })),
        sortL: s[e.sort],
        sortOpen: e.sortOpen,
        sortRot: e.sortOpen ? `180deg` : `0deg`,
        toggleSort: () =>
          this.setState((e) => ({
            sortOpen: !e.sortOpen,
          })),
        sorts: s.map((t, n) => ({
          l: t,
          mark: n === e.sort ? `●` : ``,
          bg: n === e.sort ? `var(--br-linea,#2B2724)` : `transparent`,
          onClick: () =>
            this.setState({
              sort: n,
              sortOpen: !1,
            }),
        })),
        views: [
          [`grid`, Ze.grid],
          [`list`, Ze.list],
        ].map((t) => ({
          icon: t[1],
          bg: e.view === t[0] ? F : `transparent`,
          fg: e.view === t[0] ? P : Be,
          onClick: () =>
            this.setState({
              view: t[0],
            }),
        })),
        vendorChips: [
          `Todos`,
          ...Ue.filter(
            (t) => e.type === 0 || e.type === 3 || t.type === e.type,
          ).map((e) => e.name),
        ].map((t) => {
          let n = e.vendor === t;
          return {
            l: t,
            n:
              t === `Todos`
                ? Ge.filter(
                    (t) =>
                      e.type === 0 || e.type === 3 || t.gameType === e.type,
                  ).length
                : ae(t),
            bg: n ? I : `transparent`,
            fg: n ? P : I,
            bd: n ? I : `var(--br-linea-fuerte,#3A3530)`,
            nBg: n ? P : `var(--br-linea,#2B2724)`,
            nFg: n ? I : Be,
            onClick: () =>
              this.setState({
                vendor: t,
              }),
          };
        }),
        empty: f.length === 0,
        isGrid: e.view === `grid`,
        isList: e.view === `list`,
        tiles: m,
        tileMin: p + `px`,
        tileCols: r ? `repeat(4,minmax(0,1fr))` : `repeat(8,minmax(0,1fr))`,
        tileGap: r ? `8px` : `14px`,
        tilt: this.tilt,
        untilt: this.untilt,
        liveCards: Ge.filter((e) => e.gameType === 2).map((e) => ({
          ...o(e),
          artC: e.bg === P ? F : e.bg,
          glow: Ve(e.bg === P ? F : e.bg, 0.35),
          maintD: e.maint ? `block` : `none`,
        })),
        vendorWall: Ue.map((t) => {
          let n = e.vendor === t.name,
            r = Ge.filter((e) => e.vendorCode === t.code)
              .sort((e, t) => !!t.img - +!!e.img || e.pop - t.pop)
              .slice(0, 3),
            i = [
              [`96px`, `8deg`, 3],
              [`48px`, `-4deg`, 2],
              [`0px`, `-14deg`, 1],
            ];
          return {
            name: t.name,
            ini: t.name
              .split(/\s|'/)
              .map((e) => e[0])
              .join(``)
              .slice(0, 2)
              .toUpperCase(),
            hasLogo: !1,
            noLogo: !0,
            logo: `none`,
            minis: r.map((e, t) => ({
              bg: e.bg,
              fg: e.fg,
              art: e.art,
              hasImg: !!e.img,
              imgUrl: e.img ? `url("` + e.img + `")` : `none`,
              x: i[t][0],
              r: i[t][1],
              z: i[t][2],
            })),
            type: t.type === 1 ? `SLOTS` : `EN VIVO`,
            nL: ((e) => (e === 1 ? `1 JUEGO` : e + ` JUEGOS`))(
              Ge.filter((e) => e.vendorCode === t.code).length,
            ),
            bg: n
              ? `var(--br-superficie-3,#1E1B18)`
              : `var(--br-tarjeta,#131110)`,
            bd: n ? F : `var(--br-linea,#2B2724)`,
            fg: I,
            ctaC: n ? F : I,
            cta: n ? `Filtrando catálogo ✓` : `Ver juegos →`,
            onClick: () => {
              (this.setState({
                vendor: n ? `Todos` : t.name,
                type: 0,
              }),
                this.scrollTo(`catalogo`));
            },
          };
        }),
        dock: [
          [`Inicio`, Ze.home, `home`],
          [`Slots`, Ze.grid, `casino`],
          [`En vivo`, Ze.live, `live`],
          [`Buscar`, Ze.search, `x`],
          [`Deportes`, Ze.sport, `sp`],
          [`Cartera`, Ze.wallet, `wallet`],
        ].map((t) => ({
          l: t[0],
          icon: t[1],
          onClick:
            t[2] === `x`
              ? this.openCmd
              : t[2] === `sp`
                ? this.openSports
                : () => {
                    (this.setState({
                      mTab: t[2],
                      page: null,
                      vendor: `Todos`,
                      slotQ: ``,
                      favOnly: !1,
                    }),
                      window.scrollTo({
                        top: 0,
                      }));
                  },
          fg: e.mTab === t[2] ? F : Be,
        })),
        cmdPanelRef: this.cmdPanelRef,
        cmdBackAnim:
          e.cmdPhase === `out`
            ? `rbBackOut .4s ease both`
            : `rbBackIn .45s ease both`,
        trigOp: e.cmdOpen ? `0` : `1`,
        ...(() => {
          let t = typeof window < `u` ? window.innerWidth : 1200,
            n = typeof window < `u` ? window.innerHeight : 800,
            r = e.tr || {
              l: t / 2 - 150,
              t: 20,
              w: 300,
              h: 44,
            },
            i = Math.min(640, t - 32),
            a = Math.round((t - i) / 2),
            o = Math.round(n * 0.11),
            s = e.cmdPhase;
          return {
            lqSl: r.l + `px`,
            lqSt: r.t + `px`,
            lqSw: r.w + `px`,
            lqSh: r.h + `px`,
            lqEl: a + `px`,
            lqEt: o + `px`,
            lqEw: i + `px`,
            lqEh: (e.eh || 0) + `px`,
            lqH: s === `out` ? (e.eh || 0) + `px` : `auto`,
            lqVis: s === `measure` ? `hidden` : `visible`,
            lqAnim:
              s === `in`
                ? `rbLiqIn .74s cubic-bezier(.22,1.05,.3,1) both`
                : s === `out`
                  ? `rbLiqOut .44s cubic-bezier(.6,0,.4,1) both`
                  : `none`,
            lqRowAnim:
              s === `in`
                ? `rbRowIn .74s cubic-bezier(.22,1.05,.3,1) both`
                : s === `out`
                  ? `rbRowOut .44s cubic-bezier(.6,0,.4,1) both`
                  : `none`,
            lqTxtAnim:
              s === `in`
                ? `rbTxtIn .74s cubic-bezier(.22,1.05,.3,1) both`
                : s === `out`
                  ? `rbTxtOut .44s cubic-bezier(.6,0,.4,1) both`
                  : `none`,
            lqBodyAnim:
              s === `out`
                ? `rbHide .14s ease both`
                : `rbReveal .4s .36s ease both`,
            lqRowBd:
              s === `in` || s === `out`
                ? `transparent`
                : `var(--br-linea,#2B2724)`,
          };
        })(),
        cmdCount: x.length + ` resultados`,
        cmdPh: [
          `Buscá un juego, proveedor o acción…`,
          `Probá “Zeus”, “Pragmatic” o “depósito”…`,
          `¿Qué querés jugar hoy?`,
        ][(e.cmdN || 0) % 3],
        ...(() => {
          let t = (e) =>
              `https://web.whatsapp.com/send?phone=5491100000000&text=` +
              encodeURIComponent(e),
            n = t(`Hola, soy @martina.r y necesito ayuda.`),
            i = {
              hist: `M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2`,
              wa: `M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z`,
              op: `M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z`,
              out: `M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 16l-4-4 4-4M6 12h10`,
              close: `M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM5.6 5.6l12.8 12.8`,
            },
            a = [
              [`hist`, `Historial de movimientos`, `Depósitos, retiros y bono`],
              [`wa`, `Ayuda por WhatsApp`, `Abre WhatsApp Web`],
              [`op`, `Dejar opinión`, `Contanos cómo te va`],
              [`out`, `Cerrar sesión`, ``],
              [`close`, `Cerrar cuenta`, `Baja definitiva`],
            ].map((e, t) => {
              let r = e[0] === `wa`,
                a = e[0] === `close`;
              return {
                l: e[1],
                s: e[2],
                icon: i[e[0]],
                href: r ? n : void 0,
                target: r ? `_blank` : void 0,
                go: r
                  ? () =>
                      this.setState({
                        umOpen: !1,
                      })
                  : () => this.umAct(e[0]),
                fg: a ? `var(--br-peligro,#FF7A5C)` : I,
                ibg: a
                  ? `rgba(var(--br-p-rgb,255,91,20),.12)`
                  : r
                    ? `var(--br-p,#FF5B14)`
                    : `var(--br-superficie-3,#1E1B18)`,
                ifg: a
                  ? `var(--br-peligro,#FF7A5C)`
                  : r
                    ? `var(--br-tinta,#121110)`
                    : I,
                arr: r ? `↗` : `›`,
                sep: e[0] === `out` ? `1px solid var(--br-linea,#2B2724)` : `0`,
                mt: e[0] === `out` ? `6px` : `0`,
                dl: t * 0.045 + 0.08 + `s`,
              };
            }),
            o = [
              [`dep`, `Depósito D-1042`, 1e4, `Hoy · 11:31`, `Acreditado`],
              [`bono`, `Bono de bienvenida`, 5e3, `Hoy · 11:31`, `Disponible`],
              [`ret`, `Retiro R-1038`, 8e3, `Ayer · 22:10`, `Transferido`],
              [`dep`, `Depósito D-1035`, 15e3, `Ayer · 19:02`, `Acreditado`],
              [`dep`, `Depósito D-1029`, 5e3, `28 sep · 14:40`, `Rechazado`],
              [`ret`, `Retiro R-1021`, 2e4, `26 sep · 21:15`, `Transferido`],
              [`dep`, `Depósito D-1017`, 25e3, `25 sep · 10:05`, `Acreditado`],
            ];
          e.req &&
            e.req.id !== `D-1042` &&
            o.unshift([
              e.req.type === `ret` ? `ret` : `dep`,
              (e.req.type === `ret` ? `Retiro ` : `Depósito `) + e.req.id,
              e.req.amt,
              `Hoy · ` + (e.req.t[0] || ``),
              e.req.stage >= 3
                ? e.req.type === `ret`
                  ? `Transferido`
                  : `Acreditado`
                : `Pendiente`,
            ]);
          let s = [`all`, `dep`, `ret`, `bono`][e.hF],
            c = o.filter((e) => s === `all` || e[0] === s),
            l = (e) =>
              e === `Rechazado`
                ? [
                    `rgba(var(--br-p-rgb,255,91,20),.12)`,
                    `var(--br-peligro,#FF7A5C)`,
                  ]
                : e === `Pendiente`
                  ? [`var(--br-linea,#2B2724)`, `var(--br-texto,#F3E9D8)`]
                  : [
                      `rgba(var(--br-texto-rgb,243,233,216),.1)`,
                      `var(--br-texto-2,#D8CDBD)`,
                    ],
            u = [
              ``,
              `Malísimo`,
              `Puede mejorar`,
              `Está bien`,
              `Muy bueno`,
              `¡Excelente!`,
            ],
            d = e.opHov || e.opStars,
            f = (e) => ({
              bd: e ? F : `var(--br-linea-fuerte,#3A3530)`,
              bg: e ? `rgba(var(--br-p-rgb,255,91,20),.14)` : `transparent`,
              fg: e ? `var(--br-p-palido,#FFB592)` : I,
            }),
            p = e.ccTxt.trim().toUpperCase() === `CERRAR`,
            m = e.chatMsgs.map((n, r) => {
              e.chatMsgs.length - 1;
              let i = n.act;
              return {
                t: n.t,
                al: n.me ? `flex-end` : `flex-start`,
                bg: n.me ? F : `var(--br-burbuja,#1C1917)`,
                fg: n.me ? P : I,
                bd: n.me ? F : `var(--br-linea,#2B2724)`,
                rad: n.me ? `18px 18px 6px 18px` : `18px 18px 18px 6px`,
                anim:
                  (n.me ? `ucMsgR` : `ucMsgL`) +
                  ` .42s cubic-bezier(.2,.9,.25,1.2) both`,
                meta: n.me ? n.at + ` · Visto` : `Caro · ` + n.at,
                hasAct: !!i,
                actL:
                  i === `dep`
                    ? `Pedir depósito`
                    : i === `ret`
                      ? `Pedir retiro`
                      : i === `wa`
                        ? `Seguir por WhatsApp Web`
                        : i === `hist`
                          ? `Ver historial`
                          : ``,
                href:
                  i === `wa`
                    ? t(
                        `Hola, soy @martina.r. Vengo del chat: ` +
                          (
                            e.chatMsgs.filter((e) => e.me).slice(-1)[0] || {
                              t: ``,
                            }
                          ).t,
                      )
                    : void 0,
                target: i === `wa` ? `_blank` : void 0,
                go:
                  i === `dep`
                    ? () => {
                        (this.closeChat(), this.newReq());
                      }
                    : i === `ret`
                      ? () => {
                          (this.closeChat(), this.openM(`ret`));
                        }
                      : i === `hist`
                        ? () => {
                            (this.closeChat(),
                              this.setState({
                                sheet: `hist`,
                                hF: 0,
                              }));
                          }
                        : void 0,
              };
            }),
            h = e.chatOpen && e.chatPh !== `out`,
            g = r ? `92px` : `26px`,
            _ = r ? `14px` : `26px`;
          return {
            umOpen: e.umOpen,
            umToggle: () =>
              this.setState((e) => ({
                umOpen: !e.umOpen,
              })),
            umClose: () =>
              this.setState({
                umOpen: !1,
              }),
            umRing: e.umOpen ? `2px` : `0px`,
            umRing2: e.umOpen ? `7px` : `0px`,
            umW: r ? `min(310px,calc(100vw - 28px))` : `310px`,
            umBal: L(e.bal),
            umItems: a,
            waWeb: n,
            sheetOn: !!e.sheet,
            closeSheet: () =>
              this.setState({
                sheet: null,
              }),
            sheetAl: r ? `flex-end` : `center`,
            sheetPad: r ? `0` : `24px`,
            sheetRad: r ? `28px 28px 0 0` : `28px`,
            sheetMax: e.sheet === `hist` ? `560px` : `480px`,
            sheetEy:
              e.sheet === `hist`
                ? `TU CUENTA`
                : e.sheet === `op`
                  ? `TU OPINIÓN`
                  : `ZONA DE CUIDADO`,
            sheetT:
              e.sheet === `hist`
                ? `Historial de movimientos`
                : e.sheet === `op`
                  ? `¿Cómo te está yendo?`
                  : `Cerrar cuenta`,
            isHist: e.sheet === `hist`,
            isOp: e.sheet === `op`,
            isClose: e.sheet === `close`,
            hSum: [
              {
                l: `DEPOSITADO`,
                v: L(
                  o
                    .filter((e) => e[0] === `dep` && e[4] !== `Rechazado`)
                    .reduce((e, t) => e + t[2], 0),
                ),
                bg: `var(--br-texto,#F3E9D8)`,
                fg: P,
              },
              {
                l: `RETIRADO`,
                v: L(
                  o.filter((e) => e[0] === `ret`).reduce((e, t) => e + t[2], 0),
                ),
                bg: F,
                fg: P,
              },
            ],
            hTabs: [`Todos`, `Depósitos`, `Retiros`, `Bono`].map((t, n) => ({
              l: t,
              fg: e.hF === n ? P : Be,
              go: () =>
                this.setState({
                  hF: n,
                }),
            })),
            hSeg: `calc(4px + (100% - 8px) * ` + e.hF / 4 + `)`,
            hRows: c.map((e, t) => {
              let n = l(e[4]);
              return {
                l: e[1],
                d: e[3],
                ic: e[0] === `dep` ? `↓` : e[0] === `ret` ? `↑` : `★`,
                ibg:
                  e[0] === `dep`
                    ? `var(--br-texto,#F3E9D8)`
                    : e[0] === `ret`
                      ? `var(--br-superficie-3,#1E1B18)`
                      : F,
                ifg: e[0] === `ret` ? I : P,
                a: (e[0] === `ret` ? `−` : `+`) + L(e[2]),
                ac:
                  e[4] === `Rechazado`
                    ? Be
                    : e[0] === `ret`
                      ? I
                      : `var(--br-p-claro,#FF8A4C)`,
                st: e[4],
                sbg: n[0],
                sfg: n[1],
                dl: t * 0.04 + `s`,
              };
            }),
            opForm: !e.opSent,
            opDone: e.opSent,
            opStarsL: [1, 2, 3, 4, 5].map((e) => ({
              c: e <= d ? F : `var(--br-tenue,#4A3F36)`,
              fill: e <= d ? F : `none`,
              sc: e <= d ? (e === d ? `1.18` : `1.05`) : `1`,
              go: () =>
                this.setState({
                  opStars: e,
                }),
              hov: () =>
                this.setState({
                  opHov: e,
                }),
            })),
            opLeave: () =>
              this.setState({
                opHov: 0,
              }),
            opLabel: d ? u[d] : `Tocá las estrellas`,
            opLc: d ? I : Be,
            opTagsL: [
              `Juegos`,
              `Depósitos`,
              `Retiros`,
              `Bono`,
              `Atención`,
              `La app`,
            ].map((t) => ({
              l: t,
              ...f(!!e.opTags[t]),
              go: () =>
                this.setState((e) => ({
                  opTags: {
                    ...e.opTags,
                    [t]: !e.opTags[t],
                  },
                })),
            })),
            opTxt: e.opTxt,
            onOpTxt: (e) =>
              this.setState({
                opTxt: e.target.value,
              }),
            opBtnBg: e.opStars ? F : `var(--br-linea,#2B2724)`,
            opBtnFg: e.opStars ? P : Be,
            opSend: () => {
              if (!this.state.opStars) {
                this.toast(`Elegí de 1 a 5 estrellas`);
                return;
              }
              this.setState({
                opSent: !0,
              });
            },
            ccHasBal: e.bal > 0,
            ccBal: L(e.bal),
            ccBalTxt:
              e.bal > 0
                ? `Todavía tenés ` + L(e.bal) + ` de saldo.`
                : `No tenés saldo para retirar.`,
            ccWhyL: [
              `Juego demasiado`,
              `No me gustan los juegos`,
              `Problemas con pagos`,
              `Me voy a otro sitio`,
              `Otro`,
            ].map((t, n) => ({
              l: t,
              ...f(e.ccWhy === n),
              go: () =>
                this.setState({
                  ccWhy: n,
                }),
            })),
            ccTxt: e.ccTxt,
            onCcTxt: (e) =>
              this.setState({
                ccTxt: e.target.value,
              }),
            ccBd: p ? F : `var(--br-linea,#2B2724)`,
            ccBtnBg: p ? `var(--br-p,#FF5B14)` : `var(--br-linea,#2B2724)`,
            ccBtnFg: p ? P : Be,
            ccCur: p ? `pointer` : `not-allowed`,
            ccGo: () => {
              p &&
                this.setState({
                  sheet: null,
                  outMode: `closed`,
                  chatOpen: !1,
                });
            },
            outOn: !!e.outMode,
            outT: e.outMode === `closed` ? `Cuenta cerrada` : `Cerraste sesión`,
            outS:
              e.outMode === `closed`
                ? `Recibimos tu pedido de baja. Si fue un error, escribinos por WhatsApp dentro de las próximas 48 h.`
                : `Gracias por jugar en ` +
                  (this.props.marcaNombre || `RushyBet`) +
                  `. Te esperamos de vuelta.`,
            outBtn:
              e.outMode === `closed` ? `Volver al inicio` : `Ingresar de nuevo`,
            outBack: () =>
              this.setState({
                outMode: null,
              }),
            chatOpen: e.chatOpen,
            chatAnim:
              e.chatPh === `out`
                ? `ucChatOut .42s cubic-bezier(.6,0,.4,1) both`
                : `ucChatIn .62s cubic-bezier(.2,.9,.2,1) both`,
            chatR: r ? `8px` : `26px`,
            chatB: r ? `164px` : `100px`,
            chatW: r ? `calc(100vw - 16px)` : `384px`,
            chatH: r ? `calc(100vh - 230px)` : `min(620px,calc(100vh - 140px))`,
            chatStatus: e.chatTyping
              ? `Caro está escribiendo…`
              : `En línea · responde en ~2 min`,
            chatCtx:
              `Solicitud ` +
              e.req.id +
              ` · ` +
              (e.req.stage >= 3
                ? e.req.type === `ret`
                  ? `Transferida`
                  : `Acreditada`
                : `En revisión`) +
              ` · ` +
              L(e.req.amt),
            chatCtxPct: Math.round((Math.min(3, e.req.stage) / 3) * 100) + `%`,
            chatRef: this.chatRef,
            chatList: m,
            chatTyping: e.chatTyping,
            chatChips: [
              `Quiero depositar`,
              `¿Cómo uso el bono?`,
              `Estado de mi retiro`,
              `Ver mis movimientos`,
              `Hablar con una persona`,
            ].map((e, t) => ({
              l: e,
              dl: t * 0.05 + 0.3 + `s`,
              go: () => this.chatSend(e),
            })),
            chatQ: e.chatQ,
            onChatQ: (e) =>
              this.setState({
                chatQ: e.target.value,
              }),
            onChatKey: (e) => {
              e.key === `Enter` && (e.preventDefault(), this.chatSend());
            },
            chatSendBtn: () => this.chatSend(),
            sendBg: e.chatQ.trim() ? F : `var(--br-linea,#2B2724)`,
            sendFg: e.chatQ.trim() ? P : Be,
            sendSc: e.chatQ.trim() ? `1` : `.92`,
            chatTeaser: e.chatTeaser && !e.chatOpen && !e.lOpen && !e.outMode,
            hideTeaser: () =>
              this.setState({
                chatTeaser: !1,
              }),
            openChat: this.openChat,
            closeChat: this.closeChat,
            toggleChat: () => (h ? this.closeChat() : this.openChat()),
            teaseR: r ? `84px` : `98px`,
            teaseB: r ? `96px` : `32px`,
            fabR: _,
            fabB: g,
            fabD: e.lOpen || e.outMode ? `none` : `block`,
            fabBg: h ? `var(--br-texto,#F3E9D8)` : F,
            fabFg: P,
            icoA: +!h,
            icoAr: h ? `-90deg` : `0deg`,
            icoAs: h ? `.5` : `1`,
            icoB: +!!h,
            icoBr: h ? `0deg` : `90deg`,
            icoBs: h ? `1` : `.5`,
            chatBadge: !h && e.chatUnread > 0,
            chatUnread: String(e.chatUnread),
            chatPing: !h && e.chatUnread > 0,
          };
        })(),
        cmdOpen: e.cmdOpen,
        cmdQ: e.cmdQ,
        onCmdQ: (e) =>
          this.setState({
            cmdQ: e.target.value,
            cmdIdx: 0,
          }),
        cmdGroups: ee,
        cmdEmpty: e.cmdOpen && x.length === 0,
        stop: (e) => e.stopPropagation(),
        lOpen: e.lOpen,
        closeLaunch: this.closeLaunch,
        lRef: this.lRef,
        frameRef: this.frameRef,
        lFull: e.lFull,
        toggleFull: this.toggleFull,
        frameH: e.lFull
          ? `auto`
          : r
            ? `calc(100vh - 150px)`
            : `calc(100vh - 130px)`,
        frameM: e.lFull ? `0` : `0 clamp(8px,1.6vw,20px) 18px`,
        frameR: e.lFull ? `0` : `26px`,
        framePos: e.lFull ? `fixed` : `relative`,
        frameInset: e.lFull ? `0` : `auto`,
        frameZ: e.lFull ? `90` : `1`,
        frameBd: e.lFull ? `transparent` : `var(--br-linea,#2B2724)`,
        moreOn: !e.lFull && !!E,
        moreSub: E ? `Más de ` + We[E.vendorCode] + ` y parecidos` : ``,
        moreCols: r
          ? `repeat(3,minmax(0,1fr))`
          : `repeat(auto-fill,minmax(150px,1fr))`,
        moreGames: E
          ? Ge.filter((e) => e.gameCode !== E.gameCode && !e.maint)
              .sort(
                (e, t) =>
                  (t.vendorCode === E.vendorCode) -
                    (e.vendorCode === E.vendorCode) ||
                  (t.gameType === E.gameType) - (e.gameType === E.gameType) ||
                  e.pop - t.pop,
              )
              .slice(0, r ? 9 : 16)
              .map((t) => ({
                name: t.gameName,
                vendor: We[t.vendorCode],
                art: t.art,
                bg: t.bg,
                fg: t.fg,
                hasImg: !!t.img,
                imgUrl: t.img ? `url("` + t.img + `")` : `none`,
                tag:
                  t.vendorCode === E.vendorCode
                    ? `MISMO PROVEEDOR`
                    : t.gameType === 1
                      ? `SLOT`
                      : `EN VIVO`,
                go: () => this.launch(t.gameCode, e.lDemo),
              }))
          : [],
        lName: E ? E.gameName : ``,
        lVendor: E ? We[E.vendorCode] : ``,
        lType: E ? (E.gameType === 1 ? `Slot` : `En vivo`) : ``,
        lArt: E ? E.art : ``,
        lBg: E ? E.bg : F,
        lFg: E ? E.fg : P,
        lArtC: E && E.bg !== P ? E.bg : F,
        lLoading: typeof ie == `number`,
        lReady: ie === `ready`,
        lMaint: ie === `maint`,
        lNoFunds: ie === `nofunds`,
        lPct: e.lPct,
        lSteps: [
          `Solicitando sesión de juego`,
          `Conectando con ` + (E ? We[E.vendorCode] : ``),
          `Cargando juego`,
        ].map((e, t) => {
          let n =
            typeof ie != `number` || t < ie
              ? `done`
              : t === ie
                ? `active`
                : `todo`;
          return {
            l: e,
            mark: n === `done` ? `✓` : ``,
            bg: n === `done` ? F : `transparent`,
            bd: n === `todo` ? `var(--br-linea-fuerte,#3A3530)` : F,
            fg: n === `todo` ? `var(--br-texto-4,#7D746A)` : I,
          };
        }),
        launchInfo:
          `launchUrl · channel=` +
          (r ? `mobile` : `desktop`) +
          ` · isDemo=` +
          (e.lDemo ? `true` : `false`) +
          (E ? ` · gameCode=` + E.gameCode : ``),
        demoBg: e.lDemo ? F : `transparent`,
        demoX: e.lDemo ? `20px` : `2px`,
        toggleDemo: () =>
          this.setState((e) => ({
            lDemo: !e.lDemo,
            lRound: ``,
            lPhase: e.lPhase === `nofunds` ? `ready` : e.lPhase,
          })),
        simRound: this.simRound,
        lRoundL:
          e.lRound ||
          (e.lDemo
            ? `Modo demo · sin saldo real`
            : `Jugando con ` +
              (g ? `bono · ` + L(e.bonus) : `saldo real · ` + L(e.bal))),
        depFromGame: () => {
          (this.closeLaunch(), this.newReq());
        },
        bTabs: [`Todas`, `Grandes ganancias`, `Mis apuestas`].map((t, n) => ({
          l: t,
          fg: e.bTab === n ? P : Be,
          onClick: () =>
            this.setState({
              bTab: n,
            }),
        })),
        bSeg: `calc(4px + (100% - 8px) * ${e.bTab / 3})`,
        bCols: r
          ? `minmax(0,1.6fr) minmax(0,1fr) 72px minmax(0,1fr)`
          : `minmax(0,2fr) minmax(0,1fr) 60px minmax(0,1fr) 104px minmax(0,1fr)`,
        bColD: r ? `none` : `block`,
        betList: (() => {
          let t = React.createElement,
            n = (e.bTab === 0 ? e.bets : e.bTab === 1 ? e.big : e.myBets).slice(
              0,
              r ? 6 : 10,
            ),
            i = r
              ? `minmax(0,1.6fr) minmax(0,1fr) 72px minmax(0,1fr)`
              : `minmax(0,2fr) minmax(0,1fr) 60px minmax(0,1fr) 104px minmax(0,1fr)`,
            a = (e) => e + ` var(--fb,Oswald),sans-serif`;
          return t(
            `div`,
            {
              key: `t` + e.bTab,
            },
            n.map((n, o) => {
              let s = Ke[n.g],
                c = n.pay > n.bet,
                l = n.u === `Oculto`,
                u = n.mult >= 100 ? 3 : n.mult >= 10 ? 2 : +(n.mult >= 1),
                d = Math.min(
                  100,
                  (Math.log10(n.mult + 1) / Math.log10(251)) * 100,
                ),
                f = t(
                  `span`,
                  {
                    style: {
                      position: `relative`,
                      width: 32,
                      height: 42,
                      flex: `none`,
                      borderRadius: 8,
                      overflow: `hidden`,
                      background: s.bg,
                      color: s.fg,
                      display: `grid`,
                      placeItems: `center`,
                      font: `700 13px var(--fd,Oswald),sans-serif`,
                    },
                  },
                  s.art,
                  s.img
                    ? t(`span`, {
                        style: {
                          position: `absolute`,
                          inset: 0,
                          backgroundImage: `url("` + s.img + `")`,
                          backgroundSize: `cover`,
                          backgroundPosition: `center`,
                        },
                      })
                    : null,
                );
              return t(
                `div`,
                {
                  key: n.id,
                  onClick: () => this.launch(n.g, !1),
                  style: {
                    display: `grid`,
                    gridTemplateColumns: i,
                    gap: 12,
                    padding: `9px 18px`,
                    alignItems: `center`,
                    borderBottom: `1px solid var(--br-fila-linea,#1C1A18)`,
                    cursor: `pointer`,
                    animation: `rbRowIn .75s cubic-bezier(.2,.8,.2,1) both`,
                    animationDelay:
                      (e.bTab === 0 && o === 0 ? 0 : o * 45) + `ms`,
                    transformOrigin: `50% 0`,
                  },
                },
                t(
                  `div`,
                  {
                    style: {
                      display: `flex`,
                      alignItems: `center`,
                      gap: 10,
                      minWidth: 0,
                    },
                  },
                  f,
                  t(
                    `div`,
                    {
                      style: {
                        minWidth: 0,
                        display: `flex`,
                        flexDirection: `column`,
                        gap: 1,
                      },
                    },
                    t(
                      `span`,
                      {
                        style: {
                          font: a(`600 14px`),
                          whiteSpace: `nowrap`,
                          overflow: `hidden`,
                          textOverflow: `ellipsis`,
                        },
                      },
                      s.gameName,
                    ),
                    t(
                      `span`,
                      {
                        style: {
                          font: a(`500 11px`),
                          color: `var(--br-texto-4,#7D746A)`,
                        },
                      },
                      We[s.vendorCode],
                    ),
                  ),
                ),
                r
                  ? null
                  : t(
                      `span`,
                      {
                        style: {
                          display: `flex`,
                          alignItems: `center`,
                          gap: 6,
                          font: a(`500 13px`),
                          color:
                            n.u === `Vos`
                              ? F
                              : l
                                ? `var(--br-texto-4,#7D746A)`
                                : I,
                          whiteSpace: `nowrap`,
                          overflow: `hidden`,
                        },
                      },
                      l
                        ? t(
                            `svg`,
                            {
                              viewBox: `0 0 24 24`,
                              width: 12,
                              height: 12,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: 2.4,
                            },
                            t(`path`, {
                              d: `M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3`,
                            }),
                          )
                        : null,
                      l ? `Oculto` : n.u,
                    ),
                r
                  ? null
                  : t(
                      `span`,
                      {
                        style: {
                          font: a(`500 13px`),
                          color: `var(--br-texto-4,#7D746A)`,
                          fontVariantNumeric: `tabular-nums`,
                        },
                      },
                      n.t,
                    ),
                t(
                  `span`,
                  {
                    style: {
                      textAlign: `right`,
                      font: a(`600 14px`),
                      fontVariantNumeric: `tabular-nums`,
                    },
                  },
                  L(n.bet),
                ),
                t(
                  `div`,
                  {
                    style: {
                      display: `flex`,
                      flexDirection: `column`,
                      alignItems: `flex-end`,
                      gap: 5,
                    },
                  },
                  t(
                    `span`,
                    {
                      style: {
                        font: a(`700 12px`),
                        fontVariantNumeric: `tabular-nums`,
                        padding: `4px 8px`,
                        borderRadius: 7,
                        background: [
                          `transparent`,
                          `var(--br-linea,#2B2724)`,
                          F,
                          P,
                        ][u],
                        color: [`var(--br-texto-4,#7D746A)`, I, P, F][u],
                        border:
                          u === 3
                            ? `1px solid var(--br-p,#FF5B14)`
                            : u === 0
                              ? `1px solid var(--br-linea,#2B2724)`
                              : `1px solid transparent`,
                        boxShadow:
                          u === 3
                            ? `0 0 14px rgba(var(--br-p-rgb,255,91,20),.5)`
                            : `none`,
                      },
                    },
                    n.mult.toFixed(2) + `×`,
                  ),
                  t(
                    `span`,
                    {
                      style: {
                        width: 72,
                        height: 3,
                        borderRadius: 2,
                        background: `var(--br-linea,#2B2724)`,
                        overflow: `hidden`,
                        display: `block`,
                      },
                    },
                    t(`span`, {
                      style: {
                        display: `block`,
                        height: `100%`,
                        width: d + `%`,
                        background: u >= 2 ? F : `var(--br-gris,#6A5F52)`,
                        borderRadius: 2,
                      },
                    }),
                  ),
                ),
                t(
                  `span`,
                  {
                    style: {
                      textAlign: `right`,
                      font: a(`700 14px`),
                      fontVariantNumeric: `tabular-nums`,
                      color: c
                        ? `var(--br-p-claro,#FF8A4C)`
                        : `var(--br-texto-4,#7D746A)`,
                    },
                  },
                  c ? `+` + L(n.pay) : n.pay > 0 ? L(n.pay) : `−` + L(n.bet),
                ),
              );
            }),
          );
        })(),
        bGrid: t < 1e3 ? `1fr` : `360px minmax(0,1fr)`,
        kBet: L(e.kBet),
        kPay: L(e.kPay),
        kCount: e.kCount.toLocaleString(`es-AR`),
        kRtp: ((e.kPay / e.kBet) * 100).toFixed(1) + `%`,
        kMax: C ? C.mult.toFixed(2) + `×` : `—`,
        kMaxGame: C ? Ke[C.g].gameName + ` · ` + C.u : ``,
        stL: e.bPaused ? `En pausa` : `En vivo`,
        stLU: e.bPaused ? `EN PAUSA` : `EN VIVO`,
        stSub: e.bPaused
          ? `Sacá el mouse para seguir`
          : `Nueva apuesta cada 2 s`,
        stBg: e.bPaused
          ? `var(--br-tarjeta,#131110)`
          : `rgba(var(--br-p-rgb,255,91,20),.1)`,
        stBd: e.bPaused
          ? `var(--br-linea,#2B2724)`
          : `rgba(var(--br-p-rgb,255,91,20),.5)`,
        stLc: e.bPaused
          ? `var(--br-texto-4,#7D746A)`
          : `var(--br-p-claro,#FF8A4C)`,
        stDot: e.bPaused ? null : this._pulse,
        tblBd: e.bPaused ? `var(--br-p,#FF5B14)` : `var(--br-linea,#2B2724)`,
        bPauseOn: () =>
          this.setState({
            bPaused: !0,
          }),
        bPauseOff: () =>
          this.setState({
            bPaused: !1,
          }),
        twBg: w ? w.bg : P,
        twFg: w ? w.fg : I,
        twArt: w ? w.art : ``,
        twArtD: w && w.img ? `none` : `block`,
        twHasImg: !!(w && w.img),
        twImg: w && w.img ? `url("` + w.img + `")` : `none`,
        twPat: te[0],
        twPatSize: te[1],
        twMult: C ? C.mult.toFixed(2) + `×` : ``,
        twPay: C ? `+` + L(C.pay) : ``,
        twUser: C ? (C.u === `Oculto` ? `Jugador oculto` : C.u) : ``,
        twName: w ? w.gameName : ``,
        twTime: C ? C.t : ``,
        twPlay: () => w && this.launch(w.gameCode, !1),
        betsEmpty: e.bTab === 2 && e.myBets.length === 0,
        rShift: e.rShift + `px`,
        mainGap: r ? `26px` : `44px`,
        secDir: r ? `column` : `row`,
        secAlign: r ? `stretch` : `flex-end`,
        secGap: r ? `14px` : `16px`,
        ctlW: r ? `100%` : `auto`,
        segW: r ? `100%` : `400px`,
        segW3: r ? `100%` : `300px`,
        sortFlex: r ? `1` : `none`,
        bleedM: r ? `0 -14px` : `0`,
        bleedP: r ? `14px` : `0`,
        liveCols: r ? `1fr` : `none`,
        liveBigD: r ? `none` : `grid`,
        liveGap: r ? `12px` : `16px`,
        liveAR: r ? `16 / 9` : `16 / 10`,
        vaultH: r ? `360px` : `320px`,
        stSubD: r ? `none` : `block`,
        heroR: r ? `26px` : `32px`,
        heroMinH: r ? `480px` : `600px`,
        barPad: r ? `14px 16px 16px` : `18px 24px 24px`,
        heroNameSize: r ? `20px` : `26px`,
        demoD: r ? `none` : `block`,
        mHome: r && e.mTab === `home` && !l,
        dHero: !l && (!r || e.mTab === `home`) ? `flex` : `none`,
        dWallet: !l && (!r || e.mTab === `wallet`) ? `flex` : `none`,
        dCat: l || !r || e.mTab === `casino` ? `flex` : `none`,
        dLive: !l && !r ? `flex` : `none`,
        dProv: !l && (!r || e.mTab === `home`) ? `flex` : `none`,
        dBets: !l && (!r || e.mTab === `home`) ? `flex` : `none`,
        dFoot: !l && (!r || e.mTab === `home`) ? `flex` : `none`,
        liveFlow: r ? `row` : `column`,
        vwCols: r ? `none` : `repeat(auto-fill,minmax(min(100%,300px),1fr))`,
        vwFlow: r ? `column` : `row`,
        vwGap: r ? `12px` : `16px`,
        popRow: Ge.filter((e) => e.gameType === 1)
          .sort((e, t) => e.pop - t.pop)
          .slice(0, 10)
          .map(o),
        liveRow: Ge.filter((e) => e.gameType === 2).map(o),
        goCasinoTab: () => {
          (this.setState({
            mTab: `casino`,
          }),
            window.scrollTo({
              top: 0,
            }));
        },
        goLiveTab: () => {
          (this.setState({
            mTab: `live`,
          }),
            window.scrollTo({
              top: 0,
            }));
        },
        goWalletTab: () => {
          (this.setState({
            mTab: `wallet`,
          }),
            window.scrollTo({
              top: 0,
            }));
        },
        bStatusLow:
          e.bonus <= 0 ? `agotado` : g ? `activo` : `se activa en $ 0`,
        surprise: this.surprise,
        sportsOpen: e.sportsOpen,
        ...(() => {
          let t = g && (e.dBal == null || e.dBal < 1),
            n = e.bFx;
          return {
            flipRot: t ? `180deg` : `0deg`,
            flipScale: n === 1 || n === 3 ? `1.04` : `1`,
            shineL: n >= 1 ? `130%` : `-60%`,
            shineT: n >= 1 ? `left 1.1s ease .5s` : `none`,
            bTagY: n === 1 || n === 3 ? `-50%` : `0%`,
            bTagS: n === 1 || n === 3 ? `1` : `.6`,
            bTagO: n === 1 || n === 3 ? `1` : `0`,
            bTagL: n === 3 ? `✓ VOLVISTE A TU SALDO` : `★ SE ACTIVÓ TU BONO`,
            bTagC: n === 3 ? `var(--br-texto,#F3E9D8)` : `var(--br-p,#FF5B14)`,
          };
        })(),
        openSports: this.openSports,
        closeSports: () =>
          this.setState({
            sportsOpen: !1,
          }),
        diceOpen: e.diceOpen,
        diceRolling: e.dPhase === `roll`,
        diceReveal: e.dPhase === `reveal`,
        dX: e.dRX + `deg`,
        dY: e.dRY + `deg`,
        diceN: e.dN,
        diceFaces: [
          [1, `rotateY(0deg)`],
          [2, `rotateY(90deg)`],
          [3, `rotateY(180deg)`],
          [4, `rotateY(-90deg)`],
          [5, `rotateX(90deg)`],
          [6, `rotateX(-90deg)`],
        ].map((t) => {
          let n = {
              1: [4],
              2: [0, 8],
              3: [0, 4, 8],
              4: [0, 2, 6, 8],
              5: [0, 2, 4, 6, 8],
              6: [0, 2, 3, 5, 6, 8],
            }[t[0]],
            r = t[0] === e.dN && e.dPhase === `reveal`;
          return {
            tf: t[1] + ` translateZ(65px)`,
            bg: r ? F : I,
            pc: r ? P : t[0] === 1 ? F : P,
            pips: Array.from(
              {
                length: 9,
              },
              (e, t) => ({
                o: n.includes(t) ? `1` : `0`,
              }),
            ),
          };
        }),
        dgName: T ? T.gameName : ``,
        dgVendor: T ? We[T.vendorCode] : ``,
        dgArt: T ? T.art : ``,
        dgBg: T ? T.bg : F,
        dgFg: T ? T.fg : P,
        dgHasImg: !!(T && T.img),
        dgImg: T && T.img ? `url("` + T.img + `")` : `none`,
        vaultRef: this.vaultRef,
        vTilt: this.vTilt,
        vUntilt: this.vUntilt,
        vDown: (e) => {
          this._px = e.clientX;
        },
        vUp: (e) => {
          if (this._px == null) return;
          let t = e.clientX - this._px;
          ((this._px = null),
            Math.abs(t) > 50 &&
              this.setState((e) => ({
                vRot: e.vRot + (t < 0 ? 1 : -1),
              })));
        },
        vPrev: () =>
          this.setState((e) => ({
            vRot: e.vRot - 1,
          })),
        vNext: () =>
          this.setState((e) => ({
            vRot: e.vRot + 1,
          })),
        toBonusFace: () => this.vGo(1),
        vDepth: (e.vW * 0.2887).toFixed(1) + `px`,
        vDepthNeg: (-e.vW * 0.2887).toFixed(1) + `px`,
        vRot: -e.vRot * 120 + `deg`,
        vFaceN: `0` + (ne + 1),
        vSeg: `calc(4px + (100% - 8px) * ${ne / 3})`,
        vTabs: [`Saldo`, `Bono`, `Solicitud`].map((e, t) => ({
          l: e,
          fg: ne === t ? P : Be,
          onClick: () => this.vGo(t),
        })),
        vShadow: [
          `rgba(var(--br-texto-rgb,243,233,216),.28)`,
          `rgba(var(--br-p-rgb,255,91,20),.55)`,
          `rgba(var(--br-texto-rgb,243,233,216),.2)`,
        ][ne],
        vReal: L(Math.round(e.dBal == null ? e.bal : e.dBal)),
        vBonus: L(Math.round(e.dBonus == null ? e.bonus : e.dBonus)),
        trackPct: Math.min(1, e.bal / 2e4) * 100 + `%`,
        sparkLine: re.line,
        sparkArea: re.area,
        sparkDelta: re.delta,
        sparkC: re.c,
        hasToast: !!e.toast,
        toast: e.toast,
        toastB: r ? `92px` : `28px`,
      };
    }
    render() {
      return renderBrasaLobbyLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { BrasaLobbyController, initializeLobbyController };
