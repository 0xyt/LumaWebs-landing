import { MessageCircle } from 'lucide-react';
import { site } from "@/lib/config";

const WhatsAppCTA = () => {
  return (
    <a
      href={site.whatsappLinks.quote}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-copper/45 bg-copper text-forge-text shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-200 hover:scale-105 hover:border-cyan/55 hover:bg-copper-light hover:text-forge-bg md:bottom-8 md:right-8"
      aria-label="Chatear por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppCTA;
