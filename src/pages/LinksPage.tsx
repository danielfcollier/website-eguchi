import React from 'react';
import { MapPin, MessageCircle, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Logo } from "../components/Logo";

export const LinksPage = () => {
  const profile = {
    name: "Eguchi Odontologia",
    description: "Odontologia Humanizada em Florianópolis",
    whatsapp: "https://wa.me/message/FP7NX7ED7JYTH1",
    // Link do Maps (Destino)
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
    <div className="min-h-screen bg-[#595959] text-white flex flex-col font-body bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#6b6b6b] to-[#595959]">
      <main className="flex-1 container max-w-md mx-auto px-6 py-16 flex flex-col items-center">
        
        {/* Logo Area com Efeito Vidro */}
        <div className="mb-8 p-8 bg-white/5 rounded-full border border-white/10 shadow-2xl backdrop-blur-md">
           <Logo className="h-16" dark={true} />
        </div>

        <h1 className="text-3xl font-heading font-bold mb-3 text-center tracking-tight">{profile.name}</h1>
        <p className="text-stone-300 text-center mb-12 text-sm max-w-xs font-light leading-relaxed">
          {profile.description}
        </p>

        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                asChild
                className={`w-full h-16 text-base font-bold rounded-2xl transition-all duration-300 shadow-lg justify-start px-6 gap-4 hover:scale-[1.02] ${
                  link.highlight
                    ? "bg-[#047857] hover:bg-[#036045] text-white border-none shadow-[#047857]/20"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/5 hover:border-white/20 backdrop-blur-sm"
                }`}
              >
                <a href={link.url} target={link.url === '/' ? "_self" : "_blank"} rel="noopener noreferrer">
                  <Icon className="w-5 h-5 opacity-90" />
                  {link.label}
                </a>
              </Button>
            );
          })}
        </div>

      </main>

      <footer className="py-8 text-center text-xs text-stone-400/60 border-t border-white/5">
        <p>© {new Date().getFullYear()} Eguchi Odontologia</p>
      </footer>
    </div>
  );
};