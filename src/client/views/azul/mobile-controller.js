/**
 * azul / mobile-controller.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import { renderAzulMobileLayout } from "./mobile-layout.js";
var AzulMobileController, Ht, Ut;
function initializeMobileController() {
  AzulMobileController = class extends React.Component {
    state = {
      user: this.props.startLoggedIn ? `jugador` : null,
      view: `home`,
      sheet: null,
      balance: 125e3,
      players: {
        live: 152,
        slots: 45,
        sports: 200,
      },
      form: {
        name: ``,
        email: ``,
        pass: ``,
      },
      terms: !1,
      err: ``,
      wAmount: 1e4,
      wStep: `form`,
      wAddr: ``,
      wHolder: ``,
      wCopied: !1,
      bonusUsed: !1,
      game: null,
      gLoading: !1,
      favs: {},
      recent: null,
      catQuery: ``,
      winTab: `recent`,
      feed: null,
      newId: null,
      diceRot: 0,
      rand: null,
      chatMsgs: null,
      chatSeen: !1,
      toast: null,
      copied: !1,
    };
    scRef = React.createRef();
    rcRef = React.createRef();
    flipFav(e) {
      if (!this.state.user)
        return this.setState({
          sheet: `register`,
          err: ``,
        });
      let t = {
        ...this.state.favs,
      };
      (t[e.name] ? delete t[e.name] : (t[e.name] = !0),
        this.setState({
          favs: t,
        }));
      try {
        localStorage.setItem(`rushybet_favs`, JSON.stringify(t));
      } catch {}
      this.toastMsg(
        t[e.name] ? `Agregado a favoritos` : `Quitado de favoritos`,
      );
    }
    recRef = React.createRef();
    recStep = 138;
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
      `Ruleta en Español`,
      `Red Door Roulette`,
      `Crazy Time`,
      `XXXtreme Lightning Roulette`,
      `Lightning Storm`,
      `Ruleta Bola Rápida en Vivo`,
      `Monopoly Live`,
      `Blackjack`,
    ].map((e, t) => ({
      name: e,
      provider: `Evolution`,
      kind: `En vivo`,
      img: `assets/vivo-` + (t + 1) + `.png`,
    }));
    cajeros = [
      {
        alias: `rushy.caja.martin`,
        holder: `Martín Gómez`,
        bank: `Mercado Pago`,
      },
      {
        alias: `rushy.pagos.sofi`,
        holder: `Sofía Ruiz`,
        bank: `Brubank`,
      },
    ];
    seedFeed = [
      [`mati_22`, 12.4, 2e3, 2],
      [`sofi.b`, 3.1, 5e3, 16],
      [`elrengo`, 48, 1e3, 10],
      [`caro.m`, 2, 1e4, 13],
      [`juanpi`, 7.25, 2e3, 18],
      [`nico99`, 1.8, 5e3, 8],
    ].map(([e, t, n, r], i) => ({
      id: `s` + i,
      u: e,
      mult: t,
      bet: n,
      pay: t * n,
      gi: r,
      ts: Date.now() - (i * 3 + 1) * 6e4,
    }));
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
          pz: Math.min(
            1,
            (window.innerHeight - 48) / 866,
            (window.innerWidth - 48) / 412,
          ),
        })),
        this.fit(),
        window.addEventListener(`resize`, this.fit));
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
        if (e && !this.recHold && !this.state.sheet) {
          this.recPos = (this.recPos || e.scrollLeft) + 0.25;
          let t = e.scrollWidth / 2;
          (this.recPos >= t && (this.recPos -= t),
            (e.scrollLeft = this.recPos));
        } else e && (this.recPos = e.scrollLeft);
        this.raf = requestAnimationFrame(t);
      };
      this.raf = requestAnimationFrame(t);
      let n = [`tomi.r`, `agus_7`, `vale.p`, `rocio`, `santi22`, `mica.b`];
      this.fi = setInterval(() => {
        let e =
            Math.round(
              (Math.random() < 0.2
                ? 10 + Math.random() * 50
                : 1.2 + Math.random() * 8) * 100,
            ) / 100,
          t = [500, 1e3, 2e3, 5e3][Math.floor(Math.random() * 4)],
          r = {
            id: `w` + Date.now(),
            u: n[Math.floor(Math.random() * n.length)],
            mult: e,
            bet: t,
            pay: e * t,
            gi: Math.floor(Math.random() * 21),
            ts: Date.now(),
          };
        this.setState((e) => ({
          feed: [r].concat(e.feed || this.seedFeed).slice(0, 20),
          newId: r.id,
        }));
      }, 4500);
    }
    componentDidUpdate(e) {
      e.startLoggedIn !== this.props.startLoggedIn &&
        this.setState({
          user: this.props.startLoggedIn ? `jugador` : null,
          view: `home`,
          sheet: null,
        });
    }
    componentWillUnmount() {
      (window.removeEventListener(`resize`, this.fit),
        clearInterval(this.pi),
        clearInterval(this.fi),
        cancelAnimationFrame(this.raf),
        clearTimeout(this.tt),
        clearTimeout(this.gt),
        clearTimeout(this.wt),
        clearTimeout(this.dt),
        clearTimeout(this.ct));
    }
    toastMsg(e) {
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
    scrollTo(e) {
      let t = this.scRef.current;
      if (!t) return;
      if (!e)
        return t.scrollTo({
          top: 0,
          behavior: `smooth`,
        });
      let n = document.getElementById(e);
      n &&
        t.scrollTo({
          top: n.offsetTop - 76,
          behavior: `smooth`,
        });
    }
    go(e, t) {
      this.state.view === e
        ? this.scrollTo(t)
        : (this.setState({
            view: e,
            catQuery: ``,
          }),
          setTimeout(() => this.scrollTo(t), 40));
    }
    openGame(e) {
      if (!this.state.user)
        return (
          (this.pendingGame = e),
          this.setState({
            sheet: `register`,
            err: ``,
          })
        );
      let t = [
        {
          ...e,
          when: `Recién`,
        },
      ]
        .concat(
          (this.state.recent || this.defRecent()).filter(
            (t) => t.name !== e.name,
          ),
        )
        .slice(0, 6);
      (this.setState({
        view: `game`,
        game: e,
        gLoading: !0,
        sheet: null,
        recent: t,
      }),
        clearTimeout(this.gt),
        (this.gt = setTimeout(
          () =>
            this.setState({
              gLoading: !1,
            }),
          1500,
        )));
    }
    defRecent() {
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
      ];
    }
    submitAuth() {
      let { form: e, sheet: t, terms: n } = this.state;
      if (t === `register` && !e.name.trim())
        return this.setState({
          err: `Elegí un nombre de usuario.`,
        });
      if (t === `login` && !/.+@.+\..+/.test(e.email))
        return this.setState({
          err: `Ingresá un email válido.`,
        });
      if (e.pass.length < 6)
        return this.setState({
          err: `La contraseña debe tener al menos 6 caracteres.`,
        });
      if (t === `register` && !n)
        return this.setState({
          err: `Confirmá que sos mayor de 18.`,
        });
      let r = e.name.trim() || e.email.split(`@`)[0];
      (this.setState({
        user: r,
        sheet: null,
        form: {
          name: ``,
          email: ``,
          pass: ``,
        },
      }),
        this.toastMsg(`¡Hola, @` + r + `!`),
        this.afterLogin());
    }
    afterLogin() {
      let e = this.pendingGame;
      ((this.pendingGame = null), e && setTimeout(() => this.openGame(e), 60));
    }
    openWallet(e) {
      if (!this.state.user)
        return this.setState({
          sheet: `login`,
          err: ``,
        });
      this.setState({
        receipt: null,
        sheet: e,
        wStep: `form`,
        err: ``,
        wAmount: e === `deposit` ? 1e4 : 0,
        wCopied: !1,
        cajero:
          this.state.cajero || this.cajeros[Math.floor(Math.random() * 2)],
      });
    }
    wSubmit() {
      let e = this.state,
        t = e.wAmount || 0;
      if (e.sheet === `deposit` && t < 1e3)
        return this.setState({
          err: `La carga mínima es de $1.000.`,
        });
      if (e.sheet === `withdraw`) {
        if (t < 2e3)
          return this.setState({
            err: `El retiro mínimo es de $2.000.`,
          });
        if (t > e.balance)
          return this.setState({
            err: `No tenés saldo suficiente.`,
          });
        if (e.wAddr.trim().length < 6)
          return this.setState({
            err: `Ingresá un CBU, CVU o alias válido.`,
          });
        if (e.wHolder.trim().length < 3)
          return this.setState({
            err: `Ingresá el titular.`,
          });
      }
      (this.setState({
        wStep: `pending`,
        err: ``,
      }),
        clearTimeout(this.wt),
        (this.wt = setTimeout(
          () =>
            this.setState((e) =>
              e.sheet === `deposit`
                ? {
                    wStep: `done`,
                    balance: e.balance + t + (e.bonusUsed ? 0 : t),
                    bonusUsed: !0,
                  }
                : {
                    wStep: `done`,
                    balance: e.balance - t,
                  },
            ),
          2e3,
        )));
    }
    rollDice() {
      let e = this.state,
        t = this.slotGames.concat(this.liveGames),
        n;
      do n = t[Math.floor(Math.random() * t.length)];
      while (e.rand && n.name === e.rand.name);
      (this.setState({
        diceRot: e.diceRot + 720,
      }),
        clearTimeout(this.dt),
        (this.dt = setTimeout(
          () =>
            this.setState({
              rand: n,
              sheet: `rand`,
            }),
          650,
        )));
    }
    chatPush(e) {
      let t = e.toLowerCase(),
        n = /carg/.test(t)
          ? `Tocá el + arriba, elegí el monto y transferí al alias que te aparece.`
          : /retir/.test(t)
            ? `Desde Caja → Retirar poné el monto y tu CBU/alias. Un cajero te lo pasa en minutos.`
            : /bono/.test(t)
              ? `ROCCO12 duplica tu primera carga.`
              : `Te paso con un asesor en breve.`;
      (this.setState((t) => ({
        chatMsgs: (t.chatMsgs || this.chatSeed).concat({
          from: `me`,
          text: e,
        }),
      })),
        clearTimeout(this.ct),
        (this.ct = setTimeout(
          () =>
            this.setState((e) => ({
              chatMsgs: e.chatMsgs.concat({
                from: `bot`,
                text: n,
              }),
            })),
          900,
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
    renderVals() {
      let e = this.state,
        t = (e) => `$` + Math.round(e || 0).toLocaleString(`es-AR`),
        n = e.game || this.liveGames[2],
        r = e.view === `slots` ? this.slotGames : this.liveGames,
        i = e.catQuery.trim().toLowerCase(),
        a = r
          .filter(
            (e) => !i || (e.name + ` ` + e.provider).toLowerCase().includes(i),
          )
          .map((e) => ({
            ...e,
            play: () => this.openGame(e),
          })),
        o = e.feed || this.seedFeed,
        s = (
          e.winTab === `top` ? [...o].sort((e, t) => t.pay - e.pay) : o
        ).slice(0, 6),
        c = this.slotGames.concat(this.liveGames),
        l =
          e.sheet === `deposit` || e.sheet === `withdraw`
            ? `caja`
            : e.view === `slots`
              ? `slots`
              : e.view === `envivo`
                ? `vivo`
                : `home`,
        u = (e) =>
          l === e
            ? `0 0 0 2px rgb(var(--rc-marca)), 0 0 14px rgba(var(--rc-marca),0.6)`
            : `none`,
        d = (e) => (l === e ? `rgb(255,255,255)` : `rgba(255,255,255,0.5)`),
        f = e.sheet === `withdraw`;
      return {
        ...(() => {
          let t = this.slotGames
            .concat(this.liveGames)
            .filter((t) => e.favs[t.name]);
          return {
            favList: t.map((e) => ({
              img: e.img || ``,
              play: () => this.openGame(e),
              toggleFav: (t) => {
                (t.stopPropagation(), this.flipFav(e));
              },
            })),
            favCount: t.length,
            hasFavs: t.length > 0,
            noFavs: t.length === 0,
          };
        })(),
        phoneZoom: e.pz || 1,
        loggedIn: !!e.user,
        loggedOut: !e.user,
        balanceFmt: t(e.balance),
        scRef: this.scRef,
        goHome: () => this.go(`home`),
        isHome: e.view === `home`,
        isCat: e.view === `slots` || e.view === `envivo`,
        isGame: e.view === `game`,
        openLogin: () =>
          this.setState({
            sheet: `login`,
            err: ``,
          }),
        openRegister: () =>
          this.setState({
            sheet: `register`,
            err: ``,
          }),
        openDeposit: () => this.openWallet(`deposit`),
        openWithdraw: () => this.openWallet(`withdraw`),
        openChat: () =>
          this.setState({
            sheet: `chat`,
            chatSeen: !0,
          }),
        chatUnread: !e.chatSeen,
        openSearch: () => this.go(`slots`),
        rollDice: () => this.rollDice(),
        diceRot: e.diceRot + `deg`,
        heroLine1: e.user ? `Hola de nuevo,` : `Bienvenido a :`,
        heroLine2: e.user ? `@` + e.user : this.brandName(`rushyclub`),
        brandName: this.brandName(`RushyBet`),
        brandSite: this.brandSite(`rushybet.com`),
        heroCtaLabel: e.user ? `cargar saldo` : `registrate`,
        heroCta: () =>
          e.user
            ? this.openWallet(`deposit`)
            : this.setState({
                sheet: `register`,
                err: ``,
              }),
        tabs: [
          [
            `En vivo`,
            `assets/tab-vivo.png`,
            e.players.live,
            () => this.go(`envivo`),
          ],
          [
            `Slots`,
            `assets/tab-slots.png`,
            e.players.slots,
            () => this.go(`slots`),
          ],
          [
            `Deportes`,
            `assets/tab-dep.png`,
            e.players.sports,
            () => this.scrollTo(`m-dep`),
          ],
        ].map(([e, t, n, r]) => ({
          label: e,
          icon: t,
          players: n + ` jugando`,
          go: r,
        })),
        recent: (e.recent || this.defRecent()).map((e) => ({
          ...e,
          play: () => this.openGame(e),
        })),
        codeLabel: e.copied ? `¡Copiado!` : `“ROCCO12”`,
        copyCode: () => {
          try {
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
        recRef: this.recRef,
        recHold: () => {
          this.recHold = !0;
        },
        recRelease: () => {
          this.recHold = !1;
        },
        onRecScroll: (t) => {
          let n = t.currentTarget,
            r = n.scrollWidth - n.clientWidth,
            i = r <= 0 ? 0 : Math.round((n.scrollLeft / r) * 4);
          i !== e.recIdx &&
            this.setState({
              recIdx: i,
            });
        },
        recDots: [0, 1, 2, 3, 4].map((t) => ({
          w: (e.recIdx || 0) === t ? `20px` : `6px`,
          bg:
            (e.recIdx || 0) === t
              ? `rgb(var(--rc-acento))`
              : `rgba(255,255,255,0.25)`,
          go: () => {
            let e = this.recRef.current;
            e &&
              e.scrollTo({
                left: ((e.scrollWidth - e.clientWidth) * t) / 4,
              });
          },
        })),
        recs: this.slotGames
          .slice(8)
          .concat(this.slotGames.slice(8))
          .map((e) => ({
            img: e.img,
            play: () => this.openGame(e),
          })),
        recCount: 5,
        slots: this.slotGames.slice(0, 8).map((e) => ({
          src: e.img,
          play: () => this.openGame(e),
        })),
        live: this.liveGames.map((e) => ({
          img: e.img,
          play: () => this.openGame(e),
        })),
        seeSlots: () => this.go(`slots`),
        seeLive: () => this.go(`envivo`),
        sports: [`futbol`, `rugby`, `f1`, `hockey`, `basketball`, `ufc`].map(
          (e) => ({
            img: `assets/dep-` + e + `.png`,
            go: () => this.toastMsg(`Deportes próximamente`),
          }),
        ),
        tabRecent: () =>
          this.setState({
            winTab: `recent`,
          }),
        tabTop: () =>
          this.setState({
            winTab: `top`,
          }),
        recentBg:
          e.winTab === `recent` ? `rgb(var(--rc-marca))` : `transparent`,
        topBg: e.winTab === `top` ? `rgb(var(--rc-marca))` : `transparent`,
        winners: s.map((n) => {
          let r = c[n.gi % c.length],
            i = new Date(n.ts),
            a = n.mult >= 10;
          return {
            game: r.name,
            img: r.img,
            play: () => this.openGame(r),
            user: `@` + n.u,
            time:
              String(i.getHours()).padStart(2, `0`) +
              `:` +
              String(i.getMinutes()).padStart(2, `0`),
            pay: t(n.pay),
            mult: n.mult.toFixed(2) + `X`,
            multBg: a ? `rgb(var(--rc-marca))` : `rgba(var(--rc-acento),0.15)`,
            multColor: a ? `rgb(255,255,255)` : `rgb(var(--rc-tinta-1))`,
            bg:
              n.id === e.newId && e.winTab === `recent`
                ? `rgba(38,161,123,0.12)`
                : `transparent`,
          };
        }),
        catTitle: e.view === `slots` ? `Slots` : `En vivo`,
        catCount: r.length,
        catItems: a,
        catEmpty: a.length === 0,
        catQuery: e.catQuery,
        onCatQuery: (e) =>
          this.setState({
            catQuery: e.target.value,
          }),
        navItems: [
          [`home`, `Inicio`, `assets/icon-home.png`, () => this.go(`home`)],
          [`slots`, `Slots`, `assets/icon-slots.png`, () => this.go(`slots`)],
          [`vivo`, `En vivo`, `assets/icon-live.png`, () => this.go(`envivo`)],
          [
            `dep`,
            `Deportes`,
            `assets/icon-sports.png`,
            () => this.go(`home`, `m-dep`),
          ],
          [
            `caja`,
            e.user ? `Caja` : `Ingresar`,
            `assets/icon-logout.png`,
            () => this.openWallet(`deposit`),
          ],
        ].map(([e, t, n, r]) => ({
          label: t,
          icon: n,
          go: r,
          ring: u(e),
          color: d(e),
        })),
        gName: n.name,
        gProvider: n.provider,
        gImg: n.img || ``,
        gLoading: e.gLoading,
        gReady: !e.gLoading,
        closeGame: () =>
          this.setState({
            view: `home`,
          }),
        spinner: React.createElement(`div`, {
          style: {
            width: 44,
            height: 44,
            borderRadius: `50%`,
            border: `3px solid rgba(255,255,255,0.15)`,
            borderTopColor: `rgb(var(--rc-acento))`,
            animation: `rbspin .8s linear infinite`,
          },
        }),
        toggleFav: () => this.flipFav(n),
        favFill: e.favs[n.name] ? `rgb(255,59,79)` : `none`,
        favStroke: e.favs[n.name] ? `rgb(255,59,79)` : `rgb(var(--rc-gris))`,
        sheetOpen: !!e.sheet,
        closeSheet: () =>
          this.setState({
            sheet: null,
          }),
        stop: (e) => e.stopPropagation(),
        isAuth: e.sheet === `login` || e.sheet === `register`,
        isLogin: e.sheet === `login`,
        isRegister: e.sheet === `register`,
        tabLoginBg:
          e.sheet === `login` ? `rgb(var(--rc-marca))` : `transparent`,
        tabRegBg:
          e.sheet === `register` ? `rgb(var(--rc-marca))` : `transparent`,
        authTitle: e.sheet === `register` ? `Creá tu cuenta` : `Bienvenido`,
        authCta: e.sheet === `register` ? `crear cuenta` : `ingresar`,
        fName: e.form.name,
        fEmail: e.form.email,
        fPass: e.form.pass,
        onName: (t) =>
          this.setState({
            form: {
              ...e.form,
              name: t.target.value,
            },
            err: ``,
          }),
        onEmail: (t) =>
          this.setState({
            form: {
              ...e.form,
              email: t.target.value,
            },
            err: ``,
          }),
        onPass: (t) =>
          this.setState({
            form: {
              ...e.form,
              pass: t.target.value,
            },
            err: ``,
          }),
        toggleTerms: () =>
          this.setState({
            terms: !e.terms,
            err: ``,
          }),
        termsBg: e.terms ? `rgb(var(--rc-marca))` : `transparent`,
        termsRing: e.terms
          ? `none`
          : `inset 0 0 0 1.5px rgba(var(--rc-gris),0.6)`,
        termsMark: e.terms ? `✓` : ``,
        err: e.err,
        submitAuth: () => this.submitAuth(),
        googleLogin: () => {
          (this.setState({
            user: `jugador`,
            sheet: null,
          }),
            this.toastMsg(`Ingresaste con Google`),
            this.afterLogin());
        },
        isWallet: e.sheet === `deposit` || f,
        isDeposit: e.sheet === `deposit`,
        isWithdraw: f,
        tabDepBg:
          e.sheet === `deposit` ? `rgb(var(--rc-marca))` : `transparent`,
        tabWBg: f ? `rgb(var(--rc-marca))` : `transparent`,
        wForm: e.wStep === `form`,
        wPending: e.wStep === `pending`,
        wDone: e.wStep === `done`,
        wAmountFmt: e.wAmount ? e.wAmount.toLocaleString(`es-AR`) : ``,
        wAmountMoney: t(e.wAmount),
        onWAmount: (e) =>
          this.setState({
            wAmount: parseInt(e.target.value.replace(/[^0-9]/g, ``) || `0`, 10),
            err: ``,
          }),
        wQuick: (f ? [5e3, 1e4, 5e4, `max`] : [5e3, 1e4, 2e4, 5e4]).map(
          (t) => ({
            label: t === `max` ? `Todo` : `$` + t / 1e3 + `k`,
            bg: (t === `max` ? e.wAmount === e.balance : e.wAmount === t)
              ? `rgb(var(--rc-marca))`
              : `rgb(var(--rc-fondo))`,
            pick: () =>
              this.setState({
                wAmount: t === `max` ? e.balance : t,
                err: ``,
              }),
          }),
        ),
        cjAlias: e.cajero ? e.cajero.alias : ``,
        cjHolder: e.cajero ? e.cajero.holder : ``,
        cjBank: e.cajero ? e.cajero.bank : ``,
        copyLabel: e.wCopied ? `Copiado` : `Copiar`,
        copyBg: e.wCopied ? `rgb(38,161,123)` : `rgb(var(--rc-marca))`,
        copyAlias: () => {
          try {
            navigator.clipboard.writeText(e.cajero.alias).catch(() => {});
          } catch {}
          this.setState({
            wCopied: !0,
          });
        },
        wAddr: e.wAddr,
        onWAddr: (e) =>
          this.setState({
            wAddr: e.target.value,
            err: ``,
          }),
        wHolder: e.wHolder,
        onWHolder: (e) =>
          this.setState({
            wHolder: e.target.value,
            err: ``,
          }),
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
                err: `El archivo supera los 10 MB.`,
              });
            (e.receipt && e.receipt.url && URL.revokeObjectURL(e.receipt.url),
              this.setState({
                receipt: {
                  name: n.name,
                  size: n.size,
                  url: /^image\//.test(n.type) ? URL.createObjectURL(n) : ``,
                },
                err: ``,
              }));
          }
        },
        clearReceipt: () => {
          (e.receipt && e.receipt.url && URL.revokeObjectURL(e.receipt.url),
            this.setState({
              receipt: null,
            }));
        },
        wSubmit: () => this.wSubmit(),
        wCta: f
          ? `solicitar retiro`
          : e.receipt
            ? `enviar comprobante`
            : `ya transferí`,
        waLink:
          `https://wa.me/` +
          String(this.props.whatsappNumber ?? `5491100000000`).replace(
            /[^0-9]/g,
            ``,
          ) +
          `?text=` +
          encodeURIComponent(
            (f ? `Hola, pedí un retiro de ` : `Hola, pedí una carga de `) +
              t(e.wAmount) +
              ` y no me responden. Usuario: @` +
              e.user,
          ),
        wPendingTitle: f
          ? `Un cajero está procesando tu retiro…`
          : e.receipt
            ? `El cajero está revisando tu comprobante…`
            : `El cajero está verificando tu transferencia…`,
        wDoneTitle: f ? `Retiro enviado` : `¡Carga acreditada!`,
        isRand: e.sheet === `rand`,
        rName: e.rand ? e.rand.name : ``,
        rProvider: e.rand ? e.rand.provider + ` · ` + e.rand.kind : ``,
        rImg: e.rand ? e.rand.img : ``,
        playRand: () => this.openGame(e.rand),
        isChat: e.sheet === `chat`,
        chatMsgs: (e.chatMsgs || this.chatSeed).map((e) => ({
          text: e.text,
          align: e.from === `me` ? `flex-end` : `flex-start`,
          bg: e.from === `me` ? `rgb(var(--rc-marca))` : `rgb(var(--rc-fondo))`,
          radius: e.from === `me` ? `14px 14px 4px 14px` : `14px 14px 14px 4px`,
        })),
        chatQuick: [
          `Cómo cargo saldo`,
          `Mi retiro`,
          `Bono ROCCO12`,
          `Hablar con un asesor`,
        ].map((e) => ({
          label: e,
          send: () => this.chatPush(e),
        })),
        toast: e.toast,
      };
    }
    render() {
      return renderAzulMobileLayout(this.renderVals());
    }
  };
  Ht = `/* GENERATED by build/azul/transpilar.mjs from «RushyBet Home.dc.html» — the prototype's <helmet> style and its pseudo-class rules. */
