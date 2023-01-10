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
  Mobile: navigator.userAgentData.mobile,
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
    globals.qstyle.setProperty('--sidebar-height', '0%');
    globals.qstyle.setProperty('--sidebar-width', '96%');
    globals.qstyle.setProperty('--sidebar-padding-lr', '2%');
    globals.qstyle.setProperty('--sidebar-column-gap', '3vw');
    const columns = screen.availHeight > screen.availWidth ? '2' : '3';
    globals.qstyle.setProperty('--sidebar-column-count', columns);
    globals.qstyle.setProperty('--sidebar-transition-direction', 'margin-top');
    globals.qstyle.setProperty('--btn-width', '30vw');
    globals.qstyle.setProperty('--font-size', 'max(60%, 48% + 1.2vmin)');
    globals.qstyle.setProperty('--body-line-height', '1.4');
    globals.qstyle.setProperty('--section-max-width', '90vw');

    if(window.location.href!='https://mobile-js-split-fix--exponential-idle-guides.netlify.app/'){
      globals.qstyle.setProperty('--title-align', 'right');
    }
  }

  if(window.location.href.includes('/ranking-news')){
    globals.close_btn_list.push('RankingClose');
    globals.sidebar_btn_list.push('Rankingbtn');
    globals.sidebar_list.push('RankingSidebar');
  }
}

window.addEventListener("change", function(e){
  const columns = screen.availHeight > screen.availWidth ? '2' : '3';
  globals.qstyle.setProperty('--sidebar-column-count', columns);
  if(globals.curr_sidebar!='none'){
    globals.sidebar_list.sort(function(x,y){ return x == curr_sidebar ? -1 : y == curr_sidebar ? 1 : 0; });
    closeSidebar();
    openSidebar(globals.sidebar_list, true);
  }
});