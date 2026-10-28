import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, symlink, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, before, test } from "node:test";
import { startStaticServer } from "../../scripts/serve-static.mjs";

let fixture;
let server;
before(async () => {
  fixture = await mkdtemp(join(tmpdir(), "maker-preview-"));
  const assets = join(fixture, "public");
  await mkdir(join(assets, "games-cartas"), { recursive: true });
  await writeFile(join(assets, "index.html"), "<h1>Maker fixture</h1>");
  await writeFile(join(assets, "games-cartas", "card.svg"), "<svg>card</svg>");
  await writeFile(
    join(fixture, "private.txt"),
    "must stay outside the preview",
  );
  await symlink(join(fixture, "private.txt"), join(assets, "outside.txt"));
  server = await startStaticServer({ rootDir: assets });
});
after(async () => {
  await server?.close();
  if (fixture) await rm(fixture, { recursive: true, force: true });
});

test("preview serves the entry and the game-card alias with their real MIME types", async () => {
  const entry = await fetch(server.origin);
  assert.equal(entry.status, 200);
  assert.match(entry.headers.get("content-type"), /text\/html/);
  assert.equal(await entry.text(), "<h1>Maker fixture</h1>");
  const card = await fetch(`${server.origin}/muestra/games-cartas/card.svg`);
  assert.equal(card.status, 200);
  assert.match(card.headers.get("content-type"), /image\/svg\+xml/);
  assert.equal(await card.text(), "<svg>card</svg>");
});

test("preview uses the real demo handler for same-origin game launches", async () => {
  const response = await fetch(`${server.origin}/api/muestra/juego-demo`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      demo: true,
      gameCode: "test-game",
      vendorCode: "test-vendor",
      channel: "mobile",
    }),
  });
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.demo, true);
  assert.equal(
    body.url,
    `${server.origin}/muestra/juego-demo.html?vendor=test-vendor&game=test-game&channel=mobile`,
  );
});

test("preview does not expose files outside the selected assets directory", async () => {
  for (const path of [
    "/outside.txt",
    "/%2e%2e%2fprivate.txt",
    "/missing.txt",
  ]) {
    const response = await fetch(`${server.origin}${path}`);
    assert.equal(response.status, 404, path);
    assert.doesNotMatch(await response.text(), /must stay outside/);
  }
});
