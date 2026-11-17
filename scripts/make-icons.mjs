import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const outDir = join(root, "public");
mkdirSync(outDir, { recursive: true });

const BG = [8, 10, 9, 255];
const RING = [44, 58, 52, 255];
const GOLD = [201, 168, 106, 255];
const MINT = [110, 231, 183, 255];

function render(size) {
  const SS = 4;
  const W = size * SS;
  const H = size * SS;
  const hi = Buffer.alloc(W * H * 4);
  const cx = W / 2;
  const cy = H / 2;
  const ringR = size * SS * 0.405;
  const ringW = size * SS * 0.011;
  const lineX = cx;
  const lineY1 = H * 0.255;
  const lineY2 = H * 0.79;
  const lineW = size * SS * 0.0135;
  const dotY = H * 0.25;
  const dotR = size * SS * 0.043;
  const baseY = H * 0.805;
  const baseX1 = W * 0.3;
  const baseX2 = W * 0.7;
  const baseW = size * SS * 0.0055;

  const put = (x, y, c) => {
    const i = (y * W + x) * 4;
    hi[i] = c[0];
    hi[i + 1] = c[1];
    hi[i + 2] = c[2];
    hi[i + 3] = 255;
  };

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let color = BG;
      const dx = x + 0.5 - cx;
      const dy = y + 0.5 - cy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (Math.abs(d - ringR) <= ringW / 2) color = RING;

      if (Math.abs(y + 0.5 - baseY) <= baseW / 2 && x + 0.5 >= baseX1 && x + 0.5 <= baseX2) {
        color = RING;
      }

      if (Math.abs(x + 0.5 - lineX) <= lineW / 2 && y + 0.5 >= lineY1 && y + 0.5 <= lineY2) {
        color = GOLD;
      }

      const ddx = x + 0.5 - lineX;
      const ddy = y + 0.5 - dotY;
      if (Math.sqrt(ddx * ddx + ddy * ddy) <= dotR) color = MINT;

      put(x, y, color);
    }
  }

  const out = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const i = ((y * SS + sy) * W + (x * SS + sx)) * 4;
          r += hi[i];
          g += hi[i + 1];
          b += hi[i + 2];
          a += hi[i + 3];
        }
      }
      const n = SS * SS;
      const i = (y * size + x) * 4;
      out[i] = Math.round(r / n);
      out[i + 1] = Math.round(g / n);
      out[i + 2] = Math.round(b / n);
      out[i + 3] = Math.round(a / n);
    }
  }
  return out;
}

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  crcTable[n] = c >>> 0;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

function png(size, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

for (const [name, size] of [
  ["icon-512.png", 512],
  ["icon-192.png", 192],
  ["apple-touch-icon.png", 180],
]) {
  const file = join(outDir, name);
  writeFileSync(file, png(size, render(size)));
  console.log(`Wrote ${name}`);
}
