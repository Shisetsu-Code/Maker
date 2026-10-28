/**
 * brasa / colors.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
let C;
function w(e) {
  let t = C.exec(e.trim());
  if (!t || t[1] === void 0)
    throw Error(`color: se esperaba #rrggbb y llegó ${JSON.stringify(e)}`);
  return `#${t[1].toLowerCase()}`;
}
function te(e) {
  let t = parseInt(w(e).slice(1), 16);
  return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
}
let ne, T;
function re(e) {
  return `#${T(e[0])}${T(e[1])}${T(e[2])}`;
}
function E(e) {
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
let ie, ae;
function oe(e) {
  let t = ie(e.h),
    n = ae(e.s, 0, 100) / 100,
    r = ae(e.l, 0, 100) / 100,
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
function hexToHsl(e) {
  return E(te(e));
}
function hslToHex(e, t, n) {
  return re(
    oe({
      h: e,
      s: t,
      l: n,
    }),
  );
}
function initializeColors() {
  C = /^#?([0-9a-f]{6})$/i;
  ne = (e) => (e < 0 ? 0 : e > 255 ? 255 : Math.round(e));
  T = (e) => ne(e).toString(16).padStart(2, `0`);
  ie = (e) => ((e % 360) + 360) % 360;
  ae = (e, t, n) => (e < t ? t : e > n ? n : e);
}
export { hexToHsl, hslToHex, initializeColors };
