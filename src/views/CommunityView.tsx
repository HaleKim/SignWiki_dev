import { useState } from 'react';
import BaseCard from '@/components/base/BaseCard';
import BaseButton from '@/components/base/BaseButton';

const posts = [
  { id: 1, title: '디지털 금융 교육 콘텐츠 정말 유용하네요!', author: '김수화', createdAt: '2시간 전', likes: 12, comments: 3, hasVideo: false },
  { id: 2, title: '혹시 이 수어 표현 아시는 분 계신가요? (영상 질문)', author: '박지연', createdAt: '1일 전', likes: 25, comments: 8, hasVideo: true },
  { id: 3, title: '가족 참여 프로그램 후기 남깁니다.', author: '이민준', createdAt: '3일 전', likes: 8, comments: 1, hasVideo: false },
];

const CommunityView = () => {
  const [activeTab, setActiveTab] = useState('freeboard');

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-text-primary">커뮤니티</h2>
        <BaseButton>새 글 작성</BaseButton>
      </div>

      <div className="flex border-b border-border mb-6">
        <button 
          className={`py-2 px-4 font-semibold ${activeTab === 'freeboard'? 'text-primary border-b-2 border-primary' : 'text-text-secondary'}`}
          onClick={() => setActiveTab('freeboard')}
        >
          자유게시판
        </button>
        <button 
          className={`py-2 px-4 font-semibold ${activeTab === 'qna'? 'text-primary border-b-2 border-primary' : 'text-text-secondary'}`}
          onClick={() => setActiveTab('qna')}
        >
          Q&A
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <BaseCard key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-text-primary">{post.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{post.author} · {post.createdAt}</p>
              </div>
              <div className="text-sm text-text-secondary flex items-center gap-4">
                <span>공감 {post.likes}</span>
                <span>댓글 {post.comments}</span>
              </div>
            </div>
            {post.hasVideo && (
              <div className="mt-2 text-primary flex items-center gap-1 text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.188v3.624a1 1 0 001.555.832l3.197-1.812a1 1 0 000-1.664l-3.197-1.812z" clipRule="evenodd" /></svg>
                수어 영상 포함
              </div>
            )}
          </BaseCard>
        ))}
      </div>
    </div>
  );
};

export default CommunityView;
