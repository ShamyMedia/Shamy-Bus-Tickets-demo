import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-4 rounded-full shadow-lg transition-transform hover:scale-105 animate-bounce-subtle"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle size={28} />
      <span className="font-bold text-lg hidden md:inline">احجز الآن</span>
    </a>
  );
};

export default WhatsAppButton;