"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

function MacWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-zinc-800/50 bg-gradient-to-br from-zinc-900 to-black overflow-hidden shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 pt-3 pb-2.5 border-b border-zinc-800/50 bg-zinc-900/50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <div className="ml-3 flex-1 flex justify-center">
          <span className="text-[9px] text-zinc-600 font-mono bg-zinc-800/60 px-3 py-0.5 rounded-full">
            lumina-studio.vercel.app
          </span>
        </div>
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[70%] md:w-[80%] rounded-[24px] border-[3px] border-zinc-700/60 bg-black overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[10px] text-zinc-400 font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-2 rounded-[2px] border border-zinc-500" />
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M7 1v8" stroke="#a1a1aa" strokeWidth="0.8"/></svg>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono text-zinc-500">Lumina</span>
          <div className="flex flex-col gap-[3px]">
            <span className="w-4 h-[1.5px] bg-zinc-500" />
            <span className="w-4 h-[1.5px] bg-zinc-500" />
            <span className="w-4 h-[1.5px] bg-zinc-500" />
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
              <h2 className="relative text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
                Lumina Studio
              </h2>
            </div>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Nuestro proyecto insignia. Una experiencia web inmersiva que demuestra lo que podemos hacer.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          <FadeIn delay={0.05}>
            <a
              href="https://lumina-studio-amber-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative md:col-span-2 row-span-2 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/80 to-[#0c0c0e] overflow-hidden hover:border-zinc-700 transition-all duration-500 min-h-[420px] flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-transparent pointer-events-none" />

              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                    Vista Escritorio
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>

                <div className="flex-1">
                  <MacWindow>
                    <div className="relative min-h-[240px]">
                      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />
                      <div className="relative p-6 md:p-8 space-y-6">
                        <div className="space-y-1.5">
                          <div className="h-4 w-24 bg-zinc-800/40 rounded" />
                          <div className="h-8 w-3/4 bg-zinc-800/30 rounded" />
                          <div className="h-8 w-1/2 bg-zinc-800/20 rounded" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2.5 w-full bg-zinc-800/30 rounded" />
                          <div className="h-2.5 w-5/6 bg-zinc-800/20 rounded" />
                          <div className="h-2.5 w-2/3 bg-zinc-800/20 rounded" />
                        </div>
                        <div className="flex gap-3 pt-2">
                          <div className="h-9 w-32 bg-zinc-700/60 rounded-lg" />
                          <div className="h-9 w-28 bg-zinc-800/40 rounded-lg border border-zinc-700/30" />
                        </div>
                        <div className="grid grid-cols-3 gap-3 pt-4">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="aspect-[4/3] rounded-lg bg-zinc-800/30" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </MacWindow>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {["NEXT.JS", "TAILWIND CSS", "VERCEL EDGE"].map((tag) => (
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
            <div className="rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/80 to-[#0c0c0e] hover:border-zinc-700 transition-all duration-500 min-h-[240px] flex flex-col">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                    Vista Móvil
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </div>

                <div className="flex-1 flex items-center justify-center py-2">
                  <PhoneFrame>
                    <div className="rounded-lg bg-gradient-to-b from-zinc-800/30 to-zinc-900/50 min-h-[100px] flex items-center justify-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-zinc-600/50" />
                      </div>
                    </div>
                    <div className="space-y-1.5 mb-3">
                      <div className="h-2.5 w-full bg-zinc-800/40 rounded" />
                      <div className="h-2.5 w-2/3 bg-zinc-800/30 rounded" />
                    </div>
                    <div className="h-8 w-full bg-zinc-700/50 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-[9px] text-zinc-400 font-mono">Explorar</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="h-6 rounded bg-zinc-800/30" />
                      <div className="h-6 rounded bg-zinc-800/40" />
                      <div className="h-6 rounded bg-zinc-800/30" />
                    </div>
                  </PhoneFrame>
                </div>

                <p className="text-[10px] text-zinc-600 text-center mt-3 font-mono tracking-wider">
                  Responsive · Mobile First
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="md:col-span-3 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/80 to-[#0c0c0e] hover:border-zinc-700 transition-all duration-500">
              <div className="p-6 md:p-8">
                <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-6">
                  Métricas de Rendimiento
                </span>
                <div className="flex flex-col gap-4">
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
