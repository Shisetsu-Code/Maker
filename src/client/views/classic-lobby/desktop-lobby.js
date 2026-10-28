/**
 * classic-lobby / desktop-lobby.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { createLazyInitializer } from "./demo-guards.js";
import { Ia } from "./game-catalog.js";
import { ys, xs, Ss, ws, Ts } from "./game-search.js";
import { Gs } from "./account-security.js";
import {
  ic,
  ac,
  oc,
  sc,
  B,
  V,
  lc,
  uc,
  dc,
  fc,
  mc,
  hc,
  gc,
  _c,
  MemoGameCard,
} from "./game-cards.js";
import { Yc, Xc } from "./account-helpers.js";
import { Zc, _l, bl } from "./game-preferences.js";
import { MobileGameSearch, MobileLobbyShell } from "./mobile-lobby.js";
import {
  CategoryDoors,
  LazyVisible,
  LoadMoreSentinel,
  HorizontalGameList,
  PromoCard,
  AnimatedCents,
  ValueLabel,
  SportsCard,
} from "./lobby-sections.js";
import { tu } from "./support-chat.js";
function Al(e) {
  let t = jl.get(e);
  if (t !== void 0) return t;
  let n = e
    .replace(/\/\*[\s\S]*?\*\//g, ``)
    .replace(
      /[ \t]+\n/g,
      `
`,
    )
    .replace(
      /\n{2,}/g,
      `
`,
    )
    .trim();
  return (jl.set(e, n), n);
}
var jl, Ml;
let Nl, Pl, Fl, Il, Ll, Rl, zl, Bl, Vl, U, Hl, W, G, K, Ul, Wl, Gl;
function DesktopLobby({
  user: e,
  balanceCents: t,
  held: n,
  games: r,
  winners: i,
  pollMs: a,
  onPlay: o,
  onLogin: s,
  onRegister: c,
  onGoogle: l,
  onCargar: u,
  onRetirar: d,
  onLogout: f,
  favGames: p,
  recentGames: m,
  onFav: h,
  onCloseAccount: g,
  onMovimientos: _,
  onFeedback: v,
  onSports: y,
  gameOpen: b,
  whatsappSoporte: x,
  tema: S = null,
}) {
  let C = S?.lobby ?? null,
    w = C ? C.acento : B,
    ee = C
      ? C.gradBoton
      : `linear-gradient(180deg, #FF742A 0%, #FF5A0C 58%, #F24E00 100%)`,
    te = C ? C.tintaBoton : `#fff`,
    [ne, T] = (0, React.useState)(`inicio`),
    [E, re] = (0, React.useState)(i),
    [ie, ae] = (0, React.useState)([]),
    D = (0, React.useRef)(new Set(i.map((e) => e.id)));
  ((0, React.useEffect)(() => {
    let e = !0,
      t = setInterval(async () => {
        if (!document.hidden)
          try {
            let t = await fetch(`/api/winners`, {
              cache: `no-store`,
            });
            if (!t.ok || !e) return;
            let n = (await t.json()).winners;
            if (!e || !Array.isArray(n) || n.length === 0) return;
            let r = n.filter((e) => !D.current.has(e.id)).map((e) => e.id);
            if (r.length === 0) return;
            for (let e of n) D.current.add(e.id);
            (re(n), ae(r));
          } catch {}
      }, a);
    return () => {
      ((e = !1), clearInterval(t));
    };
  }, [a]),
    (0, React.useEffect)(() => {
      let e = i.filter((e) => !D.current.has(e.id)).map((e) => e.id);
      if (e.length !== 0) {
        for (let e of i) D.current.add(e.id);
        (re(i), ae(e));
      }
    }, [i]));
  let [O, oe] = (0, React.useState)(``),
    [se, ce] = (0, React.useState)(!1),
    [le, k] = (0, React.useState)(!1),
    [A, ue] = (0, React.useState)(`todos`),
    [de, fe] = (0, React.useState)(!1),
    [pe, me] = (0, React.useState)(24),
    [he, ge] = (0, React.useState)(null),
    _e = xs(he),
    ve = (0, React.useMemo)(() => (_e ? Ss(_e.code) : []), [_e]),
    ye = O.trim().toLowerCase(),
    j = ye.length > 0,
    be = _e !== null && !j,
    [xe, Se] = (0, React.useState)(null),
    Ce = xe !== null && !j && !be,
    we = (0, React.useMemo)(() => [], []),
    Te = (0, React.useMemo)(
      () => (xe === `fav` ? p : xe === `recientes` ? m : we),
      [xe, p, m, we],
    ),
    Ee = xe === `fav` ? `Favoritos` : `Seguí jugando`,
    De = {
      hero: !j && !be && ne === `inicio`,
      promos: !j && !be && ne === `inicio`,
      mine: !j && !be && (ne === `inicio` || ne === `tendencias`),
      rec: !j && !be && (ne === `inicio` || ne === `tendencias`),
      slots: ne === `slots` || j,
      provs: !j && !be && ne === `inicio`,
      dep: !j && !be && (ne === `inicio` || ne === `deportes`),
    },
    Oe = ys,
    ke = (0, React.useMemo)(() => Oe.reduce((e, t) => e + t.count, 0), [Oe]),
    Ae = (0, React.useMemo)(() => r.filter((e) => e.cat === `slots`), [r]),
    je = (0, React.useMemo)(() => {
      let e = new Map();
      for (let t of r) {
        let n = Zc(t.vendorCode, t.gameCode);
        n && !e.has(n) && e.set(n, t);
      }
      let t = [],
        n = new Set();
      for (let [r, i] of _l) {
        let a = e.get(`${r}|${i}`);
        if ((a && !n.has(a.idx) && (t.push(a), n.add(a.idx)), t.length === 8))
          break;
      }
      for (let e of Oe) {
        if (t.length >= 8) break;
        let r = ws(e.code, 1)[0];
        r && !n.has(r.idx) && (t.push(r), n.add(r.idx));
      }
      return t;
    }, [r, Oe]),
    Me = (0, React.useMemo)(() => [...Ae].sort(bl), [Ae]),
    Ne = (0, React.useMemo)(
      () =>
        j
          ? r.filter(
              (e) =>
                e.n.toLowerCase().includes(ye) ||
                e.p.toLowerCase().includes(ye),
            )
          : [],
      [r, j, ye],
    ),
    Pe = (0, React.useMemo)(() => {
      if (!j) return [];
      let e = (e) => {
        let t = e.n.toLowerCase(),
          n = t.indexOf(ye);
        return n < 0 ? 2 : n === 0 || !/[a-z0-9]/.test(t[n - 1] ?? ``) ? 0 : 1;
      };
      return [...Ne].sort((t, n) => e(t) - e(n) || bl(t, n)).slice(0, 8);
    }, [Ne, ye, j]),
    Fe = (0, React.useCallback)(
      (e) => {
        let t = e.toLowerCase().indexOf(ye);
        return !ye || t < 0
          ? [e, ``, ``]
          : [e.slice(0, t), e.slice(t, t + ye.length), e.slice(t + ye.length)];
      },
      [ye],
    ),
    Ie = (0, React.useCallback)((e) => r.find((t) => t.n === e) ?? null, [r]),
    Le = [
      {
        k: `fama`,
        label: `Más conocidos`,
      },
      {
        k: `az`,
        label: `A → Z`,
      },
      {
        k: `za`,
        label: `Z → A`,
      },
    ],
    [Re, ze] = (0, React.useState)(`fama`),
    Be = (0, React.useCallback)(
      (e) => {
        if (Re === `fama`) return e;
        let t = [...e].sort((e, t) =>
          e.n.localeCompare(t.n, `es`, {
            sensitivity: `base`,
            numeric: !0,
          }),
        );
        return Re === `az` ? t : t.reverse();
      },
      [Re],
    ),
    Ve = (0, React.useMemo)(
      () => Be(j ? Ne : be ? ve : Ce ? Te : Me).slice(0, pe),
      [j, Ne, be, ve, Ce, Te, Me, pe, Be],
    ),
    He = j ? Ne.length : be ? ve.length : Ce ? Te.length : Me.length,
    Ue = (0, JSXRuntime.jsx)(`div`, {
      style: {
        display: `flex`,
        alignItems: `center`,
        gap: `6px`,
        flexWrap: `wrap`,
      },
      children: Le.map((e) =>
        (0, JSXRuntime.jsx)(
          `button`,
          {
            type: `button`,
            className: `lb-ord`,
            "data-on": Re === e.k ? `1` : `0`,
            onClick: () => {
              (ze(e.k), me(24));
            },
            children: e.label,
          },
          e.k,
        ),
      ),
    }),
    We = () => {
      typeof window < `u` &&
        window.scrollTo({
          top: 0,
        });
    },
    Ge = (0, React.useCallback)(() => {
      (T(`slots`), oe(``), Se(null), ge(null), me(24), k(!1), We());
    }, []),
    Ke = (0, React.useCallback)((e) => {
      (Se(e),
        me(24),
        oe(``),
        typeof window < `u` &&
          (window.history.pushState(
            {
              rbLista: e,
            },
            ``,
          ),
          window.scrollTo({
            top: 0,
            behavior: `smooth`,
          })));
    }, []),
    qe = (e) => {
      (T(e),
        oe(``),
        Se(null),
        me(24),
        k(!1),
        he === null ? ge(null) : Xe(),
        We());
    },
    Je = (0, React.useRef)(!1),
    Ye = (0, React.useCallback)((e) => {
      (ge(e),
        oe(``),
        me(24),
        k(!1),
        typeof window < `u` &&
          (window.scrollTo({
            top: 0,
          }),
          Je.current
            ? window.history.replaceState(
                {
                  rbProv: e,
                },
                ``,
              )
            : (window.history.pushState(
                {
                  rbProv: e,
                },
                ``,
              ),
              (Je.current = !0))));
    }, []),
    Xe = (0, React.useCallback)(
      () =>
        Je.current && typeof window < `u`
          ? ((Je.current = !1), window.history.back(), !0)
          : (ge(null), !1),
      [],
    ),
    Ze = (0, React.useCallback)(() => {
      (Xe(), me(24), We());
    }, [Xe]);
  ((0, React.useEffect)(() => {
    if (he === null || b) return;
    let e = () => {
      ((Je.current = !1), ge(null), me(24), We());
    };
    return (
      window.addEventListener(`popstate`, e),
      () => window.removeEventListener(`popstate`, e)
    );
  }, [he, b]),
    (0, React.useEffect)(() => {
      if (xe === null || b) return;
      let e = () => {
        (Se(null), me(24), We());
      };
      return (
        window.addEventListener(`popstate`, e),
        () => window.removeEventListener(`popstate`, e)
      );
    }, [xe, b]));
  let Qe = new Intl.NumberFormat(`es-AR`),
    $e = (e, t) =>
      (0, JSXRuntime.jsxs)(`div`, {
        style: {
          width: e,
          height: t,
          borderRadius: `20px`,
          background: ic,
          boxShadow: `inset 0 0 0 1px ${fc}`,
          display: `flex`,
          alignItems: `center`,
          gap: `8px`,
          padding: `0 12px 0 16px`,
        },
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            style: {
              display: `flex`,
              color: V,
            },
            children: (0, JSXRuntime.jsx)(Bl, {
              name: `ic-search`,
              size: 18,
            }),
          }),
          (0, JSXRuntime.jsx)(`input`, {
            value: O,
            onChange: (e) => {
              (oe(e.target.value), me(24));
            },
            placeholder: `Buscar juego`,
            "aria-label": `Buscar juego`,
            style: {
              flex: 1,
              minWidth: 0,
              background: `transparent`,
              border: 0,
              outline: `none`,
              color: `#fff`,
              fontFamily: hc,
              fontSize: `16px`,
            },
          }),
        ],
      }),
    et = (e, t = !1) => {
      let n = e === `retirar`;
      return (0, JSXRuntime.jsxs)(`div`, {
        style: {
          position: `relative`,
          width: `100%`,
          aspectRatio: `177/163`,
          borderRadius: `20px`,
          background: n ? oc : C ? C.cajeroFondo : B,
          overflow: `hidden`,
          boxShadow: n ? `inset 0 0 0 1px ${dc}` : void 0,
        },
        children: [
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              position: `absolute`,
              left: n ? `-38%` : `-12%`,
              top: n ? `-6%` : `-27%`,
              width: n ? `215%` : `175%`,
              height: n ? `150%` : `190%`,
              background: `${Ia(C ? C.cajeroFoto : `./rushybet/v2/recarga-fichas.webp`)} center/cover no-repeat`,
              transform: n ? `scaleX(-1)` : void 0,
              filter: n
                ? `grayscale(.7) brightness(.55) contrast(1.05)`
                : void 0,
            },
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              background: n
                ? `linear-gradient(180deg, rgba(0,0,0,.62) 0%, rgba(0,0,0,.42) 52%, rgba(0,0,0,.25) 100%)`
                : `linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.28) 42%, rgba(0,0,0,0) 62%)`,
            },
          }),
          C &&
            n &&
            (0, JSXRuntime.jsx)(`div`, {
              "aria-hidden": `true`,
              style: {
                position: `absolute`,
                inset: 0,
                borderRadius: `20px`,
                boxShadow: C.retirarSombra,
                pointerEvents: `none`,
              },
            }),
          n &&
            (0, JSXRuntime.jsx)(`svg`, {
              viewBox: `0 0 24 24`,
              width: `26`,
              height: `26`,
              "aria-hidden": `true`,
              style: {
                position: `absolute`,
                right: `9%`,
                top: `13%`,
                filter: `drop-shadow(0 2px 6px rgba(0,0,0,.9))`,
              },
              children: (0, JSXRuntime.jsx)(`path`, {
                d: `M12 4v11m0 0 4.2-4.2M12 15l-4.2-4.2M5 19h14`,
                fill: `none`,
                stroke: w,
                strokeWidth: `2.1`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
              }),
            }),
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              position: `absolute`,
              left: `5%`,
              right: `5%`,
              top: `13%`,
              textAlign: `center`,
              fontFamily: _c,
              fontWeight: 900,
              fontSize: `20px`,
              letterSpacing: `-.015em`,
              lineHeight: 1,
              color: `#fff`,
              textShadow: `0 2px 12px rgba(0,0,0,.85)`,
              ...(C
                ? {
                    fontWeight: 600,
                    letterSpacing: `.04em`,
                    textTransform: `uppercase`,
                  }
                : {}),
            },
            children: n ? `Retirar fichas` : `Recargar fichas`,
          }),
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            onClick: n ? d : u,
            className: n ? void 0 : `lb-cargar`,
            style: {
              ...Gl,
              position: `absolute`,
              left: `50%`,
              transform: `translateX(-50%)`,
              bottom: `14%`,
              width: `76%`,
              height: `34px`,
              borderRadius: `20px`,
              background: n
                ? ee
                : `linear-gradient(90deg, #FFFFFF 0%, #D0D0D0 50%, #FFFFFF 100%)`,
              fontSize: `15px`,
              letterSpacing: `.02em`,
              textTransform: `none`,
              fontFamily: _c,
              fontWeight: 800,
              color: n ? te : C ? C.cajeroTinta : B,
              ...(C
                ? {
                    letterSpacing: `.1em`,
                    textTransform: `uppercase`,
                    fontWeight: 600,
                  }
                : {}),
              ...(C && n
                ? {
                    background: C.retirarFondo,
                    boxShadow: C.retirarSombra,
                    color: w,
                  }
                : {}),
            },
            children: n ? `Retirar` : `Cargar`,
          }),
        ],
      });
    },
    tt = (t = !1) => {
      if (!e) return null;
      let n = (0, JSXRuntime.jsx)(`span`, {
          "aria-hidden": `true`,
          style: {
            flex: `0 0 auto`,
            width: t ? 40 : 22,
            height: t ? 40 : 22,
            borderRadius: `50%`,
            background: ee,
            boxShadow: mc,
            color: te,
            fontFamily: gc,
            fontWeight: 700,
            fontSize: t ? `19px` : `12px`,
            lineHeight: t ? `40px` : `22px`,
            textAlign: `center`,
          },
          children: e.initial,
        }),
        r = e.nombreVisible ?? e.name,
        i = (0, JSXRuntime.jsx)(`span`, {
          title: r,
          style: {
            display: `block`,
            minWidth: 0,
            fontFamily: hc,
            fontWeight: 700,
            fontSize: t ? `16px` : `13.5px`,
            lineHeight: 1.2,
            color: `#fff`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            whiteSpace: `nowrap`,
          },
          children: r,
        }),
        a = (0, JSXRuntime.jsx)(`span`, {
          style: {
            display: `block`,
            fontFamily: hc,
            fontWeight: 600,
            fontSize: `10px`,
            letterSpacing: `.16em`,
            color: V,
            textTransform: `uppercase`,
          },
          children: `Tu cuenta`,
        });
      return t
        ? (0, JSXRuntime.jsxs)(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: `11px`,
              minWidth: 0,
            },
            children: [
              n,
              (0, JSXRuntime.jsxs)(`span`, {
                style: {
                  minWidth: 0,
                },
                children: [a, i],
              }),
            ],
          })
        : (0, JSXRuntime.jsxs)(`div`, {
            style: {
              minWidth: 0,
            },
            children: [
              (0, JSXRuntime.jsxs)(`span`, {
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  gap: `7px`,
                },
                children: [n, a],
              }),
              (0, JSXRuntime.jsx)(`span`, {
                style: {
                  display: `block`,
                  marginTop: `5px`,
                },
                children: i,
              }),
            ],
          });
    },
    nt = (t = !1) =>
      (0, JSXRuntime.jsxs)(`div`, {
        style: {
          display: `flex`,
          flexDirection: `column`,
          gap: `10px`,
          width: `100%`,
        },
        children: [et(`cargar`, t), e && et(`retirar`, t)],
      }),
    rt = (e, t, n, r) => {
      let i = r?.chico ?? !1,
        a = {
          display: `flex`,
          alignItems: `center`,
          gap: i ? `11px` : `13px`,
          width: `100%`,
          minHeight: `44px`,
          padding: 0,
          background: `transparent`,
          border: 0,
          cursor: `pointer`,
          textAlign: `left`,
          textDecoration: `none`,
        },
        o = (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              "aria-hidden": !0,
              style: {
                display: `flex`,
                flex: `0 0 ${i ? 18 : 20}px`,
                color: `inherit`,
              },
              children: e,
            }),
            (0, JSXRuntime.jsx)(`span`, {
              style: {
                fontFamily: hc,
                fontWeight: 500,
                fontSize: i ? `14px` : `16px`,
                letterSpacing: `.005em`,
                lineHeight: `100%`,
                color: `inherit`,
              },
              children: t,
            }),
          ],
        });
      return typeof n == `object`
        ? (0, JSXRuntime.jsx)(`a`, {
            className: `lb-mrow`,
            href: n.href,
            target: `_blank`,
            rel: `noopener noreferrer`,
            style: a,
            children: o,
          })
        : (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            className: `lb-mrow`,
            onClick: n,
            style: a,
            children: o,
          });
    },
    it = (0, JSXRuntime.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      width: `100%`,
      height: `100%`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.7`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": !0,
      children: (0, JSXRuntime.jsx)(`path`, {
        d: `M3 8h14l-3-3M21 16H7l3 3`,
      }),
    }),
    at = (0, JSXRuntime.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      width: `100%`,
      height: `100%`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.7`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": !0,
      children: (0, JSXRuntime.jsx)(`path`, {
        d: `M21 12a8 8 0 0 1-8 8H7l-4 3v-4.6A8 8 0 0 1 3 12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z`,
      }),
    }),
    ot = (0, JSXRuntime.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      width: `100%`,
      height: `100%`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.7`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": !0,
      children: [
        (0, JSXRuntime.jsx)(`circle`, {
          cx: `12`,
          cy: `12`,
          r: `9`,
        }),
        (0, JSXRuntime.jsx)(`path`, {
          d: `M9.6 9.2a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.1-2.4 3.6`,
        }),
        (0, JSXRuntime.jsx)(`path`, {
          d: `M12 17.2h.01`,
        }),
      ],
    }),
    st = (e = !1) =>
      _
        ? rt(it, `Mis movimientos`, _, {
            chico: e,
          })
        : null,
    ct = (e = !1) =>
      rt(at, `Dejar una opinión`, v, {
        chico: e,
      }),
    lt = (e = !1) =>
      rt(
        ot,
        `Ayuda por WhatsApp`,
        {
          href: Xc(x, `Hola! Necesito ayuda con mi cuenta de Rushybet.`),
        },
        {
          chico: e,
        },
      ),
    ut = (e, t = !1) =>
      (0, JSXRuntime.jsxs)(`div`, {
        role: `button`,
        tabIndex: 0,
        onClick: f,
        onKeyDown: (e) => {
          e.key === `Enter` && f();
        },
        style: {
          display: `flex`,
          alignItems: `center`,
          gap: t ? `11px` : `13px`,
          minHeight: `44px`,
          cursor: `pointer`,
          color: `#FFFFFF`,
        },
        children: [
          (0, JSXRuntime.jsx)(Bl, {
            name: `ic-logout`,
            size: e,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            style: {
              fontFamily: hc,
              fontWeight: 500,
              fontSize: t ? `14px` : `16px`,
              letterSpacing: `.005em`,
              lineHeight: `100%`,
              color: `inherit`,
            },
            children: `Cerrar sesión`,
          }),
        ],
      }),
    dt = (0, React.useMemo)(() => {
      let e = new Set();
      for (let t of p) {
        let n = Zc(t.vendorCode, t.gameCode);
        n && e.add(n);
      }
      return e;
    }, [p]),
    ft = (0, React.useCallback)(
      (e) => {
        let t = Zc(e.vendorCode, e.gameCode);
        return t !== null && dt.has(t);
      },
      [dt],
    ),
    pt = (0, React.useCallback)((e) => o(e), [o]),
    mt = (0, React.useCallback)(() => {
      let e = new Set(m.map((e) => e.idx)),
        t = Me.filter((t) => !e.has(t.idx)),
        n = t.length > 0 ? t : Me,
        r = n[Math.floor(Math.random() * n.length)];
      r && pt(r);
    }, [Me, m, pt]),
    ht = (0, React.useMemo)(() => (h ? (e) => h(e) : void 0), [h]),
    gt = (e = !1) =>
      g
        ? (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            onClick: g,
            style: {
              display: `block`,
              width: `100%`,
              marginTop: `10px`,
              minHeight: `44px`,
              background: `transparent`,
              border: 0,
              cursor: `pointer`,
              textAlign: `left`,
              fontFamily: hc,
              fontWeight: 500,
              fontSize: e ? `12px` : `13px`,
              color: `#FF6B75`,
              textDecoration: `underline`,
              textUnderlineOffset: `3px`,
            },
            children: `Cerrar mi cuenta`,
          })
        : null,
    _t = (e) =>
      (0, JSXRuntime.jsx)(
        MemoGameCard,
        {
          game: e,
          onOpen: pt,
          fav: ft(e),
          onFav: ht,
        },
        e.idx,
      ),
    vt = (e, t) =>
      (0, JSXRuntime.jsx)(HorizontalGameList, {
        games: e,
        onPlay: pt,
        trackKey: t,
        isFav: ft,
        onFav: ht,
        acento: w,
      }),
    M = (e, t, n = 28, r, i) => {
      let a = (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            "aria-hidden": !0,
            className: `lb-marca`,
            style: K,
          }),
          (0, JSXRuntime.jsx)(`h2`, {
            style: G,
            children: e,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            style: Wl,
            children: t,
          }),
          r &&
            (0, JSXRuntime.jsxs)(`span`, {
              className: `lb-prow-more`,
              children: [
                i ?? `Ver todos`,
                (0, JSXRuntime.jsx)(W, {
                  size: 9,
                  color: `currentColor`,
                }),
              ],
            }),
          (0, JSXRuntime.jsx)(`span`, {
            "aria-hidden": !0,
            style: Ul,
          }),
        ],
      });
      return r
        ? (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            className: `lb-prow`,
            onClick: r,
            "aria-label": `${e}: ver todos`,
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: `11px`,
              marginBottom: `${n}px`,
            },
            children: a,
          })
        : (0, JSXRuntime.jsx)(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: `11px`,
              marginBottom: `${n}px`,
            },
            children: a,
          });
    },
    yt = (e, t, n, r, i, a = !1) =>
      (0, JSXRuntime.jsxs)(`section`, {
        className: a ? `lb-desk` : void 0,
        style: {
          marginTop: `clamp(38px,3.6vw,58px)`,
        },
        "aria-label": e,
        children: [
          M(e, r ?? Qe.format(t.length), 28, i),
          (0, JSXRuntime.jsx)(`div`, {
            className: `lb-desk lb-grid`,
            children: t.map(_t),
          }),
          (0, JSXRuntime.jsx)(`div`, {
            className: `lb-mob`,
            children: vt(t, n),
          }),
        ],
      }),
    N = (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `flex`,
            alignItems: `center`,
            gap: `11px`,
            marginBottom: `16px`,
          },
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              "aria-hidden": !0,
              className: `lb-marca`,
              style: K,
            }),
            (0, JSXRuntime.jsx)(`h2`, {
              style: G,
              children: `Proveedores`,
            }),
            (0, JSXRuntime.jsx)(`span`, {
              style: Wl,
              children: Qe.format(Oe.length),
            }),
            (0, JSXRuntime.jsx)(`span`, {
              "aria-hidden": !0,
              style: Ul,
            }),
          ],
        }),
        (0, JSXRuntime.jsx)(`div`, {
          style: {
            display: `flex`,
            gap: `10px`,
            overflowX: `auto`,
            scrollbarWidth: `none`,
            padding: `2px 21px 2px 0`,
            WebkitOverflowScrolling: `touch`,
          },
          children: Oe.map((e) =>
            (0, JSXRuntime.jsxs)(
              `button`,
              {
                type: `button`,
                onClick: () => Ye(e.code),
                className: `lb-btn`,
                "aria-label": `Ver los ${Qe.format(e.count)} juegos de ${Ts(e.name)}`,
                style: {
                  flex: `0 0 auto`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `flex-start`,
                  justifyContent: `center`,
                  gap: `3px`,
                  minWidth: `124px`,
                  height: `62px`,
                  padding: `0 15px`,
                  borderRadius: `14px`,
                  background: oc,
                  border: `1px solid ${dc}`,
                  cursor: `pointer`,
                  textAlign: `left`,
                },
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      fontFamily: hc,
                      fontWeight: 600,
                      fontSize: `13.5px`,
                      color: `#fff`,
                      whiteSpace: `nowrap`,
                    },
                    children: Ts(e.name),
                  }),
                  (0, JSXRuntime.jsxs)(`span`, {
                    style: {
                      fontFamily: hc,
                      fontSize: `11.5px`,
                      color: V,
                    },
                    children: [Qe.format(e.count), ` juegos`],
                  }),
                ],
              },
              e.code,
            ),
          ),
        }),
      ],
    });
  return (0, JSXRuntime.jsxs)(`div`, {
    className: C ? `lb mb-tema` : `lb`,
    children: [
      (0, JSXRuntime.jsx)(`style`, {
        children: Al(zl),
      }),
      De.hero &&
        (0, JSXRuntime.jsx)(`div`, {
          className: `lb-mob`,
          children: (0, JSXRuntime.jsx)(MobileGameSearch, {
            user: !!e,
            balanceTexto: Gs(t)
              .replace(/[^0-9.,]/g, ``)
              .trim(),
            contadorJuegos: Qe.format(ke),
            recentGames: m,
            grid: O.trim()
              ? r.filter(
                  (e) =>
                    e.n.toLowerCase().includes(O.trim().toLowerCase()) ||
                    e.p.toLowerCase().includes(O.trim().toLowerCase()),
                )
              : A === `todos`
                ? je
                : A === `favs`
                  ? r.filter((e) => ft(e))
                  : r.filter((e) => e.cat === A),
            gridTitle:
              A === `todos`
                ? `RECOMENDADOS`
                : A === `favs`
                  ? `FAVORITOS`
                  : A === `vivo`
                    ? `EN VIVO`
                    : A.toUpperCase(),
            proveedores: Oe.map((e) => ({
              code: e.code,
              nombre: Ts(e.name),
              juegos: e.count,
            })),
            ganadores: E.slice(0, 6).map((e) => ({
              id: e.id,
              usuario: e.user,
              juego: e.game,
              pago: e.payout,
              mult: e.mult,
              idx: (() => {
                let t = r.find((t) => t.n === e.game);
                return t ? t.idx : null;
              })(),
            })),
            onOpen: pt,
            isFav: ft,
            onFav: ht,
            onCargar: u,
            onRetirar: d,
            onRegister: c,
            onLogin: s,
            goLive: () => Ye(Fl),
            goSlots: () => qe(`slots`),
            goSports: y,
            goCuenta: () => k(!0),
            openProv: Ye,
            q: O,
            setQ: oe,
            chips: [
              {
                k: `todos`,
                label: `TODOS`,
                activo: A === `todos`,
                onClick: () => ue(`todos`),
              },
              {
                k: `slots`,
                label: `SLOTS`,
                activo: A === `slots`,
                onClick: () => ue(`slots`),
              },
              {
                k: `vivo`,
                label: `EN VIVO`,
                activo: A === `vivo`,
                onClick: () => ue(`vivo`),
              },
              {
                k: `crash`,
                label: `CRASH`,
                activo: A === `crash`,
                onClick: () => ue(`crash`),
              },
              {
                k: `favs`,
                label: `FAVORITOS`,
                activo: A === `favs`,
                onClick: () => ue(`favs`),
              },
            ],
            abrirGanador: (e) => {
              if (e !== null) {
                let t = r[e];
                t && pt(t);
              }
            },
            piel: S?.movil ?? null,
          }),
        }),
      !De.hero &&
        (0, JSXRuntime.jsxs)(`div`, {
          className: `lb-mhead`,
          children: [
            (0, JSXRuntime.jsx)(`button`, {
              type: `button`,
              className: `lb-logo`,
              onClick: () => qe(`inicio`),
              "aria-label": `Ir al inicio`,
              style: {
                display: `flex`,
                alignItems: `center`,
                gap: `12px`,
                background: `transparent`,
                border: 0,
                padding: 0,
                cursor: `pointer`,
              },
              children: C
                ? (0, JSXRuntime.jsx)(`img`, {
                    src: C.logo.src,
                    alt: C.logo.alt,
                    style: {
                      height: `40px`,
                      width: `auto`,
                      display: `block`,
                    },
                  })
                : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                    children: [
                      (0, JSXRuntime.jsx)(Vl, {}),
                      (0, JSXRuntime.jsx)(U, {}),
                    ],
                  }),
            }),
            (0, JSXRuntime.jsx)(`div`, {
              style: {
                display: `flex`,
                alignItems: `center`,
                gap: `14px`,
              },
              children: (0, JSXRuntime.jsx)(`button`, {
                type: `button`,
                onClick: () => k((e) => !e),
                "aria-label": `Menú`,
                style: {
                  width: 44,
                  height: 44,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  gap: `5px`,
                  background: `rgba(255,255,255,.07)`,
                  border: `1px solid #242424`,
                  borderRadius: `12px`,
                  padding: 0,
                  cursor: `pointer`,
                },
                children: [0, 1, 2].map((e) =>
                  (0, JSXRuntime.jsx)(
                    `span`,
                    {
                      style: {
                        display: `block`,
                        width: 20,
                        height: 2.5,
                        borderRadius: 2,
                        background: `#fff`,
                      },
                    },
                    e,
                  ),
                ),
              }),
            }),
          ],
        }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `lb-row`,
        children: [
          (0, JSXRuntime.jsxs)(`aside`, {
            className: `lb-side`,
            children: [
              (0, JSXRuntime.jsx)(`button`, {
                type: `button`,
                className: `lb-logo`,
                onClick: () => qe(`inicio`),
                "aria-label": `Ir al inicio`,
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  padding: `22px 0 28px`,
                  width: `100%`,
                  background: `transparent`,
                  border: 0,
                  cursor: `pointer`,
                },
                children: C
                  ? (0, JSXRuntime.jsx)(`img`, {
                      src: C.isotipo.src,
                      alt: C.isotipo.alt,
                      style: {
                        height: `48px`,
                        width: `48px`,
                        display: `block`,
                        margin: `-7px 0`,
                      },
                    })
                  : (0, JSXRuntime.jsx)(Vl, {
                      h: 34,
                    }),
              }),
              (0, JSXRuntime.jsx)(`nav`, {
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  width: `100%`,
                },
                children: Il.map((e) => {
                  let t =
                    e.k === `envivo` ? he === Fl : ne === e.k && he !== Fl;
                  return (0, JSXRuntime.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      className: `lb-rail`,
                      "data-on": t ? `1` : `0`,
                      "aria-current": t ? `page` : void 0,
                      onClick: () =>
                        e.k === `deportes`
                          ? y()
                          : e.k === `envivo`
                            ? Ye(Fl)
                            : qe(e.k),
                      style: {
                        color: t ? w : V,
                      },
                      children: [
                        (0, JSXRuntime.jsx)(Bl, {
                          name: e.icon,
                          size: 22,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          children: e.label,
                        }),
                      ],
                    },
                    e.k,
                  );
                }),
              }),
              e &&
                (0, JSXRuntime.jsxs)(`button`, {
                  type: `button`,
                  className: `lb-rail`,
                  onClick: f,
                  style: {
                    color: `#929292`,
                    marginTop: `auto`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(Bl, {
                      name: `ic-logout`,
                      size: 22,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      children: `Cerrar sesión`,
                    }),
                  ],
                }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`main`, {
            className: `lb-main`,
            children: [
              (0, JSXRuntime.jsxs)(`div`, {
                className: `lb-busca lb-desk`,
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `lb-busca-campo`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        "aria-hidden": `true`,
                        style: {
                          display: `flex`,
                          flex: `0 0 auto`,
                        },
                        children: (0, JSXRuntime.jsx)(Bl, {
                          name: `ic-search`,
                          size: 17,
                        }),
                      }),
                      (0, JSXRuntime.jsx)(`input`, {
                        value: O,
                        onChange: (e) => {
                          (oe(e.target.value), me(24), ce(!0));
                        },
                        onFocus: () => ce(!0),
                        onBlur: () => window.setTimeout(() => ce(!1), 120),
                        onKeyDown: (e) => {
                          (e.key === `Escape` &&
                            (oe(``), ce(!1), e.target.blur()),
                            e.key === `Enter` &&
                              Pe[0] &&
                              (e.preventDefault(), ce(!1), pt(Pe[0])));
                        },
                        placeholder: `Buscar entre ${Qe.format(ke)} juegos`,
                        "aria-label": `Buscar juego`,
                        autoComplete: `off`,
                        spellCheck: !1,
                      }),
                      j &&
                        (0, JSXRuntime.jsx)(`button`, {
                          type: `button`,
                          className: `lb-busca-x`,
                          "aria-label": `Borrar la búsqueda`,
                          onMouseDown: (e) => e.preventDefault(),
                          onClick: () => {
                            (oe(``), ce(!1));
                          },
                          children: `×`,
                        }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`button`, {
                    type: `button`,
                    className: `lb-azar`,
                    onClick: mt,
                    title: `Abre un juego al azar`,
                    children: [
                      (0, JSXRuntime.jsxs)(`svg`, {
                        width: `16`,
                        height: `16`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.7`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        "aria-hidden": `true`,
                        children: [
                          (0, JSXRuntime.jsx)(`rect`, {
                            x: `3`,
                            y: `3`,
                            width: `18`,
                            height: `18`,
                            rx: `3.4`,
                          }),
                          (0, JSXRuntime.jsx)(`circle`, {
                            cx: `8.4`,
                            cy: `8.4`,
                            r: `1.15`,
                            fill: `currentColor`,
                            stroke: `none`,
                          }),
                          (0, JSXRuntime.jsx)(`circle`, {
                            cx: `15.6`,
                            cy: `15.6`,
                            r: `1.15`,
                            fill: `currentColor`,
                            stroke: `none`,
                          }),
                          (0, JSXRuntime.jsx)(`circle`, {
                            cx: `12`,
                            cy: `12`,
                            r: `1.15`,
                            fill: `currentColor`,
                            stroke: `none`,
                          }),
                        ],
                      }),
                      `Sorprendeme`,
                    ],
                  }),
                  se &&
                    j &&
                    (0, JSXRuntime.jsx)(`div`, {
                      className: `lb-sug`,
                      role: `listbox`,
                      "aria-label": `Resultados de la búsqueda`,
                      children:
                        Pe.length === 0
                          ? (0, JSXRuntime.jsx)(`div`, {
                              className: `lb-sug-vacio`,
                              children: `No hay ningún juego con ese nombre.`,
                            })
                          : Pe.map((e) => {
                              let [t, n, r] = Fe(e.n);
                              return (0, JSXRuntime.jsxs)(
                                `button`,
                                {
                                  type: `button`,
                                  role: `option`,
                                  "aria-selected": !1,
                                  className: `lb-sug-r`,
                                  onMouseDown: (e) => e.preventDefault(),
                                  onClick: () => {
                                    (ce(!1), pt(e));
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      className: `lb-sug-art`,
                                      style: {
                                        backgroundImage: e.img
                                          ? Ia(e.img)
                                          : void 0,
                                      },
                                    }),
                                    (0, JSXRuntime.jsxs)(`span`, {
                                      style: {
                                        minWidth: 0,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsxs)(`span`, {
                                          className: `lb-sug-n`,
                                          style: {
                                            display: `block`,
                                          },
                                          children: [
                                            t,
                                            (0, JSXRuntime.jsx)(`em`, {
                                              children: n,
                                            }),
                                            r,
                                          ],
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          className: `lb-sug-p`,
                                          style: {
                                            display: `block`,
                                          },
                                          children: e.p,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.idx,
                              );
                            }),
                    }),
                ],
              }),
              n &&
                (0, JSXRuntime.jsxs)(`div`, {
                  role: `status`,
                  style: {
                    marginTop: `clamp(24px,4vw,40px)`,
                    display: `flex`,
                    alignItems: `flex-start`,
                    gap: `13px`,
                    padding: `15px 18px`,
                    borderRadius: `14px`,
                    background: C ? C.vivoFondo : `rgba(255,85,0,.09)`,
                    boxShadow: C
                      ? C.vivoBorde
                      : `inset 0 0 0 1px rgba(255,85,0,.55)`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      "aria-hidden": `true`,
                      style: {
                        flex: `0 0 auto`,
                        width: 22,
                        height: 22,
                        marginTop: 1,
                        borderRadius: `50%`,
                        background: C ? C.gradBoton : w,
                        color: C ? C.tintaBoton : `#2A0C00`,
                        fontFamily: `var(--font-oswald), 'Oswald', 'Segoe UI', sans-serif`,
                        fontWeight: 700,
                        fontSize: `15px`,
                        lineHeight: `22px`,
                        textAlign: `center`,
                      },
                      children: `!`,
                    }),
                    (0, JSXRuntime.jsxs)(`span`, {
                      children: [
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            display: `block`,
                            fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                            fontWeight: 600,
                            fontSize: `15px`,
                            lineHeight: `132%`,
                            color: `#fff`,
                            ...(C
                              ? {
                                  fontFamily: `var(--font-oswald), 'Oswald', 'Segoe UI', sans-serif`,
                                  fontSize: `16px`,
                                  letterSpacing: `.04em`,
                                  textTransform: `uppercase`,
                                }
                              : {}),
                          },
                          children: n.title,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            display: `block`,
                            marginTop: `3px`,
                            fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                            fontWeight: 400,
                            fontSize: `13.5px`,
                            lineHeight: `145%`,
                            color: `#929292`,
                          },
                          children: n.detail,
                        }),
                      ],
                    }),
                  ],
                }),
              De.hero &&
                (0, JSXRuntime.jsxs)(`section`, {
                  style: {
                    marginTop: `clamp(16px,2vh,26px)`,
                  },
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `lb-desk lb-hero-wrap`,
                      style: {
                        position: `relative`,
                        width: `100%`,
                        aspectRatio: `4950/1089`,
                        maxHeight: `min(378px,34vh)`,
                      },
                      children: [
                        (0, JSXRuntime.jsx)(`style`, {
                          children: Al(`.lb-hero-wrap{isolation:isolate}
                  
                  .lb-hero-panel{position:absolute;inset:0;border-radius:20px;overflow:hidden;
                    container-type:size}
                  
                  .lb-hero-txt{position:absolute;left:6.67%;top:19%;width:46%;display:flex;
                    flex-direction:column;align-items:flex-start}
                  
                  
                  .lb-hero-titulo{font-family:var(--font-oswald),sans-serif;font-weight:700;
                    font-size:19.3cqh;line-height:.82;letter-spacing:.005em;color:#fff;
                    text-transform:uppercase;text-shadow:0 0 26px rgba(255,255,255,.28)}
                  
                  .lb-hero-sub{position:absolute;left:7.71%;width:21.21%;top:39.5%;
                    display:flex;align-items:center;justify-content:center;height:9%;
                    background:none;border:0;padding:0;cursor:pointer;
                    font-family:var(--font-oswald),sans-serif;
                    font-weight:600;font-size:5.4cqh;line-height:1;letter-spacing:.13em;
                    color:rgba(255,255,255,.62);text-transform:uppercase;
                    transition:color .18s ease}
                  .lb-hero-sub:hover{color:#fff}
                  .lb-hero-sub:focus-visible{outline:2px solid #fff;outline-offset:2px}
                  
                  .lb-hero-btn{position:absolute;left:7.71%;width:21.21%;height:14.88%;
                    display:flex;align-items:center;justify-content:center;gap:5%;
                    border:0;border-radius:1.6cqh;cursor:pointer;
                    font-family:var(--font-oswald),sans-serif;font-weight:700;font-size:6.2cqh;
                    letter-spacing:.05em;text-transform:uppercase;white-space:nowrap;
                    transition:filter .18s ease,transform .18s ease}
                  .lb-hero-btn:hover{filter:brightness(1.07);transform:translateY(-1px)}
                  .lb-hero-btn:focus-visible{outline:2px solid #fff;outline-offset:2px}
                  .lb-hero-ventana{position:absolute;left:0;right:0;top:-16%;bottom:0;overflow:hidden;
                    border-radius:0 0 20px 20px;pointer-events:none;z-index:2}
                  
                  
                  .lb-hero-fichas{position:absolute;right:-1%;top:-7.8%;height:157%;width:auto;
                    pointer-events:none}`),
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `lb-hero-ventana`,
                          children: (0, JSXRuntime.jsx)(`img`, {
                            src: C
                              ? C.bannerFichas
                              : `./rushybet/v2/pop-fichas.webp`,
                            alt: ``,
                            "aria-hidden": `true`,
                            decoding: `async`,
                            draggable: !1,
                            className: `lb-hero-fichas`,
                          }),
                        }),
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `lb-hero-panel`,
                          style: {
                            backgroundColor: `#121212`,
                            backgroundImage: C
                              ? C.bannerFondo
                              : Ia(`./rushybet/v2/base-bienvenida.webp`),
                            backgroundSize: `cover`,
                            backgroundPosition: `center`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`style`, {
                              children: `.lb-zona{position:absolute;border:0;padding:0;background:transparent;border-radius:7px;cursor:pointer;transition:background .18s ease}.lb-zona:hover{background:rgba(255,255,255,.14)}.lb-zona:focus-visible{outline:2px solid #fff;outline-offset:2px}`,
                            }),
                            e
                              ? (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    position: `absolute`,
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: `52%`,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    justifyContent: `center`,
                                    paddingLeft: `7.7%`,
                                    paddingRight: `20%`,
                                    background: C
                                      ? C.bannerPanel
                                      : `${Ia(`./rushybet/v2/panel-r.webp`)} left center/100% 100% no-repeat`,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                                        fontWeight: 600,
                                        fontSize: `clamp(9px,.78vw,12px)`,
                                        letterSpacing: `.18em`,
                                        color: `rgba(255,255,255,.55)`,
                                        textTransform: `uppercase`,
                                      },
                                      children: `Tu saldo`,
                                    }),
                                    (0, JSXRuntime.jsx)(`span`, {
                                      style: {
                                        marginTop: `clamp(2px,.3vw,5px)`,
                                        fontFamily: `var(--font-oswald), 'Oswald', 'Segoe UI', sans-serif`,
                                        fontWeight: 700,
                                        fontSize: `clamp(24px,2.6vw,42px)`,
                                        lineHeight: 1.05,
                                        color: `#fff`,
                                        fontVariantNumeric: `tabular-nums`,
                                        textShadow: C
                                          ? C.saldoBrillo
                                          : `0 0 22px rgba(255,85,0,.5)`,
                                      },
                                      "aria-live": `polite`,
                                      children: Gs(t),
                                    }),
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        gap: `clamp(7px,.7vw,11px)`,
                                        marginTop: `clamp(10px,1.1vw,18px)`,
                                        width: `100%`,
                                        maxWidth: `300px`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(`button`, {
                                          type: `button`,
                                          onClick: u,
                                          className: `lb-btn lb-shine`,
                                          style: {
                                            ...Gl,
                                            boxShadow: void 0,
                                            flex: `1 1 0`,
                                            height: `clamp(34px,2.9vw,46px)`,
                                            borderRadius: `10px`,
                                            background: ee,
                                            fontSize: `clamp(12px,1.15vw,17px)`,
                                            color: te,
                                          },
                                          children: `Cargar fichas`,
                                        }),
                                        (0, JSXRuntime.jsx)(`button`, {
                                          type: `button`,
                                          onClick: d,
                                          className: `lb-btn`,
                                          style: {
                                            ...Gl,
                                            flex: `0 1 auto`,
                                            minWidth: `clamp(78px,7vw,110px)`,
                                            height: `clamp(34px,2.9vw,46px)`,
                                            borderRadius: `10px`,
                                            background: C
                                              ? C.retirarFondo
                                              : `rgba(255,255,255,.05)`,
                                            boxShadow: C
                                              ? C.retirarSombra
                                              : `inset 0 0 0 1px rgba(255,255,255,.24)`,
                                            fontSize: `clamp(12px,1.15vw,17px)`,
                                          },
                                          children: `Retirar`,
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    (0, JSXRuntime.jsx)(`span`, {
                                      className: `lb-hero-txt`,
                                      children: (0, JSXRuntime.jsx)(`span`, {
                                        className: `lb-hero-titulo`,
                                        children: `¡Bienvenido!`,
                                      }),
                                    }),
                                    (0, JSXRuntime.jsx)(`button`, {
                                      type: `button`,
                                      onClick: c,
                                      className: `lb-hero-sub`,
                                      children: `Registrarse`,
                                    }),
                                    (0, JSXRuntime.jsx)(`button`, {
                                      type: `button`,
                                      onClick: s,
                                      className: `lb-hero-btn`,
                                      style: {
                                        top: `51.93%`,
                                        background: ee,
                                        color: te,
                                        boxShadow: `0 6px 18px rgba(0,0,0,.35)`,
                                      },
                                      children: `Iniciar sesión`,
                                    }),
                                    (0, JSXRuntime.jsxs)(`button`, {
                                      type: `button`,
                                      onClick: l ?? c,
                                      className: `lb-hero-btn`,
                                      style: {
                                        top: `68.87%`,
                                        background: `rgba(32,32,32,.94)`,
                                        color: `#fff`,
                                        boxShadow: `inset 0 0 0 1px rgba(255,255,255,.16)`,
                                        fontFamily: `Roboto, sans-serif`,
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        textTransform: `none`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(Hl, {
                                          s: 18,
                                        }),
                                        `Continuar Con Google`,
                                      ],
                                    }),
                                  ],
                                }),
                          ],
                        }),
                      ],
                    }),
                    !1,
                  ],
                }),
              De.promos &&
                (0, JSXRuntime.jsxs)(`div`, {
                  className: `lb-promos`,
                  style: {
                    flexWrap: `wrap`,
                    gap: `16px`,
                    marginTop: `64px`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(CategoryDoors, {
                      kind: `vivo`,
                      onClick: () => Ye(Fl),
                      marca: C
                        ? {
                            base: C.promoBase,
                            arte: C.promoArte.vivo,
                            acento: w,
                          }
                        : null,
                    }),
                    (0, JSXRuntime.jsx)(CategoryDoors, {
                      kind: `slots`,
                      onClick: () => qe(`slots`),
                      marca: C
                        ? {
                            base: C.promoBase,
                            arte: C.promoArte.slots,
                            acento: w,
                          }
                        : null,
                    }),
                    (0, JSXRuntime.jsx)(CategoryDoors, {
                      kind: `deportes`,
                      onClick: y,
                      marca: C
                        ? {
                            base: C.promoBase,
                            arte: C.promoArte.deportes,
                            acento: w,
                          }
                        : null,
                    }),
                  ],
                }),
              be &&
                _e &&
                (0, JSXRuntime.jsxs)(`section`, {
                  style: {
                    marginTop: `clamp(26px,2.4vw,38px)`,
                  },
                  children: [
                    (0, JSXRuntime.jsxs)(`button`, {
                      type: `button`,
                      onClick: Ze,
                      style: {
                        display: `inline-flex`,
                        alignItems: `center`,
                        gap: `9px`,
                        minHeight: `44px`,
                        padding: `0 2px`,
                        background: `transparent`,
                        border: 0,
                        cursor: `pointer`,
                        fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                        fontWeight: 600,
                        fontSize: `14px`,
                        color: `#929292`,
                      },
                      children: [
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            display: `inline-flex`,
                            transform: `rotate(180deg)`,
                          },
                          children: (0, JSXRuntime.jsx)(W, {
                            size: 9,
                            color: `currentColor`,
                          }),
                        }),
                        `Volver`,
                      ],
                    }),
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        marginTop: `10px`,
                      },
                      children: M(Ts(_e.name), Qe.format(_e.count)),
                    }),
                  ],
                }),
              Ce &&
                (0, JSXRuntime.jsxs)(`section`, {
                  style: {
                    marginTop: `clamp(26px,2.4vw,38px)`,
                  },
                  children: [
                    (0, JSXRuntime.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => {
                        (Se(null), me(24), We());
                      },
                      style: {
                        display: `inline-flex`,
                        alignItems: `center`,
                        gap: `9px`,
                        minHeight: `44px`,
                        padding: `0 2px`,
                        background: `transparent`,
                        border: 0,
                        cursor: `pointer`,
                        fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                        fontWeight: 600,
                        fontSize: `14px`,
                        color: `#929292`,
                      },
                      children: [
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            display: `inline-flex`,
                            transform: `rotate(180deg)`,
                          },
                          children: (0, JSXRuntime.jsx)(W, {
                            size: 9,
                            color: `currentColor`,
                          }),
                        }),
                        `Volver`,
                      ],
                    }),
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        marginTop: `10px`,
                      },
                      children: M(Ee, Qe.format(Te.length)),
                    }),
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        margin: `-12px 0 22px`,
                      },
                      children: Ue,
                    }),
                    Ve.length === 0
                      ? (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                            fontSize: `15px`,
                            color: `#929292`,
                            padding: `24px 0`,
                          },
                          children: `Todavía no hay nada acá.`,
                        })
                      : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              className: `lb-grid`,
                              children: Ve.map(_t),
                            }),
                            Ve.length < He &&
                              (0, JSXRuntime.jsx)(LoadMoreSentinel, {
                                onMore: () => me((e) => e + 24),
                                hasta: `${Qe.format(Ve.length)} de ${Qe.format(He)}`,
                              }),
                          ],
                        }),
                  ],
                }),
              De.mine &&
                p.length > 0 &&
                yt(
                  `Favoritos`,
                  p.slice(0, 12),
                  `fav`,
                  void 0,
                  p.length > 12 ? () => Ke(`fav`) : void 0,
                ),
              De.mine &&
                m.length > 0 &&
                yt(
                  `Seguí jugando`,
                  m.slice(0, 12),
                  `rec-ent`,
                  void 0,
                  m.length > 12 ? () => Ke(`recientes`) : void 0,
                ),
              De.rec && yt(`Recomendados`, je, `rec`, void 0, Ge, De.hero),
              (De.slots || be) &&
                (0, JSXRuntime.jsxs)(`section`, {
                  style: {
                    marginTop: be ? `0` : `clamp(38px,3.6vw,58px)`,
                  },
                  children: [
                    !be && M(j ? `Resultados` : `Slots`, Qe.format(He)),
                    !j &&
                      (0, JSXRuntime.jsx)(`div`, {
                        style: {
                          margin: `-14px 0 22px`,
                        },
                        children: Ue,
                      }),
                    !j &&
                      (0, JSXRuntime.jsx)(`section`, {
                        style: {
                          margin: `0 0 clamp(20px,2vw,30px)`,
                        },
                        "aria-label": `Filtrar por proveedor`,
                        children: N,
                      }),
                    Ve.length === 0
                      ? (0, JSXRuntime.jsx)(`div`, {
                          style: {
                            fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                            fontSize: `15px`,
                            color: `#929292`,
                            padding: `24px 0`,
                          },
                          children: `No encontramos juegos con ese nombre.`,
                        })
                      : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              className: `lb-grid`,
                              children: Ve.map(_t),
                            }),
                            Ve.length < He &&
                              (0, JSXRuntime.jsx)(LoadMoreSentinel, {
                                onMore: () => me((e) => e + 24),
                                hasta: `${Qe.format(Ve.length)} de ${Qe.format(He)}`,
                              }),
                          ],
                        }),
                  ],
                }),
              De.provs &&
                (0, JSXRuntime.jsx)(`section`, {
                  className: `lb-mob`,
                  style: {
                    marginTop: `clamp(38px,3.6vw,58px)`,
                    display: De.hero ? `none` : void 0,
                  },
                  "aria-label": `Proveedores`,
                  children: N,
                }),
              De.provs &&
                (0, JSXRuntime.jsx)(`div`, {
                  children: Oe.map((e, t) =>
                    (0, JSXRuntime.jsx)(
                      `div`,
                      {
                        className: t < 3 ? void 0 : `lb-desk`,
                        children: (0, JSXRuntime.jsx)(LazyVisible, {
                          eager: t === 0,
                          children: (0, JSXRuntime.jsxs)(`section`, {
                            className: De.hero ? `lb-desk` : void 0,
                            style: {
                              marginTop: `clamp(38px,3.6vw,58px)`,
                            },
                            "aria-label": Ts(e.name),
                            children: [
                              (0, JSXRuntime.jsxs)(`button`, {
                                type: `button`,
                                className: `lb-prow`,
                                onClick: () => Ye(e.code),
                                "aria-label": `Ver los ${Qe.format(e.count)} juegos de ${Ts(e.name)}`,
                                style: {
                                  alignItems: `center`,
                                  gap: `11px`,
                                },
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    "aria-hidden": !0,
                                    className: `lb-marca`,
                                    style: K,
                                  }),
                                  (0, JSXRuntime.jsx)(`h2`, {
                                    style: G,
                                    children: Ts(e.name),
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    style: Wl,
                                    children: Qe.format(e.count),
                                  }),
                                  (0, JSXRuntime.jsxs)(`span`, {
                                    className: `lb-prow-more`,
                                    "aria-hidden": `true`,
                                    children: [
                                      `Ver más`,
                                      (0, JSXRuntime.jsx)(`span`, {
                                        style: {
                                          display: `inline-flex`,
                                        },
                                        children: (0, JSXRuntime.jsx)(W, {
                                          size: 8,
                                          color: `currentColor`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    "aria-hidden": !0,
                                    style: Ul,
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsx)(`div`, {
                                className: `lb-desk lb-grid`,
                                children: ws(e.code, 12).map(_t),
                              }),
                              (0, JSXRuntime.jsx)(`div`, {
                                className: `lb-mob`,
                                children: vt(ws(e.code, 12), e.code),
                              }),
                            ],
                          }),
                        }),
                      },
                      e.code,
                    ),
                  ),
                }),
              E.length > 0 &&
                (0, JSXRuntime.jsxs)(`section`, {
                  style: {
                    marginTop: `clamp(40px,4vw,66px)`,
                  },
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        alignItems: `center`,
                        gap: `14px`,
                        marginBottom: `16px`,
                      },
                      children: [
                        (0, JSXRuntime.jsx)(`h2`, {
                          style: G,
                          children: `Ganadores`,
                        }),
                        (0, JSXRuntime.jsxs)(`span`, {
                          style: {
                            display: `inline-flex`,
                            alignItems: `center`,
                            gap: `7px`,
                            height: `24px`,
                            padding: `0 11px 0 9px`,
                            borderRadius: `100px`,
                            background: C ? C.vivoFondo : `rgba(255,85,0,.12)`,
                            boxShadow: C
                              ? C.vivoBorde
                              : `inset 0 0 0 1px rgba(255,85,0,.35)`,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `lb-live`,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              style: {
                                fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                                fontWeight: 700,
                                fontSize: `11px`,
                                letterSpacing: `.13em`,
                                color: w,
                              },
                              children: `EN VIVO`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `lb-desk lb-tbl`,
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `lb-thead`,
                          style: {
                            gridTemplateColumns: Ll,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              children: `Juego`,
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                textAlign: `left`,
                              },
                              children: `Usuario`,
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              children: `Hora`,
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              children: `Apuesta`,
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              children: `Multiplicador`,
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                textAlign: `right`,
                              },
                              children: `Pago`,
                            }),
                          ],
                        }),
                        E.slice(0, 10).map((e, t) => {
                          let n = Ie(e.game);
                          return (0, JSXRuntime.jsxs)(
                            `div`,
                            {
                              className: `lb-trow${ie.includes(e.id) ? ` lb-win` : ``}${n ? ` lb-trow-ir` : ``}`,
                              role: n ? `button` : void 0,
                              tabIndex: n ? 0 : void 0,
                              "aria-label": n ? `Jugar a ${e.game}` : void 0,
                              onClick: n ? () => pt(n) : void 0,
                              onKeyDown: n
                                ? (e) => {
                                    (e.key === `Enter` || e.key === ` `) &&
                                      (e.preventDefault(), pt(n));
                                  }
                                : void 0,
                              style: {
                                gridTemplateColumns: Ll,
                                animationDelay: ie.includes(e.id)
                                  ? `${t * 70}ms`
                                  : void 0,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    display: `flex`,
                                    justifyContent: `center`,
                                  },
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    className: `lb-thumb`,
                                    title: e.game,
                                    style: {
                                      width: 52,
                                      height: 52,
                                      borderRadius: `13px`,
                                      background: e.art
                                        ? `${Ia(e.art)} center/cover no-repeat`
                                        : `#1E1F21`,
                                    },
                                  }),
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    textAlign: `left`,
                                    overflow: `hidden`,
                                    textOverflow: `ellipsis`,
                                    whiteSpace: `nowrap`,
                                    fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                                    fontWeight: 600,
                                    fontSize: `15px`,
                                    letterSpacing: `.01em`,
                                  },
                                  title: e.user,
                                  children: e.user,
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                                    fontWeight: 500,
                                    fontSize: `13px`,
                                    color: `#545454`,
                                    fontVariantNumeric: `tabular-nums`,
                                  },
                                  children: e.time,
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                                    fontWeight: 500,
                                    fontSize: `14px`,
                                    color: `#929292`,
                                    fontVariantNumeric: `tabular-nums`,
                                  },
                                  children: e.bet,
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  children: (0, JSXRuntime.jsx)(ValueLabel, {
                                    value: e.multValue,
                                    label: e.mult,
                                    escalones: C?.mult,
                                  }),
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    textAlign: `right`,
                                  },
                                  children: (0, JSXRuntime.jsx)(AnimatedCents, {
                                    cents: e.payoutCents,
                                    final: e.payout,
                                    run: ie.includes(e.id),
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          );
                        }),
                      ],
                    }),
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `lb-mob lb-tbl`,
                      children: [
                        (0, JSXRuntime.jsxs)(`div`, {
                          className: `lb-thead`,
                          style: {
                            gridTemplateColumns: Rl,
                          },
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              children: `Juego`,
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                textAlign: `left`,
                              },
                              children: `Jugador`,
                            }),
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                textAlign: `right`,
                              },
                              children: `Ganado`,
                            }),
                          ],
                        }),
                        E.slice(0, 5).map((e, t) => {
                          let n = Ie(e.game);
                          return (0, JSXRuntime.jsxs)(
                            `div`,
                            {
                              className: `lb-trow${ie.includes(e.id) ? ` lb-win` : ``}${n ? ` lb-trow-ir` : ``}`,
                              role: n ? `button` : void 0,
                              tabIndex: n ? 0 : void 0,
                              "aria-label": n ? `Jugar a ${e.game}` : void 0,
                              onClick: n ? () => pt(n) : void 0,
                              onKeyDown: n
                                ? (e) => {
                                    (e.key === `Enter` || e.key === ` `) &&
                                      (e.preventDefault(), pt(n));
                                  }
                                : void 0,
                              style: {
                                gridTemplateColumns: Rl,
                                animationDelay: ie.includes(e.id)
                                  ? `${t * 70}ms`
                                  : void 0,
                              },
                              children: [
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    display: `flex`,
                                    justifyContent: `center`,
                                  },
                                  children: (0, JSXRuntime.jsx)(`div`, {
                                    className: `lb-thumb`,
                                    style: {
                                      width: 42,
                                      height: 42,
                                      borderRadius: `11px`,
                                      background: e.art
                                        ? `${Ia(e.art)} center/cover no-repeat`
                                        : `#1E1F21`,
                                    },
                                  }),
                                }),
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    minWidth: 0,
                                  },
                                  children: [
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: {
                                        overflow: `hidden`,
                                        textOverflow: `ellipsis`,
                                        whiteSpace: `nowrap`,
                                        fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                                        fontWeight: 600,
                                        fontSize: `13px`,
                                      },
                                      title: e.user,
                                      children: e.user,
                                    }),
                                    (0, JSXRuntime.jsxs)(`div`, {
                                      style: {
                                        display: `flex`,
                                        alignItems: `center`,
                                        gap: `7px`,
                                        marginTop: `5px`,
                                      },
                                      children: [
                                        (0, JSXRuntime.jsx)(ValueLabel, {
                                          value: e.multValue,
                                          label: e.mult,
                                          small: !0,
                                          escalones: C?.mult,
                                        }),
                                        (0, JSXRuntime.jsx)(`span`, {
                                          style: {
                                            fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                                            fontWeight: 500,
                                            fontSize: `11px`,
                                            color: `#545454`,
                                            fontVariantNumeric: `tabular-nums`,
                                          },
                                          children: e.time,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, JSXRuntime.jsx)(`div`, {
                                  style: {
                                    textAlign: `right`,
                                  },
                                  children: (0, JSXRuntime.jsx)(AnimatedCents, {
                                    cents: e.payoutCents,
                                    final: e.payout,
                                    run: ie.includes(e.id),
                                    small: !0,
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          );
                        }),
                      ],
                    }),
                  ],
                }),
              De.dep &&
                (0, JSXRuntime.jsxs)(`section`, {
                  style: {
                    marginTop: `clamp(38px,3.6vw,58px)`,
                  },
                  children: [
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        alignItems: `center`,
                        gap: `14px`,
                        marginBottom: `22px`,
                        flexWrap: `wrap`,
                      },
                      children: [
                        (0, JSXRuntime.jsx)(`h2`, {
                          style: G,
                          children: `Deportivas`,
                        }),
                        (0, JSXRuntime.jsx)(`button`, {
                          type: `button`,
                          onClick: y,
                          className: `lb-btn lb-shine`,
                          style: {
                            ...Gl,
                            boxShadow: void 0,
                            marginLeft: `auto`,
                            height: `clamp(38px,3vw,46px)`,
                            padding: `0 clamp(18px,1.8vw,28px)`,
                            borderRadius: `12px`,
                            background: ee,
                            fontSize: `clamp(14px,1.35vw,19px)`,
                            letterSpacing: `.02em`,
                            textTransform: `none`,
                            fontFamily: `var(--font-oswald), 'Oswald', 'Segoe UI', sans-serif`,
                            fontWeight: 800,
                            color: te,
                          },
                          children: `Abrir apuestas`,
                        }),
                      ],
                    }),
                    (0, JSXRuntime.jsx)(`div`, {
                      className: `lb-depgrid`,
                      children: Pl.map((e) =>
                        (0, JSXRuntime.jsx)(
                          SportsCard,
                          {
                            s: e,
                            onOpen: y,
                            naranja: C?.deporteNaranja,
                          },
                          e.id,
                        ),
                      ),
                    }),
                    (0, JSXRuntime.jsx)(`div`, {
                      className: `lb-mob`,
                      children: (0, JSXRuntime.jsx)(PromoCard, {
                        onOpen: y,
                        acento: w,
                        naranja: C?.deporteNaranja,
                      }),
                    }),
                  ],
                }),
              (0, JSXRuntime.jsxs)(`section`, {
                className: De.hero ? `lb-desk` : void 0,
                style: {
                  marginTop: `clamp(38px,3.6vw,58px)`,
                },
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: {
                      fontFamily: hc,
                      fontWeight: 700,
                      fontSize: `11px`,
                      letterSpacing: `.16em`,
                      color: lc,
                      textTransform: `uppercase`,
                      marginBottom: `14px`,
                    },
                    children: [
                      Oe.length,
                      ` proveedores · `,
                      Qe.format(ke),
                      ` juegos`,
                    ],
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: {
                      display: `flex`,
                      flexWrap: `wrap`,
                      gap: `8px`,
                    },
                    children: Oe.map((e) =>
                      (0, JSXRuntime.jsx)(
                        `button`,
                        {
                          type: `button`,
                          className: `lb-prov`,
                          onClick: () => Ye(e.code),
                          children: Ts(e.name),
                        },
                        e.code,
                      ),
                    ),
                  }),
                ],
              }),
              (0, JSXRuntime.jsxs)(`footer`, {
                className: `lb-foot`,
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `lb-foot-top`,
                    children: [
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          maxWidth: `300px`,
                        },
                        children: [
                          (0, JSXRuntime.jsx)(`div`, {
                            style: {
                              display: `flex`,
                              alignItems: `center`,
                              gap: `12px`,
                            },
                            children: C
                              ? (0, JSXRuntime.jsx)(`img`, {
                                  src: C.logo.src,
                                  alt: C.logo.alt,
                                  style: {
                                    height: `44px`,
                                    width: `auto`,
                                    display: `block`,
                                  },
                                })
                              : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                                  children: [
                                    (0, JSXRuntime.jsx)(Vl, {
                                      h: 26,
                                    }),
                                    (0, JSXRuntime.jsx)(U, {}),
                                  ],
                                }),
                          }),
                          (0, JSXRuntime.jsxs)(`p`, {
                            style: {
                              margin: `14px 0 0`,
                              fontFamily: hc,
                              fontWeight: 400,
                              fontSize: `13px`,
                              lineHeight: 1.6,
                              color: V,
                            },
                            children: [
                              `Casino online con `,
                              Qe.format(ke),
                              ` juegos de `,
                              Oe.length,
                              ` proveedores. Cargá y retirá tus fichas hablando con nuestro cajero.`,
                            ],
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        className: `lb-foot-col`,
                        children: [
                          (0, JSXRuntime.jsx)(`h3`, {
                            children: `Juegos`,
                          }),
                          (0, JSXRuntime.jsx)(`button`, {
                            type: `button`,
                            onClick: () => qe(`slots`),
                            children: `Slots`,
                          }),
                          (0, JSXRuntime.jsx)(`button`, {
                            type: `button`,
                            onClick: y,
                            children: `Deportivas`,
                          }),
                          (0, JSXRuntime.jsx)(`button`, {
                            type: `button`,
                            onClick: () => qe(`tendencias`),
                            children: `Tendencias`,
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        className: `lb-foot-col`,
                        children: [
                          (0, JSXRuntime.jsx)(`h3`, {
                            children: `Cajero`,
                          }),
                          (0, JSXRuntime.jsx)(`button`, {
                            type: `button`,
                            onClick: u,
                            children: `Cargar fichas`,
                          }),
                          (0, JSXRuntime.jsx)(`button`, {
                            type: `button`,
                            onClick: d,
                            children: `Retirar fichas`,
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        className: `lb-foot-col`,
                        children: [
                          (0, JSXRuntime.jsx)(`h3`, {
                            children: `Legal`,
                          }),
                          (0, JSXRuntime.jsx)(`a`, {
                            href: `/terminos`,
                            children: `Términos y condiciones`,
                          }),
                          (0, JSXRuntime.jsx)(`a`, {
                            href: `/privacidad`,
                            children: `Privacidad`,
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        className: `lb-foot-col`,
                        children: [
                          (0, JSXRuntime.jsx)(`h3`, {
                            children: `Ayuda`,
                          }),
                          (0, JSXRuntime.jsxs)(`a`, {
                            href: Xc(
                              x,
                              `Hola! Necesito ayuda con mi cuenta de Rushybet.`,
                            ),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            children: [`WhatsApp `, Yc(x)],
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        className: `lb-foot-col`,
                        style: {
                          maxWidth: `260px`,
                        },
                        children: [
                          (0, JSXRuntime.jsx)(`h3`, {
                            children: `Juego responsable`,
                          }),
                          (0, JSXRuntime.jsx)(`p`, {
                            style: {
                              margin: 0,
                              fontFamily: hc,
                              fontWeight: 400,
                              fontSize: `12.5px`,
                              lineHeight: 1.6,
                              color: V,
                            },
                            children: `Sólo para mayores de 18 años. Jugá por diversión, nunca con plata que necesitás. Si sentís que perdés el control, pedí ayuda.`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `lb-foot-bottom`,
                    children: [
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: {
                          display: `flex`,
                          alignItems: `center`,
                          gap: `10px`,
                          color: lc,
                        },
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              width: 26,
                              height: 26,
                              borderRadius: `50%`,
                              border: `1.5px solid ${lc}`,
                              display: `grid`,
                              placeItems: `center`,
                              fontSize: `9px`,
                              fontWeight: 900,
                              flex: `none`,
                              fontFamily: hc,
                            },
                            children: `18+`,
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            style: {
                              fontFamily: hc,
                              fontWeight: 700,
                              fontSize: `10.5px`,
                              letterSpacing: `.08em`,
                            },
                            children: `JUGÁ CON RESPONSABILIDAD`,
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        style: {
                          fontFamily: hc,
                          fontWeight: 400,
                          fontSize: `12.5px`,
                          color: lc,
                        },
                        children: C
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `© `,
                                Nl,
                                ` `,
                                C.dominio,
                                ` — Todos los derechos reservados`,
                              ],
                            })
                          : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                `© `,
                                Nl,
                                ` rushybet.com — Todos los derechos reservados`,
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(`nav`, {
        className: `lb-tabbar`,
        style: {
          gridTemplateColumns: `repeat(4, 1fr)`,
        },
        children: [
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            className: `lb-tab`,
            "data-on": ne === `inicio` && he === null ? `1` : `0`,
            "aria-current": ne === `inicio` && he === null ? `page` : void 0,
            onClick: () => qe(`inicio`),
            style: {
              color:
                ne === `inicio` && he === null
                  ? C
                    ? C.acentoBarra
                    : `#FF5F0E`
                  : V,
            },
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                style: {
                  display: `grid`,
                  placeItems: `center`,
                  height: `22px`,
                },
                children: (0, JSXRuntime.jsx)(Bl, {
                  name: `ic-home`,
                  size: 19,
                }),
              }),
              (0, JSXRuntime.jsx)(`span`, {
                className: `lb-rot`,
                style: {
                  fontFamily: `var(--font-oswald), 'Oswald', sans-serif`,
                  fontWeight: 500,
                  fontSize: `9.5px`,
                  letterSpacing: `.1em`,
                  lineHeight: `100%`,
                  color: `inherit`,
                  textTransform: `uppercase`,
                },
                children: `CASINO`,
              }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            className: `lb-tab`,
            "data-on": he === Fl ? `1` : `0`,
            "aria-current": he === Fl ? `page` : void 0,
            onClick: () => Ye(Fl),
            style: {
              color: he === Fl ? (C ? C.acentoBarra : `#FF5F0E`) : V,
            },
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                style: {
                  display: `grid`,
                  placeItems: `center`,
                  height: `22px`,
                },
                children: (0, JSXRuntime.jsx)(Bl, {
                  name: `ic-live`,
                  size: 19,
                }),
              }),
              (0, JSXRuntime.jsx)(`span`, {
                className: `lb-rot`,
                style: {
                  fontFamily: `var(--font-oswald), 'Oswald', sans-serif`,
                  fontWeight: 500,
                  fontSize: `9.5px`,
                  letterSpacing: `.1em`,
                  lineHeight: `100%`,
                  color: `inherit`,
                  textTransform: `uppercase`,
                },
                children: `EN VIVO`,
              }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            className: `lb-tab`,
            "data-on": `0`,
            onClick: y,
            style: {
              color: V,
            },
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                style: {
                  display: `grid`,
                  placeItems: `center`,
                  height: `22px`,
                },
                children: (0, JSXRuntime.jsx)(Bl, {
                  name: `ic-sports`,
                  size: 19,
                }),
              }),
              (0, JSXRuntime.jsx)(`span`, {
                className: `lb-rot`,
                style: {
                  fontFamily: `var(--font-oswald), 'Oswald', sans-serif`,
                  fontWeight: 500,
                  fontSize: `9.5px`,
                  letterSpacing: `.1em`,
                  lineHeight: `100%`,
                  color: `inherit`,
                  textTransform: `uppercase`,
                },
                children: `DEPORTES`,
              }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            className: `lb-tab`,
            "data-on": `0`,
            onClick: () => (e ? fe(!0) : s()),
            style: {
              color: V,
            },
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                style: {
                  display: `grid`,
                  placeItems: `center`,
                  height: `22px`,
                },
                children: (0, JSXRuntime.jsx)(Bl, {
                  name: `ic-user`,
                  size: 19,
                }),
              }),
              (0, JSXRuntime.jsx)(`span`, {
                className: `lb-rot`,
                style: {
                  fontFamily: `var(--font-oswald), 'Oswald', sans-serif`,
                  fontWeight: 500,
                  fontSize: `9.5px`,
                  letterSpacing: `.1em`,
                  lineHeight: `100%`,
                  color: `inherit`,
                  textTransform: `uppercase`,
                },
                children: `CUENTA`,
              }),
            ],
          }),
        ],
      }),
      de &&
        (0, JSXRuntime.jsx)(`div`, {
          className: `lb-mob`,
          children: (0, JSXRuntime.jsx)(MobileLobbyShell, {
            balanceTexto: Gs(t)
              .replace(/[^0-9.,]/g, ``)
              .trim(),
            onCargar: () => {
              (fe(!1), u());
            },
            onRetirar: () => {
              (fe(!1), d());
            },
            onMovimientos: _
              ? () => {
                  (fe(!1), _());
                }
              : null,
            onMenu: () => {
              (fe(!1), k(!0));
            },
            cerrar: () => fe(!1),
            piel: S?.movil ?? null,
          }),
        }),
      le &&
        (0, JSXRuntime.jsx)(`div`, {
          onClick: () => k(!1),
          style: {
            position: `fixed`,
            inset: 0,
            zIndex: 60,
            background: `rgba(0,0,0,.7)`,
            animation: `lbFade .2s ease`,
          },
          children: (0, JSXRuntime.jsxs)(`div`, {
            onClick: (e) => e.stopPropagation(),
            style: {
              position: `absolute`,
              right: 0,
              top: 0,
              bottom: 0,
              width: `min(320px,86vw)`,
              background: `#141414`,
              boxShadow: `inset 1px 0 0 0 #242424`,
              padding: `28px 24px`,
              display: `flex`,
              flexDirection: `column`,
              gap: `24px`,
              animation: `lbUp .22s ease`,
              overflowY: `auto`,
            },
            children: [
              (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `space-between`,
                },
                children: [
                  e
                    ? tt(!0)
                    : (0, JSXRuntime.jsx)(`span`, {
                        style: {
                          fontFamily: `var(--font-oswald), 'Oswald', 'Segoe UI', sans-serif`,
                          fontWeight: 600,
                          fontSize: `22px`,
                          color: `#fff`,
                          textTransform: `uppercase`,
                        },
                        children: `Menú`,
                      }),
                  (0, JSXRuntime.jsx)(`button`, {
                    type: `button`,
                    onClick: () => k(!1),
                    "aria-label": `Cerrar`,
                    style: {
                      width: 44,
                      height: 44,
                      background: `transparent`,
                      border: 0,
                      color: `#929292`,
                      fontSize: `26px`,
                      cursor: `pointer`,
                    },
                    children: `×`,
                  }),
                ],
              }),
              $e(`100%`, 44),
              nt(!0),
              (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  paddingTop: `4px`,
                },
                children: [st(), ct(), lt()],
              }),
              e &&
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    marginTop: `auto`,
                  },
                  children: [ut(20), gt()],
                }),
            ],
          }),
        }),
    ],
  });
}
function initializeDesktopLobby() {
  Ml = createLazyInitializer(() => {
    jl = new Map();
  });
  Ml();
  Nl = new Date().getFullYear();
  Pl = [
    {
      id: `futbol`,
      label: `futbol`,
      img: `sport-futbol`,
      c: `rgb(66,133,244)`,
      fit: `50% 73.656%/116.945% 144.145%`,
    },
    {
      id: `basketball`,
      label: `basketball`,
      img: `sport-basketball`,
      c: `rgb(251,188,5)`,
      fit: `center/cover`,
    },
    {
      id: `hockey`,
      label: `hockey`,
      img: `sport-hockey`,
      c: `rgb(255,85,0)`,
      fit: `center/cover`,
    },
    {
      id: `f1`,
      label: `f1`,
      img: `sport-f1`,
      c: `rgb(66,133,244)`,
      fit: `12.609% 50%/116.666% 100%`,
    },
    {
      id: `rugby`,
      label: `rugby`,
      img: `sport-rugby`,
      c: `rgb(255,85,0)`,
      fit: `center/cover`,
    },
    {
      id: `ufc`,
      label: `ufc`,
      img: `sport-ufc`,
      c: `rgb(67,67,67)`,
      fit: `center/cover`,
    },
  ];
  Fl = `PP_LIVE_PRO`;
  Il = [
    {
      k: `inicio`,
      label: `Inicio`,
      icon: `ic-home`,
    },
    {
      k: `slots`,
      label: `Slots`,
      icon: `ic-slots`,
    },
    {
      k: `deportes`,
      label: `Deportes`,
      icon: `ic-sports`,
    },
    {
      k: `envivo`,
      label: `En vivo`,
      icon: `ic-live`,
    },
    {
      k: `tendencias`,
      label: `Tendencias`,
      icon: `ic-hot`,
    },
  ];
  Ll = `92px minmax(0,1.5fr) .75fr 1fr 1.1fr 1.4fr`;
  Rl = `58px minmax(0,1fr) 1.2fr`;
  zl = `

.lb{min-height:100vh;background:${ic};overflow-x:clip;padding-bottom:120px;color:#fff}
.lb *{box-sizing:border-box}
.lb-row{display:flex;gap:88px;max-width:1847px;margin:0 auto;padding:0 18px;align-items:flex-start}
.lb-main{flex:1;min-width:0;max-width:1486px;padding-top:clamp(9px,1.1vw,16px)}



.lb-side{position:fixed;left:0;top:0;bottom:0;z-index:45;width:112px;height:100dvh;border-radius:0;background:${oc};box-shadow:inset -1px 0 0 0 ${dc},20px 0 60px rgba(0,0,0,.35);display:flex;flex-direction:column;padding:0;overflow-y:auto;scrollbar-width:none}

@media (min-width:1180px){
  
  .lb-row{max-width:none;margin:0;padding:0 5% 0 calc(112px + 5%)}
  .lb-main{max-width:none}
}
.lb-rail{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;width:100%;padding:19px 6px;background:none;border:0;border-top:1px solid ${dc};cursor:pointer;transition:color .18s ease,background .18s ease}
.lb-rail:hover{color:#fff;background:rgba(255,255,255,.03)}
.lb-rail:active{transform:scale(.97)}
.lb-rail span{font-family:var(--font-oswald),'Oswald',sans-serif;font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;line-height:100%;color:inherit}
.lb-side::-webkit-scrollbar{display:none}
.lb-mhead{display:none;align-items:center;justify-content:space-between;gap:12px;padding:35px 21px 0}

.lb-tabbar{display:none;position:fixed;left:0;right:0;bottom:0;z-index:40;height:calc(64px + env(safe-area-inset-bottom));grid-template-columns:repeat(5,1fr);background:${oc};box-shadow:inset 0 1px 0 0 ${dc},0 -12px 30px rgba(0,0,0,.5);padding-bottom:env(safe-area-inset-bottom)}
.lb-desk{display:block}
.lb-mob{display:none}

.lb-promos{display:flex}


.lb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(132px,1fr));gap:14px}
.lb-track{display:flex;gap:12px;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;padding:0 21px 6px;margin:0 -21px;scrollbar-width:none}
.lb-track::-webkit-scrollbar{display:none}

.lb-track>*{scroll-snap-align:start;flex:0 0 126px}
@media (max-width:520px){.lb-track>*{flex:0 0 116px}}
@media (max-width:520px){
  
  .lb-grid{grid-template-columns:repeat(auto-fill,minmax(104px,1fr));gap:9px}
}
.lb-ctrl{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:11px}


.lb-btn{position:relative;overflow:hidden;transition:transform .16s cubic-bezier(.2,.7,.3,1),box-shadow .28s ease,filter .28s ease;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.11),inset 0 1px 0 rgba(255,255,255,.20),0 1px 2px rgba(0,0,0,.30),0 6px 16px rgba(0,0,0,.26)}
.lb-btn:hover{filter:brightness(1.05);transform:translateY(-1px);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.16),inset 0 1px 0 rgba(255,255,255,.26),0 2px 4px rgba(0,0,0,.32),0 10px 24px rgba(0,0,0,.32)}
.lb-btn:active{transform:translateY(.5px) scale(.995);filter:brightness(.97);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.09),inset 0 2px 4px rgba(80,20,0,.32),0 1px 2px rgba(0,0,0,.32)}

@keyframes lbShine{0%,74%{transform:translateX(-190%) skewX(-18deg)}100%{transform:translateX(460%) skewX(-18deg)}}
.lb-shine::after{content:'';position:absolute;top:-60%;bottom:-60%;left:0;width:52%;pointer-events:none;
  background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,.17),rgba(255,255,255,0));
  transform:translateX(-190%) skewX(-14deg);animation:lbShine 7.5s ease-in-out infinite}


.lb-promo{transition:transform .2s cubic-bezier(.2,.7,.3,1),box-shadow .3s ease;will-change:transform}
.lb-promo .lb-art,.lb-promo .lb-body{transition:transform .2s cubic-bezier(.2,.7,.3,1),filter .3s ease}



.lb-prov{display:inline-flex;align-items:center;height:30px;padding:0 13px;border-radius:100px;
  background:rgba(255,255,255,.045);box-shadow:inset 0 0 0 1px rgba(255,255,255,.075);
  font-family:${hc};font-weight:600;font-size:12.5px;color:${V};letter-spacing:.01em;
  transition:color .2s ease,background .2s ease,box-shadow .2s ease}
.lb-prov:hover{color:#fff;background:rgba(255,255,255,.075);box-shadow:inset 0 0 0 1px rgba(255,140,60,.4)}



.lb-busca{position:relative;z-index:30;display:flex;align-items:center;gap:9px;margin-top:clamp(2px,.3vh,6px)}

.lb-busca-campo{flex:1;min-width:0;display:flex;align-items:center;gap:10px;height:40px;padding:0 14px;
  border-radius:11px;background:${ic};box-shadow:inset 0 0 0 1px ${dc};color:${V};
  transition:box-shadow .22s ease}
.lb-busca-campo:focus-within{box-shadow:inset 0 0 0 1px ${uc}}
.lb-busca-campo input{flex:1;min-width:0;height:100%;background:transparent;border:0;outline:none;
  color:#fff;font-family:inherit;font-size:14px}
.lb-busca-campo input::placeholder{color:${lc}}
.lb-busca-x{display:flex;align-items:center;justify-content:center;width:23px;height:23px;flex:0 0 auto;
  border:0;border-radius:50%;background:rgba(255,255,255,.06);color:${V};cursor:pointer;font-size:14px;
  line-height:1;transition:background .18s,color .18s}
.lb-busca-x:hover{background:rgba(255,255,255,.12);color:#fff}

.lb-azar{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 15px;flex:0 0 auto;
  border:0;border-radius:11px;background:${oc};box-shadow:inset 0 0 0 1px ${dc};color:#E4E4E4;
  font-family:var(--font-oswald),'Oswald',sans-serif;font-weight:600;font-size:12.5px;letter-spacing:.09em;
  text-transform:uppercase;cursor:pointer;
  transition:transform .3s cubic-bezier(.34,1.56,.64,1),background .2s,box-shadow .2s,color .2s}
.lb-azar:hover{transform:translateY(-2px);background:${sc};box-shadow:inset 0 0 0 1px ${uc};color:#fff}
.lb-azar:active{transform:translateY(0)}
.lb-azar svg{transition:transform .5s cubic-bezier(.34,1.56,.64,1)}
.lb-azar:hover svg{transform:rotate(32deg)}

.lb-sug{position:absolute;left:0;right:0;top:46px;z-index:46;padding:7px;border-radius:13px;
  background:${oc};box-shadow:inset 0 0 0 1px ${dc},0 28px 64px -26px rgba(0,0,0,.95);
  max-height:min(430px,54vh);overflow-y:auto;animation:lbSugIn .22s cubic-bezier(.34,1.56,.64,1)}
@keyframes lbSugIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
.lb-sug-r{display:flex;align-items:center;gap:13px;width:100%;padding:8px 10px;border:0;border-radius:10px;
  background:transparent;color:inherit;cursor:pointer;text-align:left;font-family:inherit;
  transition:background .16s ease}
.lb-sug-r:hover,.lb-sug-r:focus-visible{background:${sc};outline:none}
.lb-sug-art{flex:0 0 auto;width:42px;height:42px;border-radius:9px;background-size:cover;
  background-position:center;background-color:${sc}}
.lb-sug-n{font-family:var(--font-sans),${hc};font-weight:600;font-size:14px;color:#fff;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lb-sug-n em{font-style:normal;color:${B}}
.lb-sug-p{margin-top:2px;font-size:11px;color:${lc};letter-spacing:.04em;text-transform:uppercase}
.lb-sug-vacio{padding:16px 12px;color:${V};font-size:13.5px}

.lb-trow-ir{cursor:pointer}
.lb-trow-ir:hover{background:rgba(255,255,255,.045)}
.lb-trow-ir:focus-visible{outline:2px solid ${B};outline-offset:-2px}
.lb-foot{margin-top:clamp(44px,4.4vw,70px);padding-top:clamp(28px,2.6vw,40px);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.07)}
.lb-foot-top{display:flex;flex-wrap:wrap;gap:clamp(28px,4vw,72px);align-items:flex-start}
.lb-foot-col{display:flex;flex-direction:column;align-items:flex-start;gap:11px}
.lb-foot-col h3{margin:0 0 3px;font-family:${hc};font-weight:700;font-size:11px;letter-spacing:.16em;
  text-transform:uppercase;color:${lc}}
.lb-foot-col button,.lb-foot-col a{background:none;border:0;padding:0;cursor:pointer;text-align:left;text-decoration:none;
  font-family:${hc};font-weight:500;font-size:13.5px;color:${V};
  transition:color .18s ease,transform .18s ease}
.lb-foot-col button:hover,.lb-foot-col a:hover{color:#fff;transform:translateX(2px)}
.lb-foot-bottom{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;
  margin-top:clamp(26px,2.4vw,38px);padding-top:20px;box-shadow:inset 0 1px 0 rgba(255,255,255,.055)}
@media (prefers-reduced-motion:reduce){.lb-prov,.lb-foot-col button,.lb-foot-col a{transition:none}}
@media (prefers-reduced-motion:reduce){
  .lb-shine::after{animation:none;opacity:0}
  .lb-btn,.lb-promo,.lb-promo .lb-art,.lb-promo .lb-body{transition:none}
}

@media (hover:none){
  .lb-promo,.lb-promo .lb-art,.lb-promo .lb-body{transform:none!important}
}

.lb button,.lb [role="button"]{user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}
.lb button:focus-visible,.lb [role="button"]:focus-visible{outline:2px solid ${B};outline-offset:3px;border-radius:6px}


.lb-nav{position:relative;display:flex;align-items:center;gap:12px;padding-left:22px;height:22px;width:100%;background:none;border:0;text-align:left;cursor:pointer;transition:color .18s ease,transform .1s ease}
.lb-nav:hover{color:#fff}
.lb-nav:active{transform:scale(.97)}
.lb-nav::before{content:'';position:absolute;left:0;top:50%;width:3px;height:20px;border-radius:0 4px 4px 0;background:${B};transform:translateY(-50%) scaleY(0);transform-origin:center;transition:transform .24s cubic-bezier(.22,.9,.28,1)}
.lb-nav[data-on="1"]::before{transform:translateY(-50%) scaleY(1)}
.lb-nav[data-on="1"] .lb-ic{transform:scale(1.08)}
.lb-ic{transition:transform .24s cubic-bezier(.22,.9,.28,1)}


.lb-mrow{color:${V};transition:color .18s ease,transform .18s cubic-bezier(.22,.9,.28,1)}
.lb-mrow:hover{color:#fff;transform:translateX(2px)}
.lb-mrow:active{transform:translateX(2px) scale(.98)}


.lb-logo{transition:transform .18s cubic-bezier(.22,.9,.28,1),opacity .18s ease}
.lb-logo:hover{opacity:.86}
.lb-logo:active{transform:scale(.96)}

.lb-tab{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:44px;padding:0 2px;background:transparent;border:0;cursor:pointer;transition:color .18s ease,transform .1s ease}
.lb-tab:active{transform:scale(.94)}

.lb-tab[data-on="1"] .lb-rot{font-weight:600}

.lb-tab::after{content:'';position:absolute;top:0;left:50%;width:24px;height:3px;border-radius:0 0 3px 3px;background:${B};transform:translateX(-50%) scaleX(0);transition:transform .24s cubic-bezier(.22,.9,.28,1)}
.lb-tab[data-on="1"]::after{transform:translateX(-50%) scaleX(1)}

.lb-rot{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center}
@media (prefers-reduced-motion:reduce){
  .lb-nav,.lb-tab,.lb-ic,.lb-nav::before,.lb-tab::after{transition:none}
}
@media (max-width:1179px){
  .lb-side{display:none}
  .lb-mhead{display:flex}
  .lb-tabbar{display:grid}
  .lb-row{gap:0;padding:0 21px}
}
.lb-depgrid{display:grid;grid-template-columns:repeat(6,1fr);gap:16px}
@media (max-width:899px){
  .lb-desk{display:none}
  .lb-promos{display:none}
  .lb-mob{display:block}
  .lb-depgrid{display:none}
  
  .lb-foot{margin-top:34px;padding-top:24px}
  .lb-foot-top{display:grid;grid-template-columns:1fr 1fr;gap:20px 14px}
  .lb-foot-top > div:first-child{grid-column:1 / -1;max-width:none!important}
  .lb-foot-top > div:last-child{grid-column:1 / -1;max-width:none!important}
  .lb-foot-col{gap:9px}
  .lb-foot-col button,.lb-foot-col a{font-size:13px}
  .lb-foot-bottom{flex-direction:column;align-items:flex-start;gap:9px;margin-top:22px;padding-top:16px}
}
@media (min-width:900px){
  .lb-mob{display:none!important}
}
@keyframes lbUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes lbFade{from{opacity:0}to{opacity:1}}

@keyframes lbLetter{
  0%{opacity:0;transform:perspective(600px) rotateX(-78deg) translateY(.62em) scale(.94)}
  10%{opacity:1}
  16%{transform:perspective(600px) rotateX(6deg) translateY(-.05em) scale(1.015)}
  22%{transform:none}
  84%{opacity:1;transform:none}
  93%{opacity:0;transform:perspective(600px) rotateX(46deg) translateY(-.34em) scale(.97)}
  100%{opacity:0;transform:perspective(600px) rotateX(-78deg) translateY(.62em) scale(.94)}
}

.lb-rise{
  display:inline-block;
  transform-origin:50% 88%;
  backface-visibility:hidden;
  -webkit-font-smoothing:antialiased;
  will-change:transform,opacity;
  animation:lbLetter 4s cubic-bezier(.2,.75,.3,1) infinite both;
}

.lb-after{animation:lbUp .55s cubic-bezier(.22,.9,.28,1) both}




@media (prefers-reduced-motion:reduce){
  .lb-rise,.lb-after{animation:none}
}


@keyframes lbWin{
  0%{opacity:0;transform:translateY(-18px) scale(.985)}
  55%{opacity:1;background:rgba(255,85,0,.13)}
  100%{opacity:1;transform:none;background:transparent}
}
@keyframes lbWinSweep{0%{transform:translateX(-120%)}100%{transform:translateX(220%)}}
@keyframes lbLive{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.82)}}
@keyframes lbHot{0%,100%{filter:brightness(1)}50%{filter:brightness(1.18)}}

@media (max-width:899px){.lb-thead,.lb-trow{padding:0 14px}}
.lb-tbl{width:100%;border-radius:20px;background:${ac};overflow:hidden;box-shadow:inset 0 0 0 1px ${dc}}

.lb-thead{display:grid;align-items:center;height:44px;padding:0 22px;background:rgba(255,255,255,.028);
  box-shadow:inset 0 -1px 0 ${dc};font-family:${hc};font-weight:700;font-size:11px;letter-spacing:.14em;
  text-transform:uppercase;color:${lc};text-align:center}
.lb-trow{position:relative;display:grid;align-items:center;height:68px;padding:0 22px;color:#fff;text-align:center;
  box-shadow:inset 0 -1px 0 rgba(255,255,255,.045);transition:background .2s ease}
.lb-trow:last-child{box-shadow:none}
.lb-trow:hover{background:rgba(255,255,255,.035)}

.lb-trow::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:${B};
  transform:scaleY(0);transform-origin:center;transition:transform .22s cubic-bezier(.22,.9,.28,1)}
.lb-trow:hover::before{transform:scaleY(1)}
.lb-thumb{transition:transform .25s cubic-bezier(.22,.9,.28,1),box-shadow .25s ease;box-shadow:0 3px 10px rgba(0,0,0,.45)}
.lb-trow:hover .lb-thumb{transform:scale(1.08) rotate(-1.5deg);box-shadow:0 8px 20px rgba(0,0,0,.6)}
.lb-win{animation:lbWin .75s cubic-bezier(.22,.9,.28,1) both;overflow:hidden}
.lb-win::after{content:'';position:absolute;top:0;bottom:0;left:0;width:34%;pointer-events:none;
  background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,170,90,.30),rgba(255,255,255,0));
  animation:lbWinSweep 1.1s cubic-bezier(.3,0,.2,1) both}
.lb-live{width:8px;height:8px;border-radius:50%;background:${B};box-shadow:0 0 10px rgba(255,85,0,.9);
  animation:lbLive 1.8s ease-in-out infinite}
.lb-mult-hot{animation:lbHot 2.4s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){
  .lb-win,.lb-win::after,.lb-live,.lb-mult-hot{animation:none}
  .lb-trow,.lb-trow::before,.lb-thumb{transition:none}
}


.lb-sport{transition:transform .18s ease,box-shadow .18s ease}
.lb-sport:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(0,0,0,.6)}
@media (prefers-reduced-motion:reduce){.lb-sport{transition:none}}
.lb-prow{display:flex;align-items:baseline;gap:12px;margin-bottom:22px;width:100%;
  background:none;border:0;padding:0;text-align:left;cursor:pointer;min-height:44px}
.lb-prow-more{margin-left:auto;display:inline-flex;align-items:center;gap:7px;flex:0 0 auto;
  font-family:${hc};font-weight:600;font-size:13px;color:${V};
  transition:color .2s ease,transform .2s ease}
.lb-prow:hover .lb-prow-more{color:#fff;transform:translateX(3px)}
.lb-prow:hover h2{color:${B};transition:color .2s ease}

.lb-prow h2,.lb-prow .lb-marca{transition:transform .22s cubic-bezier(.34,1.56,.64,1),color .2s ease}
.lb-prow:hover .lb-marca{transform:scaleY(1.5)}
.lb-prow:hover h2{transform:translateX(2px)}
.lb-prow:active{transform:scale(.995)}

.lb-ord{height:30px;padding:0 12px;border-radius:100px;background:transparent;border:0;cursor:pointer;
  box-shadow:inset 0 0 0 1px ${dc};font-family:${hc};font-weight:600;font-size:12.5px;color:${V};
  transition:color .18s ease,background .18s ease,box-shadow .18s ease}
.lb-ord:hover{color:#fff}
.lb-ord[data-on="1"]{background:rgba(255,90,0,.14);box-shadow:inset 0 0 0 1px rgba(255,90,0,.45);color:${B}}

.lb-hold{min-height:300px}


.lb-fav{position:absolute;top:5px;right:5px;z-index:2;width:34px;height:34px;display:flex;
  align-items:center;justify-content:center;padding:0;border:0;border-radius:50%;
  background:rgba(8,6,4,.5);cursor:pointer;opacity:0;
  transition:opacity .18s ease,transform .18s ease,background .18s ease}
.lb-fav:hover{background:rgba(8,6,4,.78);transform:scale(1.12)}
.lb-fav:focus-visible{opacity:1;outline:2px solid ${B};outline-offset:2px}
.lb-fav[data-on="1"]{opacity:1}
[role="button"]:hover > .lb-fav{opacity:1}

@media (max-width:899px){.lb-fav[data-on="0"]{opacity:.8}}
@media (hover:none){.lb-fav[data-on="0"]{opacity:.8}}


.lb-dot{width:22px;height:22px;padding:0;display:flex;align-items:center;justify-content:center;
  background:none;border:0;cursor:pointer}
.lb-dot i{display:block;width:6px;height:6px;border-radius:50%;
  transition:background .2s ease,transform .2s ease}
@media (prefers-reduced-motion:reduce){
  .lb-prow-more,.lb-prow:hover h2,.lb-prow h2,.lb-prow .lb-marca,.lb-fav,.lb-dot i{transition:none}
}


@media (hover:hover) and (prefers-reduced-motion:no-preference){
  :where(.lb-rail,.lb-prov,.lb-busca-x,.lb-sug-r,.lb-trow,.lb-trow-ir,.lb-nav,.lb-mrow,.lb-tab,.lb-ord,
    .lb-foot-col button,.lb-foot-col a,.lb-logo){
    transition:background-color .16s ease-out,box-shadow .16s ease-out,border-color .16s ease-out,
      color .16s ease-out,opacity .16s ease-out,filter .16s ease-out}
  :where(.lb-rail,.lb-prov,.lb-busca-x,.lb-sug-r,.lb-trow,.lb-trow-ir,.lb-nav,.lb-mrow,.lb-tab,.lb-ord,
    .lb-foot-col button,.lb-foot-col a,.lb-logo):hover{
    transition:background-color .3s cubic-bezier(.22,.61,.36,1),box-shadow .3s cubic-bezier(.22,.61,.36,1),
      border-color .3s cubic-bezier(.22,.61,.36,1),color .3s cubic-bezier(.22,.61,.36,1),
      opacity .3s cubic-bezier(.22,.61,.36,1),filter .3s cubic-bezier(.22,.61,.36,1)}
}
`;
  Bl = ({ name: e, size: t }) =>
    (0, JSXRuntime.jsx)(`span`, {
      "aria-hidden": !0,
      className: `lb-ic`,
      style: {
        flex: `0 0 ${t}px`,
        width: t,
        height: t,
        backgroundColor: `currentColor`,
        display: `block`,
        WebkitMaskImage: `url("${tu[e] ?? `./rushybet/v2/` + e + `.svg`}")`,
        maskImage: `url("${tu[e] ?? `./rushybet/v2/` + e + `.svg`}")`,
        WebkitMaskRepeat: `no-repeat`,
        maskRepeat: `no-repeat`,
        WebkitMaskPosition: `center`,
        maskPosition: `center`,
        WebkitMaskSize: `contain`,
        maskSize: `contain`,
      },
    });
  Vl = ({ h: e = 30.442 }) =>
    (0, JSXRuntime.jsxs)(`svg`, {
      width: (35.873 / 30.442) * e,
      height: e,
      viewBox: `0 0 35.873 30.442`,
      fill: `none`,
      style: {
        flex: `0 0 auto`,
        display: `block`,
      },
      "aria-hidden": !0,
      children: [
        (0, JSXRuntime.jsx)(`path`, {
          d: `M 8.598 30.442 L 0 15.55 L 0 0 L 22.215 0 L 22.215 13.411 L 22.215 15.55 L 20.24 15.55 L 13.617 15.55 L 22.215 30.442 L 8.598 30.442 Z`,
          transform: `translate(13.658 0)`,
          fill: B,
        }),
        (0, JSXRuntime.jsx)(`rect`, {
          x: `0`,
          y: `15.715`,
          width: `13.658`,
          height: `14.645`,
          fill: B,
        }),
      ],
    });
  U = () =>
    (0, JSXRuntime.jsxs)(`span`, {
      style: {
        fontFamily: `var(--font-archivo), sans-serif`,
        fontStyle: `italic`,
        fontSize: `22px`,
        lineHeight: `100%`,
        color: `#fff`,
      },
      children: [
        (0, JSXRuntime.jsx)(`span`, {
          style: {
            fontWeight: 400,
          },
          children: `Rushy`,
        }),
        (0, JSXRuntime.jsx)(`span`, {
          style: {
            fontWeight: 700,
          },
          children: `Bet`,
        }),
      ],
    });
  Hl = ({ s: e = 24 }) =>
    (0, JSXRuntime.jsxs)(`svg`, {
      width: e,
      height: e,
      viewBox: `0 0 24 24`,
      style: {
        flex: `0 0 ${e}px`,
      },
      "aria-hidden": !0,
      children: [
        (0, JSXRuntime.jsx)(`path`, {
          d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.27-4.74 3.27-8.09z`,
          fill: `#4285F4`,
        }),
        (0, JSXRuntime.jsx)(`path`, {
          d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z`,
          fill: `#34A853`,
        }),
        (0, JSXRuntime.jsx)(`path`, {
          d: `M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84z`,
          fill: `#FBBC05`,
        }),
        (0, JSXRuntime.jsx)(`path`, {
          d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z`,
          fill: `#EA4335`,
        }),
      ],
    });
  W = ({ flip: e = !1, size: t = 8, color: n = B }) =>
    (0, JSXRuntime.jsx)(`svg`, {
      width: t,
      height: t * 1.728,
      viewBox: `0 0 8.591 14.849`,
      style: {
        transform: e ? `scaleX(-1)` : void 0,
      },
      "aria-hidden": !0,
      children: (0, JSXRuntime.jsx)(`path`, {
        d: `M 8.25 8.25 L 1.65 14.849 L 0 13.2 L 5.775 7.425 L 0 1.65 L 1.65 0 L 8.25 6.6 C 8.468 6.819 8.591 7.115 8.591 7.425 C 8.591 7.734 8.468 8.031 8.25 8.25 Z`,
        fill: n,
      }),
    });
  G = {
    margin: 0,
    fontFamily: gc,
    fontWeight: 600,
    fontSize: `clamp(17px,1.1vw,21px)`,
    letterSpacing: `.01em`,
    lineHeight: `100%`,
    color: `#fff`,
    textTransform: `uppercase`,
  };
  K = {
    flex: `0 0 auto`,
    width: `3px`,
    height: `17px`,
    borderRadius: `3px`,
    background: `linear-gradient(180deg, ${B}, rgba(255,90,0,.35))`,
  };
  Ul = {
    flex: 1,
    minWidth: `18px`,
    height: `1px`,
    background: `linear-gradient(90deg, ${uc}, transparent)`,
  };
  Wl = {
    display: `inline-flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: `20px`,
    padding: `0 8px`,
    borderRadius: `6px`,
    background: `rgba(255,255,255,.045)`,
    boxShadow: `inset 0 0 0 1px ${dc}`,
    fontFamily: hc,
    fontWeight: 700,
    fontSize: `11.5px`,
    lineHeight: `100%`,
    letterSpacing: `.01em`,
    color: V,
    fontVariantNumeric: `tabular-nums`,
  };
  Gl = {
    border: 0,
    cursor: `pointer`,
    fontFamily: gc,
    fontWeight: 600,
    letterSpacing: `.11em`,
    textTransform: `uppercase`,
    color: `#fff`,
    boxShadow: mc,
  };
}
export { Al, Ml, Pl, Hl, W, DesktopLobby, initializeDesktopLobby };
