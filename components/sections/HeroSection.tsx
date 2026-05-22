"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const awards = [
  "2× Emmy Awards",
  "2× Telly Awards NY",
  "Medalla de Oro ILBA",
  "Marquis Who's Who 2023",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, #c9a84c22 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-max w-full px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[var(--accent)] text-sm tracking-[0.25em] uppercase font-[family-name:var(--font-inter)] mb-4"
            >
              Doral, Miami · 35 años en medios internacionales
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="gradient-text">Carmen</span>
              <br />
              <span className="gradient-text">Victoria</span>
              <br />
              <span className="text-[var(--foreground)]">Pardo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[#c0b9b0] max-w-md mb-6 font-[family-name:var(--font-inter)] leading-relaxed"
            >
              Escritora. Conductora. Coach Internacional.
              Fundadora & CEO de{" "}
              <a
                href="https://northfactoryllc.com"
                className="text-[var(--accent)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                North Factory LLC
              </a>
              .
            </motion.p>

            {/* Awards chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {awards.map((a) => (
                <span
                  key={a}
                  className="text-xs px-3 py-1 border border-[var(--accent)]/40 text-[var(--accent)] font-[family-name:var(--font-inter)] tracking-wide"
                >
                  {a}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/conferencias"
                className="px-6 py-3 bg-[var(--accent)] text-black font-semibold text-sm font-[family-name:var(--font-inter)] tracking-wide hover:bg-[var(--accent-light)] transition-colors duration-200"
              >
                Contratar Conferencia
              </Link>
              <Link
                href="/libros"
                className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] text-sm font-[family-name:var(--font-inter)] tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                Ver Libros
              </Link>
              <Link
                href="/media-kit"
                className="px-6 py-3 text-[var(--muted)] text-sm font-[family-name:var(--font-inter)] tracking-wide hover:text-[var(--accent)] transition-colors duration-200 flex items-center gap-2"
              >
                ↓ Media Kit
              </Link>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-96 md:w-96 md:h-[520px]">
              {/* Gold border effect */}
              <div
                className="absolute -inset-1 opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), transparent 50%, var(--accent-dark))",
                }}
              />
              <div className="absolute inset-0 bg-[var(--card)]">
                <Image
                  src="/images/headshots/carmen-hero.jpg"
                  alt="Carmen Victoria Pardo — Escritora, Conductora y Coach Internacional"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#2a2a2a] pt-10"
        >
          {[
            { number: "35", label: "Años en medios" },
            { number: "5", label: "Libros publicados" },
            { number: "5+", label: "Ferias internacionales" },
            { number: "12K+", label: "Comunidad digital" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-[family-name:var(--font-playfair)] text-4xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {s.number}
              </p>
              <p className="text-sm text-[var(--muted)] mt-1 font-[family-name:var(--font-inter)]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
