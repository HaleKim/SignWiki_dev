import InfoCard from '@/components/common/InfoCard';
import BaseButton from '@/components/base/BaseButton';

interface Notification {
  id: number;
  category: string;
  title: string;
  summary: string;
}

const notifications: Notification[] = [
    { id: 1, category: '복지', title: '청년 수어 통역 서비스 지원 확대', summary: '2025년부터 청년 농인 대상 통역 서비스 지원이 확대됩니다. 자세한 내용을 확인하세요.' },
    { id: 2, category: '일자리', title: 'IT 기업 수어 컨설턴트 채용 공고', summary: 'SignTech 기업에서 수어 사용자를 위한 서비스 개선을 위해 컨설턴트를 모집합니다.' },
];

const NotificationsView = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-text-primary">맞춤 정보</h2>
        <BaseButton variant="secondary">알림 설정</BaseButton>
      </div>
      <p className="text-text-secondary mb-8">설정하신 관심 주제에 맞는 최신 정보입니다.</p>

      <div className="space-y-6">
        {notifications.length > 0 ? (
          notifications.map((info) => (
            <InfoCard
              key={info.id}
              category={info.category}
              title={info.title}
              summary={info.summary}
            />
          ))
        ) : (
          <p className="text-text-secondary">새로운 맞춤 정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationsView;
