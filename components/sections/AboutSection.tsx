"use client";

import { motion } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Desarrollo Personal",
    desc: "Herramientas prácticas para el crecimiento interior y la transformación de vida.",
  },
  {
    number: "02",
    title: "Emprendimiento Real",
    desc: "Estrategias probadas para construir negocios sólidos con propósito.",
  },
  {
    number: "03",
    title: "Liderazgo Consciente",
    desc: "El método C.R.E.A.R.™ para liderar con intención, impacto y autenticidad.",
  },
];

const clients = [
  "Discovery Channel",
  "Animal Planet",
  "Univision",
  "Telemundo",
  "Zodiak Latino",
  "Visa",
  "Samsung",
  "Johnson & Johnson",
  "Nintendo",
  "Bridgestone",
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#0d0d0d]" id="sobre-mi">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4]">
              <div
                className="absolute -top-2 -left-2 w-full h-full border border-[var(--accent)]/30"
              />
              <SafeImage
                src="/images/headshots/carmen-about.jpg"
                fallbackSrc="/images/headshots/carmen-about.svg"
                alt="Carmen Victoria Pardo — Fundadora de North Factory LLC"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-3">
              Mi Historia
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              35 Años Construyendo
              <br />
              <span className="gradient-text">Narrativas de Impacto</span>
            </h2>
            <div className="gold-divider" />

            <div className="space-y-4 text-[var(--muted)] font-[family-name:var(--font-inter)] text-sm leading-relaxed mt-4">
              <p>
                Carmen Victoria Pardo es empresaria, autora y estratega de negocios con más
                de 35 años de carrera iniciada en Venezuela y proyectada al mundo desde Miami.
                Su trabajo ha trascendido fronteras en América Latina, Europa y Estados Unidos.
              </p>
              <p>
                Fundadora y CEO de <strong className="text-[var(--foreground)]">North Factory LLC</strong>{" "}
                desde 2008, ha producido contenido para Discovery Channel, Animal Planet,
                Univision, con integraciones comerciales para marcas como Visa, Samsung y Johnson & Johnson.
              </p>
              <p>
                Su Método <strong className="text-[var(--foreground)]">C.R.E.A.R.™</strong> —
                Conciencia, Ruptura, Estructura, Ejecución con enfoque y Diferenciación — ha
                transformado a miles de líderes y emprendedores en toda América Latina y EE.UU.
              </p>
              <p>
                Certificada por el <strong className="text-[var(--foreground)]">John Maxwell Team</strong>{" "}
                y en <strong className="text-[var(--foreground)]">Amor Consciente</strong>{" "}
                por su mentor Spencer Hoffmann. Mentoreada por{" "}
                <strong className="text-[var(--foreground)]">Andrés Panasiuk</strong>.
                Ha participado en talleres de Tony Robbins y Grant Cardone.
              </p>
            </div>

            <Link
              href="/sobre-mi"
              className="inline-block mt-6 text-sm text-[var(--accent)] border border-[var(--accent)]/40 px-5 py-2.5 hover:bg-[var(--accent)] hover:text-black transition-all duration-200 font-[family-name:var(--font-inter)]"
            >
              Leer Biografía Completa →
            </Link>
          </motion.div>
        </div>

        {/* Method pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-center text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-8">
            Método C.R.E.A.R.™
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--card)] border border-[var(--border)] p-6"
              >
                <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[var(--accent)]/20 mb-2">
                  {p.number}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[var(--border)] pt-10"
        >
          <p className="text-center text-[var(--muted)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-6">
            Han confiado en su trabajo
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((c) => (
              <span
                key={c}
                className="text-xs px-3 py-1.5 border border-[var(--border)] text-[var(--muted)] font-[family-name:var(--font-inter)] hover:border-[var(--accent)]/30 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
