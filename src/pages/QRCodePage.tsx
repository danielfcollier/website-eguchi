import React from 'react';
import { QrCode, Home } from "lucide-react";
import { Link } from "react-router-dom";

export const QRCodePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-50 p-6 text-center">
      <div className="max-w-sm w-full bg-white p-8 rounded-xl shadow-2xl border border-stone-100">
        <QrCode className="w-12 h-12 mx-auto text-primary mb-4" />
        <h1 className="text-3xl font-heading font-bold text-stone-900 mb-6">Acesso Rápido</h1>
        <p className="text-stone-600 mb-6">
          Aponte a câmera do seu celular para o código abaixo para acessar o site principal da clínica.
        </p>

        <div className="border-4 border-primary p-2 inline-block rounded-lg shadow-inner mb-8">
          {/* O arquivo /qrcode.png é gerado pelo build-assets.js */}
          <img 
            src="/qrcode.png" 
            alt="QR Code que aponta para o site da Eguchi Odontologia"
            width={256}
            height={256}
            className="w-64 h-64 object-contain"
          />
        </div>

        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors">
          <Home className="w-4 h-4" /> Voltar para a Home
        </Link>
      </div>
    </div>
  );
};