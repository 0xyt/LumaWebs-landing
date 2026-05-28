"use client";

import { motion } from "framer-motion";

function HeroMockup() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="relative rounded-xl border border-[#1f1f23] bg-[#0c0c0e] overflow-hidden shadow-2xl">
        <div className="flex items-center gap-1.5 px-4 pt-3.5 pb-2 border-b border-[#1f1f23]">
          <span className="w-2 h-2 rounded-full bg-[#27272a]" />
          <span className="w-2 h-2 rounded-full bg-[#27272a]" />
          <span className="w-2 h-2 rounded-full bg-[#27272a]" />
        </div>

        <div className="p-5 space-y-5">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">Revenue</div>
              <div className="text-xl font-semibold text-[#f5f5f5]">$48,290</div>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-[#22c55e]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1.5L8.5 7H1.5L5 1.5Z" fill="#22c55e"/></svg>
              +12.3%
            </div>
          </div>

          <svg width="100%" height="60" viewBox="0 0 300 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 45 Q20 48 40 40 Q60 30 80 35 Q100 25 120 28 Q140 18 160 22 Q180 12 200 16 Q220 8 240 12 Q260 6 280 10 L300 8 L300 60 L0 60 Z" fill="url(#chartGrad)" />
            <path d="M0 45 Q20 48 40 40 Q60 30 80 35 Q100 25 120 28 Q140 18 160 22 Q180 12 200 16 Q220 8 240 12 Q260 6 280 10 L300 8" stroke="#3b82f6" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </svg>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Leads", value: "284", change: "+8.1%" },
              { label: "Conversión", value: "5.2%", change: "+2.4%" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-[#1f1f23] bg-[#09090b] p-3">
                <div className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">{stat.label}</div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-semibold text-[#f5f5f5]">{stat.value}</span>
                  <span className="text-[10px] font-mono text-[#22c55e]">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">Actividad Reciente</div>
            {[
              { event: "Lead capturado", source: "Landing Page", time: "hace 2 min" },
              { event: "Notificación enviada", source: "WhatsApp API", time: "hace 5 min" },
              { event: "Pipeline actualizado", source: "CRM Sync", time: "hace 12 min" },
            ].map((item) => (
              <div key={item.event} className="flex items-center justify-between py-1.5 border-b border-[#1f1f23]/50 last:border-0">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]/60" />
                  <div>
                    <div className="text-xs text-[#f5f5f5]">{item.event}</div>
                    <div className="text-[10px] font-mono text-[#52525b]">{item.source}</div>
                  </div>
                </div>
                <span className="text-[10px] text-[#52525b]">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(59,130,246,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-[10px] font-mono text-[#52525b] tracking-[0.25em] uppercase mb-6 block">
              Adan Labs &mdash; Ingeniería Digital
            </span>

            <h1 className="text-[clamp(28px,4.5vw,52px)] font-semibold tracking-tight leading-[1.12] text-[#f5f5f5] mb-5 max-w-[540px]">
              Desarrollamos sistemas web y automatizaciones para negocios que quieren operar más rápido y convertir mejor.
            </h1>

            <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed max-w-[480px] mb-8">
              Landing pages optimizadas, CRM integrado, automatización de comunicaciones e IA aplicada a procesos operativos. Infraestructura digital diseñada para escalar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-md text-sm px-5 py-2.5 bg-[#f5f5f5] text-[#09090b] font-medium hover:bg-[#e4e4e7] transition-all duration-200"
              >
                Agendar diagnóstico
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-md text-sm px-5 py-2.5 border border-[#27272a] text-[#a1a1aa] hover:bg-[#18181b] transition-all duration-200"
              >
                Ver proyectos
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {["Next.js", "Automatización", "CRM", "Integraciones", "WhatsApp API"].map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-[#52525b] tracking-wide uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <HeroMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
