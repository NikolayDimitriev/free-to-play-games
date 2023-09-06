import { useAppSelector } from "@/src/store";

import { GameCard } from "../gameCard/GameCard";

import styles from "./GamesList.module.scss";
import { Loader } from "../loader/Loader";

export const GamesList = function () {
  const { games, isLoading, error } = useAppSelector((state) => state.games);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div style={{ color: "red" }}>Something went wrong, sorry</div>;
  }

  if (!games || games.length === 0) {
    return <div style={{ color: "red" }}>Nothing found</div>;
  }

  return (
    games && (
      <ul className={styles.list}>
        {games.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </ul>
    )
  );
};
