// Curated demo catalog. Artwork is already stored in Maker; no provider calls.
const slot = (id, name, code, provider, vendor, featured = false, tag = '') => ({
  id, name, code, provider, vendor, category: 'slots', featured, tag,
  image: `/games-cartas/${vendor === 'PGSOFT' ? 'PGSOFT' : 'slot-playngo'}/${code}.webp`,
});

export const SIGNATURE_GAMES = Object.freeze([
  slot('book', 'Book of Dead', 'bookofdead', 'Play’n GO', 'PLAYNGO', true, 'CLÁSICO'),
  slot('tiger', 'Fortune Tiger', 'fortune-tiger', 'PG Soft', 'PGSOFT', true, 'FAVORITO'),
  slot('reactoonz', 'Reactoonz', 'reactoonz', 'Play’n GO', 'PLAYNGO', true),
  slot('olympus', 'Rise of Olympus', 'riseofolympus', 'Play’n GO', 'PLAYNGO', true),
  slot('joker', 'Fire Joker', 'firejoker', 'Play’n GO', 'PLAYNGO'),
  slot('legacy', 'Legacy of Dead', 'legacyofdead', 'Play’n GO', 'PLAYNGO'),
  slot('moon', 'Moon Princess', 'moonprincess', 'Play’n GO', 'PLAYNGO', true),
  slot('ace', 'Ace of Spades', 'aceofspades', 'Play’n GO', 'PLAYNGO'),
  slot('ninja', 'Ninja Fruits', 'ninjafruits', 'Play’n GO', 'PLAYNGO'),
  slot('baoshi', 'Bao Shi', 'baoshi', 'Play’n GO', 'PLAYNGO'),
  slot('forge', 'Forge of Gems', 'forgeofgems', 'Play’n GO', 'PLAYNGO'),
  slot('diamonds', 'Diamonds of the Realm', 'diamondsoftherealm', 'Play’n GO', 'PLAYNGO'),
  slot('honey', 'Honey Rush', 'honeyrush', 'Play’n GO', 'PLAYNGO'),
  slot('dragon', 'Fortune Dragon', 'fortune-dragon', 'PG Soft', 'PGSOFT', true),
  slot('ox', 'Fortune Ox', 'fortune-ox', 'PG Soft', 'PGSOFT'),
  slot('mahjong', 'Mahjong Ways', 'mahjong-ways', 'PG Soft', 'PGSOFT', true),
  slot('legend', 'Dragon Legend', 'dragon-legend', 'PG Soft', 'PGSOFT'),
  slot('aviator', 'Aviator', 'Aviator', 'Spribe', 'SPRIBE'),
  slot('plinko', 'Plinko', 'Plinko', 'Spribe', 'SPRIBE'),
  slot('mines', 'Mines', 'Mines', 'Spribe', 'SPRIBE'),
  slot('gods', 'Fortune Gods', 'fortune-gods', 'PG Soft', 'PGSOFT'),
  {id: 'roulette', name: 'Lightning Roulette', code: 'vivo360-2884-lightning-roulette', provider: 'Evolution', vendor: 'evolution', category: 'vivo', featured: true, tag: 'MESA DEMO', image: '/muestra/fenarys/assets/0232b168fe655bfe3a6c.webp'},
  {id: 'blackjack', name: 'Infinite Blackjack', code: 'vivo360-2880-infinite-blackjack', provider: 'Evolution', vendor: 'evolution', category: 'vivo', image: '/muestra/luckrex/assets/ff98761e76b986cf8492.png'},
  {id: 'baccarat', name: 'Baccarat', code: 'vivo360-1105-baccarat', provider: 'Ezugi', vendor: 'ezugi', category: 'vivo', image: '/muestra/fortunasjk/assets/cff6781cfc7f5efe396d.webp'},
].map(game => Object.freeze(game.vendor === 'SPRIBE' ? {
  ...game, category: 'crash', image: `/games-cartas/mini-spribe/${game.code}.webp`,
  featured: game.id === 'aviator', tag: game.id === 'aviator' ? 'CRASH' : '',
} : game)));

const THEME_ORDER = {
  aureum: ['book', 'roulette', 'ace', 'tiger', 'olympus', 'blackjack'],
  kitsune: ['tiger', 'dragon', 'mahjong', 'ninja', 'moon', 'baoshi'],
  orbit: ['aviator', 'reactoonz', 'moon', 'plinko', 'olympus', 'mines'],
};

export function gamesForTheme(slug) {
  const order = THEME_ORDER[slug] || THEME_ORDER.aureum;
  return [...order.map(id => SIGNATURE_GAMES.find(game => game.id === id)),
    ...SIGNATURE_GAMES.filter(game => !order.includes(game.id))];
}

const searchable = value => String(value).normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase().trim();

export function filterGames(games, {category = 'todos', provider = 'todos', query = '', favorites = new Set()} = {}) {
  const term = searchable(query);
  return games.filter(game => {
    const matchesCategory = category === 'todos' || category === game.category ||
      (category === 'top' && game.featured === true) ||
      (category === 'favoritos' && favorites.has(game.id));
    return matchesCategory && (provider === 'todos' || game.vendor === provider) &&
      searchable(`${game.name} ${game.provider}`).includes(term);
  });
}
