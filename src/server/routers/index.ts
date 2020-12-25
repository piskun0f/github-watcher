import { resolve } from 'path';
import { Router, Request, Response, static as estatic } from 'express';

import { apiRouter } from './api';

export const indexRouter = Router();

// any files
indexRouter.use(estatic(resolve(__dirname, '../../../dist/app')));

indexRouter.use('/api', apiRouter);

indexRouter.get('*', (req: Request, res: Response) => {
    res.sendFile(resolve(__dirname, '../../../dist/app/index.html'));
});

