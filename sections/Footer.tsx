"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <Section className="relative overflow-hidden py-24 md:py-32 border-t border-white/[0.02]">
      {/* Luz ascendente de clausura integrada */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_bottom,rgba(45,106,239,0.05),transparent_70%)] pointer-events-none" />

      <div className="text-center space-y-12 relative z-10 max-w-3xl mx-auto px-4 sm:px-0">
        <div className="space-y-4">
          <h2 className="font-lexend text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-[1.15]">
            ¿Listo para tu Landing de Élite?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-sans leading-relaxed">
            Contáctanos hoy y transforma tu visión digital en una máquina de conversiones definitiva.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/65947291"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-zinc-950 px-8 py-4 rounded-full text-base font-bold hover:bg-zinc-100 transition-colors shadow-xl shadow-white/5"
          >
            <span>Escribir a WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </motion.a>
        </div>

        <div className="pt-16 border-t border-white/[0.05] text-center">
          <p className="text-[11px] text-zinc-600 font-medium tracking-widest uppercase">
            © 2026 Luma Webs • Todos los derechos reservados.
          </p>
        </div>
      </div>
    </Section>
  );
};