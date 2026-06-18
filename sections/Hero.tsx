"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { site } from "@/lib/config";

const heroWords = [
  "Tu",
  "web",
  "con",
  "resultados.",
];

const proofNotes = [
  "Trabajo directo conmigo, sin capas de agencia.",
  "Diseño web rápido, claro y pensado para celular.",
  "Precios de inicio: 250 / 500 / 150 Bs.",
];

const buildSteps = [
  { label: "01", value: "Oferta clara" },
  { label: "02", value: "Diseño premium" },
  { label: "03", value: "CTA visible" },
  { label: "04", value: "Web publicada" },
];

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-grid">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(132deg,rgba(255,255,255,0.86)_0%,rgba(251,250,247,0.98)_52%,rgba(241,236,228,0.72)_100%)]" />
      <div className="brand-ruler pointer-events-none absolute left-0 right-0 top-[98px] h-px opacity-70" />
      <div className="pointer-events-none absolute -left-16 top-24 h-32 w-[40vw] -rotate-6 bg-copper/[0.11] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-[44vw] bg-black/[0.04] blur-3xl" />

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

            <h1 className="mb-6 max-w-[780px] text-[clamp(38px,11vw,92px)] font-semibold leading-[0.92] text-forge-text">
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
                distinta, clara y lista para conseguir leads.
              </span>
            </h1>

            <p className="mb-8 max-w-[620px] text-base leading-relaxed text-forge-muted md:text-lg">
              Soy Adán, construyo páginas web para negocios que quieren verse
              profesionales sin sonar a plantilla. Ordeno tu negocio,
              diseño una fachada premium y dejo el camino claro para que te escriban.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsappLinks.quote}
                target="_blank"
                rel="noopener noreferrer"
                className="magnet-button group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(185,95,50,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-forge-text"
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
                  className="flex items-start gap-2 rounded-[18px_10px_18px_10px] border border-black/10 bg-white/72 p-3 shadow-sm"
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
          <div className="relative min-h-[620px] sm:min-h-[560px] md:min-h-[590px]">
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -7 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="absolute left-1 top-0 z-20 w-[176px] rounded-[22px_12px_22px_12px] border border-black/10 bg-white p-4 shadow-[0_22px_60px_rgba(17,17,17,0.12)] md:left-0 md:w-[210px]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-black/10 bg-forge-bg">
                  <Image
                    src="/forge-symbol.png"
                    alt="Logo Forge Webs"
                    width={44}
                    height={44}
                    className="h-10 w-10 object-cover"
                    priority
                  />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-copper">
                    solo studio
                  </p>
                  <p className="text-sm font-semibold leading-tight text-forge-text">
                    Forge Webs
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-forge-muted">
                Una persona escucha, diseña, desarrolla y publica. Menos vueltas,
                más intención.
              </p>
            </motion.div>

            <div className="absolute right-0 top-16 z-10 w-[88%] rounded-[28px_16px_34px_18px] border border-black/10 bg-white p-4 shadow-[0_28px_90px_rgba(17,17,17,0.14)] md:top-20 md:w-[84%] md:p-5">
              <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-copper" />
                  <span className="h-2.5 w-2.5 rounded-full bg-forge-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-forge-border" />
                </div>
                <span className="max-w-[160px] truncate font-mono text-[10px] text-forge-muted">
                  forgewebs.vercel.app
                </span>
              </div>

              <div className="rounded-[24px_12px_24px_12px] border border-forge-border bg-forge-bg p-4 md:p-5">
                <p className="forge-kicker mb-3">Prueba de 5 segundos</p>
                <h2 className="text-[clamp(23px,4.5vw,38px)] font-semibold leading-[1.02] text-forge-text">
                  Que entren, entiendan y sepan qué hacer.
                </h2>
                <div className="mt-5 grid gap-2">
                  {buildSteps.map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.42 + index * 0.08, duration: 0.35 }}
                      className="flex items-center justify-between border-b border-black/10 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-widest text-copper">
                        {step.label}
                      </span>
                      <span className="text-sm font-semibold text-forge-text">
                        {step.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-black/10 bg-white p-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-forge-muted">
                    desde
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-copper">250 Bs</p>
                </div>
                <div className="rounded-2xl bg-forge-text p-3 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/55">
                    canal
                  </p>
                  <p className="mt-1 text-sm font-semibold">WhatsApp directo</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-5 right-5 z-30 rounded-[24px_14px_24px_14px] border border-copper/30 bg-copper p-4 text-white shadow-[0_22px_55px_rgba(185,95,50,0.24)] md:left-16 md:right-0 md:p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                Objetivo real
              </p>
              <p className="mt-2 text-lg font-semibold leading-tight md:text-xl">
                Tu web no tiene que gritar. Tiene que convencer.
              </p>
              <a
                href={site.whatsappLinks.quote}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-forge-text transition-colors hover:bg-forge-text hover:text-white"
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
