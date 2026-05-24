import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sala de Prensa — Carmen Victoria Pardo",
  description:
    "Sala de prensa oficial de Carmen Victoria Pardo: ángulos de historia, cobertura en El Tiempo, Blu Radio, Golden Catwalk Magazine, citas autorizadas y contacto para medios.",
  alternates: {
    canonical: "https://media.carmenvictoriapardo.com/prensa",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://media.carmenvictoriapardo.com" },
    { "@type": "ListItem", position: 2, name: "Prensa", item: "https://media.carmenvictoriapardo.com/prensa" },
  ],
};

const quickFacts = [
  { label: "Años en medios", value: "35+" },
  { label: "Emmy Awards", value: "2×" },
  { label: "Libros publicados", value: "5" },
  { label: "Medios Tier-1", value: "6" },
  { label: "Ferias internacionales", value: "5 en 2023" },
  { label: "Ubicación", value: "Miami, FL" },
];

const storyAngles = [
  {
    headline: "La productora ejecutiva que ganó 2 Emmy Awards y luego se convirtió en autora galardonada",
    desc: "Carmen Victoria Pardo pasó 35 años detrás de cámara produciendo para Discovery Channel, Animal Planet y Telemundo. En 2023, su primera novela —Jugando a Ser Dios— ganó la Medalla de Oro del International Latino Book Awards. Una historia sobre reinvención y doble trayectoria.",
    angle: "Perfil / Feature",
  },
  {
    headline: "El Método C.R.E.A.R.™: la metodología que convierte ideas en negocios que ejecutan",
    desc: "Claridad, Reordena, Estructura, Activa, Rentabiliza. Desarrollado a partir de 35 años de experiencia como CEO de North Factory LLC, este sistema de 5 etapas está siendo adoptado por emprendedores y ejecutivos en toda América Latina y EE.UU.",
    angle: "Emprendimiento / Negocios",
  },
  {
    headline: "Sin Plan B: el podcast que enseña a reinventarse sin red de seguridad",
    desc: "En cada episodio, Carmen Victoria Pardo entrevista a líderes que tomaron decisiones radicales sin garantías. El mensaje: no necesitas un Plan B si ejecutas tu Plan A con claridad y método.",
    angle: "Medios / Podcast",
  },
  {
    headline: "De Venezuela a 4 países en 1 año: cómo una autora venezolana-americana conquistó ferias internacionales",
    desc: "En 2023, presentó sus libros en FILBO Bogotá, Feria del Libro de Madrid, Feria del Libro de Panamá, Feria del Libro de Miami y FIL Guadalajara — 5 ferias, 4 países, 1 año. Un caso único de internacionalización literaria.",
    angle: "Cultura / Latinidad",
  },
  {
    headline: "35 años transformando medios: de la televisión venezolana al liderazgo empresarial en Miami",
    desc: "Inició en la televisión venezolana en 1991, cuando Latinoamérica vivía la era dorada de la TV en español. Hoy, desde Miami, dirige North Factory LLC y forma a la próxima generación de emprendedores. Una trayectoria que cruza continentes, crisis y transformaciones.",
    angle: "Perfil / Liderazgo",
  },
];

const pressQuotes = [
  {
    quote: "El emprendimiento real no es glamoroso — es el trabajo diario de transformar una visión en un sistema que ejecuta solo.",
    context: "Sobre el Método C.R.E.A.R.™",
  },
  {
    quote: "No necesitas un Plan B si ejecutas tu Plan A con claridad, estructura y la determinación de no detenerte.",
    context: "Sobre reinvención y liderazgo",
  },
  {
    quote: "Llevo 35 años construyendo narrativas para otros. La más importante que he construido es la mía propia.",
    context: "Sobre su trayectoria personal",
  },
  {
    quote: "La diferencia entre un sueño y un negocio es la ejecución. Y la ejecución tiene un método.",
    context: "Sobre emprendimiento",
  },
];

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
    title: "Edición internacional Spring/Summer 2025",
    date: "2025",
    url: "#",
    tier: "Internacional",
    desc: "Presencia editorial en la revista de moda y cultura distribuida en más de 90 países.",
  },
  {
    outlet: "El Venezolano",
    country: "Madrid, España",
    type: "Artículo de página completa",
    title: "Los escritores venezolanos Carmen Victoria Pardo y Nelson Bustamante llegan a Madrid",
    date: "Mayo 2023",
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
    desc: "Cobertura del lanzamiento en el marco del FILBO 2023.",
  },
  {
    outlet: "El Diario de Pereira",
    country: "Colombia",
    type: "Reseña literaria",
    title: "Jugando a Ser Dios — análisis literario",
    date: "30 de abril, 2023",
    url: "https://www.eldiario.com.co/seccion-d/jugando-a-ser-dios/",
    tier: "Tier 1",
    desc: "Reseña editorial en uno de los diarios regionales más importantes de Colombia.",
  },
];

