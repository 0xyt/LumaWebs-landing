"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        className="fixed left-1/2 top-4 z-50 w-full max-w-5xl -translate-x-1/2 px-4 transition-all duration-500"
      >
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-300 md:px-5 ${
            scrolled
              ? "border-forge-border bg-white/88 shadow-[0_18px_60px_rgba(17,17,17,0.10)]"
              : "border-black/10 bg-white/68"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-black/10 bg-white shadow-sm">
              <Image
                src="/forge-symbol.png"
                alt="Logo Forge Webs"
                width={36}
                height={36}
                className="h-8 w-8 object-cover"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className="text-sm font-bold tracking-tight sm:text-base"
                style={{ color: "#111111" }}
              >
                {site.name}
              </span>
              <span
                className="hidden text-[10px] font-medium sm:block"
                style={{ color: "rgba(17, 17, 17, 0.72)" }}
              >
                Webs freelance por Adán
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-forge-muted transition-colors duration-200 hover:text-forge-text"
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
              className="hidden items-center gap-1.5 rounded-full bg-copper px-4 py-1.5 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(185,95,50,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-forge-text md:inline-flex"
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
                className={`block h-[1px] w-4 bg-forge-text transition-all ${
                  mobileOpen ? "rotate-45 translate-y-[2.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1px] w-4 bg-forge-text transition-all ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1px] w-4 bg-forge-text transition-all ${
                  mobileOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed left-4 right-4 top-20 z-50 space-y-4 rounded-2xl border border-black/10 bg-white/94 px-6 py-6 shadow-[0_24px_60px_rgba(17,17,17,0.12)] backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-forge-muted transition-colors hover:text-forge-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsappLinks.quote}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block rounded-full bg-copper px-4 py-2 text-center text-sm font-semibold text-white transition-all hover:bg-forge-text"
          >
            Cotizar mi web
          </a>
        </div>
      )}
    </>
  );
};
