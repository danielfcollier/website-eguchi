import React from 'react';

export const Logo = ({ className = "h-12", dark = false }: { className?: string, dark?: boolean }) => {
  // Define a cor base: Branco para fundo escuro, Taupe para fundo claro
  const colorClass = dark ? "text-white" : "text-[#857B75]"; 
  
  return (
    <div className={`flex items-center gap-3 ${className} ${colorClass}`}>
      {/* Símbolo Ikigai - 4 Círculos Entrelaçados (Cor única = currentColor) */}
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto aspect-square">
        {/* Círculo Superior */}
        <circle cx="50" cy="35" r="25" stroke="currentColor" strokeWidth="4" className="opacity-90" />
        {/* Círculo Inferior */}
        <circle cx="50" cy="65" r="25" stroke="currentColor" strokeWidth="4" className="opacity-90" />
        {/* Círculo Esquerdo */}
        <circle cx="35" cy="50" r="25" stroke="currentColor" strokeWidth="4" className="opacity-90" />
        {/* Círculo Direito */}
        <circle cx="65" cy="50" r="25" stroke="currentColor" strokeWidth="4" className="opacity-90" />
      </svg>
      
      {/* Tipografia */}
      <div className="flex flex-col justify-center">
        <span className="font-heading text-2xl leading-none tracking-wide" style={{ fontStyle: 'italic', fontWeight: 400 }}>
          Eguchi
        </span>
        {/* O subtítulo mantém o Laranja da marca para destaque sutil */}
        <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-[#FF9701]">
          Odontologia
        </span>
      </div>
    </div>
  );
};