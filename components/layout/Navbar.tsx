"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/libros", label: "Libros" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/ferias-internacionales", label: "Ferias" },
  { href: "/prensa", label: "Prensa" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-lg font-bold tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          CVP
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-[family-name:var(--font-inter)] text-[#c0b9b0] hover:text-[var(--accent)] transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/media-kit"
            className="text-sm px-4 py-1.5 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-all duration-200 font-[family-name:var(--font-inter)] tracking-wide"
          >
            Media Kit
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--foreground)]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-[#2a2a2a] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#c0b9b0] hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-inter)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/media-kit"
            onClick={() => setOpen(false)}
            className="text-sm w-fit px-4 py-1.5 border border-[var(--accent)] text-[var(--accent)] font-[family-name:var(--font-inter)]"
          >
            Media Kit
          </Link>
        </div>
      )}
    </header>
  );
}
