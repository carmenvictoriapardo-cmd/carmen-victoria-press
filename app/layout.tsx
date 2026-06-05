import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-1Q5RPT3B4Z";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://media.carmenvictoriapardo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carmen Victoria Pardo — Empresaria, Autora & Estratega de Negocios",
    template: "%s | Carmen Victoria Pardo",
  },
  description:
    "Fundadora & CEO de North Factory LLC. Autora de 5 libros. Estratega de negocios con 35 años en medios internacionales. 2× Emmy Awards. Ayudo a emprendedores y empresas a impulsar, estructurar y acelerar su crecimiento.",
  keywords: [
    "Carmen Victoria Pardo",
    "escritora venezolana Miami",
    "estratega de negocios",
    "business strategist",
    "emprendedora Miami",
    "North Factory LLC",
    "Emmy Award",
    "Jugando a ser Dios",
    "Sin Plan B podcast",
    "conferencista internacional",
    "método CREAR",
  ],
  authors: [{ name: "Carmen Victoria Pardo", url: siteUrl }],
  creator: "Carmen Victoria Pardo",
  publisher: "North Factory LLC",
  openGraph: {
    type: "website",
    locale: "es_US",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Carmen Victoria Pardo",
    title: "Carmen Victoria Pardo — Empresaria, Autora & Estratega de Negocios",
    description:
      "Fundadora & CEO de North Factory LLC. Autora de 5 libros. 2× Emmy Awards. Estratega de negocios con 35 años en medios internacionales.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Carmen Victoria Pardo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmen Victoria Pardo — Empresaria, Autora & Estratega de Negocios",
    description:
      "Fundadora & CEO de North Factory LLC. Autora de 5 libros. 2× Emmy Awards. 35 años en medios internacionales.",
    images: ["/images/og-default.jpg"],
  },
  verification: {
    google: "lz_MMrKVUgd3Fg-mS4b8jpXEjuaQw2L_xmR0NwaKdow",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-US": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
