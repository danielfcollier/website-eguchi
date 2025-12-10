import React from 'react';
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Gabriela",
    text: "Uma experiência incrível! Como alguém que sofre de síndrome do pânico, sempre tive muito medo de ir ao dentista. No entanto, a clínica me surpreendeu. O tratamento de canal foi feito de forma cuidadosa e me senti completamente confortável. Foi a primeira vez que não tive ansiedade.",
    initial: "G"
  },
  {
    name: "Pamela",
    text: "Fiz alguns procedimentos desde implante até clareamento. A Ana e o Marcel realmente entregam aquilo que propõem, a odontologia humanizada. Atendimento impecável, preço justo e cuidado com o paciente durante todo o momento. Recomendo muito!",
    initial: "P"
  },
  {
    name: "Eric",
    text: "Fantástico, além de altamente capacitados todo o atendimento é altamente humanizado, como se fossem amigos de longa data. Super recomendo. Finalmente me sinto confiante para sorrir e mostrar meu sorriso!",
    initial: "E"
  },
  {
    name: "Amanda",
    text: "A simpatia e atenção da equipe foi o que certamente mais me cativou, além da resolução com excelência do que estava me incomodando. Pós atendimento saí feliz, sem dores e sorrindo a toa. Super recomendo!!!",
    initial: "A"
  }
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">O que dizem nossos pacientes</h2>
          <p className="opacity-90 max-w-2xl mx-auto">Histórias reais de sorrisos transformados no Itacorubi.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-2xl border border-white/10 relative hover:-translate-y-1 transition-transform duration-300">
              <Quote className="w-8 h-8 text-white/20 absolute top-6 left-6" />
              <div className="relative z-10 pt-4">
                <div className="flex gap-1 mb-4 text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-stone-100 italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-white text-sm">
                    {t.initial}
                  </div>
                  <span className="font-bold text-white">{t.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};