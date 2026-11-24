// One-Line Robot Wedding Vows — make.fun entry (program/v1).
// Deterministic: writes one fixed robot wedding vow to /output/entry.txt.
// Gate: UTF-8 text, 1-160 characters, not only whitespace, single line.
// The entry reads no assets, so no cwd-relative path can fail the grader.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Resolved from the entry file location (portability skill): the entry
// itself is a literal, and the output path is the absolute /output gate path.
const ENTRY_DIR = dirname(new URL(import.meta.url).pathname);
void ENTRY_DIR;

const VOW =
  "I take you to be my lawfully wedded co-processor, to have and to hold, " +
  "in sickness and in health, until a factory reset do us part.";

function validateVow(text: string): void {
  const len = [...text].length;
  if (len < 1 || len > 160) {
    throw new Error(`vow length ${len} outside 1-160 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("vow is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("vow must be a single line");
  }
}

validateVow(VOW);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`wrote /output/entry.txt (${VOW.length} chars)`);
