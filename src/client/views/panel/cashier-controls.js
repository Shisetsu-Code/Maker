/**
 * panel / cashier-controls.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import { createDemoRouter } from "./demo-services.js";
import { formatMoney, parseMoney } from "./money-and-phone.js";
import { Lc } from "./cashier-rules.js";
import { Yd, Rp } from "./demo-api.js";
let Bp,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  Yp,
  Xp,
  Zp,
  Qp,
  $p,
  em,
  tm,
  nm,
  rm,
  im,
  am,
  om,
  sm,
  cm,
  lm,
  um,
  dm,
  fm,
  pm,
  mm,
  hm,
  gm,
  _m,
  vm,
  ym,
  bm,
  xm,
  Sm,
  Cm,
  wm,
  Tm,
  Em,
  Dm,
  Om,
  km,
  Am;
function jm(e) {
  let t = String(e ?? ``).trim();
  if (t === ``)
    return {
      estado: `vacio`,
    };
  try {
    return {
      estado: `ok`,
      cents: parseMoney(t),
    };
  } catch {
    return {
      estado: `error`,
      mensaje: Mm(t),
    };
  }
}
function Mm(e) {
  if (Am.test(e)) return `Sólo números. Para los centavos usá la coma.`;
  if (/^0+([.,]0*)?$/.test(e)) return `El monto tiene que ser mayor a cero.`;
  let t = km.exec(e);
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
function Nm(e) {
  return e
    ? e.frozen
      ? {
          titulo: `Plata bloqueada.`,
          texto: `No puede apostar ni pedir nada, y no se le puede cargar ni descargar. El saldo queda intacto.`,
        }
      : e.status === `closed`
        ? {
            titulo: `Cuenta cerrada por el jugador.`,
            texto: `Podés pagarle lo que le quede, pero no le cargues fichas: no las va a poder usar.`,
          }
        : e.status === `blocked`
          ? {
              titulo: `Cuenta bloqueada.`,
              texto: `No puede entrar. Podés pagarle lo que le quede, pero no le cargues fichas.`,
            }
          : null
    : null;
}
function Pm(e) {
  if (!e) return 0n;
  if (e.disponibleInput != null) {
    let t = jm(e.disponibleInput);
    if (t.estado === `ok`) return t.cents;
  }
  return e.disponible == null ? BigInt(e.cents) : 0n;
}
function useCashierControls(e, t) {
  let n = createDemoRouter(),
    [r, i] = (0, React.useTransition)(),
    [a, o] = (0, React.useState)(null),
    [s, c] = (0, React.useState)(`load`),
    [l, u] = (0, React.useState)(``),
    [d, f] = (0, React.useState)(() => crypto.randomUUID()),
    [p, m] = (0, React.useState)(!1),
    [h, g] = (0, React.useState)(``),
    [_, v] = (0, React.useState)(null),
    [y, b] = (0, React.useState)(null),
    [x, S] = (0, React.useState)(null),
    C = (0, React.useRef)(null),
    [w, T] = (0, React.useState)(`mover`),
    [E, D] = (0, React.useState)(null),
    [O, ee] = (0, React.useState)(!1),
    [te, k] = (0, React.useState)(null),
    [A, j] = (0, React.useState)(``),
    M = (0, React.useRef)(null);
  function N(e, t) {
    (e && !String(t).includes(`(demo)`) && (t += ` (demo)`),
      C.current && clearTimeout(C.current),
      v({
        ok: e,
        text: t,
      }),
      (C.current = setTimeout(() => v(null), 4200)));
  }
  let P = x !== null && t.some((e) => e.id === x.id) ? x : null,
    F = (0, React.useMemo)(
      () => e.find((e) => e.username === a) ?? null,
      [e, a],
    ),
    ne = (0, React.useMemo)(() => jm(l), [l]),
    I = ne.estado === `ok` ? ne.cents : null,
    L = I === null ? null : formatMoney(I),
    R = ne.estado === `error` ? ne.mensaje : null,
    re = s === `load`,
    ie = Nm(F),
    ae = !!ie && (re || !!F?.frozen),
    oe = Pm(F),
    se = F ? BigInt(F.cents) : null,
    ce = re || I === null ? !0 : I <= oe,
    le =
      se !== null && I !== null && ce
        ? formatMoney(re ? se + I : se - I)
        : null,
    ue = !!F && I !== null && ce && !p && !ae && !r;
  function de() {
    (u(``),
      m(!1),
      g(``),
      b(null),
      v(null),
      f(crypto.randomUUID()),
      T(`mover`),
      D(null),
      ee(!1),
      k(null),
      j(``));
  }
  function fe(t, n) {
    let r = e.find((e) => e.username === t) ?? null,
      i = r !== null && !r.frozen && r.status !== `active`;
    (o(t),
      c(n ?? (i ? `unload` : `load`)),
      S((e) => (e && e.username !== t ? null : e)),
      de());
  }
  function pe() {
    (o(null), S(null), de());
  }
  function me(e) {
    (S(e), o(e.username), c(e.kind), de(), u(e.amountInput));
  }
  function he(e, t) {
    r ||
      (t(`¿Descartar el pedido de ${e.username} por ${e.amount}?`) &&
        i(async () => {
          let t = new FormData();
          t.set(`requestId`, e.id);
          let r = await Yp(t).catch(() => ({
            ok: !1,
          }));
          (x?.id === e.id && S(null),
            N(
              r.ok,
              r.ok ? `Pedido descartado.` : `No se pudo descartar el pedido.`,
            ),
            n.refresh());
        }));
  }
  function ge() {
    T(`jugadas`);
    let e = a;
    !e ||
      (E !== null && !O) ||
      (ee(!1),
      (M.current = e),
      i(async () => {
        let t = await im(e).catch(() => null);
        M.current === e && (t?.ok ? D(t.jugadas) : (D([]), ee(!0)));
      }));
  }
  function _e() {
    T(`notas`);
    let e = a;
    !e ||
      te !== null ||
      ((M.current = e),
      i(async () => {
        let t = await om(e).catch(() => null);
        M.current === e &&
          (t?.ok
            ? k(t.notas)
            : N(!1, `No se pudieron traer las notas. Probá de nuevo.`));
      }));
  }
  function ve() {
    let e = a,
      t = A.trim();
    !e ||
      t.length < 3 ||
      r ||
      i(async () => {
        let r = await am(e, t).catch(() => ({
          ok: !1,
          mensaje: `No se pudo guardar la nota.`,
        }));
        (N(r.ok, r.mensaje), r.ok && (j(``), k(null), n.refresh()));
      });
  }
  function ye(e) {
    let t = F;
    if (!t || r) return;
    let a = prompt(
      e
        ? `Bloquear la plata de ${t.username}. ¿Por qué? (queda en el registro)`
        : `Escribí DESBLOQUEAR para liberar la plata de ${t.username}.`,
      ``,
    );
    if (a !== null) {
      if (!e && a.trim().toUpperCase() !== `DESBLOQUEAR`) {
        N(!1, `No se desbloqueó: escribí DESBLOQUEAR para confirmar.`);
        return;
      }
      i(async () => {
        let r = new FormData();
        (r.set(`username`, t.username),
          r.set(`on`, e ? `1` : `0`),
          e && a.trim() && r.set(`reason`, a.trim()));
        let i = await Xp(r).catch(() => ({
          ok: !1,
          reason: `error`,
        }));
        (N(
          i.ok,
          i.ok
            ? e
              ? `Bloqueaste la plata de ${t.username}.`
              : `Liberaste la plata de ${t.username}.`
            : i.reason === `forbidden`
              ? `Sólo un administrador puede desbloquear una cuenta.`
              : i.reason === `not_found`
                ? `Ese jugador no tiene billetera.`
                : `No se pudo cambiar el bloqueo.`,
        ),
          n.refresh());
      });
    }
  }
  function be() {
    let e = F;
    if (!e || r) return;
    let t = Lc(e.status);
    if (t) {
      if (
        !confirm(
          `Bloquear la cuenta de ${e.username}.\n\nNo va a poder entrar más y se le congela la plata.\n\n¿Seguís?`,
        )
      )
        return;
    } else {
      let t = prompt(
        e.status === `closed`
          ? `${e.username} cerró su cuenta. Escribí REABRIR para devolverle el acceso.`
          : `Escribí REABRIR para devolverle el acceso a ${e.username}.`,
        ``,
      );
      if (t === null) return;
      if (t.trim().toUpperCase() !== `REABRIR`) {
        N(!1, `No se reabrió: escribí REABRIR para confirmar.`);
        return;
      }
    }
    i(async () => {
      let r = new FormData();
      (r.set(`username`, e.username), r.set(`block`, t ? `1` : `0`));
      let i = await Zp(r).catch(() => ({
        ok: !1,
        reason: `error`,
      }));
      (N(
        i.ok,
        i.ok
          ? t
            ? i.hadWallet === !1
              ? `Bloqueaste la cuenta de ${e.username}. No tenía billetera, así que no hay plata congelada.`
              : `Bloqueaste la cuenta de ${e.username}. La plata quedó congelada.`
            : `Reabriste la cuenta de ${e.username}. Si tenía la plata congelada, liberala aparte.`
          : i.reason === `forbidden`
            ? `Sólo un administrador puede reabrir una cuenta.`
            : i.reason === `not_found`
              ? `No encontramos ese jugador.`
              : `No se pudo cambiar el estado de la cuenta.`,
      ),
        n.refresh());
    });
  }
  function xe(e) {
    if (!a || !l || r) return;
    let t = re ? Hp : Up,
      o = a,
      c = L;
    i(async () => {
      v(null);
      let r = new FormData();
      (r.set(`username`, o),
        r.set(`amount`, l),
        r.set(`requestKey`, d),
        e && r.set(`totpCode`, e),
        P &&
          P.username === o &&
          P.kind === s &&
          l === P.amountInput &&
          r.set(`requestId`, P.id));
      let i;
      try {
        i = await t(r);
      } catch (e) {
        let t = e instanceof Error ? e.message : String(e);
        if (/Failed to find Server Action|older or newer deployment/i.test(t)) {
          let e = `demo-socio:rb-panel-recarga-por-version`;
          if (typeof sessionStorage < `u` && !sessionStorage.getItem(e)) {
            (sessionStorage.setItem(e, `1`), location.reload());
            return;
          }
          N(
            !1,
            `Esta pantalla quedó con una versión vieja. Cerrá la pestaña y volvé a abrirla — NO se movió plata.`,
          );
          return;
        }
        (n.refresh(),
          N(
            !1,
            `No sabemos si se aplicó. Mirá el saldo: si reintentás con el mismo monto no se duplica.`,
          ));
        return;
      }
      if (i.ok) {
        (f(crypto.randomUUID()),
          u(``),
          m(!1),
          g(``),
          S(null),
          b({
            texto: `${re ? `Cargaste` : `Descargaste`} ${c ?? ``} ${re ? `a` : `de`} ${o}. (demo)`,
          }),
          n.refresh());
        return;
      }
      let a = i.reason;
      if (a === `needs_second_approval`) {
        (S(null),
          N(
            !0,
            `Retiro grande: quedó esperando la SEGUNDA FIRMA de un admin del casino. Todavía no se pagó nada.`,
          ),
          n.refresh());
        return;
      }
      if (a === `needs_stepup`) {
        (m(!0),
          N(
            !1,
            `Retiro grande: confirmá con el código de tu app autenticadora. En la demo sirve cualquier código de 6 números.`,
          ));
        return;
      }
      if (a === `sin_autenticador`) {
        N(
          !1,
          `Este retiro supera tu tope. Pedile al panel principal que lo apruebe.`,
        );
        return;
      }
      if (a === `bad_code`) {
        (g(``), N(!1, `Código incorrecto o vencido. Probá con el actual.`));
        return;
      }
      if (a === `code_reused`) {
        (g(``), N(!1, `Ese código ya se usó. Esperá el siguiente de la app.`));
        return;
      }
      if (a === `key_mismatch`) {
        (f(crypto.randomUUID()),
          m(!1),
          g(``),
          N(
            !1,
            `Operación desincronizada. Reintentá el movimiento desde cero.`,
          ));
        return;
      }
      if (a === `sin_cupo`) {
        (m(!1),
          N(
            !1,
            `No te alcanzan las fichas: te quedan ${i.cupo}. Pedile más al panel principal.`,
          ));
        return;
      }
      if (a === `limite_jugador`) {
        (m(!1), N(!1, i.detalle));
        return;
      }
      let p =
        a === `bad_amount`
          ? `El monto tiene que ser mayor a cero.`
          : a === `player_not_found`
            ? `No existe ese jugador.`
            : a === `insufficient_funds`
              ? `El jugador no tiene tantas fichas.`
              : a === `forbidden`
                ? `No tenés permiso de caja.`
                : a === `wallet_frozen`
                  ? `Esa cuenta está bloqueada. Desbloqueala antes de mover fichas.`
                  : a === `account_closed`
                    ? `Esa cuenta está cerrada: no le cargues fichas, no las va a poder usar.`
                    : a === `request_mismatch`
                      ? `No se movió nada: el pedido no coincide (otro cajero lo resolvió, o cambió el monto o el sentido).`
                      : `No se pudo. Revisá el jugador y el monto.`;
      (m(!1), N(!1, p));
    });
  }
  return {
    abierto: a,
    jugador: F,
    modo: s,
    monto: l,
    codigo: h,
    aviso: _,
    logro: y,
    pendiente: r,
    pideCodigo: p,
    tomado: P,
    montoEscrito: L,
    errorMonto: R,
    esCarga: re,
    freno: ie,
    frenoDuro: ae,
    alcanza: ce,
    quedaria: le,
    listo: ue,
    ficha: w,
    setFicha: T,
    jugadas: E,
    fallaronJugadas: O,
    notas: te,
    notaTexto: A,
    setNotaTexto: j,
    abrir: fe,
    cerrar: pe,
    setModo: c,
    setMonto: u,
    setCodigo: g,
    mover: xe,
    tomarPedido: me,
    descartarPedido: he,
    avisar: N,
    verJugadas: ge,
    verNotas: _e,
    guardarNota: ve,
    bloquearPlata: ye,
    cambiarCuenta: be,
    limpiarLogro: () => b(null),
  };
}
let Im, Lm;
function Rm(e) {
  Im !== e && ((Im = e), Lm.forEach((e) => e()));
}
function useCashierBusy() {
  return (0, React.useSyncExternalStore)(
    (e) => (
      Lm.add(e),
      () => {
        Lm.delete(e);
      }
    ),
    () => Im,
    () => !1,
  );
}
function useCashierBusyEffect(e) {
  (0, React.useEffect)(() => (Rm(e), () => Rm(!1)), [e]);
}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function initializeCashierControls() {
  Bp = Object.freeze({
    hostname: `caja.tucasino.ejemplo`,
    protocol: `https:`,
    get origin() {
      return `${this.protocol}//${this.hostname}`;
    },
  });
  Vp =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  Hp = Vp(`loadChipsAction`);
  Up = Vp(`unloadChipsAction`);
  Wp = Vp(`crearCasaAction`);
  Gp = Vp(`cambiarActivaCasaAction`);
  Kp = Vp(`eliminarCasaAction`);
  qp = Vp(`movimientosDeCupoAction`);
  Jp = Vp(`recargarCupoAction`);
  Yp = Vp(`dropRequestAction`);
  Xp = Vp(`freezeWalletAction`);
  Zp = Vp(`setAccountStatusAction`);
  Qp = Vp(`approveHeldAction`);
  $p = Vp(`approveSecondWithdrawalAction`);
  em = Vp(`rejectSecondWithdrawalAction`);
  tm = Vp(`rejectHeldAction`);
  nm = Vp(`registrarSalidaAction`);
  rm = Vp(`setMaintenanceAction`);
  im = Vp(`jugadasDeAction`);
  am = Vp(`agregarNotaAction`);
  om = Vp(`notasDeAction`);
  sm = Vp(`anularMovimientoAction`);
  cm = Vp(`fijarComisionAction`);
  lm = Vp(`reservarPanelAction`);
  um = Vp(`confirmarPanelAction`);
  dm = Vp(`cancelarPanelAction`);
  fm = Vp(`eliminarPersonalAction`);
  pm = Vp(`cambiarRolAction`);
  mm = Vp(`cambiarAccesoAction`);
  hm = Vp(`cuentasQueSeTrabarianAction`);
  gm = Vp(`asignarCajeroAction`);
  _m = Vp(`fijarRtpAction`);
  vm = Vp(`reintentarTrabadaAction`);
  ym = Vp(`cerrarTrabadaAction`);
  bm =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/soporte-staff-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  xm = bm(`bandejaSoporteAction`);
  Sm = bm(`verHiloAction`);
  Cm = bm(`responderSoporteAction`);
  wm = bm(`cambiarEstadoHiloAction`);
  Tm = bm(`eliminarConversacionAction`);
  Em = bm(`buscarJugadorSoporteAction`);
  Dm = bm(`empezarConversacionAction`);
  Om = bm(`contarSoporteSinLeerAction`);
  km = /^(\d{1,3}(?:\.\d{3})+)(?:[.,](\d{1,2}))?$/;
  Am = /[^\d.,]/;
  Im = !1;
  Lm = new Set();
}
export {
  Bp,
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  Qp,
  $p,
  em,
  tm,
  nm,
  rm,
  im,
  sm,
  cm,
  lm,
  um,
  dm,
  fm,
  pm,
  mm,
  hm,
  gm,
  _m,
  vm,
  ym,
  xm,
  Sm,
  Cm,
  wm,
  Tm,
  Em,
  Dm,
  Om,
  useCashierControls,
  useCashierBusy,
  useCashierBusyEffect,
  initializeCashierControls,
};
