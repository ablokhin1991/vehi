let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function goToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
}

function updateSliderPosition() {
    const offset = -currentSlide * 100; // Каждый слайд - 100% ширины
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Автоматическое переключение слайдов каждые 5 секунд
setInterval(goToNextSlide, 5000);
