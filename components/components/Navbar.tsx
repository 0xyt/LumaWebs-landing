"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "FAQ", href: "#faq" },
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
          ? "bg-[#09090b]/60 backdrop-blur-sm border-b border-[#1f1f23]"
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
          <span className="text-[#f5f5f5] text-sm font-semibold tracking-tight">
            Adan Labs
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-md text-xs px-3.5 py-1.5 bg-[#f5f5f5] text-[#09090b] font-medium hover:bg-[#e4e4e7] transition-all"
        >
          Agendar diagnóstico
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1 p-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-4 h-[1px] bg-[#a1a1aa] transition-all ${mobileOpen ? "rotate-45 translate-y-[2.5px] w-4" : ""}`} />
          <span className={`block w-4 h-[1px] bg-[#a1a1aa] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-4 h-[1px] bg-[#a1a1aa] transition-all ${mobileOpen ? "-rotate-45 -translate-y-[2.5px] w-4" : ""}`} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-sm border-t border-[#1f1f23] px-6 py-5 space-y-3.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xs text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block text-xs font-medium bg-[#f5f5f5] text-[#09090b] rounded-md px-3.5 py-1.5 text-center hover:bg-[#e4e4e7] transition-all mt-2"
          >
            Agendar diagnóstico
          </a>
        </div>
      )}
    </header>
  );
};
