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
        
        let rowspan_present = false;
        // individual element classes, styles, types, and shorthands
        ["td", "th"].forEach((ele) => {table.find(ele).each(function() {
          let t = $(this);
          const t_html = remove_soft_hyphen(t.html());

          function process_inner(s) {
            const shorthand_res = /^\s*(?<inner>INVIS|ARROW|CHECK|REDX|RED_X|OR|SKIP|ROWSPAN)(?<outer>\s*<\/?br>\s*\(.*\))?\s*$/.exec(s);
            if (shorthand_res == null) {return t.html();}
            const {inner, outer} = shorthand_res.groups;
            let classes = "";
            let html = "";
            switch(inner) {
              case "INVIS":
                classes = "invisible";
                break;
              case "ARROW":
                classes = "arrow";
                html = "→";
                break;
              case "CHECK":
                html = "✔️";
                break;
              case "REDX":
              case "RED_X":
                html = "❌";
                break;
              case "OR":
                html = "<strong>Or</strong>";
                break;
              case "SKIP":
                html = "<strong class='red'>SKIP</strong>";
                break;
              case "ROWSPAN":
                classes = "rowspan"
                rowspan_present = true;
                break;
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
            for (let r = Math.min(h_rows, table.find("tbody").children("tr").length); r > 1; r--) {
              table.find("tbody").find("tr:first-child").insertAfter(table.find("thead").find("tr:last-child"));
            }
          }
          prev.remove();
        }

        // Removing thead/tbody if empty
        const thead = table.find("thead");
        if (thead[0] != undefined && /^(?:<tr><(th|td)(?: colspan="\d+")?><\/\1><\/tr>)+$/g.test(thead.html().replaceAll(/\n/g,""))) {thead.remove();}
        const tbody = table.find("tbody");
        if (tbody[0] != undefined && /^(?:<tr><(th|td)(?: colspan="\d+")?><\/\1><\/tr>)+$/g.test(tbody.html().replaceAll(/\n/g,""))) {tbody.remove();}

        // Rowspan
        if (rowspan_present) {
          // TODO: Rowspan implementation
          const thead = table.find("thead");
          const tbody = table.find("tbody");
          // Generate Position, Colspan, and Rowspan position arrays
          const positions = {thead: [], tbody: []};
          const colspans = {thead: [], tbody: []};
          const rowspan_pos = {thead: [], tbody: []};
          let rowspanned = false;

          ["thead", "tbody"].forEach((tsect) => {table.find(tsect).children("tr").each(function(i, _) {
            let tr = $(this);
            positions[tsect].push(Array(0));
            colspans[tsect].push(Array(0));
            let p = 0;
            tr.children("th, td").each(function() {
              let child = $(this);
              const colspan = $(child).attr("colspan") === undefined ? 1 : parseInt(child.attr("colspan"));
              const classes = child.attr("class");
              if (classes !== undefined) {
                if (classes.includes("rowspan")) {
                 rowspan_pos[tsect].push([i, p, colspan]);
                }
              }
              positions[tsect].at(-1).push(p);
              colspans[tsect].at(-1).push(colspan);
              p += colspan;
            });
          })});
          rowspan_pos.thead.reverse();
          rowspan_pos.tbody.reverse();
          
          const get_rowspan = (r) => r === undefined ? 1 : r;
          // Normal and Colspan Rowspan
          const removed = [];
          const within = {thead: [], tbody: []};
          ["thead", "tbody"].forEach((tsect) => {rowspan_pos[tsect].forEach(([row, col, colspan], i) => {
            // If rowspan is in first row, then nothing to rowspan above.
            if (row === 0) {return;}
            const target_i = positions[tsect][row - 1].indexOf(col);
            // Rowspan doesn't have same start and end bounds
            // If Rowspan is within the bounds of the upper element, then add to within to be checked later if merging Rowspans results in the correct size.
            if (target_i === -1) {
              const last_i = positions[tsect][row - 1].findLastIndex((num) => num <= col);
              if (positions[tsect][row - 1][last_i] + colspans[tsect][row - 1][last_i] === col + colspan) {
                within[tsect].push([row, col, colspan]);
              }
              return;
            } 
            const target_colspan = colspans[tsect][row - 1] [target_i];
            if (target_colspan < colspan) {return;}
            if (target_colspan > colspan) {
              within[tsect].push([row, col, colspan]);
              return;
            }
            const ele = $($(table.find(tsect).children("tr")[row]).children("th, td")[col]);
            const rowspan = get_rowspan(ele.attr("rowspan"));
            $($(table.find(tsect).children("tr")[row - 1]).children("th, td")[col]).attr("rowspan", (rowspan+1).toString());
            rowspanned = true;
            removed.push(ele);
          })});

          // Multi Colspan Rowspan cells
          ["thead", "tbody"].forEach((tsect) => {
            while (within[tsect].length) {
              let rowspans = [within[tsect][0]];
              const row = rowspans[0][0];
              const f_col = rowspans[0][1];
              const f_colspan = rowspans[0][2];
              const rowspan = get_rowspan($($(table.find(tsect).children("tr")[row]).children("th, td")[f_col]).attr("rowspan"));
              const last_i = positions[tsect][row - 1].findLastIndex((num) => num <= f_col);
              const pos = positions[tsect][row - 1][last_i];
              const colspan = colspans[tsect][row - 1][last_i];
              if (pos + colspan != f_col + f_colspan) {
                within[tsect].shift();
                continue;
              }
              let i = 1;
              let t_colspan = f_colspan;
              while (true) {
                rowspans.push(within[tsect][i])
                t_colspan += rowspans[i][2];
                if (rowspans[i][0] != row 
                    || get_rowspan($($(table.find(tsect).children("tr")[rowspans[i][0]]).children("th, td")[rowspans[i][1]]).attr("rowspan")) != rowspan 
                    || t_colspan > colspan
                ) {
                  while (i > 0) {
                    within[tsect].shift();
                    i--;
                  }
                  break;
                }
                if (t_colspan === colspan) {
                  $($(table.find(tsect).children("tr")[row - 1]).children("th, td")[last_i]).attr("rowspan", (rowspan+1).toString());
                  rowspanned = true;
                  rowspans.forEach(([r, c, cs]) => removed.push($($(table.find(tsect).children("tr")[r]).children("th, td")[c])));
                  while (i >= 0) {
                    within[tsect].shift();
                    i--;
                  }
                  break;
                }
              }
            }
          });

          // Remove merged Rowspan cells
          removed.forEach((ele, i) => $(ele).remove());

          if (rowspanned) {
            table.addClass("rowspanned");
            const max_col = Math.max(...["thead", "tbody"].map((tsect) => Math.max(...positions[tsect].map((arr, i) => colspans[tsect][i].slice(-1)[0] + arr.slice(-1)[0]))));     
            const new_colgroup = $("<colgroup>");
            switch (max_col) {
              case 1:
                new_colgroup.html(String.raw`<col class="first-column last-column" />`);
                break;
              case 2:
                new_colgroup.html(String.raw`<col class="first-column" /><col class="last-column" />`);
                break;
              default:
                new_colgroup.html(
                  String.raw`<col class="first-column" />`
                  + `<col span="${max_col - 2}" class="middle-column" />`
                  + String.raw`<col class="last-column" />`
                );
                break;
            }
            table.find("thead").before(new_colgroup);
          }
        }
      });
      return $.html();
    } else {
      return content;
    }
  });
}