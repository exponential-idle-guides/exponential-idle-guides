const table_classes = ["variable_summary", "newwords", "T2", "PlayStrats", "spqcey", "rankings", "breakdown", "breakdown-simplified"];

(function($) {
    $.fn.changeElementType = function(newType) {
        var attrs = {};

        $.each(this[0].attributes, function(idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        return this.replaceWith(function() {
            return $("<" + newType + "/>", attrs).append($(this).contents());
        });
    }
})(jQuery);

const colspan_num = (s) => (s == undefined || s == NaN || Number(s) < 1) ? 1: Number(s);
const lowercase = (s) => s == undefined ? undefined: s.toLowerCase();
const soft_hyphen = (s) => s.replaceAll(String.fromCharCode(0x00ad),"");

const table_wrapper = $("div.table-wrapper");
table_wrapper.each(function() {
  const t = $(this);
  const i = table_wrapper.index(this);
  const table = $(t.find("table")[0]);
  // caption, table id, table classes, and last_row
  const prev = t.prev();
  if (prev.is("p")) {
    const res = /^(?:(?=(?:.*?(Caption:\s*(?<caption>[^;]*)\s*;))?)(?=(?:.*?(ID:\s*(?<id>[a-zA-Z\d]+(?!\-)|[a-zA-Z\d]+(?:\-[a-zA-Z\d]+)+)\s*;))?)(?=(?:.*?(Class:\s*(?<classes>[a-zA-Z\d]+(?!\-)|[a-zA-Z\d]+(?:\-[a-zA-Z\d]+)+)\s*;))?)(?=(?:.*?(last_row:\s*(?<last_row>[tT][rR][uU][eE]|[fF][aA][lL][sS][eE])\s*;))?))\s*(?:\1\s*(?:\3?\s*(?:\5?\s*\7?|\7?\s*\5?)?|\5?\s*(?:\3?\s*\7?|\7?\s*\3?)?)|\3\s*(?:\1?\s*(?:\5?\s*\7?|\7?\s*\5?)?|\5?\s*(?:\1?\s*\7?|\7?\s*\1?)?)|\5\s*(?:\1?\s*(?:\3?\s*\7?|\7?\s*\3?)?|\3?\s*(?:\1?\s*\7?|\7?\s*\1?)?)|\7\s*(?:\1?\s*(?:\3?\s*\5?|\5?\s*\3?)?|\3?\s*(?:\1?\s*\5?|\5?\s*\1?)?))\s*$/msg
        .exec(soft_hyphen(prev.html()));
    if (res != null){
      const caption = res.groups.caption;
      const id = res.groups.id;
      const classes = res.groups.classes;
      const last_row = res.groups.last_row;
      if (caption != undefined) {table[0].createCaption().textContent = caption;}
      if (id != undefined) {table.attr("id", id);}
      if (classes != undefined) {table.addClass(classes);}
      if (last_row == undefined || last_row.toLowerCase() == "true") {
        table.find("tbody").find("tr:last-child").addClass("last_row");
      }
      $(this).prev().remove();
    }
  }
  // colspan
  while (/<(?<start>th|td)(?: colspan="(?<first>\d+)")?><\/\1>\s*<\1(?: colspan="(?<second>\d+)")?>(?<inner>[^<]*)<\/\1>/g.test(table.html())) {
    table.html().matchAll(/<(?<start>th|td)(?: colspan="(?<first>\d+)")?><\/\1>\s*<\1(?: colspan="(?<second>\d+)")?>(?<inner>[^<]*)<\/\1>/g)
      .forEach((s) => {
        table.html(table.html()
          .replace(s[0],
            "<" + s[1] + " colspan=\"" 
            + (colspan_num(s[2]) + colspan_num(s[3]))
            + "\">" + s[4]
            + "</" + s[1] + ">"
          )
        );
      }
    );
  }
  
  // individual element classes, styles, types
  // Also includes INVIS & ARROW shorthand support when alongside modifications
  ["td", "th"].forEach((ele) => {table.find(ele).each(function() {
    var t = $(this);
    const t_html = soft_hyphen(t.html());

    function process_inner(s) {
      if (s == "INVIS") {
        t.addClass("invisible");
        t.html("");
        return true;
      } else if (s == "ARROW") {
        t.addClass("arrow");
        t.html("→");
        return true;
      }
      return false;
    }
    // INVIS and ARROW shorthand
    const shorthand_res = /^(?<inner>INVIS|ARROW)$/g.exec(t_html);
    process_inner(shorthand_res == null ? undefined: shorthand_res.groups.inner);
    
    const res = /(?<=^\[)(?=(?:.*?class\s*=\s*["|“](?<classes>(?:\s*(?:[a-z]+(?!\-)|[a-z]+(?:\-[a-z]+)+))*)["|”];)?)(?=(?:.*?type\s*=\s*["|“](?<type>[a-z]*)["|”];)?)(?=(?:.*?style\s*=\s*["|“](?<styles>(?:\s*(?:[a-z]+(?!\-)|[a-z]+(?:\-[a-z]+)+)\s*:\s*[^;]*;\s*)*)["|”];)?)(?=.*?](?<inner>(?:.*$)?))/gs
      .exec(t_html);
    if (res == null) {return;}
    const classes = res.groups.classes;
    const type = res.groups.type;
    const styles = res.groups.styles;
    const inner = res.groups.inner;
    // INVIS and ARROW shorthand w/ modifications present
    const inner_bool = process_inner(inner);
    // if no modifications within the [], then let it be
    if (classes == undefined && type == undefined && styles == undefined) {return;}
    // remove styling after grabbing
    if(!inner_bool) {t.html(t.html().replace(/\[.*\](?=.*)/g, ""));}
    // add classes, styling, and change types (if applicable)
    if (classes != undefined) {t.addClass(classes);}
    if (styles != undefined) {
      styles.split(";").forEach((s) => {if (s.length) {t.attr("style", s + " !important;");}});
    }
    if (type != undefined) {t.changeElementType(type);}
  })});
});