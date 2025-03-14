// Инициализация элементов
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const body = document.body;

// Обработчик клика по бургеру
burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Закрытие меню при клике вне области
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    });
});