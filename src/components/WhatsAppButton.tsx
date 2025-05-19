import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vim pelo site e gostaria de saber mais sobre os serviços da HDEV Solutions.");
    window.open(`https://wa.me/5516997223968?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;