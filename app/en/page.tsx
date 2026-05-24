import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carmen Victoria Pardo — International Speaker, Author & Coach",
  description:
    "Award-winning author, media host, and international coach with 35 years in media. 2× Emmy Awards winner. 5 published books. Founder & CEO of North Factory LLC.",
  alternates: {
    canonical: "https://media.carmenvictoriapardo.com/en",
    languages: {
      "es-US": "https://media.carmenvictoriapardo.com",
      "en-US": "https://media.carmenvictoriapardo.com/en",
    },
  },
};

export default function EnglishPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
                Doral, Miami · 35 years in international media
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                Carmen Victoria Pardo
              </h1>
              <p className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--accent)] mb-6">
                International Speaker · Author · Coach
              </p>
              <div className="gold-divider-center" />
              <p className="text-[var(--muted)] font-[family-name:var(--font-inter)] text-sm mt-6 mb-8 leading-relaxed max-w-2xl mx-auto">
                Carmen Victoria Pardo is a bestselling author, award-winning media producer, and
                international coach with over 35 years of career. Founder & CEO of North Factory
                LLC (Miami, 2008). Winner of 2 Emmy Awards, 2 Telly Awards NY, and the Gold Medal
                at the International Latino Book Awards 2023.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { n: "35+", label: "Years in media" },
                  { n: "5", label: "Published books" },
                  { n: "4×", label: "International awards" },
                  { n: "12K+", label: "Digital community" },
                ].map((s) => (
                  <div key={s.label} className="border border-[var(--border)] p-4">
                    <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--accent)]">
                      {s.n}
                    </p>
                    <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-[var(--accent)] text-black font-semibold text-sm font-[family-name:var(--font-inter)] hover:bg-[var(--accent-light)] transition-colors"
                >
                  Book a Conference
                </Link>
                <Link
                  href="/en/books"
                  className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] text-sm font-[family-name:var(--font-inter)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                >
                  View Books
                </Link>
                <Link
                  href="/media-kit"
                  className="px-6 py-3 text-[var(--muted)] text-sm font-[family-name:var(--font-inter)] hover:text-[var(--accent)] transition-colors"
                >
                  ↓ Media Kit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="section-padding bg-[#0d0d0d]">
          <div className="container-max">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)] text-center mb-8">
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🏆", title: "2× Emmy Awards", sub: "Suncoast Chapter 2019" },
                { icon: "🎬", title: "2× Telly Awards", sub: "New York 2009" },
                { icon: "📚", title: "Gold Medal ILBA", sub: "Best Fiction Book 2023" },
                { icon: "⭐", title: "Marquis Who's Who", sub: "Honored Lister 2023" },
              ].map((a) => (
                <div
                  key={a.title}
                  className="bg-[var(--card)] border border-[var(--border)] p-5 text-center hover:border-[var(--accent)]/40 transition-all"
                >
                  <div className="text-3xl mb-2">{a.icon}</div>
                  <p className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] text-sm mb-1">
                    {a.title}
                  </p>
                  <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)]">
                    {a.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Books */}
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)] mb-4">
              Books in English
            </h2>
            <div className="gold-divider-center mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                {
                  title: "Playing God",
                  desc: "Award-winning fiction novel. When Christ returns, nothing is what we thought possible.",
                  amazon: "https://www.amazon.com/-/es/Playing-God-Christ-thought-possible/dp/0999552317/",
                },
                {
                  title: "Master Time — Productivity Planner",
                  desc: "The strategic planning tool for high-impact leaders and entrepreneurs.",
                  amazon: "https://www.amazon.com/-/es/Productivity-Planner-MASTER-TIME-planning/dp/B0CX4MB1Y1/",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="bg-[var(--card)] border border-[var(--border)] p-5 text-left hover:border-[var(--accent)]/40 transition-all"
                >
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] mb-4">
                    {b.desc}
                  </p>
                  <a
                    href={b.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--accent)] hover:underline font-[family-name:var(--font-inter)]"
                  >
                    Buy on Amazon →
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--muted)] font-[family-name:var(--font-inter)]">
              Also available in Spanish:{" "}
              <Link href="/libros" className="text-[var(--accent)] hover:underline">
                View all 5 books →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#0d0d0d] border-t border-[var(--border)]">
          <div className="container-max text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)] mb-4">
              Let's Work Together
            </h2>
            <p className="text-[var(--muted)] max-w-md mx-auto font-[family-name:var(--font-inter)] text-sm mb-6">
              Speaking engagements, media collaborations, mentoring, or press inquiries.
              I respond personally within 48 hours.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 bg-[var(--accent)] text-black font-semibold text-sm font-[family-name:var(--font-inter)] hover:bg-[var(--accent-light)] transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
