import { globals } from './init.js';

function openMobileSidebars(sidebars, open=true){
  globals.curr_sidebar = sidebars[0];
  globals.qstyle.setProperty('--sidebar-content-padding', '8px');

  document.getElementById(sidebars[0]+"invis").style.height="auto";
  var max_height = document.getElementById(sidebars[0]+"invis").offsetHeight;
  max_height += open ? 16:0;
  document.getElementById(sidebars[0]+"invis").style.height=0;

  if (max_height <= 0) {
    globals.qstyle.setProperty('--sidebar-height', 'auto');
    globals.qstyle.setProperty('--btn-marginTop', 'auto');
  } else {
    if((max_height + document.getElementById("sidebarMain").offsetHeight) >= window.visualViewport.height){
      max_height = window.visualViewport.height - document.getElementById("sidebarMain").offsetHeight;
      globals.qstyle.setProperty('--btn-marginTop', max_height + "px");
    } else {
      globals.qstyle.setProperty('--sidebar-padding-b', window.visualViewport.height * 0.01 + "px");
      globals.qstyle.setProperty('--btn-marginTop', (max_height + window.visualViewport.height * 0.01) + "px");
    }
    globals.qstyle.setProperty('--sidebar-height', max_height + "px");
    globals.qstyle.setProperty('--sidebar-transition-time', '0.8s');
    globals.qstyle.setProperty('--sidebar-text-transition-time', '0.5s');
  }
}

function openDesktopSidebars(sidebars, sidebarheaders='SidebarHeaders'){
  globals.curr_sidebar = sidebars[0];
  var max_width = 0;
  const mainwidth = document.getElementById("sidebarMain").offsetWidth;
  
  for (const sidebar of sidebars) {
    document.getElementById(sidebar + "invis").style.width = "auto";
    if(document.getElementById(sidebar + "invis").offsetWidth > max_width){
      max_width = document.getElementById(sidebar + "invis").offsetWidth;
    }
    document.getElementById(sidebar + "invis").style.width = 0;
  }
  document.getElementById(sidebarheaders).style.width = "auto";
  var max_header_width = document.getElementById(sidebarheaders).offsetWidth;
  document.getElementById(sidebarheaders).style.width = "0%";

  if (max_width <= 0 && max_header_width <= 0) {
    globals.qstyle.setProperty('--sidebar-width', 'auto');
    globals.qstyle.setProperty('--btn-marginLeft', 'auto');
  } else {
    const view_max = globals.style_var.getPropertyValue('--sidebar-desktop-max-width');
    var output;
    if (max_header_width >= window.visualViewport.width * view_max){
      output = max_header_width + window.visualViewport.width * 0.02;
    } else if (max_width >= window.visualViewport.width * view_max) {
      output = window.visualViewport.width * view_max;
    } else {
      output = max_width;
    }
    if((output + mainwidth) >= window.visualViewport.width){
      output = window.visualViewport.width * 0.96 - mainwidth;
    }
    globals.qstyle.setProperty('--sidebar-width', output + "px");
    globals.qstyle.setProperty('--btn-marginLeft', (output + window.visualViewport.width * 0.04) + "px");
    globals.qstyle.setProperty('--sidebar-padding-lr', window.visualViewport.width * 0.02 + "px");
  }
}

export function openSidebar(sidebars, force=false) {
  globals.root.classList.add('mobile');
  for (const sidebar of sidebars) {
    document.getElementById(sidebar).style.zIndex = "0";
  }
  document.getElementById(sidebars[0]).style.zIndex = "10";
  document.getElementById('sidebarMain').style.zIndex = "11";
  
  const margin = globals.Mobile ? 'Top' : 'Left';
  const direct = globals.Mobile ? 'height' : 'width';
  const btn = globals.style_var.getPropertyValue('--btn-margin'+margin);
  const sidebar = globals.style_var.getPropertyValue('--sidebar-'+direct);
  const open = (btn == "0%" && sidebar == "0%");
  if(open || force){
    globals.Mobile ? openMobileSidebars(sidebars, open) : openDesktopSidebars(sidebars);
  } else if (globals.Mobile && globals.curr_sidebar != sidebars[0]){
    openMobileSidebars(sidebars, false);
  }
}

window.addEventListener("click", function(e){
  if(document.getElementById("sidebarOptions").contains(e.target)){
    for(const btn of globals.sidebar_btn_list){
      if(document.getElementById(btn).contains(e.target)){
        const side = btn.slice(0,-3) + 'Sidebar';
        globals.sidebar_list.sort(function(x,y){ return x == side ? -1 : y == side ? 1 : 0 });
        openSidebar(globals.sidebar_list);
        break
      }
    }
  }
})