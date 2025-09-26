import BaseCard from '@/components/base/BaseCard';
import BaseButton from '@/components/base/BaseButton';
import VideoPlaceholder from '@/components/common/VideoPlaceholder';

const educationCategories = [
  {
    name: '금융',
    courses: [
      { title: '모바일 뱅킹', description: '스마트폰으로 계좌이체, 잔액조회 등을 하는 방법을 배웁니다.' },
      { title: '신용카드 발급', description: '온라인으로 안전하게 신용카드를 신청하고 관리하는 방법을 알아봅니다.' },
    ],
  },
  {
    name: '기본 문서 작성',
    courses: [
      { title: '이메일 작성법', description: '상황에 맞는 이메일을 작성하고 파일을 첨부하는 방법을 배웁니다.' },
      { title: '정부24 민원서류 발급', description: '온라인으로 주민등록등본 등 필요한 서류를 발급받는 방법을 알아봅니다.' },
      { title: '영상 편집 기초', description: '간단한 컷 편집과 자막 넣기를 통해 나만의 영상을 만듭니다.' },
    ],
  },
];

const EducationView = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-text-primary mb-2">디지털 자립 교육</h2>
      <p className="text-lg text-text-secondary mb-8">필요한 디지털 역량을 차근차근 배워보세요.</p>

      <div className="space-y-8">
        {educationCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-2xl font-bold text-text-primary mb-4">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((course) => (
                <BaseCard key={course.title} className="flex flex-col">
                  <VideoPlaceholder />
                  <div className="mt-4 flex-1 flex flex-col">
                    <h4 className="text-lg font-bold">{course.title}</h4>
                    <p className="text-text-secondary text-sm mt-1 flex-1">{course.description}</p>
                    <div className="mt-4">
                      <BaseButton className="w-full">학습 시작</BaseButton>
                    </div>
                  </div>
                </BaseCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationView;
