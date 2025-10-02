export interface ScriptureBook {
  id: number;
  name: string;
  chapterCount: number;
}

export const scriptureData: ScriptureBook[] = [
  {
    id: 1,
    name: '창세기',
    chapterCount: 50,
  },
  {
    id: 2,
    name: '출애굽기',
    chapterCount: 40,
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
