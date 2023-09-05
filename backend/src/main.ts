import express from 'express';
import cors from 'cors';
import gamesRouter from './routes/routes.ts';

const app = express();
const PORT = 8000;

app.use(cors());

app.use('/api', gamesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
