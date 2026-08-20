import styles from './ContactInfoBlock.module.css';

export function ContactInfoBlock() {
  return (
    <div className={styles.block}>
      <div className={styles.group}>
        <span className={styles.label}>Phone</span>
        <span className={styles.value}>1-844-555-0142</span>
      </div>
      <div className={styles.group}>
        <span className={styles.label}>Studio Address</span>
        <span className={styles.value}>Malibu, California</span>
      </div>
      <div className={styles.group}>
        <span className={styles.label}>Event Requests</span>
        <span className={styles.value}>hello@davidtutera.example</span>
      </div>
      <div className={styles.group}>
        <span className={styles.label}>Press &amp; Speaking</span>
        <span className={styles.value}>press@davidtutera.example</span>
      </div>
    </div>
  );
}
