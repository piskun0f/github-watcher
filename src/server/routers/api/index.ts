import { Router, Request, Response } from 'express';

export const apiRouter = Router();

apiRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello api');
});
