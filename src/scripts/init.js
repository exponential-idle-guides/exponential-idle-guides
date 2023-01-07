import {init_color_scheme as color} from './color-scheme.js';
import { openSidebar } from './open-sidebars.js';
import { closeSidebar } from './close-sidebars.js';

const globals = {
  root: document.documentElement,
  query_root: document.querySelector(':root'),
  qstyle: document.querySelector(':root'),
  close_btn_list: ['GuideClose','HeaderClose','ResourceClose','ExtensionClose'],
  sidebar_btn_list: ['Guidebtn', 'Headerbtn', 'Resourcebtn', 'Extensionbtn'],
  sidebar_list: ['GuideSidebar','HeaderSidebar','ResourceSidebar','ExtensionSidebar'],
  curr_sidebar: 'none',
  Mobile: false,
  Navbar: false
}
globals.style_var = getComputedStyle(globals.query_root);
export {globals};

function Mobile_Setup(){
  if (screen.availHeight > screen.availWidth){
    document.querySelector(':root.mobile').style.setProperty('--sidebar-column-count', '2');
  } else {
    document.querySelector(':root.mobile').style.setProperty('--sidebar-column-count', '3');
  }
}

function Set_Device(new_class, old_class){
  globals.root.classList.add(new_class);
  try{globals.root.classList.remove(old_class);}catch(error){}
  
  globals.Mobile = (new_class == 'mobile');
  if (globals.Mobile){Mobile_Setup();}
}

window.onload = ()=>{
  color();

  const blockquote_list = document.getElementsByTagName('blockquote');
  console.log(blockquote_list.length);
  for(const blockquote of blockquote_list){
    blockquote.innerHTML = blockquote.innerHTML.replaceAll(String.fromCharCode(0x00ad),"");
  }

  if (navigator.userAgentData.mobile) {
    Set_Device("mobile","desktop");
  } else {
    Set_Device("desktop","mobile");
  }

  if(window.location.href.includes('/ranking-news')){
    globals.close_btn_list.push('RankingClose');
    globals.sidebar_btn_list.push('Rankingbtn');
    globals.sidebar_list.push('RankingSidebar');
  }
}

window.addEventListener("change", function(e){
  Mobile_Setup();
  if(globals.curr_sidebar!='none'){
    globals.sidebar_list.sort(function(x,y){ return x == curr_sidebar ? -1 : y == curr_sidebar ? 1 : 0; });
    closeSidebar();
    openSidebar(globals.sidebar_list, true);
  }
});