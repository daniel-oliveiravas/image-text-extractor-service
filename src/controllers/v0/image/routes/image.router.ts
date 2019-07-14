import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { getText } from '../../../../service/rekognition';

const router: Router = Router();

router.post('/extract', bodyParser.raw({ type: 'image/*' }), (req: Request, res: Response) => {
    const imageBuffer = req.body;

    if (isObjectEmpty(imageBuffer)) {
        return res.status(400).send('Missing required binary image body');
    }

    getText(imageBuffer)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

const isObjectEmpty = (object: Object) => {
    return Object.entries(object).length === 0 && object.constructor === Object;
}

export const ImageRouter: Router = router;