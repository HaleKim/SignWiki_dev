import BaseCard from '@/components/base/BaseCard';
import InfoCard from '@/components/common/InfoCard';
import VideoPlaceholder from '@/components/common/VideoPlaceholder';

const healingContents = [
  { title: '수어 명상 영상', description: '차분한 안내에 따라 마음의 평화를 찾는 시간을 가져보세요.' },
  { title: '자연의 소리', description: '아름다운 자연의 풍경과 소리를 통해 편안함을 느껴보세요.' },
  { title: '힐링 음악', description: '마음을 안정시키는 연주곡 모음입니다.' },
];

const FamilyView = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-text-primary mb-2">가족 참여 공간</h2>
      <p className="text-lg text-text-secondary mb-8">가족과 함께 소중한 시간을 만들고 마음의 안정을 찾아보세요.</p>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-text-primary mb-4">함께하는 체험 프로그램</h3>
        <div className="space-y-6">
          <InfoCard
            category="문화 행사"
            title="가족과 함께하는 수어 연극 관람"
            summary="온 가족이 함께 즐길 수 있는 수어 연극 '소리 없는 아우성' 관람 신청을 받습니다. 선착순 마감이니 서두르세요!"
          />
           <InfoCard
            category="체험 활동"
            title="주말 농장 텃밭 가꾸기"
            summary="자연 속에서 흙을 만지며 스트레스를 해소하고, 직접 기른 채소를 수확하는 기쁨을 느껴보세요."
          />
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-text-primary mb-4">마음 돌봄 콘텐츠</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healingContents.map((content) => (
            <BaseCard key={content.title}>
              <VideoPlaceholder />
              <h4 className="text-lg font-bold mt-4">{content.title}</h4>
              <p className="text-text-secondary text-sm mt-1">{content.description}</p>
            </BaseCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FamilyView;
