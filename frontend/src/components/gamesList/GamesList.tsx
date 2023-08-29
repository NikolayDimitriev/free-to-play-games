import { useAppSelector } from "@/src/store";

import { GameCard } from "../gameCard/GameCard";

import styles from "./GamesList.module.scss";

export const GamesList = function () {
  const { games, isLoading, error } = useAppSelector((state) => state.games);

  if (isLoading) {
    return <div>loading games</div>;
  }

  if (error) {
    return <div>something went wrong, sorry</div>;
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
