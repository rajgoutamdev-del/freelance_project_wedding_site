import type { CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { CATEGORIES, getEventsByCategory, type EventCategory } from '../data/events';
import { CategoryFilterBar } from '../components/gallery/CategoryFilterBar';
import { EventCard } from '../components/gallery/EventCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useCategoryTransition, type Category } from '../hooks/useCategoryTransition';
import styles from './GalleryIndexPage.module.css';

function categoryLabel(category: Category): string {
  if (category === 'all') return 'All Events';
  return CATEGORIES.find((c) => c.slug === category)?.label ?? 'All Events';
}

export function GalleryIndexPage() {
  const { category } = useParams<{ category?: string }>();
  const targetCategory = (category as EventCategory | undefined) ?? 'all';

  const { phase, displayedCategory, labelCategory } = useCategoryTransition(targetCategory);
  const events = getEventsByCategory(displayedCategory);

  useDocumentTitle(`Gallery — ${categoryLabel(targetCategory)}`);

  return (
    <>
      <header className={styles.header}>
        <SectionHeading eyebrow="Portfolio" size="lg" className={styles.heading}>
          The <em>Gallery</em>
        </SectionHeading>
        <CategoryFilterBar />
      </header>

      {events.length === 0 ? (
        <p className={styles.empty}>No events found in this category yet.</p>
      ) : (
        <div className={styles.grid} data-phase={phase}>
          {events.map((event, index) => (
            <div
              key={event.slug}
              className={styles.cardWrap}
              style={{ '--stagger-delay': `${Math.min(index, 7) * 45}ms` } as CSSProperties}
            >
              <EventCard event={event} variant="grid" priority={index < 3} />
            </div>
          ))}
        </div>
      )}

      {labelCategory
        ? createPortal(
            <div className={styles.categoryOverlay} aria-hidden="true">
              <span key={labelCategory} className={styles.categoryOverlayText}>
                {categoryLabel(labelCategory)}
              </span>
            </div>,
            document.body,
          )
        : null}

      <span className="visually-hidden" role="status" aria-live="polite">
        {phase === 'idle' ? `Showing ${categoryLabel(displayedCategory)}` : ''}
      </span>
    </>
  );
}
