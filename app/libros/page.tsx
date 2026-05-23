import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Libros",
  description:
    "5 libros de Carmen Victoria Pardo disponibles en Amazon. Ficción premiada, desarrollo personal y productividad en español e inglés.",
  alternates: {
    canonical: "https://media.carmenvictoriapardo.com/libros",
  },
};

const books = [
  {
    slug: "jugando-a-ser-dios",
    title: "Jugando a Ser Dios",
    subtitle: "Novela de Ficción — Español",
    cover: "/images/books/jugando-a-ser-dios.jpg",
    award: "Medalla de Oro ILBA 2023 · Mención Honorífica Mejor Libro Ciencia Ficción",
    description:
      "Una novela que explora los límites entre la fe, la ciencia y el poder. ¿Qué pasa cuando la humanidad decide jugar a ser Dios? Una historia que desafía las creencias más profundas y que ha cautivado lectores en toda América Latina, España y EE.UU.",
    amazon: "https://www.amazon.com/-/es/Jugando-ser-Dios-segunda-Jesucristo/dp/0999552309/",
    coauthor: "Con Nelson Bustamante",
    isbn: "0999552309",
    lang: "ES",
    year: "2022",
    note: "En negociación para adaptación a serie",
  },
  {
    slug: "playing-god",
    title: "Playing God",
    subtitle: "Fiction Novel — English",
    cover: "/images/books/playing-god.jpg",
    award: null,
    description:
      "The English edition of the award-winning Spanish novel. A gripping story about faith, science, and the limits of human ambition. When Christ returns, nothing is what we thought possible.",
    amazon: "https://www.amazon.com/-/es/Playing-God-Christ-thought-possible/dp/0999552317/",
    coauthor: "With Nelson Bustamante",
    isbn: "0999552317",
    lang: "EN",
    year: "2022",
    note: null,
  },
  {
    slug: "atrevete-sin-excusas",
    title: "Atrévete Sin Excusas",
    subtitle: "Desarrollo Personal — Español",
    cover: "/images/books/atrevete-sin-excusas.jpg",
    award: null,
    description:
      "El libro que desafía tu zona de confort y te entrega herramientas reales para dejar de sabotearte. Sin excusas, sin esperas: el momento de actuar es ahora.",
    amazon: "https://www.amazon.com/-/es/ATRÉVETE-SIN-EXCUSAS-sabotearte-imposible/dp/B0FMYKZ7K6/",
    coauthor: null,
    isbn: "B0FMYKZ7K6",
    lang: "ES",
    year: "2024",
    note: null,
  },
  {
    slug: "master-time-es",
    title: "Master Time — Agenda de Productividad",
    subtitle: "Productividad Estratégica — Español",
    cover: "/images/books/master-time-es.jpg",
    award: null,
    description:
      "La agenda que revoluciona tu productividad. Sistema de planificación estratégica para líderes y emprendedores de alto impacto. Metodología probada para multiplicar resultados.",
    amazon: "https://www.amazon.com/-/es/Agenda-Productividad-MASTER-TIME-Revoluciona/dp/B0CWLHCBH3/",
    coauthor: null,
    isbn: "B0CWLHCBH3",
    lang: "ES",
    year: "2024",
    note: null,
  },
  {
    slug: "master-time-en",
    title: "Master Time — Productivity Planner",
    subtitle: "Strategic Planning — English",
    cover: "/images/books/master-time-en.jpg",
    award: null,
    description:
      "The strategic planning tool for high-impact leaders and entrepreneurs. Transform your relationship with time and multiply your results with this proven methodology.",
    amazon: "https://www.amazon.com/-/es/Productivity-Planner-MASTER-TIME-planning/dp/B0CX4MB1Y1/",
    coauthor: null,
    isbn: "B0CX4MB1Y1",
    lang: "EN",
    year: "2024",
    note: null,
  },
];

const booksSchema = books.map((book) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  name: book.title,
  author: {
    "@type": "Person",
    name: "Carmen Victoria Pardo",
    url: "https://media.carmenvictoriapardo.com",
  },
  inLanguage: book.lang === "ES" ? "es" : "en",
  url: `https://media.carmenvictoriapardo.com/libros/${book.slug}`,
  offers: {
    "@type": "Offer",
    url: book.amazon,
    seller: { "@type": "Organization", name: "Amazon" },
    availability: "https://schema.org/InStock",
  },
  ...(book.isbn && { isbn: book.isbn }),
  ...(book.award && { award: book.award }),
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://media.carmenvictoriapardo.com" },
    { "@type": "ListItem", position: 2, name: "Libros", item: "https://media.carmenvictoriapardo.com/libros" },
  ],
};

export default function LibrosPage() {
  return (
    <>
      {booksSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max">
            <div className="text-center mb-12">
              <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
                Inicio / Libros
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                5 Libros Publicados
              </h1>
              <div className="gold-divider-center" />
              <p className="text-[var(--muted)] max-w-xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-4">
                Ficción premiada, desarrollo personal y herramientas de productividad.
                Disponibles en Amazon en español e inglés.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <article
                  key={book.slug}
                  className="bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-300 overflow-hidden group"
                >
                  {/* Cover */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={book.cover}
                      alt={`${book.title} — Carmen Victoria Pardo`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 text-xs px-2 py-0.5 bg-[#0a0a0a]/90 text-[var(--accent)] border border-[var(--accent)]/30 font-[family-name:var(--font-inter)]">
                      {book.lang}
                    </span>
                    {book.award && (
                      <div className="absolute bottom-0 inset-x-0 bg-[var(--accent)] py-2 px-3">
                        <p className="text-xs text-black font-semibold font-[family-name:var(--font-inter)] text-center leading-tight">
                          🥇 {book.award}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-[var(--accent)] text-xs font-[family-name:var(--font-inter)] mb-1">
                      {book.subtitle} · {book.year}
                    </p>
                    <h2 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] text-xl mb-2">
                      {book.title}
                    </h2>
                    {book.coauthor && (
                      <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-3">
                        {book.coauthor}
                      </p>
                    )}
                    <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] mb-4 leading-relaxed">
                      {book.description}
                    </p>
                    {book.note && (
                      <p className="text-xs text-[var(--accent)] font-[family-name:var(--font-inter)] mb-4 italic">
                        ✨ {book.note}
                      </p>
                    )}
                    <a
                      href={book.amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-sm px-4 py-2.5 bg-[var(--accent)] text-black font-semibold font-[family-name:var(--font-inter)] hover:bg-[var(--accent-light)] transition-colors duration-200"
                    >
                      Comprar en Amazon →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
