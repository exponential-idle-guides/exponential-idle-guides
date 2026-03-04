const _ = require('lodash');

const ct_dev_tags = ["preface", "day", "appendix"];

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

module.exports = function (config) {
  let ct_weeks = [];
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
      switch (
        post.data.tags.includes("day") 
          ? "day" 
          : post.data.tags.includes("preface") ? "preface" : "appendix"
      ) {
        case "day":
          post.data.prefix = "Day " + post.data.day + ": ";
          break;
        case "preface":
          post.data.prefix = "";
          break;
        case "appendix":
          post.data.week = post.data.week == -1 ? last_week + 1 : post.data.week;
          post.data.prefix = "Appendix "
            + ct_appendix_label(post.data.week) 
            + (
              appendix_count[ct_weeks.indexOf(post.data.week)] > 1 
              ? "."+ post.data.day 
              : ""
            ) + ": ";
          break;
      }
      post.data.title = post.data.prefix + post.data.short_title;
    })

    if (ct_weeks.indexOf(-1) != -1) ct_weeks.splice(ct_weeks.indexOf(-1),1);

    return posts;
  });

  config.addCollection("ct-creation-weeks", (c) => ct_weeks);

  ct_dev_tags.forEach((tag) => {
    config.addCollection('ct-'+tag, (collectionApi) => {
      return collectionApi
        .getFilteredByTags('ct-creation', tag)
        .sort((a, b) => ct_creation_post_sort(a, b));
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
}