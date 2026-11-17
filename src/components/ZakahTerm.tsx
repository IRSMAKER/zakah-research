"use client";

import { Fragment, useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type Coords = { top: number; left: number };

const TOOLTIP_WIDTH = 268;
const TOOLTIP_HEIGHT = 112;

export function ZakahTerm({
  children = "zakāh",
  plain = false,
  className,
}: {
  children?: React.ReactNode;
  plain?: boolean;
  className?: string;
}) {
  const id = useId();
  const ref = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0 });
  const text = typeof children === "string" ? children : "zakāh";

  useEffect(() => setMounted(true), []);

  const place = useCallback(() => {
    const el = ref.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return false;
    const left = Math.min(
      Math.max(12, rect.left + rect.width / 2 - TOOLTIP_WIDTH / 2),
      window.innerWidth - TOOLTIP_WIDTH - 12,
    );
    const below = rect.bottom + 10;
    const top =
      below + TOOLTIP_HEIGHT > window.innerHeight
        ? Math.max(12, rect.top - TOOLTIP_HEIGHT - 10)
        : below;
    setCoords({ top, left });
    return true;
  }, []);

  const show = useCallback(() => {
    if (place()) setOpen(true);
  }, [place]);

  const hide = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const update = () => {
      if (!place()) setOpen(false);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [open, place]);

  return (
    <span className="zakah-wrap">
      <span
        ref={ref}
        tabIndex={0}
        aria-label={`${text} — purity-with-growth`}
        aria-describedby={open ? id : undefined}
        className={cn("zakah-term", plain && "zakah-term-plain", className)}
        onMouseEnter={show}
        onMouseLeave={hide}
        onPointerEnter={show}
        onPointerLeave={hide}
        onFocus={show}
        onBlur={hide}
        onClick={show}
        onKeyDown={(event) => {
          if (event.key === "Escape") hide();
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            show();
          }
        }}
      >
        {children}
      </span>
      {mounted && open
        ? createPortal(
            <span
              role="tooltip"
              id={id}
              className="zakah-tip"
              style={{ top: coords.top, left: coords.left }}
            >
              <span className="zakah-tip-eyebrow">Root meaning · Z-K-W</span>
              <span className="zakah-tip-main">purity-with-growth</span>
              <span className="zakah-tip-sub">
                the giving that cleanses what remains and causes it to increase
              </span>
            </span>,
            document.body,
          )
        : null}
    </span>
  );
}

export function ZakahText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(/(zak[āa]h)/gi);
  return (
    <span className={className}>
      {parts.map((part, index) =>
        /^zak[āa]h$/i.test(part) ? (
          <ZakahTerm key={index}>{part}</ZakahTerm>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </span>
  );
}

export function ZakahLegend({ className }: { className?: string }) {
  return (
    <p className={cn("text-[0.78rem] leading-relaxed text-faint", className)}>
      <ZakahTerm>zakāh</ZakahTerm> is left untranslated. Hover or focus the word to
      see its root meaning: <span className="text-gold">purity-with-growth</span>.
    </p>
  );
}
