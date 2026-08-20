import { BackgroundVideo } from '../../components/media/BackgroundVideo';
import { Button } from '../../components/ui/Button';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <BackgroundVideo posterPhotoId="1519741497674-611481863552" />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Anything is <em>Possible</em>
        </h1>
        <p className={styles.sub}>
          A David Tutera event is more than an event — it&rsquo;s an interactive
          experience celebrating who you are.
        </p>
        <Button to="/about">View Video</Button>
      </div>
    </section>
  );
}
