// sections/Hero.tsx
"use client"; // Crítico para usar framer-motion (cliente)

import { motion } from "framer-motion";
import { Section } from "../components/components/Section"; // Ruta relativa correcta
import { ArrowUpRight } from "lucide-react"; // Icono fino para dar sensación de acción
import Link from "next/link"; // Importación oficial para navegación interna en Next.js

export const Hero = () => {
  return (
    <Section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 overflow-hidden bg-[#05050a]">
      {/* Patrón geométrico sutil de fondo de alta tecnología */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Iluminación con Efecto de Respiración Cinemática Premium */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#2D6AEF] rounded-full blur-[150px] pointer-events-none"
      />
      
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  // Añadimos 'flex flex-col items-center' aquí para asegurar el centrado
  className="flex flex-col items-center text-center w-full px-4 relative z-10"
>
  {/* Micro-badge */}
  <div className="inline-flex items-center gap-2.5 bg-[#2D6AEF]/5 border border-[#2D6AEF]/15 px-4 py-1.5 rounded-full backdrop-blur-md mb-6">
    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6AEF] shadow-[0_0_8px_#2D6AEF]" />
    <p className="text-xs text-[#2D6AEF] font-black tracking-[0.2em] uppercase font-sans">
      Luma Webs &bull; Estudio Digital
    </p>
  </div>
  
  {/* Título - Quitamos el mx-auto y ajustamos márgenes */}
  <h1 className="font-lexend text-4xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-[-0.04em] text-white w-full max-w-4xl">
    Digitalizamos tu visión con{" "}
    <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent block sm:inline">
      Landing Pages
    </span>{" "}
    de{" "}
    <span className="bg-gradient-to-r from-[#2D6AEF] via-[#5a8fff] to-[#9cbfff] bg-clip-text text-transparent">
      Élite.
    </span>
  </h1>
  
  {/* Descripción */}
  <p className="mt-6 text-base md:text-xl text-[#8A8F98] max-w-2xl leading-relaxed font-sans">
    Diseño geométrico pulido, velocidad extrema y arquitectura enfocada en conversiones.{" "}
    <span className="text-neutral-200 font-medium">Elevamos tu negocio</span> al estándar digital definitivo.
  </p>

  {/* ...resto del código (botones) */}
</motion.div>
        
        {/* Título de Impacto Masivo Refinado */}
        <h1 className="font-lexend text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-[-0.04em] text-white max-w-4xl mx-auto">
          Digitalizamos tu visión con{" "}
          <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent block sm:inline">
            Landing Pages
          </span>{" "}
          de{" "}
          <span className="bg-gradient-to-r from-[#2D6AEF] via-[#5a8fff] to-[#9cbfff] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(45,106,239,0.2)]">
            Élite.
          </span>
        </h1>
        
        {/* Descripción refinada con mejor contraste y peso */}
        <p className="text-lg md:text-xl text-[#8A8F98] font-normal max-w-2xl mx-auto leading-relaxed tracking-tight font-sans">
          Diseño geométrico pulido, velocidad extrema y arquitectura enfocada en conversiones.{" "}
          <span className="text-neutral-200 font-medium">Elevamos tu negocio</span> al estándar digital definitivo.
        </p>
        
        {/* Botonera de Conversión Estilo SaaS */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Botón principal redirigido inteligentemente al briefing interno */}
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/briefing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#050509] px-9 py-4.5 rounded-2xl text-base font-bold hover:bg-neutral-100 transition-colors shadow-2xl shadow-[#2D6AEF]/15"
            >
              <span>Empieza Tu Proyecto</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#productos"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#101018]/40 backdrop-blur-md text-neutral-300 border border-neutral-800/80 px-9 py-4.5 rounded-2xl text-base font-semibold hover:bg-neutral-900 hover:text-white hover:border-neutral-700 transition-all"
          >
            <span>Ver Nuestras Soluciones</span>
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
};