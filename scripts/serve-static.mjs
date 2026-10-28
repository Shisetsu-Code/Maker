import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { realpath, stat } from "node:fs/promises";
import {
  dirname,
  extname,
  isAbsolute,
  relative,
  resolve,
  sep,
} from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import { handleDemoRequest } from "../src/demo-api.mjs";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
  ".wasm": "application/wasm",
  ".txt": "text/plain; charset=utf-8",
};

/** Preview helper for browser tests. Cloudflare routing is verified separately with Wrangler. */
export async function startStaticServer({
  rootDir = resolve(repository, "dist/public"),
  port = 0,
  host = "127.0.0.1",
} = {}) {
  const root = await realpath(rootDir);
  const insideRoot = (path) => {
    const rel = relative(root, path);
    return rel !== ".." && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
  };
  const server = createServer(async (incoming, outgoing) => {
    const fail = (status, message) => {
      outgoing.writeHead(status, {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      });
      outgoing.end(message);
    };
    try {
      const url = new URL(incoming.url, `http://${incoming.headers.host}`);
      if (url.pathname.startsWith("/api/")) {
        const method = incoming.method || "GET";
        const request = new Request(url, {
          method,
          headers: incoming.headers,
          ...(["GET", "HEAD"].includes(method)
            ? {}
            : { body: Readable.toWeb(incoming), duplex: "half" }),
        });
        const response = await handleDemoRequest(request);
        outgoing.writeHead(
          response.status,
          Object.fromEntries(response.headers),
        );
        if (response.body && method !== "HEAD")
          Readable.fromWeb(response.body).pipe(outgoing);
        else outgoing.end();
        return;
      }
      if (!["GET", "HEAD"].includes(incoming.method))
        return fail(405, "Method not allowed");
      let pathname;
      try {
        pathname = decodeURIComponent(url.pathname);
      } catch {
        return fail(400, "Invalid path");
      }
      if (pathname.startsWith("/muestra/games-cartas/"))
        pathname = pathname.slice("/muestra".length);
      if (pathname.endsWith("/")) pathname += "index.html";
      const candidate = resolve(root, `.${pathname}`);
      if (!insideRoot(candidate)) return fail(404, "Not found");
      let file;
      let metadata;
      try {
        file = await realpath(candidate);
        if (!insideRoot(file)) return fail(404, "Not found");
        metadata = await stat(file);
        if (!metadata.isFile()) return fail(404, "Not found");
      } catch {
        return fail(404, "Not found");
      }
      outgoing.writeHead(200, {
        "content-type":
          mimeTypes[extname(file).toLowerCase()] || "application/octet-stream",
        "content-length": metadata.size,
        "cache-control": "no-store",
      });
      if (incoming.method === "HEAD") outgoing.end();
      else
        createReadStream(file)
          .on("error", (error) => outgoing.destroy(error))
          .pipe(outgoing);
    } catch (error) {
      if (outgoing.headersSent) outgoing.destroy(error);
      else fail(500, "Preview server error");
    }
  });
  await new Promise((resolveListen, reject) => {
    server.once("error", reject);
    server.listen(port, host, () => {
      server.off("error", reject);
      resolveListen();
    });
  });
  return {
    origin: `http://${host}:${server.address().port}`,
    close: () =>
      new Promise((resolveClose, reject) => {
        server.close((error) => (error ? reject(error) : resolveClose()));
        server.closeAllConnections();
      }),
  };
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const option = (name) => {
    const index = process.argv.indexOf(name);
    return index < 0 ? undefined : process.argv[index + 1];
  };
  const preview = await startStaticServer({
    rootDir: resolve(
      option("--root") ||
        process.env.DEMO_ASSET_DIR ||
        resolve(repository, "dist/public"),
    ),
    port: Number(option("--port") || process.env.PORT || 8801),
  });
  console.log(`Maker preview: ${preview.origin}`);
  for (const signal of ["SIGINT", "SIGTERM"])
    process.once(signal, async () => {
      await preview.close();
      process.exit(0);
    });
}
