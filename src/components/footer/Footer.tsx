import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://x.com', label: 'X' },
  { href: 'https://pinterest.com', label: 'Pinterest' },
  { href: 'https://youtube.com', label: 'YouTube' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          David Tutera
        </Link>
        <p className={styles.tagline}>
          Anything is possible — a design studio for weddings, celebrations, and
          milestone events, built around the story you want told.
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.column}>
          <span className={styles.columnLabel}>Explore</span>
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <span className={styles.columnLabel}>Follow</span>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} David Tutera. All rights reserved.</span>
        <div className={styles.bottomLinks}>
          <Link to="/privacy-policy" className={styles.link}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
