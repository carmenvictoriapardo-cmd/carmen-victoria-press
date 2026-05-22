import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos de Carmen Victoria Pardo sobre liderazgo consciente, emprendimiento, marca personal, productividad y medios internacionales.",
  alternates: {
    canonical: "https://press.carmenvictoriapardo.com/blog",
  },
};

const posts = [
  {
    slug: "metodo-crear-liderazgo-consciente",
    title: "El Método C.R.E.A.R.™: Los 5 Movimientos del Liderazgo Consciente",
    category: "Liderazgo",
    date: "2024-01-15",
    excerpt:
      "Después de 35 años en medios y 18 años como CEO, destilé el liderazgo en 5 movimientos que cualquier líder puede aplicar hoy: Conciencia, Ruptura, Estructura, Ejecución con enfoque y Diferenciación.",
    readTime: "8 min",
  },
  {
    slug: "ferias-internacionales-libro-2023",
    title: "5 Ferias Internacionales en 1 Año: Lo que Aprendí sobre la Autoridad Literaria",
    category: "Marca Personal",
    date: "2024-02-01",
    excerpt:
      "FILBO Bogotá, Madrid, Panamá, Miami, Guadalajara. En 2023 presenté mis libros en 4 países. Aquí comparto las lecciones que ningún manual de marketing editorial te enseña.",
    readTime: "10 min",
  },
  {
    slug: "emmy-awards-produccion-audiovisual",
    title: "Cómo Ganar un Emmy: Lecciones de 35 Años en Producción Audiovisual",
    category: "Medios",
    date: "2024-02-20",
    excerpt:
      "Dos Emmy Awards no caen del cielo. Son el resultado de una obsesión por la excelencia, un equipo excepcional y la claridad de saber qué historia quieres contar.",
    readTime: "9 min",
  },
  {
    slug: "north-factory-18-anos-ceo",
    title: "18 Años como CEO de North Factory LLC: Todo lo que Desearía Haber Sabido",
    category: "Emprendimiento",
    date: "2024-03-10",
    excerpt:
      "Discovery Channel, Univision, Telemundo, Visa, Samsung. En 18 años, North Factory ha producido contenido para las marcas más exigentes del mundo. Estas son las verdades que más duelen y más sirven.",
    readTime: "12 min",
  },
  {
    slug: "sin-plan-b-reinvencion-personal",
    title: "Sin Plan B: Por Qué la Reinvención Requiere Quemar los Barcos",
    category: "Desarrollo Personal",
    date: "2024-04-05",
    excerpt:
      "El nombre de mi podcast no es un error. Es una filosofía de vida que me llevó de Venezuela a Miami, de la televisión a los libros, del periodismo al coaching. Y fue exactamente así: sin red de seguridad.",
    readTime: "7 min",
  },
  {
    slug: "marca-personal-era-ia",
    title: "Tu Marca Personal en la Era de la IA: Cómo Aparecer en ChatGPT, Claude y Perplexity",
    category: "Digital",
    date: "2024-05-15",
    excerpt:
      "El nuevo SEO no es solo para Google. Las IAs son los nuevos motores de búsqueda. Te explico cómo construir autoridad digital que trascienda los algoritmos y quede grabada en los modelos de lenguaje.",
    readTime: "11 min",
  },
];

const categoryColors: Record<string, string> = {
  Liderazgo: "#c9a84c",
  "Marca Personal": "#9e7b2e",
  Medios: "#c9a84c",
  Emprendimiento: "#e8cc7a",
  "Desarrollo Personal": "#c9a84c",
  Digital: "#e8cc7a",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max">
            <div className="text-center mb-12">
              <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
                Inicio / Blog
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                Blog
              </h1>
              <div className="gold-divider-center" />
              <p className="text-[var(--muted)] max-w-xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-4">
                Ideas, estrategias y perspectivas sobre liderazgo, emprendimiento,
                medios y marca personal internacional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-300 overflow-hidden group"
                >
                  {/* Category banner */}
                  <div
                    className="h-1"
                    style={{ background: categoryColors[post.category] || "var(--accent)" }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-[family-name:var(--font-inter)] font-semibold"
                        style={{ color: categoryColors[post.category] || "var(--accent)" }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)]">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] text-lg mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)]">
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs text-[var(--accent)] hover:underline font-[family-name:var(--font-inter)]"
                      >
                        Leer →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
