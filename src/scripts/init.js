import {init_color_scheme as color} from './color-scheme.js';
import { openSidebar } from './open-sidebars.js';
import { closeSidebar } from './close-sidebars.js';

const globals = {
  root: document.documentElement,
  query_root: document.querySelector(':root'),
  qstyle: document.querySelector(':root').style,
  close_btn_list: ['GuideClose','HeaderClose','ResourceClose','ExtensionClose'],
  sidebar_btn_list: ['Guidebtn', 'Headerbtn', 'Resourcebtn', 'Extensionbtn'],
  sidebar_list: ['GuideSidebar','HeaderSidebar','ResourceSidebar','ExtensionSidebar'],
  curr_sidebar: 'none',
  Mobile: !(navigator.userAgentData.mobile),
  Navbar: false
}
globals.style_var = getComputedStyle(globals.query_root);
export {globals};

window.onload = ()=>{
  color();

  const blockquote_list = document.getElementsByTagName('blockquote');
  console.log(blockquote_list.length);
  for(const blockquote of blockquote_list){
    blockquote.innerHTML = blockquote.innerHTML.replaceAll(String.fromCharCode(0x00ad),"");
  }

  if (globals.Mobile) {
    globals.root.classList.add('mobile');
    const columns = screen.availHeight > screen.availWidth ? '2' : '3';
    //document.querySelector(':root.mobile').style.setProperty('--sidebar-column-count', columns);
  } else {
    globals.root.classList.add('desktop');
  }

  if(window.location.href.includes('/ranking-news')){
    globals.close_btn_list.push('RankingClose');
    globals.sidebar_btn_list.push('Rankingbtn');
    globals.sidebar_list.push('RankingSidebar');
  }
}

window.addEventListener("change", function(e){
  const columns = screen.availHeight > screen.availWidth ? '2' : '3';
  document.querySelector(':root.mobile').style.setProperty('--sidebar-column-count', columns);
  if(globals.curr_sidebar!='none'){
    globals.sidebar_list.sort(function(x,y){ return x == curr_sidebar ? -1 : y == curr_sidebar ? 1 : 0; });
    closeSidebar();
    openSidebar(globals.sidebar_list, true);
  }
});