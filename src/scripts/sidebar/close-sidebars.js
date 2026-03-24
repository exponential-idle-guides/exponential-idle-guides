import { globals } from '../init.js';
import { close_all_popups } from '../popup.js';

function Navigation(nav_id='sidebarOptions'){
  const nav = document.getElementById('button_nav').style;
  const background = globals.Navbar ? '--pavarte-fill-sidebar' : '--pavarte-stroke-sidebar-base';
  const stroke = globals.Navbar ? '--pavarte-stroke-sidebar-base' : '--pavarte-fill-sidebar';
  const display = globals.Navbar ? 'none' : 'contents';

  nav.backgroundColor = globals.style_var.getPropertyValue(background);
  nav.color = globals.style_var.getPropertyValue(stroke);
  document.getElementById(nav_id).style.display = display;
  globals.Navbar = !(globals.Navbar);
}

export function closeSidebar(){
  const direct = globals.Mobile ? 'height' : 'width';
  const direct_units = globals.Mobile ? '0vh' : '0vw';
  const padding = globals.Mobile ? 'b' : 'lr';

  globals.curr_sidebar='none';
  globals.qstyle.setProperty('--sidebar-wrapper-max-'+direct, direct_units);
  globals.qstyle.setProperty('--sidebar-padding-'+padding, "0%");
  globals.qstyle.setProperty('--sidebar-content-padding', "0%");
  if (globals.Mobile){
    globals.qstyle.setProperty('--sidebar-transition-time', '0.5s');
    globals.qstyle.setProperty('--sidebar-text-transition-time', '0.3s');
  }
  if(globals.Navbar){Navigation();}
  close_all_popups();
}

function testSidebar(e, list, bool=true, stop=false){
  for(const a of list){
    if (document.getElementById(a).contains(e.target)){
      return bool
    }
  }
  return (stop ? true: testSidebar(e, globals.sidebar_list.concat(['sidebarOptions']), false, true))
}

window.addEventListener('click', function(e){
  const id = (globals.Mobile && globals.curr_sidebar!='none') ? globals.curr_sidebar : "TOCSidebar";
  const property = globals.Mobile ? 'height' : 'width';
  
  const sidebar_attr = window.getComputedStyle(document.body).getPropertyValue('--sidebar-wrapper-max-' + property);
  const sidebar_root = globals.style_var.getPropertyValue(property);
  if ((sidebar_attr !== "0%" && sidebar_attr !== "0vh" && sidebar_attr !== "0vw")
    && (String(sidebar_root) != "0%")
    && testSidebar(e, globals.close_btn_list)){
    closeSidebar();
  } else if (document.getElementById("button_nav").contains(e.target)
    || document.getElementById("sidebarNavigation").contains(e.target)){
    Navigation();
  }
})

window.closeSidebar = closeSidebar;