export default function PrensaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
              <div>
                <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
                  Inicio / Sala de Prensa
                </p>
                <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                  Sala de Prensa
                </h1>
                <div className="gold-divider" />
                <p className="text-[var(--muted)] font-[family-name:var(--font-inter)] text-sm leading-relaxed mt-4 max-w-lg">
                  Recursos para periodistas, productores y podcasters. Bio verificada, ángulos de historia,
                  citas autorizadas y cobertura previa. Respuesta en menos de 48 horas.
                </p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--accent)]/30 p-6">
                <p className="text-xs text-[var(--accent)] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] mb-3">
                  Contacto para Prensa
                </p>
                <div className="space-y-2 text-sm font-[family-name:var(--font-inter)] mb-4">
                  <p className="text-[var(--muted)]">
                    <span className="text-[var(--foreground)]">Email:</span>{" "}
                    <a href="mailto:media@carmenvictoriapardo.com" className="hover:text-[var(--accent)] transition-colors">
                      media@carmenvictoriapardo.com
                    </a>
                  </p>
                  <p className="text-[var(--muted)]">
                    <span className="text-[var(--foreground)]">WhatsApp:</span>{" "}
                    <a href="https://wa.me/17869756228" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
                      +1 (786) 975-6228
                    </a>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/media-kit"
                    className="text-center text-sm px-4 py-2.5 bg-[var(--accent)] text-black font-semibold font-[family-name:var(--font-inter)] hover:bg-[var(--accent-light)] transition-colors"
                  >
                    Descargar Media Kit
                  </Link>
                  <Link
                    href="/contacto"
                    className="text-center text-sm px-4 py-2.5 border border-[var(--border)] text-[var(--foreground)] font-[family-name:var(--font-inter)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                  >
                    Solicitar Entrevista
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-8 bg-[#0d0d0d] border-y border-[var(--border)]">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {quickFacts.map((f) => (
                <div key={f.label} className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--accent)] mb-1">
                    {f.value}
                  </p>
                  <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] uppercase tracking-wide">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Angles */}
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max">
            <div className="mb-8">
              <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-2">
                Para periodistas
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)]">
                Ángulos de Historia
              </h2>
              <p className="text-[var(--muted)] text-sm font-[family-name:var(--font-inter)] mt-2">
                Propuestas de historia listas para usar. Cada ángulo incluye contexto, datos y enfoque editorial.
              </p>
            </div>
            <div className="space-y-4">
              {storyAngles.map((item, i) => (
                <div
                  key={i}
                  className="bg-[var(--card)] border border-[var(--border)] p-6 hover:border-[var(--accent)]/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="shrink-0">
                      <span className="text-xs px-2 py-1 border border-[var(--accent)]/30 text-[var(--accent)] font-[family-name:var(--font-inter)]">
                        {item.angle}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-2 leading-snug">
                        {item.headline}
                      </h3>
                      <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Quotes */}
        <section className="section-padding bg-[#0d0d0d]">
          <div className="container-max">
            <div className="mb-8">
              <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-2">
                Reproducción autorizada
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)]">
                Citas para Prensa
              </h2>
              <p className="text-[var(--muted)] text-sm font-[family-name:var(--font-inter)] mt-2">
                Frases de Carmen Victoria Pardo autorizadas para su uso editorial sin necesidad de consulta previa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pressQuotes.map((q, i) => (
                <div
                  key={i}
                  className="bg-[var(--card)] border border-[var(--border)] p-6 relative"
                >
                  <span className="absolute top-4 left-5 font-[family-name:var(--font-playfair)] text-5xl text-[var(--accent)]/15 font-bold leading-none select-none">
                    "
                  </span>
                  <blockquote className="font-[family-name:var(--font-playfair)] text-[var(--foreground)] text-lg leading-relaxed mt-4 mb-3 italic">
                    "{q.quote}"
                  </blockquote>
                  <p className="text-xs text-[var(--accent)] font-[family-name:var(--font-inter)] uppercase tracking-wide">
                    — Carmen Victoria Pardo · {q.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Coverage */}
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max">
            <div className="mb-8">
              <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-2">
                Cobertura verificada
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)]">
                En los Medios
              </h2>
            </div>
            <div className="space-y-4">
              {pressItems.map((item) => (
                <article
                  key={item.outlet + item.date}
                  className="bg-[var(--card)] border border-[var(--border)] p-6 hover:border-[var(--accent)]/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] text-lg">
                          {item.outlet}
                        </h3>
                        <span className="text-xs px-2 py-0.5 border border-[var(--accent)]/30 text-[var(--accent)] font-[family-name:var(--font-inter)]">
                          {item.tier}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-2">
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
          </div>
        </section>

        {/* CTA final */}
        <section className="section-padding bg-[#0d0d0d] border-t border-[var(--border)]">
          <div className="container-max text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)] mb-3">
              ¿Tienes una historia en mente?
            </h2>
            <p className="text-[var(--muted)] max-w-lg mx-auto font-[family-name:var(--font-inter)] text-sm mb-6 leading-relaxed">
              Respondo personalmente en menos de 48 horas. Puedo adaptar mi participación al
              formato que necesites: entrevista escrita, podcast, panel, keynote o columna de opinión.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:media@carmenvictoriapardo.com"
                className="px-8 py-3 bg-[var(--accent)] text-black font-semibold text-sm font-[family-name:var(--font-inter)] hover:bg-[var(--accent-light)] transition-colors"
              >
                media@carmenvictoriapardo.com
              </a>
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
