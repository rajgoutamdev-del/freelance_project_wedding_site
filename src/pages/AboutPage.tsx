import { AboutHero } from '../sections/about/AboutHero';
import { AboutBioBlock } from '../sections/about/AboutBioBlock';
import { LegacyList } from '../sections/about/LegacyList';
import { FamilySection } from '../sections/about/FamilySection';
import { CtaBanner } from '../components/ui/CtaBanner';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function AboutPage() {
  useDocumentTitle('About');

  return (
    <>
      <AboutHero />
      <AboutBioBlock />
      <LegacyList />
      <FamilySection />
      <CtaBanner />
    </>
  );
}
