const { copy_dict, gt_dict, lt_dict, zip_idi } = require('../../../src/utils/dict');
const { strRepl } = require('../../../src/utils/str');
const cheerio = require('cheerio');

const full_skiplist = {
  "guides": {
    "ex-basics": ["#visual-representation", "#reference-formula"],
    "theories-5-8": ["#theory-1", "#theory-2", "#theory-3", "#theory-4"],
    "endgame": ["#lemmas"],
    "theory-sim": ["#updated-theory-sim-video-by-snaeky"],
    "custom-theories": ["#wsp-overview", "#sl-overview", "#ef-overview", "#csr2-overview", "#fi-overview", "#fp-overview", "#rz-overview", "#mf-overview", "#bap-overview"],
    "theory-strategies": ["#mfrc"]
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

const supported = ["h2", "h3", "h4"];
const sidebar_ids = ['#TOCSidebar', '#GuideSidebar', '#ResourceSidebar', '#ExtensionSidebar', '#RankingSidebar', '#SeasonSidebar', '#CTSidebar'];

function get_skiplist(filepath) {
  if (filepath.slice(1) == "index") {return [];}
  const path = [...filepath.slice(1).split("/")];
  const s = full_skiplist[path[0]][path[1]];
  return s === undefined ? [] : [,...s];
}

function skipped(skiplist, classlist, id = "#") {
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

function get_h_dict($, parent) {
  // Grabs all h2, h3, and h4 headers
  // {h2: {ids: [], indexes: []}, ...}
  return supported.reduce((a,h) => {
    const h_arr = [...parent.children(h)];
    return ({...a,[h]: {ids: h_arr.map((c) => "#" + strRepl($(c).attr('id'))), indexes: h_arr.map((c) =>$(c).index())}})
  }, {});
}

function get_collap_dict($, h_dict, skiplist) {
  return copy_dict(h_dict, (d, h) => Object.keys(d[h]).reduce((a, b) => ({...a, [b] : d[h][b].filter((i, idx) => b === "ids" ? !(i === '#' || skipped(skiplist, $(i).attr('class'), i)) : a.ids.includes(d[h].ids[idx]))}), {}));
}

function apply($, h_dict, collap_dict, parent) {
  if (collap_dict.h2.ids.length) {
    const z2 = zip_idi(collap_dict.h2);
    const l2 = z2.length - 1;
    z2.forEach(function([h2_id,h2_i], i){
      $(h2_id)
        .nextUntil((i < l2) ? collap_dict.h2.ids[i+1] : parent)
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
            const h4_until = $(h4_id)
              .nextUntil(h4_id + 'finalh4wrap')
              .add(h4_id + 'finalh4wrap');
            if (h4_until.length) {
              h4_until.wrapAll('<div class="content"/>');
            } else {
              $(h4_id).after('<div class="content"></div>')
            }
          } else {
            const h4_until = $(h4_id).nextUntil('h3, h4');
            if (h4_until.length) {
              h4_until.wrapAll('<div class="content"/>');
            } else {
              $(h4_id).after('<div class="content"></div>')
            }
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
            const h3_until = $(h3_id)
              .nextUntil(h3_id + 'finalh3wrap')
              .add(h3_id + 'finalh3wrap');
            if (h3_until.length) {
              h3_until.wrapAll('<div class="content"/>');
            } else {
              $(h3_id).after('<div class="content"></div>')
            }
          } else {
            const h3_until = $(h3_id).nextUntil('h3');
            if (h3_until.length) {
              h3_until.wrapAll('<div class="content"/>');
            } else {
              $(h3_id).after('<div class="content"></div>')
            }
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
                const h4_until = $(h4_id)
                  .nextUntil(h4_id + 'finalh4wrap')
                  .add(h4_id + 'finalh4wrap');
                if (h4_until.length) {
                  h4_until.wrapAll('<div class="content"/>');
                } else {
                  $(h4_id).after('<div class="content"></div>')
                }
              } else {
                const h4_until = $(h4_id).nextUntil('h4');
                if (h4_until.length) {
                  h4_until.wrapAll('<div class="content"/>');
                } else {
                  $(h4_id).after('<div class="content"></div>')
                }
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
          const h4_until = $(h4_id)
            .nextUntil(h4_id + 'finalh4wrap')
            .add(h4_id + 'finalh4wrap');
          if (h4_until.length) {
            h4_until.wrapAll('<div class="content"/>');
          } else {
            $(h4_id).after('<div class="content"></div>')
          }
        } else {
          const h4_until = $(h4_id).nextUntil('h4');
          if (h4_until.length) {
            h4_until.wrapAll('<div class="content"/>');
          } else {
            $(h4_id).after('<div class="content"></div>')
          }
        }
      });
    }
    zip_idi(collap_dict.h3).forEach(function([h3_id, h3_i],i) {
      const h3_until = $(h3_id).nextUntil(collap_dict.h3.ids[i+1]);
      if (h3_until.length) {
        h3_until.wrapAll('<div class="content"/>');
      } else {
        $(h3_id).after('<div class=content></div>');
      }
      
      const next_h3_i = collap_dict.h3.indexes[i+1];
      const h4 = lt_dict(gt_dict(collap_dict.h4, h3_i), next_h3_i);
      if (h4.ids.length) {
        const last_h4 = lt_dict(h_dict.h4, next_h3_i).indexes.slice(-1)[0];
        zip_idi(h4).forEach(function([h4_id,h4_i], l) {
          $(h4_id).next('.content').children().unwrap();
          if (h4_i >= last_h4) {
            const h4_final  = $(h4_id).siblings().last();
            h4_final.attr('id', h4_id.slice() + 'finalh4wrap');
            const h4_until = $(h4_id)
              .nextUntil(h4_id + 'finalh4wrap')
              .add(h4_id + 'finalh4wrap');
            if (h4_until.length) {
              h4_until.wrapAll('<div class="content"/>');
            } else {
              $(h4_id).after('<div class="content"></div>')
            }
          } else {
            const h4_until = $(h4_id).nextUntil('h4');
            if (h4_until.length) {
              h4_until.wrapAll('<div class="content"/>');
            } else {
              $(h4_id).after('<div class="content"></div>')
            }
          }
        });
      }    
    });
  }
}

function section($, parent, skiplist) {
  const h_dict = get_h_dict($, parent);
  
  if (!(h_dict.h2.ids.length || h_dict.h3.ids.length || h_dict.h4.ids.length)) {
    return;
  }
  const collap_dict = get_collap_dict($, h_dict, skiplist);

  for (const h of Object.keys(collap_dict).reduce((a,i) => [...a,...collap_dict[i].ids],[]).map((id) => $(id))){
    h.html('\u{25B6}\u{FE0E}' + ' ' + h.html());
    h.addClass('collapsible collapsible-closed');
  }

  apply($, h_dict, collap_dict, parent);
}

module.exports = function (config, exclusions) {
  config.addTransform("collapsibles", function(content, outputPath) {
    if (!exclusions.includes(outputPath) 
      && outputPath 
      && (outputPath.endsWith(".html")
        || outputPath.endsWith(".md")
        || outputPath.endsWith(".njk")
      )
    ) {
      const $ = cheerio.load(content);
      const page = this.page;
      const current_filepath = page.filePathStem;
      const main = $("main");
      
      const skiplist = [...get_skiplist(current_filepath), ...supported.map((h) => ".fake-" + h)];

      // any elements with `.fake-h2`, `.fake-h3`, `.fake-h4` classes will be turned into h2, h3, and h4 elements (retaining class)
      for (const h_type of supported) {
        for (const h of main.children(".fake-" + h_type)) {
          var h_new = $("<" + h_type + ">");
          $(h)[0].attributes.forEach(function(attr, idx) {
            h_new.attr(attr.nodeName, attr.nodeValue);
          });
          h_new.html($(h).html());
          $(h).replaceWith(h_new);
        };
      };

      // any non-md headers with ids will be given permalink
      supported.reduce((a,h) => [...a, ...main.children(h + "[id]")], []).forEach((h) => {
        if(!/\" aria\-label\=\"Permalink\: /g.test($(h).html())){
          const slug = strRepl($(h).html());
          $(h).html($(h).html() + ' ' + '<a class="direct-link" href="#' + slug + '" aria-label="Permalink: ' + slug + '"><span class="visually-hidden" style="display:none;">Permalink: ' + slug + '</span><span aria-hidden="true">#</span></a>')
        }
        $(h).attr("style","color:var(--palette-stroke-collapsible-header);");
      })
      // TOCSidebarinvis headers need to have invis added to their header id to stand out from TOCSidebar headers
      supported.reduce((a,h) => [...a, ...$("#TOCSidebarinvis").find(h + "[id]")], []).forEach((h) => {
        $(h).attr('id', $(h).attr('id') + 'invis');
      });

      // any headers with no id will be given permalink and an id (not first h2)
      for (const h of ["h2", "h3", "h4"].reduce((a,h) => [...a, ...main.find(h + ":not([id])")], []).slice(1)) {
        const slug = strRepl($(h).html());
        $(h).attr('id', slug);
        $(h).html($(h).html() + ' ' + '<a class="direct-link" href="#' + slug + '" aria-label="Permalink: ' + slug + '"><span class="visually-hidden" style="display:none;">Permalink: ' + slug + '</span><span aria-hidden="true">#</span></a>');
        $(h).attr("style","color:var(--palette-stroke-collapsible-header);");
      }
      sidebar_ids.forEach(function(id) {
        for (const t of ['', 'invis']) {
          const q = id + t;
          for (const h of ["h2", "h3", "h4"].reduce((a,h) => [...a, ...$(q).find(h + ":not([id])")], [])) {
            $(h).attr('id', strRepl($(h).html()+q.slice(1)));
            $(h).attr("style","color:var(--palette-stroke-collapsible-header);");
          }
        }
      });

      const parents = [main, ...sidebar_ids.reduce((a, h) => {
        if (h === "#TOCSidebar") {
          return [...a,$(h + " > div > nav"),$(h+"invis > div > nav")]; 
        }
        return [...a,$(h + " > div"),$(h+"invis > div")];
      }, [])];

      for (const parent of parents) {
        if (parent.length) {
          section($, parent, skiplist)
        }
      }

      // For all Headers with no body to collapse, revert to regular header.
      $('.collapsible').each(function() {
        const t = $(this);
        const s = t.next();
        if (s.prop('outerHTML') === '<div class="content"></div>') {
          s.remove();
          t.removeClass('collapsible collapsible-open collapsible-closed');
          t.html(t.html().slice(2))
        }
      });

      const coll = main.find('.collapsible');

      // any elements with `.fake-h2`, `.fake-h3`, `.fake-h4` classes will be removed now that they have served their purpose
      supported.forEach(function(h_type, i) {main.children(".fake-" + h_type).each(function() {if(!($(this).attr('class').split(/(\s+)/).some(r => r=="retain-fake"))){$(this).remove()}})});
      

      function open_collapsible(header) {
        $(header).toggleClass('active');
        $(header).next().css('display', 'block');
        $(header).removeClass('collapsible-closed');
        $(header).addClass('collapsible-open');
        $(header).html($(header).html().replace(/\u{25B6}\u{FE0E}/u, '\u{25BC}'));
      }
      function close_collapsible(header) {
        $(header).toggleClass('active');
        $(header).next().css('display', 'none');
        $(header).removeClass('collapsible-open');
        $(header).addClass('collapsible-closed');
        $(header).html($(header).html().replace(/\u{25BC}/u, '\u{25B6}\u{FE0E}'));
      }

      for (let i = 0; i < coll.length; i++) {
        // open and close once to make sure it closes
        // often breaks if in the sidebar for unknown reasons
        open_collapsible(coll[i]);
        close_collapsible(coll[i]);
      }
      
      return $.html();
    } else {
      return content;
    }
  });
}