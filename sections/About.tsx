"use client";

import { FadeIn } from "../components/components/FadeIn";
import { MessageCircle, User, Layers, Award } from "lucide-react";

const values = [
  {
    icon: MessageCircle,
    title: "Comunicación directa",
    description: "Hablas directamente con quien desarrolla tu proyecto. Sin intermediarios ni equipos de ventas.",
  },
  {
    icon: User,
    title: "Trato personalizado",
    description: "Cada proyecto es único. No usamos plantillas genéricas ni soluciones de catálogo.",
  },
  {
    icon: Layers,
    title: "Soluciones adaptadas",
    description: "Analizamos tu caso y construimos lo que realmente necesitas, ni más ni menos.",
  },
  {
    icon: Award,
    title: "Calidad antes que cantidad",
    description: "Preferimos hacer pocos proyectos bien hechos a muchos proyectos mediocres.",
  },
];

export const About = () => {
  return (
    <section id="nosotros" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Diseño y desarrollo web con atención al detalle
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Adan Labs es un estudio digital independiente. Trabajo directamente con emprendedores,
              negocios locales y profesionales que necesitan una presencia web profesional,
              sin complicaciones ni procesos corporativos innecesarios.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="rounded-xl border border-zinc-800/80 bg-[#0c0c0e] p-6 md:p-7">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-zinc-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-50 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
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
