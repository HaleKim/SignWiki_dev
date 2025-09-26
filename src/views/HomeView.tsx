import { Link } from 'react-router-dom';
import InfoCard from '@/components/common/InfoCard';
import BaseCard from '@/components/base/BaseCard';

const personalizedInfo = [
  { id: 1, category: '일자리', title: 'A기업 수어 디자이너 채용', summary: '혁신적인 디자인 팀에 합류하여 접근성 높은 제품을 만들어갈 디자이너를 찾습니다.' },
  { id: 2, category: '복지', title: '2025년 청년 주택 지원 확대', summary: '내년부터 청년 1인 가구에 대한 주택 지원 정책이 확대됩니다. 자격 요건을 확인하세요.' },
  { id: 3, category: '교육', title: '파이썬 기초 온라인 강좌 개설', summary: '프로그래밍을 처음 시작하는 분들을 위한 파이썬 기초 강좌가 수어 해설과 함께 제공됩니다.' },
];

const communityPosts = [
  { id: 1, title: '영상 자막 위키에 "안녕하세요" 수어 표현 추가했어요!', author: '김수어', likes: 15 },
  { id: 2, title: '혹시 "컴퓨터"라는 단어의 다른 수어 표현 아시는 분?', author: '박궁금', likes: 12 },
  { id: 3, title: '정부24에서 가족관계증명서 발급받는 법 (수어 영상 포함)', author: '이정보', likes: 10 },
  { id: 4, title: '다들 주말에 뭐하시나요? 같이 맛집 탐방 가요!', author: '최친목', likes: 8 },
  { id: 5, title: '수어로 코딩 배우기 스터디 그룹 인원 모집합니다.', author: '강개발', likes: 5 },
];

const HomeView = () => {
  return (
    <div className="space-y-12">
      {/* Personalized Info Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-text-primary">나를 위한 맞춤 정보</h2>
          <Link to="/notifications" className="text-primary font-semibold hover:underline">
            더보기
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalizedInfo.map((info) => (
            <InfoCard
              key={info.id}
              category={info.category}
              title={info.title}
              summary={info.summary}
            />
          ))}
        </div>
      </section>

      {/* Community Posts Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-text-primary">최신 커뮤니티 인기글</h2>
          <Link to="/community" className="text-primary font-semibold hover:underline">
            더보기
          </Link>
        </div>
        <BaseCard>
          <ul className="divide-y divide-border">
            {communityPosts.map((post) => (
              <li key={post.id} className="py-3 flex justify-between items-center">
                <span className="text-text-primary hover:underline cursor-pointer">{post.title}</span>
                <div className="flex items-center gap-4 text-sm text-text-secondary">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.562 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.865 3.018z" />
                    </svg>
                    {post.likes}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </BaseCard>
      </section>
    </div>
  );
};

export default HomeView;