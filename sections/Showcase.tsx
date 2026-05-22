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
    <Section id="productos" className="py-24 md:py-32 border-t border-white/[0.02]">
      <div className="text-center space-y-4 mb-24">
        <h2 className="font-lexend text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
          Nuestras Soluciones Web
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
          Elegancia digital diseñada para el éxito de tu negocio. 
          Elige entre nuestras paginas básicas para lanzamientos rápidos o completas para una experiencia de marca premium que cautiva.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto px-4 sm:px-0">
        {products.map((product, index) => {
          const Icon = product.icon;
          const isPremium = index === 1;
          return (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative group h-full"
            >
              <GlowBorder 
                className={`h-full rounded-3xl transition-all duration-500 bg-zinc-950/[0.2] backdrop-blur-xl border ${
                  isPremium 
                    ? 'border-blue-500/20 group-hover:border-blue-500/40 shadow-2xl shadow-blue-500/[0.02]' 
                    : 'border-white/5 group-hover:border-white/10'
                }`}
              >
                {isPremium && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-blue-500/20 z-20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>RECOMENDADO</span>
                  </div>
                )}

                <div className="flex flex-col justify-between h-full space-y-10 p-8 sm:p-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="font-lexend text-2xl md:text-3xl font-bold tracking-tight text-white">
                        {product.title}
                      </h3>
                    </div>
                    
                    <p className="text-base text-zinc-400 leading-relaxed min-h-[50px]">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-4 pt-6 border-t border-white/[0.05]">
                      {product.features.map(feat => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-zinc-300">
                          <Target className="w-4 h-4 text-blue-400/70 shrink-0" /> 
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/[0.05] flex flex-col items-start gap-1">
                    <span className="text-zinc-500 text-xs font-semibold uppercase tracking-widest">Desde</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-lexend text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent tracking-tighter">
                        {product.price.replace("Bs", "")}
                      </span>
                      <span className="font-lexend text-xl font-bold text-blue-400">Bs</span>
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