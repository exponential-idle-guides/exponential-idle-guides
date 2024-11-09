const skiplist = ['#AP-visual', '#smooth-formula'];

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

/*
$("h3").each(function() { //add collapsible to every h3 and h4 with unique ids based on location
  const h3 = $(this);
  const h3texts = strRepl(h3.text());
  h3.attr('id', h3texts);
  h3.addClass('collapsible');

  $("h4").each(function() {
    const h4 = $(this);
    if (h4.isBefore($(h3).nextEle('h3')) || $(h3).nextEle('h3').text() === "") {
      if (!(h4.isAfter($(h3)))
          || skipped(h4.attr('class'), h4.attr('id') !== undefined ? h4.attr('id'): "")) {
        return false
      }
      
      const h4_text = strRepl((h3_text + h4.text()))
      h4.attr('id', h4text);
      h4.addClass('collapsible');
    } else {return false;}
  });
});
*/


if (('h2').length > 1) {
  $('h2').each(function(i, h2) {
    //const h2 = $(this);
    if(i===0){return}
    const h2_text = strRepl(h2.text());
    h2.attr('id', h2_text);
    h2.addClass('collapsible');

    $('h3').each(function() {
      const h3 = $(this);
      if (h3.isBefore($(h2).nextEle('h2')) || $(h2).nextEle('h2').text() === "") {
        if (!(h3.isAfter($(h2)))
            || skipped(h3.attr('class'), h3.attr('id') !== undefined ? h3.attr('id'): "")) {
          return false
        }

        const h3_text = strRepl((h2_text + h3.text()))
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
            
            const h4_text = strRepl((h3_text + h4.text()))
            h4.attr('id', h4text);
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
        
        const h4_text = strRepl((h3_text + h4.text()))
        h4.attr('id', h4text);
        h4.addClass('collapsible');
      } else {return false;}
    });
  });
}

arrcollap = [];
$('.collapsible').each(function() {
  const ele = $(this);
  let temp = [];
  $.each(skiplist, function() {
    if ($(String(this)).isBefore(ele)) {
      temp.push(String(this));
      arrcollap.push(String(this));
    } else {
      return false
    }
  })
  while (temp.length > 0) {
    skiplist.shift()
    temp.shift()
  }
  arrcollap.push('#' + ele.attr('id'))
})

/*
$('h3').each(function(i, e) {
  $(this)
    .nextUntil(this.tagName)
    .wrapAll('<div class="content"/>');

  const content = $('.content').last();
  var inside = false;
  $('h4').each(function(p, q) {
    const h4 = $(this)
    h4id = '#' + h4.attr('id');
    if ($.contains(content[0], h4[0])) {
      if (arrcollap[arrcollap.indexOf(h4id) + 1] === undefined || arrcollap.indexOf(h4id) === -1) {
        $(this)
          .nextUntil(skiplist[0])
          .wrapAll("<div class='content'/>");
        return false
      } else if (arrcollap[arrcollap.indexOf(h4id) + 1].slice(1) === h4.next().attr('id')) {
        $(this).removeClass('collapsible');
      } else {
        $(this)
          .nextUntil(arrcollap[arrcollap.indexOf(h4id) + 1])
          .wrapAll("<div class='content'/>");
      }
      inside = true;
    } else if (inside) {
      return false
    }
  })
})
*/

if (('h2').length > 1) {
  $('h2').each(function(i, e) {
    if(i===0){return}
    $(this)
      .nextUntil(this.tagName)
      .wrapAll('<div class="content"/>');

    const h2_content = $('.content').last();
    let h3_inside = false;
    $('h3').each(function() {
      const h3 = $(this)
      h3_id = '#' + h3.attr('id');
      if ($.contains(h2_content[0], h3[0])) {
        const h3_index = arrcollap.indexOf(h3_id)
        const h3_next_collap = arrcollap[h3_index + 1];
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
          h4_id = '#' + h4.attr('id');
          if ($.contains(h3_content[0], h4[0])) {
            const h4_index = arrcollap.indexOf(h4_id)
            const h4_next_collap = arrcollap[h4_index + 1];
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
      h4_id = '#' + h4.attr('id');
      if ($.contains(h3_content[0], h4[0])) {
        const h4_index = arrcollap.indexOf(h4_id)
        const h4_next_collap = arrcollap[h4_index + 1];
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
    } else {
      content.style.display = "block";
    }
  });
}
