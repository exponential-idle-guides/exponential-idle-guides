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