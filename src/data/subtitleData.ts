import type { SubtitleEntry } from '@/types';

export let subtitleData: SubtitleEntry[] = [
  {
    id: 1,
    contentItemId: 1, // 고요의 바다
    startTime: 0,
    endTime: 3,
    text: '안녕하세요. SignWiki에 오신 것을 환영합니다.',
  },
  {
    id: 2,
    contentItemId: 1, // 고요의 바다
    startTime: 3.5,
    endTime: 7,
    text: '이 영상은 자막 편집 기능 시연을 위한 예시입니다.',
  },
  {
    id: 3,
    contentItemId: 1, // 고요의 바다
    startTime: 7.5,
    endTime: 11,
    text: '각 자막은 시간 정보와 함께 표시되며, 수정할 수 있습니다.',
  },
  {
    id: 4,
    contentItemId: 2, // 승리호
    startTime: 0,
    endTime: 4,
    text: '승리호의 우주를 배경으로 한 자막입니다.',
  },
];
