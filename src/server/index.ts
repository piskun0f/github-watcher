import express from 'express';

import { indexRouter } from './routers';

const app = express();
const port = 3000;

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
