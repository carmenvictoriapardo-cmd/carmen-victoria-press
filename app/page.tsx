import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AwardsSection from "@/components/sections/AwardsSection";
import AboutSection from "@/components/sections/AboutSection";
import BooksSection from "@/components/sections/BooksSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import EventsSection from "@/components/sections/EventsSection";
import PressSection from "@/components/sections/PressSection";
import ContactCTA from "@/components/sections/ContactCTA";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carmen Victoria Pardo",
  givenName: "Carmen Victoria",
  familyName: "Pardo",
  description:
    "Empresaria, autora y estratega de negocios venezolano-estadounidense. Fundadora & CEO de North Factory LLC. 35 años en medios internacionales. Ganadora de 2 Suncoast Emmy Awards (2019), 2 Telly Awards y Medalla de Oro ILBA 2023. Creadora del Método C.R.E.A.R.™ Business.",
  url: "https://media.carmenvictoriapardo.com",
  sameAs: [
    "https://carmenvictoriapardo.com",
    "https://www.wikidata.org/wiki/Q139903862",
    "https://www.instagram.com/soycarmenvictoriapardo",
    "https://www.tiktok.com/@soycarmenvictoriapardo",
    "https://www.facebook.com/cvpardo1",
    "https://www.linkedin.com/in/carmen-victoria-pardo-4454837",
    "https://www.youtube.com/@Carmenvictoriapardo",
    "https://podcasts.apple.com/us/podcast/sin-plan-b/id1814360334",
    "https://open.spotify.com/show/4NZXxUFOqxvnxwaSfLht08",
    "https://www.amazon.com/author/carmenvictoriapardo",
    "https://northfactoryllc.com",
    "https://app.qwoted.com/sources/carmen-victoria-pardo",
  ],
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: "North Factory LLC",
    url: "https://northfactoryllc.com",
    foundingDate: "2008",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Doral",
    addressRegion: "FL",
    postalCode: "33178",
    addressCountry: "US",
  },
  nationality: "Venezuelan",
  birthPlace: "Venezuela",
  knowsAbout: [
    "Media Production",
    "Digital Marketing",
    "Leadership Training",
    "Entrepreneurship",
    "Content Development",
    "Audiovisual Production",
    "Coaching",
    "Publishing",
    "International Events",
    "Personal Development",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad Católica Andrés Bello",
      location: "Caracas, Venezuela",
    },
    {
      "@type": "EducationalOrganization",
      name: "John Maxwell Team",
    },
  ],
  award: [
    "2× Suncoast Emmy Awards (2019) — Corazones Guerreros & Un minuto en la vida de un torturado",
    "2× Telly Awards New York (2009) — El Juego Supremo & Letra y Música",
    "Gold Medal ILBA 2023 — Best Fiction: Jugando a Ser Dios",
    "Honorable Mention ILBA 2023 — Best Science Fiction",
    "Marquis Who's Who Honored Lister 2023",
    "Premio ATVC Argentina 2001 — Best Informative Journalism: Top E! Music & News",
    "Premio Monseñor Pellín Venezuela 1995 — Program of the Year: Ni lo Uno Ni lo Otro",
    "Premio Meridiano de Oro Venezuela 1994 — Radio Program of the Year: Ni lo Uno Ni lo Otro",
    "Premio Municipal de Periodismo Venezuela 1994 — Best Production: Los Años de lo Imposible",
    "Premio Municipal de Periodismo Venezuela 1994 — Best TV Program: Venezuela en Positivo",
    "Premio Monseñor Pellín Venezuela 1993 — Best TV Program: Venezuela en Positivo",
  ],
  interactionStatistic: [
    {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/FollowAction",
      userInteractionCount: 5626,
      name: "Instagram followers",
    },
    {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/FollowAction",
      userInteractionCount: 2727,
      name: "TikTok followers",
    },
    {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/FollowAction",
      userInteractionCount: 2600,
      name: "Facebook followers",
    },
    {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/FollowAction",
      userInteractionCount: 1754,
      name: "LinkedIn followers",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Carmen Victoria Pardo — Sitio Oficial de Prensa",
  url: "https://media.carmenvictoriapardo.com",
  description:
    "Sitio oficial de prensa de Carmen Victoria Pardo. Media kit, libros, conferencias y cobertura mediática.",
  inLanguage: ["es", "en"],
  about: {
    "@type": "Person",
    name: "Carmen Victoria Pardo",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://media.carmenvictoriapardo.com/buscar?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <Navbar />
      <main>
        <HeroSection />
        <AwardsSection />
        <AboutSection />
        <BooksSection />
        <SpeakingSection />
        <EventsSection />
        <PressSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
