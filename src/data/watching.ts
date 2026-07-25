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
    ],
  },
];
