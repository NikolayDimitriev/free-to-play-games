import axios from "axios";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "@/src/store";
import { fetchGameById, setGame } from "@/src/store/gameById";

import { GameInfo } from "@/src/components/gameInfo/GameInfo";

import { getCookie } from "@/src/utils";
import { GameById } from "@/src/typing";

export const GamePage = function () {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const source = axios.CancelToken.source();

  useEffect(() => {
    if (!id) return;

    const gameCookie: GameById = getCookie(id);

    if (gameCookie) {
      dispatch(setGame(gameCookie));
      return;
    }

    dispatch(fetchGameById({ id, cancelToken: source.token }));

    return () => {
      source.cancel("Component unmounted");
    };
  }, [id]);

  return <GameInfo />;
};
