import { poolPhoto } from '../utils/unsplash';

export type EventCategory = 'weddings' | 'birthdays' | 'celebrations' | 'dinner' | 'corporate';

export interface EventRecord {
  slug: string;
  title: string;
  category: EventCategory;
  location: string;
  country: string;
  description: string;
  featured?: boolean;
  heroPhotoId: string;
  galleryPhotoIds: string[];
}

export const CATEGORIES: { slug: EventCategory; label: string }[] = [
  { slug: 'weddings', label: 'Weddings' },
  { slug: 'birthdays', label: 'Birthdays' },
  { slug: 'celebrations', label: 'Celebrations' },
  { slug: 'dinner', label: 'Dinners' },
  { slug: 'corporate', label: 'Corporate' },
];

interface Seed {
  slug: string;
  title: string;
  category: EventCategory;
  location: string;
  country: string;
  description: string;
  featured?: boolean;
}

const SEEDS: Seed[] = [
  { slug: 'garden-vow-affair', title: 'Garden Vow Affair', category: 'weddings', location: 'Napa', country: 'USA', description: 'An intimate vineyard ceremony wrapped in trailing greenery and golden-hour light.', featured: true },
  { slug: 'moonlit-terrace-wedding', title: 'Moonlit Terrace Wedding', category: 'weddings', location: 'Lake Como', country: 'Italy', description: 'A lakeside terrace transformed into a candlelit dinner beneath the stars.', featured: true },
  { slug: 'coastal-elopement', title: 'Coastal Elopement', category: 'weddings', location: 'Malibu', country: 'USA', description: 'A barefoot, cliffside ceremony designed for two, framed by the Pacific.' },
  { slug: 'midnight-rose-wedding', title: 'Midnight Rose Wedding', category: 'weddings', location: 'Miami', country: 'USA', description: 'Deep crimson blooms and black-tie glamour for a late-night celebration.', featured: true },
  { slug: 'palace-garden-wedding', title: 'Palace Garden Wedding', category: 'weddings', location: 'Hamilton', country: 'Bermuda', description: 'A pastel island wedding staged across sculpted palace gardens.' },
  { slug: 'autumn-vineyard-wedding', title: 'Autumn Vineyard Wedding', category: 'weddings', location: 'Sonoma', country: 'USA', description: 'Harvest-season warmth, long farm tables, and amber string lighting.' },
  { slug: 'modern-ballroom-wedding', title: 'Modern Ballroom Wedding', category: 'weddings', location: 'Los Angeles', country: 'USA', description: 'A sculptural, monochrome ballroom reimagined with suspended florals.' },
  { slug: 'enchanted-orchard-wedding', title: 'Enchanted Orchard Wedding', category: 'weddings', location: 'Orlando', country: 'USA', description: 'A storybook orchard ceremony built for a couple who wanted pure whimsy.', featured: true },
  { slug: 'desert-bloom-wedding', title: 'Desert Bloom Wedding', category: 'weddings', location: 'Scottsdale', country: 'USA', description: 'Sun-bleached tones and desert blooms set against a dusk skyline.' },
  { slug: 'riverside-wedding', title: 'Riverside Wedding', category: 'weddings', location: 'Charleston', country: 'USA', description: 'Southern elegance along the water, with Spanish moss and soft linen.' },
  { slug: 'old-world-wedding', title: 'Old World Wedding', category: 'weddings', location: 'Tuscany', country: 'Italy', description: 'A centuries-old villa dressed in olive branches and antique gold.' },
  { slug: 'skyline-wedding', title: 'Skyline Wedding', category: 'weddings', location: 'New York', country: 'USA', description: 'A glass-walled rooftop ceremony suspended above the city lights.' },
  { slug: 'tropical-escape-wedding', title: 'Tropical Escape Wedding', category: 'weddings', location: 'Providenciales', country: 'Turks & Caicos', description: 'Turquoise water, palm shade, and a barefoot reception on the sand.' },
  { slug: 'countryside-wedding', title: 'Countryside Wedding', category: 'weddings', location: 'Hudson Valley', country: 'USA', description: 'A weekend-long celebration across rolling hills and converted barns.' },
  { slug: 'art-deco-wedding', title: 'Art Deco Wedding', category: 'weddings', location: 'Miami', country: 'USA', description: 'Geometric gold accents and jazz-age glamour on Ocean Drive.' },
  { slug: 'woodland-wedding', title: 'Woodland Wedding', category: 'weddings', location: 'Aspen', country: 'USA', description: 'A pine-forest ceremony with a warm, cabin-luxe reception to follow.' },
  { slug: 'regal-estate-wedding', title: 'Regal Estate Wedding', category: 'weddings', location: 'Newport', country: 'USA', description: 'A gilded-age mansion set for a wedding fit for its history.' },
  { slug: 'sunset-cliffside-wedding', title: 'Sunset Cliffside Wedding', category: 'weddings', location: 'Big Sur', country: 'USA', description: 'Vows exchanged at the edge of the coast as the sky turned gold.' },
  { slug: 'golden-hour-birthday', title: 'Golden Hour Birthday', category: 'birthdays', location: 'Beverly Hills', country: 'USA', description: 'A milestone birthday styled entirely in warm, low-light tones.', featured: true },
  { slug: 'wonderland-birthday', title: 'Wonderland Birthday', category: 'birthdays', location: 'Palm Beach', country: 'USA', description: 'An oversized, technicolor fantasy built for a first birthday.' },
  { slug: 'first-birthday-celebration', title: 'First Birthday Celebration', category: 'birthdays', location: 'Malibu', country: 'USA', description: 'Soft pastels and hand-piped florals for a coastal first birthday.' },
  { slug: 'milestone-birthday-bash', title: 'Milestone Birthday Bash', category: 'birthdays', location: 'Las Vegas', country: 'USA', description: 'A high-energy production with a full stage build and live band.' },
  { slug: 'rooftop-birthday-soiree', title: 'Rooftop Birthday Soiree', category: 'birthdays', location: 'New York', country: 'USA', description: 'An intimate rooftop gathering under a canopy of string lights.' },
  { slug: 'anniversary-under-the-stars', title: 'Anniversary Under the Stars', category: 'celebrations', location: 'Miami', country: 'USA', description: 'Thirty years marked with an open-air dinner beneath draped florals.' },
  { slug: 'vow-renewal-celebration', title: 'Vow Renewal Celebration', category: 'celebrations', location: 'Santorini', country: 'Greece', description: 'A whitewashed clifftop renewal ceremony overlooking the caldera.' },
  { slug: 'reunion-gala', title: 'Reunion Gala', category: 'celebrations', location: 'Chicago', country: 'USA', description: 'A black-tie reunion staged inside a restored downtown ballroom.' },
  { slug: 'debutante-celebration', title: 'Debutante Celebration', category: 'celebrations', location: 'New Orleans', country: 'USA', description: 'Classic Southern formality with a modern, jewel-toned palette.' },
  { slug: 'legacy-celebration', title: 'Legacy Celebration', category: 'celebrations', location: 'Washington, D.C.', country: 'USA', description: 'An evening honoring a lifetime of philanthropic work.' },
  { slug: 'candlelit-welcome-dinner', title: 'Candlelit Welcome Dinner', category: 'dinner', location: 'Napa', country: 'USA', description: 'A long-table welcome dinner lit entirely by candle and moonlight.' },
  { slug: 'rehearsal-dinner-in-bloom', title: 'Rehearsal Dinner in Bloom', category: 'dinner', location: 'Charleston', country: 'USA', description: 'An overflowing floral canopy set the stage for the night before.' },
  { slug: 'twilight-farewell-dinner', title: 'Twilight Farewell Dinner', category: 'dinner', location: 'Malibu', country: 'USA', description: 'A final evening together, styled soft and low against the coastline.' },
  { slug: 'brand-milestone-gala', title: 'Brand Milestone Gala', category: 'corporate', location: 'New York', country: 'USA', description: 'A ten-year brand anniversary reimagined as an immersive gala.', featured: true },
  { slug: 'nonprofit-gala-night', title: 'Nonprofit Gala Night', category: 'corporate', location: 'Los Angeles', country: 'USA', description: 'A fundraising gala designed to keep every eye on the mission.' },
];

function buildGalleryPhotoIds(seedIndex: number): string[] {
  return [0, 1, 2, 3].map((offset) => poolPhoto(seedIndex * 3 + offset));
}

export const EVENTS: EventRecord[] = SEEDS.map((seed, index) => ({
  ...seed,
  heroPhotoId: poolPhoto(index * 3),
  galleryPhotoIds: buildGalleryPhotoIds(index),
}));

export const FEATURED_EVENTS = EVENTS.filter((event) => event.featured);

export function getEventBySlug(slug: string): EventRecord | undefined {
  return EVENTS.find((event) => event.slug === slug);
}

export function getEventsByCategory(category: EventCategory | 'all'): EventRecord[] {
  if (category === 'all') return EVENTS;
  return EVENTS.filter((event) => event.category === category);
}

export function getRelatedEvents(slug: string, count = 4): EventRecord[] {
  const current = getEventBySlug(slug);
  if (!current) return EVENTS.slice(0, count);
  const sameCategory = EVENTS.filter((event) => event.category === current.category && event.slug !== slug);
  const rest = EVENTS.filter((event) => event.category !== current.category && event.slug !== slug);
  return [...sameCategory, ...rest].slice(0, count);
}
