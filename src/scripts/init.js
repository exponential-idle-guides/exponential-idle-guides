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
    // all mtables in the document
    let eqnarrays = document.querySelectorAll('[data-mml-node="mtable"]');
    if (eqnarrays !== undefined && eqnarrays.length != 0) {
      // array does not exist or is empty
      for (let i = 0; i < eqnarrays.length; i++) {
        let eqnarray = eqnarrays[i];
        // all tr's within the mtables
        let eqnarray_tr = eqnarray.querySelectorAll('[data-mml-node="mtr"]')
        // if eqnarray_tr.length === 1, there is only one row so no need to unstack
        if (eqnarray_tr.length > 1) {
          console.log("eqnarray_tr");
          console.log(eqnarray_tr);
          let new_tr_innnerHTML = "";
          // offset between tr
          let tr_offset = 0;
          // loop each row in eqnarray_tr
          for (let j = 0; j < eqnarray_tr.length; j++) {
            let curr_tr = eqnarray_tr[j];
            console.log("curr_tr");
            console.log(curr_tr);
            // all td's within the tr
            let curr_tr_td = curr_tr.querySelectorAll('[data-mml-node="mtd"]');
            // offset between td within a tr
            let td_offset = 0;
            //loop each td of the tr
            for (let k = 0; k < curr_tr_td.length; k++) {
              const last_bool = (k === curr_tr_td.length - 1) && (j !== eqnarray_tr.length - 1);
              // current td of the tr
              let curr_td = curr_tr_td[k];
              // get html of the td including the tag (not just innerHTML)
              let curr_td_HTML = $(curr_td).wrap('<p/>').parent().html();
              $(curr_td).unwrap();
              // get `transform` attribute of the td
              let transform = curr_td.getAttribute('transform');
              // `transform` attr === null if no attr is present
              if (transform === null){
                console.log("curr_td.transform === null");
                const translate = [...curr_td_HTML.matchAll(/translate\((.*?),(.*?)\)/g)][0];
                console.log("curr_td.translate");
                console.log(translate);
                new_tr_innnerHTML += curr_td_HTML.replace('data-mml-node="mtd"', 'data-mml-node="mtd"' + ' transform="translate(' + (+translate[1] + tr_offset + td_offset).toString() + 'px)"');
                tr_offset += +translate[1];
                if(last_bool){
                  tr_offset += td_offset + curr_td.getBoundingClientRect().width;
                }
              } else {
                console.log("curr_td.transform");
                console.log(transform);
                const translate = [...transform.matchAll(/translate\((.*?),(.*?)\)/g)][0];
                console.log("curr_td.translate");
                console.log(translate);
                new_tr_innnerHTML += curr_td_HTML.replace(translate[0], translate[0].replace(translate[1], (+translate[1] + tr_offset).toString()));
                console.log("curr_td.transform");
                console.log(transform.replace(translate[0], translate[0].replace(translate[1], (+translate[1] + tr_offset).toString() + "px")));
                td_offset = +translate[1];
                console.log("td_offset");
                console.log(td_offset);
                if(last_bool){
                  tr_offset += +translate[1] + +curr_td.getBoundingClientRect().width;
                }
              }
              if(last_bool){
                let curr_td_children = $(curr_td).children().last();
                console.log("curr_td_children");
                console.log(curr_td_children);
                let last_td = $(curr_td_children).last()
                console.log("last_td");
                console.log(last_td);
                let last_td_HTML = $(last_td).wrap('<p/>').parent().html();
                $(last_td).unwrap();
                console.log("last_td_HTML");
                console.log(last_td_HTML);
                let translate = [...last_td_HTML.matchAll(/translate\((.*?),(.*?)\)/g)][0];
                console.log("translate");
                console.log(translate);
                console.log("last_td.getBBox().width")
                console.log(last_td[0].getBoundingClientRect().width)
                tr_offset += +translate[1] + +((last_td[0].getBoundingClientRect().width).toString().replace('px', ''));
              }
            }
            console.log("tr_offset");
            console.log(tr_offset);
            console.log("new_tr_innnerHTML");
            console.log(new_tr_innnerHTML);
            if (j > 0) {
              curr_tr.remove()
            }
            console.log("curr_tr");
            console.log(curr_tr);
          }
          eqnarray_tr[0].innerHTML = new_tr_innnerHTML;
          console.log("final_eqnarray_tr");
          console.log(eqnarray_tr);
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