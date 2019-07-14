# Image Text Extractor Service

Application to extract text from images using AWS Rekognition service

## Run
`npm run dev`

## Usage
`curl -X POST --data-binary @filepath http://localhost:8080/api/v0/image/extract -H 'Content-Type: image/jpeg';`

## Response format

Check out the 'Response Syntax section' in Rekognition's documentation
`https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html`
