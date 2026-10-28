/**
 * classic-lobby / game-preferences.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { gameCatalog } from "./game-catalog.js";
import { Qo, ts, ns } from "./demo-actions.js";
import { fs, ps } from "./game-search.js";
function Zc(e, t) {
  return !e || !t || e.includes(`|`) || t.includes(`|`) ? null : `${e}|${t}`;
}
function Qc(e) {
  let t = e.indexOf(`|`);
  return t <= 0 || t === e.length - 1
    ? null
    : {
        vendorCode: e.slice(0, t),
        gameCode: e.slice(t + 1),
      };
}
function $c(e, t) {
  if (!Array.isArray(e)) return [];
  let n = [],
    r = new Set();
  if (t <= 0) return n;
  for (let i of e)
    if (
      typeof i == `string` &&
      !(i.length > 200) &&
      Qc(i) &&
      !r.has(i) &&
      (r.add(i), n.push(i), n.length >= t)
    )
      break;
  return n;
}
function el(e, t) {
  if (!e) return [];
  try {
    return $c(JSON.parse(e), t);
  } catch {
    return [];
  }
}
function tl(e, t, n = 12) {
  return Qc(t) ? [t, ...e.filter((e) => e !== t)].slice(0, n) : [...e];
}
function nl(e, t, n = 300) {
  return Qc(t)
    ? e.includes(t)
      ? e.filter((e) => e !== t)
      : e.length >= n
        ? [...e]
        : [t, ...e]
    : [...e];
}
function rl(e, t, n = 300) {
  let r = new Set(e),
    i = Math.max(0, n - e.length);
  return $c(
    t.filter((e) => !r.has(e)),
    i,
  );
}
function il() {
  try {
    return typeof window > `u` ? null : window.localStorage;
  } catch {
    return null;
  }
}
function al(e, t) {
  let n = il();
  if (!n) return !1;
  try {
    return (n.setItem(e, JSON.stringify(t)), !0);
  } catch {
    return !1;
  }
}
let ol;
function sl(e, t) {
  let n = null,
    r = ol,
    i = !1,
    a = !1,
    o = new Set(),
    s = () => {
      for (let e of o) e();
    };
  return {
    subscribe(t) {
      o.add(t);
      let n = (n) => {
        (n.key !== null && n.key !== e) || ((i = !1), (a = !1), t());
      };
      return (
        typeof window < `u` && window.addEventListener(`storage`, n),
        () => {
          (o.delete(t),
            typeof window < `u` && window.removeEventListener(`storage`, n));
        }
      );
    },
    get: () => {
      if (a) return r;
      let o = il();
      if (!o) return ol;
      let s = null;
      try {
        s = o.getItem(e);
      } catch {
        return ol;
      }
      return ((!i || s !== n) && ((n = s), (r = el(s, t)), (i = !0)), r);
    },
    getServer: () => ol,
    set(o) {
      let c = $c([...o], t);
      (al(e, c) || (a = !0), (n = JSON.stringify(c)), (r = c), (i = !0), s());
    },
  };
}
let cl, ll;
let ul, dl, fl, pl, ml, hl, gl;
let _l, vl;
function yl(e, t) {
  return !e || !t ? 2 ** 53 - 1 : (vl.get(pl(e, t)) ?? 2 ** 53 - 1);
}
function bl(e, t) {
  return (
    yl(e.vendorCode, e.gameCode) - yl(t.vendorCode, t.gameCode) ||
    fs(e.vendorCode ?? ``) - fs(t.vendorCode ?? ``) ||
    e.idx - t.idx
  );
}
function initializeGamePreferences() {
  ol = [];
  cl = sl(`rushy.fav.v1`, 300);
  ll = sl(`rushy.recent.v1`, 12);
  ns();
  ul =
    (e) =>
    async (...t) => {
      let n = ts[`app/favorite-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Qo,
          };
    };
  dl = ul(`toggleFavoriteAction`);
  fl = ul(`mergeFavoritesAction`);
  pl = (e, t) => `${e ?? ``}|${t ?? ``}`;
  ml = new Set(
    gameCatalog
      .filter((e) => e.img !== `` && !/^(https?:)?\/\//i.test(e.img))
      .map((e) => pl(e.vendorCode, e.gameCode)),
  );
  hl = new Set(ps.map(([e, t]) => pl(e, t)));
  gl = [];
  for (let e of gameCatalog) {
    if (!e.vendorCode || !e.gameCode) continue;
    let t = pl(e.vendorCode, e.gameCode);
    ml.has(t) && !hl.has(t) && (gl.push([e.vendorCode, e.gameCode]), hl.add(t));
  }
  _l = [
    ...ps.filter(([e, t]) => ml.has(pl(e, t))),
    ...gl,
    ...ps.filter(([e, t]) => !ml.has(pl(e, t))),
  ];
  vl = new Map(_l.map(([e, t], n) => [pl(e, t), n]));
}
export { Zc, tl, nl, rl, cl, ll, dl, fl, _l, bl, initializeGamePreferences };
