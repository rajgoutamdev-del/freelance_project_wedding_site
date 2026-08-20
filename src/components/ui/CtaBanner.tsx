import { RevealOnScroll } from '../reveal/RevealOnScroll';
import { PetalField } from './PetalField';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import styles from './CtaBanner.module.css';

export function CtaBanner() {
  return (
    <section className={styles.section}>
      <PetalField />
      <RevealOnScroll className={styles.heading}>
        <SectionHeading size="md" align="center">
          Ready to have your <em>dream</em> event?
        </SectionHeading>
      </RevealOnScroll>
      <RevealOnScroll delay={120}>
        <Button to="/contact">Contact Us</Button>
      </RevealOnScroll>
    </section>
  );
}
