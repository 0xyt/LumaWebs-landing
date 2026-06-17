"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const trustIndicators = [
  "Te explico todo con palabras simples",
  "Hablas directo conmigo",
  "La página queda lista para recibir mensajes",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                Páginas web para negocios locales
              </span>
            </div>

            <h1 className="text-[clamp(28px,4.5vw,56px)] font-semibold tracking-tight leading-[1.08] text-zinc-50 mb-5">
              Creamos páginas web claras para que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                más clientes te encuentren y te escriban
              </span>
              .
            </h1>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[560px] mb-8">
              Hacemos que tu negocio se vea confiable en internet, explicamos tus servicios
              con palabras simples y dejamos listo el camino para que te contacten.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-lg text-sm px-5 py-2.5 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all duration-200 gap-2 group"
              >
                Ver qué puedo hacer por ti
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg text-sm px-5 py-2.5 border border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200"
              >
                Pedir cotización
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              {trustIndicators.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-blue-400" />
                  </span>
                  <span className="text-xs text-zinc-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
