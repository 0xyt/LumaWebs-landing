import { ReactNode } from 'react';

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
}

export const GlowBorder = ({ children, className = '' }: GlowBorderProps) => {
  return (
    <div className={`relative p-8 rounded-2xl border border-neutral-800 bg-[#0F0F15] ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2D6AEF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
