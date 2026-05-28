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
          className="max-w-md w-full bg-[#18181b] border border-zinc-800/60 p-8 md:p-10 rounded-2xl text-center space-y-6"
        >
          <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-50 tracking-tight">
            ¡Briefing recibido!
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Analizaremos tus respuestas y te enviaremos una propuesta personalizada a tu WhatsApp en las próximas horas.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-400 font-mono hover:text-blue-300 transition-colors pt-2"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] py-20 px-4 relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-[#18181b] border border-zinc-800/60 p-8 md:p-10 rounded-2xl space-y-8 relative z-10"
      >
        <div className="space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Volver atrás
          </Link>
          <h1 className="text-3xl font-bold text-zinc-50 tracking-tight">
            Contanos tu proyecto
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Completá este formulario rápido y te contactamos en menos de 24 horas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Tu Nombre
              </label>
              <input
                required
                type="text"
                name="nombre"
                id="nombre"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                placeholder="Ej. Carlos Mendoza"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                WhatsApp de Contacto
              </label>
              <input
                required
                type="tel"
                name="whatsapp"
                id="whatsapp"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                placeholder="Ej. +591 65947291"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="empresa" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Nombre del Negocio y Rubro
            </label>
            <input
              required
              type="text"
              name="empresa"
              id="empresa"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
              placeholder="Ej. Nails Studio - Salón de belleza estética"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="objetivo" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              ¿Cuál es el objetivo principal de la web?
            </label>
            <select
              name="objetivo"
              id="objetivo"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all appearance-none"
            >
              <option value="vender" className="bg-zinc-950">Capturar leads y que me escriban a WhatsApp</option>
              <option value="catalogo" className="bg-zinc-950">Mostrar un menú o catálogo interactivo de productos</option>
              <option value="marca" className="bg-zinc-950">Posicionamiento de Marca / Landing Corporativa</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="colores" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Colores de preferencia
              </label>
              <input
                type="text"
                name="colores"
                id="colores"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                placeholder="Ej. Negro mate y dorado"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="referencia" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Link de referencia
              </label>
              <input
                type="url"
                name="referencia"
                id="referencia"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                placeholder="https://ejemplo.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="plazo" className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              ¿Para cuándo necesitas el proyecto listo?
            </label>
            <select
              name="plazo"
              id="plazo"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all appearance-none"
            >
              <option value="urgente" className="bg-zinc-950">Lo antes posible (Menos de 2 semanas)</option>
              <option value="estandar" className="bg-zinc-950">Tiempo normal de desarrollo (3-4 semanas)</option>
              <option value="flexible" className="bg-zinc-950">No tengo prisa, busco máxima perfección</option>
            </select>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              required
              className="shrink-0 mt-1 accent-blue-500"
            />
            <label htmlFor="consent" className="text-xs text-zinc-400 leading-relaxed">
              Acepto la{' '}
              <a href="/privacidad" className="text-blue-400 hover:text-blue-300 transition-colors">Política de Privacidad</a>
              {' '}y el uso de mis datos para responder a esta consulta.
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-zinc-50 text-zinc-950 font-medium py-4 px-6 rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 min-h-[44px]"
            >
              <span>{state.submitting ? "Enviando Briefing..." : "Enviar Información Estratégica"}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

          <ValidationError errors={state.errors} className="text-xs text-red-400 mt-2 block" />
        </form>
      </motion.div>
    </div>
  );
}
