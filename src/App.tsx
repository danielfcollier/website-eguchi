import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import { LinksPage } from "./pages/LinksPage"; 
import { QRCodePage } from "./pages/QRCodePage"; 
import { NotFound } from "./pages/NotFound"; 
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";

// Componente para controlar a exibição do botão baseado na rota
const FloatingButtonController = () => {
  const location = useLocation();
  // Lista de rotas onde o botão NÃO deve aparecer
  const hiddenRoutes = ['/links', '/qrcode'];
  
  const shouldShow = !hiddenRoutes.includes(location.pathname);

  return shouldShow ? <FloatingWhatsAppButton /> : null;
};

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/qrcode" element={<QRCodePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Botão Flutuante controlado por rota */}
      <FloatingButtonController />
    </BrowserRouter>
  );
}

export default App;