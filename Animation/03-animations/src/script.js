import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.x = 3; // moves it 3 units to the right
// camera.position.z = 3; // keep some depth so it still sees the scene
camera.position.set(3,0,0); // Right-hand side of the object

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// let time = Date.now();

let clock = new THREE.Clock();

// gsap.to(mesh.position,{x:2 ,duration : 1, delay:1});
// gsap.to(mesh.position,{x:0 ,duration : 3, delay:3});



const tick = () => {
  // const currentTime = Date.now();
  // const delta = currentTime - time;
  // time = currentTime;
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);
	// mesh.rotation.y += elapsedTime;
  // mesh.position.z -= 0.01;
  mesh.position.y = Math.sin(elapsedTime);
  mesh.position.z = Math.cos(elapsedTime);
  camera.lookAt(mesh.position);
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};
tick();


const fb = () =>{
  gsap.to(mesh.position,{x:2 ,duration : 1, delay:1});
  gsap.to(mesh.position,{x:0 ,duration : 3, delay:3});
}
fb();