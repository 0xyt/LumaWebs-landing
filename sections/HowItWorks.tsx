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
      <div className="mb-20 space-y-4 text-center">
        <h2 className="text-[clamp(26px,3.5vw,42px)] font-semibold leading-[1.12] tracking-tight text-forge-text">
          ¿Cómo funciona?
        </h2>
        <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-forge-muted md:text-lg">
          Cuatro pasos simples para tener tu página web lista.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="forge-card group relative flex flex-col items-center rounded-xl p-8 text-center transition-all duration-300 hover:border-copper/40"
            >
              <div className="mb-6 rounded-lg border border-copper/25 bg-copper/10 p-4 transition-colors group-hover:border-cyan/40">
                <Icon className="h-7 w-7 text-copper-light" />
              </div>
              <span className="mb-3 font-mono text-[10px] uppercase tracking-widest text-forge-muted">
                Paso {index + 1}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-forge-text">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-forge-muted">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
