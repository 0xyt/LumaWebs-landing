"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";
import { Code2, Workflow, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Ingeniería de Frontend & SaaS",
    description:
      "Sitios interactivos, aplicaciones web a medida y optimización extrema de rendimiento en Next.js. Experiencias de usuario que convierten.",
    tags: ["Next.js", "React", "TailwindCSS", "Vercel"],
  },
  {
    icon: Workflow,
    title: "Sistemas de Automatización Avanzada",
    description:
      "Conexión de flujos de trabajo, webhooks y optimización de bases de datos operativas integradas con tu CRM. Menos fricción, más resultados.",
    tags: ["APIs", "Webhooks", "CRM", "Bases de datos"],
  },
  {
    icon: BrainCircuit,
    title: "Integración de IA & Modelos de Lenguaje",
    description:
      "Automatización de comunicaciones, asistentes inteligentes y capas cognitivas aplicadas a tu negocio. IA que genera valor real.",
    tags: ["LLMs", "Assistants", "NLP", "Automation"],
  },
];

export const Services = () => {
  return (
    <section
      id="servicios"
      className="py-24 md:py-32 border-t border-zinc-800/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
              Servicios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
              Ingeniería de procesos digitales
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              No construimos páginas genéricas. Diseñamos sistemas que resuelven problemas reales de negocio.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative bg-[#18181b] border border-zinc-800/60 rounded-2xl p-8 cursor-default hover:border-zinc-700/80 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-5 text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-50 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-800/50 border border-zinc-700/50 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
