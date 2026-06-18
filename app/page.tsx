import { Navbar } from "../components/components/Navbar";
import { Hero } from "../sections/Hero";
import { StudioStrip } from "../sections/StudioStrip";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Pricing } from "../sections/Pricing";
import { Process } from "../sections/Process";
import { Portfolio } from "../sections/Portfolio";
import { FAQ } from "../sections/FAQ";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";
import WhatsAppCTA from "../components/components/WhatsAppCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-forge-bg antialiased">
      <Navbar />
      <Hero />
      <StudioStrip />
      <About />
      <Services />
      <Pricing />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
