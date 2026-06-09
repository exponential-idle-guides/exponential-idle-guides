const { JSDOM } = require('jsdom');
const Hypher = require('hypher');
const english = require('hyphenation.en-gb');

const hypher = new Hypher(english);

module.exports = function (config, exclusions) {
  config.addTransform("hyphenation", (content, outputPath) => {
    if (!exclusions.includes(outputPath)) {
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const NodeFilter = dom.window.NodeFilter;

      const filter = {
        acceptNode: n => {
          if (!n.parentElement) return NodeFilter.FILTER_REJECT;
          if (
            n.parentElement.closest(
              "pre, code, script, style, .MathJax, [class^='mjx-'], [class*=' mjx-']"
            )
          ) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      };

      const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, filter);

      while (walk.nextNode()) {
        walk.currentNode.nodeValue = hypher.hyphenateText(walk.currentNode.nodeValue);
      }
      return dom.serialize();
    } else {
      return content;
    }
  });
}