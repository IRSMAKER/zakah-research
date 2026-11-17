export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function quranUrl(ref: string): string {
  const [surah, ayahPart] = ref.split(":");
  const ayah = ayahPart.split("-")[0];
  return `https://quran.com/${surah}/${ayah}`;
}

export function refLabel(ref: string): string {
  return ref.replace("-", "–");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
