"use client";

import { FadeIn } from "../components/components/FadeIn";
import { MessageCircle, User, Layers, Award } from "lucide-react";

const values = [
  {
    icon: MessageCircle,
    title: "Te escuchamos primero",
    description: "Antes de proponer algo, entendemos tu negocio, tus clientes y lo que quieres lograr.",
  },
  {
    icon: User,
    title: "Hablamos claro",
    description: "No usamos palabras complicadas. Te explicamos cada paso para que sepas qué estás pagando.",
  },
  {
    icon: Layers,
    title: "Pensamos en tus clientes",
    description: "Ordenamos la página para que una persona entienda rápido qué ofreces y cómo contactarte.",
  },
  {
    icon: Award,
    title: "Te acompañamos después",
    description: "La página no termina al publicarla. Si necesitas cambios o ayuda, seguimos cerca.",
  },
];

export const About = () => {
  return (
    <section id="nosotros" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              ¿Por qué nosotros?
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Porque no solo hacemos una página bonita. Te ayudamos a ordenar tu mensaje
              para que tus visitantes entiendan, confíen y den el siguiente paso.
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
