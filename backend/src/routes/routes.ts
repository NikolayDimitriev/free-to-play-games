import express from 'express';
import { getGamesController, getGameByIdController } from '../controllers/index.ts';

const gamesRouter = express.Router();

gamesRouter.use('/games', getGamesController);

gamesRouter.use('/game', getGameByIdController);

export default gamesRouter;
