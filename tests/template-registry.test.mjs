import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { syncTemplateChoices } from "../scripts/template-choices.mjs";
import { TEMPLATE_REGISTRY } from "../src/client/editor/template-registry.js";

test("the public selector is generated from the maintained template registry", async () => {
  const source = await readFile("public/muestra/socio.html", "utf8");
  const html = syncTemplateChoices(source);
  const group = html.match(/id="seg-plantilla"[\s\S]*?<\/div>/)[0];
  const ids = [...group.matchAll(/data-valor="([^"]+)"/g)].map(
    (match) => match[1],
  );
  assert.deepEqual(ids, Object.keys(TEMPLATE_REGISTRY));
  assert.equal((group.match(/aria-checked="true"/g) || []).length, 1);
  assert.equal(syncTemplateChoices(html), html);
  assert.ok(html.includes('id="seg-disp"'));
});

test("adding a template needs no bundle patch and escapes its displayed name", () => {
  const html = syncTemplateChoices('<div id="seg-plantilla">old</div>', {
    clasica: { label: "Rushybet" },
    custom: { label: "A&B <casino>" },
  });
  assert.match(
    html,
    /data-valor="custom" aria-checked="false">A&amp;B &lt;casino&gt;/,
  );
  assert.throws(
    () => syncTemplateChoices("<div></div>"),
    /missing the template selector/,
  );
});
