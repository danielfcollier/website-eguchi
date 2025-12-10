import React from 'react';
import { Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        <div className="mb-8">
          <span className="font-heading text-2xl text-white italic font-bold">Eguchi Odontologia</span>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.instagram.com/eguchiodontologia" target="_blank" rel="noopener noreferrer" 
             className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all text-stone-300">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="border-t border-stone-800 w-full max-w-md my-6"></div>

        <div className="space-y-2 text-sm">
          <p>© {currentYear} Eguchi Odontologia. Todos os direitos reservados.</p>
          <p className="font-medium text-stone-300">Responsável Técnico: Dr. Marcel Eguchi</p>
        </div>

        <div className="mt-8 text-xs opacity-60 hover:opacity-100 transition-opacity">
          Desenvolvido por <a href="https://websiteturbo.com.br" target="_blank" rel="noopener" className="font-bold hover:text-white">Website Turbo</a>
        </div>
      </div>
    </footer>
  );
};