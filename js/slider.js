let currentSlide = 0;
const slides = document.querySelectorAll('.slider-content > div');
const dots = document.querySelectorAll('.dot');

// Функция для переключения слайдов
function changeSlide() {
  // Скрываем текущий слайд
  slides[currentSlide].style.display = 'none';
  dots[currentSlide].classList.remove('active');

  // Переходим к следующему слайду
  currentSlide = (currentSlide + 1) % slides.length;

  // Показываем следующий слайд
  slides[currentSlide].style.display = 'flex';
  dots[currentSlide].classList.add('active');
}

// Функция для переключения слайдов по клику на кружки
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Скрываем текущий слайд
    slides[currentSlide].style.display = 'none';
    dots[currentSlide].classList.remove('active');

    // Устанавливаем новый активный слайд
    currentSlide = index;

    // Показываем новый слайд
    slides[currentSlide].style.display = 'flex';
    dots[currentSlide].classList.add('active');
  });
});

// Изначально показываем первый слайд
slides[0].style.display = 'flex';
dots[0].classList.add('active');

// Автоматическая смена слайдов каждые 5 секунд
setInterval(changeSlide, 5000);
