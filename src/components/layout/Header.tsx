import { NavLink } from 'react-router-dom';
import BaseButton from '@/components/base/BaseButton';

const Header = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `py-2 px-3 rounded-lg text-base font-semibold transition-colors ${
      isActive
        ? 'text-primary bg-blue-100'
        : 'text-text-secondary hover:text-text-primary'
    }`;

  return (
    <header className="bg-surface shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Main Nav */}
          <div className="flex items-center gap-8">
            <NavLink to="/" className="text-xl font-bold text-primary">
              SignWiki
            </NavLink>
            <nav className="hidden md:flex items-center gap-4">
              <NavLink to="/wiki" className={navLinkClass}>
                위키
              </NavLink>
              <NavLink to="/notifications" className={navLinkClass}>
                맞춤 정보
              </NavLink>
              <NavLink to="/community" className={navLinkClass}>
                커뮤니티
              </NavLink>
              <NavLink to="/education" className={navLinkClass}>
                디지털 교육
              </NavLink>
              <NavLink to="/family" className={navLinkClass}>
                가족 참여
              </NavLink>
            </nav>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <BaseButton variant="secondary">로그인</BaseButton>
            <BaseButton variant="primary">회원가입</BaseButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
