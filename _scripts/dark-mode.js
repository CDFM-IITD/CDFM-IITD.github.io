/*
  site is light-only: always use light mode and clear any previously saved choice.
*/

{
  document.documentElement.dataset.dark = "false";
  try {
    window.localStorage.removeItem("dark-mode");
  } catch (error) {}
}
