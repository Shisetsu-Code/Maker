const icons = {
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
  chevron: '<path d="m7 10 5 5 5-5"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1.3"/><rect x="14" y="4" width="6" height="6" rx="1.3"/><rect x="4" y="14" width="6" height="6" rx="1.3"/><rect x="14" y="14" width="6" height="6" rx="1.3"/>',
  cards: '<path d="m7 4-4 1.3 3.6 14.5 4.1-1"/><rect x="9" y="3" width="12" height="17" rx="2"/><path d="m15 8 3 3.5-3 3.5-3-3.5 3-3.5Z"/>',
  live: '<circle cx="12" cy="12" r="3"/><path d="M6.4 6.4a8 8 0 0 0 0 11.2M17.6 6.4a8 8 0 0 1 0 11.2M3.6 3.6a12 12 0 0 0 0 16.8M20.4 3.6a12 12 0 0 1 0 16.8"/>',
  crash: '<path d="m3 18 6-7 4 3 8-10M14 4h7v7"/><path d="M3 22h18"/>',
  heart: '<path d="M20.8 5.9a5.4 5.4 0 0 0-7.6 0L12 7.1l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.5a5.4 5.4 0 0 0 0-7.6Z"/>',
  star: '<path d="m12 3 2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.2l5.9-.9L12 3Z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  diamond: '<path d="m12 2 9 10-9 10L3 12 12 2Z"/><path d="M3 12h18M12 2l4 10-4 10-4-10 4-10Z"/>',
  orbit: '<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-35 12 12)"/><path d="m17 3 1.5-1M5.5 22 7 21"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/>',
  support: '<path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13H2v6h4v-6H4Zm16 0h2v6h-4v-6h2ZM20 19c0 2-3 3-6 3"/>',
  shield: '<path d="M12 3 3.5 6.5V12c0 5 8.5 10 8.5 10s8.5-5 8.5-10V6.5L12 3Z"/><path d="m8 12 3 3 5-6"/>',
  sparkle: '<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>',
  fox: '<path d="m3 3 7 5h4l7-5-2 12-7 7-7-7L3 3Z"/><path d="m3 3 7 11 2 8 2-8 7-11M7 12l3 2m7-2-3 2"/>',
};

