import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  useDocumentTitle('Page Not Found');

  return (
    <div className={styles.page}>
      <span className={styles.code}>404</span>
      <SectionHeading as="h1" size="sm" align="center">
        This page couldn&rsquo;t be found.
      </SectionHeading>
      <Button to="/">Back to Home</Button>
    </div>
  );
}
