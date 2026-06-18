import { MessageCircle } from 'lucide-react';
import { site } from "@/lib/config";

const WhatsAppCTA = () => {
  return (
    <a
      href={site.whatsappLinks.quote}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 hidden h-14 w-14 items-center justify-center rounded-full border border-copper/45 bg-copper text-white shadow-[0_18px_50px_rgba(185,95,50,0.28)] transition-all duration-200 hover:scale-105 hover:border-forge-text hover:bg-forge-text md:flex"
      aria-label="Chatear por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppCTA;
