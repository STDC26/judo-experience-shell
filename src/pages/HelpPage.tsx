import { Link } from 'react-router-dom';

export function HelpPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-charcoal)', padding: 'var(--space-2xl)', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-clay)', display: 'block', marginBottom: 'var(--space-xl)' }}>← Back to JUDO</Link>
      <h1 style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-lg)' }}>Help</h1>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-pending)', fontStyle: 'italic' }}>Help documentation will be available in a future release.</p>
    </div>
  );
}
