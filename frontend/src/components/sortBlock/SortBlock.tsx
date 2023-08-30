import { Categories, Platform, SortBy } from "@/src/typing";
import { Select } from "../select/Select";
import { platformsOptions, categoriesOptions, sortByOptions } from "@/src/mock";

import styles from './SortBlock.module.scss';

type SortBlockProps = {
  platform: Platform;
  category: Categories;
  sortBy: SortBy;
  setPlatform(value: Platform): void;
  setCategory(value: Categories): void;
  setSortBy(value: SortBy): void;
};

export const SortBlock = function ({
  platform,
  category,
  sortBy,
  setPlatform,
  setCategory,
  setSortBy,
}: SortBlockProps) {
  return (
    <div className={styles.wrapper}>
      <Select
        activeValue={platform}
        handleChange={setPlatform}
        options={platformsOptions}
        prefix="Platform"
      />
      <Select
        activeValue={category}
        handleChange={setCategory}
        options={categoriesOptions}
        prefix="Genre"
      />
      <Select
        activeValue={sortBy}
        handleChange={setSortBy}
        options={sortByOptions}
        prefix="Sort By"
      />
    </div>
  );
};
