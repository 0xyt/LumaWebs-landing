"use client";

import { FadeIn } from "../components/components/FadeIn";

const stack = [
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind", category: "CSS" },
  { name: "Docker", category: "Contenedores" },
  { name: "APIs REST", category: "Integración" },
  { name: "AppFlowy", category: "Gestión" },
  { name: "Formspree", category: "Forms" },
  { name: "WhatsApp API", category: "Comunicación" },
  { name: "GitHub", category: "Versiones" },
  { name: "PostgreSQL", category: "Base de datos" },
  { name: "Node.js", category: "Runtime" },
  { name: "Vercel", category: "Deploy" },
  { name: "Figma", category: "Diseño" },
];

export const Infrastructure = () => {
  return (
    <section id="stack" className="py-28 md:py-36 border-t border-[#1f1f23]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <span className="text-[10px] font-mono text-[#52525b] tracking-[0.25em] uppercase block mb-4">
              Stack
            </span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight leading-[1.15] text-[#f5f5f5] mb-4">
              Infraestructura técnica
            </h2>
            <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed max-w-[520px]">
              Herramientas seleccionadas por su madurez, ecosistema y capacidad de escalar. Sin modas, solo tecnología que funciona.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-xl border border-[#1f1f23] bg-[#0c0c0e] p-8 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
              {stack.map((item) => (
                <div key={item.name} className="text-center">
                  <div className="text-xs md:text-sm font-medium text-[#a1a1aa] mb-1">
                    {item.name}
                  </div>
                  <div className="text-[9px] font-mono text-[#52525b] tracking-widest uppercase">
                    {item.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
