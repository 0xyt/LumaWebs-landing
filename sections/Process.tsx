"use client";

import { FadeIn } from "../components/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Diagnóstico y Estructura",
    description:
      "Evaluamos tu marca y planificamos la arquitectura ideal para tu nueva web.",
  },
  {
    number: "02",
    title: "Desarrollo e Identidad",
    description:
      "Programamos el sitio cuidando cada animación, píxel y velocidad de carga.",
  },
  {
    number: "03",
    title: "Lanzamiento Global",
    description:
      "Vinculamos tu dominio y desplegamos la web en producción con soporte continuo.",
  },
];

export const Process = () => {
  return (
    <section id="proceso" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Proceso
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Tres etapas, desde el diagnóstico hasta el lanzamiento de tu sitio web.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800 hidden md:block" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.1}>
                <div className="relative md:text-center">
                  <div className="hidden md:flex absolute -top-1 left-0 right-0 justify-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-zinc-800 border-2 border-zinc-600 shadow-[0_0_10px_rgba(59,130,246,0.15)]" />
                  </div>
                  <div className="md:pt-6">
                    <span className="text-[10px] font-mono text-zinc-500 tracking-widest block mb-2 md:text-center">
                      {step.number}
                    </span>
                    <h3 className="text-base font-semibold text-zinc-50 mb-2 md:text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed md:text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
