/**
 * blaze / game-catalog.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
var oe;
function se(e) {
  let [t, n] = e.split(`|`);
  if (!t || !n || !/^[\w-]+$/.test(t) || !/^[\w-]+$/.test(n))
    throw Error(`juegos-blaze: clave rara «${e}»`);
  return `blaze/assets/covers/${t}-${n}.webp`;
}
let E, D, ce, le, ue, de, O, k, fe;
function pe(e) {
  let t = fe.get(e);
  if (!t) throw Error(`juegos-blaze: «${e}» no es un juego del diseño`);
  return t.nombre;
}
let me, he, ge, _e, ve;
function ye(e, t, n = ve) {
  if (E(e) || !e.startsWith(`/`)) return ``;
  let r = e.replace(/^\/+/, ``);
  return !r || r.split(`/`).includes(`..`)
    ? ``
    : _e(t)
      ? `/` + r
      : n.has(r)
        ? `./` + r
        : ge.test(t)
          ? `/` + r
          : ``;
}
function be(e, t, n = ve) {
  return e.copia === `` ? ye(e.portada, t, n) : `./` + e.copia;
}
let xe, Se, Ce, A;
let we;
function Te(e, t) {
  let n = Object.prototype.hasOwnProperty.call(we, e) ? we[e] : void 0;
  return n === void 0 ? `` : ye(n, t, new Set());
}
let Ee, De, Oe;
function initializeGameCatalog() {
  oe =
    `games-cartas/PGSOFT/dragon-legend.webp,games-cartas/PGSOFT/fortune-gods.webp,games-cartas/PGSOFT/fortune-ox.webp,games-cartas/PGSOFT/fortune-tiger.webp,games-cartas/PGSOFT/hip-hop-panda.webp,games-cartas/PGSOFT/legend-of-hou-yi.webp,games-cartas/PGSOFT/mahjong-ways2.webp,games-cartas/PGSOFT/medusa.webp,games-cartas/PGSOFT/mr-hallow-win.webp,games-cartas/PGSOFT/plushie-frenzy.webp,games-cartas/PGSOFT/prosperity-lion.webp,games-cartas/PGSOFT/reel-love.webp,games-cartas/mini-spribe/Aviator.webp,games-cartas/mini-spribe/Balloon.webp,games-cartas/mini-spribe/Dice.webp,games-cartas/mini-spribe/Goal.webp,games-cartas/mini-spribe/Hilo.webp,games-cartas/mini-spribe/Hotline.webp,games-cartas/mini-spribe/Keno.webp,games-cartas/mini-spribe/Mines.webp,games-cartas/mini-spribe/Mini-Roulette.webp,games-cartas/mini-spribe/Plinko.webp,games-cartas/slot-playngo/bananarush.webp,games-cartas/slot-playngo/banquetofdead.webp,games-cartas/slot-playngo/baoshi.webp,games-cartas/slot-playngo/barnbusters.webp,games-cartas/slot-playngo/beastsoffire.webp,games-cartas/slot-playngo/bigwincatpawsperity.webp,games-cartas/slot-playngo/boatbonanza.webp,games-cartas/slot-playngo/bonanzadownunder.webp,games-cartas/slot-playngo/bookofdead.webp,games-cartas/slot-playngo/bubblinriches.webp,games-cartas/slot-playngo/buffaloofwealth.webp,games-cartas/slot-playngo/buildinmorebucks.webp,games-cartas/slot-playngo/bullionxpress.webp,games-cartas/slot-playngo/caninecarnage.webp,games-cartas/slot-playngo/captxenosadventure.webp,games-cartas/slot-playngo/cashinjoker.webp,games-cartas/slot-playngo/chambersofancients.webp,games-cartas/slot-playngo/chinesenewyear.webp,games-cartas/slot-playngo/christmasjoker.webp,games-cartas/slot-playngo/christmaskingdom.webp,games-cartas/slot-playngo/cloudquest.webp,games-cartas/slot-playngo/countjokula.webp,games-cartas/slot-playngo/crazycows.webp,games-cartas/slot-playngo/crystalroses.webp,games-cartas/slot-playngo/dio.webp,games-cartas/slot-playngo/divinacommedia.webp,games-cartas/slot-playngo/eastereggs.webp,games-cartas/slot-playngo/eastereggspedition.webp,games-cartas/slot-playngo/enchantedcrystals.webp,games-cartas/slot-playngo/eyeofatum.webp,games-cartas/slot-playngo/eyeofthekraken.webp,games-cartas/slot-playngo/fangsandfire.webp,games-cartas/slot-playngo/fateofdeadblitzways.webp,games-cartas/slot-playngo/fatfrankies.webp,games-cartas/slot-playngo/firejoker.webp,games-cartas/slot-playngo/firejokerblitz.webp,games-cartas/slot-playngo/firetoad2.webp,games-cartas/slot-playngo/freyaswedding.webp,games-cartas/slot-playngo/gargantoonz.webp,games-cartas/slot-playngo/gemix.webp,games-cartas/slot-playngo/gigantoonz.webp,games-cartas/slot-playngo/goldencaravan.webp,games-cartas/slot-playngo/goldenlegend.webp,games-cartas/slot-playngo/goldenticket.webp,games-cartas/slot-playngo/grimmuerto.webp,games-cartas/slot-playngo/happyhalloween.webp,games-cartas/slot-playngo/herculesabyssways.webp,games-cartas/slot-playngo/hooliganhustle.webp,games-cartas/slot-playngo/icequeenmorgana.webp,games-cartas/slot-playngo/incanquest.webp,games-cartas/slot-playngo/kiss.webp,games-cartas/slot-playngo/labofmadness.webp,games-cartas/slot-playngo/laschristmas.webp,games-cartas/slot-playngo/lawnndisorder.webp,games-cartas/slot-playngo/legacyofdead.webp,games-cartas/slot-playngo/legacyofdynasties.webp,games-cartas/slot-playngo/legacyofundeaddragon.webp,games-cartas/slot-playngo/legiongoldunleashed.webp,games-cartas/slot-playngo/leprechaunsdiamonddig.webp,games-cartas/slot-playngo/lofdestinyspins.webp,games-cartas/slot-playngo/lostchapter.webp,games-cartas/slot-playngo/loveisinthefair.webp,games-cartas/slot-playngo/lovejoker.webp,games-cartas/slot-playngo/masquerade.webp,games-cartas/slot-playngo/megadonfeedingfrenzy.webp,games-cartas/slot-playngo/merryxmas.webp,games-cartas/slot-playngo/moledigger.webp,games-cartas/slot-playngo/monkeyscrolls.webp,games-cartas/slot-playngo/moonprincessstargazing.webp,games-cartas/slot-playngo/mysterygenie.webp,games-cartas/slot-playngo/mysteryjoker.webp,games-cartas/slot-playngo/oathofthorns.webp,games-cartas/slot-playngo/pandasticadventure.webp,games-cartas/slot-playngo/pearlsofindia.webp,games-cartas/slot-playngo/piggyheist.webp,games-cartas/slot-playngo/pimped.webp,games-cartas/slot-playngo/piranhapays.webp,games-cartas/slot-playngo/poweroflove.webp,games-cartas/slot-playngo/ragingrex2.webp,games-cartas/slot-playngo/rasreckoning.webp,games-cartas/slot-playngo/ravingreels.webp,games-cartas/slot-playngo/reactoonz.webp,games-cartas/slot-playngo/reactoonz100.webp,games-cartas/slot-playngo/richesofrobin.webp,games-cartas/slot-playngo/ringsofprosperity.webp,games-cartas/slot-playngo/riseofolympus.webp,games-cartas/slot-playngo/riseofolympus100.webp,games-cartas/slot-playngo/riseofolympusextreme.webp,games-cartas/slot-playngo/riseoforpheus.webp,games-cartas/slot-playngo/rosyorbit.webp,games-cartas/slot-playngo/safariofwealth.webp,games-cartas/slot-playngo/sailsofgold.webp,games-cartas/slot-playngo/sambacarnival.webp,games-cartas/slot-playngo/secretofdead.webp,games-cartas/slot-playngo/sherwoodgold.webp,games-cartas/slot-playngo/spinparty.webp,games-cartas/slot-playngo/stadiumofriches.webp,games-cartas/slot-playngo/staticnightmare.webp,games-cartas/slot-playngo/stickyjoker.webp,games-cartas/slot-playngo/superflip.webp,games-cartas/slot-playngo/superflipdeluxe.webp,games-cartas/slot-playngo/synsfortune.webp,games-cartas/slot-playngo/taleofkyubiko.webp,games-cartas/slot-playngo/testament.webp,games-cartas/slot-playngo/thatsrich.webp,games-cartas/slot-playngo/threeclownmonty2.webp,games-cartas/slot-playngo/tombofgold.webp,games-cartas/slot-playngo/tombofgold2.webp,games-cartas/slot-playngo/tomeofmadnessbingo.webp,games-cartas/slot-playngo/towerquest.webp,games-cartas/slot-playngo/undefeatedxerxes.webp,games-cartas/slot-playngo/vikingrunecraft100.webp,games-cartas/slot-playngo/wildnorth.webp,games-cartas/slot-playngo/wizardofgems.webp`.split(
      `,`,
    );
  E = (e) => /^[a-z][a-z\d+.-]*:|^\/\//i.test(e);
  D = (e, t, n, r, i) =>
    Object.freeze({
      diseno: e,
      clave: t,
      nombre: n,
      proveedor: r,
      portada: i,
      copia: E(i) ? se(t) : ``,
    });
  ce = Object.freeze([
    D(
      `Tres Brujas`,
      `slot-playngo|bookofdead`,
      `Rich Wilde and the Book of Dead`,
      `PlaynGo`,
      `/games-cartas/slot-playngo/bookofdead.webp`,
    ),
    D(
      `El Vikingo`,
      `PGSOFT|fortune-tiger`,
      `Fortune Tiger`,
      `PG Soft`,
      `/games-cartas/PGSOFT/fortune-tiger.webp`,
    ),
    D(
      `Minas de la Momia`,
      `mini-spribe|Aviator`,
      `Aviator`,
      `Spribe Gaming`,
      `/games-cartas/mini-spribe/Aviator.webp`,
    ),
    D(
      `Tiki Fuego`,
      `slot-greentube|book-of-ra-deluxe`,
      `Book of Ra Deluxe`,
      `Greentube`,
      `/games-cartas/slot-greentube/book-of-ra-deluxe.webp`,
    ),
    D(
      `Toro Dorado`,
      `slot-egt|SCSlot`,
      `Shining Crown`,
      `EGT`,
      `/games-cartas/slot-egt/SCSlot.webp`,
    ),
    D(
      `Reina del Nilo`,
      `slot-playngo|reactoonz`,
      `Reactoonz`,
      `PlaynGo`,
      `/games-cartas/slot-playngo/reactoonz.webp`,
    ),
    D(
      `Dragón Rojo`,
      `slot-push|jamminjars`,
      `Jammin’ Jars`,
      `Push`,
      `/games-cartas/slot-push/jamminjars.webp`,
    ),
    D(
      `Frutas 777`,
      `slot-greentube|sizzling-hot-deluxe`,
      `Sizzling Hot Deluxe`,
      `Greentube`,
      `/games-cartas/slot-greentube/sizzling-hot-deluxe.webp`,
    ),
    D(
      `Oro Pirata`,
      `PGSOFT|fortune-ox`,
      `Fortune Ox`,
      `PG Soft`,
      `/games-cartas/PGSOFT/fortune-ox.webp`,
    ),
    D(
      `Lobo Lunar`,
      `slot-amusnet|804`,
      `40 Super Hot`,
      `Amusnet`,
      `/games-cartas/slot-amusnet/804.webp`,
    ),
    D(
      `Cofre Azteca`,
      `slot-playngo|riseofolympus`,
      `Rise of Olympus`,
      `PlaynGo`,
      `/games-cartas/slot-playngo/riseofolympus.webp`,
    ),
    D(
      `Gallo Loco`,
      `slot-booming|634807c733c14000011d2f51`,
      `Power of Olympus`,
      `Booming`,
      `/games-cartas/slot-booming/634807c733c14000011d2f51.webp`,
    ),
    D(
      `Sol de Fuego`,
      `slot-amatic|bookofaztec`,
      `Book of Aztec`,
      `Amatic`,
      `/games-cartas/slot-amatic/bookofaztec.webp`,
    ),
    D(
      `Neón Diamante`,
      `slot-redrake|mythofra`,
      `Myth of Ra`,
      `RedRake`,
      `/games-cartas/slot-redrake/mythofra.webp`,
    ),
  ]);
  le = Object.freeze([
    D(
      `Fénix Dorado`,
      `PGSOFT|fortune-dragon`,
      `Fortune Dragon`,
      `PG Soft`,
      `/games-cartas/PGSOFT/fortune-dragon.webp`,
    ),
    D(
      `Tormenta de Rubíes`,
      `slot-playngo|moonprincess100`,
      `Moon Princess 100`,
      `PlaynGo`,
      `/games-cartas/slot-playngo/moonprincess100.webp`,
    ),
    D(
      `Cazador de Tesoros`,
      `slot-booming|666810433dce1f0001d73561`,
      `Coin Crusher Hold and Win`,
      `Booming`,
      `/games-cartas/slot-booming/666810433dce1f0001d73561.webp`,
    ),
    D(
      `Samurái Neón`,
      `slot-zitro|ZITRO_LINK_KING_GODS_LAND`,
      `Link King Gods Land`,
      `Zitro`,
      `/games-cartas/slot-zitro/ZITRO_LINK_KING_GODS_LAND.webp`,
    ),
    D(
      `Galaxia 5000`,
      `slot-redrake|midaswins`,
      `Midas Wins`,
      `RedRake`,
      `/games-cartas/slot-redrake/midaswins.webp`,
    ),
    D(
      `Rey del Desierto`,
      `slot-push|razorways-01`,
      `Razor Ways`,
      `Push`,
      `/games-cartas/slot-push/razorways-01.webp`,
    ),
  ]);
  ue = `https://images.gscplusmd.com/statics/production/publics/images/games/1/1006/LIVE_CASINO/`;
  de = Object.freeze([
    D(
      `Ruleta en vivo`,
      `PP_LIVE_PRO|roulerw234rwl292`,
      `Ruleta Latina`,
      `Pragmatic Play Live`,
      `${ue}234.png`,
    ),
    D(
      `Blackjack VIP`,
      `PP_LIVE_PRO|bjusbim6hcmbj241`,
      `Blackjack VIP 1`,
      `Pragmatic Play Live`,
      `${ue}546.png`,
    ),
    D(
      `Baccarat Speed`,
      `PP_LIVE_PRO|pwnhicogrzeodk79`,
      `Baccarat Rápido 1`,
      `Pragmatic Play Live`,
      `${ue}402.png`,
    ),
    D(
      `Rueda de la Fortuna`,
      `PP_LIVE_PRO|md500q83g7cdefw1`,
      `Mega Wheel`,
      `Pragmatic Play Live`,
      `${ue}801.png`,
    ),
    D(
      `Póker Caribeño`,
      `PP_LIVE_PRO|pbvzrfk1fyft4dwe`,
      `Sweet Bonanza Candyland`,
      `Pragmatic Play Live`,
      `${ue}1101.png`,
    ),
    D(
      `Dados Relámpago`,
      `PP_LIVE_PRO|megasicboauto001`,
      `Mega Sic Bo`,
      `Pragmatic Play Live`,
      `${ue}701.png`,
    ),
    D(
      `Ruleta Inmersiva`,
      `PP_LIVE_PRO|25irclas25imrcrw`,
      `Ruleta Inmersiva Deluxe`,
      `Pragmatic Play Live`,
      `${ue}292.png`,
    ),
    D(
      `Blackjack Infinito`,
      `PP_LIVE_PRO|sbjsbim6hsbj2421`,
      `Blackjack Rápido 1`,
      `Pragmatic Play Live`,
      `${ue}566.png`,
    ),
  ]);
  O = (e, t, n, r) =>
    Object.freeze({
      diseno: e,
      codigo: t,
      nombre: n,
      juegos: r,
    });
  k = Object.freeze([
    O(`Pragmatic Play`, `PP_LIVE_PRO`, `Pragmatic Play Live`, 212),
    O(`Hacksaw Gaming`, `slot-playngo`, `PlaynGo`, 445),
    O(`NetEnt`, `mini-spribe`, `Spribe Gaming`, 10),
    O(`Play'n GO`, `PGSOFT`, `PG Soft`, 134),
    O(`Evolution`, `slot-greentube`, `Greentube`, 169),
    O(`Nolimit City`, `slot-amusnet`, `Amusnet`, 314),
    O(`Relax Gaming`, `slot-egt`, `EGT`, 203),
    O(`Thunderkick`, `slot-push`, `Push`, 40),
    O(`Belatra`, `slot-amatic`, `Amatic`, 104),
    O(`Endorphina`, `slot-booming`, `Booming`, 80),
    O(`Wazdan`, `slot-redrake`, `RedRake`, 143),
    O(`Push Gaming`, `slot-zitro`, `Zitro`, 20),
  ]);
  fe = new Map([...ce, ...le, ...de].map((e) => [e.diseno, e]));
  me = (e) => e.map(pe);
  he = /(^|\.)rushybet\.(com|net)\.?$/i;
  ge = /^(127\.0\.0\.1|localhost|\[::1\])$/i;
  _e = (e) => he.test(e);
  ve = new Set(
    (Array.isArray(oe) ? oe : [])
      .filter((e) => typeof e == `string`)
      .map((e) => e.replace(/^\.?\/+/, ``)),
  );
  xe = typeof location < `u` ? location.hostname : ``;
  Se = new Map([...ce, ...le, ...de].map((e) => [e.nombre, e]));
  Ce = new Map([...Se].map(([e, t]) => [e, be(t, xe)]));
  A = Object.freeze({
    slots: ce.map((e) => e.nombre),
    nuevos: le.map((e) => e.nombre),
    vivo: de.map((e) => e.nombre),
    proveedores: k.map((e) => e.nombre),
    proveedoresConteo: k.map((e) => [e.nombre, e.juegos]),
    hot: me([
      `Toro Dorado`,
      `Oro Pirata`,
      `Lobo Lunar`,
      `Dragón Rojo`,
      `Neón Diamante`,
      `Tiki Fuego`,
      `Fénix Dorado`,
      `Ruleta en vivo`,
    ]),
    top: [
      [`Toro Dorado`, 184],
      [`Oro Pirata`, 131],
      [`Ruleta en vivo`, 96],
      [`Lobo Lunar`, 72],
      [`Tres Brujas`, 41],
    ].map(([e, t]) => [pe(e), t]),
    misApuestas: me([
      `Tres Brujas`,
      `El Vikingo`,
      `Minas de la Momia`,
      `Tiki Fuego`,
      `Toro Dorado`,
      `Reina del Nilo`,
      `Dragón Rojo`,
      `Frutas 777`,
      `Oro Pirata`,
      `Lobo Lunar`,
      `Ruleta en vivo`,
      `Blackjack VIP`,
    ]),
    favs: me([`Toro Dorado`, `Lobo Lunar`]),
    recientes: me([`Oro Pirata`, `Tres Brujas`, `Ruleta en vivo`]),
    busquedas: [`book`, `ruleta`, `Greentube`],
    promo: pe(`Toro Dorado`),
    prov(e) {
      return Se.get(e)?.proveedor ?? ``;
    },
    img(e) {
      return Ce.get(e) ?? ``;
    },
  });
  typeof window < `u` &&
    (window.__demoBlaze = {
      host: xe,
      portadas: Object.fromEntries(Ce),
    });
  we = Object.freeze({
    "hero-main": `/rushybet/zeus-v2.webp`,
    "hero-side": `/rushybet/v2/pop-fichas.webp`,
    "hero-race": `/rushybet/v2/hero-dragon.webp`,
    "hero-tourney": `/rushybet/v2/pop-slots.webp`,
    "quick-wheel": `/rushybet/v2/arte-vivo.webp`,
    "quick-vip": `/rushybet/hero-art.webp`,
    "quick-bonus": `/rushybet/v2/recarga-fichas.webp`,
    "auth-art": `/rushybet/v2/arte-slots.webp`,
    "vip-hero": `/rushybet/hero-art.webp`,
    "promo-1": `/rushybet/zeus-v2.webp`,
    "promo-2": `/rushybet/v2/pop-fichas.webp`,
    "promo-3": `/rushybet/v2/hero-dragon.webp`,
    "promo-4": `/rushybet/v2/pop-slots.webp`,
    "promo-5": `/rushybet/v2/recarga-fichas.webp`,
    "promo-6": `/rushybet/v2/arte-vivo.webp`,
  });
  Ee = typeof location < `u` ? location.hostname : ``;
  De = Object.freeze({
    img(e) {
      return Te(e, Ee);
    },
  });
  Oe = 1440;
}
export { A, De, Oe, initializeGameCatalog };
