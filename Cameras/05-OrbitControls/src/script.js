import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

const cursor = {
  x: 0,
  y: 0,
};

canvas.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect();
  cursor.x = (event.clientX - rect.left) / sizes.width - 0.5;
  cursor.y = -((event.clientY - rect.top) / sizes.height - 0.5);
});

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
scene.add(camera);

// OrbitControls
const controls = new OrbitControls(camera, canvas);
// controls.target.y = 2;
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update(); // Only needed if controls.enableDamping or auto-rotation is enabled

  // Orbit-style camera movement using polar coordinates
  const radius = 3; // distance from the center
  const angleX = cursor.x * Math.PI * 2;
  const angleY = cursor.y * Math.PI * 0.5; // limited vertically

  // camera.position.x = Math.sin(angleX) * Math.cos(angleY) * radius;
  // camera.position.z = Math.cos(angleX) * Math.cos(angleY) * radius;
  // camera.position.y = Math.sin(angleY) * radius;

  camera.lookAt(mesh.position);

  // Render the scene
  renderer.render(scene, camera);

  // Request next frame
  window.requestAnimationFrame(tick);
};

tick();
