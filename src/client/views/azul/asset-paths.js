/**
 * Pure Azul asset-path rules recovered from Maker b6d354e.
 * No browser globals or preview state are required. The runtime passes its
 * current configuration and image overrides; tooling can use the defaults.
 */
export function normalizeAzulAssetPath(
  value,
  configuration = { base: "azul/", ext: ".webp" },
) {
  return configuration.base + value.replace(/\.png$/i, configuration.ext);
}
export function resolveAzulAsset(
  value,
  configuration = { base: "azul/", ext: ".webp" },
  overrides = {},
) {
  if (typeof value !== "string" || !value.startsWith("assets/")) return value;
  const normalized = normalizeAzulAssetPath(value, configuration);
  // The captured Azul logo was never available. Use the captured default brand
  // while retaining the normalized key used by custom logo overrides.
  const fallback =
    normalized === "azul/assets/logo.webp"
      ? "rushybet/rushybet-logo.webp"
      : normalized;
  return overrides[normalized] ?? fallback;
}
