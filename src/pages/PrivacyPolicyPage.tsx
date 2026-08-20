import { SectionHeading } from '../components/ui/SectionHeading';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './PrivacyPolicyPage.module.css';

export function PrivacyPolicyPage() {
  useDocumentTitle('Privacy Policy');

  return (
    <div className={styles.page}>
      <SectionHeading as="h1" size="md" className={styles.heading}>
        Privacy Policy
      </SectionHeading>
      <p className={styles.body}>
        This is a placeholder privacy policy for demonstration purposes. In a
        production build, this page would describe what information is
        collected through the contact form, how it is stored, and how
        visitors can request that it be removed.
      </p>
      <p className={styles.body}>
        No analytics or tracking scripts are included in this build beyond
        what is required for the site itself to function.
      </p>
    </div>
  );
}
