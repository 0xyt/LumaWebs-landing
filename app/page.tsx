// app/page.tsx
// Fíjate en los imports actualizados: ahora apuntan a ../sections/
import { Hero } from "../sections/Hero"; 
import { Showcase } from "../sections/Showcase"; 
import { Testimonials } from "../sections/Testimonials"; 
import { Footer } from "../sections/Footer"; 
import WhatsAppCTA from "../components/components/WhatsAppCTA"; 

export default function Home() {
  return (
    // relative min-h-screen overflow-hidden es necesario para el efecto premium
    <main className="relative min-h-screen overflow-hidden bg-[#050509]">
      
      {/* Un sutil brillo radial de fondo fijo para toda la página */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-radial from-[#2D6AEF]/5 to-transparent opacity-30 pointer-events-none z-0" />

      {/* Ensamblaje de Secciones */}
      <Hero />
      <Showcase />
      <Testimonials />
      <Footer />
      
      {/* CTA Flotante */}
      <WhatsAppCTA />
    </main>
  );
}