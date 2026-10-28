import assert from "node:assert/strict";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, firefox } from "playwright";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import { startStaticServer } from "../../scripts/serve-static.mjs";
import { templates, viewports, designHash } from "./fixtures.mjs";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const baseline = process.argv.includes("--baseline");
const compare = process.argv.includes("--compare");
const previewsOnly = process.argv.includes("--previews-only");
const selectedTemplates = process.env.TEMPLATES?.split(",");
const selectedChecks = process.env.BROWSER_CHECKS?.split(",");
const browserNames = (
  process.env.BROWSERS ||
  process.env.BROWSER ||
  "chromium"
).split(",");
const evidenceRoot = resolve(
  repository,
  process.env.TEST_RESULTS_DIR || "work/rebuild/test-results",
);
const outputRoot = resolve(evidenceRoot, baseline ? "baseline" : "current");
const baselineRoot = resolve(
  repository,
  process.env.VISUAL_BASELINE_DIR || resolve(evidenceRoot, "baseline"),
);
const assetDir = resolve(
  repository,
  process.env.DEMO_ASSET_DIR ||
    (baseline ? "work/rebuild/baseline/public" : "dist/public"),
);
const maxDiffRatio = Number(process.env.VISUAL_MAX_DIFF_RATIO || "0.01");
const extrasKey = "rushybet:design-extras:v1";
const browsers = { chromium, firefox };
assert.ok(!(baseline && compare), "Choose --baseline or --compare, not both");
assert.ok(
  !compare || baselineRoot !== outputRoot,
  "Visual baseline and current output must be different directories",
);

for (const name of browserNames)
  assert.ok(
    browsers[name],
    `Unsupported browser: ${name}; use chromium or firefox`,
  );
assert.ok(
  Number.isFinite(maxDiffRatio) && maxDiffRatio >= 0 && maxDiffRatio <= 1,
  "VISUAL_MAX_DIFF_RATIO must be between 0 and 1",
);
if (selectedTemplates)
  for (const slug of selectedTemplates)
    assert.ok(
      templates.some(([id]) => id === slug),
      `Unknown template: ${slug}`,
    );
if (selectedChecks) {
  const names = new Set([
    ...templates.flatMap(([slug]) =>
      viewports.map(({ name }) => `${slug}-${name}`),
    ),
    ...viewports.map(({ name }) => `panel-${name}`),
    "picker-navigation-persistence",
    "brand-color-name-logo-persistence",
    "editor-controls-persistence",
    ...templates.slice(5).map(([slug]) => `catalog-${slug}`),
  ]);
  for (const check of selectedChecks)
    assert.ok(names.has(check), `Unknown browser check: ${check}`);
}

const server = process.env.DEMO_ORIGIN
  ? null
  : await startStaticServer({ rootDir: assetDir });
const origin = (process.env.DEMO_ORIGIN || server.origin).replace(/\/$/, "");
const run = {
  mode: baseline ? "baseline" : "current",
  origin,
  assetDir: server ? assetDir : null,
  startedAt: new Date().toISOString(),
  filters: {
    templates: selectedTemplates || null,
    checks: selectedChecks || null,
    previewsOnly,
  },
  browsers: [],
  failures: [],
};
await mkdir(outputRoot, { recursive: true });

