"use client";

import { FadeIn } from "../components/components/FadeIn";
import { AlertTriangle, Compass, ShieldCheck, TrendingUp } from "lucide-react";

const values = [
  {
    icon: AlertTriangle,
    title: "Tu negocio depende demasiado de redes sociales",
    description:
      "Si todo vive en publicaciones o historias, tus clientes no siempre encuentran la informacion cuando necesitan decidir.",
  },
  {
    icon: Compass,
    title: "Tus clientes no encuentran informacion clara",
    description:
      "Una web bien ordenada responde rapido que ofreces, cuanto cuesta, donde estas y como contactarte.",
  },
  {
    icon: ShieldCheck,
    title: "Pierdes confianza por no tener presencia profesional",
    description:
      "El diseño, la velocidad y el contenido influyen en si una persona te escribe o sigue buscando otra opcion.",
  },
  {
    icon: TrendingUp,
    title: "La solucion es una web enfocada en conversion",
    description:
      "Creamos una pagina moderna, rapida y estrategica para convertir visitas en consultas reales.",
  },
];

export const About = () => {
  return (
    <section id="nosotros" className="border-t border-forge-border/55 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 grid gap-5 md:grid-cols-[0.88fr_1.12fr] md:items-end">
            <div>
              <p className="forge-kicker mb-3">Problema + solucion</p>
              <h2 className="text-[clamp(26px,3.5vw,42px)] font-semibold leading-[1.12] tracking-tight text-forge-text">
                Una web profesional no es decoracion. Es confianza, claridad y ventas.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-forge-muted md:text-base">
              Forge Webs transforma una idea dispersa en una presencia digital clara:
              diseño web, desarrollo web, contenido ordenado y llamados a la accion
              para negocios que quieren verse serios desde el primer clic.
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
          <div className="mt-5 rounded-xl border border-cyan/20 bg-cyan/[0.035] p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="forge-kicker mb-2 text-cyan">Enfoque estrategico</p>
                <h3 className="mb-1.5 text-lg font-semibold text-forge-text">
                  Cada seccion tiene una funcion comercial.
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-forge-muted">
                  Ordenamos propuesta de valor, servicios, prueba social, preguntas y contacto
                  para que el usuario entienda rapido y pueda tomar accion sin friccion.
                </p>
              </div>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-lg border border-cyan/30 px-5 py-3 text-sm font-medium text-cyan transition-all duration-200 hover:bg-cyan/10 md:shrink-0"
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
