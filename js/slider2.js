document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.slider', {
    autoplay: {
      delay: 5000,  // Интервал 5 сек.
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true, // Зацикливание слайдов
  });
});