function safeURL(value) {
  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`;
  } catch {
    return value;
  }
}
async function skipTour(page, wait = true) {
  const skip = page.getByRole("button", { name: "Saltar", exact: true });
  if (wait)
    await skip.waitFor({ state: "visible", timeout: 1800 }).catch((error) => {
      if (error.name !== "TimeoutError") throw error;
    });
  if (await skip.isVisible()) {
    await skip.click();
    await page.locator("#socio-tour").waitFor({ state: "hidden" });
  }
}
async function openDetails(editor, title) {
  const summary = editor.locator("summary").filter({ hasText: title });
  if (!(await summary.evaluate((element) => element.parentElement.open)))
    await summary.click();
}
async function frameFor(page, filename) {
  const iframe = page.locator(`#escena iframe[src*="${filename}"]`);
  await iframe.waitFor({ state: "visible" });
  const handle = await iframe.elementHandle();
  const frame = await handle.contentFrame();
  assert.ok(frame, `Preview frame for ${filename}`);
  await frame.waitForLoadState("domcontentloaded");
  await frame.locator("body").waitFor();
  await frame.waitForFunction(
    () => document.body.textContent.trim().length > 30,
  );
  // Legacy views render their content behind a full-screen splash for ~2 seconds.
  // Wait for the overlay to actually disappear instead of photographing its logo.
  await frame.waitForFunction(
    () =>
      ![...document.querySelectorAll("div[style]")].some((element) => {
        const style = getComputedStyle(element);
        const box = element.getBoundingClientRect();
        return (
          style.position === "fixed" &&
          Number(style.zIndex) >= 100 &&
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          Number(style.opacity) > 0 &&
          box.width >= innerWidth * 0.95 &&
          box.height >= innerHeight * 0.95
        );
      }),
  );
  return frame;
}
async function readyForScreenshot(page) {
  await skipTour(page, false);
  for (const frame of page.frames()) {
    await frame.evaluate(async () => {
      await document.fonts.ready;
      const visibleImages = [...document.images].filter((image) => {
        const bounds = image.getBoundingClientRect();
        return (
          bounds.bottom > 0 && bounds.top < innerHeight && bounds.width > 0
        );
      });
      await Promise.all(
        visibleImages.map((image) => image.decode().catch(() => {})),
      );
      await new Promise((resolveFrame) =>
        requestAnimationFrame(() => requestAnimationFrame(resolveFrame)),
      );
    });
  }
  // The initial tour opens asynchronously, after the editor's DOM is ready.
  await skipTour(page);
  await page.waitForFunction(() => !window.__dmTour?.estado().abierto);
}
async function assertNoOverflow(page) {
  const size = await page.evaluate(() => ({
    content: document.documentElement.scrollWidth,
    viewport: innerWidth,
  }));
  assert.ok(
    size.content <= size.viewport + 1,
    `Horizontal overflow: ${size.content}px in ${size.viewport}px viewport`,
  );
}
async function screenshot(page, browserReport, name) {
  await readyForScreenshot(page);
  let pausedHero;
  if (name.startsWith("brasa-")) {
    // Brasa rotates its hero every 4.5s and opens a chat hint after 3.5s.
    // Exercise the real dismiss/selection controls, then keep the native pause.
    const frame = page
      .frames()
      .find((candidate) => candidate.url().includes("/vista-brasa.html"));
    const hint = frame.getByText("¿Necesitás una mano?", { exact: true });
    await hint.waitFor({ state: "visible" });
    await hint.locator("..").locator("..").locator(":scope > span").click();
    await hint.waitFor({ state: "hidden" });
    await frame.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    const hero = frame.locator("#inicio > div").first();
    // Removing the chat hint can leave Firefox's pointer inside the hero
    // without firing its mouseenter handler. Leave it before entering again.
    await frame.locator("body").hover({ position: { x: 4, y: 4 } });
    assert.equal(
      await hero.evaluate((element) => element.matches(":hover")),
      false,
    );
    // Pause before selecting a slide so the interval cannot advance between
    // the dot click and the assertion, particularly in the mobile layout.
    await hero.getByText(/DESTACADOS.*\d{2}\s*\/\s*07/).hover();
    await hero.locator('span[style*="cursor: pointer"]').first().click();
    const heading = hero.getByText(/DESTACADOS.*01\s*\/\s*07/);
    await heading.waitFor();
    await heading.hover();
    pausedHero = hero;
  }
  if (name === "azul-desktop") {
    // This carousel scrolls through requestAnimationFrame, independently of CSS.
    // Its native hover pause and a fixed scroll position keep all artwork visible.
    const frame = page
      .frames()
      .find((candidate) => candidate.url().includes("/vista-azul.html"));
    const carousel = frame.locator("#recomendados > div").last();
    await carousel.hover({ position: { x: 4, y: 4 } });
    assert.equal(
      await carousel.evaluate(
        (element) => !!element.querySelector(".rce6:hover"),
      ),
      false,
      "Pause on the carousel padding, without hovering a game card",
    );
    await carousel.evaluate((element) =>
      element.scrollTo({ left: 0, behavior: "instant" }),
    );
    await frame.waitForFunction(
      () =>
        document.querySelector("#recomendados > div:last-child").scrollLeft ===
        0,
    );
  }
  const path = resolve(browserReport.directory, `${name}.png`);
  await page.screenshot({
    path,
    fullPage: false,
    animations: "disabled",
    caret: "hide",
  });
  if (pausedHero)
    assert.ok(
      await pausedHero.getByText(/DESTACADOS.*01\s*\/\s*07/).isVisible(),
      "Brasa must remain on the first featured game throughout capture",
    );
  const evidence = { name, path };
  if (name === "azul-desktop")
    evidence.captureState = "recommendations-paused-at-start";
  if (name.startsWith("brasa-"))
    evidence.captureState = "first-featured-game-paused-chat-hint-dismissed";
  browserReport.screenshots.push(evidence);
  if (!compare || baseline) return;
  const referencePath = resolve(
    baselineRoot,
    browserReport.name,
    `${name}.png`,
  );
  const [referenceBytes, currentBytes] = await Promise.all([
    readFile(referencePath),
    readFile(path),
  ]);
  const reference = PNG.sync.read(referenceBytes);
  const current = PNG.sync.read(currentBytes);
  assert.deepEqual(
    [current.width, current.height],
    [reference.width, reference.height],
    `Screenshot dimensions: ${name}`,
  );
  const diff = new PNG({ width: current.width, height: current.height });
  const changed = pixelmatch(
    reference.data,
    current.data,
    diff.data,
    current.width,
    current.height,
    { threshold: 0.1 },
  );
  const ratio = changed / (current.width * current.height);
  Object.assign(evidence, {
    referencePath,
    changedPixels: changed,
    diffRatio: ratio,
    maxDiffRatio,
  });
  if (changed) {
    evidence.diffPath = resolve(browserReport.directory, `${name}.diff.png`);
    await writeFile(evidence.diffPath, PNG.sync.write(diff));
  }
  assert.ok(
    ratio <= maxDiffRatio,
    `Visual difference for ${name}: ${(100 * ratio).toFixed(3)}% exceeds ${(100 * maxDiffRatio).toFixed(3)}%; inspect ${evidence.diffPath}`,
  );
}
function imageFixture() {
  const png = new PNG({ width: 64, height: 64 });
  for (let y = 0; y < 64; y++)
    for (let x = 0; x < 64; x++) {
      const color = x < 32 && y < 32 ? [221, 187, 102] : [36, 61, 115];
      png.data.set([...color, 255], (y * 64 + x) * 4);
    }
  return {
    name: "maker-fixture.png",
    mimeType: "image/png",
    buffer: PNG.sync.write(png),
  };
}

