"use client";

import { FadeIn } from "../components/components/FadeIn";
import { Monitor, Layout, RefreshCw, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas diseñadas para convertir visitantes en clientes. Ideales para campañas, lanzamientos y captación de leads.",
    benefit: "Capta más clientes con una página enfocada en resultados.",
    gradient: "from-blue-500/10 to-indigo-500/5",
    border: "hover:border-blue-500/30",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Monitor,
    title: "Sitios Web",
    description:
      "Presencia digital profesional para tu negocio. Sitios multiplataforma que comunican confianza desde el primer clic.",
    benefit: "Tu negocio disponible 24/7 con una imagen profesional.",
    gradient: "from-emerald-500/10 to-teal-500/5",
    border: "hover:border-emerald-500/30",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: RefreshCw,
    title: "Remodelación Web",
    description:
      "Modernizamos sitios existentes con diseño actual, mejor rendimiento y tecnología optimizada sin perder posicionamiento.",
    benefit: "Renueva tu web sin empezar desde cero.",
    gradient: "from-amber-500/10 to-orange-500/5",
    border: "hover:border-amber-500/30",
    iconBg: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Soporte técnico continuo, actualizaciones de contenido, correcciones y mejoras para mantener tu sitio siempre al día.",
    benefit: "Tu web siempre actualizada, segura y funcionando.",
    gradient: "from-purple-500/10 to-pink-500/5",
    border: "hover:border-purple-500/30",
    iconBg: "bg-purple-500/10 text-purple-400",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              ¿Cómo puedo ayudarte?
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Cada proyecto recibe atención personalizada. Esto es lo que hago:
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <div
                  className={`group relative rounded-xl border border-zinc-800/80 bg-[#0c0c0e] p-7 md:p-8 transition-all duration-300 hover:scale-[1.01] ${service.border}`}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-10 h-10 rounded-lg ${service.iconBg} flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-semibold text-zinc-50 mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-zinc-500" />
                      <span>{service.benefit}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
