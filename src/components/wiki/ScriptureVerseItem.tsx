import React, { useState } from 'react';
import VideoPlaceholder from '../common/VideoPlaceholder'; // Corrected relative path
import type { ScriptureVerse } from '../../data/scriptureData'; // Relative path for type

interface ScriptureVerseItemProps {
  verse: ScriptureVerse;
}

const ScriptureVerseItem: React.FC<ScriptureVerseItemProps> = ({ verse }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="mb-6 p-4 border border-border rounded-lg bg-surface">
      <div className="flex items-start justify-between">
        <p className="text-lg leading-relaxed text-text-primary">
          <span className="font-semibold text-primary mr-2">{verse.number}.</span>
          {verse.text}
        </p>
        <div className="ml-4 w-36 flex-shrink-0">
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="w-full px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-secondary-hover transition-colors whitespace-nowrap"
          >
            {showVideo ? '영상 닫기' : '수어 영상 보기'}
          </button>
        </div>
      </div>
      {showVideo && (
        <div className="mt-4">
          <VideoPlaceholder />
        </div>
      )}
    </div>
  );
};

export default ScriptureVerseItem;
