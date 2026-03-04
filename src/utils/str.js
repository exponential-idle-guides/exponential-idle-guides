const slugify = require('slugify');

function strRepl(str) {
  return str ? slugify(str, { lower: true, strict: true }) : "";
}

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

function lowercase (str) {
  return str == undefined ? undefined: str.toLowerCase();
}

function remove_soft_hyphen (str) {
  return str.replaceAll(String.fromCharCode(0x00ad),"");
}

function replace_br (str) {
  return str.replaceAll("<br>", "\n");
}

module.exports = {
  strRepl,
  remove_char,
  lowercase,
  remove_soft_hyphen,
  replace_br
};