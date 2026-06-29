export function TopActionBar() {
  return (
    <header className="top-action-bar">
      <div className="top-search">
        <input
          type="text"
          placeholder="Search briefs, signals, studios..."
          className="top-search-input"
          readOnly
        />
      </div>
      <div className="top-actions">
        <button className="top-action-btn" title="Notifications" aria-label="Notifications">
          <span className="top-icon">●</span>
        </button>
        <button className="top-action-btn" title="Activity" aria-label="Activity">
          <span className="top-icon">◆</span>
        </button>
        <button className="top-new-brief-btn">+ New Brief</button>
      </div>
    </header>
  );
}
