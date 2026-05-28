"use client";

import { FadeIn } from "../components/components/FadeIn";
import { Check, Gauge, Timer, Search } from "lucide-react";

const plans = [
  {
    tag: "LAUNCH",
    tagBg: "bg-zinc-800/50 border-zinc-700/50 text-zinc-400",
    title: "Starter Pack",
    desc: "Ideal para lanzamientos rápidos, negocios locales o profesionales independientes.",
    price: "150",
    priceLabel: "Bs",
    priceNote: "Desde",
    gradient: "from-zinc-50 to-zinc-400",
    features: [
      "Diseño One-Page (Landing Page de impacto)",
      "Optimización móvil (Mobile-First)",
      "Configuración y Adquisición de Dominio propio",
      "Velocidad de carga ultrarrápida (Next.js)",
    ],
    metrics: [
      { label: "Rendimiento", pct: 98, color: "bg-green-500" },
      { label: "Velocidad", pct: 95, color: "bg-green-500" },
    ],
    cta: "Iniciar Proyecto",
    ctaStyle: "solid",
  },
  {
    tag: "POPULAR",
    tagBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    title: "Custom / Premium Pack",
    desc: "Sitios web corporativos completos y experiencias digitales diseñadas a medida.",
    price: "400",
    priceLabel: "Bs",
    priceNote: "Desde",
    gradient: "from-zinc-50 to-zinc-400",
    features: [
      "Estructura multipágina escalable",
      "Animaciones y transiciones de interfaz fluidas",
      "Maquetación y diseño UI exclusivo desde Figma",
      "SEO optimizado para motores de búsqueda",
    ],
    metrics: [
      { label: "Rendimiento", pct: 100, color: "bg-green-500" },
      { label: "SEO", pct: 100, color: "bg-green-500" },
    ],
    cta: "Solicitar Cotización",
    ctaStyle: "solid",
    premium: true,
  },
  {
    tag: "REMODEL",
    tagBg: "bg-zinc-800/50 border-zinc-700/50 text-zinc-400",
    title: "Rediseño Web",
    desc: "Remodelación estética y técnica de sitios web obsoletos, lentos o basados en plantillas genéricas.",
    price: "250",
    priceLabel: "Bs",
    priceNote: "Precio único",
    gradient: "from-zinc-50 to-zinc-400",
    features: [
      "Lavado de cara estético completo (Modo Oscuro Premium)",
      "Migración de código antiguo a Next.js y Tailwind CSS",
      "Optimización de Core Web Vitals (Rendimiento al 100%)",
    ],
    metrics: [
      { label: "Rendimiento", pct: 100, color: "bg-green-500" },
      { label: "Velocidad", pct: 97, color: "bg-green-500" },
    ],
    cta: "Más Información",
    ctaStyle: "outline",
  },
  {
    tag: "CARE",
    tagBg: "bg-zinc-800/50 border-zinc-700/50 text-zinc-400",
    title: "Soporte Técnico y Mantenimiento",
    desc: "Monitoreo técnico y actualizaciones periódicas para que tu sitio web nunca deje de funcionar.",
    price: "50",
    priceLabel: "Bs / por mantenimiento",
    priceNote: "Desde",
    gradient: "from-zinc-50 to-zinc-400",
    features: [
      "Actualizaciones de contenido y textos de forma inmediata",
      "Revisión preventiva de caídas del sitio",
      "Optimización y limpieza mensual de velocidad",
    ],
    metrics: [
      { label: "Tiempo activo", pct: 99.9, color: "bg-green-500" },
      { label: "Optimización", pct: 95, color: "bg-green-500" },
    ],
    cta: "Contratar",
    ctaStyle: "outline",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Planes y Precios
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Productos diseñados para cada etapa de tu negocio. Precios transparentes, sin sorpresas.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {plans.map((plan, index) => (
            <FadeIn key={plan.title} delay={index * 0.06}>
              <div
                className={`group relative rounded-xl border bg-[#0c0c0e] p-7 md:p-8 transition-all duration-300 hover:scale-[1.01] flex flex-col h-full ${
                  plan.premium
                    ? "border-zinc-700/60 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]"
                    : "border-zinc-800/80 hover:border-zinc-700/80"
                }`}
              >
                {plan.premium && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border ${plan.tagBg}`}>
                        {plan.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600">{plan.priceNote}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-50 mb-2">{plan.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-5">{plan.desc}</p>

                  <div className="mb-5">
                    <span className="text-[32px] md:text-[38px] font-bold tracking-tight bg-gradient-to-b text-transparent bg-clip-text from-zinc-50 to-zinc-400">
                      {plan.price}
                    </span>
                    <span className="text-sm text-zinc-400 ml-1.5">{plan.priceLabel}</span>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-zinc-400">
                        <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-zinc-800/40">
                    {plan.metrics.map((m) => (
                      <div key={m.label} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-zinc-500">{m.label}</span>
                          <span className="text-zinc-400 font-mono text-[11px]">{m.pct}%</span>
                        </div>
                        <div className="h-1 bg-zinc-800/40 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${m.color} transition-all duration-700`}
                            style={{ width: `${m.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {plan.ctaStyle === "solid" ? (
                    <a
                      href="#contacto"
                      className={`w-full rounded-lg text-sm px-5 py-2.5 font-medium transition-all duration-200 text-center ${
                        plan.premium
                          ? "bg-blue-500 text-white hover:bg-blue-400"
                          : "bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <a
                      href="#contacto"
                      className="w-full rounded-lg text-sm px-5 py-2.5 font-medium border border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200 text-center"
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
