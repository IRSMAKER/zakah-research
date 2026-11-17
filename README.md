# The Increase — A Quranic Study of Z-K-W

A public research notebook for the Quranic root **Z-K-W** (ز-ك-و). It presents the study step by step, then opens the complete library of all 56 distinct verses with Arabic, a research-consistent rendering, the word-form, the pole, and a note on how each verse fits.

**Thesis:** Z-K-W names growth-through-purity: the release of a portion that cleanses what remains and causes it to increase. The same stem names a quality of the self (STATE), the giving that produces it (ACT), and the God who alone makes it work (GRANT).

## What is inside

| Route | Content |
|---|---|
| `/` | The thesis, the three poles, the ten-chapter journey, the 87:14 / 87:15 hinge |
| `/journey` | The research in order: question, method, root anchors, the self, the equation, the act, the grant, the covenant, the increase, settled meaning |
| `/poles` | The three-pole map, the noun lexicon, verb voices, claim and grant, breach pattern, two effects, wealth/self/time/covenant/intention tables, four surah-bridges, and the verification table |
| `/verses` | All 56 verses with search and filters (cluster, pole, fit) |
| `/conclusion` | Plain-language and detailed conclusions, with print/PDF |
| `/appendix` | The full 18-part research document, with downloads |
| `/about` | Method, corpus, root hygiene, sources, limits, citation |

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- `react-markdown` + `remark-gfm` for the research documents
- `next/font` — Fraunces (display), Inter (body), Amiri (Arabic)
- Static content only: no database, no server state
- PWA: manifest + service worker for offline reading
- Deployed on Vercel

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build
npm run start
```

## Content pipeline

The app's data is generated from the research documents and committed, so Vercel builds do not need the parent research folder.

```bash
node scripts/extract-verses.mjs     # 1_Zakah_Verses.md -> src/data/verse-arabic.json
node scripts/build-documents.mjs    # research markdown  -> src/data/documents.ts + public/research
node scripts/make-icons.mjs         # PWA icons          -> public/icon-192.png etc.
```

The verse translations, titles, fit notes, journey chapters, and tables are authored in:

- `src/data/verses.ts`
- `src/data/chapters.ts`
- `src/data/tables.ts`

## Notes on the text

- The Arabic follows the study corpus (Tanzil Simple-Minimal, 6,236 verses).
- The English verse lines are **research renderings**, not a standard translation:
  - “the Increase” renders the noun zakāh;
  - “grow-purify” renders the verb zakkā;
  - “purer” renders the elative azkā.
- The collection counts distinct verses, not word occurrences: 56 verses carry 59 occurrences of the root across 20 forms.
- The research is Quran-internal. It is not a fatwa and not a substitute for scholarly counsel.

## Deploy

The repository is ready for Vercel’s Git integration:

1. Push to GitHub.
2. In Vercel, **Add New → Project**, select the repository.
3. Framework preset: **Next.js**. No environment variables are required.
4. Deploy.

For a custom domain later, set `NEXT_PUBLIC_SITE_URL` to the final URL so canonical links, the sitemap, and social metadata use it.

## Author & license

Research and writing by **Muhammad Idrees**.

MIT License. Copyright © 2026 Muhammad Idrees. See `LICENSE`.
