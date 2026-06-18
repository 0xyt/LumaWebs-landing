import { ReactNode } from 'react';

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
}

export const GlowBorder = ({ children, className = '' }: GlowBorderProps) => {
  return (
    <div className={`forge-card relative rounded-xl p-8 ${className}`}>
      <div className="absolute inset-0 rounded-xl bg-copper/[0.045] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
