"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BriefingForm() {
  const [state, handleSubmit] = useForm("mqejpwno");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-[#05050a] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#101018]/60 backdrop-blur-md border border-neutral-800/80 p-8 rounded-3xl text-center space-y-6"
        >
          <div className="w-12 h-12 bg-[#2D6AEF]/10 border border-[#2D6AEF]/20 rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(45,106,239,0.3)]">
            <Sparkles className="w-6 h-6 text-[#2D6AEF]" />
          </div>
          <h2 className="font-lexend text-2xl font-bold text-white tracking-tight">¡Briefing Recibido de Élite!</h2>
          <p className="text-neutral-400 font-sans text-sm leading-relaxed">
            Analizaremos tus respuestas con nuestro equipo de diseño y te enviaremos una propuesta personalizada a tu WhatsApp en las próximas horas.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#2D6AEF] font-semibold hover:underline pt-2"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05050a] py-20 px-4 relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2D6AEF]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-[#101018]/40 backdrop-blur-md border border-neutral-800/60 p-8 md:p-10 rounded-3xl space-y-8 relative z-10"
      >
        <div className="space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-neutral-300 transition-colors uppercase tracking-widest mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Volver atrás
          </Link>
          <h1 className="font-lexend text-3xl font-black text-white tracking-tight">Inicia Tu Proyecto Digital</h1>
          <p className="text-sm text-[#8A8F98] leading-relaxed font-sans">
            Cuéntanos un poco sobre tu visión corporativa. Estas preguntas nos ayudarán a estructurar una arquitectura de conversión óptima para tu negocio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 font-sans">
          
          {/* Campos ocultos para organización en Formspree */}
          <input type="hidden" name="_subject" value="Nuevo Briefing - Landing Page" />
          <input type="hidden" name="_order" value="nombre,whatsapp,empresa,objetivo,colores,referencia,plazo" />

          {/* Bloque 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Tu Nombre</label>
              <input required type="text" name="nombre" id="nombre" className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#2D6AEF]/50 text-sm transition-colors" placeholder="Ej. Carlos Mendoza" />
            </div>
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">WhatsApp de Contacto</label>
              <input required type="tel" name="whatsapp" id="whatsapp" className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#2D6AEF]/50 text-sm transition-colors" placeholder="Ej. +591 65947291" />
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="space-y-2">
            <label htmlFor="empresa" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Nombre del Negocio y Rubro</label>
            <input required type="text" name="empresa" id="empresa" className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#2D6AEF]/50 text-sm transition-colors" placeholder="Ej. Nails Studio - Salón de belleza estética" />
          </div>

          {/* Bloque 3 */}
          <div className="space-y-2">
            <label htmlFor="objetivo" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">¿Cuál es el objetivo principal de la web?</label>
            <select name="objetivo" id="objetivo" className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-300 focus:outline-none focus:border-[#2D6AEF]/50 text-sm transition-colors appearance-none">
              <option value="vender">Capturar leads y que me escriban a WhatsApp</option>
              <option value="catalogo">Mostrar un menú o catálogo interactivo de productos</option>
              <option value="marca">Posicionamiento de Marca / Landing Corporativa</option>
            </select>
          </div>

          {/* Bloque 4 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="colores" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Colores de preferencia</label>
              <input type="text" name="colores" id="colores" className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#2D6AEF]/50 text-sm transition-colors" placeholder="Ej. Negro mate y dorado" />
            </div>
            <div className="space-y-2">
              <label htmlFor="referencia" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Link de alguna web que te guste</label>
              <input type="url" name="referencia" id="referencia" className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[#2D6AEF]/50 text-sm transition-colors" placeholder="https://ejemplo.com" />
            </div>
          </div>

          {/* Bloque 5 */}
          <div className="space-y-2">
            <label htmlFor="plazo" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">¿Para cuándo necesitas el proyecto listo?</label>
            <select name="plazo" id="plazo" className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-300 focus:outline-none focus:border-[#2D6AEF]/50 text-sm transition-colors">
              <option value="urgente">Lo antes posible (Menos de 2 semanas)</option>
              <option value="estandar">Tiempo normal de desarrollo (3-4 semanas)</option>
              <option value="flexible">No tengo prisa, busco máxima perfección</option>
            </select>
          </div>

          {/* Botón de envío */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-white text-[#050509] font-bold py-4 px-6 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50"
            >
              <span>{state.submitting ? "Enviando Briefing..." : "Enviar Información Estratégica"}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

          <ValidationError errors={state.errors} className="text-red-500 text-xs mt-2" />
        </form>
      </motion.div>
    </div>
  );
}