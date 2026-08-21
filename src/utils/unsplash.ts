/**
 * Curated pool of verified, freely-licensed Unsplash photo ids (luxury wedding /
 * floral / event aesthetic) used as placeholder imagery. Images are downloaded
 * once into public/images/ and served locally instead of hotlinking Unsplash's
 * CDN, so the site keeps working for visitors whose network/browser blocks it.
 */
const BASE = '/images/';

export function unsplashUrl(id: string, _width?: number, _quality?: number): string {
  return `${BASE}${id}.jpg`;
}

export function unsplashSrcSet(id: string, widths: number[]): string {
  return widths.map((w) => `${unsplashUrl(id, w)} ${w}w`).join(', ');
}

export const PHOTO_POOL = [
  '1511795409834-ef04bbd61622',
  '1519225421980-715cb0215aed',
  '1520854221256-17451cc331bf',
  '1511285560929-80b456fea0bc',
  '1522673607200-164d1b6ce486',
  '1509927083803-4bd519298ac4',
  '1583939003579-730e3918a45a',
  '1606800052052-a08af7148866',
  '1526047932273-341f2a7631f9',
  '1550005809-91ad75fb315f',
  '1470240731273-7821a6eeb6bd',
  '1470229538611-16ba8c7ffbd7',
  '1487412947147-5cebf100ffc2',
  '1594736797933-d0501ba2fe65',
  '1519671482749-fd09be7ccebf',
  '1544413660-299165566b1d',
  '1523438885200-e635ba2c371e',
  '1533749047139-189de3cf06d3',
  '1521334884684-d80222895322',
  '1591604466107-ec97de577aff',
  '1560184897-ae75f418493e',
  '1522748906645-95d8adfd52c7',
  '1519741497674-611481863552',
  '1465495976277-4387d4b0b4c6',
  '1519167758481-83f550bb49b3',
] as const;

/** Deterministic pick from the pool so the same slot always renders the same photo. */
export function poolPhoto(seed: number): string {
  const index = ((seed % PHOTO_POOL.length) + PHOTO_POOL.length) % PHOTO_POOL.length;
  return PHOTO_POOL[index];
}
