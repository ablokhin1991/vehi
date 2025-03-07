document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider__items');
  const slides = document.querySelectorAll('.slider__item');
  const prevBtn = document.querySelector('.slider__control_prev');
  const nextBtn = document.querySelector('.slider__control_next');
  let index = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', function () {
    index = (index + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener('click', function () {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlider();
  }, 5000);
});
