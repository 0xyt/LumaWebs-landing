import { Navbar } from "../components/components/Navbar";
import { Hero } from "../sections/Hero";
import { Showcase } from "../sections/Showcase";
import { Services } from "../sections/Services";
import { Infrastructure } from "../sections/Infrastructure";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#09090b] antialiased bg-noise">
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <Infrastructure />
      <Contact />
      <Footer />
    </main>
  );
}
