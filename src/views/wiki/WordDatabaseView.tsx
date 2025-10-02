import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { wordData } from '@/data/wordData';
import type { WordEntry } from '@/types';

const WordDatabaseView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = useMemo(() => {
    if (!searchTerm) {
      return wordData;
    }
    return wordData.filter(word =>
      word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary">단어 데이터베이스</h1>
        <p className="mt-2 text-text-secondary">
          수어 단어를 검색하고, 상세 정보를 확인하며, 토론에 참여하세요.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="단어를 검색하세요... (예: 안녕하세요, 인사)"
          className="w-full p-4 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Word List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWords.length > 0 ? (
          filteredWords.map(word => (
            <Link to={`/wiki/word/${word.id}`} key={word.id} className="block no-underline">
              <div className="p-4 bg-surface rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer h-full">
                <h2 className="text-xl font-bold text-text-primary">{word.word}</h2>
                <p className="text-text-secondary text-sm mt-1 truncate">{word.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {word.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-text-secondary">'{searchTerm}'에 대한 검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordDatabaseView;
