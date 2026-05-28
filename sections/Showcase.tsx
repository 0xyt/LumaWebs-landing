"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight, Gauge, Timer, Search } from "lucide-react";

export const Showcase = () => {
  return (
    <section id="portfolio" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Lumina Studio
            </h2>
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
              className="group relative md:col-span-2 row-span-2 rounded-xl border border-zinc-800/80 bg-[#0c0c0e] overflow-hidden hover:border-zinc-700/80 transition-all duration-500 min-h-[380px] flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                    Vista Escritorio
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>

                <div className="flex-1 rounded-lg border border-zinc-800/40 bg-[#08080a] overflow-hidden">
                  <div className="flex items-center gap-1 px-3 pt-2 pb-1.5 border-b border-zinc-800/30">
                    <span className="w-2 h-2 rounded-full bg-zinc-700" />
                    <span className="w-2 h-2 rounded-full bg-zinc-700" />
                    <span className="w-2 h-2 rounded-full bg-zinc-700" />
                    <span className="ml-2 text-[9px] text-zinc-600 font-mono">lumina-studio.vercel.app</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-3/4 rounded bg-zinc-800/50" />
                    <div className="h-2 w-1/2 rounded bg-zinc-800/30" />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="aspect-[4/3] rounded bg-zinc-800/40" />
                      ))}
                    </div>
                    <div className="h-2 w-full rounded bg-zinc-800/30 mt-3" />
                    <div className="h-2 w-2/3 rounded bg-zinc-800/30" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["NEXT.JS", "TAILWIND CSS", "VERCEL EDGE"].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-xl border border-zinc-800/80 bg-[#0c0c0e] overflow-hidden hover:border-zinc-700/80 transition-all duration-500 min-h-[240px] flex flex-col">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-4">
                  Vista Móvil
                </span>
                <div className="flex-1 mx-auto w-[60%] rounded-lg border border-zinc-800/40 bg-[#08080a] overflow-hidden">
                  <div className="flex items-center gap-1 px-2 pt-1.5 pb-1 border-b border-zinc-800/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                  </div>
                  <div className="p-2 space-y-2">
                    <div className="h-1.5 w-full rounded bg-zinc-800/50" />
                    <div className="h-1 w-2/3 rounded bg-zinc-800/30" />
                    <div className="h-12 rounded bg-zinc-800/40 mt-2" />
                    <div className="h-1 w-full rounded bg-zinc-800/30" />
                    <div className="h-1 w-3/4 rounded bg-zinc-800/30" />
                  </div>
                </div>
                <p className="text-[10px] text-zinc-500 text-center mt-3 font-mono">
                  Responsive · Mobile First
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="md:col-span-3 rounded-xl border border-zinc-800/80 bg-[#0c0c0e] hover:border-zinc-700/80 transition-all duration-500">
              <div className="p-6 md:p-8">
                <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-5">
                  Métricas de Rendimiento
                </span>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Timer, label: "Velocidad de Carga", value: "0.3s", pct: 98, color: "bg-green-500" },
                    { icon: Gauge, label: "Rendimiento", value: "100%", pct: 100, color: "bg-green-500" },
                    { icon: Search, label: "SEO Técnico", value: "100%", pct: 100, color: "bg-green-500" },
                  ].map((metric) => {
                    const Icon = metric.icon;
                    return (
                      <div key={metric.label} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-zinc-400" />
                            <span className="text-xs text-zinc-400">{metric.label}</span>
                          </div>
                          <span className="text-sm font-semibold text-zinc-50">{metric.value}</span>
                        </div>
                        <div className="h-1.5 bg-zinc-800/50 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${metric.color} transition-all duration-1000`} style={{ width: `${metric.pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
