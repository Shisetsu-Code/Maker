/**
 * blaze / lobby-controller.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import { A, De } from "./game-catalog.js";
import { Ae } from "./element-adapter.js";
import { renderBlazeLobbyLayout } from "./lobby-layout.js";
let Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, I, an;
function on(e = new Date(), t) {
  let n = Math.random(),
    r =
      n < 0.45
        ? 0
        : n < 0.85
          ? +(1 + Math.random() * 2.5).toFixed(2)
          : +(4 + Math.random() * 120).toFixed(2),
    i =
      Math.round(
        (Math.random() < 0.8
          ? 0.5 + Math.random() * 40
          : 50 + Math.random() * 900) * 100,
      ) * 10;
  return {
    id: Math.random().toString(36).slice(2),
    game: Ht[Math.floor(Math.random() * Ht.length)],
    user: t || Wt[Math.floor(Math.random() * Wt.length)],
    time: an(e),
    amount: i,
    mult: r,
  };
}
let sn;
var BlazeLobbyController;
function initializeLobbyController() {
  Ht = A.slots;
  Ut = A.proveedores;
  Wt = [
    `Lucía_77`,
    `NachoRuiz`,
    `Marta.G`,
    `Kike_Crash`,
    `Sofi`,
    `ElPibe`,
    `Oculto`,
    `Vale99`,
    `Toni.M`,
    `Oculto`,
    `RaulX`,
    `Marco_27`,
  ];
  Gt = [
    [`popular`, `Juegos populares`, 0],
    [`slots`, `Slots`, 4],
    [`hot`, `En racha`, 8],
  ];
  Kt = [
    [`all`, `Todos`],
    [`popular`, `Populares`],
    [`slots`, `Slots`],
    [`hot`, `En racha`],
  ];
  qt = [
    [`all`, `Todas`],
    [`big`, `Grandes ganancias`],
    [`mine`, `Mis apuestas`],
  ];
  Jt = [
    {
      slot: `hero-main`,
      tag: `BONO DE BIENVENIDA`,
      title: `HASTA 300% Y 100 GIROS GRATIS`,
      text: `En tus primeras tres cargas`,
      cta: `Reclamar ahora`,
      bg: `var(--bb-acento,#0A0A0B)`,
      fg: `var(--bb-sobre,#FFFFFF)`,
      tagBg: `var(--bb-sobre,#FFFFFF)`,
      tagFg: `var(--bb-acento,#0A0A0B)`,
      sub: `var(--bb-sobre-2,#C9CAD0)`,
      btnBg: `var(--bb-sobre,#FFFFFF)`,
      btnFg: `var(--bb-acento,#0A0A0B)`,
    },
    {
      slot: `hero-side`,
      tag: `OFERTA ESPECIAL`,
      title: `CASHBACK SEMANAL 15%`,
      text: `Se acredita cada lunes`,
      cta: `Ver más`,
      bg: `var(--bb-slide-gray,#DCDCE0)`,
      fg: `var(--bb-text,#0A0A0B)`,
      tagBg: `var(--bb-acento,#0A0A0B)`,
      tagFg: `var(--bb-sobre,#FFFFFF)`,
      sub: `var(--bb-text-3,#6B6C73)`,
      btnBg: `var(--bb-acento,#0A0A0B)`,
      btnFg: `var(--bb-sobre,#FFFFFF)`,
    },
    {
      slot: `hero-race`,
      tag: `CARRERA SEMANAL`,
      title: `$ 50 MILLONES EN PREMIOS`,
      text: `Cada apuesta suma puntos a la tabla`,
      cta: `Participar`,
      bg: `var(--bb-acento,#0A0A0B)`,
      fg: `var(--bb-sobre,#FFFFFF)`,
      tagBg: `var(--bb-sobre,#FFFFFF)`,
      tagFg: `var(--bb-acento,#0A0A0B)`,
      sub: `var(--bb-sobre-2,#C9CAD0)`,
      btnBg: `var(--bb-sobre,#FFFFFF)`,
      btnFg: `var(--bb-acento,#0A0A0B)`,
    },
    {
      slot: `hero-tourney`,
      tag: `TORNEO DE SLOTS`,
      title: `EL MAYOR MULTIPLICADOR GANA`,
      text: `Termina el domingo a las 23:59`,
      cta: `Ver torneo`,
      bg: `var(--bb-slide-gray,#DCDCE0)`,
      fg: `var(--bb-text,#0A0A0B)`,
      tagBg: `var(--bb-acento,#0A0A0B)`,
      tagFg: `var(--bb-sobre,#FFFFFF)`,
      sub: `var(--bb-text-3,#6B6C73)`,
      btnBg: `var(--bb-acento,#0A0A0B)`,
      btnFg: `var(--bb-sobre,#FFFFFF)`,
    },
  ];
  Yt = [
    [`es`, `Español`],
    [`en`, `English`],
    [`pt`, `Português`],
    [`de`, `Deutsch`],
    [`fr`, `Français`],
  ];
  Xt = (e) =>
    `game-` +
    e
      .toLowerCase()
      .normalize(`NFD`)
      .replace(/[\u0300-\u036f]/g, ``)
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/^-|-$/g, ``);
  Zt = A.vivo.slice(0, 6);
  Qt = A.nuevos;
  $t = (e) => {
    let t = 2166136261;
    for (let n of String(e))
      ((t ^= n.charCodeAt(0)), (t = Math.imul(t, 16777619)));
    return t >>> 0;
  };
  en = (e) => {
    let t = $t(e),
      n = ``;
    for (let e = 0; e < 64; e++)
      ((t = Math.imul(t ^ (t >>> 15), 2246822507) >>> 0),
        (n += (t & 15).toString(16)));
    return n;
  };
  tn = {
    popular: `M12 3c1 3 4 5 4 9a4 4 0 01-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 0-8z`,
    slots: `M4 5h16v14H4zM9.3 5v14M14.7 5v14`,
    live: `M3 7h13v10H3zM16 10.5l5-3v9l-5-3`,
    new: `M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16v4M17 18h4`,
    providers: `M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z`,
  };
  nn = [
    [`EUR`, `€`],
    [`USDT`, `₮`],
    [`BTC`, `₿`],
  ];
  rn = [
    [`card`, `Tarjeta de débito/crédito`, `Visa · Mastercard · al instante`],
    [`bank`, `Transferencia bancaria`, `1–2 días hábiles`],
    [`crypto`, `Criptomonedas`, `BTC · ETH · USDT · sin comisión`],
  ];
  I = (e) =>
    e.toLocaleString(`es-AR`, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: `always`,
    });
  an = (e) =>
    String(e.getHours()).padStart(2, `0`) +
    `:` +
    String(e.getMinutes()).padStart(2, `0`);
  sn = Array.from(
    {
      length: 12,
    },
    (e, t) => {
      let n = [48.2, 120, 15.5, 312, 22.4, 87, 540, 33.3, 64, 19.8, 250, 41][t],
        r = [12, 5, 80, 2, 45, 10, 1, 30, 15, 60, 4, 25][t];
      return {
        user: Wt[t] === `Oculto` ? `Oculto` : Wt[t],
        game: Ht[(t * 5) % Ht.length],
        mult: I(n),
        win: I(n * r * 1e3),
      };
    },
  );
  BlazeLobbyController = class extends React.Component {
    state = {
      vw: Ae(),
      tab: `all`,
      betTab: `all`,
      query: ``,
      bets: Array.from(
        {
          length: 30,
        },
        (e, t) =>
          on(new Date(Date.now() - t * 2e4), t % 6 == 2 ? `Marco_27` : void 0),
      ),
      hover: null,
      slide: 0,
      menuOpen: !1,
      collapsed: !1,
      depositOpen: !1,
      depDone: !1,
      cur: `EUR`,
      amount: `50`,
      method: `card`,
      balance: 15e4,
      screen: `home`,
      game: null,
      loggedIn: this.props.startLoggedIn ?? !0,
      authOpen: !1,
      authMode: `login`,
      drawer: !1,
      loading: !1,
      walletTab: `deposit`,
      kyc: `none`,
      retryKey: 0,
      theme: (() => {
        try {
          return localStorage.getItem(`blazebet-theme`) || `light`;
        } catch {
          return `light`;
        }
      })(),
      cat: `all`,
      provider: null,
      searchOpen: !1,
      sq: ``,
      recentSearches: A.busquedas.slice(),
      bet: null,
      toasts: [],
      shown: 15e4,
      rake: 42800,
      rakeOpen: !1,
      favs: A.favs.slice(),
      recent: A.recientes.slice(),
      lang: `es`,
      langOpen: !1,
    };
    tickerRef = React.createRef();
    tickX = 0;
    componentDidMount() {
      ((this.onResize = () =>
        this.setState({
          vw: Ae(),
        })),
        window.addEventListener(`resize`, this.onResize),
        this.onResize(),
        document.documentElement.classList.toggle(
          `theme-dark`,
          this.state.theme === `dark`,
        ),
        (this.onKey = (e) => {
          let t = /INPUT|TEXTAREA/.test((e.target && e.target.tagName) || ``);
          e.key === `Escape`
            ? this.setState({
                searchOpen: !1,
                bet: null,
                rakeOpen: !1,
                menuOpen: !1,
              })
            : e.key === `/` &&
              !t &&
              (e.preventDefault(),
              this.setState({
                searchOpen: !0,
                sq: ``,
              }));
        }),
        window.addEventListener(`keydown`, this.onKey),
        (this.t = setInterval(() => {
          this.props.liveFeed !== !1 &&
            this.setState((e) => ({
              bets: [on(), ...e.bets].slice(0, 40),
            }));
        }, 1800)),
        (this.c = setInterval(() => {
          this.props.autoplay === !1 ||
            this.state.screen !== `home` ||
            this.setState((e) => ({
              slide: (e.slide + 1) % (this.maxSlide() + 1),
            }));
        }, 5e3)));
      let e = () => {
        let t = this.tickerRef.current;
        if (t) {
          this.tickX -= 0.5;
          let e = t.scrollWidth / 2;
          (e > 0 && -this.tickX >= e && (this.tickX += e),
            (t.style.transform = `translateX(` + this.tickX + `px)`));
        }
        this.raf = requestAnimationFrame(e);
      };
      this.raf = requestAnimationFrame(e);
    }
    componentWillUnmount() {
      (clearInterval(this.t),
        clearInterval(this.c),
        cancelAnimationFrame(this.raf),
        clearTimeout(this.lt),
        window.removeEventListener(`resize`, this.onResize),
        window.removeEventListener(`keydown`, this.onKey),
        cancelAnimationFrame(this.balRaf));
    }
    componentDidUpdate() {
      let e = this.state.balance;
      if (
        (this._lastBal === void 0 && (this._lastBal = e), e !== this._lastBal)
      ) {
        ((this._lastBal = e), cancelAnimationFrame(this.balRaf));
        let t = this.state.shown,
          n = e,
          r = performance.now(),
          i = (e) => {
            let a = Math.min(1, (e - r) / 900),
              o = 1 - (1 - a) ** 3;
            (this.setState({
              shown: t + (n - t) * o,
            }),
              a < 1 && (this.balRaf = requestAnimationFrame(i)));
          };
        this.balRaf = requestAnimationFrame(i);
      }
    }
    toggleTheme = (e) => {
      let t = this.state.theme === `dark` ? `light` : `dark`;
      try {
        localStorage.setItem(`blazebet-theme`, t);
      } catch {}
      let n =
          e && e.currentTarget
            ? e.currentTarget.getBoundingClientRect()
            : {
                left: innerWidth - 40,
                top: 20,
                width: 0,
                height: 0,
              },
        r = n.left + n.width / 2,
        i = n.top + n.height / 2,
        a = Math.hypot(
          Math.max(r, innerWidth - r),
          Math.max(i, innerHeight - i),
        ),
        o = () =>
          new Promise((e) => {
            (document.documentElement.classList.toggle(
              `theme-dark`,
              t === `dark`,
            ),
              this.setState(
                {
                  theme: t,
                },
                e,
              ));
          }),
        s =
          window.matchMedia &&
          matchMedia(`(prefers-reduced-motion: reduce)`).matches;
      if (!document.startViewTransition || s) {
        o();
        return;
      }
      document
        .startViewTransition(o)
        .ready.then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ` + r + `px ` + i + `px)`,
                `circle(` + a + `px at ` + r + `px ` + i + `px)`,
              ],
            },
            {
              duration: 700,
              easing: `cubic-bezier(.4,0,.2,1)`,
              pseudoElement: `::view-transition-new(root)`,
            },
          );
        })
        .catch(() => {});
    };
    toast = (e) => {
      let t = Date.now() + Math.random();
      (this.setState((n) => ({
        toasts: [
          ...n.toasts,
          {
            id: t,
            text: e,
          },
        ].slice(-3),
      })),
        setTimeout(
          () =>
            this.setState((e) => ({
              toasts: e.toasts.filter((e) => e.id !== t),
            })),
          3200,
        ));
    };
    toBet(e, t) {
      return {
        id: `#` + (88e5 + ($t(e.id) % 99999)),
        game: e.game,
        user: t || e.user,
        time: e.time || e.date,
        amount: e.amount,
        mult: e.mult,
      };
    }
    isMobile() {
      return (this.state.vw ?? 1440) < 960;
    }
    perView() {
      return (this.state.vw ?? 1440) >= 1100 ? 2 : 1;
    }
    maxSlide() {
      return Jt.length - this.perView();
    }
    scroll(e, t) {
      let n = document.getElementById(`row-` + e);
      n &&
        n.scrollBy({
          left: t * 444,
        });
    }
    nav = (e, t = {}) => {
      (clearTimeout(this.lt),
        this.setState({
          screen: e,
          loading: !0,
          drawer: !1,
          menuOpen: !1,
          hover: null,
          ...t,
        }),
        (this.lt = setTimeout(
          () =>
            this.setState({
              loading: !1,
            }),
          380,
        )),
        window.scrollTo(0, 0));
    };
    openAuth = (e) =>
      this.setState({
        authOpen: !0,
        authMode: e,
        menuOpen: !1,
        drawer: !1,
      });
    renderVals() {
      let e = this.state,
        t = e.vw ?? 1440,
        n = this.isMobile(),
        r = this.props.demoState ?? `Normal`,
        i = r === `Vacío`,
        a = (e) => ({
          bg: e ? `var(--bb-acento,#0A0A0B)` : `transparent`,
          fg: e ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text-3,#6B6C73)`,
        }),
        o = e.query.trim().toLowerCase(),
        s = () =>
          this.setState({
            hover: null,
          }),
        c = (t, n, r) =>
          this.nav(`game`, {
            game: {
              name: t,
              provider: n || A.prov(t),
              slot: r || Xt(t),
            },
            recent: [t, ...e.recent.filter((e) => e !== t)].slice(0, 24),
          }),
        l = (e, t = {}) =>
          this.nav(`category`, {
            cat: e,
            ...t,
          }),
        u = i
          ? []
          : Gt.filter(([t]) => e.tab === `all` || e.tab === t)
              .map(([r, i, a]) => ({
                title: i,
                domId: `row-` + r,
                all: (e) => {
                  (e.preventDefault(), l(r));
                },
                prev: () => this.scroll(r, -1),
                next: () => this.scroll(r, 1),
                games: Array.from(
                  {
                    length: 12,
                  },
                  (i, o) => {
                    let l = Ht[(a + o) % Ht.length],
                      u = A.prov(l),
                      d = Xt(l),
                      f = r + `-` + o;
                    return {
                      slot: d,
                      name: l,
                      provider: u,
                      img: A.img(l),
                      players: (
                        (((a + 3) * (o + 7) * 137) % 2400) +
                        40
                      ).toLocaleString(`es-AR`, {
                        useGrouping: `always`,
                      }),
                      playersLabel:
                        t < 600
                          ? (
                              (((a + 3) * (o + 7) * 137) % 2400) +
                              40
                            ).toLocaleString(`es-AR`, {
                              useGrouping: `always`,
                            })
                          : (
                              (((a + 3) * (o + 7) * 137) % 2400) +
                              40
                            ).toLocaleString(`es-AR`, {
                              useGrouping: `always`,
                            }) + ` jugando`,
                      hover: !n && e.hover === f,
                      enter: () =>
                        this.setState({
                          hover: f,
                        }),
                      leave: s,
                      open: () => c(l, u, Xt(l)),
                    };
                  },
                ).filter((e) => !o || e.name.toLowerCase().includes(o)),
              }))
              .filter((e) => e.games.length),
        d = i ? [] : e.bets;
      (e.betTab === `big` && (d = d.filter((e) => e.mult >= 4)),
        e.betTab === `mine` && (d = d.filter((e) => e.user === `Marco_27`)));
      let f = this.perView(),
        p = Math.min(e.slide, this.maxSlide()),
        m = parseFloat(e.amount) || 0,
        h = () =>
          this.setState({
            depositOpen: !1,
            depDone: !1,
          }),
        g = e.loading || r === `Cargando`,
        _ = !g && r === `Error`,
        v =
          !g &&
          !_ &&
          !e.loggedIn &&
          [`wallet`, `profile`, `kyc`, `mybets`].includes(e.screen),
        y = !g && !_ && !v,
        b = {
          loading: g,
          error: _,
          gate: v,
        };
      [
        `home`,
        `game`,
        `wallet`,
        `profile`,
        `kyc`,
        `category`,
        `providers`,
        `mybets`,
        `support`,
        `stats`,
      ].forEach((t) => {
        b[t] = y && e.screen === t;
      });
      let x = {
          home: () => this.nav(`home`),
          bets: () =>
            this.nav(`wallet`, {
              walletTab: `history`,
            }),
          wallet: () =>
            this.nav(`wallet`, {
              walletTab: `deposit`,
            }),
          profile: () => this.nav(`profile`),
          kyc: () => this.nav(`kyc`),
          fav: () => l(`fav`),
          recent: () => l(`recent`),
          all: () => l(`all`),
          mybets: () => this.nav(`mybets`),
          support: () => this.nav(`support`),
          providersLink: (e) => {
            (e.preventDefault(), this.nav(`providers`));
          },
        },
        S = `var(--bb-bg-deep,#FFFFFF)`,
        C = `transparent`,
        w = (t) => e.screen === `category` && e.cat === t,
        T = {
          home: e.screen === `home` || e.screen === `game` ? S : C,
          fav: w(`fav`) ? S : C,
          recent: w(`recent`) ? S : C,
          mybets: e.screen === `mybets` ? S : C,
          support: e.screen === `support` ? S : C,
        },
        ee = () =>
          e.loggedIn
            ? this.nav(`wallet`, {
                walletTab: `deposit`,
              })
            : this.openAuth(`register`),
        te = (e) => (e ? `var(--bb-text,#0A0A0B)` : `var(--bb-text-3,#6B6C73)`);
      return {
        sidebarFull: (t >= 960 && !e.collapsed) || (n && e.drawer),
        sidebarMini: t >= 960 && e.collapsed,
        sbPos: n ? `fixed` : `relative`,
        drawerOpen: n && e.drawer,
        closeDrawer: () =>
          this.setState({
            drawer: !1,
          }),
        toggleSidebar: () =>
          n
            ? this.setState({
                drawer: !1,
              })
            : this.setState({
                collapsed: !e.collapsed,
              }),
        isMobile: n,
        notMobile: !n,
        slideH: t < 600 ? `168px` : `200px`,
        slidePad: t < 600 ? `16px` : `22px 24px`,
        slideGap: t < 600 ? `8px` : `10px`,
        slideTitle: t < 600 ? `26px` : `38px`,
        slideImgW: t < 600 ? `34%` : `38%`,
        quickCols:
          t < 600
            ? `repeat(2, minmax(0, 1fr))`
            : `repeat(auto-fit,minmax(220px,1fr))`,
        quickGap: t < 600 ? `8px` : `12px`,
        quickH: t < 600 ? `72px` : `92px`,
        sheetAlign: t < 600 ? `flex-end` : `center`,
        sheetPad: t < 600 ? `0` : `16px`,
        sheetMax: t < 600 ? `100%` : `420px`,
        sheetRadius: t < 600 ? `12px 12px 0 0` : `8px`,
        tileBasis:
          t < 600
            ? `calc((100% - 30px) / 4)`
            : t < 960
              ? `calc((100% - 50px) / 6)`
              : `138px`,
        tileFont: t < 600 ? `11px` : `13px`,
        tileMeta: t < 600 ? `10px` : `12px`,
        pagePad: n ? `14px 14px 32px` : `20px 24px 48px`,
        tickPad: n ? `14px` : `190px`,
        logoSize: n ? `20px` : `24px`,
        logoA: t < 520 ? `B` : `BLAZE`,
        logoB: t < 520 ? `B` : `BET`,
        logoImg: t < 520 ? this.props.isoUrl : this.props.logoUrl,
        logoImgClase:
          (t < 520 ? this.props.isoClase : this.props.logoClase) || ``,
        logoImgAlto: t < 520 ? `24px` : n ? `20px` : `24px`,
        logoImgAncho: (t < 520 && this.props.isoAncho) || `auto`,
        logoAlt: this.props.marcaNombre || ``,
        balPad: n ? `0 10px` : `0 14px`,
        depPad: n ? `0 12px` : `0 18px`,
        depLabel: t < 420 ? `+` : `Cargar`,
        go: x,
        act: T,
        showBg: this.props.showBackground ?? !0,
        casinoLinks: [
          [`popular`, `Populares`],
          [`slots`, `Slots`],
          [`live`, `Casino en vivo`],
          [`new`, `Nuevos`],
          [`providers`, `Proveedores`],
        ].map(([t, n]) => {
          let r =
            t === `providers`
              ? e.screen === `providers` || w(`provider`)
              : w(t);
          return {
            label: n,
            icon: tn[t],
            iconColor: r
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-text-4,#8A8B92)`,
            fg: r ? `var(--bb-text,#0A0A0B)` : `var(--bb-text-3,#6B6C73)`,
            bg: r ? `var(--bb-bg-deep,#FFFFFF)` : `transparent`,
            go: () => (t === `providers` ? this.nav(`providers`) : l(t)),
          };
        }),
        langs: Yt.map(([t, n]) => ({
          label: n,
          mark: e.lang === t ? `✓` : ``,
          color:
            e.lang === t
              ? `var(--bb-text,#0A0A0B)`
              : `var(--bb-text-3,#6B6C73)`,
          select: () =>
            this.setState({
              lang: t,
              langOpen: !1,
            }),
        })),
        langOpen: e.langOpen,
        langLabel: Yt.find((t) => t[0] === e.lang)[1],
        langCaret: e.langOpen ? `▲` : `▼`,
        langBg: e.langOpen ? `var(--bb-surface,#EFEFF1)` : `transparent`,
        toggleLang: () =>
          this.setState({
            langOpen: !e.langOpen,
          }),
        expandLang: () =>
          this.setState({
            collapsed: !1,
            langOpen: !0,
          }),
        cat: e.cat,
        provider: e.provider || ``,
        favs: e.favs,
        recent: e.recent,
        isFav: !!(e.game && e.favs.includes(e.game.name)),
        toggleFav: () => {
          let t = (e.game || {}).name;
          t &&
            this.setState((e) => ({
              favs: e.favs.includes(t)
                ? e.favs.filter((e) => e !== t)
                : [t, ...e.favs],
            }));
        },
        loggedIn: e.loggedIn,
        loggedOut: !e.loggedIn,
        showBell: e.loggedIn && !n,
        balance: I(e.balance),
        balanceNum: e.balance,
        curSymbol: `$`,
        addBalance: (e) =>
          this.setState((t) => ({
            balance: Math.max(0, t.balance + e),
          })),
        menuOpen: e.menuOpen,
        menuBtnBg: e.menuOpen ? `var(--bb-surface,#EFEFF1)` : `transparent`,
        toggleMenu: () =>
          this.setState({
            menuOpen: !e.menuOpen,
          }),
        closeMenu: () =>
          this.setState({
            menuOpen: !1,
          }),
        menuItems: [
          {
            label: `Billetera`,
            go: x.wallet,
          },
          {
            label: `Mis apuestas`,
            go: x.mybets,
          },
          {
            label: `Favoritos`,
            go: x.fav,
          },
          {
            label: `Estadísticas`,
            go: () => this.nav(`stats`),
          },
          {
            label: `Verificación de identidad`,
            go: x.kyc,
          },
          {
            label: `Ajustes y límites`,
            go: x.profile,
          },
          {
            label: `Soporte`,
            go: x.support,
          },
        ],
        logout: () => {
          (this.setState({
            loggedIn: !1,
            menuOpen: !1,
          }),
            this.nav(`home`));
        },
        openLogin: () => this.openAuth(`login`),
        openRegister: () => this.openAuth(`register`),
        authOpen: e.authOpen,
        authMode: e.authMode,
        closeAuth: () =>
          this.setState({
            authOpen: !1,
          }),
        onLogin: () =>
          this.setState({
            loggedIn: !0,
            authOpen: !1,
          }),
        tickerRef: this.tickerRef,
        ticker: [...sn, ...sn],
        slides: Jt.map((e) => ({
          ...e,
          img: De.img(e.slot),
          go: ee,
        })),
        slideBasis: f === 2 ? `calc(50% - 6px)` : `100%`,
        trackX: `translateX(calc(` + -p + ` * (100% + 12px) / ` + f + `))`,
        dots: Array.from(
          {
            length: this.maxSlide() + 1,
          },
          (e, t) => ({
            w: t === p ? `22px` : `6px`,
            bg:
              t === p
                ? `var(--bb-acento,#0A0A0B)`
                : `var(--bb-border-strong,#C2C2C7)`,
            go: () =>
              this.setState({
                slide: t,
              }),
          }),
        ),
        quick: [
          {
            id: `quick-wheel`,
            img: De.img(`quick-wheel`),
            title: `Rueda diaria`,
            ph: `Imagen rueda`,
            go: ee,
          },
          {
            id: `quick-bonus`,
            img: De.img(`quick-bonus`),
            title: `Bonos`,
            ph: `Imagen bonos`,
            go: ee,
          },
        ],
        query: e.query,
        onQuery: (e) =>
          this.setState({
            query: e.target.value,
          }),
        tabs: Kt.map(([t, n]) => ({
          label: n,
          ...a(e.tab === t),
          select: () =>
            this.setState({
              tab: t,
            }),
        })),
        rows: u,
        noResults: u.length === 0,
        emptyMsg: i
          ? `Todavía no hay juegos en esta categoría.`
          : `No encontramos juegos con ese nombre.`,
        providers: Ut.map((e) => ({
          name: e,
          open: () =>
            l(`provider`, {
              provider: e,
            }),
        })),
        provPrev: () => this.scroll(`providers`, -1),
        provNext: () => this.scroll(`providers`, 1),
        betTabs: qt.map(([t, n]) => ({
          label: n,
          ...a(e.betTab === t),
          select: () =>
            this.setState({
              betTab: t,
            }),
        })),
        betsEmpty: d.length === 0,
        bets: d.slice(0, 10).map((e, t) => {
          let n = e.amount * e.mult;
          return {
            ...e,
            amount: I(e.amount),
            mult: I(e.mult),
            payout: n > 0 ? I(n) : `-` + I(e.amount),
            payColor:
              n > e.amount
                ? `var(--bb-text,#0A0A0B)`
                : `var(--bb-text-3,#6B6C73)`,
            userColor:
              e.user === `Oculto`
                ? `var(--bb-text-3,#6B6C73)`
                : `var(--bb-text,#0A0A0B)`,
            open: () =>
              this.setState({
                bet: this.toBet(e),
              }),
            zebra:
              t % 2 ? `transparent` : `rgba(var(--bb-text-rgb,10,10,11),0.025)`,
          };
        }),
        footerCols: [
          {
            title: `Casino`,
            links: [
              `Juegos de casino`,
              `Slots`,
              `Casino en vivo`,
              `Proveedores`,
            ],
          },
          {
            title: `Soporte`,
            links: [
              `Centro de ayuda`,
              `Juego responsable`,
              `Verificación`,
              `Contacto`,
            ],
          },
          {
            title: `Sobre nosotros`,
            links: [
              `Términos y condiciones`,
              `Privacidad`,
              `Afiliados`,
              `Blog`,
            ],
          },
        ],
        skelTiles: Array.from(
          {
            length: 8,
          },
          (e, t) => t,
        ),
        retry: () => this.nav(e.screen),
        view: b,
        demo: i ? `empty` : `normal`,
        toggleTheme: this.toggleTheme,
        themeSwBg:
          e.theme === `dark`
            ? `var(--bb-acento,#0A0A0B)`
            : `var(--bb-border-strong,#C2C2C7)`,
        themeKnob: e.theme === `dark` ? `19px` : `3px`,
        hdrPad: t < 600 ? `0 12px` : `0 24px`,
        hdrGap: t < 600 ? `8px` : `12px`,
        iconBox: t < 600 ? `36px` : `40px`,
        sideFlex: t < 600 ? `0 0 auto` : `1 1 0`,
        rightMin: t < 600 ? `auto` : `0`,
        balFlex: t < 600 ? `1 1 auto` : `0 0 auto`,
        balGap: t < 600 ? `4px` : `10px`,
        balFont: t < 600 ? `13px` : `14px`,
        iconGap: t < 600 ? `2px` : `4px`,
        showARS: t >= 420,
        themeTitle: e.theme === `dark` ? `Modo claro` : `Modo oscuro`,
        themeIcon:
          e.theme === `dark`
            ? `M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4`
            : `M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z`,
        skel: (() => {
          let t =
            {
              home: `home`,
              game: `game`,
              category: `grid`,
              providers: `grid`,
              wallet: `table`,
              mybets: `table`,
              stats: `table`,
            }[e.screen] || `form`;
          return {
            home: t === `home`,
            grid: t === `grid`,
            table: t === `table`,
            form: t === `form`,
            game: t === `game`,
          };
        })(),
        skelGridCols:
          t < 600
            ? `repeat(4,minmax(0,1fr))`
            : `repeat(auto-fill,minmax(130px,1fr))`,
        skelRows: [0, 1, 2, 3, 4, 5],
        balanceShown: I(e.shown),
        toast: this.toast,
        toastTop: n ? `64px` : `72px`,
        toastLeft: n ? `16px` : `auto`,
        showRake: e.loggedIn && t >= 1100,
        rakeLabel: I(e.rake),
        rakeDot:
          e.rake > 0
            ? `var(--bb-acento,#0A0A0B)`
            : `var(--bb-border-strong,#C2C2C7)`,
        rakeEmpty: e.rake <= 0,
        rakeOpen: e.rakeOpen,
        toggleRake: () =>
          this.setState({
            rakeOpen: !e.rakeOpen,
          }),
        closeRake: () =>
          this.setState({
            rakeOpen: !1,
          }),
        rakeCta:
          e.rake > 0 ? `Reclamar a mi saldo` : `Nada para reclamar todavía`,
        claimRake: () => {
          if (e.rake <= 0) return;
          let t = e.rake;
          (this.setState((e) => ({
            balance: e.balance + t,
            rake: 0,
            rakeOpen: !1,
          })),
            this.toast(`Se acreditaron $ ` + I(t) + ` de rakeback.`));
        },
        searchOpen: e.searchOpen,
        searchPad: n ? `0` : `72px 16px 16px`,
        openSearch: () =>
          this.setState({
            searchOpen: !0,
            sq: ``,
            menuOpen: !1,
            drawer: !1,
          }),
        closeSearch: () =>
          this.setState({
            searchOpen: !1,
          }),
        sq: e.sq,
        onSq: (e) =>
          this.setState({
            sq: e.target.value,
          }),
        ...(() => {
          let t = e.sq.trim().toLowerCase(),
            n = [
              ...Ht.map((e) => [e, A.prov(e), `Slot`]),
              ...Zt.map((e) => [e, A.prov(e), `En vivo`]),
              ...Qt.map((e) => [e, A.prov(e), `Nuevo`]),
            ],
            r = t
              ? n
                  .filter(
                    ([e, n]) =>
                      e.toLowerCase().includes(t) ||
                      n.toLowerCase().includes(t),
                  )
                  .slice(0, 8)
              : [],
            i = ([t, n]) => {
              (this.setState((t) => ({
                searchOpen: !1,
                recentSearches: [
                  e.sq.trim(),
                  ...t.recentSearches.filter(
                    (t) => t.toLowerCase() !== e.sq.trim().toLowerCase(),
                  ),
                ]
                  .filter(Boolean)
                  .slice(0, 5),
              })),
                c(t, n, Xt(t)));
            };
          return {
            sqEmpty: !t,
            sqHasResults: r.length > 0,
            sqNoResults: !!t && r.length === 0,
            sqCount: r.length + (r.length === 1 ? ` resultado` : ` resultados`),
            sqResults: r.map((e, t) => ({
              name: e[0],
              meta: e[1] + ` · ` + e[2],
              slot: Xt(e[0]),
              img: A.img(e[0]),
              bg: t === 0 ? `var(--bb-surface-2,#E5E5E8)` : `transparent`,
              open: () => i(e),
            })),
            onSqKey: (e) => {
              e.key === `Enter` && r[0] && i(r[0]);
            },
          };
        })(),
        hasRecentSearches: e.recentSearches.length > 0,
        recentSearches: e.recentSearches.map((e) => ({
          label: e,
          use: () =>
            this.setState({
              sq: e,
            }),
        })),
        clearRecentSearches: () =>
          this.setState({
            recentSearches: [],
          }),
        searchCats: [
          [`slots`, `Slots`],
          [`live`, `Casino en vivo`],
          [`new`, `Nuevos`],
          [`popular`, `Populares`],
          [`hot`, `En racha`],
          [`providers`, `Proveedores`],
        ].map(([e, t]) => ({
          label: t,
          go: () => {
            (this.setState({
              searchOpen: !1,
            }),
              e === `providers` ? this.nav(`providers`) : l(e));
          },
        })),
        betOpen: !!e.bet,
        bet: e.bet
          ? (() => {
              let t = e.bet,
                n = t.amount * t.mult;
              return {
                id: t.id,
                user: t.user,
                time: t.time,
                mult: I(t.mult),
                payout: I(n),
                multColor:
                  t.mult >= 1
                    ? `var(--bb-text,#0A0A0B)`
                    : `var(--bb-text-3,#6B6C73)`,
                payColor:
                  n > t.amount
                    ? `var(--bb-text,#0A0A0B)`
                    : `var(--bb-text-3,#6B6C73)`,
                seed: en(t.id),
                rows: [
                  {
                    k: `Juego`,
                    v: t.game,
                  },
                  {
                    k: `Apuesta`,
                    v: `$ ` + I(t.amount),
                  },
                  {
                    k: `Multiplicador`,
                    v: I(t.mult) + `×`,
                  },
                  {
                    k: `Resultado`,
                    v:
                      n > t.amount
                        ? `+ $ ` + I(n - t.amount)
                        : `− $ ` + I(t.amount - n),
                  },
                ],
              };
            })()
          : {
              rows: [],
            },
        closeBet: () =>
          this.setState({
            bet: null,
          }),
        copySeed: () => {
          (navigator.clipboard?.writeText(en(e.bet?.id)).catch(() => {}),
            this.toast(`Semilla copiada.`));
        },
        shareBet: () => {
          (navigator.clipboard
            ?.writeText(
              `https://` +
                (this.props.marcaSlug || `blazebet`) +
                `.com/apuesta/` +
                (e.bet?.id || ``).replace(`#`, ``),
            )
            .catch(() => {}),
            this.toast(`Enlace de la apuesta copiado.`));
        },
        playBetGame: () => {
          let t = e.bet?.game;
          (this.setState({
            bet: null,
          }),
            t && c(t, ``, Xt(t)));
        },
        openBetExt: (e) =>
          this.setState({
            bet: this.toBet(e, `Marco_27`),
          }),
        game: e.game || {
          name: Ht[0],
          provider: A.prov(Ht[0]),
          slot: Xt(Ht[0]),
        },
        openGame: c,
        walletTab: e.walletTab,
        kyc: e.kyc,
        navTo: (e, t) => this.nav(e, t || {}),
        setKyc: (e) =>
          this.setState({
            kyc: e,
          }),
        mnav: {
          menu: {
            label: `Menú`,
            color: te(e.drawer),
            go: () =>
              this.setState({
                drawer: !e.drawer,
              }),
          },
          casino: {
            label: `Casino`,
            color: te(
              (!e.drawer && [`home`, `game`, `providers`].includes(e.screen)) ||
                (e.screen === `category` && ![`fav`].includes(e.cat)),
            ),
            go: x.home,
          },
          fav: {
            label: `Favoritos`,
            color: te(!e.drawer && w(`fav`)),
            go: x.fav,
          },
          bets: {
            label: `Apuestas`,
            color: te(!e.drawer && e.screen === `mybets`),
            go: e.loggedIn ? x.mybets : () => this.openAuth(`login`),
          },
          me: {
            label: e.loggedIn ? `Billetera` : `Entrar`,
            color: te(
              !e.drawer &&
                [`wallet`, `profile`, `kyc`, `support`].includes(e.screen),
            ),
            go: e.loggedIn ? x.wallet : () => this.openAuth(`login`),
          },
        },
        depositOpen: e.depositOpen,
        depForm: !e.depDone,
        depDone: e.depDone,
        openDeposit: ee,
        closeDeposit: h,
        currencies: nn.map(([t]) => ({
          label: t,
          bg:
            e.cur === t
              ? `rgba(var(--bb-acento-rgb,10,10,11),0.12)`
              : `var(--bb-bg,#F7F7F8)`,
          border:
            e.cur === t
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-border,#D8D8DC)`,
          select: () =>
            this.setState({
              cur: t,
            }),
        })),
        depAmount: e.amount,
        depCur: e.cur,
        onAmount: (e) =>
          this.setState({
            amount: e.target.value,
          }),
        quickAmounts: [10, 50, 100, 250].map((e) => ({
          label: e + ``,
          bg:
            m === e
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-surface-2,#E5E5E8)`,
          fg: m === e ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text,#0A0A0B)`,
          select: () =>
            this.setState({
              amount: String(e),
            }),
        })),
        methods: rn.map(([t, n, r]) => ({
          label: n,
          note: r,
          border:
            e.method === t
              ? `var(--bb-acento,#0A0A0B)`
              : `var(--bb-border,#D8D8DC)`,
          dot: e.method === t ? `var(--bb-acento,#0A0A0B)` : `transparent`,
          select: () =>
            this.setState({
              method: t,
            }),
        })),
        depCta:
          m > 0 ? `Depositar ` + I(m) + ` ` + e.cur : `Introduce un importe`,
        confirmDeposit: () => {
          m > 0 &&
            this.setState((e) => ({
              depDone: !0,
              balance: e.cur === `EUR` ? e.balance + m : e.balance,
            }));
        },
        depMsg: `Hemos acreditado ` + I(m) + ` ` + e.cur + ` en tu cuenta.`,
      };
    }
    render() {
      return renderBlazeLobbyLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { BlazeLobbyController, initializeLobbyController };
