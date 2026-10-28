/**
 * classic-lobby / lobby-controller.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { Ia, Ba, Va, gameCatalog, ro } from "./game-catalog.js";
import {
  createDemoRouter,
  createUnavailableComponent,
  createDemoDatabase,
} from "./demo-services.js";
import { BrandLoader } from "./brand-loader.js";
import { LegacySupportChat } from "./legacy-support-chat.js";
import { Ss, Ts, Es, Os, ks, As, js, Ms, Ns, Ps, Fs } from "./game-search.js";
import { zs, Hs, Us, Ws, Gs, qs } from "./account-security.js";
import {
  rc,
  ic,
  ac,
  B,
  cc,
  V,
  lc,
  dc,
  fc,
  gc,
  _c,
  MemoGameCard,
} from "./game-cards.js";
import { Tc, Ac, Mc, Nc, Pc, Fc, Yc, Xc } from "./account-helpers.js";
import { Zc, tl, nl, rl, cl, ll, dl, fl } from "./game-preferences.js";
import { Al, Hl, DesktopLobby } from "./desktop-lobby.js";
import { iu, au, ou, ud, Od, kd, jd } from "./support-chat.js";
let Md, Nd, Pd, Fd;
function parseInlineStyle(e) {
  let t = Fd.get(e);
  if (t) return t;
  let n = {};
  for (let t of e.split(`;`)) {
    let e = t.indexOf(`:`);
    if (e < 0) continue;
    let r = t.slice(0, e).trim();
    if (!r) continue;
    let i = t.slice(e + 1).trim();
    if (r === `border`) {
      let e = i.split(/\s+/);
      if (e.length === 3) {
        ((n.borderWidth = e[0]),
          (n.borderStyle = e[1]),
          (n.borderColor = e[2]));
        continue;
      }
    }
    n[r.replace(/-([a-z])/g, (e, t) => t.toUpperCase())] = i;
  }
  let r = n;
  return (Fd.set(e, r), r);
}
let mergeStyles;
function InteractiveElement({
  s: e,
  h: t,
  a: n,
  st: r,
  onClick: i,
  className: a,
  title: o,
  role: s,
  ariaLabel: c,
  tabIndex: l,
  children: u,
}) {
  let [d, f] = (0, React.useState)(!1),
    [p, m] = (0, React.useState)(!1);
  return (0, JSXRuntime.jsx)(`div`, {
    className: a,
    style: {
      ...parseInlineStyle(e),
      ...(r || {}),
      ...(d && t ? parseInlineStyle(t) : {}),
      ...(p && n ? parseInlineStyle(n) : {}),
    },
    title: o,
    role: s,
    "aria-label": c,
    tabIndex: l,
    onClick: i,
    onKeyDown:
      i && s === `button`
        ? (e) => {
            (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), i());
          }
        : void 0,
    onMouseEnter: () => f(!0),
    onMouseLeave: () => {
      (f(!1), m(!1));
    },
    onMouseDown: () => m(!0),
    onMouseUp: () => m(!1),
    children: u,
  });
}
function PaymentDetails({
  datos: e,
  pa: t,
  acento: n,
  acentoSuave: r,
  pedido: i,
}) {
  let [a, o] = (0, React.useState)(null),
    [s, c] = (0, React.useState)(!1),
    [l, u] = (0, React.useState)(0);
  function d() {
    if (!navigator.clipboard?.writeText) {
      o(`fallo`);
      return;
    }
    navigator.clipboard.writeText(e.alias).then(
      () => {
        (o(`ok`), setTimeout(() => o((e) => (e === `ok` ? null : e)), 2400));
      },
      () => o(`fallo`),
    );
  }
  let f = mergeStyles(
    `font-size:10px;font-weight:700;letter-spacing:.1em;color:${lc};text-transform:uppercase`,
    t?.etiqueta ?? void 0,
  );
  return (0, JSXRuntime.jsxs)(`div`, {
    role: `group`,
    "aria-label": `Datos para transferir la carga`,
    style: mergeStyles(
      `margin-top:16px;border-radius:16px;padding:14px;background:${t ? t.campo : ic}`,
      {
        border: `1px solid ${t ? t.secundarioFilo : fc}`,
      },
    ),
    children: [
      (0, JSXRuntime.jsx)(`div`, {
        style: f,
        children: `Transferí a este alias`,
      }),
      (0, JSXRuntime.jsx)(`div`, {
        style: mergeStyles(
          `margin-top:7px;font-size:20px;line-height:1.25;overflow-wrap:anywhere;user-select:all`,
          {
            color: `#fff`,
            fontVariantNumeric: `tabular-nums`,
            letterSpacing: `.01em`,
            ...(t?.cifra ?? {}),
            fontSize: `20px`,
          },
        ),
        children: e.alias,
      }),
      (0, JSXRuntime.jsx)(`div`, {
        style: parseInlineStyle(
          `margin-top:6px;font-size:12px;color:${V};line-height:1.45`,
        ),
        children: e.detalle,
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        style: parseInlineStyle(
          `display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:12px`,
        ),
        children: [
          (0, JSXRuntime.jsx)(`div`, {
            role: `button`,
            tabIndex: 0,
            "aria-label": `Copiar el alias`,
            className: `rb-alias-copiar${s ? ` apretado` : ``}${l === 0 ? `` : l % 2 == 1 ? ` suelta-a` : ` suelta-b`}`,
            onPointerDown: () => c(!0),
            onPointerUp: () => {
              (c(!1), u((e) => e + 1), d());
            },
            onPointerLeave: () => c(!1),
            onPointerCancel: () => c(!1),
            onKeyDown: (e) => {
              (e.key === `Enter` || e.key === ` `) &&
                (e.preventDefault(), u((e) => e + 1), d());
            },
            style: mergeStyles(
              `display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 20px;border-radius:14px;font-size:13px;font-weight:800;cursor:pointer;user-select:none`,
              {
                background: n,
                color: t ? t.tintaAcento : cc,
                ...(t?.rotulo ?? {}),
              },
            ),
            children: `Copiar`,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            "aria-live": `polite`,
            style: parseInlineStyle(
              `font-size:12px;font-weight:700;line-height:1.4;flex:1 1 150px`,
            ),
            children:
              a === `ok`
                ? (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      color: n,
                    },
                    children: `Copiado ✓`,
                  })
                : a === `fallo`
                  ? (0, JSXRuntime.jsx)(`span`, {
                      style: {
                        color: `#ff8a8a`,
                      },
                      children: `No se pudo copiar. Marcalo con el dedo y copialo a mano.`,
                    })
                  : null,
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(`div`, {
        style: mergeStyles(
          `margin-top:10px;font-size:11.5px;color:#6f6f6f;line-height:1.5`,
          {
            borderTop: `1px solid ${r}`,
            paddingTop: `10px`,
          },
        ),
        children: i
          ? `Transferí a ese alias y mandale el comprobante al cajero por WhatsApp. Las fichas entran cuando confirma el pago.`
          : `Primero pedí la carga con el botón de arriba. Después transferí a ese alias y mandale el comprobante al cajero por WhatsApp: las fichas entran cuando confirma el pago.`,
      }),
    ],
  });
}
let Ld;
function ClassicLobbyController({
  user: e,
  walletId: t,
  esJugador: n = !1,
  balanceCents: r,
  held: i,
  openRequests: a,
  winners: o,
  popularIdx: s,
  serverFavorites: c,
  notice: l,
  pollMs: u,
  withGoogle: d,
  turnstileSiteKey: f,
  numeroDeCarga: p,
  whatsappSoporte: m,
  aliasDeCarga: h = null,
  tema: g = null,
  marcaDispositivo: _ = null,
  chatNuevo: v = !1,
  lobbyAzul: y = !1,
  bonoActivo: b = !1,
}) {
  let x = createDemoRouter(),
    S = g?.id ?? null;
  (0, React.useEffect)(() => {
    _ === `guardar` && S ? iu(S) : _ === `borrar` && au();
  }, [_, S]);
  let [C, w] = (0, React.useState)(null),
    [ee, te] = (0, React.useState)(null),
    [ne, T] = (0, React.useState)(null),
    [E, re] = (0, React.useState)(``),
    [ie, ae] = (0, React.useState)(``),
    [D, O] = (0, React.useState)(!1),
    [oe, se] = (0, React.useTransition)(),
    [ce, le] = (0, React.useState)(`si`),
    [k, A] = (0, React.useState)(``),
    [ue, de] = (0, React.useState)(0),
    [fe, pe] = (0, React.useState)(!1),
    me = !!f,
    he = (e) => {
      (de((e) => e + 1), A(``), T(e));
    },
    [ge, _e] = (0, React.useState)(null),
    [ve, ye] = (0, React.useState)(null),
    [j, be] = (0, React.useState)(``),
    [xe, Se] = (0, React.useState)(``),
    [Ce, we] = (0, React.useState)(null),
    [Te, Ee] = (0, React.useState)(``),
    [De, Oe] = (0, React.useTransition)(),
    ke = (0, React.useSyncExternalStore)(cl.subscribe, cl.get, cl.getServer),
    Ae = (0, React.useSyncExternalStore)(ll.subscribe, ll.get, ll.getServer),
    je = !!t,
    [Me, Ne] = (0, React.useState)(c),
    [Pe, Fe] = (0, React.useState)(c),
    Ie = (0, React.useRef)(c),
    Le = (0, React.useCallback)((e) => {
      ((Ie.current = e), Ne(e));
    }, []);
  c !== Pe && (Fe(c), (Ie.current = c), Ne(c));
  let Re = je ? Me : ke,
    ze = (0, React.useMemo)(() => new Set(Re), [Re]),
    Be = (0, React.useRef)(!1);
  ((0, React.useEffect)(() => {
    !l || Be.current || ((Be.current = !0), P(l, 12e3, `i`));
  }, [l]),
    (0, React.useEffect)(() => {
      if (je) {
        try {
          if (sessionStorage.getItem(`rb-huella`) === `1`) return;
        } catch {}
        (async () => {
          let e = await zs();
          if (
            e &&
            (
              await Ns(e).catch(() => ({
                ok: !1,
              }))
            ).ok
          )
            try {
              sessionStorage.setItem(`rb-huella`, `1`);
            } catch {}
        })();
      }
    }, [je]));
  let Ve = (0, React.useRef)(!1);
  (0, React.useEffect)(() => {
    if (!je || Ve.current) return;
    let e = cl.get();
    if (e.length === 0) return;
    Ve.current = !0;
    let t = rl(c, e);
    if (t.length === 0) {
      cl.set([]);
      return;
    }
    (async () => {
      let e = await fl({
        keys: t,
      });
      e.ok
        ? ((Ie.current = e.favorites), Ne(e.favorites), cl.set([]), x.refresh())
        : (Ve.current = !1);
    })();
  }, [je, c, x]);
  let He = (0, React.useRef)(new Map()),
    Ue = (0, React.useRef)(new Map()),
    We = (0, React.useCallback)(
      (e) => {
        let t = Zc(e.vendorCode, e.gameCode);
        if (!t) return;
        let n = je ? Ie.current : cl.get(),
          r = !n.includes(t),
          i = nl(n, t);
        if (r && i.length === n.length) {
          P(`Llegaste al máximo de favoritos. Sacá alguno para guardar otro.`);
          return;
        }
        if (!je) {
          cl.set(i);
          return;
        }
        Le(i);
        let a = (He.current.get(t) ?? Promise.resolve())
          .catch(() => {})
          .then(async () => {
            let n = Ie.current.includes(t);
            if (Ue.current.get(t) === n) return;
            let r = await dl({
              vendorCode: e.vendorCode,
              gameCode: e.gameCode,
              on: n,
            });
            if (r.ok) {
              (Ue.current.set(t, n),
                Ie.current.includes(t) === n && Le(r.favorites));
              return;
            }
            (Le(n ? Ie.current.filter((e) => e !== t) : [t, ...Ie.current]),
              r.reason === `full`
                ? P(
                    `Llegaste al máximo de favoritos. Sacá alguno para guardar otro.`,
                  )
                : r.reason === `too_many`
                  ? P(`Esperá un momento antes de seguir guardando.`)
                  : r.reason !== `not_logged_in` &&
                    P(`No pudimos guardar el favorito. Probá de nuevo.`));
          })
          .finally(() => {
            He.current.get(t) === a && He.current.delete(t);
          });
        He.current.set(t, a);
      },
      [je, Le],
    ),
    Ge = (0, React.useRef)(() => {}),
    Ke = (0, React.useCallback)((e) => Ge.current(e.idx), []);
  function qe() {
    if (!t || oe) return;
    let e = Gs(Ht),
      n =
        Ht > 0
          ? `Vas a cerrar tu cuenta.

Tenés ` +
            e +
            `. Te dejamos el pedido de retiro por ese total en la cola del cajero, así te lo pagamos.

No vas a poder entrar más ni volver a abrirla por tu cuenta: la reabrimos nosotros si nos escribís.

¿Cerrás tu cuenta?`
          : `Vas a cerrar tu cuenta.

No vas a poder entrar más ni volver a abrirla por tu cuenta: la reabrimos nosotros si nos escribís.

¿Cerrás tu cuenta?`;
    window.confirm(n) &&
      se(async () => {
        let e = await As({
          requestKey: crypto.randomUUID(),
        }).catch(() => ({
          ok: !1,
          reason: `error`,
        }));
        if (!e.ok) {
          P(
            e.reason === `too_many`
              ? `Esperá un momento y probá de nuevo.`
              : `No pudimos cerrar la cuenta. Escribinos y la cerramos nosotros.`,
          );
          return;
        }
        (await createDemoDatabase().auth.signOut(),
          x.refresh(),
          P(
            e.requestCreated
              ? `Cuenta cerrada. Dejamos el pedido de retiro por ${e.balance}; te escribimos para pagarte.`
              : `Cuenta cerrada. Gracias por haber jugado con nosotros.`,
            12e3,
          ));
      });
  }
  let Je = (0, React.useCallback)((e) => {
      let t = Zc(e.vendorCode, e.gameCode);
      t && ll.set(tl(ll.get(), t));
    }, []),
    Ye = (0, React.useMemo)(() => {
      let e = new Map();
      for (let t of gameCatalog) {
        let n = Zc(t.vendorCode, t.gameCode);
        n && e.set(n, t);
      }
      return e;
    }, []),
    Xe = (0, React.useMemo)(
      () => Re.map((e) => Ye.get(e)).filter((e) => !!e),
      [Re, Ye],
    ),
    Ze = (0, React.useMemo)(
      () => Ae.map((e) => Ye.get(e)).filter((e) => !!e),
      [Ae, Ye],
    ),
    [Qe, $e] = (0, React.useState)(null),
    [et, tt] = (0, React.useState)(!1),
    [nt, rt] = (0, React.useState)(!0),
    [it, at] = (0, React.useState)(!1);
  (0, React.useEffect)(() => {
    let e = setTimeout(() => le(`saliendo`), 1500),
      t = setTimeout(() => le(`no`), 1950);
    return () => {
      (clearTimeout(e), clearTimeout(t));
    };
  }, []);
  let [ot, st] = (0, React.useState)(0),
    [ct, lt] = (0, React.useState)(() => {
      if (typeof window > `u`) return null;
      try {
        let e = localStorage.getItem(`rb-volver-pos`);
        if (!e) return null;
        let t = JSON.parse(e);
        return !Number.isFinite(t.px) || !Number.isFinite(t.py)
          ? null
          : {
              px: Math.min(0.94, Math.max(0, t.px)),
              py: Math.min(0.92, Math.max(0, t.py)),
            };
      } catch {
        return null;
      }
    }),
    ut = (0, React.useRef)(null),
    dt = (0, React.useRef)(!1),
    ft = (0, React.useRef)(null),
    [pt, mt] = (0, React.useState)(!1),
    [ht, gt] = (0, React.useState)(``),
    [_t, vt] = (0, React.useState)(null),
    [M, yt] = (0, React.useState)(null),
    [N, bt] = (0, React.useState)(!1),
    [xt, St] = (0, React.useState)(!1),
    [Ct, wt] = (0, React.useState)(null),
    [Tt, Et] = (0, React.useState)(!1),
    [Dt, Ot] = (0, React.useState)(!1),
    [kt, At] = (0, React.useState)(!1),
    [jt, Mt] = (0, React.useState)(!1),
    [Nt, Pt] = (0, React.useState)(null),
    [Ft, It] = (0, React.useState)(!1);
  ((0, React.useEffect)(() => {
    if (!jt) return;
    let e = setTimeout(() => It(!0), 6e3);
    return () => clearTimeout(e);
  }, [jt, Ct]),
    (0, React.useEffect)(() => {}, [Ct]),
    (0, React.useEffect)(() => {
      Pc(Ct !== null);
    }, [Ct]),
    (0, React.useEffect)(() => () => Pc(!1), []));
  let [Lt, Rt] = (0, React.useState)(!0),
    zt = (0, React.useRef)(null),
    [Bt, Vt] = (0, React.useState)(0),
    [Ht, Ut] = (0, React.useState)(r),
    [Wt, Gt] = (0, React.useState)(r);
  r !== Wt && (Gt(r), Ut(r));
  let [Kt, qt] = (0, React.useState)(`✓`),
    Jt = (0, React.useRef)(null),
    Yt = (0, React.useRef)(null);
  function Xt() {
    Ct !== null && (Ot(!1), At(!0), st((e) => e + 1));
  }
  function Zt() {
    let e = Yt.current;
    if ((at(!0), !e)) return;
    let t = e.requestFullscreen?.bind(e) ?? e.webkitRequestFullscreen?.bind(e);
    if (!t) {
      Xt();
      return;
    }
    Promise.resolve(t()).catch(() => {});
  }
  function Qt() {
    let e = document;
    (document.fullscreenElement
      ? Promise.resolve(e.exitFullscreen?.()).catch(() => {})
      : e.webkitExitFullscreen?.(),
      at(!1));
    let t = Yt.current;
    t && !t.requestFullscreen && !t.webkitRequestFullscreen && Xt();
  }
  ((0, React.useEffect)(() => {
    let e = () => {
      document.fullscreenElement || at(!1);
    };
    return (
      document.addEventListener(`fullscreenchange`, e),
      document.addEventListener(`webkitfullscreenchange`, e),
      () => {
        (document.removeEventListener(`fullscreenchange`, e),
          document.removeEventListener(`webkitfullscreenchange`, e));
      }
    );
  }, []),
    (0, React.useEffect)(() => {
      if (Qe === null && !et) return;
      let e = () => {
        if (it) {
          (Qt(),
            window.history.pushState(
              et
                ? {
                    rbSports: !0,
                  }
                : {
                    rbGame: Qe,
                  },
              ``,
            ));
          return;
        }
        if (et && Ct === null && !Tt) {
          On();
          return;
        }
        if (et) {
          (window.history.pushState(
            {
              rbSports: !0,
            },
            ``,
          ),
            P(
              `Estás al principio de las apuestas. Para salir al casino, tocá la ✕.`,
              4200,
              `i`,
            ));
          return;
        }
        On();
      };
      return (
        window.addEventListener(`popstate`, e),
        () => window.removeEventListener(`popstate`, e)
      );
    }, [Qe, et, it, Ct, Tt]));
  let $t = (0, React.useRef)(!1);
  ((0, React.useEffect)(() => {
    if (!n || t || $t.current) return;
    let e = setTimeout(() => {
      (($t.current = !0), x.refresh());
    }, 3e3);
    return () => clearTimeout(e);
  }, [n, t, x]),
    (0, React.useEffect)(() => {
      if (!t) return;
      let e = createDemoDatabase(),
        n = !0,
        r = async () => {
          if (document.visibilityState !== `visible`) return;
          let { data: r } = await e
            .from(`wallets`)
            .select(`balance_cents`)
            .eq(`id`, t)
            .maybeSingle();
          n && r && Ut(Number(r.balance_cents));
        };
      r();
      let i = setInterval(() => void r(), Ct ? 1400 : 4e3),
        a = () => {
          document.visibilityState === `visible` && r();
        };
      return (
        document.addEventListener(`visibilitychange`, a),
        () => {
          ((n = !1),
            clearInterval(i),
            document.removeEventListener(`visibilitychange`, a));
        }
      );
    }, [t, Ct]),
    (0, React.useEffect)(() => {
      if (!Ct) return;
      let e = setTimeout(() => Ot(!0), 18e3);
      return () => clearTimeout(e);
    }, [Ct]),
    (0, React.useEffect)(() => {
      if (!Dt || !kt) return;
      let e = setTimeout(() => At(!1), 420);
      return () => clearTimeout(e);
    }, [Dt, kt]),
    (0, React.useEffect)(() => {
      if (!Ct) return;
      let e = null,
        t = () => {
          (e && clearTimeout(e), Vt(1), (e = setTimeout(() => Vt(0), 2200)));
        },
        n = (e) => {
          if (e.origin === window.location.origin) return;
          let n;
          try {
            n = typeof e.data == `string` ? JSON.parse(e.data) : e.data;
          } catch {
            return;
          }
          let r = String(
            n?.name ?? n?.event ?? n?.type ?? n?.messageType ?? ``,
          ).toLowerCase();
          (/spin|round|bonus|freespin|freeround|result/.test(r) && t(),
            /gameloadingended|rc_shown|gameready|gamestarted|spin|round|result/.test(
              r,
            ) && Ot(!0));
        };
      return (
        window.addEventListener(`message`, n),
        () => {
          (window.removeEventListener(`message`, n),
            e && clearTimeout(e),
            Vt(0));
        }
      );
    }, [Ct]),
    (0, React.useEffect)(
      () => () => {
        (Jt.current && clearTimeout(Jt.current),
          zt.current && clearTimeout(zt.current));
      },
      [],
    ),
    (0, React.useEffect)(() => {
      if (!C && !ge) return;
      if (y) {
        let e = (e) => {
          e.key === `Escape` && (w(null), _e(null));
        };
        return (
          window.addEventListener(`keydown`, e),
          () => window.removeEventListener(`keydown`, e)
        );
      }
      let e = window.scrollY,
        t = document.body;
      ((t.style.position = `fixed`),
        (t.style.top = `-${e}px`),
        (t.style.left = `0`),
        (t.style.right = `0`));
      let n = (e) => {
        e.key === `Escape` && (w(null), _e(null));
      };
      return (
        window.addEventListener(`keydown`, n),
        () => {
          ((t.style.position = ``),
            (t.style.top = ``),
            (t.style.left = ``),
            (t.style.right = ``),
            window.removeEventListener(`keydown`, n),
            window.scrollTo(0, e));
        }
      );
    }, [C, ge, y]),
    (0, React.useEffect)(() => {
      if (a.length === 0) return;
      let e = setInterval(() => {
        document.visibilityState === `visible` && x.refresh();
      }, 15e3);
      return () => clearInterval(e);
    }, [a.length, x]));
  function P(e, t = 4200, n = `✓`) {
    (Jt.current && clearTimeout(Jt.current),
      te(e),
      qt(n),
      (Jt.current = setTimeout(() => te(null), t)));
  }
  function en(e) {
    (w(e), T(null), ae(``), O(!1));
  }
  let tn = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e || ``);
  function nn() {
    if (oe) return;
    if (me && !k)
      return T(
        fe
          ? `No cargó la verificación anti-robot. Desactivá el bloqueador y recargá la página.`
          : `Marcá la casilla de verificación.`,
      );
    if (!tn(E)) return T(`Ingresá un email válido.`);
    let e = Tc(ie);
    if (e) return T(e);
    if (!D) return T(`Tenés que confirmar que sos mayor de 18 años.`);
    se(async () => {
      let { data: e, error: t } = await createDemoDatabase().auth.signUp({
          email: E,
          password: ie,
          options: {
            data: {
              username: E.split(`@`)[0],
            },
            emailRedirectTo: `${window.location.origin}/auth/callback`,
            ...(k && {
              captchaToken: k,
            }),
          },
        }),
        n = /already registered|already exists/i.test(t?.message ?? ``);
      if (t && !n) return he(zd(t.message));
      n && (de((e) => e + 1), A(``));
      let r = E.split(`@`)[0];
      (w(null),
        !n && e.session
          ? (await Fc(),
            x.refresh(),
            P(`¡Cuenta creada, ` + r + `! Ya podés jugar`))
          : P(
              `Listo. Si el correo es nuevo te llega un mail para confirmar; si ya tenías cuenta, entrá con tu contraseña.`,
            ));
    });
  }
  function rn() {
    if (oe) return;
    if (me && !k) return T(`Marcá la casilla de verificación.`);
    let e = E.trim(),
      t = !e.includes(`@`);
    if (t ? !Fs.test(e.toLowerCase()) : !tn(e))
      return T(
        t
          ? `Escribí tu email, o el usuario que te dio tu cajero.`
          : `Ingresá un email válido.`,
      );
    if (!ie || ie.length < 6)
      return T(`Contraseña incorrecta (mínimo 6 caracteres).`);
    se(async () => {
      let n = e;
      if (t) {
        let t = await Ps(e).catch(() => null);
        if (!t)
          return he(
            `No se pudo completar. Recargá la página y volvé a intentar.`,
          );
        n = t.correo;
      }
      let { error: r } = await createDemoDatabase().auth.signInWithPassword({
        email: n,
        password: ie,
        ...(k && {
          options: {
            captchaToken: k,
          },
        }),
      });
      if (r) return he(zd(r.message));
      (w(null),
        x.refresh(),
        P(
          g
            ? `¡Hola de nuevo! Tu saldo te espera.`
            : `¡Hola de nuevo, ` +
                (t ? e.toLowerCase() : e.split(`@`)[0]) +
                `! Tu saldo te espera.`,
        ));
    });
  }
  function an() {
    if (E.trim() && !E.includes(`@`)) {
      T(
        `Si te registraste con tu email, escribilo arriba. Si el usuario te lo dio tu cajero, pedile a él que te repongan la contraseña.`,
      );
      return;
    }
    if (!tn(E)) {
      T(
        `Escribí tu email arriba y volvé a tocar para enviarte el enlace de recuperación.`,
      );
      return;
    }
    if (me && !k) {
      T(`Marcá la casilla de verificación y volvé a tocar.`);
      return;
    }
    se(async () => {
      let { error: e } = await createDemoDatabase().auth.resetPasswordForEmail(
        E,
        {
          redirectTo: Nc(window.location.origin),
          ...(k && {
            captchaToken: k,
          }),
        },
      );
      if ((A(``), de((e) => e + 1), e)) {
        T(zd(e.message));
        return;
      }
      P(
        `Si ese email está registrado, te enviamos un enlace para restablecer tu contraseña. Revisá tu correo.`,
      );
    });
  }
  function on() {
    oe ||
      (T(null),
      se(async () => {
        let { error: e } = await createDemoDatabase().auth.signInWithOAuth({
          provider: `google`,
          options: {
            redirectTo: Mc(window.location.origin),
          },
        });
        e && (w((e) => e ?? `login`), T(zd(e.message)));
      }));
  }
  function sn() {
    se(async () => {
      (await createDemoDatabase().auth.signOut(),
        x.refresh(),
        P(`Esto es una demo: la sesión no se cierra.`));
    });
  }
  Ge.current = (e) => ln(e);
  function cn() {
    P(`Esto es una demo: las apuestas deportivas se abren en el casino real.`);
  }
  function ln(e) {
    (Qe === e && !et) ||
      (tt(!1),
      at(!1),
      Mt(!1),
      Ct !== null && wt(null),
      Yt.current &&
        Yt.current.scrollTo({
          top: 0,
          behavior: `smooth`,
        }),
      $e(e),
      pn(),
      typeof window < `u` &&
        window.history.pushState(
          {
            rbGame: e,
          },
          ``,
        ),
      gameCatalog[e]);
  }
  function un(n = `load`) {
    if (!e) return en(`login`);
    if (!t)
      return P(`Esta cuenta no es de jugador, así que no puede pedir fichas.`);
    (w(null), we(null), be(``), Se(``), Ee(crypto.randomUUID()), _e(n));
  }
  function dn() {
    if (!(De || !ge)) {
      if (!j.trim()) return we(`Escribí cuánto querés.`);
      Oe(async () => {
        we(null);
        let e = await Os({
          kind: ge,
          amount: j.trim(),
          note: xe.trim() || void 0,
          requestKey: Te,
        }).catch(() => ({
          ok: !1,
          reason: `error`,
        }));
        if (!e.ok) {
          we(qs(e.reason));
          return;
        }
        (_e(null),
          x.refresh(),
          P(
            ge === `load`
              ? `Pedido enviado. El cajero te va a escribir para cobrarte.`
              : `Pedido enviado. El cajero te va a escribir para pagarte.`,
          ));
      });
    }
  }
  function fn() {
    let e = a.find((e) => e.kind === ge);
    De ||
      !e ||
      Oe(async () => {
        let t = await ks({
          requestId: e.id,
        }).catch(() => ({
          ok: !1,
          reason: `error`,
        }));
        if (!t.ok) {
          we(qs(t.reason));
          return;
        }
        (_e(null), x.refresh(), P(`Pedido cancelado.`));
      });
  }
  function pn() {
    (zt.current && clearTimeout(zt.current),
      Rt(!0),
      (zt.current = setTimeout(() => Rt(!1), 3200)));
  }
  let mn = y ? et : et || Qe !== null;
  (0, React.useEffect)(() => {
    if (!mn || typeof document > `u`) return;
    let e = document.body.style,
      t = window.scrollY,
      n = {
        position: e.position,
        top: e.top,
        left: e.left,
        right: e.right,
        width: e.width,
      };
    return (
      (e.position = `fixed`),
      (e.top = `-${t}px`),
      (e.left = `0`),
      (e.right = `0`),
      (e.width = `100%`),
      () => {
        ((e.position = n.position),
          (e.top = n.top),
          (e.left = n.left),
          (e.right = n.right),
          (e.width = n.width),
          window.scrollTo(0, t));
      }
    );
  }, [mn]);
  let hn = et ? Pd : Qe === null ? null : gameCatalog[Qe],
    gn = !!hn,
    F = g?.app ?? null,
    _n = F ? F.acento : B,
    vn = F ? F.acentoSuave : `rgba(255,85,0,.55)`,
    yn = F ? F.tintaAcento : cc,
    bn = F
      ? F.boton
      : `linear-gradient(180deg, #FF742A 0%, #FF5A0C 58%, #F24E00 100%)`,
    xn = F ? F.tintaBoton : `#fff`;
  if (y)
    return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`style`, {
          children: Al(Ld),
        }),
        (0, JSXRuntime.jsx)(Nd, {
          ...Sn(),
        }),
        et && hn && Tn(hn),
      ],
    });
  return (0, JSXRuntime.jsxs)(`div`, {
    className: g ? `mb-app` : void 0,
    style: mergeStyles(
      `min-height:100vh;background:${F ? F.fondo : ic};color:#fff`,
      {
        fontFamily: `var(--font-archivo), 'Archivo', sans-serif`,
        WebkitFontSmoothing: `antialiased`,
      },
    ),
    children: [
      (0, JSXRuntime.jsx)(`style`, {
        children: Al(Ld),
      }),
      g &&
        (0, JSXRuntime.jsx)(`style`, {
          children: Al(g.css),
        }),
      (0, JSXRuntime.jsx)(DesktopLobby, {
        user: e,
        balanceCents: Ht,
        held: i,
        games: gameCatalog,
        winners: o,
        popularIdx: s,
        pollMs: u,
        onPlay: (e) => ln(e.idx),
        onLogin: () => en(`login`),
        onRegister: () => en(`signup`),
        onGoogle: d ? on : null,
        onCargar: () => un(`load`),
        onRetirar: () => un(`unload`),
        onLogout: sn,
        favGames: Xe,
        recentGames: Ze,
        onFav: je || !e ? We : null,
        onCloseAccount: je ? qe : null,
        onMovimientos: je ? kn : null,
        onFeedback: Nn,
        onSports: cn,
        gameOpen: Qe !== null,
        tema: g,
        whatsappSoporte: m,
      }),
      gn && hn && Tn(hn),
      gn &&
        (0, JSXRuntime.jsx)(`button`, {
          type: `button`,
          "aria-label": `Volver al lobby`,
          onClick: On,
          style: {
            position: `fixed`,
            top: `calc(12px + env(safe-area-inset-top))`,
            right: `12px`,
            zIndex: 94,
            width: `46px`,
            height: `46px`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            border: 0,
            borderRadius: `50%`,
            cursor: `pointer`,
            fontSize: `18px`,
            color: `#fff`,
            background: `rgba(12,12,12,.86)`,
            backdropFilter: `blur(10px)`,
            boxShadow: `inset 0 0 0 1px rgba(255,255,255,.22), 0 6px 18px rgba(0,0,0,.45)`,
          },
          children: (0, JSXRuntime.jsx)(`span`, {
            "aria-hidden": `true`,
            children: `✕`,
          }),
        }),
      C && Ln(),
      ge && In(),
      ve !== null && Mn(),
      pt && Fn(),
      ee &&
        (0, JSXRuntime.jsxs)(`div`, {
          style: mergeStyles(
            `position:fixed;top:70px;right:16px;left:auto;z-index:95;display:flex;align-items:center;gap:10px;background:${F ? F.aviso : `#1A1A1A`};border-radius:20px;padding:14px 12px 14px 18px;box-shadow:inset 0 0 0 1px ${vn},0 20px 50px rgba(0,0,0,.6);max-width:min(380px, calc(100vw - 32px))`,
          ),
          children: [
            (0, JSXRuntime.jsx)(`div`, {
              style: mergeStyles(
                `width:30px;height:30px;border-radius:50%;color:#fff;display:grid;place-items:center;font-size:15px;font-weight:900;flex:none`,
                {
                  background: F ? F.boton : `#FF5500`,
                  color: F ? F.tintaBoton : `#2A0C00`,
                },
              ),
              children: Kt,
            }),
            (0, JSXRuntime.jsx)(`div`, {
              style: parseInlineStyle(
                `font-size:13px;font-weight:800;color:#fff;line-height:1.4`,
              ),
              children: ee,
            }),
            (0, JSXRuntime.jsx)(`button`, {
              type: `button`,
              "aria-label": `Cerrar aviso`,
              onClick: () => {
                (Jt.current && clearTimeout(Jt.current), te(null));
              },
              style: {
                flex: `none`,
                width: `34px`,
                height: `34px`,
                display: `grid`,
                placeItems: `center`,
                background: `transparent`,
                border: 0,
                borderRadius: `50%`,
                color: `#929292`,
                fontSize: `13px`,
                cursor: `pointer`,
              },
              children: `✕`,
            }),
          ],
        }),
      e &&
        !gn &&
        (v
          ? (0, JSXRuntime.jsx)(Md, {
              piel: g?.chat ?? null,
            })
          : (0, JSXRuntime.jsx)(LegacySupportChat, {
              piel: g?.chat ?? null,
            })),
      ce !== `no` &&
        (0, JSXRuntime.jsx)(`div`, {
          style: mergeStyles(
            `position:fixed;inset:0;z-index:120;display:grid;place-items:center;background:${g ? g.splash.fondo : `#121212`}`,
            {
              opacity: ce === `saliendo` ? 0 : 1,
              transition: `opacity .45s ease`,
              pointerEvents: ce === `saliendo` ? `none` : `auto`,
            },
          ),
          children: (0, JSXRuntime.jsx)(BrandLoader, {
            vel: 0.92,
            unaVuelta: !0,
            marca: g ? g.cargador : null,
          }),
        }),
    ],
  });
  function Sn() {
    return {
      sesion: {
        usuario: e,
        esJugador: n,
        walletId: t,
        conBilletera: je,
      },
      saldo: {
        cents: Ht,
        retenidos: i,
      },
      aviso: {
        texto: ee,
        marca: Kt,
        mostrar: P,
        cerrar: () => {
          (Jt.current && clearTimeout(Jt.current), te(null));
        },
      },
      notice: l,
      whatsappSoporte: m,
      cuenta: {
        modo: C,
        abrir: en,
        cerrar: () => w(null),
        email: E,
        escribirEmail: re,
        password: ie,
        escribirPassword: ae,
        mayorDeEdad: D,
        marcarMayorDeEdad: O,
        error: ne,
        pendiente: oe,
        ingresar: rn,
        registrar: nn,
        olvide: an,
        google: d ? on : null,
        salir: sn,
        cerrarCuenta: je ? qe : null,
        captcha: {
          siteKey: f,
          widget: f
            ? (0, JSXRuntime.jsx)(Hs, {
                siteKey: f,
                onToken: (e) => {
                  (A(e), e && pe(!1));
                },
                onUnavailable: () => pe(!0),
                resetKey: ue,
              })
            : null,
          listo: k !== ``,
          roto: fe,
        },
      },
      movimientos: {
        estado: ve,
        abrir: je ? kn : null,
        cerrar: () => ye(null),
      },
      opinion: {
        abierta: pt,
        abrir: Nn,
        cerrar: () => mt(!1),
        texto: ht,
        escribir: (e) => {
          (gt(e.slice(0, 1e3)), yt(null));
        },
        puntaje: _t,
        puntuar: (e) => vt(_t === e ? null : e),
        error: M,
        enviando: N,
        lista: xt,
        enviar: Pn,
      },
      caja: {
        abierta: ge,
        abrir: un,
        cerrar: () => _e(null),
        cambiar: (e) => {
          (_e(e), we(null), Ee(crypto.randomUUID()));
        },
        monto: j,
        escribirMonto: (e) => {
          (be(e.replace(/[^\d.,]/g, ``).slice(0, 12)), we(null));
        },
        nota: xe,
        escribirNota: (e) => Se(e.slice(0, 120)),
        error: Ce,
        pendiente: De,
        pedir: dn,
        cancelar: fn,
        pedidos: a,
        alias: h,
        numeroDeCarga: p,
        numeroVisible: Yc(p),
        linkCajero: (t, n) => Xc(p, Ac(t, e?.name ?? null, n)),
        linkAyuda: Xc(p, `Hola! Es sobre un pedido en Rushybet.`),
        motivo: qs,
        minimoCents: Number(Us),
        maximoCents: Number(Ws),
      },
      juegos: {
        favoritos: Xe,
        esFavorito: (e) => ze.has(Zc(e.vendorCode, e.gameCode) ?? ``),
        alternarFavorito: je || !e ? We : null,
        recientes: Ze,
        popularIdx: s,
        ganadores: o,
        pollMs: u,
        abrir: (e) => ln(e.idx),
        deportes: cn,
        cerrar: On,
        relanzar: (e, t) => Dn(e, t),
        tieneModoPrueba: ou,
        mismoEstudio: Cn,
        seguirJugando: wn,
        pantalla: {
          actual: !et && Qe !== null ? (gameCatalog[Qe] ?? null) : null,
          enDeportes: et,
          lanzando: Tt,
          url: Ct,
          listo: Dt,
          tapa: kt,
          enPrueba: jt,
          avisoChico: Ft,
          alternarAviso: () => It((e) => !e),
          epoca: ot,
          actividad: Bt,
          fallo: Nt,
        },
        pantallaCompleta: {
          activa: it,
          ref: Yt,
          pedir: Zt,
          salir: Qt,
        },
      },
      chat: {
        nuevo: v,
        habilitado: e !== null,
      },
      bonoActivo: b,
    };
  }
  function Cn(e) {
    return e.vendorCode
      ? Ss(e.vendorCode)
          .filter((t) => t.idx !== e.idx)
          .slice(0, 20)
      : [];
  }
  function wn(e) {
    let t = [],
      n = new Set([e.idx]),
      r = (e) => {
        !e || n.has(e.idx) || (n.add(e.idx), t.push(e));
      };
    for (let e of Ze) r(e);
    for (let e of s) r(gameCatalog[e]);
    for (let e of gameCatalog) {
      if (t.length >= 24) break;
      r(e);
    }
    return t.slice(0, 24);
  }
  function Tn(t) {
    let n = Cn(t),
      r = (Tt || Ct !== null) && t.vendorCode === ro.vendorCode,
      i = Ct !== null && n.length >= 3,
      a = i ? n : wn(t),
      o = t.amb;
    return (0, JSXRuntime.jsxs)(`div`, {
      ref: Yt,
      className: Ct ? `rb-ginplay` : void 0,
      onMouseMove: pn,
      onTouchStart: pn,
      style: mergeStyles(
        `position:fixed;inset:0;z-index:55;background:${F ? F.fondo : ic};overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;color:#fff`,
        {
          fontFamily: `var(--font-archivo), 'Archivo', sans-serif`,
        },
      ),
      children: [
        !r &&
          (0, JSXRuntime.jsx)(rc, {
            game: t,
            on: nt,
            live: Bt,
          }),
        it &&
          !r &&
          (0, JSXRuntime.jsx)(InteractiveElement, {
            role: `button`,
            tabIndex: 0,
            ariaLabel: `Salir de pantalla completa`,
            s: ``,
            st: {
              position: `fixed`,
              top: `calc(10px + env(safe-area-inset-top))`,
              right: `12px`,
              zIndex: 71,
              width: `44px`,
              height: `44px`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              borderRadius: `100px`,
              background: `rgba(255,255,255,.06)`,
              backdropFilter: `blur(10px)`,
              boxShadow: `inset 0 0 0 1px rgba(255,255,255,.14)`,
              color: `#fff`,
              fontSize: `16px`,
              cursor: `pointer`,
              opacity: +!!Lt,
              pointerEvents: Lt ? `auto` : `none`,
              transition: `opacity .35s ease`,
            },
            onClick: Qt,
            children: (0, JSXRuntime.jsx)(`span`, {
              "aria-hidden": `true`,
              children: `✕`,
            }),
          }),
        r &&
          (0, JSXRuntime.jsx)(`div`, {
            ref: ft,
            style: {
              position: `fixed`,
              zIndex: 71,
              ...(ct
                ? {
                    left: `min(calc(${(ct.px * 100).toFixed(2)}vw), calc(100vw - 46px))`,
                    top: `min(calc(${(ct.py * 100).toFixed(2)}vh), calc(100vh - 46px))`,
                  }
                : {
                    right: `10px`,
                    top: `calc(8px + env(safe-area-inset-top))`,
                  }),
              touchAction: `none`,
              userSelect: `none`,
            },
            onPointerDown: (e) => {
              let t = ft.current?.getBoundingClientRect();
              t &&
                ((dt.current = !1),
                (ut.current = {
                  id: e.pointerId,
                  dx: e.clientX - t.left,
                  dy: e.clientY - t.top,
                }),
                e.currentTarget.setPointerCapture(e.pointerId));
            },
            onPointerMove: (e) => {
              let t = ut.current,
                n = ft.current?.getBoundingClientRect();
              if (!t || t.id !== e.pointerId || !n) return;
              if (e.buttons === 0) {
                ut.current = null;
                return;
              }
              let r = e.clientX - t.dx,
                i = e.clientY - t.dy;
              if (!dt.current) {
                if (Math.abs(r - n.left) <= 8 && Math.abs(i - n.top) <= 8)
                  return;
                dt.current = !0;
              }
              lt({
                px: Math.min(0.94, Math.max(0, r / window.innerWidth)),
                py: Math.min(0.92, Math.max(0, i / window.innerHeight)),
              });
            },
            onPointerUp: (e) => {
              let t = ut.current;
              if (((ut.current = null), !(!t || t.id !== e.pointerId))) {
                if (dt.current) {
                  lt((e) => {
                    if (e)
                      try {
                        localStorage.setItem(
                          `rb-volver-pos`,
                          JSON.stringify(e),
                        );
                      } catch {}
                    return e;
                  });
                  return;
                }
                ((dt.current = !0), On());
              }
            },
            onPointerCancel: () => {
              ut.current = null;
            },
            children: (0, JSXRuntime.jsx)(`button`, {
              type: `button`,
              "aria-label": `Salir de las apuestas`,
              onClick: () => {
                if (dt.current) {
                  dt.current = !1;
                  return;
                }
                On();
              },
              style: {
                width: `40px`,
                height: `40px`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                border: 0,
                borderRadius: `50%`,
                cursor: `pointer`,
                fontSize: `15px`,
                color: `#fff`,
                background: `rgba(12,12,12,.82)`,
                backdropFilter: `blur(10px)`,
                boxShadow: `inset 0 0 0 1px rgba(255,255,255,.18)`,
              },
              children: (0, JSXRuntime.jsx)(`span`, {
                "aria-hidden": `true`,
                children: `✕`,
              }),
            }),
          }),
        (0, JSXRuntime.jsxs)(`div`, {
          style: parseInlineStyle(
            `min-height:100%;display:flex;flex-direction:column;position:relative`,
          ),
          children: [
            !it &&
              !r &&
              (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                children: (0, JSXRuntime.jsxs)(`div`, {
                  className: `rb-gtop`,
                  style: {
                    ...parseInlineStyle(
                      `position:relative;z-index:3;display:flex;align-items:center;gap:10px;padding:0 24px;height:56px;flex:none;justify-content:flex-end`,
                    ),
                    opacity: +!!Lt,
                    pointerEvents: Lt ? `auto` : `none`,
                    transition: `opacity .35s ease`,
                  },
                  children: [
                    (0, JSXRuntime.jsx)(`div`, {
                      style: parseInlineStyle(`margin-right:auto`),
                      children: En(t),
                    }),
                    (0, JSXRuntime.jsxs)(InteractiveElement, {
                      className: `rb-gbtn rb-hide-sm`,
                      role: `button`,
                      tabIndex: 0,
                      ariaLabel: `Luces ambientales`,
                      s: `display:flex;align-items:center;gap:8px;white-space:nowrap;border-radius:100px;padding:10px 16px;font-size:12.5px;font-weight:600;cursor:pointer;transition:all .25s`,
                      st: {
                        background: `rgba(255,255,255,.045)`,
                        boxShadow: `inset 0 0 0 1px ${nt ? vn : `rgba(255,255,255,.075)`}`,
                        color: nt ? _n : `#929292`,
                      },
                      onClick: () => rt((e) => !e),
                      children: [
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            width: `7px`,
                            height: `7px`,
                            borderRadius: `50%`,
                            background: `currentColor`,
                            display: `inline-block`,
                          },
                        }),
                        nt ? `Luces · ON` : `Luces · OFF`,
                      ],
                    }),
                    (0, JSXRuntime.jsxs)(InteractiveElement, {
                      className: `rb-gbtn`,
                      role: `button`,
                      tabIndex: 0,
                      ariaLabel: `Pantalla completa`,
                      s: `white-space:nowrap;border-radius:100px;padding:10px 16px;font-size:12.5px;font-weight:600;color:#fff;cursor:pointer;transition:all .2s;background:rgba(255,255,255,.045);box-shadow:inset 0 0 0 1px rgba(255,255,255,.075)`,
                      h: `box-shadow:inset 0 0 0 1px ${_n}`,
                      onClick: () => {
                        (Zt(), pn());
                      },
                      children: [
                        `⛶ `,
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `rb-solo-ancho`,
                          children: `Pantalla completa`,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `rb-solo-angosto`,
                          children: `Pantalla`,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            (0, JSXRuntime.jsx)(`div`, {
              className: `rb-gwrap`,
              style: parseInlineStyle(
                `position:relative;z-index:2;flex:1;display:grid;place-items:center;padding:6px 40px;min-width:0`,
              ),
              children: (0, JSXRuntime.jsxs)(`div`, {
                className: it || r ? `rb-gframe rb-isfull` : `rb-gframe`,
                style: parseInlineStyle(
                  `position:relative;width:min(94vw, calc((100vh - 130px) * 16 / 9));aspect-ratio:16/9;animation:rb-zoomin .45s ease both`,
                ),
                children: [
                  nt &&
                    !r &&
                    (0, JSXRuntime.jsx)(`div`, {
                      style: mergeStyles(
                        `position:absolute;inset:-4%;opacity:.85;animation:rb-amb 4s ease-in-out infinite;border-radius:30px;pointer-events:none`,
                        {
                          background: o,
                          filter: `blur(50px) saturate(1.9)`,
                        },
                      ),
                    }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: mergeStyles(
                      `position:absolute;inset:0;border-radius:20px;overflow:hidden;box-shadow:0 26px 80px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.1)`,
                      {
                        background: F ? F.marco : `#0b0b0b`,
                      },
                    ),
                    children: [
                      jt &&
                        (0, JSXRuntime.jsx)(`div`, {
                          role: `button`,
                          tabIndex: 0,
                          "aria-label": Ft
                            ? `Modo prueba: tocá para ver el detalle`
                            : `Modo prueba`,
                          onClick: () => It((e) => !e),
                          onKeyDown: (e) => {
                            (e.key === `Enter` || e.key === ` `) &&
                              (e.preventDefault(), It((e) => !e));
                          },
                          style: mergeStyles(
                            `position:absolute;bottom:0;z-index:6;display:flex;align-items:center;justify-content:center;gap:7px;cursor:pointer;text-align:center;transition:left .32s cubic-bezier(.34,1.56,.64,1),right .32s cubic-bezier(.34,1.56,.64,1),padding .32s ease,border-radius .32s ease`,
                            Ft
                              ? {
                                  left: `10px`,
                                  right: `auto`,
                                  bottom: `10px`,
                                  padding: `5px 10px`,
                                  borderRadius: `100px`,
                                  background: `rgba(245,165,36,.92)`,
                                }
                              : {
                                  left: 0,
                                  right: 0,
                                  padding: `7px 12px`,
                                  borderRadius: 0,
                                  background: `rgba(245,165,36,.92)`,
                                },
                          ),
                          children: (0, JSXRuntime.jsx)(`span`, {
                            style: mergeStyles(
                              `font-size:11.5px;font-weight:800;color:#1a1200;letter-spacing:.02em;line-height:1.35`,
                              {
                                whiteSpace: Ft ? `nowrap` : `normal`,
                              },
                            ),
                            children: Ft
                              ? `MODO PRUEBA`
                              : `MODO PRUEBA · las fichas no son reales y lo que ganes no se puede retirar`,
                          }),
                        }),
                      Ct &&
                        (0, JSXRuntime.jsx)(
                          `iframe`,
                          {
                            src: Ct,
                            title: t.n,
                            allow: `autoplay; fullscreen; encrypted-media`,
                            sandbox: `allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals allow-pointer-lock`,
                            style: parseInlineStyle(
                              `position:absolute;inset:0;width:100%;height:100%;border:0`,
                            ),
                          },
                          `marco` + ot,
                        ),
                      (Tt || (Ct !== null && kt)) &&
                        (0, JSXRuntime.jsx)(`div`, {
                          style: mergeStyles(
                            `position:absolute;inset:0;z-index:2;display:grid;place-items:center;background:${F ? F.marco : y ? `rgb(1,0,40)` : `#0b0b0b`}`,
                            {
                              opacity: +!Dt,
                              pointerEvents: Dt ? `none` : `auto`,
                              transition: `opacity .38s ease`,
                            },
                          ),
                          children: (0, JSXRuntime.jsx)(BrandLoader, {
                            marca: g ? g.cargador : null,
                            paleta: y ? `azul` : `naranja`,
                          }),
                        }),
                      !Ct &&
                        !Tt &&
                        (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                          children: [
                            (0, JSXRuntime.jsx)(`div`, {
                              style: mergeStyles(
                                `position:absolute;inset:-6%;pointer-events:none`,
                                {
                                  background: `${Ia(t.img)} center/cover no-repeat`,
                                  filter: `blur(30px) saturate(1.3) brightness(.42)`,
                                },
                              ),
                            }),
                            t.vid
                              ? (0, JSXRuntime.jsx)(
                                  `video`,
                                  {
                                    src: t.vid,
                                    autoPlay: !0,
                                    muted: !0,
                                    loop: !0,
                                    playsInline: !0,
                                    style: parseInlineStyle(
                                      `position:absolute;inset:0;width:100%;height:100%;object-fit:cover`,
                                    ),
                                  },
                                  `v` + t.idx,
                                )
                              : (0, JSXRuntime.jsx)(`img`, {
                                  src: t.img,
                                  alt: t.n,
                                  style: parseInlineStyle(
                                    `position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);width:min(40%,390px);height:auto;object-fit:contain;border-radius:12px;box-shadow:0 20px 55px rgba(0,0,0,.65),0 0 0 1px rgba(255,255,255,.12);pointer-events:none`,
                                  ),
                                }),
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: parseInlineStyle(
                                `position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.18),transparent 34%,transparent 62%,rgba(0,0,0,.6));display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:22px;gap:14px`,
                              ),
                              children: [
                                En(t),
                                (0, JSXRuntime.jsx)(InteractiveElement, {
                                  role: `button`,
                                  tabIndex: 0,
                                  ariaLabel: `Jugar ahora`,
                                  className: `lb-btn lb-shine`,
                                  s: `display:flex;align-items:center;gap:10px;border-radius:12px;padding:0 30px;height:48px;font-size:16px;letter-spacing:.11em;text-transform:uppercase;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.35);white-space:nowrap`,
                                  st: {
                                    background: F
                                      ? F.boton
                                      : `linear-gradient(180deg, #FF742A 0%, #FF5A0C 58%, #F24E00 100%)`,
                                    color: xn,
                                    fontFamily: `var(--font-oswald), 'Oswald', 'Segoe UI', sans-serif`,
                                    fontWeight: 600,
                                  },
                                  onClick: () => Dn(t),
                                  children: `▶ JUGAR AHORA`,
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        !r &&
          (0, JSXRuntime.jsxs)(`div`, {
            className: `rb-grevealwrap`,
            style: parseInlineStyle(
              `position:relative;z-index:3;padding:26px 40px 70px`,
            ),
            children: [
              (0, JSXRuntime.jsxs)(`div`, {
                style: parseInlineStyle(
                  `display:flex;align-items:center;gap:20px`,
                ),
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    style: mergeStyles(
                      `font-size:25px;white-space:nowrap;text-transform:uppercase`,
                      {
                        fontFamily: `var(--font-oswald), 'Oswald', 'Segoe UI', sans-serif`,
                        fontWeight: 600,
                        letterSpacing: `.02em`,
                      },
                    ),
                    children: i ? `Más de ${Ts(t.p)}` : `Seguí jugando`,
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    style: mergeStyles(`flex:1;height:1.5px;max-width:240px`, {
                      background: `linear-gradient(90deg, ${_n}, transparent)`,
                    }),
                  }),
                ],
              }),
              (0, JSXRuntime.jsx)(`div`, {
                style: parseInlineStyle(
                  `display:flex;gap:14px;overflow-x:auto;padding:18px 2px 10px`,
                ),
                children: a.map((t) =>
                  (0, JSXRuntime.jsx)(
                    MemoGameCard,
                    {
                      game: t,
                      onOpen: Ke,
                      width: `126px`,
                      fav: ze.has(Zc(t.vendorCode, t.gameCode) ?? ``),
                      onFav: je || !e ? We : void 0,
                    },
                    t.idx,
                  ),
                ),
              }),
            ],
          }),
      ],
    });
  }
  function En(e) {
    return !e.vendorCode || e.vendorCode === ro.vendorCode || Va(e.vendorCode)
      ? null
      : (0, JSXRuntime.jsx)(`div`, {
          role: `group`,
          "aria-label": `Modo de juego`,
          className: `rb-modo`,
          style: mergeStyles(
            `display:flex;align-items:center;gap:4px;border-radius:100px;padding:4px;flex:none`,
            {
              background: `rgba(255,255,255,.045)`,
              boxShadow: `inset 0 0 0 1px rgba(255,255,255,.075)`,
              opacity: Tt ? 0.6 : 1,
            },
          ),
          children: [
            {
              demo: !0,
              texto: `Modo diversión`,
              color: `#f5a524`,
              tinta: `#1a1200`,
            },
          ].map((t) => {
            let n = jt === t.demo;
            return (0, JSXRuntime.jsx)(
              InteractiveElement,
              {
                role: `button`,
                tabIndex: 0,
                ariaLabel: n
                  ? `${t.texto} · es el modo que estás usando`
                  : `Pasar a ${t.texto}`,
                s: `white-space:nowrap;border-radius:100px;padding:9px 15px;font-size:12.5px;font-weight:700;cursor:pointer;transition:background .18s, color .18s`,
                st: {
                  background: n ? t.color : `transparent`,
                  color: n ? t.tinta : V,
                },
                h: n ? `` : `color:#ffffff`,
                onClick: () => {
                  (!n || Ct === null) && Dn(e, t.demo);
                },
                children: t.texto,
              },
              t.texto,
            );
          }),
        });
  }
  function Dn(t, n = !1) {
    if (Tt) return;
    if (!t.vendorCode) {
      P(`Este juego todavía no está disponible.`);
      return;
    }
    if (!e) {
      en(`login`);
      return;
    }
    let r = Ba(t.vendorCode),
      i = y && t.vendorCode === ro.vendorCode;
    (Et(!0),
      Pt(null),
      (async () => {
        let e =
            window.matchMedia?.(`(pointer: coarse)`).matches ||
            window.innerWidth < 900
              ? `mobile`
              : `desktop`,
          n;
        try {
          n = await Es({
            vendorCode: t.vendorCode ?? t.n,
            gameCode: t.gameCode,
            channel: e,
            demo: !0,
          });
        } catch {
          Et(!1);
          let e = `rb-recarga-por-lanzamiento`;
          if (typeof sessionStorage < `u` && !sessionStorage.getItem(e)) {
            (sessionStorage.setItem(e, `1`), location.reload());
            return;
          }
          (Pt({
            motivo: `sin_conexion`,
            idx: t.idx,
          }),
            i && On(),
            P(`No se pudo abrir el juego. Probá de nuevo en un momento.`));
          return;
        }
        if ((Et(!1), n.ok)) {
          (Mt(!0), It(!1), Ot(!1), At(!0), wt(n.url), Je(t));
          return;
        }
        if (
          (Pt({
            motivo: n.reason,
            idx: t.idx,
          }),
          i && On(),
          n.reason === `not_logged_in`)
        ) {
          en(`login`);
          return;
        }
        if (n.reason === `sin_saldo`) {
          (P(`Todavía no tenés fichas. Pedile una carga al cajero y arrancás.`),
            un(`load`));
          return;
        }
        if (n.reason === `vivo_no_habilitado`) {
          P(
            `Las mesas en vivo se están habilitando. En unas horas ya se puede jugar.`,
          );
          return;
        }
        if (n.reason === `slots_ggr_no_habilitado`) {
          P(
            `Estas tragamonedas se están habilitando. En unas horas ya se puede jugar.`,
          );
          return;
        }
        if (n.reason === `sin_modo_prueba`) {
          P(
            r
              ? `Estas tragamonedas se juegan sólo con plata real: no tienen modo diversión.`
              : `Las mesas en vivo se juegan sólo con plata real: no tienen modo diversión.`,
          );
          return;
        }
        if (n.reason === `vivo_caido`) {
          P(
            r
              ? `Este juego no está disponible por ahora. El resto del casino anda normal.`
              : `Las mesas en vivo no están disponibles por ahora. Las tragamonedas andan normal.`,
            9e3,
          );
          return;
        }
        P(
          n.reason === `demo`
            ? n.mensaje ||
                `Esto es una demo: no se guarda nada ni se mueve plata`
            : n.reason === `provider_not_configured`
              ? `Todo listo para el proveedor: cuando carguen las credenciales, este botón abre el juego real.`
              : n.reason === `wallet_frozen`
                ? `Tu cuenta está bloqueada. Escribinos y lo vemos.`
                : `No se pudo abrir el juego. Probá de nuevo en un momento.`,
        );
      })());
  }
  function On() {
    (typeof document < `u` &&
      document.fullscreenElement &&
      Promise.resolve(document.exitFullscreen?.()).catch(() => {}),
      Mt(!1),
      Pt(null),
      zt.current && clearTimeout(zt.current),
      Rt(!0),
      wt(null),
      $e(null),
      tt(!1),
      at(!1));
  }
  function kn() {
    if (!e) return en(`login`);
    (ye(`cargando`),
      (async () => {
        let e = await js().catch(() => ({
          ok: !1,
          reason: `error`,
        }));
        ye((t) =>
          t === null
            ? null
            : e.ok
              ? e.movimientos
              : e.reason === `muy_seguido`
                ? `muy_seguido`
                : `error`,
        );
      })());
  }
  function An() {
    return parseInlineStyle(
      `width:100%;max-width:392px;box-sizing:border-box;background:${F ? F.hoja : ac};border-radius:20px;padding:24px;box-shadow:inset 0 0 0 1px ${F ? F.hojaFilo : dc},0 34px 90px rgba(0,0,0,.75);margin:auto 0`,
    );
  }
  function jn() {
    return F
      ? (0, JSXRuntime.jsx)(`img`, {
          src: F.logo.src,
          alt: F.logo.alt,
          style: parseInlineStyle(
            `display:block;height:${F.logo.alto};width:auto`,
          ),
        })
      : (0, JSXRuntime.jsx)(`img`, {
          src: `./rushybet/rushybet-logo.webp`,
          alt: `RushyBet`,
          style: parseInlineStyle(`display:block;height:22px;width:auto`),
        });
  }
  function Mn() {
    let e = () => ye(null),
      t = Array.isArray(ve) ? ve : null;
    return (0, JSXRuntime.jsx)(`div`, {
      onClick: e,
      style: parseInlineStyle(
        `position:fixed;inset:0;z-index:90;background:rgba(10,10,10,.78);backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:24px;overflow-y:auto`,
      ),
      children: (0, JSXRuntime.jsxs)(`div`, {
        onClick: (e) => e.stopPropagation(),
        style: An(),
        children: [
          (0, JSXRuntime.jsxs)(`div`, {
            style: parseInlineStyle(
              `display:flex;align-items:center;justify-content:space-between;gap:12px`,
            ),
            children: [
              jn(),
              (0, JSXRuntime.jsx)(InteractiveElement, {
                role: `button`,
                tabIndex: 0,
                ariaLabel: `Cerrar`,
                s: `width:34px;height:34px;border-radius:50%;background:var(--dm-n-cerrar,#1c1c1c);color:#9a9a9a;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;transition:background .16s, color .16s;flex:none`,
                h: `background:#262626;color:#ffffff`,
                onClick: e,
                children: `✕`,
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: mergeStyles(
              `font-size:23px;margin-top:20px;text-transform:uppercase;line-height:112%`,
              {
                fontFamily: _c,
                fontWeight: 900,
                letterSpacing: `-.015em`,
              },
            ),
            children: `Mis movimientos`,
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: parseInlineStyle(
              `font-size:12.5px;color:${V};margin-top:5px;line-height:1.5`,
            ),
            children: `Las cargas y los retiros de tu cuenta. El detalle de cada jugada lo muestra el juego.`,
          }),
          ve === `cargando` &&
            (0, JSXRuntime.jsx)(`div`, {
              style: parseInlineStyle(
                `font-size:12.5px;color:#929292;margin-top:20px`,
              ),
              children: `Buscando…`,
            }),
          ve === `error` &&
            (0, JSXRuntime.jsx)(`div`, {
              style: parseInlineStyle(
                `font-size:12px;font-weight:700;color:#ff8a8a;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:11px;padding:10px 12px;margin-top:18px`,
              ),
              children: `No pudimos traer tus movimientos. Probá de nuevo en un momento.`,
            }),
          ve === `muy_seguido` &&
            (0, JSXRuntime.jsx)(`div`, {
              style: parseInlineStyle(
                `font-size:12.5px;color:#929292;margin-top:20px;line-height:1.5`,
              ),
              children: `Lo estás abriendo muy seguido. Esperá un minuto y volvé a mirar — tus movimientos siguen ahí.`,
            }),
          t?.length === 0 &&
            (0, JSXRuntime.jsx)(`div`, {
              style: parseInlineStyle(
                `font-size:12.5px;color:#929292;margin-top:20px;line-height:1.5`,
              ),
              children: `Todavía no tenés movimientos. Cuando el cajero te cargue fichas, van a aparecer acá.`,
            }),
          t &&
            t.length > 0 &&
            (0, JSXRuntime.jsx)(`div`, {
              style: parseInlineStyle(
                `display:flex;flex-direction:column;gap:8px;margin-top:18px;max-height:52vh;overflow-y:auto`,
              ),
              children: t.map((e, t) =>
                (0, JSXRuntime.jsxs)(
                  `div`,
                  {
                    style: parseInlineStyle(
                      `display:flex;align-items:center;gap:12px;background:var(--dm-n-pedido,#101010);border:1px solid #232323;border-radius:14px;padding:12px 14px`,
                    ),
                    children: [
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: parseInlineStyle(`min-width:0;flex:1`),
                        children: [
                          (0, JSXRuntime.jsx)(`div`, {
                            style: parseInlineStyle(
                              `font-size:12.5px;font-weight:700;color:${e.anulado ? `#929292` : `#fff`}`,
                            ),
                            children: e.tipo,
                          }),
                          (0, JSXRuntime.jsxs)(`div`, {
                            style: parseInlineStyle(
                              `font-size:11px;color:#929292;margin-top:3px`,
                            ),
                            children: [
                              e.cuando,
                              e.anulado ? ` · dado de baja` : ``,
                            ],
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        style: mergeStyles(
                          `font-size:15px;font-weight:900;font-variant-numeric:tabular-nums;letter-spacing:-.02em;white-space:nowrap`,
                          {
                            color: e.anulado ? `#929292` : `#fff`,
                            textDecoration: e.anulado ? `line-through` : `none`,
                          },
                        ),
                        children: e.monto,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          (0, JSXRuntime.jsx)(`div`, {
            style: parseInlineStyle(
              `text-align:center;font-size:11.5px;color:#6f6f6f;margin-top:16px;line-height:1.5`,
            ),
            children: `¿Falta algo o no coincide? Escribinos y lo revisamos.`,
          }),
        ],
      }),
    });
  }
  function Nn() {
    if (!e) return en(`login`);
    (gt(``), vt(null), yt(null), St(!1), mt(!0));
  }
  function Pn() {
    N ||
      (bt(!0),
      yt(null),
      (async () => {
        let e = await Ms(ht, _t).catch(() => ({
          ok: !1,
          motivo: `Recargá la página y volvé a mandarlo: el sitio se actualizó mientras lo escribías.`,
        }));
        (bt(!1), e.ok ? St(!0) : yt(e.motivo));
      })());
  }
  function Fn() {
    let e = () => mt(!1);
    return (0, JSXRuntime.jsx)(`div`, {
      onClick: e,
      style: parseInlineStyle(
        `position:fixed;inset:0;z-index:90;background:rgba(10,10,10,.78);backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:24px;overflow-y:auto`,
      ),
      children: (0, JSXRuntime.jsxs)(`div`, {
        onClick: (e) => e.stopPropagation(),
        style: An(),
        children: [
          (0, JSXRuntime.jsxs)(`div`, {
            style: parseInlineStyle(
              `display:flex;align-items:center;justify-content:space-between;gap:12px`,
            ),
            children: [
              jn(),
              (0, JSXRuntime.jsx)(InteractiveElement, {
                role: `button`,
                tabIndex: 0,
                ariaLabel: `Cerrar`,
                s: `width:34px;height:34px;border-radius:50%;background:var(--dm-n-cerrar,#1c1c1c);color:#9a9a9a;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;transition:background .16s, color .16s;flex:none`,
                h: `background:#262626;color:#ffffff`,
                onClick: e,
                children: `✕`,
              }),
            ],
          }),
          xt
            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  (0, JSXRuntime.jsx)(`div`, {
                    style: mergeStyles(
                      `font-size:23px;margin-top:20px;text-transform:uppercase;line-height:112%`,
                      {
                        fontFamily: _c,
                        fontWeight: 900,
                        letterSpacing: `-.015em`,
                      },
                    ),
                    children: `Gracias`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: parseInlineStyle(
                      `font-size:12.5px;color:${V};margin-top:5px;line-height:1.5`,
                    ),
                    children: `Lo leemos nosotros, no un robot. Si hace falta, te escribimos por WhatsApp.`,
                  }),
                  (0, JSXRuntime.jsx)(InteractiveElement, {
                    role: `button`,
                    tabIndex: 0,
                    s: `border-radius:20px;padding:14px 0;margin-top:18px;text-align:center;font-weight:600;font-size:13px;cursor:pointer;background:var(--dm-n-cerrar,#1c1c1c);color:#fff;transition:background .16s`,
                    h: `background:#242424`,
                    onClick: e,
                    children: `Cerrar`,
                  }),
                ],
              })
            : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  (0, JSXRuntime.jsx)(`div`, {
                    style: mergeStyles(
                      `font-size:23px;margin-top:20px;text-transform:uppercase;line-height:112%`,
                      {
                        fontFamily: _c,
                        fontWeight: 900,
                        letterSpacing: `-.015em`,
                      },
                    ),
                    children: `¿Cómo la estás pasando?`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: parseInlineStyle(
                      `font-size:12.5px;color:${V};margin-top:5px;line-height:1.5`,
                    ),
                    children: `Contanos qué te gustó y qué no. Lo lee una persona y sirve para arreglar cosas de verdad.`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: parseInlineStyle(
                      `display:flex;gap:8px;margin-top:18px`,
                    ),
                    children: [1, 2, 3, 4, 5].map((e) =>
                      (0, JSXRuntime.jsx)(
                        `button`,
                        {
                          type: `button`,
                          onClick: () => vt(_t === e ? null : e),
                          "aria-label": `${e} de 5`,
                          "aria-pressed": _t === e,
                          style: mergeStyles(
                            `flex:1;height:44px;border-radius:12px;border:0;cursor:pointer;font-size:19px`,
                            {
                              background:
                                _t !== null && e <= _t ? _n : `#161616`,
                              color: _t !== null && e <= _t ? yn : V,
                            },
                          ),
                          children: `★`,
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, JSXRuntime.jsx)(`textarea`, {
                    className: `rb-input`,
                    value: ht,
                    onChange: (e) => {
                      (gt(e.target.value.slice(0, 1e3)), yt(null));
                    },
                    placeholder: `Escribí acá…`,
                    "aria-label": `Tu comentario`,
                    rows: 4,
                    style: mergeStyles(
                      `box-sizing:border-box;width:100%;margin-top:12px;background:${F ? F.campo : ic};border:1px solid ${F ? F.campoFilo : fc};border-radius:14px;padding:12px 14px;font-size:16px;color:#ffffff;outline:none;resize:vertical;min-height:104px`,
                      {
                        fontFamily: `inherit`,
                      },
                    ),
                  }),
                  M &&
                    (0, JSXRuntime.jsx)(`div`, {
                      style: parseInlineStyle(
                        `font-size:12px;font-weight:700;color:#ff8a8a;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:11px;padding:10px 12px;margin-top:12px`,
                      ),
                      children: M,
                    }),
                  (0, JSXRuntime.jsx)(InteractiveElement, {
                    role: `button`,
                    tabIndex: 0,
                    className: `lb-btn lb-shine`,
                    s: `border-radius:20px;height:52px;margin-top:16px;display:flex;align-items:center;justify-content:center;text-transform:uppercase;font-size:17px;letter-spacing:.11em;cursor:pointer`,
                    st: {
                      background: bn,
                      color: xn,
                      fontFamily: gc,
                      fontWeight: 600,
                      opacity: N ? 0.75 : 1,
                    },
                    h: `filter:brightness(1.08)`,
                    onClick: Pn,
                    children: N ? `Enviando…` : `Enviar`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: parseInlineStyle(
                      `text-align:center;font-size:11.5px;color:#6f6f6f;margin-top:12px;line-height:1.5`,
                    ),
                    children: `Si es algo urgente con tu plata, escribinos por WhatsApp: se resuelve más rápido.`,
                  }),
                ],
              }),
        ],
      }),
    });
  }
  function In() {
    let t = a.find((e) => e.kind === ge) ?? null,
      n = ge === `load`,
      r = mergeStyles(
        `font-size:10px;font-weight:700;letter-spacing:.1em;color:${lc};text-transform:uppercase`,
        F?.etiqueta ?? void 0,
      ),
      i = mergeStyles(
        `box-sizing:border-box;width:100%;background:${F ? F.campo : ic};border:1px solid ${F ? F.campoFilo : fc};border-radius:14px;padding:12px 14px;font-size:16px;color:#ffffff;outline:none;transition:border-color .16s, box-shadow .16s`,
        {
          fontFamily: `inherit`,
        },
      ),
      o = (e) => ({
        flex: 1,
        textAlign: `center`,
        borderRadius: `999px`,
        padding: `9px 0`,
        fontSize: `12.5px`,
        fontWeight: 700,
        cursor: `pointer`,
        background: e ? bn : `transparent`,
        color: e ? xn : V,
        transition: `color .18s ease`,
        ...(F?.rotulo ?? {}),
      }),
      s = () => _e(null);
    return (0, JSXRuntime.jsx)(`div`, {
      onClick: s,
      style: parseInlineStyle(
        `position:fixed;inset:0;z-index:90;background:rgba(10,10,10,.78);backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:24px;overflow-y:auto`,
      ),
      children: (0, JSXRuntime.jsxs)(`div`, {
        onClick: (e) => e.stopPropagation(),
        style: An(),
        children: [
          (0, JSXRuntime.jsxs)(`div`, {
            style: parseInlineStyle(
              `display:flex;align-items:center;justify-content:space-between;gap:12px`,
            ),
            children: [
              jn(),
              (0, JSXRuntime.jsx)(InteractiveElement, {
                role: `button`,
                tabIndex: 0,
                ariaLabel: `Cerrar`,
                s: `width:34px;height:34px;border-radius:50%;background:var(--dm-n-cerrar,#1c1c1c);color:#9a9a9a;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;transition:background .16s, color .16s;flex:none`,
                st: F
                  ? {
                      background: F.cerrarFondo,
                      boxShadow: `inset 0 0 0 1px ${F.cerrarFilo}`,
                    }
                  : void 0,
                h: F
                  ? `color:${_n};box-shadow:inset 0 0 0 1px ${vn}`
                  : `background:#262626;color:#ffffff`,
                onClick: s,
                children: `✕`,
              }),
            ],
          }),
          t
            ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  (0, JSXRuntime.jsx)(`div`, {
                    style: mergeStyles(
                      `font-size:23px;margin-top:20px;text-transform:uppercase;line-height:112%`,
                      {
                        fontFamily: _c,
                        fontWeight: 900,
                        letterSpacing: `-.015em`,
                        ...(F?.titulo ?? {}),
                      },
                    ),
                    children: `Tu pedido está en camino`,
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: parseInlineStyle(
                      `font-size:12.5px;color:${V};margin-top:5px;line-height:1.5`,
                    ),
                    children: [
                      `El cajero ya lo ve en su pantalla. Si querés apurarlo, escribile vos por WhatsApp:`,
                      t.kind === `load`
                        ? h
                          ? ` te carga las fichas apenas le llegue tu comprobante.`
                          : ` te pasa cómo pagarle y te carga las fichas.`
                        : ` te pasa el retiro.`,
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: mergeStyles(
                      `display:flex;align-items:center;gap:12px;margin-top:18px;background:var(--dm-n-pedido,#101010);border-radius:14px;padding:14px`,
                      {
                        border: F
                          ? F.pedidoBorde
                          : `1px solid color-mix(in oklab, ${B} 45%, #262626)`,
                      },
                    ),
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        style: mergeStyles(
                          `flex:0 0 auto;border-radius:100px;padding:4px 10px;font-size:9.5px;font-weight:900;letter-spacing:.06em`,
                          F
                            ? {
                                background: F.boton,
                                color: F.tintaBoton,
                                ...(F.rotulo ?? {}),
                              }
                            : {
                                background: _n,
                                color: yn,
                              },
                        ),
                        children: t.kind === `load` ? `CARGA` : `RETIRO`,
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        style: mergeStyles(
                          `font-size:19px;font-weight:900;font-variant-numeric:tabular-nums;letter-spacing:-.02em`,
                          F?.cifra ?? void 0,
                        ),
                        children: t.amount,
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        style: parseInlineStyle(
                          `margin-left:auto;font-size:11px;color:${V};white-space:nowrap`,
                        ),
                        children: t.when,
                      }),
                    ],
                  }),
                  t.kind === `load` &&
                    h &&
                    (0, JSXRuntime.jsx)(PaymentDetails, {
                      datos: h,
                      pa: F,
                      acento: _n,
                      acentoSuave: vn,
                      pedido: !0,
                    }),
                  (0, JSXRuntime.jsx)(`a`, {
                    href: Xc(p, Ac(t.kind, e?.name ?? null, ``)),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: F ? `lb-btn lb-shine` : void 0,
                    style: mergeStyles(
                      `display:flex;align-items:center;justify-content:center;gap:9px;border-radius:20px;padding:14px 0;margin-top:16px;text-align:center;font-weight:800;font-size:13.5px;text-decoration:none`,
                      {
                        background: bn,
                        color: yn,
                        ...(F?.rotulo ?? {}),
                      },
                    ),
                    children: `Escribirle al cajero por WhatsApp`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: parseInlineStyle(
                      `text-align:center;font-size:11px;color:${V};margin-top:8px`,
                    ),
                    children: Yc(p),
                  }),
                  Ce &&
                    (0, JSXRuntime.jsx)(`div`, {
                      style: parseInlineStyle(
                        `font-size:12px;font-weight:700;color:#ff8a8a;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:11px;padding:10px 12px;margin-top:14px`,
                      ),
                      children: Ce,
                    }),
                  (0, JSXRuntime.jsx)(InteractiveElement, {
                    role: `button`,
                    tabIndex: 0,
                    s: `border-radius:20px;padding:14px 0;margin-top:18px;text-align:center;font-weight:600;font-size:13px;cursor:pointer;background:var(--dm-n-cerrar,#1c1c1c);color:#ff8a8a;transition:background .16s`,
                    st: F
                      ? {
                          background: F.secundario,
                          boxShadow: `inset 0 0 0 1px ${F.cerrarFilo}`,
                          ...(F.rotulo ?? {}),
                        }
                      : void 0,
                    h: F
                      ? `box-shadow:inset 0 0 0 1px rgba(255,138,138,.55)`
                      : `background:#242424`,
                    onClick: fn,
                    children: De ? `Cancelando…` : `Cancelar el pedido`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: parseInlineStyle(
                      `text-align:center;font-size:11.5px;color:#6f6f6f;margin-top:12px;line-height:1.5`,
                    ),
                    children: `Podés seguir jugando mientras tanto.`,
                  }),
                ],
              })
            : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: parseInlineStyle(
                      `display:flex;gap:4px;padding:4px;background:${F ? F.campo : ic};box-shadow:inset 0 0 0 1px ${F ? F.campoFilo : fc};border-radius:999px;margin-top:18px`,
                    ),
                    children: [
                      (0, JSXRuntime.jsx)(`div`, {
                        role: `button`,
                        tabIndex: 0,
                        onClick: () => {
                          (_e(`load`), we(null), Ee(crypto.randomUUID()));
                        },
                        style: o(n),
                        children: `Cargar fichas`,
                      }),
                      (0, JSXRuntime.jsx)(`div`, {
                        role: `button`,
                        tabIndex: 0,
                        onClick: () => {
                          (_e(`unload`), we(null), Ee(crypto.randomUUID()));
                        },
                        style: o(!n),
                        children: `Retirar`,
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: mergeStyles(
                      `font-size:23px;margin-top:20px;text-transform:uppercase;line-height:112%`,
                      {
                        fontFamily: _c,
                        fontWeight: 900,
                        letterSpacing: `-.015em`,
                        ...(F?.titulo ?? {}),
                      },
                    ),
                    children: n
                      ? `¿Cuánto querés cargar?`
                      : `¿Cuánto querés retirar?`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: parseInlineStyle(
                      `font-size:12.5px;color:${V};margin-top:5px;line-height:1.5`,
                    ),
                    children: n
                      ? h
                        ? `Pedí la carga, transferí al alias que te mostramos abajo y mandale el comprobante al cajero. Las fichas entran cuando confirma el pago.`
                        : `Mandás el pedido y el cajero te escribe para cobrarte. Las fichas entran cuando confirma el pago.`
                      : `Mandás el pedido y el cajero te escribe para pagarte por fuera.`,
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    style: parseInlineStyle(
                      `display:flex;flex-direction:column;gap:12px;margin-top:18px`,
                    ),
                    children: [
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: parseInlineStyle(
                          `display:flex;flex-direction:column;gap:6px`,
                        ),
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            style: r,
                            children: `Monto`,
                          }),
                          (0, JSXRuntime.jsx)(`input`, {
                            className: `rb-input`,
                            inputMode: `decimal`,
                            placeholder: `5000`,
                            "aria-label": `Monto`,
                            value: j,
                            onChange: (e) => {
                              (be(
                                e.target.value
                                  .replace(/[^\d.,]/g, ``)
                                  .slice(0, 12),
                              ),
                                we(null));
                            },
                            style: i,
                          }),
                          (0, JSXRuntime.jsx)(`div`, {
                            style: parseInlineStyle(
                              `display:flex;gap:7px;flex-wrap:wrap;margin-top:2px`,
                            ),
                            children: [`1000`, `2000`, `5000`, `10000`].map(
                              (e) =>
                                (0, JSXRuntime.jsx)(
                                  InteractiveElement,
                                  {
                                    role: `button`,
                                    tabIndex: 0,
                                    s: `display:inline-flex;align-items:center;height:32px;padding:0 14px;border-radius:100px;background:rgba(255,255,255,.045);box-shadow:inset 0 0 0 1px rgba(255,255,255,.075);font-size:12.5px;font-weight:600;cursor:pointer;transition:color .2s,box-shadow .2s`,
                                    h: `color:${_n};box-shadow:inset 0 0 0 1px ${vn}`,
                                    st: {
                                      color: V,
                                      ...(F?.pastilla ?? {}),
                                    },
                                    onClick: () => {
                                      (be(e), we(null));
                                    },
                                    children: Number(e).toLocaleString(`es-AR`),
                                  },
                                  e,
                                ),
                            ),
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsxs)(`div`, {
                        style: parseInlineStyle(
                          `display:flex;flex-direction:column;gap:6px`,
                        ),
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            style: r,
                            children: `Nota para el cajero (opcional)`,
                          }),
                          (0, JSXRuntime.jsx)(`input`, {
                            className: `rb-input`,
                            placeholder: n
                              ? `Ya te mando el comprobante`
                              : `Mi alias es...`,
                            "aria-label": `Nota para el cajero`,
                            maxLength: 120,
                            value: xe,
                            onChange: (e) => Se(e.target.value),
                            style: i,
                          }),
                        ],
                      }),
                      Ce &&
                        (0, JSXRuntime.jsx)(`div`, {
                          style: parseInlineStyle(
                            `font-size:12px;font-weight:700;color:#ff8a8a;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:11px;padding:10px 12px`,
                          ),
                          children: Ce,
                        }),
                    ],
                  }),
                  (0, JSXRuntime.jsx)(InteractiveElement, {
                    role: `button`,
                    tabIndex: 0,
                    className: `lb-btn lb-shine`,
                    s: `border-radius:20px;height:52px;margin-top:18px;display:flex;align-items:center;justify-content:center;text-transform:uppercase;font-size:17px;letter-spacing:.11em;cursor:pointer`,
                    st: {
                      background: bn,
                      color: xn,
                      fontFamily: gc,
                      fontWeight: 600,
                      opacity: De ? 0.75 : 1,
                    },
                    h: `filter:brightness(1.08)`,
                    onClick: dn,
                    children: De
                      ? `Enviando…`
                      : n
                        ? `Pedir la carga`
                        : `Pedir el retiro`,
                  }),
                  (0, JSXRuntime.jsx)(`a`, {
                    href: Xc(p, Ac(ge ?? `load`, e?.name ?? null, j)),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `lb-btn`,
                    style: mergeStyles(
                      `border-radius:20px;height:52px;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:9px;text-transform:uppercase;font-size:15px;letter-spacing:.09em;cursor:pointer;text-decoration:none`,
                      {
                        background: F
                          ? F.secundario
                          : `var(--dm-n-cerrar, #1c1c1c)`,
                        color: `#fff`,
                        fontFamily: gc,
                        fontWeight: 600,
                        boxShadow: `inset 0 0 0 1px ${F ? F.secundarioFilo : dc}`,
                      },
                    ),
                    children: `Mandarlo por WhatsApp`,
                  }),
                  n &&
                    h &&
                    (0, JSXRuntime.jsx)(PaymentDetails, {
                      datos: h,
                      pa: F,
                      acento: _n,
                      acentoSuave: vn,
                      pedido: !1,
                    }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: parseInlineStyle(
                      `text-align:center;font-size:11.5px;color:#6f6f6f;margin-top:12px;line-height:1.5`,
                    ),
                    children: `El pedido le avisa al cajero desde acá. El WhatsApp es para hablarle vos directo — podés hacer las dos cosas.`,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    style: parseInlineStyle(
                      `text-align:center;font-size:11.5px;margin-top:8px;line-height:1.5`,
                    ),
                    children: (0, JSXRuntime.jsxs)(`a`, {
                      href: Xc(p, `Hola! Es sobre un pedido en Rushybet.`),
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      style: {
                        color: _n,
                        textDecoration: `underline`,
                        textUnderlineOffset: `3px`,
                      },
                      children: [
                        `¿Algún problema? Escribinos al WhatsApp `,
                        Yc(p),
                      ],
                    }),
                  }),
                ],
              }),
        ],
      }),
    });
  }
  function Ln() {
    let e = C === `signup`,
      t = (e) => ({
        flex: 1,
        textAlign: `center`,
        borderRadius: `999px`,
        padding: `9px 0`,
        fontSize: `12.5px`,
        fontWeight: 700,
        cursor: `pointer`,
        background: e ? bn : `transparent`,
        color: e ? xn : V,
        transition: `color .18s ease`,
        ...(F?.rotulo ?? {}),
      }),
      n = parseInlineStyle(
        `font-size:10px;font-weight:700;letter-spacing:.1em;color:${lc};text-transform:uppercase`,
      ),
      r = mergeStyles(
        `box-sizing:border-box;width:100%;background:${F ? F.campo : ic};border:1px solid ${F ? F.campoFilo : fc};border-radius:14px;padding:12px 14px;font-size:16px;color:#ffffff;outline:none;transition:border-color .16s, box-shadow .16s`,
        {
          fontFamily: `inherit`,
        },
      );
    return (0, JSXRuntime.jsx)(`div`, {
      onClick: () => w(null),
      style: parseInlineStyle(
        `position:fixed;inset:0;z-index:90;background:${F ? `rgba(0,0,0,.84)` : `rgba(10,10,10,.78)`};backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:24px;overflow-y:auto`,
      ),
      children: (0, JSXRuntime.jsxs)(`div`, {
        onClick: (e) => e.stopPropagation(),
        style: An(),
        children: [
          (0, JSXRuntime.jsxs)(`div`, {
            style: parseInlineStyle(
              `display:flex;align-items:center;justify-content:space-between;gap:12px`,
            ),
            children: [
              jn(),
              (0, JSXRuntime.jsx)(InteractiveElement, {
                role: `button`,
                tabIndex: 0,
                ariaLabel: `Cerrar`,
                s: `width:34px;height:34px;border-radius:50%;background:var(--dm-n-cerrar,#1c1c1c);color:#9a9a9a;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;transition:background .16s, color .16s;flex:none`,
                st: F
                  ? {
                      background: F.campo,
                      boxShadow: `inset 0 0 0 1px ${F.hojaFilo}`,
                    }
                  : void 0,
                h: `background:#262626;color:#ffffff`,
                onClick: () => w(null),
                children: `✕`,
              }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`div`, {
            style: parseInlineStyle(
              `display:flex;gap:4px;padding:4px;background:${F ? F.campo : ic};box-shadow:inset 0 0 0 1px ${F ? F.campoFilo : fc};border-radius:999px;margin-top:18px`,
            ),
            children: [
              (0, JSXRuntime.jsx)(`div`, {
                role: `button`,
                tabIndex: 0,
                onClick: () => en(`login`),
                style: t(!e),
                children: `Ingresar`,
              }),
              (0, JSXRuntime.jsx)(`div`, {
                role: `button`,
                tabIndex: 0,
                onClick: () => en(`signup`),
                style: t(e),
                children: `Registrarse`,
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: mergeStyles(
              `font-size:23px;margin-top:20px;text-transform:uppercase;line-height:112%`,
              {
                fontFamily: _c,
                fontWeight: 900,
                letterSpacing: `-.015em`,
              },
            ),
            children: e ? `Creá tu cuenta` : `Bienvenido de vuelta`,
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: parseInlineStyle(
              `font-size:12.5px;color:${V};margin-top:5px;line-height:1.5`,
            ),
            children: e
              ? `Creá tu cuenta y pedile fichas al cajero cuando quieras jugar.`
              : `Ingresá para seguir jugando donde lo dejaste.`,
          }),
          (0, JSXRuntime.jsxs)(`div`, {
            style: parseInlineStyle(
              `display:flex;flex-direction:column;gap:12px;margin-top:18px`,
            ),
            children: [
              (0, JSXRuntime.jsxs)(`div`, {
                style: parseInlineStyle(
                  `display:flex;flex-direction:column;gap:6px`,
                ),
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    style: n,
                    children: e ? `Email` : `Email o usuario`,
                  }),
                  (0, JSXRuntime.jsx)(`input`, {
                    className: `rb-input`,
                    type: e ? `email` : `text`,
                    autoComplete: e ? `email` : `username`,
                    autoCapitalize: `none`,
                    autoCorrect: `off`,
                    spellCheck: !1,
                    placeholder: e
                      ? `vos@email.com`
                      : `Tu email, o el usuario que te dio tu cajero`,
                    value: E,
                    onChange: (e) => re(e.target.value),
                    style: r,
                  }),
                ],
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                style: parseInlineStyle(
                  `display:flex;flex-direction:column;gap:6px`,
                ),
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    style: n,
                    children: `Contraseña`,
                  }),
                  (0, JSXRuntime.jsx)(`input`, {
                    className: `rb-input`,
                    type: `password`,
                    autoComplete: e ? `new-password` : `current-password`,
                    placeholder: `••••••••`,
                    value: ie,
                    onChange: (e) => ae(e.target.value),
                    style: r,
                  }),
                  e &&
                    (0, JSXRuntime.jsx)(`span`, {
                      style: parseInlineStyle(
                        `font-size:10.5px;color:#7d7d7d;line-height:1.45`,
                      ),
                      children: `Mínimo 6 caracteres, con una mayúscula, una minúscula, un número y un símbolo.`,
                    }),
                ],
              }),
              e &&
                (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
                  children: (0, JSXRuntime.jsxs)(`label`, {
                    style: parseInlineStyle(
                      `display:flex;align-items:flex-start;gap:9px;font-size:11.5px;color:#9a9a9a;line-height:1.45;cursor:pointer`,
                    ),
                    children: [
                      (0, JSXRuntime.jsx)(`input`, {
                        type: `checkbox`,
                        checked: D,
                        onChange: (e) => O(e.target.checked),
                        style: {
                          width: `15px`,
                          height: `15px`,
                          margin: `1px 0 0`,
                          accentColor: _n,
                          flex: `0 0 15px`,
                        },
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        children: `Soy mayor de 18 años y acepto los términos y la política de juego responsable.`,
                      }),
                    ],
                  }),
                }),
              f &&
                (0, JSXRuntime.jsx)(Hs, {
                  siteKey: f,
                  onToken: (e) => {
                    (A(e), e && pe(!1));
                  },
                  onUnavailable: () => pe(!0),
                  resetKey: ue,
                }),
              fe &&
                (0, JSXRuntime.jsx)(`div`, {
                  style: parseInlineStyle(
                    `font-size:11.5px;font-weight:700;color:#e8c08a;background:rgba(224,145,47,.1);border:1px solid rgba(224,145,47,.35);border-radius:11px;padding:10px 12px;line-height:1.45`,
                  ),
                  children: `No cargó la verificación anti-robot. Suele ser un bloqueador de publicidad: desactivalo para este sitio y recargá la página.`,
                }),
              ne &&
                (0, JSXRuntime.jsx)(`div`, {
                  style: parseInlineStyle(
                    `font-size:12px;font-weight:700;color:#ff8a8a;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:11px;padding:10px 12px`,
                  ),
                  children: ne,
                }),
            ],
          }),
          (0, JSXRuntime.jsx)(InteractiveElement, {
            role: `button`,
            tabIndex: 0,
            className: `lb-btn lb-shine`,
            s: `border-radius:20px;height:52px;margin-top:18px;display:flex;align-items:center;justify-content:center;text-transform:uppercase;font-size:17px;letter-spacing:.11em;cursor:pointer`,
            st: {
              background: bn,
              color: xn,
              fontFamily: gc,
              fontWeight: 600,
              opacity: oe ? 0.75 : 1,
            },
            h: `filter:brightness(1.08)`,
            onClick: e ? nn : rn,
            children: oe
              ? e
                ? `Creando…`
                : `Ingresando…`
              : e
                ? `Crear cuenta`
                : `Ingresar`,
          }),
          d &&
            (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  style: parseInlineStyle(
                    `display:flex;align-items:center;gap:14px;margin-top:16px`,
                  ),
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      style: mergeStyles(`flex:1;height:1px`, {
                        background: F ? F.hojaFilo : `#232323`,
                      }),
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: mergeStyles(`font-size:12px`, {
                        color: `#929292`,
                      }),
                      children: `o`,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      style: mergeStyles(`flex:1;height:1px`, {
                        background: F ? F.hojaFilo : `#232323`,
                      }),
                    }),
                  ],
                }),
                (0, JSXRuntime.jsxs)(InteractiveElement, {
                  role: `button`,
                  tabIndex: 0,
                  ariaLabel: `Continuar con Google`,
                  s: `display:flex;align-items:center;justify-content:center;gap:12px;height:48px;margin-top:14px;border-radius:20px;cursor:pointer;font-size:13.5px;font-weight:600;transition:background .18s ease`,
                  st: {
                    background: F ? F.campo : `#121212`,
                    boxShadow: `inset 0 0 0 1px ${F ? F.campoFilo : `#242424`}`,
                  },
                  h: `background:#181818`,
                  onClick: on,
                  children: [
                    (0, JSXRuntime.jsx)(Hl, {
                      s: 18,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      children: `Continuar con Google`,
                    }),
                  ],
                }),
              ],
            }),
          !e &&
            (0, JSXRuntime.jsx)(`div`, {
              onClick: an,
              style: parseInlineStyle(
                `text-align:center;font-size:12px;color:#929292;cursor:pointer;margin-top:12px`,
              ),
              children: `Olvidé mi contraseña`,
            }),
          (0, JSXRuntime.jsxs)(`div`, {
            style: parseInlineStyle(
              `display:flex;align-items:center;justify-content:center;gap:6px;margin-top:14px;font-size:12px;color:${V}`,
            ),
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                children: e ? `¿Ya tenés cuenta?` : `¿Todavía no tenés cuenta?`,
              }),
              (0, JSXRuntime.jsx)(`span`, {
                onClick: () => en(e ? `login` : `signup`),
                style: mergeStyles(`font-weight:700;cursor:pointer`, {
                  color: _n,
                }),
                children: e ? `Ingresar` : `Registrate`,
              }),
            ],
          }),
        ],
      }),
    });
  }
}
function zd(e) {
  let t = (e || ``).toLowerCase();
  return t.includes(`already registered`) || t.includes(`already exists`)
    ? `Si el correo es nuevo, te mandamos un mail para confirmar. Si ya tenías cuenta, entrá con tu contraseña o usá "¿Olvidaste tu contraseña?".`
    : t.includes(`invalid login credentials`)
      ? `Email, usuario o contraseña incorrectos.`
      : t.includes(`email not confirmed`)
        ? `Todavía no confirmaste tu email. Revisá tu correo.`
        : t.includes(`password should be at least`)
          ? `La contraseña debe tener al menos 6 caracteres.`
          : t.includes(`password should contain`)
            ? `La contraseña necesita una mayúscula, una minúscula, un número y un símbolo (por ejemplo: Rushy2026!).`
            : t.includes(`captcha`)
              ? `Marcá la casilla de verificación y probá de nuevo.`
              : t.includes(`unable to validate email`) ||
                  t.includes(`invalid email`)
                ? `Ingresá un email válido.`
                : t.includes(`rate limit`) || t.includes(`too many`)
                  ? `Demasiados intentos. Esperá un momento y probá de nuevo.`
                  : `No se pudo completar. Probá de nuevo en un momento.`;
}
function initializeLobbyController() {
  Md = createUnavailableComponent(() =>
    Promise.resolve()
      .then(() => (Od(), ud))
      .then((e) => e.ChatSoporteNuevo),
  );
  Nd = createUnavailableComponent(() =>
    Promise.resolve()
      .then(() => (jd(), kd))
      .then((e) => e.LobbyAzul),
  );
  Pd = {
    idx: -1,
    n: `Apuestas deportivas`,
    p: ro.name,
    cat: `slots`,
    img: `./rushybet/v2/promo-deportes.webp`,
    vid: null,
    grad: `linear-gradient(165deg,#07231a,#0c5c3f)`,
    bg: `linear-gradient(165deg,#07231a,#0c5c3f)`,
    amb: `linear-gradient(165deg,#07231a,#0c5c3f)`,
    word: `DEPORTES`,
    vendorCode: ro.vendorCode,
    gameCode: ro.gameCode,
  };
  Fd = new Map();
  mergeStyles = (e, t) =>
    t
      ? {
          ...parseInlineStyle(e),
          ...t,
        }
      : parseInlineStyle(e);
  Ld = `

.rb-alias-copiar,.rb-dos-tiempos{transition:transform .09s ease, filter .16s ease, box-shadow .16s ease}
.rb-alias-copiar:hover,.rb-dos-tiempos:hover{filter:brightness(1.06)}
.rb-alias-copiar.apretado,.rb-dos-tiempos.apretado{transform:scale(.955);filter:brightness(.9)}
.rb-alias-copiar.suelta-a,.rb-dos-tiempos.suelta-a{animation:rbAliasSuelta .34s cubic-bezier(.34,1.56,.64,1)}
.rb-alias-copiar.suelta-b,.rb-dos-tiempos.suelta-b{animation:rbAliasSueltaDos .34s cubic-bezier(.34,1.56,.64,1)}
@keyframes rbAliasSuelta{0%{transform:scale(.955)}45%{transform:scale(1.05)}100%{transform:scale(1)}}
@keyframes rbAliasSueltaDos{0%{transform:scale(.955)}45%{transform:scale(1.05)}100%{transform:scale(1)}}
@media (prefers-reduced-motion:reduce){
  .rb-alias-copiar,.rb-alias-copiar.apretado,.rb-dos-tiempos,.rb-dos-tiempos.apretado{transition:none;transform:none}
  .rb-alias-copiar.suelta-a,.rb-alias-copiar.suelta-b,.rb-dos-tiempos.suelta-a,.rb-dos-tiempos.suelta-b{animation:none}
}


@media (max-width:899px){
  .rb-hoja{align-items:flex-end!important;padding:0!important}
  .rb-hoja>div{border-radius:22px 22px 0 0!important;max-width:none!important;margin:0!important;
    padding-bottom:calc(24px + env(safe-area-inset-bottom))!important;
    animation:rb-sube .26s cubic-bezier(.2,.8,.2,1) both}
}
@keyframes rb-sube{from{transform:translateY(44px);opacity:.65}to{transform:none;opacity:1}}
@keyframes rbDot{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes rbStripes{from{background-position:0 0}to{background-position:88px 0}}
@keyframes rbMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes rbRiseCycle{
  0%{opacity:0;transform:translateY(34px)}
  3%{opacity:.35;transform:translateY(20px)}
  8%{opacity:1;transform:translateY(-10px)}
  11%{transform:translateY(5px)}
  13.5%{transform:translateY(-4px)}
  15%{transform:translateY(2px)}
  16%,100%{opacity:1;transform:translateY(0)}
}
@keyframes rbFloat{0%{transform:scale(1)}50%{transform:scale(1.032)}100%{transform:scale(1)}}
@keyframes rbTurn{0%,55%{transform:rotate(0)}75%,100%{transform:rotate(90deg)}}
.rb-input:focus{border-color:${B}!important;box-shadow:0 0 0 3px rgba(255,85,0,.16)!important}

.rb-focus:focus-visible{outline:2px solid ${B};outline-offset:3px;border-radius:6px}

@media (prefers-reduced-motion:reduce){
  .rb-input,.rb-focus{transition:none}
}


.rb-gframe.rb-isfull{position:fixed!important;inset:0!important;width:100vw!important;height:100dvh!important;max-width:none!important;aspect-ratio:auto!important;border-radius:0!important;z-index:70!important;padding:0!important;animation:none!important}
.rb-gframe.rb-isfull>div{border-radius:0!important}

.rb-solo-angosto{display:none}
@media (max-width:760px){
  .rb-solo-ancho{display:none}
  .rb-solo-angosto{display:inline}
}
@media (max-width:760px){
  .rb-gwrap{padding:6px 0!important}
  .rb-gframe{width:100%!important;max-width:100vw!important}
  @media (orientation:portrait){
    .rb-gframe{aspect-ratio:auto!important;height:min(72dvh, calc(100dvh - 180px))!important}
  }
  .rb-ginplay{overflow:hidden!important}
  .rb-gtop{flex-wrap:wrap!important;height:auto!important;padding:max(10px,env(safe-area-inset-top)) 12px 10px!important;gap:10px!important}
  
  .rb-gtop{flex-wrap:nowrap!important;align-items:center!important}
  .rb-gtop .rb-modo{flex:0 1 auto;min-width:0}
  .rb-gtop .rb-modo button{padding:9px 11px!important;font-size:11.5px!important;white-space:nowrap}
  .rb-gbtn{padding:9px 12px!important;font-size:11.5px!important;flex:0 0 auto}
  .rb-gbtn{min-height:44px!important;display:flex!important;align-items:center!important}
  
  .rb-gbtn.rb-hide-sm{display:none!important}
  .rb-grevealwrap{padding:10px 14px 110px!important}
}

@keyframes rbPunto{0%,80%,100%{transform:translateY(0);opacity:.35}40%{transform:translateY(-7px);opacity:1}}

.rb-punto{width:9px;height:9px;border-radius:50%;background:#fff;animation:rbPunto 1.05s ease-in-out infinite}
.rb-punto:nth-child(2){animation-delay:.14s}
.rb-punto:nth-child(3){animation-delay:.28s}
@media (prefers-reduced-motion:reduce){.rb-punto{animation:none;opacity:.6}}


@media (max-width:1000px) and (orientation:landscape){
  .rb-gwrap{padding:0!important}
  .rb-gframe{width:100vw!important;height:100dvh!important;max-width:none!important;aspect-ratio:auto!important;border-radius:0!important}
  .rb-gframe>div{border-radius:0!important}
  .rb-gtop{position:fixed!important;top:0;left:0;right:0;z-index:72;height:48px!important;padding:0 12px!important}
}
`;
}
export { ClassicLobbyController, initializeLobbyController };
