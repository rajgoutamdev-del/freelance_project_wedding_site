import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { unsplashUrl } from '../../utils/unsplash';
import styles from './BackgroundVideo.module.css';

interface BackgroundVideoProps {
  posterPhotoId: string;
  /** Optional mp4 source — hero degrades gracefully to a static poster without it. */
  src?: string;
  overlay?: boolean;
}

export function BackgroundVideo({ posterPhotoId, src, overlay = true }: BackgroundVideoProps) {
  const reducedMotion = usePrefersReducedMotion();
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const poster = unsplashUrl(posterPhotoId, 1920);
  const canPlayVideo = Boolean(src) && !reducedMotion && !isSmallScreen;

  return (
    <div className={styles.wrap}>
      {canPlayVideo ? (
        <video
          className={styles.media}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          className={styles.media}
          src={poster}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      )}
      {overlay ? <div className={styles.overlay} aria-hidden="true" /> : null}
    </div>
  );
}
