import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "Media Kit oficial de Carmen Victoria Pardo: biografía, fotos profesionales, premios, temas de conferencia y datos de contacto para prensa y medios.",
  alternates: {
    canonical: "https://media.carmenvictoriapardo.com/media-kit",
  },
};

export default function MediaKitPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-[#0a0a0a]">
          <div className="container-max">
            <div className="max-w-3xl">
              <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
                Para Medios & Prensa
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[var(--foreground)] mb-4">
                Media Kit
              </h1>
              <div className="gold-divider" />
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0d0d0d]">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Short bio */}
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--foreground)] mb-3">
                    Biografía Corta (150 palabras)
                  </h2>
                  <div className="bg-[var(--card)] border border-[var(--border)] p-5">
                    <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                      Carmen Victoria Pardo es empresaria, autora y estratega de negocios con
                      35 años de trayectoria en medios internacionales. Fundadora y CEO de North
                      Factory LLC (Miami, 2008), ha producido contenido para Discovery Channel,
                      Univision y Telemundo. Ganadora de 2 Emmy Awards (Suncoast, 2019-2020),
                      2 Telly Awards New York (2009) y la Medalla de Oro del International Latino
                      Book Awards 2023. Autora de 5 libros incluyendo <em>Jugando a Ser Dios</em>
                      (en negociación para serie) y el sistema <em>Master Time</em>. Su Método
                      C.R.E.A.R.™ — que fusiona estrategia, liderazgo y ejecución — ha impactado
                      a miles de emprendedores y empresas en América Latina y EE.UU. Conduce el
                      podcast <em>Sin Plan B</em> en Apple Podcasts y Spotify.
                    </p>
                  </div>
                </div>

                {/* Long bio */}
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--foreground)] mb-3">
                    Biografía Larga (300 palabras)
                  </h2>
                  <div className="bg-[var(--card)] border border-[var(--border)] p-5 space-y-3">
                    <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                      Carmen Victoria Pardo inició su carrera en los medios de comunicación en 1991 en
                      Venezuela, cuando la televisión en español de Latinoamérica vivía su época dorada.
                      En tres décadas y media, su trayectoria la llevó de periodista a productora ejecutiva,
                      de conductora a autora galardonada, y de emprendedora local a referente internacional
                      de los negocios, la estrategia y el liderazgo.
                    </p>
                    <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                      En 2008 fundó North Factory LLC en Miami, empresa de producción de medios que ha
                      colaborado con Discovery Channel, Animal Planet, Univision, Telemundo, Zodiak Latino
                      Group y marcas de consumo masivo como Visa, Samsung, Johnson & Johnson y Nintendo.
                    </p>
                    <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                      Su catálogo literario incluye 5 libros: <em>Jugando a Ser Dios</em> (Medalla de Oro
                      ILBA 2023, en negociación para serie televisiva), <em>Playing God</em> (edición en
                      inglés), <em>Atrévete Sin Excusas</em>, y el sistema de productividad <em>Master Time</em>{" "}
                      en español e inglés. En 2023 presentó sus libros en 5 ferias internacionales en 4 países:
                      Colombia, España, Panamá, EE.UU. y México.
                    </p>
                    <p className="text-sm text-[var(--muted)] font-[family-name:var(--font-inter)] leading-relaxed">
                      Su Método C.R.E.A.R.™ — cinco movimientos para el liderazgo consciente: Conciencia,
                      Ruptura, Estructura, Ejecución con enfoque y Diferenciación — ha impactado a miles de
                      ejecutivos y emprendedores en América Latina y EE.UU. Cuenta con certificación
                      John Maxwell Team y metodología de coaching ejecutivo certificada por Spencer Hoffmann.
                    </p>
                  </div>
                </div>

                {/* Speaking topics */}
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--foreground)] mb-3">
                    Temas de Conferencia
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Liderazgo Consciente con Método C.R.E.A.R.™",
                      "Reinvención Personal: Sin Plan B",
                      "Emprendimiento de Impacto en la Era Digital",
                      "Marca Personal Internacional",
                      "Productividad Estratégica con Master Time",
                      "Media & Storytelling para el Siglo XXI",
                    ].map((t) => (
                      <div
                        key={t}
                        className="bg-[var(--card)] border border-[var(--border)] p-3 text-sm text-[var(--foreground)] font-[family-name:var(--font-inter)]"
                      >
                        <span className="text-[var(--accent)] mr-2">·</span>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                <div className="bg-[var(--card)] border border-[var(--border)] p-5">
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-4">
                    Contacto para Prensa
                  </h3>
                  <div className="space-y-2 text-sm font-[family-name:var(--font-inter)]">
                    <p className="text-[var(--muted)]">
                      <span className="text-[var(--accent)]">Email:</span><br />
                      media@carmenvictoriapardo.com
                    </p>
                    <p className="text-[var(--muted)]">
                      <span className="text-[var(--accent)]">WhatsApp:</span><br />
                      +1 (786) 975-6228
                    </p>
                    <p className="text-[var(--muted)] text-xs mt-3">
                      Respuesta garantizada en menos de 48 horas.
                    </p>
                  </div>
                  <Link
                    href="/contacto"
                    className="block mt-4 text-center text-sm py-2 bg-[var(--accent)] text-black font-semibold font-[family-name:var(--font-inter)] hover:bg-[var(--accent-light)] transition-colors"
                  >
                    Enviar Solicitud
                  </Link>
                </div>

                <div className="bg-[var(--card)] border border-[var(--border)] p-5">
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-3">
                    Reconocimientos
                  </h3>
                  <ul className="space-y-1.5 text-xs font-[family-name:var(--font-inter)] text-[var(--muted)]">
                    <li>🏆 2× Suncoast Emmy Awards</li>
                    <li>🎬 2× Telly Awards New York</li>
                    <li>📚 Medalla de Oro ILBA 2023</li>
                    <li>⭐ Marquis Who's Who 2023</li>
                  </ul>
                </div>

                <div className="bg-[var(--card)] border border-[var(--border)] p-5">
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[var(--foreground)] mb-3">
                    Comunidad Digital
                  </h3>
                  <ul className="space-y-1.5 text-xs font-[family-name:var(--font-inter)] text-[var(--muted)]">
                    <li>Instagram: 5,626</li>
                    <li>TikTok: 2,727</li>
                    <li>Facebook: 2,600</li>
                    <li>LinkedIn: 1,754</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
