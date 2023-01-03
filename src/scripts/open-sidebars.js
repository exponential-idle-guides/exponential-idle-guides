import { globals } from './init.js';
var qstyle = '';

function openMobileSidebars(sidebars, open=true){
  globals.curr_sidebar = sidebars[0];
  qstyle.setProperty('--sidebar-content-padding', '8px');
  document.getElementById(sidebars[0]+"invis").style.height="auto";
  var max_height = document.getElementById(sidebars[0]+"invis").offsetHeight;
  max_height += open ? 16:0;
  document.getElementById(sidebars[0]+"invis").style.height=0;
  if (max_height <= 0) {
    qstyle.setProperty('--sidebar-height', 'auto');
    qstyle.setProperty('--btn-marginTop', 'auto');
  } else {
    if((max_height + document.getElementById("sidebarMain").offsetHeight) >= window.visualViewport.height){
      max_height = window.visualViewport.height - document.getElementById("sidebarMain").offsetHeight;
      qstyle.setProperty('--btn-marginTop', max_height + "px");
    } else {
      qstyle.setProperty('--sidebar-padding-b', window.visualViewport.height * 0.01 + "px");
      qstyle.setProperty('--btn-marginTop', (max_height + window.visualViewport.height * 0.01) + "px");
    }
    qstyle.setProperty('--sidebar-height', max_height + "px");
    qstyle.setProperty('--sidebar-transition-time', '0.8s');
    qstyle.setProperty('--sidebar-text-transition-time', '0.5s');
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
    qstyle.setProperty('--sidebar-width', 'auto');
    qstyle.setProperty('--btn-marginLeft', 'auto');
  } else {
    const view_max = globals.style_var.getPropertyValue('--sidebar-desktop-max-width');
    if (max_header_width >= window.visualViewport.width * view_max){
      const output = max_header_width + window.visualViewport.width * 0.02;
    } else if (max_width >= window.visualViewport.width * view_max) {
      const output = window.visualViewport.width * view_max;
    } else {
      const output = max_width;
    }
    if((output + mainwidth) >= window.visualViewport.width){
      const output = window.visualViewport.width * 0.96 - mainwidth;
    }
    qstyle.setProperty('--sidebar-width', output + "px");
    qstyle.setProperty('--btn-marginLeft', (output + window.visualViewport.width * 0.04) + "px");
    qstyle.setProperty('--sidebar-padding-lr', window.visualViewport.width * 0.02 + "px");
  }
}

export function openSidebar(sidebars, force=false) {
  if(qstyle===''){window.qstyle = globals.query_root.style;}
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
  switch(open || force){
    case true:
      globals.Mobile ? openMobileSidebars(sidebars, open) : openDesktopSidebars(sidebars);
      break;
    default:
      if(globals.Mobile && globals.curr_sidebar != sidebars[0]){
        openMobileSidebars(sidebars, false);
      }
      break;
  }
}

screen.orientation.addEventListener("click", function(e){
  console.log(document.getElementById("sidebarOptions").contains(e.target))
  if(document.getElementById("sidebarOptions").contains(e.target)){
    console.log(globals.sidebar_btn_list);
    for(const btn in globals.sidebar_btn_list){
      console.log(btn);
      console.log(document.getElementById(btn).contains(e.target));
      if(document.getElementById(btn).contains(e.target)){
        globals.sidebar_list.sort(function(x,y){ return x == btn ? -1 : y == btn ? 1 : 0 });
        console.log(globals.sidebar_list);
        openSidebar(globals.sidebar_list);
        break
      }
    }
  }
})