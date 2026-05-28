"use client";

import { site } from "@/lib/config";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portafolio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
];

const legalLinks = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Términos y condiciones", href: "/terminos" },
];

export const Footer = () => {
  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[rgba(255,255,255,0.06)] py-[60px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <a
              href="/"
              className="font-syne text-lg font-bold text-[var(--text-primary)] tracking-tight"
            >
              {site.name}
            </a>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[240px]">
              {site.tagline}
            </p>
            <p className="text-xs text-[var(--text-tertiary)]">
              &copy; 2026 {site.name}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
              Legal y contacto
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
                >
                  <span className="text-[var(--accent)]">💬</span> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
                >
                  <span className="text-[var(--accent)]">✉</span> {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
