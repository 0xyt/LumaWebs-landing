"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { ArrowUpRight } from "lucide-react";

// Editá estos datos con tus proyectos reales
// Editá estos datos con tus proyectos reales
// Reemplazá image con tus screenshots en /public/images/portfolio/ o URLs externas
const projects = [
  {
    name: "Clínica Vital",
    category: "Clínica",
    image: "https://picsum.photos/seed/clinic/600/450",
    url: "https://www.notion.so",
  },
  {
    name: "Barbería Estilo Urbano",
    category: "Barbería",
    image: "https://picsum.photos/seed/barber/600/450",
    url: "https://www.notion.so",
  },
  {
    name: "Nails Studio",
    category: "E-commerce",
    image: "https://picsum.photos/seed/nails/600/450",
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
            <div className="aspect-[4/3] bg-zinc-900 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
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
