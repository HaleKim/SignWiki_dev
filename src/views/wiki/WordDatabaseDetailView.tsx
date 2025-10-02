import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { wordData } from '@/data/wordData';
import { discussionData } from '@/data/discussionData';
import type { WordEntry, DiscussionItem, DiscussionComment } from '@/types';
import DiscussionSection from '../../components/common/DiscussionSection';

const WordDatabaseDetailView: React.FC = () => {
  const { wordId } = useParams<{ wordId: string }>();

  const [wordEntry, setWordEntry] = useState<WordEntry | undefined>(undefined);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [editedDescription, setEditedDescription] = useState('');

  const [allDiscussions, setAllDiscussions] = useState<DiscussionItem[]>(discussionData);

  useEffect(() => {
    const foundEntry = wordData.find(entry => entry.id === Number(wordId));
    setWordEntry(foundEntry);
    setEditedDescription(foundEntry?.description || '');
  }, [wordId]);

  const currentDiscussion = useMemo(() => {
    // For simplicity, linking discussion to a unique wordId
    const discussionIdentifier = `word-${wordId}`;
    return allDiscussions.find(disc => disc.id === discussionIdentifier); // Assuming discussionItem.id can be string
  }, [allDiscussions, wordId]);

  // Discussion Handlers (similar to ContentDetailView)
  const handleAddComment = (text: string) => {
    const newComment: DiscussionComment = {
      id: Date.now(),
      author: '익명 사용자',
      timestamp: new Date().toISOString(),
      text: text,
    };

    setAllDiscussions(prevDiscussions => {
      const discussionIdentifier = `word-${wordId}`;
      const existingDiscussionIndex = prevDiscussions.findIndex(disc => disc.id === discussionIdentifier);

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
          id: discussionIdentifier, // Use identifier as ID
          contentItemId: -1, // Not applicable for word discussion
          comments: [newComment],
        };
        return [...prevDiscussions, newDiscussionItem];
      }
    });
  };

  const handleDeleteComment = (commentIdToDelete: number) => {
    setAllDiscussions(prevDiscussions => {
      const updatedDiscussions = prevDiscussions.map(disc => {
        const discussionIdentifier = `word-${wordId}`;
        if (disc.id === discussionIdentifier) {
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
      const discussionIdentifier = `word-${wordId}`;
      const existingDiscussionIndex = prevDiscussions.findIndex(disc => disc.id === discussionIdentifier);

      if (existingDiscussionIndex !== -1) {
        const updatedDiscussions = [...prevDiscussions];
        const updatedComments = [...updatedDiscussions[existingDiscussionIndex].comments, newReply];
        updatedDiscussions[existingDiscussionIndex] = {
          ...updatedDiscussions[existingDiscussionIndex],
          comments: updatedComments,
        };
        return updatedDiscussions;
      } else {
        const newDiscussionItem: DiscussionItem = {
          id: discussionIdentifier, // Use identifier as ID
          contentItemId: -1, // Not applicable for word discussion
          comments: [newComment],
        };
        return [...prevDiscussions, newDiscussionItem];
      }
    });
  };

  // Editor Handlers
  const handleSaveDescription = () => {
    // In a real app, this would send updated description to a backend
    if (wordEntry) {
      setWordEntry({ ...wordEntry, description: editedDescription });
      // Also update wordData if it were mutable
    }
    setIsEditingDescription(false);
    alert('설명이 저장되었습니다! (실제 데이터는 업데이트되지 않음)');
  };

  const handleCancelEdit = () => {
    setEditedDescription(wordEntry?.description || '');
    setIsEditingDescription(false);
  };

  if (!wordEntry) {
    return <div>단어를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-text-primary">{wordEntry.word}</h1>
      <div className="flex flex-wrap gap-2 mt-2">
        {wordEntry.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      {/* Sign Language Video Player */}
      <div className="mt-8 mb-8 bg-black rounded-lg overflow-hidden relative aspect-video">
        <video controls src={wordEntry.signVideoUrl} className="w-full h-full absolute inset-0" poster="https://via.placeholder.com/640x360.png?text=Sign+Language+Video">
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Description Editor/Viewer */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-text-primary">설명</h2>
          {!isEditingDescription ? (
            <button
              onClick={() => setIsEditingDescription(true)}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary-hover transition-colors font-semibold"
            >
              편집
            </button>
          ) : (
            <div className="space-x-2">
              <button
                onClick={handleSaveDescription}
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
          {isEditingDescription ? (
            <textarea
              className="w-full p-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y min-h-[120px] text-sm"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          ) : (
            <p className="text-text-primary text-lg p-3 bg-surface rounded-lg">{wordEntry.description}</p>
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

export default WordDatabaseDetailView;
