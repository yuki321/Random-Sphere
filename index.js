'use strict';

window.addEventListener('DOMContentLoaded', init);

function init(){
    const WIDTH = 1000;
    const HEIGHT = 1000;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('canvas'),
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(WIDTH, HEIGHT);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 1000);
    // camera.position.set(-100, 150, 500);
    camera.position.set(0, 0, 1000);

    // Scene
    const scene = new THREE.Scene();
    const NUM_OF_WIDTH = 10;
    const NUM_OF_HEIGHT = 10;

    for(let i = 0; i < NUM_OF_HEIGHT; i++) {
        for(let j = 0; j < NUM_OF_WIDTH; j++) {
            // Geometry 半径,緯度分割数,経度分割数
            const geometry = new THREE.SphereGeometry(20, 40, 20);
            // Material
            // const material = new THREE.MeshNormalMaterial();
            let color = "0x" + Math.floor(Math.random() * 0xffffff).toString();
            const material = new THREE.MeshBasicMaterial({color: Number(color)});
            // Mesh
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(i*50-250, j*50-250);
            scene.add(mesh);
        }
    }
    animate();

    function animate(){
        renderer.render(scene, camera);
        requestAnimationFrame(animate);

    }

}




