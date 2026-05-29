import { globals } from '../init.js';
import { close_all_popups } from '../popup.js';
import { close_all_sidebar_collapsibles } from '../collapsibles.js';
import { closeSidebar } from './close-sidebars.js';

function openMobileSidebars(sidebars){
  close_all_popups();
  close_all_sidebar_collapsibles();
  globals.curr_sidebar = sidebars[0];
  globals.qstyle.setProperty('--sidebar-content-padding', '8px');
  globals.qstyle.setProperty('--sidebar-padding-b', window.visualViewport.height * 0.01 + "px");
  if (globals.Safari) {
    console.log("safari desktop");
    //globals.qstyle.setProperty('--sidebar-margin-offset-top', '1px !important');
    globals.qstyle.setProperty('--sidebar-grid', 'inline-grid');
  } else {
    globals.qstyle.setProperty('--sidebar-wrapper-max-height', "50vh");
    globals.qstyle.setProperty('--sidebar-transition-time', globals.sidebar_trans[0]);
    globals.qstyle.setProperty('--sidebar-text-transition-time', globals.sidebar_trans[1]);
  }
}

function openDesktopSidebars(sidebars){
  close_all_popups();
  close_all_sidebar_collapsibles();
  globals.curr_sidebar = sidebars[0];
  globals.qstyle.setProperty('--sidebar-padding-lr', window.visualViewport.width * 0.02 + "px");
  if (globals.Safari) {
    console.log("safari desktop");
    //document.querySelector(':root.safari').style.setProperty('--sidebar-margin-offset-left', '10px');
    globals.qstyle.setProperty('--sidebar-grid', 'inline-grid');
  } else {
    globals.qstyle.setProperty('--sidebar-wrapper-max-width', "40vw");
  }
}

export function openSidebar(sidebars, force=false) {
  //globals.root.classList.add('mobile');
  for (const sidebar of sidebars) {
    document.getElementById(sidebar).style.zIndex = "0";
  }
  document.getElementById(sidebars[0]).style.zIndex = "10";
  const direct = globals.Mobile ? 'height' : 'width';
  const sidebar = globals.style_var.getPropertyValue('--sidebar-wrapper-max-'+direct);
  const sidebar_margin_offset = window.getComputedStyle(document.body).getPropertyValue(globals.Mobile ? '--sidebar-margin-offset-top' : '--sidebar-margin-offset-left');
  console.log('open sidebar test', (globals.Safari && (sidebar_margin_offset !== '0 0 0 0' || sidebar_margin_offset !== '0')))
  if ((sidebar === "0%" || sidebar === "0vh" || sidebar === "0vw" || sidebar === "1px")
      //|| (globals.Safari && sidebar_margin_offset !== '0px' && sidebar_margin_offset !== '0')
      || (globals.Safari && globals.style_var.getPropertyValue('--sidebar-grid') === "none")
      || force) {
    globals.Mobile ? openMobileSidebars(sidebars) : openDesktopSidebars(sidebars);
  } else if (globals.Mobile && globals.curr_sidebar != sidebars[0]){
    openMobileSidebars(sidebars);
  }
}

window.addEventListener("click", function(e){
  if(document.getElementById("sidebarOptions").contains(e.target)){
    for(const btn of globals.sidebar_btn_list){
      if(document.getElementById(btn).contains(e.target)){
        const side = btn.slice(0,-3) + 'Sidebar';
        globals.sidebar_list.sort(function(x,y){ return x == side ? -1 : y == side ? 1 : 0 });
        openSidebar(globals.sidebar_list);
        break;
      }
    }
  }
})

window.addEventListener("change", function(e){
  if(globals.curr_sidebar!='none'){
    globals.sidebar_list.sort(function(x,y){ return x == curr_sidebar ? -1 : y == curr_sidebar ? 1 : 0; });
    closeSidebar();
    openSidebar(globals.sidebar_list, true);
  }
});