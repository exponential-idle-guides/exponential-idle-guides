const _ = require('lodash');

module.exports = function (config) {
  const rankings = ["ranking", "season"];
  rankings.forEach((ranking) => {
    config.addCollection(ranking + "s", function(collectionApi) {
      return collectionApi.getFilteredByTag(ranking + "-news").sort(function(a, b) {
        return a.date - b.date;
      });
    });
  });

  config.addCollection("postsByYear", (collectionApi) => {
    return _.chain(collectionApi.getAllSorted())
      .groupBy((post) => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  });
}