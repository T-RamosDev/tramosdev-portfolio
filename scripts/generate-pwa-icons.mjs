import { mkdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const source = await readFile(new URL("../app/icon.svg", import.meta.url));
const outputDirectory = new URL("../public/", import.meta.url);

await mkdir(outputDirectory, { recursive: true });

async function createIcon(filename, size, inset = 0) {
  const canvasSize = size - inset * 2;
  const logo = await sharp(source)
    .resize(canvasSize, canvasSize)
    .png({ compressionLevel: 9 })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: "#09090B",
    },
  })
    .composite([{ input: logo, left: inset, top: inset }])
    .png({ compressionLevel: 9 })
    .toFile(fileURLToPath(new URL(filename, outputDirectory)));
}

await Promise.all([
  createIcon("icon-192.png", 192, 8),
  createIcon("icon-512.png", 512, 20),
  createIcon("icon-maskable-512.png", 512, 92),
  createIcon("apple-touch-icon.png", 180, 8),
]);

console.log("PWA icons generated in public/");
