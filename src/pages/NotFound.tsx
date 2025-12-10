import React from 'react';
import { Link } from "react-router-dom";
import { Frown } from "lucide-react";
import { Button } from "../components/ui/button";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-50 p-6 text-center">
      <div className="max-w-md">
        <Frown className="w-16 h-16 mx-auto text-primary mb-6" />
        <h1 className="text-6xl font-heading font-bold text-stone-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-stone-700 mb-6">Página Não Encontrada</h2>
        <p className="text-stone-500 mb-8">
          Ops! Parece que o endereço que você tentou acessar não existe mais ou foi movido.
        </p>
        <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-6 rounded-full">
          <Link to="/" aria-label="Voltar para a página inicial">
            Voltar para a Homepage
          </Link>
        </Button>
      </div>
      <div className="mt-12 text-sm text-stone-400">
        Responsável Técnico: Dr. Marcel Eguchi
      </div>
    </div>
  );
};