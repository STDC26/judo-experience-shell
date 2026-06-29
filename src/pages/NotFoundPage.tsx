import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-charcoal)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-lg)' }}>
        Page Not Found
      </h1>
      <Link to="/" style={{ color: 'var(--color-bronze)', fontSize: 'var(--text-sm)' }}>
        Return to JUDO
      </Link>
    </div>
  );
}
