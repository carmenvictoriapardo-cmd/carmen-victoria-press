"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pressItems = [
  {
    outlet: "El Tiempo",
    country: "Colombia",
    title: "Jugando a Ser Dios — una novela que desafía los límites",
    date: "Marzo 2023",
    url: "https://blogs.eltiempo.com/cafeliterario/2023/03/26/jugando-a-ser/",
    tier: "Tier 1",
  },
  {
    outlet: "Blu Radio",
    country: "Colombia",
    title: "Entrevista en directo — Encuentros BLU",
    date: "Julio 2023",
    url: "https://youtu.be/pLcy3WrhqBE",
    tier: "Tier 1",
  },
  {
    outlet: "Golden Catwalk Magazine",
    country: "Italia · 90+ países",
    title: "Editorial feature — Spring/Summer 2023 & Autumn/Winter 2024",
    date: "2023 · 2024",
    url: "#",
    tier: "Internacional",
  },
  {
    outlet: "El Venezolano",
    country: "Madrid, España",
    title: "Carmen Victoria Pardo y Nelson Bustamante llegan a Madrid",
    date: "Mayo 2023",
    url: "#",
    tier: "Tier 1",
  },
  {
    outlet: "Reporteros Asociados",
    country: "Colombia",
    title: "Carmen Victoria y Nelson Bustamante presentan Jugando a Ser Dios",
    date: "Abril 2023",
    url: "https://www.reporterosasociados.com.co/2023/04/carmen-victoria-y-nelson-bustamante-presentan-su-libro-su-novela-jugando-a-ser-dios/",
    tier: "Tier 1",
  },
  {
    outlet: "El Diario de Pereira",
    country: "Colombia",
    title: "Jugando a Ser Dios — reseña literaria",
    date: "Abril 2023",
    url: "https://www.eldiario.com.co/seccion-d/jugando-a-ser-dios/",
    tier: "Tier 1",
  },
];

export default function PressSection() {
  return (
    <section className="section-padding bg-[#080808]" id="prensa">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-3">
            Cobertura mediática
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Apariciones en Prensa
          </h2>
          <div className="gold-divider-center" />
          <p className="text-[var(--muted)] max-w-xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-4">
            Cobertura en Colombia, España, Italia y más. 6 fuentes Tier-1 verificadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pressItems.map((item, i) => (
            <motion.a
              key={item.outlet + item.date}
              href={item.url}
              target={item.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-[var(--card)] border border-[var(--border)] p-5 hover:border-[var(--accent)]/40 transition-all duration-300 block"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] text-lg group-hover:text-[var(--accent)] transition-colors">
                    {item.outlet}
                  </h3>
                  <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)]">
                    {item.country}
                  </p>
                </div>
                <span className="text-xs px-2 py-0.5 border border-[var(--accent)]/30 text-[var(--accent)] font-[family-name:var(--font-inter)] shrink-0">
                  {item.tier}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed mb-3">
                {item.title}
              </p>
              <p className="text-xs text-[var(--muted)]/60 font-[family-name:var(--font-inter)]">
                {item.date}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/prensa"
            className="text-sm text-[var(--accent)] border border-[var(--accent)]/40 px-5 py-2.5 hover:bg-[var(--accent)] hover:text-black transition-all duration-200 font-[family-name:var(--font-inter)] inline-block"
          >
            Ver toda la cobertura de prensa →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
