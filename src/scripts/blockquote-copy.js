import {remove_char} from './remove-char.js';

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