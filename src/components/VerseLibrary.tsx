"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  CLUSTER_META,
  POLE_META,
  verses,
  type Cluster,
  type Fit,
  type Pole,
} from "@/data/verses";
import { cn } from "@/lib/utils";
import { VerseCard } from "./VerseCard";

const clusters: Array<Cluster | "all"> = ["all", "A", "B", "C", "D", "E"];
const poles: Array<Pole | "all"> = ["all", "state", "act", "grant", "bridge"];
const fits: Array<Fit | "all"> = ["all", "direct", "nuance"];

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn("chip shrink-0 transition-colors", active && "chip-active")}
    >
      {children}
    </button>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 overflow-x-auto pb-0.5 pr-8">
        <span className="w-[3.6rem] shrink-0 text-[0.62rem] uppercase tracking-[0.14em] text-faint">
          {label}
        </span>
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent sm:hidden" />
    </div>
  );
}

export function VerseLibrary() {
  const [query, setQuery] = useState("");
  const [cluster, setCluster] = useState<Cluster | "all">("all");
  const [pole, setPole] = useState<Pole | "all">("all");
  const [fit, setFit] = useState<Fit | "all">("all");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return verses.filter((verse) => {
      if (cluster !== "all" && verse.cluster !== cluster) return false;
      if (pole !== "all" && verse.pole !== pole) return false;
      if (fit !== "all" && verse.fit !== fit) return false;
      if (!q) return true;
      const haystack = [
        verse.ref,
        verse.title,
        verse.translation,
        verse.note,
        verse.surahName,
        verse.id,
        ...verse.forms,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [cluster, pole, fit, deferredQuery]);

  const hasFilters = query !== "" || cluster !== "all" || pole !== "all" || fit !== "all";

  function reset() {
    setQuery("");
    setCluster("all");
    setPole("all");
    setFit("all");
  }

  return (
    <div>
      <div className="no-print sticky top-16 z-30 -mx-5 border-y border-line bg-background/90 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-faint" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by reference, word, or theme — try 9:103, growth, purity"
                className="h-10 w-full rounded-full border border-line bg-surface pl-9 pr-9 text-sm text-ink placeholder:text-faint focus:border-line-strong focus:outline-none"
                aria-label="Search verses"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full text-faint hover:text-ink"
                  aria-label="Clear search"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </div>
            {hasFilters ? (
              <button
                type="button"
                onClick={reset}
                className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-2 text-[0.72rem] text-muted transition-colors hover:border-line-strong hover:text-ink sm:inline-flex"
              >
                Reset
              </button>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <FilterRow label="Cluster">
              {clusters.map((value) => (
                <Chip key={value} active={cluster === value} onClick={() => setCluster(value)}>
                  {value === "all" ? "All" : CLUSTER_META[value].label}
                </Chip>
              ))}
            </FilterRow>
            <FilterRow label="Pole">
              {poles.map((value) => (
                <Chip key={value} active={pole === value} onClick={() => setPole(value)}>
                  {value === "all" ? "All" : POLE_META[value].label}
                </Chip>
              ))}
            </FilterRow>
            <FilterRow label="Fit">
              {fits.map((value) => (
                <Chip key={value} active={fit === value} onClick={() => setFit(value)}>
                  {value === "all" ? "All" : value === "direct" ? "Direct" : "Nuance"}
                </Chip>
              ))}
            </FilterRow>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <p className="text-sm text-muted">
          Showing <span className="font-mono text-ink">{filtered.length}</span> of{" "}
          <span className="font-mono text-ink">{verses.length}</span> verses
        </p>
        <p className="hidden text-[0.68rem] uppercase tracking-[0.14em] text-faint sm:block">
          Research renderings, not a standard translation
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="card mt-6 flex flex-col items-center gap-3 px-6 py-16 text-center">
          <p className="font-display text-xl text-ink">No verse matches that filter.</p>
          <p className="max-w-sm text-sm text-muted">
            Try a reference like “30:39”, a theme like “purity”, or reset the filters.
          </p>
          <button type="button" onClick={reset} className="btn mt-2">
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {filtered.map((verse) => (
            <VerseCard key={verse.ref} verse={verse} />
          ))}
        </div>
      )}
    </div>
  );
}
