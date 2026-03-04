const slugify = require('slugify');
const { inspect } = require('util');

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

  config.addFilter("ct_week", function(collection, week) {
    if (!collection || !Array.isArray(collection)) {
      return [];
    }
    return collection.filter((post) => post.data.week == week)
  });

  config.addFilter("ct_full_title", (post) => post.data.prefix + post.data.title);
  config.addFilter("ct_linked", (post) => post.data.prefix + '<a href="' + post.url + '">' + post.data.short_title + '</a>');
}