import { Categories, Platform, SortBy } from "@/src/typing";

type SortBlockProps = {
  setPlatform(value: Platform): void;
  setCategory(value: Categories): void;
  setSortBy(value: SortBy): void;
};

export const SortBlock = function (obj: SortBlockProps) {
  console.log(obj);

  return <div>this is sort block</div>;
};
