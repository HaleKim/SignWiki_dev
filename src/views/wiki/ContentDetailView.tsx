import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { contentData } from '@/data/contentData';
import { discussionData } from '@/data/discussionData';
import type { DiscussionItem, DiscussionComment } from '@/data/discussionData';
import DiscussionSection from '../../components/common/DiscussionSection';

const ContentDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contentItem = contentData.find(item => item.id === Number(id));

  // Use useState to manage the discussion data locally for dynamic updates
  const [allDiscussions, setAllDiscussions] = useState<DiscussionItem[]>(discussionData);

  const currentDiscussion = useMemo(() => {
    return allDiscussions.find(disc => disc.contentItemId === Number(id));
  }, [allDiscussions, id]);

  const handleAddComment = (text: string) => {
    const newComment: DiscussionComment = {
      id: Date.now(), // Simple unique ID
      author: '익명 사용자', // Placeholder author
      timestamp: new Date().toISOString(),
      text: text,
    };

    setAllDiscussions(prevDiscussions => {
      const existingDiscussionIndex = prevDiscussions.findIndex(disc => disc.contentItemId === Number(id));

      if (existingDiscussionIndex !== -1) {
        // If discussion for this content item already exists, add comment to it
        const updatedDiscussions = [...prevDiscussions];
        const updatedComments = [...updatedDiscussions[existingDiscussionIndex].comments, newComment];
        updatedDiscussions[existingDiscussionIndex] = {
          ...updatedDiscussions[existingDiscussionIndex],
          comments: updatedComments,
        };
        return updatedDiscussions;
      } else {
        // If no discussion exists for this content item, create a new one
        const newDiscussionItem: DiscussionItem = {
          id: Date.now() + 1, // Another simple unique ID
          contentItemId: Number(id),
          comments: [newComment],
        };
        return [...prevDiscussions, newDiscussionItem];
      }
    });
  };

  if (!contentItem) {
    return <div>컨텐츠를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-text-primary">{contentItem.title}</h1>
      <p className="mt-2 text-text-secondary">카테고리: {contentItem.category}</p>
      
      <div className="mt-8">
        {/* TODO: Implement video player, subtitle editor */}
        <p className="text-text-secondary">이곳에 영상 플레이어, 자막 스크립트 편집기가 표시될 예정입니다.</p>
      </div>

      {/* Discussion Section */}
      <DiscussionSection discussionItem={currentDiscussion} onAddComment={handleAddComment} />
    </div>
  );
};

export default ContentDetailView;
