import { categoriesOptions, platformsOptions, sortByOptions } from "../mock";

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
}

export type Require = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

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

export type Platform = (typeof platformsOptions)[number]["value"];
export type Categories = (typeof categoriesOptions)[number]["value"];
export type SortBy = (typeof sortByOptions)[number]["value"];

export type UnionValues = Platform | Categories | SortBy;

export type PlatformOptions = typeof platformsOptions;
export type CategoriesOptions = typeof categoriesOptions;
export type SortByOptions = typeof sortByOptions;

export type UnionOptions = PlatformOptions | CategoriesOptions | SortByOptions;
