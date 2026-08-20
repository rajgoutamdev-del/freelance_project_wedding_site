import { RevealOnScroll } from '../../components/reveal/RevealOnScroll';
import { SectionHeading } from '../../components/ui/SectionHeading';
import styles from './AboutBioBlock.module.css';

export function AboutBioBlock() {
  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.bio}>
        <span className={styles.role}>Founder &amp; Creative Director</span>
        <SectionHeading as="h2" size="sm" className={styles.name}>
          David Tutera
        </SectionHeading>
        <p className={styles.body}>
          A globally-recognized wedding and entertaining expert, David has
          spent more than three decades as a television personality,
          designer, entrepreneur, author, and speaker — building a body of
          work defined by craft and by an unwavering belief that every
          celebration should feel entirely personal.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={120} className={styles.bio}>
        <span className={styles.role}>Chief Operating Officer</span>
        <SectionHeading as="h2" size="sm" className={styles.name}>
          Joey Toth
        </SectionHeading>
        <p className={styles.body}>
          With a background in holistic nutrition and life coaching, Joey
          leads day-to-day operations with a focus on innovation and
          storytelling — making sure every event stays true to the client it
          was designed for.
        </p>
      </RevealOnScroll>
    </section>
  );
}
