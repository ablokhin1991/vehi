import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class ProductViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.container.offsetWidth / this.container.offsetHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.loader = new GLTFLoader();
        
        this.init();
    }

    init() {
        // Настройка рендерера
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // Освещение
        const light = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add(light);

        // Камера
        this.camera.position.z = 5;

        // Загрузка модели
        this.loader.load('assets/models/door.glb', (gltf) => {
            this.model = gltf.scene;
            this.scene.add(this.model);
            this.animate();
        });
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        if(this.model) this.model.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
}

// Инициализация для всех 3D контейнеров
document.querySelectorAll('.model-viewer').forEach((el, idx) => {
    new ProductViewer(`model-${idx}`);
});