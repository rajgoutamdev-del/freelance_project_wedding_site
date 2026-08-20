import type { ServiceRecord } from '../../data/services';
import { RevealOnScroll } from '../../components/reveal/RevealOnScroll';
import { ResponsiveImage } from '../../components/media/ResponsiveImage';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { cn } from '../../utils/cn';
import styles from './ServiceRow.module.css';

interface ServiceRowProps {
  service: ServiceRecord;
  index: number;
}

export function ServiceRow({ service, index }: ServiceRowProps) {
  const reversed = index % 2 === 1;

  return (
    <section className={cn(styles.row, reversed && styles.reversed)}>
      <RevealOnScroll className={styles.imageCol}>
        <ResponsiveImage
          photoId={service.photoId}
          alt={service.title}
          aspectRatio="4 / 5"
        />
      </RevealOnScroll>
      <RevealOnScroll delay={100} className={styles.textCol}>
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
        <SectionHeading as="h2" size="md">
          {service.title}
        </SectionHeading>
        <p className={styles.tagline}>{service.tagline}</p>
        <p className={styles.description}>{service.description}</p>
        <Button to={`/gallery-categories/${service.category}`}>View Related Gallery</Button>
      </RevealOnScroll>
    </section>
  );
}
