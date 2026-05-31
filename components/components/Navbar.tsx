"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proceso", href: "#proceso" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 transition-all duration-500 ${
          scrolled ? "opacity-100" : "opacity-100"
        }`}
      >
        <div className="backdrop-blur-xl bg-black/40 border border-zinc-800/50 rounded-full px-5 py-2 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img
                src="/logo.png"
                alt="Adan Labs"
                className="h-8 w-auto shrink-0 transition-all duration-300 group-hover:scale-110"
              />
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r text-transparent bg-clip-text from-zinc-100 via-blue-400 to-zinc-100">
                Adan Labs
              </span>
            </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center rounded-full text-xs px-4 py-1.5 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all"
            >
              Iniciar Proyecto
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1 p-1"
              aria-label="Abrir menú"
            >
              <span className={`block w-4 h-[1px] bg-zinc-400 transition-all ${mobileOpen ? "rotate-45 translate-y-[2.5px]" : ""}`} />
              <span className={`block w-4 h-[1px] bg-zinc-400 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-4 h-[1px] bg-zinc-400 transition-all ${mobileOpen ? "-rotate-45 -translate-y-[2.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed top-20 left-4 right-4 z-50 backdrop-blur-xl bg-black/80 border border-zinc-800/60 rounded-2xl px-6 py-6 space-y-4">
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
            className="block text-sm font-medium bg-zinc-50 text-zinc-950 rounded-full px-4 py-2 text-center hover:bg-zinc-200 transition-all"
          >
            Iniciar Proyecto
          </a>
        </div>
      )}
    </>
  );
};
