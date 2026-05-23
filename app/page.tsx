// app/page.tsx
import { Hero } from "../sections/Hero"; 
import { Showcase } from "../sections/Showcase"; 
import { HowItWorks } from "../sections/HowItWorks";
import { Portfolio } from "../sections/Portfolio";
import { Testimonials } from "../sections/Testimonials"; 
import { Footer } from "../sections/Footer"; 
import WhatsAppCTA from "../components/components/WhatsAppCTA"; 

export default function Home() {
  return (
    // Se fuerza contención estricta x (overflow-x-hidden) y optimización de renderizado
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#050509] antialiased">
      
      {/* Brillo radial optimizado con contención y hardware acceleration activa */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-gradient-radial from-[#2D6AEF]/5 to-transparent opacity-30 pointer-events-none z-0 will-change-transform" 
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Capa de renderizado controlado */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <Showcase />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
      
      <WhatsAppCTA />
    </main>
  );
}