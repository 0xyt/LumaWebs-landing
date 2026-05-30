"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";
import { Check } from "lucide-react";
import { site } from "@/lib/config";

const plans = [
  {
    name: "Inicial",
    from: 150,
    description: "Página web básica",
    features: [
      "Diseño adaptable a celulares",
      "Formulario de contacto",
      "Posicionamiento básico en Google",
      "Entrega en 5-7 días",
      "1 revisión",
    ],
    cta: "Empezar →",
    recommended: false,
  },
  {
    name: "Profesional",
    from: 400,
    description: "Página premium + identidad de marca",
    features: [
      "Todo lo del plan Inicial",
      "Animaciones profesionales",
      "Posicionamiento completo en Google",
      "Soporte 30 días",
      "3 revisiones",
      "Estadísticas de visitas",
    ],
    cta: "Empezar →",
    recommended: true,
  },
  {
    name: "Sistemas",
    from: null,
    description: "Sistemas completos",
    features: [
      "Automatización de procesos",
      "Conexión con sistemas de gestión",
      "Varias páginas y funciones",
      "Proyecto diseñado a tu medida",
      "Asesoría incluida",
    ],
    cta: "Hablar →",
    recommended: false,
  },
];

export const Pricing = () => {
  return (
    <section
      id="inversion"
      className="py-24 md:py-32 border-t border-[rgba(255,255,255,0.02)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--text-primary)]">
              Inversión
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Precios transparentes. Sin costos ocultos.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`relative flex flex-col h-full rounded-xl p-6 md:p-8 transition-all duration-200 ${
                  plan.recommended
                    ? "border border-[var(--accent-border)] bg-[var(--bg-surface)]"
                    : "border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)]"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-6 bg-[var(--accent-muted)] text-[var(--accent)] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[var(--accent-border)]">
                    Más elegido
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="font-syne text-lg font-bold text-[var(--text-primary)]">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-[var(--text-tertiary)] mb-1">
                    Desde
                  </p>
                  {plan.from ? (
                    <p className="font-syne text-[32px] font-bold text-[var(--text-primary)]">
                      ${plan.from} <span className="text-sm font-normal text-[var(--text-secondary)]">USD</span>
                    </p>
                  ) : (
                    <p className="font-syne text-[32px] font-bold text-[var(--text-primary)]">
                      A convenir
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                    >
                      <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-3 px-5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    plan.recommended
                      ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
                      : "bg-transparent text-[var(--text-secondary)] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
