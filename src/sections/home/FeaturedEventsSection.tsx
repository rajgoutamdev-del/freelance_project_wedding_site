import { FEATURED_EVENTS } from '../../data/events';
import { StackingCards, StackingCardItem } from '../../components/gallery/StackingCards';
import { EventCard } from '../../components/gallery/EventCard';
import { SectionHeading } from '../../components/ui/SectionHeading';
import styles from './FeaturedEventsSection.module.css';

export function FeaturedEventsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.headingWrap}>
        <SectionHeading eyebrow="Portfolio" size="lg" align="center" maxWidth="40rem">
          Featured <em>Events</em>
        </SectionHeading>
      </div>

      <StackingCards>
        {FEATURED_EVENTS.map((event, index) => (
          <StackingCardItem key={event.slug}>
            <EventCard event={event} variant="stage" priority={index === 0} />
          </StackingCardItem>
        ))}
      </StackingCards>
    </section>
  );
}
