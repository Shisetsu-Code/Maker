/**
 * azul / desktop-controller.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import { renderAzulDesktopLayout } from "./desktop-layout.js";
var AzulDesktopController;
function initializeDesktopController() {
  AzulDesktopController = class extends React.Component {
    state = {
      zoom: 1,
      modal: null,
      user: this.props.startLoggedIn ? `jugador` : null,
      query: ``,
      focus: !1,
      more: {
        slots: !1,
        live: !1,
        sports: !1,
      },
      active: `inicio`,
      toast: null,
      copied: !1,
      form: {
        name: ``,
        email: ``,
        pass: ``,
        code: `ROCCO12`,
      },
      error: ``,
      wallet: null,
      wStep: `form`,
      wAmount: 1e4,
      wAddr: ``,
      wHolder: ``,
      wErr: ``,
      wCopied: !1,
      bonusUsed: !1,
      cajero: null,
      view: `home`,
      catQuery: ``,
      catFocus: !1,
      balance: 125e3,
      menu: !1,
      mode: `real`,
      theater: !1,
      favs: {},
      game: null,
      recent: null,
      players: {
        live: 152,
        slots: 45,
        sports: 200,
      },
      recAtStart: !0,
      recAtEnd: !1,
    };
    recRef = React.createRef();
    rcRef = React.createRef();
    saveFavs(e) {
      try {
        localStorage.setItem(`rushybet_favs`, JSON.stringify(e));
      } catch {}
    }
    flipFav(e) {
      if (!this.state.user)
        return (
          (this.pendingGame = null),
          this.setState({
            modal: `register`,
            error: ``,
          })
        );
      let t = {
        ...this.state.favs,
      };
      (t[e.name] ? delete t[e.name] : (t[e.name] = !0),
        this.setState({
          favs: t,
        }),
        this.saveFavs(t),
        this.showToast(
          t[e.name] ? `Agregado a favoritos` : `Quitado de favoritos`,
        ));
    }
    fz(e) {
      let t = !!this.state.favs[e.name];
      return {
        favFill: t ? `rgb(255,59,79)` : `none`,
        favStroke: t ? `rgb(255,59,79)` : `rgb(255,255,255)`,
        toggleFav: (t) => {
          (t && (t.stopPropagation(), t.preventDefault()), this.flipFav(e));
        },
      };
    }
    chatRef = React.createRef();
    botReply(e) {
      let t = e.toLowerCase();
      return /carg|deposit/.test(t)
        ? `Para cargar tocá "+ Cargar" arriba, elegí el monto y transferí al alias que te aparece. Apenas el cajero lo confirma, se acredita.`
        : /retir|cobr/.test(t)
          ? `Los retiros se piden desde Cargar → Retirar. Poné el monto y tu CBU, CVU o alias y un cajero te lo transfiere en minutos.`
          : /bono|rocco/.test(t)
            ? `Con el código ROCCO12 duplicás tu primera carga. Se aplica solo en el primer depósito.`
            : /whats|humano|persona|asesor/.test(t)
              ? `Te paso con un asesor. También podés escribirnos directo por WhatsApp desde el botón verde en la pantalla de carga.`
              : `Gracias por escribirnos. Un asesor te responde en breve. ¿Es sobre cargas, retiros o bonos?`;
    }
    chatPush(e) {
      e.trim() &&
        (this.setState((t) => ({
          chatMsgs: (t.chatMsgs || this.chatSeed).concat({
            from: `me`,
            text: e,
          }),
          chatInput: ``,
          chatTyping: !0,
        })),
        clearTimeout(this.ct),
        (this.ct = setTimeout(
          () =>
            this.setState((t) => ({
              chatMsgs: t.chatMsgs.concat({
                from: `bot`,
                text: this.botReply(e),
              }),
              chatTyping: !1,
            })),
          1100,
        )));
    }
    brandName(e) {
      let t = this.props.marcaNombre;
      return typeof t == `string` && t.trim() !== `` ? t.trim() : e;
    }
    brandSite(e) {
      let t = this.brandName(``);
      return t === `` ? e : t.toLowerCase().replace(/\s+/g, ``) + `.com`;
    }
    get chatSeed() {
      return [
        {
          from: `bot`,
          text:
            `¡Hola! Soy el soporte de ` +
            this.brandName(`RushyBet`) +
            `. ¿En qué te ayudamos?`,
        },
      ];
    }
    seedFeed = [
      [`mati_22`, 12.4, 2e3, 2],
      [`sofi.b`, 3.1, 5e3, 7],
      [`elrengo`, 48, 1e3, 10],
      [`caro.m`, 2, 1e4, 0],
      [`juanpi`, 7.25, 2e3, 4],
      [`nico99`, 1.8, 5e3, 8],
      [`lulu.v`, 22.5, 1e3, 11],
      [`facu_10`, 5.6, 3e3, 5],
    ].map(([e, t, n, r], i) => ({
      id: `seed` + i,
      u: e,
      mult: t,
      bet: n,
      pay: t * n,
      gi: r,
      ts: Date.now() - (i * 3 + 1) * 6e4,
    }));
    get defaultRecent() {
      let e = this.liveGames,
        t = this.slotGames;
      return [
        {
          ...e[2],
          when: `Hace 5 min`,
        },
        {
          ...e[7],
          when: `Hace 1 h`,
        },
        {
          ...t[9],
          when: `Hace 3 h`,
        },
        {
          ...e[6],
          when: `Ayer`,
        },
        {
          ...t[11],
          when: `Ayer`,
        },
        {
          ...e[4],
          when: `Hace 2 días`,
        },
      ];
    }
    rollDice() {
      let e = this.state,
        t = (e, t) =>
          e.map((e) => ({
            ...e,
            kind: t,
          })),
        n =
          e.view === `slots`
            ? t(this.slotGames, `Slot`)
            : e.view === `envivo`
              ? t(this.liveGames, `En vivo`)
              : t(this.slotGames, `Slot`).concat(t(this.liveGames, `En vivo`)),
        r;
      do r = n[Math.floor(Math.random() * n.length)];
      while (n.length > 1 && e.rand && r.name === e.rand.name);
      (this.setState({
        diceRot: (e.diceRot || 0) + 720,
        rolling: !0,
        rand: e.rand,
      }),
        clearTimeout(this.dt),
        (this.dt = setTimeout(
          () =>
            this.setState({
              rand: r,
              rolling: !1,
            }),
          700,
        )));
    }
    openGame(e) {
      if (!this.state.user)
        return (
          (this.pendingGame = e),
          this.setState({
            modal: `register`,
            error: ``,
            rand: null,
          })
        );
      let t = this.state,
        n = [
          {
            ...e,
            when: `Recién`,
          },
        ]
          .concat((t.recent || []).filter((t) => t.name !== e.name))
          .slice(0, 6);
      (this.setState({
        view: `game`,
        game: e,
        prevView: t.view === `game` ? t.prevView || `home` : t.view,
        gLoading: !0,
        recent: n,
        rand: null,
        menu: !1,
      }),
        (this.lockUntil = Date.now() + 600),
        this.scroller().scrollTo({
          top: 0,
        }),
        clearTimeout(this.gt),
        (this.gt = setTimeout(
          () =>
            this.setState({
              gLoading: !1,
            }),
          1600,
        )));
    }
    afterLogin() {
      let e = this.pendingGame;
      ((this.pendingGame = null), e && setTimeout(() => this.openGame(e), 50));
    }
    openWallet(e) {
      this.setState({
        receipt: null,
        cajero:
          this.state.cajero ||
          this.cajeros[Math.floor(Math.random() * this.cajeros.length)],
        wallet: e,
        wStep: `form`,
        wErr: ``,
        menu: !1,
        wAmount: e === `deposit` ? 1e4 : 0,
        wAddr: ``,
        wHolder: ``,
        wCopied: !1,
      });
    }
    walletSubmit() {
      let e = this.state,
        t = e.wAmount || 0;
      if (e.wallet === `deposit`) {
        if (t < 1e3)
          return this.setState({
            wErr: `La carga mínima es de $1.000.`,
          });
        (this.setState({
          wStep: `assigning`,
          wErr: ``,
          cajero: this.cajeros[Math.floor(Math.random() * this.cajeros.length)],
          wCopied: !1,
        }),
          clearTimeout(this.wt),
          (this.wt = setTimeout(
            () =>
              this.setState({
                wStep: `alias`,
              }),
            1500,
          )));
        return;
      }
      if (t < 2e3)
        return this.setState({
          wErr: `El retiro mínimo es de $2.000.`,
        });
      if (t > e.balance)
        return this.setState({
          wErr: `No tenés saldo suficiente.`,
        });
      if (String(e.wAddr).trim().length < 6)
        return this.setState({
          wErr: `Ingresá un CBU, CVU o alias válido.`,
        });
      if (String(e.wHolder).trim().length < 3)
        return this.setState({
          wErr: `Ingresá el titular de la cuenta.`,
        });
      (this.setState({
        wStep: `pending`,
        wErr: ``,
      }),
        clearTimeout(this.wt),
        (this.wt = setTimeout(
          () =>
            this.setState((e) => ({
              wStep: `done`,
              balance: e.balance - t,
              lastAmt: t,
              lastBonus: 0,
            })),
          2200,
        )));
    }
    confirmTransfer() {
      (this.setState({
        wStep: `pending`,
      }),
        clearTimeout(this.wt),
        (this.wt = setTimeout(
          () =>
            this.setState((e) => {
              let t = e.wAmount || 0,
                n = e.bonusUsed ? 0 : t;
              return {
                wStep: `done`,
                balance: e.balance + t + n,
                lastAmt: t,
                lastBonus: n,
                bonusUsed: !0,
              };
            }),
          2200,
        )));
    }
    cajeros = [
      {
        name: `Martín`,
        alias: `rushy.caja.martin`,
        holder: `Martín Gómez`,
        bank: `Mercado Pago`,
      },
      {
        name: `Sofía`,
        alias: `rushy.pagos.sofi`,
        holder: `Sofía Ruiz`,
        bank: `Brubank`,
      },
      {
        name: `Nahuel`,
        alias: `rushyclub.nahu`,
        holder: `Nahuel Pereyra`,
        bank: `Ualá`,
      },
    ];
    openCat(e) {
      (this.setState({
        view: e,
        catQuery: ``,
        active: e,
      }),
        (this.lockUntil = Date.now() + 600),
        this.scroller().scrollTo({
          top: 0,
        }));
    }
    get slotGames() {
      let e = this.props.catalogoSlots;
      return (
        (!this.slotMerged || this.slotSource !== e) &&
          ((this.slotSource = e),
          (this.slotMerged = this.slotBase.map((t, n) => {
            let r = n < 8 && Array.isArray(e) ? e[n] : null;
            return !r || typeof r.name != `string` || r.name === ``
              ? t
              : {
                  ...t,
                  name: r.name,
                  provider: typeof r.provider == `string` ? r.provider : ``,
                  img: typeof r.img == `string` ? r.img : ``,
                };
          }))),
        this.slotMerged
      );
    }
    slotBase = [
      [`Nitro Nights`, `Hacksaw Gaming`],
      [`Gates of Olympus Super Scatter`, `Pragmatic Play`],
      [`Wanted Dead or a Wild`, `Hacksaw Gaming`],
      [`Starlight Princess Super Scatter`, `Pragmatic Play`],
      [`Zeus vs Hades`, `Pragmatic Play`],
      [`The Big Dog House`, `Pragmatic Play`],
      [`Club Tropicana Happy Hour`, `Pragmatic Play`],
      [`Mummy’s Jewels 100`, `Pragmatic Play`],
      [`Joker’s Jewels`, `Pragmatic Play`],
      [`Sugar Rush 1000`, `Pragmatic Play`],
      [`Sweet Bonanza 1000`, `Pragmatic Play`],
      [`Gates of Olympus 1000`, `Pragmatic Play`],
      [`5 Lions Megaways`, `Pragmatic Play`],
    ].map(([e, t], n) => ({
      name: e,
      provider: t,
      kind: `Slots`,
      img: n >= 8 ? `assets/rec-` + (n - 7) + `.png` : ``,
    }));
    liveGames = [
      [`Ruleta en Español`],
      [`Red Door Roulette`],
      [`Crazy Time`],
      [`XXXtreme Lightning Roulette`],
      [`Lightning Storm`],
      [`Ruleta Bola Rápida en Vivo`],
      [`Monopoly Live`],
      [`Blackjack`],
    ].map(([e], t) => ({
      name: e,
      provider: `Evolution`,
      kind: `En vivo`,
      img: `assets/vivo-` + (t + 1) + `.png`,
    }));
    recs = [1, 2, 3, 4, 5].map((e) => `assets/rec-` + e + `.png`);
    componentDidUpdate(e, t) {
      (this.chatRef.current &&
        (t.chatMsgs !== this.state.chatMsgs ||
          t.chatTyping !== this.state.chatTyping ||
          (!t.chatOpen && this.state.chatOpen)) &&
        (this.chatRef.current.scrollTop = 1e6),
        e.startLoggedIn !== this.props.startLoggedIn &&
          this.setState({
            user: this.props.startLoggedIn ? `jugador` : null,
            view: `home`,
            menu: !1,
          }));
    }
    componentDidMount() {
      try {
        let e = JSON.parse(localStorage.getItem(`rushybet_favs`) || `{}`);
        e &&
          typeof e == `object` &&
          this.setState({
            favs: e,
          });
      } catch {}
      ((this.fit = () =>
        this.setState({
          zoom: Math.min(1, window.innerWidth / 1920),
        })),
        (this.onScroll = (e) => {
          if (
            (e &&
              e.target &&
              e.target.nodeType === 1 &&
              e.target !== document.body &&
              e.target !== document.documentElement) ||
            this.state.view !== `home`
          )
            return;
          if (this.lockUntil && Date.now() < this.lockUntil) {
            this.lockUntil = Date.now() + 180;
            return;
          }
          let t = [`recomendados`, `slots`, `envivo`, `deportivas`],
            n = `inicio`,
            r = 140 * this.state.zoom + 40;
          (t.forEach((e) => {
            let t = document.getElementById(e);
            t && t.getBoundingClientRect().top <= r && (n = e);
          }),
            n !== this.state.active &&
              this.setState({
                active: n,
              }));
        }));
      let e = {
        live: [90, 700],
        slots: [25, 500],
        sports: [120, 400],
      };
      this.pi = setInterval(
        () =>
          this.setState((t) => {
            let n = {
              ...t.players,
            };
            return (
              Object.keys(n).forEach((t) => {
                Math.random() < 0.6 &&
                  (n[t] = Math.max(
                    e[t][0],
                    Math.min(e[t][1], n[t] + Math.round(Math.random() * 5 - 2)),
                  ));
              }),
              {
                players: n,
              }
            );
          }),
        2600,
      );
      let t = () => {
        let e = this.recRef.current;
        if (e && !this.recHover && !this.state.modal && !this.state.wallet) {
          this.recPos = (this.recPos || e.scrollLeft) + 0.3;
          let t = (e.scrollWidth - 48) / 2 + 10.75;
          (this.recPos >= t && (this.recPos -= t),
            (e.scrollLeft = this.recPos));
        } else e && (this.recPos = e.scrollLeft);
        this.raf = requestAnimationFrame(t);
      };
      this.raf = requestAnimationFrame(t);
      let n = [
        `tomi.r`,
        `agus_7`,
        `vale.p`,
        `rocio`,
        `santi22`,
        `mica.b`,
        `fede_ok`,
        `juli.m`,
        `brenda`,
        `lauti9`,
      ];
      ((this.fi = setInterval(() => {
        let e =
            Math.round(
              (Math.random() < 0.2
                ? 10 + Math.random() * 60
                : 1.2 + Math.random() * 8) * 100,
            ) / 100,
          t = [500, 1e3, 2e3, 5e3][Math.floor(Math.random() * 4)],
          r = {
            id: `w` + Date.now(),
            u: n[Math.floor(Math.random() * n.length)],
            mult: e,
            bet: t,
            pay: e * t,
            gi: Math.floor(Math.random() * 13),
            ts: Date.now(),
          };
        this.setState((e) => ({
          feed: [r].concat(e.feed || this.seedFeed).slice(0, 20),
          newId: r.id,
        }));
      }, 4500)),
        this.fit(),
        window.addEventListener(`resize`, this.fit),
        window.addEventListener(`scroll`, this.onScroll, {
          passive: !0,
          capture: !0,
        }));
    }
    scroller() {
      let e = document.body;
      return e.scrollHeight > e.clientHeight + 1 &&
        getComputedStyle(e).overflowY !== `visible`
        ? e
        : document.scrollingElement || document.documentElement;
    }
    componentWillUnmount() {
      (window.removeEventListener(`resize`, this.fit),
        window.removeEventListener(`scroll`, this.onScroll, {
          capture: !0,
        }),
        clearTimeout(this.tt),
        clearInterval(this.pi),
        cancelAnimationFrame(this.raf),
        clearTimeout(this.gt),
        clearTimeout(this.dt),
        clearTimeout(this.wt),
        clearInterval(this.fi),
        clearTimeout(this.ct));
    }
    scrollTo(e) {
      let t = this.scroller();
      if (e === `inicio`)
        return t.scrollTo({
          top: 0,
          behavior: `smooth`,
        });
      let n = document.getElementById(e);
      n &&
        t.scrollTo({
          top:
            n.getBoundingClientRect().top + t.scrollTop - 120 * this.state.zoom,
          behavior: `smooth`,
        });
    }
    showToast(e) {
      (clearTimeout(this.tt),
        this.setState({
          toast: e,
        }),
        (this.tt = setTimeout(
          () =>
            this.setState({
              toast: null,
            }),
          2200,
        )));
    }
    setForm(e, t) {
      this.setState((n) => ({
        form: {
          ...n.form,
          [e]: t,
        },
        error: ``,
      }));
    }
    submit() {
      let { form: e, modal: t } = this.state;
      if (t === `register` && !e.name.trim())
        return this.setState({
          error: `Elegí un nombre de usuario.`,
        });
      if (t !== `register` && !/.+@.+\..+/.test(e.email))
        return this.setState({
          error: `Ingresá un email válido.`,
        });
      if (e.pass.length < 6)
        return this.setState({
          error: `La contraseña debe tener al menos 6 caracteres.`,
        });
      if (t === `register` && !this.state.terms)
        return this.setState({
          error: `Tenés que confirmar que sos mayor de 18.`,
        });
      let n = (e.name.trim() || e.email.split(`@`)[0]).replace(/^@/, ``);
      (this.setState({
        user: n,
        modal: null,
        form: {
          name: ``,
          email: ``,
          pass: ``,
          code: `ROCCO12`,
        },
      }),
        this.afterLogin(),
        this.showToast(
          t === `register`
            ? `¡Bienvenido a ` + this.brandName(`RushyClub`) + `, @` + n + `!`
            : `Hola de nuevo, @` + n,
        ));
    }
    renderVals() {
      let e = this.state,
        t = e.more,
        n = (e, t, n = 0) =>
          Array.from(
            {
              length: t,
            },
            (t, r) => ({
              id: e + `-` + (r + 1 + n),
            }),
          ),
        r = (e) => () => {
          (this.setState({
            focus: !1,
            query: ``,
          }),
            this.scrollTo(e));
        },
        i = [`futbol`, `rugby`, `f1`, `hockey`, `basketball`, `ufc`],
        a = [`tenis`, `voley`, `béisbol`, `boxeo`, `golf`, `esports`],
        o = i.map((e, t) => ({
          id: `dep-` + (t + 1),
          label: e,
          img: t < 6 ? `assets/dep-` + e + `.png` : ``,
          noImg: t >= 6,
        })),
        s = [
          {
            label: `Slots`,
            kind: `Sección`,
            id: `slots`,
          },
          {
            label: `En vivo`,
            kind: `Sección`,
            id: `envivo`,
          },
          {
            label: `Deportivas`,
            kind: `Sección`,
            id: `deportivas`,
          },
          {
            label: `Ganadores`,
            kind: `Sección`,
            id: `ganadores`,
          },
          ...i.concat(a).map((e) => ({
            label: e,
            kind: `Deporte`,
            id: `deportivas`,
            sport: a.includes(e),
          })),
        ],
        c = e.query.trim().toLowerCase(),
        l = s
          .filter((e) => !c || e.label.toLowerCase().includes(c))
          .slice(0, 6)
          .map((t) => ({
            label: t.label,
            kind: t.kind,
            go: () => {
              (t.sport &&
                this.setState({
                  more: {
                    ...e.more,
                    sports: !0,
                  },
                }),
                r(t.id)());
            },
          })),
        u = (t) =>
          e.active === t
            ? `0 0 0 2px rgb(var(--rc-marca)), 0 0 16px rgba(var(--rc-marca),0.6)`
            : `none`,
        d = (t) => (n) => {
          (n && n.currentTarget && n.currentTarget.blur(),
            (this.lockUntil = Date.now() + 900),
            e.view === `home`
              ? (this.setState({
                  active: t,
                }),
                this.scrollTo(t))
              : (this.setState({
                  view: `home`,
                  active: t,
                  catQuery: ``,
                }),
                setTimeout(() => this.scrollTo(t), 60)));
        },
        f = e.view === `slots` ? this.slotGames : this.liveGames,
        p = e.game || this.liveGames[2],
        m = (e.catQuery || ``).trim().toLowerCase(),
        h = f
          .filter(
            (e) => !m || (e.name + ` ` + e.provider).toLowerCase().includes(m),
          )
          .map((e) => ({
            ...e,
            play: () => this.openGame(e),
            ...this.fz(e),
          })),
        g = (t) => () =>
          this.setState({
            more: {
              ...e.more,
              [t]: !e.more[t],
            },
          }),
        _ = e.modal === `register`;
      return {
        zoom: e.zoom,
        loggedOut: !e.user,
        loggedIn: !!e.user,
        user: e.user,
        goTop: () => {
          (e.view !== `home` &&
            this.setState({
              view: `home`,
              active: `inicio`,
            }),
            this.scrollTo(`inicio`));
        },
        walletOpen: !!e.wallet,
        isDeposit: e.wallet === `deposit`,
        isWithdraw: e.wallet === `withdraw`,
        closeWallet: () =>
          this.setState({
            wallet: null,
          }),
        toDeposit: () => this.openWallet(`deposit`),
        toWithdraw: () => this.openWallet(`withdraw`),
        wTabDepBg:
          e.wallet === `deposit` ? `rgb(var(--rc-marca))` : `transparent`,
        wTabWBg:
          e.wallet === `withdraw` ? `rgb(var(--rc-marca))` : `transparent`,
        wTabDepSh:
          e.wallet === `deposit`
            ? `0 4px 14px rgba(var(--rc-marca),0.45)`
            : `none`,
        wTabWSh:
          e.wallet === `withdraw`
            ? `0 4px 14px rgba(var(--rc-marca),0.45)`
            : `none`,
        wTabDepColor:
          e.wallet === `deposit`
            ? `rgb(255,255,255)`
            : `rgba(255,255,255,0.55)`,
        wTabWColor:
          e.wallet === `withdraw`
            ? `rgb(255,255,255)`
            : `rgba(255,255,255,0.55)`,
        wForm: e.wStep === `form`,
        wAssigning: e.wStep === `assigning`,
        wAlias: e.wStep === `alias`,
        wPending: e.wStep === `pending`,
        wDone: e.wStep === `done`,
        wAmountFmt: e.wAmount ? e.wAmount.toLocaleString(`es-AR`) : ``,
        wAmountMoney: ((e) => `$` + (e || 0).toLocaleString(`es-AR`))(
          e.wAmount,
        ),
        onWAmount: (e) =>
          this.setState({
            wAmount: parseInt(e.target.value.replace(/[^0-9]/g, ``) || `0`, 10),
            wErr: ``,
          }),
        onWKey: (e) => {
          e.key === `Enter` && this.walletSubmit();
        },
        wAmountLabel:
          e.wallet === `withdraw` ? `Monto a retirar` : `Monto a cargar`,
        wMinNote:
          e.wallet === `withdraw`
            ? `Mínimo $2.000. Te lo transfiere un cajero a tu cuenta.`
            : `Mínimo $1.000. Transferí desde una cuenta a tu nombre.`,
        wQuick: (e.wallet === `withdraw`
          ? [5e3, 1e4, 5e4, `max`]
          : [5e3, 1e4, 2e4, 5e4]
        ).map((t) => ({
          label: t === `max` ? `Todo` : `$` + t.toLocaleString(`es-AR`),
          bg: (t === `max` ? e.wAmount === e.balance : e.wAmount === t)
            ? `rgb(var(--rc-marca))`
            : `rgba(var(--rc-fondo),0.7)`,
          pick: () =>
            this.setState({
              wAmount: t === `max` ? e.balance : t,
              wErr: ``,
            }),
        })),
        showBonusNote: e.wallet === `deposit` && !e.bonusUsed,
        bonusAmt: ((e) => `$` + (e || 0).toLocaleString(`es-AR`))(e.wAmount),
        wAddr: e.wAddr,
        onWAddr: (e) =>
          this.setState({
            wAddr: e.target.value,
            wErr: ``,
          }),
        wHolder: e.wHolder,
        onWHolder: (e) =>
          this.setState({
            wHolder: e.target.value,
            wErr: ``,
          }),
        wErr: e.wErr,
        wSubmit: () =>
          e.wallet === `deposit`
            ? (e.wAmount || 0) < 1e3
              ? this.setState({
                  wErr: `La carga mínima es de $1.000.`,
                })
              : this.confirmTransfer()
            : this.walletSubmit(),
        confirmTransfer: () => this.confirmTransfer(),
        rcRef: this.rcRef,
        noReceipt: !e.receipt,
        hasReceipt: !!e.receipt,
        rcName: e.receipt ? e.receipt.name : ``,
        rcSize: e.receipt
          ? e.receipt.size > 1048576
            ? (e.receipt.size / 1048576).toFixed(1) + ` MB`
            : Math.max(1, Math.round(e.receipt.size / 1024)) + ` KB`
          : ``,
        rcThumb: e.receipt && e.receipt.url ? e.receipt.url : ``,
        rcBadge: e.receipt && !e.receipt.url ? `PDF` : ``,
        pickReceipt: () => this.rcRef.current && this.rcRef.current.click(),
        onReceipt: (t) => {
          let n = t.target.files && t.target.files[0];
          if (((t.target.value = ``), n)) {
            if (n.size > 10485760)
              return this.setState({
                wErr: `El archivo supera los 10 MB.`,
              });
            (e.receipt && e.receipt.url && URL.revokeObjectURL(e.receipt.url),
              this.setState({
                receipt: {
                  name: n.name,
                  size: n.size,
                  url: /^image\//.test(n.type) ? URL.createObjectURL(n) : ``,
                },
                wErr: ``,
              }));
          }
        },
        clearReceipt: () => {
          (e.receipt && e.receipt.url && URL.revokeObjectURL(e.receipt.url),
            this.setState({
              receipt: null,
            }));
        },
        wCta:
          e.wallet === `withdraw`
            ? `Solicitar retiro`
            : e.receipt
              ? `Enviar comprobante`
              : `Ya transferí`,
        cjName: e.cajero ? e.cajero.name : ``,
        cjInitial: e.cajero ? e.cajero.name.charAt(0) : ``,
        cjAlias: e.cajero ? e.cajero.alias : ``,
        cjHolder: e.cajero ? e.cajero.holder : ``,
        cjBank: e.cajero ? e.cajero.bank : ``,
        copyLabel: e.wCopied ? `Copiado` : `Copiar`,
        copyBg: e.wCopied ? `rgb(38,161,123)` : `rgb(var(--rc-marca))`,
        copyAlias: () => {
          try {
            navigator.clipboard &&
              navigator.clipboard.writeText(e.cajero.alias).catch(() => {});
          } catch {}
          this.setState({
            wCopied: !0,
          });
        },
        waLink:
          `https://wa.me/` +
          String(this.props.whatsappNumber ?? `5491100000000`).replace(
            /[^0-9]/g,
            ``,
          ) +
          `?text=` +
          encodeURIComponent(
            e.wallet === `withdraw`
              ? `Hola, pedí un retiro de ` +
                  ((e) => `$` + (e || 0).toLocaleString(`es-AR`))(e.wAmount) +
                  ` y todavía no me lo pasaron. Usuario: @` +
                  e.user
              : `Hola, pedí una carga de ` +
                  ((e) => `$` + (e || 0).toLocaleString(`es-AR`))(e.wAmount) +
                  (e.cajero ? ` al alias ` + e.cajero.alias : ``) +
                  ` y no me responden. Usuario: @` +
                  e.user,
          ),
        wPendingTitle:
          e.wallet === `withdraw`
            ? `Un cajero está procesando tu retiro…`
            : e.receipt
              ? `El cajero está revisando tu comprobante…`
              : `El cajero está verificando tu transferencia…`,
        wPendingSub:
          e.wallet === `withdraw`
            ? `Te transferimos ` +
              ((e) => `$` + (e || 0).toLocaleString(`es-AR`))(e.wAmount) +
              ` a ` +
              (e.wAddr || `tu cuenta`) +
              `. Suele tardar pocos minutos.`
            : `Apenas confirme tu transferencia de ` +
              ((e) => `$` + (e || 0).toLocaleString(`es-AR`))(e.wAmount) +
              `, se acredita el saldo.`,
        wDoneTitle:
          e.wallet === `withdraw` ? `Retiro enviado` : `¡Carga acreditada!`,
        wDoneSub:
          e.wallet === `withdraw`
            ? `El cajero te transfirió ` +
              ((e) => `$` + (e || 0).toLocaleString(`es-AR`))(e.lastAmt) +
              ` a ` +
              (e.wAddr || `tu cuenta`) +
              `.`
            : `Sumamos ` +
              ((e) => `$` + (e || 0).toLocaleString(`es-AR`))(e.lastAmt) +
              ` a tu saldo` +
              (e.lastBonus
                ? ` + ` +
                  ((e) => `$` + (e || 0).toLocaleString(`es-AR`))(e.lastBonus) +
                  ` de bono ROCCO12.`
                : `.`),
        chatOpen: !!e.chatOpen,
        chatUnread: !e.chatSeen,
        chatBtnBg: e.chatOpen
          ? `rgb(var(--rc-marca))`
          : `rgb(var(--rc-tarjeta))`,
        chatRef: this.chatRef,
        toggleChat: () =>
          this.setState({
            chatOpen: !e.chatOpen,
            chatSeen: !0,
            menu: !1,
          }),
        chatIconPath: e.chatOpen
          ? `M6 6l12 12M18 6 6 18`
          : `M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4A8.4 8.4 0 1 1 20.5 11.6z`,
        chatIconRot: e.chatOpen ? `90deg` : `0deg`,
        chatMsgs: (e.chatMsgs || this.chatSeed).map((e) => ({
          text: e.text,
          align: e.from === `me` ? `flex-end` : `flex-start`,
          bg:
            e.from === `me` ? `rgb(var(--rc-marca))` : `rgb(var(--rc-tarjeta))`,
          radius: e.from === `me` ? `14px 14px 4px 14px` : `14px 14px 14px 4px`,
        })),
        chatTyping: !!e.chatTyping,
        chatInput: e.chatInput || ``,
        onChatInput: (e) =>
          this.setState({
            chatInput: e.target.value,
          }),
        onChatKey: (t) => {
          t.key === `Enter` && this.chatPush(e.chatInput || ``);
        },
        chatSend: () => this.chatPush(e.chatInput || ``),
        chatQuick: [
          `Cómo cargo saldo`,
          `Mi retiro`,
          `Bono ROCCO12`,
          `Hablar con un asesor`,
        ].map((e) => ({
          label: e,
          send: () => this.chatPush(e),
        })),
        ...(() => {
          let t = this.slotGames
            .concat(this.liveGames)
            .filter((t) => e.favs[t.name]);
          return {
            favList: t.map((e) => ({
              ...e,
              img: e.img || ``,
              play: () => this.openGame(e),
              ...this.fz(e),
            })),
            favCount: t.length,
            hasFavs: t.length > 0,
            noFavs: t.length === 0,
          };
        })(),
        isHome: e.view === `home`,
        isCat: e.view === `slots` || e.view === `envivo`,
        isGame: e.view === `game`,
        balanceFmt: `$` + e.balance.toLocaleString(`es-AR`),
        userInitial: (e.user || `?`).charAt(0),
        menuOpen: !!e.menu,
        menuArrow: e.menu ? `180deg` : `0deg`,
        toggleMenu: () =>
          this.setState({
            menu: !e.menu,
          }),
        menuItems: [
          {
            label: `Mi perfil`,
            color: `rgb(255,255,255)`,
            go: () => {
              (this.setState({
                menu: !1,
              }),
                this.showToast(`Perfil próximamente`));
            },
          },
          {
            label: `Historial de apuestas`,
            color: `rgb(255,255,255)`,
            go: () => {
              (this.setState({
                menu: !1,
              }),
                this.showToast(`Historial próximamente`));
            },
          },
          {
            label: `Cargar saldo`,
            color: `rgb(255,255,255)`,
            go: () => this.openWallet(`deposit`),
          },
          {
            label: `Retirar`,
            color: `rgb(255,255,255)`,
            go: () => this.openWallet(`withdraw`),
          },
          {
            label: `Cerrar sesión`,
            color: `rgb(255,150,150)`,
            go: () => {
              (this.setState({
                user: null,
                menu: !1,
                view: `home`,
              }),
                this.showToast(`Sesión cerrada`));
            },
          },
        ],
        heroLine1: e.user ? `Hola de nuevo,` : `Bienvenido a :`,
        heroLine2: e.user ? `@` + e.user : this.brandName(`rushyclub`),
        brandName: this.brandName(`RushyBet`),
        brandSite: this.brandSite(`rushybet.com`),
        heroCtaLabel: e.user ? `cargar saldo` : `registrate`,
        heroCta: () =>
          e.user
            ? this.openWallet(`deposit`)
            : this.setState({
                modal: `register`,
                error: ``,
              }),
        showRecent: !!e.user,
        recent: (e.recent || this.defaultRecent).map((e) => ({
          ...e,
          play: () => this.openGame(e),
        })),
        gName: p.name,
        gProvider: p.provider,
        gImg: p.img || ``,
        gKind: p.kind || `Slots`,
        gLoading: !!e.gLoading,
        gReady: !e.gLoading,
        spinner: React.createElement(`div`, {
          style: {
            width: 48,
            height: 48,
            borderRadius: `50%`,
            border: `3px solid rgba(255,255,255,0.15)`,
            borderTopColor: `rgb(var(--rc-acento))`,
            animation: `rbspin .8s linear infinite`,
          },
        }),
        setReal: () =>
          this.setState({
            mode: `real`,
          }),
        setDemo: () =>
          this.setState({
            mode: `demo`,
          }),
        realBg: e.mode === `real` ? `rgb(var(--rc-marca))` : `transparent`,
        demoBg: e.mode === `demo` ? `rgb(var(--rc-marca))` : `transparent`,
        gModeLabel: e.mode === `real` ? `Dinero real` : `Modo demo`,
        toggleFav: () => this.flipFav(p),
        favFill: e.favs[p.name] ? `rgb(255,59,79)` : `none`,
        favStroke: e.favs[p.name] ? `rgb(255,59,79)` : `rgb(var(--rc-gris))`,
        toggleTheater: () =>
          this.setState({
            theater: !e.theater,
          }),
        theaterTitle: e.theater
          ? `Salir de pantalla amplia`
          : `Pantalla amplia`,
        gameCols: e.theater ? `minmax(0,1fr)` : `minmax(0,1fr) 380px`,
        showSide: !e.theater,
        withdraw: () => this.openWallet(`withdraw`),
        wTabRecent: () =>
          this.setState({
            winTab: `recent`,
          }),
        wTabTop: () =>
          this.setState({
            winTab: `top`,
          }),
        wRecentBg: e.winTab === `top` ? `transparent` : `rgb(var(--rc-marca))`,
        wTopBg: e.winTab === `top` ? `rgb(var(--rc-marca))` : `transparent`,
        wRecentColor:
          e.winTab === `top` ? `rgba(255,255,255,0.55)` : `rgb(255,255,255)`,
        wTopColor:
          e.winTab === `top` ? `rgb(255,255,255)` : `rgba(255,255,255,0.55)`,
        ...(() => {
          let t = e.feed || this.seedFeed,
            n = [...t].sort((e, t) => t.pay - e.pay),
            r = (e.winTab === `top` ? n : t).slice(0, 6),
            i = (e) => `$` + Math.round(e).toLocaleString(`es-AR`),
            a = [
              `linear-gradient(135deg, rgb(var(--rc-acento)), rgb(var(--rc-marca)))`,
              `linear-gradient(135deg, rgb(38,161,123), rgb(20,110,90))`,
              `linear-gradient(135deg, rgb(160,90,240), rgb(90,40,180))`,
              `linear-gradient(135deg, rgb(255,150,60), rgb(220,80,40))`,
            ];
          return {
            hWinners: (e.winTab === `top` ? n : t).slice(0, 8).map((t) => {
              let n =
                  this.slotGames.concat(this.liveGames)[t.gi % 21] ||
                  this.liveGames[0],
                r = new Date(t.ts),
                o = t.mult >= 10;
              return {
                game: n.name,
                provider: n.provider,
                img: n.img || ``,
                play: () => this.openGame(n),
                user: `@` + t.u,
                initial: t.u.charAt(0).toUpperCase(),
                avatar: a[t.u.length % a.length],
                time:
                  String(r.getHours()).padStart(2, `0`) +
                  `:` +
                  String(r.getMinutes()).padStart(2, `0`),
                bet: i(t.bet),
                pay: i(t.pay),
                mult: t.mult.toFixed(2) + `X`,
                multBg: o
                  ? `rgb(var(--rc-marca))`
                  : `rgba(var(--rc-acento),0.14)`,
                multColor: o ? `rgb(255,255,255)` : `rgb(var(--rc-tinta-1))`,
                multGlow: o ? `0 0 16px rgba(var(--rc-marca),0.6)` : `none`,
                bg:
                  t.id === e.newId && e.winTab !== `top`
                    ? `rgba(38,161,123,0.1)`
                    : `transparent`,
              };
            }),
            bigUser: `@` + n[0].u,
            bigPay: i(n[0].pay),
            bigMult: n[0].mult.toFixed(2) + `X`,
            gWinners: r.map((t, n) => ({
              rank: n + 1,
              user: `@` + t.u,
              initial: t.u.charAt(0).toUpperCase(),
              avatar: a[t.u.length % a.length],
              when:
                e.winTab === `top`
                  ? `Hoy`
                  : t.id === e.newId
                    ? `Recién`
                    : `Hace ` + (n * 2 + 1) + ` min`,
              bet: i(t.bet),
              pay: i(t.pay),
              mult: t.mult.toFixed(2) + `X`,
              multBg:
                t.mult >= 10
                  ? `rgb(var(--rc-marca))`
                  : `rgba(var(--rc-acento),0.15)`,
              multColor:
                t.mult >= 10 ? `rgb(255,255,255)` : `rgb(var(--rc-tinta-2))`,
              bg:
                t.id === e.newId && e.winTab !== `top`
                  ? `rgba(38,161,123,0.14)`
                  : `transparent`,
            })),
          };
        })(),
        similar: (p.kind === `En vivo` ? this.liveGames : this.slotGames)
          .filter((e) => e.name !== p.name)
          .slice(0, 8)
          .map((e) => ({
            ...e,
            play: () => this.openGame(e),
          })),
        backFromGame: () => {
          let t = e.prevView || `home`;
          (this.setState({
            view: t,
          }),
            t === `home` &&
              setTimeout(
                () =>
                  this.scroller().scrollTo({
                    top: 0,
                  }),
                30,
              ));
        },
        diceRot: (e.diceRot || 0) + `deg`,
        rollDice: () => this.rollDice(),
        randOpen: !!e.rand,
        randName: e.rand ? e.rand.name : ``,
        randProvider: e.rand ? e.rand.provider : ``,
        randKind: e.rand ? e.rand.kind : ``,
        randImg: e.rand ? e.rand.img : ``,
        randNoImg: !!e.rand && !e.rand.img,
        closeRand: () =>
          this.setState({
            rand: null,
          }),
        playRand: () => this.openGame(e.rand),
        goHome: () => {
          (this.setState({
            view: `home`,
            catQuery: ``,
          }),
            setTimeout(() => this.scrollTo(e.view), 60));
        },
        catTitle: e.view === `slots` ? `Slots` : `En vivo`,
        catCount: f.length,
        catItems: h,
        catEmpty: h.length === 0,
        catPlayers:
          (e.view === `slots` ? e.players.slots : e.players.live) + ` Jugando`,
        catPlaceholder:
          e.view === `slots`
            ? `Buscar slots por nombre o proveedor`
            : `Buscar juegos en vivo por nombre o proveedor`,
        catQuery: e.catQuery || ``,
        onCatQuery: (e) =>
          this.setState({
            catQuery: e.target.value,
          }),
        clearCatQuery: () =>
          this.setState({
            catQuery: ``,
          }),
        catSearchRing: e.catFocus
          ? `inset 0 0 0 1.5px rgb(var(--rc-acento))`
          : `none`,
        onCatFocus: () =>
          this.setState({
            catFocus: !0,
          }),
        onCatBlur: () =>
          this.setState({
            catFocus: !1,
          }),
        openLogin: () =>
          this.setState({
            modal: `login`,
            error: ``,
          }),
        openRegister: () =>
          this.setState({
            modal: `register`,
            error: ``,
          }),
        deposit: () => this.openWallet(`deposit`),
        navInicio: d(`inicio`),
        navSlots: d(`slots`),
        navLive: d(`envivo`),
        navSports: d(`deportivas`),
        navPop: d(`recomendados`),
        bgInicio: u(`inicio`),
        bgSlots: u(`slots`),
        bgLive: u(`envivo`),
        bgSports: u(`deportivas`),
        bgPop: u(`recomendados`),
        logoutTitle: e.user ? `Cerrar sesión` : `Iniciar sesión`,
        logout: () => {
          e.user
            ? (this.setState({
                user: null,
                view: `home`,
                menu: !1,
              }),
              this.showToast(`Sesión cerrada`))
            : this.setState({
                modal: `login`,
              });
        },
        query: e.query,
        onQuery: (e) =>
          this.setState({
            query: e.target.value,
            focus: !0,
          }),
        onSearchFocus: () =>
          this.setState({
            focus: !0,
          }),
        onSearchBlur: () =>
          setTimeout(
            () =>
              this.setState({
                focus: !1,
              }),
            120,
          ),
        searchOpen: e.focus,
        results: l,
        noResults: l.length === 0,
        tabs: [
          {
            label: `En vivo`,
            icon: `assets/tab-vivo.png`,
            players: e.players.live + ` Jugando`,
            go: () => this.scrollTo(`envivo`),
          },
          {
            label: `slots`,
            icon: `assets/tab-slots.png`,
            players: e.players.slots + ` Jugando`,
            go: () => this.scrollTo(`slots`),
          },
          {
            label: `deportivas`,
            icon: `assets/tab-dep.png`,
            players: e.players.sports + ` Jugando`,
            go: () => this.scrollTo(`deportivas`),
          },
        ],
        recPause: () => {
          this.recHover = !0;
        },
        recResume: () => {
          this.recHover = !1;
        },
        recs: this.slotGames
          .slice(8)
          .concat(this.slotGames.slice(8))
          .map((e) => ({
            src: e.img,
            play: () => this.openGame(e),
            ...this.fz(e),
          })),
        recCount: this.recs.length,
        recRef: this.recRef,
        recPrevOp: 1,
        recNextOp: 1,
        recPrev: () => {
          let e = this.recRef.current;
          e &&
            ((this.recPos = Math.max(0, e.scrollLeft - 210.5)),
            (e.scrollLeft = this.recPos));
        },
        recNext: () => {
          let e = this.recRef.current;
          e &&
            ((this.recPos = e.scrollLeft + 210.5),
            (e.scrollLeft = this.recPos));
        },
        onRecScroll: (t) => {
          let n = t.currentTarget,
            r = n.scrollLeft < 4,
            i = n.scrollLeft + n.clientWidth > n.scrollWidth - 4;
          (r !== e.recAtStart || i !== e.recAtEnd) &&
            this.setState({
              recAtStart: r,
              recAtEnd: i,
            });
        },
        codeLabel: e.copied ? `¡Copiado!` : `“ROCCO12”`,
        copyCode: () => {
          try {
            navigator.clipboard &&
              navigator.clipboard.writeText(`ROCCO12`).catch(() => {});
          } catch {}
          (this.setState({
            copied: !0,
          }),
            setTimeout(
              () =>
                this.setState({
                  copied: !1,
                }),
              1500,
            ));
        },
        slots: n(`slot`, 8).map((e, t) => ({
          ...e,
          src: this.slotGames[t].img,
          play: () => this.openGame(this.slotGames[t]),
          ...this.fz(this.slotGames[t]),
        })),
        live: n(`vivo`, t.live ? 16 : 8).map((e, t) => ({
          ...e,
          src: t < 8 ? `assets/vivo-` + (t + 1) + `.png` : ``,
          play: () => this.openGame(this.liveGames[t % 8]),
          ...this.fz(this.liveGames[t % 8]),
        })),
        sports: o,
        toggleSlots: () => this.openCat(`slots`),
        toggleLive: () => this.openCat(`envivo`),
        toggleSports: g(`sports`),
        slotsMoreLabel: `Mostrar Mas`,
        slotsArrow: `-90deg`,
        liveMoreLabel: `Mostrar Mas`,
        liveArrow: `-90deg`,
        sportsMoreLabel: t.sports ? `Mostrar Menos` : `Mostrar Mas`,
        sportsArrow: t.sports ? `180deg` : `0deg`,
        cols: [
          [`JUEGO`, 250],
          [`USUARIO`, 483],
          [`HORA`, 697],
          [`APUESTA`, 912],
          [`MULTIPLICADOR`, 1150],
          [`PAGO`, 1408],
        ].map(([e, t]) => ({
          label: e,
          x: t + `px`,
        })),
        winners: [1, 2, 3, 4, 5].map((e) => ({
          id: `ganador-` + e,
          user: `@LUCASGARCIA`,
          time: `15:02`,
          bet: `$35`,
          mult: `2:00X`,
          pay: `$500`,
        })),
        modalOpen: !!e.modal,
        isRegister: _,
        modalTitle: _ ? `Creá tu cuenta` : `Bienvenido`,
        modalSub: _
          ? `Creá tu cuenta en segundos y activá tu bono.`
          : `Qué bueno verte de nuevo. Ingresá para seguir jugando.`,
        modalCta: _ ? `Crear cuenta` : `Ingresar`,
        swapQ: _ ? `¿Ya tenés cuenta?` : `¿No tenés cuenta?`,
        swapLabel: _ ? `Iniciá sesión` : `Registrate`,
        isLogin: !_,
        toLogin: () =>
          this.setState({
            modal: `login`,
            error: ``,
          }),
        toRegister: () =>
          this.setState({
            modal: `register`,
            error: ``,
          }),
        tabLoginBg: _ ? `transparent` : `rgb(var(--rc-marca))`,
        tabRegBg: _ ? `rgb(var(--rc-marca))` : `transparent`,
        tabLoginShadow: _ ? `none` : `0 4px 14px rgba(var(--rc-marca),0.45)`,
        tabRegShadow: _ ? `0 4px 14px rgba(var(--rc-marca),0.45)` : `none`,
        tabLoginColor: _ ? `rgba(255,255,255,0.55)` : `rgb(255,255,255)`,
        tabRegColor: _ ? `rgb(255,255,255)` : `rgba(255,255,255,0.55)`,
        rememberBg: e.remember === !1 ? `transparent` : `rgb(var(--rc-marca))`,
        rememberRing:
          e.remember === !1
            ? `inset 0 0 0 1.5px rgba(var(--rc-gris),0.6)`
            : `none`,
        rememberOp: e.remember === !1 ? 0 : 1,
        termsBg: e.terms ? `rgb(var(--rc-marca))` : `transparent`,
        termsRing: e.terms
          ? `none`
          : `inset 0 0 0 1.5px rgba(var(--rc-gris),0.6)`,
        termsOp: +!!e.terms,
        toggleRemember: (t) => {
          (t.preventDefault(),
            this.setState({
              remember: e.remember === !1,
            }));
        },
        playGame: () => {
          e.user
            ? this.showToast(`Abriendo juego…`)
            : this.setState({
                modal: `register`,
                error: ``,
              });
        },
        googleLogin: () => {
          (this.setState({
            user: `jugador`,
            modal: null,
          }),
            this.showToast(`Ingresaste con Google`),
            this.afterLogin());
        },
        toggleTerms: (t) => {
          (t.preventDefault(),
            this.setState({
              terms: !e.terms,
              error: ``,
            }));
        },
        passType: e.showPass ? `text` : `password`,
        passTitle: e.showPass ? `Ocultar contraseña` : `Mostrar contraseña`,
        eyeSlash: e.showPass ? `M3 3l18 18` : ``,
        togglePass: (t) => {
          (t.preventDefault(),
            this.setState({
              showPass: !e.showPass,
            }));
        },
        onKey: (e) => {
          (e.key === `Enter` && this.submit(),
            e.key === `Escape` &&
              this.setState({
                modal: null,
              }));
        },
        forgot: (t) => {
          if ((t.preventDefault(), !/.+@.+\..+/.test(e.form.email)))
            return this.setState({
              error: `Escribí tu email arriba y te mandamos un link.`,
            });
          (this.setState({
            modal: null,
          }),
            this.showToast(`Te enviamos un link a ` + e.form.email));
        },
        swapModal: () =>
          this.setState({
            modal: _ ? `login` : `register`,
            error: ``,
          }),
        closeModal: () =>
          this.setState({
            modal: null,
          }),
        stop: (e) => e.stopPropagation(),
        fName: e.form.name,
        fEmail: e.form.email,
        fPass: e.form.pass,
        fCode: e.form.code,
        onName: (e) => this.setForm(`name`, e.target.value),
        onEmail: (e) => this.setForm(`email`, e.target.value),
        onPass: (e) => this.setForm(`pass`, e.target.value),
        onCode: (e) => this.setForm(`code`, e.target.value),
        formError: e.error,
        submit: () => this.submit(),
        toast: e.toast,
      };
    }
    render() {
      return renderAzulDesktopLayout(this.renderVals());
    }
  };
}
export { AzulDesktopController, initializeDesktopController };
