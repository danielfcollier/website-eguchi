import React from 'react';
import { MessageCircle } from "lucide-react";

export const FloatingWhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/message/FP7NX7ED7JYTH1" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 p-4 bg-secondary text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
};