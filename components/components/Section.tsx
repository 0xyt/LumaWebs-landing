import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean; // Nueva propiedad
}

export const Section = ({ children, className = '', id, fullWidth = false }: SectionProps) => {
  return (
    <section id={id} className={`relative w-full px-6 md:px-8 ${className}`}>
      {fullWidth ? (
        children // Si es fullWidth, renderiza directo sin el div limitante
      ) : (
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      )}
    </section>
  );
};