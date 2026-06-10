const cheerio = require('cheerio');

const tag_colors = {
  "green": "color:var(--green)",
  "dark-green": "color:var(--dark-green)",
  "red": "color:var(--red)",
  "pink": "color:var(--pink)",
  "blue": "color:var(--blue)",
  "light-blue": "color:var(--light-blue)",
  "orange": "color:var(--orange)",
  "yellow": "color:var(--yellow)",
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
          $(this).addClass(key);
          this.tagName = 'span';
        })
      });
      return $.html()
    } else {
      return content;
    }
  });
}