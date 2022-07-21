const express = require('express');
const path = require('path');
require('dotenv').config();
const gameRouter = require('./routes/game');
const dbRouter = require('../turtle-algo-game/server/routes/dbRouter');
const fileUpload = require('express-fileupload'); // remove, s3 test

const fs = require('fs');  // remove, s3 test
const AWS = require('aws-sdk'); // remove, s3 test

const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.use(fileUpload()); // remove, s3 test

app.post('/upload', (req, res) => { // remove, s3 test

  const s3 = new AWS.S3();

  // Binary data base64
  const fileContent  = Buffer.from(req.files.image.data, 'binary');

  // Setting up S3 upload parameters
  const params = {
      Bucket: 'codesmith-iteration-project',
      Key: req.files.image.name, // File name you want to save as in S3
      Body: fileContent
  };

  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
      if (err) {
          throw err;
      }
      res.send({
          "response_code": 200,
          "response_message": "Success",
          "response_data": data
      });
  });
});

app.use('/games', gameRouter);
app.use('/api', dbRouter);

app.use((req, res, next) => {
  res.send('<h1>Sorry, not found.</h1>');
});

app.listen(port, () => {
  console.log('Express Site listening on port ' + port);
});


module.exports = app;
