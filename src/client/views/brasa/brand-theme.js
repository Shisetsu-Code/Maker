/**
 * brasa / brand-theme.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { hexToHsl, hslToHex } from "./colors.js";
import { tt, upsertStyle } from "./rendering.js";
let dt, ft, pt, mt, ht, gt, _t, vt, z, yt, bt;
let xt, St, Ct, wt, Tt, Et;
function Dt(e) {
  if (typeof e != `string`) return null;
  let t = Et.exec(e.trim());
  return !t || t[1] === void 0
    ? null
    : `#${(t[1].length === 3 ? t[1].replace(/./g, (e) => e + e) : t[1]).toLowerCase()}`;
}
function Ot(e) {
  let t = parseInt(e.slice(1), 16);
  return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
}
let kt, At, jt, Mt;
function Nt(e) {
  let [t, n, r] = Ot(e).map(jt);
  return 0.2126 * t + 0.7152 * n + 0.0722 * r;
}
function Pt(e, t) {
  let n = Nt(e),
    r = Nt(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ft(e, t, n) {
  let r = Ot(e),
    i = Ot(t);
  return kt([0, 1, 2].map((e) => r[e] + (i[e] - r[e]) * n));
}
function It(e) {
  let [t, n, r] = Ot(e).map(jt),
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
function Lt(e) {
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
let Rt;
function zt(e) {
  let t = Math.min(1, Math.max(0, Number.isFinite(e.L) ? e.L : 0)),
    n = Number.isFinite(e.C) && e.C > 0 ? e.C : 0,
    r = Number.isFinite(e.h) ? e.h : 0;
  if (n < 1e-5) {
    let e = Mt(Math.min(1, t ** 3)) * 255;
    return kt([e, e, e]);
  }
  let i = Lt({
    L: t,
    C: n,
    h: r,
  });
  if (!Rt(i)) {
    let e = 0,
      a = n;
    for (let n = 0; n < 40; n++) {
      let n = (e + a) / 2;
      Rt(
        Lt({
          L: t,
          C: n,
          h: r,
        }),
      )
        ? (e = n)
        : (a = n);
    }
    i = Lt({
      L: t,
      C: e,
      h: r,
    });
  }
  return kt(i.map((e) => Mt(Math.min(1, Math.max(0, e))) * 255));
}
function Bt(e, t, n) {
  let r = Math.min(1, Math.max(0, e)),
    i = 0,
    a = 1;
  for (let e = 0; e < 32; e++) {
    let e = (i + a) / 2;
    Nt(
      zt({
        L: e,
        C: t,
        h: n,
      }),
    ) < r
      ? (i = e)
      : (a = e);
  }
  let o = zt({
      L: i,
      C: t,
      h: n,
    }),
    s = zt({
      L: a,
      C: t,
      h: n,
    });
  return Math.abs(Nt(o) - r) <= Math.abs(Nt(s) - r) ? o : s;
}
function Vt(e, t, n = 1 / 0) {
  let r = It(e);
  return zt({
    L: t,
    C: Math.min(r.C, n),
    h: r.h,
  });
}
function Ht(e, t, n, r = 1 / 0) {
  if (n(e)) return e;
  let i = It(e).L,
    a = Vt(e, t, r);
  if (!n(a)) return a;
  let o = 0,
    s = 1;
  for (let a = 0; a < 30; a++) {
    let a = (o + s) / 2;
    n(Vt(e, i + (t - i) * a, r)) ? (s = a) : (o = a);
  }
  return Vt(e, i + (t - i) * s, r);
}
function Ut(e, t, n) {
  if (n(e)) return e;
  let { h: r, s: i, l: a } = hexToHsl(e),
    o = t ? 100 : 0;
  if (!n(hslToHex(r, i, o))) return hslToHex(r, i, o);
  let s = a,
    c = o;
  for (let e = 0; e < 30; e++) {
    let e = (s + c) / 2;
    n(hslToHex(r, i, e)) ? (c = e) : (s = e);
  }
  let l = hslToHex(r, i, c),
    u = t ? 0.25 : -0.25;
  for (let e = c; !n(l) && e >= 0 && e <= 100; e += u) l = hslToHex(r, i, e);
  return l;
}
let Wt;
function Gt(e) {
  return Pt(e, `#ffffff`) > Pt(e, `#000000`);
}
function Kt(e, t, n, r, i) {
  let a = (Nt(n) + 0.05) / (Nt(t) + 0.05),
    o = Nt(e) + 0.05;
  return Bt((r ? o * a : o / a) - 0.05, i.C, i.h);
}
function deriveBrasaTheme(e) {
  let t = Dt(e?.acento) ?? `#ff5b14`,
    n = Dt(e?.fondo) ?? `#000000`,
    r = Dt(e?.tarjeta),
    i = n === ft,
    a = Gt(n),
    o = a ? `#ffffff` : `#000000`,
    s = +!!a,
    c = 1 - s,
    l = (e) => Pt(o, e) >= 4.55,
    u = It(dt),
    d = It(t),
    f = (e) => {
      if (t === `#ff5b14`) return e;
      let n = It(e),
        r = u.C > 0 ? (n.C * d.C) / u.C : 0;
      return Bt(Nt(e), r, (n.h + d.h - u.h + 360) % 360);
    },
    p = It(n),
    m = (e = 1 / 0) => ({
      L: 0,
      C: Math.min(p.C, e),
      h: p.h,
    }),
    h = (e, t = 1 / 0) => (i ? f(e) : Kt(n, ft, e, a, m(t))),
    g = {};
  for (let e of Object.keys(_t)) g[e] = h(_t[e]);
  g.fondo = n;
  let _ = r ?? h(`#131110`),
    v = !1;
  r && Gt(r) !== a
    ? ((_ = Kt(n, ft, pt, a, It(r))), (v = !0))
    : r && !l(r) && ((_ = Ht(r, c, l)), (v = !0));
  for (let e of Object.keys(vt))
    g[e] = r ? Kt(_, pt, vt[e], a, It(r)) : h(vt[e]);
  g.tarjeta = _;
  for (let e of Tt) g[e] = Ht(g[e], c, l);
  _ = g.tarjeta;
  let y = [...St, ...Ct].map((e) => g[e]),
    b = [...y, g.tinta],
    x = Ut(t, a, (e) => Wt(e, b) >= mt),
    ee = wt.map((e) => Ft(g[e], x, 0.14)),
    S = (e, t) => Ut(Ft(x, o, e), a, (e) => Wt(e, t) >= mt),
    C = Ut(x, a, (e) => Wt(e, [...b, g.linea]) >= mt),
    w = Ft(x, o, gt.hover),
    te = S(gt.claro, [...y, ...ee]),
    ne = S(gt.palido, [...y, ...ee]),
    T = (e, t) => Ht(h(z[e], ht), s, (e) => Wt(e, t) >= mt, i ? 1 / 0 : ht),
    re = a ? `#000000` : `#ffffff`,
    E = Ft(g.cabecera, re, 0.4);
  g.texto = T(`texto`, [...y, ...ee, g.tinta, g.linea, E]);
  let ie = Ut(x, !a, (e) => Wt(e, [g.texto, g.blanco]) >= mt),
    ae = Ft(g[`tarjeta-2`], g.texto, 0.1);
  ((g[`texto-2`] = T(`texto-2`, [...y, E, ae])),
    (g[`texto-anillo`] = T(`texto-anillo`, [...y, E, ae])),
    (g[`texto-3`] = T(`texto-3`, [...y, ...ee, g.linea])),
    (g[`texto-4`] = T(`texto-4`, y)),
    (g[`texto-5`] = T(`texto-5`, y)));
  let oe = (e) => Pt(e, g.texto) >= mt;
  g[`inverso-2`] = Ht(
    i ? f(yt[`inverso-2`]) : Kt(g.texto, z.texto, yt[`inverso-2`], a, m(ht)),
    c,
    oe,
    i ? 1 / 0 : ht,
  );
  let D = It(yt[`inverso-neg`]);
  ((g[`inverso-neg`] = Ht(
    Kt(g.texto, z.texto, yt[`inverso-neg`], a, D),
    c,
    oe,
  )),
    (g.peligro = Ht(bt, s, (e) => Wt(e, [...y, ...ee]) >= mt)));
  let O = {};
  if (t !== `#ff5b14` || n !== `#000000` || r !== null) {
    ((O[`--br-p`] = x),
      (O[`--br-p-rgb`] = At(x)),
      (O[`--br-p-hover`] = w),
      (O[`--br-p-claro`] = te),
      (O[`--br-p-palido`] = ne),
      (O[`--br-p-linea`] = C),
      (O[`--br-p-crema`] = ie));
    for (let e of Object.keys(g)) O[`--br-${e}`] = g[e];
    for (let [e, t] of Object.entries(xt)) O[`--br-${e}`] = At(g[t]);
    O[`--br-sombra-rgb`] = At(re);
  }
  return {
    vars: O,
    oscuro: a,
    sigueMarca: i,
    acento: x,
    acentoAjustado: x !== t,
    fondo: n,
    superficie: _,
    tarjetaAjustada: v,
    texto: g.texto,
    tinta: g.tinta,
  };
}
let Jt, Yt, Xt;
function Zt(e) {
  let t = ``;
  return (
    Gt(e.tinta) || (t += `.${Jt}{filter:brightness(0) invert(1)}`),
    e.oscuro ||
      (t += `.${Yt}{filter:invert(1) hue-rotate(180deg)}.${Xt}{filter:brightness(0)}`),
    t
  );
}
function Qt(e) {
  let t = e.logoPropio || !e.nombreDeLaCasa,
    n = e.nombreDeLaCasa || !e.isoRecibido;
  return {
    isoMarca: t,
    isoTinta: t && n ? Jt : ``,
  };
}
function initializeBrandTheme() {
  dt = `#ff5b14`;
  ft = `#000000`;
  pt = `#131110`;
  mt = 4.5;
  ht = 0.03;
  gt = {
    hover: 0.18,
    claro: 0.26,
    palido: 0.54,
  };
  _t = {
    fondo: `#000000`,
    campo: `#0a0908`,
    hondo: `#0c0b0a`,
    barra: `#0e0d0c`,
    chat: `#0f0d0c`,
    "raya-b": `#0f0e0d`,
    tinta: `#121110`,
    blanco: `#ffffff`,
  };
  vt = {
    tarjeta: `#131110`,
    "tarjeta-2": `#141210`,
    cabecera: `#161210`,
    superficie: `#161412`,
    "raya-a": `#171513`,
    "fila-hover": `#1a1816`,
    "raya-vivo": `#1c1916`,
    burbuja: `#1c1917`,
    "fila-linea": `#1c1a18`,
    "superficie-3": `#1e1b18`,
    linea: `#2b2724`,
    "linea-fuerte": `#3a3530`,
    "linea-hover": `#4a433d`,
    tenue: `#4a3f36`,
    gris: `#6a5f52`,
  };
  z = {
    texto: `#f3e9d8`,
    "texto-2": `#d8cdbd`,
    "texto-anillo": `#c9b89e`,
    "texto-3": `#a89e92`,
    "texto-4": `#7d746a`,
    "texto-5": `#5e564e`,
  };
  yt = {
    "inverso-2": `#6a5f52`,
    "inverso-neg": `#8a3a10`,
  };
  bt = `#ff7a5c`;
  Object.freeze({
    ..._t,
    ...vt,
    ...z,
    ...yt,
    peligro: bt,
  });
  xt = Object.freeze({
    "hondo-rgb": `hondo`,
    "tinta-rgb": `tinta`,
    "tarjeta-rgb": `tarjeta`,
    "superficie-rgb": `superficie`,
    "texto-rgb": `texto`,
    "blanco-rgb": `blanco`,
  });
  St = [`fondo`, `campo`, `hondo`, `barra`, `chat`, `raya-b`];
  Ct = [
    `tarjeta`,
    `tarjeta-2`,
    `cabecera`,
    `superficie`,
    `raya-a`,
    `fila-hover`,
    `raya-vivo`,
    `burbuja`,
    `superficie-3`,
  ];
  wt = [`fondo`, `hondo`, `tarjeta`, `tarjeta-2`];
  Tt = [...St.filter((e) => e !== `fondo`), ...Ct, `tinta`, `linea`];
  Et = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i;
  kt = (e) =>
    `#${e
      .map((e) =>
        Math.min(255, Math.max(0, Math.round(e)))
          .toString(16)
          .padStart(2, `0`),
      )
      .join(``)}`;
  At = (e) => Ot(e).join(`,`);
  jt = (e) => {
    let t = e / 255;
    return t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
  };
  Mt = (e) => (e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055);
  Rt = (e) => e.every((e) => e >= -1e-7 && e <= 1.0000001);
  Wt = (e, t) => Math.min(...t.map((t) => Pt(e, t)));
  Jt = `br-iso-tinta`;
  Yt = `br-logo-casa`;
  Xt = `br-logo-texto`;
  for (let e of tt) {
    let t = document.createElement(`link`);
    ((t.rel =
      e.includes(`/css2?`) ||
      e.includes(`/assets/external/fonts.googleapis.com/css2.`)
        ? `stylesheet`
        : `preconnect`),
      (t.href = e),
      document.head.appendChild(t));
  }
  (upsertStyle(
    `br-prototipo`,
    `/* «RushyBet Lobby Pro.dc.html»: <helmet> style and pseudo-class rules */
