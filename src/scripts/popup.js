const popup_states = {};
function hover_in_popup(display_id){
  document.getElementById(display_id).style.display = "block";
}

function hover_out_popup(display_id){
  if (!(display_id in popup_states)) popup_states[display_id] = false;
  if (!popup_states[display_id]){
    document.getElementById(display_id).style.display = "none";
  }
}

function click_popup(display_id){
  if (!(display_id in popup_states)) popup_states[display_id] = false;
  if(popup_states[display_id]){
    document.getElementById(display_id).style.display = "none";
  } else {
    document.getElementById(display_id).style.display = "block";
  }
  popup_states[display_id] = !popup_states[display_id];
}

export function close_all_popups(){
  Object.entries(popup_states).forEach(([key, value]) => {
    popup_states[key] = false;
    document.getElementById(key).style.display = "none";
  });
}

window.hover_in_popup = hover_in_popup;
window.hover_out_popup = hover_out_popup;
window.click_popup = click_popup;