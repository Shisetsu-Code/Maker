import assert from "node:assert/strict";
import test from "node:test";
import { resolveAzulAsset } from "../src/client/views/azul/asset-paths.js";

test("Azul uses the available default brand logo", () => {
  assert.equal(
    resolveAzulAsset("assets/logo.png"),
    "rushybet/rushybet-logo.webp",
  );
});

test("a customized Azul logo takes priority over the default fallback", () => {
  const logo = "data:image/svg+xml,%3Csvg/%3E";
  assert.equal(
    resolveAzulAsset("assets/logo.png", undefined, {
      "azul/assets/logo.webp": logo,
    }),
    logo,
  );
  assert.equal(
    resolveAzulAsset("assets/logo.png", undefined, {
      "azul/assets/logo.webp": "",
    }),
    "",
  );
});

test("the logo fallback does not rewrite a separately configured asset directory", () => {
  assert.equal(
    resolveAzulAsset("assets/logo.png", { base: "custom/", ext: ".avif" }),
    "custom/assets/logo.avif",
  );
});

test("other Azul resources keep their captured path mapping", () => {
  assert.equal(
    resolveAzulAsset("assets/hero-bg.png"),
    "azul/assets/hero-bg.webp",
  );
  assert.equal(
    resolveAzulAsset("assets/bono-bg.PNG"),
    "azul/assets/bono-bg.webp",
  );
  assert.equal(
    resolveAzulAsset("https://example.test/logo.png"),
    "https://example.test/logo.png",
  );
  assert.equal(resolveAzulAsset(null), null);
});
