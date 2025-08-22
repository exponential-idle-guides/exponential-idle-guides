var opened_dict = {};
function hover_in_popup(display_id){
  document.getElementById(display_id).style.display = "block";
}

function hover_out_popup(display_id){
  if (!(display_id in opened_dict)) opened_dict[display_id] = false;
  if (!opened_dict[display_id]){
    document.getElementById(display_id).style.display = "none";
  }
}

function click_popup(display_id){
  if (!(display_id in opened_dict)) opened_dict[display_id] = false;
  if(opened_dict[display_id]){
    document.getElementById(display_id).style.display = "none";
  } else {
    document.getElementById(display_id).style.display = "block";
  }
  opened_dict[display_id] = !opened_dict[display_id];
}