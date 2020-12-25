import { resolve } from 'path';
import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

app.use(express.static(resolve(__dirname, '../../dist/app')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
