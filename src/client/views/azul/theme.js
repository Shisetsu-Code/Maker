/**
 * azul / theme.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import OnData from "../../catalogs/catalog-6cea04ac9fbe.json";
import { Ue, nt, rt, yt } from "./brand-colors.js";
import { Ht, Ut } from "./mobile-controller.js";
import { Wt, upsertStyle, applyCssVariables } from "./rendering.js";
let tn, nn, rn, an, on;
function sn(e) {
  let t = an(e[0]),
    n = an(e[1]),
    r = an(e[2]),
    i = Math.cbrt(0.4122214708 * t + 0.5363325363 * n + 0.0514459929 * r),
    a = Math.cbrt(0.2119034982 * t + 0.6806995451 * n + 0.1073969566 * r),
    o = Math.cbrt(0.0883024619 * t + 0.2817188376 * n + 0.6299787005 * r),
    s = 0.2104542553 * i + 0.793617785 * a - 0.0040720468 * o,
    c = 1.9779984951 * i - 2.428592205 * a + 0.4505937099 * o,
    l = 0.0259040371 * i + 0.7827717662 * a - 0.808675766 * o,
    u = Math.hypot(c, l),
    d = (Math.atan2(l, c) * 180) / Math.PI;
  return {
    L: s,
    C: u,
    h: d < 0 ? d + 360 : d,
  };
}
function cn(e) {
  let t = (e.h * Math.PI) / 180,
    n = e.C * Math.cos(t),
    r = e.C * Math.sin(t),
    i = (e.L + 0.3963377774 * n + 0.2158037573 * r) ** 3,
    a = (e.L - 0.1055613458 * n - 0.0638541728 * r) ** 3,
    o = (e.L - 0.0894841775 * n - 1.291485548 * r) ** 3;
  return [
    4.0767416621 * i - 3.3077115913 * a + 0.2309699292 * o,
    -1.2684380046 * i + 2.6097574011 * a - 0.3413193965 * o,
    -0.0041960863 * i - 0.7034186147 * a + 1.707614701 * o,
  ];
}
let ln;
function un(e) {
  let t = cn(e);
  if (!ln(t)) {
    let n = 0,
      r = e.C;
    for (let t = 0; t < 40; t++) {
      let t = (n + r) / 2;
      ln(
        cn({
          L: e.L,
          C: t,
          h: e.h,
        }),
      )
        ? (n = t)
        : (r = t);
    }
    t = cn({
      L: e.L,
      C: n,
      h: e.h,
    });
  }
  let n = (e) => {
    let t = Math.round(on(Math.min(1, Math.max(0, e))) * 255);
    return t < 0 ? 0 : t > 255 ? 255 : t;
  };
  return [n(t[0]), n(t[1]), n(t[2])];
}
let dn;
function fn(e) {
  if (typeof e != `string`) return null;
  let t = dn.exec(e.trim());
  if (!t || t[1] === void 0) return null;
  let n = t[1].length === 3 ? t[1].replace(/./g, (e) => e + e) : t[1],
    r = parseInt(n, 16);
  return [(r >> 16) & 255, (r >> 8) & 255, r & 255];
}
function pn(e) {
  let t = e % 360;
  return (t > 180 && (t -= 360), t <= -180 && (t += 360), t);
}
function mn(e, t, n) {
  let r = fn(nn[n]);
  if (!r) throw Error(`tema-azul: BASE_AZUL.${n} no es un color`);
  let i = sn(r),
    a = sn(t);
  return {
    token: e,
    perilla: n,
    s: a.L >= i.L ? (a.L - i.L) / (1 - i.L) : (a.L - i.L) / i.L,
    ratio: a.C / i.C,
    dh: pn(a.h - i.h),
  };
}
function hn(e, t) {
  let n = e.s >= 0 ? t.L + e.s * (1 - t.L) : t.L * (1 + e.s),
    r = t.C * e.ratio,
    i = (t.h + e.dh) % 360;
  return (
    i < 0 && (i += 360),
    un({
      L: Math.min(1, Math.max(0, n)),
      C: Number.isFinite(r) && r > 0 ? r : 0,
      h: Number.isFinite(i) ? i : 0,
    })
  );
}
let gn, _n, vn, yn, bn;
function xn(e) {
  return nt(yn(hn(vn.fondo, bn(e)))).hex;
}
function Sn(e) {
  return rt(yn(hn(vn.tarjeta, bn(e)))).hex;
}
function Cn(e) {
  let t = (t) => yn(fn(e?.[t]) ?? fn(nn[t])),
    n = (e) => typeof e == `string` && e.trim().toLowerCase() === `auto`,
    r = t(`marca`);
  return {
    marca: r,
    fondo: n(e?.fondo) ? xn(r) : t(`fondo`),
    tarjeta: n(e?.tarjeta) ? Sn(r) : t(`tarjeta`),
  };
}
function wn(e) {
  let t = Cn(e),
    n = {};
  for (let e of [`marca`, `fondo`, `tarjeta`]) n[e] = sn(fn(t[e]));
  let r = {};
  for (let e of gn) {
    let t = hn(e, n[e.perilla]);
    r[`--rc-${e.token}`] = `${t[0]},${t[1]},${t[2]}`;
  }
  return r;
}
let Tn;
function En(e, t) {
  let n = `${e}|${t}`;
  if (Tn?.clave === n) return Tn.t;
  let r = ``;
  try {
    r =
      yt({
        ...Ue,
        p: e,
        f: t,
        t: `auto`,
      }).vars[`--dm-t`] ?? ``;
  } catch {
    r = ``;
  }
  return (
    (Tn = {
      clave: n,
      t: r,
    }),
    r
  );
}
function Dn(e) {
  let t = e.marca.toLowerCase(),
    n = e.fondo.toLowerCase(),
    r = e.tarjeta.toLowerCase(),
    i = n === nn.fondo,
    a = r === nn.tarjeta || r === En(t, n);
  return {
    marca: t,
    fondo: i ? tn : n,
    tarjeta: a ? tn : r,
  };
}
let On, kn, An;
function jn(e) {
  let t = /^\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*$/.exec(e ?? ``);
  if (!t) return null;
  let n = [Number(t[1]), Number(t[2]), Number(t[3])];
  return n.every((e) => e <= 255) ? n : null;
}
function Mn(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
function Nn(e, t, n) {
  let r = Mn(e.runs),
    i = e.glifo === `blanco` ? kn : n,
    a = e.disco ? t : i,
    o = new Uint8ClampedArray(e.ancho * e.alto * 4),
    s = 0;
  for (let e = 0; e + 2 < r.length; e += 3) {
    let t = r[e],
      n = r[e + 1],
      c = r[e + 2] / 255,
      l = Math.round(a[0] + c * (i[0] - a[0])),
      u = Math.round(a[1] + c * (i[1] - a[1])),
      d = Math.round(a[2] + c * (i[2] - a[2]));
    for (let e = 0; e < t && s < o.length; e++)
      ((o[s++] = l), (o[s++] = u), (o[s++] = d), (o[s++] = n));
  }
  if (s !== o.length)
    throw Error(`iconos-azul: el mapa de tintas no cubre ${e.ancho}×${e.alto}`);
  return o;
}
function Pn(e, t) {
  try {
    let n = document.createElement(`canvas`);
    ((n.width = e.ancho), (n.height = e.alto));
    let r = n.getContext(`2d`);
    if (!r) return null;
    r.putImageData(new ImageData(t, e.ancho, e.alto), 0, 0);
    let i = n.toDataURL(`image/png`);
    return (
      (n.width = 0),
      (n.height = 0),
      i.startsWith(`data:image/png`) ? i : null
    );
  } catch {
    return null;
  }
}
let Fn;
function In(e, t) {
  let n = `${e.join(`,`)}|${t.join(`,`)}`,
    r = Fn.get(n);
  if (r) return (Fn.delete(n), Fn.set(n, r), r);
  let i = {};
  for (let [n, r] of Object.entries(On)) {
    let a = Pn(r, Nn(r, e, t));
    a && (i[n] = a);
  }
  let a = Object.freeze(i);
  for (Fn.set(n, a); Fn.size > 6;) Fn.delete(Fn.keys().next().value);
  return a;
}
let getLayoutMode, Rn;
function zn(e) {
  let t = Rn[e],
    n = Array.from(document.head.querySelectorAll(`link[data-azul-fuente]`)),
    r = (e, t) => e.rel === t.rel && e.getAttribute(`href`) === t.href;
  for (let i of t) {
    if (n.some((e) => r(e, i))) continue;
    let t = document.createElement(`link`);
    ((t.rel = i.rel),
      (t.href = i.href),
      (t.dataset.azulFuente = e),
      document.head.appendChild(t));
  }
  for (let e of n) t.some((t) => r(e, t)) || e.remove();
}
let Bn, Vn;
function applyLayoutStyles(e) {
  (upsertStyle(`rc-prototipo`, e === `celular` ? Ut : Ht),
    upsertStyle(`rc-logo-marca`, Vn),
    zn(e));
}
let Un, Wn, Gn, Kn;
function qn(e) {
  if (typeof e != `string`) return null;
  let t = e.trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/.test(t)) return t;
  let n = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(t);
  return n ? `#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}` : null;
}
function applyTheme() {
  let e, t;
  try {
    let n = Dn(Wn);
    ((e = wn(n)), (t = Cn(n).marca));
  } catch (e) {
    console.error(`[azul] derivarAzul failed for`, Wn, e);
    return;
  }
  ((Gn = {
    ...Wt,
    ...e,
  }),
    (Kn = t),
    applyCssVariables(Gn));
}
function applyThemeVariables(e) {
  let t = {
      ...Wn,
    },
    n = !1;
  for (let r of Object.keys(Un)) {
    let i = qn(e[Un[r]]);
    i !== null && i !== t[r] && ((t[r] = i), (n = !0));
  }
  return n ? ((Wn = t), applyTheme(), !0) : !1;
}
function Xn(e) {
  if (e.imgOn === !1) return {};
  let t = jn(Gn[`--rc-tarjeta`]),
    n = jn(Gn[`--rc-gris`]);
  return !t ||
    !n ||
    (Gn[`--rc-tarjeta`] === Wt[`--rc-tarjeta`] &&
      Gn[`--rc-gris`] === Wt[`--rc-gris`])
    ? {}
    : {
        ...In(t, n),
      };
}
function Zn(e) {
  let t = parseInt(e.slice(1), 16),
    n = ((t >> 16) & 255) / 255,
    r = ((t >> 8) & 255) / 255,
    i = (t & 255) / 255,
    a = Math.max(n, r, i),
    o = Math.min(n, r, i),
    s = a - o,
    c = (a + o) / 2;
  if (s === 0) return [0, 0];
  let l = s / (1 - Math.abs(2 * c - 1)),
    u =
      a === n ? ((r - i) / s) % 6 : a === r ? (i - n) / s + 2 : (n - r) / s + 4;
  return ((u *= 60), [u < 0 ? u + 360 : u, l]);
}
let Qn, $n, er;
function tr(e) {
  if (e.imgOn === !1 || Kn === nn.marca) {
    upsertStyle(`rc-arte-aproximado`, ``);
    return;
  }
  let [t, n] = Zn(Kn),
    r = Math.round(t - Qn),
    i = (n / $n).toFixed(2);
  upsertStyle(
    `rc-arte-aproximado`,
    `${er}{filter:hue-rotate(${r}deg) saturate(${i})}`,
  );
}
function initializeTheme() {
  tn = `auto`;
  nn = {
    marca: `#183deb`,
    fondo: `#010028`,
    tarjeta: `#00024f`,
  };
  rn = [
    [`fondo`, [1, 0, 40], `fondo`],
    [`tarjeta`, [0, 2, 79], `tarjeta`],
    [`marca`, [24, 61, 235], `marca`],
    [`marca-luz`, [48, 86, 246], `marca`],
    [`acento`, [66, 133, 244], `marca`],
    [`borde`, [35, 72, 166], `marca`],
    [`hover`, [35, 55, 158], `marca`],
    [`tinta-1`, [130, 175, 255], `marca`],
    [`tinta-2`, [120, 170, 255], `marca`],
    [`tinta-3`, [170, 195, 255], `marca`],
    [`deporte`, [38, 77, 142], `marca`],
    [`velo`, [3, 6, 90], `tarjeta`],
    [`gris`, [178, 179, 202], `tarjeta`],
    [`mesa`, [0, 0, 16], `fondo`],
  ];
  an = (e) => {
    let t = e / 255;
    return t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
  };
  on = (e) => (e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055);
  ln = (e) => e.every((e) => e >= -1e-7 && e <= 1.0000001);
  dn = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i;
  gn = rn.map(([e, t, n]) => mn(e, t, n));
  _n = (e) => {
    let t = rn.find(([t]) => t === e);
    if (!t) throw Error(`tema-azul: falta el token ${e}`);
    return t[1];
  };
  vn = {
    fondo: mn(`fondo`, _n(`fondo`), `marca`),
    tarjeta: mn(`tarjeta`, _n(`tarjeta`), `marca`),
  };
  yn = (e) => `#${e.map((e) => e.toString(16).padStart(2, `0`)).join(``)}`;
  bn = (e) => sn(fn(e) ?? fn(nn.marca));
  Tn = null;
  On = OnData;
  kn = [255, 255, 255];
  An = Object.freeze(Object.keys(On));
  Fn = new Map();
  getLayoutMode = () => (window.innerWidth < 768 ? `celular` : `escritorio`);
  Rn = {
    escritorio: [
      {
        rel: `preconnect`,
        href: `https://fonts.googleapis.com`,
      },
      {
        rel: `stylesheet`,
        href: `/assets/external/fonts.googleapis.com/css2.ba69b2d75eb2.css`,
      },
    ],
    celular: [
      {
        rel: `stylesheet`,
        href: `/assets/external/fonts.googleapis.com/css2.7b28f2dc076e.css`,
      },
    ],
  };
  Bn = `#rc-logo-marca`;
  Vn = `#dc-root img[src$="${Bn}"]{object-fit:contain;object-position:left center}#dc-root footer img[src$="${Bn}"]{object-position:center}`;
  Un = {
    marca: `--dm-p`,
    fondo: `--dm-f`,
    tarjeta: `--dm-t`,
  };
  Wn = {
    ...nn,
  };
  Gn = {
    ...Wt,
  };
  Kn = nn.marca;
  [Qn, $n] = Zn(nn.marca);
  er = [`hero-bg.`, `bono-bg.`, `dep-`]
    .flatMap((e) => [
      `#dc-root img[src*="azul/assets/${e}"]`,
      `#dc-root [style*="azul/assets/${e}"]`,
    ])
    .join(`,`);
}
export {
  An,
  jn,
  In,
  getLayoutMode,
  Bn,
  applyLayoutStyles,
  Gn,
  applyTheme,
  applyThemeVariables,
  Xn,
  tr,
  initializeTheme,
};
