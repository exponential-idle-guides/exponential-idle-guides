import { globals } from './init.js';

export function init_color_scheme(){
  // Select the button
  const btn = document.querySelector(".btn-color-scheme-toggle");

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Get the user's theme preference from local storage, if it's available
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme !== null) {
    setColorScheme(currentTheme);
  } else {
    setColorScheme(prefersDarkScheme ? 'dark' : 'light');
  }

  // Listen for a click on the button
  btn.addEventListener("click", function() {

    const mode = globals.root.classList.contains("dark-mode") ? "light" : "dark";

    setColorScheme(mode);

    localStorage.setItem("theme", mode);
  });

  function setColorScheme(type) {
    // If the user's preference in localStorage is dark...
    if (type == "dark") {
      // ...let's toggle the .dark-theme class on the body
      globals.root.classList.add("dark-mode");
      globals.root.classList.remove("light-mode");
    // Otherwise, if the user's preference in localStorage is light...
    } else if (type == "light") {
      // ...let's toggle the .light-theme class on the body
      globals.root.classList.add("light-mode");
      globals.root.classList.remove("dark-mode");
    }
  }
}
