import { RevealOnScroll } from '../../components/reveal/RevealOnScroll';
import { ResponsiveImage } from '../../components/media/ResponsiveImage';
import { SectionHeading } from '../../components/ui/SectionHeading';
import styles from './FamilySection.module.css';

export function FamilySection() {
  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.imageCol}>
        <ResponsiveImage
          photoId="1522673607200-164d1b6ce486"
          alt="Family celebration"
          aspectRatio="4 / 5"
        />
      </RevealOnScroll>
      <RevealOnScroll delay={120} className={styles.textCol}>
        <SectionHeading size="md">
          It&rsquo;s All About <em>Family</em>
        </SectionHeading>
        <p className={styles.body}>
          Beyond the events, family is what grounds everything David does.
          Raising his daughter alongside Joey has shaped how he thinks about
          celebration itself — that the best moments aren&rsquo;t staged,
          they&rsquo;re simply given room to happen.
        </p>
      </RevealOnScroll>
    </section>
  );
}
