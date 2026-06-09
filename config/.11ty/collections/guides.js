const guide_tags = ['T9+ Recommendations', 'T9+ Research', 'other', 'rankings', 'seasons'];

module.exports = function (config) {
  config.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByTag("guides").sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  });

  config.addCollection("extensions", function(collectionApi) {
    return collectionApi.getFilteredByTag("extensions").sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  });

  guide_tags.forEach((tag) => {
    config.addCollection('ext-'+tag, (collectionApi) => {
      return collectionApi.getFilteredByTags('extensions', tag).sort(function(a, b) {
        return a.data.order - b.data.order;
      });
    });
  });
}