import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { scriptureData } from '@/data/scriptureData';
import { scriptureVerseDetailData } from '@/data/scriptureVerseDetailData';
import { discussionData } from '@/data/discussionData';
import type { ScriptureBook, ScriptureVerseDetail, DiscussionItem, DiscussionComment } from '@/types';
import DiscussionSection from '../../components/common/DiscussionSection';

const ScriptureVerseDetailView: React.FC = () => {
  const { bookId, chapterNum, verseNum } = useParams<{ bookId: string; chapterNum: string; verseNum: string }>();

  const currentBook = scriptureData.find(book => book.id === Number(bookId));
  const originalVerseText = currentBook?.chapters
    ?.find(chap => chap.number === Number(chapterNum))
    ?.verses.find(v => v.number === Number(verseNum))?.text;

  const [verseDetail, setVerseDetail] = useState<ScriptureVerseDetail | undefined>(undefined);
  const [isEditingSignLanguageText, setIsEditingSignLanguageText] = useState(false);
  const [editedSignLanguageText, setEditedSignLanguageText] = useState('');

  const [allDiscussions, setAllDiscussions] = useState<DiscussionItem[]>(discussionData);

  useEffect(() => {
    const foundDetail = scriptureVerseDetailData.find(
      detail =>
        detail.bookId === Number(bookId) &&
        detail.chapterNum === Number(chapterNum) &&
        detail.verseNum === Number(verseNum)
    );
    setVerseDetail(foundDetail);
    setEditedSignLanguageText(foundDetail?.signLanguageText || '');
  }, [bookId, chapterNum, verseNum]);

  const currentDiscussion = useMemo(() => {
    // For simplicity, linking discussion to a unique combination of bookId, chapterNum, verseNum
    // In a real app, this might be a specific discussionId on the verseDetail object
    const discussionIdentifier = `${bookId}-${chapterNum}-${verseNum}`;
    return allDiscussions.find(disc => disc.id === discussionIdentifier); // Assuming discussionItem.id can be string
  }, [allDiscussions, bookId, chapterNum, verseNum]);

  // Discussion Handlers (similar to ContentDetailView)
  const handleAddComment = (text: string) => {
    const newComment: DiscussionComment = {
      id: Date.now(),
      author: '익명 사용자',
      timestamp: new Date().toISOString(),
      text: text,
    };

    setAllDiscussions(prevDiscussions => {
      const discussionIdentifier = `${bookId}-${chapterNum}-${verseNum}`;
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
          contentItemId: -1, // Not applicable for verse discussion, or link to verse detail ID
          comments: [newComment],
        };
        return [...prevDiscussions, newDiscussionItem];
      }
    });
  };

  const handleDeleteComment = (commentIdToDelete: number) => {
    setAllDiscussions(prevDiscussions => {
      const updatedDiscussions = prevDiscussions.map(disc => {
        const discussionIdentifier = `${bookId}-${chapterNum}-${verseNum}`;
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
      const discussionIdentifier = `${bookId}-${chapterNum}-${verseNum}`;
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
          contentItemId: -1, // Not applicable for verse discussion, or link to verse detail ID
          comments: [newReply],
        };
        return [...prevDiscussions, newDiscussionItem];
      }
    });
  };

  // Editor Handlers
  const handleSaveSignLanguageText = () => {
    // In a real app, this would send updated text to a backend
    if (verseDetail) {
      setVerseDetail({ ...verseDetail, signLanguageText: editedSignLanguageText });
      // Also update scriptureVerseDetailData if it were mutable
    }
    setIsEditingSignLanguageText(false);
    alert('수어 자막이 저장되었습니다! (실제 데이터는 업데이트되지 않음)');
  };

  const handleCancelEdit = () => {
    setEditedSignLanguageText(verseDetail?.signLanguageText || '');
    setIsEditingSignLanguageText(false);
  };

  if (!currentBook || !originalVerseText) {
    return <div>구절을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-text-primary">
        {currentBook.name} {chapterNum}장 {verseNum}절
      </h1>
      <p className="mt-2 text-text-secondary">원문: {originalVerseText}</p>

      {/* Video Player */}
      <div className="mt-8 mb-8 bg-black rounded-lg overflow-hidden relative aspect-video">
        <video controls src={verseDetail?.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"} className="w-full h-full absolute inset-0" poster="https://via.placeholder.com/640x360.png?text=Video+Placeholder">
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Sign Language Text Editor/Viewer */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-text-primary">수어 자막</h2>
          {!isEditingSignLanguageText ? (
            <button
              onClick={() => setIsEditingSignLanguageText(true)}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary-hover transition-colors font-semibold"
            >
              편집
            </button>
          ) : (
            <div className="space-x-2">
              <button
                onClick={handleSaveSignLanguageText}
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
          {verseDetail ? (
            isEditingSignLanguageText ? (
              <textarea
                className="w-full p-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y min-h-[120px] text-sm"
                value={editedSignLanguageText}
                onChange={(e) => setEditedSignLanguageText(e.target.value)}
              />
            ) : (
              <p className="text-text-primary text-lg p-3 bg-surface rounded-lg">{verseDetail.signLanguageText}</p>
            )
          ) : (
            <p className="text-text-secondary text-center py-8">이 구절에 대한 수어 자막 데이터가 없습니다.</p>
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

export default ScriptureVerseDetailView;
