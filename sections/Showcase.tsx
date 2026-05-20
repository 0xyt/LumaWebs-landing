// sections/Showcase.tsx
"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { GlowBorder } from "../components/components/GlowBorder";
import { Zap, Layers3, Target } from "lucide-react";

const products = [
  {
    icon: Zap,
    title: "Landing Pages Básicas",
    description: "Esenciales y rápidas. Perfectas para validar ideas o lanzamientos de producto sencillos.",
    features: ["Diseño Responsive", "Sección Hero Impactante", "Formulario de Contacto", "Carga Rápida"],
    price: "200Bs",
  },
  {
    icon: Layers3,
    title: "Completas (Premium)",
    description: "Experiencias de marca completas. Alto impacto visual, animaciones avanzadas y SEO.",
    features: ["Todo lo Básico", "Animaciones Premium", "Product Showcase Avanzado", "SEO On-Page Básica", "Soporte de Élite"],
    price: "400Bs",
  },
];

export const Showcase = () => {
  return (
    <Section id="productos">
      <div className="text-center space-y-4 mb-24">
        <h2 className="font-lexend text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
          Nuestras Soluciones Web
        </h2>
        <p className="text-xl text-[#8A8F98] max-w-2xl mx-auto">
          Elegancia geométrica diseñada para el rendimiento digital.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {products.map((product, index) => {
          const Icon = product.icon;
          const isPremium = index === 1;
          return (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative group"
            >
              <GlowBorder 
                className={`h-full transition-all duration-300 ${
                  isPremium 
                    ? 'shadow-2xl shadow-[#2D6AEF]/5 border-[#2D6AEF]/20 group-hover:border-[#2D6AEF]/40' 
                    : 'border-neutral-800 group-hover:border-neutral-700'
                }`}
              >
                {isPremium && (
                  <div className="absolute -top-3 right-6 bg-[#2D6AEF] text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-md shadow-[#2D6AEF]/20 z-20 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                    <span>RECOMENDADO</span>
                  </div>
                )}

                <div className="flex flex-col justify-between h-full space-y-8 p-2">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-2xl">
                        <Icon className="w-6 h-6 text-[#2D6AEF]" />
                      </div>
                      <h3 className="font-lexend text-2xl md:text-3xl font-bold tracking-tight text-white">
                        {product.title}
                      </h3>
                    </div>
                    
                    <p className="text-base text-[#8A8F98] leading-relaxed min-h-[50px]">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-3 pt-6 border-t border-neutral-900/60">
                      {product.features.map(feat => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-neutral-300">
                          <Target className="w-4 h-4 text-[#2D6AEF] opacity-70 shrink-0" /> 
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-neutral-900/60 flex flex-col items-start gap-0.5">
                    <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Desde</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-lexend text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent tracking-tighter">
                        {product.price.replace("Bs", "")}
                      </span>
                      <span className="font-lexend text-xl font-black text-[#2D6AEF]">Bs</span>
                    </div>
                  </div>
                </div>
              </GlowBorder>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};