html,body{margin:0}body{background-color:var(--br-fondo,#000000);font-family:var(--fd,Oswald),sans-serif;color:var(--br-texto,#F3E9D8)}a{color:var(--br-p-claro,#FF8A4C)}a:hover{color:var(--br-texto,#F3E9D8)}::selection{background:var(--br-p,#FF5B14);color:var(--br-tinta,#121110)}*::-webkit-scrollbar{display:none}input::placeholder{color:var(--br-texto-4,#7D746A)}@keyframes rbMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes rbSpin{to{transform:rotate(360deg)}}@keyframes rbRowIn{from{opacity:0;transform:perspective(700px) rotateX(-75deg) translateY(-10px);background:rgba(var(--br-p-rgb,255,91,20),.28)}60%{background:rgba(var(--br-p-rgb,255,91,20),.14)}to{opacity:1;transform:none;background:transparent}}@keyframes rbCmdIn{0%{opacity:0;transform:translate(var(--dx,0),var(--dy,0)) scale(.14) rotateX(-70deg);filter:blur(10px)}45%{opacity:1;filter:blur(0)}72%{transform:translate(0,0) scale(1.03) rotateX(5deg)}88%{transform:scale(.995) rotateX(-1deg)}100%{opacity:1;transform:none}}@keyframes rbCmdOut{to{opacity:0;transform:translate(var(--dx,0),var(--dy,0)) scale(.18) rotateX(-55deg);filter:blur(8px)}}@keyframes rbBackIn{from{opacity:0;backdrop-filter:blur(0)}to{opacity:1;backdrop-filter:blur(12px)}}@keyframes rbBackOut{from{opacity:1}to{opacity:0}}@keyframes rbShock{0%{transform:translate(-50%,-50%) scale(0);opacity:1}100%{transform:translate(-50%,-50%) scale(1);opacity:0}}@keyframes rbCmdRow{from{opacity:0;transform:perspective(600px) rotateX(-85deg) translateY(-10px)}to{opacity:1;transform:none}}@keyframes rbSweep{from{transform:translateX(-150%) skewX(-20deg)}to{transform:translateX(400%) skewX(-20deg)}}@keyframes rbOrbit{from{transform:rotateX(-14deg) rotateY(0deg)}to{transform:rotateX(-14deg) rotateY(-360deg)}}@keyframes rbOrbitIn{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}@keyframes rbFadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@keyframes rbIconIn{from{opacity:0;transform:rotate(-200deg) scale(.3)}to{opacity:1;transform:none}}@keyframes rbLiqIn{0%{left:var(--sl);top:var(--st);width:var(--sw);height:var(--sh);border-radius:12px;background:var(--br-superficie,#161412);border-color:var(--br-linea,#2B2724);box-shadow:0 0 0 rgba(0,0,0,0)}30%{border-radius:44px 26px 52px 30px/30px 52px 26px 44px}55%{border-color:var(--br-p,#FF5B14)}62%{height:calc(var(--eh) * 1.035)}80%{border-radius:20px 30px 22px 28px/28px 22px 30px 20px;height:calc(var(--eh) * .99)}100%{left:var(--el);top:var(--et);width:var(--ew);height:var(--eh);border-radius:24px;background:var(--br-superficie-3,#1E1B18);border-color:var(--br-linea-fuerte,#3A3530)}}@keyframes rbLiqOut{0%{left:var(--el);top:var(--et);width:var(--ew);height:var(--eh);border-radius:24px;background:var(--br-superficie-3,#1E1B18)}40%{border-radius:40px 22px 46px 28px/28px 46px 22px 40px;border-color:var(--br-p,#FF5B14)}100%{left:var(--sl);top:var(--st);width:var(--sw);height:var(--sh);border-radius:12px;background:var(--br-superficie,#161412);border-color:var(--br-linea,#2B2724)}}@keyframes rbRowIn{from{padding:10px 12px}to{padding:16px 18px}}@keyframes rbRowOut{from{padding:16px 18px}to{padding:10px 12px}}@keyframes rbTxtIn{from{font-size:13px}to{font-size:17px}}@keyframes rbTxtOut{from{font-size:17px}to{font-size:13px}}@keyframes rbReveal{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}@keyframes rbHide{to{opacity:0}}@keyframes ucUm{from{opacity:0;transform:translateY(-10px) scale(.9)}to{opacity:1;transform:none}}@keyframes ucItem{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:none}}@keyframes ucChatIn{0%{clip-path:circle(28px at calc(100% - 30px) calc(100% + 46px));opacity:.6}100%{clip-path:circle(150% at calc(100% - 30px) calc(100% + 46px));opacity:1}}@keyframes ucChatOut{0%{clip-path:circle(150% at calc(100% - 30px) calc(100% + 46px));opacity:1}100%{clip-path:circle(28px at calc(100% - 30px) calc(100% + 46px));opacity:0}}@keyframes ucMsgL{from{opacity:0;transform:translate(-16px,10px) scale(.9)}to{opacity:1;transform:none}}@keyframes ucMsgR{from{opacity:0;transform:translate(16px,10px) scale(.9)}to{opacity:1;transform:none}}@keyframes ucDot{0%,60%,100%{transform:translateY(0);opacity:.35}30%{transform:translateY(-5px);opacity:1}}@keyframes ucBlob{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-40px,18px) scale(1.25)}}@keyframes ucBlob2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-10px) scale(.85)}}@keyframes ucSpin{to{transform:rotate(360deg)}}@keyframes ucPing{0%{transform:scale(1);opacity:.55}100%{transform:scale(1.9);opacity:0}}@keyframes ucFade{from{opacity:0}to{opacity:1}}@keyframes ucSheet{from{opacity:0;transform:translateY(28px) scale(.96)}to{opacity:1;transform:none}}@keyframes ucTease{from{opacity:0;transform:translateX(14px) scale(.9)}to{opacity:1;transform:none}}@keyframes ucRise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@keyframes rbPulse{0%{box-shadow:0 0 0 0 rgba(var(--br-p-rgb,255,91,20),.7)}70%{box-shadow:0 0 0 9px rgba(var(--br-p-rgb,255,91,20),0)}100%{box-shadow:0 0 0 0 rgba(var(--br-p-rgb,255,91,20),0)}}
.br0-0:hover{border-color:var(--br-p,#FF5B14) !important}
.br0-1:hover{border-color:var(--br-linea-hover,#4A433D) !important}
.br0-2:hover{background:var(--br-p-hover,#FF7A3D) !important}
.br0-3:hover{background:var(--br-superficie-3,#1E1B18) !important}
.br0-4:hover{border-color:var(--br-texto,#F3E9D8) !important}
.br0-5:hover{color:var(--br-texto,#F3E9D8) !important}
.br0-6:hover{background:var(--br-linea,#2B2724) !important}
.br0-7:hover{background:var(--br-fila-hover,#1A1816) !important}
.br0-8:hover{border-color:var(--br-p,#FF5B14) !important;transform:translateY(-4px) !important}
.br0-9:hover{transform:translateY(-4px) !important;border-color:var(--br-p,#FF5B14) !important}
.br0-a:hover{transform:scale(1.06) !important}
.br0-b:hover{transform:translateY(-4px) !important}
.br0-c:focus{border-color:var(--br-p,#FF5B14) !important}
.br0-d:hover{transform:scale(1.07) !important}
`,
  ),
    upsertStyle(
      `br-logo`,
      `.${Jt}{filter:brightness(0)}.br-r-linea path{vector-effect:non-scaling-stroke}`,
    ));
}
export { dt, ft, Dt, deriveBrasaTheme, Yt, Xt, Zt, Qt, initializeBrandTheme };
