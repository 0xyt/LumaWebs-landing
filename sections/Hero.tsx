"use client";

import Link from "next/link";
import { FadeIn } from "../components/components/FadeIn";
import { site } from "@/lib/config";

const techStack = [
  { name: "Next.js", src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' },
  { name: "Vercel", src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2z"/></svg>' },
  { name: "TailwindCSS", src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>' },
  { name: "Figma", src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10"/></svg>' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,111,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center"
        style={{
          paddingTop: "160px",
          paddingBottom: "100px",
        }}
      >
        <FadeIn delay={0}>
          <div className="mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
            <span className="text-xs font-medium text-[var(--accent)] tracking-wider uppercase">
              Sistemas digitales · Bolivia
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            className="text-[clamp(40px,6vw,72px)] font-syne font-bold tracking-[-0.04em] leading-[1.1] text-[var(--text-primary)] mb-6 max-w-[800px]"
          >
            Construimos el sistema digital que tu negocio necesita.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-[600px] leading-relaxed mb-12 font-inter">
            Desde una landing page hasta automatización completa con IA. Diseño
            premium, tecnología real, resultados medibles.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link
              href="/briefing"
              className="cta-primary text-center justify-center"
            >
              Empezar proyecto →
            </Link>
            <a href="#portafolio" className="cta-secondary text-center justify-center">
              Ver portfolio
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-16">
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs text-[var(--text-tertiary)] tracking-wider uppercase">
              Construido con
            </span>
            <div className="flex items-center gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 opacity-40 hover:opacity-60 transition-opacity"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-4 h-4"
                  />
                  <span className="text-[11px] text-[var(--text-tertiary)] font-mono">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
