const skiplist = ['#AP-visual', '#smooth-formula', '#ft-prior-ranks','#season-prior-ranks', '#hall-of-fame', '.ct-overviews'];
const closed_char = '\u25B6';
const open_char = '\u25BC';
const check_url_interval = 500; // ms
let current_url = window.location.href;
let url_h_arr = [];


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
  return slugify(str, { lower: true, strict: true });
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

let h_dict = {h2: [], h3: [], h4: []};
$('h2').each(function(){h_dict.h2.push($(this).index())});
$('h3').each(function(){h_dict.h3.push($(this).index())});
$('h4').each(function(){h_dict.h4.push($(this).index())});

function gt_arr(arr, val){
	if (Math.min(...arr) > val){
  	return arr.slice();
  } else if (Math.max(...arr) < val) {
  	return [];
  }
  const i = arr.findIndex((e) => e > val);
  return arr.slice(i);
}
function lt_arr(arr, val){
	if (Math.max(...arr) < val || val === undefined){
  	return arr.slice();
  } else if (Math.min(...arr) > val) {
  	return [];
  }
  const i = arr.length - [...arr].reverse().findIndex((e) => e < val);
  return arr.slice(0,i);
}

if ($('h2').length > 1) {
  $('h2').each(function(i) {
    const h2 = $(this);
    if(skipped(h2.attr('class'), h2.attr('id') !== undefined ? h2.attr('id'): "")){
      return;
    }
    if(i===0){return}
    const h2_text = strRepl(h2.text());
    h2.html(closed_char + ' ' + h2.html());
    h2.attr('id', h2_text);
    h2.addClass('collapsible collapsible-closed');

    $('h3').each(function() {
      const h3 = $(this);
      
      if ((h3.isAfter($(h2).nextEle('h2')) && $(h2).text() !== $('h2').last().text())
          || h3.isBefore($(h2))
          || skipped(h3.attr('class'), h3.attr('id') !== undefined ? h3.attr('id'): "")
          || h3.hasClass('collapsible')) {
        return;
      }
      const h3_text = h2_text + '_' + strRepl(h3.text());
      h3.html(closed_char + ' ' + h3.html());
      h3.attr('id', h3_text);
      h3.addClass('collapsible collapsible-closed');

      $('h4').each(function() {
        const h4 = $(this);
        if ((h4.isAfter($(h3).nextEle('h3')) && $(h3).text() !== $('h3').last().text())
            || h4.isBefore($(h3))
            || skipped(h4.attr('class'), h4.attr('id') !== undefined ? h4.attr('id'): "")
            || h4.hasClass('collapsible')) {
          return;
        }
        h4.attr('id', h3_text + '_' + strRepl(h4.text()));
        h4.html(closed_char + ' ' + h4.html());
        h4.addClass('collapsible collapsible-closed');
      });
    });
  });
} else {
  $('h3').each(function() {
    const h3 = $(this);
    if(skipped(h3.attr('class'), h3.attr('id') !== undefined ? h3.attr('id'): "")){
      return;
    }
    const h3_text = strRepl(h3.text());
    h3.html(closed_char + ' ' + h3.html());
    h3.attr('id', h3_text);
    h3.addClass('collapsible collapsible-closed');
    $('h4').each(function() {
      const h4 = $(this);
      if ((h4.isAfter($(h3).nextEle('h3')) && $(h3).text() !== $('h3').last().text())
          || h4.isBefore($(h3))
          || skipped(h4.attr('class'), h4.attr('id') !== undefined ? h4.attr('id'): "")
          || h4.hasClass('collapsible')) {
        return;
      }
      h4.attr('id', h3_text + '_' + strRepl(h4.text()));
      h4.html(closed_char + ' ' + h4.html());
      h4.addClass('collapsible collapsible-closed');
    });
  });
}

const coll = $('.collapsible');
let collap_dict = {
	h2: {ids: [], indexes: []},
  h3: {ids: [], indexes: []},
  h4: {ids: [], indexes: []}
 };
coll.each(function() {
	const tag = this.tagName;
  switch(this.tagName) {
  	case 'H2':
      collap_dict.h2.ids.push('#' + $(this).attr('id'));
      collap_dict.h2.indexes.push($(this).index());
      break;
  	case 'H3':
      collap_dict.h3.ids.push('#' + $(this).attr('id'));
      collap_dict.h3.indexes.push($(this).index());
      break;
  	case 'H4':
      collap_dict.h4.ids.push('#' + $(this).attr('id'));
      collap_dict.h4.indexes.push($(this).index());
      break;
    default:
    	console.log('collap_dict ERROR', $(this));
  }
});

function get_id(dict, i){
	return dict.ids[dict.indexes.indexOf(i)];
}

