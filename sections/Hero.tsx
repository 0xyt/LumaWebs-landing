"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { site } from "@/lib/config";

const heroWords = [
  "Tu",
  "web",
  "debe",
  "sentirse",
  "hecha",
  "a",
  "mano.",
];

const proofNotes = [
  "Trabajo directo conmigo, sin capas de agencia.",
  "Diseño web rápido, claro y pensado para celular.",
  "Precios de inicio: 250 / 500 / 150 Bs.",
];

const buildSteps = [
  { label: "Escucho", value: "tu negocio" },
  { label: "Ordeno", value: "tu oferta" },
  { label: "Diseño", value: "la experiencia" },
  { label: "Lanzo", value: "tu web" },
];

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-grid">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.7)_0%,rgba(251,250,247,0.96)_46%,rgba(241,236,228,0.68)_100%)]" />
      <div className="pointer-events-none absolute left-0 top-24 h-28 w-[38vw] -rotate-6 bg-copper/[0.12] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-[42vw] bg-black/[0.045] blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-9 px-5 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:pb-28 md:pt-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white/76 px-3 py-1.5 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-copper" />
              <span className="truncate font-mono text-[10px] tracking-wider text-forge-muted">
                Freelancer web · Bolivia · sitios que venden
              </span>
            </div>

            <h1 className="mb-6 max-w-[780px] text-[clamp(38px,11vw,92px)] font-semibold leading-[0.92] tracking-tight text-forge-text">
              {heroWords.map((word, index) => (
                <span
                  key={word}
                  className="fall-word mr-[0.12em]"
                  style={{ "--i": index } as React.CSSProperties}
                >
                  {word}
                </span>
              ))}
              <span className="mt-2 block text-[clamp(26px,7vw,58px)] leading-[1.02] text-forge-muted">
                bonita, rápida y lista para conseguir leads.
              </span>
            </h1>

            <p className="mb-8 max-w-[620px] text-base leading-relaxed text-forge-muted md:text-lg">
              Soy Adán, trabajo solo y construyo páginas web para negocios que
              quieren verse profesionales sin sonar genéricos. Diseño una fachada
              premium, ordeno tu mensaje y dejo el camino claro para que te escriban.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsappLinks.quote}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(185,95,50,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-forge-text"
              >
                Cotizar mi web
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#portafolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/12 bg-white px-6 py-3.5 text-sm font-semibold text-forge-text shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-copper/50"
              >
                Ver trabajos
              </a>
            </div>

            <div className="grid gap-2.5 sm:max-w-[620px] sm:grid-cols-3">
              {proofNotes.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-2 rounded-2xl border border-black/10 bg-white/72 p-3 shadow-sm"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper" />
                  <span className="text-xs leading-relaxed text-forge-muted">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative md:pl-2"
        >
          <div className="absolute -left-3 top-8 hidden -rotate-6 rounded-full bg-forge-text px-4 py-2 text-xs font-semibold text-white shadow-xl md:block">
            hecho por una persona
          </div>
          <div className="relative rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_22px_70px_rgba(17,17,17,0.12)] md:rounded-[28px] md:p-5 md:shadow-[0_28px_90px_rgba(17,17,17,0.14)]">
            <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-copper">
                  Forge board
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-forge-text">
                  De idea suelta a web publicada
                </h2>
              </div>
              <span className="hidden rounded-full bg-copper/10 px-3 py-1 text-xs font-semibold text-copper sm:inline-flex">
                live soon
              </span>
            </div>

            <div className="grid gap-3">
              {buildSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.08, duration: 0.35 }}
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-forge-bg p-3.5 md:p-4"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-forge-muted">
                    {step.label}
                  </span>
                  <span className="text-sm font-semibold text-forge-text">
                    {step.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 rounded-3xl bg-forge-text p-4 text-white md:p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/55">
                Objetivo
              </p>
              <p className="mt-3 text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                Que alguien entienda tu valor en 5 segundos y te escriba.
              </p>
              <a
                href={site.whatsappLinks.quote}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-forge-text"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Empezar por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
