// sections/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <Section className="border-t border-neutral-900 bg-[#05050a] relative overflow-hidden pt-24 pb-12">
      {/* Resplandor de fondo invertido ascendente */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#2D6AEF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center space-y-8 relative z-10 max-w-3xl mx-auto">
        <div className="space-y-3">
          <h2 className="font-lexend text-4xl font-black text-white tracking-tighter">
            ¿Listo para tu Landing de Élite?
          </h2>
          <p className="text-lg text-[#8A8F98] max-w-xl mx-auto font-sans leading-relaxed">
            Contáctanos hoy y transforma tu visión digital en una máquina de conversiones definitiva.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/65947291"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-[#050509] px-9 py-4.5 rounded-2xl text-base font-bold hover:bg-neutral-100 transition-colors shadow-xl shadow-[#2D6AEF]/10"
          >
            <span>Escribir a WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </motion.a>
        </div>

        <div className="pt-16 border-t border-neutral-900 text-center">
          <p className="text-xs text-neutral-600 font-medium tracking-widest uppercase">
            © 2026 Luma Webs &bull; Todos los derechos reservados.
          </p>
        </div>
      </div>
    </Section>
  );
};