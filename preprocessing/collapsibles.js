import {full_skiplist, closed_char, open_char, supported} from '../src/scripts/collapsibles_data.js';

function get_url_paths(url) {return [...url.slice(1).split("/")];}

function get_skiplist(url) {
  if (url.slice(1) == "index") {return [];}
  const path = get_url_paths(url);
  const s = full_skiplist[path[0]][path[1]];
  return s === undefined ? [] : [,...s];
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

export function collapsibles($, current_url, slugify) {
  function strRepl(str) {
    return str ? slugify(str, { lower: true, strict: true }) : "";
  }

  const skiplist = [...get_skiplist(current_url), ...supported.map((h) => ".fake-" + h)];
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

  // any elements with `.fake-h2`, `.fake-h3`, `.fake-h4` classes will be turned into h2, h3, and h4 elements (retaining class)
  for (const h_type of supported) {
    for (const h of $(".fake-" + h_type)) {
      var h_new = $("<" + h_type + ">");
      $(this).each($(h)[0].attributes, function(idx, attr) {h_new.attr(attr.nodeName, attr.nodeValue);});
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
    const h_arr = [...$(h).filter(function() {
      const close = $(this).closest(".sidebar");
      return close.length ? !(/.*invis$/mi.test($(close[0]).attr('id'))): true;
    })];
    return ({...a,[h]: {ids: h_arr.map((c) => "#" + strRepl($(c).attr('id'))), indexes: h_arr.map((c) =>$(c).index())}})
  }, {});
  const sidebar_h_dict = supported.reduce((a,h) => {
    const h_arr = [...$(h).filter(function() {
      const close = $(this).closest(".sidebar");
      return close.length ? !(/.*invis$/mi.test($(close[0]).attr('id'))): false;
    })];
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
  supported.forEach(function(h_type, i) {$(".fake-" + h_type).each(function() {if(!($(this).attr('class').split(/(\s+)/).some(r => r=="retain-fake"))){$(this).remove()}})});

  function open_collapsible(header) {
    //header.classList.toggle("active");
    $(header).toggleClass('active');
    $(header).next().css('display', 'block');
    $(header).removeClass('collapsible-closed');
    $(header).addClass('collapsible-open');
    $(header).html($(header).html().replace(new RegExp(closed_char), open_char));
  }
  function close_collapsible(header) {
    //header.classList.toggle("active");
    $(header).toggleClass('active');
    $(header).next().css('display', 'none');
    $(header).removeClass('collapsible-open');
    $(header).addClass('collapsible-closed');
    $(header).html($(header).html().replace(new RegExp(open_char), closed_char));
  }

  for (let i = 0; i < coll.length; i++) {
    // open and close once to make sure it closes
    // often breaks if in the sidebar for unknown reasons
    open_collapsible(coll[i]);
    //close_collapsible(coll[i]);
  }
  
  return $.html()
}