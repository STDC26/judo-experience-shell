import type { Brief } from './types';

import briefAurora from '../data/briefs/brief-aurora.json';
import briefMeridian from '../data/briefs/brief-meridian.json';

const briefs: Brief[] = [
  briefAurora as Brief,
  briefMeridian as Brief,
];

export function getAllBriefs(): Brief[] {
  return briefs;
}

export function getBriefById(id: string): Brief | undefined {
  return briefs.find(b => b.id === id);
}
