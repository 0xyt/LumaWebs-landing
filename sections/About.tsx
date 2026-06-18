"use client";

import { FadeIn } from "../components/components/FadeIn";
import { AlertTriangle, Compass, ShieldCheck, TrendingUp } from "lucide-react";

const values = [
  {
    icon: AlertTriangle,
    title: "Tu negocio vive perdido entre posts e historias",
    description:
      "Las redes ayudan, pero cuando alguien quiere decidir necesita un lugar claro, rápido y confiable.",
  },
  {
    icon: Compass,
    title: "La gente pregunta lo mismo una y otra vez",
    description:
      "Una web bien armada responde qué haces, para quién es, cuánto cuesta y cómo contactarte.",
  },
  {
    icon: ShieldCheck,
    title: "Verse improvisado cuesta oportunidades",
    description:
      "No necesitas parecer una empresa gigante. Necesitas parecer alguien serio, claro y disponible.",
  },
  {
    icon: TrendingUp,
    title: "La solución es una fachada que trabaje por ti",
    description:
      "Diseño una página moderna y directa para convertir curiosidad en conversaciones reales.",
  },
];

export const About = () => {
  return (
    <section id="nosotros" className="border-t border-forge-border/55 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 grid gap-5 md:grid-cols-[0.88fr_1.12fr] md:items-end">
            <div>
              <p className="forge-kicker mb-3">El punto real</p>
              <h2 className="text-[clamp(26px,3.5vw,42px)] font-semibold leading-[1.12] tracking-tight text-forge-text">
                No estás comprando una página bonita. Estás comprando claridad.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-forge-muted md:text-base">
              Trabajo contigo para ordenar lo que vendes, mostrarlo con una estética
              premium y guiar a la persona correcta hacia el contacto. Sin humo,
              sin plantilla disfrazada.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="forge-card h-full rounded-xl p-6 transition-all duration-300 hover:border-copper/45 md:p-7">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-copper/25 bg-copper/10">
                    <Icon className="h-5 w-5 text-copper-light" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-forge-text">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-forge-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.16}>
          <div className="mt-5 rounded-3xl border border-copper/25 bg-copper/[0.08] p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="forge-kicker mb-2">Enfoque estratégico</p>
                <h3 className="mb-1.5 text-lg font-semibold text-forge-text">
                  Cada sección tiene una función comercial.
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-forge-muted">
                  Nada entra porque sí. El objetivo es que tu cliente entienda rápido,
                  confíe y tenga un siguiente paso obvio.
                </p>
              </div>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full bg-forge-text px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-copper md:shrink-0"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
