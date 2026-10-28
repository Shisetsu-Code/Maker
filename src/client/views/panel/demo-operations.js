/**
 * panel / demo-operations.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import {
  string as zodString,
  number as zodNumber,
  boolean as zodBoolean,
  object as zodObject,
  union as zodUnion,
  enum as zodEnum,
  literal as zodLiteral,
} from "zod";
import { Ko, Jo } from "./demo-services.js";
import { formatMoney, parseMoney, Ls, Rs, zs } from "./money-and-phone.js";
import {
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  nc,
  rc,
  ic,
  ac,
  uc,
  fc,
  gc,
  _c,
  Dc,
  Oc,
  Mc,
  Nc,
  Pc,
} from "./activity-ledger.js";
import {
  Fc,
  Lc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
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
} from "./cashier-rules.js";
import { Xl, Ql, iu, ou } from "./state-schema.js";
let su, cu, lu, uu;
function du(e) {
  return {
    id: e.yoId,
    rol: `root`,
    casaId: uu(e).id,
    esMadre: !0,
  };
}
let fu, pu, mu, hu, gu, _u, vu, yu;
function bu(e, t, n) {
  e.eventos.push({
    id: t.id(),
    cuando: t.ahora(),
    tipo: null,
    extra: null,
    actorId: e.yoId,
    ...n,
  });
}
let xu;
function Su(e, t, n, r, i, a, o) {
  n.esMadre ||
    ((n.cupo += i),
    e.cupoMovs.push({
      id: Ql(e),
      casaId: n.id,
      tipo: r,
      monto: i,
      saldo: n.cupo,
      motivo: a,
      quienId: o,
      cuando: t.ahora(),
    }));
}
let Cu;
function wu(e, t, n, r = Cu.windowSeconds) {
  let i = 0n,
    a = 0,
    o = 0;
  for (let s of e.movimientos)
    s.jugadorId !== t ||
      s.tipo !== `unload` ||
      s.anulaA !== null ||
      s.anulado ||
      (s.cuando > n - 1440 * 6e4 && (i += s.monto),
      s.cuando > a && (a = s.cuando),
      s.cuando > n - r * 1e3 && o++);
  return {
    dailyTotalCents: i,
    lastUnloadAt: a ? new Date(a) : null,
    windowCount: o,
  };
}
function Tu(e, t) {
  let n = (e) => ({
      id: e.walletId,
      playerUsername: e.username,
      balanceCents: e.saldo,
      reservedCents: 0n,
      frozen: e.congelado,
      playerId: e.id,
    }),
    r = (t) => e.jugadores.find((e) => e.walletId === t) ?? null,
    i = (t, n) => {
      let r = e.movimientos.find(
        (e) =>
          e.tipo === t && e.clave !== `` && e.clave === n && e.anulaA === null,
      );
      if (!r) return null;
      let i = gu(e, r.jugadorId);
      return i
        ? {
            walletId: i.walletId,
            amountCents: r.monto,
          }
        : null;
    },
    a = (n, a) => {
      if (i(n, a.requestKey))
        return {
          applied: !1,
        };
      let o = r(a.walletId);
      if (!o) throw Error(`sin billetera`);
      let s = mu(e, pu(e, a.operatorId)?.casaId);
      if (s && !s.esMadre)
        if (n === `load`) {
          if (!s.permiteRojo && s.cupo < a.amountCents) throw new vl(s.cupo);
          Su(e, t, s, `carga`, -a.amountCents, null, a.operatorId);
        } else Su(e, t, s, `descarga`, a.amountCents, null, a.operatorId);
      return (
        (o.saldo = a.balanceAfter),
        e.movimientos.push({
          id: t.id(),
          tipo: n,
          monto: a.amountCents,
          cuando: t.ahora(),
          jugadorId: o.id,
          operadorId: a.operatorId,
          saldoDespues: a.balanceAfter,
          clave: a.requestKey,
          anulado: !1,
          anulaA: null,
          motivo: null,
        }),
        {
          applied: !0,
        }
      );
    };
  return {
    async settleRequest(t) {
      let n = e.pedidos.findIndex(
        (e) =>
          e.id === t.requestId &&
          e.tipo === t.kind &&
          e.monto === t.amountCents &&
          e.jugadorId === t.playerId,
      );
      return n < 0 ? !1 : (e.pedidos.splice(n, 1), !0);
    },
    async getWalletByUsername(t) {
      let r = hu(e, t);
      return r ? n(r) : null;
    },
    async applyLoad(e) {
      return a(`load`, e);
    },
    async applyUnload(e) {
      return a(`unload`, e);
    },
    async findAppliedLoad(e) {
      return i(`load`, e);
    },
    async findAppliedUnload(e) {
      return i(`unload`, e);
    },
    async getWithdrawalLimits() {
      return Cu;
    },
    async getWithdrawalAgg(n, i) {
      let a = r(n);
      return a
        ? wu(e, a.id, t.ahora(), i)
        : {
            dailyTotalCents: 0n,
            lastUnloadAt: null,
            windowCount: 0,
          };
    },
  };
}
function Eu(e) {
  let t = xu(e, `requestId`),
    n = xu(e, `totpCode`);
  return {
    username: xu(e, `username`),
    amount: xu(e, `amount`),
    requestKey: xu(e, `requestKey`),
    ...(t
      ? {
          requestId: t,
        }
      : {}),
    ...(n.trim()
      ? {
          totpCode: n,
        }
      : {}),
  };
}
let Du;
function Ou(e, t, n) {
  return ku(e, t, n, e.yoId);
}
async function ku(e, t, n, r) {
  let i = Eu(n);
  try {
    let n = cu.parse(i.username),
      a = hu(e, n);
    if (!a)
      return {
        ok: !1,
        reason: `forbidden`,
      };
    let o = parseMoney(i.amount),
      s = lu.parse(i.requestKey),
      c =
        i.requestId && lu.safeParse(i.requestId).success ? i.requestId : void 0;
    if (!Lc(a.estado))
      return {
        ok: !1,
        reason: `account_closed`,
      };
    let l = await el(Tu(e, t), {
      username: n,
      amountCents: o,
      operatorId: r,
      requestKey: s,
      settleRequestId: c,
    });
    return l.ok
      ? (l.duplicate ||
          bu(e, t, {
            event: `Carga de fichas`,
            tone: `ok`,
            username: n,
            fields: [
              {
                k: `Usuario`,
                v: n,
              },
              {
                k: `Monto`,
                v: formatMoney(o),
              },
              {
                k: `Operador`,
                v: vu(e, r) ?? `—`,
              },
            ],
            actorId: r,
          }),
        iu(e),
        {
          ok: !0,
          duplicate: l.duplicate,
        })
      : {
          ok: !1,
          reason:
            l.reason === `bad_amount` ||
            l.reason === `player_not_found` ||
            l.reason === `key_mismatch` ||
            l.reason === `wallet_frozen` ||
            l.reason === `request_mismatch`
              ? l.reason
              : `error`,
        };
  } catch (e) {
    return yl(e)
      ? {
          ok: !1,
          reason: `sin_cupo`,
          cupo: formatMoney(e.saldoCents),
        }
      : {
          ok: !1,
          reason: `error`,
        };
  }
}
async function Au(e, t, n) {
  let r = Eu(n);
  try {
    let n = cu.parse(r.username),
      i = hu(e, n);
    if (!i)
      return {
        ok: !1,
        reason: `forbidden`,
      };
    let a = parseMoney(r.amount),
      o = lu.parse(r.requestKey),
      s = !1;
    if (r.totpCode !== void 0) {
      if (!Du.safeParse(r.totpCode).success)
        return {
          ok: !1,
          reason: `bad_code`,
        };
      s = !0;
    }
    let c =
        r.requestId && lu.safeParse(r.requestId).success ? r.requestId : void 0,
      l = await tl(
        Tu(e, t),
        {
          username: n,
          amountCents: a,
          operatorId: e.yoId,
          requestKey: o,
          settleRequestId: c,
        },
        new Date(t.ahora()),
        {
          stepUpVerified: s,
        },
      );
    return l.ok
      ? (l.duplicate ||
          bu(e, t, {
            event: `Descarga de fichas`,
            tone: `ok`,
            username: n,
            fields: [
              {
                k: `Usuario`,
                v: n,
              },
              {
                k: `Monto`,
                v: formatMoney(a),
              },
              {
                k: `Operador`,
                v: fu(e).username,
              },
            ],
          }),
        iu(e),
        {
          ok: !0,
          duplicate: l.duplicate,
        })
      : l.reason === `needs_second_approval`
        ? (e.firmas.some((e) => e.clave === o) ||
            (e.firmas.push({
              id: Ql(e),
              jugadorId: i.id,
              monto: a,
              pedidoPorId: e.yoId,
              cuando: t.ahora(),
              clave: o,
              ...(c
                ? {
                    pedidoId: c,
                  }
                : {}),
            }),
            bu(e, t, {
              event: `Retiro grande esperando segunda firma`,
              tone: `warn`,
              username: n,
              fields: [
                {
                  k: `Usuario`,
                  v: n,
                },
                {
                  k: `Monto`,
                  v: formatMoney(a),
                },
                {
                  k: `Lo estacionó`,
                  v: fu(e).username,
                },
              ],
              tipo: `withdrawal_second_approval_requested`,
              extra: {
                username: n,
              },
            })),
          {
            ok: !1,
            reason: `needs_second_approval`,
          })
        : l.reason === `needs_stepup`
          ? (bu(e, t, {
              event: `Retiro arriba del tope`,
              tone: `warn`,
              username: n,
              fields: [
                {
                  k: `Usuario`,
                  v: n,
                },
                {
                  k: `Monto`,
                  v: formatMoney(a),
                },
              ],
              tipo: `withdrawal_over_limit`,
              extra: {
                username: n,
              },
            }),
            {
              ok: !1,
              reason: fu(e).segundoFactor ? `needs_stepup` : `sin_autenticador`,
            })
          : {
              ok: !1,
              reason: l.reason === `bad_amount` ? `bad_amount` : l.reason,
            };
  } catch {
    return {
      ok: !1,
      reason: `error`,
    };
  }
}
function ju(e, t, n) {
  let r = lu.safeParse(n.get(`requestId`));
  if (!r.success)
    return {
      ok: !1,
    };
  let i = e.pedidos.findIndex((e) => e.id === r.data);
  return i < 0
    ? {
        ok: !1,
      }
    : (e.pedidos.splice(i, 1),
      {
        ok: !0,
      });
}
function Mu(e, t, n) {
  let r = xu(n, `on`) === `1`,
    i = cu.safeParse(n.get(`username`));
  if (!i.success)
    return {
      ok: !1,
      reason: `error`,
    };
  let a = hu(e, i.data);
  if (!a)
    return {
      ok: !1,
      reason: `forbidden`,
    };
  a.congelado = r;
  let o = xu(n, `reason`).trim().slice(0, 160);
  return (
    bu(e, t, {
      event: r ? `Plata BLOQUEADA` : `Plata liberada`,
      tone: r ? `bad` : `ok`,
      username: a.username,
      fields: [
        {
          k: `Usuario`,
          v: a.username,
        },
        ...(o
          ? [
              {
                k: `Motivo`,
                v: o,
              },
            ]
          : []),
        {
          k: `Operador`,
          v: fu(e).username,
        },
      ],
      tipo: r ? `wallet_frozen` : `wallet_unfrozen`,
      extra: {
        username: a.username,
        ...(o
          ? {
              nota: o,
            }
          : {}),
      },
    }),
    {
      ok: !0,
      frozen: r,
    }
  );
}
function Nu(e, t, n) {
  let r = xu(n, `block`) === `1`,
    i = cu.safeParse(n.get(`username`));
  if (!i.success)
    return {
      ok: !1,
      reason: `error`,
    };
  let a = hu(e, i.data);
  return a
    ? (r ? ((a.estado = `blocked`), (a.congelado = !0)) : (a.estado = `active`),
      bu(e, t, {
        event: r ? `Cuenta BLOQUEADA` : `Cuenta reabierta`,
        tone: r ? `bad` : `ok`,
        username: a.username,
        fields: [
          {
            k: `Usuario`,
            v: a.username,
          },
          {
            k: `Operador`,
            v: fu(e).username,
          },
        ],
        tipo: r ? `account_blocked` : `account_reopened`,
        extra: {
          username: a.username,
        },
      }),
      {
        ok: !0,
        status: r ? `blocked` : `active`,
        hadWallet: !0,
      })
    : {
        ok: !1,
        reason: `forbidden`,
      };
}
function Pu(e, t, n, r) {
  let i = cu.safeParse(n);
  if (!i.success)
    return {
      ok: !1,
      mensaje: `Ese jugador no es válido.`,
    };
  let a = hu(e, i.data);
  if (!a)
    return {
      ok: !1,
      mensaje: `Ese jugador no es de tu casa.`,
    };
  let o = zodString().trim().min(3).max(500).safeParse(r);
  return o.success
    ? (e.notas.push({
        id: t.id(),
        jugadorId: a.id,
        texto: o.data,
        autorId: e.yoId,
        cuando: t.ahora(),
      }),
      iu(e),
      {
        ok: !0,
        mensaje: su(`Nota guardada.`),
      })
    : {
        ok: !1,
        mensaje: `Escribí la nota (mínimo 3 letras, máximo 500).`,
      };
}
async function Fu(e, t, n, r) {
  let i = lu.safeParse(n);
  if (!i.success)
    return {
      ok: !1,
      mensaje: `Ese movimiento no es válido.`,
    };
  let a = zodString().trim().min(4).max(200).safeParse(r);
  if (!a.success)
    return {
      ok: !1,
      mensaje: `Escribí el motivo (mínimo 4 letras).`,
    };
  let o = await Xc(
    {
      async buscarMovimiento(t) {
        let n = e.movimientos.find((e) => e.id === t);
        if (!n) return null;
        let r = gu(e, n.jugadorId);
        return r
          ? {
              id: n.id,
              walletId: r.walletId,
              amountCents: n.monto,
              kind: n.tipo,
              esAnulacion: n.anulaA !== null,
              yaAnulado: n.anulado,
            }
          : null;
      },
      async bloquearBilletera(t) {
        let n = e.jugadores.find((e) => e.walletId === t);
        return n
          ? {
              balanceCents: n.saldo,
            }
          : null;
      },
      async aplicar(n) {
        let r = e.movimientos.find((e) => e.id === n.original.id),
          i = gu(e, r.jugadorId);
        ((r.anulado = !0), (r.motivo = n.motivo), (i.saldo = n.balanceAfter));
        let a = {
          id: t.id(),
          tipo: r.tipo,
          monto: r.monto,
          cuando: t.ahora(),
          jugadorId: i.id,
          operadorId: n.operatorId,
          saldoDespues: n.balanceAfter,
          clave: ``,
          anulado: !1,
          anulaA: r.id,
          motivo: n.motivo,
        };
        e.movimientos.push(a);
      },
    },
    i.data,
    e.yoId,
    a.data,
  );
  if (!o.ok)
    return {
      ok: !1,
      mensaje: Zc(o.razon),
    };
  let s = gu(e, e.movimientos.find((e) => e.id === i.data).jugadorId);
  return (
    bu(e, t, {
      event: `Movimiento anulado`,
      tone: `warn`,
      username: s.username,
      fields: [
        {
          k: `Usuario`,
          v: s.username,
        },
        {
          k: `Monto`,
          v: formatMoney(o.devuelto),
        },
        {
          k: `Motivo`,
          v: a.data,
        },
      ],
    }),
    iu(e),
    {
      ok: !0,
      mensaje: su(
        `Anulado. Se ajustaron ${formatMoney(o.devuelto)} y el jugador quedó en ${formatMoney(o.balanceCents)}.`,
      ),
    }
  );
}
async function Iu(e, t, n) {
  let r = xu(n, `id`),
    i = e.firmas.find((e) => e.id === r);
  if (!i)
    return {
      ok: !1,
      motivo: `Ya la resolvió otro admin.`,
    };
  if (i.pedidoPorId === e.yoId)
    return {
      ok: !1,
      motivo: `La firma tiene que ser de OTRA persona: vos mismo estacionaste este retiro.`,
    };
  let a = gu(e, i.jugadorId);
  if (!a)
    return {
      ok: !1,
      motivo: `Ya la resolvió otro admin.`,
    };
  let o =
      i.pedidoId && e.pedidos.some((e) => e.id === i.pedidoId)
        ? i.pedidoId
        : void 0,
    s = await tl(
      Tu(e, t),
      {
        username: a.username,
        amountCents: i.monto,
        operatorId: e.yoId,
        requestKey: i.clave ?? t.id(),
        settleRequestId: o,
      },
      new Date(t.ahora()),
      {
        segundaFirma: !0,
        stepUpVerified: !0,
      },
    );
  return s.ok
    ? ((e.firmas = e.firmas.filter((e) => e.id !== i.id)),
      bu(e, t, {
        event: `Retiro grande firmado`,
        tone: `warn`,
        username: a.username,
        fields: [
          {
            k: `Usuario`,
            v: a.username,
          },
          {
            k: `Monto`,
            v: formatMoney(i.monto),
          },
          {
            k: `Lo pidió`,
            v: vu(e, i.pedidoPorId) ?? `—`,
          },
        ],
      }),
      iu(e),
      {
        ok: !0,
      })
    : {
        ok: !1,
        motivo:
          s.reason === `insufficient_funds`
            ? `El jugador ya no tiene ese saldo: el retiro no se puede pagar como está.`
            : s.reason === `wallet_frozen`
              ? `La billetera está congelada.`
              : `No se pudo firmar (` + s.reason + `).`,
      };
}
function Lu(e, t, n) {
  let r = xu(n, `id`),
    i = e.firmas.find((e) => e.id === r);
  if (!i)
    return {
      ok: !1,
      motivo: `Ya estaba resuelta.`,
    };
  e.firmas = e.firmas.filter((e) => e.id !== r);
  let a = gu(e, i.jugadorId);
  return (
    bu(e, t, {
      event: `Retiro grande rechazado`,
      tone: `warn`,
      username: a?.username ?? null,
      fields: [
        {
          k: `Usuario`,
          v: a?.username ?? `—`,
        },
        {
          k: `Monto`,
          v: formatMoney(i.monto),
        },
      ],
    }),
    {
      ok: !0,
    }
  );
}
function Ru(e, t, n, r) {
  let i = xu(n, `id`);
  if (!/^\d{1,19}$/.test(i)) return !1;
  let a = e.retenidos.find((e) => e.id === i);
  if (!a) return !1;
  let o = gu(e, a.jugadorId);
  if (r && o) {
    let n = e.jugadas.find((e) => e.wager === a.wager);
    ((o.saldo += a.monto),
      e.jugadas.push({
        id: t.id(),
        cuando: t.ahora(),
        jugadorId: o.id,
        juego: `${n?.juego ?? `Premio`} · premio liberado`,
        apostado: 0n,
        pagado: a.monto,
        saldoDespues: o.saldo,
        wager: a.wager,
      }));
  }
  return (
    (e.retenidos = e.retenidos.filter((e) => e.id !== i)),
    e.resueltos.push({
      id: a.id,
      username: o?.username ?? null,
      monto: a.monto,
      wager: a.wager,
      cuando: t.ahora(),
      motivo: a.motivo,
      acreditado: r,
      quien: fu(e).username,
    }),
    bu(e, t, {
      event: r ? `Premio acreditado` : `Premio rechazado`,
      tone: r ? `ok` : `warn`,
      username: o?.username ?? null,
      fields: [
        {
          k: `Usuario`,
          v: o?.username ?? `—`,
        },
        {
          k: `Monto`,
          v: formatMoney(a.monto),
        },
        {
          k: `Motivo`,
          v: a.motivo,
        },
      ],
    }),
    iu(e),
    !0
  );
}
function zu(e, t, n, r) {
  if (!nl(fu(e).role))
    return {
      ok: !1,
      mensaje: `Sólo el dueño puede cambiar las comisiones.`,
    };
  let i = lu.safeParse(n);
  if (!i.success)
    return {
      ok: !1,
      mensaje: `Ese cajero no es válido.`,
    };
  let a = pu(e, i.data);
  if (!a)
    return {
      ok: !1,
      mensaje: `Ese cajero no es de tu casa.`,
    };
  if (a.id === e.yoId)
    return {
      ok: !1,
      mensaje: `No podés fijarte la comisión a vos mismo.`,
    };
  let o = Xs(typeof r == `string` ? r : ``);
  return o === null
    ? {
        ok: !1,
        mensaje: `Escribí un porcentaje entre 0 y 100. Por ejemplo: 30 o 25,5.`,
      }
    : ((a.comisionBps = o),
      bu(e, t, {
        event: `Comisión cambiada`,
        tone: `warn`,
        username: null,
        fields: [
          {
            k: `Cajero`,
            v: a.username,
          },
          {
            k: `Comisión`,
            v: Zs(o),
          },
        ],
        tipo: `comision_cambiada`,
        extra: {
          cuenta: a.username,
          bps: String(o),
        },
      }),
      {
        ok: !0,
        mensaje: su(`Comisión actualizada a ${Zs(o)}.`),
      });
}
function Bu(e, t, n, r) {
  let i = du(e);
  if (!ml(i, `jugador.cambiar-cajero`).ok)
    return {
      ok: !1,
      mensaje: `Sólo el dueño o un administrador pueden cambiar de quién es un jugador.`,
    };
  let a = lu.safeParse(n);
  if (!a.success)
    return {
      ok: !1,
      mensaje: `Ese jugador no es válido.`,
    };
  let o = r === null ? null : lu.safeParse(r);
  if (o !== null && !o.success)
    return {
      ok: !1,
      mensaje: `Ese cajero no es válido.`,
    };
  let s = gu(e, a.data);
  if (!s)
    return {
      ok: !1,
      mensaje: `Ese jugador ya no existe.`,
    };
  let c = mu(e, s.casaId);
  if (o === null && c && !c.esMadre)
    return {
      ok: !1,
      mensaje: `Un jugador de un socio siempre tiene que tener un cajero de ese socio. Elegí a quién pasárselo.`,
    };
  let l = o === null ? null : pu(e, o.data);
  if (o !== null && !l)
    return {
      ok: !1,
      mensaje: `Ese cajero no existe o está dado de baja.`,
    };
  let u = s.cajeroId ? pu(e, s.cajeroId) : null,
    d = hl(
      i,
      {
        tipo: `jugador`,
        casaId: s.casaId,
        cajeroActual: u ? yu(u) : null,
        cajeroNuevo: l ? yu(l) : null,
      },
      `jugador.cambiar-cajero`,
    );
  return d.ok
    ? (l?.id ?? null) === s.cajeroId
      ? {
          ok: !1,
          mensaje: `Ese jugador ya estaba así.`,
        }
      : ((s.cajeroId = l?.id ?? null),
        bu(e, t, {
          event: `Cajero del jugador cambiado`,
          tone: `ok`,
          username: s.username,
          fields: [
            {
              k: `Usuario`,
              v: s.username,
            },
            {
              k: `Ahora es de`,
              v: l?.username ?? `nadie`,
            },
          ],
          tipo: `cajero_del_jugador`,
          extra: {
            jugador: s.username,
            antes: u?.username ?? ``,
            ahora: l?.username ?? ``,
          },
        }),
        {
          ok: !0,
          mensaje: su(
            l
              ? `${s.username} ahora es de ${l.username}.`
              : `${s.username} quedó sin cajero.`,
          ),
        })
    : {
        ok: !1,
        mensaje:
          d.motivo === `otra-casa`
            ? `Ese cajero no es de tu casa.`
            : gl(d.motivo),
      };
}
let Vu, Hu, Uu;
function Wu(e, t, n, r, i) {
  let a = du(e);
  if (!ml(a, `personal.crear`).ok)
    return {
      ok: !1,
      mensaje: `Sólo el dueño o un administrador pueden crear cuentas del panel.`,
    };
  let o = Vu(n);
  if (!o)
    return {
      ok: !1,
      mensaje: `El nombre va de 3 a 24 caracteres: letras, números, punto, guion o guion bajo, y tiene que empezar y terminar con letra o número.`,
    };
  let s = typeof r == `string` ? r : ``;
  if (
    !al({
      role: a.rol,
      esMadre: a.esMadre,
    }).includes(s)
  )
    return {
      ok: !1,
      mensaje: gl(`rango-no-permitido`),
    };
  let c = typeof i == `string` && i !== `` ? i : a.casaId,
    l = mu(e, c);
  if (!l)
    return {
      ok: !1,
      mensaje: `Ese panel no existe. Recargá la pantalla y elegí otro.`,
    };
  let u = hl(
    a,
    {
      tipo: `personal`,
      persona: {
        id: ``,
        rol: s,
        casaId: l.id,
      },
    },
    `personal.crear`,
  );
  if (!u.ok)
    return {
      ok: !1,
      mensaje:
        u.motivo === `otra-casa`
          ? `Sólo podés crear cuentas dentro de tu casa.`
          : gl(u.motivo),
    };
  if (Hu(e, o))
    return {
      ok: !1,
      mensaje: `Ya hay alguien que se llama "${o}". Elegí otro nombre.`,
    };
  let d = t.id(),
    f = Uu(t);
  return (
    e.reservas.push({
      id: d,
      tipo: `panel`,
      username: o,
      rol: s,
      casaId: l.id,
      cuando: t.ahora(),
      confirmable: !1,
      correo: f,
    }),
    {
      ok: !0,
      adminId: d,
      correo: f,
    }
  );
}
function Gu(e, t) {
  let n = e.reservas.find((e) => e.correo === t);
  return n ? ((n.confirmable = !0), !0) : !1;
}
function Ku(e, t, n, r) {
  let i = lu.safeParse(n);
  if (!i.success)
    return {
      ok: !1,
      mensaje: `No se pudo terminar de crear la cuenta.`,
    };
  let a = e.reservas.findIndex((e) => e.id === i.data && e.tipo === `panel`),
    o = a >= 0 ? e.reservas[a] : null;
  if (!o || !o.confirmable)
    return {
      ok: !1,
      mensaje: `No se pudo terminar de crear la cuenta. Volvé a intentar desde el principio.`,
    };
  if (r !== void 0 && !(typeof r == `string` && Jo.test(r)))
    return (
      e.reservas.splice(a, 1),
      {
        ok: !1,
        mensaje: `Esta pantalla quedó desactualizada y la cuenta no se terminó de crear. Recargá la página y volvé a crearla (el nombre quedó libre).`,
      }
    );
  e.reservas.splice(a, 1);
  let s = {
    id: o.id,
    username: o.username,
    role: o.rol,
    casaId: o.casaId,
    activo: !0,
    desde: t.ahora(),
    correo: o.correo,
    comisionBps: null,
    segundoFactor: !1,
    demo: !1,
    whatsapp: null,
    enReparto: !1,
    alias: null,
    aliasTitular: null,
  };
  return (
    e.personal.push(s),
    e.jugadores.push({
      id: t.id(),
      walletId: t.id(),
      username: o.username,
      casaId: o.casaId,
      saldo: 0n,
      congelado: !1,
      estado: `active`,
      cajeroId: null,
      alta: t.ahora(),
      esStaff: !0,
      alerta: null,
      limite: null,
    }),
    bu(e, t, {
      event: `Cuenta del panel creada`,
      tone: `ok`,
      username: null,
      fields: [
        {
          k: `Usuario`,
          v: s.username,
        },
        {
          k: `Rango`,
          v: _u(s.role),
        },
        {
          k: `Panel`,
          v: mu(e, s.casaId)?.esMadre
            ? `casa madre`
            : (mu(e, s.casaId)?.nombre ?? `—`),
        },
        {
          k: `Creó`,
          v: fu(e).username,
        },
      ],
      tipo: `acceso_al_panel`,
      extra: {
        cuenta: s.username,
        creada: `true`,
        rol: s.role,
      },
    }),
    {
      ok: !0,
      mensaje: su(
        `Listo. Pasale los datos a ${s.username}. Esta contraseña no vence sola: si se la dictaste por chat, pedile que la cambie desde Mi seguridad.`,
      ),
    }
  );
}
function qu(e, t) {
  let n = lu.safeParse(t);
  n.success && (e.reservas = e.reservas.filter((e) => e.id !== n.data));
}
function Ju(e, t, n, r) {
  let i = du(e);
  if (!ml(i, `personal.cambiar-rol`).ok)
    return {
      ok: !1,
      mensaje: `Sólo el dueño puede cambiar rangos.`,
    };
  let a = lu.safeParse(n);
  if (!a.success)
    return {
      ok: !1,
      mensaje: `Esa persona no es válida.`,
    };
  if (a.data === e.yoId)
    return {
      ok: !1,
      mensaje: `No podés cambiarte el rango a vos mismo.`,
    };
  let o = pu(e, a.data);
  if (!o)
    return {
      ok: !1,
      mensaje: gl(`otra-casa`),
    };
  let s = typeof r == `string` ? r : ``;
  if (!il(s))
    return {
      ok: !1,
      mensaje: `Elegí un rol de la lista.`,
    };
  let c = hl(
    i,
    {
      tipo: `personal`,
      persona: yu(o),
      rolNuevo: s,
    },
    `personal.cambiar-rol`,
  );
  if (!c.ok)
    return {
      ok: !1,
      mensaje: gl(c.motivo),
    };
  if (o.role === s)
    return {
      ok: !1,
      mensaje: `Esa persona ya tenía ese rango.`,
    };
  let l = o.role;
  return (
    (o.role = s),
    bu(e, t, {
      event: `Rango cambiado`,
      tone: `warn`,
      username: null,
      fields: [
        {
          k: `Usuario`,
          v: o.username,
        },
        {
          k: `Rango`,
          v: _u(s),
        },
      ],
      tipo: `acceso_al_panel`,
      extra: {
        cuenta: o.username,
        antes: l,
        ahora: s,
      },
    }),
    {
      ok: !0,
      mensaje: su(`${o.username} quedó como ${_u(s)}.`),
    }
  );
}
function Yu(e, t, n, r) {
  let i = du(e);
  if (!ml(i, `personal.acceso`).ok)
    return {
      ok: !1,
      mensaje: `Sólo el dueño o un administrador pueden dar o quitar acceso.`,
    };
  let a = lu.safeParse(n);
  if (!a.success)
    return {
      ok: !1,
      mensaje: `Esa persona no es válida.`,
    };
  if (typeof r != `boolean`)
    return {
      ok: !1,
      mensaje: `No se pudo guardar. Probá de nuevo.`,
    };
  if (a.data === e.yoId)
    return {
      ok: !1,
      mensaje: `No podés sacarte el acceso a vos mismo.`,
    };
  let o = pu(e, a.data);
  if (!o)
    return {
      ok: !1,
      mensaje: gl(`otra-casa`),
    };
  let s = hl(
    i,
    {
      tipo: `personal`,
      persona: yu(o),
    },
    `personal.acceso`,
  );
  return s.ok
    ? o.activo === r
      ? {
          ok: !1,
          mensaje: r
            ? `Esa persona ya tenía acceso.`
            : `Esa persona ya estaba sin acceso.`,
        }
      : ((o.activo = r),
        bu(e, t, {
          event: r ? `Acceso devuelto` : `Acceso quitado`,
          tone: r ? `ok` : `warn`,
          username: null,
          fields: [
            {
              k: `Usuario`,
              v: o.username,
            },
          ],
          tipo: `acceso_al_panel`,
          extra: {
            cuenta: o.username,
            activo: String(r),
          },
        }),
        {
          ok: !0,
          mensaje: su(
            r
              ? `${o.username} vuelve a entrar al panel.`
              : `${o.username} ya no entra al panel.`,
          ),
        })
    : {
        ok: !1,
        mensaje: gl(s.motivo),
      };
}
function Xu(e, t, n) {
  let r = du(e);
  if (!ml(r, `personal.eliminar`).ok)
    return {
      ok: !1,
      mensaje: `Sólo el panel principal puede eliminar cuentas. Vos podés sacarle el acceso.`,
    };
  let i = lu.safeParse(n);
  if (!i.success)
    return {
      ok: !1,
      mensaje: `Esa persona no es válida.`,
    };
  if (i.data === e.yoId)
    return {
      ok: !1,
      mensaje: `No podés eliminarte a vos mismo.`,
    };
  let a = pu(e, i.data);
  if (!a)
    return {
      ok: !1,
      mensaje: `Esa cuenta ya no está.`,
    };
  let o = hl(
    r,
    {
      tipo: `personal`,
      persona: yu(a),
    },
    `personal.eliminar`,
  );
  if (!o.ok)
    return {
      ok: !1,
      mensaje: gl(o.motivo),
    };
  let s = e.movimientos.filter((e) => e.operadorId === a.id).length,
    c = e.notas.filter((e) => e.autorId === a.id).length,
    l = e.jugadores.filter((e) => e.cajeroId === a.id && !e.esStaff),
    u = [
      s > 0 ? `${s} ${s === 1 ? `movimiento` : `movimientos`}` : null,
      c > 0 ? `${c} ${c === 1 ? `nota` : `notas`}` : null,
      l.length > 0
        ? `${l.length} ${l.length === 1 ? `jugador a cargo` : `jugadores a cargo`}`
        : null,
    ].filter(Boolean),
    d = mu(e, a.casaId),
    f =
      d && !d.esMadre
        ? e.personal.find(
            (e) => e.casaId === d.id && e.role === `root` && e.id !== a.id,
          )
        : void 0;
  for (let e of l) e.cajeroId = f?.id ?? null;
  return (
    (e.personal = e.personal.filter((e) => e.id !== a.id)),
    (e.accesos = e.accesos.filter((e) => e.adminId !== a.id)),
    e.reparto.prioridadAdminId === a.id &&
      (e.reparto = {
        ...e.reparto,
        modo: `equitativo`,
        prioridadAdminId: null,
      }),
    (u.length > 0 || e.firmas.some((e) => e.pedidoPorId === a.id)) &&
      e.bajas.push({
        id: a.id,
        username: a.username,
        role: a.role,
        casaId: a.casaId,
      }),
    bu(e, t, {
      event: `Cuenta del panel eliminada`,
      tone: `bad`,
      username: null,
      fields: [
        {
          k: `Usuario`,
          v: a.username,
        },
        {
          k: `Rango`,
          v: _u(a.role),
        },
      ],
      tipo: `acceso_al_panel`,
      extra: {
        cuenta: a.username,
        eliminada: `true`,
      },
    }),
    {
      ok: !0,
      mensaje: su(
        u.length === 0
          ? `${a.username} se eliminó del panel.`
          : `${a.username} salió de la lista. Como ya operó (${u.join(`, `)}), su nombre queda guardado para que el historial siga diciendo quién hizo cada cosa. No puede entrar más.`,
      ),
    }
  );
}
function Zu(e, t, n) {
  let r = du(e),
    i = ml(r, `jugador.eliminar`);
  if (!i.ok)
    return {
      ok: !1,
      mensaje: gl(i.motivo),
    };
  let a = lu.safeParse(n);
  if (!a.success)
    return {
      ok: !1,
      mensaje: `Ese jugador no es válido.`,
    };
  let o = gu(e, a.data);
  if (!o)
    return {
      ok: !1,
      mensaje: `Esa cuenta ya no existe.`,
    };
  let s = hl(
    r,
    {
      tipo: `jugador`,
      casaId: o.casaId,
    },
    `jugador.eliminar`,
  );
  if (!s.ok)
    return {
      ok: !1,
      mensaje: gl(s.motivo),
    };
  if (o.esStaff)
    return {
      ok: !1,
      mensaje: `Esa cuenta es de alguien del personal. Sacale el acceso desde Personal en vez de borrarla.`,
    };
  let c = e.movimientos.filter(
      (e) => e.jugadorId === o.id && e.tipo === `load` && e.anulaA === null,
    ).length,
    l = e.movimientos.filter(
      (e) => e.jugadorId === o.id && e.tipo === `unload` && e.anulaA === null,
    ).length,
    u = e.jugadas.filter((e) => e.jugadorId === o.id).length;
  if (c + l + u > 0 || o.saldo !== 0n)
    return {
      ok: !1,
      mensaje: `No se puede borrar: tiene ${[c > 0 ? `${c} ${c === 1 ? `carga` : `cargas`}` : null, l > 0 ? `${l} ${l === 1 ? `retiro` : `retiros`}` : null, u > 0 ? `${u} ${u === 1 ? `jugada` : `jugadas`}` : null, o.saldo === 0n ? null : `${formatMoney(o.saldo)} de saldo`].filter(Boolean).join(`, `)}. Esas filas son la contabilidad del casino y sin ellas el arqueo deja de cerrar. Bloqueala en vez de borrarla.`,
    };
  ((e.jugadores = e.jugadores.filter((e) => e.id !== o.id)),
    (e.pedidos = e.pedidos.filter((e) => e.jugadorId !== o.id)),
    (e.notas = e.notas.filter((e) => e.jugadorId !== o.id)),
    (e.hilos = e.hilos.filter((e) => e.jugadorId !== o.id)),
    (e.retenidos = e.retenidos.filter((e) => e.jugadorId !== o.id)),
    (e.firmas = e.firmas.filter((e) => e.jugadorId !== o.id)));
  for (let t of e.trabadas) t.jugadorId === o.id && (t.jugadorId = null);
  return (
    bu(e, t, {
      event: `Jugador eliminado`,
      tone: `bad`,
      username: null,
      fields: [
        {
          k: `Usuario`,
          v: o.username,
        },
      ],
    }),
    {
      ok: !0,
      mensaje: su(
        `${o.username} se eliminó. Su cuenta de acceso sigue existiendo en Supabase: si querés que no pueda volver a registrarse, borrala también desde ahí.`,
      ),
    }
  );
}
function Qu(e, t, n, r) {
  let i = du(e),
    a = hl(
      i,
      {
        tipo: `jugador`,
        casaId: i.casaId,
      },
      `jugador.crear`,
    );
  if (!a.ok)
    return {
      ok: !1,
      mensaje: gl(a.motivo),
    };
  let o = Vu(n);
  if (!o)
    return {
      ok: !1,
      mensaje: `El usuario va de 3 a 24 caracteres: letras, números, punto, guion o guion bajo, y empieza y termina con letra o número.`,
    };
  if (r !== !0)
    return {
      ok: !1,
      mensaje: `Marcá que el jugador te dijo que es mayor de 18 años.`,
    };
  if (Hu(e, o))
    return {
      ok: !1,
      mensaje: `Ya hay un jugador que se llama ${o}. Elegí otro usuario.`,
    };
  let s = t.id(),
    c = Uu(t);
  return (
    e.reservas.push({
      id: s,
      tipo: `jugador`,
      username: o,
      rol: `operator`,
      casaId: i.casaId,
      cuando: t.ahora(),
      confirmable: !1,
      correo: c,
    }),
    {
      ok: !0,
      reservaId: s,
      correo: c,
      usuario: o,
    }
  );
}
function $u(e, t, n) {
  let r = lu.safeParse(n);
  if (!r.success)
    return {
      ok: !1,
      mensaje: `No se pudo terminar de crear el jugador.`,
    };
  let i = e.reservas.findIndex((e) => e.id === r.data && e.tipo === `jugador`),
    a = i >= 0 ? e.reservas[i] : null;
  return !a || !a.confirmable
    ? {
        ok: !1,
        mensaje: `No se pudo terminar de crear el jugador. Volvé a intentar desde el principio.`,
      }
    : (e.reservas.splice(i, 1),
      e.jugadores.push({
        id: t.id(),
        walletId: t.id(),
        username: a.username,
        casaId: a.casaId,
        saldo: 0n,
        congelado: !1,
        estado: `active`,
        cajeroId: e.yoId,
        alta: t.ahora(),
        esStaff: !1,
        alerta: null,
        limite: null,
      }),
      bu(e, t, {
        event: `Jugador creado`,
        tone: `ok`,
        username: a.username,
        fields: [
          {
            k: `Usuario`,
            v: a.username,
          },
          {
            k: `Creó`,
            v: fu(e).username,
          },
        ],
        tipo: `jugador_creado`,
        extra: {
          username: a.username,
        },
      }),
      {
        ok: !0,
        mensaje: su(`Listo: ${a.username} ya puede entrar con su usuario.`),
      });
}
function ed(e, t, n) {
  let r = zodString().trim().min(2).max(40).safeParse(n);
  if (!r.success)
    return {
      ok: !1,
      mensaje: `El nombre va de 2 a 40 caracteres.`,
    };
  if (
    e.casas.some(
      (e) =>
        e.nombre.toLocaleLowerCase(`es`) === r.data.toLocaleLowerCase(`es`),
    )
  )
    return {
      ok: !1,
      mensaje: `Ya hay un socio con ese nombre.`,
    };
  if (e.casas.length >= 40)
    return {
      ok: !1,
      mensaje: `En la demo hay un tope de 40 paneles.`,
    };
  let i = {
    id: t.id(),
    nombre: r.data,
    esMadre: !1,
    activa: !0,
    permiteRojo: !1,
    cupo: 0n,
    desde: t.ahora(),
  };
  return (
    e.casas.push(i),
    bu(e, t, {
      event: `Panel creado`,
      tone: `warn`,
      username: null,
      fields: [
        {
          k: `Panel`,
          v: i.nombre,
        },
      ],
      tipo: `casa_creada`,
      extra: {
        panel: i.nombre,
      },
    }),
    {
      ok: !0,
      mensaje: su(
        `Listo: ${i.nombre} ya tiene su panel. Ahora dale acceso y cargale fichas cuando te transfiera.`,
      ),
      id: i.id,
    }
  );
}
function td(e, t, n, r) {
  let i = lu.safeParse(n);
  if (!i.success || typeof r != `boolean`)
    return {
      ok: !1,
      mensaje: `Ese socio no es válido.`,
    };
  let a = mu(e, i.data);
  return !a || a.esMadre
    ? {
        ok: !1,
        mensaje: `No se pudo. La casa madre no se puede apagar.`,
      }
    : ((a.activa = r),
      bu(e, t, {
        event: r ? `Panel activado` : `Panel desactivado`,
        tone: `warn`,
        username: null,
        fields: [
          {
            k: `Panel`,
            v: a.nombre,
          },
        ],
        tipo: r ? `casa_activada` : `casa_desactivada`,
        extra: {
          panel: a.nombre,
        },
      }),
      {
        ok: !0,
        mensaje: su(
          r
            ? `Socio activado.`
            : `Socio apagado: su gente ya no entra al panel.`,
        ),
      });
}
function nd(e, t, n, r) {
  let i = lu.safeParse(n);
  if (!i.success || typeof r != `boolean`)
    return {
      ok: !1,
      mensaje: `Ese socio no es válido.`,
    };
  let a = mu(e, i.data);
  return !a || a.esMadre
    ? {
        ok: !1,
        mensaje: `No se pudo.`,
      }
    : ((a.permiteRojo = r),
      bu(e, t, {
        event: r ? `Permitió cargar en rojo` : `Bloqueó cargar en rojo`,
        tone: `warn`,
        username: null,
        fields: [
          {
            k: `Panel`,
            v: a.nombre,
          },
        ],
        tipo: r ? `casa_rojo_permitido` : `casa_rojo_bloqueado`,
        extra: {
          panel: a.nombre,
        },
      }),
      {
        ok: !0,
        mensaje: su(
          r
            ? `Ahora puede cargar con el cupo en cero: lo que cargue de más queda como deuda.`
            : `Vuelve a frenar en cero.`,
        ),
      });
}
function rd(e, t, n) {
  let r = lu.safeParse(n);
  if (!r.success)
    return {
      ok: !1,
      mensaje: `Ese socio no es válido.`,
    };
  let i = mu(e, r.data);
  if (!i)
    return {
      ok: !1,
      mensaje: `Ese panel ya no existe.`,
    };
  if (i.esMadre)
    return {
      ok: !1,
      mensaje: `El panel principal no se puede borrar.`,
    };
  let a = e.personal.filter((e) => e.casaId === i.id).length,
    o = e.bajas.filter((e) => e.casaId === i.id).length,
    s = e.jugadores.filter((e) => e.casaId === i.id).length,
    c = e.cupoMovs.filter((e) => e.casaId === i.id).length,
    l = [];
  if (
    (a > 0 &&
      l.push(
        `${a} ${a === 1 ? `persona en su equipo` : `personas en su equipo`}`,
      ),
    o > 0 &&
      l.push(
        `${o} ${o === 1 ? `cuenta dada de baja que ya operó` : `cuentas dadas de baja que ya operaron`}`,
      ),
    s > 0 && l.push(`${s} ${s === 1 ? `jugador` : `jugadores`}`),
    c > 0 &&
      l.push(
        `${c} ${c === 1 ? `movimiento de fichas` : `movimientos de fichas`}`,
      ),
    i.cupo !== 0n && l.push(`${formatMoney(i.cupo)} en fichas`),
    l.length > 0)
  ) {
    let e =
      l.length > 1 ? `${l.slice(0, -1).join(`, `)} y ${l[l.length - 1]}` : l[0];
    return {
      ok: !1,
      mensaje: `No se puede borrar ${i.nombre}: todavía tiene ${e}. Un panel con historial no se borra — se APAGA, y su gente queda afuera al instante sin perder nada.`,
    };
  }
  return (
    (e.casas = e.casas.filter((e) => e.id !== i.id)),
    (e.reservas = e.reservas.filter((e) => e.casaId !== i.id)),
    bu(e, t, {
      event: `Panel eliminado`,
      tone: `bad`,
      username: null,
      fields: [
        {
          k: `Panel`,
          v: i.nombre,
        },
      ],
      tipo: `casa_eliminada`,
      extra: {
        panel: i.nombre,
      },
    }),
    {
      ok: !0,
      mensaje: su(`Listo: el panel de ${i.nombre} ya no existe.`),
    }
  );
}
function id(e, t, n, r, i) {
  let a = lu.safeParse(n);
  if (!a.success)
    return {
      ok: !1,
      mensaje: `Esa casa no es válida.`,
    };
  let o = typeof r == `string` ? r.trim() : ``,
    s = o.startsWith(`-`),
    c;
  try {
    c = parseMoney(o.replace(/^-/, ``));
  } catch {
    return {
      ok: !1,
      mensaje: `Escribí un monto válido.`,
    };
  }
  if (c <= 0n)
    return {
      ok: !1,
      mensaje: `El monto tiene que ser mayor a cero.`,
    };
  let l = zodString()
    .trim()
    .max(200)
    .safeParse(typeof i == `string` ? i : ``);
  if (!l.success)
    return {
      ok: !1,
      mensaje: `Ese motivo es muy largo.`,
    };
  if (s && l.data.length < 4)
    return {
      ok: !1,
      mensaje: `Para descontar cupo escribí el motivo (mínimo 4 letras).`,
    };
  let u = mu(e, a.data);
  if (!u || u.esMadre)
    return {
      ok: !1,
      mensaje: `Esa casa no existe, o es la casa madre (que no lleva cupo).`,
    };
  let d = s ? -c : c;
  return (
    Su(e, t, u, d >= 0n ? `recarga` : `ajuste`, d, l.data || null, e.yoId),
    bu(e, t, {
      event: s ? `Cupo descontado` : `Cupo cargado`,
      tone: `warn`,
      username: null,
      fields: [
        {
          k: `Panel`,
          v: u.nombre,
        },
        {
          k: `Monto`,
          v: (s ? `−` : ``) + formatMoney(c),
        },
        {
          k: `Le queda`,
          v: formatMoney(u.cupo),
        },
      ],
    }),
    iu(e),
    {
      ok: !0,
      mensaje: su(`Listo. Le queda ${formatMoney(u.cupo)}.`),
      cupo: formatMoney(u.cupo),
    }
  );
}
let ad;
function od(e, t) {
  let n = lu.safeParse(t);
  return n.success
    ? {
        ok: !0,
        movimientos: e.cupoMovs
          .filter((e) => e.casaId === n.data)
          .sort(
            (e, t) =>
              t.cuando - e.cuando || Number(BigInt(t.id) - BigInt(e.id)),
          )
          .slice(0, 200)
          .map((t) => ({
            id: t.id,
            tipo: t.tipo,
            monto:
              (t.monto < 0n ? `−` : `+`) +
              formatMoney(t.monto < 0n ? -t.monto : t.monto),
            saldo: formatMoney(t.saldo),
            motivo: t.motivo,
            quien: vu(e, t.quienId),
            cuando: ad(t.cuando),
          })),
      }
    : {
        ok: !1,
        movimientos: [],
      };
}
function sd(e, t, n) {
  let r = typeof n == `string` ? n.trim() : ``;
  if (r === ``)
    return (
      (e.config.rtp = null),
      bu(e, t, {
        event: `RTP cambiado`,
        tone: `bad`,
        username: null,
        fields: [
          {
            k: `RTP`,
            v: `el de cada estudio`,
          },
          {
            k: `Lo cambió`,
            v: fu(e).username,
          },
        ],
        tipo: `rtp_cambiado`,
        extra: {},
      }),
      {
        ok: !0,
        mensaje: su(`Listo: cada juego vuelve a usar el RTP de su estudio.`),
      }
    );
  let i = r.replace(`%`, ``).replace(`,`, `.`).trim();
  if (!/^\d+(\.\d+)?$/.test(i))
    return {
      ok: !1,
      mensaje: `Escribí sólo el número. Por ejemplo: 85`,
    };
  let a = _l((Number(i) / 100).toFixed(4));
  return a
    ? ((e.config.rtp = a.texto),
      bu(e, t, {
        event: `RTP cambiado`,
        tone: `bad`,
        username: null,
        fields: [
          {
            k: `RTP`,
            v: a.texto,
          },
          {
            k: `Lo cambió`,
            v: fu(e).username,
          },
        ],
        tipo: `rtp_cambiado`,
        extra: {
          rtp: a.texto,
        },
      }),
      {
        ok: !0,
        mensaje: su(`Listo: los juegos se abren al ${a.texto} de retorno.`),
      })
    : {
        ok: !1,
        mensaje: `Tiene que ser un número de 0 a 100. Arriba de 100 el casino pagaría más de lo que recibe.`,
      };
}
function cd(e, t, n) {
  let r = xu(n, `on`) === `1`;
  ((e.config.mantenimiento = r),
    bu(e, t, {
      event: r ? `Sitio CERRADO (mantenimiento)` : `Sitio reabierto`,
      tone: r ? `bad` : `warn`,
      username: null,
      fields: [
        {
          k: `Lo hizo`,
          v: fu(e).username,
        },
      ],
      tipo: r ? `maintenance_on` : `maintenance_off`,
      extra: {},
    }));
}
let ld;
function ud(e, t, n, r) {
  let i = ld.safeParse(n),
    a = zodString()
      .max(60)
      .safeParse(r ?? ``);
  if (!i.success || !a.success)
    return {
      ok: !1,
      mensaje: `Esa apuesta no es válida.`,
    };
  let o = e.trabadas.find((e) => e.wagerId === i.data && e.pairCode === a.data);
  return !o || o.reintentadaEn !== null
    ? {
        ok: !1,
        mensaje: `Esa apuesta ya no estaba trabada.`,
      }
    : ((o.intentos = 0),
      (o.ultimoError = null),
      (o.ultimoIntento = t.ahora()),
      (o.reintentadaEn = t.ahora()),
      bu(e, t, {
        event: `Apuesta reintentada`,
        tone: `warn`,
        username: null,
        fields: [
          {
            k: `Ronda`,
            v: o.wagerId,
          },
        ],
      }),
      {
        ok: !0,
        mensaje: su(
          `Listo. El cobrador la va a intentar de nuevo en los próximos 10 minutos.`,
        ),
      });
}
function dd(e, t, n, r, i) {
  let a = ld.safeParse(n),
    o = zodString()
      .max(60)
      .safeParse(r ?? ``);
  if (!a.success || !o.success)
    return {
      ok: !1,
      mensaje: `Esa apuesta no es válida.`,
    };
  let s = zodString().trim().min(5).max(500).safeParse(i);
  if (!s.success)
    return {
      ok: !1,
      mensaje: `Escribí el motivo (al menos 5 letras). Queda como respaldo.`,
    };
  let c = e.trabadas.find((e) => e.wagerId === a.data && e.pairCode === o.data);
  return c
    ? ((e.trabadas = e.trabadas.filter((e) => e !== c)),
      bu(e, t, {
        event: `Apuesta cerrada a mano`,
        tone: `warn`,
        username: (c.jugadorId ? gu(e, c.jugadorId) : null)?.username ?? null,
        fields: [
          {
            k: `Ronda`,
            v: c.wagerId,
          },
          {
            k: `Motivo`,
            v: s.data,
          },
        ],
      }),
      {
        ok: !0,
        mensaje: su(`Cerrada. Sale del contador y el aviso deja de repetirse.`),
      })
    : {
        ok: !1,
        mensaje: `Esa apuesta ya estaba cerrada.`,
      };
}
let fd;
function pd(e, t, n, r) {
  let i = lu.safeParse(n),
    a = zodString()
      .max(40)
      .safeParse(r ?? ``);
  if (!i.success || !a.success)
    return {
      ok: !1,
      mensaje: `Datos inválidos.`,
    };
  let o = pu(e, i.data);
  if (!o) return fd;
  let s = a.data.trim().length === 0,
    c = s ? null : Rs(a.data);
  return !s && c === null
    ? {
        ok: !1,
        mensaje: `Ese número no se entiende. Escribilo como 261 720-1021, o con + adelante si es de otro país.`,
      }
    : ((o.whatsapp = c),
      c === null && (o.enReparto = !1),
      bu(e, t, {
        event: `WhatsApp de un cajero cambiado`,
        tone: `warn`,
        username: null,
        fields: [
          {
            k: `Cuenta`,
            v: o.username,
          },
        ],
        tipo: `reparto_numero_cambiado`,
        extra: {
          cuenta: o.username,
        },
      }),
      {
        ok: !0,
        mensaje: su(s ? `Número borrado.` : `Número guardado: ` + zs(c)),
      });
}
function md(e, t, n, r, i) {
  let a = lu.safeParse(n);
  if (!a.success)
    return {
      ok: !1,
      mensaje: `Datos inválidos.`,
    };
  let o = qc(r, i);
  if (!o.ok)
    return {
      ok: !1,
      mensaje: o.mensaje,
    };
  let s = pu(e, a.data);
  if (!s || !s.activo)
    return {
      ok: !1,
      mensaje: `Esa cuenta ya no está activa. Recargá la pantalla: puede que la hayan archivado o borrado.`,
    };
  if (
    ((s.alias = o.valor?.alias ?? null),
    (s.aliasTitular = o.valor?.titular ?? null),
    bu(e, t, {
      event: `Alias de cobro cambiado`,
      tone: `warn`,
      username: null,
      fields: [
        {
          k: `Cuenta`,
          v: s.username,
        },
      ],
      tipo: `reparto_alias_cambiado`,
      extra: {
        cuenta: s.username,
      },
    }),
    o.valor === null)
  )
    return {
      ok: !0,
      mensaje: su(`Alias borrado. El jugador vuelve a ver sólo el WhatsApp.`),
    };
  if (!s.whatsapp)
    return {
      ok: !1,
      mensaje: `Alias guardado, pero TODAVÍA NO SE MUESTRA: esa persona no tiene el WhatsApp cargado, y el jugador ve el alias del número al que le escribe. Cargale el número en esta misma fila.`,
    };
  let c = Yc(o.valor);
  return {
    ok: !0,
    mensaje: su(`El jugador va a ver: ${c?.renglon ?? o.valor.alias}`),
  };
}
function hd(e, t, n, r) {
  let i = lu.safeParse(n),
    a = zodBoolean().safeParse(r);
  if (!i.success || !a.success)
    return {
      ok: !1,
      mensaje: `Datos inválidos.`,
    };
  let o = pu(e, i.data);
  return !o || (a.data && !o.whatsapp)
    ? {
        ok: !1,
        mensaje: `Cargale primero el número de WhatsApp.`,
      }
    : ((o.enReparto = a.data),
      bu(e, t, {
        event: a.data
          ? `Sumó a alguien al reparto`
          : `Sacó a alguien del reparto`,
        tone: `warn`,
        username: null,
        fields: [
          {
            k: `Cuenta`,
            v: o.username,
          },
        ],
        tipo: a.data ? `reparto_alguien_entra` : `reparto_alguien_sale`,
        extra: {
          cuenta: o.username,
        },
      }),
      {
        ok: !0,
        mensaje: su(a.data ? `Entra en el reparto.` : `Sale del reparto.`),
      });
}
function gd(e, t, n, r, i) {
  let a = zodEnum([`equitativo`, `prioridad`]).safeParse(n),
    o = zodString()
      .uuid()
      .nullable()
      .safeParse(r ?? null),
    s = zodNumber().int().min(1).max(100).safeParse(i);
  return !a.success || !o.success || !s.success
    ? {
        ok: !1,
        mensaje: `Datos inválidos.`,
      }
    : a.data === `prioridad` && o.data === null
      ? {
          ok: !1,
          mensaje: `Elegí a quién le das prioridad.`,
        }
      : ((e.reparto = {
          modo: a.data,
          prioridadAdminId: a.data === `prioridad` ? o.data : null,
          prioridadPct: s.data,
        }),
        bu(e, t, {
          event: `Reparto cambiado`,
          tone: `warn`,
          username: null,
          fields: [
            {
              k: `Modo`,
              v: a.data === `equitativo` ? `parejo` : `prioridad`,
            },
          ],
          tipo: `reparto_cambiado`,
          extra: {},
        }),
        {
          ok: !0,
          mensaje: su(
            a.data === `equitativo`
              ? `Los jugadores nuevos se reparten parejo.`
              : `Prioridad guardada.`,
          ),
        });
}
function _d(e) {
  let t = new Map();
  for (let n of e.personal) {
    if (!n.whatsapp) continue;
    let e = Jc(n.alias, n.aliasTitular);
    t.set(n.whatsapp, [...(t.get(n.whatsapp) ?? []), e]);
  }
  let n = new Set();
  for (let r of e.personal) {
    if (!r.whatsapp || !Jc(r.alias, r.aliasTitular)) continue;
    let e = t.get(r.whatsapp),
      i = e[0];
    i &&
      e.every(
        (e) => e !== null && e.alias === i.alias && e.titular === i.titular,
      ) &&
      n.add(r.id);
  }
  return n;
}
function vd(e, t, n) {
  let r = Ls(n);
  return r.ok
    ? r.e164 === e.config.numeroGeneral && e.config.numeroGeneralGuardado
      ? {
          ok: !0,
          mensaje: `Ya era ese número: ${r.visible}. No se cambió nada.`,
        }
      : ((e.config.numeroGeneral = r.e164),
        (e.config.numeroGeneralGuardado = !0),
        bu(e, t, {
          event: `WhatsApp general cambiado`,
          tone: `warn`,
          username: null,
          fields: [
            {
              k: `Ahora`,
              v: r.visible,
            },
          ],
          tipo: `numero_general_cambiado`,
          extra: {},
        }),
        {
          ok: !0,
          mensaje: su(`Listo: el casino atiende en ${r.visible}.`),
        })
    : {
        ok: !1,
        mensaje: r.mensaje,
      };
}
function yd(e, t, n) {
  return typeof n == `boolean`
    ? e.config.bonoGuardado && e.config.bonoPrendido === n
      ? {
          ok: !0,
          prendido: n,
          mensaje: n
            ? `Ya estaba prendido. No se cambió nada.`
            : `Ya estaba apagado. No se cambió nada.`,
        }
      : ((e.config.bonoPrendido = n),
        (e.config.bonoGuardado = !0),
        bu(e, t, {
          event: n ? `Bono del lobby prendido` : `Bono del lobby apagado`,
          tone: `warn`,
          username: null,
          fields: [
            {
              k: `Lo hizo`,
              v: fu(e).username,
            },
          ],
        }),
        {
          ok: !0,
          prendido: n,
          mensaje: su(
            n
              ? `Listo: el lobby muestra el bono de bienvenida.`
              : `Listo: el lobby ya no muestra el bono.`,
          ),
        })
    : {
        ok: !1,
        mensaje: `Datos inválidos.`,
      };
}
function bd(e, t, n, r) {
  let i = lu.safeParse(n),
    a = zodBoolean().safeParse(r);
  if (!i.success || !a.success)
    return {
      ok: !1,
      mensaje: `Datos inválidos.`,
    };
  if (i.data === e.yoId && a.data)
    return {
      ok: !1,
      mensaje: `No te la podés prender a vos mismo: quedarías sin el botón para apagarla.`,
    };
  let o = pu(e, i.data);
  return o
    ? ((o.demo = a.data),
      bu(e, t, {
        event: a.data
          ? `Datos de muestra prendidos`
          : `Datos de muestra apagados`,
        tone: `warn`,
        username: null,
        fields: [
          {
            k: `Cuenta`,
            v: o.username,
          },
        ],
      }),
      {
        ok: !0,
        mensaje: su(
          a.data
            ? `${o.username} ahora ve datos de muestra.`
            : `${o.username} vuelve a ver los datos de verdad.`,
        ),
      })
    : {
        ok: !1,
        mensaje: `Esa cuenta ya no existe.`,
      };
}
function xd(e) {
  let t = e.id().replace(/-/g, ``),
    n = ``;
  for (let e = 0; e < 8; e++)
    n += `abcdefghjkmnpqrstuvwxyz23456789`[
      parseInt(t.slice(e * 2, e * 2 + 2), 16) % 31
    ];
  return n;
}
function Sd(e, t) {
  return e.miLink.link
    ? {
        ok: !0,
        mensaje: `Ya tenías tu link: es este.`,
        link: e.miLink.link,
      }
    : ((e.miLink.link = {
        id: t.id(),
        codigo: xd(t),
      }),
      bu(e, t, {
        event: `Creó su link de referido`,
        tone: `ok`,
        username: null,
        fields: [
          {
            k: `Cuenta`,
            v: fu(e).username,
          },
        ],
        tipo: `referido_link_creado`,
        extra: {},
      }),
      {
        ok: !0,
        mensaje: su(`Listo: este es tu link. Copialo y mandalo.`),
        link: e.miLink.link,
      });
}
function Cd(e, t, n) {
  let r = zodObject({
    vistoId: zodString().uuid(),
  }).safeParse(n);
  if (!r.success)
    return {
      ok: !1,
      mensaje: `Recargá la pantalla y probá de nuevo.`,
    };
  let i = e.miLink.link;
  return i
    ? i.id === r.data.vistoId
      ? ((e.miLink.link = {
          id: t.id(),
          codigo: xd(t),
        }),
        bu(e, t, {
          event: `Regeneró su link de referido`,
          tone: `warn`,
          username: null,
          fields: [
            {
              k: `Cuenta`,
              v: fu(e).username,
            },
          ],
          tipo: `referido_link_regenerado`,
          extra: {},
        }),
        {
          ok: !0,
          mensaje: su(`Link nuevo listo. El anterior ya no suma clientes.`),
          link: e.miLink.link,
        })
      : {
          ok: !0,
          mensaje: `Tu link ya había cambiado: este es el que anda ahora.`,
          link: i,
        }
    : {
        ok: !1,
        mensaje: `No tenés un link vivo. Recargá la pantalla y creá uno.`,
      };
}
function wd(e, t, n) {
  let r = zodString().trim().min(1).max(60).safeParse(n);
  if (!r.success)
    return {
      ok: !1,
      mensaje: `El nombre va de 1 a 60 caracteres.`,
    };
  if (
    e.carpetas.some(
      (e) =>
        e.nombre.toLocaleLowerCase(`es`) === r.data.toLocaleLowerCase(`es`),
    )
  )
    return {
      ok: !1,
      mensaje: `Ya hay una carpeta con ese nombre.`,
    };
  if (e.carpetas.length >= 40)
    return {
      ok: !1,
      mensaje: `En la demo hay un tope de 40 carpetas.`,
    };
  let i = {
    id: t.id(),
    nombre: r.data,
    creadaEn: t.ahora(),
  };
  return (
    e.carpetas.push(i),
    {
      ok: !0,
      mensaje: su(`Carpeta "` + r.data + `" creada.`),
      id: i.id,
    }
  );
}
function Td(e, t) {
  let n = lu.safeParse(t);
  if (!n.success || !e.carpetas.some((e) => e.id === n.data))
    return {
      ok: !1,
      mensaje: `Esa carpeta no existe.`,
    };
  let r = e.flyers.filter((e) => e.carpetaId === n.data);
  for (let t of r) t.imagen.startsWith(`svg:`) || delete e.imagenes[t.imagen];
  return (
    (e.flyers = e.flyers.filter((e) => e.carpetaId !== n.data)),
    (e.carpetas = e.carpetas.filter((e) => e.id !== n.data)),
    (e.accesos = e.accesos.filter((e) => e.carpetaId !== n.data)),
    {
      ok: !0,
      mensaje: su(`Carpeta borrada, con sus ` + r.length + ` flyers.`),
    }
  );
}
function Ed(e, t, n) {
  if (
    Object.keys(e.imagenes).length >= Xl.imagenes ||
    ou(e) + n.length > Xl.bytesImagenes
  )
    return null;
  let r = t.id();
  return ((e.imagenes[r] = n), r);
}
let Dd;
function Od(e, t, n, r) {
  let i = lu.safeParse(n);
  if (!i.success)
    return {
      ok: !1,
      mensaje: `Elegí una carpeta.`,
      subidos: 0,
      fallados: [],
    };
  if (r.length === 0)
    return {
      ok: !1,
      mensaje: `No llegó ningún archivo.`,
      subidos: 0,
      fallados: [],
    };
  if (!e.carpetas.some((e) => e.id === i.data))
    return {
      ok: !1,
      mensaje: `Esa carpeta ya no existe. Volvé atrás y elegí otra.`,
      subidos: 0,
      fallados: [],
    };
  let a = 0,
    o = [];
  for (let n of r) {
    if (!n.dataUrl) {
      o.push(`${n.nombre} (${n.falla ?? `no es una imagen`})`);
      continue;
    }
    let r = Ed(e, t, n.dataUrl);
    if (!r) {
      o.push(`${n.nombre} (${Dd})`);
      continue;
    }
    (e.flyers.push({
      id: t.id(),
      carpetaId: i.data,
      nombre: n.nombre.slice(0, 200) || `flyer`,
      imagen: r,
      tipo: `image/jpeg`,
      pesoBytes: Math.round((n.dataUrl.length * 3) / 4),
      ancho: n.ancho,
      alto: n.alto,
      subidoEn: t.ahora(),
    }),
      a++);
  }
  let s =
    a === 0
      ? `No entró ninguno.`
      : su(a + (a === 1 ? ` flyer subido.` : ` flyers subidos.`));
  return {
    ok: a > 0,
    mensaje: s,
    subidos: a,
    fallados: o,
  };
}
function kd(e, t) {
  let n = lu.safeParse(t);
  if (!n.success)
    return {
      ok: !1,
      mensaje: `Ese flyer no existe.`,
    };
  let r = e.flyers.find((e) => e.id === n.data);
  return (
    r && !r.imagen.startsWith(`svg:`) && delete e.imagenes[r.imagen],
    (e.flyers = e.flyers.filter((e) => e.id !== n.data)),
    {
      ok: !0,
      mensaje: su(`Flyer borrado.`),
    }
  );
}
let Ad;
function jd(e, t, n) {
  let r = lu.safeParse(t);
  return !r.success || !e.carpetas.some((e) => e.id === r.data)
    ? {
        ok: !1,
        gente: [],
      }
    : {
        ok: !0,
        gente: e.personal
          .filter((t) => t.activo && t.id !== e.yoId && !t.demo)
          .sort((e, t) => e.username.localeCompare(t.username))
          .map((t) => ({
            id: t.id,
            username: t.username,
            rango: Ad[t.role] ?? t.role,
            casa:
              t.casaId === uu(e).id && n ? n : (mu(e, t.casaId)?.nombre ?? ``),
            tiene: e.accesos.some(
              (e) => e.carpetaId === r.data && e.adminId === t.id,
            ),
          })),
      };
}
function Md(e, t, n, r) {
  let i = lu.safeParse(t),
    a = lu.safeParse(n);
  return !i.success || !a.success || typeof r != `boolean`
    ? {
        ok: !1,
        mensaje: `Datos inválidos.`,
      }
    : a.data === e.yoId
      ? {
          ok: !1,
          mensaje: `Vos ya ves todas las carpetas.`,
        }
      : !e.carpetas.some((e) => e.id === i.data) || !pu(e, a.data)
        ? {
            ok: !1,
            mensaje: `Datos inválidos.`,
          }
        : ((e.accesos = e.accesos.filter(
            (e) => !(e.carpetaId === i.data && e.adminId === a.data),
          )),
          r &&
            e.accesos.push({
              carpetaId: i.data,
              adminId: a.data,
            }),
          {
            ok: !0,
          });
}
let Nd, Pd;
function Fd(e) {
  let t = e.mensajes.map((e) => e.texto.toLocaleLowerCase(`es`)).join(` `);
  return /contrase|clave|no puedo entrar/.test(t)
    ? `clave`
    : /alias|transfiero|m[ií]nimo/.test(t)
      ? `alias`
      : /retir|cobrar|pag[aá]/.test(t)
        ? `retiro`
        : /carg|transferencia|comprobante/.test(t) ||
            e.mensajes.some((e) => e.deJugador && e.adjunto)
          ? `carga`
          : /juego|bono|ruleta|slot|tragamonedas|crazy|gates/.test(t)
            ? `juego`
            : `general`;
}
function Id(e, t, n, r, i = null) {
  let a = lu.safeParse(n),
    o = zodString()
      .max(2e3 * 2)
      .safeParse(r ?? ``);
  if (!a.success || !o.success)
    return {
      ok: !1,
      mensaje: `Datos inválidos.`,
    };
  if (!i && o.data.trim().length === 0)
    return {
      ok: !1,
      mensaje: `Escribí algo o adjuntá una foto.`,
    };
  let s = Ko(o.data.trim().length > 0 ? o.data : `x`, 0);
  if (!s.ok)
    return {
      ok: !1,
      mensaje:
        s.motivo === `muy-largo`
          ? `Es muy largo, mandalo en partes.`
          : `Escribí algo.`,
    };
  let c = e.hilos.find((e) => e.id === a.data);
  if (!c)
    return {
      ok: !1,
      mensaje: `Esa conversación ya no está.`,
    };
  let l = null;
  if (i && ((l = Ed(e, t, i)), !l))
    return {
      ok: !1,
      mensaje: `No se pudo adjuntar: ${Dd}.`,
    };
  let u = t.ahora();
  if (
    (c.mensajes.push({
      id: t.id(),
      deJugador: !1,
      staffId: e.yoId,
      texto: o.data.trim(),
      cuando: u,
      adjunto: l,
      oculto: !1,
    }),
    c.mensajes.length > 200 && (c.mensajes = c.mensajes.slice(-200)),
    (c.sinLeer = 0),
    (c.abierta = !0),
    c.respondidas + c.pendientes.length < 4 && c.pendientes.length === 0)
  ) {
    let e = c.respondidas,
      n = Nd[Fd(c)];
    c.pendientes.push({
      id: t.id(),
      texto: n[e % n.length],
      dueAt: u + Pd[e % Pd.length],
      adjunto: null,
    });
  }
  return {
    ok: !0,
  };
}
function Ld(e, t, n) {
  let r = lu.safeParse(t);
  if (!r.success || typeof n != `boolean`)
    return {
      ok: !1,
    };
  let i = e.hilos.find((e) => e.id === r.data);
  return i
    ? ((i.abierta = n),
      {
        ok: !0,
      })
    : {
        ok: !1,
      };
}
function Rd(e, t) {
  let n = e.hilos.find((e) => e.id === t);
  n && (n.sinLeer = 0);
}
function zd(e, t, n, r) {
  let i = lu.safeParse(n),
    a = r == null ? null : lu.safeParse(r);
  if (!i.success || (a !== null && !a.success))
    return {
      ok: !1,
      mensaje: `Datos inválidos.`,
    };
  let o = e.hilos.find((e) => e.id === i.data);
  if (!o)
    return {
      ok: !1,
      mensaje: `Esa conversación ya no existe.`,
    };
  let s = a === null ? -1 : o.mensajes.findIndex((e) => e.id === a.data);
  if (a !== null && s < 0)
    return {
      ok: !1,
      mensaje: `La conversación cambió mientras la mirabas. Volvé a abrirla y probá de nuevo.`,
    };
  let c = 0;
  for (let e = 0; e <= s; e++) {
    let t = o.mensajes[e];
    (t.oculto || ((t.oculto = !0), c++), (t.adjunto = null));
  }
  let l = o.mensajes.filter((e) => !e.oculto).length;
  if ((l === 0 && ((o.sinLeer = 0), (o.pendientes = [])), c > 0)) {
    let n = gu(e, o.jugadorId);
    bu(e, t, {
      event: `Conversación del soporte eliminada`,
      tone: `warn`,
      username: n?.username ?? null,
      fields: [
        {
          k: `Jugador`,
          v: n?.username ?? `—`,
        },
        {
          k: `Mensajes`,
          v: String(c),
        },
      ],
      tipo: `soporte_conversacion_eliminada`,
      extra: {
        jugador: n?.username ?? ``,
      },
    });
  }
  return {
    ok: !0,
    quedan: l,
    mensaje: su(
      l > 0
        ? `Se eliminó lo que estabas viendo. El jugador escribió algo nuevo mientras tanto y eso sigue a la vista.`
        : `Conversación eliminada.`,
    ),
  };
}
function Bd(e, t) {
  return (
    e.hilos.some((e) => e.pendientes.some((e) => e.dueAt <= t)) ||
    e.trabadas.some(
      (e) => e.reintentadaEn !== null && e.reintentadaEn + 4e4 <= t,
    )
  );
}
function Vd(e, t, n) {
  let r = !1;
  for (let t of e.hilos) {
    let e = t.pendientes
      .filter((e) => e.dueAt <= n)
      .sort((e, t) => e.dueAt - t.dueAt);
    if (e.length !== 0) {
      for (let n of e)
        (t.mensajes.push({
          id: n.id,
          deJugador: !0,
          staffId: null,
          texto: n.texto,
          cuando: Math.max(
            n.dueAt,
            t.mensajes[t.mensajes.length - 1]?.cuando ?? 0,
          ),
          adjunto: n.adjunto,
          oculto: !1,
        }),
          (t.sinLeer += 1),
          (t.respondidas += 1));
      ((t.pendientes = t.pendientes.filter((e) => e.dueAt > n)),
        t.mensajes.length > 200 && (t.mensajes = t.mensajes.slice(-200)),
        (t.abierta = !0),
        (r = !0));
    }
  }
  for (let i of [...e.trabadas]) {
    if (i.reintentadaEn === null || i.reintentadaEn + 4e4 > n) continue;
    e.trabadas = e.trabadas.filter((e) => e !== i);
    let a = i.jugadorId ? gu(e, i.jugadorId) : null;
    (a &&
      ((a.saldo += i.monto),
      e.jugadas.push({
        id: t.id(),
        cuando: n,
        jugadorId: a.id,
        juego: `Apuesta trabada · cobrada`,
        apostado: 0n,
        pagado: i.monto,
        saldoDespues: a.saldo,
        wager: i.wagerId,
      })),
      bu(e, t, {
        event: `Apuesta trabada resuelta`,
        tone: `ok`,
        username: a?.username ?? null,
        fields: [
          {
            k: `Ronda`,
            v: i.wagerId,
          },
          {
            k: `Monto`,
            v: formatMoney(i.monto),
          },
        ],
        actorId: null,
      }),
      (r = !0));
  }
  return (r && iu(e), r);
}
let Hd, Ud;
function Wd(e) {
  return uc({
    id: e.yoId,
    role: `root`,
    casaId: uu(e).id,
    esMadre: !0,
    puedeReasignarCajero: !0,
  });
}
function Gd(e, t) {
  let n = uu(e),
    r = (r) =>
      r
        ? r === n.id
          ? t
          : (e.casas.find((e) => e.id === r)?.nombre ?? null)
        : null,
    i = new Map(e.jugadores.map((e) => [e.id, e])),
    a = new Map(e.personal.map((e) => [e.id, e])),
    o = new Map(e.bajas.map((e) => [e.id, e])),
    s = (e) => (e ? (a.get(e)?.role ?? o.get(e)?.role ?? null) : null),
    c = (e) => (e ? (a.get(e)?.casaId ?? o.get(e)?.casaId ?? null) : null),
    l = (e) => String(BigInt(e) * 1000n),
    u = {
      evento: null,
      actor_otra_casa: !1,
      monto_neutro: !1,
      quedo_cupo: !1,
      anulada: !1,
      motivo: null,
      anulada_por: null,
      extra: null,
      ip: null,
    },
    d = [],
    f = (t) => ({
      actor_tipo: `staff`,
      actor_nombre: vu(e, t),
      actor_rol: s(t),
      actorId: t,
      casaActor: c(t),
    }),
    p = (e) => {
      let t = i.get(e);
      return {
        jugador: t?.username ?? null,
        jugador_panel: r(t?.casaId),
        casaJugador: t?.casaId ?? null,
        jugadorId: e,
      };
    },
    m = (e, t) => {
      let n = c(e),
        a = i.get(t)?.casaId ?? null;
      return n && a && n !== a ? r(n) : null;
    },
    h = new Map(
      e.movimientos
        .filter((e) => e.anulaA)
        .map((t) => [t.anulaA, vu(e, t.operadorId)]),
    );
  for (let t of e.movimientos) {
    let e = t.anulaA !== null,
      n =
        t.tipo === `load`
          ? e
            ? `carga_anulacion`
            : `carga`
          : e
            ? `retiro_anulacion`
            : `retiro`,
      r = (t.tipo === `load` ? 1n : -1n) * (e ? -1n : 1n);
    d.push({
      ...u,
      ...f(t.operadorId),
      ...p(t.jugadorId),
      fuente: t.tipo === `load` ? `dep` : `ret`,
      id: t.id,
      us: l(t.cuando),
      fecha: new Date(t.cuando),
      tipo: n,
      opero: m(t.operadorId, t.jugadorId),
      monto: r * t.monto,
      quedo: t.saldoDespues,
      anulada: t.anulado,
      motivo: t.motivo,
      anulada_por: t.anulado ? (h.get(t.id) ?? null) : null,
    });
  }
  for (let t of e.pedidos)
    d.push({
      ...u,
      actor_tipo: `jugador`,
      actor_nombre: null,
      actor_rol: null,
      actorId: null,
      casaActor: null,
      ...p(t.jugadorId),
      fuente: `pdc`,
      id: t.id,
      us: l(t.cuando),
      fecha: new Date(t.cuando),
      tipo: `pedido_creado`,
      opero: null,
      monto: t.monto,
      monto_neutro: !0,
      quedo: null,
      extra: {
        kind: t.tipo,
        ...(t.nota
          ? {
              nota: t.nota,
            }
          : {}),
      },
    });
  for (let t of e.firmas)
    d.push({
      ...u,
      ...f(t.pedidoPorId),
      ...p(t.jugadorId),
      fuente: `fpd`,
      id: t.id,
      us: l(t.cuando),
      fecha: new Date(t.cuando),
      tipo: `firma_pedida`,
      opero: m(t.pedidoPorId, t.jugadorId),
      monto: t.monto,
      monto_neutro: !0,
      quedo: null,
    });
  for (let t of e.retenidos)
    d.push({
      ...u,
      actor_tipo: `auto`,
      actor_nombre: null,
      actor_rol: null,
      actorId: null,
      casaActor: null,
      ...p(t.jugadorId),
      fuente: `prr`,
      id: t.id,
      us: l(t.cuando),
      fecha: new Date(t.cuando),
      tipo: `premio_retenido`,
      opero: null,
      monto: t.monto,
      quedo: null,
      motivo: t.motivo,
      extra: {
        wager: t.wager,
      },
    });
  for (let t of e.resueltos) {
    let n = e.jugadores.find((e) => e.username === t.username),
      i = e.personal.find((e) => e.username === t.quien) ?? null;
    d.push({
      ...u,
      ...f(i?.id ?? null),
      actor_nombre: t.quien,
      jugador: t.username,
      jugador_panel: r(n?.casaId),
      casaJugador: n?.casaId ?? null,
      jugadorId: n?.id ?? null,
      fuente: `prs`,
      id: t.id,
      us: l(t.cuando),
      fecha: new Date(t.cuando),
      tipo: t.acreditado ? `premio_liberado` : `premio_rechazado`,
      opero: null,
      monto: t.monto,
      quedo: null,
      motivo: t.motivo,
      extra: {
        wager: t.wager,
      },
    });
  }
  for (let t of e.jugadas)
    d.push({
      ...u,
      actor_tipo: `jugador`,
      actor_nombre: null,
      actor_rol: null,
      actorId: null,
      casaActor: null,
      ...p(t.jugadorId),
      fuente: `jfo`,
      id: t.id,
      us: l(t.cuando),
      fecha: new Date(t.cuando),
      tipo: `ronda`,
      opero: null,
      monto: t.pagado - t.apostado,
      quedo: t.saldoDespues,
      extra: {
        juego: t.juego,
        apuesta: t.apostado.toString(),
        premio: t.pagado.toString(),
        wager: t.wager,
      },
    });
  e.notas.forEach((e, t) => {
    d.push({
      ...u,
      ...f(e.autorId),
      ...p(e.jugadorId),
      fuente: `nta`,
      id: String(t + 1),
      us: l(e.cuando),
      fecha: new Date(e.cuando),
      tipo: `nota`,
      opero: null,
      monto: null,
      quedo: null,
      extra: {
        nota: e.texto,
      },
    });
  });
  for (let t of e.cupoMovs)
    d.push({
      ...u,
      ...(t.quienId
        ? f(t.quienId)
        : {
            actor_tipo: `auto`,
            actor_nombre: null,
            actor_rol: null,
            actorId: null,
            casaActor: null,
          }),
      jugador: null,
      jugador_panel: r(t.casaId),
      casaJugador: t.casaId,
      jugadorId: null,
      fuente: `cup`,
      id: t.id,
      us: l(t.cuando),
      fecha: new Date(t.cuando),
      tipo: `cupo_${t.tipo}`,
      opero: null,
      monto: t.monto,
      quedo: t.saldo,
      quedo_cupo: !0,
      motivo: t.motivo,
    });
  return (
    e.eventos.forEach((t, n) => {
      if (!t.tipo) return;
      let i = ic[t.tipo];
      if (!i) return;
      let a = t.extra ?? {},
        o = ac.includes(t.tipo)
          ? (a.username ?? a.jugador ?? t.username ?? null)
          : null,
        s = o ? e.jugadores.find((e) => e.username === o) : void 0;
      d.push({
        ...u,
        ...(t.actorId
          ? f(t.actorId)
          : {
              actor_tipo: `auto`,
              actor_nombre: null,
              actor_rol: null,
              actorId: null,
              casaActor: null,
            }),
        jugador: o,
        jugador_panel: s
          ? r(s.casaId)
          : i.tipo === `paneles`
            ? (a.panel ?? null)
            : r(c(t.actorId)),
        casaJugador: s?.casaId ?? null,
        jugadorId: s?.id ?? null,
        fuente: `sev`,
        id: String(n + 1),
        us: l(t.cuando),
        fecha: new Date(t.cuando),
        tipo: i.tipo,
        evento: t.tipo,
        opero: null,
        monto: null,
        quedo: null,
        extra: a,
        ip: t.actorId ? `203.0.113.21` : null,
      });
    }),
    d.sort(
      (e, t) =>
        t.fecha.getTime() - e.fecha.getTime() ||
        e.fuente.localeCompare(t.fuente) ||
        e.id.localeCompare(t.id),
    ),
    d
  );
}
function Kd(e, t) {
  let n = Wd(e),
    r = uu(e),
    i = (n) =>
      n === r.id ? t : (e.casas.find((e) => e.id === n)?.nombre ?? null);
  return {
    ok: !0,
    rol: n.rol,
    vePanel: n.vePanel,
    veIp: n.veIp,
    juegoSoloConJugador: n.juegoSoloConJugador,
    grupos: n.grupos.map((e) => ({
      k: e,
      n: $s[e],
    })),
    tipos: [...n.tipos].map((e) => ({
      k: e,
      n: ec[e].etiqueta,
      grupo: rc(e),
    })),
    jugadores: e.jugadores
      .filter((e) => !e.esStaff)
      .sort((e, t) => e.username.localeCompare(t.username))
      .map((e) => ({
        id: e.id,
        n: e.username,
        panel: i(e.casaId),
      })),
    equipo: [
      ...e.personal.map((e) => ({
        id: e.id,
        n: e.username,
        rol: e.role,
        panel: i(e.casaId),
        baja: !1,
      })),
      ...e.bajas.map((e) => ({
        id: e.id,
        n: e.username,
        rol: e.role,
        panel: i(e.casaId),
        baja: !0,
      })),
    ].sort((e, t) => e.n.localeCompare(t.n)),
    paneles: [...e.casas]
      .sort((e, t) => Number(t.esMadre) - Number(e.esMadre))
      .map((e) => ({
        id: e.id,
        n: i(e.id) ?? e.nombre,
      })),
    muestra: !1,
  };
}
function qd(e, t, n, r) {
  let i = Ud.safeParse(n ?? {});
  if (!i.success)
    return {
      ok: !1,
      campo: `general`,
      mensaje: `Algún filtro llegó mal. Tocá «Limpiar filtros».`,
    };
  let a = i.data,
    o = _c(a.rango, a.desde, a.hasta);
  if (`error` in o)
    return {
      ok: !1,
      campo: `rango`,
      mensaje: o.error,
    };
  let s = a.tipo ? (nc(a.tipo) ? a.tipo : void 0) : null;
  if (s === void 0)
    return {
      ok: !1,
      campo: `tipo`,
      mensaje: `Esa acción no existe.`,
    };
  if (s && a.grupo !== `todo` && rc(s) !== a.grupo)
    return {
      ok: !1,
      campo: `tipo`,
      mensaje: `Esa acción no es de este grupo.`,
    };
  let c = a.cursor ? Number(/^o(\d{1,6})$/.exec(a.cursor)?.[1] ?? NaN) : 0;
  if (!Number.isInteger(c))
    return {
      ok: !1,
      campo: `general`,
      mensaje: `La lista cambió. Volvé a cargarla desde el principio.`,
    };
  let l = Wd(e);
  if (a.jugador && !e.jugadores.some((e) => e.id === a.jugador))
    return {
      ok: !1,
      campo: `jugador`,
      mensaje: `Ese jugador no está a tu alcance.`,
    };
  let u =
    a.quien && a.quien !== `jugador` && a.quien !== `auto` ? a.quien : null;
  if (
    u &&
    !e.personal.some((e) => e.id === u) &&
    !e.bajas.some((e) => e.id === u)
  )
    return {
      ok: !1,
      campo: `quien`,
      mensaje: `Esa persona no está a tu alcance.`,
    };
  if (a.panel && !e.casas.some((e) => e.id === a.panel))
    return {
      ok: !1,
      campo: `panel`,
      mensaje: `Ese panel no está a tu alcance.`,
    };
  let d = Dc(new Date(r)),
    f = Fc(a.montoMin),
    p = a.grupo === `todo` || a.grupo === `caja` ? a.estado : `todas`,
    m = (e) => {
      let t = Dc(e.fecha);
      if (
        !(o.tipo === `dias`
          ? t <= d && gc(t, d) <= o.dias
          : t >= o.desde && t <= o.hasta) ||
        (a.jugador && e.jugadorId !== a.jugador) ||
        (a.quien === `jugador` && e.actor_tipo !== `jugador`) ||
        (a.quien === `auto` && e.actor_tipo !== `auto`) ||
        (u && (e.actor_tipo !== `staff` || e.actorId !== u)) ||
        (a.panel &&
          (a.operado ? e.casaActor !== a.panel : e.casaJugador !== a.panel)) ||
        (p === `sin` && e.anulada) ||
        (p === `solo` && !e.anulada)
      )
        return !1;
      if (f !== null) {
        let t = typeof e.monto == `bigint` ? e.monto : null;
        if (t === null || (t < 0n ? -t : t) < f) return !1;
      }
      return !0;
    },
    h = !!a.jugador,
    g = Gd(e, t).filter((e) => nc(e.tipo) && l.tipos.has(e.tipo) && m(e)),
    _ = (e, t) => fc(l, e, null, h).has(t),
    v = fc(l, a.grupo, s, h),
    y = g.filter((e) => v.has(e.tipo)),
    b = y
      .slice(c, c + 50)
      .map((e) => Mc(e, l))
      .filter((e) => e !== null)
      .map((e) => ({
        ...e,
        diaTitulo: Oc(e.fecha.dia, d),
      })),
    x = null;
  if (c === 0) {
    x = {};
    let e = 0;
    for (let t of l.grupos) {
      if (t === `todo`) continue;
      let n = g.filter((e) => _(t, e.tipo)).length;
      ((x[t] = Pc(n) ?? void 0), (t !== `juego` || h) && (e += n));
    }
    x.todo = Pc(e) ?? void 0;
  }
  let S = null;
  if (
    c === 0 &&
    a.grupo === `caja` &&
    p !== `solo` &&
    (!s || s === `carga` || s === `retiro`)
  ) {
    let e = 0n,
      t = 0n,
      n = 0;
    for (let r of y)
      r.anulada ||
        typeof r.monto != `bigint` ||
        (r.tipo === `carga`
          ? ((e += r.monto), n++)
          : r.tipo === `retiro` && ((t += -r.monto), n++));
    S = Nc(e, t, n);
  }
  return {
    ok: !0,
    filas: b,
    siguiente: c + 50 < y.length ? `o${c + 50}` : null,
    cuentas: x,
    totales: S,
    juegoPideJugador: !1,
    muestra: !1,
  };
}
function initializeDemoOperations() {
  su = (e) => `${e} (demo)`;
  cu = zodString().trim().min(1).max(60);
  lu = zodString().uuid();
  uu = (e) => e.casas.find((e) => e.esMadre);
  fu = (e) => e.personal.find((t) => t.id === e.yoId);
  pu = (e, t) => e.personal.find((e) => e.id === t) ?? null;
  mu = (e, t) => (t ? (e.casas.find((e) => e.id === t) ?? null) : null);
  hu = (e, t) => e.jugadores.find((e) => e.username === t) ?? null;
  gu = (e, t) => e.jugadores.find((e) => e.id === t) ?? null;
  _u = (e) => rl.find((t) => t.valor === e)?.nombre ?? e;
  vu = (e, t) =>
    t
      ? (pu(e, t)?.username ??
        e.bajas.find((e) => e.id === t)?.username ??
        null)
      : null;
  yu = (e) => ({
    id: e.id,
    rol: e.role,
    casaId: e.casaId,
  });
  xu = (e, t) => {
    let n = e.get(t);
    return typeof n == `string` ? n : ``;
  };
  Cu = Object.freeze({
    enabled: !0,
    maxPerWithdrawalCents: 5000000n,
    maxDailyCents: 15000000n,
    cooldownSeconds: 0,
    maxPerWindow: null,
    windowSeconds: 3600,
    dualApprovalOverCents: 9000000n,
  });
  Du = zodString()
    .trim()
    .regex(/^\d{6}$/);
  Vu = (e) => {
    let t = typeof e == `string` ? e.trim().toLowerCase() : ``;
    return bl.test(t) ? t : null;
  };
  Hu = (e, t) =>
    e.personal.some((e) => e.username === t) ||
    e.jugadores.some((e) => e.username === t) ||
    e.reservas.some((e) => e.username === t);
  Uu = (e) => `p-${e.id().replace(/-/g, ``)}@paneles.demo.invalid`;
  ad = (e) =>
    new Date(e).toLocaleString(`es-AR`, {
      day: `2-digit`,
      month: `2-digit`,
      hour: `2-digit`,
      minute: `2-digit`,
      timeZone: `America/Argentina/Buenos_Aires`,
    });
  ld = zodString().regex(/^\d{1,19}$/);
  fd = {
    ok: !1,
    mensaje: `No tenés permiso para esto.`,
  };
  Dd = `la demo ya guardó todas las fotos que entran en este navegador; borrá alguna`;
  Ad = {
    root: `Dueño`,
    admin: `Administrador`,
    operator: `Cajero`,
  };
  Nd = {
    carga: [
      `¡Gracias! Ya me fijo si me impactó.`,
      `Perfecto, ahí veo las fichas 🙌`,
      `Buenísimo. ¿La próxima te mando el comprobante por acá también?`,
      `Listo, gracias por la rapidez.`,
    ],
    retiro: [
      `Dale, quedo atento.`,
      `Ya me llegó, gracias!`,
      `Genial. ¿El próximo retiro lo pido igual por acá?`,
      `Gracias, sos un genio.`,
    ],
    clave: [
      `Gracias, ahora pruebo con esa.`,
      `Listo, ya pude entrar. La cambio ahora.`,
      `¿La nueva la cambio desde mi perfil?`,
      `Perfecto, gracias!`,
    ],
    alias: [
      `Genial, ahora transfiero.`,
      `Listo, ya te mandé. ¿Te paso el comprobante?`,
      `Gracias! ¿Hasta qué hora atienden?`,
      `Buenísimo.`,
    ],
    juego: [
      `Ah, buenísimo, gracias por avisar.`,
      `Dale, sigo jugando entonces.`,
      `Gracias! ¿Hay algún torneo esta semana?`,
      `Perfecto.`,
    ],
    general: [
      `Gracias!`,
      `Dale, quedo atento.`,
      `Perfecto, gracias por responder.`,
      `👍`,
    ],
  };
  Pd = [7e3, 11e3, 15e3, 9e3];
  Hd = zodString()
    .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
    .transform((e) => e.toLowerCase());
  Ud = zodObject({
    rango: zodEnum([`hoy`, `7`, `30`, `90`, `elegir`]).default(`7`),
    desde: zodString().max(10).nullish(),
    hasta: zodString().max(10).nullish(),
    grupo: zodEnum(Qs).default(`todo`),
    jugador: Hd.nullish(),
    quien: zodUnion([zodLiteral(`jugador`), zodLiteral(`auto`), Hd]).nullish(),
    panel: Hd.nullish(),
    operado: zodBoolean().default(!1),
    tipo: zodString().max(40).nullish(),
    estado: zodEnum([`todas`, `sin`, `solo`]).default(`todas`),
    montoMin: zodString().max(24).nullish(),
    cursor: zodString().max(300).nullish(),
  }).strict();
}
export {
  uu,
  vu,
  Cu,
  wu,
  Ou,
  Au,
  ju,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  od,
  sd,
  cd,
  ud,
  dd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  Sd,
  Cd,
  wd,
  Td,
  Od,
  kd,
  jd,
  Md,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Kd,
  qd,
  initializeDemoOperations,
};
