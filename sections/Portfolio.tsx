"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { ArrowUpRight } from "lucide-react";

// Editá estos datos con tus proyectos reales
const projects = [
  {
    name: "Clínica Vital",
    category: "Clínica",
    image: null,
    url: "https://www.notion.so",
  },
  {
    name: "Barbería Estilo Urbano",
    category: "Barbería",
    image: null,
    url: "https://www.notion.so",
  },
  {
    name: "Nails Studio",
    category: "E-commerce",
    image: null,
    url: "https://www.notion.so",
  },
];

export const Portfolio = () => {
  return (
    <Section id="portafolio" className="py-24 md:py-32 border-t border-white/[0.02]">
      <div className="text-center space-y-4 mb-20">
        <h2 className="font-lexend text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
          Proyectos recientes
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
          Conocé algunos de los trabajos que entregamos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 sm:px-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-zinc-900/[0.1] backdrop-blur-xl rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-zinc-600">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="text-xs font-medium">Screenshot</span>
                </div>
              )}
            </div>
            <div className="p-6 space-y-3">
              <div>
                <span className="text-[10px] font-semibold tracking-widest text-blue-400 uppercase">
                  {project.category}
                </span>
                <h3 className="font-lexend text-lg font-bold text-white mt-1">
                  {project.name}
                </h3>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                Ver proyecto
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
