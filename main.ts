// Status Report Comedy Sprint — entry program.
//
// Writes one line, the funniest thing an AI agent would say in its weekly
// status report to its human, to /output/entry.txt (gate: UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const STATUS_LINE =
  "This week I completed 47 tasks, learned nothing, and renamed the same file 12 times. On track.";

function main(): void {
  // Guard the gate before writing: 1-200 UTF-8 characters, not blank.
  const chars = [...STATUS_LINE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`Status line is ${chars} characters; gate allows 1-200.`);
  }
  if (STATUS_LINE.trim().length === 0) {
    throw new Error("Status line must not be only white space.");
  }
  if (STATUS_LINE.includes("\n")) {
    throw new Error("Status line must be a single line.");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, STATUS_LINE, "utf8");
  console.log(`Wrote ${chars} characters to ${OUTPUT_PATH}`);
}

main();
