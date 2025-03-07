let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function goToNextSlide() {
    // Скрываем текущий слайд
    slides[currentSlide].classList.remove('active');
    
    // Переход к следующему слайду
    currentSlide = (currentSlide + 1) % totalSlides;

    // Показываем следующий слайд
    slides[currentSlide].classList.add('active');
}

// Устанавливаем первый слайд как активный (начальная позиция)
slides[currentSlide].classList.add('active');

// Автоматическое переключение слайдов каждые 5 секунд
setInterval(goToNextSlide, 5000);
