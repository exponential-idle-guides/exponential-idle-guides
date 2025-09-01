const full_skiplist = {
  "guides": {
    "ex-basics": ["#visual-representation", "#reference-formula"],
    "custom-theories": ["#wsp-overview", "#sl-overview", "#ef-overview", "#csr2-overview", "#fi-overview", "#fp-overview", "#rz-overview", "#mf-overview", "#bap-overview"],
    "theory-strategies": ["#official-theories", "#official-custom-theories"]
  },
  "guide-extensions": {
    "rankings-hall-of-fame": ["#hall-of-fame"],
    "rankings-main": ["#previous-rankings"],
    "seasons-main": ["#previous-rankings"]
  },
  "ranking-news": {
    "2022-yr": ["#2022-recap"]
  },
  "season-news": {},
  "ct-creation": {},
  "": {}
}
// add "" index check

const closed_char = '\u25B6';
const open_char = '\u25BC';
const check_url_interval = 500; // ms
let current_url = window.location.href;
const supported = ["h2", "h3", "h4"];

const url_regex = /^https?\:\/\/(?:[a-z\-\/0-9]*exponential\-idle\-guides\.netlify\.app|localhost\:8000)\/([a-z\-0-9]+(?:\/[a-z\-\/0-9]*|))/g;
function get_url_paths(url) {
  if (!/^https?\:\/\/(?:[a-z\-\/0-9]*exponential\-idle\-guides\.netlify\.app|localhost\:8000)\/([a-z\-0-9]+(?:\/[a-z\-\/0-9]*|))/g.test(url)) return [];
  return [.../^https?\:\/\/(?:[a-z\-\/0-9]*exponential\-idle\-guides\.netlify\.app|localhost\:8000)\/([a-z\-0-9]+(?:\/[a-z\-\/0-9]*|))/g.exec(url)[1].matchAll(/[a-z\-0-9]+/g)];
}


function get_skiplist(url) {
  if (!/^https?\:\/\/(?:[a-z\-\/0-9]*exponential\-idle\-guides\.netlify\.app|localhost\:8000)\/([a-z\-0-9]+(?:\/[a-z\-\/0-9]*|))/g.test(url)) return [];
  const path = get_url_paths(url);
  const s = full_skiplist[path[0]][path[1]];
  return s === undefined ? [] : [,...s];
}
const skiplist = [...get_skiplist(current_url), ...supported.map((h) => ".fake-" + h)];

function strRepl(str) {
  return str ? slugify(str, { lower: true, strict: true }) : "";
}

function copy_dict(dict, f) {
	return Object.keys(dict).reduce((a,v) => ({...a, [v]: f(dict, v)}), {});
}
function gt_dict(dict, val){
  const arr = dict.indexes;
	if (Math.min(...arr) > val){
  	return copy_dict(dict, (d,k) => d[k].slice());
  } else if (Math.max(...arr) < val) {
  	return copy_dict(dict, (d,k) => []);
  }
  const i = arr.findIndex((e) => e > val);
  return copy_dict(dict, (d,k) => d[k].slice(i));
}
function lt_dict(dict, val){
  const arr = dict.indexes;
	if (Math.max(...arr) < val || val === undefined){
  	return copy_dict(dict, (d,k) => d[k].slice());
  } else if (Math.min(...arr) > val) {
  	return copy_dict(dict, (d,k) => []);
  }
  const i = arr.length - [...arr].reverse().findIndex((e) => e < val);
  return copy_dict(dict, (d,k) => d[k].slice(0,i));
}

function zip() {
    const args = [].slice.call(arguments);
    const shortest = args.length==0 ? [] : args.reduce(function(a,b){
        return a.length<b.length ? a : b
    });

    return shortest.map(function(_,i){
        return args.map(function(array){return array[i]})
    });
}
let zip_idi = dict => zip(dict.ids, dict.indexes);

function skipped(classlist, id = "#") {
  if (classlist === undefined && id === "#") {
    return false;
  } else if (skiplist.includes(id)) {
    return true
  } else if (classlist !== undefined) {
    return classlist.split(/(\s+)/).some(r => skiplist.includes("." + r))
  } else {
    return false
  }
}

const path = get_url_paths(current_url);
if (path.length == 2) {
  if (path[0][0] === "ranking-news" && $("h2").length > 1) {
    const second = $("h2")[1];
    if ((new RegExp(path[1][0].slice(5) + '[a-z]*-' + path[1][0].slice(0,4), "g")).test(strRepl(second.innerText.toLowerCase()))) {
      $(second).remove();
    }
  }
}

