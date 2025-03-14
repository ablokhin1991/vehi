// vehi/js/header.js

let isMenuInitialized = false;
let observer = null;

const initBurgerMenu = () => {
  if (isMenuInitialized) return;

  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');
  
  if (!burgerMenu || !nav) {
    console.log('Burger menu elements not found. Retrying...');
    return;
  }

  // Создаем оверлей
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  // Функции управления меню
  const toggleMenu = () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    burgerMenu.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  };

  // Обработчики событий
  burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  overlay.addEventListener('click', closeMenu);
  
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  console.log('Burger menu initialized successfully');
  isMenuInitialized = true;
};

// Наблюдатель для динамически загруженного контента
const setupObserver = () => {
  const headerContainer = document.getElementById('header');
  
  if (!headerContainer) {
    console.error('Header container not found');
    return;
  }

  observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (!isMenuInitialized) initBurgerMenu();
    });
  });

  observer.observe(headerContainer, {
    childList: true,
    subtree: true
  });
};

// Запуск при полной загрузке страницы
window.addEventListener('load', () => {
  setupObserver();
  initBurgerMenu();
  
  // Резервная инициализация
  setTimeout(() => {
    if (!isMenuInitialized) {
      console.warn('Fallback menu initialization');
      initBurgerMenu();
    }
  }, 5000);
});