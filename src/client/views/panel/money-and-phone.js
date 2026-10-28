/**
 * panel / money-and-phone.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { string as zodString, object as zodObject } from "zod";
function formatMoney(e) {
  return new Intl.NumberFormat(`es-AR`, {
    style: `currency`,
    currency: `ARS`,
    currencyDisplay: `code`,
  }).format(Number(e) / 100);
}
function parseMoney(e) {
  let t = String(e ?? ``)
    .trim()
    .replace(`,`, `.`);
  if (!/^\d{1,12}(\.\d{1,2})?$/.test(t)) throw Error(`bad_amount`);
  let [n, r = ``] = t.split(`.`),
    i = BigInt(n) * 100n + BigInt((r + `00`).slice(0, 2));
  if (i <= 0n) throw Error(`bad_amount`);
  if (i > 10000000000n) throw Error(`amount_too_large`);
  return i;
}
function formatMoneyInput(e) {
  let t = BigInt(e);
  if (t < 0n) throw Error(`bad_amount`);
  let n = t / 100n,
    r = t % 100n;
  return r === 0n ? n.toString() : `${n}.${r.toString().padStart(2, `0`)}`;
}
let us;
function ds(e, t) {
  let n = new Map();
  if (e.length === 0) return n;
  if (!(
    t.modo === `prioridad` && e.some((e) => e.adminId === t.prioridadAdminId)
  )) {
    let t = 1 / e.length;
    for (let r of e) n.set(r.adminId, t);
    return n;
  }
  let r = Math.min(100, Math.max(1, Math.round(t.prioridadPct ?? 100))) / 100,
    i = e.filter((e) => e.adminId !== t.prioridadAdminId);
  if ((n.set(t.prioridadAdminId, i.length === 0 ? 1 : r), i.length > 0)) {
    let e = (1 - r) / i.length;
    for (let t of i) n.set(t.adminId, e);
  }
  return n;
}
function fs(e, t, n, r, i, a) {
  return Object.freeze({
    id: e,
    nombre: t,
    codigo: n,
    largos: Object.freeze([...r]),
    prefijoMovil: i,
    ejemplo: a,
  });
}
let ps, ms, hs, gs;
function _s(e) {
  for (let t of hs) if (t.id === e) return t;
  return null;
}
function vs(e) {
  return e.normalize(`NFD`).replace(/[̀-ͯ]/g, ``);
}
function ys(e) {
  let t = vs(e.trim().toLowerCase());
  if (t.length === 0) return hs;
  let n = t.replace(/\D/g, ``);
  return hs.filter(
    (e) =>
      !!(
        vs(e.nombre.toLowerCase()).includes(t) ||
        e.id.startsWith(t) ||
        (e.codigo.length > 0 && n.length > 0 && e.codigo.startsWith(n))
      ),
  );
}
function bs(e) {
  return e.replace(/\D/g, ``);
}
function xs(e) {
  let t = 0;
  for (let n of e.largos) n > t && (t = n);
  return t;
}
function Ss(e, t) {
  return e.largos.includes(t.length);
}
function Cs(e) {
  return e.largos.join(` o `);
}
function ws(e) {
  for (let t of gs) {
    if (!e.startsWith(t.codigo)) continue;
    let n = e.slice(t.codigo.length);
    return (
      t.prefijoMovil.length > 0 &&
        n.startsWith(t.prefijoMovil) &&
        n.length > xs(t) &&
        (n = n.slice(t.prefijoMovil.length)),
      {
        pais: t,
        nacional: n,
      }
    );
  }
  return null;
}
function Ts(e) {
  return e.length < 8 || e.length > 15
    ? `Con «Otro país» se escribe el número entero con el código del país: entre 8 y 15 dígitos.`
    : e.length === 10
      ? `Un número de 10 dígitos no se puede distinguir de uno argentino. Elegí el país en la lista y escribí sólo el número local.`
      : e.startsWith(`54`)
        ? `Ese número es de Argentina: elegí Argentina en la lista y escribí el área y el número, sin el 54.`
        : null;
}
function Es(e) {
  if (e.length !== 12) return e;
  for (let t of [2, 3, 4])
    if (e.slice(t, t + 2) === `15`) return e.slice(0, t) + e.slice(t + 2);
  return e;
}
function Ds(e, t) {
  if (e.codigo.length === 0 || Ss(e, t) || !t.startsWith(e.codigo)) return t;
  let n = t.slice(e.codigo.length);
  return (
    e.prefijoMovil.length > 0 &&
      n.startsWith(e.prefijoMovil) &&
      !Ss(e, n) &&
      (n = n.slice(e.prefijoMovil.length)),
    Ss(e, n) ? n : t
  );
}
function Os(e, t) {
  let n = _s(e);
  if (n === null)
    return {
      ok: !1,
      mensaje: `Elegí el país de la lista.`,
    };
  let r = bs(t).replace(/^0+/, ``);
  if (r.length === 0)
    return {
      ok: !1,
      mensaje: `Escribí el número, sin el 0 de adelante.`,
    };
  if (n.id === ms.id) {
    let e = Ts(r);
    return e === null
      ? ks(r)
      : {
          ok: !1,
          mensaje: e,
        };
  }
  let i = Ds(n, r);
  return (
    n.prefijoMovil === `9` && (i = Es(i)),
    Ss(n, i)
      ? ks(n.codigo + n.prefijoMovil + i)
      : {
          ok: !1,
          mensaje: `Un número de ${n.nombre} tiene ${Cs(n)} dígitos y escribiste ${i.length}. Ejemplo: ${n.ejemplo}.`,
        }
  );
}
function ks(e) {
  return {
    ok: !0,
    e164: e,
    texto: `+` + e,
    visible: Fs(e),
  };
}
function As(e, t) {
  let n = e.trim(),
    r = bs(n),
    i = r.startsWith(`00`),
    a = n.startsWith(`+`) || i;
  if ((i && (r = r.slice(2)), r.length === 0))
    return {
      paisId: t,
      nacional: ``,
      detectado: !1,
    };
  if (!a)
    return {
      paisId: t,
      nacional: r,
      detectado: !1,
    };
  let o = ws(r);
  return o === null
    ? {
        paisId: ms.id,
        nacional: r,
        detectado: !0,
      }
    : {
        paisId: o.pais.id,
        nacional: o.nacional,
        detectado: !0,
      };
}
function js(e) {
  let t = bs(e);
  if (t.length === 0) return null;
  let n = ws(t);
  return n === null || !Ss(n.pais, n.nacional)
    ? null
    : {
        paisId: n.pais.id,
        nacional: n.nacional,
      };
}
let Ms;
function Ns(e, t) {
  let n = 0;
  for (let t of e) t === `#` && n++;
  if (n !== t.length) return t;
  let r = 0,
    i = ``;
  for (let n of e) i += n === `#` ? t[r++] : n;
  return i;
}
function Ps(e, t) {
  if (e.id === `ar` && t.length === 10 && t.startsWith(`11`))
    return Ns(`## ####-####`, t);
  let n = Ms[`${e.id}:${t.length}`];
  return n === void 0 ? t : Ns(n, t);
}
function Fs(e) {
  let t = bs(e);
  if (t.length === 0) return ``;
  let n = ws(t);
  if (n === null || !Ss(n.pais, n.nacional)) return `+` + t;
  let r = n.pais.prefijoMovil.length > 0 ? n.pais.prefijoMovil + ` ` : ``,
    i = `+${n.pais.codigo} ${r}${Ps(n.pais, n.nacional)}`;
  return bs(i) === t ? i : `+` + t;
}
let Is;
function Ls(e) {
  let t = Is.safeParse(e);
  return t.success
    ? Os(t.data.paisId, t.data.nacional)
    : {
        ok: !1,
        mensaje: `Faltan datos del teléfono: elegí el país y escribí el número.`,
      };
}
function Rs(e) {
  let t = e.trim(),
    n = t.replace(/\D/g, ``);
  if (n.length === 0) return null;
  let r = t.startsWith(`+`);
  n.startsWith(`00`) && ((n = n.slice(2)), (r = !0));
  let i = null;
  if (n.startsWith(`54`)) {
    let e = n.slice(2);
    (e.startsWith(`9`) && (e = e.slice(1)),
      e.startsWith(`0`) && (e = e.slice(1)),
      (i = e));
  } else n.startsWith(`0`) ? (i = n.slice(1)) : n.length === 10 && (i = n);
  if (i === null) return r && n.length >= 8 && n.length <= 15 ? n : null;
  if (i.length === 12) {
    for (let e of [2, 3, 4])
      if (i.slice(e, e + 2) === `15`) {
        i = i.slice(0, e) + i.slice(e + 2);
        break;
      }
  }
  return i.length === 10 ? `549` + i : null;
}
function zs(e) {
  return Fs(e);
}
function initializeMoneyAndPhone() {
  us = `America/Argentina/Buenos_Aires`;
  ps = fs(`ar`, `Argentina`, `54`, [10], `9`, `261 000-0000`);
  ms = fs(`otro`, `Otro país`, ``, [], ``, `+595 981 123456`);
  hs = Object.freeze([
    ps,
    fs(`py`, `Paraguay`, `595`, [8, 9], ``, `981 123456`),
    fs(`br`, `Brasil`, `55`, [10, 11], ``, `11 91234-5678`),
    fs(`bo`, `Bolivia`, `591`, [8], ``, `7123 4567`),
    fs(`uy`, `Uruguay`, `598`, [8], ``, `9123 4567`),
    fs(`cl`, `Chile`, `56`, [9], ``, `9 1234 5678`),
    fs(`pe`, `Perú`, `51`, [9], ``, `912 345 678`),
    fs(`co`, `Colombia`, `57`, [10], ``, `300 123 4567`),
    fs(`ec`, `Ecuador`, `593`, [8, 9], ``, `99 123 4567`),
    fs(`ve`, `Venezuela`, `58`, [10], ``, `412 123 4567`),
    fs(`mx`, `México`, `52`, [10], ``, `55 1234 5678`),
    fs(`es`, `España`, `34`, [9], ``, `600 123 456`),
    fs(`us`, `Estados Unidos / Canadá`, `1`, [10], ``, `415 555 2671`),
    ms,
  ]);
  gs = Object.freeze(
    hs
      .filter((e) => e.codigo.length > 0)
      .sort((e, t) => t.codigo.length - e.codigo.length),
  );
  Ms = Object.freeze({
    "py:8": `## ###-###`,
    "py:9": `### ###-###`,
    "ar:10": `### ###-####`,
    "br:10": `## ####-####`,
    "br:11": `## #####-####`,
    "bo:8": `#### ####`,
    "uy:8": `#### ####`,
    "cl:9": `# #### ####`,
    "pe:9": `### ### ###`,
    "co:10": `### ### ####`,
    "ec:8": `## ### ###`,
    "ec:9": `## ### ####`,
    "ve:10": `### ### ####`,
    "mx:10": `## #### ####`,
    "es:9": `### ### ###`,
    "us:10": `### ### ####`,
  });
  Is = zodObject({
    paisId: zodString().min(1).max(8),
    nacional: zodString().max(40),
  }).strict();
}
export {
  formatMoney,
  parseMoney,
  formatMoneyInput,
  us,
  ds,
  ps,
  ms,
  hs,
  _s,
  ys,
  bs,
  Os,
  As,
  js,
  Fs,
  Ls,
  Rs,
  zs,
  initializeMoneyAndPhone,
};
