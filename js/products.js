// JavaScript для работы слайдера
document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".vehi-thumb");
    const mainImage = document.querySelector(".vehi-main-image img.active");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Убираем активный класс у всех
            thumbnails.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // Меняем изображение в главном блоке
            const newSrc = this.querySelector("img").src;
            mainImage.src = newSrc;
        });
    });
});

// Этот скрипт откроет изображение в увеличенном виде при клике:
document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".vehi-thumb img"); // Миниатюры
    const mainImage = document.querySelector(".vehi-main-image img.active"); // Главное фото
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".vehi-lightbox .close");
    const prevBtn = document.querySelector(".vehi-lightbox .prev");
    const nextBtn = document.querySelector(".vehi-lightbox .next");

    let images = []; // Массив путей к изображениям
    let currentIndex = 0;

    // Заполняем массив изображениями из миниатюр
    thumbnails.forEach((thumb, index) => {
        images.push(thumb.src);
        thumb.addEventListener("click", function () {
            currentIndex = index;
        });
    });

    // Открытие лайтбокса при клике на главное фото
    mainImage.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        currentIndex = images.indexOf(this.src); // Определяем текущий индекс
    });

    // Закрытие лайтбокса
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg && e.target !== prevBtn && e.target !== nextBtn) {
            lightbox.style.display = "none";
        }
    });

    // Функция переключения изображений
    function showImage(index) {
        if (index >= images.length) currentIndex = 0;
        else if (index < 0) currentIndex = images.length - 1;
        else currentIndex = index;

        lightboxImg.src = images[currentIndex];
    }

    // Клики по кнопкам "вперед" и "назад"
    prevBtn.addEventListener("click", function () {
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener("click", function () {
        showImage(currentIndex + 1);
    });

    // Добавляем поддержку свайпа на мобильных устройствах
    let touchStartX = 0;
    let touchEndX = 0;

    lightboxImg.addEventListener("touchstart", function (e) {
        touchStartX = e.changedTouches[0].clientX;
    });

    lightboxImg.addEventListener("touchend", function (e) {
        touchEndX = e.changedTouches[0].clientX;

        if (touchStartX - touchEndX > 50) {
            // Свайп влево (следующее изображение)
            showImage(currentIndex + 1);
        } else if (touchEndX - touchStartX > 50) {
            // Свайп вправо (предыдущее изображение)
            showImage(currentIndex - 1);
        }
    });

    // Добавляем переключение клавишами ← и →
    document.addEventListener("keydown", function (e) {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowLeft") showImage(currentIndex - 1);
            if (e.key === "ArrowRight") showImage(currentIndex + 1);
            if (e.key === "Escape") lightbox.style.display = "none";
        }
    });
});
