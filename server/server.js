const express = require('express');
const path = require('path');

const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/snake', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'SnakeClone-Phaser', 'game.html'));
});

app.get('/phaser-ce/build/phaser.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'SnakeClone-Phaser', 'node_modules', 'phaser', 'build', 'phaser.js'));
});

app.get('/game.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'SnakeClone-Phaser', 'game.js'));
});

app.get('/breakout', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'breakout', 'breakout.html'));
});

app.get('/breakout.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'breakout', 'breakout.js'));
});

app.use((req, res, next) => {
  res.send('<h1>Sorry, not found.</h1>');
});

app.listen(port, () => {
  console.log('Express Site listening on port ' + port);
});

module.exports = app;
