const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs/promises');
const {chromium} = require(process.env.WORKSPACE_NODE_MODULES ? path.join(process.env.WORKSPACE_NODE_MODULES, 'playwright') : 'playwright');

const origin = process.env.DEMO_ORIGIN || 'http://127.0.0.1:8787';
const slugs = ['aureum', 'kitsune', 'orbit'];
const shots = path.resolve(process.env.SCREENSHOT_DIR || 'work/signature');
const launch = {headless: true};
if (process.env.BROWSER_EXECUTABLE) launch.executablePath = process.env.BROWSER_EXECUTABLE;
else if (process.env.PLAYWRIGHT_CHANNEL) launch.channel = process.env.PLAYWRIGHT_CHANNEL;

async function noOverflow(page, label) {
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), label + ': horizontal overflow');
}
async function skipTour(page) {
  const button = page.locator('.socio-tour-saltar');
  try { await button.waitFor({state: 'visible', timeout: 1500}); await button.click(); } catch {}
}

(async () => {
  await fs.mkdir(shots, {recursive: true});
  const browser = await chromium.launch(launch);
  try {
    for (const slug of slugs) {
      const page = await browser.newPage({viewport: {width: 1440, height: 1050}, reducedMotion: 'reduce'});
      const errors = [], external = [], failures = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('request', request => { if (/^https?:/.test(request.url()) && new URL(request.url()).origin !== origin) external.push(request.url()); });
      page.on('response', response => { if (response.status() >= 400) failures.push(response.status() + ' ' + response.url()); });
      await page.goto(`${origin}/muestra/${slug}.html`);
      await page.waitForFunction(() => window.__demo?.listo && document.querySelectorAll('.sg-game').length === 24);
      await page.locator('#sg-hero-art').evaluate(image => image.decode());
      await page.locator('#sg-games img').evaluateAll(async images => {
        images.forEach(image => { image.loading = 'eager'; });
        await Promise.all(images.map(image => image.decode()));
      });
      await noOverflow(page, slug + ' desktop');
      await page.screenshot({path: path.join(shots, `${slug}-desktop.png`), fullPage: true});

      await page.locator('[data-favorite=tiger]').click();
      await page.locator('.sg-categories [data-filter=favoritos]').click();
      assert.equal(await page.locator('.sg-game').count(), 1);
      assert.equal(await page.locator('.sg-game h3').textContent(), 'Fortune Tiger');
      await page.locator('.sg-favorite').click();
      assert.equal(await page.locator('#sg-empty').isVisible(), true);
      await page.locator('[data-reset-filters]').click();
      assert.equal(await page.locator('.sg-game').count(), 24);
      await page.locator('#sg-provider').selectOption('SPRIBE');
      assert.equal(await page.locator('.sg-game').count(), 3);
      await page.locator('#sg-search').fill('  AVIÁTOR  ');
      assert.equal(await page.locator('.sg-game').count(), 1);
      await page.locator('.sg-categories [data-filter=slots]').click();
      assert.equal(await page.locator('#sg-empty').isVisible(), true);
      await page.locator('[data-reset-filters]').click();
      await page.locator('.sg-categories [data-filter=vivo]').click();
      assert.equal(await page.locator('.sg-game').count(), 3);
      const opener = page.locator('.sg-game-open').first();
      const openedGame = await opener.getAttribute('data-game');
      await opener.focus();
      await page.keyboard.press('Enter');
      await page.locator('#sg-dialog[open] iframe').waitFor();
      assert.equal(new URL(await page.locator('#sg-dialog iframe').getAttribute('src')).origin, origin);
      await page.keyboard.press('Escape');
      await page.locator('#sg-dialog[open]').waitFor({state: 'hidden'});
      await page.locator('#sg-dialog iframe').waitFor({state: 'detached'});
      assert.equal(await page.locator('#sg-dialog iframe').count(), 0);
      assert.equal(await page.evaluate(() => document.activeElement?.dataset.game), openedGame, 'Closing the demo restores keyboard focus to the game');

      // A malformed launch response must not embed a foreign page.
      await page.route('**/api/muestra/juego-demo', route => route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify({url: 'https://example.com/game'})}), {times: 1});
      await page.locator('.sg-game-open').first().click();
      await page.locator('#sg-dialog[open]').waitFor();
      assert.equal(await page.locator('#sg-dialog-title').textContent(), 'No pudimos abrir la demo');
      assert.equal(await page.locator('#sg-dialog iframe').count(), 0);
      await page.keyboard.press('Escape');
      await page.locator('#sg-dialog[open]').waitFor({state: 'hidden'});

      const brand = 'Mi casino con un nombre extraordinariamente largo';
      await page.evaluate(name => {
        window.__demo.disc({nombre: name});
        window.__demo.vars({'--dm-p': '#cb8ee8'});
      }, brand);
      assert.equal(await page.locator('#sg-name').textContent(), brand);
      assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--dm-p').trim()), '#cb8ee8');
      await page.evaluate(async () => {
        const blob = await (await fetch('signature/assets/aureum-hero.webp')).blob();
        const logo = URL.createObjectURL(blob);
        window.__demo.imgs({'rushybet/rushybet-logo.webp': logo});
        window.__demo.disc({logoPropio: true});
      });
      await page.locator('#sg-logo').evaluate(image => image.decode());
      assert.equal(await page.locator('#sg-logo').isVisible(), true);
      assert.equal(await page.locator('.sg-wordmark').isVisible(), false);
      await page.evaluate(() => window.__demo.disc({logoPropio: false}));

      for (const width of [768, 393, 320]) {
        await page.setViewportSize({width, height: 852});
        await noOverflow(page, `${slug} at ${width}px with long brand`);
      }
      await page.setViewportSize({width: 393, height: 852});
      await page.locator('#sg-menu').click();
      assert.equal(await page.locator('#sg-menu').getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#sg-menu').getAttribute('aria-expanded'), 'false');
      assert.equal(await page.locator('#sg-menu').evaluate(node => node === document.activeElement), true);
      await page.locator('#sg-menu').click();
      await page.locator('#sg-sidebar [data-filter=crash]').click();
      assert.equal(await page.locator('.sg-game').count(), 3);
      assert.equal(await page.locator('#sg-menu').getAttribute('aria-expanded'), 'false');
      await page.locator('.sg-game-open').first().click();
      await page.locator('#sg-dialog[open] iframe').waitFor();
      assert.equal(new URL(await page.locator('#sg-dialog iframe').getAttribute('src')).searchParams.get('channel'), 'mobile');
      await page.keyboard.press('Escape');
      await page.locator('#sg-dialog[open]').waitFor({state: 'hidden'});
      await page.evaluate(name => window.__demo.disc({nombre: name}), slug === 'aureum' ? 'Aureum' : slug === 'kitsune' ? 'Kitsune' : 'Orbit');
      await page.locator('.sg-categories [data-filter=todos]').click();
      await page.evaluate(() => { document.documentElement.style.removeProperty('--dm-p'); window.scrollTo(0, 0); });
      await page.screenshot({path: path.join(shots, `${slug}-mobile.png`), fullPage: true});
      assert.deepEqual(errors, [], slug + ': browser errors');
      assert.deepEqual(external, [], slug + ': external requests');
      assert.deepEqual(failures, [], slug + ': failed assets');
      console.log(`PASS ${slug}: 24 decoded covers, filters, search, favorites, desktop/mobile demo, safe response, brand/logo, menu, 4 widths`);
      await page.close();
    }

    // Exercise real Maker registration, persisted selection and visual-editor scope.
    const page = await browser.newPage({viewport: {width: 1440, height: 1050}, reducedMotion: 'reduce'});
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(origin + '/muestra/socio.html#v=1&n=MiCasino&vista=lobby&disp=compu&pl=aureum');
    await skipTour(page);
    const picker = page.getByRole('combobox', {name: 'Plantilla del lobby'});
    await picker.waitFor();
    assert.equal(await picker.locator('option').count(), 20);
    for (const slug of slugs) {
      await picker.selectOption(slug);
      const frame = page.frameLocator('[data-activo="true"] iframe');
      await frame.locator('body[data-catalog=' + slug + '] .sg-game').first().waitFor();
      await frame.locator('[data-maker-ui]').first().waitFor({state: 'attached'});
      await page.locator('[data-element-pick]').click();
      await frame.locator('html[data-maker-select=true]').waitFor();
      await frame.locator('#sg-hero-description').click();
      const editor = page.locator('[data-element-text]');
      await editor.waitFor({state: 'visible'});
      await editor.fill('Contenido personalizado de ' + slug);
      assert.equal(await frame.locator('#sg-hero-description').textContent(), 'Contenido personalizado de ' + slug);
      if (slug === 'aureum') {
        await page.locator('[data-element-block-image]').click();
        await page.locator('[data-element-image-controls]').waitFor({state: 'visible'});
        await page.locator('[data-element-file]').setInputFiles('public/muestra/signature/assets/orbit-hero.webp');
        await frame.locator('#sg-hero-art[src^="data:image/"]').waitFor();
      } else {
        assert.ok((await frame.locator('#sg-hero-art').getAttribute('src')).includes(slug + '-hero.webp'));
      }
      await page.locator('[data-element-pick]').click();
      await page.waitForFunction(() => document.querySelector('.element-status').textContent.includes('guardados'));

      // Escape closes the inner dialog without exiting Maker's full-screen preview.
      await page.locator('#btn-entera').click();
      await page.waitForFunction(() => document.querySelector('#app').dataset.entera === 'true');
      await frame.locator('.sg-register').click();
      await frame.locator('#sg-dialog[open]').waitFor();
      await page.keyboard.press('Escape');
      await frame.locator('#sg-dialog[open]').waitFor({state: 'hidden'});
      assert.equal(await page.locator('#app').getAttribute('data-entera'), 'true', slug + ': closing a dialog preserves full-screen preview');
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => document.querySelector('#app').dataset.entera !== 'true');
    }
    await page.reload();
    await picker.waitFor(); await skipTour(page);
    assert.equal(await picker.inputValue(), 'orbit');
    for (const slug of slugs) {
      await picker.selectOption(slug);
      const frame = page.frameLocator('[data-activo="true"] iframe');
      await frame.locator('#sg-hero-description').filter({hasText: 'Contenido personalizado de ' + slug}).waitFor();
      if (slug === 'aureum') await frame.locator('#sg-hero-art[src^="data:image/"]').waitFor();
      else assert.ok((await frame.locator('#sg-hero-art').getAttribute('src')).includes(slug + '-hero.webp'));
    }
    await page.getByRole('radio', {name: 'Panel', exact: true}).click();
    await skipTour(page);
    assert.equal(await picker.isVisible(), false);
    await page.getByRole('radio', {name: 'Lobby', exact: true}).click();
    await skipTour(page);
    await picker.waitFor();
    await picker.selectOption('fenarys');
    await page.locator('iframe[src*="fenarys.html"]').waitFor();
    assert.deepEqual(errors, []);
    console.log('PASS Maker: 20 options, all three templates, visual text/image editing, persistence/isolation, full-screen dialog Escape, shared panel and existing Fenarys');
    await page.close();
  } finally { await browser.close(); }
})().catch(error => { console.error(error.stack); process.exitCode = 1; });
