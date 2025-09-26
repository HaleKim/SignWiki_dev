import BaseCard from '@/components/base/BaseCard';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-text-primary mb-2">안녕하세요!</h2>
      <p className="text-lg text-text-secondary mb-8">수어 정보 플랫폼에 오신 것을 환영합니다.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/notifications">
          <BaseCard className="hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">맞춤 정보 알림</h3>
            <p className="text-text-secondary">관심 분야의 복지, 일자리, 정책 정보를 수어 영상과 함께 받아보세요.</p>
          </BaseCard>
        </Link>
        <Link to="/community">
          <BaseCard className="hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">커뮤니티</h3>
            <p className="text-text-secondary">자유롭게 소통하고 정보를 나누며 서로에게 힘이 되어주는 공간입니다.</p>
          </BaseCard>
        </Link>
        <Link to="/education">
          <BaseCard className="hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">디지털 자립 교육</h3>
            <p className="text-text-secondary">디지털 세상을 살아가는 데 필요한 지식을 수어 해설과 함께 배워보세요.</p>
          </BaseCard>
        </Link>
        <Link to="/family">
          <BaseCard className="hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">가족 참여 공간</h3>
            <p className="text-text-secondary">가족과 함께하는 즐거운 활동과 정서적 안정을 위한 콘텐츠를 만나보세요.</p>
          </BaseCard>
        </Link>
      </div>
    </div>
  );
};

export default HomeView;
