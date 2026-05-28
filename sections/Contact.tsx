"use client";

import { useState, FormEvent, useEffect } from "react";
import { FadeIn } from "../components/components/FadeIn";
import { Send, CheckCircle } from "lucide-react";

const SERVICE_OPTIONS = [
  "Seleccioná un servicio",
  "Starter Pack",
  "Premium Pack",
  "Rediseño Web",
  "Soporte Técnico y Mantenimiento",
];

export const Contact = () => {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", project: "",
  });
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setFormData((prev) => ({ ...prev, service: e.detail }));
    };
    window.addEventListener("selectService", handler as EventListener);
    return () => window.removeEventListener("selectService", handler as EventListener);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      <section id="contacto" className="py-28 md:py-36 border-t border-zinc-800/20">
        <div className="max-w-lg mx-auto px-6 text-center">
          <FadeIn>
            <div className="rounded-xl border border-zinc-800/80 bg-[#0c0c0e] p-10 md:p-14">
              <div className="w-10 h-10 bg-zinc-800/50 rounded-lg flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-5 h-5 text-zinc-400" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-50 mb-2">
                Solicitud recibida
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Te contactaremos en menos de 24 horas para coordinar los próximos pasos.
              </p>
              <button
                onClick={() => { setState("idle"); setFormData({ name: "", email: "", phone: "", service: "", project: "" }); setAccepted(false); }}
                className="text-[11px] font-mono text-zinc-500 hover:text-zinc-400 transition-colors"
              >
                Enviar otra solicitud
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
          <div className="max-w-lg mb-10 text-center">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-3">
              Contacto
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Contanos sobre tu proyecto y te enviaremos una propuesta sin compromiso.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative rounded-xl bg-[#0c0c0e] p-8 md:p-10">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-zinc-700/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-xl border border-zinc-800/80 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Nombre</label>
                  <input required type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Email</label>
                  <input required type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="tu@correo.com" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Teléfono / WhatsApp</label>
                <input required type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="+591 65947291" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors" />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="service" className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Tipo de Servicio</label>
                <select required name="service" id="service" value={formData.service} onChange={handleChange} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 focus:outline-none focus:border-zinc-600 transition-colors appearance-none">
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt === SERVICE_OPTIONS[0] ? "" : opt} className="bg-zinc-900 text-zinc-50">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="project" className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Descripción del proyecto</label>
                <textarea required name="project" id="project" rows={4} value={formData.project} onChange={handleChange} placeholder="Contanos brevemente qué necesitas..." className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors resize-none" />
              </div>

              <div className="flex items-start gap-3 mt-4 mb-6">
                <input
                  required
                  type="checkbox"
                  id="terms"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-700 bg-zinc-900 accent-emerald-500 focus:ring-emerald-500 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-xs text-zinc-400 leading-normal select-none">
                  Acepto los <a href="#terminos" className="text-zinc-200 underline hover:text-white transition-colors">Términos y Condiciones</a> y la <a href="#privacidad" className="text-zinc-200 underline hover:text-white transition-colors">Política de Privacidad</a> de Adan Labs.
                </label>
              </div>

              <button type="submit" disabled={state === "loading" || !accepted} className="w-full rounded-lg text-sm px-5 py-3 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group">
                {state === "loading" ? "Enviando..." : "Enviar Solicitud de Proyecto"}
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {state === "error" && <p className="text-[11px] text-red-400/70 text-center">Ocurrió un error. Intentalo de nuevo.</p>}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
