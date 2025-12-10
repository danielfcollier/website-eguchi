import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export const LinksPage = () => {
  const links = [
    { 
      text: "Agende sua Consulta (WhatsApp)", 
      icon: MessageCircle, 
      href: "https://wa.me/message/FP7NX7ED7JYTH1", 
      style: "bg-secondary hover:bg-secondary/90 border-secondary"
    },
    { 
      text: "Nosso Perfil no Instagram", 
      icon: Instagram, 
      href: "https://www.instagram.com/eguchiodontologia", 
      style: "bg-stone-800 hover:bg-stone-700 border-stone-800"
    },
    { 
      text: "Ver Endereço e Mapa", 
      icon: MapPin, 
      href: "https://maps.app.goo.gl/...", 
      style: "bg-primary hover:bg-primary/90 border-primary"
    },
    { 
      text: "Telefone Fixo: (48) 3307-7090", 
      icon: Phone, 
      href: "tel:+554833077090", 
      style: "bg-white text-stone-800 border-stone-200 hover:bg-stone-100"
    }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-stone-900 p-6">
      <div className="w-full max-w-lg mt-12 mb-8 text-center">
        <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-heading font-bold text-white">
          E
        </div>
        <h1 className="text-2xl font-heading font-bold text-white">Eguchi Odontologia</h1>
        <p className="text-sm text-stone-400 mt-1">Odontologia Humanizada em Florianópolis</p>
      </div>

      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <Button 
            key={index}
            asChild
            className={`w-full h-14 text-white font-bold rounded-xl text-base shadow-md transition-all duration-200 ${link.style}`}
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
              <link.icon className="w-5 h-5" />
              {link.text}
            </a>
          </Button>
        ))}
      </div>
      
      <div className="mt-12 text-xs text-stone-600">
        Desenvolvido por <a href="https://websiteturbo.com.br" target="_blank" rel="noopener" className="hover:text-stone-400">Website Turbo</a>
      </div>
    </div>
  );
};