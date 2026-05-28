"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h1 className="text-[clamp(32px,5vw,60px)] font-semibold tracking-tight leading-[1.08] text-zinc-50 mb-6">
              Creamos y remodelamos p&aacute;ginas web de alto impacto visual.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[540px] mb-10">
              Desarrollo web a medida, diseño minimalista y optimización técnica para marcas que buscan destacar. Nos encargamos de todo: desde el código hasta tu dominio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg text-sm px-5 py-2.5 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all duration-200"
            >
              Iniciar un Proyecto
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center rounded-lg text-sm px-5 py-2.5 border border-zinc-800 text-zinc-400 hover:bg-zinc-900 transition-all duration-200"
            >
              Ver Proceso
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
