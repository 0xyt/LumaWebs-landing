"use client";

import { useState, FormEvent, useEffect } from "react";
import { FadeIn } from "../components/components/FadeIn";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { site } from "@/lib/config";

type Option = "default" | "crear" | "remodelar" | "mantenimiento" | "orientacion";

const options: { value: Option; label: string }[] = [
  { value: "default", label: "¿Qué estás buscando?" },
  { value: "crear", label: "Quiero una página nueva" },
  { value: "remodelar", label: "Quiero mejorar mi página actual" },
  { value: "mantenimiento", label: "Necesito ayuda con mi página" },
  { value: "orientacion", label: "No sé qué necesito todavía" },
];

const placeholders: Record<Option, string> = {
  default: "Cuéntame más sobre lo que necesitas...",
  crear: "Cuéntame qué vendes, a quién atiendes y qué quieres que vean tus clientes...",
  remodelar: "Cuéntame qué no te gusta de tu página actual y qué te gustaría cambiar...",
  mantenimiento: "Cuéntame qué necesitas cambiar: textos, fotos, horarios, precios u otra cosa...",
  orientacion: "Cuéntame tu idea con tus palabras. Yo te ayudo a ordenarla...",
};

export const Contact = () => {
  const [choice, setChoice] = useState<Option>("default");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const detail = e.detail as string;
      if (detail.toLowerCase().includes("simple") || detail.toLowerCase().includes("completa") || detail.toLowerCase().includes("página")) {
        setChoice("crear");
      } else if (detail.toLowerCase().includes("mejorar") || detail.toLowerCase().includes("rediseño") || detail.toLowerCase().includes("remodel")) {
        setChoice("remodelar");
      } else if (detail.toLowerCase().includes("ayuda") || detail.toLowerCase().includes("mantenimiento") || detail.toLowerCase().includes("soporte")) {
        setChoice("mantenimiento");
      }
    };
    window.addEventListener("selectService", handler as EventListener);
    return () => window.removeEventListener("selectService", handler as EventListener);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (choice === "default") return;
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tipo: options.find((o) => o.value === choice)?.label,
        }),
      });
      if (!res.ok) throw new Error("Error");
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <section id="contacto" className="py-28 md:py-36 border-t border-zinc-800/20">
        <div className="max-w-lg mx-auto px-6 text-center">
          <FadeIn>
            <div className="rounded-xl border border-zinc-800/80 bg-[#0c0c0e] p-10 md:p-14">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-50 mb-2">
                Recibí tu mensaje
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-xs mx-auto">
                Te responderé en menos de 24 horas para coordinar los siguientes pasos.
              </p>
              <button
                onClick={() => {
                  setState("idle");
                  setFormData({ name: "", email: "", phone: "", message: "" });
                  setChoice("default");
                }}
                className="text-[11px] font-mono text-zinc-500 hover:text-zinc-400 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-lg mx-auto px-6">
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-3">
              Hablemos de tu página
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Escríbeme con tus palabras. No necesitas saber nada técnico para pedir una cotización.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mb-6 rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-blue-300/70 mb-2">
              Cotización rápida
            </p>
            <h3 className="text-base font-semibold text-zinc-50 mb-1.5">
              ¿Quieres cotizar otra idea?
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Si prefieres hablar directo por chat, envíame tu idea por WhatsApp.
            </p>
            <a
              href={site.whatsappLinks.quote}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-50 px-5 py-3 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-zinc-200"
              aria-label="Cotizar otra idea o proyecto por WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative rounded-xl bg-[#0c0c0e] p-8 md:p-10">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-zinc-700/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-xl border border-zinc-800/80 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="tipo"
                  className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase"
                >
                  ¿Qué necesitas?
                </label>
                <select
                  required
                  id="tipo"
                  value={choice}
                  onChange={(e) => setChoice(e.target.value as Option)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 focus:outline-none focus:border-zinc-600 transition-colors appearance-none"
                >
                  {options.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-zinc-900 text-zinc-50"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {choice !== "default" && (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase"
                      >
                        Nombre
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase"
                      >
                        Correo
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@correo.com"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase"
                    >
                      Teléfono / WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+591 65947291"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase"
                    >
                      Escribe tu idea o duda
                    </label>
                    <textarea
                      required
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={placeholders[choice]}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full rounded-lg text-sm px-5 py-3 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {state === "loading"
                      ? "Enviando..."
                      : "Enviar mensaje"}
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {state === "error" && (
                    <p className="text-[11px] text-red-400/70 text-center">
                      Ocurrió un error. Inténtalo de nuevo.
                    </p>
                  )}
                </>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
