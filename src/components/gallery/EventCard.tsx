import { Link } from 'react-router-dom';
import type { EventRecord } from '../../data/events';
import { StarIcon } from '../ui/StarDivider';
import { unsplashSrcSet, unsplashUrl } from '../../utils/unsplash';
import { cn } from '../../utils/cn';
import styles from './EventCard.module.css';

interface EventCardProps {
  event: EventRecord;
  variant?: 'stage' | 'grid';
  priority?: boolean;
}

const WIDTHS = [480, 768, 1080, 1600];

export function EventCard({ event, variant = 'stage', priority = false }: EventCardProps) {
  return (
    <Link
      to={`/gallery/${event.slug}`}
      className={cn(styles.card, variant === 'grid' && styles.grid)}
    >
      <img
        className={styles.image}
        src={unsplashUrl(event.heroPhotoId, 1080)}
        srcSet={unsplashSrcSet(event.heroPhotoId, WIDTHS)}
        sizes={variant === 'grid' ? '(max-width: 767px) 100vw, 33vw' : '100vw'}
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.meta}>
        <StarIcon className={styles.star} />
        <div className={styles.text}>
          <span className={styles.title}>{event.title}</span>
          <span className={styles.location}>
            {event.location}, {event.country}
          </span>
        </div>
      </div>
    </Link>
  );
}