if (collap_dict.h2.ids.length) {
	collap_dict.h2.ids.forEach(function(h2_id,i) {
    $(h2_id)
    	.nextUntil(collap_dict.h2.ids[i+1])
      .wrapAll('<div class="content"/>');
    
    const h2_i = collap_dict.h2.indexes[i];
    const next_h2 = collap_dict.h2.indexes[i+1];
    const h2_h3 = lt_arr(gt_arr(collap_dict.h3.indexes, h2_i), next_h2);
    const first_h3 = h2_h3[0] === undefined ? 0 : h2_h3[0];
    const h2_h4 = lt_arr(gt_arr(collap_dict.h4.indexes, h2_i), first_h3);
    
    if (h2_h4.length) {
      const last_h4 = lt_arr(h_dict.h4, first_h3).slice(-1)[0];
      const next_h3 = get_id(collap_dict.h3, first_h3);
      h2_h4.forEach(function(h4_i, k) {
      	const h4_id = get_id(collap_dict.h4,h4_i)
        $(h4_id).next('.content').children().unwrap();
        if (h4_i >= last_h4) {
        	const h4_final = first_h3 ? $(next_h3).prev() : $(h4_id).siblings().last();
          h4_final.attr('id', h4_id.replace('#', '') + 'finalh4wrap');
          $(h4_id)
          	.nextUntil(h4_id + 'finalh4wrap')
            .add(h4_id + 'finalh4wrap')
            .wrapAll('<div class="content"/>');
        } else {
        	$(h4_id)
            .nextUntil('h3')
            .wrapAll('<div class="content"/>');
        }
      });
    }
    
    if (h2_h3.length) {
    	const last_h3 = lt_arr(h_dict.h3, next_h2).slice(-1)[0];
      h2_h3.forEach(function(h3_i, l) {
        const h3_id = get_id(collap_dict.h3,h3_i);
        $(h3_id).next('.content').children().unwrap();
        if (h3_i >= last_h3) {
        	const h3_final  = $(h3_id).siblings().last();
          h3_final.attr('id', h3_id.replace('#', '') + 'finalh3wrap');
          $(h3_id)
          	.nextUntil(h3_id + 'finalh3wrap')
            .add(h3_id + 'finalh3wrap')
            .wrapAll('<div class="content"/>');
        } else {
        	$(h3_id)
            .nextUntil('h3')
            .wrapAll('<div class="content"/>');
        }
        
        const next_h3 = h_dict.h3[h_dict.h3.indexOf(h3_i)+1];
        const next_h2_h3 = (next_h2 === undefined && next_h3 === undefined) ? Infinity : (next_h3 === undefined ? next_h2 : (next_h2 === undefined ? next_h3 : Math.min(next_h3, next_h2)));
        const h3_h4 = lt_arr(gt_arr(collap_dict.h4.indexes, h3_i), next_h2_h3);
        if (h3_h4.length) {
        	const last_h4 = lt_arr(h_dict.h4, next_h2_h3).slice(-1)[0];
        	h3_h4.forEach(function(h4_i, m) {
            const h4_id = get_id(collap_dict.h4,h4_i);
            $(h4_id).next('.content').children().unwrap();
            if (h4_i >= last_h4) {
              const h4_final  = $(h4_id).siblings().last();
              h4_final.attr('id', h4_id.replace('#', '') + 'finalh4wrap');
              $(h4_id)
                .nextUntil(h4_id + 'finalh4wrap')
                .add(h4_id + 'finalh4wrap')
                .wrapAll('<div class="content"/>');
            } else {
              $(h4_id)
                .nextUntil('h4')
                .wrapAll('<div class="content"/>');
            }
          });
        }
      
      });
    }
  });
} else {
	const h4_h3 = lt_arr(collap_dict.h4.indexes, collap_dict.h3.indexes[0]);
  if (h4_h3.length) {
		const last_h4 = h4_h3.slice(-1)[0];
  	h4_h3.forEach(function(h4_i, i) {
    	const h4_id = get_id(collap_dict.h4, h4_i);
      if (h4_i >= last_h4) {
      	const h4_final = collap_dict.h3.indexes.length ? $(next_h3).prev() : $(h4_id).siblings().last();
        h4_final.attr('id', h4_id.replace('#', '') + 'finalh4wrap');
        $(h4_id)
          .nextUntil(h4_id + 'finalh4wrap')
          .add(h4_id + 'finalh4wrap')
          .wrapAll('<div class="content"/>');
      } else {
      	$(h4_id)
        	.nextUntil('h4')
          .wrapAll('<div class="content"/>');
      }
    });
  }
	collap_dict.h3.ids.forEach(function(h3_id,i) {
    $(h3_id)
    	.nextUntil(collap_dict.h3.ids[i+1])
      .wrapAll('<div class="content"/>');
    
    const h3_i = collap_dict.h3.indexes[i];
    const next_h3 = collap_dict.h3.indexes[i+1];
    const h4 = lt_arr(gt_arr(collap_dict.h4.indexes, h3_i), next_h3);
    
    if (h4.length) {
    	const last_h4 = lt_arr(h_dict.h4, next_h3).slice(-1)[0];
      h4.forEach(function(h4_i, l) {
        const h4_id = get_id(collap_dict.h4,h4_i);
        $(h4_id).next('.content').children().unwrap();
        if (h4_i >= last_h4) {
        	const h4_final  = $(h4_id).siblings().last();
          h4_final.attr('id', h4_id.replace('#', '') + 'finalh4wrap');
          $(h4_id)
          	.nextUntil(h4_id + 'finalh4wrap')
            .add(h4_id + 'finalh4wrap')
            .wrapAll('<div class="content"/>');
        } else {
        	$(h4_id)
            .nextUntil('h4')
            .wrapAll('<div class="content"/>');
        }
      });
    }    
  });
}

