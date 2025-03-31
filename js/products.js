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
    const mainImage = document.querySelector(".vehi-main-image img.active");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".vehi-lightbox .close");

    mainImage.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});
