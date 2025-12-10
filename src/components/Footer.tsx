import React from 'react';
import { Instagram } from "lucide-react";
import { Logo } from "../components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800" id="contato-footer">
      <div className="container mx-auto px-4">
        
        {/* Conteúdo Principal do Rodapé - Centralizado Mobile, Esquerda Desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 mb-12">
          
          {/* Marca e Slogan */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <div className="mb-6 invert brightness-0 grayscale opacity-80">
               <Logo className="h-12 text-stone-300" />
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mb-6">
              Odontologia Humanizada.<br/>
              Mudando sua percepção sobre o dentista com empatia, carinho e tecnologia.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/eguchiodontologia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors p-2 bg-stone-800 rounded-full"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-5 h-5"/>
              </a>
            </div>
          </div>

          {/* Links Rápidos (Opcional, se quiser manter algo) ou Vazio */}
          <div className="hidden md:block">
             {/* Espaço para layout futuro se necessário */}
          </div>

        </div>
        
        {/* Rodapé Inferior - Centralizado Mobile, Flex Row Desktop */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-300 gap-4 text-center md:text-left">
          <div className="flex flex-col md:block">
            <span>© {new Date().getFullYear()} Eguchi Odontologia. Todos os direitos reservados.</span>
            <span className="hidden md:inline mx-2">|</span>
            <span className="block md:inline mt-2 md:mt-0">Responsável Técnico: Dr. Marcel Eguchi</span>
          </div>
          
          <a href="https://websiteturbo.com.br" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition-colors font-medium">
            Desenvolvido por Website Turbo
          </a>
        </div>
      </div>
    </footer>
  );
};