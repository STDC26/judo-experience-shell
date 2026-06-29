import { Link } from 'react-router-dom';
import { getAllStudios } from '../domain/studio';

export function ChooseStudioPage() {
  const studios = getAllStudios();

  return (
    <div className="choose-studio-page">
      {/* Header */}
      <div className="choose-header">
        <h1 className="choose-title">CHOOSE YOUR STUDIO</h1>
        <p className="choose-subhead">Different spaces for different kinds of clarity.</p>
        <p className="choose-body">
          Every Studio uses the same intelligence. The difference is in how we help you think.
        </p>
        <p className="choose-routing">Start with the kind of strategic work in front of you.</p>
      </div>

      {/* Five immersive cards */}
      <div className="choose-cards">
        {studios.map(studio => (
          <div
            key={studio.id}
            className="choose-card"
            data-studio={studio.id}
            style={{
              '--card-accent': studio.accent.primary,
              '--card-soft': studio.accent.soft,
            } as React.CSSProperties}
          >
            {/* Image area */}
            <div className="choose-card-image" />

            {/* Content */}
            <div className="choose-card-content">
              {/* Recommended start tag */}
              {studio.recommendedStart && (
                <span className="choose-card-tag">{studio.recommendedStartLabel}</span>
              )}

              <h2 className="choose-card-name">{studio.name}</h2>
              <p className="choose-card-purpose">{studio.purpose}</p>

              <div className="choose-card-divider" />

              <p className="choose-card-desc">{studio.tagline}</p>

              {/* Use cases */}
              {studio.useCases && (
                <div className="choose-card-section">
                  <span className="choose-card-section-label">Use this when</span>
                  <ul className="choose-card-usecases">
                    {studio.useCases.map((uc, i) => (
                      <li key={i}>{uc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Example Briefs */}
              {studio.exampleBriefs && (
                <div className="choose-card-section">
                  <span className="choose-card-section-label">Example Briefs</span>
                  <div className="choose-card-briefs">
                    {studio.exampleBriefs.map((eb, i) => (
                      <span key={i} className="choose-card-brief">{eb}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Loop Preview */}
              {studio.loopPreview && (
                <div className="choose-card-loop">
                  {studio.loopPreview}
                </div>
              )}

              {/* Structural note */}
              {studio.structuralNote && (
                <span className="choose-card-structural">{studio.structuralNote}</span>
              )}
            </div>

            {/* CTA */}
            <Link to={`/studios/${studio.id}`} className="choose-card-cta">
              Enter {studio.name} →
            </Link>
          </div>
        ))}
      </div>

      {/* Shared locked principle rail */}
      <div className="choose-principle-rail">
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
  );
}
