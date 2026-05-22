import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ferias Internacionales del Libro",
  description:
    "Carmen Victoria Pardo en 5 ferias internacionales del libro en 2023: FILBO Bogotá, Madrid, Panamá, Miami y FIL Guadalajara. Presentación de Jugando a Ser Dios.",
  alternates: {
    canonical: "https://press.carmenvictoriapardo.com/ferias-internacionales",
  },
};

const fairs = [
  {
    name: "Feria Internacional del Libro de Bogotá — FILBO 2023",
    city: "Bogotá",
    region: "Cundinamarca",
    country: "Colombia",
    countryCode: "CO",
    startDate: "2023-04-18",
    endDate: "2023-05-02",
    venue: "Corferias, Bogotá",
    flag: "🇨🇴",
    activities: ["Firma de libros", "Presentación oficial", "Entrevistas en medios"],
    note: "Una de las ferias del libro más importantes de América Latina. Carmen Victoria presentó Jugando a Ser Dios junto a Nelson Bustamante.",
  },
  {
    name: "Feria del Libro de Madrid 2023",
    city: "Madrid",
    region: "Comunidad de Madrid",
    country: "Spain",
    countryCode: "ES",
    startDate: "2023-05-26",
    endDate: "2023-06-11",
    venue: "Parque del Retiro, Madrid",
    flag: "🇪🇸",
    activities: ["Firma de libros", "Presentación", "Prensa: El Venezolano Madrid"],
    note: "La feria más importante del mundo hispanohablante. Cobertura editorial en El Venezolano (Madrid).",
  },
  {
    name: "Feria del Libro de Panamá 2023",
    city: "Ciudad de Panamá",
    region: "Panamá",
    country: "Panama",
    countryCode: "PA",
    startDate: "2023-08-16",
    endDate: "2023-08-21",
    venue: "Centro de Convenciones Atlapa",
    flag: "🇵🇦",
    activities: ["Firma de libros", "Presentación", "Entrevistas en medios"],
    note: "Expansión de la presencia literaria en Centroamérica y el Caribe.",
  },
  {
    name: "Miami Book Fair 2023",
    city: "Miami",
    region: "FL",
    country: "United States",
    countryCode: "US",
    startDate: "2023-11-12",
    endDate: "2023-11-19",
    venue: "Campus Wolfson, Miami Dade College",
    flag: "🇺🇸",
    activities: ["Entrevistas en medios"],
    note: "La feria del libro más importante de EE.UU. para el mercado hispano.",
  },
  {
    name: "FIL Guadalajara 2023",
    city: "Guadalajara",
    region: "Jalisco",
    country: "Mexico",
    countryCode: "MX",
    startDate: "2023-11-25",
    endDate: "2023-12-03",
    venue: "Expo Guadalajara",
    flag: "🇲🇽",
    activities: ["Firma de libros", "Presentación"],
    note: "La Feria Internacional del Libro de Guadalajara es la feria del libro en español más grande del mundo.",
  },
];

const eventSchemas = fairs.map((fair) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: fair.name,
  startDate: fair.startDate,
  endDate: fair.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: fair.venue,
    address: {
      "@type": "PostalAddress",
      addressLocality: fair.city,
      addressRegion: fair.region,
      addressCountry: fair.countryCode,
    },
  },
  organizer: {
    "@type": "Person",
    name: "Carmen Victoria Pardo",
    url: "https://press.carmenvictoriapardo.com",
  },
  description: fair.note,
  performer: {
    "@type": "Person",
    name: "Carmen Victoria Pardo",
  },
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://press.carmenvictoriapardo.com" },
    { "@type": "ListItem", position: 2, name: "Ferias Internacionales", item: "https://press.carmenvictoriapardo.com/ferias-internacionales" },
  ],
};

export default function FeriasPage() {
  return (
    <>
      {eventSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
                Inicio / Ferias Internacionales
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                Ferias Internacionales
              </h1>
              <div className="gold-divider-center" />
              <p className="text-[var(--muted)] max-w-2xl mx-auto font-[family-name:var(--font-inter)] text-sm mt-4">
                En 2023, Carmen Victoria Pardo presentó sus libros en 5 ferias internacionales
                en 4 países: Colombia, España, Panamá, EE.UU. y México. Una gira literaria que
                la consolidó como voz hispana en los escenarios literarios más importantes del mundo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { n: "5", label: "Ferias" },
                { n: "4", label: "Países" },
                { n: "2023", label: "Año" },
                { n: "3", label: "Continentes" },
              ].map((s) => (
                <div key={s.label} className="text-center border border-[var(--border)] p-4">
                  <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold" style={{ color: "var(--accent)" }}>
                    {s.n}
                  </p>
                  <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {fairs.map((fair) => (
                <article
                  key={fair.name}
                  className="bg-[var(--card)] border border-[var(--border)] p-6 hover:border-[var(--accent)]/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="text-5xl shrink-0">{fair.flag}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] text-xl mb-1">
                            {fair.name}
                          </h2>
                          <p className="text-sm text-[var(--accent)] font-[family-name:var(--font-inter)]">
                            {fair.city}, {fair.country}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)]">
                            {new Date(fair.startDate).toLocaleDateString("es-ES", { day: "numeric", month: "long" })} —{" "}
                            {new Date(fair.endDate).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                          </p>
                          <p className="text-xs text-[var(--muted)]/70 font-[family-name:var(--font-inter)] mt-0.5">
                            {fair.venue}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed mb-4">
                        {fair.note}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {fair.activities.map((act) => (
                          <span
                            key={act}
                            className="text-xs px-2 py-1 border border-[var(--border)] text-[var(--muted)] font-[family-name:var(--font-inter)]"
                          >
                            {act}
                          </span>
                        ))}
                      </div>
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
