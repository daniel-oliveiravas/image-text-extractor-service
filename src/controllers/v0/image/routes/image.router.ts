import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { getText } from '../../../../service/rekognition';

const router: Router = Router();

router.post('/extract', bodyParser.raw({ type: 'image/*' }), (req: Request, res: Response) => {
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


export const ImageRouter: Router = router;