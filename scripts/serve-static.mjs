import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT ?? 3000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function resolveRequest(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const safePath = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const requested = resolve(root, `.${safePath}`);

  if (!requested.startsWith(root)) return null;

  const candidates = [
    requested,
    join(requested, "index.html"),
    `${requested}.html`,
  ];

  return candidates.find((candidate) => {
    return existsSync(candidate) && statSync(candidate).isFile();
  }) ?? null;
}

if (!existsSync(join(root, "index.html"))) {
  throw new Error('Static export not found. Run "pnpm run build" before "pnpm start".');
}

createServer((request, response) => {
  const requestUrl = new URL(request.url ?? "/", "http://localhost");
  const file = resolveRequest(requestUrl.pathname);
  const selectedFile = file ?? join(root, "404.html");
  const status = file ? 200 : 404;
  const contentType =
    requestUrl.pathname === "/opengraph-image"
      ? "image/png"
      : contentTypes[extname(selectedFile)] ?? "application/octet-stream";

  response.writeHead(status, {
    "Content-Type": contentType,
  });
  createReadStream(selectedFile).pipe(response);
}).listen(port, () => {
  console.log(`T-RAMOS DEV available at http://localhost:${port}`);
});
