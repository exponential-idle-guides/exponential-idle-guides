const tag_colors = {
  "green": "color:var(--strat-green)",
  "red": "color:var(--strat-red)",
  "blue": "color:var(--strat-blue)",
  "orange": "color:var(--strat-orange)"
};

Object.keys(tag_colors).forEach((key) => {
  $(key).each(function() {
    $(this).attr("style",tag_colors[key] + " !important;");
    $(this).changeElementType("span");
  })
});