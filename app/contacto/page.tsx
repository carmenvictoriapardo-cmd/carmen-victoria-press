import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contrata a Carmen Victoria Pardo para conferencias, eventos, mentoría o colaboraciones de medios. Respuesta en menos de 48 horas.",
  alternates: {
    canonical: "https://media.carmenvictoriapardo.com/contacto",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://media.carmenvictoriapardo.com" },
    { "@type": "ListItem", position: 2, name: "Contacto", item: "https://media.carmenvictoriapardo.com/contacto" },
  ],
};

export default function ContactoPage() {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left */}
              <div>
                <p className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-4">
                  Inicio / Contacto
                </p>
                <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[var(--foreground)] mb-4">
                  Trabajemos Juntos
                </h1>
                <div className="gold-divider" />
                <p className="text-[var(--muted)] font-[family-name:var(--font-inter)] text-sm mt-5 mb-8 leading-relaxed max-w-md">
                  ¿Buscas una conferencista que transforme tu evento? ¿Un mentor que
                  impulse tu liderazgo? ¿Una colaboración de medios de impacto? Respondo
                  personalmente cada solicitud en menos de 48 horas.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: "📧", label: "Email", value: "media@carmenvictoriapardo.com" },
                    { icon: "📱", label: "WhatsApp", value: "+1 (786) 975-6228" },
                    { icon: "📍", label: "Ubicación", value: "Doral, Miami, FL 33178" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p className="text-xs text-[var(--accent)] font-[family-name:var(--font-inter)] uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm text-[var(--foreground)] font-[family-name:var(--font-inter)]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/17869756228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25d366] text-white text-sm font-semibold font-[family-name:var(--font-inter)] hover:bg-[#1fba57] transition-colors duration-200"
                >
                  💬 Escribir por WhatsApp
                </a>
              </div>

              {/* Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
