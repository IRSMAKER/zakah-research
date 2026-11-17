import type { Metadata } from "next";
import Link from "next/link";
import { VerseLibrary } from "@/components/VerseLibrary";
import { COUNTS } from "@/data/verses";

export const metadata: Metadata = {
  title: "The 56 Verses",
  description:
    "The complete Z-K-W verse library: Arabic text, a research-consistent rendering, the word-form, the pole, and a note on how each verse fits.",
};

export default function VersesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-60" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="eyebrow">The complete library</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
            All {COUNTS.verses} verses, <span className="italic text-gold">one by one</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Arabic text, a research-consistent rendering, the word-form, the pole, and a
            note on how the verse fits. Use the filters to move by cluster, pole, or fit —
            or search for a reference, a word, or a theme.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-[0.7rem] text-faint">
            <span className="rounded-full border border-line px-2.5 py-1">
              {COUNTS.occurrences} occurrences
            </span>
            <span className="rounded-full border border-line px-2.5 py-1">
              {COUNTS.forms} word forms
            </span>
            <Link
              href="/poles#how-to-read"
              className="rounded-full border border-line px-2.5 py-1 text-muted transition-colors hover:border-gold/50 hover:text-gold"
            >
              How to read the renderings
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-4 sm:px-8">
        <VerseLibrary />

        <div className="mt-12 rounded-2xl border border-line bg-surface/50 p-5 text-[0.8rem] leading-relaxed text-faint">
          <p>
            <span className="text-muted">Note on the text.</span> The Arabic follows the
            study corpus. The English lines are research renderings, not a standard
            translation: “the Increase” renders the noun zakāh, “grow-purify” renders the
            verb zakkā, and “purer” renders the elative azkā. The Arabic is the primary
            text.
          </p>
          <p className="mt-2">
            <span className="text-muted">Note on the count.</span> The collection counts
            distinct verses, not word occurrences: 56 verses carry 59 occurrences of the
            root across 20 forms. Every verse is shown once, with all its forms.
          </p>
        </div>
      </div>
    </>
  );
}
