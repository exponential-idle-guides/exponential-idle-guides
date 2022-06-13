const root = document.querySelector(':root');
const isMobile = navigator.userAgentData.mobile;
window.alert("hello")
window.alert(isMobile)
if (isMobile && !root.classList.contains('mobile')) {
    root.classList.add("mobile");
    root.classList.remove("desktop");
} else if(!isMobile && root.classList.contains('mobile')) {
    root.classList.add("desktop");
    root.classList.remove("mobile");
}
