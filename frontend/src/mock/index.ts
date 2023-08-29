export const platforms = {
  pc: "Windows (PC)",
  browser: "Browser (Web)",
  all: "All platforms",
} as const;

export const categories = {
  mmo: "MMO",
  mmorpg: "MMORPG",
  shooter: "Shooter",
  strategy: "Strategy",
  moba: "Moba",
  card: "Card Games",
  racing: "Racing",
  sports: "Sports",
  social: "Social",
  fighting: "Fighting",
  all: "All Genres",
} as const;

export const sortBy = {
  relevance: "Relevance",
  popularity: "Popularity",
  "release-date": "Release Date",
  alphabetical: "Alphabetical",
} as const;
