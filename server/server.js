const express = require('express');
const path = require('path');
const gameRouter = require('./routes/game');
const dbRouter = require('../turtle-algo-game/server/routes/dbRouter');

const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
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
