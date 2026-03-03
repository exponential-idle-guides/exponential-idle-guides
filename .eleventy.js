const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootnotes = require("markdown-it-footnote");

const Hypher = require('hypher')
const english = require('hyphenation.en-gb');

const slugify = require('slugify');

const hypher = new Hypher(english);

const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { jsdomAdaptor } = require('mathjax-full/js/adaptors/jsdomAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');
const { JSDOM } = require('jsdom');

const cheerio = require('cheerio');

const util = require('util');

const pluginTOC = require('eleventy-plugin-toc');

const pluginNestingTOC = require('eleventy-plugin-nesting-toc');

const _ = require("lodash");

const transformExcludes = [
  "_site/sitemap.xml"
];

const { eylanding } = require('./preprocessing/eylanding');
const { color_tags } = require('./preprocessing/color-tags');
const { markdown_tables } = require('./preprocessing/markdown-tables');
const { collapsibles } = require('./preprocessing/collapsibles');

function ct_creation_post_sort(a, b) {
  const has_tag = (post, tag) => post.data.tags.includes(tag);
  if (a.data.week != b.data.week) {
    if (a.data.week == -1) return has_tag(a, "preface") ? -1: 1;
    if (b.data.week == -1) return has_tag(b, "preface")  ? -1: 1;
    return a.data.week - b.data.week;
  }
  
  const a_type = has_tag(a, "preface") ? -1: has_tag(a, "appendix") ? 1: 0;
  const b_type = has_tag(b, "preface") ? -1: has_tag(b, "appendix") ? 1: 0;
  if (a_type == b_type) return a.data.day - b.data.day;
  return a_type - b_type;
}

function ct_appendix_label(index) {
  const b = 26;
  let out = ""
  for (let n = Math.floor(Math.log(index) / Math.log(b)); n >= 0; n--) {
    out += String.fromCharCode(64+Math.floor((index % (b ** (n + 1))) / (b ** n)));
  }
  return out;
}

function ct_toNumber(input) {
  const output = Number(input);
  if (!isNaN(output)) return output;
  const code = input.toLowerCase().charCodeAt(0)-96;
  return (code <= 0 || code > 25) ? null: code;
}

function extract_inline_math(text) {
  const matches = [];
  let isInside = false;
  let braceDepth = 0;
  let currentMatch = "";
  let startIndex = -1;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (!isInside) {
      if (char === '$' && text[i-1] !== '\\') {
        isInside = true;
        startIndex = i;
        currentMatch = "$";
      }
    } else {
      currentMatch += char;

      if (char === '{') {
        braceDepth++;
      } else if (char === '}') {
        braceDepth = Math.max(0, braceDepth - 1);
      } else if (char === '$' && braceDepth === 0) {
        matches.push(currentMatch);
        isInside = false;
        currentMatch = "";
      } else if (char === '\n') {
        isInside = false;
        braceDepth = 0;
        currentMatch = "";
      }
    }
  }
  return matches;
}

