function openpopup(display_id){
  if(document.getElementById(display_id).style.display == "block"){
    document.getElementById(display_id).style.display = "none";
  } else {
    document.getElementById(display_id).style.display = "block";
  }
}