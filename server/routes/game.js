const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/snake', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'SnakeClone-Phaser', 'game.html'));
});

router.get('/phaser.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'SnakeClone-Phaser', 'node_modules', 'phaser', 'build', 'phaser.js'));
});

router.get('/snakeClone.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'SnakeClone-Phaser', 'game.js'));
});

router.get('/breakout', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'breakout', 'breakout.html'));
});

router.get('/breakout.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'breakout', 'breakout.js'));
});

router.get('/eatfish', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'eatfish', 'eatfish.html'));
});

router.get('/eatfishengine.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'eatfish', 'eatfishengine.js'));
});

router.get('/eatfishsetup.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'eatfish', 'eatfishsetup.js'));
});

router.get('/eatfishentities.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'eatfish', 'eatfishentities.js'));
});

router.get('/eatfishcomponents.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'eatfish', 'eatfishcomponents.js'));
});

router.get('/eatfishsystems.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'eatfish', 'eatfishsystems.js'));
});

router.get('/turtle', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'turtle-algo-game', 'client', 'index.html'));
});

router.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'turtle-algo-game', 'build', 'bundle.js'));
});

module.exports = router;
