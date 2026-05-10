// sections/Showcase.tsx
"use client"; // Crítico para usar framer-motion (cliente)

import { motion } from "framer-motion";
import { Section } from "../components/components/Section"; // Ruta relativa correcta
import { GlowBorder } from "../components/components/GlowBorder"; // Ruta relativa correcta
import { Zap, Layers3, Target } from "lucide-react"; // Importar iconos instalados

const products = [
  {
    icon: Zap,
    title: "Landing Pages Básicas",
    description: "Esenciales y rápidas. Perfectas para validar ideas o lanzamientos de producto sencillos.",
    features: ["Diseño Responsive", "Sección Hero Impactante", "Formulario de Contacto", "Carga Rápida"],
    price: "A partir de S$XXX",
  },
  {
    icon: Layers3,
    title: "Completas (Premium)",
    description: "Experiencias de marca completas. Alto impacto visual, animaciones avanzadas y SEO.",
    features: ["Todo lo Básico", "Animaciones Premium", "Product Showcase Avanzado", "SEO On-Page Básica", "Soporte de Élite"],
    price: "A partir de S$X,XXX",
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

      <div className="grid md:grid-cols-2 gap-12">
        {products.map((product, index) => {
          const Icon = product.icon;
          const isPremium = index === 1; // La segunda tarjeta es Premium
          return (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Usamos GlowBorder para el efecto premium */}
              <GlowBorder className={isPremium ? 'shadow-2xl shadow-[#2D6AEF]/10' : ''}>
                {isPremium && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#2D6AEF] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                    RECOMENDADO
                  </div>
                )}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-neutral-800 rounded-xl">
                      <Icon className="w-8 h-8 text-[#2D6AEF]" />
                    </div>
                    <h3 className="font-lexend text-3xl font-bold tracking-tight text-white">{product.title}</h3>
                  </div>
                  
                  <p className="text-lg text-[#8A8F98] min-h-[60px]">{product.description}</p>
                  
                  <ul className="space-y-3 pt-4 border-t border-neutral-800">
                    {product.features.map(feat => (
                      <li key={feat} className="flex items-center gap-3 text-neutral-300">
                        <Target className="w-5 h-5 text-[#2D6AEF] opacity-70" /> {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8 flex items-end justify-between gap-4">
                      <p className="text-neutral-500 text-sm">Desde</p>
                      <p className="font-lexend text-5xl font-extrabold text-white tracking-tighter">{product.price}</p>
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