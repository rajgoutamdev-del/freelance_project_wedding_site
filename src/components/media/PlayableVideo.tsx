import { useState } from 'react';
import { unsplashUrl } from '../../utils/unsplash';
import styles from './PlayableVideo.module.css';

interface PlayableVideoProps {
  posterPhotoId: string;
  src?: string;
  aspectRatio?: string;
  label?: string;
}

export function PlayableVideo({
  posterPhotoId,
  src,
  aspectRatio = '16 / 9',
  label = 'Play',
}: PlayableVideoProps) {
  const [playing, setPlaying] = useState(false);
  const poster = unsplashUrl(posterPhotoId, 1600);

  return (
    <div className={styles.wrap} style={{ aspectRatio }}>
      {playing && src ? (
        <video
          className={styles.media}
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
        />
      ) : (
        <>
          <img
            className={styles.media}
            src={poster}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <button
            type="button"
            className={styles.playButton}
            onClick={() => setPlaying(true)}
            aria-label={label}
          >
            <span className={styles.playCircle}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIcon} aria-hidden="true">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
            </span>
            <span className={styles.playLabel}>{label}</span>
          </button>
        </>
      )}
    </div>
  );
}
