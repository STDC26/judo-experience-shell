import { useParams, Navigate, Link } from 'react-router-dom';
import { getBriefById } from '../domain/brief';
import { getStudioById } from '../domain/studio';

export function BriefPage() {
  const { briefId } = useParams<{ briefId: string }>();
  const brief = briefId ? getBriefById(briefId) : undefined;

  if (!brief) return <Navigate to="/studios" replace />;

  return (
    <div className="brief-detail">
      <Link to="/studios" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-clay)', display: 'block', marginBottom: 'var(--space-xl)' }}>
        ← Back to Studios
      </Link>

      <div className="brief-header">
        <h1 className="brief-title">{brief.title}</h1>
        <div className="brief-meta">
          <span>Origin: {brief.originStudio}</span>
          <span>Stage: {brief.currentStage}</span>
          <span>Confidence: {brief.confidence.level}</span>
          {brief.decisionState && <span>Decision: {brief.decisionState}</span>}
        </div>
      </div>

      {/* Lifecycle Timeline */}
      <section className="brief-section">
        <h2 className="brief-section-title">Studio Movement Timeline</h2>
        {brief.lifecycle.map((entry, i) => {
          const studio = getStudioById(entry.studio);
          const accentColor = studio?.accent.primary || 'var(--color-clay)';
          return (
            <div key={i} className="timeline-entry" style={{ borderLeftColor: accentColor }}>
              <div className="timeline-stage">
                <div className="timeline-stage-label" style={{ color: accentColor }}>{entry.stage}</div>
                <div className="timeline-studio">{studio?.name || entry.studio}</div>
              </div>
              <div>
                <div className="timeline-note">{entry.note}</div>
                <div className="timeline-actor">{entry.actor} — {new Date(entry.timestamp).toLocaleDateString()}</div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Signals */}
      <section className="brief-section">
        <h2 className="brief-section-title">Signals</h2>
        {brief.signals.map(s => (
          <div key={s.id} className="signal-card">
            <div className="signal-label">
              {s.label}
              {s.directed ? (
                <span className="signal-tag signal-tag-directed">directed</span>
              ) : (
                <span className="signal-tag signal-tag-emerging">emerging</span>
              )}
            </div>
            <div className="signal-note">{s.note}</div>
          </div>
        ))}
      </section>

      {/* Candidate Beliefs */}
      <section className="brief-section">
        <h2 className="brief-section-title">Candidate Beliefs</h2>
        {brief.candidateBeliefs.map(b => (
          <div key={b.id} className="belief-card">
            <div className="belief-statement">"{b.statement}"</div>
            <div className="belief-derivation">Derived from: {b.derivedFrom.join(', ')}</div>
          </div>
        ))}
      </section>

      {/* Evidence */}
      <section className="brief-section">
        <h2 className="brief-section-title">Evidence</h2>
        {brief.evidence.map(e => (
          <div key={e.id} className="signal-card">
            <div style={{ fontSize: 'var(--text-sm)', marginBottom: '2px' }}>{e.summary}</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-clay)' }}>
              {e.sourceLabel} — Strength: {e.strength}
            </div>
          </div>
        ))}
      </section>

      {/* Confidence */}
      <section className="brief-section">
        <h2 className="brief-section-title">Confidence</h2>
        <div className="workspace-panel">
          <div style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-sm)' }}>Level: {brief.confidence.level}</div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-clay)' }}>{brief.confidence.rationale}</div>
          <div className="panel-placeholder" style={{ marginTop: 'var(--space-sm)' }}>
            isComputed: false — static demonstration
          </div>
        </div>
      </section>

      {/* Integration Slots */}
      <section className="brief-section">
        <h2 className="brief-section-title">Future Capability Integration</h2>
        <div className="integration-slots-grid">
          {brief.integrationSlots.map(slot => (
            <div key={slot.id} className="integration-slot-card">
              <div className="integration-slot-cap">{slot.capability} — placeholder</div>
              <div className="integration-slot-desc">{slot.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Governance */}
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-pending)', borderTop: '1px solid var(--surface-border)', paddingTop: 'var(--space-md)' }}>
        Human in Command: {String(brief.governance.humanInCommand)} · Last Actor: {brief.governance.lastActor}
      </div>
    </div>
  );
}
