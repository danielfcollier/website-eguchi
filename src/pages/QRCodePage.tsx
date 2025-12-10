import React from 'react';
import { Button } from "../components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export const QRCodePage = () => {
  const qrCodeImageSrc = "/qrcode-eguchi.png";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCodeImageSrc;
    link.download = `qrcode-eguchi.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4 font-body">
      <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-stone-100 max-w-md w-full text-center">
        
        <div className="mb-8 flex justify-center">
            <Logo className="h-12" dark />
        </div>
        
        <h1 className="text-xl font-bold font-heading text-stone-900 mb-2">Escaneie para Acessar</h1>
        <p className="text-stone-500 text-sm mb-8">
          Aponte a câmera do seu celular para o código abaixo.
        </p>

        <div className="bg-white p-4 rounded-xl border-2 border-primary/20 mb-8 inline-block shadow-inner">
          <img 
            src={qrCodeImageSrc} 
            alt="QR Code Eguchi Odontologia"
            className="w-56 h-56 object-contain" 
          />
        </div>

        <div className="grid gap-3">
          <Button 
            onClick={handleDownload} 
            className="w-full bg-primary hover:bg-primary/90 font-bold text-white"
          >
            <Download className="mr-2 w-4 h-4" /> Baixar QR Code
          </Button>
          <Button variant="ghost" asChild className="w-full text-stone-500">
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4" /> Voltar ao Site
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};