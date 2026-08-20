import { RevealOnScroll } from '../../components/reveal/RevealOnScroll';
import { StarIcon } from '../../components/ui/StarDivider';
import styles from './IntroStatement.module.css';

export function IntroStatement() {
  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.lede} as="p">
        Every event begins with a story worth telling — ours is told through
        light, texture, and detail.
      </RevealOnScroll>
      <RevealOnScroll delay={100}>
        <StarIcon className={styles.star} />
      </RevealOnScroll>
      <RevealOnScroll delay={150}>
        <p className={styles.text}>
          The David Tutera team has been an <em>international</em> leader in the
          event industry for over 30 years.
        </p>
      </RevealOnScroll>
    </section>
  );
}
