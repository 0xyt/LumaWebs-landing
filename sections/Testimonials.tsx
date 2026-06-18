"use client";

import { FadeIn } from "../components/components/FadeIn";
import { Quote } from "lucide-react";

const proofSlots = [
  {
    title: "Caso publicado",
    description:
      "Espacio preparado para mostrar resultados reales, enlace del proyecto y contexto del negocio.",
  },
  {
    title: "Testimonio verificable",
    description:
      "Cuando existan testimonios, se añadirán con nombre, negocio y resultado concreto.",
  },
  {
    title: "Métrica de proyecto",
    description:
      "Estructura lista para documentar mejoras de claridad, velocidad, consultas o conversión.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="border-t border-forge-border/55 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 max-w-2xl">
            <p className="forge-kicker mb-3">Prueba social</p>
            <h2 className="text-[clamp(26px,3.5vw,42px)] font-semibold leading-[1.12] tracking-tight text-forge-text">
              Casos y testimonios listos para crecer con clientes reales.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          {proofSlots.map((slot, index) => (
            <FadeIn key={slot.title} delay={index * 0.06}>
              <div className="forge-card h-full rounded-xl p-6">
                <Quote className="mb-5 h-5 w-5 text-copper-light" />
                <h3 className="mb-2 text-base font-semibold text-forge-text">
                  {slot.title}
                </h3>
                <p className="text-sm leading-relaxed text-forge-muted">
                  {slot.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
