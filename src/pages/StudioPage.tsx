import { useParams, Navigate, Link } from 'react-router-dom';
import { useState, useCallback, useRef, useEffect } from 'react';
import { getStudioById } from '../domain/studio';
import { getAllBriefs } from '../domain/brief';
import { ShapeRuntimePanel } from '../components/studio/ShapeRuntimePanel';
import { RitualOverlay } from '../components/motion/RitualOverlay';

export function StudioPage() {
  const { studioId } = useParams<{ studioId: string }>();
  const studio = studioId ? getStudioById(studioId) : undefined;
  const prevStudioRef = useRef(studioId);
  const [showRitual, setShowRitual] = useState(true);

  useEffect(() => {
    if (studioId !== prevStudioRef.current) {
      setShowRitual(true);
      prevStudioRef.current = studioId;
    }
  }, [studioId]);

  const handleRitualComplete = useCallback(() => setShowRitual(false), []);

  if (!studio) return <Navigate to="/studios" replace />;

  const briefs = getAllBriefs();
  const isObservatory = studio.id === 'observatory';

  return (
    <>
      {showRitual && (
        <RitualOverlay studioName={studio.name} onComplete={handleRitualComplete} />
      )}

      <div className="studio-workspace">
        {/* Hero — literal Studio environment */}
        <div className="studio-hero" style={{ '--hero-accent': studio.accent.primary } as React.CSSProperties}>
          {studio.visual && (
            <img
              src={studio.visual.environmentImage}
              alt={studio.visual.alt}
              className="studio-hero-img"
              style={{ objectPosition: studio.visual.heroObjectPosition || 'center center' }}
            />
          )}
          <div className="studio-hero-overlay" />
          <div className="studio-hero-content">
            <div className="studio-hero-verb" style={{ color: studio.accent.primary }}>
              {studio.verb}
            </div>
            <h1 className="studio-hero-title">{studio.name}</h1>
            <p className="studio-hero-tagline">{studio.tagline}</p>
            {studio.maturity === 'structural' && (
              <span style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-pending)',
                fontStyle: 'italic',
                marginTop: 'var(--space-sm)',
                display: 'block',
              }}>
                Structural maturity — intentionally maturing
              </span>
            )}
          </div>
        </div>

        {/* Workflow Rail */}
        <div className="workflow-rail">
          {studio.workflow.steps.map((step) => (
            <div key={step.id} className="workflow-step">
              <div className="workflow-step-label" style={{ color: studio.accent.primary }}>
                {step.label}
              </div>
              <div className="workflow-step-caption">{step.caption}</div>
            </div>
          ))}
        </div>

        {/* SHAPE/SCOUT Panel — Observatory only */}
        {isObservatory && <ShapeRuntimePanel briefs={briefs} />}

        {/* Workspace Panels */}
        <div className="workspace-panels">
          {studio.panels.map(panel => (
            <div key={panel.id} className="workspace-panel">
              <h3 className="workspace-panel-title">{panel.title}</h3>
              {panel.kind === 'health-gauge' && (
                <div className="panel-gauge-track">
                  <div
                    className="panel-gauge-fill"
                    style={{ width: '65%', background: studio.accent.primary }}
                  />
                </div>
              )}
              {panel.kind === 'recent-briefs' && briefs.map(b => (
                <Link
                  key={b.id}
                  to={`/briefs/${b.id}`}
                  style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--color-stone)', padding: '4px 0' }}
                >
                  {b.title.split('—')[0].trim()} — {b.currentStage}
                </Link>
              ))}
              {(panel.kind === 'insights' || panel.kind === 'visualization') && (
                <div className="panel-placeholder">
                  Static demo — {panel.dataRef || 'placeholder'}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Insight Rail */}
        <div className="right-rail">
          <div className="right-rail-label">Studio at a Glance</div>
          {studio.metrics.map(m => (
            <div key={m.id} className="metric-item">
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
              {m.delta && <span className="metric-delta">{m.delta}</span>}
            </div>
          ))}

          <div style={{ marginTop: 'auto' }}>
            <div className="right-rail-label" style={{ marginBottom: 'var(--space-sm)' }}>
              Integration Slots
            </div>
            {studio.integrationSlots.map(slot => (
              <div key={slot.id} className="slot-item">
                <div className="slot-label">{slot.label}</div>
                <div className="slot-status">placeholder — {slot.capability}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Principle Rail — shared locked rail per C-11 / D-2 ruling */}
        <div className="bottom-rail">
          <span>One Platform</span>
          <span>·</span>
          <span>Human in Command</span>
          <span>·</span>
          <span>Confidence Before Commitment</span>
          <span>·</span>
          <span>Evidence of Care</span>
          <span>·</span>
          <span>Transform Uncertainty</span>
        </div>
      </div>
    </>
  );
}
