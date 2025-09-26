import { NavLink, Outlet } from 'react-router-dom';

function App() {
  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `block py-2 px-4 rounded-lg text-text-secondary hover:bg-gray-100 transition-colors ${
      isActive? 'bg-primary text-white font-semibold hover:bg-primary' : ''
    }`;

  return (
    <div className="flex h-screen bg-background font-sans">
      <aside className="w-64 bg-surface border-r border-border p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-primary mb-8">수어 정보 플랫폼</h1>
        <nav className="space-y-2">
          <NavLink to="/" className={navLinkClass}>홈</NavLink>
          <NavLink to="/notifications" className={navLinkClass}>맞춤 정보</NavLink>
          <NavLink to="/community" className={navLinkClass}>커뮤니티</NavLink>
          <NavLink to="/education" className={navLinkClass}>디지털 자립 교육</NavLink>
          <NavLink to="/family" className={navLinkClass}>가족 참여</NavLink>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;