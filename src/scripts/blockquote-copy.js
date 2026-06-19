function remove_char(text, char){
  var index = text.indexOf(char);
  while (index >= 0) {
    switch(index){
      case 0:
        text = text.slice(1);
        break;
      case text.length:
        text = text.slice(0,text.length-1);
        break;
      default:
        text = text.substr(0,index) + text.substr(index+1, text.length);
    }
    index = text.indexOf(char);
  }
  return text
}

function copyText(id){
  var text = document.getElementById(id).innerText;
  text = text.replaceAll(String.fromCharCode(0x00ad),"");
  text = text.replaceAll(String.fromCharCode(8203),"");
  text = remove_char(text, String.fromCharCode(10));
  text = remove_char(text, String.fromCharCode(32));
  try {
    navigator.clipboard.writeText(text);
    console.log('Copy Success: \n' + text);
  } catch (err) {
    console.log('Copy Failure: \n' + toString(err));
  }
}

window.copyText = copyText;

// Grab all copy buttons and their associated copy targets.
// Discards all without an onClick, target for copy, or has an invalid target.
const copy_ids = $(".copy-btn").map(function() {
    console.log("$(this):", $(this));
    const onClick = $(this).attr("onClick");
    console.log("onClick:",onClick);
    if (onClick === undefined) {return "";}
    const res = /\s*copyText\s*\(\s*(['"])(?<id>(?:(?!\1).)*)\1\s*\)\s*;?\s*/.exec(onClick);
    console.log("res:", res);
    //if (res == null) {return "";}
    console.log(res === null ? "" : res.groups.id);
    return res === null ? "" : res.groups.id;
  }).get().filter(
    // Second condition should cover the first, but it's included in case.
    (id) => (id != "") && ($("#" + id).length != 0)
);

// Sets copied text to be the clean version instead of the displayed version on the site.
function clean_copy_text(event) {
  const selection = document.getSelection();
  event.clipboardData.setData(
    "text/plain",
    copyText(event.target.id) 
  );
  event.preventDefault();
}

// Add copy and cut Event Listeners for all valid copy targets to output clean copied text.
copy_ids.forEach((id) => {
  const ele = $("#" + id)[0];
  ele.addEventListener("copy", function(event) {
    clean_copy_text(event);
  });
  ele.addEventListener("cut", function(event) {
    clean_copy_text(event);
  });
})
