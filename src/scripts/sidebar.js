const root = document.documentElement;

function openSidebar(sidebars,sidebarheaders) {
  for (const sidebar of sidebars) {document.getElementById(sidebar).style.zIndex="0";}
  document.getElementById(sidebars[0]).style.zIndex="10";
  
  if (getComputedStyle(root).getPropertyValue('--btn-marginLeft-width')==="0%" && getComputedStyle(root).getPropertyValue('--sidebar-width')==="0%") {
    maxwidth=0;maxheaderwidth=0;mainwidth=document.getElementById("sidebarmain").offsetWidth;
    for (const sidebar of sidebars) {document.getElementById(sidebar+"invis").style.width="auto";}
    for (const sidebar of sidebars) {if(document.getElementById(sidebar+"invis").offsetWidth>maxwidth){maxwidth=document.getElementById(sidebar+"invis").offsetWidth;}}
    for (const sidebar of sidebars) {document.getElementById(sidebar+"invis").style.width=0;}
    document.getElementById(sidebarheaders).style.width="auto";
    maxheaderwidth=document.getElementById(sidebarheaders).offsetWidth;
    document.getElementById(sidebarheaders).style.width="0%";

    if (maxwidth<=0 && maxheaderwidth<=0) {
      root.style.setProperty('--sidebar-width', 'auto');
      root.style.setProperty('--btn-marginLeft-width', 'auto');
    } else {
      if(maxheaderwidth >= window.visualViewport.width*0.26){output=maxheaderwidth+window.visualViewport.width*0.02;}
      else if(maxwidth >= window.visualViewport.width*0.26){output=window.visualViewport.width*0.26;}
      else {output=maxwidth;}
      if((output + mainwidth) >= window.visualViewport.width){output = window.visualViewport.width*0.96 - mainwidth;}
      root.style.setProperty('--sidebar-width', output+"px");
      root.style.setProperty('--btn-marginLeft-width', (output+window.visualViewport.width*0.04)+"px");
      root.style.setProperty('--sidebar-padding', window.visualViewport.width*0.02+"px");
    }
  }
}
function closeSidebar() {
  root.style.setProperty('--sidebar-width', "0%");
  root.style.setProperty('--btn-marginLeft-width', "0%");
  root.style.setProperty('--sidebar-padding', "0");
}
window.addEventListener('click', function(e){
  if (Math.round(document.getElementById("HeaderSidebar").offsetWidth-window.visualViewport.width*0.04)>=Number(window.getComputedStyle(document.body).getPropertyValue('--sidebar-width').match(/\d+/)[0]) && getComputedStyle(root).getPropertyValue('--sidebar-width')!=="0%") {
    bool=false;sidebarlist=['GuideSidebar','HeaderSidebar','ResourceSidebar','sidebarmain'];
    while(!bool){
      for(const sidebars of sidebarlist){
        if(bool){break;}
        else if(document.getElementById(sidebars).contains(e.target)){bool=true;}
      }
      if(!bool){break;}
    }
    if(bool){}else{closeSidebar();}
  }
})
function openpopup(display_id){
  if(document.getElementById(display_id).style.display==="block"){document.getElementById(display_id).style.display="none";}
  else{document.getElementById(display_id).style.display="block";}
}

function openSidebarList(){
  if (getComputedStyle(root).getPropertyValue('--btn-width')==="0%" && getComputedStyle(root).getPropertyValue('--sidebar-list-width')==="0%") {
    root.style.setProperty('--sidebar-list-width', "auto");
    root.style.setProperty('--btn-padding', "min(2vh, 15px) min(3vw, 20px)");
  }
}