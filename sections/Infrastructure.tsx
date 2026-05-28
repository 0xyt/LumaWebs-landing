"use client";

import { FadeIn } from "../components/components/FadeIn";

const stack = ["Next.js", "TailwindCSS", "Vercel", "GitHub", "Linux Mint"];

export const Infrastructure = () => {
  return (
    <section className="py-20 md:py-28 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-4">
              Stack Tecnológico
            </span>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto">
              {stack.join(" • ")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
