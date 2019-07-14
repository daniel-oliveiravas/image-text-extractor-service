# Image Text Extractor Service

Application to extract text from images using AWS Rekognition service

## Run
`npm run dev`

## Usage
`curl -X POST --data-binary @/home/daniel/Downloads/label.jpg http://localhost:8080/api/v0/image/extract -H 'Content-Type: image/jpeg';`