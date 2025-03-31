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
