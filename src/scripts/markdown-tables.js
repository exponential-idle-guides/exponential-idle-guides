const table_scss_var = {
  "$table-border": "5px solid black",
  "$table-border-thin": "3px solid black",
  "$table-padding": "0.5em 0.4em 0.5em 0.4em"
};

(function($) {
    $.fn.changeElementType = function(newType) {
        let attrs = {};

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

$("table").each(function() {
  const table = $(this);
  // caption, table id, table classes, and last_row
  const prev = table.prev();
  if (prev.is("p")) {
    const res = /^(?:(?=(?:.*?(Caption:\s*(?<caption>[^;]*)\s*;))?)(?=(?:.*?(ID:\s*(?<id>[a-zA-Z\d]+(?![_\-])|[a-zA-Z\d]+(?:[_\-][a-zA-Z\d]+)+)\s*;))?)(?=(?:.*?(Class:\s*(?<classes>[a-zA-Z\d]+(?![_\-])|[a-zA-Z\d]+(?:[_\-][a-zA-Z\d]+)+)\s*;))?)(?=(?:.*?(last_row:\s*(?<last_row>[tT][rR][uU][eE]|[fF][aA][lL][sS][eE])\s*;))?))\s*(?:\1\s*(?:\3?\s*(?:\5?\s*\7?|\7?\s*\5?)?|\5?\s*(?:\3?\s*\7?|\7?\s*\3?)?|\7?\s*(?:\3?\s*\5?|\5?\s*\3?)?)|\3\s*(?:\1?\s*(?:\5?\s*\7?|\7?\s*\5?)?|\5?\s*(?:\1?\s*\7?|\7?\s*\1?)?|\7?\s*(?:\1?\s*\5?|\5?\s*\1?)?)|\5\s*(?:\1?\s*(?:\3?\s*\7?|\7?\s*\3?)?|\3?\s*(?:\1?\s*\7?|\7?\s*\1?)?|\7?\s*(?:\1?\s*\3?|\3?\s*\1?)?)|\7\s*(?:\1?\s*(?:\3?\s*\5?|\5?\s*\3?)?|\3?\s*(?:\1?\s*\5?|\5?\s*\1?)?|\5?\s*(?:\1?\s*\3?|\3?\s*\1?)?))\s*$/msg
        .exec(soft_hyphen(prev.html()));
    if (res != null){
      const {caption, id, classes, last_row} = res.groups;
      if (caption != undefined) {table[0].createCaption().textContent = caption;}
      if (id != undefined) {table.attr("id", id);}
      if (classes != undefined) {table.addClass(classes);}
      if (last_row == undefined || last_row.toLowerCase() == "true") {
        table.find("tbody").find("tr:last-child").addClass("last_row");
      }
      prev.remove();
    }
  }
  // colspan
  // TODO: Make this cleaner (and not as recursive and dumb)
  while (/<(?<start>th|td)(?: colspan="(?<first>\d+)")?><\/\1>\s*<\1(?: colspan="(?<second>\d+)")?>(?<inner>.*?)<\/\1>/g.test(table.html())) {
    table.html().matchAll(/<(?<start>th|td)(?: colspan="(?<first>\d+)")?><\/\1>\s*<\1(?: colspan="(?<second>\d+)")?>(?<inner>.*?)<\/\1>/g)
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
  // Removing thead/tbody if empty
  const thead = table.find("thead");
  if (/^(?:<tr><(th|td)(?: colspan="\d+")?><\/\1><\/tr>)+$/g.test(thead.html().replaceAll(/\n/g,""))) {thead.remove();}
  const tbody = table.find("tbody");
  if (/^(?:<tr><(th|td)(?: colspan="\d+")?><\/\1><\/tr>)+$/g.test(tbody.html().replaceAll(/\n/g,""))) {tbody.remove();}
  // individual element classes, styles, types, and shorthands
  ["td", "th"].forEach((ele) => {table.find(ele).each(function() {
    let t = $(this);
    const t_html = soft_hyphen(t.html());

    function process_inner(s) {
      let classes;
      let html;
      switch(s) {
        case "INVIS":
          classes = "invisible";
          html = "";
          break;
        case "ARROW":
          classes = "arrow";
          html = "→";
          break;
        case "CHECK":
          classes = "";
          html = "✔️";
          break;
        case "REDX":
        case "RED_X":
          classes = "";
          html = "❌";
          break;
        case "OR":
          classes = "";
          html = "<strong>Or</strong>";
          break;
        default:
          return false;
      }
      console.log("classes: ", classes, "html: ", html);
      t.addClass(classes);
      t.html(html);
      return true;
    }
    // Shorthands
    const shorthand_res = /^(?<inner>INVIS|ARROW|CHECK|REDX|RED_X|OR)$/g.exec(t_html);
    process_inner(shorthand_res == null ? undefined: shorthand_res.groups.inner);
    const res = /(?<=^\[)(?=(?:.*?class\s*=\s*["“](?<classes>(?:\s*(?:[a-zA-Z]+(?!\-)|[a-zA-Z]+(?:\-[a-zA-Z]+)+))*)["”];)?)(?=(?:.*?type\s*=\s*["“](?<type>[a-z]*)["”];)?)(?=(?:.*?style\s*=\s*["“](?<styles>(?:\s*(?:[a-z]+(?!\-)|[a-z]+(?:\-[a-z]+)+)\s*:\s*[^;]*;\s*)*)["”];)?)(?=(?:.*?footer\s*=\s*(?<footer>[tT][rR][uU][eE]|[fF][aA][lL][sS][eE]);)?)(?=.*?](?<inner>(?:.*$)?))/gs
      .exec(t_html);
    if (res == null) {return;}
    const {classes, type, styles, inner, footer} = res.groups;
    // Shorthands w/ modifications present
    const inner_bool = process_inner(inner);
    // if no modifications within the [], then let it be
    if (classes == undefined && type == undefined && styles == undefined) {return;}
    // remove styling after grabbing
    if(!inner_bool) {t.html(t.html().replace(/\[.*\](?=.*)/g, ""));}
    // add classes, styling, and change types (if applicable)
    if (classes != undefined) {t.addClass(classes);}
    if (styles != undefined) {
      styles.split(";").forEach((s) => {
        if (!s.length) {return;}
        const {style, value} = /^(?<style>[a-z]+(?!\-)|[a-z]+(?:\-[a-z]+)+):(?<value>[^;]*)$/g.exec(s.replaceAll(/\s*/g,"")).groups;
        t.attr("style", style + ":" + ((value in table_scss_var) ? table_scss_var[value]: value) + " !important;");
      });
    }
    // TODO: IMPLEMENT TABLE FOOTERS
    if (type != undefined) {t.changeElementType(type);}
  })});
});