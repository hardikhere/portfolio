export type WatchingItem = {
  title: string;
  favorite?: boolean;
};

export type WatchingGroup = {
  label: string;
  items: WatchingItem[];
};

export const watching: WatchingGroup[] = [
  {
    label: "Anime & Series",
    items: [
      { title: "Dragon Ball Z" },
      { title: "Avatar: The Last Airbender" },
      { title: "Demon Slayer" },
      { title: "Death Note" },
      { title: "Vinland Saga", favorite: true },
      { title: "Fullmetal Alchemist: Brotherhood" },
      { title: "Dr. House" },
    ],
  },
  {
    label: "Movies",
    items: [
      { title: "One Flew Over the Cuckoo's Nest", favorite: true },
      { title: "Good Will Hunting" },
      { title: "October Sky" },
      { title: "Into the Wild" },
      { title: "Awakenings" },
      { title: "Nightcrawler" },
      { title: "Spirited Away" },
      { title: "My Neighbor Totoro" },
      { title: "Princess Mononoke" },
      { title: "Howl's Moving Castle" },
    ],
  },
];
