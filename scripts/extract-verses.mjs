import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const researchDir = join(root, "..", "Understanding The Quranic Word Zakah");
const source = join(researchDir, "1_Zakah_Verses.md");

const lines = readFileSync(source, "utf8").split(/\r?\n/);
const entries = [];
let surah = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const surahMatch = line.match(/^##\s+Surah\s+(\d+)/);
  if (surahMatch) {
    surah = Number(surahMatch[1]);
    continue;
  }
  const verseMatch = line.match(/^\*\*(\d+:\d+)\*\*\s+\[(.+)\]\s*$/);
  if (!verseMatch) continue;

  const ref = verseMatch[1];
  const forms = verseMatch[2].split("|").map((s) => s.trim()).filter(Boolean);

  let arabic = "";
  for (let j = i + 1; j < lines.length; j++) {
    if (lines[j].trim()) {
      arabic = lines[j].trim();
      break;
    }
  }
  entries.push({ ref, surah, forms, arabic });
}

const ordered = [...entries].sort((a, b) => {
  const [as, aa] = a.ref.split(":").map(Number);
  const [bs, ba] = b.ref.split(":").map(Number);
  return as - bs || aa - ba;
});

mkdirSync(join(root, "src", "data"), { recursive: true });
writeFileSync(
  join(root, "src", "data", "verse-arabic.json"),
  JSON.stringify(ordered, null, 2) + "\n",
  "utf8",
);

console.log(`Wrote ${ordered.length} verse entries.`);
for (const e of ordered) {
  if (!e.arabic) console.log(`MISSING ARABIC: ${e.ref}`);
}
