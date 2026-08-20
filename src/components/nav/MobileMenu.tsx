import { NavLink } from 'react-router-dom';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { cn } from '../../utils/cn';
import styles from './MobileMenu.module.css';

interface NavItem {
  to: string;
  label: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavItem[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useLockBodyScroll(open);

  return (
    <div
      className={cn(styles.overlay, open && styles.overlayOpen)}
      aria-hidden={!open}
    >
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close menu" />
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={styles.link}
          onClick={onClose}
          tabIndex={open ? 0 : -1}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
