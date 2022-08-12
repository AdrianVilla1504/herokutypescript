import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const api: Express = express();
const port = process.env.PORT;

api.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript server');
});

api.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
