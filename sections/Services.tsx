"use client";

import { FadeIn } from "../components/components/FadeIn";
import { Code2, RefreshCw, Globe, Wrench } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web a Medida",
    description:
      "Páginas web interactivas programadas con Next.js y Tailwind para una velocidad de carga insuperable. Diseño limpio, código optimizado.",
  },
  {
    icon: RefreshCw,
    title: "Rediseño y Remodelación",
    description:
      "Transformamos sitios web obsoletos o lentos en experiencias digitales modernas, limpias y atractivas. Sin perder posicionamiento.",
  },
  {
    icon: Globe,
    title: "Gestión de Dominios y Lanzamiento",
    description:
      "Nos ocupamos de adquirir, configurar y desplegar tu web en servidores globales de alta velocidad bajo tu propio nombre.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Soporte",
    description:
      "Monitoreo continuo y actualizaciones para que tu sitio web funcione siempre al 100% sin que tengas que preocuparte por nada.",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Servicios
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Todo lo que necesitás para tener una presencia web profesional, sin complicaciones.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <div className="bg-[#18181b] border border-zinc-800/80 rounded-xl p-7 md:p-8 hover:border-zinc-700/80 transition-colors duration-300 h-full">
                  <div className="w-9 h-9 bg-zinc-800/50 rounded-lg flex items-center justify-center mb-4 text-zinc-400">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-50 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {service.description}
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
