import React from 'react';

const WebcamPlaceholder: React.FC = () => {
  return (
    <div className="aspect-video bg-gray-800 rounded-lg flex flex-col items-center justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      <p className="text-gray-400">웹캠 미리보기</p>
      <div className="absolute top-2 left-2 bg-red-500 rounded-full h-3 w-3"></div>
    </div>
  );
};

export default WebcamPlaceholder;
