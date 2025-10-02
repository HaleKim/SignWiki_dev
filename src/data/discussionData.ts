import type { DiscussionComment, DiscussionItem } from '@/types';

export let discussionData: DiscussionItem[] = [
  {
    id: 1,
    contentItemId: 1, // Linked to '고요의 바다'
    comments: [
      {
        id: 101,
        author: '김수어',
        timestamp: '2025-10-01T10:00:00Z',
        text: '고요의 바다 1화의 "달" 수어 표현이 좀 어색한 것 같아요. 다른 표현은 없을까요?',
        replies: [
          {
            id: 102,
            author: '박위키',
            timestamp: '2025-10-01T10:30:00Z',
            text: '저도 그렇게 생각했어요! "달"은 보통 이렇게 표현하는데, 영상에서는 좀 다르게 나오더라고요.',
          },
        ],
      },
      {
        id: 103,
        author: '최번역',
        timestamp: '2025-10-01T11:15:00Z',
        text: '2화 마지막 장면의 "희망"이라는 단어 수어는 정말 인상 깊었습니다. 잘 표현된 것 같아요.',
      },
    ],
  },
  {
    id: 2,
    contentItemId: 2, // Linked to '승리호'
    comments: [
      {
        id: 201,
        author: '이우주',
        timestamp: '2025-01-01T14:00:00Z',
        text: '승리호에 나오는 우주 관련 용어들의 수어 표현이 궁금합니다. 따로 정리된 곳이 있을까요?',
      },
    ],
  },
];
