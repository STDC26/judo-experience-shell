import { describe, it, expect } from 'vitest';
import { getAllStudios, getStudioById, isValidStudioId } from '../domain/studio';
import { getAllBriefs, getBriefById } from '../domain/brief';

describe('Studio data', () => {
  it('returns all five studios', () => {
    expect(getAllStudios()).toHaveLength(5);
  });

  it('resolves each studio by valid ID', () => {
    const ids = ['observatory', 'stone-garden', 'craftsman-workshop', 'architect-studio', 'strategy-room'];
    for (const id of ids) {
      const studio = getStudioById(id);
      expect(studio).toBeDefined();
      expect(studio!.id).toBe(id);
    }
  });

  it('returns undefined for invalid studio ID', () => {
    expect(getStudioById('nonexistent')).toBeUndefined();
  });

  it('validates studio IDs correctly', () => {
    expect(isValidStudioId('observatory')).toBe(true);
    expect(isValidStudioId('nonexistent')).toBe(false);
  });

  it('strategy-room has maturity structural', () => {
    const sr = getStudioById('strategy-room');
    expect(sr!.maturity).toBe('structural');
  });

  it('every studio has required fields', () => {
    for (const studio of getAllStudios()) {
      expect(studio.id).toBeDefined();
      expect(studio.name).toBeDefined();
      expect(studio.verb).toBeDefined();
      expect(studio.tagline).toBeDefined();
      expect(studio.purpose).toBeDefined();
      expect(studio.bestFor.length).toBeGreaterThan(0);
      expect(studio.accent.primary).toBeDefined();
      expect(studio.maturity).toBeDefined();
      expect(studio.heroImageRef).toBeDefined();
      expect(studio.workflow.steps.length).toBeGreaterThan(0);
      expect(studio.capabilities.length).toBeGreaterThan(0);
      expect(studio.metrics.length).toBeGreaterThan(0);
      expect(studio.panels.length).toBeGreaterThan(0);
      expect(studio.integrationSlots.length).toBeGreaterThan(0);
    }
  });

  it('all integration slots have status placeholder', () => {
    for (const studio of getAllStudios()) {
      for (const slot of studio.integrationSlots) {
        expect(slot.status).toBe('placeholder');
      }
    }
  });
});

describe('Brief data', () => {
  it('returns both briefs', () => {
    expect(getAllBriefs()).toHaveLength(2);
  });

  it('resolves brief by valid ID', () => {
    const aurora = getBriefById('brief-aurora');
    expect(aurora).toBeDefined();
    expect(aurora!.id).toBe('brief-aurora');

    const meridian = getBriefById('brief-meridian');
    expect(meridian).toBeDefined();
    expect(meridian!.id).toBe('brief-meridian');
  });

  it('returns undefined for invalid brief ID', () => {
    expect(getBriefById('nonexistent')).toBeUndefined();
  });

  it('brief-meridian originStudio is observatory (F-01 corrected)', () => {
    const meridian = getBriefById('brief-meridian');
    expect(meridian!.originStudio).toBe('observatory');
  });

  it('all brief confidence.isComputed is false', () => {
    for (const brief of getAllBriefs()) {
      expect(brief.confidence.isComputed).toBe(false);
    }
  });

  it('all brief governance.humanInCommand is true', () => {
    for (const brief of getAllBriefs()) {
      expect(brief.governance.humanInCommand).toBe(true);
    }
  });

  it('all brief integration slots have status placeholder', () => {
    for (const brief of getAllBriefs()) {
      for (const slot of brief.integrationSlots) {
        expect(slot.status).toBe('placeholder');
      }
    }
  });
});
