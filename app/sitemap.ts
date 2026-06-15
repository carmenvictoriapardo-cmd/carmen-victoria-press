import type { MetadataRoute } from "next";

const baseUrl = "https://media.carmenvictoriapardo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes = [
    { path: "/", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/sobre-mi", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/prensa", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/libros", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/conferencias", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/ferias-internacionales", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/contacto", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/media-kit", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/en", priority: 0.8, changeFreq: "weekly" as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
