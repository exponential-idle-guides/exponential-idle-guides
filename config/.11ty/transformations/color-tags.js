const cheerio = require('cheerio');

const tag_colors = {
  "green": "green",
  "dark-green": "dark-green",
  "red": "red",
  "light-red": "light-red",
  "pink": "light-red",
  "blue": "blue",
  "light-blue": "light-blue",
  "orange": "orange",
  "yellow": "yellow",
  "blackwhite": "black-white",
  "bw": "black-white"
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
          $(this).addClass(tag_colors[key]);
          this.tagName = 'span';
        })
      });
      return $.html()
    } else {
      return content;
    }
  });
}