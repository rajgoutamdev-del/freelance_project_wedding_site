import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../data/events';
import { cn } from '../../utils/cn';
import styles from './CategoryFilterBar.module.css';

export function CategoryFilterBar() {
  return (
    <nav className={styles.bar} aria-label="Filter by category">
      <NavLink
        to="/gallery"
        end
        className={({ isActive }) => cn(styles.pill, isActive && styles.pillActive)}
      >
        All
      </NavLink>
      {CATEGORIES.map((category) => (
        <NavLink
          key={category.slug}
          to={`/gallery-categories/${category.slug}`}
          className={({ isActive }) => cn(styles.pill, isActive && styles.pillActive)}
        >
          {category.label}
        </NavLink>
      ))}
    </nav>
  );
}
