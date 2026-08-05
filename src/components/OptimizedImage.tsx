import React, { useState } from 'react';
import { generateSrcSet, IMAGE_SIZES_PRESETS } from '../utils/imageOptimizer';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  preset?: keyof typeof IMAGE_SIZES_PRESETS;
  widths?: number[];
  sizes?: string;
  loading?: 'lazy' | 'eager';
  className?: string;
  wrapperClassName?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  preset = 'gallery',
  widths,
  sizes,
  loading = 'lazy',
  className = '',
  wrapperClassName = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const calculatedSrcSet = generateSrcSet(src, widths);
  const calculatedSizes = sizes || IMAGE_SIZES_PRESETS[preset] || '100vw';

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Subtle Skeleton Placeholder while image is loading */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-slate-800/20 animate-pulse z-0" aria-hidden="true" />
      )}

      <img
        src={src}
        srcSet={calculatedSrcSet}
        sizes={calculatedSizes}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
