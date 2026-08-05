const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function createPNG(width, height, rgbaBuffer) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const ihdrChunk = createChunk('IHDR', ihdr);

  const scanlineLength = width * 4 + 1;
  const rawData = Buffer.alloc(height * scanlineLength);

  for (let y = 0; y < height; y++) {
    const rawOffset = y * scanlineLength;
    rawData[rawOffset] = 0;
    const srcOffset = y * width * 4;
    rgbaBuffer.copy(rawData, rawOffset + 1, srcOffset, srcOffset + width * 4);
  }

  const compressedData = zlib.deflateSync(rawData);
  const idatChunk = createChunk('IDAT', compressedData);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const length = data.length;
  const chunk = Buffer.alloc(8 + length + 4);
  chunk.writeUInt32BE(length, 0);
  chunk.write(type, 4);
  data.copy(chunk, 8);

  const crcBuf = Buffer.concat([Buffer.from(type), data]);
  const crc = crc32(crcBuf);
  chunk.writeUInt32BE(crc, 8 + length);
  return chunk;
}

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    const byte = buf[i];
    crc = crc ^ byte;
    for (let j = 0; j < 8; j++) {
      if (crc & 1) {
        crc = (crc >>> 1) ^ 0xEDB88320;
      } else {
        crc = crc >>> 1;
      }
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function drawIcon(size, isMaskable = false) {
  const buffer = Buffer.alloc(size * size * 4);
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.44;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let r = 37, g = 99, b = 235, a = 255; // #2563eb blue base

      if (!isMaskable && dist > radius) {
        const edge = dist - radius;
        if (edge > 1) {
          a = 0;
        } else {
          a = Math.round(255 * (1 - edge));
        }
      }

      // Draw subtle blue gradient
      const grad = (y / size) * 40;
      r = Math.max(0, Math.min(255, Math.round(37 - grad / 2)));
      g = Math.max(0, Math.min(255, Math.round(99 - grad)));
      b = Math.max(0, Math.min(255, Math.round(235 - grad / 3)));

      const sx = (x - cx) / (size * 0.28);
      const sy = (y - cy) / (size * 0.28);

      const inShield = (Math.abs(sx) <= 0.65 - sy * 0.25) && (sy >= -0.6 && sy <= 0.7);
      const inShieldBorder = (Math.abs(sx) <= 0.75 - sy * 0.25) && (sy >= -0.7 && sy <= 0.8) && !inShield;

      const sunDist = Math.sqrt((sx - 0.4) * (sx - 0.4) + (sy + 0.4) * (sy + 0.4));

      if (sunDist < 0.25) {
        r = 245; g = 158; b = 11; // Gold Sun
      } else if (inShield) {
        r = 255; g = 255; b = 255; // White shield center
      } else if (inShieldBorder) {
        r = 16; g = 185; b = 129; // Emerald accent
      }

      buffer[idx] = r;
      buffer[idx + 1] = g;
      buffer[idx + 2] = b;
      buffer[idx + 3] = a;
    }
  }

  return createPNG(size, size, buffer);
}

const iconsDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

console.log('Generating PWA icons...');
fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), drawIcon(192, false));
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), drawIcon(512, false));
fs.writeFileSync(path.join(iconsDir, 'maskable-192.png'), drawIcon(192, true));
fs.writeFileSync(path.join(iconsDir, 'maskable-512.png'), drawIcon(512, true));
fs.writeFileSync(path.join(__dirname, '..', 'public', 'apple-touch-icon.png'), drawIcon(180, true));
fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon-32.png'), drawIcon(32, false));

console.log('PWA icons successfully generated!');