// any elements with `.fake-h2`, `.fake-h3`, `.fake-h4` classes will be turned into h2, h3, and h4 elements (retaining class)
for (const h_type of supported) {
  for (const h of $(".fake-" + h_type)) {
    var h_new = $("<" + h_type + ">");
    $.each($(h)[0].attributes, function(idx, attr) {h_new.attr(attr.nodeName, attr.nodeValue);});
    h_new.html($(h).html());
    $(h).replaceWith(h_new);
  };
};

// any non-md headers with ids will be given permalink
supported.reduce((a,h) => [...a, ...$(h + "[id]")], []).forEach((h) => {
  if(!/\" aria\-label\=\"Permalink\: /g.test($(h).html())){
    $(h).html($(h).html() + ' ' + '<a class="direct-link" href="#' + strRepl($(h).html()) + '" aria-label="Permalink: ' + strRepl($(h).html()) + '">#</a>')
  }
  $(h).attr("style","color:var(--palette-stroke-collapsible-header);");
})

// any headers with no id will be given permalink and an id (not first h2)

for (const h of ["h2", "h3", "h4"].reduce((a,h) => [...a, ...$(h + ":not([id])")], []).slice(1)) {
  const new_h = strRepl($(h).html());
  $(h).attr('id', new_h);
  $(h).html($(h).html() + ' ' + '<a class="direct-link" href="#' + new_h + '" aria-label="Permalink: ' + new_h + '">#</a>');
}

// Grabs all h2, h3, and h4 headers
// {h2: {ids: [], indexes: []}, ...}
const h_dict = supported.reduce((a,h) => {
  const h_arr = [...$(h).filter(function() {close = $(this).closest(".sidebar"); return close.length ? !(/.*invis$/mi.test($(close[0]).attr('id'))): true})];
  return ({...a,[h]: {ids: h_arr.map((c) => "#" + strRepl($(c).attr('id'))), indexes: h_arr.map((c) =>$(c).index())}})
}, {});
const sidebar_h_dict = supported.reduce((a,h) => {
  const h_arr = [...$(h).filter(function() {close = $(this).closest(".sidebar"); return close.length ? !(/.*invis$/mi.test($(close[0]).attr('id'))): false})];
  return ({...a,[h]: {ids: h_arr.map((c) => "#" + strRepl($(c).attr('id'))), indexes: h_arr.map((c) =>$(c).index())}})
}, {});

const collap_dict = copy_dict(h_dict, (d, h) => Object.keys(d[h]).reduce((a, b) => ({...a, [b] : d[h][b].filter((i, idx) => b === "ids" ? !(i === '#' || skipped($(i).attr('class'), i)) : a.ids.includes(d[h].ids[idx]))}), {}));
const sidebar_collap_dict = copy_dict(sidebar_h_dict, (d, h) => Object.keys(d[h]).reduce((a, b) => ({...a, [b] : d[h][b].filter((i, idx) => b === "ids" ? !(i === '#' || skipped($(i).attr('class'), i)) : a.ids.includes(d[h].ids[idx]))}), {}));

for (const h of Object.keys(collap_dict).reduce((a,i) => [...a,...collap_dict[i].ids],[]).map((id) => $(id))){
  h.html(closed_char + ' ' + h.html());
  h.addClass('collapsible collapsible-closed');
}
const coll = $('.collapsible');

