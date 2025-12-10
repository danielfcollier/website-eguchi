import React from 'react';
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { Logo } from "../components/Logo";

export const Footer = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.315039533306!2d-48.50379432454236!3d-27.583724276253787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273919e3556073%3A0x673999902506306!2sRod.%20Admar%20Gonzaga%2C%20971%20-%20Itacorubi%2C%20Florian%C3%B3polis%20-%20SC%2C%2088034-000!5e0!3m2!1spt-BR!2sbr!4v1710987654321!5m2!1spt-BR!2sbr";

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800" id="contato-footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Marca */}
          <div>
            <div className="mb-6 invert brightness-0 grayscale opacity-80">
               <Logo className="h-12 text-stone-300" />
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mb-6">
              Odontologia Humanizada.<br/>
              Mudando sua percepção sobre o dentista com empatia, carinho e tecnologia.
            </p>
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

          {/* Contato */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1" />
                <div>
                  <p>(48) 3307-7090 (Fixo)</p>
                  <p>(48) 99205-8586 (WhatsApp)</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:eguchi.odontologia@gmail.com" className="hover:text-white transition-colors">eguchi.odontologia@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <div>
                    <p>Rodovia Admar Gonzaga, 971</p>
                    <p>Itacorubi, Florianópolis - SC</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Mapa (Oculto em Mobile) */}
          {/* Adicionada a classe 'hidden md:block' para ocultar em telas menores */}
          <div className="h-48 rounded-xl overflow-hidden bg-stone-800 relative">
             <iframe 
               src={mapEmbedUrl} 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               className="opacity-80 hover:opacity-100 transition-opacity"
             ></iframe>
          </div>

        </div>
        
        {/* Rodapé inferior */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-300 text-center md:text-left gap-4">
          <div>
            <p>© {new Date().getFullYear()} Eguchi Odontologia. Todos os direitos reservados.</p>
            <p className="mt-1">Responsável Técnico: Dr. Marcel Eguchi</p>
          </div>
          
          <a href="https://websiteturbo.com.br" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition-colors font-medium">
            Desenvolvido por Website Turbo
          </a>
        </div>
      </div>
    </footer>
  );
};