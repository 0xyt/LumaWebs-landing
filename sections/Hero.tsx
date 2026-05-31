"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

function CodeEditorMockup() {
  const lines = [
    { nums: "1", code: "<span style='color:#c084fc'>import</span> { <span style='color:#60a5fa'>NextPage</span> } <span style='color:#c084fc'>from</span> <span style='color:#34d399'>&quot;next&quot;</span>", color: true },
    { nums: "2", code: "<span style='color:#c084fc'>import</span> { <span style='color:#60a5fa'>Hero</span>, <span style='color:#60a5fa'>Showcase</span> } <span style='color:#c084fc'>from</span> <span style='color:#34d399'>&quot;@/sections&quot;</span>", color: true },
    { nums: "3", code: "", color: false },
    { nums: "4", code: "<span style='color:#c084fc'>const</span> <span style='color:#60a5fa'>Home</span>: <span style='color:#60a5fa'>NextPage</span> = <span style='color:#f472b6'>()</span> <span style='color:#f472b6'>=&gt;</span> {", color: true },
    { nums: "5", code: "  <span style='color:#c084fc'>return</span> (", color: true },
    { nums: "6", code: "    <span style='color:#f472b6'>&lt;</span><span style='color:#60a5fa'>main</span><span style='color:#f472b6'>&gt;</span>", color: true },
    { nums: "7", code: "      <span style='color:#f472b6'>&lt;</span><span style='color:#60a5fa'>Hero</span> <span style='color:#facc15'>/</span><span style='color:#f472b6'>&gt;</span>", color: true },
    { nums: "8", code: "      <span style='color:#f472b6'>&lt;</span><span style='color:#60a5fa'>Showcase</span> <span style='color:#facc15'>/</span><span style='color:#f472b6'>&gt;</span>", color: true },
    { nums: "9", code: "    <span style='color:#f472b6'>&lt;/</span><span style='color:#60a5fa'>main</span><span style='color:#f472b6'>&gt;</span>", color: true },
    { nums: "10", code: "  )", color: true },
    { nums: "11", code: "}", color: true },
  ];

  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-transparent to-zinc-500/5 rounded-3xl blur-2xl pointer-events-none" />
      <div className="relative rounded-xl border border-zinc-800/60 bg-[#0a0a0c] overflow-hidden shadow-2xl">
        <div className="flex items-center gap-1.5 px-4 pt-3 pb-2 border-b border-zinc-800/40">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <div className="ml-4 flex items-center gap-2 text-[10px] text-zinc-500">
            <span className="bg-zinc-800/50 px-2 py-0.5 rounded">adanlabs.com</span>
          </div>
        </div>

        <div className="p-5 font-mono text-[11px] leading-6">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="text-zinc-600 w-8 shrink-0 select-none">{line.nums}</span>
              <span dangerouslySetInnerHTML={{ __html: line.code }} className={line.code ? "" : "text-zinc-600"} />
            </div>
          ))}
        </div>

        <div className="absolute -bottom-3 -right-3 bg-zinc-50/10 backdrop-blur-xl border border-zinc-700/50 rounded-lg px-3 py-2 flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-green-400" />
          <span className="text-[10px] font-mono text-green-400">100% Rendimiento Web Optimizado</span>
        </div>
      </div>
    </div>
  );
}

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-grid">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                P&aacute;gina hecha por Adan Labs
              </span>
            </div>
            <h1 className="text-[clamp(30px,4.5vw,54px)] font-semibold tracking-tight leading-[1.08] text-zinc-50 mb-5">
              Creamos y remodelamos p&aacute;ginas web de alto impacto visual.
            </h1>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[480px] mb-8">
              Desarrollo web a medida, diseño minimalista y optimización técnica para marcas que buscan destacar. Nos encargamos de todo: desde el código hasta tu dominio.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg text-sm px-5 py-2.5 bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-all duration-200 gap-2 group"
              >
                Iniciar un Proyecto
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-lg text-sm px-5 py-2.5 border border-zinc-800 text-zinc-400 hover:bg-zinc-900 transition-all duration-200"
              >
                Ver Portfolio
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {["Next.js", "TailwindCSS", "Vercel", "Linux"].map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-zinc-600 tracking-wide uppercase">
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
            <CodeEditorMockup />
          </motion.div>
        </div>

      </div>

    </section>
  );
};
