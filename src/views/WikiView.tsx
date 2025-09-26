import BaseCard from '@/components/base/BaseCard';
import VideoPlaceholder from '@/components/common/VideoPlaceholder';

const WikiView = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="w-full lg:w-3/4">
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="궁금한 단어를 검색하세요 (예: 안녕하세요)"
            className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <BaseCard>
          <h2 className="text-3xl font-bold text-text-primary border-b border-border pb-4 mb-4">안녕하세요</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <VideoPlaceholder />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-text-secondary">
                '안녕하세요'는 한국어의 가장 기본적인 인사말입니다. 만났을 때나 헤어질 때 모두 사용할 수 있으며, 상대방의 안녕과 평안을 바라는 의미를 담고 있습니다.
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none mt-8">
            <h3 id="section-1">1. 어원</h3>
            <p>
              '안녕하다'는 '아무 탈 없이 편안하다'는 의미의 형용사입니다. 여기에 '-시-'라는 주체 높임 선어말 어미와 '-어요'라는 어미가 결합하여 존댓말이 되었습니다.
            </p>
            <h3 id="section-2">2. 수어 표현</h3>
            <p>
              한국수어(KSL)에서 '안녕하세요'는 오른손을 펴서 왼쪽 어깨에서 오른쪽 허리 쪽으로 대각선으로 내리며 고개를 살짝 숙이는 동작으로 표현합니다. 이는 '평안하다'는 의미를 나타냅니다.
            </p>
            <h3 id="section-3">3. 다른 나라의 표현</h3>
            <ul>
              <li>영어: Hello</li>
              <li>일본어: こんにちは (곤니치와)</li>
              <li>중국어: 你好 (니하오)</li>
            </ul>
          </div>
        </BaseCard>
      </div>

      {/* Table of Contents */}
      <aside className="w-full lg:w-1/4">
        <BaseCard>
          <h3 className="text-lg font-bold mb-4">목차</h3>
          <ul className="space-y-2">
            <li><a href="#section-1" className="text-primary hover:underline">1. 어원</a></li>
            <li><a href="#section-2" className="text-primary hover:underline">2. 수어 표현</a></li>
            <li><a href="#section-3" className="text-primary hover:underline">3. 다른 나라의 표현</a></li>
          </ul>
        </BaseCard>
      </aside>
    </div>
  );
};

export default WikiView;
