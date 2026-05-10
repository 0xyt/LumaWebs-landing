// sections/Hero.tsx
"use client"; // Crítico para usar framer-motion (cliente)

import { motion } from "framer-motion";
import { Section } from "../components/components/Section"; // Ruta relativa correcta

export const Hero = () => {
  return (
    <Section className="relative min-h-[80vh] flex items-center pt-32">
      {/* Un sutil efecto de brillo de fondo detrás del Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2D6AEF]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl space-y-6 text-center mx-auto relative z-10"
      >
        <p className="text-[#2D6AEF] font-semibold tracking-wide uppercase">
          Adan Web Source
        </p>
        
        <h1 className="font-lexend text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white">
          Digitalizamos tu visión con <span className="text-[#2D6AEF]">Landing Pages</span> de Élite.
        </h1>
        
        <p className="text-xl md:text-2xl text-[#8A8F98] font-light max-w-3xl mx-auto leading-relaxed">
          Diseño geométrico pulido, carga ultra-rápida y optimización para conversiones. Desde básicas hasta completas, creamos tu presencia digital de alto impacto.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/65947291"
            target="_blank"
            rel="noopener noreferrer"
            // bg-white text-[#050509] es la estética premium
            className="inline-flex items-center gap-2 bg-white text-[#050509] px-10 py-5 rounded-full text-lg font-semibold hover:bg-neutral-200 transition-colors shadow-xl shadow-[#2D6AEF]/10"
          >
            Empieza Tu Proyecto
          </a>
          <a
            href="#productos"
            className="inline-flex items-center gap-2 bg-[#101018] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            Ver Nuestras Soluciones
          </a>
        </div>
      </motion.div>
    </Section>
  );
};