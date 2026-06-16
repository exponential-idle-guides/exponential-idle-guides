const { remove_soft_hyphen, replace_br } = require('../../../src/utils/str');
const { colspan_num } = require('../../../src/utils/table');
const cheerio = require('cheerio');

const table_scss_var = {
  "$table-border": "5px solid black",
  "$table-border-thin": "3px solid black",
  "$table-padding": "0.5em 0.4em 0.5em 0.4em"
};
const p_regexes = {
  caption: new RegExp(String.raw`(?:^|;)(\s*[cC]aption:\s*(?<caption>(?:.*?(?:<.*?>.*?<\/.*?>|<\/?br>))*.*?)\s*;)`,"m"),
  id: new RegExp(String.raw`(?:^|;)(\s*[iI][dD]:\s*(?<id>[a-zA-Z\d]+(?![_\-])|[a-zA-Z\d]+(?:[_\-][a-zA-Z\d]+)+)\s*;)`,"m"),
  classes: new RegExp(String.raw`(?:^|;)(\s*[cC]lass(?:es)?:\s*(?<classes>[a-zA-Z\d]+(?![_\-])|[a-zA-Z\d]+(?:[_\-][a-zA-Z\d]+)+)\s*;)`,"m"),
  last_row: new RegExp(String.raw`(?:^|;)(\s*[lL]ast[_\- ][rR]ow:\s*(?<last_row>[tT][rR][uU][eE]|[fF][aA][lL][sS][eE])\s*;)`,"m"),
  align: new RegExp(String.raw`(?:^|;)(\s*[aA]lign:\s*(?<align>[lL][eE][fF][tT]|[mM][iI][dD][dD][lL][eE]|[rR][iI][gG][hH][tT])\s*;)`,"m"),
  header_rows: new RegExp(String.raw`(?:^|;)(\s*[hH]eader[_\- ][rR]ows:\s*(?<header_rows>\d+)\s*;)`,"m")
};
/*const p_regexes = {
    caption: String.raw`([cC]aption:\s*(?<caption>(?:.*?(?:<.*?>.*?<\/.*?>|<\/?br>))*.*?)\s*;)`,
    id: String.raw`([iI][dD]:\s*(?<id>[a-zA-Z\d]+(?![_\-])|[a-zA-Z\d]+(?:[_\-][a-zA-Z\d]+)+)\s*;)`,
    classes: String.raw`([cC]lass(?:es)?:\s*(?<classes>[a-zA-Z\d]+(?![_\-])|[a-zA-Z\d]+(?:[_\-][a-zA-Z\d]+)+)\s*;)`,
    last_row: String.raw`([lL]ast[_\- ][rR]ow:\s*(?<last_row>[tT][rR][uU][eE]|[fF][aA][lL][sS][eE])\s*;)`,
    align: String.raw`([aA]lign:\s*(?<align>[lL][eE][fF][tT]|[mM][iI][dD][dD][lL][eE]|[rR][iI][gG][hH][tT])\s*;)`,
    header_rows: String.raw`([hH]eader[_\- ][rR]ows:\s*(?<header_rows>\d+)\s*;)`
};
const p_start = Object.values(p_regexes).reduce(
    (s,r) => s + `(?=(?:.*?${r})?)`,
    String.raw`^(?:`
) + String.raw`)\s*`;
function p_end(options, first = true) {
    const l = options.length;
    if (l === 0) {
        return "";
    } else if (l === 1) {
        return options[0] + "?";
    }
    let res = "(?:";
    const q = first ? "" : "?";
    for (let i=0; i<l; i++) {
        if (i !== 0) {res += "|";}
        res += options[i] + q + String.raw`\s*`;
        res += p_end([...options.slice(0,i), ...options.slice(i+1,l)], false);
    }
    return res + ")"
}
const p_regex = new RegExp(
  p_start
    + p_end(Array.from({length: Object.entries(p_regexes).length}, (_, i) => "\\" + (i * 2 + 1)))
    + String.raw`\s*$`,
  "ms"
);*/

