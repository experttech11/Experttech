/**
 * Image Optimization Utilities
 * Generates dynamic srcSet and sizes attributes for fast mobile loading
 */

const DEFAULT_WIDTHS = [320, 480, 640, 800, 1024, 1280, 1600];

/**
 * Generates a responsive srcSet string for a given image URL.
 * Supports CDN image parameterization (Unsplash, etc.) and falls back to density descriptors.
 */
export function generateSrcSet(src: string, widths: number[] = DEFAULT_WIDTHS): string | undefined {
  if (!src) return undefined;

  // Unsplash CDN dynamic resizing
  if (src.includes('images.unsplash.com')) {
    try {
      const baseUrl = src.split('?')[0];
      return widths
        .map((w) => `${baseUrl}?auto=format&fit=crop&w=${w}&q=80 ${w}w`)
        .join(', ');
    } catch {
      return undefined;
    }
  }

  // Cloudinary or other generic CDN with w_ parameter
  if (src.includes('res.cloudinary.com')) {
    return widths
      .map((w) => `${src.replace('/upload/', `/upload/w_${w},f_auto,q_auto/`)} ${w}w`)
      .join(', ');
  }

  // For static local assets, browser standard density fallbacks (1x, 2x)
  return `${src} 1x, ${src} 2x`;
}

/**
 * Preset responsive sizes strings for different UI layout contexts
 */
export const IMAGE_SIZES_PRESETS = {
  // Hero split images: 100vw on mobile, 50vw on desktop
  hero: '(max-width: 1024px) 100vw, 50vw',

  // Project Gallery Cards: 100vw on mobile (1 col), 50vw on md screens (2 cols)
  gallery: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px',

  // Service Grid & Modal Cards: 100vw on mobile, 50vw on md, 33vw on lg
  serviceCard: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',

  // Detail Modal Banner Image: 100vw on mobile, 500px on desktop
  modalBanner: '(max-width: 768px) 100vw, 600px',

  // Blog Grid Cards: 100vw on mobile, 50vw on md, 25vw on lg
  blogGrid: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px',

  // Full width banner: 100vw across all viewports
  fullWidth: '100vw',
};
