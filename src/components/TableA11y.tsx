"use client";

import { useEffect } from "react";

export function TableA11y() {
  useEffect(() => {
    const apply = () => {
      document.querySelectorAll<HTMLTableElement>(".prose-quran table").forEach((table) => {
        table.querySelectorAll("tbody tr").forEach((row) => {
          const first = row.querySelector("td");
          if (first && !first.hasAttribute("role")) {
            first.setAttribute("role", "rowheader");
          }
        });
      });
    };

    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
