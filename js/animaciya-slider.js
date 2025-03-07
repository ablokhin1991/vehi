document.addEventListener('DOMContentLoaded', function () {
    new SimpleAdaptiveSlider('.slider', {
      autoplay: true,
      interval: 5000, // Время смены слайда
      swipe: true,    // Свайп на мобильных
    });
  });
  