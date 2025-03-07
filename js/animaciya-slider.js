document.addEventListener('DOMContentLoaded', function () {
    new SimpleAdaptiveSlider('.slider', {
      autoplay: true, // Автоматическое перелистывание
      interval: 5000, // Интервал в миллисекундах (5000 = 5 сек)
      swipe: true, // Поддержка свайпа на мобильных
    });
  });
  