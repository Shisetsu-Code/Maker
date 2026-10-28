/**
 * classic-lobby / demo-winners.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { ao, oo } from "./game-catalog.js";
import { Gs } from "./account-security.js";
let Bd, Vd, Hd, Ud;
function Wd(e) {
  let t = Math.floor(e / 1e3),
    n = Math.floor(t / Hd) * Vd.length,
    r = t % Hd;
  for (let e of Vd) {
    if (r < e) break;
    ((r -= e), n++);
  }
  return n;
}
function createDemoWinners(e = 12) {
  let t = Date.now(),
    n = Wd(t),
    r = [];
  for (let i = 0; i < Math.min(e, Bd.length); i++) {
    let e = n - i,
      a = Bd[((e % Bd.length) + Bd.length) % Bd.length],
      o = Math.round(a.betCents * a.mult),
      s = new Date(t - (i * 4 + (e % 3)) * 6e4);
    r.push({
      id: `demo-${e}`,
      user: a.user,
      time: Ud.format(s),
      bet: Gs(a.betCents),
      payout: Gs(o),
      payoutCents: o,
      mult: `${a.mult.toFixed(2)}X`,
      multValue: a.mult,
      art: ao(a.vendor, a.game),
      game: oo(a.vendor, a.game),
    });
  }
  return r;
}
function initializeDemoWinners() {
  Bd = [
    {
      user: `@SO***A`,
      vendor: `PP_LIVE_PRO`,
      game: `roulerw234rwl292`,
      betCents: 86e4,
      mult: 35,
    },
    {
      user: `@MA***O`,
      vendor: `slot-ka`,
      game: `LightningGoddess`,
      betCents: 2e5,
      mult: 42.5,
    },
    {
      user: `@NA***I`,
      vendor: `PP_LIVE_PRO`,
      game: `gatesofolympus01`,
      betCents: 2e6,
      mult: 8,
    },
    {
      user: `@CA***S`,
      vendor: `slot-ka`,
      game: `OriginOfFire`,
      betCents: 1e6,
      mult: 11.8,
    },
    {
      user: `@FE***N`,
      vendor: `PP_LIVE_PRO`,
      game: `lucky6roulettea3`,
      betCents: 3e5,
      mult: 35,
    },
    {
      user: `@LU***A`,
      vendor: `slot-ka`,
      game: `SolomonsTreasure`,
      betCents: 1e5,
      mult: 31.6,
    },
    {
      user: `@DI***R`,
      vendor: `slot-ka`,
      game: `ChineseZombie`,
      betCents: 5e4,
      mult: 68,
    },
    {
      user: `@VA***A`,
      vendor: `PP_LIVE_PRO`,
      game: `1hl65ce1lxuqdrkr`,
      betCents: 4e5,
      mult: 35,
    },
    {
      user: `@RO***L`,
      vendor: `slot-ka`,
      game: `SharkTreasure`,
      betCents: 15e4,
      mult: 23.4,
    },
    {
      user: `@GO***Z`,
      vendor: `slot-ka`,
      game: `PlagueDoctor`,
      betCents: 35e4,
      mult: 5.85,
    },
    {
      user: `@MI***L`,
      vendor: `slot-ka`,
      game: `FairyDust`,
      betCents: 12e4,
      mult: 14.25,
    },
    {
      user: `@PA***O`,
      vendor: `slot-ka`,
      game: `KaiFengFu`,
      betCents: 9e5,
      mult: 2.85,
    },
    {
      user: `@BR***A`,
      vendor: `slot-ka`,
      game: `Lilith`,
      betCents: 25e4,
      mult: 16.2,
    },
    {
      user: `@EZ***L`,
      vendor: `slot-ka`,
      game: `FaCaiDestiny`,
      betCents: 7e5,
      mult: 3.15,
    },
    {
      user: `@AY***N`,
      vendor: `PP_LIVE_PRO`,
      game: `cosproulttf8s6sr`,
      betCents: 55e4,
      mult: 11,
    },
    {
      user: `@JU***Z`,
      vendor: `slot-ka`,
      game: `DragonTurtle`,
      betCents: 32e4,
      mult: 7.2,
    },
  ];
  Vd = [6, 9, 5, 8, 7, 10, 5, 6];
  Hd = Vd.reduce((e, t) => e + t, 0);
  Ud = new Intl.DateTimeFormat(`es-AR`, {
    timeZone: `America/Argentina/Buenos_Aires`,
    hour: `2-digit`,
    minute: `2-digit`,
    hour12: !1,
  });
}
export { createDemoWinners, initializeDemoWinners };
