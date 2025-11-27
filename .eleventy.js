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

  config.addFilter("ToC_conversion", function(ToC, content) {
    const toc_dom = new JSDOM(ToC.val);
    const toc_doc = toc_dom.window.document;
    const dom = new JSDOM(content.val);
    const doc = dom.window.document;

    var start = '<nav class="toc">';
    const h2s = doc.querySelectorAll('h2');
    const h3s = doc.querySelectorAll('h3');
    const h4s = doc.querySelectorAll('h4');

     function docPosition(element1, element2) {
      function comparePosition(a, b) {
        return a.compareDocumentPosition ? 
          a.compareDocumentPosition(b) : 
          a.contains ? 
            (a != b && a.contains(b) && 16) + 
              (a != b && b.contains(a) && 8) + 
              (a.sourceIndex >= 0 && b.sourceIndex >= 0 ?
                (a.sourceIndex < b.sourceIndex && 4) + 
                  (a.sourceIndex > b.sourceIndex && 2) :
                1)
            + 0 : 0;
      }

      var position = comparePosition(element1, element2);

      if (position & 0x04) {return 'after';}
      if (position & 0x02) {return 'before';}
    };

    function H_between_Hs(startingH, tag_outer, tag_mid) {
      if (!startingH || startingH.tagName.toLowerCase() !== tag_outer) {
        console.error("Starting H3 element not found or is not an H3.");
        return [];
      }
      const h_between = [];
      let currentElement = startingH.nextElementSibling;
      while (currentElement) {
        var lower = currentElement.tagName.toLowerCase()
        if (lower === tag_outer || lower === 'h2') {break;}
        if (lower === tag_mid) {
          h_between.push(currentElement);
        }
        currentElement = currentElement.nextElementSibling;
      }
      return h_between;
    }

    if (h2s.length) {
      if (!h3s.length && !h4s.length) {
        start += '<ol>';
        h2s.forEach(h2 => {
          start += '<li><a href="#' + h2.id + '">' + h2.innerHTML +'</a></li>'
        })
        start += '</ol>'
      } else if (!h3s.length || !h4s.length) {
        const inner_hs = h3s.length ? 'h3' : 'h4';
        if (!docPosition(h2s[0], h3s.length ? h3s[0] : h4s[0])) {
          start += '<ol>'
          for (const h_in of (h3s.length ? h3s : h4s)) {
            if (docPosition(h2s[0], h_in)) {break;}
            start += '<li><ol><li><a href="#' + h_in.id + '">' + h_in.innerHTML +'</a></li></ol></li>'
          }
          start += '</ol>'
        }
        if (h2s.length == 1) {
          const hs_between = H_between_Hs(h2s[0], 'h2', inner_hs);
          h2s[0].classList.add('toc-skip')
          start += '<a href="#' + h2s[0].id + '">';
          start += h2s[0].outerHTML;
          start += '</a>';
          h2s[0].classList.remove('toc-skip')
          start += '<ol>'
          hs_between.forEach(h_in => {
            start += '<li><a href="#' + h_in.id + '">' + h_in.innerHTML +'</a></li>'
          })
          start += '</ol>'
        } else {
          h2s.forEach(h2 => {
            const hs_between = H_between_Hs(h2, 'h2', inner_hs);
            if (!hs_between.length) {
              h2.classList.add('toc-skip');
            }
            start += h2.outerHTML
            if (hs_between.length) {
              start += '<ol>'
              hs_between.forEach(h_in => {
                start += '<li><a href="#' + h_in.id + '">' + h_in.innerHTML +'</a></li>'
              })
              start += '</ol>'
            } else {
              h2.classList.remove('toc-skip');
            }
          })
        }
      } else {
        if (docPosition(h2s[0], h3s[0]) || docPosition(h2s[0], h4s[0])) {
          start += '<ol>'
          if (!docPosition(h2s[0], h4s[0])) {
            for (const h3 of h3s) {
              if (docPosition(h2s[0], h3)) {break;}
              start += '<li><a href="#' + h3.id + '">' + h3.innerHTML +'</a></li>'
            }
          } else if (!docPosition(h2s[0], h3s[0])) {
            for (const h4 of h4s) {
              if (docPosition(h2s[0], h4)) {break;}
              start += '<li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li>'
            }
          } else {
            if (!docPosition(h3s[0], h4s[0])) {
              for (const h4 of h4s) {
                if (docPosition(h3s[0], h4)) {break;}
                start += '<li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li>'
              }
            }
            for (const h3 of h3s) {
              if (docPosition(h2s[0], h3)) {break;}
              start += '<li><a href="#' + h3.id + '">' + h3.innerHTML + '</a>'
              const h4s_between = H_between_Hs(h3, 'h3', 'h4');
              if (h4s_between.length) {
                if (!docPosition(h2s[0], h4s_between[0])) {
                  start += '<ol>'
                  for (const h4 of h4s_between) {
                    if (docPosition(h2s[0], h4)) {break;}
                    start += '<li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li>';
                  }
                  start += '</ol>';
                }
              }
              start += '</li>';
            }
          }
          start += '</ol>';
        }
        if (h2s.length == 1) {
          const h3s_between = H_between_Hs(h2s[0], 'h2', 'h3');
          const h4s_between = H_between_Hs(h2s[0], 'h2', 'h4');
          h2s[0].classList.add('toc-skip');
          start += '<a href="#' + h2s[0].id + '">';
          start += h2s[0].outerHTML;
          start += '</a>';
          h2s[0].classList.remove('toc-skip');
          start += '<ol>'
          for (const h4 of h4s_between) {
            if (docPosition(h3s_between[0], h4)) {break;}
            start += '<li><ol><li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li></ol></li>'
          }
          h3s_between.forEach(h3 => {
            const hs_between = H_between_Hs(h3, 'h3', 'h4')
            start += '<li>' + h3.innerHTML
            if (hs_between.length) {
              start += '<ol>'
              hs_between.forEach(h4 => {
                start += '<li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li>'
              })
              start += '</ol>'
            }
            start += '</li>'
          })
          start += '</ol>'
        } else {
          h2s.forEach(h2 => {
            const h3s_between = H_between_Hs(h2, 'h2', 'h3');
            const h4s_between = H_between_Hs(h2, 'h2', 'h4');
            if (!h3s_between.length && !h4s_between.length) {
              h2.classList.add('toc-skip');
            }
            start += h2.outerHTML
            if (h3s_between.length && h4s_between.length) {
              start += '<ol>'
              for (const h4 of h4s_between) {
                if (docPosition(h3s_between[0], h4)) {break;}
                start += '<li><ol><li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li></ol></li>'
              }
              h3s_between.forEach(h3 => {
                const hs_between = H_between_Hs(h3, 'h3', 'h4')
                start += '<li>' + h3.innerHTML
                if (hs_between.length) {
                  start += '<ol>'
                  hs_between.forEach(h4 => {
                    start += '<li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li>'
                  })
                  start += '</ol>'
                }
                start += '</li>'
              })
            } else if (h3s_between.length || h4s_between.length) {
              const hs_between = h3s_between.length ? h3s_between : h4s_between;
              start += '<ol>'
              hs_between.forEach(h_in => {
                start += '<li><a href="#' + h_in.id + '">' + h_in.innerHTML +'</a></li>'
              })
              start += '</ol>'
            } else {
              h2.classList.remove('toc-skip');
            }
          })
        }
      }
    } else if (h3s.length) {
      if (!h4s.length) {
        start += '<ol>'
        h3s.forEach(h3 => {
          start += '<li><a href="#' + h3.id + '">' + h3.innerHTML +'</a></li>'
        })
        start += '</ol>'
      } else {
        if (!docPosition(h3s[0], h4s[0])) {
          start += '<ol>'
          for (const h4 of h4s) {
            if (docPosition(h3s[0], h4)) {break;}
            start += '<li><ol><li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li></ol></li>'
          }
          start += '</ol>'
        }
        if (h3s.length == 1) {
          const h4s_between = H_between_Hs(h3s[0], 'h3', 'h4');
          h3s[0].classList.add('toc-skip');
          start += '<a href="#' + h3s[0].id + '">';
          start += h3s[0].outerHTML;
          start += '</a>';
          h3s[0].classList.remove('toc-skip');
          if (h4s_between.length) {
              start += '<ol>'
              h4s_between.forEach(h4 => {
                start += '<li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li>'
              })
              start += '</ol>';
            }
        } else {
          h3s.forEach(h3 => {
            const h4s_between = H_between_Hs(h3, 'h3', 'h4');
            if (!h4s_between.length) {
              h3.classList.add('toc-skip');
            }
            start += h3.outerHTML
            if (h4s_between.length) {
              start += '<ol>'
              h4s_between.forEach(h4 => {
                start += '<li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li>'
              })
              start += '</ol>';
            } else {
              h3.classList.remove('toc-skip');
            }
          })
        }
      }
    } else if (h4s.length) {
      start += '<ol>'
      h4s.forEach(h4 => {
        start += '<li><a href="#' + h4.id + '">' + h4.innerHTML +'</a></li>'
      })
      start += '</ol>'
    } else {
      return '<p>No headers have been established.<br>Please add headers for Table of Contents.</br></p>'
    }
    return start + '</nav>'
  })

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