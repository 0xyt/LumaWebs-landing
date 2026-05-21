"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    // IMPORTANTE: Si aplicaste el cambio de 'fullWidth' que te sugerí antes, úsalo aquí.
    // Si NO lo has hecho, usa la propiedad 'className' para quitar los paddings extra del Section.
    <Section fullWidth className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#05050a] text-center overflow-hidden">
      
      {/* Fondo técnico */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Contenedor principal del contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl px-4 z-10 flex flex-col items-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2D6AEF]/10 border border-[#2D6AEF]/20 px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#2D6AEF] shadow-[0_0_8px_#2D6AEF]" />
          <span className="text-[10px] font-bold tracking-widest text-[#2D6AEF] uppercase">
            Luma Webs &bull; Alto Rendimiento
          </span>
        </div>

        {/* Título */}
        <h1 className="font-lexend text-4xl sm:text-7xl font-black leading-[1.1] text-white mb-6 w-full">
          Mejora tu presencia, <br className="hidden sm:block" />
          <span className="text-[#2D6AEF]">multiplica tus ventas.</span>
        </h1>

        {/* Descripción */}
        <p className="text-base sm:text-lg text-[#8A8F98] max-w-xl leading-relaxed mb-10">
          Diseñamos Landings de élite que combinan estética premium con una arquitectura orientada a la conversión.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href="/briefing"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#050509] px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform"
          >
            Empezar Proyecto <ArrowUpRight className="w-4 h-4" />
          </Link>
          
          <a
            href="#productos"
            className="inline-flex items-center justify-center bg-[#101018] text-white px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 transition-all"
          >
            Ver servicios
          </a>
        </div>
      </motion.div>
    </Section>
  );
};