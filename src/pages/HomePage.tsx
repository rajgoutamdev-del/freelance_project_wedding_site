import { HeroSection } from '../sections/home/HeroSection';
import { IntroStatement } from '../sections/home/IntroStatement';
import { FeaturedEventsSection } from '../sections/home/FeaturedEventsSection';
import { AboutTeaserSection } from '../sections/home/AboutTeaserSection';
import { CtaBanner } from '../components/ui/CtaBanner';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function HomePage() {
  useDocumentTitle('Event Planner, Fashion Designer & Wedding Expert');

  return (
    <>
      <HeroSection />
      <IntroStatement />
      <FeaturedEventsSection />
      <AboutTeaserSection />
      <CtaBanner />
    </>
  );
}
