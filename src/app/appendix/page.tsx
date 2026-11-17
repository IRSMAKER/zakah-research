import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { researchMarkdown } from "@/data/documents";
import { ZakahLegend } from "@/components/ZakahTerm";

export const metadata: Metadata = {
  title: "Full Research",
  description:
    "The complete 18-part research document: the settled core, the five clusters, the noun lexicon, the verb voices, the law of increase, the breach pattern, the tables, the bridges, and the settled meaning.",
};

function partsOf(markdown: string) {
  return Array.from(markdown.matchAll(/^## Part (\d+) — (.+)$/gm)).map((match) => ({
    number: Number(match[1]),
    title: match[2].trim(),
  }));
}

export default function AppendixPage() {
  const parts = partsOf(researchMarkdown);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-60" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">Appendix</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
            The full <span className="italic text-gold">research document</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Eighteen parts and a conclusion: the settled core, all five clusters, the noun
            lexicon, the verb voices, the law of increase, the breach pattern, the tables,
            the bridges, and the final meaning.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/journey" className="btn">
              <ArrowLeft className="size-4" />
              Back to the journey
            </Link>
            <a href="/research-zakāh.md" download className="btn">
              <Download className="size-4" />
              Download markdown
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[220px_1fr] lg:gap-14">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <p className="eyebrow">Contents</p>
            <nav className="mt-4 space-y-0.5" aria-label="Research parts">
              {parts.map((part) => (
                <a
                  key={part.number}
                  href={`#part-${part.number}`}
                  className="flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-[0.78rem] leading-snug text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                  title={part.title}
                >
                  <span className="font-mono text-[0.64rem] text-gold">
                    {String(part.number).padStart(2, "0")}
                  </span>
                  <span className="line-clamp-2 leading-snug">{part.title}</span>
                </a>
              ))}
              <a
                href="#conclusion"
                className="mt-1 flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <span className="font-mono text-[0.66rem] text-gold">19</span>
                <span className="leading-snug">Conclusion</span>
              </a>
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          <details className="card-flat mb-8 p-4 lg:hidden">
            <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              Contents · {parts.length} parts
            </summary>
            <nav className="mt-3 grid gap-1" aria-label="Research parts">
              {parts.map((part) => (
                <a
                  key={part.number}
                  href={`#part-${part.number}`}
                  className="flex items-baseline gap-2 rounded-md px-2 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-ink"
                >
                  <span className="font-mono text-[0.66rem] text-gold">
                    {String(part.number).padStart(2, "0")}
                  </span>
                  {part.title}
                </a>
              ))}
            </nav>
          </details>

          <ZakahLegend className="mb-6" />
          <Markdown
            content={researchMarkdown.replace(/^\uFEFF?#\s+.*\r?\n/, "")}
            partIds
          />

          <div className="mt-12 border-t border-line pt-8 text-sm text-muted">
            <p>
              The Arabic text is primary. This document is a research synthesis, not a
              fatwa or a substitute for scholarly counsel.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/conclusion" className="btn btn-gold">
                Read the conclusion
              </Link>
              <Link href="/verses" className="btn">
                Open the verse library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
