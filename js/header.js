// vehi/js/header.js

let isMenuInitialized = false;
let observer = null;
let retryCount = 0;
const MAX_RETRIES = 5;

const initBurgerMenu = () => {
    if (isMenuInitialized) return;

    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    
    if (!burgerMenu || !nav) {
        if (retryCount < MAX_RETRIES) {
            retryCount++;
            setTimeout(initBurgerMenu, 300);
            return;
        }
        console.error('Элементы меню не найдены');
        return;
    }

    // Создание оверлея
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    // Управление состоянием меню
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

    // Назначение обработчиков
    burgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    overlay.addEventListener('click', closeMenu);
    
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    console.log('Меню инициализировано');
    isMenuInitialized = true;
};

// Наблюдатель за изменениями DOM
const setupObserver = () => {
    const headerContainer = document.getElementById('header');
    if (!headerContainer) return;

    observer = new MutationObserver(() => {
        if (!isMenuInitialized) initBurgerMenu();
    });

    observer.observe(headerContainer, {
        childList: true,
        subtree: true
    });
};

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    setupObserver();
    initBurgerMenu();
    
    // Резервный вызов
    setTimeout(() => {
        if (!isMenuInitialized) initBurgerMenu();
    }, 3000);
});