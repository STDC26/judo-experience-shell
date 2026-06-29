import { Link, useLocation } from 'react-router-dom';
import { getAllStudios } from '../../domain/studio';
import { getAllBriefs } from '../../domain/brief';

export function SidebarNav() {
  const location = useLocation();
  const studios = getAllStudios();
  const briefs = getAllBriefs();
  const activeStudioId = location.pathname.startsWith('/studios/')
    ? location.pathname.split('/')[2]
    : null;

  return (
    <aside className="sidebar-nav">
      <Link to="/" className="sidebar-logo">JUDO</Link>

      <nav className="sidebar-studio-list">
        <div className="sidebar-section-label">Studios</div>
        {studios.map(s => (
          <Link
            key={s.id}
            to={`/studios/${s.id}`}
            className={`sidebar-studio-link ${s.id === activeStudioId ? 'active' : ''}`}
            style={{
              '--studio-accent': s.accent.primary,
              '--studio-soft': s.accent.soft,
            } as React.CSSProperties}
          >
            <span className="sidebar-studio-dot" style={{ background: s.accent.primary }} />
            {s.name}
          </Link>
        ))}
      </nav>

      <div className="sidebar-briefs">
        <div className="sidebar-section-label">Recent Briefs</div>
        {briefs.map(b => (
          <Link key={b.id} to={`/briefs/${b.id}`} className="sidebar-brief-link">
            {b.title.split('—')[0].trim()}
            <span className="sidebar-brief-stage">{b.currentStage}</span>
          </Link>
        ))}
      </div>

      <div className="sidebar-footer">
        <Link to="/architecture" className="sidebar-util-link">Architecture</Link>
        <Link to="/settings" className="sidebar-util-link">Settings</Link>
        <Link to="/help" className="sidebar-util-link">Help</Link>
      </div>
    </aside>
  );
}
