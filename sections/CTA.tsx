"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/config";

export const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 border-t border-[rgba(255,255,255,0.02)] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,111,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--text-primary)] mb-6">
            ¿Listo para construir algo real?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-10">
            Contanos tu proyecto y te respondemos en menos de 24 horas. Sin
            compromisos. Sin reuniones innecesarias.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="cta-primary text-center justify-center"
            >
              Iniciar proyecto →
            </a>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary text-center justify-center"
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
