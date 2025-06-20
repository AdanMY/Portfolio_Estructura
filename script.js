// Elementos
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Detectar preferencia del usuario (si existe)
const userTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Función para aplicar el tema
function setTheme(theme) {
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeIcon.src = 'img/mode.svg';
  } else {
    html.setAttribute('data-theme', 'light');
    themeIcon.src = 'img/mode.svg';
  }
  localStorage.setItem('theme', theme);
}

// Inicializar tema al cargar la página
if (userTheme) {
  setTheme(userTheme);
} else if (systemPrefersDark) {
  setTheme('dark');
} else {
  setTheme('light');
}

// Cambiar tema al pulsar el botón
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});
