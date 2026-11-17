import { ExternalLink } from "lucide-react";
import { POLE_META, type Verse } from "@/data/verses";
import { quranUrl, refLabel } from "@/lib/utils";
import { CopyLink } from "./CopyLink";
import { PoleBadge } from "./PoleBadge";
import { ZakahText } from "./ZakahTerm";

export function VerseCard({ verse }: { verse: Verse }) {
  const accent = POLE_META[verse.pole].accent;

  return (
    <article
      id={`v-${verse.slug}`}
      className="verse-anchor card group relative overflow-hidden p-5 transition-colors duration-200 hover:border-line-strong sm:p-6"
      style={{ ["--accent" as string]: accent }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs font-semibold tracking-wide text-gold">
          {refLabel(verse.ref)}
        </span>
        <span className="text-[0.68rem] uppercase tracking-[0.14em] text-faint">
          {verse.surahName}
        </span>
        <span className="ml-auto flex flex-wrap items-center gap-1.5">
          {verse.fit === "nuance" ? (
            <span className="rounded-full border border-gold/40 bg-gold-soft px-2 py-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-gold">
              nuance
            </span>
          ) : null}
          <PoleBadge pole={verse.pole} />
        </span>
      </div>

      <p className="mt-4 font-display text-[1.02rem] font-medium leading-snug text-ink">
        {verse.title}
      </p>

      <p className="arabic mt-3 whitespace-pre-line text-[1.32rem] text-ink/90 sm:text-[1.45rem]">
        {verse.arabic}
      </p>

      <p className="mt-3 border-l border-line pl-3 text-[0.92rem] leading-relaxed text-muted">
        <ZakahText text={verse.translation} />
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="text-[0.62rem] uppercase tracking-[0.14em] text-faint">Form</span>
        {verse.forms.map((form) => (
          <span
            key={form}
            dir="rtl"
            lang="ar"
            className="rounded-md border border-line bg-surface-2 px-2 py-1 font-arabic text-[0.82rem] text-muted"
          >
            {form}
          </span>
        ))}
        <span className="ml-auto rounded-full border border-line px-2 py-1 text-[0.62rem] uppercase tracking-[0.12em] text-faint">
          {verse.id}
        </span>
      </div>

      <details className="group/details mt-3 border-t border-line pt-3">
        <summary className="cursor-pointer list-none text-[0.72rem] font-medium uppercase tracking-[0.14em] text-faint transition-colors hover:text-ink">
          <span className="group-open/details:hidden">How it fits</span>
          <span className="hidden group-open/details:inline">Hide note</span>
        </summary>
        <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
          <ZakahText text={verse.note} />
        </p>
      </details>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <CopyLink slug={verse.slug} />
        <a
          href={quranUrl(verse.ref)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1.5 text-[0.7rem] text-faint transition-colors hover:border-line-strong hover:text-ink"
        >
          <ExternalLink className="size-3.5" />
          Quran.com
        </a>
      </div>
    </article>
  );
}
