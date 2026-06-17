"use client";

import { FadeIn } from "../components/components/FadeIn";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Página simple",
    from: "250",
    currency: "Bs",
    description:
      "Una página para explicar qué vendes, mostrar confianza y recibir mensajes de clientes.",
    includes: [
      "Diseño hecho para tu negocio",
      "Se ve bien en celulares",
      "Formulario de contacto",
      "Botón para WhatsApp",
      "Publicación de la página",
    ],
  },
  {
    title: "Página completa",
    from: "500",
    currency: "Bs",
    description:
      "Una página más completa para negocios que necesitan explicar varios servicios o mostrar más información.",
    includes: [
      "Todo lo de Página simple",
      "Varias secciones",
      "Fotos, textos y servicios ordenados",
      "Ayuda para aparecer en Google",
      "Integración de redes sociales",
      "Revisión antes de publicar",
    ],
    popular: true,
  },
  {
    title: "Mejorar tu página",
    from: "200",
    currency: "Bs",
    description:
      "Para páginas que ya existen, pero se ven viejas, confusas o difíciles de usar.",
    includes: [
      "Nuevo orden para el contenido",
      "Mejor apariencia",
      "Textos más claros",
      "Corrección de errores",
      "Mejor experiencia en celular",
    ],
  },
  {
    title: "Ayuda mensual",
    from: "100",
    currency: "Bs",
    description:
      "Para que tu página siga al día sin que tengas que preocuparte por cambios pequeños.",
    includes: [
      "Cambios de texto o fotos",
      "Corrección de errores",
      "Revisión mensual",
      "Ayuda por WhatsApp",
      "Respuesta con prioridad",
    ],
  },
];

const handleSelectPlan = (title: string) => {
  window.dispatchEvent(new CustomEvent("selectService", { detail: title }));
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
};

export const Pricing = () => {
  return (
    <section id="precios" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Precios
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Estos son precios base para que tengas una idea. Si tu caso es distinto, lo cotizamos aparte.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <FadeIn key={plan.title} delay={index * 0.06}>
              <div
                className={`relative rounded-xl border bg-[#0c0c0e] p-6 transition-all duration-300 hover:scale-[1.01] flex flex-col h-full ${
                  plan.popular
                    ? "border-blue-500/30 hover:border-blue-500/50"
                    : "border-zinc-800/80 hover:border-zinc-700/80"
                }`}
              >
                {plan.popular && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-sm font-semibold text-zinc-50 mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    {plan.description}
                  </p>

                  <div className="mb-5 pb-4 border-b border-zinc-800/40">
                    <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                      Desde
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-[28px] font-bold tracking-tight text-zinc-50">
                        {plan.from}
                      </span>
                      <span className="text-xs text-zinc-400">{plan.currency}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-400">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => handleSelectPlan(plan.title)}
                    className={`w-full rounded-lg text-xs px-4 py-2.5 font-medium transition-all duration-200 text-center flex items-center justify-center gap-1.5 ${
                      plan.popular
                        ? "bg-blue-500 text-white hover:bg-blue-400"
                        : "border border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
                    }`}
                  >
                    Pedir cotización
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
