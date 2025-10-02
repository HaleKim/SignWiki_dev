import React, { useState, useMemo } from 'react';
import { scriptureData } from '@/data/scriptureData';
import type { ScriptureBook, ScriptureChapter } from '@/data/scriptureData';
import ScriptureVerseItem from '../../components/wiki/ScriptureVerseItem';

const ScriptureSubtitleView: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<ScriptureBook | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [verseSearchTerm, setVerseSearchTerm] = useState('');

  const handleSelectBook = (book: ScriptureBook) => {
    setSelectedBook(book);
    setSelectedChapter(null); // Reset chapter selection when a new book is chosen
    setVerseSearchTerm(''); // Reset search term
  };

  const handleSelectChapter = (chapter: number) => {
    setSelectedChapter(chapter);
    setVerseSearchTerm(''); // Reset search term
  };

  const currentChapterData: ScriptureChapter | undefined = selectedBook?.chapters?.find(
    (chap) => chap.number === selectedChapter
  );

  const filteredVerses = useMemo(() => {
    if (!currentChapterData || !currentChapterData.verses) {
      return [];
    }
    if (!verseSearchTerm) {
      return currentChapterData.verses;
    }
    return currentChapterData.verses.filter(verse =>
      verse.text.toLowerCase().includes(verseSearchTerm.toLowerCase())
    );
  }, [currentChapterData, verseSearchTerm]);

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
                    {Array.from({ length: book.chapterCount || (book.chapters ? book.chapters.length : 0) }, (_, i) => i + 1).map(chapter => (
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
            <h1 className="text-3xl font-bold text-text-primary mb-6">
              {selectedBook.name} {selectedChapter}장
            </h1>

            {currentChapterData && currentChapterData.verses.length > 0 && (
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="구절 내용 검색..."
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  value={verseSearchTerm}
                  onChange={e => setVerseSearchTerm(e.target.value)}
                />
              </div>
            )}

            <div className="prose max-w-none">
              {filteredVerses.length > 0 ? (
                filteredVerses.map(verse => (
                  <ScriptureVerseItem key={verse.number} verse={verse} />
                ))
              ) : currentChapterData && currentChapterData.verses.length > 0 && verseSearchTerm ? (
                <p className="text-text-secondary">'{verseSearchTerm}'에 대한 검색 결과가 없습니다.</p>
              ) : (
                <p className="text-text-secondary">선택하신 장의 구절 데이터가 준비되지 않았습니다.</p>
              )}
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
