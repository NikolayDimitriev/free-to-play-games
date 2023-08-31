import cn from "classnames";
import axios from "axios";

import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "@/src/store";
import { fetchGames } from "@/src/store/games";

import { SortBlock } from "@/src/components/sortBlock/SortBlock";
import { GamesList } from "@/src/components/gamesList/GamesList";

import { Categories, Platform, SortBy } from "@/src/typing";

import { numWord } from "@/src/utils";

import styles from "./MainPage.module.scss";

export const MainPage = function () {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.games.allGames?.length);
  const [platform, setPlatform] = useState<Platform>("all");
  const [category, setCategory] = useState<Categories>("all");
  const [sortBy, setSortBy] = useState<SortBy>("relevance");
  const source = axios.CancelToken.source();

  useEffect(() => {
    if (category === "all") {
      dispatch(fetchGames({ platform, "sort-by": sortBy, cancelToken: source.token }));
    } else {
      dispatch(fetchGames({ platform, category, "sort-by": sortBy, cancelToken: source.token }));
    }

    return () => {
      source.cancel("Component unmounted");
    };
  }, [platform, category, sortBy]);

  return (
    <section className={styles.main}>
      <div className={cn(styles["main__container"], "container")}>
        <h1 className={styles["main__title"]}>
          Top Free Games for PC and Browser In {new Date().getFullYear()}!
        </h1>

        {count && (
          <h2 className={styles["main__subtitle"]}>
            <strong>{count}</strong> free-to-play{" "}
            <strong>{numWord(count, ["game", "games", "games"])}</strong> found
            in our fames list!
          </h2>
        )}

        <SortBlock
          platform={platform}
          category={category}
          sortBy={sortBy}
          setPlatform={setPlatform}
          setCategory={setCategory}
          setSortBy={setSortBy}
        />
        <GamesList />
      </div>
    </section>
  );
};
