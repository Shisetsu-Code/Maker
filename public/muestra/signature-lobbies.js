import {gamesForTheme, filterGames} from './signature-catalog.mjs';

const $ = selector => document.querySelector(selector);
const names = {aureum: 'Aureum', kitsune: 'Kitsune', orbit: 'Orbit'};
const slug = Object.hasOwn(names, document.body.dataset.catalog) ? document.body.dataset.catalog : 'aureum';
const games = gamesForTheme(slug);
const state = {
  category: 'todos', provider: 'todos', query: '', favorites: new Set(),
  vars: {}, disc: {nombre: names[slug]}, imgs: {},
};
const categories = {
  todos: 'Descubrí tu próximo favorito', top: 'La selección de la casa',
  slots: 'Un mundo de slots', vivo: 'Tu lugar en la mesa',
  crash: 'A otro ritmo', favoritos: 'Tus favoritos',
};
const dialog = $('#sg-dialog');
const sidebar = $('#sg-sidebar');
const menu = $('#sg-menu');
const svgNS = 'http://www.w3.org/2000/svg';
let dialogOpener = null;

function heart() {
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.7');
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z');
  svg.append(path);
  return svg;
}

function cardFor(game) {
  const card = document.createElement('article');
  card.className = 'sg-game';
  card.id = `sg-card-${game.id}`;
  const open = document.createElement('button');
  open.type = 'button';
  open.className = 'sg-game-open';
  open.dataset.game = game.id;
  open.setAttribute('aria-label', `Ver demo de ${game.name}`);
  const imageBox = document.createElement('div');
  imageBox.className = 'sg-game-image' + (game.category === 'vivo' ? ' sg-game-image-wide' : '');
  const image = document.createElement('img');
  image.src = game.image;
  image.alt = game.name;
  image.loading = 'lazy';
  image.decoding = 'async';
  imageBox.append(image);
  if (game.tag) {
    const tag = document.createElement('span');
    tag.className = 'sg-game-tag';
    tag.textContent = game.tag;
    imageBox.append(tag);
  }
  const copy = document.createElement('div');
  copy.className = 'sg-game-copy';
  const title = document.createElement('h3');
  title.textContent = game.name;
  const provider = document.createElement('p');
  provider.textContent = game.provider;
  copy.append(title, provider);
  open.append(imageBox, copy);
  const favorite = document.createElement('button');
  favorite.type = 'button';
  favorite.className = 'sg-favorite';
  favorite.dataset.favorite = game.id;
  const saved = state.favorites.has(game.id);
  favorite.setAttribute('aria-label', `${saved ? 'Quitar' : 'Guardar'} ${game.name} en favoritos`);
  favorite.setAttribute('aria-pressed', String(saved));
  favorite.append(heart());
  card.append(open, favorite);
  return card;
}

