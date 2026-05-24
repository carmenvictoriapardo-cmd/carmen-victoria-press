import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// Image import removed — headshots loaded via AboutSection component

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Carmen Victoria Pardo: 35 años en medios internacionales, fundadora de North Factory LLC, escritora de 5 libros, ganadora de 2 Emmy Awards. Conoce su historia completa.",
  openGraph: {
    title: "Sobre Carmen Victoria Pardo",
    description:
      "35 años transformando medios y vidas. Su historia completa: Venezuela, Miami, 5 continentes.",
  },
  alternates: {
    canonical: "https://media.carmenvictoriapardo.com/sobre-mi",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quién es Carmen Victoria Pardo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carmen Victoria Pardo es empresaria, autora y estratega de negocios con más de 35 años de trayectoria en medios internacionales. Fundadora y CEO de North Factory LLC desde 2008, ha ganado 2 Emmy Awards, 2 Telly Awards y la Medalla de Oro del International Latino Book Awards 2023.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos libros ha publicado Carmen Victoria Pardo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carmen Victoria Pardo ha publicado 5 libros: Jugando a Ser Dios (ganador Medalla de Oro ILBA 2023), Playing God (edición en inglés), Atrévete Sin Excusas, Master Time Agenda de Productividad y Master Time Productivity Planner. Todos disponibles en Amazon.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el Método C.R.E.A.R.™?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Método C.R.E.A.R.™ es la metodología propia de Carmen Victoria Pardo para el liderazgo y el emprendimiento consciente. Sus 5 movimientos son: Conciencia, Ruptura, Estructura, Ejecución con enfoque y Diferenciación. Se aplica en conferencias, mentorías y programas de formación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde está ubicada Carmen Victoria Pardo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carmen Victoria Pardo está ubicada en Doral, Miami, Florida (33178). Su empresa North Factory LLC opera desde Miami con proyección internacional en América Latina y España.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué medios ha aparecido Carmen Victoria Pardo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carmen Victoria Pardo ha sido presentada en El Tiempo (Colombia), Blu Radio, Golden Catwalk Magazine (Italia, 90+ países), El Venezolano (Madrid), Reporteros Asociados del Mundo y El Diario de Pereira. También ha producido contenido para Discovery Channel, Animal Planet, Univision y Telemundo.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://media.carmenvictoriapardo.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sobre Mí",
      item: "https://media.carmenvictoriapardo.com/sobre-mi",
    },
  ],
};

