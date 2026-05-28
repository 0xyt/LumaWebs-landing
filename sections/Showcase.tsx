"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../components/components/FadeIn";

const projects = [
  {
    name: "Lumina Studio",
    category: "Estudio Fotográfico",
    description:
      "Sistema web completo con galerías dinámicas, booking de sesiones y panel administrativo integrado.",
    gradient: "from-violet-900/30 via-violet-950/20 to-transparent",
    accent: "border-violet-500/20 group-hover:border-violet-500/40",
    url: "https://lumina-studio-amber-eta.vercel.app/",
    tags: ["NEXT.JS", "TAILWIND", "VERCEL"],
    span: "md:col-span-2",
  },
  {
    name: "FlowCore",
    category: "Automatización Inteligente",
    description:
      "Plataforma de automatización de flujos CRM con integración de WhatsApp y webhooks en tiempo real.",
    gradient: "from-blue-900/30 via-blue-950/20 to-transparent",
    accent: "border-blue-500/20 group-hover:border-blue-500/40",
    url: "#",
    tags: ["NODE.JS", "WEBHOOKS", "AI"],
    span: "",
  },
  {
    name: "Nova Dashboard",
    category: "SaaS Analytics",
    description:
      "Panel de control en tiempo real con visualización de métricas, reportes automatizados y alertas inteligentes.",
    gradient: "from-emerald-900/30 via-emerald-950/20 to-transparent",
    accent: "border-emerald-500/20 group-hover:border-emerald-500/40",
    url: "#",
    tags: ["REACT", "D3.JS", "API"],
    span: "",
  },
  {
    name: "BrandSync",
    category: "Identidad & Diseño de Marca",
    description:
      "Ecosistema de branding digital: identidad visual, guía de estilo, componentes UI y landing page corporativa.",
    gradient: "from-amber-900/30 via-amber-950/20 to-transparent",
    accent: "border-amber-500/20 group-hover:border-amber-500/40",
    url: "#",
    tags: ["FIGMA", "TAILWIND", "NEXT.JS"],
    span: "md:col-span-2",
  },
];

export const Showcase = () => {
  return (
    <section
      id="showcase"
      className="py-24 md:py-32 border-t border-zinc-800/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
              Proyectos selectos
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Cada proyecto es una pieza única de ingeniería digital. Resultados reales, código real.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block rounded-2xl border border-zinc-800/60 overflow-hidden transition-all duration-500 hover:-translate-y-1 ${project.span} ${project.accent}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />

                <div className="relative p-8 min-h-[280px] flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-zinc-50">
                        {project.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-50 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-widest text-blue-400/80 bg-blue-500/5 border border-blue-500/10 px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
