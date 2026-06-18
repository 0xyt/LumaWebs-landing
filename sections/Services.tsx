"use client";

import { FadeIn } from "../components/components/FadeIn";
import {
  ArrowRight,
  Layout,
  MessageCircle,
  MonitorSmartphone,
  RefreshCw,
  SearchCheck,
} from "lucide-react";
import { site } from "@/lib/config";

const services = [
  {
    icon: Layout,
    title: "Landing pages",
    description:
      "Una página enfocada en una oferta, campaña o servicio específico.",
    includes:
      "Incluye estructura comercial, copy base, CTA a WhatsApp y diseño responsive.",
  },
  {
    icon: MonitorSmartphone,
    title: "Sitios web profesionales",
    description:
      "Una web completa para presentar tu negocio, servicios, preguntas y contacto.",
    includes:
      "Incluye navegación clara, secciones clave, formulario, redes sociales y SEO base.",
  },
  {
    icon: RefreshCw,
    title: "Rediseño web",
    description:
      "Mejoramos una página existente para que se vea moderna, clara y confiable.",
    includes:
      "Incluye revisión visual, jerarquía de contenido, experiencia mobile y CTAs.",
  },
  {
    icon: SearchCheck,
    title: "Optimización de presencia digital",
    description:
      "Ordenamos tu mensaje, enlaces y puntos de contacto para vender con más claridad.",
    includes:
      "Incluye auditoría rápida, mejoras de contenido y acciones para generar confianza.",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="border-t border-forge-border/55 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="forge-kicker mb-3">Lo que puedo construir</p>
              <h2 className="text-[clamp(26px,3.5vw,42px)] font-semibold leading-[1.12] tracking-tight text-forge-text">
                Páginas con estética premium y un camino claro hacia el contacto.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-forge-muted md:text-base">
              Trabajo proyectos pequeños y concretos: una landing, una web profesional
              o un rediseño que se sienta más serio. Todo pensado primero para celular.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <div
                  className={`forge-card group h-full p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-copper/45 md:p-8 ${
                    index === 0
                      ? "rounded-[30px_18px_18px_18px]"
                      : index === 3
                        ? "rounded-[18px_18px_30px_18px]"
                        : "rounded-[22px]"
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-copper/25 bg-copper/10">
                      <Icon className="h-5 w-5 text-copper-light" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-forge-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-copper" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-forge-text">
                    {service.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-forge-muted">
                    {service.description}
                  </p>

                  <div className="rounded-2xl border border-forge-border bg-forge-bg/55 p-4">
                    <p className="text-xs leading-relaxed text-forge-muted">
                      {service.includes}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.18}>
          <div className="mt-5 rounded-3xl border border-copper/25 bg-white p-5 shadow-[0_18px_55px_rgba(17,17,17,0.07)] md:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="forge-kicker mb-2">Diagnóstico rápido</p>
                <h3 className="mb-1.5 text-base font-semibold text-forge-text md:text-lg">
                  ¿No sabes qué tipo de web necesitas?
                </h3>
                <p className="text-sm leading-relaxed text-forge-muted">
                  Escríbeme por WhatsApp, cuéntame tu negocio y te recomiendo
                  la opción más conveniente antes de cotizar.
                </p>
              </div>

              <a
                href={site.whatsappLinks.serviceQuestion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-forge-text md:shrink-0"
                aria-label="Consultar dudas sobre servicios por WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                Resolver por WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
