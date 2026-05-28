"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Flowly",
    industry: "Consultoría Financiera",
    problem: "Gestión manual de leads, seguimiento inconsistente y pérdida de oportunidades por demoras en la respuesta.",
    solution: "Sistema de pipelines automatizados con webhooks en tiempo real, notificaciones vía WhatsApp API y dashboard centralizado con métricas de conversión.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp API"],
    automation: "Captura → Lead scoring → Notificación → Seguimiento → Pipeline CRM",
    result: "60% más leads calificados. Respuesta inicial en menos de 2 minutos.",
    gradient: "from-indigo-950/30 to-transparent",
    border: "group-hover:border-indigo-500/30",
    url: "#",
  },
  {
    name: "PanelGo",
    industry: "Logística Operativa",
    problem: "Sin visibilidad en tiempo real, reportes manuales y datos operativos dispersos en múltiples fuentes.",
    solution: "Dashboard operativo con métricas en vivo, integración de fuentes de datos, alertas automáticas y reportes semanales generados sin intervención.",
    stack: ["Next.js", "D3.js", "APIs REST", "PostgreSQL"],
    automation: "Datos → Procesamiento → Visualización → Alertas → Reportes automáticos",
    result: "Reducción del 30% en tiempos operativos. Datos centralizados en tiempo real.",
    gradient: "from-blue-950/30 to-transparent",
    border: "group-hover:border-blue-500/30",
    url: "#",
  },
  {
    name: "BrandKit",
    industry: "Retail & Ecommerce",
    problem: "Marca inconsistente en todos los canales, web desactualizada y sin un funnel de ventas estructurado.",
    solution: "Ecosistema digital completo: landing page premium, sistema de branding, funnel automatizado con CRM y secuencia de seguimiento multicanal.",
    stack: ["Next.js", "Tailwind", "Figma", "Webhooks"],
    automation: "Lead → CRM → Email secuencia → WhatsApp → Dashboard conversión",
    result: "Landing page con tasa de conversión del 12%. Automatización completa del funnel.",
    gradient: "from-violet-950/30 to-transparent",
    border: "group-hover:border-violet-500/30",
    url: "#",
  },
];

export const Showcase = () => {
  return (
    <section id="proyectos" className="py-28 md:py-36 border-t border-[#1f1f23]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <span className="text-[10px] font-mono text-[#52525b] tracking-[0.25em] uppercase block mb-4">
              Proyectos
            </span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight leading-[1.15] text-[#f5f5f5] mb-4">
              Casos de estudio
            </h2>
            <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed max-w-[520px]">
              Proyectos reales con resultados medibles. Cada sistema está diseñado para resolver un problema operativo específico.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block rounded-xl border border-[#1f1f23] overflow-hidden transition-all duration-500 hover:-translate-y-0.5 ${project.border}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />

                <div className="relative p-7 md:p-9">
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#52525b] tracking-[0.2em] uppercase">
                        {project.industry}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold text-[#f5f5f5]">
                        {project.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#52525b] group-hover:text-[#f5f5f5] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-[10px] font-mono text-[#52525b] tracking-[0.2em] uppercase mb-1.5">Problema</div>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#52525b] tracking-[0.2em] uppercase mb-1.5">Solución</div>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 pt-5 border-t border-[#1f1f23]">
                    <div>
                      <div className="text-[10px] font-mono text-[#52525b] tracking-[0.2em] uppercase mb-2">Stack</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="text-[10px] font-mono text-[#a1a1aa] bg-[#18181b] border border-[#1f1f23] px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#52525b] tracking-[0.2em] uppercase mb-2">Automatización</div>
                      <p className="text-xs text-[#a1a1aa] leading-relaxed">{project.automation}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#52525b] tracking-[0.2em] uppercase mb-2">Resultado</div>
                      <p className="text-xs text-[#a1a1aa] leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-xs text-[#52525b] mt-10">
            M&aacute;s proyectos disponibles bajo solicitud.{" "}
            <a href="#contacto" className="text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors">
            Contactar para ver casos adicionales
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
