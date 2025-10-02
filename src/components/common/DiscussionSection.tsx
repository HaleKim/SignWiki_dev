import React, { useState } from 'react';
import type { DiscussionComment, DiscussionItem } from '../../data/discussionData'; // Relative path for types

interface CommentItemProps {
  comment: DiscussionComment;
  level?: number; // For indentation of replies
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, level = 0 }) => {
  const indentation = level * 4; // Tailwind's pl-4 for each level

  return (
    <div style={{ paddingLeft: `${indentation}px` }} className="mb-4">
      <div className="bg-surface-alt p-3 rounded-lg">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-text-primary">{comment.author}</span>
          <span className="text-xs text-text-secondary">
            {new Date(comment.timestamp).toLocaleString()}
          </span>
        </div>
        <p className="text-text-primary text-sm">{comment.text}</p>
      </div>
      {comment.replies && comment.replies.map(reply => (
        <CommentItem key={reply.id} comment={reply} level={level + 1} />
      ))}
    </div>
  );
};

interface DiscussionSectionProps {
  discussionItem: DiscussionItem | undefined; // Can be undefined if no discussions for content
  onAddComment: (text: string) => void; // New prop for adding comments
}

const DiscussionSection: React.FC<DiscussionSectionProps> = ({ discussionItem, onAddComment }) => {
  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = () => {
    if (newCommentText.trim()) {
      onAddComment(newCommentText.trim()); // Call the prop function
      setNewCommentText('');
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-text-primary mb-6">토론 ({discussionItem?.comments.length || 0})</h2>

      {/* Comment Input */}
      <div className="mb-8 p-4 bg-surface rounded-lg shadow-sm">
        <textarea
          className="w-full p-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y min-h-[80px]"
          placeholder="새로운 의견을 남겨주세요..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="mt-3 px-5 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors font-semibold"
        >
          의견 등록
        </button>
      </div>

      {/* Discussion List */}
      {discussionItem && discussionItem.comments.length > 0 ? (
        <div>
          {discussionItem.comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <p className="text-text-secondary text-center py-8">아직 토론이 없습니다. 첫 의견을 남겨주세요!</p>
      )}
    </div>
  );
};

export default DiscussionSection;

