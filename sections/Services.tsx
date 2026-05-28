"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";

const services = [
  {
    number: "01",
    title: "Landing Systems",
    description:
      "Landing pages enfocadas en conversión con Next.js, formularios inteligentes y flujos de captura automatizados. Diseño sistemático orientado a resultados medibles.",
    tags: ["Next.js", "Formularios", "CTA", "SEO"],
  },
  {
    number: "02",
    title: "Automation Systems",
    description:
      "Automatización de leads, seguimiento y procesos operativos mediante webhooks, APIs y conexión CRM. Reducción de tiempos manuales y eliminación de tareas repetitivas.",
    tags: ["Webhooks", "APIs", "Flujos", "CRM"],
  },
  {
    number: "03",
    title: "CRM Integration",
    description:
      "Integración de formularios, pipelines de ventas, notificaciones y paneles de seguimiento en tiempo real. Datos centralizados sin fricción.",
    tags: ["Formspree", "Pipelines", "Notificaciones", "Dashboard"],
  },
  {
    number: "04",
    title: "Business Dashboards",
    description:
      "Paneles operativos con métricas en vivo, visualización de datos y reportes automatizados para toma de decisiones basada en datos.",
    tags: ["Dashboards", "Tiempo real", "Reportes", "Métricas"],
  },
  {
    number: "05",
    title: "AI Integrations",
    description:
      "IA aplicada a procesos reales: asistentes inteligentes, clasificación de leads, automatización cognitiva y modelos de lenguaje integrados a flujos operativos.",
    tags: ["LLMs", "Asistentes", "NLP", "Automatización"],
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-28 md:py-36 border-t border-[#1f1f23]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <span className="text-[10px] font-mono text-[#52525b] tracking-[0.25em] uppercase block mb-4">
              Servicios
            </span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight leading-[1.15] text-[#f5f5f5] mb-4">
              Infraestructura digital operativa
            </h2>
            <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed max-w-[520px]">
              No construimos p&aacute;ginas gen&eacute;ricas. Dise&ntilde;amos sistemas que resuelven problemas operativos y generan resultados medibles.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-0.5">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.06}>
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group border-t border-[#1f1f23] py-6 md:py-7 cursor-default hover:border-[#27272a] transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                  <span className="text-[10px] font-mono text-[#52525b] tracking-widest shrink-0 mt-0.5">
                    {service.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-[#f5f5f5] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-[560px]">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[#52525b] bg-[#18181b] border border-[#1f1f23] px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
