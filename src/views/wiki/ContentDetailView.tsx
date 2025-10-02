import React from 'react';
import { useParams } from 'react-router-dom';
import { contentData } from '@/data/contentData';

const ContentDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contentItem = contentData.find(item => item.id === Number(id));

  if (!contentItem) {
    return <div>컨텐츠를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-text-primary">{contentItem.title}</h1>
      <p className="mt-2 text-text-secondary">카테고리: {contentItem.category}</p>
      
      <div className="mt-8">
        {/* TODO: Implement video player, subtitle editor, and discussion section */}
        <p className="text-text-secondary">이곳에 영상 플레이어, 자막 스크립트, 토론 섹션이 표시될 예정입니다.</p>
      </div>
    </div>
  );
};

export default ContentDetailView;
