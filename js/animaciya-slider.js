document.addEventListener('DOMContentLoaded', function () {
    // Проверяем, существует ли слайдер
    if (document.querySelector('.slider')) {
      new SimpleAdaptiveSlider('.slider', {
        autoplay: true,
        interval: 5000, // Интервал 5 сек.
      });
    }
  });
   