const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootnotes = require("markdown-it-footnote");

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

  config.setLibrary(
    "md",
    markdownIt(markdownItOptions)
      .use(markdownItAnchor, markdownItAnchorOptions)
      .use(require('markdown-it-mathjax3'))
      .use(require('markdown-it-footnote'))
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
    return 
  });


  const rankings = ["ranking", "season"];
  rankings.forEach((ranking) => {
    config.addCollection(ranking + "s", function(collectionApi) {
      return collectionApi.getFilteredByTag(ranking + "-news").sort(function(a, b) {
        return b.date - a.date;
      });
    });
  });

  config.addCollection("postsByYear", (collectionApi) => {
    return _.chain(collectionApi.getAllSorted())
      .groupBy((post) => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
    /*return rankings.reduce((acc, name, i) => {
      acc = acc || {};
      acc[name] = _.chain(collectionApi
          .getFilteredByTag(rankings[i])
          .sort((a,b) => b.data.order - a.data.order)
        ).groupBy((post) => post.date.getFullYear())
        .toPairs()
        .reverse()
        .value();
    });*/
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
    markdownTemplateEngine: "njk"
  };
}