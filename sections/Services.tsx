"use client";

import { FadeIn } from "../components/components/FadeIn";
import { Monitor, Layout, RefreshCw, Wrench, ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/config";

const services = [
  {
    icon: Layout,
    title: "Página simple",
    description:
      "Una sola página que explica tu negocio, muestra lo importante y permite que te escriban.",
    benefit: "Ideal si quieres empezar rápido y verte más confiable.",
    gradient: "from-blue-500/10 to-indigo-500/5",
    border: "hover:border-blue-500/30",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Monitor,
    title: "Página completa",
    description:
      "Varias secciones o páginas para mostrar servicios, fotos, precios, preguntas y contacto.",
    benefit: "Ideal si tienes más información que contar.",
    gradient: "from-emerald-500/10 to-teal-500/5",
    border: "hover:border-emerald-500/30",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: RefreshCw,
    title: "Mejorar tu página actual",
    description:
      "Ordeno, actualizo y hago más clara una página que ya existe para que se vea mejor.",
    benefit: "Tu página se entiende mejor sin empezar de cero.",
    gradient: "from-amber-500/10 to-orange-500/5",
    border: "hover:border-amber-500/30",
    iconBg: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Wrench,
    title: "Ayuda cada mes",
    description:
      "Cambio textos, fotos, horarios, precios o detalles cuando tu negocio lo necesite.",
    benefit: "No te quedas solo después de publicar la página.",
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
              ¿Qué necesitas para tu negocio?
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Elige la opción que más se parezca a lo que necesitas. Si no estás seguro, te ayudo a decidir.
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

        <FadeIn delay={0.18}>
          <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="max-w-xl">
                <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-300/70 mb-2">
                  Dudas de servicio
                </p>
                <h3 className="text-base md:text-lg font-semibold text-zinc-50 mb-1.5">
                  ¿No sabes cuál opción elegir?
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Escríbeme por WhatsApp y te digo cuál opción te conviene según tu negocio.
                </p>
              </div>

              <a
                href={site.whatsappLinks.serviceQuestion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#1fa854] md:shrink-0"
                aria-label="Consultar dudas sobre servicios por WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                Resolver duda por WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
