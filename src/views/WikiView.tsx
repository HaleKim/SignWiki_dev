import BaseCard from '@/components/base/BaseCard';
import VideoPlaceholder from '@/components/common/VideoPlaceholder';
import WebcamPlaceholder from '@/components/common/WebcamPlaceholder';
import BaseButton from '@/components/base/BaseButton';

const transcript = "안녕하세요 반갑습니다. 이 영상은 SignWiki의 자막 위키 기능을 설명하기 위한 예시입니다. 각 단어는 데이터베이스와 연결되어 있으며, 클릭하여 수어 표현을 확인하고 수정할 수 있습니다.".split(" ");

const WikiView = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="w-full lg:w-3/4 space-y-6">
        {/* Search */}
        <input 
          type="text" 
          placeholder="영상 URL을 입력하거나, 궁금한 단어를 검색하세요"
          className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Video & Transcript */}
        <BaseCard>
          <h2 className="text-2xl font-bold text-text-primary mb-4">영상 제목: SignWiki 기능 소개</h2>
          <VideoPlaceholder />
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">자막 스크립트 (단어를 클릭하여 수어 보기)</h3>
            <div className="flex flex-wrap gap-2">
              {transcript.map((word, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-200 transition-colors text-sm font-semibold">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </BaseCard>

        {/* Word Definition & Sign Contribution */}
        <BaseCard>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">안녕하세요</h2>
              <p className="text-text-secondary mt-1">'안녕하세요'는 한국어의 가장 기본적인 인사말입니다.</p>
            </div>
            <BaseButton>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
              </svg>
              수어 수정 제안
            </BaseButton>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-text-primary mb-2">대표 수어 표현 (KSL)</h4>
              <VideoPlaceholder />
            </div>
            <div>
              <h4 className="font-bold text-text-primary mb-2">다른 수어 표현 (ASL)</h4>
              <VideoPlaceholder />
            </div>
          </div>
        </BaseCard>

        {/* Webcam Contribution */}
        <BaseCard>
          <h3 className="text-xl font-bold text-text-primary mb-4">새로운 수어 표현 등록하기 (웹캠)</h3>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <WebcamPlaceholder />
            <div className="space-y-4">
              <p className="text-text-secondary">
                이 단어에 대한 새로운 수어 표현을 알고 계신가요? 웹캠을 사용해 직접 수어를 녹화하고 업로드하여 위키에 기여할 수 있습니다.
              </p>
              <div className="flex gap-2">
                <BaseButton className="w-full">녹화 시작</BaseButton>
                <BaseButton variant="secondary" className="w-full">업로드</BaseButton>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>

      {/* Table of Contents */}
      <aside className="w-full lg:w-1/4">
        <div className="sticky top-24">
          <BaseCard>
            <h3 className="text-lg font-bold mb-4">'안녕하세요' 위키 목차</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#section-1" className="text-text-secondary hover:text-primary hover:underline">1. 기본 의미</a></li>
              <li><a href="#section-2" className="text-text-secondary hover:text-primary hover:underline">2. 대표 수어 표현 (KSL)</a></li>
              <li><a href="#section-3" className="text-text-secondary hover:text-primary hover:underline">3. 다른 수어 표현 (ASL)</a></li>
              <li><a href="#section-4" className="text-text-secondary hover:text-primary hover:underline">4. 관련 단어</a></li>
            </ul>
          </BaseCard>
        </div>
      </aside>
    </div>
  );
};

export default WikiView;