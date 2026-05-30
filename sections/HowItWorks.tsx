"use client";

import { motion } from "framer-motion";
import { Section } from "../components/components/Section";
import { FileText, MessageCircle, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Llenás el formulario",
    description: "Contanos tu idea en el formulario y decinos qué necesitas.",
  },
  {
    icon: MessageCircle,
    title: "Te contactamos",
    description: "Te escribimos por WhatsApp para entender tu proyecto.",
  },
  {
    icon: PenTool,
    title: "Diseñamos tu web",
    description: "Creamos una página web moderna y optimizada para tu negocio.",
  },
  {
    icon: Rocket,
    title: "La entregamos lista",
    description: "Recibís tu sitio publicado y listo para atraer clientes.",
  },
];

export const HowItWorks = () => {
  return (
    <Section id="como-funciona" className="py-24 md:py-32 border-t border-white/[0.02]">
      <div className="text-center space-y-4 mb-20">
        <h2 className="font-lexend text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
          ¿Cómo funciona?
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
          Cuatro pasos simples para tener tu página web lista.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4 sm:px-0">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative flex flex-col items-center text-center p-8 rounded-3xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-sm hover:border-white/10 transition-all duration-300 group"
            >
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl mb-6 group-hover:border-blue-500/30 transition-colors">
                <Icon className="w-7 h-7 text-blue-400" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-600 uppercase mb-3">
                Paso {index + 1}
              </span>
              <h3 className="font-lexend text-lg font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
