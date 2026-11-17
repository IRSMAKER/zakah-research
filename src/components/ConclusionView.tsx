"use client";

import { useState } from "react";
import { Printer } from "lucide-react";
import { Markdown } from "./Markdown";
import { cn } from "@/lib/utils";

export function ConclusionView({
  detailed,
  simple,
}: {
  detailed: string;
  simple: string;
}) {
  const [mode, setMode] = useState<"simple" | "detailed">("simple");

  function print() {
    window.print();
  }

  return (
    <div>
      <div className="no-print mb-8 flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-full border border-line bg-surface p-1">
          {(["simple", "detailed"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setMode(value)}
              className={cn(
                "rounded-full px-4 py-1.5 text-[0.78rem] font-medium capitalize transition-colors",
                mode === value
                  ? "bg-ink text-background"
                  : "text-muted hover:text-ink",
              )}
              aria-pressed={mode === value}
            >
              {value}
            </button>
          ))}
        </div>
        <button type="button" onClick={print} className="btn">
          <Printer className="size-4" />
          Print / PDF
        </button>
        <p className="text-[0.68rem] uppercase tracking-[0.14em] text-faint">
          {mode === "simple" ? "Plain-language review" : "Full 12-section conclusion"}
        </p>
      </div>

      <div className="print-target">
        <Markdown content={mode === "simple" ? simple : detailed} />
      </div>
    </div>
  );
}
