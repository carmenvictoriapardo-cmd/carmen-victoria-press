import Link from "next/link";

const socialLinks = [
  { href: "https://www.instagram.com/soycarmenvictoriapardo", label: "Instagram" },
  { href: "https://www.tiktok.com/@soycarmenvictoriapardo", label: "TikTok" },
  { href: "https://www.facebook.com/cvpardo1", label: "Facebook" },
  { href: "https://www.linkedin.com/in/carmen-victoria-pardo-4454837", label: "LinkedIn" },
  { href: "https://www.youtube.com/@Carmenvictoriapardo", label: "YouTube" },
];

const podcastLinks = [
  { href: "https://podcasts.apple.com/us/podcast/sin-plan-b/id1814360334", label: "Apple Podcasts" },
  { href: "https://open.spotify.com/show/4NZXxUFOqxvnxwaSfLht08", label: "Spotify" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#080808]">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3
              className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-3"
              style={{ color: "var(--accent)" }}
            >
              Carmen Victoria Pardo
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">
              Empresaria, autora y estratega de negocios con 35 años en medios internacionales.
            </p>
            <p className="text-xs text-[var(--muted)] mt-3">
              Doral, Miami, FL 33178
            </p>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4 font-[family-name:var(--font-inter)] tracking-widest uppercase">
              Redes Sociales
            </h4>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Podcast + Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4 font-[family-name:var(--font-inter)] tracking-widest uppercase">
              Sin Plan B — Podcast
            </h4>
            <ul className="flex flex-col gap-2 mb-6">
              {podcastLinks.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3 font-[family-name:var(--font-inter)] tracking-widest uppercase">
              North Factory LLC
            </h4>
            <a
              href="https://northfactoryllc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-inter)]"
            >
              northfactoryllc.com
            </a>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)]">
            © {new Date().getFullYear()} Carmen Victoria Pardo. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link
              href="/prensa"
              className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-inter)]"
            >
              Prensa
            </Link>
            <Link
              href="/media-kit"
              className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-inter)]"
            >
              Media Kit
            </Link>
            <Link
              href="/contacto"
              className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-inter)]"
            >
              Contacto
            </Link>
            <Link
              href="/en"
              className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-inter)]"
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
