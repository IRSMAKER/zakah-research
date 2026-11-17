import type { Metadata, Viewport } from "next";
import { Amiri, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceWorker } from "@/components/ServiceWorker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://zakah-research.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Zakāh — A Quranic Study of Z-K-W",
    template: "%s · The Zakāh",
  },
  description:
    "A verse-by-verse study of all 56 Quranic verses of the root Z-K-W, arriving at one meaning: purity-with-growth — the release of a portion that cleanses what remains and causes it to increase.",
  authors: [{ name: "Muhammad Idrees" }],
  creator: "Muhammad Idrees",
  keywords: [
    "Quran",
    "zakāh",
    "zakat",
    "zakāt",
    "Quranic study",
    "root study",
    "Z-K-W",
    "purification",
    "charity",
    "Quran translation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "The Zakāh",
    title: "The Zakāh — A Quranic Study of Z-K-W",
    description:
      "All 56 verses of the root Z-K-W, read in context, tested against one meaning. 56 direct fits, 0 contradictions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Zakāh — A Quranic Study of Z-K-W",
    description:
      "All 56 verses of the root Z-K-W, read in context and tested against one meaning.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080b0a" },
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${amiri.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <ServiceWorker />
      </body>
    </html>
  );
}
