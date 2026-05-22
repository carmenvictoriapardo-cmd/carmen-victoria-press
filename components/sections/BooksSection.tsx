"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const books = [
  {
    slug: "jugando-a-ser-dios",
    title: "Jugando a Ser Dios",
    subtitle: "Novela — Español",
    cover: "/images/books/jugando-a-ser-dios.jpg",
    award: "🥇 Medalla de Oro ILBA 2023",
    description:
      "Una novela que explora los límites entre la fe, la ciencia y el poder. Bestseller en negociación para adaptación a serie.",
    amazon: "https://www.amazon.com/-/es/Jugando-ser-Dios-segunda-Jesucristo/dp/0999552309/",
    coauthor: "Con Nelson Bustamante",
    lang: "ES",
  },
  {
    slug: "playing-god",
    title: "Playing God",
    subtitle: "Novel — English",
    cover: "/images/books/playing-god.jpg",
    award: null,
    description:
      "The English edition of the award-winning novel. A gripping story about faith, science, and the limits of human ambition.",
    amazon: "https://www.amazon.com/-/es/Playing-God-Christ-thought-possible/dp/0999552317/",
    coauthor: "With Nelson Bustamante",
    lang: "EN",
  },
  {
    slug: "atrevete-sin-excusas",
    title: "Atrévete Sin Excusas",
    subtitle: "Desarrollo Personal",
    cover: "/images/books/atrevete-sin-excusas.jpg",
    award: null,
    description:
      "El libro que te desafía a eliminar los obstáculos mentales que te impiden vivir la vida que mereces.",
    amazon: "https://www.amazon.com/-/es/ATRÉVETE-SIN-EXCUSAS-sabotearte-imposible/dp/B0FMYKZ7K6/",
    coauthor: null,
    lang: "ES",
  },
  {
    slug: "master-time-es",
    title: "Master Time",
    subtitle: "Agenda de Productividad",
    cover: "/images/books/master-time-es.jpg",
    award: null,
    description:
      "La agenda que revoluciona tu productividad. Planificación estratégica para líderes y emprendedores de alto impacto.",
    amazon: "https://www.amazon.com/-/es/Agenda-Productividad-MASTER-TIME-Revoluciona/dp/B0CWLHCBH3/",
    coauthor: null,
    lang: "ES",
  },
  {
    slug: "master-time-en",
    title: "Master Time",
    subtitle: "Productivity Planner — English",
    cover: "/images/books/master-time-en.jpg",
    award: null,
    description:
      "The strategic planning tool for high-impact leaders and entrepreneurs. Transform your relationship with time.",
    amazon: "https://www.amazon.com/-/es/Productivity-Planner-MASTER-TIME-planning/dp/B0CX4MB1Y1/",
    coauthor: null,
    lang: "EN",
  },
];

export default function BooksSection() {
  return (
    <section className="section-padding bg-[#0a0a0a]" id="libros">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-3">
            Bibliografía
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            5 Libros Publicados
          </h2>
          <div className="gold-divider-center" />
          <p className="text-[var(--muted)] max-w-xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-4">
            Disponibles en Amazon en español e inglés. Ficción, desarrollo personal y productividad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {books.map((book, i) => (
            <motion.div
              key={book.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col"
            >
              {/* Cover */}
              <div className="relative aspect-[2/3] bg-[var(--card)] overflow-hidden mb-4 border border-[var(--border)] group-hover:border-[var(--accent)]/40 transition-all duration-300">
                <Image
                  src={book.cover}
                  alt={`${book.title} — Carmen Victoria Pardo`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                />
                {/* Lang badge */}
                <span className="absolute top-2 right-2 text-xs px-2 py-0.5 bg-[#0a0a0a]/80 text-[var(--accent)] border border-[var(--accent)]/30 font-[family-name:var(--font-inter)]">
                  {book.lang}
                </span>
                {/* Award badge */}
                {book.award && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[var(--accent)] px-2 py-1">
                    <p className="text-xs text-black font-semibold font-[family-name:var(--font-inter)] text-center">
                      {book.award}
                    </p>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1">
                <p className="text-[var(--accent)] text-xs font-[family-name:var(--font-inter)] mb-1">
                  {book.subtitle}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-2 text-lg">
                  {book.title}
                </h3>
                {book.coauthor && (
                  <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-2">
                    {book.coauthor}
                  </p>
                )}
                <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-4 flex-1 leading-relaxed">
                  {book.description}
                </p>
                <a
                  href={book.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-center px-3 py-2 border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-all duration-200 font-[family-name:var(--font-inter)]"
                >
                  Ver en Amazon →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/libros"
            className="text-sm text-[var(--accent)] hover:underline font-[family-name:var(--font-inter)]"
          >
            Ver todos los libros con detalles completos →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
