"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { site } from "@/lib/config";

const trustIndicators = [
  "Diseño web enfocado en conversión",
  "Sitios rápidos, responsive y claros",
  "Contacto directo por WhatsApp e Instagram",
];

const metrics = [
  { value: "250 Bs", label: "landing page desde" },
  { value: "5-7 dias", label: "entrega base estimada" },
  { value: "100%", label: "adaptado a celular" },
];

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-grid">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(13,13,13,0.34)_0%,rgba(13,13,13,0.88)_82%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-[1.05fr_0.95fr] md:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forge-border bg-forge-surface/[0.72] px-3 py-1">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper shadow-[0_0_12px_rgba(197,106,45,0.8)]" />
              <span className="font-mono text-[10px] tracking-wider text-forge-muted">
                Diseño web Bolivia / Landing pages / Rediseño web
              </span>
            </div>

            <h1 className="mb-5 text-[clamp(34px,5.4vw,68px)] font-semibold leading-[1.02] tracking-tight text-forge-text">
              Forjamos páginas web modernas para negocios que{" "}
              <span className="text-copper-light">
                quieren crecer
              </span>
            </h1>

            <p className="mb-8 max-w-[620px] text-base leading-relaxed text-forge-muted md:text-lg">
              Diseñamos y desarrollamos sitios web rápidos, profesionales y estratégicos
              para ayudarte a generar confianza, mostrar tus servicios y conseguir más
              clientes.
            </p>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsappLinks.quote}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-copper px-5 py-3 text-sm font-semibold text-forge-text transition-all duration-200 hover:bg-copper-light hover:text-forge-bg"
              >
                Cotizar mi web
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#portafolio"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-forge-border px-5 py-3 text-sm font-medium text-forge-muted transition-all duration-200 hover:border-cyan/60 hover:text-cyan"
              >
                Ver portafolio
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              {trustIndicators.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-copper/25 bg-copper/10">
                    <Check className="h-3 w-3 text-copper-light" />
                  </span>
                  <span className="text-xs text-forge-text/85">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative"
        >
          <div className="forge-card rounded-xl p-5 shadow-[0_24px_90px_rgba(0,0,0,0.42)] md:p-6">
            <div className="mb-6 flex items-center justify-between border-b border-forge-border pb-4">
              <div>
                <p className="forge-kicker mb-2">Forge Webs</p>
                <h2 className="text-lg font-semibold tracking-tight text-forge-text">
                  Presencia digital lista para vender
                </h2>
              </div>
              <span className="rounded-full border border-cyan/30 px-2.5 py-1 font-mono text-[10px] text-cyan">
                Live
              </span>
            </div>

            <div className="space-y-3">
              {[
                "Mensaje claro para explicar tu oferta",
                "Diseño premium con jerarquía visual fuerte",
                "CTA directo a WhatsApp, Instagram y formulario",
                "SEO base para páginas web para negocios",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-forge-border/75 bg-forge-graphite/55 px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-copper" />
                  <span className="text-sm text-forge-muted">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-forge-border bg-forge-bg/60 p-3"
                >
                  <p className="text-lg font-semibold tracking-tight text-forge-text">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-forge-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-copper/25 bg-copper/[0.08] p-4">
              <p className="text-sm leading-relaxed text-forge-muted">
                Tu web debe explicar, generar confianza y pedir la acción correcta.
                Esa es la diferencia entre “tener una página” y tener un activo comercial.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
