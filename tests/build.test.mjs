import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { constants } from "node:fs";

test("the deployable frontend is rebuilt from maintained dependencies", async () => {
  const packageJSON = JSON.parse(await readFile("package.json", "utf8"));
  const manifest = JSON.parse(
    await readFile("dist/build-manifest.json", "utf8"),
  );
  const metafile = JSON.parse(
    await readFile("dist/build-metafile.json", "utf8"),
  );
  assert.deepEqual(manifest.dependencies, packageJSON.dependencies);
  for (const [name, version] of Object.entries(manifest.dependencies)) {
    assert.match(version, /^\d+\.\d+\.\d+$/);
    const installed = JSON.parse(
      await readFile(`node_modules/${name}/package.json`, "utf8"),
    );
    assert.equal(
      installed.version,
      version,
      `${name} matches the locked build input`,
    );
  }
  const inputs = Object.keys(metafile.inputs);
  for (const dependency of ["react", "react-dom", "zod"]) {
    assert.ok(
      inputs.some((file) => file.startsWith(`node_modules/${dependency}/`)),
      `${dependency} is compiled from the installed package`,
    );
  }
  assert.ok(
    inputs.every(
      (file) => !file.startsWith("public/") && !file.startsWith("work/"),
    ),
    "captured bundles are not build inputs",
  );
  for (const entry of [
    "socio",
    "socio-lobby",
    "socio-panel",
    "azul",
    "blaze",
    "brasa",
  ]) {
    const source = await readFile(`dist/public/muestra/${entry}.js`, "utf8");
    assert.ok(source.length > 100, `${entry} is generated`);
    assert.doesNotMatch(source, /sourceMappingURL=/);
    assert.ok(manifest.entries.includes(`muestra/${entry}.js`));
    await assert.rejects(access(`dist/public/muestra/${entry}.js.map`), {
      code: "ENOENT",
    });
    await access(`dist/sourcemaps/${entry}.js.map`, constants.R_OK);
  }
  for (const page of [
    "socio",
    "vista-socio-lobby",
    "vista-socio-panel",
    "vista-azul",
    "vista-blaze",
    "vista-brasa",
    "resort",
    "bateupix",
    "cobraya",
    "lunabet",
    "multisala",
    "pinaplay",
    "celuapuestas40",
    "bet30",
    "casinotower30",
  ]) {
    await access(`dist/public/muestra/${page}.html`, constants.R_OK);
  }
  assert.ok(
    (await readFile("dist/public/muestra/app.css", "utf8")).includes(
      `tailwindcss v${packageJSON.devDependencies.tailwindcss}`,
    ),
  );
});
