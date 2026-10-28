import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FONT_PREFIX = "/assets/external/fonts.gstatic.com";
const CSS_DIRECTORY = "assets/external/fonts.googleapis.com";
const MANIFEST_PATH = `${FONT_PREFIX}/manifest.json`;
const MAX_FONT_BYTES = 8 * 1024 * 1024;
const GOOGLE_FONTS_REVISION = "9862abc066c9b83bf84c3e8ed1fc2d8d48f9bbf0";

// Each file was checked separately in the official google/fonts repository.
// Keep each family's own copyright notice and reserved font names intact.
const LICENSE_SOURCES = {
  Anton: [
    "anton",
    "ee67e6ee22790b7929f1a3769ca2801d565c64b5a9096942c1adf5596de9c9e4",
  ],
  Archivo: [
    "archivo",
    "108b4e57c9c796d3d38d0428ca7ee39de47ad93187302718d9b2d8864b9b716b",
  ],
  Barlow: [
    "barlow",
    "186d750eb496a4c17a76385f82be6aea2ac1cf2de074a811d63786cf374ea73f",
  ],
  "Barlow Condensed": [
    "barlowcondensed",
    "186d750eb496a4c17a76385f82be6aea2ac1cf2de074a811d63786cf374ea73f",
  ],
  "Bebas Neue": [
    "bebasneue",
    "72082f6cb4d04be2ecf7cc7d9e1e7d73787f0af8a5a278a47cade70c16b78341",
  ],
  "Big Shoulders Display": [
    "bigshouldersdisplay",
    "338f9c050f19daeda1d597243faf79f3a3d437c338af58cb7047617d0ce08771",
  ],
  Figtree: [
    "figtree",
    "140d37233e7f3ce7313798befa9600893bcceaf41a55fa0fa5ad52f7f657a268",
  ],
  "IBM Plex Mono": [
    "ibmplexmono",
    "7e6b2818edbd8f6a01ae80641cc8f16a51080d08fb4e532be3a0b6f74adb07da",
  ],
  Inter: [
    "inter",
    "5b9321a4298cfeb6b34354164a1c3afc3db114569984c502b9b35d988fd58c57",
  ],
  Manrope: [
    "manrope",
    "58172e0c0fac2cda8a37b348164bb55e44b0e69051e557e92b1d3f6910141f7b",
  ],
  Oswald: [
    "oswald",
    "0fd731a904b729a4e02eaf5e8ebd06783edd9abe400e8882760160230675b652",
  ],
  Roboto: [
    "roboto",
    "061402327a96aadb0bfb694a960ed289ecd38d383e396243831ab81feb109c41",
  ],
  "Roboto Condensed": [
    "robotocondensed",
    "0e4cc6ece88573545be2ed25835363662a6182ba4a4c1b5c8feda52add30e8a6",
  ],
  Saira: [
    "saira",
    "f2665d4718b452b3818a877191355ac884a6b9b419d35408fe7ee487e9e8f30f",
  ],
  "Saira Condensed": [
    "sairacondensed",
    "0e2ccc5da1dd979f08ba82bca2fb61592506a1e58d3cbfc26d904f0db71bd812",
  ],
  Unbounded: [
    "unbounded",
    "31e5d4e83955e7103c34570dd49b0570ef490800bd65b42923c0dd02445263b3",
  ],
};

