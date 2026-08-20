import { ResponsiveImage } from '../../components/media/ResponsiveImage';
import { RevealOnScroll } from '../../components/reveal/RevealOnScroll';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';
import { StarDivider } from '../../components/ui/StarDivider';
import styles from './AboutTeaserSection.module.css';

export function AboutTeaserSection() {
  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.imageCol}>
        <ResponsiveImage
          photoId="1544413660-299165566b1d"
          alt="Portrait of David Tutera"
          aspectRatio="4 / 5"
        />
      </RevealOnScroll>

      <RevealOnScroll delay={120} className={styles.textCol}>
        <StarDivider />
        <SectionHeading eyebrow="Meet the Founder" size="md">
          Luxury Event <em>Planner</em>
        </SectionHeading>
        <p className={styles.body}>
          For more than 30 years, David Tutera has designed events that feel
          less like productions and more like lived-in moments — grounded in
          craft, built for the people they&rsquo;re for.
        </p>
        <Button to="/about">About Us</Button>
      </RevealOnScroll>
    </section>
  );
}
