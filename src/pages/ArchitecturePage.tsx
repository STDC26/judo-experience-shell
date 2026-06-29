import { Link } from 'react-router-dom';

export function ArchitecturePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-charcoal)',
      padding: 'var(--space-2xl)',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <Link to="/" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-clay)', display: 'block', marginBottom: 'var(--space-xl)' }}>
        ← Back to JUDO
      </Link>

      <h1 style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-xl)' }}>
        Architecture Overview
      </h1>

      <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-stone)', marginBottom: 'var(--space-2xl)', lineHeight: 1.8 }}>
        The JUDO Experience Shell is the permanent experience architecture into which intelligence capabilities will progressively integrate. The shell is production-quality experience architecture with static implementation mechanics in this phase.
      </p>

      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-lg)' }}>Runtime Spine</h2>
        <div style={{
          display: 'flex',
          gap: 'var(--space-md)',
          padding: 'var(--space-lg)',
          background: 'var(--surface-panel)',
          border: '1px solid var(--surface-border)',
          borderRadius: '8px',
          justifyContent: 'center',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-bronze)',
          fontWeight: 600,
          letterSpacing: '0.06em',
        }}>
          <span>SHAPE</span><span style={{ color: 'var(--color-pending)' }}>→</span>
          <span>ALIGN</span><span style={{ color: 'var(--color-pending)' }}>→</span>
          <span>DESIGN</span><span style={{ color: 'var(--color-pending)' }}>→</span>
          <span>CALIBRATE</span><span style={{ color: 'var(--color-pending)' }}>→</span>
          <span>ACTIVATE</span>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-lg)' }}>Capability Integration Map</h2>
        {[
          { name: 'SCOUT', role: 'External sensing and signal detection', phase: 'SHAPE', status: 'Integration-ready' },
          { name: 'QDS', role: 'Qualification decision system', phase: 'CALIBRATE', status: 'Integration-ready' },
          { name: 'Stardance', role: 'Strategic decision choreography', phase: 'DESIGN', status: 'Integration-ready' },
          { name: 'Docente', role: 'Capability development and learning runtime', phase: 'LEARN', status: 'Integration-ready' },
          { name: 'VMG', role: 'Adaptive movement and execution', phase: 'ACTIVATE', status: 'Future capability' },
        ].map(cap => (
          <div key={cap.name} style={{
            padding: 'var(--space-md)',
            background: 'var(--surface-panel)',
            border: '1px solid var(--surface-border)',
            borderRadius: '4px',
            marginBottom: 'var(--space-sm)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>{cap.name}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-clay)' }}>{cap.role}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bronze)' }}>{cap.phase}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-pending)', fontStyle: 'italic' }}>{cap.status}</div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-lg)' }}>Out of Scope (This Phase)</h2>
        <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--color-clay)', paddingLeft: 'var(--space-lg)', lineHeight: 2 }}>
          <li>Production AI runtime</li>
          <li>Backend services</li>
          <li>Authentication and persistence</li>
          <li>Real SCOUT ingestion</li>
          <li>QDS execution</li>
          <li>Stardance execution</li>
          <li>Docente execution</li>
          <li>Multi-user workflows</li>
        </ul>
      </section>
    </div>
  );
}
