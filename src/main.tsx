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
import WikiView from './views/WikiView.tsx';
import ContentSubtitleView from './views/wiki/ContentSubtitleView.tsx';
import ScriptureSubtitleView from './views/wiki/ScriptureSubtitleView.tsx';
import WordDatabaseView from './views/wiki/WordDatabaseView.tsx';
import ContentDetailView from './views/wiki/ContentDetailView.tsx';

import ScriptureVerseDetailView from './views/wiki/ScriptureVerseDetailView.tsx';

import WordDatabaseDetailView from './views/wiki/WordDatabaseDetailView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomeView /> },
      { path: 'wiki', element: <WikiView /> },
      { path: 'wiki/content-subtitles', element: <ContentSubtitleView /> },
      { path: 'wiki/scripture-subtitles', element: <ScriptureSubtitleView /> },
      { path: 'wiki/word-database', element: <WordDatabaseView /> },
      { path: 'wiki/content/:id', element: <ContentDetailView /> },
      { path: 'wiki/scripture/:bookId/:chapterNum/:verseNum', element: <ScriptureVerseDetailView /> },
      { path: 'wiki/word/:wordId', element: <WordDatabaseDetailView /> },
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