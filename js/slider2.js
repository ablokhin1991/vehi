document.addEventListener('DOMContentLoaded', function () {
  let slider = document.querySelector('.slider__items');
  let slides = document.querySelectorAll('.slider__item');
  let index = 0;

  document.querySelector('.slider__control_next').addEventListener('click', function (e) {
    e.preventDefault();
    index = (index + 1) % slides.length;
    updateSlider();
  });

  document.querySelector('.slider__control_prev').addEventListener('click', function (e) {
    e.preventDefault();
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
});
