import { globals } from './init.js';

const check_url_interval = 500; // ms
let current_url = window.location.href;
const main = $("main");

const coll_headers = $('.collapsible:is(h2,h3,h4)');
const main_coll_headers = main.find('.collapsible:is(h2,h3,h4)');
const main_coll_tables = main.find('table.collapsible');

const open_collapsible_header = (header) => $(header)
  .find(String.raw`> label > input[type="checkbox"][role="toggle"]:not(:checked)`)
  .prop('checked', true);
const close_collapsible_header = (header) => $(header)
  .find(String.raw`> label > input[type="checkbox"][role="toggle"]:checked`)
  .prop('checked', false);

const open_collapsible_table = (table) => $(table)
  .find(String.raw`> caption > label > input[type="checkbox"][role="toggle"]:not(:checked)`)
  .prop('checked', true);
const close_collapsible_table = (table) => $(table)
  .find(String.raw`> caption > label > input[type="checkbox"][role="toggle"]:checked`)
  .prop('checked', false);

document.addEventListener('DOMContentLoaded', function() {
  $('#openCollapsibles')[0].addEventListener("click", function(e){
    main_coll_headers.each(function() {
      open_collapsible_header(this);
    });
    main_coll_tables.each(function() {
      open_collapsible_table(this);
    });
  });
  $('#closeCollapsibles')[0].addEventListener("click", function(e){
    coll_headers.each(function() {
      close_collapsible_header(this);
    });
    main_coll_tables.each(function() {
      close_collapsible_table(this);
    });
  });
});

function url_collapsibles(url) {
  let url_header = url.match(/#[a-z0-9-]+$/);
  if (url_header === null) {return;}
  url_header = globals.sidebar_list.reduce((u,s) => u.replace(s.toLowerCase(), ""), url_header[0]);
  let h = $(url_header + String.raw`.collapsible:has(> label > input:where([type="checkbox"][role="toggle"]))`);
  if (h.length === 0) {return;}
  open_collapsible_header(h);
  ["h2", "h3", "h4"].map(
    (tag) => 
      main.find(
        tag 
        + String.raw`.collapsible:has(> label > input:where([type="checkbox"][role="toggle"])):has(+ div.content ` 
        + url_header 
        + String.raw`.collapsible:has(> label > input:where([type="checkbox"][role="toggle"])))`
      )
  ).forEach(
    (tag) => 
      tag.each(function(){open_collapsible_header($(this))})
  );
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
