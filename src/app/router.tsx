import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '../components/shell/AppShell';
import { LandingPage } from '../pages/LandingPage';
import { ChooseStudioPage } from '../pages/ChooseStudioPage';
import { StudioPage } from '../pages/StudioPage';
import { BriefPage } from '../pages/BriefPage';
import { ArchitecturePage } from '../pages/ArchitecturePage';
import { SettingsPage } from '../pages/SettingsPage';
import { HelpPage } from '../pages/HelpPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  {
    element: <AppShell />,
    children: [
      { path: '/studios', element: <ChooseStudioPage /> },
      { path: '/studios/:studioId', element: <StudioPage /> },
      { path: '/briefs/:briefId', element: <BriefPage /> },
      { path: '/architecture', element: <ArchitecturePage /> },
      { path: '/settings', element: <SettingsPage /> },
      { path: '/help', element: <HelpPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
], { basename: import.meta.env.BASE_URL.replace(/\/$/, '') });
