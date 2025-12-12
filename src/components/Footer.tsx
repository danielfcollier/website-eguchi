import React from 'react';
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#595959] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        
        {/* Parte Superior: Logo e Endereço */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          {/* Logo */}
          <Link to="/" className="group hover:opacity-90 transition-opacity">
             <Logo className="h-12" dark={true} />
          </Link>

          {/* Endereço (Alto contraste) */}
          <div className="hidden md:flex items-center gap-2 text-white font-medium">
             <MapPin className="w-5 h-5 text-[#FF9701]" />
             <span>Florianópolis, SC</span>
          </div>

        </div>

        {/* Linha Final: Copyright + Resp. Técnico na mesma linha (desktop) e alto contraste */}
        {/* <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/90"> */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/90">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Eguchi Odontologia. Todos os direitos reservados.
            <span className="mx-2 hidden md:inline">|</span>
            <span className="block md:inline mt-1 md:mt-0">Responsável Técnico: Dr. Marcel Eguchi</span>
          </p>

          <a href="https://websiteturbo.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9701] transition-colors">
            Desenvolvido por Website Turbo
          </a>

        </div>
      </div>
    </footer>
  );
};