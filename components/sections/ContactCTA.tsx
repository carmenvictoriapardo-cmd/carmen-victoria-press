"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-[#0a0a0a] border-t border-[var(--border)]">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
            ¿Listo para llevar tu evento al siguiente nivel?
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4 max-w-2xl mx-auto">
            Trabajemos Juntos
          </h2>
          <div className="gold-divider-center mb-6" />
          <p className="text-[var(--muted)] max-w-lg mx-auto font-[family-name:var(--font-inter)] text-sm mb-8 leading-relaxed">
            Conferencias, mentorías, colaboraciones de medios o entrevistas.
            Respondo personalmente cada solicitud en menos de 48 horas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-3 bg-[var(--accent)] text-black font-semibold text-sm font-[family-name:var(--font-inter)] tracking-wide hover:bg-[var(--accent-light)] transition-colors duration-200"
            >
              Enviar Solicitud
            </Link>
            <a
              href="https://wa.me/17869756228"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[var(--border)] text-[var(--foreground)] text-sm font-[family-name:var(--font-inter)] tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 flex items-center gap-2"
            >
              WhatsApp
            </a>
            <Link
              href="/media-kit"
              className="px-8 py-3 text-[var(--muted)] text-sm font-[family-name:var(--font-inter)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              ↓ Descargar Media Kit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
