import React, { useState } from 'react';
import { scriptureData } from '@/data/scriptureData';
import type { ScriptureBook } from '@/data/scriptureData';

const ScriptureSubtitleView: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<ScriptureBook | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const handleSelectBook = (book: ScriptureBook) => {
    setSelectedBook(book);
    setSelectedChapter(null); // Reset chapter selection when a new book is chosen
  };

  const handleSelectChapter = (chapter: number) => {
    setSelectedChapter(chapter);
  };

  return (
    <div className="flex h-[calc(100vh-120px)]">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-border overflow-y-auto p-4">
        <h2 className="text-xl font-bold text-text-primary mb-4">경전 목록</h2>
        <ul>
          {scriptureData.map(book => (
            <li key={book.id} className="mb-1">
              <button
                onClick={() => handleSelectBook(book)}
                className={`w-full text-left p-2 rounded-md font-semibold transition-colors ${
                  selectedBook?.id === book.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-surface-hover'
                }`}
              >
                {book.name}
              </button>
              {selectedBook?.id === book.id && (
                <div className="pl-4 mt-2 border-l-2 border-primary-variant">
                  <div className="grid grid-cols-5 gap-1">
                    {Array.from({ length: book.chapterCount }, (_, i) => i + 1).map(chapter => (
                      <button
                        key={chapter}
                        onClick={() => handleSelectChapter(chapter)}
                        className={`w-full text-center p-1 rounded-md text-sm transition-colors ${
                          selectedChapter === chapter
                            ? 'bg-primary-variant text-white'
                            : 'hover:bg-surface-hover'
                        }`}
                      >
                        {chapter}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {selectedBook && selectedChapter ? (
          <div>
            <h1 className="text-3xl font-bold text-text-primary">
              {selectedBook.name} {selectedChapter}장
            </h1>
            <div className="mt-8 prose max-w-none">
              {/* TODO: Fetch and display verses for the selected chapter */}
              <p className="text-text-secondary">이곳에 {selectedBook.name} {selectedChapter}장의 구절별 내용과 수어 영상이 표시될 예정입니다.</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-lg text-text-secondary">왼쪽 목록에서 경전과 장을 선택하세요.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ScriptureSubtitleView;
