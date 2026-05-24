import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
    default: "Carmen Victoria Pardo — Escritora, Conductora & Coach Internacional",
    template: "%s | Carmen Victoria Pardo",
  },
  description:
    "Escritora de 5 libros, ganadora de 2 Emmy Awards, 2 Telly Awards y Medalla de Oro ILBA. Fundadora & CEO de North Factory LLC. 35 años en medios internacionales.",
  keywords: [
    "Carmen Victoria Pardo",
    "escritora venezolana Miami",
    "coach liderazgo",
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
    title: "Carmen Victoria Pardo — Escritora, Conductora & Coach Internacional",
    description:
      "35 años en medios internacionales. 2× Emmy Awards. 5 libros publicados. Fundadora & CEO de North Factory LLC.",
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
    title: "Carmen Victoria Pardo — Escritora, Conductora & Coach Internacional",
    description:
      "35 años en medios internacionales. 2× Emmy Awards. 5 libros publicados.",
    images: ["/images/og-default.jpg"],
  },
  verification: {
    google: "571c33d16a66c6fb",
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
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
