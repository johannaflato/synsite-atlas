const express = require('express');
const router = express.Router();
const Arena = require('are.na');

router.get('/:id', async (req, res) => {
  if (!res.locals.definition) next(); // 404
  const arena = new Arena();
  const data = await arena.block(req.params.id).get();
  res.render('show', data);
});

module.exports = router;
