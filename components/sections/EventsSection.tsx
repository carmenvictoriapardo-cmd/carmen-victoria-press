"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fairs = [
  {
    name: "FILBO 2023",
    city: "Bogotá, Colombia",
    dates: "18 abril – 2 mayo 2023",
    venue: "Corferias",
    activities: ["Firma de libros", "Presentación", "Entrevistas en medios"],
    flag: "🇨🇴",
  },
  {
    name: "Feria del Libro de Madrid",
    city: "Madrid, España",
    dates: "26 mayo – 11 junio 2023",
    venue: "Parque del Retiro",
    activities: ["Firma de libros", "Presentación", "Prensa: El Venezolano"],
    flag: "🇪🇸",
  },
  {
    name: "Feria del Libro de Panamá",
    city: "Ciudad de Panamá",
    dates: "16 – 21 agosto 2023",
    venue: "Centro de Convenciones Atlapa",
    activities: ["Firma de libros", "Presentación", "Entrevistas en medios"],
    flag: "🇵🇦",
  },
  {
    name: "Feria del Libro de Miami",
    city: "Miami, Florida",
    dates: "12 – 19 noviembre 2023",
    venue: "Campus Wolfson, Miami Dade College",
    activities: ["Entrevistas en medios"],
    flag: "🇺🇸",
  },
  {
    name: "FIL Guadalajara",
    city: "Guadalajara, México",
    dates: "25 nov – 3 dic 2023",
    venue: "Expo Guadalajara",
    activities: ["Firma de libros", "Presentación"],
    flag: "🇲🇽",
  },
];

export default function EventsSection() {
  return (
    <section className="section-padding bg-[#0d0d0d]" id="ferias">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-3">
            Presencia Internacional
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Ferias Internacionales
          </h2>
          <div className="gold-divider-center" />
          <p className="text-[var(--muted)] max-w-xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-4">
            En 2023, Carmen Victoria presentó sus libros en 5 ferias internacionales
            en 4 países: Colombia, España, Panamá, EE.UU. y México.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {fairs.map((fair, i) => (
            <motion.div
              key={fair.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--card)] border border-[var(--border)] p-6 hover:border-[var(--accent)]/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl">{fair.flag}</span>
                </div>
                <span className="text-xs text-[var(--accent)] font-[family-name:var(--font-inter)] border border-[var(--accent)]/30 px-2 py-0.5">
                  2023
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] text-lg mb-1">
                {fair.name}
              </h3>
              <p className="text-sm text-[var(--accent)] font-[family-name:var(--font-inter)] mb-1">
                {fair.city}
              </p>
              <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-1">
                {fair.dates}
              </p>
              <p className="text-xs text-[var(--muted)]/70 font-[family-name:var(--font-inter)] mb-4">
                {fair.venue}
              </p>
              <div className="flex flex-wrap gap-2">
                {fair.activities.map((act) => (
                  <span
                    key={act}
                    className="text-xs px-2 py-0.5 bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] font-[family-name:var(--font-inter)]"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/ferias-internacionales"
            className="text-sm text-[var(--accent)] border border-[var(--accent)]/40 px-5 py-2.5 hover:bg-[var(--accent)] hover:text-black transition-all duration-200 font-[family-name:var(--font-inter)] inline-block"
          >
            Ver galería de ferias →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
