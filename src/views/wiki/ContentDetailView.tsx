import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contentData } from '@/data/contentData';
import { discussionData } from '@/data/discussionData';
import type { DiscussionItem, DiscussionComment } from '@/data/discussionData';
import { subtitleData } from '@/data/subtitleData';
import type { SubtitleEntry } from '@/data/subtitleData';
import DiscussionSection from '../../components/common/DiscussionSection';

const ContentDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contentItem = contentData.find(item => item.id === Number(id));

  const [allDiscussions, setAllDiscussions] = useState<DiscussionItem[]>(discussionData);
  const [isEditingSubtitles, setIsEditingSubtitles] = useState(false);
  const [currentSubtitles, setCurrentSubtitles] = useState<SubtitleEntry[]>([]);
  const [editedSubtitles, setEditedSubtitles] = useState<SubtitleEntry[]>([]);

  useEffect(() => {
    const filteredSubtitles = subtitleData.filter(sub => sub.contentItemId === Number(id));
    setCurrentSubtitles(filteredSubtitles);
    setEditedSubtitles(filteredSubtitles);
  }, [id]);

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
        const updatedDiscussions = [...prevDiscussions];
        const updatedComments = [...updatedDiscussions[existingDiscussionIndex].comments, newComment];
        updatedDiscussions[existingDiscussionIndex] = {
          ...updatedDiscussions[existingDiscussionIndex],
          comments: updatedComments,
        };
        return updatedDiscussions;
      } else {
        const newDiscussionItem: DiscussionItem = {
          id: Date.now() + 1, // Another simple unique ID
          contentItemId: Number(id),
          comments: [newComment],
        };
        return [...prevDiscussions, newDiscussionItem];
      }
    });
  };

  const handleDeleteComment = (commentIdToDelete: number) => {
    setAllDiscussions(prevDiscussions => {
      const updatedDiscussions = prevDiscussions.map(disc => {
        if (disc.contentItemId === Number(id)) {
          const removeComment = (comments: DiscussionComment[]): DiscussionComment[] => {
            return comments.filter(comment => {
              if (comment.id === commentIdToDelete) {
                return false;
              }
              if (comment.replies && comment.replies.length > 0) {
                return {
                  ...comment,
                  replies: removeComment(comment.replies),
                };
              }
              return true;
            });
          };

          return {
            ...disc,
            comments: removeComment(disc.comments),
          };
        }
        return disc;
      });
      return updatedDiscussions;
    });
  };

  const handleAddReply = (parentId: number, text: string) => {
    const newReply: DiscussionComment = {
      id: Date.now(),
      author: '익명 사용자',
      timestamp: new Date().toISOString(),
      text: text,
    };

    setAllDiscussions(prevDiscussions => {
      const updatedDiscussions = prevDiscussions.map(disc => {
        if (disc.contentItemId === Number(id)) {
          const addReplyToComment = (comments: DiscussionComment[]): DiscussionComment[] => {
            return comments.map(comment => {
              if (comment.id === parentId) {
                return {
                  ...comment,
                  replies: comment.replies ? [...comment.replies, newReply] : [newReply],
                };
              }
              if (comment.replies && comment.replies.length > 0) {
                return {
                  ...comment,
                  replies: addReplyToComment(comment.replies),
                };
              }
              return comment;
            });
          };

          return {
            ...disc,
            comments: addReplyToComment(disc.comments),
          };
        }
        return disc;
      });
      return updatedDiscussions;
    });
  };

  const handleSubtitleChange = (index: number, newText: string) => {
    setEditedSubtitles(prev => {
      const newSubs = [...prev];
      newSubs[index] = { ...newSubs[index], text: newText };
      return newSubs;
    });
  };

  const handleSaveSubtitles = () => {
    // In a real app, this would send updated subtitles to a backend
    setCurrentSubtitles(editedSubtitles);
    setIsEditingSubtitles(false);
    alert('자막이 저장되었습니다! (실제 데이터는 업데이트되지 않음)');
  };

  const handleCancelEdit = () => {
    setEditedSubtitles(currentSubtitles);
    setIsEditingSubtitles(false);
  };

  if (!contentItem) {
    return <div>컨텐츠를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-text-primary">{contentItem.title}</h1>
      <p className="mt-2 text-text-secondary">카테고리: {contentItem.category}</p>
      
      {/* Video Player */}
      <div className="mt-8 mb-8 bg-black rounded-lg overflow-hidden relative aspect-video">
        <video controls src="https://www.w3schools.com/html/mov_bbb.mp4" className="w-full h-full absolute inset-0" poster="https://via.placeholder.com/640x360.png?text=Video+Placeholder">
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Subtitle Editor/Viewer */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-text-primary">자막</h2>
          {!isEditingSubtitles ? (
            <button
              onClick={() => setIsEditingSubtitles(true)}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary-hover transition-colors font-semibold"
            >
              편집
            </button>
          ) : (
            <div className="space-x-2">
              <button
                onClick={handleSaveSubtitles}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors font-semibold"
              >
                저장
              </button>
              <button
                onClick={handleCancelEdit}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors font-semibold"
              >
                취소
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {currentSubtitles.length > 0 ? (
            (isEditingSubtitles ? editedSubtitles : currentSubtitles).map((sub, index) => (
              <div key={sub.id} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                <span className="text-sm text-text-secondary w-20 flex-shrink-0">{sub.startTime.toFixed(1)}s - {sub.endTime.toFixed(1)}s</span>
                {isEditingSubtitles ? (
                  <textarea
                    className="flex-1 p-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y text-sm"
                    value={sub.text}
                    onChange={(e) => handleSubtitleChange(index, e.target.value)}
                  />
                ) : (
                  <p className="flex-1 text-text-primary text-sm">{sub.text}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-text-secondary text-center py-8">이 컨텐츠에 대한 자막이 없습니다.</p>
          )}
        </div>
      </div>

      {/* Discussion Section */}
      <DiscussionSection
        discussionItem={currentDiscussion}
        onAddComment={handleAddComment}
        onDeleteComment={handleDeleteComment}
        onAddReply={handleAddReply}
      />
    </div>
  );
};

export default ContentDetailView;
