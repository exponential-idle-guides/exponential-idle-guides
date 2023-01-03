import { globals } from './init.js';

function Navigation(nav_id='sidebarOptions'){
  nav = document.getElementById('button_nav').style;
  background = globals.Navbar ? '--palette-fill-sidebar' : '--palette-stroke-sidebar-base';
  stroke = globals.Navbar ? '--palette-stroke-sidebar-base' : '--palette-fill-sidebar';
  display = globals.Navbar ? 'none' : 'block';

  nav.backgroundColor = globals.style_var.getPropertyValue(background);
  nav.color = globals.style_var.getPropertyValue(stroke);
  document.getElementById(nav_id).style.display = display;

  globals.Navbar = !globals.Navbar;
}

export function closeSidebar(){
  const qstyle = globals.query_root.style;
  direct = globals.Mobile ? 'height' : 'width';
  padding = globals.Mobile ? 'b' : 'lr';
  margin = globals.Mobile ? 'Top' : 'Left';

  globals.curr_sidebar='none';
  qstyle.setProperty('--sidebar-'+direct, "0%");
  qstyle.setProperty('--sidebar-padding-'+padding, "0%");
  qstyle.setProperty('--btn-margin'+margin, "0%");
  qstyle.setProperty('--sidebar-content-padding', "0%");
  if (Mobile){
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
  let id = globals.Mobile ? globals.curr_sidebar : "HeaderSidebar";
  let property = globals.Mobile ? '--sidebar-height' : '--sidebar-height';
  
  let sidebar = document.getElementById(id).offsetHeight;
  let sidebar_attr = window.getComputedStyle(document.body).getPropertyValue(property);
  let sidebar_root = globals.style_var.getPropertyValue(property);

  if((sidebar >= Number(sidebar_attr.match(/\d+/)[0])) 
    && (String(sidebar_root) != "0%")
    && testSidebar(e, globals.close_btn_list)){
    closeSidebar();
  }
})