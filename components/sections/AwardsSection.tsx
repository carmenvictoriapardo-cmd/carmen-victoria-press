"use client";

import { motion } from "framer-motion";

const awards = [
  {
    icon: "🏆",
    title: "2× Emmy Awards",
    years: "2019",
    details: ["Corazones Guerreros (2019)", "Un minuto en la vida de un torturado (2019)"],
    org: "Suncoast Chapter",
  },
  {
    icon: "🎬",
    title: "2× Telly Awards",
    years: "2009",
    details: ["El Juego Supremo", "Letra y Música"],
    org: "New York",
  },
  {
    icon: "📚",
    title: "Medalla de Oro ILBA",
    years: "2023",
    details: ["Mejor Libro de Ficción", "Mención Honorífica Ciencia Ficción"],
    org: "International Latino Book Awards",
  },
  {
    icon: "⭐",
    title: "Marquis Who's Who",
    years: "2023",
    details: ["Honored Lister", "Reconocimiento mundial"],
    org: "Who's Who in America",
  },
];

export default function AwardsSection() {
  return (
    <section className="section-padding bg-[#080808]" id="premios">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-3">
            Reconocimientos
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Premios & Distinciones
          </h2>
          <div className="gold-divider-center" />
          <p className="text-[var(--muted)] max-w-xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-4">
            Más de tres décadas de excelencia reconocida en medios internacionales,
            literatura y liderazgo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--card)] border border-[var(--border)] p-6 hover:border-[var(--accent)]/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[var(--foreground)] mb-1">
                {a.title}
              </h3>
              <p className="text-[var(--accent)] text-xs font-[family-name:var(--font-inter)] mb-3">
                {a.years} · {a.org}
              </p>
              <ul className="flex flex-col gap-1">
                {a.details.map((d) => (
                  <li
                    key={d}
                    className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] flex items-start gap-2"
                  >
                    <span className="text-[var(--accent)] mt-0.5">·</span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Historical awards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-5 border border-[var(--border)] bg-[var(--card)]"
        >
          <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] text-center leading-relaxed">
            También reconocida con:{" "}
            <span className="text-[var(--foreground)]">
              Premios 2 de Oro (Venezuela) · Premios ATVC (Argentina) · Premio Monseñor Pellín ·
              Premio Meridiano de Oro · Premio Municipal de Periodismo
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
