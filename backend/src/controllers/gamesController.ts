import { Request, Response } from 'express';
import { getGames, getGameById } from '../api/index.ts';
import { Games, QueryParams } from '../typing/index.ts';

export const getGamesController = async (req: Request, res: Response) => {
  const params: QueryParams = req.query;
  const games: Games = await getGames(params);

  res.json(games);
};

export const getGameByIdController = async (req: Request, res: Response) => {
  const gameId = Number(req.query.id);

  if (!gameId) {
    res.status(400).send({ data: 'Please enter id' });
  }

  const game = await getGameById(gameId);

  res.status(200).json(game);
};
