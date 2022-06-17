const toggleDiv = document.querySelector('.toggle');
const themeToggleInput = document.querySelector('#toggle1');
const html = document.querySelector('html');
let getThemeColor = localStorage.getItem('mode');

if (getThemeColor) {
  html.classList.add('dark-mode');
  themeToggleInput.checked = true;
}

function changeDark() {
  if (themeToggleInput.checked) {
    html.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark-mode');
  } else {
    html.classList.remove('dark-mode');
    localStorage.removeItem('mode');
  }
}
toggleDiv.addEventListener('click', changeDark);
