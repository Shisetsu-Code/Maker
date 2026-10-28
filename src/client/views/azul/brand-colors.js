/**
 * azul / brand-colors.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
let Se;
function Ce(e) {
  return typeof e == `string` && Se.test(e.trim());
}
function we(e) {
  let t = Se.exec(e.trim());
  if (!t || t[1] === void 0)
    throw Error(`color: se esperaba #rrggbb y llegó ${JSON.stringify(e)}`);
  return `#${t[1].toLowerCase()}`;
}
function Te(e) {
  let t = parseInt(we(e).slice(1), 16);
  return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
}
let Ee, De;
function Oe(e) {
  return `#${De(e[0])}${De(e[1])}${De(e[2])}`;
}
function ke(e) {
  let t = e[0] / 255,
    n = e[1] / 255,
    r = e[2] / 255,
    i = Math.max(t, n, r),
    a = Math.min(t, n, r),
    o = (i + a) / 2,
    s = i - a;
  if (s === 0)
    return {
      h: 0,
      s: 0,
      l: o * 100,
    };
  let c = s / (1 - Math.abs(2 * o - 1)),
    l;
  return (
    i === t
      ? ((l = ((n - r) / s) % 6), l < 0 && (l += 6))
      : (l = i === n ? (r - t) / s + 2 : (t - n) / s + 4),
    {
      h: l * 60,
      s: Math.min(1, c) * 100,
      l: o * 100,
    }
  );
}
let Ae, je;
function Me(e) {
  let t = Ae(e.h),
    n = je(e.s, 0, 100) / 100,
    r = je(e.l, 0, 100) / 100,
    i = (1 - Math.abs(2 * r - 1)) * n,
    a = t / 60,
    o = i * (1 - Math.abs((a % 2) - 1)),
    s = r - i / 2,
    c = 0,
    l = 0,
    u = 0;
  return (
    a < 1
      ? ([c, l, u] = [i, o, 0])
      : a < 2
        ? ([c, l, u] = [o, i, 0])
        : a < 3
          ? ([c, l, u] = [0, i, o])
          : a < 4
            ? ([c, l, u] = [0, o, i])
            : a < 5
              ? ([c, l, u] = [o, 0, i])
              : ([c, l, u] = [i, 0, o]),
    [(c + s) * 255, (l + s) * 255, (u + s) * 255]
  );
}
function k(e) {
  return ke(Te(e));
}
function Ne(e, t, n) {
  return Oe(
    Me({
      h: e,
      s: t,
      l: n,
    }),
  );
}
function Pe(e, t, n, r) {
  let i = k(e);
  return Ne(i.h + t, i.s + n, i.l + r);
}
let A;
function j(e, t) {
  return Pe(e, 0, 0, t);
}
function Fe(e) {
  if (!Number.isFinite(e)) throw Error(`color: número inválido ${e}`);
  let t = Math.round(e * 1e3) / 1e3,
    n = String(t);
  return n.startsWith(`0.`)
    ? n.slice(1)
    : n.startsWith(`-0.`)
      ? `-${n.slice(2)}`
      : n;
}
function M(e, t) {
  let [n, r, i] = Te(e);
  return `rgba(${n},${r},${i},${Fe(je(t, 0, 1))})`;
}
function Ie(e) {
  let [t, n, r] = Te(e);
  return `${t},${n},${r}`;
}
function Le(e) {
  return `rgb(${Ie(e)})`;
}
function Re(e, t, n) {
  let r = Te(e),
    i = Te(t),
    a = je(n, 0, 1);
  return Oe([
    r[0] + (i[0] - r[0]) * a,
    r[1] + (i[1] - r[1]) * a,
    r[2] + (i[2] - r[2]) * a,
  ]);
}
let ze;
function Be(e) {
  let [t, n, r] = Te(e);
  return 0.2126 * ze(t) + 0.7152 * ze(n) + 0.0722 * ze(r);
}
function Ve(e, t) {
  let n = Be(e),
    r = Be(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
let He, Ue, We;
function Ge(e, t) {
  if (!e) return;
  let n = e instanceof Map ? e.get(t) : e[t];
  return typeof n == `string` && n !== `` ? n : void 0;
}
function Ke(e, t) {
  let n = t.replace(/^\.?\/+/, ``);
  return Ge(e, n) ?? Ge(e, `./${n}`) ?? Ge(e, `/${n}`);
}
function qe(e, t) {
  return Ke(e, t) ?? `./${t.replace(/^\.?\/+/, ``)}`;
}
function Je(e) {
  e = window.__demoAssetURL(e);
  return `url("${e
    .replace(/\\/g, `\\\\`)
    .replace(/"/g, `\\"`)
    .replace(/[\r\n]/g, ``)}")`;
}
let Ye;
function Xe(e, t) {
  return typeof e == `boolean`
    ? e
    : e === 1 || e === `1` || e === `true`
      ? !0
      : e === 0 || e === `0` || e === `false`
        ? !1
        : t;
}
function Ze(e, t) {
  return Ce(e) ? we(e) : t;
}
function Qe(e) {
  return Ce(e) ? we(e) : `auto`;
}
function $e(e) {
  if (typeof e != `string`) return He;
  let t = e
      .replace(/[\u0000-\u001f\u007f<>`\\]/g, ``)
      .replace(/\s+/g, ` `)
      .trim(),
    n = Array.from(t).slice(0, 24).join(``).trim();
  return n === `` ? He : n;
}
function et(e) {
  let t = e && typeof e == `object` ? e : {},
    n = Ue,
    r =
      typeof t.logoProporcion == `number` && Number.isFinite(t.logoProporcion)
        ? t.logoProporcion
        : void 0,
    i = {
      p: Ze(t.p, n.p),
      b: Qe(t.b),
      ba: t.ba === `metal` ? `metal` : `liso`,
      f: Ze(t.f, n.f),
      t: Qe(t.t),
      tb: Xe(t.tb, n.tb),
      s: Qe(t.s),
      x: Ye.includes(t.x) ? t.x : n.x,
      im: Xe(t.im, n.im),
      ic: t.ic === `s` ? `s` : `p`,
      n: $e(t.n),
      logo: Xe(t.logo, !1),
    };
  return (r !== void 0 && r >= 0.2 && r <= 20 && (i.logoProporcion = r), i);
}
function tt(e, t) {
  let n = k(e);
  if (n.l <= t)
    return {
      hex: we(e),
      recortado: !1,
    };
  let r = t,
    i = Ne(n.h, n.s, r);
  for (; k(i).l > t && r > 0;) ((r -= 0.05), (i = Ne(n.h, n.s, r)));
  return {
    hex: i,
    recortado: !0,
  };
}
function nt(e) {
  let t = tt(e, 14);
  if (Be(t.hex) <= 0.00802) return t;
  let n = k(t.hex),
    r = n.l,
    i = t.hex;
  for (; Be(i) > 0.00802 && r > 0;)
    ((r -= 0.25), (i = Ne(n.h, n.s, Math.max(0, r))));
  return {
    hex: i,
    recortado: !0,
  };
}
function rt(e) {
  return tt(e, 22);
}
let it, at, ot;
function st(e) {
  let t = k(e),
    n = Ne(t.h, Math.min(t.s, 85), 5);
  return Ve(e, it) >= Ve(e, n) ? it : n;
}
function ct(e, t) {
  let n = j(t, 4);
  if (Ve(e, n) >= 4.5) return e;
  let r = k(e);
  for (let e = r.l + 1; e <= 92; e += 1) {
    let t = Ne(r.h, r.s, e);
    if (Ve(t, n) >= 4.5) return t;
  }
  return Ne(r.h, r.s, 92);
}
function lt(e) {
  return Ve(e, it) >= 3 ? it : st(e);
}
let ut, dt, ft, pt, mt;
function ht(e, t) {
  return mt(e, t === `metal` ? ft : dt, `180deg`);
}
function gt(e) {
  return mt(e, pt, `120deg`);
}
let _t, vt;
function yt(e, t) {
  let n = et(e),
    r = n.p,
    i = n.b === `auto` ? r : n.b,
    a = n.s === `auto` ? r : n.s,
    o = nt(n.f).hex,
    s = n.ba !== `metal`,
    c = n.t === `auto`,
    l = k(o),
    u = k(r),
    d = k(i),
    f = l.s < 15,
    p = c
      ? f
        ? Ne(u.h, 30, l.l + 3)
        : Ne(l.h, l.s - 5, l.l + 3)
      : rt(n.t).hex,
    m = j(p, -2.5),
    h = A(a, -7, -11, -5),
    g = A(a, -10, -6, -30),
    _ = (e, t, n) =>
      `radial-gradient(90% 110% at ${e} ${t},${M(h, n)},${M(g, n * 0.4)} 45%,transparent 72%)`,
    v = at(r),
    y = st(i),
    b = s ? i : A(i, -7, -10, -15),
    x = n.logo === !0,
    ee = n.n,
    S = {};
  ((S[`--dm-p`] = r),
    (S[`--dm-p-rgb`] = Ie(r)),
    (S[`--dm-p-texto`] = ct(r, o)),
    (S[`--dm-p-claro`] = v),
    (S[`--dm-p-claro-rgb`] = Ie(v)),
    (S[`--dm-p-hondo`] = ot(r)),
    (S[`--dm-p-barra`] = j(r, 6)),
    (S[`--dm-p-tab`] = j(r, 4)),
    (S[`--dm-p-mas14`] = j(r, 14)),
    (S[`--dm-p-ink`] = st(r)),
    (S[`--dm-p-ink-grande`] = lt(r)),
    (S[`--dm-p-crema`] = Re(v, it, 0.55)),
    (S[`--dm-p-v4`] = r === `#ff5500` ? `#ff5a00` : r),
    (S[`--dm-glow-a`] = Be(r) > 0.45 ? `.14` : `.3`),
    (S[`--dm-cajero-tinta`] = Ve(r, it) >= 3 ? r : A(i, -9, 9, -32)),
    (S[`--dm-avatar-1`] = A(r, 1.75, -42, -23)),
    (S[`--dm-avatar-2`] = A(r, 0, -53, -37.5)),
    (S[`--dm-b`] = i),
    (S[`--dm-b-rgb`] = Ie(i)),
    (S[`--dm-b-grad`] = ht(i, n.ba)),
    (S[`--dm-b-ink`] = y),
    (S[`--dm-b-ink-rgb`] = Ie(y)),
    (S[`--dm-b-ink-grande`] = lt(i)),
    (S[`--dm-b-sombra`] = s
      ? `0 10px 24px ${M(i, 0.3)}`
      : `inset 0 1px 0 ${M(j(i, 35), 0.85)},inset 0 -1px 0 ${M(j(i, 25), 0.5)},0 0 22px ${M(h, 0.38)},0 8px 20px rgba(0,0,0,.45)`),
    (S[`--dm-b-mas`] = s
      ? i
      : `linear-gradient(180deg,${A(i, -1, 13, 15)} 0%,${A(i, -2, 10, 5)} 45%,${A(i, -4, -3, -1)} 100%)`),
    (S[`--dm-b-borde`] = M(A(i, -4, -9, 5), 0.8)),
    (S[`--dm-b-filo-rgb`] = Ie(A(i, -5, -10, -7))),
    (S[`--dm-sup-borde`] = M(Re(i, it, 0.45), 0.26)),
    (S[`--dm-busca-borde`] = M(A(i, -4, -9, 5), 0.55)),
    (S[`--dm-b-activo-rgb`] = Ie(Ne(d.h, d.s, 20))),
    (S[`--dm-cajero-fondo`] = s
      ? r
      : `linear-gradient(160deg,${A(i, -1, 10, 12)} 0%,${A(i, -5, -9, -6)} 55%,${A(i, -10, 5, -24)} 100%)`),
    (S[`--dm-chat-boton`] = s
      ? `linear-gradient(180deg,${j(i, 6)},${j(i, -4)})`
      : `linear-gradient(180deg,${A(i, -5, -16, -4)} 0%,${A(i, -7, -10, -15)} 52%,${A(i, -7, -5, -20)} 100%)`),
    (S[`--dm-chat-ink`] = lt(b)),
    (S[`--dm-chat-sombra`] =
      `0 12px 30px -8px ${M(A(i, -7, -10, -15), 0.6)},inset 0 1px 0 ${M(j(i, 25), 0.45)}`),
    (S[`--dm-vidrio`] =
      `linear-gradient(180deg,${M(at(i), 0.26)},${M(i, 0.13)})`),
    (S[`--dm-vidrio-borde`] = M(at(i), 0.62)),
    (S[`--dm-vidrio-sombra`] =
      `0 14px 28px -20px ${M(i, 0.6)},inset 0 0 18px ${M(i, 0.08)}`),
    (S[`--dm-f`] = o),
    (S[`--dm-f-rgb`] = Ie(o)),
    (S[`--dm-f-afuera`] = j(o, -5)),
    (S[`--dm-sup`] = j(o, 3.5)),
    (S[`--dm-campo`] = j(o, 3.7)),
    (S[`--dm-riel`] = j(o, 2)),
    (S[`--dm-riel-lado`] = j(o, 4.3)),
    (S[`--dm-barra`] = j(o, 2.5)),
    (S[`--dm-hoja`] = j(o, 2)),
    (S[`--dm-campo-app`] = j(o, 0.3)),
    (S[`--dm-filo-campo`] = j(o, 8)),
    (S[`--dm-marco`] = j(o, 0.7)),
    (S[`--dm-f1`] = j(o, 1)),
    (S[`--dm-f3`] = j(o, 3)),
    (S[`--dm-calido`] = Re(o, r, 0.07)),
    (S[`--dm-badge-aro`] = j(o, 4)),
    (S[`--dm-n-lista`] = j(o, 2)),
    (S[`--dm-n-campo`] = j(o, 4)),
    (S[`--dm-n-cerrar`] = j(o, 5)),
    (S[`--dm-n-pedido`] = j(o, 0.5)),
    (S[`--dm-velo-puerta`] =
      `linear-gradient(90deg,${M(o, 0.9)} 8%,${M(o, 0.04)} 70%)`),
    (S[`--dm-velo-dep`] =
      `linear-gradient(90deg,${M(o, 0.92)} 6%,${M(o, 0.04)} 62%)`),
    (S[`--dm-img-panel-r`] = f
      ? `${Je(qe(null, We.panelR))} left center/100% 100% no-repeat`
      : `linear-gradient(90deg,${M(o, 0.94)} 0%,${M(o, 0.78)} 62%,${M(o, 0)} 100%)`),
    (S[`--dm-t`] = p),
    (S[`--dm-t2`] = m),
    (S[`--dm-puerta-base`] = `linear-gradient(160deg,${p},${m})`),
    (S[`--dm-ganador-fondo`] = `linear-gradient(155deg,${p},${j(o, 1)})`),
    (S[`--dm-img-promo-base`] =
      c && f
        ? Je(qe(null, We.baseCarta))
        : `${_(`82%`, `38%`, 0.24)},linear-gradient(160deg,${j(p, 0.5)},${m})`),
    (S[`--dm-v4-sup`] = M(j(c ? o : p, l.l < 4 ? 10 : 6), 0.92)),
    (S[`--dm-g1-rgb`] = Ie(h)),
    (S[`--dm-g2-rgb`] = Ie(g)),
    (S[`--dm-luz-puerta`] = _(`82%`, `35%`, 0.3)),
    (S[`--dm-luz-dep`] = _(`80%`, `45%`, 0.26)),
    (S[`--dm-saldo-brillo`] = `0 0 22px ${M(h, 0.35)}`),
    ut(a)
      ? ((S[`--dm-mult3-bg`] =
          `linear-gradient(180deg,rgba(255,190,60,.28),rgba(255,120,0,.2))`),
        (S[`--dm-mult3-ring`] = `rgba(255,200,90,.6)`),
        (S[`--dm-mult3-fg`] = `#ffd27a`),
        (S[`--dm-mult3-glow`] = `0 0 18px rgba(255,170,40,.35)`))
      : ((S[`--dm-mult3-bg`] =
          `linear-gradient(180deg,${M(A(a, 0, 14, 15), 0.3)},${M(A(a, -7, -4, -11), 0.22)})`),
        (S[`--dm-mult3-ring`] = M(A(a, 0, 14, 15), 0.65)),
        (S[`--dm-mult3-fg`] = A(a, -1, 21, 23)),
        (S[`--dm-mult3-glow`] = `0 0 18px ${M(h, 0.35)}`)),
    (S[`--dm-deporte`] = Le(Be(a) > 0.35 ? A(a, -10, 5, -24) : a)),
    (S[`--dm-anillo`] = gt(a)),
    (S[`--dm-neon-1`] = A(a, -7, -4, -11)),
    (S[`--dm-neon-2`] = A(a, 0, 14, 15)),
    (S[`--dm-neon-3`] = A(a, -2, 21, 35)),
    (S[`--dm-brillo`] = A(a, -1, 21, 36)),
    (S[`--dm-billetera-brillo`] =
      `radial-gradient(34% 70% at 88% 40%,${M(at(a), 0.34)},transparent 70%),radial-gradient(60% 115% at 84% 45%,${M(h, 0.42)},${M(g, 0.16)} 55%,transparent 80%),linear-gradient(90deg,${j(o, 3)} 0%,${j(o, 3)} 42%,${Re(j(o, 3), a, 0.06)} 100%)`),
    (S[`--dm-img-bienvenida`] = n.im
      ? Je(qe(t, We.bienvenida))
      : `${_(`80%`, `45%`, 0.36)},linear-gradient(90deg,${j(o, 1)} 0%,${Re(j(o, 2), a, 0.03)} 55%,${Re(j(o, 5), a, 0.08)} 100%)`));
  let C = _t[n.x];
  ((S[`--dm-tx`] = C[0]),
    (S[`--dm-tx2`] = C[1]),
    (S[`--dm-tx3`] = C[2]),
    (S[`--dm-tx4`] = C[3]),
    (S[`--dm-logo-alto`] = x ? `22px` : `15px`));
  let te = {
    logoPropio: x,
    logoTexto: !x && ee !== `RushyBet`,
    aro: n.tb,
    imgOn: n.im,
    nombre: ee,
    tintaTexto: n.x,
    imgColor: n.ic === `s` ? a : r,
  };
  return (
    x && n.logoProporcion !== void 0 && (te.logoProporcion = n.logoProporcion),
    {
      vars: S,
      disc: te,
    }
  );
}
function initializeBrandColors() {
  Se = /^#?([0-9a-f]{6})$/i;
  Ee = (e) => (e < 0 ? 0 : e > 255 ? 255 : Math.round(e));
  De = (e) => Ee(e).toString(16).padStart(2, `0`);
  Ae = (e) => ((e % 360) + 360) % 360;
  je = (e, t, n) => (e < t ? t : e > n ? n : e);
  A = Pe;
  ze = (e) => {
    let t = e / 255;
    return t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
  };
  He = `RushyBet`;
  Ue = Object.freeze({
    p: `#ff5500`,
    b: `auto`,
    ba: `liso`,
    f: `#0f0f0f`,
    t: `auto`,
    tb: !1,
    s: `auto`,
    x: `calido`,
    im: !0,
    ic: `p`,
    n: He,
    logo: !1,
  });
  We = Object.freeze({
    logo: `rushybet/rushybet-logo.webp`,
    mark: `rushybet/v3/mark.png`,
    textura: `rushybet/v3/textura-banner.webp`,
    cutFichas: `rushybet/v3/cut-fichas.webp`,
    cutRuleta: `rushybet/v3/cut-ruleta.webp`,
    cutDeportes: `rushybet/v3/cut-deportes.webp`,
    popSlots: `rushybet/v2/pop-slots.webp`,
    popVivo: `rushybet/v2/pop-vivo.webp`,
    popDeportes: `rushybet/v2/pop-deportes.webp`,
    popFichas: `rushybet/v2/pop-fichas.webp`,
    bienvenida: `rushybet/v2/base-bienvenida.webp`,
    recarga: `rushybet/v2/recarga-fichas.webp`,
    panelR: `rushybet/v2/panel-r.webp`,
    baseCarta: `rushybet/v2/base-carta.webp`,
  });
  Ye = [`calido`, `neutro`, `frio`];
  it = `#ffffff`;
  at = (e) => A(e, -1, 4, 12);
  ot = (e) => A(e, -1, 0, -8);
  ut = (e) => e === `#ff5500` || e === `#ff5a00`;
  dt = [
    [0.85, 0, 8.24, 0],
    [-0.74, 0, 2.35, 58],
    [-0.66, 0, -2.55, 100],
  ];
  ft = [
    [1.5, 16, 19.9, 0],
    [-0.3, 15, 12.7, 14],
    [-2.9, 5, 4.5, 30],
    [-4.3, -6, -3.4, 45],
    [-6, -9, -8.6, 56],
    [-6.9, -3.4, -13.8, 68],
    [-7, -1, -15.8, 78],
    [-6.9, -7, -11.9, 88],
    [-4.8, -3, -2.5, 95],
    [-2.5, 12, 15.4, 100],
  ];
  pt = [
    [-13, -23, -21, 0],
    [-1, 4, 12, 18],
    [-2, 32, 34, 27],
    [-7, -12, -11, 42],
    [-9, -17, -31, 60],
    [-3, 5, 5, 80],
    [-6, -12, -21, 100],
  ];
  mt = (e, t, n) =>
    `linear-gradient(${n},${t.map(([t, n, r, i]) => `${A(e, t, n, r)} ${i}%`).join(`,`)})`;
  _t = Object.freeze({
    calido: [`#f3ece7`, `#b3a69d`, `#8a7d75`, `#675d57`],
    neutro: [`#ededed`, `#a9a9ab`, `#808082`, `#5e5e60`],
    frio: [`#e9eef5`, `#a3acba`, `#7a8494`, `#596272`],
  });
  vt = (e, ...t) => t.map((t) => [`--dm-${t}`, e]);
  Object.freeze(
    Object.fromEntries([
      ...vt(
        `color`,
        `p`,
        `p-texto`,
        `p-claro`,
        `p-hondo`,
        `p-barra`,
        `p-tab`,
        `p-mas14`,
        `p-ink`,
        `p-ink-grande`,
        `p-crema`,
        `p-v4`,
      ),
      ...vt(`color`, `cajero-tinta`),
      ...vt(`color`, `avatar-1`, `avatar-2`),
      ...vt(
        `color`,
        `b`,
        `b-ink`,
        `b-ink-grande`,
        `b-borde`,
        `sup-borde`,
        `busca-borde`,
        `chat-ink`,
        `vidrio-borde`,
      ),
      ...vt(
        `color`,
        `f`,
        `f-afuera`,
        `sup`,
        `campo`,
        `riel`,
        `riel-lado`,
        `barra`,
        `hoja`,
        `campo-app`,
        `filo-campo`,
        `marco`,
        `f1`,
        `f3`,
      ),
      ...vt(
        `color`,
        `calido`,
        `badge-aro`,
        `n-lista`,
        `n-campo`,
        `n-cerrar`,
        `n-pedido`,
      ),
      ...vt(`color`, `t`, `t2`, `v4-sup`),
      ...vt(
        `color`,
        `mult3-ring`,
        `mult3-fg`,
        `deporte`,
        `neon-1`,
        `neon-2`,
        `neon-3`,
        `brillo`,
      ),
      ...vt(`color`, `tx`, `tx2`, `tx3`, `tx4`),
      ...vt(`fondo`, `b-grad`, `b-mas`, `cajero-fondo`, `chat-boton`, `vidrio`),
      ...vt(
        `fondo`,
        `velo-puerta`,
        `velo-dep`,
        `img-panel-r`,
        `puerta-base`,
        `ganador-fondo`,
        `img-promo-base`,
      ),
      ...vt(
        `fondo`,
        `luz-puerta`,
        `luz-dep`,
        `mult3-bg`,
        `anillo`,
        `billetera-brillo`,
        `img-bienvenida`,
      ),
      ...vt(`sombra`, `b-sombra`, `chat-sombra`, `vidrio-sombra`, `mult3-glow`),
      ...vt(`sombraTexto`, `saldo-brillo`),
      ...vt(
        `rgb`,
        `p-rgb`,
        `p-claro-rgb`,
        `b-rgb`,
        `b-ink-rgb`,
        `b-filo-rgb`,
        `b-activo-rgb`,
        `f-rgb`,
        `g1-rgb`,
        `g2-rgb`,
      ),
      ...vt(`numero`, `glow-a`),
      ...vt(`largo`, `logo-alto`),
    ]),
  );
}
export { Ue, nt, rt, yt, initializeBrandColors };
