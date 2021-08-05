const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const Hypher = require('hypher')
const english = require('hyphenation.en-gb');

const slugify = require('slugify');

const hypher = new Hypher(english);

const { JSDOM } = require('jsdom');

const util = require('util');

const pluginTOC = require('eleventy-plugin-toc')

module.exports = config => {

  const markdownItOptions = {
    html: true,
    typographer: true
  };

  const markdownItAnchorOptions = {
    permalink: true,
    slugify: s => slugify(s, {
      lower: true,
      strict: true
    }),
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
    permalinkAttrs: (slug, state) => ({
      "aria-label": "Permalink: " + slug
    }),
    level: [1,2,3,4]
  };


  config.addPlugin(pluginTOC)

  config.setLibrary(
    "md",
    markdownIt(markdownItOptions)
      .use(markdownItAnchor, markdownItAnchorOptions)
      .use(require('markdown-it-mathjax')())
  );

  config.setDataDeepMerge(true);

  config.addTransform("hyphenation", (content, outputPath) => {

    const dom = new JSDOM(content);
    const document = dom.window.document;
    const NodeFilter = dom.window.NodeFilter;

    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

    while (walk.nextNode()) {
      walk.currentNode.nodeValue = hypher.hyphenateText(walk.currentNode.nodeValue);
    }
    return dom.serialize();
  });

  config.addTransform("", (content, outputPath) => {

    const dom = new JSDOM(content);
    const document = dom.window.document;
    const tables = Array.from(document.querySelectorAll('table'));

    for (let table of tables) {
      const parent = table.parentNode;

      const wrappingDiv = document.createElement("div");
      wrappingDiv.classList.add('table-wrapper');
      parent.insertBefore(wrappingDiv, table)
      wrappingDiv.appendChild(table);
    }
    return dom.serialize();
  });

  config.addFilter("slug", s =>
    s !== undefined ?
      slugify(s, { lower: true, strict: true }) :
      "-"
  );

  config.addFilter("inspect", (s, d) =>
    util.inspect(s, {depth: d === undefined ? 2 : d})
  );

  config.addCollection("guides", function(collection) {
    return collection.getFilteredByTag("guide").sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "src/view/",
      output: "_site",
      markdownTemplateEngine: "njk"
    }
  };
}


