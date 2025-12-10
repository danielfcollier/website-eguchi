import React from 'react';
import { MapPin, MessageCircle, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Logo } from "../components/Logo";

export const LinksPage = () => {
  const profile = {
    name: "Eguchi Odontologia",
    description: "Odontologia Humanizada em Florianópolis",
    whatsapp: "https://wa.me/message/FP7NX7ED7JYTH1",
    maps: "https://maps.google.com/?q=Rodovia+Admar+Gonzaga+971+Itacorubi+Florianopolis",
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
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col font-body">
      <main className="flex-1 container max-w-md mx-auto px-6 py-16 flex flex-col items-center">
        
        {/* Logo Area */}
        <div className="mb-8 p-6 bg-stone-800/50 rounded-full border border-stone-700/50">
           <Logo className="h-16 text-stone-200" />
        </div>

        <h1 className="text-2xl font-heading font-bold mb-2 text-center text-white">{profile.name}</h1>
        <p className="text-stone-400 text-center mb-10 text-sm max-w-xs">
          {profile.description}
        </p>

        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                asChild
                className={`w-full h-16 text-base font-bold rounded-xl transition-all duration-300 shadow-lg justify-start px-6 gap-4 ${
                  link.highlight
                    ? "bg-secondary hover:bg-secondary/90 text-white border-none scale-105 mb-2"
                    : "bg-stone-800 text-stone-200 hover:bg-stone-700 hover:text-white border border-stone-700"
                }`}
              >
                <a href={link.url} target={link.url === '/' ? "_self" : "_blank"} rel="noopener noreferrer">
                  <Icon className="w-5 h-5" />
                  {link.label}
                </a>
              </Button>
            );
          })}
        </div>

      </main>

      <footer className="py-8 text-center text-xs text-stone-600 border-t border-stone-800">
        <p>© {new Date().getFullYear()} Eguchi Odontologia</p>
      </footer>
    </div>
  );
};