import type { Studio, StudioId } from './types';

import observatory from '../data/studios/observatory.json';
import stoneGarden from '../data/studios/stone-garden.json';
import craftsmanWorkshop from '../data/studios/craftsman-workshop.json';
import architectStudio from '../data/studios/architect-studio.json';
import strategyRoom from '../data/studios/strategy-room.json';

const studios: Studio[] = [
  observatory as Studio,
  stoneGarden as Studio,
  craftsmanWorkshop as Studio,
  architectStudio as Studio,
  strategyRoom as Studio,
];

export function getAllStudios(): Studio[] {
  return studios;
}

export function getStudioById(id: string): Studio | undefined {
  return studios.find(s => s.id === id);
}

export function isValidStudioId(id: string): id is StudioId {
  return studios.some(s => s.id === id);
}
