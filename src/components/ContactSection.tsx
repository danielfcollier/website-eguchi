import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-xl border border-stone-100 grid lg:grid-cols-2">
          
          {/* Informações */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl font-heading font-bold text-stone-900 mb-6">Visite nossa clínica</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Endereço</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Rodovia Admar Gonzaga, 971<br />
                    Itacorubi, Florianópolis - SC<br />
                    Brasil
                  </p>
                  <a href="https://maps.app.goo.gl/..." target="_blank" className="text-sm text-secondary font-bold hover:underline mt-2 inline-block">
                    Abrir no Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Fale Conosco</h4>
                  <p className="text-stone-600">(48) 3307-7090</p>
                  <p className="text-stone-600">(48) 99205-8586</p>
                  <p className="text-stone-500 text-sm mt-1">eguchi.odontologia@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 h-14 text-lg font-bold gap-2 shadow-lg">
                <a href="https://wa.me/message/FP7NX7ED7JYTH1">
                  <MessageCircle className="w-5 h-5" /> Agendar pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Mapa Embed do Endereço Específico */}
          <div className="relative min-h-[400px] bg-stone-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.277762696614!2d-48.50654092446756!3d-27.58498842154562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273919e8c459c7%3A0xc33e5473f309a0f0!2sRod.%20Admar%20Gonzaga%2C%20971%20-%20Itacorubi%2C%20Florian%C3%B3polis%20-%20SC%2C%2088034-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Eguchi Odontologia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};