"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    type: "Proyecto publicado",
    title: "Lumina Studio",
    subtitle: "Estudio de fotografía",
    objective:
      "Crear una presencia visual profesional para mostrar servicios, estilo y contacto.",
    problem:
      "El negocio dependía de redes sociales y no tenía un espacio propio para presentar su trabajo.",
    result:
      "Una web clara, responsive y lista para recibir consultas desde cualquier dispositivo.",
    url: "https://lumina-studio-amber-eta.vercel.app/",
  },
  {
    type: "Concepto de landing page",
    title: "Bloom",
    subtitle: "Marca de cuidado personal",
    objective:
      "Mostrar cómo una oferta puede explicarse con una narrativa limpia y enfocada.",
    problem:
      "La marca necesitaba verse confiable antes de invertir en una web más grande.",
    result:
      "Una estructura preparada para producto, beneficios, prueba social y compra/contacto.",
    url: null,
  },
  {
    type: "Concepto de rediseño",
    title: "Terra",
    subtitle: "Restaurante local",
    objective:
      "Ordenar menú, horarios, reservas y ubicación para mejorar la experiencia mobile.",
    problem:
      "La información clave era difícil de encontrar y la página no guiaba a reservar.",
    result:
      "Una propuesta más rápida de entender, con CTA visible y secciones escaneables.",
    url: null,
  },
];

export const Portfolio = () => {
  return (
    <section id="portafolio" className="border-t border-forge-border/55 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="forge-kicker mb-3">Portafolio</p>
              <h2 className="text-[clamp(26px,3.5vw,42px)] font-semibold leading-[1.12] tracking-tight text-forge-text">
                Lo que voy construyendo, sin inventar una agencia enorme.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-forge-muted md:text-base">
              Estoy empezando, así que prefiero ser transparente: muestro proyectos
              publicados y conceptos que reflejan el tipo de experiencia que puedo crear.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <div className="forge-card group rounded-xl p-6 transition-all duration-300 hover:border-copper/40 md:p-8">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="forge-kicker text-copper-light">
                        {project.type}
                      </span>
                      {project.url && (
                        <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_10px_rgba(34,197,94,0.45)]" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-forge-text">
                      {project.title}
                    </h3>
                    <p className="text-sm text-forge-muted">{project.subtitle}</p>
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-forge-muted transition-colors hover:text-copper md:shrink-0"
                    >
                      Ver proyecto
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-forge-border bg-forge-bg/45 p-4">
                    <p className="forge-kicker mb-2 text-forge-muted">Objetivo</p>
                    <p className="text-sm leading-relaxed text-forge-text/85">
                      {project.objective}
                    </p>
                  </div>
                  <div className="rounded-lg border border-forge-border bg-forge-bg/45 p-4">
                    <p className="forge-kicker mb-2 text-forge-muted">Problema</p>
                    <p className="text-sm leading-relaxed text-forge-text/85">
                      {project.problem}
                    </p>
                  </div>
                  <div className="rounded-lg border border-forge-border bg-forge-bg/45 p-4">
                    <p className="forge-kicker mb-2 text-forge-muted">Resultado</p>
                    <p className="text-sm leading-relaxed text-forge-text/85">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 rounded-xl border border-copper/25 bg-copper/[0.06] p-5 text-center">
            <p className="text-sm leading-relaxed text-forge-muted">
              La prueba social real se añadirá con nuevos clientes publicados.
              Prefiero mostrar crecimiento real antes que llenar la página con frases falsas.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
