import React from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { OptimizedImage } from "../components/OptimizedImage";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { 
  Quote, Star, CheckCircle2, Clock, 
  Heart, Sparkles, ShieldCheck, Microscope, MapPin, Stethoscope, Phone, Mail, Instagram 
} from "lucide-react";

import heroImg from "../assets/hero.jpg"; 
import marcelImg from "../assets/marcel.jpg";
import anaImg from "../assets/ana.png";
import clinicaImg from "../assets/clinica_eguchi.jpg"; 

const Index = () => {
  const whatsappLink = "https://wa.me/message/FP7NX7ED7JYTH1";
  
  // Link de Visualização (Preview) do Mapa
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.315039533306!2d-48.50379432454236!3d-27.583724276253787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273919e3556073%3A0x673999902506306!2sRod.%20Admar%20Gonzaga%2C%20971%20-%20Itacorubi%2C%20Florian%C3%B3polis%20-%20SC%2C%2088034-000!5e0!3m2!1spt-BR!2sbr!4v1710987654321!5m2!1spt-BR!2sbr";

  // Link de Destino (Ao clicar)
  const mapDestinationUrl = "https://maps.app.goo.gl/jeyGmnKJHmLGwd769";

  const testimonials = [
    {
      name: "Gabriela",
      text: "Uma experiência incrível! Como alguém que sofre de síndrome do pânico, sempre tive muito medo de ir ao dentista. No entanto, a clínica me surpreendeu. O atendimento foi excepcional... o tratamento de canal que eu precisava foi feito de forma cuidadosa e profissional. Foi a primeira vez que não tive ansiedade."
    },
    {
      name: "Pamela",
      text: "Fiz alguns procedimentos desde implante até clareamento. A Ana e o Marcel realmente entregam aquilo que propõe, a odontologia humanizada. Atendimento impecável, preço justo e cuidado com o paciente durante todo o momento. Recomendo muito!"
    },
    {
      name: "Eric",
      text: "Fantástico, além de altamente capacitados todo o atendimento é altamente humanizado, como se fossem amigos de longa data. Super recomendo. Finalmente me sinto confiante para sorrir e mostrar meu sorriso!”"
    },
    {
      name: "Amanda",
      text: "A simpatia e atenção da equipe foi o que certamente mais me cativou, além da resolução com excelência do que estava me incomodando. Pós atendimento saí feliz, sem dores e sorrindo a toa. Super recomendo!!!”"
    }
  ];

  return (
    <div className="min-h-screen font-body text-stone-800 bg-stone-50">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage 
            src="/optimized/hero-desktop.webp" 
            srcMobile="/optimized/hero-mobile.webp"
            alt="Consultório Eguchi Odontologia"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#595959]/90 via-[#595959]/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="inline-block px-4 py-1 border border-[#FF9701]/50 rounded-full bg-[#FF9701]/10 backdrop-blur-sm text-sm tracking-widest uppercase font-heading text-[#FF9701] font-bold">
              Odontologia humanizada
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Transforme sua relação com o dentista
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-stone-200 italic border-l-4 border-[#FF9701] pl-6">
              "O que o sol é para flores, o <strong className="text-white">sorriso</strong> é para a humanidade."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 rounded-full text-lg shadow-[0_0_20px_rgba(4,120,87,0.4)] hover:scale-105 transition-all"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent text-white border-white hover:bg-white hover:text-stone-900 h-14 px-8 rounded-full text-lg"
                onClick={() => document.getElementById('tratamentos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Tratamentos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE A CLÍNICA */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#857B75]/20 rounded-2xl transform -rotate-3"></div>
              <OptimizedImage 
                src={clinicaImg} 
                alt="Fachada Eguchi Odontologia" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]" 
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-[#FF9701] text-sm font-bold tracking-widest uppercase mb-2">Quem Somos</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-stone-900 leading-tight">
                Mude sua percepção sobre ir ao dentista
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed">
                Somos uma clínica odontológica que busca acolher cada paciente com <strong>empatia e carinho</strong>. 
                Sabemos que o consultório pode ser um ambiente de ansiedade para muitos, por isso nossa missão é transformar essa experiência.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-[#857B75]/10 p-2 rounded-lg text-[#857B75]"><Heart className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-stone-900">Empatia</h4>
                    <p className="text-sm text-stone-500">Atendimento humano.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-[#857B75]/10 p-2 rounded-lg text-[#857B75]"><Sparkles className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-stone-900">Tecnologia</h4>
                    <p className="text-sm text-stone-500">Odontologia Digital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA EGUCHI */}
      <section className="py-20 bg-[#595959] text-white">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="p-6">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-[#FF9701] mx-auto mb-4 border border-white/20 font-bold text-xl">1</div>
                      <h3 className="text-xl font-bold mb-2">Avaliação Acolhedora</h3>
                      <p className="text-stone-300">Conversamos para entender seus desejos e medos, em um ambiente relaxante.</p>
                  </div>
                  <div className="p-6">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-[#FF9701] mx-auto mb-4 border border-white/20 font-bold text-xl">2</div>
                      <h3 className="text-xl font-bold mb-2">Planejamento Digital</h3>
                      <p className="text-stone-300">Escaneamento 3D para você visualizar o resultado antes de começar.</p>
                  </div>
                  <div className="p-6">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-[#FF9701] mx-auto mb-4 border border-white/20 font-bold text-xl">3</div>
                      <h3 className="text-xl font-bold mb-2">Execução sem Dor</h3>
                      <p className="text-stone-300">Técnicas modernas e mãos leves para seu conforto total.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* CORPO CLÍNICO */}
      <section id="equipe" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-stone-900">Nossos Especialistas</h2>
            <p className="text-stone-500">Experiência e aperfeiçoamento constante.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Dr Marcel */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-stone-100 shadow-xl group-hover:border-[#857B75] transition-colors duration-300">
                <OptimizedImage src={marcelImg} alt="Dr. Marcel Eguchi" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-stone-900">Dr. Marcel Eguchi</h3>
              <div className="h-1 w-12 bg-[#857B75] my-4 rounded-full"></div>
              <ul className="text-stone-600 space-y-2 text-sm md:text-base">
                <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#857B75]"/> Implantodontista</li>
                <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#857B75]"/> Lentes de Contato Dental</li>
                <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#857B75]"/> Odontogeriatria</li>
                <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#857B75]"/> DTM (Bruxismo/Apertamento)</li>
                <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#857B75]"/> Prótese Dentária & Reabilitação Oral</li>
              </ul>
            </div>

            {/* Dra Ana */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-stone-100 shadow-xl group-hover:border-[#857B75] transition-colors duration-300">
                <OptimizedImage src={anaImg} alt="Dra. Ana Flávia Rodrigues" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-stone-900">Dra. Ana Flávia Rodrigues</h3>
              <div className="h-1 w-12 bg-[#857B75] my-4 rounded-full"></div>
              <ul className="text-stone-600 space-y-2 text-sm md:text-base">
                <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#857B75]"/> Especialista em Ortodontia</li>
                <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#857B75]"/> Invisalign Doctor</li>
                <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#857B75]"/> Odontologia Preventiva e Restauradora</li>
                <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#857B75]"/> Harmonização Orofacial (Beleza Natural)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRATAMENTOS */}
      <section id="tratamentos" className="py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 mb-6">
              Odontologia de Excelência
            </h2>
            <p className="text-lg text-stone-600">
              Tratamentos integrados para cuidar da sua saúde e autoestima.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={Microscope} title="Implantes" desc="Implantodontia avançada para recuperar sua função e estética." />
            <ServiceCard icon={Sparkles} title="Estética" desc="Lentes de contato dental e harmonização orofacial natural." />
            <ServiceCard icon={CheckCircle2} title="Invisalign" desc="Ortodontia invisível e tecnológica para alinhar seu sorriso." />
            <ServiceCard icon={ShieldCheck} title="Prevenção" desc="Check-ups e limpeza para manter sua saúde bucal em dia." />
            <ServiceCard icon={Heart} title="Odontogeriatria" desc="Cuidado especializado e carinhoso para a terceira idade." />
            <ServiceCard icon={Clock} title="DTM / Bruxismo" desc="Tratamento para dores orofaciais e apertamento dentário." />
            <ServiceCard icon={Star} title="Reabilitação" desc="Próteses dentárias e reconstrução completa do sorriso." />
            <ServiceCard icon={Stethoscope} title="Clínico Geral" desc="Restaurações e procedimentos essenciais." />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 text-white bg-[#595959]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">O que dizem nossos pacientes</h2>
            <p className="opacity-90">Histórias reais de sorrisos transformados.</p>
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} name={t.name} text={t.text} />
            ))}
          </div>

          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {testimonials.map((t, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/20">
                  <AccordionTrigger className="text-white hover:text-secondary hover:no-underline px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center font-bold text-white text-xs">
                        {t.name.charAt(0)}
                      </div>
                      <span className="font-bold">{t.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-200 px-4 pb-6 italic">
                    "{t.text}"
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </section>

      {/* CTA & LOCALIZAÇÃO */}
      <section id="contato" className="py-20 text-center bg-stone-50">
        <div className="container mx-auto px-4">
           <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100 grid lg:grid-cols-2 text-left mb-12">
                <div className="p-10 md:p-14 flex flex-col justify-center">
                    <h2 className="text-3xl font-heading font-bold text-stone-900 mb-8">Visite nossa clínica</h2>
                    <div className="space-y-8">
                        {/* Endereço */}
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-[#857B75] flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-stone-900 mb-1">Endereço</h3>
                                <p className="text-stone-600">Rodovia Admar Gonzaga, 971</p>
                                <p className="text-stone-600">Itacorubi, Florianópolis - SC</p>
                                <p className="text-sm text-[#FF9701] mt-1 font-semibold">Estacionamento Gratuito no local</p>
                                <a href={mapDestinationUrl} target="_blank" className="text-secondary font-bold text-sm hover:underline mt-2 block">Abrir no Google Maps</a>
                            </div>
                        </div>

                        {/* Telefones */}
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-[#857B75] flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-stone-900 mb-1">Telefones</h3>
                                <p className="text-stone-600">(48) 3307-7090 (Fixo)</p>
                                <p className="text-stone-600">(48) 99205-8586 (WhatsApp)</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-[#857B75] flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-stone-900 mb-1">E-mail</h3>
                                <a href="mailto:eguchi.odontologia@gmail.com" className="text-stone-600 hover:text-[#857B75] transition-colors">
                                  eguchi.odontologia@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Instagram (NOVO) */}
                        <div className="flex items-start gap-4">
                            <Instagram className="w-6 h-6 text-[#857B75] flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-stone-900 mb-1">Instagram</h3>
                                <a href="https://www.instagram.com/eguchiodontologia" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-[#857B75] transition-colors">
                                  @eguchiodontologia
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-stone-200 relative min-h-[300px] h-full">
                    <iframe 
                        title="Mapa de Localização Eguchi Odontologia"
                        src={mapEmbedUrl}
                        width="100%" 
                        height="100%" 
                        style={{border:0, position: 'absolute', inset: 0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

          <h2 className="text-3xl font-heading font-bold text-stone-900 mb-6">
            Pronto para cuidar do seu sorriso?
          </h2>
          <Button 
            asChild 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white font-bold h-16 px-10 rounded-full text-xl shadow-xl hover:-translate-y-1 transition-transform"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <Card className="border-none shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white group h-full">
    <CardContent className="p-6 text-center flex flex-col items-center h-full">
      <div className="w-14 h-14 bg-[#857B75]/10 rounded-full flex items-center justify-center text-[#857B75] mb-4 group-hover:bg-[#857B75] group-hover:text-white transition-colors">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-lg text-stone-900 mb-2">{title}</h3>
      <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ name, text }: { name: string, text: string }) => (
  <div className="bg-white/10 p-8 rounded-2xl border border-white/10 relative hover:-translate-y-1 transition-transform">
    <Quote className="w-10 h-10 text-white/20 absolute top-4 left-4" />
    <div className="relative z-10 pt-4">
        <div className="flex gap-1 mb-4 text-secondary">
             <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
        </div>
        <p className="text-stone-100 italic leading-relaxed mb-6">"{text}"</p>
        <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-white uppercase text-sm">
            {name.charAt(0)}
        </div>
        <span className="font-bold text-white">{name}</span>
        </div>
    </div>
  </div>
);

export default Index;