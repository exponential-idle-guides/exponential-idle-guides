const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");

const Hypher = require('hypher')
const english = require('hyphenation.en-gb');

const slugify = require('slugify');

const hypher = new Hypher(english);

const { JSDOM } = require('jsdom');

const util = require('util');

const pluginTOC = require('eleventy-plugin-toc');

const pluginNestingTOC = require('eleventy-plugin-nesting-toc');

const _ = require("lodash");

const transformExcludes = [
  "_site/sitemap.xml"
];

function ct_creation_post_sort(a, b) {
  const a_true_ends =  a.data.day < 0 && a.data.week < 0;
  const b_true_ends =  b.data.day < 0 && b.data.week < 0;
  const a_type = a.data.tags.includes("preface") ? -1: a.data.tags.includes("appendix") ? 1: 0;
  const b_type = b.data.tags.includes("preface") ? -1: b.data.tags.includes("appendix") ? 1: 0;
  if (a_true_ends) {
    if (b_true_ends) {
      if (a_type == b_type) {
        return a.data.order - b.data.order;
      }
      return a_type - b_type;
    }
    return a_type;
  } else if (b_true_ends) {
    return -b_type;
  } else if (a.data.week == b.data.week) {
    if (a_type == b_type) {
      if (a_type == 0 && a.data.day != b.data.day) {
        return a.data.day - b.data.day;
      }
      return a.data.order - b.data.order;
    } 
    return a_type - b_type;
  }
  return a.data.week - b.data.week;
}

function ct_preface_appendix_title(title, tag) {
  let regex = /^\s*(?:[Aa][Pp][Pp][Ee][Nn][Dd][Ii][Xx]\s*(?:\s+[a-zA-Z]+)\s*(?:[:\-]))\s*(?<final_title>.*\S+)\s*$/gm;
  if (tag = "preface") {
    regex = /^\s*(?:[Pp][Rr][Ee][Ff][Aa][Cc][Ee]\s*(?:[:\-]))\s*(?<final_title>.*\S+)\s*$/gm;
  }
  const res = regex.exec(title);
  if (res == null) {
    return title;
  }
  const {final_title} = res.groups;
  return final_title;
}

function ct_appendix_label(index) {
  const b = 26;
  let out = ""
  for (let n = Math.floor(Math.log(index) / Math.log(b)); n >= 0; n--) {
    out += String.fromCharCode(64+Math.floor((index % (b ** (n + 1))) / (b ** n)));
  }
  return out;
}

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
    level: [1,2,3,4,5]
  };

  config.addPlugin(pluginTOC)
  config.addPlugin(pluginNestingTOC)

  config.setLibrary(
    "md",
    markdownIt(markdownItOptions)
      .use(markdownItAnchor, markdownItAnchorOptions)
      .use(require('markdown-it-mathjax3'))
      .use(markdownItAttrs, {
        leftDelimiter: '{',
        rightDelimiter: '}',
        allowedAttributes: []
      })
  );

  config.setDataDeepMerge(true);

  config.addTransform("hyphenation", (content, outputPath) => {
    if (!transformExcludes.includes(outputPath)) {

      const dom = new JSDOM(content);
      const document = dom.window.document;
      const NodeFilter = dom.window.NodeFilter;

      const filter = {
        acceptNode: n => n.parentElement.closest("pre") === null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
  
  config.addFilter("slug", s =>
    s !== undefined ?
      slugify(s, { lower: true, strict: true }) :
      "-"
  );

  config.addFilter("inspect", (s, d) =>
    util.inspect(s, {depth: d === undefined ? 2 : d})
  );

  config.addFilter("keys", obj => Object.keys(obj));

  config.addFilter("ct_true_ends", collection => collection.filter((post) => post.data.day < 0 && post.data.week < 0))

  config.addFilter("ct_filter_week", function(collection, week) {
    if (!collection || !Array.isArray(collection)) {
      return [];
    }
    return collection.filter((post) => post.data.week == week)
  });

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
  config.addCollection("ct-creation", function(collectionApi) {
    const posts = collectionApi.getFilteredByTag("ct-creation")
    let first = Number.POSITIVE_INFINITY;

    posts.map((post) => {
      post.data.tags = post.data.tags || [];
      const res = /^\s*[dD][aA][yY]\s*(?<day_number>[0-9]+)\s*:\s*(?<title>.*\S+)\s*$/gm.exec(post.data.title);
      if (res == null) {
        post.data.day = -1;
        post.data.week = -1;
      } else {
        const {day_number, title} = res.groups;
        post.data.short_title = title;
        const days = Number(day_number);
        post.data.day = days == 0 ? 0 : ((days - 1) % 7) + 1;
        post.data.week = Math.floor((days - post.data.day) / 7) + 1;
        first = Math.min(first, days);
        if (!ct_weeks.includes(post.data.week)) {
          ct_weeks.push(post.data.week);
        }
        
        if (post.data.tags.includes("preface")) {
          post.data.title = "Week " + post.data.week + ": " + title;
          post.data.short_title = ct_preface_appendix_title(title, "preface");
        } else if (post.data.tags.includes("appendix")) {
          post.data.title = "Week " + post.data.week + ": " + title;
          post.data.short_title = ct_preface_appendix_title(title, "appendix");
        } else if (!post.data.tags.includes("day")) {
          post.data.tags.push("day");
        }
      }
    });

    posts.filter((post) => 
      !(["preface", "day", "appendix"].some((tag) => 
        post.data.tags.includes(tag)
      ))).map((post) => {
      // All posts with order > first day will be 
      const tag = post.data.order <= first ? "preface" : "appendix";
      post.data.tags.push(tag);
      post.data.short_title = ct_creation_post_sort(post.data.title, tag);
    })
    
    posts.sort((a, b) => ct_creation_post_sort(a, b));

    let filt = posts.filter((post) => post.data.tags.includes("appendix"));
    let i = 1;
    filt.filter((post) => post.data.day < 0 && post.data.week < 0).map((post) => {
      post.data.appendix_prefix = ct_appendix_label(i)
      i++;
    });

    filt = filt.filter((post) => post.data.day >= 0)
    ct_weeks.forEach((w) => {
      i = 1;
      filt.filter((post) => post.data.week == w).map((post) => {
        post.data.appendix_prefix = ct_appendix_label(i)
        i++;
      });
    })

    return posts;
  });

  config.addCollection("ct-creation-weeks", function(c) {return ct_weeks;});

  const ct_dev_tags = ["preface", "day", "appendix"]
  ct_dev_tags.map((tag) => {
    config.addCollection('ct-'+tag, (collectionApi) => {
      return collectionApi.getFilteredByTags('ct-creation', tag).sort((a, b) => ct_creation_post_sort(a, b));
    });
  });

  config.addCollection("rankings", function(collectionApi) {
    return collectionApi.getFilteredByTag("ranking-news").sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  });

  config.addCollection("seasons", function(collectionApi) {
    return collectionApi.getFilteredByTag("season-news").sort(function(a, b) {
      return a.data.order - b.data.order;
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
  guide_tags.map((tag) => {
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
    markdownTemplateEngine: "njk"
  };
}