async function pickerContract(page) {
  await page.goto(`${origin}/${designHash("casinotower30", "celular")}`);
  const picker = page.getByRole("combobox", { name: "Plantilla del lobby" });
  await picker.waitFor();
  await skipTour(page);
  assert.deepEqual(
    await picker
      .locator("option")
      .evaluateAll((options) => options.map((option) => option.value)),
    templates.map(([id]) => id),
  );
  assert.equal(await picker.inputValue(), "casinotower30");
  assert.equal(
    await page.locator("#seg-plantilla > button:visible").count(),
    0,
  );
  await picker.selectOption("pinaplay");
  await frameFor(page, "pinaplay.html");
  await page.waitForFunction(
    () =>
      document.querySelector("#app").dataset.plantilla === "pinaplay" &&
      location.hash.includes("pl=pinaplay"),
  );
  await page.reload();
  await picker.waitFor();
  assert.equal(
    await picker.inputValue(),
    "pinaplay",
    "Selection survives reload through the saved URL",
  );
  await skipTour(page);
  await picker.focus();
  await picker.press("End");
  await picker.press("Enter");
  await page.waitForFunction(
    () => document.querySelector("#app").dataset.plantilla === "cobraya",
  );
  await page.locator("#seg-vista [data-valor=panel]").click();
  await frameFor(page, "vista-socio-panel.html");
  assert.equal(await picker.isVisible(), false);
  await skipTour(page);
  await page.locator("#seg-vista [data-valor=lobby]").click();
  await picker.waitFor();
  assert.equal(await picker.inputValue(), "cobraya");
  await skipTour(page);
  await page.setViewportSize({ width: 393, height: 852 });
  await skipTour(page);
  if (
    (await page.locator("#hoja-cabeza").isVisible()) &&
    (await page.locator("#cajon").getAttribute("data-abierto")) !== "true"
  )
    await page.locator("#hoja-cabeza").click();
  await picker.selectOption("bet30");
  await frameFor(page, "bet30.html");
  await assertNoOverflow(page);
}

