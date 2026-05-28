"use client";

import { FadeIn } from "../components/components/FadeIn";

const differentiators = [
  "Entrega directa sin intermediarios",
  "Tecnología moderna, no WordPress",
  "Comunicación por WhatsApp en tiempo real",
  "Código propio, no plantillas",
];

export const About = () => {
  return (
    <section
      id="nosotros"
      className="py-24 md:py-32 border-t border-[rgba(255,255,255,0.02)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--text-primary)]">
              Quiénes somos
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4 pt-0">
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Adan Labs es un estudio digital con base en Bolivia.
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Diseñamos y construimos sistemas web que funcionan — desde una
                landing page hasta un flujo completo de automatización. Cada
                proyecto recibe atención directa, sin intermediarios, sin
                plantillas.
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Trabajamos con tecnología moderna (Next.js, Vercel, APIs) y
                diseño pensado para comunicar profesionalismo desde el primer
                segundo.
              </p>
            </div>

            <div className="bg-[var(--bg-surface)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 md:p-8 h-fit">
              <h4 className="font-syne text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                Por qué elegirnos
              </h4>
              <ul className="space-y-3">
                {differentiators.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--accent)] shrink-0 mt-0.5">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
