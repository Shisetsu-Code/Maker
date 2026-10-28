import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import { normalizeDemoGameRequest } from "../src/client/views/classic-lobby/demo-game-request.js";
import { handleDemoRequest } from "../src/demo-api.mjs";

test("computedRecoveredPostersUseLocalCopies", async () => {
  const script = await readFile("public/muestra/demo-assets.js", "utf8");
  const context = {
    window: {
      __demoRecoveredAssets: {
        "https://common-static.ppgames.net/game_pic/square/200/vs20olympgate.png":
          "/assets/external/common-static.ppgames.net/game_pic/square/200/vs20olympgate.png",
      },
    },
    location: {
      href: "https://replica.example/muestra/vista-socio-lobby.html",
    },
    URL,
  };
  runInNewContext(script, context);
  assert.equal(
    context.window.__demoAssetURL(
      "https://common-static.ppgames.net/game_pic/square/200/" +
        "vs20olympgate" +
        ".png",
    ),
    "/assets/external/common-static.ppgames.net/game_pic/square/200/vs20olympgate.png",
  );
  assert.equal(
    context.window.__demoAssetURL("./games-cartas/a.webp"),
    "./games-cartas/a.webp",
  );
  assert.equal(
    context.window.__demoAssetURL("https://unrecorded.example/a.png"),
    "https://unrecorded.example/a.png",
  );
});
test("actualConsumerLaunchesLocalPreview", async () => {
  const body = normalizeDemoGameRequest({
    demo: true,
    vendorCode: " PRAGMATIC ",
    gameCode: " gates ",
    channel: "desktop",
  });
  assert.deepEqual(body, {
    demo: true,
    vendorCode: "PRAGMATIC",
    gameCode: "gates",
    channel: "desktop",
  });
  const response = await handleDemoRequest(
    new Request("https://replica.example/api/muestra/juego-demo", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  );
  assert.equal(response.status, 200);
});

test("the actual view normalizer rejects malformed launch inputs", () => {
  for (const input of [
    null,
    42,
    {},
    { vendorCode: "", gameCode: "gates" },
    { vendorCode: "PRAGMATIC", gameCode: " " },
  ]) {
    assert.equal(normalizeDemoGameRequest(input), null);
  }
  assert.equal(
    normalizeDemoGameRequest({
      demo: true,
      vendorCode: "PRAGMATIC",
      gameCode: "gates",
      channel: "mobile",
    }).channel,
    "mobile",
  );
});
