import React from 'react';

interface OptimizedImageProps {
  src: string;        // Caminho da imagem Desktop (ou padrão)
  srcMobile?: string; // Caminho da imagem Mobile (opcional)
  alt: string;
  className?: string;
  priority?: boolean; // Se true, aplica LCP optimization
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  srcMobile,
  alt, 
  className = '', 
  priority = false 
}) => {
  // Configuração de carregamento
  const loadingAttr = priority ? "eager" : "lazy";
  // @ts-expect-error React types ainda não suportam fetchpriority nativamente em todas as versões
  const fetchPriorityAttr = priority ? "high" : "auto";

  // Se for uma imagem otimizada gerada pelo script (assets externos)
  // Caso contrário, renderiza img normal
  const isExternalOptimized = src.startsWith('/optimized/');

  if (!isExternalOptimized && !srcMobile) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className} 
        loading={loadingAttr}
        fetchpriority={fetchPriorityAttr}
      />
    );
  }

  return (
    <picture>
      {/* Se tiver versão mobile específica (ex: Hero) */}
      {srcMobile && (
        <source media="(max-width: 767px)" srcSet={srcMobile} type="image/webp" />
      )}
      
      {/* Versão Desktop / Padrão */}
      <source srcSet={src} type="image/webp" />
      
      <img
        src={src}
        alt={alt}
        loading={loadingAttr}
        fetchpriority={fetchPriorityAttr}
        className={className}
        width="1920" // Ajuda a evitar Layout Shift (CLS)
        height="1080"
      />
    </picture>
  );
};