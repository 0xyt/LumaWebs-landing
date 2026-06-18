"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ClipboardCheck, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Diagnóstico",
    description:
      "Entendemos tu negocio, tus clientes, tus servicios y el objetivo comercial de la web.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseño",
    description:
      "Ordenamos el contenido y definimos una interfaz clara, moderna y alineada a tu marca.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    description:
      "Construimos una página rápida, responsive y preparada para contacto, SEO base y medición futura.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Publicamos, revisamos detalles finales y dejamos tu web lista para compartir con clientes.",
  },
];

export const Process = () => {
  return (
    <section id="proceso" className="border-t border-forge-border/55 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="forge-kicker mb-3">Proceso</p>
              <h2 className="text-[clamp(26px,3.5vw,42px)] font-semibold leading-[1.12] tracking-tight text-forge-text">
                Un proceso corto, claro y sin reuniones eternas.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-forge-muted md:text-base">
              Como trabajo solo, mantengo el proceso simple: escucho, ordeno, diseño,
              desarrollo y publicamos sin convertirlo en una novela.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={index * 0.08}>
                <div className="forge-card h-full rounded-xl p-6 transition-all duration-300 hover:border-copper/40">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-widest text-copper-light">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-forge-border bg-forge-bg/60">
                      <Icon className="h-4 w-4 text-copper" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-forge-text">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-forge-muted">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
