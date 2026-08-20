import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './PageTransition.module.css';

/**
 * The gallery index and its category routes (/gallery, /gallery-categories/*)
 * render the same page component and should stay mounted across each other
 * so GalleryIndexPage can own its own cinematic category-switch sequence
 * instead of being torn down and replayed via the generic page fade below.
 */
function getTransitionKey(pathname: string): string {
  if (pathname === '/gallery' || pathname.startsWith('/gallery-categories/')) {
    return '/gallery';
  }
  return pathname;
}

export function PageTransition() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div key={getTransitionKey(location.pathname)} className={styles.enter}>
      <Outlet />
    </div>
  );
}
