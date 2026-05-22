"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section fullWidth className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#05050a] text-center overflow-hidden py-20 md:py-0">
      
      {/* Fondo técnico de alta gama */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#151921,transparent)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-4xl px-6 z-10 flex flex-col items-center"
      >
        {/* Badge más minimalista y elegante */}
        <div className="mb-8 px-4 py-1.5 border border-white/10 rounded-full backdrop-blur-sm bg-white/5">
          <span className="text-[10px] font-medium tracking-[0.25em] text-white/60 uppercase">
            Transformación Digital &bull; Luma Webs
          </span>
        </div>

        {/* Título: Ajustado el leading para móviles */}
        <h1 className="font-lexend text-[2.5rem] sm:text-7xl font-bold leading-[1.2] sm:leading-[1.05] text-white tracking-[-0.03em] mb-8">
          Diseño de alto impacto, <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            rendimiento absoluto.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-lg text-white/50 max-w-xl leading-relaxed mb-10 font-light tracking-tight">
          Arquitectura web orientada a la conversión, diseñada para marcas que no aceptan compromisos. 
          Tu visión, ejecutada con precisión técnica.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4 sm:px-0">
          <Link
            href="/briefing"
            className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-neutral-200 transition-all duration-300"
          >
            Comenzar Visión <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          
          <a
            href="#productos"
            className="inline-flex items-center justify-center text-white/70 px-8 py-4 rounded-full font-medium border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
          >
            Explore Soluciones
          </a>
        </div>
      </motion.div>
    </Section>
  );
};