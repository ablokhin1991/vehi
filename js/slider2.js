document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slider__item');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentSlide = 0;

  function showSlide(index) {
    const totalSlides = slides.length;
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }
    const offset = -100 * currentSlide;
    document.querySelector('.slider__items').style.transform = `translateX(${offset}%)`;
  }

  leftArrow.addEventListener('click', () => showSlide(currentSlide - 1));
  rightArrow.addEventListener('click', () => showSlide(currentSlide + 1));

  // Автопереключение слайдов (по желанию)
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 10000);
});
