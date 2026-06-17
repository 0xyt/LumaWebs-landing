"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Una página simple puede estar lista en 5 a 7 días hábiles. Una página más completa puede tomar de 1 a 3 semanas. En la primera conversación te digo un tiempo más exacto.",
  },
  {
    q: "¿Necesito tener el nombre de mi página comprado?",
    a: "No. Si todavía no lo tienes, te ayudo a conseguirlo. Si ya lo tienes, lo conectamos con tu nueva página.",
  },
  {
    q: "¿Puedo solicitar cambios?",
    a: "Sí. Revisamos la página antes de publicarla y hacemos ajustes para que quede clara y correcta.",
  },
  {
    q: "¿Puedes ayudarme después de publicar?",
    a: "Sí. Puedo ayudarte cada mes con cambios de texto, fotos, horarios, precios o correcciones pequeñas.",
  },
  {
    q: "¿Trabajan con negocios pequeños?",
    a: "Sí. Trabajo principalmente con emprendedores, negocios locales y profesionales independientes.",
  },
  {
    q: "¿La página queda publicada en internet?",
    a: "Sí. La página queda publicada para que puedas compartir el enlace con clientes por WhatsApp, redes sociales o tarjetas.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Respuestas simples para dudas comunes. Si falta algo, escríbeme directamente.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.04}>
              <div
                className={`rounded-xl border ${
                  openIndex === index
                    ? "border-zinc-700/60"
                    : "border-zinc-800/60"
                } bg-[#0c0c0e] transition-colors duration-200`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm text-zinc-300 font-medium pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
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
                        <p className="text-sm text-zinc-400 leading-relaxed">
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
