import { ContactForm } from '../sections/contact/ContactForm';
import { ContactInfoBlock } from '../sections/contact/ContactInfoBlock';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Marquee } from '../components/ui/Marquee';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ContactPage.module.css';

export function ContactPage() {
  useDocumentTitle('Contact');

  return (
    <>
      <header className={styles.header}>
        <SectionHeading eyebrow="Get In Touch" as="h1" size="lg">
          Start Your <em>Journey</em> Here
        </SectionHeading>
      </header>

      <div className={styles.layout}>
        <div className={styles.formCol}>
          <ContactForm />
        </div>
        <div className={styles.infoCol}>
          <ContactInfoBlock />
        </div>
      </div>

      <div className={styles.marqueeWrap}>
        <Marquee text="Let's plan something unforgettable" />
      </div>
    </>
  );
}
