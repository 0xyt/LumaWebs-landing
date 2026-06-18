"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowRight, Check, MessageCircle, QrCode, WalletCards } from "lucide-react";

const plans = [
  {
    title: "Landing page",
    from: "250",
    currency: "Bs",
    description:
      "Para validar una oferta, mostrar un servicio o recibir consultas rápido.",
    includes: [
      "Sección hero con CTA claro",
      "Servicios, beneficios y contacto",
      "Botón directo a WhatsApp",
      "Diseño responsive",
      "Publicación inicial",
    ],
  },
  {
    title: "Web profesional",
    from: "500",
    currency: "Bs",
    description:
      "Para negocios que necesitan verse sólidos y explicar mejor su oferta.",
    includes: [
      "Estructura completa de sitio",
      "Copy base orientado a conversión",
      "Formulario, WhatsApp e Instagram",
      "SEO base y Open Graph",
      "Revisión antes de lanzar",
    ],
    popular: true,
  },
  {
    title: "Rediseño web",
    from: "150",
    currency: "Bs",
    description:
      "Para páginas existentes que se ven antiguas, confusas o poco confiables.",
    includes: [
      "Auditoría visual rápida",
      "Mejoras de jerarquía y espaciado",
      "Ajustes responsive",
      "CTA y contenido más claros",
      "Corrección de detalles técnicos",
    ],
  },
];

const handleSelectPlan = (title: string) => {
  window.dispatchEvent(new CustomEvent("selectService", { detail: title }));
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
};

export const Pricing = () => {
  return (
    <section id="precios" className="border-t border-forge-border/55 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="forge-kicker mb-3">Precios desde</p>
              <h2 className="text-[clamp(26px,3.5vw,42px)] font-semibold leading-[1.12] tracking-tight text-forge-text">
                Precios simples para empezar sin sentir que estás apostando a ciegas.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-forge-muted md:text-base">
              Mantengo precios de entrada porque recién estoy haciendo crecer Forge Webs.
              Si tu proyecto requiere más alcance, lo hablamos claro antes de iniciar.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan, index) => (
            <FadeIn key={plan.title} delay={index * 0.06}>
              <div
                className={`forge-card relative flex h-full flex-col rounded-[26px] p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.popular
                    ? "border-copper/55 bg-white shadow-[0_24px_80px_rgba(185,95,50,0.12)] md:-translate-y-3"
                    : "hover:border-copper/35"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-4 top-4 rounded-full border border-copper/35 bg-copper/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-copper-light">
                    Recomendado
                  </span>
                )}

                <div className="flex h-full flex-col">
                  <h3 className={`mb-2 text-lg font-semibold text-forge-text ${plan.popular ? "pr-28" : ""}`}>
                    {plan.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-forge-muted">
                    {plan.description}
                  </p>

                  <div className="mb-6 border-b border-forge-border pb-5">
                    <span className="font-mono text-[10px] tracking-wider text-forge-muted">
                      Desde
                    </span>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-[34px] font-semibold tracking-tight text-forge-text">
                        {plan.from}
                      </span>
                      <span className="text-sm text-forge-muted">{plan.currency}</span>
                    </div>
                  </div>

                  <ul className="mb-7 flex-1 space-y-2.5">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper-light" />
                        <span className="text-sm leading-snug text-forge-muted">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => handleSelectPlan(plan.title)}
                    className={`flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-copper text-white hover:bg-forge-text"
                        : "border border-forge-border text-forge-muted hover:border-copper/55 hover:text-forge-text"
                    }`}
                  >
                    Cotizar este plan
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.18}>
          <div className="mt-8 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px_16px_28px_16px] border border-copper/25 bg-white p-5 shadow-[0_18px_55px_rgba(17,17,17,0.07)] md:p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-copper/25 bg-copper/10">
                <WalletCards className="h-5 w-5 text-copper" />
              </div>
              <p className="forge-kicker mb-2">El proceso de pago</p>
              <h3 className="text-xl font-semibold leading-tight text-forge-text">
                60% al iniciar el proyecto y 40% al finalizar.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forge-muted">
                Así reservo tiempo para diseñar y desarrollar tu web, y tú pagas el
                restante cuando el proyecto queda terminado y listo para publicar.
              </p>
            </div>

            <div className="rounded-[16px_28px_16px_28px] border border-forge-border bg-forge-bg p-5 md:p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-copper/25 bg-white">
                <QrCode className="h-5 w-5 text-copper" />
              </div>
              <p className="forge-kicker mb-2">Métodos de pago</p>
              <h3 className="text-xl font-semibold leading-tight text-forge-text">
                QR a toda Bolivia.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forge-muted">
                Te envío el QR correspondiente al anticipo y luego el QR del pago final
                cuando la web esté lista.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-4 rounded-3xl border border-black/10 bg-forge-text p-5 text-white shadow-[0_22px_70px_rgba(17,17,17,0.12)] md:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/55">
                  Cotización a medida
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-tight md:text-2xl">
                  ¿Tu proyecto necesita algo distinto?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  Cuéntame qué necesitas y preparo una cotización personalizada sin
                  obligarte a elegir un paquete que no encaja.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSelectPlan("Cotización personalizada")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-forge-text transition-all duration-200 hover:bg-copper hover:text-white md:shrink-0"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir cotización
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
