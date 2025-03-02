/* script.js */

// Функциональность для Popup модального окна на всех страницах
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const requestBtn = document.getElementById('requestBtn');
    const closeBtn = document.querySelector('.close-btn');
  
    if (requestBtn) {
      requestBtn.addEventListener('click', function() {
        popup.style.display = 'block';
      });
    }
  
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
      });
    }
  
    window.addEventListener('click', function(e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  });
  
  // Пример обработки формы обратной связи
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Обработка данных формы (например, через AJAX)
      alert('Форма отправлена!');
    });
  }
  
  // Инициализация 3D-просмотра с использованием Three.js (если элемент присутствует)
  function init3DViewer() {
    const canvas = document.getElementById('3d-viewer');
    if (!canvas) return;
  
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
  
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;
  
    // Демонстрационная 3D модель (вращающийся куб)
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
  