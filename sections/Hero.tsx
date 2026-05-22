"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section fullWidth className="relative min-h-[95vh] flex flex-col items-center justify-center text-center overflow-hidden py-20 md:py-0">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl px-6 flex flex-col items-center"
      >
        {/* Badge estilizado ultra-fino */}
        <div className="mb-8 px-4 py-1.5 border border-white/5 rounded-full backdrop-blur-md bg-white/[0.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
            Transformación Digital &bull; Luma Webs
          </span>
        </div>

        {/* Título de Alto Impacto */}
        <h1 className="font-lexend text-[2.6rem] sm:text-7xl font-bold leading-[1.1] text-white tracking-[-0.03em] mb-8">
          Diseño de alto impacto, <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-blue-600">
            rendimiento absoluto.
          </span>
        </h1>

        {/* Subtítulo Premium */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-12 font-normal tracking-tight">
          No dejes que una página web lenta o mal diseñada ahuyente a tus clientes.
          Te ayudamos a destacar en internet con un diseño moderno de alta gama que convierte las visitas, en ventas reales." 
          
        </p>

        {/* Botones estilo SaaS Moderno */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4 sm:px-0">
          <Link
            href="/briefing"
            className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Comenzar Visión 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
          
          <a
            href="#productos"
            className="inline-flex items-center justify-center text-zinc-300 px-8 py-4 rounded-full font-medium border border-white/10 backdrop-blur-sm bg-white/[0.01] hover:border-white/20 hover:text-white transition-all duration-300"
          >
            Explorar Soluciones
          </a>
        </div>
      </motion.div>
    </Section>
  );
};