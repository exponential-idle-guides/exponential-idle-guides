const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnotes = require('markdown-it-footnote');

const slugify = require('slugify');

const { inspect } = require('util');

const pluginTOC = require('eleventy-plugin-toc');
const pluginNestingTOC = require('eleventy-plugin-nesting-toc');

const preprocessors = require('./config/.11ty/preprocessors');
const transformations = require('./config/.11ty/transformations');
const MathJax = require('./config/.11ty/MathJax');
const filters = require('./config/.11ty/filters');
const collections = require('./config/.11ty/collections');

const transformExcludes = [
  "_site/sitemap.xml"
];

module.exports = config => {
  const markdownItOptions = {
    html: true,
    typographer: true,
    breaks: true
  };

  const markdownItAnchorOptions = {
    slugify: s => slugify(s, {
      lower: true,
      strict: true
    }),
    renderPermalink: (slug, opts, state, idx) => {
      // Space before permalink
      const space = new state.Token('text', '', 0);
      space.content = ' ';

      // Anchor Open: <a class="direct-link" href="#slug" aria-label="...">
      const linkOpen = new state.Token('link_open', 'a', 1);
      linkOpen.attrs = [
        ['class', 'direct-link'],
        ['href', `#${slug}`],
        ['aria-label', `Permalink: ${slug}`]
      ];

      // Visually Hidden Span: <span class="visually-hidden">slug</span>
      const vhOpen = new state.Token('span_open', 'span', 1);
      vhOpen.attrs = [['class', 'visually-hidden'], ['style', 'display:none;']];
      const vhText = new state.Token('text', '', 0);
      vhText.content = `Permalink: ${slug}`;
      const vhClose = new state.Token('span_close', 'span', -1);

      // Icon Span (Hidden from SR): <span aria-hidden="true">#</span>
      const iconOpen = new state.Token('span_open', 'span', 1);
      iconOpen.attrs = [['aria-hidden', 'true']];
      const iconText = new state.Token('text', '', 0);
      iconText.content = '#';
      const iconClose = new state.Token('span_close', 'span', -1);

      // Anchor Close: </a>
      const linkClose = new state.Token('link_close', 'a', -1);

      // Push all tokens into the header's inline children array
      state.tokens[idx + 1].children.push(
        space,
        linkOpen, 
        vhOpen, vhText, vhClose,
        iconOpen, iconText, iconClose, 
        linkClose
      );
    },
    level: [1,2,3,4,5]
  };

  config.addPlugin(pluginTOC)
  config.addPlugin(pluginNestingTOC)

  config.addTemplateFormats("md"); // Make sure .md files are processed by this handler 
  config.setLibrary("md", markdownIt(markdownItOptions)
    .use(markdownItAnchor, markdownItAnchorOptions)
    .use(markdownItFootnotes)
    .use(markdownItAttrs, {
      leftDelimiter: '{',
      rightDelimiter: '}',
      allowedAttributes: []
    })
  );

  config.setDataDeepMerge(true);

  preprocessors(config);
  transformations(config, transformExcludes);
  MathJax(config, transformExcludes);
  filters(config);  
  collections(config);

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

  config.addGlobalData("site", { url: "https://exponential-idle-guides.netlify.app" });

  return {
    dir: {
      input: "src/view",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: 'njk'
  };
}