function icon(name, className = '') {
  return `<svg class="sg-icon${className ? ` ${className}` : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icons[name] || icons.sparkle}</svg>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

const themes = {
  aureum: {
    name: 'Aureum', caption: 'The art of play', mark: 'diamond',
    eyebrow: 'UN MUNDO FUERA DE LO COMÚN', title: 'El arte de<br><em>elegir bien.</em>',
    description: 'Juegos extraordinarios. Una experiencia a tu medida. Encontrá tu próxima gran historia.',
    cta: 'Explorar colección', club: 'Conocer el club',
    alt: 'Escultura dorada de una pica, cartas y fichas sobre mármol verde en un salón art déco',
    section: 'UNA SELECCIÓN EXCEPCIONAL',
  },
  kitsune: {
    name: 'Kitsune', caption: 'Follow the unexpected', mark: 'fox',
    eyebrow: 'SEGUÍ TU INSTINTO', title: 'La noche<br>tiene <em>su juego.</em>',
    description: 'Cruzá el portal. Descubrí nuevas historias y encontrá esa que se siente tuya.',
    cta: 'Entrar al juego', club: 'Universo Kitsune',
    alt: 'Zorro blanco con marcas bermellón frente a un santuario japonés bajo la luz de la luna',
    section: 'ENCONTRÁ TU PRÓXIMA HISTORIA',
  },
  orbit: {
    name: 'Orbit', caption: 'Explore beyond', mark: 'orbit',
    eyebrow: 'EL PRÓXIMO DESTINO LO ELEGÍS VOS', title: 'Fuera de<br><em>lo habitual.</em>',
    description: 'Un universo de juegos por explorar. Elegí tu destino y empezá una nueva misión.',
    cta: 'Iniciar exploración', club: 'Descubrir Orbit',
    alt: 'Estación espacial esférica con anillos de metal y luces menta en el espacio azul profundo',
    section: 'TU CENTRO DE EXPLORACIÓN',
  },
};

const categories = [
  ['todos', 'grid', 'Todos los juegos'],
  ['slots', 'cards', 'Slots'],
  ['vivo', 'live', 'Casino en vivo'],
  ['crash', 'crash', 'Crash'],
  ['favoritos', 'heart', 'Favoritos'],
];

function brand(theme, name) {
  return `<a class="sg-brand" href="#top" aria-label="${escapeHTML(name)} · Inicio">
    <span class="sg-mark">${icon(theme.mark)}</span>
    <span class="sg-wordmark"><strong id="sg-name">${escapeHTML(name)}</strong><small class="sg-brand-caption">${theme.caption}</small></span>
    <img id="sg-logo" alt="Logo de tu casino" hidden>
  </a>`;
}

function header(slug, theme, name) {
  return `${slug === 'aureum' ? '<div class="sg-masthead"><span>EL PLACER ESTÁ EN ELEGIR.</span><span>18+ <i></i> MODO DEMO</span></div>' : ''}
  <header class="sg-header">
    <div class="sg-header-inner">
      <button id="sg-menu" class="sg-menu sg-icon-button" aria-label="Abrir menú" aria-controls="sg-sidebar" aria-expanded="false">${icon('menu')}</button>
      ${brand(theme, name)}
      <nav class="sg-header-nav" aria-label="Navegación principal">
        <button data-filter="todos" aria-pressed="true" class="active">${slug === 'orbit' ? 'Explorar' : 'Casino'}</button>
        <button data-filter="vivo" aria-pressed="false">En vivo</button>
        <button data-filter="top" aria-pressed="false">${slug === 'aureum' ? 'La selección' : 'Destacados'}</button>
        <button data-info="Club ${escapeHTML(theme.name)}">${slug === 'orbit' ? 'La misión' : 'El club'}</button>
      </nav>
      <div class="sg-access">
        ${slug === 'orbit' ? '<span class="sg-demo-badge"><i></i> MODO DEMO</span>' : ''}
        <button class="sg-signin" data-info="Ingresar">Ingresar</button>
        <button class="sg-button sg-register" data-info="Crear cuenta">Crear cuenta${icon('diagonal')}</button>
      </div>
    </div>
  </header>`;
}

function sidebar(slug) {
  return `<button class="sg-menu-backdrop" id="sg-menu-backdrop" aria-label="Cerrar menú" data-menu-close hidden></button>
  <aside id="sg-sidebar" class="sg-sidebar" aria-label="Menú de exploración">
    <div class="sg-sidebar-head"><span>${slug === 'orbit' ? 'CONTROL DE MISIÓN' : 'EXPLORAR'}</span><button class="sg-icon-button" aria-label="Cerrar menú" data-menu-close>${icon('close')}</button></div>
    <div class="sg-sidebar-links">
      ${categories.slice(0, 4).map(([key, symbol, label]) => `<button data-filter="${key}" aria-pressed="${key === 'todos'}"${key === 'todos' ? ' class="active"' : ''}>${icon(symbol)}<span>${label}</span></button>`).join('\n')}
    </div>
    <p class="sg-sidebar-label">TU ESPACIO</p>
    <div class="sg-sidebar-links">
      <button data-filter="top" aria-pressed="false">${icon('star')}<span>Destacados</span></button>
      <button data-filter="favoritos" aria-pressed="false">${icon('heart')}<span>Mis favoritos</span></button>
      <button data-info="Club">${icon('diamond')}<span>${slug === 'orbit' ? 'Orbit Club' : 'El club'}</span></button>
    </div>
    <div class="sg-sidebar-bottom">
      ${slug === 'orbit' ? `<div class="sg-rail-orbit" aria-hidden="true">${icon('orbit')}<span>KEEP EXPLORING</span></div>` : ''}
      <button data-info="Ayuda">${icon('support')}<span>¿Te ayudamos?</span>${icon('diagonal')}</button>
      <p>18+ <span>·</span> Modo demo</p>
    </div>
  </aside>`;
}

function hero(slug, theme) {
  const heroBlock = `<section class="sg-hero" id="sg-hero" aria-labelledby="sg-hero-title">
    <img id="sg-hero-art" src="signature/assets/${slug}-hero.webp" alt="${theme.alt}" fetchpriority="high" decoding="async" width="${slug === 'aureum' ? '1672' : '1536'}" height="${slug === 'aureum' ? '941' : '1024'}">
    ${slug === 'orbit' ? '<div class="sg-orbit-coordinate" aria-hidden="true"><span>O / 01</span><i></i><span>EXPLORER SERIES</span></div>' : ''}
    <div class="sg-hero-copy">
      <p class="sg-eyebrow">${slug === 'aureum' ? '<span aria-hidden="true">◇</span>' : slug === 'orbit' ? '<span class="sg-crosshair" aria-hidden="true">+</span>' : '<span class="sg-kitsune-dot" aria-hidden="true"></span>'}${theme.eyebrow}</p>
      <h1 id="sg-hero-title">${theme.title}</h1>
      <p id="sg-hero-description">${theme.description}</p>
      <div class="sg-hero-actions"><button class="sg-button" data-filter="todos">${theme.cta}${icon('arrow')}</button><button class="sg-text-button" data-info="Club ${escapeHTML(theme.name)}">${theme.club}${icon('diagonal')}</button></div>
    </div>
    ${slug === 'aureum' ? '<div class="sg-hero-foot"><span>EXPERIENCIAS QUE MERECEN TU TIEMPO</span><span>DESCUBRÍ LO EXTRAORDINARIO <i></i></span></div>' : slug === 'kitsune' ? '<div class="sg-kitsune-hero-tag"><span>AFTER DARK</span><i></i><span>A WORLD OF POSSIBILITIES</span></div>' : '<div class="sg-orbit-hero-foot"><span><b>01</b> ELEGÍ TU DESTINO</span><i></i><span><b>02</b> INICIÁ LA MISIÓN</span></div>'}
  </section>`;
  if (slug === 'kitsune') return `<div class="sg-kitsune-composition">${heroBlock}
    <section class="sg-kitsune-story" aria-labelledby="sg-story-title">
      <div class="sg-story-top"><span>THE KITSUNE EDIT</span>${icon('sparkle')}</div>
      <h2 id="sg-story-title">Un poco<br>de <em>instinto.</em><br>Todo por<br>descubrir.</h2>
      <div class="sg-fox-seal" aria-hidden="true">${icon('fox')}<span>K / 01</span></div>
      <div class="sg-story-bottom"><p>Dejá que la curiosidad<br>elija el siguiente paso.</p><button data-filter="top">Nuestra selección${icon('diagonal')}</button></div>
    </section>
  </div>`;
  return heroBlock;
}

function experiences(slug) {
  if (slug === 'aureum') return `<section class="sg-experiences sg-aureum-experiences" aria-labelledby="sg-experience-title">
    <div class="sg-editorial-heading"><div><p class="sg-section-caption">TRES FORMAS DE DESCUBRIR</p><h2 id="sg-experience-title">Encontrá tu mundo.</h2></div><button class="sg-text-button" data-filter="top">Ver la selección${icon('diagonal')}</button></div>
    <div class="sg-aureum-features">
      <button class="sg-feature" data-filter="slots"><span class="sg-feature-number">01 /</span><span class="sg-suit" aria-hidden="true">♦</span><span class="sg-feature-copy"><strong>El encanto de los slots</strong><span>Historias que empiezan con un giro.</span></span><span class="sg-feature-arrow">${icon('diagonal')}</span></button>
      <button class="sg-feature" data-filter="vivo"><span class="sg-feature-number">02 /</span><span class="sg-suit" aria-hidden="true">♠</span><span class="sg-feature-copy"><strong>El arte de la mesa</strong><span>Entrá al universo del casino en vivo.</span></span><span class="sg-feature-arrow">${icon('diagonal')}</span></button>
      <button class="sg-feature" data-filter="crash"><span class="sg-feature-number">03 /</span><span class="sg-suit" aria-hidden="true">♣</span><span class="sg-feature-copy"><strong>El pulso del instante</strong><span>Una experiencia a otro ritmo.</span></span><span class="sg-feature-arrow">${icon('diagonal')}</span></button>
    </div>
  </section>`;
  if (slug === 'kitsune') return `<section class="sg-kitsune-paths" aria-label="Elegí tu camino">
    <button class="sg-path sg-path-slots" data-filter="slots"><span class="sg-path-symbol">${icon('cards')}</span><span class="sg-path-copy"><small>UN GIRO. OTRA HISTORIA.</small><strong>El camino de los slots</strong></span>${icon('diagonal')}</button>
    <button class="sg-path sg-path-live" data-filter="vivo"><span class="sg-path-symbol">${icon('live')}</span><span class="sg-path-copy"><small>ENTRÁ EN EL MOMENTO</small><strong>La noche está en vivo</strong></span>${icon('diagonal')}</button>
    <button class="sg-path sg-path-crash" data-filter="crash"><span class="sg-path-symbol">${icon('crash')}</span><span class="sg-path-copy"><small>CAMBIÁ EL RITMO</small><strong>Crash</strong></span>${icon('diagonal')}</button>
  </section>`;
  return `<section class="sg-orbit-destinations" aria-label="Destinos de exploración">
    <button data-filter="slots"><span class="sg-destination-icon">${icon('cards')}</span><span><small>DESTINO / 01</small><strong>Universo slots</strong></span>${icon('diagonal')}</button>
    <button data-filter="vivo"><span class="sg-destination-icon">${icon('live')}</span><span><small>DESTINO / 02</small><strong>Casino en vivo</strong></span>${icon('diagonal')}</button>
    <button data-filter="crash"><span class="sg-destination-icon">${icon('crash')}</span><span><small>DESTINO / 03</small><strong>Zona crash</strong></span>${icon('diagonal')}</button>
  </section>`;
}

function discovery(theme) {
  return `<section class="sg-discover" id="sg-discover" aria-labelledby="sg-title">
    <div class="sg-discovery-head">
      <div><p class="sg-section-caption">${theme.section}</p><div class="sg-title-row"><h2 id="sg-title">Todos los juegos</h2><span id="sg-count" aria-live="polite"></span></div></div>
      <label class="sg-search-control">${icon('search')}<input id="sg-search" type="search" placeholder="Buscar tu próximo juego" aria-label="Buscar juegos o proveedores" autocomplete="off"><button id="sg-clear-search" class="sg-icon-button" aria-label="Borrar búsqueda" hidden>${icon('close')}</button></label>
    </div>
    <div class="sg-discovery-nav">
      <nav class="sg-categories" aria-label="Categorías del catálogo">${categories.map(([key, symbol, label]) => `<button data-filter="${key}" aria-pressed="${key === 'todos'}"${key === 'todos' ? ' class="active"' : ''}>${icon(symbol)}<span>${key === 'todos' ? 'Todos' : label}</span></button>`).join('')}</nav>
      <label class="sg-provider-control"><span class="sg-sr-only">Proveedor</span><select id="sg-provider" aria-label="Filtrar por proveedor"><option value="todos">Todos los proveedores</option></select>${icon('chevron')}</label>
    </div>
    <div id="sg-games" class="sg-grid"></div>
    <p id="sg-empty" class="sg-empty" hidden>${icon('search')}<span>No encontramos juegos en esta selección.</span><button class="sg-button sg-button-outline" data-reset-filters>Restablecer filtros${icon('arrow')}</button></p>
    <p id="sg-status" role="status" aria-live="polite"></p>
  </section>`;
}

function footer(slug) {
  return `<section class="sg-closing" aria-label="Tu espacio de juego"><div>${icon(slug === 'aureum' ? 'diamond' : slug === 'kitsune' ? 'fox' : 'orbit')}<div><p>${slug === 'aureum' ? 'Lo extraordinario empieza con vos.' : slug === 'kitsune' ? 'Tu instinto. Tu selección.' : 'El universo sigue ahí afuera.'}</p><span>${slug === 'aureum' ? 'Guardá tus favoritos y volvé a lo que te gusta.' : slug === 'kitsune' ? 'Reuní tus favoritos en un solo lugar.' : 'Tus próximos destinos, en un solo lugar.'}</span></div></div><button class="sg-text-button" data-filter="favoritos">Mis favoritos${icon('arrow')}</button></section>
  <footer class="sg-footer"><p>${icon(slug === 'aureum' ? 'diamond' : slug === 'kitsune' ? 'fox' : 'orbit')}<span>${slug === 'aureum' ? 'THE ART OF PLAY' : slug === 'kitsune' ? 'FOLLOW THE UNEXPECTED' : 'EXPLORE BEYOND'}</span></p><div><span class="sg-age">18+</span><span>Modo demo</span><i></i><span>Sin apuestas reales</span><button data-info="Juego responsable">Juego responsable${icon('diagonal')}</button></div></footer>`;
}

function mobileNavigation() {
  return `<nav class="sg-mobile" aria-label="Navegación móvil">
    <button data-filter="todos" aria-pressed="true" class="active">${icon('compass')}<span>Explorar</span></button>
    <button data-filter="slots" aria-pressed="false">${icon('cards')}<span>Slots</span></button>
    <button data-filter="vivo" aria-pressed="false">${icon('live')}<span>En vivo</span></button>
    <button data-filter="favoritos" aria-pressed="false">${icon('heart')}<span>Favoritos</span></button>
    <button data-info="Ingresar">${icon('user')}<span>Mi cuenta</span></button>
  </nav>`;
}

export function signatureLobbiesPage(slug, name) {
  if (!Object.hasOwn(themes, slug)) throw new RangeError(`Unknown signature lobby: ${slug}`);
  const theme = themes[slug];
  const displayName = name || theme.name;
  return `<!doctype html>
<html lang="es" data-catalog="${slug}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="${slug === 'aureum' ? '#101815' : slug === 'kitsune' ? '#120f18' : '#0a101e'}">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; font-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'">
  <title>${escapeHTML(displayName)} · Casino demo</title>
  <link rel="stylesheet" href="signature-lobbies.css">
</head>
<body data-catalog="${slug}">
  <a class="sg-skip" href="#sg-discover">Ir a los juegos</a>
  ${header(slug, theme, displayName)}
  ${sidebar(slug)}
  <main class="sg-main" id="top">
    ${slug === 'orbit' ? '<div class="sg-orbit-page-heading"><div><span>BASE /</span><h2>Descubrir</h2></div><p><i></i> EXPLORACIÓN SIN LÍMITES</p></div>' : ''}
    ${hero(slug, theme)}
    ${experiences(slug)}
    ${discovery(theme)}
    ${footer(slug)}
  </main>
  ${mobileNavigation()}
  <dialog id="sg-dialog" aria-modal="true" aria-labelledby="sg-dialog-title"><button class="sg-dialog-close sg-icon-button" data-close aria-label="Cerrar">${icon('close')}</button><p class="sg-section-caption">TU ESPACIO</p><h2 id="sg-dialog-title"></h2><div id="sg-dialog-body"></div><button class="sg-button" data-close>Volver${icon('arrow')}</button></dialog>
  <script type="module" src="signature-lobbies.js"></script>
  <script type="module" src="design-editor.js"></script>
</body>
</html>\n`.replace(/^[ \t]+$/gm, '');
}
