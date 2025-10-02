import React, { useState } from 'react';
import type { DiscussionComment, DiscussionItem } from '../../data/discussionData'; // Relative path for types

// Helper function to recursively count all comments and replies
const countAllComments = (comments: DiscussionComment[]): number => {
  let count = 0;
  comments.forEach(comment => {
    count++; // Count the current comment
    if (comment.replies && comment.replies.length > 0) {
      count += countAllComments(comment.replies); // Recursively count replies
    }
  });
  return count;
};

interface CommentItemProps {
  comment: DiscussionComment;
  level?: number; // For indentation of replies
  onDeleteComment: (commentId: number) => void; // New prop for deleting comments
  onAddReply: (parentId: number, text: string) => void; // New prop for adding replies
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, level = 0, onDeleteComment, onAddReply }) => {
  const indentation = level * 4; // Tailwind's pl-4 for each level
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onAddReply(comment.id, replyText.trim());
      setReplyText('');
      setShowReplyInput(false);
    }
  };

  return (
    <div style={{ paddingLeft: `${indentation}px` }} className="mb-4">
      <div className="bg-surface-alt p-3 rounded-lg">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-text-primary">{comment.author}</span>
          <span className="text-xs text-text-secondary">
            {new Date(comment.timestamp).toLocaleString()}
          </span>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={() => setShowReplyInput(!showReplyInput)}
              className="text-xs text-blue-500 hover:text-blue-700"
            >
              답글
            </button>
            <button
              onClick={() => onDeleteComment(comment.id)}
              className="text-xs text-red-500 hover:text-red-700"
            >
              삭제
            </button>
          </div>
        </div>
        <p className="text-text-primary text-sm">{comment.text}</p>
      </div>

      {showReplyInput && (
        <div className="mt-2 p-3 bg-background rounded-lg">
          <textarea
            className="w-full p-2 border border-border rounded-md bg-surface focus:outline-none focus:ring-1 focus:ring-primary resize-y text-sm"
            placeholder="답글을 입력하세요..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea>
          <button
            onClick={handleReplySubmit}
            className="mt-2 px-4 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors font-semibold"
          >
            등록
          </button>
        </div>
      )}

      {comment.replies && comment.replies.map(reply => (
        <CommentItem
          key={reply.id}
          comment={reply}
          level={level + 1}
          onDeleteComment={onDeleteComment}
          onAddReply={onAddReply}
        />
      ))}
    </div>
  );
};

interface DiscussionSectionProps {
  discussionItem: DiscussionItem | undefined; // Can be undefined if no discussions for content
  onAddComment: (text: string) => void; // New prop for adding comments
  onDeleteComment: (commentId: number) => void; // New prop for deleting comments
  onAddReply: (parentId: number, text: string) => void; // New prop for adding replies
}

const DiscussionSection: React.FC<DiscussionSectionProps> = ({ discussionItem, onAddComment, onDeleteComment, onAddReply }) => {
  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = () => {
    if (newCommentText.trim()) {
      onAddComment(newCommentText.trim()); // Call the prop function
      setNewCommentText('');
    }
  };

  const totalCommentCount = discussionItem ? countAllComments(discussionItem.comments) : 0;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-text-primary mb-6">토론 ({totalCommentCount})</h2>

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
            <CommentItem
              key={comment.id}
              comment={comment}
              onDeleteComment={onDeleteComment}
              onAddReply={onAddReply}
            />
          ))}
        </div>
      ) : (
        <p className="text-text-secondary text-center py-8">아직 토론이 없습니다. 첫 의견을 남겨주세요!</p>
      )}
    </div>
  );
};

export default DiscussionSection;

