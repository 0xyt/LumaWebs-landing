"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Lumina Studio",
    category: "Fotografía y video",
    description:
      "Sitio web completo para estudio fotográfico. Sistema de galerías, formulario de contacto y branding digital.",
    image: "/images/portfolio/lumina-studio.png",
    url: "https://lumina-studio-amber-eta.vercel.app/",
    tags: ["Next.js", "TailwindCSS", "Vercel"],
  },
];

export const Portfolio = () => {
  return (
    <section
      id="portafolio"
      className="py-24 md:py-32 border-t border-[rgba(255,255,255,0.02)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--text-primary)]">
              Proyectos recientes
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Conocé algunos de los trabajos que entregamos.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-[var(--bg-surface)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden hover:border-[rgba(124,111,255,0.25)] transition-all duration-300"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-video bg-[var(--bg-elevated)] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-sm font-medium text-white flex items-center gap-1.5">
                        Ver proyecto en vivo
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </a>

                <div className="p-6 md:p-8 space-y-4">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest text-[var(--accent)] uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-syne text-xl font-bold text-[var(--text-primary)] mt-1">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-1"
                    >
                      Ver proyecto en vivo →
                    </a>
                    <div className="flex gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-[var(--text-tertiary)] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}

          <FadeIn delay={0.2}>
            <p className="text-center text-sm text-[var(--text-tertiary)] mt-10">
              Más proyectos en desarrollo — Si querés ver más trabajo o discutir
              tu proyecto específico,{" "}
              <a
                href="https://wa.me/59165947291"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                contactanos directamente
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
