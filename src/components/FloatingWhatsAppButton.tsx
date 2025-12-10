import React, { useEffect, useState } from 'react';
import { MessageCircle } from "lucide-react";

export const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão apenas após rolar 1 altura de tela (passou da Hero)
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a 
      href="https://wa.me/message/FP7NX7ED7JYTH1" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className={`fixed bottom-6 right-6 z-50 p-4 bg-secondary text-white rounded-full shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
};