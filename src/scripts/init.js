import {initialize_color_scheme} from './color-scheme.js'

window.onload = ()=>{
  initialize_color_scheme();
  const blockquote_list = document.getElementsByTagName('blockquote');
  console.log(blockquote_list.length);
  for(const blockquote of blockquote_list){
    blockquote.innerHTML = blockquote.innerHTML.replaceAll(String.fromCharCode(0x00ad),"");
  }
}