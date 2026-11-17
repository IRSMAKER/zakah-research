import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl tracking-tight text-ink">The Increase</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            An independent, Quran-internal study of the root Z-K-W: every verse read
            in context, then tested against a single meaning.
          </p>
          <p className="mt-5 text-xs leading-relaxed text-faint">
            Research and writing by Muhammad Idrees. This is a study, not a fatwa.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["/journey", "The journey"],
              ["/poles", "The three poles"],
              ["/verses", "56 verses"],
              ["/conclusion", "Conclusion"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link className="text-muted transition-colors hover:text-ink" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Reference</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["/appendix", "Full research document"],
              ["/about", "Method & sources"],
              ["/about#sources", "Source documents"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link className="text-muted transition-colors hover:text-ink" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 The Increase. Built as a public research notebook.</p>
          <p lang="ar" dir="rtl" className="font-arabic text-sm text-muted">
            قَدْ أَفْلَحَ مَن تَزَكَّىٰ
          </p>
        </div>
      </div>
    </footer>
  );
}
