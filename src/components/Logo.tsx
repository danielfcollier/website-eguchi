import React from 'react';

export const Logo = ({ className = "h-12 text-primary", dark = false }: { className?: string, dark?: boolean }) => {
  const color = dark ? "#857B75" : "currentColor";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Símbolo Geométrico */}
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto aspect-square">
        <circle cx="50" cy="50" r="28" stroke={color} strokeWidth="3" />
        <circle cx="35" cy="40" r="28" stroke={color} strokeWidth="3" />
        <circle cx="65" cy="40" r="28" stroke={color} strokeWidth="3" />
        <circle cx="35" cy="60" r="28" stroke={color} strokeWidth="3" />
        <circle cx="65" cy="60" r="28" stroke={color} strokeWidth="3" />
      </svg>
      
      {/* Tipografia */}
      <div className="flex flex-col justify-center">
        <span className={`font-heading text-2xl leading-none tracking-wide ${dark ? 'text-gray-900' : 'text-current'}`} style={{ fontStyle: 'italic', fontWeight: 400 }}>
          Eguchi
        </span>
        <span className={`text-[0.65rem] uppercase tracking-[0.2em] ${dark ? 'text-primary' : 'text-current/80'}`}>
          Odontologia
        </span>
      </div>
    </div>
  );
};