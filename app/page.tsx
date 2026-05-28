import { Navbar } from "../components/components/Navbar";
import { Hero } from "../sections/Hero";
import { Showcase } from "../sections/Showcase";
import { Services } from "../sections/Services";
import { Process } from "../sections/Process";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] antialiased">
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
