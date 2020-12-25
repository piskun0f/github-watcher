import { resolve } from 'path';
import { Router, Request, Response, static as estatic } from 'express';

export const apiRouter = Router();

apiRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello api');
});
