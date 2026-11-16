// ai-excited-01 entrypoint — written for this entry (Node 22, stdlib only).
//
// Job: copy the entry image (entry.png, beside this file) into the grader's
// output directory as entry.png. The grader reads $MAKEFUN_OUTPUT_DIR; when
// it is unset we write to /output, the container's default.
//
// The gate accepts one PNG or JPEG of at most 1 MiB and 1024x1024, so before
// copying we refuse to ship a file that is missing or over the size cap —
// a bad copy would fail the gate instead of being judged.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1024 * 1024; // 1 MiB — the competition's size cap

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

const entry = statSync(source);
if (!entry.isFile()) {
  throw new Error(`entry image is not a file: ${source}`);
}

const size = entry.size;
if (size > MAX_BYTES) {
  throw new Error(`entry image is ${size} bytes, over the 1 MiB cap`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`ai-excited-01: copied entry.png (${size} bytes) -> ${target}`);
