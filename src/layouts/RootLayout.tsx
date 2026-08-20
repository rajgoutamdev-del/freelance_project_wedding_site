import { Navbar } from '../components/nav/Navbar';
import { Footer } from '../components/footer/Footer';
import { Preloader } from '../components/Preloader';
import { PageTransition } from './PageTransition';

export function RootLayout() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <PageTransition />
      </main>
      <Footer />
    </>
  );
}
