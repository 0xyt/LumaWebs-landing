import { Navbar } from "../components/components/Navbar";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { Process } from "../sections/Process";
import { Portfolio } from "../sections/Portfolio";
import { About } from "../sections/About";
import { Pricing } from "../sections/Pricing";
import { FAQ } from "../sections/FAQ";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#050505] antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
