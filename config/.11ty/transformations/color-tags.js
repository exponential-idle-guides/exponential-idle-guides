const cheerio = require('cheerio');

const tag_colors = {
  "green": "color:var(--strat-green)",
  "dark-green": "color:var(--strat-dark-green)",
  "red": "color:var(--strat-red)",
  "pink": "color:var(--strat-pink)",
  "blue": "color:var(--strat-blue)",
  "light-blue": "color:var(--strat-light-blue)",
  "orange": "color:var(--strat-orange);-webkit-text-stroke:var(--strat-orange-outline);",
  "yellow": "color:var(--strat-yellow);-webkit-text-stroke:var(--strat-yellow-outline);",
  "blackwhite": "color:var(--black-white)",
  "bw": "color:var(--black-white)"
};

module.exports = function (config, exclusions) {
  config.addTransform("color-tags", function(content, outputPath) {
    if (!exclusions.includes(outputPath) 
      && outputPath 
      && (outputPath.endsWith(".html")
        || outputPath.endsWith(".md")
        || outputPath.endsWith(".njk")
      )
    ) {
      const $ = cheerio.load(content);
      Object.keys(tag_colors).forEach((key) => {
        $(key).each(function() {
          $(this).attr("style",tag_colors[key] + " !important;");
          this.tagName = 'span';
        })
      });
      return $.html()
    } else {
      return content;
    }
  });
}