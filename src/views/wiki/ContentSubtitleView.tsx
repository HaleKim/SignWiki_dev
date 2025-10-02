import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { contentData } from '@/data/contentData';
import type { ContentItem } from '@/data/contentData';
import BaseCard from '@/components/base/BaseCard';

const ContentSubtitleView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContent = useMemo(() => {
    if (!searchTerm) {
      return contentData;
    }
    return contentData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary">컨텐츠 수어 자막</h1>
        <p className="mt-2 text-text-secondary">
          드라마, 영화, 뮤직비디오 등 다양한 컨텐츠의 수어 자막을 찾아보고 함께 만들어가세요.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="궁금한 컨텐츠 제목을 검색하세요... (예: 승리호)"
          className="w-full p-4 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map(item => (
          <Link to={`/wiki/content/${item.id}`} key={item.id}>
            <BaseCard className="h-full group overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="relative">
                <img 
                  src={item.thumbnailUrl} 
                  alt={`${item.title} 썸네일`} 
                  className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-text-primary truncate group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mt-2">
                  수어 자막 {item.subtitleCount}개 | 토론 {item.discussionCount}개
                </p>
              </div>
            </BaseCard>
          </Link>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary">'{searchTerm}'에 대한 검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default ContentSubtitleView;
