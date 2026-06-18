"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/config";

const FORMSPREE_URL = "https://formspree.io/xjgzlapk";

const SERVICE_OPTIONS = [
  "Elige una opción",
  "Quiero una landing page",
  "Quiero una web profesional",
  "Quiero rediseñar mi página actual",
  "Quiero optimizar mi presencia digital",
];

export default function BriefingForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", project: "",
  });
  const [accepted, setAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch(FORMSPREE_URL, {
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
      <div className="flex min-h-screen items-center justify-center bg-forge-bg px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="forge-card w-full max-w-md space-y-5 rounded-xl p-8 text-center md:p-10"
        >
          <div className="w-10 h-10 bg-zinc-800/50 rounded-lg flex items-center justify-center mx-auto">
            <CheckCircle className="w-5 h-5 text-success" />
          </div>
          <h2 className="text-lg font-semibold tracking-tight text-forge-text">
            Solicitud recibida
          </h2>
          <p className="text-sm leading-relaxed text-forge-muted">
            Te responderé en menos de 24 horas para coordinar los próximos pasos.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 pt-2 font-mono text-[11px] text-forge-muted transition-colors hover:text-copper"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Volver al inicio
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-forge-bg px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full"
      >
        <div className="space-y-2 mb-8 text-center">
          <Link
            href="/"
            className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-forge-muted transition-colors hover:text-copper"
          >
            <ArrowLeft className="w-3 h-3" /> Volver
          </Link>
          <h1 className="text-xl font-semibold tracking-tight text-forge-text md:text-2xl">
            Cuéntame qué necesita tu web
          </h1>
          <p className="text-sm leading-relaxed text-forge-muted">
            Llena este formulario con tus palabras. No necesitas saber nada técnico.
          </p>
        </div>

        <div className="forge-card relative rounded-xl p-6 md:p-8">

          <form onSubmit={handleSubmit} className="relative space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-forge-muted">Nombre</label>
                <input required type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" className="forge-focus w-full rounded-lg border border-forge-border bg-forge-bg px-3.5 py-2.5 text-sm text-forge-text placeholder-forge-muted/60 transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-forge-muted">Correo</label>
                <input required type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="tu@correo.com" className="forge-focus w-full rounded-lg border border-forge-border bg-forge-bg px-3.5 py-2.5 text-sm text-forge-text placeholder-forge-muted/60 transition-colors" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-widest text-forge-muted">Teléfono / WhatsApp</label>
              <input required type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="+591 65947291" className="forge-focus w-full rounded-lg border border-forge-border bg-forge-bg px-3.5 py-2.5 text-sm text-forge-text placeholder-forge-muted/60 transition-colors" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="service" className="font-mono text-[10px] uppercase tracking-widest text-forge-muted">¿Qué necesitas?</label>
              <select required name="service" id="service" value={formData.service} onChange={handleChange} className="forge-focus w-full appearance-none rounded-lg border border-forge-border bg-forge-bg px-3.5 py-2.5 text-sm text-forge-text transition-colors">
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt === SERVICE_OPTIONS[0] ? "" : opt} className="bg-forge-bg text-forge-text">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="project" className="font-mono text-[10px] uppercase tracking-widest text-forge-muted">Tu idea o duda</label>
              <textarea required name="project" id="project" rows={4} value={formData.project} onChange={handleChange} placeholder="Cuéntame qué vendes, qué necesitas o qué te gustaría mejorar..." className="forge-focus w-full resize-none rounded-lg border border-forge-border bg-forge-bg px-3.5 py-2.5 text-sm text-forge-text placeholder-forge-muted/60 transition-colors" />
            </div>

            <div className="flex items-start gap-3 mt-4 mb-6">
              <input
                required
                type="checkbox"
                id="terms"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-forge-border bg-forge-bg accent-copper focus:ring-cyan focus:ring-offset-0"
              />
              <label htmlFor="terms" className="text-xs text-zinc-400 leading-normal select-none">
                Acepto los <Link href="/terminos" className="text-forge-text underline transition-colors hover:text-copper">Términos y Condiciones</Link> y la <Link href="/privacidad" className="text-forge-text underline transition-colors hover:text-copper">Política de Privacidad</Link> de {site.name}.
              </label>
            </div>

            <button type="submit" disabled={state === "loading" || !accepted} className="group flex w-full items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-forge-text disabled:cursor-not-allowed disabled:opacity-50">
              {state === "loading" ? "Enviando..." : "Enviar mensaje"}
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {state === "error" && <p className="text-center text-[11px] text-error">Ocurrió un error. Inténtalo de nuevo.</p>}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