if (collap_dict.h2.ids.length) {
  zip_idi(collap_dict.h2).forEach(function([h2_id,h2_i], i){
    $(h2_id)
      .nextUntil(collap_dict.h2.ids[i+1])
      .wrapAll('<div class="content"/>');
    
    const next_h2_i = collap_dict.h2.indexes[i+1];
    const h2_h3 = lt_dict(gt_dict(collap_dict.h3, h2_i), next_h2_i);
    const next_h3 = h2_h3.indexes[0] === undefined ? {ids: collap_dict.h2[next_h2_i], indexes: [next_h2_i]} : copy_dict(h2_h3, (d,k) => d[k][0]);
    const h2_h4 = lt_dict(gt_dict(collap_dict.h4, h2_i), next_h3.indexes);
    if (h2_h4.ids.length) {
      const last_h4_i = lt_dict(h_dict.h4, next_h3.indexes).indexes.slice(-1)[0];
      zip_idi(h2_h4).forEach(function([h4_id, h4_i], k) {
        $(h4_id).next('.content').children().unwrap();
        if (h4_i >= last_h4_i) {
        	const h4_final = next_h3.indexes ? $(next_h3.ids).prev() : $(h4_id).siblings().last();
          h4_final.attr('id', h4_id.slice(1) + 'finalh4wrap');
          $(h4_id)
          	.nextUntil(h4_id + 'finalh4wrap')
            .add(h4_id + 'finalh4wrap')
            .wrapAll('<div class="content"/>');
        } else {
        	$(h4_id)
            .nextUntil('h3, h4')
            .wrapAll('<div class="content"/>');
        }
      });
    }

    if (h2_h3.ids.length) {
    	const last_h3_i = lt_dict(h_dict.h3, next_h2_i).indexes.slice(-1)[0];
      zip_idi(h2_h3).forEach(function([h3_id, h3_i], l) {
        $(h3_id).next('.content').children().unwrap();
        if (h3_i >= last_h3_i) {
        	const h3_final  = $(h3_id).siblings().last();
          h3_final.attr('id', h3_id.slice(1) + 'finalh3wrap');
          $(h3_id)
          	.nextUntil(h3_id + 'finalh3wrap')
            .add(h3_id + 'finalh3wrap')
            .wrapAll('<div class="content"/>');
        } else {
        	$(h3_id)
            .nextUntil('h3')
            .wrapAll('<div class="content"/>');
        }
        
        const next_h3_i = h_dict.h3.indexes[h_dict.h3.indexes.indexOf(h3_i)+1];
        const next_h2_h3_i = (next_h2_i === undefined && next_h3_i === undefined) ? Infinity : (next_h3_i === undefined ? next_h2_i : (next_h2_i === undefined ? next_h3_i : Math.min(next_h3_i, next_h2_i)));
        const h3_h4 = lt_dict(gt_dict(collap_dict.h4, h3_i), next_h2_h3_i);
        if (h3_h4.ids.length) {
        	const last_h4_i = lt_dict(h_dict.h4, next_h2_h3_i).indexes.slice(-1)[0];
        	zip_idi(h3_h4).forEach(function([h4_id, h4_i], m) {
            $(h4_id).next('.content').children().unwrap();
            if (h4_i >= last_h4_i) {
              const h4_final  = $(h4_id).siblings().last();
              h4_final.attr('id', h4_id.slice(1) + 'finalh4wrap');
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
  const first_h3 = {ids: collap_dict.h3.ids[0], indexes: collap_dict.h3.indexes[0]};
  const h4_h3 = lt_dict(collap_dict.h4, first_h3.indexes);
  if (h4_h3.ids.length) {
		const last_h4_i = h4_h3.indexes.slice(-1)[0];
  	zip_idi(h4_h3).forEach(function([h4_id, h4_i], i) {
      if (h4_i >= last_h4_i) {
      	const h4_final = collap_dict.h3.indexes.length ? $(first_h3.ids).prev() : $(h4_id).siblings().last();
        h4_final.attr('id', h4_id.slice(1) + 'finalh4wrap');
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
	zip_idi(collap_dict.h3).forEach(function([h3_id, h3_i],i) {
    $(h3_id)
    	.nextUntil(collap_dict.h3.ids[i+1])
      .wrapAll('<div class="content"/>');
    
    const next_h3_i = collap_dict.h3.indexes[i+1];
    const h4 = lt_dict(gt_dict(collap_dict.h4, h3_i), next_h3_i);
    if (h4.ids.length) {
    	const last_h4 = lt_dict(h_dict.h4, next_h3_i).indexes.slice(-1)[0];
      zip_idi(h4).forEach(function([h4_id,h4_i], l) {
        $(h4_id).next('.content').children().unwrap();
        if (h4_i >= last_h4) {
        	const h4_final  = $(h4_id).siblings().last();
          h4_final.attr('id', h4_id.slice() + 'finalh4wrap');
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


// any elements with `.fake-h2`, `.fake-h3`, `.fake-h4` classes will be removed now that they have served their purpose
supported.forEach(function(h_type, i) {$(".fake-" + h_type).remove()});

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
  // open and close once to make sure it closes
  // often breaks if in the sidebar for unknown reasons
  open_collapsible(coll[i]);
  close_collapsible(coll[i]);
  coll[i].addEventListener("click", function() {
    if (this.nextElementSibling.style.display === "block") {
      close_collapsible(this);
    } else {
      open_collapsible(this);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
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
});

export function close_all_sidebar_collapsibles() {
  Object.values(sidebar_collap_dict).forEach(((h) => h.ids.forEach((id) => close_collapsible($(id)[0]))));
}

function url_collapsibles(url) {
  const url_header = url.match(/[a-z0-9-]*$/g)[0];
  if ([null, ''].includes(url_header)) {return}
  const index = url_header.match(/-[1-9]$/) === null ? 0 : Number(url_header.match(/[1-9]$/)[0]);

  function url_h_search(search) {
    let canidates; let final_h;
    for (const [h, dict] of Object.entries(h_dict)) {
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
  if (h_layer !== "h2") {
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
  }
  for (const i of coll.filter(function() {return open_ids.includes('#' + $(this).attr('id'))})) {
    open_collapsible(i);
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