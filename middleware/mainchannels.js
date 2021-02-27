const Arena = require('are.na');

module.exports = async (req, res, next) => {
  const arena = new Arena();
  const data = arena.channel('syn-site').get(); //removed 'await'
  // filter syn-site channel's blocks by the 'Channel' class
  const mainchannels = data.contents
    .filter(block => block.class == 'Channel');
  res.locals.mainchannels = mainchannels;
  next();
};
