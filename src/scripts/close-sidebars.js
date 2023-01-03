import { globals } from './init.js';

function Navigation(nav_id='sidebarOptions'){
  const nav = document.getElementById('button_nav').style;
  const background = globals.Navbar ? '--pavarte-fill-sidebar' : '--pavarte-stroke-sidebar-base';
  const stroke = globals.Navbar ? '--pavarte-stroke-sidebar-base' : '--pavarte-fill-sidebar';
  const display = globals.Navbar ? 'none' : 'block';

  nav.backgroundColor = globals.style_var.getPropertyValue(background);
  nav.color = globals.style_var.getPropertyValue(stroke);
  document.getElementById(nav_id).style.display = display;

  globals.Navbar = !globals.Navbar;
}

export function closeSidebar(){
  const qstyle = globals.query_root.style;
  const direct = globals.Mobile ? 'height' : 'width';
  const padding = globals.Mobile ? 'b' : 'lr';
  const margin = globals.Mobile ? 'Top' : 'Left';

  globals.curr_sidebar='none';
  qstyle.setProperty('--sidebar-'+direct, "0%");
  qstyle.setProperty('--sidebar-padding-'+padding, "0%");
  qstyle.setProperty('--btn-margin'+margin, "0%");
  qstyle.setProperty('--sidebar-content-padding', "0%");
  if (globals.Mobile){
    qstyle.setProperty('--sidebar-transition-time', '0.5s');
    qstyle.setProperty('--sidebar-text-transition-time', '0.3s');
  }
  if(globals.Navbar){Navigation();}
}

function testSidebar(e, list, bool=true, stop=false){
  for(const a of list){
    if (document.getElementById(a).contains(e.target)){
      return bool
    }
  }
  return (stop ? true: testSidebar(e, globals.sidebar_list, false, true))
}

window.addEventListener('click', function(e){
  const id = globals.Mobile ? globals.curr_sidebar : "HeaderSidebar";
  const property = globals.Mobile ? '--sidebar-height' : '--sidebar-height';
  
  const sidebar = document.getElementById(id).offsetHeight;
  const sidebar_attr = window.getComputedStyle(document.body).getPropertyValue(property);
  const sidebar_root = globals.style_var.getPropertyValue(property);

  if((sidebar >= Number(sidebar_attr.match(/\d+/)[0])) 
    && (String(sidebar_root) != "0%")
    && testSidebar(e, globals.close_btn_list)){
    closeSidebar();
  }
})

window.addEventListener('click', function(e){
  if(document.getElementById("button_nav").contains(e.target)
    || document.getElementById("sidebarNavigation")){
    Navigation();
  }
})