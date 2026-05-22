"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "Luma Webs superó mis expectativas. La landing premium es rápida, elegante y ha triplicado mis leads en un mes.", name: "Lucia Ch.", role: "Clínica Vital", stars: 5 },
  { quote: "Necesitaba algo rápido para mi startup. La landing básica fue la solución perfecta: limpia, funcional y responsiva.", name: "Carlos Ruiz", role: "Barberia Estilo Urbano.", stars: 4 },
  { quote: "Un trato profesional y un resultado de élite. Las animaciones en mi página premium son impresionantes.", name: "Sofía Martínez", role: "Nails Studio", stars: 5 },
];

export const Testimonials = () => {
  return (
    <Section id="testimonios" className="relative overflow-hidden py-24 md:py-32">
      <div className="text-center space-y-4 mb-16 md:mb-24 relative z-10">
        <h2 className="font-lexend text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
          La Élite Digital Opina
        </h2>
        <p className="text-lg md:text-xl text-[#8A8F98] max-w-2xl mx-auto px-4">
          Testimonios reales de clientes que han elevado su presencia online con nosotros.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto px-2 sm:px-0">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, borderColor: "rgba(45,106,239,0.25)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-[#101018]/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-neutral-800/80 space-y-6 h-full flex flex-col justify-between transition-colors duration-300 hover:bg-[#12121e]/60"
          >
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-[#2D6AEF] fill-[#2D6AEF] drop-shadow-[0_0_6px_rgba(45,106,239,0.5)]" 
                  />
                ))}
              </div>
              <p className="text-[16px] sm:text-[17px] text-neutral-300 font-normal leading-relaxed tracking-tight font-sans">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            
            <div className="pt-4 border-t border-neutral-900/60 flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-base tracking-tight">{t.name}</p>
                <p className="text-xs text-[#8A8F98] font-medium uppercase tracking-wider mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};