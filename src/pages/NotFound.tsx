import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";


export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-dark p-6 text-center text-white">
      <div className="max-w-md flex flex-col items-center">
        
        <div className="mb-8 p-6 bg-white/5 rounded-full">
            <Logo className="h-16 text-white" dark={true} />
        </div>

        <h1 className="text-6xl font-heading font-bold text-brand-orange mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-stone-200 mb-6">Página Não Encontrada</h2>
        <p className="text-stone-400 mb-8 leading-relaxed">
          Ops! O sorriso que você procura não está aqui. Parece que o endereço foi digitado incorretamente ou a página mudou de lugar.
        </p>
        
        <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
          <Link to="/" aria-label="Voltar para a página inicial">
            Voltar para a Homepage
          </Link>
        </Button>
      </div>
      
      <div className="mt-16 text-xs text-stone-500">
        Responsável Técnico: Dr. Marcel Eguchi
      </div>
    </div>
  );
};