async function brandContract(page, browserReport) {
  await page.goto(`${origin}/muestra/socio.html${designHash("bateupix")}`);
  let frame = await frameFor(page, "bateupix.html");
  await skipTour(page);
  await page.locator("[data-abrir=p]").click();
  // Clicking waits for the sliding detail panel to settle before focusing it.
  // fill() alone can focus mid-transition and scroll the drawer horizontally.
  await page.locator("#hex-p").click();
  await page.locator("#hex-p").fill("#123456");
  await page.locator("#hex-p").press("Tab");
  await frame.waitForFunction(
    () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--dm-p")
        .trim() === "#123456",
  );
  await page.locator("[data-detalle=p] .volver").click();
  await page.locator("[data-abrir=n]").click();
  await page.getByLabel("Nombre del casino", { exact: true }).click();
  await page
    .getByLabel("Nombre del casino", { exact: true })
    .fill("Casino Prueba");
  await frame.waitForFunction(
    () => document.querySelector("#bp-name").textContent === "Casino Prueba",
  );
  await page.locator("#logo-archivo").setInputFiles(imageFixture());
  await page.locator("#btn-quitar-logo").waitFor({ state: "visible" });
  await frame.locator("#bp-logo").waitFor({ state: "visible" });
  await frame.locator("#bp-logo").evaluate((image) => image.decode());
  // Preview updates precede the editor's debounced URL/storage commit.
  await page.waitForFunction(() => {
    const saved = new URLSearchParams(location.hash.slice(1));
    return saved.get("n") === "Casino Prueba" && saved.get("p") === "123456";
  });
  await page.reload();
  frame = await frameFor(page, "bateupix.html");
  await skipTour(page);
  await frame.waitForFunction(
    () => document.querySelector("#bp-name").textContent === "Casino Prueba",
  );
  assert.equal(
    await frame
      .locator("html")
      .evaluate((element) =>
        getComputedStyle(element).getPropertyValue("--dm-p").trim(),
      ),
    "#123456",
  );
  await frame.locator("#bp-logo").waitFor({ state: "visible" });
  await frame.locator("#bp-logo").evaluate(async (image) => {
    await image.decode();
    if (!image.naturalWidth)
      throw Error("Uploaded logo did not survive reload");
  });
  await screenshot(page, browserReport, "controls-brand-persisted");
  await page.locator("[data-abrir=n]").click();
  await page.locator("#btn-quitar-logo").click();
  await frame.locator("#bp-logo").waitFor({ state: "hidden" });
}