function open_collapsible(header) {
  header.classList.toggle("active");
  const content = header.nextElementSibling;
  content.style.display = "block";
  $(header).removeClass('collapsible-closed');
  $(header).addClass('collapsible-open');
  $(header).html($(header).html().replace(new RegExp(closed_char), open_char));
}
function close_collapsible(header) {
  header.classList.toggle("active");
  const content = header.nextElementSibling;
  content.style.display = "none";
  $(header).removeClass('collapsible-open');
  $(header).addClass('collapsible-closed');
  $(header).html($(header).html().replace(new RegExp(open_char), closed_char));
}

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    if (this.nextElementSibling.style.display === "block") {
      close_collapsible(this);
    } else {
      open_collapsible(this);
    }
  });
}

$('#openCollapsibles')[0].addEventListener("click", function(e){
  coll.each(function() {
    open_collapsible(this);
  });
});
$('#closeCollapsibles')[0].addEventListener("click", function(e){
  coll.each(function() {
    close_collapsible(this);
  });
});

function url_collapsibles(url) {
  const url_header = url.match(/[a-z0-9-]*$/g)[0];
  if ([null, ''].includes(url_header)) {return}
  /*
  if (url_h_arr.length) {
    for (let i = 0; i < url_h_arr.length; i++) {
      close_collapsible(url_h_arr[i]);
    }
  }
  */
  const index = url_header.match(/-[1-9]$/) === null ? 0 : Number(url_header.match(/[1-9]$/)[0]);

  function url_h_search(search) {
    let canidates; let final_h;
    for (const [h, dict] of Object.entries(collap_dict)) {
      final_h = h;
      canidates = dict.indexes.filter((i) => dict.ids[dict.indexes.indexOf(i)].replaceAll(new RegExp('\u00AD', 'g'),'').match(new RegExp(search + '$')) !== null);
      if(canidates.length){break};
    }
    return [canidates, final_h];
  }

  let s = url_h_search(url_header.replace(/-[1-9]$/,''));
  let target_arr = s[0]; let h_layer = s[1];
  if (!target_arr.length) {
    s = url_h_search(url_header);
    target_arr = s[0]; h_layer = s[1];
  }
  const target_i = target_arr[index];
  let open_ids = [collap_dict[h_layer].ids[collap_dict[h_layer].indexes.indexOf(target_i)]];
  const last_h2 = Math.max.apply(Math, collap_dict.h2.indexes.filter((x) => x < target_i));
  if (last_h2 != -Infinity) {
    open_ids.push(collap_dict.h2.ids[collap_dict.h2.indexes.indexOf(last_h2)]);
  };
  if (h_layer === "h4") {
    const last_h3 = Math.max.apply(Math, collap_dict.h3.indexes.filter((x) => last_h2 < x && x < target_i));
    if (last_h3 != -Infinity) {
      open_ids.push(collap_dict.h3.ids[collap_dict.h3.indexes.indexOf(last_h3)]);
    };
  }
  url_h_arr = coll.filter(function() {return open_ids.includes('#' + $(this).attr('id'))});
  for (let i = 0; i < url_h_arr.length; i++) {
    open_collapsible(url_h_arr[i]);
  }
}

current_url = window.location.href;
url_collapsibles(current_url);
// listen for changes
setInterval(function() {
    if (current_url != window.location.href) {
        // page has changed, set new page as 'current'
        current_url = window.location.href;
        url_collapsibles(current_url);
    }
}, check_url_interval);