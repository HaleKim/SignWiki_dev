import type { ScriptureVerse, ScriptureChapter, ScriptureBook } from '@/types';

export const scriptureData: ScriptureBook[] = [
  {
    id: 1,
    name: '창세기',
    chapters: [
      {
        number: 1,
        verses: [
          { number: 1, text: '태초에 하나님이 천지를 창조하시니라.' },
          { number: 2, text: '땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 신은 수면에 운행하시니라.' },
          { number: 3, text: '하나님이 가라사대 빛이 있으라 하시매 빛이 있었고.' },
          { number: 4, text: '그 빛이 하나님의 보시기에 좋았더라 하나님이 빛과 어두움을 나누사.' },
          { number: 5, text: '빛을 낮이라 칭하시고 어두움을 밤이라 칭하시니라 저녁이 되며 아침이 되니 이는 첫째 날이니라.' },
        ],
      },
      {
        number: 2,
        verses: [
          { number: 1, text: '천지와 만물이 다 이루어지니라.' },
          { number: 2, text: '하나님이 그가 하시던 일을 일곱째 날에 마치시니 그가 하시던 모든 일을 그치고 일곱째 날에 안식하시니라.' },
          { number: 3, text: '하나님이 그 일곱째 날을 복되게 하사 거룩하게 하셨으니 이는 하나님이 그 창조하시며 만드시던 모든 일을 마치시고 그 날에 안식하셨음이니라.' },
          { number: 4, text: '이것이 천지가 창조될 때에 하늘과 땅의 내력이니 여호와 하나님이 땅과 하늘을 만드시던 날에.' },
          { number: 5, text: '땅의 모든 들풀이 아직 있지 아니하였고 밭의 채소가 아직 돋아나지 아니하였으며 여호와 하나님이 땅에 비를 내리지 아니하셨고 땅을 갈 사람도 없었으며.' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: '출애굽기',
    chapters: [
      {
        number: 1,
        verses: [
          { number: 1, text: '야곱과 함께 각각 자기 가족을 데리고 애굽에 이른 이스라엘 아들들의 이름은 이러하니' },
          { number: 2, text: '르우벤과 시므온과 레위와 유다와' },
          { number: 3, text: '잇사갈과 스불론과 베냐민과' },
          { number: 4, text: '단과 납달리와 갓과 아셀이요' },
          { number: 5, text: '야곱의 허리에서 나온 사람이 모두 칠십 명이요 요셉은 애굽에 있었더라' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: '레위기',
    chapterCount: 27,
  },
  {
    id: 4,
    name: '민수기',
    chapterCount: 36,
  },
  {
    id: 5,
    name: '신명기',
    chapterCount: 34,
  },
];
