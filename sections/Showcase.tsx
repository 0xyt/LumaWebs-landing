"use client";

import { FadeIn } from "../components/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

export const Showcase = () => {
  return (
    <section id="portfolio" className="py-28 md:py-36 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-tight leading-[1.12] text-zinc-50 mb-4">
              Featured Work
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px]">
              Proyectos que reflejan nuestro enfoque: minimalismo, velocidad y cuidado por el detalle.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <a
            href="https://lumina-studio-amber-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-zinc-800/80 bg-[#18181b] overflow-hidden hover:border-zinc-700/80 transition-all duration-500"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                    Proyecto Destacado
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-50 mt-1">
                    Lumina Studio
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed max-w-[560px] mb-6">
                Una experiencia web inmersiva en modo oscuro desarrollada para demostrar rendimiento extremo, estética minimalista y fluidez absoluta.
              </p>

              <div className="flex flex-wrap gap-2">
                {["NEXT.JS", "TAILWIND CSS", "HIGH PERFORMANCE"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-zinc-500 bg-zinc-800/50 border border-zinc-700/50 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 mt-5">
          {[
            { title: "Exploración UI — Dashboard", tag: "CONCEPT" },
            { title: "Exploración UI — Landing", tag: "CONCEPT" },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={0.1 + index * 0.05}>
              <div className="rounded-xl border border-zinc-800/80 bg-[#18181b] p-7 md:p-8 hover:border-zinc-700/80 transition-colors duration-300">
                <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-2">
                  {item.tag}
                </span>
                <h4 className="text-sm font-medium text-zinc-50">
                  {item.title}
                </h4>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
