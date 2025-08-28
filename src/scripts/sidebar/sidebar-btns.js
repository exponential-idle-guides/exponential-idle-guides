import { globals } from '../init.js';
import { openSidebar } from './open-sidebars.js';

const btn_span_content_class = "sidebar_title_wrappable_portion";

function sidebar_btn_span_contents(target) {
	$($(target).find(".sidebar_btn_contents")[0]).contents().each(function() {
		const e = $(this);
		if(e.prop("tagName") === "SPAN" || e.prop("tagName") === "DIV") {
			if (e.attr("class") === undefined ? false : e.attr("class").includes(btn_span_content_class)) {
				if(e.css("display") !== "inline-block") span_contents(e);
			} else e.addClass(btn_span_content_class)
			return;
		}
		if (e[0].nodeName !== "#text"){
			e.wrap('<span class="sidebar_title_wrappable_portion"></span>');
			return;
		}

		const final = e[0].textContent
			.split(" ")
			.map((t, i, arr) => {
				const t_old = t;
				if (t !== "" && i < arr.length - 1) {
					t = t + " ";
					if (i > 0) t = arr[0] === "" ? " " + t : t;
				}
				return t;
			})
			.filter((t) => t !== "")
			.map((t) => {
				const t_new = $('<span class="' + btn_span_content_class + '"></span>');
				t_new.html(t);
				return t_new;
			})
		$.each(e.attributes, function(idx, attr) {final[0].attr(attr.nodeName, attr.nodeValue);})
		e.replaceWith(final[0]);
		for (let i = final.length - 1; i > 0; i--) {
			final[i].insertAfter(final[0]);
		}
	})
}

export function init_sidebar_btns() {
	globals.sidebar_btn_list.forEach((id) => sidebar_btn_span_contents("#" + id));
}

function sidebar_btn_true_bounds(target) {
  return $(target).find("." + btn_span_content_class).toArray().reduce(function(bounds, curr) {
      const rect = $(curr)[0].getBoundingClientRect();
      return {
        x: Math.min(bounds.x, rect.x),
        y: Math.min(bounds.y, rect.y),
        width: bounds.x === Number.POSITIVE_INFINITY ? rect.width : Math.max(bounds.x + bounds.width, rect.x + rect.width) - Math.min(bounds.x, rect.x),
        height: bounds.y === Number.POSITIVE_INFINITY ? rect.height : Math.max(bounds.y + bounds.height, rect.y + rect.height) - Math.min(bounds.y, rect.y)
      }
    }, 
    {x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY,width:0,height:0}
  )
}

export function redim_all_sidebar_btns() {
	globals.sidebar_btn_list.forEach((id) => {
		const btn = $("#" + id);
		btn.css("width", "auto");
		const bounds = sidebar_btn_true_bounds("#" + id);
		const ul = $($("#" + id + " li.sidebar_btn_contents").parent()[0]);
		const px_to_num = (s) => Number(s.substring(0, s.length - 2));
		const padding = ["top", "right", "bottom", "left"].map((d) => px_to_num(btn.css("padding-"+ d)) + px_to_num(ul.css("padding-"+ d)));
		padding
		btn.css("width", (bounds.width + padding[1] + padding[3]) + "px");
		btn.css("height", (bounds.height + padding[0] + padding[2]) + "px");
	})
}

window.addEventListener('resize', function(e){
	if (globals.Navbar) redim_all_sidebar_btns();
	if (globals.curr_sidebar != "none") openSidebar(globals.sidebar_list, true);
})