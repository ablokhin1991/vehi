// vehi/js/header.js

// ================== Burger Menu Logic ==================
let isMenuInitialized = false;

function initBurgerMenu() {
  // Проверяем существование элементов
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');
  const body = document.body;

  if (!burgerMenu || !nav || isMenuInitialized) return;

  // Помечаем меню как инициализированное
  isMenuInitialized = true;

  // ========== Обработчики событий ==========
  // Клик по бургеру
  burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  // Клик вне меню
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
      burgerMenu.classList.remove('active');
      nav.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });

  // Клик по ссылкам меню
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      nav.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });
}

// ================== Mutation Observer ==================
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      initBurgerMenu();
    }
  });
});

// Старт наблюдения за header-контейнером
const headerContainer = document.getElementById('header');
if (headerContainer) {
  observer.observe(headerContainer, {
    childList: true,
    subtree: true
  });
}

// Первичная инициализация при загрузке
document.addEventListener('DOMContentLoaded', initBurgerMenu);