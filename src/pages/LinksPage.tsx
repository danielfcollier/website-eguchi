import React from 'react';
import { MapPin, MessageCircle, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Logo } from "../components/Logo";

export const LinksPage = () => {
  const profile = {
    whatsapp: "https://wa.me/message/FP7NX7ED7JYTH1",
    maps: "https://maps.app.goo.gl/jeyGmnKJHmLGwd769",
    site: "/"
  };

  const links = [
    {
      label: "Agendar Consulta (WhatsApp)",
      url: profile.whatsapp,
      icon: MessageCircle,
      highlight: true,
    },
    {
      label: "Como Chegar (Maps)",
      url: profile.maps,
      icon: MapPin,
      highlight: false,
    },
    {
      label: "Visite nosso Site Oficial",
      url: profile.site,
      icon: Globe,
      highlight: false,
    }
  ];

  return (
    <div className="min-h-screen bg-[#857B75] text-white flex flex-col font-body bg-gradient-to-b from-[#8f847e] to-[#857B75]">
      <main className="flex-1 container max-w-md mx-auto px-6 py-16 flex flex-col items-center justify-center">

        {/* Logo Area */}
        <div className="mb-8 p-6 bg-white rounded-3xl shadow-xl w-full flex justify-center transform hover:scale-105 transition-transform duration-500">
           <Logo className="h-16" dark={false} />
        </div>

        {/* Frase Poética (Substituindo Headline) */}
        <div className="mb-10 text-center relative">
          <p className="text-xl font-heading font-light italic leading-relaxed text-white/95 drop-shadow-md">
            "O que o sol é para flores,<br/>
            o <strong>sorriso</strong> é para a humanidade."
          </p>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            
            // Estilo do Botão Principal (Igual ao CTA do Index: Verde Joia)
            const primaryStyle = "bg-[#047857] hover:bg-[#036045] text-white border-none shadow-[0_0_20px_rgba(4,120,87,0.3)]";
            
            // Estilo dos Botões Secundários (Vidro/Transparente Amigável)
            const secondaryStyle = "bg-white/20 text-white hover:bg-white/30 border border-white/10 backdrop-blur-sm shadow-sm";

            return (
              <Button
                key={index}
                asChild
                className={`w-full h-16 text-base font-bold rounded-full transition-all duration-300 justify-start px-8 gap-4 hover:scale-[1.02] ${
                  link.highlight ? primaryStyle : secondaryStyle
                }`}
              >
                <a href={link.url} target={link.url === '/' ? "_self" : "_blank"} rel="noopener noreferrer">
                  <Icon className={`w-6 h-6 ${link.highlight ? 'opacity-100' : 'opacity-80'}`} />
                  {link.label}
                </a>
              </Button>
            );
          })}
        </div>

      </main>

      <footer className="py-8 text-center text-xs text-white/60 border-t border-white/10">
        <p>© {new Date().getFullYear()} Eguchi Odontologia</p>
      </footer>
    </div>
  );
};