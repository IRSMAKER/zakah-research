"use client";

import { useEffect, useState } from "react";

export function JourneyToc({
  items,
}: {
  items: Array<{ id: string; number: string; title: string }>;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 1] },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <p className="eyebrow">Contents</p>
          <nav className="mt-4 space-y-0.5" aria-label="Chapter contents">
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors ${
                    isActive ? "bg-surface-2 text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span
                    className={`font-mono text-[0.66rem] ${
                      isActive ? "text-gold" : "text-faint"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span className="leading-snug">{item.title}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      <details className="card-flat mb-8 p-4 lg:hidden">
        <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.16em] text-faint">
          Contents · {items.length} chapters
        </summary>
        <nav className="mt-3 grid gap-1" aria-label="Chapter contents">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-baseline gap-2 rounded-md px-2 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-ink"
            >
              <span className="font-mono text-[0.66rem] text-gold">{item.number}</span>
              {item.title}
            </a>
          ))}
        </nav>
      </details>
    </>
  );
}
