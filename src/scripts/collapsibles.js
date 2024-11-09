import { globals } from './init.js';
const skiplist = ['#AP-visual', '#smooth-formula'];
const closed_char = '\u25B6';
const open_char = '\u25BC';

(function($) {
  $.fn.isAfter = function(sel) {
    return $(this).index() > $(sel).index();
  };
  $.fn.isBefore = function(sel) {
    return $(this).index() < $(sel).index();
  };
  $.fn.nextEle = function(sel) {
    return $(sel).eq($(this).index(sel) + 1);
  };
})(jQuery);

function strRepl(str) {
  return str.replace(/\s/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
}

function skipped(classlist, id = "") {
  if (classlist === undefined && id === "") {
    return false;
  } else if (skiplist.includes("#" + id)) {
    return true
  } else if (classlist !== undefined) {
    return classlist.split(/(\s+)/).some(r => skiplist.includes("." + r))
  } else {
    return false
  }
}


console.log($('h2').length);
if ($('h2').length > 1) {
  $('h2').each(function(i) {
    const h2 = $(this);
    console.log("i:", i);
    if(i===0){return}
    const h2_text = strRepl(h2.text());
    h2.text(closed_char + ' ' + h2.text())
    h2.attr('id', h2_text);
    h2.addClass('collapsible');

    $('h3').each(function() {
      const h3 = $(this);
      if (h3.isBefore($(h2).nextEle('h2')) || $(h2).nextEle('h2').text() === "") {
        if (!(h3.isAfter($(h2)))
            || skipped(h3.attr('class'), h3.attr('id') !== undefined ? h3.attr('id'): "")) {
          return false
        }

        const h3_text = strRepl((h2_text + h3.text()));
        h3.text(closed_char + ' ' + h3.text())
        h3.attr('id', h3_text);
        h3.addClass('collapsible');

        $('h4').each(function() {
          const h4 = $(this);
          if (h4.isBefore($(h3).nextEle('h3'))
              || h4.isBefore($(h2).nextEle('h2'))
              || $(h3).nextEle('h3').text() === "" 
              || $(h2).nextEle('h2').text() === "") {
            if (!(h4.isAfter($(h3)))
                || skipped(h4.attr('class'), h4.attr('id') !== undefined ? h4.attr('id'): "")) {
              return false
            }
            
            h4.attr('id', strRepl((h3_text + h4.text())));
            h4.text(closed_char + ' ' + h4.text())
            h4.addClass('collapsible');
          } else {return false;}
        });
      } else {return false;}
    });
  });
} else {
  $('h3').each(function() {
    const h3 = $(this);
    const h3_text = strRepl(h3.text());
    h3.text(closed_char + ' ' + h3.text())
    h3.attr('id', h3_text);
    h3.addClass('collapsible');
    $('h4').each(function() {
      const h4 = $(this);
      if (h4.isBefore($(h3).nextEle('h3'))
          || $(h3).nextEle('h3').text() === "") {
        if (!(h4.isAfter($(h3)))
            || skipped(h4.attr('class'), h4.attr('id') !== undefined ? h4.attr('id'): "")) {
          return false
        }
        
        h4.attr('id', strRepl((h3_text + h4.text())));
        h4.text(closed_char + ' ' + h4.text())
        h4.addClass('collapsible');
      } else {return false;}
    });
  });
}

let arr_collap = [];
$('.collapsible').each(function() {
  const ele = $(this);
  let temp = [];
  $.each(skiplist, function() {
    if ($(String(this)).isBefore(ele)) {
      temp.push(String(this));
      arr_collap.push(String(this));
    } else {
      return false
    }
  })
  while (temp.length > 0) {
    skiplist.shift()
    temp.shift()
  }
  arr_collap.push('#' + ele.attr('id'))
})


if ($('h2').length > 1) {
  $('h2').each(function(i, e) {
    if(i===0){return}
    $(this)
      .nextUntil(this.tagName)
      .wrapAll('<div class="content"/>');

    const h2_content = $('.content').last();
    let h3_inside = false;
    $('h3').each(function() {
      const h3 = $(this)
      const h3_id = '#' + h3.attr('id');
      if ($.contains(h2_content[0], h3[0])) {
        const h3_index = arr_collap.indexOf(h3_id)
        const h3_next_collap = arr_collap[h3_index + 1];
        if (h3_next_collap === undefined || h3_index === -1) {
          $(this)
            .nextUntil(skiplist[0])
            .wrapAll("<div class='content'/>");
        } else if (h3_next_collap.slice(1) === h3.next().attr('id')) {
          $(this).removeClass('collapsible');
          h3_inside = true;
        } else {
          $(this)
            .nextUntil(h3_next_collap)
            .wrapAll("<div class='content'/>");
          h3_inside = true;
        }

        const h3_content = $('.content').last();
        let h4_inside = false;
        $('h4').each(function() {
          const h4 = $(this)
          const h4_id = '#' + h4.attr('id');
          if ($.contains(h3_content[0], h4[0])) {
            const h4_index = arr_collap.indexOf(h4_id)
            const h4_next_collap = arr_collap[h4_index + 1];
            if (h4_next_collap === undefined || h4_index === -1) {
              $(this)
                .nextUntil(skiplist[0])
                .wrapAll("<div class='content'/>");
            } else if (h4_next_collap.slice(1) === h4.next().attr('id')) {
              $(this).removeClass('collapsible');
              h4_inside = true;
            } else {
              $(this)
                .nextUntil(h4_next_collap)
                .wrapAll("<div class='content'/>");
              h4_inside = true;
            }
          } else if (h4_inside) {return false}
        });
      } else if (h3_inside) {return false}
    });
  });
} else {
  $('h3').each(function() {
    $(this)
      .nextUntil(this.tagName)
      .wrapAll('<div class="content"/>');

    const h3_content = $('.content').last();
    let h4_inside = false;
    $('h4').each(function() {
      const h4 = $(this)
      const h4_id = '#' + h4.attr('id');
      if ($.contains(h3_content[0], h4[0])) {
        const h4_index = arr_collap.indexOf(h4_id)
        const h4_next_collap = arr_collap[h4_index + 1];
        if (h4_next_collap === undefined || h4_index === -1) {
          $(this)
            .nextUntil(skiplist[0])
            .wrapAll("<div class='content'/>");
          return false
        } else if (h4_next_collap.slice(1) === h4.next().attr('id')) {
          $(this).removeClass('collapsible');
        } else {
          $(this)
            .nextUntil(h4_next_collap)
            .wrapAll("<div class='content'/>");
        }
        h4_inside = true;
      } else if (h3_inside) {return false}
    });
  });
}

const coll = $('.collapsible');
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      globals.qstyle.setProperty(
        '--palette-fill-collapsible',
        globals.style_var.getPropertyValue('--palette-fill-collapsible-closed')
      );
      globals.qstyle.setProperty(
        '--palette-fill-collapsible-hover',
        globals.style_var.getPropertyValue('--palette-fill-collapsible-open')
      );
      $(this).text($(this).text().replace(new RegExp(open_char), closed_char));
    } else {
      content.style.display = "block";
      globals.qstyle.setProperty(
        '--palette-fill-collapsible',
        globals.style_var.getPropertyValue('--palette-fill-collapsible-open')
      );
      globals.qstyle.setProperty(
        '--palette-fill-collapsible-hover',
        globals.style_var.getPropertyValue('--palette-fill-collapsible-closed')
      );
      $(this).text($(this).text().replace(new RegExp(closed_char), open_char));
    }
  });
}
