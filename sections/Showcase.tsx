"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

function MacWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-zinc-800/50 bg-gradient-to-br from-zinc-900 to-black shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 pt-3 pb-2.5 border-b border-zinc-800/50 bg-zinc-900/50 rounded-t-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <div className="ml-3 flex-1 flex justify-center">
          <span className="text-[9px] text-zinc-600 font-mono bg-zinc-800/60 px-3 py-0.5 rounded-full">
            lumina-studio.vercel.app
          </span>
        </div>
      </div>
      <div className="relative min-h-[180px] md:min-h-[240px]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black rounded-b-lg" />
        <div className="relative p-5 md:p-7 space-y-5">
          <div className="space-y-1.5">
            <div className="h-4 w-24 bg-zinc-800/40 rounded" />
            <div className="h-7 w-3/4 bg-zinc-800/30 rounded" />
            <div className="h-7 w-1/2 bg-zinc-800/20 rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-full bg-zinc-800/30 rounded" />
            <div className="h-2.5 w-5/6 bg-zinc-800/20 rounded" />
            <div className="h-2.5 w-2/3 bg-zinc-800/20 rounded" />
          </div>
          <div className="flex gap-3 pt-1">
            <div className="h-9 w-32 bg-zinc-700/60 rounded-lg" />
            <div className="h-9 w-28 bg-zinc-800/40 rounded-lg border border-zinc-700/30" />
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg bg-zinc-800/30" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[18px] border-[2.5px] border-zinc-600/70 bg-black shadow-2xl shadow-black/80 w-[110px] md:w-[160px] overflow-hidden">
      <div className="flex items-center justify-between px-3 md:px-4 pt-2.5 md:pt-3 pb-1 md:pb-1.5">
        <span className="text-[8px] md:text-[9px] text-zinc-400 font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-1.5 md:w-3 md:h-1.5 rounded-[1px] border border-zinc-500" />
          <svg width="12" height="8" viewBox="0 0 14 10" fill="none">
            <path d="M1 5h12M7 1v8" stroke="#a1a1aa" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
      <div className="px-2.5 md:px-3 py-1 md:py-1.5">
        <div className="flex items-center justify-between mb-1.5 md:mb-2">
          <span className="text-[8px] md:text-[9px] font-mono text-zinc-500">Lumina</span>
          <div className="flex flex-col gap-[2px]">
            <span className="w-2.5 md:w-3 h-[1px] bg-zinc-500" />
            <span className="w-2.5 md:w-3 h-[1px] bg-zinc-500" />
            <span className="w-2.5 md:w-3 h-[1px] bg-zinc-500" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export const Showcase = () => {
  return (
    <section id="portfolio" className="py-28 md:py-36 border-t border-zinc-800/20 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <div className="relative inline-block">
              <div className="absolute -inset-20 blur-[120px] bg-indigo-500/10 pointer-events-none" />
              <div className="relative flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse shrink-0" />
                <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50">
                  Proyecto Estrella
                </h2>
                <svg className="w-5 h-5 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-xs font-mono text-zinc-500 tracking-wider">
                Lumina Studio
              </span>
            </div>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Nuestro proyecto estrella. Una experiencia web inmersiva con diseño de alto impacto, velocidad extrema y calidad de producción lista para cualquier negocio.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          <FadeIn delay={0.05}>
            <a
              href="https://lumina-studio-amber-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative md:col-span-2 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/80 to-[#0c0c0e] hover:border-zinc-700 transition-all duration-500 min-h-[420px] flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-transparent pointer-events-none rounded-xl" />

              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                    Diseño adaptable de alto rendimiento
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
                </div>

                <div className="flex-1 relative pb-14 md:pb-24">
                  <div className="group-hover:scale-[1.005] transition-all duration-500 ease-out">
                    <MacWindow />
                  </div>

                  <div className="absolute bottom-0 right-0 md:bottom-2 md:right-2 z-10 group-hover:scale-[1.015] transition-all duration-500 ease-out">
                    <PhoneFrame>
                      <div className="rounded-lg bg-gradient-to-b from-zinc-800/30 to-zinc-900/50 min-h-[60px] md:min-h-[80px] flex items-center justify-center mb-1.5 md:mb-2">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-700/50 flex items-center justify-center">
                          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-600/50" />
                        </div>
                      </div>
                      <div className="space-y-1 mb-1.5 md:mb-2">
                        <div className="h-1.5 md:h-2 w-full bg-zinc-800/40 rounded" />
                        <div className="h-1.5 md:h-2 w-2/3 bg-zinc-800/30 rounded" />
                      </div>
                      <div className="h-6 md:h-7 w-full bg-zinc-700/50 rounded-lg flex items-center justify-center">
                        <span className="text-[7px] md:text-[8px] text-zinc-400 font-mono">Explorar</span>
                      </div>
                    </PhoneFrame>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {["NEXT.JS", "TAILWIND CSS", "VERCEL"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono tracking-wider text-zinc-300 bg-zinc-900/80 border border-zinc-800 py-1 px-2.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/80 to-[#0c0c0e] hover:border-zinc-700 transition-all duration-500 min-h-[420px] flex flex-col">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-6">
                  Métricas de Rendimiento
                </span>
                <div className="flex flex-col gap-5 flex-1 justify-center">
                  {[
                    { label: "Velocidad de Carga", value: "0.3s", pct: 98 },
                    { label: "Rendimiento", value: "100%", pct: 100 },
                    { label: "SEO Técnico", value: "100%", pct: 100 },
                  ].map((metric) => (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                          {metric.label}
                        </span>
                        <span className="text-xs font-semibold text-zinc-50">
                          {metric.value}
                        </span>
                      </div>
                      <div className="h-2 bg-zinc-800/40 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-emerald-500 transition-all duration-1000"
                          style={{
                            width: `${metric.pct}%`,
                            boxShadow: "0 0 10px rgba(16,185,129,0.5)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
