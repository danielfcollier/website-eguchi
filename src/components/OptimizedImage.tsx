import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  priority = false 
}) => {
  const isOptimized = src.includes('/optimized/');
  
  if (!isOptimized) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className} 
        loading={priority ? "eager" : "lazy"}
        // @ts-expect-error React types might not yet have fetchpriority
        fetchpriority={priority ? "high" : "auto"} 
      />
    );
  }

  const basePath = src.replace('.jpg', '').replace('.png', '');

  return (
    <picture>
      <source srcSet={`${basePath}.webp`} type="image/webp" />
      <img
        src={`${basePath}.jpg`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        // @ts-expect-error React types might not yet have fetchpriority
        fetchpriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
};