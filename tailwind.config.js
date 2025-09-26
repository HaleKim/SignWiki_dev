/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 토스 스타일의 색상 팔레트 정의
        'primary': '#0070F3', // 주요 버튼 및 링크 색상
        'secondary': '#6B7280', // 부가적인 텍스트 색상
        'background': '#F9FAFB', // 전체 배경색
        'surface': '#FFFFFF', // 카드 등 표면 색상
        'border': '#E5E7EB', // 경계선 색상
        'text-primary': '#111827', // 주요 텍스트 색상
        'text-secondary': '#4B5563', // 부가 텍스트 색상
      },
      fontFamily: {
        // 가독성이 좋은 Pretendard 폰트 설정 (Google Fonts 등에서 import 필요)
        sans: ['Pretendard', 'sans-serif'],
      },
      boxShadow: {
        // 은은한 그림자 효과
        'toss': '0 2px 8px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}