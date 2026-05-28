"use client";

import { FadeIn } from "../components/components/FadeIn";

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const services = [
  {
    icon: CodeIcon,
    title: "Desarrollo Web Fullstack",
    description:
      "Sitios interactivos (Starter/Premium) programados desde cero con Next.js y TailwindCSS para una velocidad y estabilidad insuperables.",
  },
  {
    icon: RefreshIcon,
    title: "Rediseño y Remodelación Estética",
    description:
      "Tomamos tu web antigua o lenta y la transformamos en una experiencia moderna en modo oscuro que retiene clientes.",
  },
  {
    icon: GlobeIcon,
    title: "Despliegue e Infraestructura Cloud",
    description:
      "Adquisición de dominios, configuración DNS y alojamiento en servidores globales de alta velocidad a través de Vercel.",
  },
  {
    icon: ShieldIcon,
    title: "Soporte Técnico Continuo",
    description:
      "Monitoreo, actualizaciones periódicas y optimización para que tu web nunca deje de vender mientras tú descansas.",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Servicios
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Todo lo que necesitás para tener una presencia web profesional, desde el dominio hasta el mantenimiento.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <div className="group rounded-xl border border-zinc-800/80 bg-[#0c0c0e] p-7 md:p-8 hover:border-zinc-700/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] h-full">
                  <div className="w-10 h-10 bg-zinc-800/40 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zinc-700/40 transition-colors">
                    <Icon />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-50 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
