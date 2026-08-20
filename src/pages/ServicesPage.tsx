import { SERVICES } from '../data/services';
import { ServiceRow } from '../sections/services/ServiceRow';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CtaBanner } from '../components/ui/CtaBanner';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ServicesPage.module.css';

export function ServicesPage() {
  useDocumentTitle('Services');

  return (
    <>
      <header className={styles.header}>
        <SectionHeading eyebrow="What We Do" as="h1" size="lg">
          Services
        </SectionHeading>
      </header>

      {SERVICES.map((service, index) => (
        <ServiceRow key={service.slug} service={service} index={index} />
      ))}

      <CtaBanner />
    </>
  );
}
