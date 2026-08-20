import styles from './PetalField.module.css';

const PETALS = [
  { left: '6%', size: 22, duration: 15, delay: -2 },
  { left: '20%', size: 14, duration: 19, delay: -9 },
  { left: '48%', size: 18, duration: 17, delay: -4 },
  { left: '74%', size: 13, duration: 21, delay: -12 },
  { left: '90%', size: 20, duration: 16, delay: -6 },
];

function PetalShape({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 20 26"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 0c5.5 4 9 9.7 9 15a9 9 0 1 1-18 0C1 9.7 4.5 4 10 0Z" />
    </svg>
  );
}

/** Purely decorative, GPU-cheap (transform + opacity) drift layer. Hidden under reduced-motion / small screens. */
export function PetalField() {
  return (
    <div className={styles.field} aria-hidden="true">
      {PETALS.map((petal, i) => (
        <span
          key={i}
          className={styles.petal}
          style={{
            left: petal.left,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <PetalShape size={petal.size} />
        </span>
      ))}
    </div>
  );
}