function render(focusFavorite) {
  const list = filterGames(games, state);
  $('#sg-title').textContent = categories[state.category];
  $('#sg-count').textContent = `${list.length} ${list.length === 1 ? 'juego' : 'juegos'}`;
  $('#sg-empty').hidden = list.length > 0;
  const reset = $('[data-reset-filters]');
  if (reset) reset.hidden = list.length > 0;
  $('#sg-clear-search').hidden = !state.query;
  $('#sg-games').replaceChildren(...list.map(cardFor));
  document.querySelectorAll('[data-filter]').forEach(button => {
    const active = button.dataset.filter === state.category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (focusFavorite) {
    const next = $(`[data-favorite="${focusFavorite}"]`) || $('.sg-favorite') || $('.sg-categories [data-filter="favoritos"]');
    next?.focus({preventScroll: true});
  }
}

function closeMenu(restoreFocus = false) {
  const wasOpen = sidebar.classList.contains('is-open');
  sidebar.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('sg-menu-open');
  const backdrop = $('#sg-menu-backdrop');
  if (backdrop) backdrop.hidden = true;
  if (wasOpen && restoreFocus) menu.focus();
}

function toggleMenu() {
  if (sidebar.classList.contains('is-open')) return closeMenu(true);
  sidebar.classList.add('is-open');
  menu.setAttribute('aria-expanded', 'true');
  document.body.classList.add('sg-menu-open');
  const backdrop = $('#sg-menu-backdrop');
  if (backdrop) backdrop.hidden = false;
  sidebar.querySelector('button, a')?.focus();
}

function scrollToGames() {
  $('#sg-discover').scrollIntoView({
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  });
}

function openDialog(opener) {
  dialogOpener = opener;
  if (!dialog.open) dialog.showModal();
}

function notice(title, text, opener = document.activeElement) {
  $('#sg-dialog-title').textContent = title;
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  $('#sg-dialog-body').replaceChildren(paragraph);
  openDialog(opener);
}

async function launchGame(button) {
  const game = games.find(item => item.id === button.dataset.game);
  if (!game || button.disabled) return;
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  const abort = new AbortController();
  const timeout = setTimeout(() => abort.abort(), 10000);
  try {
    const response = await fetch('/api/muestra/juego-demo', {
      method: 'POST', headers: {'content-type': 'application/json'}, signal: abort.signal,
      body: JSON.stringify({demo: true, vendorCode: game.vendor, gameCode: game.code, channel: innerWidth < 700 ? 'mobile' : 'desktop'}),
    });
    const data = await response.json();
    if (!response.ok || typeof data.url !== 'string') throw Error('Demo unavailable');
    const target = new URL(data.url, location.href);
    if (target.origin !== location.origin || target.pathname !== '/muestra/juego-demo.html') throw Error('Invalid demo URL');
    const frame = document.createElement('iframe');
    frame.src = target.href;
    frame.title = `Demostración de ${game.name}`;
    $('#sg-dialog-title').textContent = game.name;
    $('#sg-dialog-body').replaceChildren(frame);
    openDialog(button);
  } catch {
    notice('No pudimos abrir la demo', 'Probá nuevamente en un momento.', button);
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
    button.removeAttribute('aria-busy');
  }
}

function brand() {
  const name = typeof state.disc.nombre === 'string' && state.disc.nombre.trim() ? state.disc.nombre : names[slug];
  $('#sg-name').textContent = name;
  $('.sg-brand').setAttribute('aria-label', `${name} · Inicio`);
  const logo = state.imgs['rushybet/rushybet-logo.webp'];
  const custom = !!state.disc.logoPropio && typeof logo === 'string' && /^(data:image\/|blob:|\/(?!\/))/.test(logo);
  $('#sg-logo').hidden = !custom;
  $('.sg-wordmark').hidden = custom;
  $('.sg-mark').hidden = custom;
  if (custom) $('#sg-logo').src = logo;
  else $('#sg-logo').removeAttribute('src');
}

const isRecord = value => value && typeof value === 'object' && !Array.isArray(value);
window.__demo = {
  vista: 'lobby', listo: false, dibujos: 1,
  vars(values) {
    if (!isRecord(values)) return;
    for (const [key, value] of Object.entries(values)) {
      if (!/^--dm-[a-z0-9-]+$/.test(key) || typeof value !== 'string' || /[;{}]/.test(value)) continue;
      document.documentElement.style.setProperty(key, value);
      state.vars[key] = value;
    }
  },
  disc(values) { if (isRecord(values)) { Object.assign(state.disc, values); brand(); } },
  imgs(values) { if (isRecord(values)) { Object.assign(state.imgs, values); brand(); } },
  estado() { return {vars: {...state.vars}, disc: {...state.disc}, imgs: {...state.imgs}}; },
};

window.addEventListener('message', event => {
  if (event.source !== parent || event.origin !== location.origin || !isRecord(event.data)) return;
  const {tipo} = event.data;
  if (['vars', 'disc', 'imgs'].includes(tipo)) window.__demo[tipo](event.data[tipo]);
});

$('#sg-search').addEventListener('input', event => {
  state.query = event.target.value;
  render();
});
$('#sg-clear-search').addEventListener('click', () => {
  state.query = '';
  $('#sg-search').value = '';
  render();
  $('#sg-search').focus();
});
$('#sg-provider').addEventListener('change', event => {
  state.provider = event.target.value;
  render();
});
menu.addEventListener('click', toggleMenu);
dialog.addEventListener('close', () => {
  $('#sg-dialog-body').replaceChildren();
  const opener = dialogOpener;
  dialogOpener = null;
  if (opener instanceof HTMLElement && opener.isConnected && !opener.disabled && opener.getClientRects().length) {
    opener.focus({preventScroll: true});
  } else {
    $('#sg-search').focus({preventScroll: true});
  }
});

document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-close')) return dialog.close();
  if (button.hasAttribute('data-menu-close') || button.id === 'sg-menu-backdrop') return closeMenu(true);
  if (button.dataset.filter && Object.hasOwn(categories, button.dataset.filter)) {
    state.category = button.dataset.filter;
    render();
    closeMenu(true);
    scrollToGames();
    return;
  }
  if (button.hasAttribute('data-reset-filters')) {
    state.category = 'todos'; state.provider = 'todos'; state.query = '';
    $('#sg-search').value = '';
    $('#sg-provider').value = 'todos';
    render();
    $('#sg-search').focus();
    return;
  }
  if (button.dataset.favorite) {
    const id = button.dataset.favorite;
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    render(id);
    return;
  }
  if (button.dataset.game) return launchGame(button);
  if (button.dataset.info) {
    closeMenu(true);
    notice(button.dataset.info, 'Estás explorando una plantilla de demostración. Podés descubrir el catálogo y guardar tus favoritos; las cuentas y los pagos no están habilitados.');
  }
});

document.addEventListener('keydown', event => {
  if (!sidebar.classList.contains('is-open')) return;
  if (event.key === 'Escape') { event.preventDefault(); closeMenu(true); return; }
  if (event.key !== 'Tab') return;
  const controls = [...sidebar.querySelectorAll('button, a[href], input, select')].filter(node => !node.hidden && node.getClientRects().length);
  if (!controls.length) return;
  const first = controls[0], last = controls.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
window.addEventListener('resize', () => closeMenu());

for (const [vendor, provider] of new Map(games.map(game => [game.vendor, game.provider]))) {
  const option = document.createElement('option');
  option.value = vendor;
  option.textContent = provider;
  $('#sg-provider').append(option);
}
render();
brand();
window.__demo.listo = true;
if (parent !== window) parent.postMessage({tipo: 'listo', vista: 'lobby'}, location.origin);
