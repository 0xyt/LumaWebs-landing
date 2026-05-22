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
    <Section id="testimonios" className="relative overflow-hidden py-24 md:py-32 border-t border-white/[0.02]">
      <div className="text-center space-y-4 mb-24 relative z-10">
        <h2 className="font-lexend text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
          La Élite Digital Opina
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
          Testimonios reales de clientes que han elevado su presencia online con nosotros.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto px-4 sm:px-0">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.2)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-zinc-900/[0.1] backdrop-blur-xl p-8 rounded-3xl border border-white/5 space-y-8 h-full flex flex-col justify-between transition-all duration-300 hover:bg-zinc-900/[0.2]"
          >
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-3.5 h-3.5 text-blue-400 fill-blue-400/80 filter drop-shadow-[0_0_4px_rgba(59,130,246,0.4)]" 
                  />
                ))}
              </div>
              <p className="text-[16px] text-zinc-300 font-normal leading-relaxed tracking-tight font-sans">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
              <div>
                <p className="font-semibold text-white text-base tracking-tight">{t.name}</p>
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};