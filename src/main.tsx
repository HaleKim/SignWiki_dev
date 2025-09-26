import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// 각 페이지 컴포넌트를 import 합니다 (아래에서 생성할 예정).
import HomeView from './views/HomeView.tsx';
import NotificationsView from './views/NotificationsView.tsx';
import CommunityView from './views/CommunityView.tsx';
import EducationView from './views/EducationView.tsx';
import FamilyView from './views/FamilyView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomeView /> },
      { path: 'notifications', element: <NotificationsView /> },
      { path: 'community', element: <CommunityView /> },
      { path: 'education', element: <EducationView /> },
      { path: 'family', element: <FamilyView /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);