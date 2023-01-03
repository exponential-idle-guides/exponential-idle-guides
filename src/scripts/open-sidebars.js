import { globals } from './init.js';

const qstyle = globals.query_root.style;

function openMobileSidebars(sidebars, open=true){
  globals.curr_sidebar = sidebars[0];
  qstyle.setProperty('--sidebar-content-padding', '8px');
  document.getElementById(sidebars[0]+"invis").style.height="auto";
  max_height = document.getElementById(sidebars[0]+"invis").offsetHeight;
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
  max_width = 0;
  mainwidth = document.getElementById("sidebarMain").offsetWidth;
  
  for (const sidebar of sidebars) {
    document.getElementById(sidebar + "invis").style.width = "auto";
    if(document.getElementById(sidebar + "invis").offsetWidth > max_width){
      max_width = document.getElementById(sidebar + "invis").offsetWidth;
    }
    document.getElementById(sidebar + "invis").style.width = 0;
  }
  document.getElementById(sidebarheaders).style.width = "auto";
  max_header_width = document.getElementById(sidebarheaders).offsetWidth;
  document.getElementById(sidebarheaders).style.width = "0%";
  if (max_width <= 0 && max_header_width <= 0) {
    qstyle.setProperty('--sidebar-width', 'auto');
    qstyle.setProperty('--btn-marginLeft', 'auto');
  } else {
    view_max = globals.style_var.getPropertyValue('--sidebar-desktop-max-width');
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
    qstyle.setProperty('--sidebar-width', output + "px");
    qstyle.setProperty('--btn-marginLeft', (output + window.visualViewport.width * 0.04) + "px");
    qstyle.setProperty('--sidebar-padding-lr', window.visualViewport.width * 0.02 + "px");
  }
}

function openSidebar(sidebars, force=false) {
  if((window.location.href).includes('/ranking-news') && !(sidebars.includes('RankingSidebar'))){sidebars.push('RankingSidebar');}
  for (const sidebar of sidebars) {
    document.getElementById(sidebar).style.zIndex = "0";
  }
  document.getElementById(sidebars[0]).style.zIndex = "10";
  document.getElementById('sidebarMain').style.zIndex = "11";
  
  margin = globals.Mobile ? 'Top' : 'Left';
  direct = globals.Mobile ? 'height' : 'width';
  btn = globals.style_var.getPropertyValue('--btn-margin'+margin);
  sidebar = globals.style_var.getPropertyValue('--sidebar-'+direct);
  open = (btn == "0%" && sidebar == "0%");
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