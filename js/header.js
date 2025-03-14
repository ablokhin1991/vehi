// vehi/js/header.js

let menuObserver = null;
let overlayCreated = false;

const initBurgerMenu = () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');
  
  // Если элементы не найдены - выходим
  if (!burgerMenu || !nav) {
    console.log('Элементы меню ещё не загружены');
    return;
  }

  // Если наблюдатель уже запущен - отключаем
  if (menuObserver) {
    menuObserver.disconnect();
  }

  // Создаем оверлей только один раз
  if (!overlayCreated) {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    overlayCreated = true;
  }

  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;

  // Обработчики событий
  const toggleMenu = (e) => {
    e?.stopPropagation();
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    burgerMenu.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
  };

  // Удаляем старые обработчики
  burgerMenu.replaceWith(burgerMenu.cloneNode(true));
  overlay.replaceWith(overlay.cloneNode(true));

  // Назначаем новые обработчики
  burgerMenu.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  console.log('Меню успешно инициализировано');
};

// Наблюдатель за изменениями в контейнере хедера
const startObserving = () => {
  const headerContainer = document.getElementById('header');
  
  if (!headerContainer) {
    console.error('Контейнер хедера не найден');
    return;
  }

  menuObserver = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      initBurgerMenu();
    });
  });

  menuObserver.observe(headerContainer, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  });
};

// Инициализация при первой загрузке
document.addEventListener('DOMContentLoaded', () => {
  startObserving();
  initBurgerMenu();
});

// Резервная инициализация через 3 секунды
setTimeout(() => {
  if (!document.querySelector('.burger-menu')) {
    console.warn('Резервная инициализация меню');
    initBurgerMenu();
  }
}, 3000);