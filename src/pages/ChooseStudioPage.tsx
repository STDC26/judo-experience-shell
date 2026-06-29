import { Link } from 'react-router-dom';
import { getAllStudios } from '../domain/studio';

export function ChooseStudioPage() {
  const studios = getAllStudios();

  return (
    <div style={{
      background: 'var(--color-charcoal)',
      padding: 'var(--space-2xl)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--text-2xl)',
          fontWeight: 400,
          marginBottom: 'var(--space-md)',
          color: 'var(--color-parchment)',
        }}>
          Choose Your Studio
        </h1>
        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--color-clay)',
          marginBottom: 'var(--space-sm)',
        }}>
          Different spaces for different kinds of clarity.
        </p>
        <p style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-stone)',
          marginBottom: 'var(--space-2xl)',
        }}>
          Every Studio uses the same intelligence. The difference is in how we help you think.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 'var(--space-lg)',
        }}>
          {studios.map(studio => (
            <Link
              key={studio.id}
              to={`/studios/${studio.id}`}
              style={{
                background: 'var(--surface-panel)',
                border: '1px solid var(--surface-border)',
                borderRadius: '8px',
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-md)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = studio.accent.primary)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--surface-border)')}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: studio.accent.primary,
              }} />
              <h2 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 500,
                color: 'var(--color-parchment)',
              }}>
                {studio.name}
              </h2>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: studio.accent.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                {studio.purpose}
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-stone)',
                lineHeight: 1.6,
              }}>
                {studio.tagline}
              </p>
              <div style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-clay)',
              }}>
                <strong style={{ display: 'block', marginBottom: 'var(--space-xs)' }}>Best for:</strong>
                <ul style={{ paddingLeft: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {studio.bestFor.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div style={{
                display: 'flex',
                gap: 'var(--space-sm)',
                flexWrap: 'wrap',
              }}>
                {studio.capabilities.map(cap => (
                  <span key={cap.id} style={{
                    fontSize: 'var(--text-xs)',
                    padding: '2px 8px',
                    borderRadius: '3px',
                    background: studio.accent.soft,
                    color: studio.accent.primary,
                  }}>
                    {cap.label}
                  </span>
                ))}
              </div>
              {studio.maturity === 'structural' && (
                <span style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-pending)',
                  fontStyle: 'italic',
                }}>
                  Structural — intentionally maturing
                </span>
              )}
            </Link>
          ))}
        </div>

        <div style={{
          marginTop: 'var(--space-3xl)',
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-2xl)',
          color: 'rgba(246,243,238,0.4)',
          fontSize: 'var(--text-xs)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          <span>One Platform.</span>
          <span>Human in Command.</span>
          <span>Confidence Before Commitment.</span>
          <span>Evidence of Care.</span>
          <span>Transform Uncertainty.</span>
        </div>
      </div>
    </div>
  );
}