async function editorContract(page, browserReport) {
  await page.goto(
    `${origin}/muestra/socio.html${designHash("clasica", "celular")}`,
  );
  await page.locator(".design-editor").waitFor();
  await skipTour(page);
  const editor = page.locator(".design-editor");
  let frame = await frameFor(page, "vista-socio-lobby.html");
  await openDetails(editor, "Tipografía");
  await editor.locator("[name=font]").selectOption("editorial");
  await frame.waitForFunction(() =>
    document
      .querySelector("#design-custom-style")
      ?.textContent.includes("Georgia"),
  );
  await editor.locator("[name=scale]").focus();
  await editor.locator("[name=scale]").press("End");
  await page.waitForFunction(
    (key) => JSON.parse(localStorage.getItem(key)).scale === 120,
    extrasKey,
  );
  await frame.waitForFunction(
    () =>
      Number(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--design-text-scale",
        ),
      ) === 1.2,
  );
  await frame.locator("body").evaluate((body) => {
    const parent = Object.assign(document.createElement("p"), {
      id: "scale-probe",
      textContent: "Texto ",
    });
    parent.style.fontSize = "20px";
    parent.append(
      Object.assign(document.createElement("span"), { textContent: "hijo" }),
    );
    body.append(parent);
  });
  await frame.waitForFunction(() => {
    const probe = document.querySelector("#scale-probe");
    return (
      parseFloat(getComputedStyle(probe).fontSize) === 24 &&
      parseFloat(getComputedStyle(probe.firstElementChild).fontSize) === 24
    );
  });
  await frame
    .locator("#scale-probe")
    .evaluate((element) =>
      element.append(
        Object.assign(document.createElement("span"), { textContent: "nuevo" }),
      ),
    );
  // A new span initially inherits 24px even before the observer processes it.
  // Wait for its marker so a transient inherited size cannot hide compounding.
  await frame.waitForFunction(() =>
    document
      .querySelector("#scale-probe span:last-child")
      .classList.contains("design-scaled-text"),
  );
  await frame.locator("#scale-probe").evaluate(async (element) => {
    await Promise.all(
      element
        .getAnimations({ subtree: true })
        .map((animation) => animation.finished.catch(() => {})),
    );
  });
  const measured = await frame.evaluate(() =>
    [...document.querySelectorAll("#scale-probe, #scale-probe span")].map(
      (element) => ({
        text: element.textContent,
        fontSize: getComputedStyle(element).fontSize,
        baseSize: element.style.getPropertyValue("--design-base-size"),
        scale: getComputedStyle(element).getPropertyValue(
          "--design-text-scale",
        ),
        classes: element.className,
      }),
    ),
  );
  browserReport.textScale = { expectedPixels: 24, measured };
  const originalCompoundDefect =
    baseline &&
    measured
      .slice(0, 2)
      .every(
        (element) => element.fontSize === "24px" && element.baseSize === "20px",
      ) &&
    // Firefox exposes this legacy 28.8px result rounded to 28.8125px.
    Math.abs(parseFloat(measured[2].fontSize) - 28.8) <= 1 / 64 &&
    measured[2].baseSize === "24px" &&
    measured.every((element) => element.scale === "1.2");
  if (originalCompoundDefect) {
    browserReport.knownBaselineDefects.push({
      id: "dynamic-inherited-text-scale",
      expectedPixels: 24,
      actualPixels: parseFloat(measured[2].fontSize),
      measured,
    });
  } else {
    assert.equal(
      parseFloat(measured[2].fontSize),
      24,
      `Dynamic text must be scaled once: ${JSON.stringify(measured)}`,
    );
  }
  await frame.locator("#scale-probe").evaluate((element) => element.remove());
  await openDetails(editor, "Fondo con imagen");
  const image = imageFixture();
  await editor.locator("[name=imageFile]").setInputFiles(image);
  await page.waitForFunction(
    (key) =>
      JSON.parse(localStorage.getItem(key)).image.startsWith("data:image/"),
    extrasKey,
  );
  await frame.waitForFunction(() =>
    getComputedStyle(document.documentElement).backgroundImage.includes(
      "data:image",
    ),
  );
  await editor.locator("[name=imageEnabled]").uncheck();
  await frame.waitForFunction(
    () =>
      !document
        .querySelector("#design-custom-style")
        .textContent.includes("background-image"),
  );
  await editor.locator("[name=imageEnabled]").check();
  await frame.waitForFunction(() =>
    document
      .querySelector("#design-custom-style")
      .textContent.includes("background-image"),
  );
  await page
    .getByRole("combobox", { name: "Plantilla del lobby" })
    .selectOption("duplicada");
  frame = await frameFor(page, "resort.html");
  await frame.waitForFunction(() => {
    const css = document.querySelector("#design-custom-style")?.textContent;
    return css?.includes("Georgia") && css.includes("data:image");
  });
  assert.equal(
    await frame
      .locator("main")
      .evaluate((element) => getComputedStyle(element).backgroundColor),
    "rgba(245, 243, 237, 0.96)",
  );
  await openDetails(editor, "Banners y secciones");
  await editor.locator("[data-content=title]").fill("Mi nuevo casino");
  await frame.waitForFunction(
    () =>
      document.querySelector(".hero-copy h1").textContent === "Mi nuevo casino",
  );
  await editor
    .getByRole("checkbox", { name: "Mostrar Casino en vivo", exact: true })
    .uncheck();
  await frame.locator(".lounge").waitFor({ state: "hidden" });
  await editor
    .getByRole("button", { name: "Bajar Portada", exact: true })
    .click();
  await frame.waitForFunction(
    () => document.querySelector("main > section").id === "discover",
  );
  await editor.locator("[data-banner-file]").setInputFiles(image);
  await frame.locator("[data-banner-image]").waitFor({ state: "visible" });
  assert.match(
    await frame.locator("[data-banner-image]").getAttribute("src"),
    /^data:image\//,
  );
  await screenshot(page, browserReport, "controls-resort-customized");
  await page.locator("#seg-vista [data-valor=panel]").click();
  frame = await frameFor(page, "vista-socio-panel.html");
  await skipTour(page);
  await frame.waitForFunction(() =>
    document
      .querySelector("#design-custom-style")
      ?.textContent.includes("data:image"),
  );
  await openDetails(editor, "Acabados");
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    editor.locator("[data-export]").click(),
  ]);
  assert.equal(download.suggestedFilename(), "ajustes-diseno.json");
  const exportedPath = resolve(browserReport.directory, "ajustes-diseno.json");
  await download.saveAs(exportedPath);
  const exported = JSON.parse(await readFile(exportedPath, "utf8"));
  assert.equal(exported.version, 1);
  assert.equal(exported.ajustes.font, "editorial");
  assert.equal(exported.ajustes.scale, 120);
  assert.match(exported.ajustes.image, /^data:image\//);
  await editor.locator("[data-reset]").click();
  await frame.waitForFunction(() => {
    const css = document.querySelector("#design-custom-style").textContent;
    return !css.includes("Georgia") && !css.includes("background-image");
  });
  const imported = {
    version: 1,
    ajustes: {
      font: "archivo",
      scale: 110,
      image: `data:image/png;base64,${image.buffer.toString("base64")}`,
      shade: 70,
    },
  };
  await editor.locator("[data-json]").setInputFiles({
    name: "ajustes.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(imported)),
  });
  await page.waitForFunction(
    (key) => JSON.parse(localStorage.getItem(key)).font === "archivo",
    extrasKey,
  );
  await frame.evaluate(async () => {
    const loaded = await document.fonts.load("16px Archivo");
    if (!loaded.length || !loaded.every((font) => font.status === "loaded"))
      throw Error("Archivo font did not load in the panel");
  });
  await page.reload();
  await page.locator(".design-editor").waitFor();
  assert.equal(
    await page.evaluate(() => window.__designExtras.estado().font),
    "archivo",
  );
  assert.equal(
    await page.evaluate(() => window.__designExtras.estado().scale),
    110,
  );
  await screenshot(page, browserReport, "controls-panel-persisted");
}

