import express from 'express';
import bodyParser from 'body-parser';
import { IndexRouter } from './controllers/v0/index.router';

const SERVER_PORT = process.env.PORT || 8080;

(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use('/api/v0/', IndexRouter);

    console.log(`Listening port ${SERVER_PORT}`);
    app.listen(SERVER_PORT);
})();