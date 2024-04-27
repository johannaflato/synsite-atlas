const express = require('express');
const router = express.Router();
const Arena = require('are.na');
const { paginatedChannelGet } = require('../lib/api');

router.get('/:id', async (req, res, next) => {
  try {
    const arena = new Arena();
    const data = await paginatedChannelGet(arena, req.params.id);
    res.render('channel', data);
  } catch (error) {
    next(error); // Properly handle errors
  }
});

module.exports = router;
