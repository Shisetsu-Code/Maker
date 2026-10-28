/**
 * Maker template routing and brand defaults.
 * Recovered from public/muestra/socio.js at b6d354e9108f72598f319b02a358d01a4089671c.
 * Keep the existing identifiers: version-one links and browser storage use them.
 */
import { DEFAULT_BRAND } from "./brand.js";
import { normalizeAzulTheme, prepareAzulInputs } from "./theme-azul.js";
function template(label, page, url, p, f, t, capabilities = {}) {
  return Object.freeze({
    label,
    page,
    url,
    defaults: Object.freeze({
      p,
      f,
      t,
    }),
    ...capabilities,
  });
}
export const TEMPLATE_REGISTRY = Object.freeze({
  clasica: template("Rushybet", "lobby", "vista-lobby.html", "#ff5500", "#0f0f0f", "auto", {
    logoTint: true,
  }),
  azul: template("RushyClub azul", "azul", "vista-azul.html", "#183deb", "#010028", "#00024f"),
  blaze: template("BlazeBet", "blaze", "vista-blaze.html", "#0a0a0b", "#f7f7f8", "auto", {
    lightBackground: true,
  }),
  brasa: template("Brasa", "brasa", "vista-brasa.html", "#ff5b14", "#000000", "auto", {
    lightBackground: true,
  }),
  duplicada: template("Rushybet 2", "duplicada", "resort.html", "#d5b66d", "#10251f", "#213c32", {
    logoTint: true,
  }),
  bateupix: template("Bateupix", "bateupix", "bateupix.html", "#ba3cff", "#0d1117", "#1b2028"),
  casinotower30: template(
    "CasinoTower30",
    "casinotower30",
    "casinotower30.html",
    "#fdca55",
    "#1c1c1c",
    "#29251c",
  ),
  bet30: template("Bet30", "bet30", "bet30.html", "#da4168", "#000032", "#14142f"),
  celuapuestas40: template(
    "Celuapuestas40",
    "celuapuestas40",
    "celuapuestas40.html",
    "#da4167",
    "#000032",
    "#11112b",
  ),
  pinaplay: template("Pinaplay", "pinaplay", "pinaplay.html", "#71c92e", "#012326", "#012e32"),
  multisala: template("Multisala", "multisala", "multisala.html", "#c34ee8", "#100a18", "#21132d"),
  lunabet: template("Lunabet", "lunabet", "lunabet.html", "#4d8df7", "#090d18", "#161e31"),
  cobraya: template("Cobraya", "cobraya", "cobraya.html", "#ffc400", "#0c0d10", "#202126"),
});
export const TEMPLATE_LABELS = Object.freeze(
  Object.fromEntries(Object.entries(TEMPLATE_REGISTRY).map(([id, entry]) => [id, entry.label])),
);
export const AZUL_ORIGINAL_PALETTE = Object.freeze({
  marca: TEMPLATE_REGISTRY.azul.defaults.p,
  fondo: TEMPLATE_REGISTRY.azul.defaults.f,
  tarjeta: TEMPLATE_REGISTRY.azul.defaults.t,
});
export const BRASA_DEFAULT_BACKGROUND = TEMPLATE_REGISTRY.brasa.defaults.f;
export function isTemplateId(value) {
  return typeof value === "string" && Object.hasOwn(TEMPLATE_REGISTRY, value);
}
export function createTemplateBrand(templateId) {
  return {
    ...DEFAULT_BRAND,
    ...TEMPLATE_REGISTRY[templateId]?.defaults,
  };
}
export function templateBrandDefault(templateId, key) {
  return createTemplateBrand(templateId)[key];
}

/** Preserve explicit choices; only untouched defaults follow the new template. */
export function adaptBrandForTemplate(settings, previousId, nextId) {
  const result = {
    ...settings,
  };
  if (previousId === nextId) return result;
  for (const key of ["p", "f", "t"]) {
    if (settings[key] === TEMPLATE_REGISTRY[previousId].defaults[key]) {
      result[key] = TEMPLATE_REGISTRY[nextId].defaults[key];
    }
  }
  return result;
}

/** Page IDs also identify cached iframes; all templates use the shared panel. */
export function previewCacheKey(templateId, view, device) {
  const page = view === "lobby" ? TEMPLATE_REGISTRY[templateId]?.page || "lobby" : view;
  return `${page}-${device}`;
}
export function resolvePreviewPage(page, socioContext) {
  if (page === "panel" || page === "lobby") {
    return socioContext
      ? `vista-socio-${page}.html?k=${encodeURIComponent(socioContext.clave)}`
      : `vista-${page}.html`;
  }
  return Object.values(TEMPLATE_REGISTRY).find((entry) => entry.page === page)?.url;
}
export function isAzulLobby(templateId, view) {
  return templateId === "azul" && view === "lobby";
}
export function resolveAzulSurfaces(settings) {
  const theme = normalizeAzulTheme(prepareAzulInputs(settings));
  return {
    fondo: theme.fondo,
    tarjeta: theme.tarjeta,
  };
}
export function hidesLegacyImageControls(templateId, view) {
  return Boolean(TEMPLATE_REGISTRY[templateId]?.hideImageControls) && view === "lobby";
}
export function supportsLightBackground(templateId) {
  return Boolean(TEMPLATE_REGISTRY[templateId]?.lightBackground);
}
export function isLightBackgroundLobby(templateId, view) {
  return supportsLightBackground(templateId) && view === "lobby";
}
export function supportsLogoTint(templateId, view) {
  return view === "panel" || Boolean(TEMPLATE_REGISTRY[templateId]?.logoTint);
}
