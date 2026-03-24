import { globals } from '../init.js';
import { openSidebar } from './open-sidebars.js';

export function init_sidebar_btns() {
	["button_nav", ...globals.sidebar_btn_list].forEach((id) => {
		const ele = document.getElementById(id);
		ele.innerHTML = ele.innerHTML.replaceAll(String.fromCharCode(0x00ad),"");
	})
}

window.addEventListener('resize', function(e){
	if (globals.curr_sidebar != "none") openSidebar(globals.sidebar_list, true);
})