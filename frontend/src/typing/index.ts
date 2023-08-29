import { categories, platforms, sortBy } from "../mock";

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

export type APIError = {
  message: string;
};

export type Platform = keyof typeof platforms;
export type Categories = keyof typeof categories;
export type SortBy = keyof typeof sortBy;
