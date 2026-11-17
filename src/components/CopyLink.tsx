"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

export function CopyLink({ slug, label = "Copy link" }: { slug: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const url = `${window.location.origin}/verses#v-${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard may be unavailable
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1.5 text-[0.7rem] text-faint transition-colors hover:border-line-strong hover:text-ink"
      aria-label={copied ? "Link copied" : label}
    >
      {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
      {copied ? "Copied" : label}
    </button>
  );
}
