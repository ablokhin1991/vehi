// Мобильное меню
document.querySelector('.nav-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Модальные окна
const modals = document.querySelectorAll('.modal');
const openModalButtons = document.querySelectorAll('[data-modal]');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modal;
        document.getElementById(`${modalId}-modal`).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
    });
});

// Закрытие по клику вне модалки
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Обработка формы
document.getElementById('request-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь код для отправки формы
    alert('Форма отправлена!');
    this.reset();
    document.querySelector('.modal').style.display = 'none';
});