export function remove_char(text, char){
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
  try {
    navigator.clipboard.writeText(text);
    console.log('Copy Success: \n' + text);
  } catch (err) {
    console.log('Copy Failure: \n' + toString(err));
  }
}
