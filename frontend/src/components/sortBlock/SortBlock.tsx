import { Categories, Platform, SortBy } from "@/src/typing";
import { Select } from "../select/Select";
import { platformsOptions, categoriesOptions, sortByOptions } from "@/src/mock";

import { useAppDispatch } from "@/src/store";
import {
  changeCategory,
  changePlatform,
  changeSortBy,
} from "@/src/store/games";

import styles from "./SortBlock.module.scss";

type SortBlockProps = {
  platform: Platform;
  category: Categories;
  sortBy: SortBy;
};

export const SortBlock = function ({
  platform,
  category,
  sortBy,
}: SortBlockProps) {
  const dispatch = useAppDispatch();

  const setPlatform = (value: Platform) => {
    dispatch(changePlatform(value));
  };

  const setCategory = (value: Categories) => {
    dispatch(changeCategory(value));
  };

  const setSortBy = (value: SortBy) => {
    dispatch(changeSortBy(value));
  };

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
