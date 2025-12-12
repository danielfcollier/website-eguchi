import React from 'react';

export const Logo = ({ className = "h-14", dark = false }: { className?: string, dark?: boolean }) => {
  // Define a cor base: Branco para fundo escuro, Taupe para fundo claro
  const colorClass = dark ? "text-white" : "text-[#857B75]"; 
  
  return (
    <div className={`flex items-center gap-4 ${className} ${colorClass}`}>
      {/* Símbolo Ikigai - 4 Círculos Entrelaçados (Cor única) */}
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto aspect-square flex-shrink-0">
        <circle cx="50" cy="35" r="25" stroke="currentColor" strokeWidth="6" className="opacity-90" />
        <circle cx="50" cy="65" r="25" stroke="currentColor" strokeWidth="6" className="opacity-90" />
        <circle cx="35" cy="50" r="25" stroke="currentColor" strokeWidth="6" className="opacity-90" />
        <circle cx="65" cy="50" r="25" stroke="currentColor" strokeWidth="6" className="opacity-90" />
      </svg>
      
      {/* Tipografia */}
      <div className="flex flex-col justify-center items-start">
        <span className="font-heading text-3xl font-bold leading-none tracking-wide italic mb-1">
          Eguchi
        </span>
        <span className="text-[0.7rem] uppercase tracking-[0.1em] font-bold text-[#FF9701] whitespace-nowrap">
          Odontologia Humanizada
        </span>
      </div>
    </div>
  );
};