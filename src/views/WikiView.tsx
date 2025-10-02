import React from 'react';
import { Link } from 'react-router-dom';
import BaseCard from '@/components/base/BaseCard';

const WikiView: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary">SignWiki 위키</h1>
        <p className="text-lg text-text-secondary mt-2">
          지식을 나누고 함께 만들어가는 수어 위키입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Card 1: Content Subtitles */}
        <Link to="/wiki/content-subtitles">
          <BaseCard className="hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 h-full">
            <h2 className="text-2xl font-bold text-primary mb-3">컨텐츠 수어 자막</h2>
            <p className="text-text-secondary">
              드라마, 영화, 뮤직비디오 등 다양한 미디어의 자막을 수어로 번역하고 토론합니다.
            </p>
          </BaseCard>
        </Link>

        {/* Card 2: Scripture Subtitles */}
        <Link to="/wiki/scripture-subtitles">
          <BaseCard className="hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 h-full">
            <h2 className="text-2xl font-bold text-primary mb-3">종교 경전 수어 자막</h2>
            <p className="text-text-secondary">
              종교 경전의 구절들을 수어로 번역하고, 의미에 대해 함께 토론합니다.
            </p>
          </BaseCard>
        </Link>

        {/* Card 3: Word Database */}
        <Link to="/wiki/word-database">
          <BaseCard className="hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 h-full">
            <h2 className="text-2xl font-bold text-primary mb-3">단어 데이터베이스</h2>
            <p className="text-text-secondary">
              개별 단어의 수어 표현을 등록하고, 다양한 표현법에 대해 의견을 나눕니다.
            </p>
          </BaseCard>
        </Link>
      </div>
    </div>
  );
};

export default WikiView;