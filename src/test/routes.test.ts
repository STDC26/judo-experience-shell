import { describe, it, expect } from 'vitest';
import { router } from '../app/router';

describe('Route configuration', () => {
  const flatPaths = router.routes.flatMap(r => {
    if (r.children) {
      return r.children.map(c => c.path);
    }
    return [r.path];
  });

  it('has landing route /', () => {
    expect(flatPaths).toContain('/');
  });

  it('has studio selection route /studios', () => {
    expect(flatPaths).toContain('/studios');
  });

  it('has parameterized studio route /studios/:studioId', () => {
    expect(flatPaths).toContain('/studios/:studioId');
  });

  it('has brief detail route /briefs/:briefId', () => {
    expect(flatPaths).toContain('/briefs/:briefId');
  });

  it('has architecture route /architecture', () => {
    expect(flatPaths).toContain('/architecture');
  });

  it('has settings route /settings', () => {
    expect(flatPaths).toContain('/settings');
  });

  it('has help route /help', () => {
    expect(flatPaths).toContain('/help');
  });

  it('has catch-all route *', () => {
    expect(flatPaths).toContain('*');
  });
});
