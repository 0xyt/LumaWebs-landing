"use client";

import { FadeIn } from "../components/components/FadeIn";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Conocemos tu proyecto",
    description:
      "Conversamos sobre tu negocio, objetivos y lo que necesitas. Sin reuniones eternas ni burocracia.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseñamos la solución",
    description:
      "Creamos el diseño y la estructura pensando en tus clientes y en lo que quieres comunicar.",
  },
  {
    number: "03",
    icon: Code,
    title: "Desarrollamos el sitio",
    description:
      "Codificamos cada detalle con tecnología moderna. Rápido, responsive y optimizado.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento y soporte",
    description:
      "Publicamos tu sitio, configuramos dominio y te acompañamos después de la entrega.",
  },
];

export const Process = () => {
  return (
    <section id="proceso" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Así trabajamos
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Un proceso claro y sin complicaciones. Desde la primera conversación hasta el lanzamiento.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-zinc-700/50 to-transparent" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.number} delay={index * 0.1}>
                  <div className="md:grid md:grid-cols-[48px_1fr] gap-6 items-start md:pb-12 relative">
                    <div className="hidden md:flex relative z-10">
                      <div className="w-10 h-10 rounded-full bg-[#0c0c0e] border border-zinc-700 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                    </div>

                    <div className="md:hidden flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#0c0c0e] border border-zinc-700 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 tracking-widest">
                        {step.number}
                      </span>
                    </div>

                    <div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-xl p-5 md:p-6">
                      <div className="hidden md:flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-mono text-zinc-500 tracking-widest">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-zinc-50 mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
