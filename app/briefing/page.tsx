"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BriefingForm() {
  const [state, handleSubmit] = useForm("mqejpwno");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#0c0c0e] border border-[#1f1f23] p-8 md:p-10 rounded-xl text-center space-y-5"
        >
          <div className="w-10 h-10 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-lg flex items-center justify-center mx-auto">
            <Sparkles className="w-5 h-5 text-[#3b82f6]/60" />
          </div>
          <h2 className="text-lg font-semibold text-[#f5f5f5] tracking-tight">
            Briefing recibido
          </h2>
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            Analizaremos tus respuestas y te enviaremos una propuesta personalizada a tu WhatsApp en las próximas horas.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-mono text-[#52525b] hover:text-[#a1a1aa] transition-colors pt-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Volver al inicio
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] py-20 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-[#0c0c0e] border border-[#1f1f23] p-8 md:p-10 rounded-xl space-y-8"
      >
        <div className="space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] font-mono text-[#52525b] hover:text-[#a1a1aa] transition-colors uppercase tracking-widest mb-2"
          >
            <ArrowLeft className="w-3 h-3" /> Volver
          </Link>
          <h1 className="text-xl md:text-2xl font-semibold text-[#f5f5f5] tracking-tight">
            Contanos tu proyecto
          </h1>
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            Completá este formulario y te contactamos en menos de 24 horas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="nombre" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
                Tu nombre
              </label>
              <input
                required
                type="text"
                name="nombre"
                id="nombre"
                className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                placeholder="Ej. Carlos Mendoza"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="whatsapp" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
                WhatsApp
              </label>
              <input
                required
                type="tel"
                name="whatsapp"
                id="whatsapp"
                className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                placeholder="+591 65947291"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="empresa" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
              Negocio y rubro
            </label>
            <input
              required
              type="text"
              name="empresa"
              id="empresa"
              className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
              placeholder="Ej. Nails Studio - Salón de belleza"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="objetivo" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
              Objetivo principal
            </label>
            <select
              name="objetivo"
              id="objetivo"
              className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#3b82f6]/50 transition-colors appearance-none"
            >
              <option value="vender" className="bg-[#09090b]">Capturar leads y generar consultas</option>
              <option value="catalogo" className="bg-[#09090b]">Mostrar catálogo de productos</option>
              <option value="marca" className="bg-[#09090b]">Landing corporativa / marca</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="colores" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
                Colores preferidos
              </label>
              <input
                type="text"
                name="colores"
                id="colores"
                className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                placeholder="Ej. Negro y dorado"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="referencia" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
                Web de referencia
              </label>
              <input
                type="url"
                name="referencia"
                id="referencia"
                className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] placeholder-[#52525b] focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                placeholder="https://ejemplo.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="plazo" className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
              Plazo estimado
            </label>
            <select
              name="plazo"
              id="plazo"
              className="w-full bg-[#09090b] border border-[#1f1f23] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#3b82f6]/50 transition-colors appearance-none"
            >
              <option value="urgente" className="bg-[#09090b]">Menos de 2 semanas</option>
              <option value="estandar" className="bg-[#09090b]">3 a 4 semanas</option>
              <option value="flexible" className="bg-[#09090b]">Sin prisa, máxima calidad</option>
            </select>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              required
              className="shrink-0 mt-0.5 accent-[#3b82f6]"
            />
            <label htmlFor="consent" className="text-[11px] text-[#52525b] leading-relaxed">
              Acepto la{" "}
              <a href="/privacidad" className="text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors">Política de Privacidad</a> y el uso de mis datos.
            </label>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#f5f5f5] text-[#09090b] font-medium py-3 px-5 rounded-lg hover:bg-[#e4e4e7] transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
          >
            {state.submitting ? "Enviando..." : "Enviar briefing"}
            <Send className="w-3.5 h-3.5" />
          </button>

          <ValidationError errors={state.errors} className="text-[11px] text-[#ef4444]/70 block" />
        </form>
      </motion.div>
    </div>
  );
}
