import cn from "classnames";
import axios from "axios";
import { v4 } from "uuid";

import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "@/src/store";
import { changeActivePage, fetchGames } from "@/src/store/games";

import { SortBlock } from "@/src/components/sortBlock/SortBlock";
import { GamesList } from "@/src/components/gamesList/GamesList";

import { numWord } from "@/src/utils";
import { createPages } from "@/src/utils/createPages";

import styles from "./MainPage.module.scss";

export const MainPage = function () {
  const dispatch = useAppDispatch();
  const { totalCount, activePage, gamesPerPage, platform, category, sortBy } = useAppSelector(
    (state) => state.games
  );
  const source = axios.CancelToken.source();

  const pagesCount = Math.ceil(totalCount / gamesPerPage);
  const pages = createPages(pagesCount, activePage);

  useEffect(() => {
    if (category === "all") {
      dispatch(
        fetchGames({ platform, "sort-by": sortBy, cancelToken: source.token })
      );
    } else {
      dispatch(
        fetchGames({
          platform,
          category,
          "sort-by": sortBy,
          cancelToken: source.token,
        })
      );
    }

    return () => {
      source.cancel("Component unmounted");
    };
  }, [platform, category, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <section className={styles.main}>
      <div className={cn(styles["main__container"], "container")}>
        <h1 className={styles["main__title"]}>
          Top Free Games for PC and Browser In {new Date().getFullYear()}!
        </h1>

        {totalCount > 0 && (
          <h2 className={styles["main__subtitle"]}>
            <strong>{totalCount}</strong> free-to-play{" "}
            <strong>{numWord(totalCount, ["game", "games", "games"])}</strong>{" "}
            found in our fames list!
          </h2>
        )}

        <SortBlock
          platform={platform}
          category={category}
          sortBy={sortBy}
        />
        <GamesList />

        <div className={styles.paginations}>
          {pages.length > 1 &&
            pages.map((num) => (
              <button
                key={v4()}
                className={cn(styles.page, {
                  [styles.activePage]: activePage === num,
                })}
                onClick={() => dispatch(changeActivePage(num))}
              >
                {num}
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};
