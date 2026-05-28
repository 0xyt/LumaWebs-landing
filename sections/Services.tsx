"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";
import { Terminal, CircuitBoard, Palette, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Terminal,
    title: "Sitios Web & Landing Pages",
    description:
      "Páginas de alto rendimiento diseñadas para convertir. Mobile-first, rápidas y optimizadas para SEO.",
    tags: ["Next.js", "TailwindCSS", "Vercel"],
  },
  {
    icon: CircuitBoard,
    title: "Automatización & Integraciones",
    description:
      "Conectamos tus herramientas y automatizamos procesos repetitivos. Menos tiempo manual, más resultados.",
    tags: ["APIs", "CRM", "WhatsApp", "Webhooks"],
  },
  {
    icon: Palette,
    title: "Branding Digital",
    description:
      "Identidad visual que transmite profesionalismo. Logo, paleta, tipografía y sistema de marca.",
    tags: ["Figma", "Identidad", "Sistema visual"],
  },
  {
    icon: BarChart3,
    title: "Funnels & Conversión",
    description:
      "Sistemas diseñados para capturar leads y convertir. Formularios inteligentes, seguimiento y análisis.",
    tags: ["Tally", "Formspree", "Analytics"],
  },
];

export const Services = () => {
  return (
    <section
      id="servicios"
      className="py-24 md:py-32 border-t border-[rgba(255,255,255,0.02)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-20">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--text-primary)]">
              Lo que construimos
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Desde una landing hasta un sistema completo. Cada proyecto es
              diseñado desde cero para tu negocio.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group bg-[var(--bg-surface)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 cursor-default hover:border-[rgba(124,111,255,0.25)] hover:bg-[var(--bg-elevated)] transition-all duration-200 h-full"
                >
                  <div className="w-9 h-9 bg-[var(--accent-muted)] rounded-lg flex items-center justify-center mb-4 text-[var(--accent)]">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-syne text-base font-semibold text-[var(--text-primary)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-[var(--text-tertiary)] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
