import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ConclusionView } from "@/components/ConclusionView";
import {
  conclusionDetailedMarkdown,
  conclusionSimpleMarkdown,
} from "@/data/documents";

export const metadata: Metadata = {
  title: "Conclusion",
  description:
    "The settled meaning of Z-K-W: growth-through-purity — the release of a portion that cleanses what remains and causes it to increase. Read it in plain language or through the full twelve-section argument.",
};

const stripTitle = (value: string) => value.replace(/^#\s+.*\r?\n/, "");

export default function ConclusionPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-70" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">The conclusion</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            One root. Three poles.{" "}
            <span className="italic text-gold">One increase.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            The study ends where it began: with the word. But the word is now a structure —
            growth-through-purity: the release of a portion that cleanses what remains and
            causes it to increase.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              ["STATE", "purity-growth"],
              ["ACT", "the giving"],
              ["GRANT", "the Purifier"],
            ].map(([pole, gloss]) => (
              <div key={pole} className="card-flat p-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {pole}
                </p>
                <p className="mt-1.5 font-display text-lg text-ink">{gloss}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/30">
        <div className="mx-auto w-full max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-18">
          <p className="font-display text-[1.4rem] leading-[1.45] tracking-[-0.01em] text-ink sm:text-[1.8rem]">
            “Z-K-W names{" "}
            <span className="text-gold">growth-through-purity</span> — the release of a
            portion that cleanses what remains and causes it to increase.”
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            The zakāh is both what you are and what you do. Its measure is not a percentage
            but a direction: outward, toward the Face, for the growth of what remains.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <ConclusionView
          simple={stripTitle(conclusionSimpleMarkdown)}
          detailed={stripTitle(conclusionDetailedMarkdown)}
        />

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="text-sm text-muted">
            The argument is only as strong as its worst verse.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/verses" className="btn">
              Check the 56 verses
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/appendix" className="btn btn-gold">
              Read the full study
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
