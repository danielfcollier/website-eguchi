import React from 'react';
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Menu } from "lucide-react";
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
    { name: "Equipe", href: "#equipe" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm py-2" 
        : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        <Link to="/" aria-label="Ir para o início">
          <Logo className={`h-12 transition-colors ${isScrolled ? "text-primary" : "text-white"}`} dark={isScrolled} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${
                isScrolled ? "text-stone-600" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <Button 
            className="bg-secondary text-white hover:bg-secondary/90 font-heading font-bold tracking-wide rounded-full px-6 shadow-lg hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://wa.me/message/FP7NX7ED7JYTH1" target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={isScrolled ? "text-stone-800" : "text-white"}
                aria-label="Abrir menu de navegação"
              >
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white border-l border-stone-100">
              <div className="flex flex-col gap-8 mt-10">
                <Logo className="h-10 mx-auto" dark />
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-stone-600 hover:text-primary py-2 border-b border-stone-100"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <Button 
                  className="bg-secondary text-white w-full rounded-full h-12 text-lg"
                  asChild
                >
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