/* script.js */

// Функциональность для Popup модального окна
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const requestBtn = document.getElementById('requestBtn');
    const closeBtn = document.querySelector('.close-btn');
  
    requestBtn.addEventListener('click', function() {
      popup.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    window.addEventListener('click', function(e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  });
  
  // Пример обработки формы обратной связи (здесь можно интегрировать AJAX и валидацию CAPTCHA)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Обработка данных формы и AJAX-запрос
    alert('Форма отправлена!');
  });
  
  // Инициализация 3D‑просмотра с использованием библиотеки Three.js
  function init3DViewer() {
    const canvas = document.getElementById('3d-viewer');
    if (!canvas) return;
  
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
  
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;
  
    // Простая геометрия для демонстрации 3D модели
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x52bc4a, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
  
  document.addEventListener('DOMContentLoaded', init3DViewer);
  