import { Outlet } from 'react-router-dom';
import { SidebarNav } from './SidebarNav';
import { TopActionBar } from './TopActionBar';

export function AppShell() {
  return (
    <div className="app-shell">
      <SidebarNav />
      <div className="app-main">
        <TopActionBar />
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
