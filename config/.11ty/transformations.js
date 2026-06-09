const color_tags = require('./transformations/color-tags');
const collapsibles = require('./transformations/collapsibles');
const eylanding = require('./transformations/eylanding');
const markdown_tables = require('./transformations/markdown-tables');
const hyphenation = require('./transformations/hyphenation');

module.exports = function (config, exclusions) {
  hyphenation(config, exclusions);
  color_tags(config, exclusions);
  collapsibles(config, exclusions);
  eylanding(config, exclusions);
  markdown_tables(config, exclusions);
}