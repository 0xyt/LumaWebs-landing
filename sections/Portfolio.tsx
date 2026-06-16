"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    type: "Landing Page",
    title: "Lumina Studio",
    subtitle: "Estudio de fotografía",
    objective:
      "Crear una presencia web profesional que refleje la calidad de su trabajo fotográfico.",
    problem:
      "Sin sitio web ni portafolio digital. Dependían únicamente de redes sociales para captar clientes.",
    result:
      "Sitio web completo con galería de trabajos, formulario de contacto y diseño que transmite la identidad de la marca.",
    tags: ["Next.js", "TailwindCSS", "Vercel"],
    url: "https://lumina-studio-amber-eta.vercel.app/",
    gradient: "from-blue-500/10 to-indigo-500/5",
  },
  {
    type: "Concepto — Landing Page",
    title: "Bloom",
    subtitle: "Marca de cuidado personal",
    objective:
      "Diseñar una landing page conceptual para una marca de skincare con enfoque en producto premium.",
    problem:
      "Demostrar cómo una marca pequeña puede competir visualmente con grandes competidores.",
    result:
      "Página conceptual con diseño minimalista, animaciones sutiles y narrativa visual centrada en el producto.",
    tags: ["Next.js", "Framer Motion", "Concepto"],
    url: null,
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    type: "Concepto — Rediseño",
    title: "Terra",
    subtitle: "Restaurante local",
    objective:
      "Modernizar la presencia digital de un restaurante local con un rediseño completo.",
    problem:
      "Sitio web desactualizado, lento y con mala experiencia en dispositivos móviles.",
    result:
      "Rediseño conceptual con menú interactivo, galería de platos y sistema de reservas optimizado para móvil.",
    tags: ["Next.js", "TailwindCSS", "Concepto"],
    url: null,
    gradient: "from-amber-500/10 to-orange-500/5",
  },
];

export const Portfolio = () => {
  return (
    <section id="portafolio" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Proyectos destacados
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Cada proyecto tiene un objetivo claro y una solución pensada a medida.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <div className={`group relative rounded-xl border border-zinc-800/80 bg-[#0c0c0e] p-6 md:p-8 transition-all duration-300 hover:scale-[1.005]`}>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono text-blue-400 tracking-widest uppercase">
                          {project.type}
                        </span>
                        {project.url && (
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-zinc-50">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-sm text-zinc-500">{project.subtitle}</p>
                      )}
                    </div>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-50 transition-colors shrink-0"
                      >
                        Ver proyecto
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    <div>
                      <p className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-1">
                        Objetivo
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.objective}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-1">
                        Problema
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-1">
                        Resultado
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-zinc-800/40">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-50 transition-colors"
                      >
                        Ver proyecto
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-zinc-600 italic">
                        Proyecto conceptual
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="text-center text-xs text-zinc-500 mt-8">
            ¿Quieres ver más trabajo o hablar sobre tu proyecto?{" "}
            <a
              href="#contacto"
              className="text-zinc-300 hover:text-zinc-50 underline transition-colors"
            >
              Contáctame directamente
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
