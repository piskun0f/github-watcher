import { resolve } from 'path';
import { Router, Request, Response, static as estatic } from 'express';

import { apiRouter } from './api';

export const indexRouter = Router();

indexRouter.use(estatic(resolve(__dirname, '../../../dist/app')));
indexRouter.use('/api', apiRouter);
