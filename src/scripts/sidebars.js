import { globals } from './init.js';
import { close_all_popups } from './popup.js';
import { close_all_sidebar_collapsibles } from './collapsibles.js';

function Navigation(){
  $("#button_nav").toggleClass("open");
  $("#sidebarOptions").toggleClass("open");
  globals.Navbar = !(globals.Navbar);
}

function closeSidebar(){
  if(globals.Navbar){Navigation();}
  close_all_popups();
  $("#sidebar").removeClass("open");
}

export function init_sidebar_btns() {
	["button_nav", ...globals.sidebar_btn_list].forEach((id) => {
		const ele = document.getElementById(id);
		ele.innerHTML = ele.innerHTML.replaceAll(String.fromCharCode(0x00ad),"");
	})
}

function testSidebar(e, list){
  for(const a of list){
    if (document.getElementById(a).contains(e.target)){
      return true;
    }
  }
  return !document.getElementById("sidebarOptions").contains(e.target);
}

window.addEventListener('click', function(e){
  if ($("#sidebar").hasClass("open")
    && testSidebar(e, globals.close_btn_list)
    && !document.getElementById("ColorSchemeToggle").contains(e.target)){
    closeSidebar();
  } else if (document.getElementById("button_nav").contains(e.target)
    || document.getElementById("sidebarNavigation").contains(e.target)){
    Navigation();
  } else if(document.getElementById("sidebarOptions").contains(e.target)){
    for(const btn of globals.sidebar_btn_list){
      if(document.getElementById(btn).contains(e.target)){
        globals.sidebar_list.forEach((sidebar) => {
          document.getElementById(sidebar)
          $("#" + sidebar).removeClass("current_sidebar");
        }); 
        $("#" + btn.slice(0,-3) + "Sidebar").addClass("current_sidebar");
        $("#sidebar").addClass("open");
        close_all_popups();
        close_all_sidebar_collapsibles();
        break;
      }
    }
  }
})

window.closeSidebar = closeSidebar;