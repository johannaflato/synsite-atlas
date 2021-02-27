const express = require('express');
const router = express.Router();
const Arena = require('are.na');

router.get('/:slug', async (req, res) => {
  if (!res.locals.definition) next(); // 404
  const arena = new Arena();
  const data = await arena.channel(req.params.id).get()
  res.render('channel', data)
});

module.exports = router;
