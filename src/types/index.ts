export interface ContentItem {
  id: number;
  category: '드라마' | '영화' | '뮤직비디오';
  title: string;
  thumbnailUrl: string;
  subtitleCount: number;
  discussionCount: number;
}

export interface DiscussionComment {
  id: number;
  author: string;
  timestamp: string;
  text: string;
  replies?: DiscussionComment[]; // Nested replies
}

export interface DiscussionItem {
  id: number | string;
  contentItemId?: number; // Links to ContentItem.id, made optional for verse discussions
  comments: DiscussionComment[];
}

export interface ScriptureVerse {
  number: number;
  text: string;
}

export interface ScriptureChapter {
  number: number;
  verses: ScriptureVerse[];
}

export interface ScriptureBook {
  id: number;
  name: string;
  chapterCount?: number; // Make optional as some will have 'chapters' array
  chapters?: ScriptureChapter[]; // Add chapters array
}

export interface ScriptureVerseDetail {
  bookId: number;
  chapterNum: number;
  verseNum: number;
  videoUrl: string;
  signLanguageText: string; // Editable text for the sign language interpretation
  discussionId?: number; // Optional: Link to a specific discussion thread if needed
}

export interface SubtitleEntry {
  id: number;
  contentItemId: number;
  startTime: number; // in seconds
  endTime: number; // in seconds
  text: string;
}

export interface WordEntry {
  id: number;
  word: string;
  description: string;
  signVideoUrl: string;
  tags: string[];
}
