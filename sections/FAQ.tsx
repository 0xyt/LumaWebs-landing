"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";

const faqs = [
  {
    q: "¿Cuánto tarda el desarrollo de un sistema?",
    a: "Depende de la complejidad. Una página web con funciones básicas puede estar lista en 5-7 días hábiles. Un sistema completo con base de datos de clientes, panel de control y conexiones externas requiere entre 2 y 4 semanas. Durante la primera conversación definimos plazos precisos.",
  },
  {
    q: "¿Ofrecen mantenimiento después de la entrega?",
    a: "Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, supervisión, soporte técnico y ajustes menores. También podemos gestionar el alojamiento web y tu dominio.",
  },
  {
    q: "¿Qué incluye el servicio de automatización?",
    a: "Incluye conexión de tus herramientas mediante enlaces automáticos, configuración de procesos automatizados (captura de datos, notificaciones, seguimiento), integración con tu sistema de gestión y panel de control. Cada automatización se diseña a medida según los procesos de tu negocio.",
  },
  {
    q: "¿Trabajan con empresas fuera de Bolivia?",
    a: "Sí. Trabajamos con clientes de toda Latinoamérica y Estados Unidos. La comunicación es 100% por WhatsApp y correo electrónico, con entregas en línea.",
  },
  {
    q: "¿Puedo conectar mi sistema de gestión actual?",
    a: "Sí. Conectamos con la mayoría de sistemas de gestión del mercado mediante enlaces automáticos. Si tu sistema no tiene conexión pública, evaluamos alternativas personalizadas.",
  },
  {
    q: "¿Qué tecnología usan para los desarrollos?",
    a: "Usamos Next.js como base principal, TailwindCSS para diseños modernos, Node.js para la lógica del servidor, y Vercel para publicar tu sitio. Para automatización usamos conexiones automáticas seguras y servicios en la nube.",
  },
  {
    q: "¿Cómo manejan la seguridad de los datos?",
    a: "Todo el código se maneja en repositorios privados. Las conexiones son cifradas y seguras. No almacenamos datos sensibles en servidores propios. Las conexiones con servicios externos usan autenticación segura.",
  },
  {
    q: "¿Ofrecen alojamiento web y dominio?",
    a: "Sí. Incluimos alojamiento web con entrega rápida en todo el mundo, certificado de seguridad automático y dominio personalizado. También ofrecemos opciones de alojamiento privado si lo necesitas.",
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
