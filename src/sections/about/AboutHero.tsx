import { RevealOnScroll } from '../../components/reveal/RevealOnScroll';
import { ResponsiveImage } from '../../components/media/ResponsiveImage';
import { SectionHeading } from '../../components/ui/SectionHeading';
import styles from './AboutHero.module.css';

export function AboutHero() {
  return (
    <section className={styles.hero}>
      <RevealOnScroll className={styles.textCol}>
        <SectionHeading as="h1" size="xl" className={styles.heading}>
          Feel the David Tutera <em>Difference</em>
        </SectionHeading>
      </RevealOnScroll>
      <RevealOnScroll delay={120} className={styles.imageCol}>
        <ResponsiveImage
          photoId="1519225421980-715cb0215aed"
          alt="David Tutera"
          aspectRatio="1 / 1"
          priority
        />
      </RevealOnScroll>
    </section>
  );
}