module.exports = function (config, exclusions) {
  config.addTransform("markdown-tables", function(content, outputPath) {
    if (!exclusions.includes(outputPath) 
      && outputPath 
      && (outputPath.endsWith(".html")
        || outputPath.endsWith(".md")
        || outputPath.endsWith(".njk")
      )
    ) {
      const $ = cheerio.load(content);

      $("table").each(function() {
        const table = $(this);

        // colspan
        // TODO: Make this cleaner (and not as recursive and dumb)
        while (/<(?<start>th|td)(?: colspan="(?<first>\d+)")?><\/\1>\s*<\1(?: colspan="(?<second>\d+)")?>(?<inner>.*?)<\/\1>/.test(table.html())) {
          table.html(table.html().replace(/<(?<start>th|td)(?: colspan="(?<first>\d+)")?><\/\1>\s*<\1(?: colspan="(?<second>\d+)")?>(?<inner>.*?)<\/\1>/g, (...args) => {
              const { start, first, second, inner } = args[args.length - 1];
              return "<" + start + " colspan=\"" 
                + (colspan_num(first) + colspan_num(second))
                + "\">" + inner
                + "</" + start + ">";
            }
          ));
        }
        
        // Removing thead/tbody if empty
        const thead = table.find("thead");
        if (thead[0] != undefined && /^(?:<tr><(th|td)(?: colspan="\d+")?><\/\1><\/tr>)+$/g.test(thead.html().replaceAll(/\n/g,""))) {thead.remove();}
        const tbody = table.find("tbody");
        if (tbody[0] != undefined && /^(?:<tr><(th|td)(?: colspan="\d+")?><\/\1><\/tr>)+$/g.test(tbody.html().replaceAll(/\n/g,""))) {tbody.remove();}
        
        let rowspan_present = false;
        // individual element classes, styles, types, and shorthands
        ["td", "th"].forEach((ele) => {table.find(ele).each(function() {
          let t = $(this);
          const t_html = remove_soft_hyphen(t.html());

          function process_inner(s) {
            const shorthand_res = /^\s*(?<inner>INVIS|ARROW|CHECK|REDX|RED_X|OR|SKIP|ROWSPAN)(?<outer>\s*<\/?br>\s*\(.*\))?\s*$/.exec(s);
            if (shorthand_res == null) {return t.html();}
            const {inner, outer} = shorthand_res.groups;
            let classes;
            let html;
            switch(inner) {
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
              case "SKIP":
                classes = "";
                html = "<strong class='red'>SKIP</strong>";
                break;
              case "ROWSPAN":
                rowspan_present = true;
              default:
                return t.html();
            }
            html += outer == null ? "" : ("<sub>" + outer + "</sub>");
            t.addClass(classes);
            t.html(html);
            return html;
          }
          const res = /(?<=^\[)(?=(?:.*?class\s*=\s*["“](?<classes>(?:\s*(?:[a-zA-Z]+(?![_\-])|[a-zA-Z]+(?:[_\-][a-zA-Z]+)+))*)["”];)?)(?=(?:.*?type\s*=\s*["“](?<type>[a-z]*)["”];)?)(?=(?:.*?style\s*=\s*["“](?<styles>(?:\s*(?:[a-z]+(?!\-)|[a-z]+(?:\-[a-z]+)+)\s*:\s*[^;]*;\s*)*)["”];)?)(?=(?:.*?(?<footer>[fF][oO][oO][tT](?:[eE][rR])?);)?)(?=(?:.*?(?<perm>[pP][eE][rR][mM]);)?)(?=.*?]\s*(?<inner>(?:.*$)?))/gs
            .exec(t_html);
          if (res == null) {
            // Shorthands
            process_inner(t_html);
            return;
          }
          const {classes, type, styles, footer, perm, inner} = res.groups;
          // if no modifications within the [], then let it be
          if (classes == undefined && type == undefined && styles == undefined && footer == undefined && perm == undefined) {return;}
          // Shorthands w/ modifications present
          // remove styling after grabbing
          t.html(process_inner(inner).replace(/^\[.*\](?=.*)\s*/, ""));
          // add classes, styling, and change types (if applicable)
          if (perm != undefined) {t.addClass("perm_upg");}
          if (classes != undefined) {t.addClass(classes);}
          if (styles != undefined) {
            styles.split(";").forEach((s) => {
              if (!s.length) {return;}
              const {style, value} = /^(?<style>[a-z]+(?!\-)|[a-z]+(?:\-[a-z]+)+):(?<value>[^;]*)$/g
                .exec(s
                  // I don't know what this was for, but it messes with inputs like [styles="border-top:5px solid black;";]
                  // I will leave it here in case the cause is found.
                  //.replaceAll(/\s*/g,"")
                  .replaceAll(/(.*):var\([\u2013\-]([^\u2013\-])/g,"$1:var(--$2")
                )
                .groups;
              t.attr("style", style + ":" + ((value in table_scss_var) ? table_scss_var[value]: value) + " !important;");
            });
          }
          if (footer != undefined && (footer.toLowerCase() == "foot" || footer.toLowerCase() == "footer")) {
            if (!table.has("tfoot").length) {$('<tfoot>').appendTo(table);}
            const parent = t.parent();
            const wrapped = t.wrap("<tr></tr>").parent();
            wrapped.remove().appendTo(table.find("tfoot"));
            parent.remove();
          }
          if (type != undefined) {t.tagName=type;}
        })});

        // caption, table id, table classes, and last_row
        const prev = table.prev();
        if (prev.is("p")) {
          var cleansed = replace_br(remove_soft_hyphen(prev.html()));
          if (cleansed === "") {return;}
          const res = {};
          var found = false;
          Object.entries(p_regexes).forEach(([key, regex]) => {
            const result = regex.exec(cleansed);
            if (result != null) {
              res[key] = result[2];
              found = true;
              cleansed = cleansed.replace(result[1], "");
            } else {
              res[key] = "";
            }
          });
          if (!found) {return;}
          if (res.caption != "") {
            const new_caption = $("<caption>");
            new_caption.html(res.caption);
            new_caption.prependTo(table);
          }
          if (res.id != "") {table.attr("id", res.id);}
          if (res.classes != "") {table.addClass(res.classes);}
          if (res.last_row == "" || res.last_row.toLowerCase() == "true") {
            table.find("tbody").find("tr:last-child").addClass("last_row");
          }
          table.attr("align", res.align == "" ? "middle": res.align.toLowerCase());
          const h_rows = parseInt(res.header_rows);
          if (!isNaN(h_rows) && h_rows > 1) {
            // pass
          }
          prev.remove();
          /*const res = p_regex.exec(replace_br(remove_soft_hyphen(prev.html())));
          if (res != null){
            const {caption, id, classes, last_row, align, header_rows, ungus_bungus} = res.groups;
            if (caption != undefined) {
              const new_caption = $("<caption>");
              new_caption.html(caption);
              new_caption.prependTo(table);
            }
            if (id != undefined) {table.attr("id", id);}
            if (classes != undefined) {table.addClass(classes);}
            if (last_row == undefined || last_row.toLowerCase() == "true") {
              table.find("tbody").find("tr:last-child").addClass("last_row");
            }
            table.attr("align", align == undefined ? "middle": align.toLowerCase());
            prev.remove();
          }*/
        }

        // ROWSPAN

      });
      return $.html();
    } else {
      return content;
    }
  });
}