"use client";

import { FadeIn } from "../components/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Briefing estratégico",
    description:
      "Completás el formulario con los detalles de tu proyecto. Sin reuniones innecesarias, sin perder tiempo.",
  },
  {
    number: "02",
    title: "Propuesta y acuerdo",
    description:
      "Te enviamos una propuesta clara con alcance, precio y tiempos. Aprobás y arrancamos.",
  },
  {
    number: "03",
    title: "Diseño y desarrollo",
    description:
      "Construimos tu sitio con tecnología moderna. Revisás avances y dás feedback en tiempo real.",
  },
  {
    number: "04",
    title: "Entrega y soporte",
    description:
      "Publicamos tu sitio listo para funcionar. Capacitación incluida y soporte post-entrega.",
  },
];

export const Process = () => {
  return (
    <section
      id="proceso"
      className="py-24 md:py-32 border-t border-[rgba(255,255,255,0.02)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-20">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--text-primary)]">
              Cómo trabajamos
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Un proceso claro, sin sorpresas. Sabés en todo momento en qué
              etapa está tu proyecto.
            </p>
          </div>
        </FadeIn>

        <div className="hidden lg:flex items-start justify-between gap-8 relative">
          <div
            className="absolute top-8 left-0 right-0 border-t border-dashed border-[rgba(255,255,255,0.1)]"
            style={{ top: "24px" }}
          />
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.15}>
              <div className="relative flex flex-col items-center text-center flex-1 px-4">
                <span className="font-mono text-lg font-medium text-[var(--accent)] mb-6 relative z-10 bg-[var(--bg-base)] px-3">
                  {step.number}
                </span>
                <h3 className="font-syne text-base font-semibold text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="flex lg:hidden flex-col gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="font-mono text-sm font-medium text-[var(--accent)] w-8 h-8 flex items-center justify-center border border-[var(--accent-border)] rounded-full">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-[rgba(255,255,255,0.06)] mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="font-syne text-base font-semibold text-[var(--text-primary)] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
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
