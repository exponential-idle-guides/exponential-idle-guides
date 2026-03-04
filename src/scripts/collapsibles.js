import { copy_dict } from '../../../src/utils/dict.js';

const full_skiplist = {
  "guides": {
    "ex-basics": ["#visual-representation", "#reference-formula"],
    "custom-theories": ["#wsp-overview", "#sl-overview", "#ef-overview", "#csr2-overview", "#fi-overview", "#fp-overview", "#rz-overview", "#mf-overview", "#bap-overview"],
    "theory-strategies": ["#official-theories", "#official-custom-theories", "#mfrc"]
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

const check_url_interval = 500; // ms
let current_url = window.location.href;

const url_regex = /^https?\:\/\/(?:[a-z\-\/0-9]*exponential\-idle\-guides\.netlify\.app|localhost\:8000)\/([a-z\-0-9]+(?:\/[a-z\-\/0-9]*|))/g;

function get_skiplist(url) {
  if (!url_regex.test(url)) return [];
  url_regex.lastIndex = 0;
  const path = [...url_regex.exec(url)[1].matchAll(/[a-z\-0-9]+/g)];
  const s = full_skiplist[path[0]][path[1]];
  return s === undefined ? [] : [,...s];
}
const skiplist = [...get_skiplist(current_url), ...supported.map((h) => ".fake-" + h)];

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

// Grabs all h2, h3, and h4 headers
// {h2: {ids: [], indexes: []}, ...}
const h_dict = supported.reduce((a,h) => {
  const h_arr = [...$(h).filter(function() {close = $(this).closest(".sidebar"); return close.length ? !(/.*invis$/mi.test($(close[0]).attr('id'))): true})];
  return ({...a,[h]: {ids: h_arr.map((c) => "#" + $(c).attr('id')), indexes: h_arr.map((c) =>$(c).index())}})
}, {});
const sidebar_h_dict = supported.reduce((a,h) => {
  const h_arr = [...$(h).filter(function() {close = $(this).closest(".sidebar"); return close.length ? !(/.*invis$/mi.test($(close[0]).attr('id'))): false})];
  return ({...a,[h]: {ids: h_arr.map((c) => "#" + $(c).attr('id')), indexes: h_arr.map((c) =>$(c).index())}})
}, {});

const collap_dict = copy_dict(h_dict, (d, h) => Object.keys(d[h]).reduce((a, b) => ({...a, [b] : d[h][b].filter((i, idx) => b === "ids" ? !(i === '#' || skipped($(i).attr('class'), i)) : a.ids.includes(d[h].ids[idx]))}), {}));
const sidebar_collap_dict = copy_dict(sidebar_h_dict, (d, h) => Object.keys(d[h]).reduce((a, b) => ({...a, [b] : d[h][b].filter((i, idx) => b === "ids" ? !(i === '#' || skipped($(i).attr('class'), i)) : a.ids.includes(d[h].ids[idx]))}), {}));

const coll = $('.collapsible');

function open_collapsible(header) {
  header.classList.toggle("active");
  const content = header.nextElementSibling;
  content.style.display = "block";
  $(header).removeClass('collapsible-closed');
  $(header).addClass('collapsible-open');
  $(header).html($(header).html().replace(/\u{25B6}\u{FE0E}/u, '\u{25BC}'));
}
function close_collapsible(header) {
  header.classList.toggle("active");
  const content = header.nextElementSibling;
  content.style.display = "none";
  $(header).removeClass('collapsible-open');
  $(header).addClass('collapsible-closed');
  $(header).html($(header).html().replace(/\u{25BC}/u, '\u{25B6}\u{FE0E}'));
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
    let candidates; let final_h;
    for (const [h, dict] of Object.entries(h_dict)) {
      final_h = h;
      candidates = dict.indexes.filter((i) => dict.ids[dict.indexes.indexOf(i)].replaceAll(new RegExp('\u00AD', 'g'),'').match(new RegExp(search + '$')) !== null);
      if(candidates.length){break};
    }
    return [candidates, final_h];
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