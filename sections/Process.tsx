"use client";

import { FadeIn } from "../components/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Evaluamos las necesidades de tu negocio y definimos la estructura ideal para tu nueva web.",
  },
  {
    number: "02",
    title: "Construcción Estética",
    description:
      "Diseñamos y programamos tu sitio cuidando cada detalle visual, la velocidad y la adaptación móvil.",
  },
  {
    number: "03",
    title: "Despliegue y Cuidado",
    description:
      "Configuramos tu dominio, lanzamos la web a través de Vercel y nos encargamos de su mantenimiento continuo.",
  },
];

export const Process = () => {
  return (
    <section id="metodo" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Nuestro Método
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Tres pasos simples para tener tu sitio web listo y funcionando.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <div className="border-t border-zinc-800/80 pt-6">
                <span className="text-[10px] font-mono text-zinc-500 tracking-widest block mb-3">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-zinc-50 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
