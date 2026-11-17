import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PoleDiagram } from "@/components/PoleDiagram";
import { DataTable } from "@/components/DataTable";
import { ZakahLegend, ZakahText } from "@/components/ZakahTerm";
import {
  breachPattern,
  bridges,
  covenantTable,
  faceTable,
  grantTable,
  nounLexicon,
  selfTable,
  timeTable,
  twoEffect,
  verbVoices,
  verificationRows,
  wealthTable,
} from "@/data/tables";
import { COUNTS } from "@/data/verses";

export const metadata: Metadata = {
  title: "The Three Poles",
  description:
    "The full map: STATE, ACT, and GRANT, with the noun lexicon, verb voices, the claim and the grant, the breach pattern, the two effects, and the tables of wealth, self, time, covenant, and intention.",
};

const glossary = [
  {
    term: "the zakāh",
    gloss: "zakāh",
    body: "The institutional name of the giving: the release that cleanses and grows. Paired with the Standing in 26 verses.",
  },
  {
    term: "purity-growth",
    gloss: "the root's quality",
    body: "A soundness of the self that can be graded: a pure soul, a pure boy, a better-in-purity child, wholesome food.",
  },
  {
    term: "give the zakāh",
    gloss: "ātū al-zakāh",
    body: "The command: bring the portion out. The verb is “give,” never “pay.”",
  },
  {
    term: "doers of the zakāh",
    gloss: "fāʿilūn",
    body: "23:4. The only verse that calls the zakāh a work with doers — a tax is paid, a zakāh is done.",
  },
  {
    term: "the multipliers",
    gloss: "al-muḍʿifūn",
    body: "30:39. Those who give seeking God's face; the Quran's own name for the growth of the giving.",
  },
  {
    term: "grow-purify",
    gloss: "zakkā · tazakkā",
    body: "The verb: to purify and cause to grow; and to purify oneself. The act and its effect in one stem.",
  },
];

export default function PolesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-glow opacity-70" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">The map</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            One root, <span className="italic text-gold">three poles</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            The same stem names a quality of the self, the giving that produces it, and
            the God who alone makes it work. The poles are not separate meanings; they
            are three directions of one structure.
          </p>
          <ZakahLegend className="mt-5 max-w-2xl" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <PoleDiagram initial="act" />
      </section>

      <section
        id="how-to-read"
        className="scroll-mt-24 border-y border-line bg-surface/30"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Reading aid</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              How to read the renderings
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The verse library uses a deliberately consistent vocabulary, not an idiomatic
              translation. The Arabic is the primary text; these renderings show the shape
              the study found.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {glossary.map((item) => (
              <div key={item.term} className="card-flat p-5">
                <p className="font-display text-lg text-ink">{item.term}</p>
                <p className="mt-1 text-[0.66rem] uppercase tracking-[0.14em] text-gold">
                  {item.gloss}
                </p>
                <p className="mt-2.5 text-[0.82rem] leading-relaxed text-muted">
                  <ZakahText text={item.body} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-2">
          <DataTable
            eyebrow="Noun lexicon"
            title="The root's nouns"
            columns={["Lexeme", "Form", "Sense", "Where"]}
            rows={nounLexicon}
            note="The same noun serves the quality (19:13), the grade (18:81), the act (30:39), and the institution (2:43)."
          />
          <DataTable
            eyebrow="Verb voices"
            title="Every voice, one field"
            columns={["Form", "Voice", "Rendering", "Where"]}
            rows={verbVoices}
            note="State, act, and grant are all in the same stem: to be pure, to make pure, to purify oneself, and the grade of being purer."
          />
          <DataTable
            eyebrow="The grant"
            title="Claim and grant"
            columns={["Human claim", "Divine grant"]}
            rows={grantTable}
            note="The same verb, two subjects. The human act is the channel, not the cause."
          />
          <DataTable
            eyebrow="Breach pattern"
            title="A sale, then a loss"
            columns={["Verse", "The sale", "The loss"]}
            rows={breachPattern}
            note="The anti-zakāh is always a sale: something that should be released is converted into a price."
          />
          <DataTable
            eyebrow="Two effects"
            title="Cleanse and grow"
            columns={["Verse", "Cleansing", "Growth"]}
            rows={twoEffect}
            note="Ṭahāra is subtraction: remove what defiles. Zakāh is addition: cause what remains to grow. The order never reverses."
          />
          <DataTable
            eyebrow="Wealth"
            title="What is released, and to whom"
            columns={["Verse", "The released thing", "The recipients or shape"]}
            rows={wealthTable}
            note="The object is always a portion, never the whole; the direction is always outward; the return is always with God."
          />
          <DataTable
            eyebrow="The self"
            title="The object is always the self"
            columns={["Verse", "Self-word", "The act"]}
            rows={selfTable}
            note="Money is the instrument, never the subject. This is the strongest argument against reading zakāh as a revenue tax."
          />
          <DataTable
            eyebrow="Time"
            title="A standing practice, not an event"
            columns={["Where", "Time-form"]}
            rows={timeTable}
            note="The Quran's grammar gives a lifelong horizon and a daily household form; the annual cycle is a later juristic specification."
          />
          <DataTable
            eyebrow="Covenant"
            title="A clause, never a standalone rule"
            columns={["Verse", "The covenant", "The Zakāh's place"]}
            rows={covenantTable}
            note="Zakāh is always inside a relationship — with God, the community, or the household."
          />
          <DataTable
            eyebrow="Intention"
            title="The face decides the act"
            columns={["Verse", "The intention-clause", "Meaning"]}
            rows={faceTable}
            note="The same coin can be interest, a price, or a zakāh. The difference is the face sought."
          />
        </div>
      </section>

      <section className="border-y border-line bg-surface/30">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">The Quran&apos;s own proof</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Four surah-bridges
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Each surah carries the root through more than one register within a single
              passage. The link is not imposed by the study; it is written into the text.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {bridges.map((bridge) => (
              <div key={bridge.surah} className="card-flat p-6">
                <p className="eyebrow">{bridge.surah}</p>
                <h3 className="mt-2 font-display text-xl text-ink">{bridge.title}</h3>
                <ol className="mt-4 space-y-3">
                  {bridge.steps.map((step, index) => (
                    <li key={`${step.ref}-${index}`} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-mono text-[0.68rem] text-gold">
                        {step.ref}
                      </span>
                      <span className="text-[0.82rem] leading-relaxed text-muted">
                        <ZakahText text={step.text} />
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 border-t border-line pt-4 text-[0.78rem] leading-relaxed text-faint">
                  {bridge.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Verification</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Every verse has a home
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The thesis was taken back through all {COUNTS.verses} verses. {COUNTS.direct}{" "}
              fit directly. {COUNTS.nuance} required a nuance, and no verse contradicted
              the meaning. No verse required a forced reading.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                [COUNTS.direct, "direct"],
                [COUNTS.nuance, "nuance"],
                ["0", "contradictions"],
              ].map(([value, label]) => (
                <div key={String(label)} className="card-flat p-4">
                  <p className="font-display text-2xl text-ink">{value}</p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-faint">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/verses" className="btn mt-6">
              Check every verse
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <DataTable
            eyebrow="Final tally"
            title="The verification table"
            columns={["Cluster", "Verses", "Fit", "Nuance", "Contradictions"]}
            rows={verificationRows}
            note="The two control cases — the non-monetary noun (19:13, 18:81) and the “doers” (23:4) — fit directly and turn out to be the strongest evidence."
          />
        </div>
      </section>
    </>
  );
}
