// sections/Testimonials.tsx
"use client"; // Crítico para usar framer-motion (cliente)

import { motion } from "framer-motion";
import { Section } from "../components/components/Section"; // Ruta relativa correcta
import { Star } from "lucide-react"; // Importar iconos instalados

const testimonials = [
  { quote: "Adan Web Source superó mis expectativas. La landing premium es rápida, elegante y ha triplicado mis leads en un mes.", name: "Dra. Elena Gómez", role: "Directora, Clínica Vital", stars: 5 },
  { quote: "Necesitaba algo rápido para mi startup. La landing básica fue la solución perfecta: limpia, funcional y responsive.", name: "Carlos Ruiz", role: "Fundador, TechNova S.A.", stars: 5 },
  { quote: "Un trato profesional y un resultado de élite. Las animaciones en mi página premium son impresionantes.", name: "Sofía Martínez", role: "CEO, Sofía M. Studio", stars: 5 },
];

export const Testimonials = () => {
  return (
    <Section id="testimonios">
      <div className="text-center space-y-4 mb-24 relative z-10">
        <h2 className="font-lexend text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
          La Élite Digital Opina
        </h2>
        <p className="text-xl text-[#8A8F98] max-w-2xl mx-auto">
          Testimonios reales de clientes que han elevado su presencia online con nosotros.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-[#101018] p-8 rounded-3xl border border-neutral-800 space-y-6 h-full flex flex-col justify-between"
          >
            <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#2D6AEF] fill-[#2D6AEF]" />)}
                </div>
                <p className="text-lg text-neutral-300 italic">\"{ t.quote}\"</p>
            </div>
            <div className="pt-4 border-t border-neutral-800 mt-6">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-[#8A8F98]">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};