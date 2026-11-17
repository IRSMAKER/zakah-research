import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { chapters } from "@/data/chapters";
import { COUNTS, verseBySlug } from "@/data/verses";
import { PoleDiagram } from "@/components/PoleDiagram";

const stats = [
  { value: COUNTS.verses, label: "distinct verses" },
  { value: COUNTS.occurrences, label: "occurrences" },
  { value: COUNTS.forms, label: "word forms" },
  { value: "0", label: "contradictions", accent: true },
];

const shifts = [
  {
    number: "01",
    title: "A quality before a payment",
    body: "The root first names a pure soul, a pure boy, a purity given to a prophet, wholesome food, a kept boundary. The giving of wealth is one form of that quality — not its definition.",
  },
  {
    number: "02",
    title: "The giving is the instrument, not the subject",
    body: "“Who gives his wealth, purifying himself.” The object of purification is the self; wealth is what passes through. The verse does not say “pays a due.”",
  },
  {
    number: "03",
    title: "The increase belongs to the giver",
    body: "Interest does not grow with God; the giving does, and its givers are named “the multipliers.” The Quran moves the increase-verb from the lender to the giver.",
  },
];

export default function HomePage() {
  const purified = verseBySlug.get("87-14");
  const stood = verseBySlug.get("87-15");

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow" aria-hidden="true" />
        <div className="grid-fade" aria-hidden="true" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-[1.12fr_0.88fr] md:py-24 lg:py-28">
          <div>
            <p className="eyebrow animate-rise">A Quranic word study · 56 verses</p>
            <h1 className="animate-rise mt-5 font-display text-[3.4rem] leading-[0.94] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
              The <span className="italic text-gold">Increase</span>
            </h1>
            <p className="animate-rise-2 mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted sm:text-lg">
              Zakāh is usually translated “charity” or “poor-due.” But the same root
              names a pure soul, wholesome food, and an act God multiplies. This study
              reads all 56 verses and finds one structure beneath them.
            </p>

            <div className="animate-rise-2 mt-8 flex flex-wrap gap-3">
              <Link href="/journey" className="btn btn-gold">
                Walk the research
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/verses" className="btn">
                Read the 56 verses
              </Link>
            </div>

            <div className="animate-rise-3 mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className={`font-display text-3xl tracking-tight ${
                      stat.accent ? "text-gold" : "text-ink"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.66rem] uppercase tracking-[0.16em] text-faint">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-rise-3 relative mx-auto aspect-square w-full max-w-[430px]">
            <div className="absolute inset-[2%] rounded-full border border-line" />
            <div className="absolute inset-[11%] rounded-full border border-dashed border-line-strong/70" />
            <div
              className="absolute inset-[20%] rounded-full border border-line bg-surface"
              style={{ boxShadow: "0 40px 120px -60px var(--gold)" }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="arabic-lg text-[4.4rem] leading-none text-ink sm:text-[5.4rem]">
                  زكاة
                </p>
                <p className="mt-4 text-[0.62rem] uppercase tracking-[0.34em] text-faint">
                  Z-K-W
                </p>
              </div>
            </div>

            <span className="absolute left-0 top-[18%] inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-muted">
              <span className="size-1.5 rounded-full" style={{ background: "var(--pole-state)" }} />
              State
            </span>
            <span className="absolute right-[2%] top-[42%] inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-muted">
              <span className="size-1.5 rounded-full" style={{ background: "var(--pole-act)" }} />
              Act
            </span>
            <span className="absolute bottom-[12%] left-[6%] inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-muted">
              <span className="size-1.5 rounded-full" style={{ background: "var(--pole-grant)" }} />
              Grant
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="eyebrow">The settled thesis</p>
          <p className="mt-5 font-display text-[1.55rem] leading-[1.35] tracking-[-0.015em] text-ink sm:text-[2rem]">
            Z-K-W names <span className="text-gold">growth-through-purity</span>: the
            release of a portion that cleanses what remains and causes it to increase.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Not a percentage, not a receipt. The same stem names a quality of the self,
            the act of giving that produces it, and the God who alone makes it work.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">The three poles</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              One root, three directions
            </h2>
          </div>
          <Link
            href="/poles"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            Explore the full map
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <PoleDiagram initial="act" />
      </section>

      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">The research, step by step</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Ten chapters, one argument
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The order matters. The purity-verses come first because they show the
              root&apos;s skeleton; the giving, the grant, and the increase close the case.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                href={`/journey#${chapter.id}`}
                className="group card-flat flex h-full flex-col p-5 transition-colors hover:border-line-strong"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 font-mono text-xs text-gold">
                    {chapter.number}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[1.05rem] leading-snug text-ink">
                      {chapter.title}
                    </span>
                    <span className="mt-1.5 line-clamp-2 block text-[0.82rem] leading-relaxed text-muted">
                      {chapter.lede}
                    </span>
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-line pt-3">
                  <span className="text-[0.6rem] uppercase tracking-[0.14em] text-faint">
                    Chapter {chapter.number}
                  </span>
                  <ArrowRight className="size-4 text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-gold" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {purified && stood ? (
        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">The hinge</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              The Quran makes the link itself
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              In Surah 87, purification is followed immediately by remembrance and
              standing. The two roots of this research meet in one verse-pair.
            </p>
          </div>

          <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[color:var(--pole-state)]">Purified</span>
                <span className="font-mono text-xs text-gold">87:14</span>
              </div>
              <p className="arabic mt-5 text-[1.55rem] text-ink">{purified.arabic}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{purified.translation}</p>
            </div>

            <div className="flex items-center justify-center md:flex-col">
              <div className="hidden h-full w-px bg-line md:block" />
              <span className="my-2 rotate-90 whitespace-nowrap text-[0.58rem] uppercase tracking-[0.22em] text-faint md:rotate-0">
                one movement
              </span>
              <div className="hidden h-full w-px bg-line md:block" />
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[color:var(--pole-bridge)]">Stood</span>
                <span className="font-mono text-xs text-gold">87:15</span>
              </div>
              <p className="arabic mt-5 text-[1.55rem] text-ink">{stood.arabic}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{stood.translation}</p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">What the study changes</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Three shifts in reading
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {shifts.map((shift) => (
              <div key={shift.number} className="card-flat p-6">
                <span className="font-mono text-xs text-gold">{shift.number}</span>
                <h3 className="mt-4 font-display text-xl leading-snug text-ink">
                  {shift.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{shift.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="hero-glow opacity-70" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="eyebrow">The conclusion</p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              Read the case in plain language — or go through every table.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The conclusion is available in two forms: a short plain-language review and
              the full twelve-section argument. The complete research document is also
              open for reading.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/conclusion" className="btn btn-gold">
                Read the conclusion
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/appendix" className="btn">
                Open the full study
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
