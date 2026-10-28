/**
 * blaze / brand-theme.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
function ln(e) {
  let t = e
    .normalize(`NFD`)
    .replace(/[̀-ͯ]/g, ``)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ``);
  return t === `` ? `tucasino` : t;
}
function un(e) {
  return `${ln(e).toUpperCase()}300`;
}
function dn(e) {
  return {
    marcaNombre: e,
    marcaSlug: ln(e),
    marcaCodigo: un(e),
  };
}
let fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn;
function Cn(e) {
  if (typeof e != `string`) return null;
  let t = Sn.exec(e.trim());
  return !t || t[1] === void 0
    ? null
    : `#${(t[1].length === 3 ? t[1].replace(/./g, (e) => e + e) : t[1]).toLowerCase()}`;
}
function wn(e) {
  let t = parseInt(e.slice(1), 16);
  return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
}
let Tn, En, Dn, On;
function kn(e) {
  let [t, n, r] = wn(e).map(Dn);
  return 0.2126 * t + 0.7152 * n + 0.0722 * r;
}
function An(e, t) {
  let n = kn(e),
    r = kn(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function jn(e, t, n) {
  let r = wn(e),
    i = wn(t);
  return Tn([0, 1, 2].map((e) => r[e] + (i[e] - r[e]) * n));
}
let Mn;
function Nn(e) {
  let t = wn(e).map((e) => 255 - e);
  return Tn(Mn.map((e) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2]));
}
function Pn(e) {
  let [t, n, r] = wn(e).map(Dn),
    i = Math.cbrt(0.4122214708 * t + 0.5363325363 * n + 0.0514459929 * r),
    a = Math.cbrt(0.2119034982 * t + 0.6806995451 * n + 0.1073969566 * r),
    o = Math.cbrt(0.0883024619 * t + 0.2817188376 * n + 0.6299787005 * r),
    s = 0.2104542553 * i + 0.793617785 * a - 0.0040720468 * o,
    c = 1.9779984951 * i - 2.428592205 * a + 0.4505937099 * o,
    l = 0.0259040371 * i + 0.7827717662 * a - 0.808675766 * o,
    u = (Math.atan2(l, c) * 180) / Math.PI;
  return {
    L: s,
    C: Math.hypot(c, l),
    h: u < 0 ? u + 360 : u,
  };
}
function Fn(e) {
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
let In;
function Ln(e) {
  let t = Math.min(1, Math.max(0, Number.isFinite(e.L) ? e.L : 0)),
    n = Number.isFinite(e.C) && e.C > 0 ? e.C : 0,
    r = Number.isFinite(e.h) ? e.h : 0;
  if (n < 1e-5) {
    let e = On(Math.min(1, t ** 3)) * 255;
    return Tn([e, e, e]);
  }
  let i = Fn({
    L: t,
    C: n,
    h: r,
  });
  if (!In(i)) {
    let e = 0,
      a = n;
    for (let n = 0; n < 40; n++) {
      let n = (e + a) / 2;
      In(
        Fn({
          L: t,
          C: n,
          h: r,
        }),
      )
        ? (e = n)
        : (a = n);
    }
    i = Fn({
      L: t,
      C: e,
      h: r,
    });
  }
  return Tn(i.map((e) => On(Math.min(1, Math.max(0, e))) * 255));
}
function Rn(e, t, n) {
  let r = Math.min(1, Math.max(0, e)),
    i = 0,
    a = 1;
  for (let e = 0; e < 32; e++) {
    let e = (i + a) / 2;
    kn(
      Ln({
        L: e,
        C: t,
        h: n,
      }),
    ) < r
      ? (i = e)
      : (a = e);
  }
  let o = Ln({
      L: i,
      C: t,
      h: n,
    }),
    s = Ln({
      L: a,
      C: t,
      h: n,
    });
  return Math.abs(kn(o) - r) <= Math.abs(kn(s) - r) ? o : s;
}
function zn(e, t, n, r = 1 / 0, i = e) {
  if (e === t && i === e) return n;
  let a = ((kn(n) + 0.05) / (kn(t) + 0.05)) * (kn(e) + 0.05) - 0.05,
    o = Pn(i);
  return Rn(a, Math.min(o.C, r), o.h);
}
function Bn(e, t, n = 1 / 0) {
  let r = Pn(e);
  return Ln({
    L: t,
    C: Math.min(r.C, n),
    h: r.h,
  });
}
function Vn(e, t, n, r = 1 / 0) {
  if (n(e)) return e;
  let i = Pn(e).L,
    a = Bn(e, t, r);
  if (!n(a)) return a;
  let o = 0,
    s = 1;
  for (let a = 0; a < 30; a++) {
    let a = (o + s) / 2;
    n(Bn(e, i + (t - i) * a, r)) ? (s = a) : (o = a);
  }
  return Bn(e, i + (t - i) * s, r);
}
function Hn(e) {
  let t = (t) => Math.min(...e.map((e) => An(t, e)));
  return t(`#ffffff`) >= t(`#000000`) ? `#ffffff` : `#000000`;
}
function Un(e) {
  return An(e, `#ffffff`) > An(e, `#000000`);
}
function Wn(e, t) {
  let n = Cn(e) ?? `#0a0a0b`;
  return n === `#0a0a0b` && Un(Cn(t) ?? `#f7f7f8`) ? `#ffffff` : n;
}
function Gn(e) {
  return An(e, `#ffffff`) >= 4.5
    ? `#ffffff`
    : An(e, `#0a0a0b`) >= 4.5
      ? fn
      : An(e, `#ffffff`) >= An(e, `#000000`)
        ? `#ffffff`
        : `#000000`;
}
function Kn(e, t) {
  let n = 0.78,
    r = jn(e, t, n);
  for (; An(r, e) < 4.5 && n < 1;)
    ((n = Math.min(1, n + 0.01)), (r = jn(e, t, n)));
  return r;
}
function deriveBlazeTheme(e) {
  let t = Cn(e?.fondo) ?? `#f7f7f8`,
    n = Cn(e?.tarjeta),
    r = Un(t),
    i = r ? mn : pn,
    a = r ? `#ffffff` : `#000000`,
    o = +!!r,
    s = +!r,
    c = (e) => An(a, e) >= 4.55,
    l = Wn(e?.acento, t),
    u = Gn(l),
    d = jn(l, u === `#ffffff` ? `#ffffff` : `#000000`, 0.14),
    f = Kn(l, u),
    p = {};
  p.bg = t;
  for (let e of hn) p[e] = zn(t, i.bg, i[e]);
  let m = zn(t, i.bg, i.surface),
    h = n ?? m,
    g = !1;
  (n && Un(n) !== r
    ? ((h = zn(t, i.bg, i.surface, 1 / 0, n)), (g = !0))
    : n && !c(n) && ((h = Vn(n, s, c)), (g = !0)),
    (p.surface = h));
  for (let e of gn) p[e] = zn(h, i.surface, i[e]);
  for (let e of vn) p[e] = Vn(p[e], s, c);
  h = p.surface;
  let _ = (e, t) => [
      e.bg,
      ...vn.map((t) => e[t]),
      jn(e.bg, t, xn),
      jn(e.surface, t, xn),
    ],
    v = _(p, l),
    y = (e) => v.every((t) => An(e, t) >= yn);
  for (let e of _n) p[e] = Vn(zn(t, i.bg, i[e], bn), o, y, bn);
  let b = t !== `#f7f7f8` || n !== null,
    x = l !== fn,
    S = {};
  if (
    (x &&
      ((S[`--bb-acento`] = l),
      (S[`--bb-acento-rgb`] = En(l)),
      (S[`--bb-sobre`] = u),
      (S[`--bb-sobre-2`] = f),
      (S[`--bb-acento-hover`] = d)),
    b)
  ) {
    for (let e of Object.keys(p)) S[`--bb-${e}`] = p[e];
    ((S[`--bb-bg-rgb`] = En(p.bg)),
      (S[`--bb-bg-deep-rgb`] = En(p[`bg-deep`])),
      (S[`--bb-surface-rgb`] = En(p.surface)),
      (S[`--bb-text-rgb`] = En(p.text)));
  }
  let C = {};
  if (!r) {
    let e = Nn,
      t = {};
    for (let n of Object.keys(p)) t[n] = e(b ? p[n] : pn[n]);
    let n = (t, n) => {
        C[t] = e(n);
      },
      r = Hn([t.bg, ...vn.map((e) => t[e])]),
      i = +(r === `#ffffff`);
    if (b) {
      let a = (e) => An(r, e) >= 4.55;
      for (let r of [`bg`, ...vn])
        a(t[r]) ||
          (n(
            `--bb-${r}`,
            Vn(t[r], 1 - i, (t) => a(e(e(t)))),
          ),
          (t[r] = e(C[`--bb-${r}`])));
      for (let e of [`bg`, `bg-deep`, `surface`]) {
        let t = C[`--bb-${e}`];
        t && (C[`--bb-${e}-rgb`] = En(t));
      }
    }
    let a = _(t, e(l)),
      o = (e) => a.every((t) => An(e, t) >= yn);
    if (b)
      for (let r of _n)
        o(t[r]) ||
          n(
            `--bb-${r}`,
            Vn(t[r], i, (t) => o(e(e(t))), bn),
          );
    if (x) {
      let t = e(l),
        r = (e) => An(e, t) >= yn;
      if (r(e(u))) r(e(f)) || n(`--bb-sobre-2`, Kn(t, e(u)));
      else {
        let e = Gn(t);
        (n(`--bb-sobre`, e), n(`--bb-sobre-2`, Kn(t, e)));
      }
    }
  }
  return {
    vars: S,
    varsOscuro: C,
    oscuro: r,
    acento: l,
    sobre: u,
    fondo: t,
    superficie: h,
    tarjetaAjustada: g,
  };
}
function initializeBrandTheme() {
  fn = `#0a0a0b`;
  pn = {
    bg: `#f7f7f8`,
    "bg-deep": `#ffffff`,
    sidebar: `#ececef`,
    surface: `#efeff1`,
    "surface-2": `#e5e5e8`,
    divider: `#e4e4e7`,
    border: `#d8d8dc`,
    "border-strong": `#c2c2c7`,
    secondary: `#e1e1e5`,
    "secondary-hover": `#d1d1d6`,
    "slide-gray": `#dcdce0`,
    "stripe-a": `#f4f4f5`,
    "stripe-b": `#ececee`,
    text: `#0a0a0b`,
    "text-1": `#2a2b30`,
    "text-2": `#3a3b40`,
    "text-3": `#6b6c73`,
    "text-4": `#8a8b92`,
  };
  mn = {
    bg: `#0e0f11`,
    "bg-deep": `#0a0a0b`,
    sidebar: `#131316`,
    surface: `#17181b`,
    "surface-2": `#1f2024`,
    divider: `#1c1d21`,
    border: `#2a2b30`,
    "border-strong": `#3a3b40`,
    secondary: `#1e1e22`,
    "secondary-hover": `#2e2e33`,
    "slide-gray": `#232327`,
    "stripe-a": `#141518`,
    "stripe-b": `#1c1d20`,
    text: `#ffffff`,
    "text-1": `#d9d9dc`,
    "text-2": `#c9cad0`,
    "text-3": `#9a9ba3`,
    "text-4": `#7a7b83`,
  };
  hn = [`bg-deep`, `sidebar`];
  gn = [
    `surface-2`,
    `divider`,
    `border`,
    `border-strong`,
    `secondary`,
    `secondary-hover`,
    `slide-gray`,
    `stripe-a`,
    `stripe-b`,
  ];
  _n = [`text`, `text-1`, `text-2`, `text-3`, `text-4`];
  vn = [
    `bg-deep`,
    `sidebar`,
    `surface`,
    `surface-2`,
    `secondary`,
    `secondary-hover`,
    `slide-gray`,
    `stripe-a`,
    `stripe-b`,
  ];
  yn = 4.5;
  bn = 0.03;
  xn = 0.12;
  Sn = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i;
  Tn = (e) =>
    `#${e
      .map((e) =>
        Math.min(255, Math.max(0, Math.round(e)))
          .toString(16)
          .padStart(2, `0`),
      )
      .join(``)}`;
  En = (e) => wn(e).join(`,`);
  Dn = (e) => {
    let t = e / 255;
    return t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
  };
  On = (e) => (e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055);
  Mn = [
    [-0.574, 1.43, 0.144],
    [0.426, 0.43, 0.144],
    [0.426, 1.43, -0.856],
  ];
  In = (e) => e.every((e) => e >= -1e-7 && e <= 1.0000001);
}
export { dn, fn, Cn, deriveBlazeTheme, initializeBrandTheme };
