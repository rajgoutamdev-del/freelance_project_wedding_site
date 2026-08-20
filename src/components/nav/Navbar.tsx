import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../utils/cn';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={styles.nav}>
        <NavLink to="/" className={styles.logo} aria-label="David Tutera — Home">
          DAVID TUTERA
        </NavLink>

        <nav className={styles.links} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => cn(styles.link, isActive && styles.linkActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={styles.hamburgerLine}
            style={menuOpen ? { transform: 'translateY(6px) rotate(45deg)' } : undefined}
          />
          <span
            className={styles.hamburgerLine}
            style={menuOpen ? { opacity: 0 } : undefined}
          />
          <span
            className={styles.hamburgerLine}
            style={menuOpen ? { transform: 'translateY(-6px) rotate(-45deg)' } : undefined}
          />
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </>
  );
}
