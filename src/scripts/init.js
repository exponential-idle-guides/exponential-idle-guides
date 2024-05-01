import {init_color_scheme as color} from './color-scheme.js';
import { openSidebar } from './open-sidebars.js';
import { closeSidebar } from './close-sidebars.js';

// Returns true if the user is on a mobile device, false otherwise.
// Credit: woodsybread (Discord)
function isMobileUser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|avantgo|bada\/|blackberry|bb|cricket|dopod|duos|elaine|hiptop|hpwos|iemobile|iphone|ipod|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent) ||
         /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|co|c)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-6]0|os|ts|us)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| )|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ias\-|ig01|ik(sl|sm)|im1k|inno|ipaq|iris|ja(t|v)w|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|mc(01|21)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|ti)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30[0-2]|n50[0-2]|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-[1-8])|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(12|21|32)|qtek|r380|rm\-|s55\/|sa(ge|ma|mm|s\-|t)|sc(01|h\-\|oo|p\-)|sdk\/|se(c(\-|)|0|1)|sec0|semc|sg(h|b|d|s)|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te|tv)|vk(40|5[0-3]|\-[a-w])|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xe(\-|)|xi(no|to)|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
}

const globals = {
  root: document.documentElement,
  query_root: document.querySelector(':root'),
  qstyle: document.querySelector(':root').style,
  close_btn_list: ['GuideClose','HeaderClose','ResourceClose','ExtensionClose'],
  sidebar_btn_list: ['Guidebtn', 'Headerbtn', 'Resourcebtn', 'Extensionbtn'],
  sidebar_list: ['GuideSidebar','HeaderSidebar','ResourceSidebar','ExtensionSidebar'],
  curr_sidebar: 'none',
  Mobile: isMobileUser(),
  Navbar: false
}
globals.style_var = getComputedStyle(globals.query_root);
export {globals};

window.onload = ()=>{
  color();

  const blockquote_list = document.getElementsByTagName('blockquote');
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
  } else {
    let eqnarrays = document.querySelectorAll('[data-mml-node="mtable"]');
    if (eqnarrays !== undefined && eqnarrays.length != 0) {
      // array does not exist or is empty
      for (let i = 0; i < eqnarrays.length; i++) {
        let eqnarray = eqnarrays[i];
        let eqnarray_tr = eqnarray.querySelectorAll('[data-mml-node="mtr"]'),
          new_tr_innnerHTML = "";
        console.log(eqnarray_tr)
        if (eqnarray_tr.length > 1) {
          for (let j = 0; j < eqnarray.length; j++) {
            let curr_tr = eqnarray_tr[j];
            console.log(curr_tr)
            new_tr_innnerHTML += curr_tr.innerHTML;
            console.log(new_tr_innnerHTML)
            if (j > 0) {
              curr_tr.remove()
            }
            console.log(curr_tr)
          }
          eqnarray_tr[0].innerHTML = new_tr_innnerHTML;
          console.log(eqnarray_tr)
        }
      }
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