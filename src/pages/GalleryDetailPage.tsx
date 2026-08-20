import { Link, Navigate, useParams } from 'react-router-dom';
import { getEventBySlug, getRelatedEvents } from '../data/events';
import { StackingCards, StackingCardItem } from '../components/gallery/StackingCards';
import { EventCard } from '../components/gallery/EventCard';
import { ResponsiveImage } from '../components/media/ResponsiveImage';
import { PlayableVideo } from '../components/media/PlayableVideo';
import { StarIcon } from '../components/ui/StarDivider';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { CtaBanner } from '../components/ui/CtaBanner';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './GalleryDetailPage.module.css';

export function GalleryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;

  useDocumentTitle(event ? event.title : 'Gallery');

  if (!event) {
    return <Navigate to="/gallery" replace />;
  }

  const related = getRelatedEvents(event.slug, 4);

  return (
    <>
      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <Link to="/gallery" className={styles.back}>
            &larr; Back to Gallery
          </Link>
          <SectionHeading as="h1" size="lg" className={styles.title}>
            {event.title}
          </SectionHeading>
          <span className={styles.locationRow}>
            <StarIcon style={{ width: '0.85rem', height: '0.85rem' }} />
            {event.location}, {event.country}
          </span>
          <p className={styles.description}>{event.description}</p>
          <Button to="/contact">Plan an Event Like This</Button>
        </aside>

        <div className={styles.imageColumn}>
          <div className={styles.videoWrap}>
            <PlayableVideo posterPhotoId={event.heroPhotoId} label="Play Highlight" />
          </div>

          <StackingCards>
            {event.galleryPhotoIds.map((photoId, index) => (
              <StackingCardItem key={photoId + index}>
                <ResponsiveImage
                  photoId={photoId}
                  alt={`${event.title} — photo ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="70vw"
                />
              </StackingCardItem>
            ))}
          </StackingCards>
        </div>
      </div>

      <section className={styles.more}>
        <SectionHeading size="md" className={styles.moreHeading}>
          More <em>Galleries</em>
        </SectionHeading>
        <div className={styles.moreGrid}>
          {related.map((item) => (
            <EventCard key={item.slug} event={item} variant="grid" />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
