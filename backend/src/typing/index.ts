export type GameById = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements?: Require;
  screenshots: Screenshot[];
};

export type Screenshot = {
  id: number;
  image: string;
};

export type Require = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export type Games = Game[];

export type QueryParams = {
  platform?: string;
  category?: string;
  'sort-by'?: string;
};
