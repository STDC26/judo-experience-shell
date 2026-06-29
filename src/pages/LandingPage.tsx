import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-charcoal)',
      textAlign: 'center',
      padding: 'var(--space-2xl)',
    }}>
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'var(--text-3xl)',
        fontWeight: 400,
        letterSpacing: '0.08em',
        marginBottom: 'var(--space-2xl)',
        color: 'var(--color-parchment)',
      }}>
        JUDO
      </h1>
      <p style={{
        fontSize: 'var(--text-lg)',
        color: 'var(--color-clay)',
        marginBottom: 'var(--space-xl)',
        fontStyle: 'italic',
      }}>
        The Intelligence Studio
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-sm)',
        marginBottom: 'var(--space-3xl)',
        color: 'var(--color-stone)',
        fontSize: 'var(--text-base)',
      }}>
        <span>Creating Clarity.</span>
        <span>Shaping Advantage.</span>
        <span>Building Conviction.</span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-xs)',
        marginBottom: 'var(--space-3xl)',
        color: 'rgba(246,243,238,0.5)',
        fontSize: 'var(--text-sm)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
      }}>
        <span>Signal Before Scale.</span>
        <span>Strategy Before Strength.</span>
        <span>Conviction Before Commitment.</span>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
        <Link to="/studios" style={{
          padding: 'var(--space-md) var(--space-xl)',
          background: 'var(--color-bronze)',
          color: 'var(--color-charcoal)',
          borderRadius: '4px',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          Enter JUDO Studio
        </Link>
        <Link to="/architecture" style={{
          padding: 'var(--space-md) var(--space-xl)',
          border: '1px solid var(--color-clay)',
          color: 'var(--color-clay)',
          borderRadius: '4px',
          fontSize: 'var(--text-sm)',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          View Architecture
        </Link>
      </div>
    </div>
  );
}
