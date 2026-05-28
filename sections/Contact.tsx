"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../components/components/FadeIn";
import { Send, CheckCircle } from "lucide-react";

export const Contact = () => {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error");
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <section id="contacto" className="py-28 md:py-36 border-t border-[#1f1f23]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="rounded-xl border border-[#1f1f23] bg-[#0c0c0e] p-10 md:p-14">
              <div className="w-10 h-10 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-lg flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-5 h-5 text-[#3b82f6]/60" />
              </div>
              <h2 className="text-lg font-semibold text-[#f5f5f5] mb-2">
                Diagnóstico recibido
              </h2>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                Analizaremos tu solicitud y te contactaremos en menos de 24 horas para discutir los siguientes pasos.
              </p>
              <button
                onClick={() => {
                  setState("idle");
                  setFormData({ name: "", email: "", phone: "", project: "" });
                }}
                className="text-[11px] font-mono text-[#52525b] hover:text-[#a1a1aa] transition-colors"
              >
                Enviar otro diagnóstico
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-28 md:py-36 border-t border-[#1f1f23]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] font-mono text-[#52525b] tracking-[0.25em] uppercase block mb-4">
              Contacto
            </span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight leading-[1.15] text-[#f5f5f5] mb-4">
              Evaluemos tu proyecto
            </h2>
            <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed max-w-[520px]">
              Contanos sobre tu operación actual y lo que necesitas resolver. Sin compromisos, sin reuniones innecesarias.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
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
                    className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
                  WhatsApp / Teléfono
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+591 65947291"
                  className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="project" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
                  Descripción del proyecto
                </label>
                <textarea
                  required
                  name="project"
                  id="project"
                  rows={4}
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Contanos brevemente qué necesitas..."
                  className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full rounded-lg text-sm px-5 py-3 bg-[#f5f5f5] text-[#09090b] font-medium hover:bg-[#e4e4e7] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {state === "loading" ? (
                  "Enviando..."
                ) : (
                  <>
                    Solicitar evaluación
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {state === "error" && (
                <p className="text-[11px] text-[#ef4444]/70 text-center">
                  Ocurrió un error al enviar. Intentalo de nuevo.
                </p>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
