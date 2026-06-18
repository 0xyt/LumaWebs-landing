"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/config";

export const CTA = () => {
  return (
    <section className="relative overflow-hidden border-t border-forge-border/55 py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="mb-6 text-[clamp(28px,4vw,48px)] font-semibold leading-[1.1] tracking-tight text-forge-text">
            Tu web puede trabajar por ti todos los días.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-forge-muted">
            Cuéntanos tu proyecto y te respondemos con una ruta clara para diseñar,
            desarrollar y lanzar una página profesional.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-forge-text"
            >
              Iniciar proyecto
            </a>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forge-border px-5 py-3 text-sm font-medium text-forge-muted transition-all hover:border-copper/55 hover:text-forge-text"
            >
              <ArrowUpRight className="w-4 h-4" />
              Escribir a WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
