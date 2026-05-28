"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Showcase", href: "#showcase" },
  { label: "Infraestructura", href: "#infraestructura" },
  { label: "Contacto", href: "#contacto" },
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
          ? "bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <rect x="2" y="2" width="24" height="24" rx="4" stroke="#fafafa" strokeWidth="1.5" />
            <path d="M8 20L20 8" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 20L20 14" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 14L14 8" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-zinc-50 text-lg font-semibold tracking-tight">
            Adan Labs
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-lg text-sm px-4 py-2 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all"
        >
          Agendar Consultoría
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-zinc-50 transition-transform ${
              mobileOpen ? "rotate-45 translate-y-[5.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-zinc-50 transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-zinc-50 transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/40 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium bg-zinc-50 text-zinc-950 rounded-lg px-4 py-2 text-center hover:bg-zinc-200 transition-all"
          >
            Agendar Consultoría
          </a>
        </div>
      )}
    </header>
  );
};
