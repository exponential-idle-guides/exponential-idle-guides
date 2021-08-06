// Select the button
const btn = document.querySelector(".btn-color-scheme-toggle");
const root = document.documentElement;

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

  const mode = root.classList.contains("dark-mode") ? "light" : "dark";

  setColorScheme(mode);

  localStorage.setItem("theme", mode);
});

function setColorScheme(type) {
  // If the user's preference in localStorage is dark...
  if (type == "dark") {
    // ...let's toggle the .dark-theme class on the body
    root.classList.add("dark-mode");
    root.classList.remove("light-mode");
  // Otherwise, if the user's preference in localStorage is light...
  } else if (type == "light") {
    // ...let's toggle the .light-theme class on the body
    root.classList.add("light-mode");
    root.classList.remove("dark-mode");
  }
}
