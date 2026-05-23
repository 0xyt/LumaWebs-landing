"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    // padding adaptativo fluido para evitar cortes abruptos en teléfonos cortos
    <Section className="border-t border-neutral-900 bg-[#05050a] relative overflow-hidden pt-16 pb-12 md:pt-24">
      
      {/* Resplandor controlado con hardware acceleration (translateZ) para evitar lag en el scroll táctil */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] h-[250px] bg-[#2D6AEF]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none transform-gpu" 
        style={{ transform: 'translateX(-50%) translateZ(0)' }}
      />

      {/* Contenedor con padding lateral responsivo para que no pegue a los bordes de la pantalla */}
      <div className="text-center space-y-8 relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="space-y-4">
          {/* Tipografía adaptativa (text-3xl en móviles, text-4xl en desktops) con interlineado corregido */}
          <h2 className="font-lexend text-3xl sm:text-4xl font-black text-white tracking-tighter leading-tight sm:leading-none">
            ¿Tienes alguna duda?
          </h2>
          <p className="text-base sm:text-lg text-[#8A8F98] max-w-xl mx-auto font-sans leading-relaxed">
            Si tienes preguntas sobre nuestros servicios, tiempos de entrega o integraciones, escríbenos directamente. Te responderemos en pocos minutos.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/65947291"
            target="_blank"
            rel="noopener noreferrer"
            // Se normalizó el padding vertical a py-4 para cumplir con los estándares nativos de Tailwind
            className="inline-flex items-center gap-2.5 bg-white text-[#050509] px-8 py-4 rounded-2xl text-base font-bold hover:bg-neutral-100 transition-colors shadow-xl shadow-[#2D6AEF]/10 touch-manipulation min-h-[44px]"
          >
            <span>Escribir a WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </motion.a>
        </div>

        {/* Separación del Copyright adaptada */}
        <div className="pt-12 md:pt-16 border-t border-neutral-900 text-center">
          <p className="text-[10px] sm:text-xs text-neutral-600 font-medium tracking-widest uppercase">
            © 2026 Adan Labs • Todos los derechos reservados.
          </p>
        </div>
      </div>
    </Section>
  );
};