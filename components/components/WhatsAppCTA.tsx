import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
  return (
    <a
      href="https://wa.me/59165947291"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:bg-[#1fa854]"
      aria-label="Chatear por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppCTA;
