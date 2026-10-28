/**
 * classic-lobby / account-helpers.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { string as zodString, object as zodObject } from "zod";
import { Qo, ts, ns } from "./demo-actions.js";
import { Gs, Ks } from "./account-security.js";
function Tc(e) {
  return !e || e.length < 6
    ? `La contraseña debe tener al menos 6 caracteres.`
    : !/[a-z]/.test(e) ||
        !/[A-Z]/.test(e) ||
        !/\d/.test(e) ||
        !/[^A-Za-z0-9]/.test(e)
      ? `La contraseña necesita una mayúscula, una minúscula, un número y un símbolo (por ejemplo: Rushy2026!).`
      : null;
}
let Ec, Dc;
function Oc(e) {
  let t = String(e ?? ``).trim();
  if (t === ``)
    return {
      estado: `vacio`,
    };
  try {
    return {
      estado: `ok`,
      cents: Ks(t),
    };
  } catch {
    return {
      estado: `error`,
      mensaje: kc(t),
    };
  }
}
function kc(e) {
  if (Dc.test(e)) return `Sólo números. Para los centavos usá la coma.`;
  if (/^0+([.,]0*)?$/.test(e)) return `El monto tiene que ser mayor a cero.`;
  let t = Ec.exec(e);
  if (t) {
    let e = (t[1] ?? ``).replace(/\./g, ``);
    return `Escribilo sin los puntos de los miles: ${t[2] ? `${e},${t[2]}` : e}`;
  }
  let n = e.split(/[.,]/).pop() ?? ``;
  if (e.includes(`,`) || e.includes(`.`)) {
    if (n.length > 2) return `Como mucho dos decimales.`;
    if (e.split(/[.,]/).length > 2) return `Sobra un punto o una coma.`;
  }
  return /^\d+([.,]\d{1,2})?$/.test(e)
    ? `Ese monto es demasiado grande.`
    : `No se entiende ese monto. Escribilo así: 1500 o 1500,50`;
}
function Ac(e, t, n) {
  if (e === `load`)
    return `Qué tal, me cargás las fichas?
Ya te envío el comprobante!`;
  let r = t && t.trim() !== `` ? `Soy ${t.trim()} y ` : ``,
    i = Oc(n),
    a = i.estado === `ok` ? Gs(i.cents) : null;
  return a
    ? `Hola! ${r}quiero retirar ${a} de Rushybet.`
    : `Hola! ${r}quiero hacer un retiro en Rushybet.`;
}
function jc(e) {
  try {
    let t = new URL(e);
    return (
      t.hostname.startsWith(`www.`) && (t.hostname = t.hostname.slice(4)),
      t.origin
    );
  } catch {
    return e;
  }
}
function Mc(e) {
  return `${jc(e)}/auth/callback`;
}
function Nc(e) {
  return `${jc(e)}/actualizar-password`;
}
function Pc(e) {
  typeof window > `u` || window.__rbPestanaVieja?.marcarJuegoAbierto(e);
}
let Fc;
function Ic(e, t, n, r, i, a) {
  return Object.freeze({
    id: e,
    nombre: t,
    codigo: n,
    largos: Object.freeze([...r]),
    prefijoMovil: i,
    ejemplo: a,
  });
}
let Lc, Rc, zc, Bc;
function Vc(e) {
  return e.replace(/\D/g, ``);
}
function Hc(e) {
  let t = 0;
  for (let n of e.largos) n > t && (t = n);
  return t;
}
function Uc(e, t) {
  return e.largos.includes(t.length);
}
function Wc(e) {
  for (let t of Bc) {
    if (!e.startsWith(t.codigo)) continue;
    let n = e.slice(t.codigo.length);
    return (
      t.prefijoMovil.length > 0 &&
        n.startsWith(t.prefijoMovil) &&
        n.length > Hc(t) &&
        (n = n.slice(t.prefijoMovil.length)),
      {
        pais: t,
        nacional: n,
      }
    );
  }
  return null;
}
let Gc;
function Kc(e, t) {
  let n = 0;
  for (let t of e) t === `#` && n++;
  if (n !== t.length) return t;
  let r = 0,
    i = ``;
  for (let n of e) i += n === `#` ? t[r++] : n;
  return i;
}
function qc(e, t) {
  if (e.id === `ar` && t.length === 10 && t.startsWith(`11`))
    return Kc(`## ####-####`, t);
  let n = Gc[`${e.id}:${t.length}`];
  return n === void 0 ? t : Kc(n, t);
}
function Jc(e) {
  let t = Vc(e);
  if (t.length === 0) return ``;
  let n = Wc(t);
  if (n === null || !Uc(n.pais, n.nacional)) return `+` + t;
  let r = n.pais.prefijoMovil.length > 0 ? n.pais.prefijoMovil + ` ` : ``,
    i = `+${n.pais.codigo} ${r}${qc(n.pais, n.nacional)}`;
  return Vc(i) === t ? i : `+` + t;
}
function Yc(e) {
  return Jc(e);
}
function Xc(e, t) {
  let n = `https://wa.me/${e}`;
  return t ? `${n}?text=${encodeURIComponent(t)}` : n;
}
function initializeAccountHelpers() {
  Ec = /^(\d{1,3}(?:\.\d{3})+)(?:[.,](\d{1,2}))?$/;
  Dc = /[^\d.,]/;
  ns();
  Fc = (
    (e) =>
    async (...t) => {
      let n = ts[`app/referido-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Qo,
          };
    }
  )(`atribuirTrasRegistroAction`);
  Lc = Ic(`ar`, `Argentina`, `54`, [10], `9`, `261 000-0000`);
  Rc = Ic(`otro`, `Otro país`, ``, [], ``, `+595 981 123456`);
  zc = Object.freeze([
    Lc,
    Ic(`py`, `Paraguay`, `595`, [8, 9], ``, `981 123456`),
    Ic(`br`, `Brasil`, `55`, [10, 11], ``, `11 91234-5678`),
    Ic(`bo`, `Bolivia`, `591`, [8], ``, `7123 4567`),
    Ic(`uy`, `Uruguay`, `598`, [8], ``, `9123 4567`),
    Ic(`cl`, `Chile`, `56`, [9], ``, `9 1234 5678`),
    Ic(`pe`, `Perú`, `51`, [9], ``, `912 345 678`),
    Ic(`co`, `Colombia`, `57`, [10], ``, `300 123 4567`),
    Ic(`ec`, `Ecuador`, `593`, [8, 9], ``, `99 123 4567`),
    Ic(`ve`, `Venezuela`, `58`, [10], ``, `412 123 4567`),
    Ic(`mx`, `México`, `52`, [10], ``, `55 1234 5678`),
    Ic(`es`, `España`, `34`, [9], ``, `600 123 456`),
    Ic(`us`, `Estados Unidos / Canadá`, `1`, [10], ``, `415 555 2671`),
    Rc,
  ]);
  Bc = Object.freeze(
    zc
      .filter((e) => e.codigo.length > 0)
      .sort((e, t) => t.codigo.length - e.codigo.length),
  );
  Gc = Object.freeze({
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
  zodObject({
    paisId: zodString().min(1).max(8),
    nacional: zodString().max(40),
  }).strict();
}
export { Tc, Ac, Mc, Nc, Pc, Fc, Yc, Xc, initializeAccountHelpers };
