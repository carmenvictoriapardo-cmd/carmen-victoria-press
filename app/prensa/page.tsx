import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prensa & Medios",
  description:
    "Cobertura mediática de Carmen Victoria Pardo: El Tiempo (Colombia), Blu Radio, Golden Catwalk Magazine (Italia), El Venezolano (Madrid) y más.",
  alternates: {
    canonical: "https://press.carmenvictoriapardo.com/prensa",
  },
};

const pressItems = [
  {
    outlet: "El Tiempo",
    country: "Colombia",
    type: "Blog Café Literario",
    title: "Jugando a Ser Dios — reseña literaria completa",
    date: "26 de marzo, 2023",
    url: "https://blogs.eltiempo.com/cafeliterario/2023/03/26/jugando-a-ser/",
    tier: "Tier 1",
    desc: "El periódico más importante de Colombia cubrió la novela Jugando a Ser Dios en su sección literaria Café Literario.",
  },
  {
    outlet: "Blu Radio",
    country: "Colombia",
    type: "Entrevista en directo",
    title: "Encuentros BLU — Carmen Victoria Pardo y Nelson Bustamante",
    date: "30 de julio, 2023",
    url: "https://youtu.be/pLcy3WrhqBE",
    tier: "Tier 1",
    desc: "Entrevista completa en uno de los programas culturales más influyentes de la radio colombiana.",
  },
  {
    outlet: "Golden Catwalk Magazine",
    country: "Italia · 90+ países",
    type: "Editorial Feature",
    title: "Editorial content — Spring/Summer 2023 & Autumn/Winter 2024-2025",
    date: "2023 & 2024",
    url: "#",
    tier: "Internacional",
    desc: "Presencia editorial en dos ediciones de la revista de moda y cultura distribuida en más de 90 países. Spring/Summer 2023 (Year 10, #7) y Autumn/Winter 2024-2025 (Year 11, #10).",
  },
  {
    outlet: "El Venezolano",
    country: "Madrid, España",
    type: "Artículo de página completa",
    title: "Los escritores venezolanos Carmen Victoria Pardo y Nelson Bustamante llegan a Madrid",
    date: "Mayo 2–23, 2023",
    url: "#",
    tier: "Tier 1",
    desc: "Cobertura de página completa en el medio referente de la comunidad venezolana en España, coincidiendo con la presentación del libro en la Feria del Libro de Madrid.",
  },
  {
    outlet: "Reporteros Asociados del Mundo",
    country: "Colombia",
    type: "Artículo",
    title: "Carmen Victoria y Nelson Bustamante presentan su novela Jugando a Ser Dios",
    date: "26 de abril, 2023",
    url: "https://www.reporterosasociados.com.co/2023/04/carmen-victoria-y-nelson-bustamante-presentan-su-libro-su-novela-jugando-a-ser-dios/",
    tier: "Tier 1",
    desc: "Cobertura del lanzamiento y presentación del libro en el marco del FILBO 2023.",
  },
  {
    outlet: "El Diario de Pereira",
    country: "Colombia",
    type: "Reseña literaria",
    title: "Jugando a Ser Dios — análisis literario",
    date: "30 de abril, 2023",
    url: "https://www.eldiario.com.co/seccion-d/jugando-a-ser-dios/",
    tier: "Tier 1",
    desc: "Reseña editorial de la novela en uno de los diarios regionales más importantes de Colombia.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://press.carmenvictoriapardo.com" },
    { "@type": "ListItem", position: 2, name: "Prensa", item: "https://press.carmenvictoriapardo.com/prensa" },
  ],
};

export default function PrensaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max">
            <div className="text-center mb-12">
              <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
                Inicio / Prensa
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                Cobertura de Prensa
              </h1>
              <div className="gold-divider-center" />
              <p className="text-[var(--muted)] max-w-xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-4">
                6 fuentes Tier-1 verificadas. Colombia, España, Italia y medios internacionales.
              </p>
            </div>

            <div className="space-y-5">
              {pressItems.map((item) => (
                <article
                  key={item.outlet + item.date}
                  className="bg-[var(--card)] border border-[var(--border)] p-6 hover:border-[var(--accent)]/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] text-xl">
                          {item.outlet}
                        </h2>
                        <span className="text-xs px-2 py-0.5 border border-[var(--accent)]/30 text-[var(--accent)] font-[family-name:var(--font-inter)]">
                          {item.tier}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-1">
                        {item.country} · {item.type} · {item.date}
                      </p>
                      <p className="text-sm text-[var(--foreground)] font-[family-name:var(--font-inter)] mb-2 font-medium">
                        {item.title}
                      </p>
                      <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    {item.url !== "#" && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-xs px-4 py-2 border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-all duration-200 font-[family-name:var(--font-inter)] self-start"
                      >
                        Ver artículo →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Media Kit CTA */}
            <div className="mt-12 border border-[var(--border)] bg-[var(--card)] p-8 text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--foreground)] mb-2">
                ¿Eres periodista o productor?
              </h2>
              <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] mb-5">
                Descarga el Media Kit completo con fotos en alta resolución, bio corta y larga,
                temas de conferencia y datos de contacto.
              </p>
              <Link
                href="/media-kit"
                className="inline-block px-6 py-3 bg-[var(--accent)] text-black text-sm font-semibold font-[family-name:var(--font-inter)] hover:bg-[var(--accent-light)] transition-colors duration-200"
              >
                Descargar Media Kit →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
