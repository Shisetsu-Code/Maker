import test from 'node:test';
import assert from 'node:assert/strict';
import {access} from 'node:fs/promises';

const load = () => import('../public/muestra/signature-catalog.mjs');

test('signature catalog has unique games, local artwork and all working categories', async () => {
  const {SIGNATURE_GAMES: games} = await load();
  assert.equal(games.length, 24);
  assert.equal(new Set(games.map(game => game.id)).size, games.length);
  assert.deepEqual([...new Set(games.map(game => game.category))].sort(), ['crash', 'slots', 'vivo']);
  for (const game of games) {
    assert.ok(game.name && game.vendor && game.code && game.provider);
    assert.match(game.image, /^\/(?:games-cartas|muestra)\//);
    await access(new URL('../public' + game.image, import.meta.url));
  }
});

test('search combines with category, provider and favorites without mutating the catalog', async () => {
  const {SIGNATURE_GAMES: games, filterGames} = await load();
  const before = games.map(game => game.id);
  const favorites = new Set(['tiger', 'aviator']);
  assert.deepEqual(filterGames(games, {category: 'favoritos', favorites, query: '  FÓRTUNE  ', provider: 'PGSOFT'}).map(game => game.id), ['tiger']);
  assert.deepEqual(filterGames(games, {category: 'slots', provider: 'SPRIBE'}), []);
  assert.deepEqual(filterGames(games, {category: 'vivo', query: 'no existe'}), []);
  assert.equal(filterGames(games, {category: 'favoritos', favorites: new Set()}).length, 0);
  assert.equal(filterGames(games, {category: 'todos', query: 'spribe'}).length, 3);
  assert.deepEqual(games.map(game => game.id), before);
});

test('theme selections reorder the same playable catalog and featured filter is explicit', async () => {
  const {SIGNATURE_GAMES: games, gamesForTheme, filterGames} = await load();
  const ids = games.map(game => game.id).sort();
  for (const slug of ['aureum', 'kitsune', 'orbit']) {
    const themed = gamesForTheme(slug);
    assert.deepEqual(themed.map(game => game.id).sort(), ids);
    assert.equal(new Set(themed.map(game => game.id)).size, games.length);
    assert.ok(filterGames(themed, {category: 'top'}).every(game => game.featured === true));
  }
  assert.equal(gamesForTheme('kitsune')[0].id, 'tiger');
  assert.equal(gamesForTheme('orbit')[0].id, 'aviator');
  assert.equal(gamesForTheme('aureum')[0].id, 'book');
  assert.deepEqual(gamesForTheme('unknown'), gamesForTheme('aureum'));
});
