"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl px-6 py-20 md:py-32 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-8 inline-block">
            Adan Labs &mdash; Ingeniería Digital
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mb-6 bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent"
        >
          Diseñamos y programamos infraestructuras digitales de alto rendimiento.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-12"
        >
          Fusionamos desarrollo web de vanguardia, automatizaciones inteligentes e IA para transformar operaciones en ventajas competitivas duraderas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg text-sm px-6 py-3 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all duration-300"
          >
            Agendar Consultoría Tecnológica
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center justify-center rounded-lg text-sm px-6 py-3 border border-zinc-800 text-zinc-300 hover:bg-zinc-900 transition-all duration-300"
          >
            Analizar mi Infraestructura
          </a>
        </motion.div>
      </div>
    </section>
  );
};
