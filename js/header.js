// Обновленный JS
document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');
  const body = document.body;
  const overlay = document.createElement('div');
  
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
});