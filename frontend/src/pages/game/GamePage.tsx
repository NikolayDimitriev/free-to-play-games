import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/src/store";
import { fetchGameById, setGame } from "@/src/store/gameById";

import { getCookie } from "@/src/utils";
import { Game } from "@/src/typing";

export const GamePage = function () {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { game, isLoading, error } = useAppSelector((state) => state.game);

  useEffect(() => {
    if (!id) return;

    const gameCookie: Game = getCookie(id);

    if (gameCookie) {
      dispatch(setGame(gameCookie));
      return;
    }

    dispatch(fetchGameById({ id }));
  }, [id]);

  if (isLoading) {
    return <div>loading games</div>;
  }

  if (error) {
    return <div>something went wrong, sorry</div>;
  }

  return (
    game && (
      <section>
        <h2>{game.title}</h2>
      </section>
    )
  );
};
