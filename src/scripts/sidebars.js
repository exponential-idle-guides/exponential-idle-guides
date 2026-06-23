import { globals } from './init.js';
import { close_all_popups } from './popup.js';
import { close_all_sidebar_collapsibles } from './collapsibles.js';

function Navigation(){
  $("#button_nav").toggleClass("open");
  $("#sidebarOptions").toggleClass("open");
  if ($("#sidebar").hasClass("open")) {
    $("#sidebar").removeClass("open");
    close_all_popups();
    close_all_sidebar_collapsibles();
  }
  globals.Navbar = !(globals.Navbar);
}

function testSidebar(e, list){
  for(const a of list){
    if (document.getElementById(a).contains(e.target)){
      return true;
    }
  }
  return !(document.getElementById("sidebarButtons").contains(e.target) || document.getElementById("sidebars").contains(e.target));
}

window.addEventListener('click', function(e){
  if ($("#sidebar").hasClass("open")
    && testSidebar(e, globals.close_btn_list)
    && !document.getElementById("ColorSchemeToggle").contains(e.target)
  ){
    if(globals.Navbar){Navigation();}
    close_all_popups();
    close_all_sidebar_collapsibles();
    $("#sidebar").removeClass("open");
  } else if (document.getElementById("button_nav").contains(e.target)
    || document.getElementById("sidebarNavigation").contains(e.target)
  ){
    Navigation();
  } else if(document.getElementById("sidebarOptions").contains(e.target)){
    $(".current_sidebar").removeClass("current_sidebar");
    for(const btn of globals.sidebar_btn_list){
      if(document.getElementById(btn).contains(e.target)){
        $("#" + btn.slice(0,-3) + "Sidebar").addClass("current_sidebar");
        break;
      }
    }
    $("#sidebar").addClass("open");
    close_all_popups();
    close_all_sidebar_collapsibles();
  }
})