const timelineItems = [
  { year: "1989–1992", desc: "Associate Degree en Publicidad — IUTV Venezuela" },
  { year: "1991", desc: "Inicia su carrera en medios de comunicación" },
  { year: "1994–1999", desc: "Bachelor's en Broadcasting — UCAB Caracas" },
  { year: "2008", desc: "Funda North Factory LLC en Miami, Florida" },
  { year: "2009", desc: "2× Telly Awards New York (El Juego Supremo + Letra y Música)" },
  { year: "2019", desc: "Emmy Award — Corazones Guerreros (Suncoast Chapter)" },
  { year: "2020", desc: "Emmy Award — Los perros no saben leer (Suncoast Chapter)" },
  { year: "2023", desc: "Medalla de Oro ILBA · Marquis Who's Who · 5 Ferias Internacionales · 6 Fuentes Tier-1" },
];

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max">
            <div className="max-w-3xl">
              <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
                Inicio / Sobre Mí
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                Mi Historia
              </h1>
              <div className="gold-divider" />
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="section-padding bg-[#0d0d0d]">
          <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-[var(--muted)] font-[family-name:var(--font-inter)] text-sm leading-relaxed">
              <p>
                <strong className="text-[var(--foreground)]">Carmen Victoria Pardo</strong> llegó
                a los medios de comunicación en 1991, cuando Venezuela era el epicentro de la
                televisión en español de Latinoamérica. En tres décadas, pasó de periodista a
                productora, de conductora a autora, y de emprendedora local a referente
                internacional del liderazgo consciente.
              </p>
              <p>
                En 2008, fundó <strong className="text-[var(--foreground)]">North Factory LLC</strong>{" "}
                en Miami, una empresa de producción de medios que ha trabajado con Discovery
                Channel, Animal Planet, Univision, Telemundo y marcas globales como Visa,
                Samsung, Johnson & Johnson, Nintendo y Bridgestone.
              </p>
              <p>
                Su trayectoria literaria arrancó con fuerza: <em>Jugando a Ser Dios</em>,
                novela co-escrita con Nelson Bustamante, ganó la{" "}
                <strong className="text-[var(--foreground)]">Medalla de Oro del International
                Latino Book Awards 2023</strong>{" "}
                y una Mención Honorífica como Mejor Libro de Ciencia Ficción. La novela está
                actualmente en negociación para adaptación a serie.
              </p>
              <p>
                En 2023, presentó sus libros en cinco ferias internacionales:{" "}
                <strong className="text-[var(--foreground)]">FILBO Bogotá, Feria del Libro de
                Madrid, Feria del Libro de Panamá, Feria del Libro de Miami y FIL Guadalajara</strong>.
                Durante ese año fue entrevistada por Blu Radio, El Tiempo (Colombia), Golden
                Catwalk Magazine (Italia) y El Venezolano (Madrid).
              </p>
              <p>
                Su <strong className="text-[var(--foreground)]">Método C.R.E.A.R.™</strong> —
                cinco movimientos para el liderazgo y el emprendimiento consciente — ha sido
                aplicado por miles de ejecutivos y emprendedores en toda América Latina y
                Estados Unidos. Es certificada por el{" "}
                <strong className="text-[var(--foreground)]">John Maxwell Team</strong>,
                en Amor Consciente por{" "}
                <strong className="text-[var(--foreground)]">Spencer Hoffmann</strong>, y
                formada con Andrés Panasiuk y Tony Robbins.
              </p>
              <p>
                Conduce el podcast{" "}
                <strong className="text-[var(--foreground)]">Sin Plan B</strong> en Apple
                Podcasts y Spotify: un espacio donde líderes y emprendedores aprenden a
                reinventarse sin red de seguridad.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[var(--card)] border border-[var(--border)] p-5">
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-4">
                  Datos Clave
                </h3>
                <ul className="space-y-2 text-xs font-[family-name:var(--font-inter)]">
                  <li className="flex gap-2">
                    <span className="text-[var(--accent)]">·</span>
                    <span className="text-[var(--muted)]">35 años en medios (1991–2026)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent)]">·</span>
                    <span className="text-[var(--muted)]">Doral, Miami, FL 33178</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent)]">·</span>
                    <span className="text-[var(--muted)]">North Factory LLC (2008–presente)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent)]">·</span>
                    <span className="text-[var(--muted)]">5 libros publicados en Amazon</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent)]">·</span>
                    <span className="text-[var(--muted)]">2× Emmy · 2× Telly · Oro ILBA</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent)]">·</span>
                    <span className="text-[var(--muted)]">Podcast: Sin Plan B</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[var(--card)] border border-[var(--border)] p-5">
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-4">
                  Formación
                </h3>
                <ul className="space-y-2 text-xs font-[family-name:var(--font-inter)] text-[var(--muted)]">
                  <li>Bachelor's Broadcasting — UCAB Venezuela</li>
                  <li>Associate Degree Publicidad — IUTV</li>
                  <li>English Level 5 — Boston Academy</li>
                  <li>John Maxwell Team Coach</li>
                  <li>Certificada Amor Consciente — Spencer Hoffmann</li>
                  <li>Micro MBA — Cedric Buffer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max max-w-2xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)] mb-8 text-center">
              Línea de Tiempo
            </h2>
            <div className="relative">
              <div className="absolute left-[72px] top-0 bottom-0 w-px bg-[var(--border)]" />
              <div className="space-y-6">
                {timelineItems.map((item) => (
                  <div key={item.year} className="flex gap-6 items-start">
                    <div className="w-16 shrink-0 text-right">
                      <span className="text-xs text-[var(--accent)] font-[family-name:var(--font-inter)] font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
                    </div>
                    <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#0d0d0d]">
          <div className="container-max max-w-2xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)] mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="border border-[var(--border)] p-5">
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-2">
                    {q.name}
                  </h3>
                  <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                    {q.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
