import React from 'react';
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Button } from "../components/ui/button";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#595959] p-6 text-center text-white">
      <div className="max-w-md flex flex-col items-center">
        
        <div className="mb-8 p-6 bg-white/5 rounded-full border border-white/10">
            <Logo className="h-16" dark={true} />
        </div>

        <h1 className="text-6xl font-heading font-bold text-[#FF9701] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-stone-200 mb-6">Página Não Encontrada</h2>
        
        <Button asChild className="bg-[#FF9701] hover:bg-[#e08500] text-white font-bold px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
          <Link to="/" aria-label="Voltar para a página inicial">
            Voltar para a Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};