document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.slider', {
    loop: true,  // Включаем зацикливание слайдов
    autoplay: {
      delay: 5000,  // Интервал 5 сек.
      disableOnInteraction: false,  // Слайдер будет продолжать работать даже после взаимодействия
    },
    speed: 1000,  // Скорость анимации перехода
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // Выбираем стандартный эффект прокрутки
    loopAdditionalSlides: 2, // Количество клонированных слайдов в цикле
    initialSlide: 0, // Начинаем с первого слайда
  });
});
