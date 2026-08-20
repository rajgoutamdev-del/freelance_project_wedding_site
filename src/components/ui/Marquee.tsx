import { StarIcon } from './StarDivider';
import styles from './Marquee.module.css';

interface MarqueeProps {
  text: string;
  repeat?: number;
}

export function Marquee({ text, repeat = 6 }: MarqueeProps) {
  const items = Array.from({ length: repeat });

  const track = (
    <>
      {items.map((_, i) => (
        <span className={styles.item} key={i}>
          {text}
          <StarIcon className={styles.star} />
        </span>
      ))}
    </>
  );

  return (
    <div className={styles.marquee} aria-hidden="false">
      <div className={styles.track}>
        {track}
        <div aria-hidden="true" style={{ display: 'flex' }}>
          {track}
        </div>
      </div>
    </div>
  );
}
