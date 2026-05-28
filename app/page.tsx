import { Navbar } from "../components/components/Navbar";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { Process } from "../sections/Process";
import { Portfolio } from "../sections/Portfolio";
import { About } from "../sections/About";
import { Pricing } from "../sections/Pricing";
import { FAQ } from "../sections/FAQ";
import { CTA } from "../sections/CTA";
import { Footer } from "../sections/Footer";
import WhatsAppCTA from "../components/components/WhatsAppCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[var(--bg-base)] antialiased">
      <Navbar />

      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>

      <WhatsAppCTA />
    </main>
  );
}