async function catalogContract(page, slug) {
  await page.goto(`${origin}/muestra/${slug}.html`);
  await page.locator(".bp-game").first().waitFor();
  assert.equal(
    await page.locator(".bp-game").count(),
    48,
    `${slug}: demo catalog`,
  );
  await page
    .locator(
      slug === "celuapuestas40"
        ? "[data-artwork=casino]"
        : slug === "multisala"
          ? "[data-artwork=brand]"
          : "#bp-banner",
    )
    .evaluate(async (image) => {
      await image.decode();
      if (!image.naturalWidth) throw Error("Demo banner did not decode");
    });
  if (slug === "multisala") {
    assert.equal(await page.locator(".ms-room").count(), 5);
    await page.locator(".ms-room").first().click();
    assert.match(await page.locator("#bp-dialog-title").textContent(), /Celu/);
    await page.locator("#bp-dialog .bp-close").first().click();
  }
  if (slug === "pinaplay") {
    assert.equal(await page.locator(".pp-collection").count(), 6);
    const heading = await page
      .locator(".pp-row-heading h2")
      .first()
      .textContent();
    await page.locator(".pp-row-heading button").first().click();
    assert.equal(await page.locator("#bp-title").textContent(), heading);
    await page.locator(".bp-tabs [data-filter=todos]").click();
  }
  const categories =
    slug === "celuapuestas40"
      ? "#ce-categories"
      : ["bet30", "casinotower30"].includes(slug)
        ? "#bf-categories"
        : null;
  if (categories) {
    const category = page.locator(`${categories} button`).first();
    const title = (await category.textContent()).replace("♠", "").trim();
    await category.click();
    assert.ok((await page.locator("#bp-title").textContent()).includes(title));
    await page.locator(".bp-tabs [data-filter=todos]").click();
  }
  const firstName = await page.locator(".bp-game h2").first().textContent();
  await page.locator("#bp-search").fill(firstName.trim());
  assert.ok((await page.locator(".bp-game:visible").count()) > 0);
  await page.locator("#bp-search").fill("");
  await page.locator(".bp-fav").first().click();
  await page.locator(".bp-tabs [data-filter=favoritos]").click();
  assert.equal(await page.locator(".bp-game:visible").count(), 1);
  await page.locator(".bp-game-open").first().click();
  const game = page.locator("#bp-dialog iframe");
  await game.waitFor();
  assert.equal(
    new URL(await game.getAttribute("src"), origin).origin,
    origin,
    "Demo launch stays on the same origin",
  );
  await page.locator("#bp-dialog .bp-close").first().click();
  await page.getByRole("button", { name: "Registrarse", exact: true }).click();
  assert.match(
    await page.locator("#bp-dialog-body").textContent(),
    /No se crean cuentas/,
  );
  await page.locator("#bp-dialog .bp-close").first().click();
  await page.setViewportSize({ width: 393, height: 852 });
  assert.ok(await page.locator(".bp-mobile").isVisible());
  await assertNoOverflow(page);
}

