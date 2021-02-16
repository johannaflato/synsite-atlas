const express = require('express');
const router = express.Router();
const Arena = require('are.na');

const { ARENA_CHANNEL_ID } = process.env;

router.get('/', async (req, res, next) => {
  if (!res.locals.definition) next(); // 404
  const arena = new Arena();
  const data = await arena.channel(ARENA_CHANNEL_ID).get();
  res.render('index', data);
});

module.exports = router;
