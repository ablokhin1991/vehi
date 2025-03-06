document.querySelector('.left-arrow').addEventListener('click', function() {
    const sliderContent = document.querySelector('.slider-content');
    sliderContent.style.transform = 'translateX(0)';
  });
  
  document.querySelector('.right-arrow').addEventListener('click', function() {
    const sliderContent = document.querySelector('.slider-content');
    sliderContent.style.transform = 'translateX(-50%)';
  });
  