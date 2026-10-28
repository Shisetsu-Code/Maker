/**
 * classic-lobby / game-search.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { gameCatalog } from "./game-catalog.js";
import { Qo, ts, ns } from "./demo-actions.js";
let ds;
function fs(e) {
  return ds.get(e) ?? 2 ** 53 - 1;
}
let ps, ms;
function hs(e, t) {
  return !e || !t ? 2 ** 53 - 1 : (ms.get(e + `|` + t) ?? 2 ** 53 - 1);
}
function gs(e, t) {
  return (
    hs(e.vendorCode, e.gameCode) - hs(t.vendorCode, t.gameCode) ||
    fs(e.vendorCode ?? ``) - fs(t.vendorCode ?? ``) ||
    e.idx - t.idx
  );
}
let _s, vs;
let ys, bs;
function xs(e) {
  return e ? (bs.get(e) ?? null) : null;
}
function Ss(e) {
  if (!e) return [];
  let t = _s.get(e);
  return t
    ? t.contiguous
      ? gameCatalog.slice(t.from, t.to)
      : gameCatalog.filter((t) => t.vendorCode === e)
    : [];
}
let Cs;
function ws(e, t) {
  if (t <= 0) return [];
  let n = Cs.get(e);
  return (n || ((n = Ss(e).slice().sort(gs)), Cs.set(e, n)), n.slice(0, t));
}
function Ts(e) {
  let t = e.trim();
  return t
    ? t === t.toLowerCase() ||
      (t === t.toUpperCase() && t.replace(/[^A-Za-z]/g, ``).length > 4)
      ? t
          .split(` `)
          .map((e) => e && e[0].toUpperCase() + e.slice(1).toLowerCase())
          .join(` `)
      : t
    : e;
}
let Es;
let Ds, Os, ks, As, js, Ms, Ns, Ps, Fs;
function initializeGameSearch() {
  ds = new Map(
    `slot-pragmatic.PP_LIVE_PRO.slot-playngo.slot-netent.mini-spribe.PGSOFT.slot-playtech.slot-hacksaw.slot-greentube.slot-amusnet.slot-egt.slot-nolimitcity.slot-push.slot-elk.slot-habanero.slot-playson.slot-amatic.slot-3oaks.slot-booming.slot-ka.slot-rubyplay.slot-platipus.slot-kajot.slot-tomhorn.slot-pateplay.slot-amigo.slot-croco.slot-backseat.FATPANDA.EVOPLAY.CQ9.JOKERGAMING.SPADEGAMING.FASTSPIN.FACHAI.NEXTSPIN.DREAMTECH.ROYALGAMING.TOPTREND`
      .split(`.`)
      .map((e, t) => [e, t]),
  );
  ps = [
    [`slot-pragmatic`, `vs20olympgate`],
    [`slot-pragmatic`, `vs20fruitsw`],
    [`slot-pragmatic`, `vs10bbbonanza`],
    [`slot-netent`, `starburst0000000`],
    [`slot-playngo`, `bookofdead`],
    [`slot-pragmatic`, `vs25wolfgold`],
    [`slot-netent`, `gonzosquestr96f1`],
    [`mini-spribe`, `Aviator`],
    [`slot-pragmatic`, `vs20sugarrush`],
    [`slot-playngo`, `reactoonz`],
    [`slot-pragmatic`, `vs20doghouse2`],
    [`slot-playngo`, `riseofolympus`],
    [`slot-nolimitcity`, `SanQuentin`],
    [`slot-nolimitcity`, `Mental`],
    [`slot-playngo`, `firejoker`],
    [`slot-pragmatic`, `vs20fruitparty`],
    [`slot-playngo`, `legacyofdead`],
    [`PGSOFT`, `fortune-tiger`],
    [`PGSOFT`, `fortune-ox`],
    [`PGSOFT`, `mahjong-ways2`],
  ];
  ms = new Map(ps.map(([e, t], n) => [e + `|` + t, n]));
  _s = new Map();
  vs = new Map();
  for (let e = 0; e < gameCatalog.length; e++) {
    let t = gameCatalog[e];
    if (!t.vendorCode) continue;
    let n = _s.get(t.vendorCode);
    n
      ? (e !== n.to && (n.contiguous = !1), (n.to = e + 1))
      : (_s.set(t.vendorCode, {
          from: e,
          to: e + 1,
          contiguous: !0,
        }),
        vs.set(t.vendorCode, t.p));
  }
  ys = [..._s.entries()]
    .map(([e, t]) => ({
      code: e,
      name: vs.get(e) ?? e,
      count: t.to - t.from,
    }))
    .sort(
      (e, t) =>
        fs(e.code) - fs(t.code) ||
        t.count - e.count ||
        e.name.localeCompare(t.name, `es`),
    );
  bs = new Map(ys.map((e) => [e.code, e]));
  Cs = new Map();
  ns();
  Es = (
    (e) =>
    async (...t) => {
      let n = ts[`app/game-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Qo,
          };
    }
  )(`launchGameAction`);
  ns();
  Ds =
    (e) =>
    async (...t) => {
      let n = ts[`app/player-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Qo,
          };
    };
  Os = Ds(`requestChipsAction`);
  ks = Ds(`cancelRequestAction`);
  As = Ds(`closeAccountAction`);
  js = Ds(`misMovimientosAction`);
  Ms = Ds(`enviarFeedbackAction`);
  Ns = Ds(`registrarAparatoAction`);
  Ps = Ds(`resolverCorreoDeJugadorAction`);
  Fs = /^[a-z0-9][a-z0-9._-]{1,22}[a-z0-9]$/;
}
export {
  fs,
  ps,
  ys,
  xs,
  Ss,
  ws,
  Ts,
  Es,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  initializeGameSearch,
};
