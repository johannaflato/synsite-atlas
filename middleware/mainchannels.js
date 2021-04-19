const Arena = require('are.na');

const { ARENA_CHANNEL_ID } = process.env;

module.exports = async (req, res, next) => {
  const arena = new Arena();
  const data = await arena.channel(ARENA_CHANNEL_ID).get();
  // filter syn-site channel's blocks by the 'Channel' class
  const mainchannels = data.contents
    .filter(block => block.class == 'Channel');

  res.locals.mainchannels = mainchannels;
  next();
};
