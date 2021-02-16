const Arena = require('are.na');

const { ARENA_CHANNEL_ID } = process.env;

module.exports = async (req, res, next) => {
  const arena = new Arena();
  const data = await arena.channel(ARENA_CHANNEL_ID).get();

  // filter the default channel's blocks by the 'Text' class
  // and then sort by date last updated, descending
  const definitions = data.contents
    .filter(block => block.class == 'Text')
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  let definition;
  let definitionPathPrefix;
  if (req.params.definition) {
    definition = definitions.find(block => block.id == req.params.definition);
    if (typeof definition == 'undefined') {
      // if definition id is not found, go to next middleware
      // res.locals will be missing a definition property and will be
      // ignored by route handlers and eventually caught by 404 handler
      next()
    }
    definitionPathPrefix = `/${req.params.definition}`;
  } else {
    definition = definitions[0];
    definitionPathPrefix = '';
  }
  
  // expose definition(s) on template locals
  res.locals.definition = definition;
  res.locals.definitionPathPrefix = definitionPathPrefix;
  res.locals.definitions = definitions;
  next();
};
