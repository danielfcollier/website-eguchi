import React from 'react';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "#sobre" },
    { name: "Tratamentos", href: "#tratamentos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo Textual para Performance/SEO */}
        <a href="/" className={`font-heading font-bold text-2xl tracking-tight transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
          Eguchi<span className="font-light">Odontologia</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled ? "text-stone-600" : "text-white/90"}`}>
              {link.name}
            </a>
          ))}
          <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 font-bold" asChild>
            <a href="https://wa.me/message/FP7NX7ED7JYTH1" target="_blank" rel="noopener">
              Agendar Consulta
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-stone-800" : "text-white"}>
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-lg font-medium text-stone-600">
                    {link.name}
                  </a>
                ))}
                <Button className="bg-secondary text-white w-full rounded-full" asChild>
                  <a href="https://wa.me/message/FP7NX7ED7JYTH1">Agendar pelo WhatsApp</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};