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

module.exports = router;
