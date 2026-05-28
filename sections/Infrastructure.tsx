"use client";

import { FadeIn } from "../components/components/FadeIn";

const stack = [
  { name: "Linux Mint", category: "Sistema Operativo" },
  { name: "Docker", category: "Contenedores" },
  { name: "GitHub", category: "Control de Versiones" },
  { name: "Next.js", category: "Framework Web" },
  { name: "Vercel", category: "Deploy & Hosting" },
  { name: "Tally", category: "Formularios" },
  { name: "AppFlowy", category: "Gestión de Proyectos" },
  { name: "Figma", category: "Diseño UI/UX" },
];

export const Infrastructure = () => {
  return (
    <section
      id="infraestructura"
      className="py-24 md:py-32 border-t border-zinc-800/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
              Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
              Nuestra infraestructura operativa
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Herramientas de clase mundial que garantizan estabilidad, seguridad y rendimiento en cada proyecto.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto bg-[#18181b] border border-zinc-800/60 rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stack.map((item) => (
                <div key={item.name} className="text-center">
                  <div className="text-sm font-semibold text-zinc-50 mb-1">
                    {item.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    {item.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-sm text-zinc-500 mt-8 max-w-xl mx-auto leading-relaxed">
            Cada tecnología es seleccionada por su madurez, ecosistema y capacidad de escalar.
            No seguimos modas. Elegimos herramientas que funcionan.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
