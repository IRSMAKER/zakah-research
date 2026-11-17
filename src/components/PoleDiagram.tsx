"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { verses, type Pole } from "@/data/verses";

type Group = "state" | "act" | "grant";

const groupMeta: Record<
  Group,
  { label: string; gloss: string; description: string; color: string; poles: Pole[] }
> = {
  state: {
    label: "STATE",
    gloss: "purity-growth",
    description:
      "Purity as a quality of a living self: a pure soul, a pure boy, a purity given to a prophet, a child better in purity, wholesome food, a kept boundary, a guarded gaze. The root's success-word belongs here.",
    color: "var(--pole-state)",
    poles: ["state", "bridge"],
  },
  act: {
    label: "ACT",
    gloss: "the giving",
    description:
      "The release of a portion of wealth that cleanses what remains and causes it to grow. Done as a work, sent ahead, lent to God, given seeking the Face — and never fixed to a percentage.",
    color: "var(--pole-act)",
    poles: ["act"],
  },
  grant: {
    label: "GRANT",
    gloss: "the Purifier",
    description:
      "God and His Messenger as the agents who actually purify. The human act is the channel, not the cause: no one purifies himself, and no one may declare himself pure.",
    color: "var(--pole-grant)",
    poles: ["grant"],
  },
};

const order: Group[] = ["state", "act", "grant"];

export function PoleDiagram({ initial = "act" }: { initial?: Group }) {
  const [active, setActive] = useState<Group>(initial);
  const meta = groupMeta[active];
  const activeVerses = verses.filter((verse) => meta.poles.includes(verse.pole));

  return (
    <div className="card overflow-hidden">
      <div className="relative mx-auto hidden min-h-[360px] max-w-3xl p-6 md:block">
        <svg
          viewBox="0 0 400 340"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="edge-a" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--pole-state)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--pole-act)" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="edge-b" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--pole-act)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--pole-grant)" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="edge-c" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--pole-state)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--pole-grant)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path d="M96 66 L304 66" stroke="url(#edge-a)" strokeWidth="1" strokeDasharray="3 4" />
          <path d="M304 66 L200 300" stroke="url(#edge-b)" strokeWidth="1" strokeDasharray="3 4" />
          <path d="M96 66 L200 300" stroke="url(#edge-c)" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="200" cy="145" r="46" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
          <circle cx="200" cy="145" r="5" fill="var(--gold)" />
          <text
            x="200"
            y="139"
            textAnchor="middle"
            fill="var(--ink)"
            fontSize="12"
            fontFamily="var(--font-fraunces), Georgia, serif"
          >
            Z-K-W
          </text>
          <text
            x="200"
            y="203"
            textAnchor="middle"
            fill="var(--faint)"
            fontSize="7.5"
            letterSpacing="1"
          >
            GROWTH-THROUGH-PURITY
          </text>
        </svg>

        {order.map((group) => {
          const g = groupMeta[group];
          const count = verses.filter((v) => g.poles.includes(v.pole)).length;
          const isActive = active === group;
          const position =
            group === "state"
              ? "left-[8%] top-[6%]"
              : group === "act"
                ? "right-[8%] top-[6%]"
                : "left-1/2 bottom-[2%] -translate-x-1/2";
          return (
            <button
              key={group}
              type="button"
              onClick={() => setActive(group)}
              className={`absolute ${position} w-[132px] rounded-2xl border p-3 text-left transition-all duration-200 ${
                isActive ? "scale-[1.03] bg-surface-2" : "bg-surface hover:bg-surface-2"
              }`}
              style={{
                borderColor: isActive
                  ? `color-mix(in srgb, ${g.color} 60%, var(--line))`
                  : "var(--line)",
                boxShadow: isActive
                  ? `0 0 0 1px color-mix(in srgb, ${g.color} 25%, transparent), 0 12px 40px -24px ${g.color}`
                  : "none",
              }}
              aria-pressed={isActive}
            >
              <span
                className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em]"
                style={{ color: g.color }}
              >
                <span className="size-1.5 rounded-full" style={{ backgroundColor: g.color }} />
                {g.label}
              </span>
              <span className="mt-1 block text-[0.7rem] text-faint">{g.gloss}</span>
              <span className="mt-2 block font-mono text-lg text-ink">{count}</span>
              <span className="text-[0.6rem] uppercase tracking-[0.12em] text-faint">verses</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2 p-4 md:hidden">
        {order.map((group) => {
          const g = groupMeta[group];
          const isActive = active === group;
          return (
            <button
              key={group}
              type="button"
              onClick={() => setActive(group)}
              className="rounded-xl border p-3 text-center"
              style={{
                borderColor: isActive
                  ? `color-mix(in srgb, ${g.color} 60%, var(--line))`
                  : "var(--line)",
                backgroundColor: isActive ? "var(--surface-2)" : "var(--surface)",
              }}
              aria-pressed={isActive}
            >
              <span
                className="block text-[0.6rem] font-semibold uppercase tracking-[0.12em]"
                style={{ color: g.color }}
              >
                {g.label}
              </span>
              <span className="mt-1 block text-[0.62rem] text-faint">{g.gloss}</span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-line p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em]"
            style={{
              color: meta.color,
              borderColor: `color-mix(in srgb, ${meta.color} 40%, var(--line))`,
              backgroundColor: `color-mix(in srgb, ${meta.color} 9%, transparent)`,
            }}
          >
            {meta.label} · {meta.gloss}
          </span>
          <span className="text-[0.68rem] uppercase tracking-[0.14em] text-faint">
            {activeVerses.length} verses
          </span>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{meta.description}</p>

        <div className="mt-5 grid gap-1.5 sm:grid-cols-2">
          {activeVerses.slice(0, 8).map((verse) => (
            <Link
              key={verse.ref}
              href={`/verses#v-${verse.slug}`}
              className="group flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-surface-2"
            >
              <span className="font-mono text-[0.72rem] text-gold">{verse.ref}</span>
              <span className="truncate text-muted group-hover:text-ink">{verse.title}</span>
            </Link>
          ))}
        </div>

        <Link href="/verses" className="btn mt-5">
          Open the verse library
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
