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

table_classes.reduce((a,c) => [...a, ...$("span." + c).has(".table-wrapper")], []).forEach((s) => {
  s = $(s);
  const table_wrapper = s.find("div.table-wrapper");
  table_wrapper.each(function() {
  	const t = $(this);
    const i = table_wrapper.index(this);
    const table = $(t.find("table")[0]);
    // caption support
    const basis = (i == 0 ?
          	t
            	.prevUntil(s.children().first())
              .add(s.children().first())
            : t.prevUntil(table_wrapper[i-1])
         	);
    const caption = /^Caption:\s?(?<caption>[^;]*);$/g
      	.exec(
        	basis.html().replaceAll(String.fromCharCode(0x00ad),"")
         );
    if (caption != null) {
      table[0].createCaption().textContent = caption.groups.caption;
      basis.each(function() {
        if(/^Caption:\s?(?<caption>[^;]*);$/g.test($(this).html().replaceAll(String.fromCharCode(0x00ad),""))) {$(this).remove();}
      });
    }
    // colspan support
    while (/<th(?: colspan="(?<first>\d+)")?><\/th>[\n\t\s]*<th(?: colspan="(?<second>\d+)")?>(?<inner>[^<]*)<\/th>/g.test(table.html())) {
      table.html().matchAll(/<th(?: colspan="(?<first>\d+)")?><\/th>[\n\t\s]*<th(?: colspan="(?<second>\d+)")?>(?<inner>[^<]*)<\/th>/g)
      	.forEach((s) => {
        	table.html(table.html()
          	.replace(s[0],
            	"<th colspan=\"" 
          		+ [s[1],s[2]].reduce((a,b) => a + ((b == undefined || b == NaN || Number(b) < 1) ? 1: Number(b)),0)
            	+ "\">" + s[3] + "</th>"
            )
          );
      	}
      );
    }
    while (/<td(?: colspan="(?<first>\d+)")?><\/td>[\n\t\s]*<td(?: colspan="(?<second>\d+)")?>(?<inner>[^<]*)<\/td>/g.test(table.html())) {
      table.html().matchAll(/<td(?: colspan="(?<first>\d+)")?><\/td>[\n\t\s]*<td(?: colspan="(?<second>\d+)")?>(?<inner>[^<]*)<\/td>/g)
      	.forEach((s) => {
        	table.html(table.html()
          	.replace(s[0],
            	"<td colspan=\"" 
          		+ [s[1],s[2]].reduce((a,b) => a + ((b == undefined || b == NaN || Number(b) < 1) ? 1: Number(b)),0)
            	+ "\">" + s[3] + "</td>"
            )
          );
      	}
      );
    }
    // invisible support
    table.html(table.html()
    	.replaceAll(/<td>\u00AD*I\u00AD*N\u00AD*V\u00AD*I\u00AD*S\u00AD*<\/td>/g, "<td class=\"invisible\"></td>")
      .replaceAll(/<th>\u00AD*I\u00AD*N\u00AD*V\u00AD*I\u00AD*S\u00AD*<\/th>/g, "<th class=\"invisible\"></th>"));
    // individual element class support
    ["td", "th"].forEach((ele) => {table.find(ele).each(function() {
      // /^\[(?:style\s?=\s?"(?<style>(?:[a-zA-z\-]*\s?\]
      var t = $(this);
      let inner = "";
      // class support
      const class_res = /^\[[a-zA-Z\-\s=;"“”]*(?:class\s*=\s*["|“](?<classes>[a-zA-Z\-\s]*)["|”])\s*;[a-zA-Z\-\s=;"“”]*\](?<inner>.*)/g.exec(t.html().replaceAll(String.fromCharCode(0x00ad),""));
      if (class_res != null) {
        inner = class_res.groups.inner;
        t.addClass(class_res.groups.classes);
      }
      if(inner != "") {t.html(inner);}
      // type change support
      const type_res = /^\[[a-zA-Z\-\s=;"“”]*(?:type\s*=\s*["|“](?<type>[a-z]*)["|”])\s*;[a-zA-Z\-\s=;"“”]*\](?<inner>.*)/g.exec(t.html().replaceAll(String.fromCharCode(0x00ad),""));
      if (type_res != null) {
        t.html(type_res.groups.inner);
        t = t.changeElementType(type_res.groups.type);
      }
    })});
  });
});