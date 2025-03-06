document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
      fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Ошибка загрузки ${file}:`, error));
    }
  
    loadComponent("header", "/vehi/header.html");
    loadComponent("footer", "/vehi/footer.html");
  });
  