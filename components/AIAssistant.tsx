
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "+97140000000"; // Replace with real number
  const message = "Hello ARKIVE! I need technical assistance with a project.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 md:w-20 md:h-20 bg-whatsapp text-white rounded-full shadow-[0_10px_40px_-10px_rgba(37,211,102,0.8)] flex items-center justify-center z-50 animate-pulse-glow group hover:scale-110 transition-transform"
    >
      {/* Fixed: removed invalid md:size prop and used tailwind classes for responsive sizing */}
      <MessageCircle size={32} className="w-8 h-8 md:w-10 md:h-10 fill-white" />
      
      {/* Tooltip Label */}
      <span className="absolute right-full mr-4 bg-inkwell text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border-b-2 border-whatsapp">
        Chat with Expert Now
      </span>

      {/* Ripple Effects */}
      <div className="absolute inset-0 rounded-full bg-whatsapp/20 animate-ping -z-10"></div>
    </a>
  );
};

export default WhatsAppButton;