try {
  for (const name of browserNames) {
    const reference =
      compare && !baseline
        ? JSON.parse(
            await readFile(resolve(baselineRoot, name, "report.json"), "utf8"),
          )
        : null;
    const executablePath =
      process.env[`PLAYWRIGHT_${name.toUpperCase()}_EXECUTABLE`];
    const browser = await browsers[name].launch({
      headless: true,
      ...(executablePath ? { executablePath } : {}),
    });
    const directory = resolve(outputRoot, name);
    // Each run owns this result directory; do not retain stale failure images.
    await rm(directory, { recursive: true, force: true });
    await mkdir(directory, { recursive: true });
    const browserReport = {
      name,
      version: browser.version(),
      executablePath: executablePath || "playwright-managed",
      directory,
      checks: [],
      screenshots: [],
      missingResources: [],
      blockedExternalRequests: [],
      knownBaselineDefects: [],
    };
    run.browsers.push(browserReport);
    if (reference) {
      if (browserReport.version !== reference.version) await browser.close();
      assert.equal(
        browserReport.version,
        reference.version,
        "Visual comparison requires the same browser version as the baseline",
      );
    }
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      locale: "es-AR",
      timezoneId: "UTC",
      reducedMotion: "reduce",
      colorScheme: "light",
      deviceScaleFactor: 1,
    });
    await context.addInitScript(() => {
      // Equal data in baseline and rebuilt pages; no DOM is hidden.
      let seed = 123456789;
      Math.random = () => {
        seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
        return seed / 4294967296;
      };
      const RealDate = Date;
      const fixedTime = RealDate.parse("2026-10-28T12:00:00Z");
      const start = performance.now();
      const now = () => fixedTime + Math.floor(performance.now() - start);
      globalThis.Date = class extends RealDate {
        constructor(...args) {
          super(...(args.length ? args : [now()]));
        }
        static now() {
          return now();
        }
      };
    });
    await context.route("**/*", (route) => {
      const url = new URL(route.request().url());
      if (["http:", "https:"].includes(url.protocol) && url.origin !== origin) {
        browserReport.blockedExternalRequests.push(safeURL(url.href));
        return route.abort("blockedbyclient");
      }
      return route.continue();
    });
    if (process.env.BROWSER_TRACE === "1")
      await context.tracing.start({ screenshots: true, snapshots: true });
    const check = async (
      label,
      body,
      viewport = { width: 1440, height: 1000 },
    ) => {
      if (selectedChecks && !selectedChecks.includes(label)) return;
      const page = await context.newPage();
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      page.setDefaultTimeout(12000);
      page.setDefaultNavigationTimeout(30000);
      const pageErrors = [];
      const brokenCode = [];
      page.on("pageerror", (error) => pageErrors.push(error.message));
      page.on("response", (response) => {
        if (
          response.status() >= 400 &&
          new URL(response.url()).origin === origin
        ) {
          const failure = {
            scenario: label,
            url: safeURL(response.url()),
            status: response.status(),
            type: response.request().resourceType(),
          };
          browserReport.missingResources.push(failure);
          if (["script", "stylesheet", "font"].includes(failure.type))
            brokenCode.push(failure);
        }
      });
      const started = Date.now();
      try {
        // Reset between cases, while leaving reloads inside a case untouched.
        await page.goto(`${origin}/api/health`);
        await page.evaluate(() => {
          localStorage.clear();
          sessionStorage.clear();
        });
        await body(page);
        assert.deepEqual(pageErrors, [], `${label}: uncaught browser errors`);
        assert.deepEqual(
          brokenCode,
          [],
          `${label}: failed local code/font requests`,
        );
        browserReport.checks.push({
          label,
          status: "passed",
          durationMs: Date.now() - started,
        });
        console.log(`PASS ${name}: ${label}`);
      } catch (error) {
        const failure = {
          browser: name,
          label,
          error: error.stack || String(error),
          pageErrors,
          brokenCode,
        };
        run.failures.push(failure);
        browserReport.checks.push({
          label,
          status: "failed",
          durationMs: Date.now() - started,
          error: error.stack || String(error),
        });
        await page
          .screenshot({
            path: resolve(
              directory,
              `${label.replaceAll(/[^a-z0-9-]/gi, "-")}.failure.png`,
            ),
            animations: "disabled",
          })
          .catch(() => {});
        console.error(
          `FAIL ${name}: ${label}\n${error.stack || error.message}`,
        );
      } finally {
        await page.close();
      }
    };
    try {
      for (const [slug, filename] of templates) {
        if (selectedTemplates && !selectedTemplates.includes(slug)) continue;
        for (const viewport of viewports)
          await check(
            `${slug}-${viewport.name}`,
            async (page) => {
              await page.goto(
                `${origin}/muestra/socio.html${designHash(slug, viewport.device)}`,
              );
              const picker = page.getByRole("combobox", {
                name: "Plantilla del lobby",
              });
              await picker.waitFor();
              await skipTour(page);
              assert.equal(await picker.inputValue(), slug);
              const frame = await frameFor(page, filename);
              await page.waitForFunction(
                ({ slug, device }) => {
                  const app = document.querySelector("#app");
                  return (
                    app.dataset.plantilla === slug &&
                    app.dataset.disp === device
                  );
                },
                { slug, device: viewport.device },
              );
              if (templates.findIndex(([id]) => id === slug) >= 5) {
                await frame.waitForFunction(
                  () =>
                    document.querySelector("#bp-name")?.textContent ===
                    "MiCasino",
                );
                assert.equal(
                  await frame
                    .locator("html")
                    .evaluate((element) =>
                      getComputedStyle(element)
                        .getPropertyValue("--dm-p")
                        .trim(),
                    ),
                  "#fdca55",
                );
              }
              await assertNoOverflow(page);
              await screenshot(page, browserReport, `${slug}-${viewport.name}`);
            },
            viewport,
          );
      }
      for (const viewport of viewports)
        await check(
          `panel-${viewport.name}`,
          async (page) => {
            await page.goto(
              `${origin}/muestra/socio.html${designHash("clasica", viewport.device, "panel")}`,
            );
            await frameFor(page, "vista-socio-panel.html");
            await skipTour(page);
            await assertNoOverflow(page);
            await screenshot(page, browserReport, `panel-${viewport.name}`);
          },
          viewport,
        );
      if (!previewsOnly) {
        await check("picker-navigation-persistence", pickerContract);
        await check("brand-color-name-logo-persistence", (page) =>
          brandContract(page, browserReport),
        );
        await check("editor-controls-persistence", (page) =>
          editorContract(page, browserReport),
        );
        for (const slug of [
          "bateupix",
          "casinotower30",
          "bet30",
          "celuapuestas40",
          "pinaplay",
          "multisala",
          "lunabet",
          "cobraya",
        ]) {
          if (selectedTemplates && !selectedTemplates.includes(slug)) continue;
          await check(`catalog-${slug}`, (page) => catalogContract(page, slug));
        }
      }
    } finally {
      browserReport.blockedExternalRequests = [
        ...new Set(browserReport.blockedExternalRequests),
      ].sort();
      if (reference) {
        const resourceKey = (resource) =>
          `${new URL(resource.url).pathname}:${resource.status}:${resource.type}`;
        const existing = new Set(reference.missingResources.map(resourceKey));
        browserReport.newMissingResources =
          browserReport.missingResources.filter(
            (resource) => !existing.has(resourceKey(resource)),
          );
        if (browserReport.newMissingResources.length) {
          run.failures.push({
            browser: name,
            label: "new-missing-resources",
            resources: browserReport.newMissingResources,
          });
          console.error(
            `FAIL ${name}: ${browserReport.newMissingResources.length} requests failed that succeeded in the baseline`,
          );
        }
      }
      if (process.env.BROWSER_TRACE === "1")
        await context.tracing.stop({ path: resolve(directory, "trace.zip") });
      await context.close();
      await browser.close();
      await writeFile(
        resolve(directory, "report.json"),
        JSON.stringify(browserReport, null, 2),
      );
    }
  }
} catch (error) {
  run.failures.push({ label: "runner", error: error.stack || String(error) });
  console.error(error);
} finally {
  run.finishedAt = new Date().toISOString();
  await writeFile(
    resolve(outputRoot, "report.json"),
    JSON.stringify(run, null, 2),
  );
  await server?.close();
}
console.log(`Browser evidence: ${outputRoot}`);
if (run.failures.length) process.exitCode = 1;