module.exports = config => {
  const markdownItOptions = {
    html: true,
    typographer: true,
    breaks: true
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
    level: [1,2,3,4,5]
  };

  config.addPlugin(pluginTOC)
  config.addPlugin(pluginNestingTOC)

  config.addTemplateFormats("md"); // Make sure .md files are processed by this handler 

  const math_replacements = {
    "LATEXASTERISK": "*",
    "LATEXUNDERSCORE": "_",
    "LATEXTILDE": "~",
    "LATEXVERTICALBAR": "|",
    "LATEXMINUS": "-",
    "LATEXPLUS": "+",
    "LATEXGT": ">",
    "LATEXLIST": "",
    "LATEXBACKTICK": "`",
    "LATEXSPACECOMMA": "\\,"
  };
  config.addPreprocessor("math-replace", "md", (data, content) => {
    // This runs on the RAW markdown string before any parsing
    if (typeof content === "string" 
      && (/[^\$]\$[^\$]+\$[^\$]|\$\$[^\$]+\$\$|\\\((?:[^\\].|\\[^\)])*\\\)|\\\[(?:[^\\][^\]])\\\[/.test(content))
    ) {
      const block_math_regex = /\$\$(?:[^\$]*\$[^\$]+|\s*\\\$|[^\$])+\$\$/gmu;
      const block_math_arr = content.match(block_math_regex);

      block_math_regex.lastIndex = 0;
      let counter = -1;
      const block_math_replaced = block_math_arr === null ? content: content.replace(block_math_regex, () => {
        counter++;
        return `LATEX_BLOCK_MATH_${counter}`
      })

      if (block_math_arr !== null) {
        block_math_arr.forEach((str, i) => {
          block_math_arr[i] = str
            .replace(/(\\\\[\r\n\f\v]+)/g, "\\\\$1")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\*/g, "$1LATEXASTERISK")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])_/g, "$1LATEXUNDERSCORE")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])~/g, "$1LATEXTILDE")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\|/g, "$1LATEXVERTICALBAR")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])-/g, "$1LATEXMINUS")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\+/g, "$1LATEXPLUS")
            .replace(/([\n\f]\s*)>([^\n\f\v]*)/g, "$1LATEXGT$2")
            .replace(/([\n\f]\s*)(\d[\.\)] )([^\n\f\v]*)/g, "$1LATEXLIST$2$3")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])`/g, "$1LATEXBACKTICK")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\\,/g, "$1LATEXSPACECOMMA");
        });
      }

      let output_content = block_math_replaced;
      const inline_math = extract_inline_math(output_content);
      inline_math.forEach((str) => {
        output_content = output_content.replace(
          str,
          str
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\*/g, "$1LATEXASTERISK")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])_/g, "$1LATEXUNDERSCORE")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])~/g, "$1LATEXTILDE")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\|/g, "$1LATEXVERTICALBAR")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])-/g, "$1LATEXMINUS")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\+/g, "$1LATEXPLUS")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])`/g, "$1LATEXBACKTICK")
            .replace(/((?:(?:^|[^\\])\\(?:\\{2})*\\)|[^\\])\\,/g, "$1LATEXSPACECOMMA")
        );
      });

      if (block_math_arr !== null) {
        block_math_arr.forEach((str, i) => {
          output_content = output_content.replace(`LATEX_BLOCK_MATH_${i}`, str);
        });
      }
      return output_content
    }
    return content
  }); 
  
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

  // Initialize MathJax
  const adaptor = jsdomAdaptor(JSDOM);
  RegisterHTMLHandler(adaptor);

  // Custom Macros
  const LaTeXMacros = {
    RR: '{\\mathbb{R}}',
    bold: ['{\\mathbf{#1}}', 1],    // Macro with 1 argument
    ee: ['{\\times 10^{#1}}', 1],   // Custom scientific notation
    joinrel: '{\\mathrel{\\mkern-3mu}}',
    relbar: '{-}',
    perm: ['{{}_{#1}\\!P_{#2}}', 2],
    extrarightarrow: ['{\\xrightarrow{\\hspace{#1}}}', 1],
    extraleftarrow: ['{\\xleftarrow{\\hspace{#1}}}', 1],
    fractext: ['{\\text{$\\frac{\\text{#1}}{\\text{#2}}$}}', 2]
  };
  
  // Setup Mathjax packages, macros, and delimiters
  const tex = new TeX({ 
    packages: [...AllPackages, 'base', 'ams', 'newcommand', 'configmacros', 'color', 'physics', 'float', 'setspace', 'mathptmx', 'amsmath', 'tikz', 'xspace', 'amssymb', 'amsthm', 'enumitem', 'gensymb', 'mathtools', 'multicol', 'multirow', 'hhline', 'nicematrix', 'listings', 'ifthen', 'graphicx', 'pgfplotstable', 'pgfplots'],
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    macros: LaTeXMacros
  });
  const svg = new SVG({ fontCache: 'local' });

  
  config.addTransform("mathjax", async function(content) {
    if (this.page.outputPath 
      && this.page.outputPath.endsWith(".html") 
      && (/[^\$]\$[^\$]+\$[^\$]|\$\$[^\$]+\$\$|\\\((?:[^\\].|\\[^\)])*\\\)|\\\[(?:[^\\][^\]])\\\[/.test(content))
    ) {
      const restored_content = content.replace(
        new RegExp(Object.keys(math_replacements).join("|"), "gm"),
        matched => math_replacements[matched]
      )
      // Create DOM and document
      const dom = adaptor.parse(restored_content);
      const html = mathjax.document(dom, {
          InputJax: tex,
          OutputJax: svg,
      });

      // Render the math
      html.render();

      // Check if math was found
      // If not, return original content
      if (Array.from(html.math).length === 0) return content;

      // Return the rendered content
      return (
        adaptor.doctype(html.document) + "\n" +
        adaptor.outerHTML(adaptor.root(html.document))
      );
    }
    return content;
  });
  config.addTransform("hyphenation", (content, outputPath) => {
    if (!transformExcludes.includes(outputPath)) {
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

  config.addTransform("color-tags", function(content, outputPath) {
    if (!transformExcludes.includes(outputPath) 
        && outputPath 
        && (outputPath.endsWith(".html")
          || outputPath.endsWith(".md")
          || outputPath.endsWith(".njk")
        )
    ) {
      return color_tags(cheerio.load(content))
    } else {
      return content;
    }
  });

  config.addTransform("eylanding", function(content, outputPath) {
    if (!transformExcludes.includes(outputPath) 
        && outputPath 
        && (outputPath.endsWith(".html")
          || outputPath.endsWith(".md")
          || outputPath.endsWith(".njk")
        )
    ) {
      return eylanding(cheerio.load(content));
    } else {
      return content;
    }
  });

  config.addTransform("markdown-tables", function(content, outputPath) {
    if (!transformExcludes.includes(outputPath) 
        && outputPath 
        && (outputPath.endsWith(".html")
          || outputPath.endsWith(".md")
          || outputPath.endsWith(".njk")
        )
    ) {    
      return markdown_tables(cheerio.load(content));
    } else {
      return content;
    }
  });

  config.addTransform("collapsibles", function(content, outputPath) {
    if (!transformExcludes.includes(outputPath) 
        && outputPath 
        && (outputPath.endsWith(".html")
          || outputPath.endsWith(".md")
          || outputPath.endsWith(".njk")
        )
    ) {
      const page = this.page
      return collapsibles(cheerio.load(content), page.filePathStem, slugify);
    } else {
      return content;
    }
  });

  config.addFilter("slug", s =>
    s !== undefined ?
      slugify(s, { lower: true, strict: true }) :
      "-"
  );

  config.addFilter("inspect", (s, d) =>
    util.inspect(s, {depth: d === undefined ? 2 : d})
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
  
  let ct_weeks = [];
  const ct_dev_tags = ["preface", "day", "appendix"];
  let last_week;
  config.addCollection("ct-creation", function(collectionApi) {
    let posts = collectionApi.getFilteredByTag("ct-creation")

    posts.forEach((post) => {
      post.data.tags = post.data.tags || [];
      const res = /^(?<tag>preface|appendix|day)(([\-_]?)(?:(?<time>\d+|(?<=appendix[\-_])[a-z]+)|(?<!day\3))([\-_]?))(?:(?<!day\2)(?<order>(?<!appendix\3[a-z]+\5)[a-z]+|\d+)|)$/i.exec(post.data.page.fileSlug);
      if (res == null){
        if (!post.data.tags.includes("BAD_CT_CREATION")) post.data.tags.push("BAD_CT_CREATION");
        return;
      }

      post.data.short_title = /^\s*((?:\S*(?:\s*(?=\S)|))*)\s*$/.exec(post.data.title)[1];
      
      const {tag, time, order} = res.groups;
      const tag_lower = tag.toLowerCase();
      // Add the correct tag and remove the other incorrect tags
      if (!post.data.tags.includes(tag_lower)) post.data.tags.push(tag_lower);
      post.data.tags = post.data.tags.filter((t) => t == tag_lower || !ct_dev_tags.includes(t));

      if (time === undefined) {
        t = 0;
      } else {
        t = ct_toNumber(time);
      }
      if (tag_lower == "day") {
        post.data.day = t == 0 ? 0 : ((t - 1) % 7) + 1;
        post.data.week = Math.floor((t - post.data.day) / 7) + 1;
      } else if (order == undefined) {
        post.data.day = t;
        post.data.week = -1;
      } else {
        post.data.day = ct_toNumber(order);
        post.data.week = t;
      }
      if (!ct_weeks.includes(post.data.week)) {
        ct_weeks.push(post.data.week);
      }
    });

    posts = posts.filter((post) => !post.data.tags.includes("BAD_CT_CREATION"));
    posts.sort((a, b) => ct_creation_post_sort(a, b));

    let appendices = posts.filter((post) => post.data.tags.includes("appendix"));
    appendix_count = [];
    ct_weeks.forEach((w) => {
      let i = 0;
      appendices.filter((post) => post.data.week == w).forEach((post) => {
        i++;
        post.data.day = i;
      });
      appendix_count.push(i);
    });

    last_week = Math.max(...ct_weeks);
    posts.forEach((post) => {
      switch (post.data.tags.includes("day") ? "day" : post.data.tags.includes("preface") ? "preface" : "appendix") {
        case "day":
          post.data.prefix = "Day " + post.data.day + ": ";
          break;
        case "preface":
          /*
          if (post.data.week == -1) {
            post.data.prefix = "";
          } else {
            post.data.prefix = "Preface : ";
          }
          */
          post.data.prefix = "";
          break;
        case "appendix":
          post.data.week = post.data.week == -1 ? last_week + 1 : post.data.week;
          post.data.prefix = "Appendix " + ct_appendix_label(post.data.week) 
            + (appendix_count[ct_weeks.indexOf(post.data.week)] > 1 ? "." + post.data.day : "") + ": ";
          break;
      }
      post.data.title = post.data.prefix + post.data.short_title;
    })

    if (ct_weeks.indexOf(-1) != -1) ct_weeks.splice(ct_weeks.indexOf(-1),1);

    return posts;
  });

  config.addCollection("ct-creation-weeks", function(c) {return ct_weeks;});

  ct_dev_tags.forEach((tag) => {
    config.addCollection('ct-'+tag, (collectionApi) => {
      return collectionApi.getFilteredByTags('ct-creation', tag).sort((a, b) => ct_creation_post_sort(a, b));
    });
  });
  
  config.addCollection("postsByWeek", (collectionApi) => {
    const output = _.chain(collectionApi.getAllSorted())
      .groupBy((post) => post.data.week)
      .toPairs()
      .reverse()
      .value();
    collectionApi.getFilteredByTags('ct-appendix').forEach((post) => {
      if (post.data.week > last_week) post.data.week = -1;
    });
    return output;
  });

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

  const guide_tags = ['T9+ Recommendations', 'T9+ Research', 'other', 'rankings', 'seasons'];
  guide_tags.forEach((tag) => {
    config.addCollection('ext-'+tag, (collectionApi) => {
      return collectionApi.getFilteredByTags('extensions', tag).sort(function(a, b) {
        return a.data.order - b.data.order;
      });
    });
  });

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