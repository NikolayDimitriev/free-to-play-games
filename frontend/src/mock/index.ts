export const platformsOptions = [
  { value: "pc", label: "Windows (PC)" },
  { value: "browser", label: "Browser (Web)" },
  { value: "all", label: "All platforms" },
] as const;

export const categoriesOptions = [
  { value: "mmo", label: "MMO" },
  { value: "mmorpg", label: "MMORPG" },
  { value: "shooter", label: "Shooter" },
  { value: "strategy", label: "Strategy" },
  { value: "moba", label: "Moba" },
  { value: "card", label: "Card Games" },
  { value: "racing", label: "Racing" },
  { value: "sports", label: "Sports" },
  { value: "social", label: "Social" },
  { value: "fighting", label: "Fighting" },
  { value: "all", label: "All Genres" },
] as const;

export const sortByOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "popularity", label: "Popularity" },
  { value: "release-date", label: "Release Date" },
  { value: "alphabetical", label: "Alphabetical" },
] as const;