html,body{margin:0;padding:0;background:rgb(var(--rc-fondo));overflow-x:hidden}
*{box-sizing:border-box}
a{color:rgb(var(--rc-acento));text-decoration:none}
a:hover{color:rgb(255,255,255)}
input::placeholder{color:rgba(255,255,255,0.2)}
button{font:inherit}
button:focus{outline:none}
@keyframes rbspin{to{transform:rotate(360deg)}}
button:focus-visible{outline:2px solid rgb(var(--rc-acento));outline-offset:2px}
div::-webkit-scrollbar{display:none}
.rce0:hover{background:rgb(var(--rc-hover)) !important}
.rce1:hover{background:rgb(var(--rc-acento)) !important}
.rce2:hover{background:rgb(var(--rc-marca)) !important;color:rgb(255,255,255) !important}
.rce3:hover{filter:brightness(1.4) !important}
.rce4:hover{background:rgb(var(--rc-marca)) !important}
.rce5:hover{transform:translateY(-3px) !important;background:rgb(var(--rc-hover)) !important;box-shadow:0 0 0 1px rgb(var(--rc-acento)),0 10px 24px rgba(0,0,0,0.35) !important}
.rce6:hover{transform:translateY(-8px) scale(1.03) !important;box-shadow:0 18px 40px rgba(0,0,0,0.45),0 0 0 2px rgb(var(--rc-marca)),0 0 32px rgba(var(--rc-marca),0.6) !important}
.rce7:hover{transform:scale(1.12) !important;background:rgb(var(--rc-fondo)) !important}
.rce8:hover{opacity:1 !important}
.rce9:hover{color:rgb(var(--rc-acento)) !important}
.rcea:hover{background:rgba(var(--rc-acento),0.08) !important}
.rceb:hover{background:rgb(var(--rc-hover)) !important;color:rgb(255,255,255) !important}
.rcec:hover{background:rgba(var(--rc-acento),0.1) !important}
.rced:hover{color:rgb(255,255,255) !important}
.rcee:hover{color:rgb(255,255,255) !important;background:rgb(var(--rc-hover)) !important}
.rcef:focus{box-shadow:inset 0 0 0 1.5px rgb(var(--rc-acento)),0 0 0 4px rgba(var(--rc-marca),0.25) !important}
.rceg:hover{color:rgb(255,255,255) !important;background:rgba(var(--rc-acento),0.12) !important}
.rceh:hover{filter:brightness(1.15) !important}
.rcei:hover{background:rgb(236,238,245) !important}
.rcej:hover{background:rgba(var(--rc-marca),0.18) !important}
.rcek:hover{background:rgba(37,211,102,0.22) !important;color:rgb(255,255,255) !important}
.rcel:hover{background:rgba(var(--rc-fondo),0.55) !important}
.rcem:focus{box-shadow:inset 0 0 0 1.5px rgb(var(--rc-acento)) !important}
`;
  Ut = `/* GENERATED by build/azul/transpilar.mjs from «RushyBet Mobile.dc.html» — the prototype's <helmet> style and its pseudo-class rules. */
html,body{margin:0;background:rgb(var(--rc-mesa))}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
a{color:rgb(var(--rc-acento));text-decoration:none}
a:hover{color:rgb(255,255,255)}
button{font:inherit}
button:focus{outline:none}
input::placeholder{color:rgba(255,255,255,0.3)}
div::-webkit-scrollbar{display:none}
@keyframes rbspin{to{transform:rotate(360deg)}}
.rcc0:focus{box-shadow:inset 0 0 0 1.5px rgb(var(--rc-acento)) !important}
.rcc1:hover{background:rgba(var(--rc-marca),0.18) !important}
`;
}
export { AzulMobileController, Ht, Ut, initializeMobileController };
