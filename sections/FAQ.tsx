"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";

const faqs = [
  {
    q: "¿Cuánto tarda el desarrollo de un sistema?",
    a: "Depende de la complejidad. Una landing page con automatización básica puede estar lista en 5-7 días hábiles. Un sistema completo con CRM, dashboards e integraciones requiere entre 2 y 4 semanas. Durante el discovery definimos plazos precisos.",
  },
  {
    q: "¿Ofrecen mantenimiento después de la entrega?",
    a: "Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, monitoreo, soporte técnico y ajustes menores. También podemos gestionar hosting y dominio.",
  },
  {
    q: "¿Qué incluye el servicio de automatización?",
    a: "Incluye conexión de herramientas mediante webhooks y APIs, configuración de flujos automatizados (captura, notificaciones, seguimiento), integración CRM y dashboard de monitoreo. Cada automatización se diseña a medida según los procesos del negocio.",
  },
  {
    q: "¿Trabajan con empresas fuera de Bolivia?",
    a: "Sí. Trabajamos con clientes de toda Latinoamérica y Estados Unidos. La comunicación es 100% remota vía WhatsApp y email, con entregas en la nube.",
  },
  {
    q: "¿Puedo integrar mi CRM actual?",
    a: "Sí. Integramos con la mayoría de CRMs del mercado mediante APIs y webhooks. Si tu CRM no tiene API pública, evaluamos alternativas personalizadas.",
  },
  {
    q: "¿Qué tecnología usan para los desarrollos?",
    a: "Next.js como framework principal, TailwindCSS para estilos, Node.js para backend, PostgreSQL para datos y Vercel para deploy. Para automatización usamos webhooks, APIs REST y servicios serverless.",
  },
  {
    q: "¿Cómo manejan la seguridad de los datos?",
    a: "Todo el código se maneja en repositorios privados de GitHub. Las conexiones son cifradas (HTTPS/SSL). No almacenamos datos sensibles en servidores propios. Las integraciones con terceros usan autenticación segura por API keys o OAuth.",
  },
  {
    q: "¿Ofrecen hosting y dominio?",
    a: "Sí. Incluimos hosting en Vercel con CDN global, certificado SSL automático y dominio personalizado. También ofrecemos opciones de hosting privado si el cliente lo requiere.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 md:py-36 border-t border-[#1f1f23]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] font-mono text-[#52525b] tracking-[0.25em] uppercase block mb-4">
              FAQ
            </span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight leading-[1.15] text-[#f5f5f5]">
              Preguntas frecuentes
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.03}>
              <div
                className={`border-t border-[#1f1f23] py-5 cursor-pointer group ${
                  openIndex === index ? "border-[#27272a]" : ""
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm text-[#a1a1aa] group-hover:text-[#f5f5f5] transition-colors duration-200 pr-4 leading-relaxed">
                    {faq.q}
                  </h3>
                  <span
                    className={`shrink-0 text-sm leading-none transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    } text-[#52525b] mt-0.5`}
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
                      <p className="text-xs text-[#52525b] leading-relaxed pt-3 pb-1 max-w-[580px]">
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