const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const diskPath = (publicRoot, assetPath) =>
  path.join(publicRoot, assetPath.replace(/^\//, ""));
const urlPattern = () => /url\(\s*(?:"([^"]+)"|'([^']+)'|([^\s)]+))\s*\)/g;

async function readOptional(file) {
  try {
    return await readFile(file);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

async function writeAtomic(file, bytes) {
  await mkdir(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.tmp`;
  await writeFile(temporary, bytes);
  await rename(temporary, file);
}

function fontAsset(reference) {
  const sourceUrl = reference.startsWith(FONT_PREFIX + "/")
    ? "https://fonts.gstatic.com" + reference.slice(FONT_PREFIX.length)
    : reference;
  const url = new URL(sourceUrl);
  if (
    url.protocol !== "https:" ||
    url.host !== "fonts.gstatic.com" ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    !/^\/s\/[a-z0-9]+\/v\d+\/[A-Za-z0-9._-]+\.woff2$/.test(url.pathname)
  ) {
    throw new Error(`Unsupported font resource: ${reference}`);
  }
  return { sourceUrl: url.href, path: FONT_PREFIX + url.pathname };
}

function property(block, name, fallback = "") {
  const value = block
    .match(new RegExp(`\\b${name}\\s*:\\s*([^;]+)`))?.[1]
    .trim();
  return value?.replace(/^(['"])(.*)\1$/, "$2") ?? fallback;
}

function validateFont(bytes, sourceUrl) {
  if (
    bytes.length < 48 ||
    bytes.length > MAX_FONT_BYTES ||
    bytes.toString("ascii", 0, 4) !== "wOF2" ||
    bytes.readUInt32BE(8) !== bytes.length ||
    bytes.readUInt16BE(12) === 0
  ) {
    throw new Error(`Invalid WOFF2 file: ${sourceUrl}`);
  }
}

async function mapLimited(items, concurrency, operation) {
  const result = new Array(items.length),
    errors = [];
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (next < items.length) {
        const index = next++;
        try {
          result[index] = await operation(items[index]);
        } catch (error) {
          errors.push(error);
        }
      }
    }),
  );
  if (errors.length)
    throw new AggregateError(
      errors,
      errors.map((error) => error.message).join("\n"),
    );
  return result;
}

/**
 * Localize the exact versioned font URLs already declared in the checked-in CSS.
 * The default path (also used by installDesignEditor) NEVER accesses the network
 * or removes @font-face blocks. Only an explicit download:true/--download may
 * fetch static fonts.gstatic.com files and the pinned official license files.
 */
export async function localizeSharedFonts({
  publicRoot = path.resolve("public"),
  download = false,
  check = false,
  concurrency = 4,
  fetchImpl = globalThis.fetch,
} = {}) {
  if (check && download)
    throw new Error("--check and --download cannot be combined");
  if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 6) {
    throw new Error("Font download concurrency must be between 1 and 6");
  }
  const manifestFile = diskPath(publicRoot, MANIFEST_PATH);
  const previousBytes = await readOptional(manifestFile);
  const previous = previousBytes
    ? JSON.parse(previousBytes.toString("utf8"))
    : null;
  if (previous && previous.schemaVersion !== 1)
    throw new Error("Unsupported font manifest version");
  const previousFonts = new Map(
    previous?.fonts.map((font) => [font.sourceUrl, font]) ?? [],
  );
  const previousStyles = new Map(
    previous?.stylesheets.map((css) => [css.path, css]) ?? [],
  );
  const fonts = new Map(),
    families = new Set(),
    stylesheets = [];
  let faces = 0,
    downloadedFonts = 0,
    downloadedLicenses = 0;

  for (const name of (await readdir(path.join(publicRoot, CSS_DIRECTORY)))
    .filter((name) => name.endsWith(".css"))
    .sort()) {
    const assetPath = "/" + CSS_DIRECTORY + "/" + name;
    const css = await readFile(diskPath(publicRoot, assetPath), "utf8");
    let count = 0;
    for (const [block] of css.matchAll(/@font-face\s*\{[^}]*\}/g)) {
      count++;
      faces++;
      const family = property(block, "font-family");
      if (!Object.hasOwn(LICENSE_SOURCES, family))
        throw new Error(`No verified font license for ${family}`);
      families.add(family);
      for (const match of block.matchAll(urlPattern())) {
        const asset = fontAsset(match[1] ?? match[2] ?? match[3]);
        if (!fonts.has(asset.sourceUrl))
          fonts.set(asset.sourceUrl, { ...asset, declarations: [] });
        fonts.get(asset.sourceUrl).declarations.push({
          stylesheet: assetPath,
          family,
          style: property(block, "font-style", "normal"),
          weight: property(block, "font-weight", "normal"),
          unicodeRange: property(block, "unicode-range"),
        });
      }
    }
    const localized = css.replace(
      urlPattern(),
      (match, double, single, bare) => {
        const reference = double ?? single ?? bare;
        const asset = fontAsset(reference);
        return match.replace(reference, asset.path);
      },
    );
    stylesheets.push({ path: assetPath, css, localized, faces: count });
  }
  if (!stylesheets.length || !fonts.size)
    throw new Error("No declared Google font stylesheets found");

  async function acquire(asset, type, expectedHash) {
    const target = diskPath(publicRoot, asset.path);
    let bytes = await readOptional(target),
      retrieval = null,
      fetched = false;
    if (!bytes) {
      if (!download)
        throw new Error(
          `Missing font asset ${asset.path}; run node scripts/localize-fonts.mjs --download`,
        );
      const response = await fetchImpl(asset.sourceUrl, {
        redirect: "error",
        signal: AbortSignal.timeout(30000),
      });
      if (response.status !== 200)
        throw new Error(
          `HTTP ${response.status} downloading ${asset.sourceUrl}`,
        );
      const contentType = (response.headers.get("content-type") ?? "")
        .split(";")[0]
        .trim()
        .toLowerCase();
      const permittedMime =
        type === "font"
          ? ["font/woff2", "application/font-woff2"]
          : ["text/plain"];
      if (!permittedMime.includes(contentType))
        throw new Error(
          `Unexpected MIME ${contentType} for ${asset.sourceUrl}`,
        );
      const contentLength = Number(response.headers.get("content-length"));
      if (contentLength > MAX_FONT_BYTES)
        throw new Error(`Oversized font asset: ${asset.sourceUrl}`);
      bytes = Buffer.from(await response.arrayBuffer());
      retrieval = { kind: "download", status: response.status, contentType };
      fetched = true;
    }
    if (type === "font") validateFont(bytes, asset.sourceUrl);
    const digest = sha256(bytes);
    if (expectedHash && digest !== expectedHash)
      throw new Error(`SHA256 integrity mismatch for ${asset.path}`);
    if (fetched) {
      await writeAtomic(target, bytes);
      if (type === "font") downloadedFonts++;
      else downloadedLicenses++;
    }
    return { bytes, sha256: digest, retrieval };
  }

  // Validate everything before changing any CSS. A failed download leaves its
  // original URL and every declaration intact; successfully fetched files can
  // be reused on the next explicit attempt.
  const fontRecords = await mapLimited(
    [...fonts.values()].sort((a, b) => a.sourceUrl.localeCompare(b.sourceUrl)),
    concurrency,
    async (font) => {
      const old = previousFonts.get(font.sourceUrl);
      const file = await acquire(font, "font", old?.sha256);
      return {
        ...font,
        bytes: file.bytes.length,
        sha256: file.sha256,
        retrieval: old?.retrieval ??
          file.retrieval ?? { kind: "preexisting-local" },
      };
    },
  );
  const licenses = await mapLimited(
    [...families].sort(),
    concurrency,
    async (family) => {
      const [slug, expectedHash] = LICENSE_SOURCES[family];
      const asset = {
        family,
        license: "OFL-1.1",
        path: `${FONT_PREFIX}/licenses/${slug}/OFL.txt`,
        sourceUrl: `https://raw.githubusercontent.com/google/fonts/${GOOGLE_FONTS_REVISION}/ofl/${slug}/OFL.txt`,
        sourceRevision: GOOGLE_FONTS_REVISION,
      };
      const file = await acquire(asset, "license", expectedHash);
      const record = {
        ...asset,
        sha256: file.sha256,
        bytes: file.bytes.length,
        notice: file.bytes
          .toString("utf8")
          .split(/\r?\n\r?\n/)[0]
          .trim(),
      };
      if (family === "Roboto Condensed") {
        // These exact 3.008 WOFF2 files retain an Apache name-table URL. Google
        // Fonts' METADATA explicitly distributes that same version under OFL.
        // Preserve both notices and the version evidence without editing fonts.
        const legacy = {
          license: "Apache-2.0",
          path: `${FONT_PREFIX}/licenses/robotocondensed/APACHE-2.0.txt`,
          sourceRevision: "7b64519fb0fd8b03b563b32ff55d2362db2c90bf",
          sourceUrl:
            "https://raw.githubusercontent.com/google/fonts/7b64519fb0fd8b03b563b32ff55d2362db2c90bf/apache/robotocondensed/LICENSE.txt",
        };
        const legacyFile = await acquire(
          legacy,
          "license",
          "cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30",
        );
        const metadata = {
          path: `${FONT_PREFIX}/licenses/robotocondensed/METADATA.pb`,
          sourceRevision: GOOGLE_FONTS_REVISION,
          sourceUrl: `https://raw.githubusercontent.com/google/fonts/${GOOGLE_FONTS_REVISION}/ofl/robotocondensed/METADATA.pb`,
        };
        const metadataFile = await acquire(
          metadata,
          "license",
          "2661545ea47047600f634d2b2485b9794758c1088b2dac15024ebc6c20fc1f47",
        );
        record.embeddedLicenseUrl =
          "http://www.apache.org/licenses/LICENSE-2.0";
        record.additionalNotices = [
          {
            ...legacy,
            sha256: legacyFile.sha256,
            bytes: legacyFile.bytes.length,
          },
        ];
        record.sourceMetadata = {
          ...metadata,
          sha256: metadataFile.sha256,
          bytes: metadataFile.bytes.length,
        };
        record.note =
          "Version 3.008: OFL distribution metadata and legacy Apache reference inside the unmodified font; both notices are included.";
      }
      return record;
    },
  );
  const manifest = {
    schemaVersion: 1,
    description:
      "Exact Google Fonts files declared by Maker; no font conversion or subsetting.",
    stylesheets: stylesheets.map((css) => ({
      path: css.path,
      sourceSha256:
        previousStyles.get(css.path)?.sourceSha256 ?? sha256(css.css),
      sha256: sha256(css.localized),
      faces: css.faces,
    })),
    fonts: fontRecords,
    licenses,
  };
  const serialized = JSON.stringify(manifest, null, 2) + "\n";
  if (check) {
    if (stylesheets.some((css) => css.css !== css.localized))
      throw new Error(
        "Remote font URLs remain in CSS; run node scripts/localize-fonts.mjs",
      );
    if (!previousBytes || previousBytes.toString("utf8") !== serialized)
      throw new Error(
        "Font manifest is missing or out of date; run node scripts/localize-fonts.mjs",
      );
  } else {
    for (const css of stylesheets)
      if (css.css !== css.localized)
        await writeAtomic(diskPath(publicRoot, css.path), css.localized);
    if (previousBytes?.toString("utf8") !== serialized)
      await writeAtomic(manifestFile, serialized);
  }
  return {
    stylesheets: stylesheets.length,
    faces,
    fonts: fontRecords.length,
    licenses: licenses.length,
    downloadedFonts,
    downloadedLicenses,
  };
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const options = {};
  try {
    const args = process.argv.slice(2);
    for (let index = 0; index < args.length; index++) {
      const flag = args[index];
      if (flag === "--download") options.download = true;
      else if (flag === "--check") options.check = true;
      else if (flag === "--root" && args[index + 1])
        options.publicRoot = path.resolve(args[++index]);
      else if (flag === "--concurrency" && args[index + 1])
        options.concurrency = Number(args[++index]);
      else
        throw new Error(
          "Usage: node scripts/localize-fonts.mjs [--download | --check] [--root public] [--concurrency 4]",
        );
    }
    console.log(JSON.stringify(await localizeSharedFonts(options)));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
