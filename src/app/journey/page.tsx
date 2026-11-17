import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { chapters } from "@/data/chapters";
import { JourneyToc } from "@/components/JourneyToc";
import { ZakahLegend, ZakahText } from "@/components/ZakahTerm";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "The step-by-step research: purity first, then the self, the equation, the act, the grant, the covenant, and the law of increase.",
};

export default function JourneyPage() {
  const items = chapters.map((chapter) => ({
    id: chapter.id,
    number: chapter.number,
    title: chapter.title,
  }));

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-70" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">The research, in order</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            From a pure soul to the <span className="italic text-gold">multipliers</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Ten chapters that follow the actual study: the question, the method, the root
            anchors, the self, the equation, the act, the grant, the covenant, the law of
            increase, and the settled meaning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/verses" className="btn">
              Open the verse library
            </Link>
            <Link href="/appendix" className="btn">
              Read the full document
            </Link>
          </div>
          <ZakahLegend className="mt-6 max-w-2xl" />
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[220px_1fr] lg:gap-14">
        <JourneyToc items={items} />

        <div className="min-w-0">
          {chapters.map((chapter, index) => (
            <section
              key={chapter.id}
              id={chapter.id}
              className={`scroll-mt-24 ${
                index === 0 ? "" : "mt-16 border-t border-line pt-14"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-gold">{chapter.number}</span>
                <p className="eyebrow">{chapter.eyebrow}</p>
              </div>
              <h2 className="mt-3 max-w-2xl font-display text-3xl leading-[1.08] tracking-[-0.02em] text-ink sm:text-4xl">
                {chapter.title}
              </h2>
              <p className="mt-4 max-w-2xl font-display text-[1.08rem] leading-relaxed text-ink/80 sm:text-[1.18rem]">
                <ZakahText text={chapter.lede} />
              </p>

              <div className="mt-5 max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-muted">
                {chapter.paragraphs.map((paragraph, i) => (
                  <p key={i}>
                    <ZakahText text={paragraph} />
                  </p>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {chapter.discoveries.map((discovery) => (
                  <div
                    key={discovery.title}
                    className="card-flat border-l-2 border-l-gold/60 p-4"
                  >
                    <p className="text-[0.82rem] font-semibold text-ink">
                      {discovery.title}
                    </p>
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                      <ZakahText text={discovery.body} />
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-[0.62rem] uppercase tracking-[0.16em] text-faint">
                  Verses in this chapter
                </span>
                {chapter.refs.map((ref) => (
                  <Link
                    key={ref}
                    href={`/verses#v-${ref.replace(/:/g, "-")}`}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.72rem] text-muted transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    {ref}
                  </Link>
                ))}
              </div>

              {chapter.quote ? (
                <blockquote className="mt-8 max-w-2xl border-l-2 border-gold pl-5">
                  <Quote className="mb-2 size-4 text-gold/70" />
                  <p className="font-display text-lg leading-relaxed text-ink sm:text-xl">
                    <ZakahText text={chapter.quote.text} />
                  </p>
                  <footer className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-faint">
                    {chapter.quote.source}
                  </footer>
                </blockquote>
              ) : null}
            </section>
          ))}

          <div className="mt-16 card-flat flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Next</p>
              <p className="mt-2 font-display text-xl text-ink">
                See the maps and the verification.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/poles" className="btn">
                The three poles
                <ArrowUpRight className="size-4" />
              </Link>
              <Link href="/verses" className="btn btn-gold">
                All 56 verses
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
