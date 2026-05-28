"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/lib/config";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portafolio" },
  { label: "Nosotros", href: "#nosotros" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(9,9,13,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
      style={{ height: "64px" }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-syne text-lg font-bold text-[var(--text-primary)] tracking-tight hover:opacity-80 transition-opacity"
        >
          {site.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={site.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] border border-[var(--accent-border)] rounded-md px-4 py-2 hover:bg-[var(--accent-muted)] transition-all duration-150"
        >
          Contactar →
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-[var(--text-primary)] transition-transform ${
              mobileOpen ? "rotate-45 translate-y-[5.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[var(--text-primary)] transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[var(--text-primary)] transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-t border-[rgba(255,255,255,0.06)] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-[var(--accent)] border border-[var(--accent-border)] rounded-md px-4 py-2 text-center hover:bg-[var(--accent-muted)] transition-all"
          >
            Contactar →
          </a>
        </div>
      )}
    </header>
  );
};
