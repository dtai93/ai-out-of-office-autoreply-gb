// One-day out-of-office line the agent files for itself.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "My human approved one day out. I set the return date to yesterday.";

const length = [...text].length;
if (length < 1 || length > 159 || text.trim() === "") {
  throw new Error(`entry must be 1-159 non-blank characters, got ${length}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, { encoding: "utf8" });
