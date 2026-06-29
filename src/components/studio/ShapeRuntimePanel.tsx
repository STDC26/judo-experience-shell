import type { Brief } from '../../domain/types';

interface Props {
  briefs: Brief[];
}

export function ShapeRuntimePanel({ briefs }: Props) {
  // Gather signals and beliefs from all briefs for demo
  const allSignals = briefs.flatMap(b => b.signals);
  const directedSignals = allSignals.filter(s => s.directed);
  const undirectedSignals = allSignals.filter(s => !s.directed);
  const allBeliefs = briefs.flatMap(b => b.candidateBeliefs);

  return (
    <div className="shape-panel">
      <h3 className="workspace-panel-title">SHAPE · SCOUT — Belief Formation</h3>

      {/* Canonical SHAPE/SCOUT message — rendered verbatim per §7.4 */}
      <div className="shape-canon-message">
        SCOUT detects what is forming. SHAPE transforms it into candidate belief.
        JUDO uses that belief to guide ALIGN, DESIGN, CALIBRATE, and ACTIVATE.
      </div>

      {/* Directed signal group — DRJ-authored explanatory copy */}
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-parchment)', marginBottom: '2px' }}>
          Directed signals
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-clay)', fontStyle: 'italic', marginBottom: 'var(--space-sm)' }}>
          Known targets
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-stone)', marginBottom: 'var(--space-md)' }}>
          Signals already being watched, tracked, or intentionally examined.
        </div>
        {directedSignals.map(signal => (
          <div key={signal.id} className="signal-card">
            <div className="signal-label">
              {signal.label}
              <span className="signal-tag signal-tag-directed">directed</span>
            </div>
            <div className="signal-note">{signal.note}</div>
          </div>
        ))}
      </div>

      {/* Undirected signal group — DRJ-authored explanatory copy */}
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-parchment)', marginBottom: '2px' }}>
          Undirected signals
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-clay)', fontStyle: 'italic', marginBottom: 'var(--space-sm)' }}>
          The unseen
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-stone)', marginBottom: 'var(--space-md)' }}>
          Signals outside the current field of attention — weak, adjacent, or unexpected patterns that may indicate something forming before it is widely recognized.
        </div>
        {undirectedSignals.map(signal => (
          <div key={signal.id} className="signal-card">
            <div className="signal-label">
              {signal.label}
              <span className="signal-tag signal-tag-emerging">emerging</span>
            </div>
            <div className="signal-note">{signal.note}</div>
          </div>
        ))}
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-clay)', fontStyle: 'italic', marginTop: 'var(--space-md)' }}>
          The strongest discoveries surface from signals nobody was asked to watch.
        </div>
      </div>

      {/* Candidate beliefs derived from signals */}
      <div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-clay)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-sm)' }}>
          Candidate Beliefs Formed
        </div>
        {allBeliefs.map(belief => (
          <div key={belief.id} className="belief-card">
            <div className="belief-statement">"{belief.statement}"</div>
            <div className="belief-derivation">
              Derived from signals: {belief.derivedFrom.join(', ')}
            </div>
          </div>
        ))}
      </div>

      {/* SCOUT integration slot — placeholder */}
      <div style={{
        marginTop: 'var(--space-lg)',
        padding: 'var(--space-md)',
        border: '1px dashed var(--surface-border)',
        borderRadius: '4px',
      }}>
        <div className="integration-slot-cap">SCOUT — placeholder</div>
        <div className="integration-slot-desc">
          Future SCOUT integration will detect and cluster external signals automatically.
          Current signals are static demonstration data.
        </div>
      </div>
    </div>
  );
}
