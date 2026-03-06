const slugify = require('slugify');
const { inspect } = require('util');
const ct_creation = require('./filters/ct-creation');
const cleanTOC = require('./filters/toc');

module.exports = function (config) {
  config.addFilter("slug", s =>
    s !== undefined ?
      slugify(s, { lower: true, strict: true }) :
      "-"
  );

  config.addFilter("inspect", (s, d) =>
    inspect(s, {depth: d === undefined ? 2 : d})
  );

  config.addFilter("keys", obj => Object.keys(obj));

  ct_creation(config);
  cleanTOC(config);
}