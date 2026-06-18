"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Una landing page puede estar lista en 5 a 7 días hábiles si el contenido está claro. Una web profesional suele tomar de 1 a 3 semanas según alcance, revisiones y material disponible.",
  },
  {
    q: "¿Necesito tener dominio propio?",
    a: "No es obligatorio para empezar. Podemos publicar una primera versión y luego conectar un dominio profesional cuando lo tengas listo.",
  },
  {
    q: "¿El precio incluye diseño y desarrollo?",
    a: "Sí. Los paquetes base incluyen diseño visual, desarrollo responsive y publicación inicial. Funciones avanzadas o contenido extra se cotizan aparte.",
  },
  {
    q: "¿Puedo pedir cambios antes de publicar?",
    a: "Sí. Revisamos la web antes del lanzamiento y ajustamos detalles de contenido, jerarquía visual y llamadas a la acción.",
  },
  {
    q: "¿La página ayuda con Google?",
    a: "Incluimos SEO base: títulos, descripción, estructura de headings, rendimiento y textos con keywords relevantes como diseño web, desarrollo web y landing pages.",
  },
  {
    q: "¿Trabajan con negocios pequeños?",
    a: "Sí. Forge Webs está pensado para emprendedores, negocios locales y profesionales independientes que necesitan una presencia digital más confiable.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-forge-border/55 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="forge-kicker mb-3">FAQ</p>
              <h2 className="text-[clamp(26px,3.5vw,42px)] font-semibold leading-[1.12] tracking-tight text-forge-text">
                Dudas comunes antes de cotizar una página web.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-forge-muted md:text-base">
              Respuestas claras para tomar una decisión sin vueltas. Si tu caso es
              distinto, lo vemos por WhatsApp.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-3xl space-y-2">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.q} delay={index * 0.04}>
              <div
                className={`rounded-xl border bg-forge-surface transition-colors duration-200 ${
                  openIndex === index
                    ? "border-copper/45"
                    : "border-forge-border hover:border-forge-muted/30"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="pr-4 text-sm font-medium text-forge-text">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-copper-light transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4">
                        <p className="text-sm leading-relaxed text-forge-muted">
                          {faq.a}
                        </p>
                      </div>
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
