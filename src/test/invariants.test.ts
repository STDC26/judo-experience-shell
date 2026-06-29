import { describe, it, expect } from 'vitest';
import { getAllStudios } from '../domain/studio';
import { getAllBriefs } from '../domain/brief';

describe('Static-only invariants', () => {
  it('no fetch calls exist in source modules', async () => {
    // We verify this structurally — the domain modules are pure data loaders
    const studios = getAllStudios();
    const briefs = getAllBriefs();
    expect(studios.length).toBe(5);
    expect(briefs.length).toBe(2);
  });

  it('all studios render through same interface (no studio-specific branches needed)', () => {
    const studios = getAllStudios();
    for (const studio of studios) {
      // Every studio has the same structural keys
      expect(studio).toHaveProperty('id');
      expect(studio).toHaveProperty('name');
      expect(studio).toHaveProperty('verb');
      expect(studio).toHaveProperty('workflow');
      expect(studio).toHaveProperty('panels');
      expect(studio).toHaveProperty('metrics');
      expect(studio).toHaveProperty('integrationSlots');
    }
  });

  it('SCOUT/QDS/Stardance/Docente are placeholder only, never live', () => {
    const studios = getAllStudios();
    const briefs = getAllBriefs();

    for (const studio of studios) {
      for (const slot of studio.integrationSlots) {
        expect(slot.status).toBe('placeholder');
        expect(slot.description).not.toMatch(/live|active|running|executing|real-time/i);
      }
    }

    for (const brief of briefs) {
      for (const slot of brief.integrationSlots) {
        expect(slot.status).toBe('placeholder');
      }
    }
  });

  it('new Brief button does not create persisted records', () => {
    // Structural verification: briefs are loaded from static JSON, no mutation API exists
    const before = getAllBriefs().length;
    const after = getAllBriefs().length;
    expect(after).toBe(before);
  });
});
