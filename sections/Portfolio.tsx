"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    type: "Página simple",
    title: "Lumina Studio",
    subtitle: "Estudio de fotografía",
    objective:
      "Mostrar su trabajo de forma clara y bonita para que más personas puedan contactarla.",
    problem:
      "Solo usaba redes sociales y no tenía un lugar propio para mostrar sus fotos.",
    result:
      "Una página con fotos, información clara y un formulario para recibir consultas.",
    url: "https://lumina-studio-amber-eta.vercel.app/",
    gradient: "from-blue-500/10 to-indigo-500/5",
  },
  {
    type: "Ejemplo de página simple",
    title: "Bloom",
    subtitle: "Marca de cuidado personal",
    objective:
      "Mostrar cómo se puede presentar un producto de forma simple, limpia y elegante.",
    problem:
      "La marca necesitaba verse confiable aunque todavía estuviera empezando.",
    result:
      "Una página de ejemplo donde el producto se entiende rápido y se ve atractivo.",
    url: null,
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    type: "Ejemplo de mejora",
    title: "Terra",
    subtitle: "Restaurante local",
    objective:
      "Hacer que un restaurante muestre su comida, horarios y reservas de forma más clara.",
    problem:
      "La página anterior era difícil de usar desde el celular.",
    result:
      "Un ejemplo con menú, fotos y una forma más fácil de reservar.",
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
              Ejemplos de trabajo
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Así puede verse una página cuando la información está bien ordenada.
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
                        Para qué era
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.objective}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-1">
                        Qué faltaba
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-1">
                        Qué se logró
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-3 mt-5 pt-4 border-t border-zinc-800/40">
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
                        Ejemplo de diseño
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
