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
    h2.html(closed_char + ' ' + h2.html());
    h2.attr('id', h2_text);
    h2.addClass('collapsible collapsible-closed');

    $('h3').each(function() {
      const h3 = $(this);
      if (h3.isBefore($(h2).nextEle('h2')) 
          || $(h2).nextEle('h2').text() === ""
          || !(h3.isAfter($(h2)))
          || skipped(h3.attr('class'), h3.attr('id') !== undefined ? h3.attr('id'): "")
          || h3.hasClass('collapsible')) {
        return false;
      }
      const h3_text = strRepl((h2_text + h3.text()));
      h3.html(closed_char + ' ' + h3.html());
      h3.attr('id', h3_text);
      h3.addClass('collapsible collapsible-closed');

      $('h4').each(function() {
        const h4 = $(this);
        if (h4.isBefore($(h3).nextEle('h3'))
            || h4.isBefore($(h2).nextEle('h2'))
            || $(h3).nextEle('h3').text() === "" 
            || $(h2).nextEle('h2').text() === ""
            || !(h4.isAfter($(h3)))
            || skipped(h4.attr('class'), h4.attr('id') !== undefined ? h4.attr('id'): "")
            || h4.hasClass('collapsible')) {
          return false;
        }
        h4.attr('id', strRepl((h3_text + h4.text())));
        h4.html(closed_char + ' ' + h4.html());
        h4.addClass('collapsible collapsible-closed');
      });
    });
  });
} else {
  $('h3').each(function() {
    const h3 = $(this);
    const h3_text = strRepl(h3.text());
    h3.html(closed_char + ' ' + h3.html());
    h3.attr('id', h3_text);
    h3.addClass('collapsible collapsible-closed');
    $('h4').each(function() {
      const h4 = $(this);
      if (h4.isBefore($(h3).nextEle('h3'))
          || $(h3).nextEle('h3').text() === ""
          || !(h4.isAfter($(h3)))
          || skipped(h4.attr('class'), h4.attr('id') !== undefined ? h4.attr('id'): "")
          || h4.hasClass('collapsible')) {
        return false;
      }
      h4.attr('id', strRepl((h3_text + h4.text())));
      h4.html(closed_char + ' ' + h4.html());
      h4.addClass('collapsible collapsible-closed');
    });
  });
}

let arr_collap = [];
const coll = $('.collapsible');
coll.each(function() {
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
        //const h3_next_collap = arr_collap[h3_index + 1];
        if (arr_collap[h3_index + 1] === undefined || h3_index === -1) {
          $(this)
            .nextUntil(skiplist[0])
            .wrapAll("<div class='content'/>");
        //} else if (arr_collap[h3_index + 1].slice(1) === h3.next().attr('id')) {
        //  $(this).removeClass('collapsible');
        //  h3_inside = true;
        } else {
          $(this)
            .nextUntil(arr_collap[h3_index + 1])
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
            //const h4_next_collap = arr_collap[h4_index + 1];
            if (arr_collap[h4_index + 1] === undefined || h4_index === -1) {
              $(this)
                .nextUntil(skiplist[0])
                .wrapAll("<div class='content'/>");
            //} else if (arr_collap[h4_index + 1].slice(1) === h4.next().attr('id')) {
            //  $(this).removeClass('collapsible');
            //  h4_inside = true;
            } else {
              $(this)
                .nextUntil(arr_collap[h4_index + 1])
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
        //const h4_next_collap = arr_collap[h4_index + 1];
        if (arr_collap[h4_index + 1] === undefined || h4_index === -1) {
          $(this)
            .nextUntil(skiplist[0])
            .wrapAll("<div class='content'/>");
          return false
        //} else if (arr_collap[h4_index + 1].slice(1) === h4.next().attr('id')) {
        //  $(this).removeClass('collapsible');
        } else {
          $(this)
            .nextUntil(arr_collap[h4_index + 1])
            .wrapAll("<div class='content'/>");
        }
        h4_inside = true;
      } else if (h4_inside) {return false}
    });
  });
}


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      $(this).removeClass('collapsible-open');
      $(this).addClass('collapsible-closed');
      console.log($(this).html().replace(new RegExp(open_char), closed_char));
      $(this).html($(this).html().replace(new RegExp(open_char), closed_char));
    } else {
      content.style.display = "block";
      $(this).removeClass('collapsible-closed');
      $(this).addClass('collapsible-open');
      console.log($(this).html().replace(new RegExp(closed_char), open_char));
      $(this).html($(this).html().replace(new RegExp(closed_char), open_char));
    }
  });
}
