/**
 * brasa / game-catalog.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
let Ee, De, Oe, ke, Ae, je, Me, Ne;
function Pe(e) {
  return e.map((e) => {
    let t = Me.get(e.gameCode);
    return t
      ? {
          ...e,
          gameCode: t.gameCode,
          gameName: t.nombre,
          vendorCode: t.vendorCode,
          art: t.art,
          img: t.paquete,
        }
      : e;
  });
}
function Fe(e) {
  return e.map((e) => Me.get(e)?.gameCode ?? e);
}
function Ie(e) {
  return Object.fromEntries(
    Object.entries(e).map(([e, t]) => [Me.get(e)?.gameCode ?? e, t]),
  );
}
function Le(e) {
  return e.map((e) => {
    let t = Ne.get(e[1]);
    return t ? [e[0], t.nombre, ...e.slice(2)] : [...e];
  });
}
let Re, P, F, I, ze, Be, L, Ve, He, Ue, We, R, Ge;
let Ke, qe, Je, Ye, Xe, Ze, Qe, $e;
function initializeGameCatalog() {
  Ee = `brasa/assets/covers/`;
  De = (e) => `https://common-static.ppgames.net/game_pic/square/200/${e}.png`;
  Oe = (e) =>
    `https://images.gscplusmd.com/statics/production/publics/images/games/1/1006/LIVE_CASINO/${e}.png`;
  ke = (e, t) => `${Ee}${e}-${t}.webp`;
  Ae = [
    {
      diseno: `vs20olympgate`,
      disenoNombre: `Gates of Olympus`,
      vendorCode: `slot-pragmatic`,
      gameCode: `vs20olympgate`,
      nombre: `Gates of Olympus`,
      tipo: 1,
      art: `GO`,
      portada: De(`vs20olympgate`),
      paquete: ke(`slot-pragmatic`, `vs20olympgate`),
    },
    {
      diseno: `vs20fruitsw`,
      disenoNombre: `Sweet Bonanza`,
      vendorCode: `slot-pragmatic`,
      gameCode: `vs20fruitsw`,
      nombre: `Sweet Bonanza`,
      tipo: 1,
      art: `SB`,
      portada: De(`vs20fruitsw`),
      paquete: ke(`slot-pragmatic`, `vs20fruitsw`),
    },
    {
      diseno: `126`,
      disenoNombre: `Fortune Tiger`,
      vendorCode: `PGSOFT`,
      gameCode: `fortune-tiger`,
      nombre: `Fortune Tiger`,
      tipo: 1,
      art: `FT`,
      portada: `/games-cartas/PGSOFT/fortune-tiger.webp`,
      paquete: ke(`PGSOFT`, `fortune-tiger`),
    },
    {
      diseno: `lightningroulette`,
      disenoNombre: `Lightning Roulette`,
      vendorCode: `PP_LIVE_PRO`,
      gameCode: `1hl65ce1lxuqdrkr`,
      nombre: `Ruleta Mega`,
      tipo: 2,
      art: `RM`,
      portada: Oe(204),
      paquete: ke(`PP_LIVE_PRO`, `1hl65ce1lxuqdrkr`),
    },
    {
      diseno: `65`,
      disenoNombre: `Mahjong Ways`,
      vendorCode: `PGSOFT`,
      gameCode: `mahjong-ways`,
      nombre: `Mahjong Ways`,
      tipo: 1,
      art: `MJ`,
      portada: `/games-cartas/PGSOFT/mahjong-ways.webp`,
      paquete: ke(`PGSOFT`, `mahjong-ways`),
    },
    {
      diseno: `crazytime`,
      disenoNombre: `Crazy Time`,
      vendorCode: `PP_LIVE_PRO`,
      gameCode: `md500q83g7cdefw1`,
      nombre: `Mega Wheel`,
      tipo: 2,
      art: `MW`,
      portada: Oe(801),
      paquete: ke(`PP_LIVE_PRO`, `md500q83g7cdefw1`),
    },
    {
      diseno: `vs20doghouse`,
      disenoNombre: `The Dog House`,
      vendorCode: `slot-pragmatic`,
      gameCode: `vswaysdogs`,
      nombre: `The Dog House Megaways`,
      tipo: 1,
      art: `DH`,
      portada: De(`vswaysdogs`),
      paquete: ke(`slot-pragmatic`, `vswaysdogs`),
    },
    {
      diseno: `vs10bbbonanza`,
      disenoNombre: `Big Bass Bonanza`,
      vendorCode: `slot-pragmatic`,
      gameCode: `vs10bbbonanza`,
      nombre: `Big Bass Bonanza`,
      tipo: 1,
      art: `BB`,
      portada: De(`vs10bbbonanza`),
      paquete: ke(`slot-pragmatic`, `vs10bbbonanza`),
    },
    {
      diseno: `98`,
      disenoNombre: `Fortune Ox`,
      vendorCode: `PGSOFT`,
      gameCode: `fortune-ox`,
      nombre: `Fortune Ox`,
      tipo: 1,
      art: `FO`,
      portada: `/games-cartas/PGSOFT/fortune-ox.webp`,
      paquete: ke(`PGSOFT`, `fortune-ox`),
    },
    {
      diseno: `SGHotHotFruit`,
      disenoNombre: `Hot Hot Fruit`,
      vendorCode: `slot-push`,
      gameCode: `jamminjars`,
      nombre: `Jammin’ Jars`,
      tipo: 1,
      art: `JJ`,
      portada: `/games-cartas/slot-push/jamminjars.webp`,
      paquete: ke(`slot-push`, `jamminjars`),
    },
    {
      diseno: `blackjackclassic`,
      disenoNombre: `Blackjack Clásico`,
      vendorCode: `PP_LIVE_PRO`,
      gameCode: `m24f0zhzupicvchc`,
      nombre: `Blackjack 1`,
      tipo: 2,
      art: `21`,
      portada: Oe(515),
      paquete: ke(`PP_LIVE_PRO`, `m24f0zhzupicvchc`),
    },
    {
      diseno: `SGWildTrucks`,
      disenoNombre: `Wild Trucks`,
      vendorCode: `slot-egt`,
      gameCode: `SCSlot`,
      nombre: `Shining Crown`,
      tipo: 1,
      art: `SC`,
      portada: `/games-cartas/slot-egt/SCSlot.webp`,
      paquete: ke(`slot-egt`, `SCSlot`),
    },
    {
      diseno: `bng-sun3`,
      disenoNombre: `Sun of Egypt 3`,
      vendorCode: `slot-amusnet`,
      gameCode: `806`,
      nombre: `Rise of Ra`,
      tipo: 1,
      art: `RR`,
      portada: `/games-cartas/slot-amusnet/806.webp`,
      paquete: ke(`slot-amusnet`, `806`),
    },
    {
      diseno: `speedbaccarat`,
      disenoNombre: `Speed Baccarat`,
      vendorCode: `PP_LIVE_PRO`,
      gameCode: `pwnhicogrzeodk79`,
      nombre: `Baccarat Rápido 1`,
      tipo: 2,
      art: `BR`,
      portada: Oe(402),
      paquete: ke(`PP_LIVE_PRO`, `pwnhicogrzeodk79`),
    },
    {
      diseno: `ezugi-ruletaarg`,
      disenoNombre: `Ruleta Argentina`,
      vendorCode: `PP_LIVE_PRO`,
      gameCode: `roulerw234rwl292`,
      nombre: `Ruleta Latina`,
      tipo: 2,
      art: `RL`,
      portada: Oe(234),
      paquete: ke(`PP_LIVE_PRO`, `roulerw234rwl292`),
    },
    {
      diseno: `ezugi-bjvip`,
      disenoNombre: `Blackjack VIP`,
      vendorCode: `PP_LIVE_PRO`,
      gameCode: `bjusbim6hcmbj241`,
      nombre: `Blackjack VIP 1`,
      tipo: 2,
      art: `BJ`,
      portada: Oe(546),
      paquete: ke(`PP_LIVE_PRO`, `bjusbim6hcmbj241`),
    },
    {
      diseno: `almighty-reels---power-of-zeus`,
      disenoNombre: `Almighty Reels: Power of Zeus`,
      vendorCode: `slot-greentube`,
      gameCode: `almighty-reels---power-of-zeus`,
      nombre: `ALMIGHTY REELS - Power of Zeus`,
      tipo: 1,
      art: `AR`,
      portada: `/games-cartas/slot-greentube/almighty-reels---power-of-zeus.webp`,
      paquete: `${Ee}almighty-reels-power-of-zeus.webp`,
    },
    {
      diseno: `ageofolympus`,
      disenoNombre: `Age of Olympus`,
      vendorCode: `slot-redrake`,
      gameCode: `ageofolympus`,
      nombre: `Age of Olympus: Apollo`,
      tipo: 1,
      art: `AO`,
      portada: `/games-cartas/slot-redrake/ageofolympus.webp`,
      paquete: `${Ee}ageofolympus.webp`,
    },
    {
      diseno: `VSZeusDivine_TNP`,
      disenoNombre: `Zeus Divine`,
      vendorCode: `slot-tomhorn`,
      gameCode: `VSZeusDivine_TNP`,
      nombre: `Zeus Divine Multipliers`,
      tipo: 1,
      art: `ZD`,
      portada: `/games-cartas/slot-tomhorn/VSZeusDivine_TNP.webp`,
      paquete: `${Ee}VSZeusDivine_TNP.webp`,
    },
    {
      diseno: `millionzeus`,
      disenoNombre: `Million Zeus`,
      vendorCode: `slot-redrake`,
      gameCode: `millionzeus`,
      nombre: `Million Zeus`,
      tipo: 1,
      art: `MZ`,
      portada: `/games-cartas/slot-redrake/millionzeus.webp`,
      paquete: `${Ee}millionzeus.webp`,
    },
    {
      diseno: `riseofolympus`,
      disenoNombre: `Rise of Olympus`,
      vendorCode: `slot-playngo`,
      gameCode: `riseofolympus`,
      nombre: `Rise of Olympus`,
      tipo: 1,
      art: `RO`,
      portada: `/games-cartas/slot-playngo/riseofolympus.webp`,
      paquete: `${Ee}riseofolympus.webp`,
    },
  ];
  je = [
    {
      code: `slot-pragmatic`,
      name: `Pragmatic Play`,
      type: 1,
    },
    {
      code: `PGSOFT`,
      name: `PG Soft`,
      type: 1,
    },
    {
      code: `slot-push`,
      name: `Push`,
      type: 1,
    },
    {
      code: `slot-egt`,
      name: `EGT`,
      type: 1,
    },
    {
      code: `slot-amusnet`,
      name: `Amusnet`,
      type: 1,
    },
    {
      code: `slot-greentube`,
      name: `Greentube`,
      type: 1,
    },
    {
      code: `slot-redrake`,
      name: `RedRake`,
      type: 1,
    },
    {
      code: `slot-tomhorn`,
      name: `Tomhorn`,
      type: 1,
    },
    {
      code: `slot-playngo`,
      name: `PlaynGo`,
      type: 1,
    },
    {
      code: `PP_LIVE_PRO`,
      name: `Pragmatic Play Live`,
      type: 2,
    },
  ];
  Me = new Map(Ae.map((e) => [e.diseno, e]));
  Ne = new Map(Ae.map((e) => [e.disenoNombre, e]));
  Re = {
    fuente: `Big Shoulders + Figtree`,
    autoRotate: !0,
    densidad: `Compacta`,
    saldo: `Con saldo`,
  };
  P = `var(--br-tinta,#121110)`;
  F = `var(--br-p,#FF5B14)`;
  I = `var(--br-texto,#F3E9D8)`;
  ze = `var(--br-blanco,#FFFFFF)`;
  Be = `var(--br-texto-3,#A89E92)`;
  L = (e) =>
    new Intl.NumberFormat(`es-AR`, {
      style: `currency`,
      currency: `ARS`,
      maximumFractionDigits: 0,
    }).format(e);
  Ve = (e, t) => {
    let n = /^var\((--br-[a-z0-9-]+),#([0-9A-Fa-f]{6})\)$/.exec(e);
    if (n) {
      let e = parseInt(n[2], 16);
      return (
        `rgba(var(` +
        n[1] +
        `-rgb,` +
        ((e >> 16) & 255) +
        `,` +
        ((e >> 8) & 255) +
        `,` +
        (e & 255) +
        `),` +
        t +
        `)`
      );
    }
    let r = parseInt(e.slice(1), 16);
    return `rgba(${(r >> 16) & 255},${(r >> 8) & 255},${r & 255},${t})`;
  };
  He = (e, t) => {
    let n = Ve(t, 0.17);
    return e === 0
      ? [
          `repeating-linear-gradient(135deg,${n} 0 2px,transparent 2px 14px)`,
          `auto`,
        ]
      : e === 1
        ? [
            `repeating-radial-gradient(circle at 100% 100%,${n} 0 2px,transparent 2px 18px)`,
            `auto`,
          ]
        : e === 2
          ? [`radial-gradient(${n} 1.6px,transparent 1.9px)`, `14px 14px`]
          : [
              `linear-gradient(${n} 1px,transparent 1px),linear-gradient(90deg,${n} 1px,transparent 1px)`,
              `22px 22px`,
            ];
  };
  Ue = je;
  We = Object.fromEntries(Ue.map((e) => [e.code, e.name]));
  R = (e, t, n, r, i, a, o, s, c) =>
    Object.assign(
      {
        gameCode: e,
        gameName: t,
        vendorCode: n,
        gameType: r,
        art: i,
        bg: a,
        fg: o,
        pop: s,
      },
      c || {},
    );
  Ge = Pe([
    R(`vs20olympgate`, `Gates of Olympus`, `slot-pragmatic`, 1, `GO`, F, P, 1),
    R(`vs20fruitsw`, `Sweet Bonanza`, `slot-pragmatic`, 1, `SB`, I, F, 2),
    R(`126`, `Fortune Tiger`, `slot-pgsoft`, 1, `FT`, P, F, 3),
    R(
      `lightningroulette`,
      `Lightning Roulette`,
      `casino-evolution`,
      2,
      `LR`,
      P,
      I,
      4,
    ),
    R(`65`, `Mahjong Ways`, `slot-pgsoft`, 1, `MW`, F, P, 5),
    R(`crazytime`, `Crazy Time`, `casino-evolution`, 2, `CT`, I, P, 6),
    R(`vs20doghouse`, `The Dog House`, `slot-pragmatic`, 1, `DH`, ze, P, 7),
    R(`vs10bbbonanza`, `Big Bass Bonanza`, `slot-pragmatic`, 1, `BB`, P, F, 8),
    R(`98`, `Fortune Ox`, `slot-pgsoft`, 1, `FO`, I, F, 9),
    R(`SGHotHotFruit`, `Hot Hot Fruit`, `slot-habanero`, 1, `HH`, F, P, 10),
    R(
      `blackjackclassic`,
      `Blackjack Clásico`,
      `casino-evolution`,
      2,
      `21`,
      ze,
      P,
      11,
    ),
    R(`SGWildTrucks`, `Wild Trucks`, `slot-habanero`, 1, `WT`, P, I, 12),
    R(`bng-sun3`, `Sun of Egypt 3`, `slot-booongo`, 1, `SE`, I, P, 13),
    R(`speedbaccarat`, `Speed Baccarat`, `casino-evolution`, 2, `SB`, F, P, 14),
    R(
      `ezugi-ruletaarg`,
      `Ruleta Argentina`,
      `casino-ezugi`,
      2,
      `RA`,
      P,
      F,
      15,
      {
        maint: !0,
      },
    ),
    R(`ezugi-bjvip`, `Blackjack VIP`, `casino-ezugi`, 2, `BJ`, ze, F, 16),
    R(
      `almighty-reels---power-of-zeus`,
      `Almighty Reels: Power of Zeus`,
      `slot-greentube`,
      1,
      `AR`,
      P,
      F,
      0.1,
      {
        img: `brasa/assets/covers/almighty-reels-power-of-zeus.webp`,
      },
    ),
    R(`ageofolympus`, `Age of Olympus`, `slot-redrake`, 1, `AO`, P, F, 0.2, {
      img: `brasa/assets/covers/ageofolympus.webp`,
    }),
    R(`VSZeusDivine_TNP`, `Zeus Divine`, `slot-tomhorn`, 1, `ZD`, P, F, 0.3, {
      img: `brasa/assets/covers/VSZeusDivine_TNP.webp`,
    }),
    R(`millionzeus`, `Million Zeus`, `slot-redrake`, 1, `MZ`, P, F, 0.4, {
      img: `brasa/assets/covers/millionzeus.webp`,
    }),
    R(`riseofolympus`, `Rise of Olympus`, `slot-playngo`, 1, `RO`, P, F, 0.5, {
      img: `brasa/assets/covers/riseofolympus.webp`,
    }),
  ]);
  Ge.forEach((e, t) => (e.pat = t % 4));
  Ke = Object.fromEntries(Ge.map((e) => [e.gameCode, e]));
  qe = {
    "Barlow Condensed + Barlow": [`'Barlow Condensed'`, `Barlow`],
    "Oswald + Manrope": [`Oswald`, `Manrope`],
    "Oswald (todo)": [`Oswald`, `Oswald`],
    "Bebas Neue + Manrope": [`'Bebas Neue'`, `Manrope`],
    "Big Shoulders + Figtree": [`'Big Shoulders Display'`, `Figtree`],
    "Saira Condensed + Saira": [`'Saira Condensed'`, `Saira`],
    "Anton + Archivo": [`Anton`, `Archivo`],
    "Unbounded + Manrope": [`Unbounded`, `Manrope`],
  };
  Je = {
    alias: `rushybet.cajero`,
    cbu: `0000003100098765432101`,
    titular: `RushyBet Pagos`,
    banco: `Mercado Pago`,
  };
  Ye = Fe([
    `almighty-reels---power-of-zeus`,
    `ageofolympus`,
    `VSZeusDivine_TNP`,
    `millionzeus`,
    `riseofolympus`,
    `vs20olympgate`,
    `lightningroulette`,
  ]);
  Xe = Le([
    [`lu***a`, `Gates of Olympus`, 52500, 105],
    [`dani_r`, `Crazy Time`, 38e3, 76],
    [`ma***o`, `Fortune Tiger`, 12750, 51],
    [`sofi.k`, `Sweet Bonanza`, 96e3, 192],
    [`jo***e`, `Lightning Roulette`, 17500, 35],
    [`rocket7`, `Big Bass Bonanza`, 8400, 42],
    [`an***s`, `Mahjong Ways`, 23100, 66],
    [`kiko`, `Blackjack Clásico`, 4e3, 2],
    [`ve***a`, `Hot Hot Fruit`, 15600, 78],
    [`fede_m`, `Speed Baccarat`, 9e3, 2],
  ]);
  Ze = {
    sport: `M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18M12 7.5l4 2.9-1.5 4.6h-5L8 10.4zM12 3v4.5M16 10.4l4.3-1.4M14.5 15l2.7 3.7M9.5 15l-2.7 3.7M8 10.4L3.7 9`,
    home: `M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z`,
    live: `M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8`,
    search: `M4 11a7 7 0 1 0 14 0a7 7 0 1 0-14 0M20 20l-4-4`,
    wallet: `M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2h12v4M16 14.5h.01`,
    grid: `M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z`,
    list: `M9 6h12M9 12h12M9 18h12M4 6h.01M4 12h.01M4 18h.01`,
  };
  Qe = (e) => {
    let t = (e) => (`0` + e).slice(-2);
    return (
      t(Math.floor(e / 3600)) +
      `:` +
      t(Math.floor((e % 3600) / 60)) +
      `:` +
      t(e % 60)
    );
  };
  $e = () => {
    let e = new Date(),
      t = (e) => (`0` + e).slice(-2);
    return t(e.getHours()) + `:` + t(e.getMinutes());
  };
}
export {
  Ie,
  Re,
  P,
  F,
  I,
  Be,
  L,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  initializeGameCatalog,
};
