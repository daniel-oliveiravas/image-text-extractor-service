import { getText } from './service/rekognition';
import express from 'express';
import bodyParser from 'body-parser';


const SERVER_PORT = process.env.PORT || 8080;

(async () => {
    const app = express();
    app.use(bodyParser.json());

    app.post('/', bodyParser.raw({ type: 'image/*' }), (req, res) => {
        const imageBuffer = req.body;

        if (!imageBuffer) {
            return res.status(400).send('Send an image as binary body');
        }

        getText(imageBuffer)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    });

    console.log(`Listening port ${SERVER_PORT}`);
    app.listen(SERVER_PORT);
})();