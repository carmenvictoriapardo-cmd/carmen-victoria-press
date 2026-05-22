"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const topics = [
  {
    title: "Liderazgo Consciente",
    desc: "Cómo liderar equipos y organizaciones con autenticidad, propósito y resultados medibles.",
    icon: "🎯",
  },
  {
    title: "Reinvención Personal",
    desc: "Sin Plan B: estrategias para transformar crisis en catapultas de éxito.",
    icon: "🔄",
  },
  {
    title: "Emprendimiento de Impacto",
    desc: "Construir negocios que generan valor real aplicando el Método C.R.E.A.R.™",
    icon: "🚀",
  },
  {
    title: "Marca Personal Internacional",
    desc: "Posicionar tu historia y expertise para audiencias globales en la era digital.",
    icon: "🌍",
  },
  {
    title: "Productividad Estratégica",
    desc: "Master Time: el sistema de planificación que multiplica resultados sin sacrificar la vida.",
    icon: "⏱",
  },
  {
    title: "Media & Storytelling",
    desc: "35 años de expertise en producción audiovisual aplicada a la narrativa personal y corporativa.",
    icon: "🎬",
  },
];

const formats = [
  { name: "Keynote", duration: "45–90 min", audience: "Hasta 5,000 personas" },
  { name: "Workshop", duration: "3–8 horas", audience: "Grupos 20–200" },
  { name: "Masterclass", duration: "2–4 horas", audience: "Online o presencial" },
  { name: "Retiro", duration: "1–3 días", audience: "Grupos VIP 10–50" },
];

export default function SpeakingSection() {
  return (
    <section className="section-padding bg-[#0a0a0a]" id="conferencias">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-3">
            Speaker Internacional
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Conferencias & Formaciones
          </h2>
          <div className="gold-divider-center" />
          <p className="text-[var(--muted)] max-w-xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-4">
            Con presencia en 4 países en 2023. Disponible para eventos corporativos,
            congresos y conferencias en toda América y España.
          </p>
        </motion.div>

        {/* Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--card)] border border-[var(--border)] p-5 hover:border-[var(--accent)]/40 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {t.title}
              </h3>
              <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-center text-[var(--muted)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-6">
            Formatos disponibles
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formats.map((f) => (
              <div
                key={f.name}
                className="text-center border border-[var(--border)] p-4"
              >
                <p className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-1">
                  {f.name}
                </p>
                <p className="text-xs text-[var(--accent)] font-[family-name:var(--font-inter)] mb-1">
                  {f.duration}
                </p>
                <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)]">
                  {f.audience}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 bg-[var(--accent)] text-black font-semibold text-sm font-[family-name:var(--font-inter)] tracking-wide hover:bg-[var(--accent-light)] transition-colors duration-200 mr-4"
          >
            Contratar para tu Evento
          </Link>
          <Link
            href="/conferencias"
            className="inline-block text-sm text-[var(--accent)] hover:underline font-[family-name:var(--font-inter)]"
          >
            Ver más detalles →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
