import { Navbar } from "../components/components/Navbar";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { Showcase } from "../sections/Showcase";
import { Process } from "../sections/Process";
import { Infrastructure } from "../sections/Infrastructure";
import { FAQ } from "../sections/FAQ";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#09090b] antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <Process />
      <Infrastructure />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
