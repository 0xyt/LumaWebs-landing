"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Una landing básica: 3-5 días. Una página premium con animaciones: 7-10 días. Proyectos completos: según alcance.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo el formulario de briefing con tus ideas. Nosotros guiamos el proceso desde ahí.",
  },
  {
    q: "¿Puedo pedir cambios después de la entrega?",
    a: "Sí. Todos los planes incluyen revisiones. Cambios mayores post-entrega tienen costo adicional.",
  },
  {
    q: "¿Trabajan solo en Bolivia?",
    a: "No. Trabajamos con clientes de toda Latinoamérica. La comunicación es 100% remota.",
  },
  {
    q: "¿Usan WordPress o constructores de páginas?",
    a: "No. Todo el código es escrito a medida en Next.js. Esto garantiza rendimiento, seguridad y escalabilidad real.",
  },
  {
    q: "¿Tienen mantenimiento mensual?",
    a: "Sí. Ofrecemos planes de mantenimiento y hosting mensual. Consultanos los detalles.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 border-t border-[rgba(255,255,255,0.02)]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--text-primary)]">
              Preguntas frecuentes
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div
                className={`rounded-xl border transition-colors duration-200 cursor-pointer ${
                  openIndex === index
                    ? "border-[var(--accent-border)] bg-[var(--bg-surface)]"
                    : "border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)] hover:border-[rgba(255,255,255,0.12)]"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-sm font-medium text-[var(--text-primary)] pr-4">
                    {faq.q}
                  </h3>
                  <span
                    className={`shrink-0 text-lg leading-none transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    } text-[var(--text-tertiary)]`}
                  >
                    +
                  </span>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed px-5 pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
