"use client";

import { FadeIn } from "../components/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Análisis de objetivos, flujos actuales y definición de alcance técnico. Identificamos puntos de fricción y oportunidades de automatización.",
  },
  {
    number: "02",
    title: "Arquitectura",
    description:
      "Diseño de estructura de datos, integraciones necesarias y mapa de automatización. Definimos el stack técnico y el plan de implementación.",
  },
  {
    number: "03",
    title: "UX/UI",
    description:
      "Interfaces precisas, sistemáticas y orientadas a conversión. Cada elemento cumple una función específica dentro del flujo del usuario.",
  },
  {
    number: "04",
    title: "Desarrollo",
    description:
      "Implementación con Next.js, APIs y sistemas en tiempo real. Código modular, escalable y documentado.",
  },
  {
    number: "05",
    title: "Automatización",
    description:
      "Conexión de herramientas, configuración de webhooks y flujos operativos. Pruebas de integración y validación de pipelines.",
  },
  {
    number: "06",
    title: "Optimización",
    description:
      "Pruebas de rendimiento, ajustes de velocidad, SEO técnico y puesta en producción. Monitoreo post-lanzamiento.",
  },
];

export const Process = () => {
  return (
    <section id="proceso" className="py-28 md:py-36 border-t border-[#1f1f23]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <span className="text-[10px] font-mono text-[#52525b] tracking-[0.25em] uppercase block mb-4">
              Proceso
            </span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight leading-[1.15] text-[#f5f5f5] mb-4">
              Cómo trabajamos
            </h2>
            <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed max-w-[520px]">
              Un proceso estructurado en seis etapas. Desde el descubrimiento hasta la optimización post-lanzamiento.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <div className="group flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-[18px] h-[18px] rounded-full border border-[#27272a] bg-[#09090b] flex items-center justify-center group-hover:border-[#52525b] transition-colors duration-300 shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]/40 group-hover:bg-[#3b82f6]/70 transition-colors duration-300" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-[#1f1f23] group-hover:bg-[#27272a] transition-colors duration-300" />
                  )}
                </div>
                <div className={`pb-10 ${index === steps.length - 1 ? "pb-0" : ""}`}>
                  <span className="text-[10px] font-mono text-[#52525b] tracking-widest block mb-1.5">
                    {step.number}
                  </span>
                  <h3 className="text-base font-semibold text-[#f5f5f5] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-[480px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
