import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import {
  access,
  cp,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { localizeSharedFonts } from "../scripts/localize-fonts.mjs";

const repository = fileURLToPath(new URL("..", import.meta.url));
const stylesheet = "assets/external/fonts.googleapis.com/css2.b4918935dc26.css";
const fontPath = "assets/external/fonts.gstatic.com/s/inter/v20/test.woff2";
const fontUrl = "https://fonts.gstatic.com/s/inter/v20/test.woff2";
const manifestPath = "assets/external/fonts.gstatic.com/manifest.json";
const css = `/* Preserve every weight and subset. */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url(${fontUrl}) format('woff2');
  unicode-range: U+0000-00FF;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url('${fontUrl}') format('woff2');
  unicode-range: U+0100-017F;
}
`;
const fontBytes = Buffer.alloc(52);
fontBytes.write("wOF2");
fontBytes.writeUInt32BE(fontBytes.length, 8);
fontBytes.writeUInt16BE(1, 12);
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

async function fixture(run) {
  const temporary = await mkdtemp(path.join(tmpdir(), "maker-fonts-"));
  const publicRoot = path.join(temporary, "public");
  const originalCwd = process.cwd();
  try {
    await mkdir(path.dirname(path.join(publicRoot, stylesheet)), {
      recursive: true,
    });
    await writeFile(path.join(publicRoot, stylesheet), css);
    await cp(
      path.join(
        repository,
        "public/assets/external/fonts.gstatic.com/licenses/inter",
      ),
      path.join(publicRoot, "assets/external/fonts.gstatic.com/licenses/inter"),
      { recursive: true },
    );
    // The original installer resolves public from cwd; keep its regression
    // entirely inside the fixture instead of letting it rewrite real assets.
    process.chdir(temporary);
    await run(publicRoot);
  } finally {
    process.chdir(originalCwd);
    await rm(temporary, { recursive: true, force: true });
  }
}

async function storeFont(publicRoot, bytes = fontBytes) {
  await mkdir(path.dirname(path.join(publicRoot, fontPath)), {
    recursive: true,
  });
  await writeFile(path.join(publicRoot, fontPath), bytes);
}

test("the offline installer neither downloads nor deletes unavailable font variants", async () => {
  await fixture(async (publicRoot) => {
    let calls = 0;
    await assert.rejects(
      localizeSharedFonts({
        publicRoot,
        fetchImpl: async () => {
          calls++;
          throw new Error("Network forbidden");
        },
      }),
      /missing[\s\S]*--download/i,
    );
    assert.equal(calls, 0);
    assert.equal(
      await readFile(path.join(publicRoot, stylesheet), "utf8"),
      css,
    );
  });
});

test("available local fonts preserve every declaration and make repeated installs idempotent", async () => {
  await fixture(async (publicRoot) => {
    await storeFont(publicRoot);
    const fetchImpl = async () => {
      throw new Error("Network forbidden");
    };
    await localizeSharedFonts({ publicRoot, fetchImpl });
    const localized = await readFile(path.join(publicRoot, stylesheet), "utf8");
    assert.equal(localized, css.replaceAll(fontUrl, "/" + fontPath));
    const manifest = await readFile(
      path.join(publicRoot, manifestPath),
      "utf8",
    );
    await localizeSharedFonts({ publicRoot, fetchImpl });
    assert.equal(
      await readFile(path.join(publicRoot, stylesheet), "utf8"),
      localized,
    );
    assert.equal(
      await readFile(path.join(publicRoot, manifestPath), "utf8"),
      manifest,
    );
  });
});

test("opt-in downloads keep exact WOFF2 bytes, deduplicate requests and record provenance", async () => {
  await fixture(async (publicRoot) => {
    const calls = [];
    const fetchImpl = async (url, options) => {
      calls.push(url);
      assert.equal(options.redirect, "error");
      return new Response(fontBytes, {
        status: 200,
        headers: { "content-type": "font/woff2" },
      });
    };
    await localizeSharedFonts({ publicRoot, download: true, fetchImpl });
    assert.deepEqual(calls, [fontUrl]);
    assert.deepEqual(
      await readFile(path.join(publicRoot, fontPath)),
      fontBytes,
    );
    assert.equal(
      await readFile(path.join(publicRoot, stylesheet), "utf8"),
      css.replaceAll(fontUrl, "/" + fontPath),
    );
    const manifest = JSON.parse(
      await readFile(path.join(publicRoot, manifestPath), "utf8"),
    );
    assert.equal(manifest.fonts.length, 1);
    assert.equal(manifest.fonts[0].sourceUrl, fontUrl);
    assert.equal(manifest.fonts[0].sha256, sha256(fontBytes));
    assert.equal(manifest.fonts[0].declarations.length, 2);
    assert.equal(manifest.fonts[0].retrieval.status, 200);
    assert.equal(manifest.licenses[0].family, "Inter");
    assert.match(
      manifest.licenses[0].sourceUrl,
      /^https:\/\/raw\.githubusercontent\.com\/google\/fonts\/[a-f0-9]{40}\/ofl\/inter\/OFL\.txt$/,
    );
  });
});

for (const response of [
  { name: "HTTP errors", status: 404, mime: "font/woff2", bytes: fontBytes },
  {
    name: "non-font MIME types",
    status: 200,
    mime: "text/html",
    bytes: fontBytes,
  },
  {
    name: "invalid WOFF2 signatures",
    status: 200,
    mime: "font/woff2",
    bytes: Buffer.from("not a font"),
  },
]) {
  test(`failed downloads reject ${response.name} and leave CSS unchanged`, async () => {
    await fixture(async (publicRoot) => {
      await assert.rejects(
        localizeSharedFonts({
          publicRoot,
          download: true,
          fetchImpl: async () =>
            new Response(response.bytes, {
              status: response.status,
              headers: { "content-type": response.mime },
            }),
        }),
      );
      assert.equal(
        await readFile(path.join(publicRoot, stylesheet), "utf8"),
        css,
      );
      await assert.rejects(access(path.join(publicRoot, fontPath)), {
        code: "ENOENT",
      });
    });
  });
}

test("an existing manifest detects altered font bytes instead of accepting drift", async () => {
  await fixture(async (publicRoot) => {
    await storeFont(publicRoot);
    await localizeSharedFonts({ publicRoot });
    const altered = Buffer.from(fontBytes);
    altered[altered.length - 1] = 1;
    await storeFont(publicRoot, altered);
    await assert.rejects(
      localizeSharedFonts({ publicRoot }),
      /sha256|hash|integrity/i,
    );
  });
});

test("checked-in font stylesheets and their complete manifest validate without network", async () => {
  const result = await localizeSharedFonts({
    publicRoot: path.join(repository, "public"),
    check: true,
    fetchImpl: async () => {
      throw new Error("Network forbidden");
    },
  });
  assert.equal(result.stylesheets, 8);
  assert.equal(result.fonts, 121);
  assert.equal(result.faces, 391);
  assert.equal(result.licenses, 16);
});

test("Roboto Condensed retains its embedded Apache notice alongside the official OFL distribution license", async () => {
  const manifest = JSON.parse(
    await readFile(path.join(repository, "public", manifestPath), "utf8"),
  );
  const license = manifest.licenses.find(
    (item) => item.family === "Roboto Condensed",
  );
  assert.equal(license.license, "OFL-1.1");
  assert.equal(
    license.embeddedLicenseUrl,
    "http://www.apache.org/licenses/LICENSE-2.0",
  );
  const notice = license.additionalNotices.find(
    (item) => item.license === "Apache-2.0",
  );
  const body = await readFile(
    path.join(repository, "public", notice.path),
    "utf8",
  );
  assert.match(body, /Apache License\s+Version 2\.0/);
  assert.equal(sha256(body), notice.sha256);
  const metadata = await readFile(
    path.join(repository, "public", license.sourceMetadata.path),
    "utf8",
  );
  assert.match(metadata, /license: "OFL"/);
  assert.match(metadata, /Roboto_v3\.008\.zip/);
});
