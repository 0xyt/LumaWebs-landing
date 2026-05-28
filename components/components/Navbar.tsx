"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Método", href: "#metodo" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1.5" y="1.5" width="19" height="19" rx="3" stroke="#f5f5f5" strokeWidth="1.2" />
            <path d="M6.5 17L17 6.5" stroke="#f5f5f5" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M11 17L17 11" stroke="#f5f5f5" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6.5 11L11 6.5" stroke="#f5f5f5" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-zinc-50 text-sm font-semibold tracking-tight">
            Adan Labs
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-zinc-400 hover:text-zinc-50 transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-lg text-xs px-4 py-2 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all"
        >
          Iniciar un Proyecto
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1 p-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-4 h-[1px] bg-zinc-400 transition-all ${mobileOpen ? "rotate-45 translate-y-[2.5px]" : ""}`} />
          <span className={`block w-4 h-[1px] bg-zinc-400 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-4 h-[1px] bg-zinc-400 transition-all ${mobileOpen ? "-rotate-45 -translate-y-[2.5px]" : ""}`} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/40 px-6 py-5 space-y-3.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xs text-zinc-400 hover:text-zinc-50 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block text-xs font-medium bg-zinc-50 text-zinc-950 rounded-lg px-4 py-2 text-center hover:bg-zinc-200 transition-all mt-2"
          >
            Iniciar un Proyecto
          </a>
        </div>
      )}
    </header>
  );
};
