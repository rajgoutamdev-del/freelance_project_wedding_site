import { cn } from '../../utils/cn';
import { unsplashSrcSet, unsplashUrl } from '../../utils/unsplash';
import styles from './ResponsiveImage.module.css';

interface ResponsiveImageProps {
  photoId: string;
  alt: string;
  aspectRatio?: string;
  /** Absolutely fills the nearest positioned ancestor instead of sizing via aspect-ratio. */
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  widths?: number[];
  objectPosition?: string;
  className?: string;
}

const DEFAULT_WIDTHS = [480, 768, 1080, 1600, 2200];

export function ResponsiveImage({
  photoId,
  alt,
  aspectRatio = '4 / 3',
  fill = false,
  priority = false,
  sizes = '100vw',
  widths = DEFAULT_WIDTHS,
  objectPosition,
  className,
}: ResponsiveImageProps) {
  return (
    <div
      className={cn(styles.wrap, fill && styles.fill, className)}
      style={fill ? undefined : { aspectRatio }}
    >
      <img
        className={styles.img}
        src={unsplashUrl(photoId, widths[Math.floor(widths.length / 2)])}
        srcSet={unsplashSrcSet(photoId, widths)}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}
