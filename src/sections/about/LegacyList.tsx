import { LEGACY_LIST } from '../../data/legacyList';
import { RevealOnScroll } from '../../components/reveal/RevealOnScroll';
import { SectionHeading } from '../../components/ui/SectionHeading';
import styles from './LegacyList.module.css';

export function LegacyList() {
  return (
    <section className={styles.section}>
      <SectionHeading eyebrow="Trusted By" size="md" className={styles.heading}>
        A <em>Legacy</em> Built on Trust
      </SectionHeading>
      <div className={styles.grid}>
        {LEGACY_LIST.map((item, index) => (
          <RevealOnScroll key={item} as="span" delay={(index % 6) * 40} className={styles.item}>
            {item}
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
