'use client';

import { Section } from "../components/components/Section";

export const Footer = () => {
  return (
    <Section className="border-t border-neutral-800">
      <div className="text-center space-y-6">
        <h2 className="font-lexend text-3xl font-bold text-white">¿Listo para tu Landing de Élite?</h2>
        <p className="text-xl text-[#8A8F98] max-w-2xl mx-auto">Contáctanos hoy y transforma tu visión digital en realidad.</p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/65947291"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#050509] px-10 py-5 rounded-full text-lg font-semibold hover:bg-neutral-200 transition-colors"
          >
            Escribir a WhatsApp
          </a>
        </div>
        <div className="pt-12 border-t border-neutral-800 text-center">
          <p className="text-sm text-[#8A8F98]">© 2025 Adan Web Source. Todos los derechos reservados.</p>
        </div>
      </div>
    </Section>
  );
};
