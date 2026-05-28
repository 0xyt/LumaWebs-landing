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
      <section id="contacto" className="py-24 md:py-32 border-t border-zinc-800/20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="bg-[#18181b] border border-zinc-800/60 rounded-2xl p-10 md:p-14">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-zinc-50 mb-3">
                Diagnóstico recibido
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Analizaremos tu solicitud y te contactaremos en menos de 24 horas para discutir los siguientes pasos.
              </p>
              <button
                onClick={() => {
                  setState("idle");
                  setFormData({ name: "", email: "", phone: "", project: "" });
                }}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-mono"
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
    <section
      id="contacto"
      className="py-24 md:py-32 border-t border-zinc-800/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
              Contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
              Iniciemos un diagnóstico
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Contanos sobre tu proyecto. Sin compromisos, sin reuniones innecesarias.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto bg-[#18181b] border border-zinc-800/60 rounded-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Nombre completo
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Correo electrónico
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
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
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
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
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full rounded-lg text-sm px-6 py-3.5 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {state === "loading" ? (
                  "Enviando..."
                ) : (
                  <>
                    Iniciar Diagnóstico Tecnológico
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {state === "error" && (
                <p className="text-xs text-red-400 text-center">
                  Ocurrió un error al enviar. Intentalo de nuevo.
                </p>
              )}
            </form>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};
