const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Drawer menu toggle
navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Tutup menu kalau klik link di nav (supaya otomatis close drawer di mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    }
  });
});

// Fungsi toggle tema
function setTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
  }
  localStorage.setItem('theme', theme);
}

// Inisialisasi tema saat load halaman
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// Ganti tema pas tombol ditekan
themeToggle.addEventListener('click', () => {
  const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});