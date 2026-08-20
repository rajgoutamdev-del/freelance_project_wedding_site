import { poolPhoto } from '../utils/unsplash';

export interface ServiceRecord {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  photoId: string;
}

const RAW: Omit<ServiceRecord, 'photoId'>[] = [
  {
    slug: 'weddings',
    title: 'Weddings',
    tagline: 'A day built entirely around how you want to feel.',
    description:
      'From first look to last dance, every detail — the pacing, the light, the flowers, the food — is designed around the story you want your wedding to tell.',
    category: 'weddings',
  },
  {
    slug: 'celebrations',
    title: 'Celebrations',
    tagline: 'Milestones deserve more than a party.',
    description:
      'Birthdays, anniversaries, and once-in-a-lifetime milestones, curated from an intimate dinner to a full-scale production.',
    category: 'celebrations',
  },
  {
    slug: 'floral',
    title: 'Floral',
    tagline: 'Every arrangement is designed to be looked at twice.',
    description:
      'In-house floral design, from cascading ceremony installations to hand-placed tablescapes, built to match the mood of the room.',
    category: 'weddings',
  },
  {
    slug: 'corporate-milestones',
    title: 'Corporate Milestone Events',
    tagline: 'Your brand, staged the way it deserves to be seen.',
    description:
      'Product launches, anniversaries, and leadership events produced with the same rigor and polish as any of our weddings.',
    category: 'corporate',
  },
  {
    slug: 'nonprofit',
    title: 'Nonprofit',
    tagline: 'A great cause deserves a room that matches it.',
    description:
      'Fundraising galas and benefit dinners designed to keep the focus on the mission while raising more than the night before.',
    category: 'corporate',
  },
  {
    slug: 'event-design-production',
    title: 'Event Design and Production',
    tagline: 'Effortless, because nothing was left to chance.',
    description:
      'Full-service design and production management — timelines, vendors, staging, lighting — so the day runs exactly as planned.',
    category: 'weddings',
  },
  {
    slug: 'decor',
    title: 'Decor',
    tagline: "Atmosphere isn't decoration — it's the whole point.",
    description:
      'Layered lighting, texture, and scale used to turn any venue into a room no one will forget walking into.',
    category: 'weddings',
  },
  {
    slug: 'appearances',
    title: 'Personal and Professional Appearances',
    tagline: 'A guest of honor who brings the room to life.',
    description:
      'Speaking engagements, hosting appearances, and personal event consultations for brands and private clients alike.',
    category: 'corporate',
  },
];

export const SERVICES: ServiceRecord[] = RAW.map((service, index) => ({
  ...service,
  photoId: poolPhoto(index * 5 + 1),
}));
