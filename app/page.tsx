// app/page.tsx
import { Hero } from "../sections/Hero"; 
import { Showcase } from "../sections/Showcase"; 
import { Testimonials } from "../sections/Testimonials"; 
import { Footer } from "../sections/Footer"; 
import WhatsAppCTA from "../components/components/WhatsAppCTA"; 

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] text-slate-100 antialiased selection:bg-blue-500/30">
      
      {/* Luces de ambiente premium (Linear/Raycast style) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(45,106,239,0.08),transparent_65%)]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(45,106,239,0.03),transparent_70%)]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(45,106,239,0.04),transparent_70%)]" />
      </div>

      {/* Ensamblaje de Secciones Limpias */}
      <div className="relative z-10">
        <Hero />
        <Showcase />
        <Testimonials />
        <Footer />
      </div>
      
      <WhatsAppCTA />
    </main>
  );
}