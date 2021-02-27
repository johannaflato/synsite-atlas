const slugify = require('@sindresorhus/slugify')
const format = require('date-fns/format')

const shuffle = (xs) => {
  let i = xs.length, tmp, ri;

  while (0 !== i) {
    ri = Math.floor(Math.random() * i);
    i -= 1;
    tmp = xs[i];
    xs[i] = xs[ri];
    xs[ri] = tmp;
  }

  return xs;
}

const rand = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

module.exports = (req, res, next) => {
  res.locals.helpers = {
    slugify,
    shuffle,
    rand,
    dateFnsFormat: format
  };

  next();
};
