import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";

async function editorModule(name) {
  const url = new URL(`../src/client/editor/${name}.js`, import.meta.url);
  assert.ok(existsSync(url), `The recovered editor module ${name} must be available`);
  return import(url);
}

test("each existing template opens its own lobby and shares the existing panel route", async () => {
  const { resolvePreviewPage, previewCacheKey } = await editorModule("template-registry");
  const pages = [
    ["clasica", "lobby", "vista-socio-lobby.html?k=cliente%2Funo"],
    ["azul", "azul", "vista-azul.html"],
    ["blaze", "blaze", "vista-blaze.html"],
    ["brasa", "brasa", "vista-brasa.html"],
    ["duplicada", "duplicada", "resort.html"],
    ["bateupix", "bateupix", "bateupix.html"],
    ["casinotower30", "casinotower30", "casinotower30.html"],
    ["bet30", "bet30", "bet30.html"],
    ["celuapuestas40", "celuapuestas40", "celuapuestas40.html"],
    ["pinaplay", "pinaplay", "pinaplay.html"],
    ["multisala", "multisala", "multisala.html"],
    ["lunabet", "lunabet", "lunabet.html"],
    ["cobraya", "cobraya", "cobraya.html"],
  ];
  for (const [template, page, expected] of pages) {
    assert.equal(resolvePreviewPage(page, { clave: "cliente/uno" }), expected);
    assert.equal(previewCacheKey(template, "lobby", "compu"), `${page}-compu`);
    assert.equal(previewCacheKey(template, "lobby", "celular"), `${page}-celular`);
    assert.equal(previewCacheKey(template, "panel", "compu"), "panel-compu");
    assert.equal(previewCacheKey(template, "panel", "celular"), "panel-celular");
  }
  assert.equal(
    resolvePreviewPage("panel", { clave: "cliente/uno" }),
    "vista-socio-panel.html?k=cliente%2Funo",
  );
  assert.equal(resolvePreviewPage("lobby", null), "vista-lobby.html");
  assert.equal(resolvePreviewPage("panel", null), "vista-panel.html");
});

test("switching templates adapts only colors that still have the previous template defaults", async () => {
  const { createTemplateBrand, adaptBrandForTemplate } = await editorModule("template-registry");
  const original = createTemplateBrand("clasica");
  const custom = { ...original, p: "#123456", n: "Mi casino", b: "#fedcba", im: false };
  const switched = adaptBrandForTemplate(custom, "clasica", "duplicada");
  assert.deepEqual(
    { p: switched.p, f: switched.f, t: switched.t, n: switched.n, b: switched.b, im: switched.im },
    { p: "#123456", f: "#10251f", t: "#213c32", n: "Mi casino", b: "#fedcba", im: false },
  );
  assert.equal(custom.f, "#0f0f0f", "Switching must not mutate the saved previous design");
  const unchanged = adaptBrandForTemplate(custom, "clasica", "clasica");
  assert.deepEqual(unchanged, custom);
  assert.notEqual(unchanged, custom);
});

test("resetting a template recovers its own palette and preserves automatic color controls", async () => {
  const { createTemplateBrand, isTemplateId } = await editorModule("template-registry");
  const palettes = [
    ["clasica", "#ff5500", "#0f0f0f", "auto"],
    ["azul", "#183deb", "#010028", "#00024f"],
    ["blaze", "#0a0a0b", "#f7f7f8", "auto"],
    ["brasa", "#ff5b14", "#000000", "auto"],
    ["duplicada", "#d5b66d", "#10251f", "#213c32"],
    ["bateupix", "#ba3cff", "#0d1117", "#1b2028"],
    ["casinotower30", "#fdca55", "#1c1c1c", "#29251c"],
    ["bet30", "#da4168", "#000032", "#14142f"],
    ["celuapuestas40", "#da4167", "#000032", "#11112b"],
    ["pinaplay", "#71c92e", "#012326", "#012e32"],
    ["multisala", "#c34ee8", "#100a18", "#21132d"],
    ["lunabet", "#4d8df7", "#090d18", "#161e31"],
    ["cobraya", "#ffc400", "#0c0d10", "#202126"],
  ];
  for (const [id, p, f, t] of palettes) {
    const settings = createTemplateBrand(id);
    assert.equal(isTemplateId(id), true);
    assert.deepEqual(
      [settings.p, settings.f, settings.t, settings.b, settings.s],
      [p, f, t, "auto", "auto"],
    );
  }
  for (const invalid of ["__proto__", "toString", "unknown", null, {}]) {
    assert.equal(isTemplateId(invalid), false);
  }
});

test("saved version-one brand links retain their fields and exclude the separately stored logo", async () => {
  const { parseBrandCode, serializeBrandCode } = await editorModule("brand-codec");
  const encoded =
    "v=1&p=ff5500&b=auto&ba=liso&f=0f0f0f&t=auto&tb=0&s=auto&x=calido&im=1&ic=p&n=Casino+Prueba&vista=panel&disp=celular&pl=clasica";
  const restored = parseBrandCode(`https://maker.example/muestra/socio.html#${encoded}`);
  assert.deepEqual(restored, {
    per: {
      p: "#ff5500",
      b: "auto",
      ba: "liso",
      f: "#0f0f0f",
      t: "auto",
      tb: false,
      s: "auto",
      x: "calido",
      im: true,
      ic: "p",
      n: "Casino Prueba",
      logo: false,
    },
    diag: false,
    vista: "panel",
    disp: "celular",
    pl: "clasica",
  });
  assert.equal(
    serializeBrandCode(restored.per, {
      vista: restored.vista,
      disp: restored.disp,
      pl: restored.pl,
    }),
    encoded,
  );
  assert.equal(parseBrandCode("v=2&p=abcdef"), null);
  assert.equal(parseBrandCode("v=1&pl=__proto__").pl, undefined);
});

test("old Brasa links migrate the inherited background while light Blaze links remain light", async () => {
  const { parseBrandCode } = await editorModule("brand-codec");
  assert.equal(parseBrandCode("v=1&pl=brasa&f=0f0f0f").per.f, "#000000");
  assert.equal(parseBrandCode("v=1&pl=blaze&f=f7f7f8").per.f, "#f7f7f8");
});
