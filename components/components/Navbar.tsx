"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/config";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
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
        className="fixed top-4 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4 transition-all duration-500"
      >
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-300 md:px-5 ${
            scrolled
              ? "border-forge-border bg-forge-bg/[0.82] shadow-[0_18px_60px_rgba(0,0,0,0.32)]"
              : "border-forge-border/70 bg-forge-bg/[0.62]"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-copper/55 bg-copper/10 text-[13px] font-semibold text-forge-text transition-all duration-300 group-hover:border-cyan/60 group-hover:text-cyan">
              FW
            </span>
            <span className="text-sm font-semibold tracking-tight text-forge-text sm:text-base">
              {site.name}
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-forge-muted transition-colors duration-200 hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={site.whatsappLinks.quote}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-copper px-4 py-1.5 text-xs font-semibold text-forge-text transition-all duration-200 hover:bg-copper-light hover:text-forge-bg md:inline-flex"
            >
              Cotizar
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1 p-1 md:hidden"
              aria-label="Abrir menú"
            >
              <span
                className={`block h-[1px] w-4 bg-forge-muted transition-all ${
                  mobileOpen ? "rotate-45 translate-y-[2.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1px] w-4 bg-forge-muted transition-all ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1px] w-4 bg-forge-muted transition-all ${
                  mobileOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed left-4 right-4 top-20 z-50 space-y-4 rounded-xl border border-forge-border bg-forge-bg/[0.92] px-6 py-6 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-forge-muted transition-colors hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsappLinks.quote}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block rounded-full bg-copper px-4 py-2 text-center text-sm font-semibold text-forge-text transition-all hover:bg-copper-light hover:text-forge-bg"
          >
            Cotizar mi web
          </a>
        </div>
      )}
    </>
  );
};
