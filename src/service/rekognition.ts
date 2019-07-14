import aws from 'aws-sdk';

export function getText(imageBuffer: Buffer): Promise<Object> {
    const rekognition = new aws.Rekognition({ region: 'us-east-1' });

    var params = {
        Image: {
            Bytes: imageBuffer
        }
    };

    return rekognition.detectText(params).promise();
}