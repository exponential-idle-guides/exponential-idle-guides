const root = document.documentElement;
const isMobile = navigator.userAgentData.mobile;

if (isMobile && !root.classList.contains('mobile')) {
    root.classList.add("mobile");
    root.classList.remove("desktop");
} else if(!isMobile && root.classList.contains('mobile')) {
    root.classList.add("desktop");
    root.classList.remove("mobile");
}
