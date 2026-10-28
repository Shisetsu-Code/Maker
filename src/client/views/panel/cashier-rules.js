/**
 * panel / cashier-rules.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { string as zodString, object as zodObject } from "zod";
import { rs } from "./demo-services.js";
function Fc(e) {
  let t = (String(e ?? ``).split(`,`)[0] ?? ``).replace(/\D/g, ``);
  if (!t || t.length > 12) return null;
  let n = BigInt(t);
  return n > 0n ? n * 100n : null;
}
function Ic(e) {
  return e === `active` || e === `closed` || e === `blocked` ? e : `blocked`;
}
function Lc(e) {
  return Ic(e) === `active`;
}
let Rc, zc, Bc, Vc, Hc, Uc;
function Wc(e) {
  return e.replace(/\s+/gu, ` `).trim();
}
function Gc(e) {
  let t = Wc(e);
  if (!t.includes(` `)) return t;
  let n = t.replace(/ /gu, ``);
  return /^\p{Nd}+$/u.test(n) ? n : t;
}
let Kc;
function qc(e, t) {
  let n = zodString().max(240),
    r = n.safeParse(e ?? ``);
  if (!r.success)
    return {
      ok: !1,
      campo: `alias`,
      mensaje: typeof e == `string` ? Bc : Vc,
    };
  let i = n.safeParse(t ?? ``);
  if (!i.success)
    return {
      ok: !1,
      campo: `titular`,
      mensaje: typeof t == `string` ? Hc : Uc,
    };
  let a = Gc(r.data),
    o = Wc(i.data);
  if (a.length === 0 && o.length === 0)
    return {
      ok: !0,
      valor: null,
    };
  if (a.length === 0)
    return {
      ok: !1,
      campo: `alias`,
      mensaje: `Para poner el titular hace falta el alias. Si lo querés borrar, vaciá los dos campos.`,
    };
  let s = Kc.safeParse({
    alias: a,
    titular: o,
  });
  if (s.success)
    return {
      ok: !0,
      valor: s.data,
    };
  let c = s.error.issues[0];
  return {
    ok: !1,
    campo: c?.path[0] === `titular` ? `titular` : `alias`,
    mensaje:
      c?.message ??
      `Ese alias tiene caracteres o espacios que no van. Escribí sólo el alias, el CBU o el número de cuenta, sin texto alrededor y sin espacios en el medio.`,
  };
}
function Jc(e, t) {
  let n = qc(e ?? ``, t ?? ``);
  return n.ok ? n.valor : null;
}
function Yc(e) {
  if (!e) return null;
  let t = Jc(e.alias, e.titular);
  if (!t) return null;
  let n = `a nombre de ${t.titular}`;
  return {
    alias: t.alias,
    detalle: n,
    renglon: `${t.alias} · ${n}`,
  };
}
async function Xc(e, t, n, r) {
  let i = await e.buscarMovimiento(t);
  if (!i)
    return {
      ok: !1,
      razon: `no_existe`,
    };
  if (i.yaAnulado)
    return {
      ok: !1,
      razon: `ya_anulado`,
    };
  if (i.esAnulacion)
    return {
      ok: !1,
      razon: `es_una_anulacion`,
    };
  let a = await e.bloquearBilletera(i.walletId);
  if (!a)
    return {
      ok: !1,
      razon: `sin_billetera`,
    };
  let o = i.kind === `load` ? -i.amountCents : i.amountCents,
    s = a.balanceCents + o;
  return s < 0n
    ? {
        ok: !1,
        razon: `saldo_insuficiente`,
      }
    : (await e.aplicar({
        original: i,
        balanceAfter: s,
        operatorId: n,
        motivo: r,
      }),
      {
        ok: !0,
        balanceCents: s,
        devuelto: o < 0n ? -o : o,
      });
}
function Zc(e) {
  return e === `no_existe`
    ? `Ese movimiento ya no está.`
    : e === `ya_anulado`
      ? `Ese movimiento ya fue anulado.`
      : e === `es_una_anulacion`
        ? `Eso ya es una anulación. Si hay que deshacerla, anulá el movimiento original.`
        : e === `sin_billetera`
          ? `Ese jugador no tiene billetera.`
          : `No se puede anular: el jugador ya usó parte de esa plata y le quedaría el saldo en negativo. Bloqueale la plata y arreglalo con él.`;
}
function Qc(e, t) {
  return BigInt(e) - BigInt(t);
}
function $c(e, t, n, r) {
  return e.dualApprovalOverCents != null && n > e.dualApprovalOverCents
    ? {
        outcome: `dual`,
      }
    : e.enabled
      ? e.maxPerWithdrawalCents != null && n > e.maxPerWithdrawalCents
        ? {
            outcome: `stepup`,
            reason: `over_max`,
          }
        : e.maxDailyCents != null && t.dailyTotalCents + n > e.maxDailyCents
          ? {
              outcome: `stepup`,
              reason: `over_daily`,
            }
          : e.cooldownSeconds > 0 &&
              t.lastUnloadAt &&
              r.getTime() - t.lastUnloadAt.getTime() < e.cooldownSeconds * 1e3
            ? {
                outcome: `stepup`,
                reason: `cooldown`,
              }
            : e.maxPerWindow != null && t.windowCount >= e.maxPerWindow
              ? {
                  outcome: `stepup`,
                  reason: `velocity`,
                }
              : {
                  outcome: `allow`,
                }
      : {
          outcome: `allow`,
        };
}
async function el(e, t) {
  if (t.amountCents <= 0n)
    return {
      ok: !1,
      reason: `bad_amount`,
    };
  let n = await e.getWalletByUsername(t.username);
  if (!n)
    return {
      ok: !1,
      reason: `player_not_found`,
    };
  let r = await e.findAppliedLoad(t.requestKey);
  if (r)
    return r.walletId !== n.id || r.amountCents !== t.amountCents
      ? {
          ok: !1,
          reason: `key_mismatch`,
        }
      : {
          ok: !0,
          balanceCents: n.balanceCents,
          duplicate: !0,
        };
  if (n.frozen)
    return {
      ok: !1,
      reason: `wallet_frozen`,
    };
  if (
    t.settleRequestId &&
    !(await e.settleRequest({
      requestId: t.settleRequestId,
      kind: `load`,
      amountCents: t.amountCents,
      playerId: n.playerId,
    }))
  )
    return {
      ok: !1,
      reason: `request_mismatch`,
    };
  let i = n.balanceCents + t.amountCents,
    { applied: a } = await e.applyLoad({
      walletId: n.id,
      amountCents: t.amountCents,
      balanceAfter: i,
      operatorId: t.operatorId,
      requestKey: t.requestKey,
    });
  return {
    ok: !0,
    balanceCents: a ? i : n.balanceCents,
    duplicate: !a,
  };
}
async function tl(e, t, n = new Date(), r = {}) {
  if (t.amountCents <= 0n)
    return {
      ok: !1,
      reason: `bad_amount`,
    };
  let i = await e.getWalletByUsername(t.username);
  if (!i)
    return {
      ok: !1,
      reason: `player_not_found`,
    };
  let a = await e.findAppliedUnload(t.requestKey);
  if (a)
    return a.walletId !== i.id || a.amountCents !== t.amountCents
      ? {
          ok: !1,
          reason: `key_mismatch`,
        }
      : {
          ok: !0,
          balanceCents: i.balanceCents,
          duplicate: !0,
        };
  if (i.frozen)
    return {
      ok: !1,
      reason: `wallet_frozen`,
    };
  if (Qc(i.balanceCents, i.reservedCents) < t.amountCents)
    return {
      ok: !1,
      reason: `insufficient_funds`,
    };
  let o = await e.getWithdrawalLimits();
  if (
    !r.segundaFirma &&
    o.dualApprovalOverCents != null &&
    t.amountCents > o.dualApprovalOverCents
  )
    return {
      ok: !1,
      reason: `needs_second_approval`,
    };
  if (
    o.enabled &&
    !r.stepUpVerified &&
    !r.segundaFirma &&
    $c(o, await e.getWithdrawalAgg(i.id, o.windowSeconds), t.amountCents, n)
      .outcome === `stepup`
  )
    return {
      ok: !1,
      reason: `needs_stepup`,
    };
  if (
    t.settleRequestId &&
    !(await e.settleRequest({
      requestId: t.settleRequestId,
      kind: `unload`,
      amountCents: t.amountCents,
      playerId: i.playerId,
    }))
  )
    return {
      ok: !1,
      reason: `request_mismatch`,
    };
  let s = i.balanceCents - t.amountCents,
    { applied: c } = await e.applyUnload({
      walletId: i.id,
      amountCents: t.amountCents,
      balanceAfter: s,
      operatorId: t.operatorId,
      requestKey: t.requestKey,
    });
  return {
    ok: !0,
    balanceCents: c ? s : i.balanceCents,
    duplicate: !c,
  };
}
function nl(e) {
  return e === `root`;
}
let rl;
function il(e) {
  return rl.some((t) => t.valor === e);
}
function al(e) {
  return e
    ? e.role === `root`
      ? e.esMadre
        ? [`operator`, `admin`, `root`]
        : [`operator`, `admin`]
      : e.role === `admin`
        ? e.esMadre
          ? []
          : [`operator`]
        : []
    : [];
}
let ol, sl, cl, ll;
function ul(e, t) {
  return !!e.casaId && e.casaId === t;
}
function dl(e, t, n) {
  return n && e.esMadre ? !0 : ul(e, t.casaId);
}
function fl(e, t, n) {
  return (n && e.esMadre) || ul(e, t)
    ? !0
    : !n && e.esMadre && !!e.casaId && t == null;
}
function pl(e, t) {
  return ul(e, t.casaId)
    ? (!!e.id && t.id === e.id) || t.rol === `operator`
    : !1;
}
function ml(e, t) {
  let n = rs(e.rol);
  return n === 0
    ? sl(`sin-rango`)
    : n === 1
      ? sl(`cajero`)
      : cl.has(t) || ll.has(t)
        ? t === `personal.cambiar-rol` && n !== 3
          ? sl(`solo-dueno`)
          : (t === `personal.eliminar` || t === `jugador.eliminar`) &&
              e.esMadre !== !0
            ? sl(`solo-madre`)
            : t === `personal.crear` && n !== 3 && e.esMadre !== !1
              ? sl(`alta-solo-dueno`)
              : ol
        : sl(`accion-invalida`);
}
function hl(e, t, n) {
  let r = ml(e, n);
  if (!r.ok) return r;
  let i = rs(e.rol) === 3;
  if (ll.has(n) !== (t.tipo === `jugador`)) return sl(`accion-invalida`);
  if (t.tipo === `personal`) {
    let r = t.persona;
    if (n === `personal.crear`)
      return !(i && e.esMadre) && !ul(e, r.casaId)
        ? sl(`otra-casa`)
        : al({
              role: e.rol,
              esMadre: e.esMadre,
            }).includes(r.rol)
          ? ol
          : sl(`rango-no-permitido`);
    if (n !== `personal.ver` && (!e.id || !r.id || e.id === r.id))
      return sl(`uno-mismo`);
    if (!dl(e, r, i)) return sl(`otra-casa`);
    if (!i && r.rol !== `operator`) return sl(`no-esta-debajo`);
    if (n === `personal.cambiar-rol`) {
      let n = al({
        role: e.rol,
        esMadre: e.esMadre,
      });
      if (typeof t.rolNuevo != `string` || !n.includes(t.rolNuevo))
        return sl(`rango-no-permitido`);
    }
    return ol;
  }
  if (n === `jugador.crear`) return ul(e, t.casaId) ? ol : sl(`otra-casa`);
  if (!fl(e, t.casaId, i)) return sl(`otra-casa`);
  if (n === `jugador.cambiar-cajero`) {
    if (i)
      return t.cajeroNuevo && !dl(e, t.cajeroNuevo, !0) ? sl(`otra-casa`) : ol;
    for (let n of [t.cajeroActual, t.cajeroNuevo])
      if (n && !pl(e, n)) return sl(`cartera-ajena`);
  }
  return ol;
}
function gl(e) {
  switch (e) {
    case `sin-rango`:
    case `cajero`:
    case `accion-invalida`:
      return `No tenés permiso para esto.`;
    case `solo-dueno`:
      return `Sólo el dueño puede cambiar rangos.`;
    case `solo-madre`:
      return `Sólo el panel principal puede eliminar. Vos podés sacarle el acceso o bloquearlo.`;
    case `alta-solo-dueno`:
      return `En el panel principal, las cuentas nuevas del equipo las crea el dueño.`;
    case `uno-mismo`:
      return `No podés hacer esto sobre tu propia cuenta.`;
    case `otra-casa`:
      return `No encontramos eso en tu panel.`;
    case `no-esta-debajo`:
      return `Sólo podés manejar a los cajeros de tu panel.`;
    case `rango-no-permitido`:
      return `No podés dar ese rango. Elegí uno de la lista.`;
    case `cartera-ajena`:
      return `Ese jugador es (o pasaría a ser) de un dueño o de otro administrador: eso lo cambia el dueño.`;
  }
}
function _l(e) {
  if (e == null) return null;
  let t = e.trim().replace(`,`, `.`);
  if (t === `` || !/^\d?\.?\d+$/.test(t)) return null;
  let n = Number(t);
  return !Number.isFinite(n) || n < 0 || n > 1
    ? null
    : {
        valor: n,
        texto: `${(Math.round(n * 1e3) / 10).toString().replace(`.`, `,`)}%`,
      };
}
var vl;
function yl(e) {
  return e instanceof vl;
}
let bl;
function xl(e) {
  let t = e
    .trim()
    .toLowerCase()
    .normalize(`NFD`)
    .replace(/[\u0300-\u036f]/g, ``)
    .replace(/[^a-z0-9._-]+/g, `.`)
    .replace(/\.{2,}/g, `.`)
    .replace(/^[._-]+|[._-]+$/g, ``);
  return bl.test(t) ? t : null;
}
function initializeCashierRules() {
  Rc = /^(?:\+?\p{N}|\p{L})[\p{L}\p{N}.\-_@+/:]*$/u;
  zc = /^[\p{L}][\p{L} .,'\-]*$/u;
  Bc = `El alias no puede pasar de 60 caracteres.`;
  Vc = `Ese alias tiene caracteres o espacios que no van. Escribí sólo el alias, el CBU o el número de cuenta, sin texto alrededor y sin espacios en el medio.`;
  Hc = `El nombre del titular no puede pasar de 60 caracteres.`;
  Uc = `En el titular va sólo el nombre de la persona o de la empresa: letras, espacios y, si hace falta, punto, coma, apóstrofo o guion. Sin números.`;
  Kc = zodObject({
    alias: zodString()
      .max(240, {
        message: Bc,
      })
      .transform(Gc)
      .refine((e) => e.length >= 3, {
        message: `El alias tiene que tener al menos 3 caracteres.`,
      })
      .refine((e) => e.length <= 60, {
        message: Bc,
      })
      .refine((e) => Rc.test(e), {
        message: Vc,
      }),
    titular: zodString()
      .max(240, {
        message: Hc,
      })
      .transform(Wc)
      .refine((e) => e.length >= 2, {
        message: `Escribí también a nombre de quién está la cuenta: es lo que el jugador tiene que ver en su banco antes de confirmar.`,
      })
      .refine((e) => e.length <= 60, {
        message: Hc,
      })
      .refine((e) => zc.test(e), {
        message: Uc,
      }),
  }).strict();
  rl = [
    {
      valor: `operator`,
      nombre: `Cajero`,
      hace: `Carga y descarga fichas, atiende la cola de pedidos y escribe notas sobre los jugadores.`,
    },
    {
      valor: `admin`,
      nombre: `Administrador`,
      hace: `Todo lo del cajero, más: manejar los cajeros y los jugadores de su panel (en un socio, también crear cajeros), resolver premios retenidos, anular movimientos, desbloquear cuentas, ver los vínculos entre jugadores y cerrar el sitio.`,
    },
    {
      valor: `root`,
      nombre: `Dueño`,
      hace: `Todo lo del administrador, más: cambiar cuánto cobra cada cajero y dar o quitar acceso al panel. Es la llave de todo — dala sólo a un socio.`,
    },
  ];
  ol = {
    ok: !0,
  };
  sl = (e) => ({
    ok: !1,
    motivo: e,
  });
  cl = new Set([
    `personal.ver`,
    `personal.crear`,
    `personal.acceso`,
    `personal.eliminar`,
    `personal.cambiar-rol`,
  ]);
  ll = new Set([`jugador.crear`, `jugador.eliminar`, `jugador.cambiar-cajero`]);
  vl = class extends Error {
    saldoCents;
    constructor(e) {
      (super(`sin_cupo`), (this.name = `SinCupo`), (this.saldoCents = e));
    }
  };
  bl = /^[a-z0-9][a-z0-9._-]{1,22}[a-z0-9]$/;
}
export {
  Fc,
  Lc,
  Wc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  initializeCashierRules,
};
