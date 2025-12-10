import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { LinksPage } from "./pages/LinksPage"; 
import { QRCodePage } from "./pages/QRCodePage"; 
import { NotFound } from "./pages/NotFound"; 
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";

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
      <FloatingWhatsAppButton />
    </BrowserRouter>
  );
}

export default App;