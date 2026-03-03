const tag_colors = {
  "green": "color:var(--strat-green)",
  "dark-green": "color:var(--strat-dark-green)",
  "red": "color:var(--strat-red)",
  "blue": "color:var(--strat-blue)",
  "orange": "color:var(--strat-orange)",
  "yellow": "color:var(--strat-yellow)",
  "blackwhite": "color:var(--black-white)",
  "bw": "color:var(--black-white)"
};

export function color_tags($){
  Object.keys(tag_colors).forEach((key) => {
    $(key).each(function() {
      $(this).attr("style",tag_colors[key] + " !important;");
      this.tagName = 'span';
    })
  });
  return $.html()
}