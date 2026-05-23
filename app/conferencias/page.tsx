import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conferencias & Keynotes",
  description:
    "Contrata a Carmen Victoria Pardo como speaker para tu evento. Temas: liderazgo consciente, emprendimiento, marca personal, productividad. Disponible en toda América y España.",
  alternates: {
    canonical: "https://media.carmenvictoriapardo.com/conferencias",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿En qué países está disponible Carmen Victoria Pardo como speaker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carmen Victoria Pardo está disponible para conferencias en todos los países de América Latina, EE.UU. y España. En 2023 fue speaker en Colombia, España, Panamá, EE.UU. y México.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los temas de conferencia de Carmen Victoria Pardo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sus temas principales son: Liderazgo Consciente con el Método C.R.E.A.R.™, Reinvención Personal (Sin Plan B), Emprendimiento de Impacto, Marca Personal Internacional, Productividad Estratégica con Master Time, y Media & Storytelling.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los formatos disponibles para contratar a Carmen Victoria Pardo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los formatos disponibles son: Keynote (45-90 min, hasta 5,000 personas), Workshop (3-8 horas, grupos 20-200), Masterclass (2-4 horas, online o presencial) y Retiro (1-3 días, grupos VIP 10-50).",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se contrata a Carmen Victoria Pardo para un evento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para contratar a Carmen Victoria Pardo para tu evento, envía una solicitud a través del formulario de contacto en media.carmenvictoriapardo.com/contacto o escribe directamente por WhatsApp al +1 (786) 975-6228. Responde en menos de 48 horas.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://media.carmenvictoriapardo.com" },
    { "@type": "ListItem", position: 2, name: "Conferencias", item: "https://media.carmenvictoriapardo.com/conferencias" },
  ],
};

export default function ConferenciasPage() {
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
          <div className="container-max text-center">
            <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
              Inicio / Conferencias
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
              Speaker Internacional
            </h1>
            <div className="gold-divider-center" />
            <p className="text-[var(--muted)] max-w-2xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-5 mb-8 leading-relaxed">
              Carmen Victoria Pardo lleva su mensaje a audiencias corporativas, empresariales y
              motivacionales en toda América y España. Más de 35 años de experiencia en comunicación
              + el poder de su Método C.R.E.A.R.™ = conferencias que transforman.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 bg-[var(--accent)] text-black font-semibold text-sm font-[family-name:var(--font-inter)] hover:bg-[var(--accent-light)] transition-colors"
            >
              Solicitar Cotización →
            </Link>
          </div>
        </section>

        {/* Topics */}
        <section className="section-padding bg-[#0d0d0d]">
          <div className="container-max">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)] mb-8 text-center">
              Temas de Conferencia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Liderazgo Consciente con Método C.R.E.A.R.™",
                  icon: "🎯",
                  desc: "Los 5 movimientos del liderazgo auténtico: Conciencia, Ruptura, Estructura, Ejecución con enfoque y Diferenciación. Para líderes que quieren resultados reales sin perder su esencia.",
                  best: "Congresos de liderazgo, empresas Fortune 500, eventos corporativos",
                },
                {
                  title: "Reinvención Personal: Sin Plan B",
                  icon: "🔄",
                  desc: "Cómo convertir una crisis en una catapulta. Estrategias comprobadas para reinventarse en cualquier etapa de la vida o carrera. Basado en el podcast más escuchado del mismo nombre.",
                  best: "Eventos motivacionales, universidades, redes de mujeres",
                },
                {
                  title: "Emprendimiento de Impacto",
                  icon: "🚀",
                  desc: "18 años como CEO de North Factory LLC + trabajo con Discovery, Univision y marcas globales. Estrategias reales para construir negocios con propósito y rentabilidad.",
                  best: "Incubadoras, cámaras de comercio, eventos de startups",
                },
                {
                  title: "Marca Personal Internacional",
                  icon: "🌍",
                  desc: "Cómo posicionar tu historia y expertise para audiencias globales en la era digital y de la Inteligencia Artificial. De Venezuela a 4 países en un año.",
                  best: "Foros de marketing, eventos digitales, escuelas de negocios",
                },
                {
                  title: "Productividad Estratégica — Master Time",
                  icon: "⏱",
                  desc: "El sistema de planificación que ha impactado a miles de líderes. No se trata de hacer más, sino de hacer lo correcto. Basado en el sistema del libro Master Time.",
                  best: "Equipos de alto rendimiento, CEOs, emprendedores",
                },
                {
                  title: "Media & Storytelling para el Siglo XXI",
                  icon: "🎬",
                  desc: "35 años de experiencia en producción audiovisual aplicada a la narrativa personal y corporativa. Cómo contar tu historia de manera que el mundo no pueda ignorarte.",
                  best: "Escuelas de comunicación, agencias, creadores de contenido",
                },
              ].map((t) => (
                <div
                  key={t.title}
                  className="bg-[var(--card)] border border-[var(--border)] p-6 hover:border-[var(--accent)]/40 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-2">
                    {t.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed mb-3">
                    {t.desc}
                  </p>
                  <p className="text-xs text-[var(--accent)] font-[family-name:var(--font-inter)]">
                    Ideal para: {t.best}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max max-w-2xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)] mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
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

        {/* CTA */}
        <section className="section-padding bg-[#0d0d0d] border-t border-[var(--border)]">
          <div className="container-max text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)] mb-4">
              ¿Lista para transformar tu evento?
            </h2>
            <p className="text-[var(--muted)] max-w-lg mx-auto font-[family-name:var(--font-inter)] text-sm mb-6">
              Respondo personalmente en menos de 48 horas con disponibilidad, formatos y cotización.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contacto"
                className="px-8 py-3 bg-[var(--accent)] text-black font-semibold text-sm font-[family-name:var(--font-inter)] hover:bg-[var(--accent-light)] transition-colors"
              >
                Solicitar Conferencia
              </Link>
              <a
                href="https://wa.me/17869756228"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-[var(--border)] text-[var(--foreground)] text-sm font-[family-name:var(--font-inter)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                WhatsApp Directo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
